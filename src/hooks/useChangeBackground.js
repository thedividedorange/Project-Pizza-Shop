import { useEffect } from "react";

export default function useBackgroundImage(location, bodyColor) {
  useEffect(() => {
    const backgroundPath = {
      "/": "assets/home-bg.png",
      "/pricing": "assets/home-bg.png",
      "/order-now": "assets/home-bg.png",
    };
    const path = backgroundPath[location.pathname] || "assets/home-bg.png";

    const changeBackground = (path) => {
      if (bodyColor.current) {
        bodyColor.current.setAttribute(
          "style",
          `background: url("${path}") no-repeat fixed center; background-size: cover;`
        );
      }
    };

    changeBackground(path);
  }, [location.pathname, bodyColor]);
}
