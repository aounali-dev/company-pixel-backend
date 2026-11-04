"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import "./cta.css";

export default function Cta() {
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
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section ref={ref} className={cn("cta", seen && "cta--in")}>
            <div className="cta__wrap">
                <div className="cta__panel">
                    <div className="cta__ring" aria-hidden="true" />

                    <p className="cta__eyebrow cta__item" style={{ "--d": "100ms" } as React.CSSProperties}>
                        Work With Us
                    </p>
                    <h2 className="cta__title cta__item" style={{ "--d": "180ms" } as React.CSSProperties}>
                        Have A Project In Mind? <span>Let's Build It.</span>
                    </h2>
                    <p className="cta__text cta__item" style={{ "--d": "260ms" } as React.CSSProperties}>
                        Send us a message or chat with us on WhatsApp. Tell us what you need and we will reply with a clear plan and timeline.
                    </p>

                    <div className="cta__actions cta__item" style={{ "--d": "340ms" } as React.CSSProperties}>
                        <Link href="/contact" className="cta__btn cta__btn--primary">
                            Start Project
                            <span className="cta__btn-icon">
                                <ArrowUpRight size={18} />
                            </span>
                        </Link>
                        <a
                            href="https://wa.me/923170632398"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta__btn cta__btn--ghost"
                        >
                            <MessageCircle size={18} />
                            Chat on WhatsApp
                        </a>
                    </div>

                    <ul className="cta__info cta__item" style={{ "--d": "420ms" } as React.CSSProperties}>
                        <li>
                            <Mail size={18} />
                            <span>
                                <em>Email Us</em>
                                <a href="mailto:info@pixelbackend.com">info@pixelbackend.com</a>
                            </span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>

                                <a href="tel:+923170632398">+92 317 0632398</a>
                                <a href="tel:++923313285040">+92 331 3285040</a>
                            </span>
                        </li>
                        <li>
                            <MapPin size={18} />
                            <span> <strong>D I Khan City Office:</strong> Ashiana Plaza, 1st Floor</span>
                        </li>

                    </ul>

                    {/* Social Media Links */}
                    <div className="cta__socials cta__item" style={{ "--d": "500ms" } as React.CSSProperties}>
                        <span>Follow us:</span>
                        <div className="cta__social-icons">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/asad-ali-87238a343?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            {/* Facebook */}
                            <a href="https://www.facebook.com/share/19iCQtQ4WP/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/pixelbackend?mdxt=MWtnbDhmdHU5OHFxZw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            {/* TikTok */}
                            <a href="https://www.tiktok.com/@pixelbackend" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}