'use client'
import Image from "next/image";

type LogoProps = {
  dataColor?: "default" | "invert";
  className?: string; 
};

export default function Logo({ dataColor, className}: LogoProps) {
  const computedClass = `${dataColor === "invert" ? "invert" : ""} h-full ${className}`;

  return (
    <Image
      className={computedClass.trim()}
      src="/logo.webp"
      width={256}
      height={67}
      alt="Logo"
    />
  );
}
