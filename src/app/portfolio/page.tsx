"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Filter } from "lucide-react";
import { webProjects, graphicProjects } from "@/data/portfolio";
import Cta from "@/components/sections/Cta";
import "./portfolio-page.css";

export default function PortfolioPage() {
    const [activeTab, setActiveTab] = useState<"web" | "graphics">("web");
    const pageRef = useRef<HTMLElement>(null);

    // Scroll reveal for cards (re-runs when the tab changes)
    useEffect(() => {
        const root = pageRef.current;
        if (!root) return;
        root.classList.add("pp-js");

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
    }, [activeTab]);

    return (
        <main className="pp-page" ref={pageRef}>
            <section className="pp-hero">
                <div className="pp-hero__bg" aria-hidden="true" />
                <div className="pp-wrap">
                    <div className="pp-hero__content">
                        <p className="pp-eyebrow pp-hero-anim" style={{ "--d": "0ms" } as React.CSSProperties}>
                            Our Portfolio
                        </p>
                        <h1 className="pp-h1 pp-hero-anim" style={{ "--d": "120ms" } as React.CSSProperties}>
                            Real Projects, <span>Real Results.</span>
                        </h1>
                        <p className="pp-lead pp-hero-anim" style={{ "--d": "240ms" } as React.CSSProperties}>
                            A look at the websites, web apps and designs we have built for our clients. Browse by category and open any project to see it live.
                        </p>
                    </div>
                </div>
            </section>

            <div className="pp-filter-bar">
                <div className="pp-wrap pp-filter__wrap">
                    <div className="pp-filter__label">
                        <Filter size={16} />
                        <span>Category:</span>
                    </div>
                    <div className="pp-tabs" role="tablist" aria-label="Portfolio categories">
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeTab === "web"}
                            onClick={() => setActiveTab("web")}
                            className={`pp-tab ${activeTab === "web" ? "active" : ""}`}
                        >
                            Web Development ({webProjects.length})
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeTab === "graphics"}
                            onClick={() => setActiveTab("graphics")}
                            className={`pp-tab ${activeTab === "graphics" ? "active" : ""}`}
                        >
                            Graphics Design ({graphicProjects.length})
                        </button>
                    </div>
                </div>
            </div>

            <section className="pp-list-section">
                <div className="pp-wrap">
                    {activeTab === "web" ? (
                        <div className="pp-grid" key="web">
                            {webProjects.map((project, index) => (
                                <article
                                    key={project.id}
                                    className="pp-card"
                                    data-reveal
                                    style={{ "--d": `${(index % 3) * 100}ms` } as React.CSSProperties}
                                >
                                    <div className="pp-card__img-box">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            priority={index < 2}
                                            className="pp-card__img"
                                        />
                                        <span className="pp-card__num">{project.num}</span>
                                        <span className="pp-card__client">{project.client}</span>
                                    </div>
                                    <div className="pp-card__body">
                                        <h2>{project.title}</h2>
                                        <p className="pp-card__desc">{project.description}</p>
                                        <div className="pp-tags">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx}>{tag}</span>
                                            ))}
                                        </div>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pp-card__link">
                                            Live Preview
                                            <span className="pp-card__arrow">
                                                <ArrowUpRight size={16} />
                                            </span>
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="pp-grid" key="graphics">
                            {graphicProjects.map((project, index) => (
                                <article
                                    key={project.id}
                                    className="pp-card"
                                    data-reveal
                                    style={{ "--d": `${(index % 3) * 100}ms` } as React.CSSProperties}
                                >
                                    <div className="pp-card__img-box">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            priority={index < 2}
                                            className="pp-card__img"
                                        />
                                        <span className="pp-card__num">{project.num}</span>
                                        <span className="pp-card__client">{project.category}</span>
                                    </div>
                                    <div className="pp-card__body">
                                        <h2>{project.title}</h2>
                                        <p className="pp-card__desc">Branding and marketing visuals designed to look consistent and get noticed across web and social media.</p>
                                        <div className="pp-tags">
                                            <span>Branding</span>
                                            <span>UI/UX</span>
                                            <span>Creative Assets</span>
                                        </div>
                                        <Link href="/contact" className="pp-card__link">
                                            Request A Design
                                            <span className="pp-card__arrow">
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