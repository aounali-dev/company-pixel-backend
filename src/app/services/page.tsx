"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Filter } from "lucide-react";
import { services } from "@/data/services";
import Cta from "@/components/sections/Cta";
import "./services-page.css";

const CATEGORIES = ["All", "Development", "CMS", "Marketing", "Design", "Growth", "Creative", "E-Commerce", "Automation"];

export default function ServicesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const pageRef = useRef<HTMLElement>(null);

    const filteredServices = selectedCategory === "All"
        ? services
        : services.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

    // Scroll reveal for cards (re-runs whenever the filter changes)
    useEffect(() => {
        const root = pageRef.current;
        if (!root) return;
        root.classList.add("sp-js");

        const items = root.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)");
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
    }, [selectedCategory]);

    // Keep the active tab visible in the scrollable bar on small screens
    const handleSelect = (cat: string, el: HTMLButtonElement) => {
        setSelectedCategory(cat);
        el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    };

    return (
        <main className="sp-page" ref={pageRef}>
            <section className="sp-hero">
                <div className="sp-hero__bg" aria-hidden="true" />
                <div className="sp-wrap">
                    <div className="sp-hero__content">
                        <p className="sp-eyebrow sp-hero-anim" style={{ "--d": "0ms" } as React.CSSProperties}>
                            Our Services
                        </p>
                        <h1 className="sp-h1 sp-hero-anim" style={{ "--d": "120ms" } as React.CSSProperties}>
                            Everything You Need To <span>Launch And Grow Online.</span>
                        </h1>
                        <p className="sp-lead sp-hero-anim" style={{ "--d": "240ms" } as React.CSSProperties}>
                            From websites and web apps to SEO and automation, we handle design, development and growth so you can focus on your business.
                        </p>
                    </div>
                </div>
            </section>

            <div className="sp-filter-bar">
                <div className="sp-wrap sp-filter__wrap">
                    <div className="sp-filter__label">
                        <Filter size={16} />
                        <span>Filter:</span>
                    </div>
                    <div className="sp-tabs" role="tablist" aria-label="Service categories">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                role="tab"
                                aria-selected={selectedCategory === cat}
                                onClick={(e) => handleSelect(cat, e.currentTarget)}
                                className={`sp-tab ${selectedCategory === cat ? "active" : ""}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <section className="sp-list-section">
                <div className="sp-wrap">
                    {filteredServices.length === 0 ? (
                        <p className="sp-empty">No services in this category yet. Try another filter.</p>
                    ) : (
                        <div className="sp-grid" key={selectedCategory}>
                            {filteredServices.map((service, index) => (
                                <article
                                    key={service.id}
                                    id={service.id}
                                    className="sp-card"
                                    data-reveal
                                    style={{ "--d": `${(index % 2) * 100}ms` } as React.CSSProperties}
                                >
                                    <div className="sp-card__header">
                                        <span className="sp-card__category">{service.category}</span>
                                        <span className="sp-card__num">{String(index + 1).padStart(2, "0")}</span>
                                    </div>

                                    <h2>{service.title}</h2>
                                    <p className="sp-card__desc">{service.fullDesc}</p>

                                    <div className="sp-features">
                                        <h4>Key Capabilities</h4>
                                        <ul>
                                            {service.features.map((feature, idx) => (
                                                <li key={idx}>
                                                    <span className="sp-check">
                                                        <Check size={12} strokeWidth={3} />
                                                    </span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="sp-card__action">
                                        <Link href="/contact" className="sp-card__btn">
                                            Start Project
                                            <span className="sp-card__arrow">
                                                <ArrowUpRight size={16} />
                                            </span>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Cta />
        </main>
    );
}