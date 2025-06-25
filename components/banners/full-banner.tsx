"use client";
import Image from "next/image";
import Link from "next/link";

type FullBannerProps = {
  dataType: "image" | "video";
  dataGroup: number;
  className?: string;
  dataDevice: string;
};

type Banner = {
  title: string;
  src: string;
  href?: string;
  linkTitle?: string;
  description?: React.ReactNode;
  group: number;
  type: "image" | "video";
  width: number;
  height: number;
  device: "desktop" | "mobile";
};

export default function FullBanner({
  dataType,
  dataGroup,
  dataDevice,
  className,
}: FullBannerProps) {
  const banners: Banner[] = [
    {
      title: "banner image 1",
      src: "/main_banner.webp",
      href: "/foo",
      group: 1000,
      type: "image",
      width: 1920,
      height: 1080,
      description: <h1>Lorem ipsum dolor sit amer</h1>,
      linkTitle: "Lorem Ipsun dolor",
      device: "desktop",
    },
    {
      title: "banner image mobile",
      src: "/main_banner_mobile.webp",
      href: "/foo",
      group: 1000,
      type: "image",
      width: 768,
      height: 1024,
      description: <h1>Lorem ipsum dolor sit amer</h1>,
      linkTitle: "Lorem Ipsun dolor",
      device: "mobile",
    },
    {
      title: "video banner",
      src: "/video-banner.mp4",
      group: 3000,
      type: "video",
      width: 1920,
      height: 1080,
      device: "desktop",
    },
    {
      title: "video banner mobile",
      src: "/video-banner-mobile.mp4",
      group: 3000,
      type: "video",
      width: 768,
      height: 1024,
      device: "mobile",
    },
  ];

  const filtered = banners.filter(
    (b) =>
      b.group === dataGroup &&
      b.type === dataType &&
      b.device === dataDevice
  );

  return (
    <div className={className}>
      {dataType === "image"
        ? filtered.map((item) => (
            <div key={item.title} className="banner-container">
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.title}
              />
              {item.description && (
                <div className="description-container">
                  {item.description}
                  {item.linkTitle && item.href && (
                    <Link href={item.href} title={item.linkTitle}>
                      {item.linkTitle}
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))
        : filtered.map((item) => (
            <video
              key={item.title}
              autoPlay
              muted
              loop
              className="w-full h-auto"
            >
              <source src={item.src} type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          ))}
    </div>
  );
}
