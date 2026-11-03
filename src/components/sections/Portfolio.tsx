import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { webProjects } from "@/data/portfolio";
import "./portfolio-section.css";

export default function PortfolioSection() {
    const featuredProjects = webProjects.slice(0, 6);

    return (
        <section className="ps-section">
            <div className="ps-wrap">
                <div className="ps-header">
                    <div>
                        <p className="ps-eyebrow">Featured Work</p>
                        <h2 className="ps-h2">
                            Web Development <span>Projects.</span>
                        </h2>
                    </div>
                    <p className="ps-sub">
                        Explore our recent digital masterpieces engineered with precision, high performance, and modern frameworks.
                    </p>
                </div>

                <div className="ps-grid">
                    {featuredProjects.map((project) => (
                        <div key={project.id} className="ps-card">
                            <div className="ps-card__img-box">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="ps-card__img"
                                />
                                <span className="ps-card__num">{project.num}</span>
                                <span className="ps-card__client">{project.client}</span>
                            </div>

                            <div className="ps-card__body">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="ps-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx}>{tag}</span>
                                    ))}
                                </div>

                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="ps-card__link">
                                    Live Preview
                                    <span className="ps-card__arrow">
                                        <ArrowUpRight size={16} />
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="ps-footer">
                    <Link href="/portfolio" className="ps-btn">
                        View All Projects ({webProjects.length})
                        <span className="ps-btn__icon">
                            <ArrowUpRight size={18} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}