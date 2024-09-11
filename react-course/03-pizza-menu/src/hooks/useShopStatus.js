import { useState, useEffect } from "react";
import useCurrentTime from "./useCurrentTime";

export default function useShopStatus() {
  const [time, getHour] = useCurrentTime();
  const [shopStat, setShopStat] = useState(null);

  useEffect(() => {
    getHour >= 9 && getHour <= 16
      ? setShopStat("We are Open!")
      : setShopStat("We are Closed!!");
  }, [time, getHour]);

  return [shopStat, getHour];
}
