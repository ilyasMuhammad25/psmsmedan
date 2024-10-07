"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { branding1 } from "@/data/data";
import Image from "next/image";

export default function HeroBranding() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        cssEase: "linear",
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <>
            <div className="optech-brand-section">
                <div className="optech-brand-title">
                    <p>
                        Mitra Kami
                    </p>
                </div>
                <Slider {...settings}>
                    {/* bradning logo start */}
                    {branding1?.map((item, i) => (
                        <div key={i} className="optech-brand-item">
                            <Image
                                height="0"
                                width="0"
                                sizes="100vw"
                                priority
                                src={item}
                                alt="brand"
                                className="h-100 w-auto"
                            />
                        </div>
                    ))}
                    {/* bradning logo end */}
                </Slider>
            </div>
        </>
    );
}
