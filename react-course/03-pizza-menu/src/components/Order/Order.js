import React from "react";
import useCurrentTime from "hooks/useCurrentTime";
import OrderNow from "./OrderNow";

export default function Order() {
  const shopOpenTime = useCurrentTime()[1];

  return (
    <div className="container-fluid">
      {shopOpenTime >= 9 && shopOpenTime <= 16 ? (
        <OrderNow msg="We are online now, place your order by clicking the button below" />
      ) : (
        <OrderNow
          msg="Shop is closed! Come back during the Opening Hours 9am - 5pm"
          buttonClass="hidden"
        />
      )}
    </div>
  );
}
