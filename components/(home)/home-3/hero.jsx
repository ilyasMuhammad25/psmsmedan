import Image from "next/image";
import Link from "next/link";
import HeroBranding from "./ui/hero-branding";

export default function Hero() {
    return (
        <>
            <div
                className="optech-hero-section3 bg-cover"
                style={{ backgroundImage: "url(/assets/images/hero/psms4.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="optech-hero-content">
                                <h1>
                                  PSMS Medan Ayam Kinantan
                                </h1>
                            </div>
                        </div>
                        <div
                            className="col-lg-5 offset-lg-1 d-flex align-items-center"
                            data-aos="fade-up"
                            data-aos-duration={600}
                        >
                            <div className="optech-hero-content">
                                <p>
                                Classic with a modern twist and touch. Honoring heritage to shine through the new age</p>
                                <div className="optech-extra-mt">
                                    <div className="optech-btn-wrap">
                                        <Link
                                            className="optech-default-btn"
                                            data-text="PSMS STORE"
                                            href="/contact"
                                        >
                                            <span className="btn-wraper">
                                                PSMS STORE
                                            </span>
                                        </Link>
                                        <Link
                                            className="optech-default-btn optech-white-btn"
                                            data-text="Beli Tiket"
                                            href="/service"
                                        >
                                            <span className="btn-wraper">
                                                Beli Tiket
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="optech-hero-thumb3"
                        data-aos="fade-up"
                        data-aos-duration={800}
                    >
                        {/* <Image
                            height="0"
                            width="0"
                            sizes="100vw"
                            priority
                            src="/assets/images/hero/psms.jpg"
                            alt="hero"
                            className="h-auto w-100"
                        /> */}
                    </div>
                    {/* hero branding start */}
                    <HeroBranding />
                    {/* hero branding end */}
                </div>
            </div>
        </>
    );
}
