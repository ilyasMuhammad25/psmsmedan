import { notFound } from "next/navigation";

export const metadata = {
    title: "404",
};

export default function NotFoundPage() {
    return notFound();
}
