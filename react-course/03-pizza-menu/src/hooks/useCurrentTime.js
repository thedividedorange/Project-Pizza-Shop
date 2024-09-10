import { useState, useEffect } from "react";

export default function useCurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const getHour = new Date().getHours();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return function () {
      clearInterval(intervalId);
    };
  }, []);

  return [time, getHour];
}
