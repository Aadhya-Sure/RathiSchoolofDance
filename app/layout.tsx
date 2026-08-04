import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Rathi School of Dance | Ottawa";
const description = "Discover Bharatanatyam classes from beginner to post-Arangetram at Rathi School of Dance in Ottawa.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const ogImage = `${protocol}://${host}/og.png`;

  return {
    title,
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, type: "website", images: [{ url: ogImage, width: 1200, height: 630, alt: "Rathi School of Dance in Ottawa" }] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
