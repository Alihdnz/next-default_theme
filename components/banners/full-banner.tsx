"use client"
import Image from "next/image";
import Link from "next/link";


type FullBannerProps = {
  dataType: "image" | "video";
  dataGroup: number;
  className?: string;
};

export default function FullBanner({ dataType, dataGroup, className}: FullBannerProps) {



  type Banners = {
    title: string;
    src: string;
    href: string;
    linkTitle?: string;
    description?: React.ReactNode;
    group: number;
    type: string;
    width: number;
    height: number;

  };


  const banners: Banners[] = [
    { title: "banner image 1", src: "/main_banner.webp", href: "", group: 1000, type: "image", width: 1920, height: 1080, description: <h1>Lorem ipsum dolor sit amer</h1>, linkTitle: "Lorem Ipsun dolor" },
    { title: "video banner", src: "/video-banner.mp4", href: "", group: 3000, type: "video", width: 1920, height: 1080 },
  ];



  const filteredBanners = banners.filter(
    (item) => item.group === dataGroup && item.type === dataType
  );

  return (
    <div className={className}>
      {dataType === "image" ? (

        <div>
          {filteredBanners.map((item) => (

            <div key={item.title} className="banner-container">
              <Image src={item.src} width={item.width} height={item.height} alt={item.title}></Image>
              <div className="description-container">
                {item.description}
                <Link href={item.href} title={item.linkTitle} >{item.linkTitle}</Link>
              </div>
              
            </div>
           

          ))}
        </div>

      ) : (
        <div>
          {filteredBanners.map((item) => (
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
      )}
    </div>
  );
}
