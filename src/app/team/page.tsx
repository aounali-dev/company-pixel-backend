"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { teamMembers } from "@/data/team";
import Cta from "@/components/sections/Cta";
import "./team-page.css";

export default function TeamPage() {
    const pageRef = useRef<HTMLElement>(null);

    // Smooth scroll-reveal for cards
    useEffect(() => {
        const root = pageRef.current;
        if (!root) return;
        root.classList.add("tp-js");

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
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        items.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <main className="tp-page" ref={pageRef}>
            <section className="tp-hero">
                <div className="tp-hero__bg" aria-hidden="true" />
                <div className="tp-wrap">
                    <div className="tp-hero__content">
                        <p className="tp-eyebrow tp-hero-anim" style={{ "--d": "0ms" } as React.CSSProperties}>
                            Our Team
                        </p>
                        <h1 className="tp-h1 tp-hero-anim" style={{ "--d": "120ms" } as React.CSSProperties}>
                            Meet The People <span>Who Build Your Product.</span>
                        </h1>
                        <p className="tp-lead tp-hero-anim" style={{ "--d": "240ms" } as React.CSSProperties}>
                            Developers, designers and problem solvers working together on every project. You talk directly to the people doing the work.
                        </p>
                    </div>
                </div>
            </section>

            <section className="tp-list-section">
                <div className="tp-wrap">
                    <div className="tp-grid">
                        {teamMembers.map((member, index) => (
                            <article
                                key={member.id}
                                className="tp-card"
                                data-reveal
                                style={{ "--d": `${(index % 3) * 100}ms` } as React.CSSProperties}
                            >
                                <div className="tp-card__img-box">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        priority={index < 2}
                                        className="tp-card__img"
                                    />
                                    <div className="tp-card__overlay" />
                                    <span className="tp-card__num">{String(index + 1).padStart(2, "0")}</span>
                                    <span className="tp-card__role-badge">{member.role}</span>
                                </div>

                                <div className="tp-card__body">
                                    <h2>{member.name}</h2>
                                    <p className="tp-card__desc">{member.bio}</p>

                                    <Link href="/contact" className="tp-card__link">
                                        Work With {member.name.split(" ")[0]}
                                        <span className="tp-card__arrow">
                                            <ArrowUpRight size={16} />
                                        </span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Cta />
        </main>
    );
}