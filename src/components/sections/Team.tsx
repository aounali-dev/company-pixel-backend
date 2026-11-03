"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { teamMembers } from "@/data/team";
import "./team-section.css";

export default function TeamSection() {
    return (
        <section className="ts-section">
            <div className="ts-wrap">
                <div className="ts-header">
                    <div>
                        <p className="ts-eyebrow">The People Behind PixelBackend</p>
                        <h2 className="ts-h2">
                            Your Vision. Our Code. <span>Exceptional Experiences.</span>
                        </h2>
                    </div>
                    <p className="ts-sub">
                        Meet the brilliant minds and expert engineers driving innovation, scalability, and digital success.
                    </p>
                </div>

                <div className="ts-grid">
                    {teamMembers.map((member, index) => (
                        <div key={member.id} className="ts-card" style={{ "--d": `${index * 0.08}s` } as React.CSSProperties}>
                            <div className="ts-card__img-box">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="ts-card__img"
                                />
                                <div className="ts-card__overlay" />
                                <span className="ts-card__role-badge">{member.role}</span>
                            </div>

                            <div className="ts-card__body">
                                <h3>{member.name}</h3>
                                <p>{member.bio}</p>

                                <div className="ts-tags">
                                    {member.tags.map((tag, idx) => (
                                        <span key={idx}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="ts-footer">
                    <Link href="/team" className="ts-btn">
                        Explore Full Team
                        <span className="ts-btn__icon">
                            <ArrowUpRight size={18} />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}