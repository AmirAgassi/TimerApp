import { useState, useEffect, useRef } from 'react';

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const lastTickRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateTimer = () => {
      if (!isRunning || !startTimeRef.current) return;

      const now = Date.now();
      if (!lastTickRef.current) lastTickRef.current = now;

      const delta = Math.floor((now - lastTickRef.current) / 1000);
      if (delta >= 1) {
        setTime(prevTime => prevTime + delta);
        lastTickRef.current = now;
      }

      animationFrameId = requestAnimationFrame(updateTimer);
    };

    if (isRunning) {
      startTimeRef.current = Date.now();
      lastTickRef.current = startTimeRef.current;
      updateTimer();
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    startTimeRef.current = null;
    lastTickRef.current = null;
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  return {
    time,
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    formatTime,
  };
}; 