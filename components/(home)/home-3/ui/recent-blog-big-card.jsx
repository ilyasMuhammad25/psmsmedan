import Image from "next/image";
import Link from "next/link";

export default function RecentBlogBigCard() {
    return (
        <>
            <div className="optech-blog-wrap bg-white border-0">
                <Link href="/blog-details">
                    <div className="optech-blog-thumb">
                        <Image
                            height="0"
                            width="0"
                            sizes="100vw"
                            src="/assets/images/blog/PSMS-Medan-Siap-Tantang-Tuan-Rumah-Dejan-FC-1728222314.jpg"
                            alt="thumb"
                        />
                    </div>
                </Link>
                <div className="optech-blog-content padding-medium">
                    <div className="optech-blog-meta">
                        <ul>
                            <li>
                                <Link href="/blog-details">Technology</Link>
                            </li>
                            <li>
                                <Link href="/blog-details">26 June 2023</Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/blog-details">
                        <h3>
                        PSMS Medan Siap Tantang Tuan Rumah Dejan FC
                        </h3>
                    </Link>
                    <Link className="optech-icon-btn" href="/blog-details">
                        <i className="icon-show ri-arrow-right-line" />
                        <span>Learn More</span>
                        <i className="icon-hide ri-arrow-right-line" />
                    </Link>
                </div>
            </div>
        </>
    );
}
