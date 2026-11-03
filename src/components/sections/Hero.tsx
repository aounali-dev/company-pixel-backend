"use client";

import { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import "./hero.css";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), { ssr: false });

const TITLE = ["We", "Build", "Digital", "Experiences", "That", "Move", "Businesses", "Forward."];
const OUTLINE = new Set(["Digital", "Experiences"]);

const STATS = [
    { value: 50, label: "Projects Delivered" },
    { value: 40, label: "Happy Clients" },
    { value: 3, label: "Years Experience" },
];

const SERVICES = [
    "Web Development",
    "WordPress",
    "Digital Marketing",
    "SEO",
    "Graphic Designing",
    "Video Editing",
];

function Counter({ to }: { to: number }) {
    const [val, setVal] = useState(0);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const dur = reduce ? 1 : 1800;
        const start = performance.now() + (reduce ? 0 : 1500);
        let raf = 0;

        const tick = (now: number) => {
            const p = Math.min(Math.max((now - start) / dur, 0), 1);
            setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [to]);

    return <>{val}+</>;
}

export default function Hero() {
    const [show3d, setShow3d] = useState(false);

    // 3D page paint hone ke baad load hota hai; kamzor device / reduce-motion par load hi nahi
    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const cores = navigator.hardwareConcurrency ?? 8;
        if (reduce || cores <= 2) return;
        const id = window.setTimeout(() => setShow3d(true), 400);
        return () => window.clearTimeout(id);
    }, []);

    return (
        <section className="hero" id="home">
            {/* Background layers */}
            <div className="hero__bg" aria-hidden="true">
                <div className="hero__grid" />
                <div className="hero__scene">{show3d && <HeroScene />}</div>
                <div className="hero__vignette" />
            </div>

            {/* Centered content */}
            <div className="hero__inner">
                <div className="hero__badge hero__fade" style={{ animationDelay: "0.1s" }}>
                    <span className="hero__dot" />
                    Welcome to PixelBackend
                </div>

                <h1 className="hero__title" aria-label="We Build Digital Experiences That Move Businesses Forward.">
                    {TITLE.map((w, i) => (
                        <Fragment key={i}>
                            <span className={cn("hero__word", OUTLINE.has(w) && "hero__word--outline")} aria-hidden="true">
                                <span style={{ "--i": i } as React.CSSProperties}>{w}</span>
                            </span>{" "}
                        </Fragment>
                    ))}
                </h1>

                <p className="hero__text hero__fade" style={{ animationDelay: "1.05s" }}>
                    Pixel Backend empowers brands and businesses with cutting-edge web development, modern design,
                    high-impact marketing, and custom software solutions designed for growth.
                </p>

                <div className="hero__actions hero__fade" style={{ animationDelay: "1.25s" }}>
                    <Link href="/contact" className="hero__btn hero__btn--primary">
                        Hire Us
                        <span className="hero__btn-icon">
                            <ArrowUpRight size={18} />
                        </span>
                    </Link>
                    <Link href="/services" className="hero__btn hero__btn--ghost">
                        Explore Services
                    </Link>
                </div>
            </div>

            {/* Stats */}
            <div className="hero__stats hero__fade" style={{ animationDelay: "1.45s" }}>
                {STATS.map((s) => (
                    <div key={s.label} className="hero__stat">
                        <strong>
                            <Counter to={s.value} />
                        </strong>
                        <span>{s.label}</span>
                    </div>
                ))}
            </div>

            {/* Services marquee */}
            <div className="hero__marquee" aria-hidden="true">
                <div className="hero__track">
                    {[0, 1].map((n) => (
                        <div className="hero__group" key={n}>
                            {SERVICES.map((s) => (
                                <Fragment key={s}>
                                    <span className="hero__item">{s}</span>
                                    <i className="hero__sep" />
                                </Fragment>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}