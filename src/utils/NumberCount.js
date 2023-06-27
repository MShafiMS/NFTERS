import { useEffect, useState } from 'react';

const NumberCountAnimation = ({ targetCount, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(targetCount / (duration / 1000));
    const intervalDuration = duration / targetCount;

    if (targetCount <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount + 1;
        if (newCount >= targetCount) {
          clearInterval(timer);
          return targetCount;
        }
        return newCount;
      });
    }, intervalDuration);

    return () => {
      clearInterval(timer);
    };
  }, [targetCount, duration]);

  return <span>{count}</span>;
};

export default NumberCountAnimation