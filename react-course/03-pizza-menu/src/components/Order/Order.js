import React from "react";
import useShopStatus from "hooks/useShopStatus";
import OrderNow from "./OrderNow";

export default function Order() {
  const shopStatus = useShopStatus();
  const shopTime = shopStatus[1];

  return (
    <div className="container-fluid">
      {shopTime >= 9 && shopTime <= 16 ? (
        <OrderNow msg="We are online now, place your order by clicking the button below" />
      ) : (
        <OrderNow
          msg="Shop is closed! Come back during the Opening Hours 9am - 5pm"
          btnDisplay="true"
          class="hidden"
        />
      )}
    </div>
  );
}
