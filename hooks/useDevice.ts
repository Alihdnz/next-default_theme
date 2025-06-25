import { useEffect, useState } from "react";

export type DeviceType = "mobile" | "desktop";

export function useDevice(): DeviceType | null {
  const [device, setDevice] = useState<DeviceType | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setDevice(window.innerWidth < 768 ? "mobile" : "desktop");
      };

      handleResize(); 
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return device;
}