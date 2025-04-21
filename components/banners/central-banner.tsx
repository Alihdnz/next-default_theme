"use client"
import Image from "next/image";

type CentralBannerProps = {
    dataType: "image" | "video";
    dataGroup: number;
    className?: string;
};

export default function CentralBanner({ dataType, dataGroup, className }: CentralBannerProps) {



    type Banners = {
        title: string;
        src: string;
        href: string;
        group: number;
        type: string;
        width: number;
        height: number;
    };


    const banners: Banners[] = [
        { title: "banner image 1", src: "/central_banner.webp", href: "", group: 1000, type: "image", width: 600, height: 800 },
        { title: "banner image 2", src: "/central_banner.webp", href: "", group: 1000, type: "image", width: 600, height: 800 },
        { title: "banner image 3", src: "/central_banner.webp", href: "", group: 1000, type: "image", width: 600, height: 800 },
        { title: "banner image 4", src: "/central_banner.webp", href: "", group: 2000, type: "image", width: 600, height: 800 },
        { title: "banner image 5", src: "/central_banner.webp", href: "", group: 2000, type: "image", width: 600, height: 800 },
        { title: "banner image 6", src: "/central_banner.webp", href: "", group: 2000, type: "image", width: 600, height: 800 },
        { title: "banner image 7", src: "/central_banner.webp", href: "", group: 2000, type: "image", width: 600, height: 800 },
        { title: "banner image 8", src: "/central_banner.webp", href: "", group: 2000, type: "image", width: 600, height: 800 },
        { title: "banner image 9", src: "/central_banner.webp", href: "", group: 2000, type: "image", width: 600, height: 800 },
        { title: "video banner", src: "/video-banner.mp4", href: "", group: 3000, type: "video", width: 1920, height: 1080 },
    ];



    const filteredBanners = banners.filter(
        (item) => item.group === dataGroup && item.type === dataType
    );

    return (
        <div className={className}>
            {dataType === "image" ? (

                <div className="flex flex-wrap justify-center gap-2">
                    {filteredBanners.map((item) => (
                        <Image key={item.title}
                            src={item.src}
                            width={item.width}
                            height={item.height}
                            alt={item.title}
                        />
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
