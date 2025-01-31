import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const useAOS = ({
  duration = 800,
  once = true,
  easing = "ease-in-out",
  disable = "phone",
} = {}) => {
  useEffect(() => {
    AOS.init({ duration, once, easing, disable });
  }, [duration, once, easing, disable]);
};

export default useAOS;
