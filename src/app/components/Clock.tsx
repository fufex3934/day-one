'use client';

import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    // Correct cleanup function
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-lg font-mono">
      🕒 Current Time: {time.toLocaleTimeString()}
    </p>
  );
};

export default Clock;
