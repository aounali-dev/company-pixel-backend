"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Code, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSETS } from "@/lib/assets";
import "./about.css";

const POINTS = [
    "Development, design, marketing, SEO and video under one roof",
    "Solutions built around your actual requirements",
    "Clear communication from kickoff to launch",
];

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

export default function About() {
    const ref = useRef<HTMLElement>(null);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSeen(true);
                    io.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section ref={ref} id="about" className={cn("about", seen && "about--in")}>
            <div className="about__wrap">
                <div className="about__top">
                    {/* ---------- Founder visual ---------- */}
                    <div className="about__visual about__r" style={d(0.1)}>
                        <div className="about__panel">
                            <span className="about__orb" aria-hidden="true" />
                            <Image
                                src="/images/asad.png"
                                alt="Asad Ali - CEO and Founder of Pixel Backend"
                                fill
                                sizes="(max-width: 1023px) 90vw, 520px"
                                className="about__photo"
                            />

                            <div className="about__caption">
                                <h3 className="about__name">Asad Ali</h3>
                                <p className="about__role">CEO &amp; Founder, Pixel Backend</p>
                            </div>
                        </div>



                        <div className="about__chip about__chip--b">
                            <span className="about__chip-icon">
                                <PenTool size={18} />
                            </span>
                            <span>
                                <strong>Premium UI/UX</strong>
                                <em>Pixel-perfect design</em>
                            </span>
                        </div>
                    </div>

                    {/* ---------- Text ---------- */}
                    <div className="about__text">
                        <div className="about__eyebrow about__r" style={d(0)}>
                            About Pixel Backend
                        </div>

                        <h2 className="about__title about__r" style={d(0.1)}>
                            Your Ideas. <span>Our Digital Expertise.</span>
                        </h2>

                        <p className="about__p about__r" style={d(0.2)}>
                            Pixel Backend is a digital solutions company focused on helping businesses establish,
                            improve, and grow their presence online. We bring development, design, marketing, SEO,
                            video, and animation together under one roof.
                        </p>
                        {/* <p className="about__p about__r" style={d(0.3)}>
                            Whether you are launching a new business, refreshing an existing brand, or looking for a
                            stronger online presence, we create solutions around your actual requirements with
                            attention to detail and a modern mindset.
                        </p> */}

                        <ul className="about__points">
                            {POINTS.map((p, i) => (
                                <li key={p} className="about__r" style={d(0.4 + i * 0.1)}>
                                    <span className="about__check">
                                        <Check size={14} strokeWidth={3} />
                                    </span>
                                    {p}
                                </li>
                            ))}
                        </ul>

                        {/* Is button par click karne se /about page khulta hai */}
                        <Link href="/about" className="about__link about__r" style={d(0.75)}>
                            Learn More About Us
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}