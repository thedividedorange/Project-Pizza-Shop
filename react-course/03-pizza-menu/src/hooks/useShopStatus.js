import { useState, useEffect, useRef } from "react";
import useCurrentTime from "./useCurrentTime";

export default function useShopStatus() {
  const time = useCurrentTime();
  const ref = useRef(false);
  const [shopStat, setShopStat] = useState("Closed!");

  useEffect(() => {
    const currentHour = parseInt(time.split(":")[0]);

    if (currentHour >= 9 && currentHour <= 16) {
      setShopStat("Open!");
      ref.current = true;
    } else if (currentHour >= 17) {
      setShopStat("Closed!");
      ref.current = false;
    }
  }, [time]);

  return { time, shopStat };
}
