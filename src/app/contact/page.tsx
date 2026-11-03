"use client";

import { useEffect, useRef } from "react";
import { Mail, MapPin, Phone, ArrowUpRight, Clock } from "lucide-react";
import "./contact-page.css";

export default function ContactPage() {
    const pageRef = useRef<HTMLElement>(null);

    // Smooth scroll-reveal
    useEffect(() => {
        const root = pageRef.current;
        if (!root) return;
        root.classList.add("cp-js");

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
        <main className="cp-page" ref={pageRef}>
            <section className="cp-hero">
                <div className="cp-hero__bg" aria-hidden="true" />
                <div className="cp-wrap">
                    <div className="cp-hero__content">
                        <p className="cp-eyebrow cp-hero-anim" style={{ "--d": "0ms" } as React.CSSProperties}>
                            Contact Us
                        </p>
                        <h1 className="cp-h1 cp-hero-anim" style={{ "--d": "120ms" } as React.CSSProperties}>
                            Let's Talk About <span>Your Next Project.</span>
                        </h1>
                        <p className="cp-lead cp-hero-anim" style={{ "--d": "240ms" } as React.CSSProperties}>
                            Visit us in Dera Ismail Khan or Lahore, or send a message online. We reply within 24 hours.
                        </p>
                    </div>
                </div>
            </section>

            {/* Two Locations Section */}
            <section className="cp-locations-section">
                <div className="cp-wrap">
                    <div className="cp-loc-grid">


                        {/* Location 2: Lahore Branch */}
                        <div className="cp-loc-card" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
                            <div className="cp-loc__tag">Branch One</div>
                            <h3>Lahore Studio (MM Alam Road)</h3>
                            <p className="cp-loc__address">
                                <MapPin size={18} />
                                <span>Daftarkhwan Vogue Towers, MM Alam Road, Gulberg III, Lahore</span>
                            </p>
                            <p className="cp-loc__desc">
                                Our space for client meetings and design consultations.
                            </p>
                            <div className="cp-loc__meta">

                                <a href="mailto:info@pixelbackend.com"><Mail size={15} /> info@pixelbackend.com</a>
                                <a href="tel:++923313285040">+92 331 3285040</a>
                            </div>
                        </div>

                        {/* Location 1: D.I. Khan */}
                        <div className="cp-loc-card" data-reveal>
                            <div className="cp-loc__tag">Branch Two</div>
                            <h3>Dera Ismail Khan Office</h3>
                            <p className="cp-loc__address">
                                <MapPin size={18} />
                                <span>Ashiana Plaza, 1st Floor, D.I. Khan, KPK, Pakistan</span>
                            </p>
                            <p className="cp-loc__desc">
                                Our main development center, where projects are planned and built.
                            </p>
                            <div className="cp-loc__meta">

                                <a href="mailto:info@pixelbackend.com"><Mail size={15} /> info@pixelbackend.com</a>
                                <a href="tel:+923170632398"><Phone size={15} /> +92 317 0632398</a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* Main Section with Form & Map */}
            <section className="cp-main-section">
                <div className="cp-wrap">
                    <div className="cp-main-grid">
                        <div className="cp-form-box" data-reveal>
                            <h2>Send Us A Message</h2>
                            <p>Tell us what you need and we will get back to you within 24 hours.</p>

                            <form className="cp-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="cp-row">
                                    <div className="cp-field">
                                        <label htmlFor="cp-name">Your Name</label>
                                        <input id="cp-name" name="name" type="text" placeholder="John Doe" autoComplete="name" required />
                                    </div>
                                    <div className="cp-field">
                                        <label htmlFor="cp-email">Email Address</label>
                                        <input id="cp-email" name="email" type="email" placeholder="client@domain.com" autoComplete="email" required />
                                    </div>
                                </div>
                                <div className="cp-field">
                                    <label htmlFor="cp-service">Service Needed</label>
                                    <input id="cp-service" name="service" type="text" placeholder="Website, web app, backend API..." required />
                                </div>
                                <div className="cp-field">
                                    <label htmlFor="cp-message">Project Details</label>
                                    <textarea id="cp-message" name="message" rows={5} placeholder="Tell us about your project, goals and timeline..." required />
                                </div>
                                <button type="submit" className="cp-submit-btn">
                                    Send Message
                                    <span className="cp-btn-icon"><ArrowUpRight size={18} /></span>
                                </button>
                            </form>

                            {/* Social Links */}
                            <div className="cp-social-box">
                                <span className="cp-social-title">Follow Pixel Backend</span>
                                <div className="cp-social-list">
                                    <a href="https://www.linkedin.com/in/asad-ali-87238a343?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn
                                    </a>
                                    <a href="https://www.facebook.com/share/19iCQtQ4WP/" target="_blank" rel="noopener noreferrer">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> Facebook
                                    </a>
                                    <a href="https://www.instagram.com/pixelbackend?mdxt=MWtnbDhmdHU5OHFxZw==" target="_blank" rel="noopener noreferrer">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram
                                    </a>
                                    <a href="https://www.tiktok.com/@pixelbackend" target="_blank" rel="noopener noreferrer">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg> TikTok
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="cp-map-box" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
                            <iframe
                                title="Pixel Backend Office - Lahore & D.I. Khan"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.996123456789!2d74.3436!3d31.5104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919048f00000001%3A0x123456789abcdef!2sMM%20Alam%20Rd%2C%20Gulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}