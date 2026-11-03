import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.pixelbackend.com"),
    title: {
        default: "Pixel Backend | Digital Agency in Dera Ismail Khan",
        template: "%s | Pixel Backend",
    },
    description:
        "Pixel Backend is a digital agency offering web development, WordPress, digital marketing, graphic design, SEO and video editing.",
    openGraph: {
        title: "Pixel Backend | Digital Agency",
        description: "We build digital experiences that move businesses forward.",
        url: "https://www.pixelbackend.com",
        siteName: "Pixel Backend",
        type: "website",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}