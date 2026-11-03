"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Code, ShieldCheck, Zap } from "lucide-react";
import { teamMembers } from "@/data/team";
import Cta from "@/components/sections/Cta";
import "./about-page.css";

export default function AboutPage() {
    const pageRef = useRef<HTMLElement>(null);

    // Smooth scroll-reveal (runs once per element, light on performance)
    useEffect(() => {
        const root = pageRef.current;
        if (!root) return;
        root.classList.add("ap-js");

        const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
        if (!("IntersectionObserver" in window)) {
            items.forEach((el) => el.classList.add("is-in"));
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-in");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        items.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <main className="ap-page" ref={pageRef}>
            {/* Hero Section */}
            <section className="ap-hero">
                <div className="ap-hero__bg" aria-hidden="true" />
                <div className="ap-wrap">
                    <div className="ap-hero__content">
                        <p className="ap-eyebrow ap-hero-anim" style={{ "--d": "0ms" } as React.CSSProperties}>
                            About Pixel Backend
                        </p>
                        <h1 className="ap-h1 ap-hero-anim" style={{ "--d": "120ms" } as React.CSSProperties}>
                            We Build Software That <span>Scales With You.</span>
                        </h1>
                        <p className="ap-lead ap-hero-anim" style={{ "--d": "240ms" } as React.CSSProperties}>
                            Pixel Backend is a development team focused on fast, secure web applications, APIs and clean interfaces for growing businesses.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="ap-section">
                <div className="ap-wrap">
                    <div className="ap-split">
                        <div className="ap-split__text" data-reveal>
                            <p className="ap-section-tag">Who We Are</p>
                            <h2>Strong Backend. Sharp Frontend.</h2>
                            <p>
                                We started Pixel Backend to close the gap between solid server-side engineering and interfaces people enjoy using. Every project gets one team that handles both.
                            </p>
                            <p>
                                From REST APIs and databases to React and Next.js frontends, we plan, build and launch products that are easy to maintain and ready to grow.
                            </p>
                            <div className="ap-checklist">
                                <div className="ap-check-item">
                                    <span className="ap-check-icon"><Check size={14} strokeWidth={3} /></span>
                                    <span>Secure, clean and well-documented code</span>
                                </div>
                                <div className="ap-check-item">
                                    <span className="ap-check-icon"><Check size={14} strokeWidth={3} /></span>
                                    <span>Cloud deployment with CI/CD pipelines</span>
                                </div>
                                <div className="ap-check-item">
                                    <span className="ap-check-icon"><Check size={14} strokeWidth={3} /></span>
                                    <span>Responsive UI with smooth animations</span>
                                </div>
                            </div>
                        </div>

                        <div className="ap-split__box">
                            <div className="ap-stat-card" data-reveal style={{ "--d": "100ms" } as React.CSSProperties}>
                                <span className="ap-stat-num">Full-Stack</span>
                                <span className="ap-stat-label">One team for frontend, backend and deployment</span>
                            </div>
                            <div className="ap-stat-card" data-reveal style={{ "--d": "220ms" } as React.CSSProperties}>
                                <span className="ap-stat-num">Ongoing</span>
                                <span className="ap-stat-label">Support and maintenance after launch</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars / Features Section */}
            <section className="ap-section ap-section--dark">
                <div className="ap-wrap">
                    <div className="ap-header-center" data-reveal>
                        <p className="ap-section-tag">Our Core Pillars</p>
                        <h2>What We Stand For.</h2>
                    </div>

                    <div className="ap-pillars-grid">
                        <div className="ap-pillar-card" data-reveal>
                            <div className="ap-pillar-icon"><Code size={24} /></div>
                            <h3>Modern Tech Stack</h3>
                            <p>React, Next.js, Node.js, NestJS and Laravel, chosen to fit your project, not the other way round.</p>
                        </div>
                        <div className="ap-pillar-card" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
                            <div className="ap-pillar-icon"><ShieldCheck size={24} /></div>
                            <h3>Secure By Default</h3>
                            <p>Proper authentication, validated inputs, typed database schemas and protected API endpoints.</p>
                        </div>
                        <div className="ap-pillar-card" data-reveal style={{ "--d": "240ms" } as React.CSSProperties}>
                            <div className="ap-pillar-icon"><Zap size={24} /></div>
                            <h3>Built For Speed</h3>
                            <p>Small bundles, server-side rendering and optimized assets so your site loads fast on any device.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Snapshot Preview */}
            <section className="ap-section">
                <div className="ap-wrap">
                    <div className="ap-header-between" data-reveal>
                        <div>
                            <p className="ap-section-tag">Leadership & Team</p>
                            <h2>The People Behind The Code.</h2>
                        </div>
                        <Link href="/team" className="ap-outline-btn">
                            View Full Team
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    <div className="ap-team-grid">
                        {teamMembers.slice(0, 3).map((member, i) => (
                            <div
                                key={member.id}
                                className="ap-team-card"
                                data-reveal
                                style={{ "--d": `${i * 120}ms` } as React.CSSProperties}
                            >
                                <div className="ap-team__img-box">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="ap-team__img"
                                    />
                                    <span className="ap-team__badge">{member.role}</span>
                                </div>
                                <div className="ap-team__body">
                                    <h3>{member.name}</h3>
                                    <p>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <Cta />
        </main>
    );
}