import { useEffect, useState } from 'react';

export const useGlobalTime = () => {
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setMinutes(now.getMinutes());
      setSeconds(now.getSeconds());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { minutes, seconds };
};
