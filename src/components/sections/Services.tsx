import Link from "next/link";
import { ArrowUpRight, Code, Layout, TrendingUp, Palette, Search, Video, Check } from "lucide-react";
import { services } from "@/data/services";
import "./services-section.css";

const iconMap: Record<string, React.ReactNode> = {
    Code: <Code size={24} />,
    Layout: <Layout size={24} />,
    TrendingUp: <TrendingUp size={24} />,
    Palette: <Palette size={24} />,
    Search: <Search size={24} />,
    Video: <Video size={24} />,
};

export default function ServicesSection() {
    const featuredServices = services.slice(0, 6);

    return (
        <section className="ss-section">
            <div className="ss-wrap">
                <div className="ss-header">
                    <div>
                        <p className="ss-eyebrow">Comprehensive Digital Services</p>
                        <h2 className="ss-h2">
                            Modern Brands, <span>Exceptional Outcomes.</span>
                        </h2>
                    </div>
                    <p className="ss-sub">
                        We combine cutting-edge technology with strategic creativity to deliver complete digital solutions under one roof.
                    </p>
                </div>

                <div className="ss-grid">
                    {featuredServices.map((service, index) => (
                        <div key={service.id} className="ss-card" style={{ "--d": `${index * 0.08}s` } as React.CSSProperties}>
                            <div className="ss-card__top">
                                <span className="ss-card__icon">
                                    {iconMap[service.iconName] || <Code size={24} />}
                                </span>
                                <span className="ss-card__cat">{service.category}</span>
                            </div>

                            <h3>{service.title}</h3>
                            <p>{service.shortDesc}</p>

                            <ul className="ss-card__features">
                                {service.features.slice(0, 2).map((feat, idx) => (
                                    <li key={idx}>
                                        <span className="ss-check">
                                            <Check size={12} strokeWidth={3} />
                                        </span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <Link href={`/services#${service.id}`} className="ss-card__link">
                                Get Started
                                <span className="ss-card__arrow">
                                    <ArrowUpRight size={16} />
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="ss-footer">
                    <Link href="/services" className="ss-btn">
                        View All Services ({services.length})
                        <span className="ss-btn__icon">
                            <ArrowUpRight size={18} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}