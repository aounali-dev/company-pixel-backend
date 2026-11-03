import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <div className="footer__top">
                    <div className="footer__col footer__col--brand">
                        <Link href="/" className="footer__logo">
                            Pixel <span>Backend</span>
                        </Link>
                        <p className="footer__desc">
                            We build fast web applications, secure backend systems and clean interfaces for growing businesses.
                        </p>
                    </div>

                    <div className="footer__col">
                        <h4>Quick Links</h4>
                        <ul className="footer__links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/portfolio">Portfolio</Link></li>
                            <li><Link href="/team">Our Team</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>Offices & Contact</h4>
                        <ul className="footer__contact-list">

                            <li>
                                <MapPin size={16} />
                                <span><strong>Lahore Office:</strong> Daftarkhwan Vogue Towers, MM Alam Road, Lahore</span>
                            </li>

                            <li>
                                <MapPin size={16} />
                                <span> <strong>D I Khan City Office:</strong> Ashiana Plaza, 1st Floor</span>
                            </li>

                            <li>
                                <Phone size={16} />
                                <a href="tel:+923170632398">+92 317 0632398</a>
                            </li>

                            <li>
                                <Phone size={16} />
                                <a href="tel:+923313285040">+92 331 3285040</a>
                            </li>

                            <li>
                                <Mail size={16} />
                                <a href="mailto:info@pixelbackend.com">info@pixelbackend.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>Connect With Us</h4>
                        <p className="footer__social-desc">Follow Pixel Backend on our social channels.</p>
                        <div className="footer__socials">
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
                <div className="footer__bottom">
                    <p>
                        ©2023 Pixel Backend. All rights reserved.
                    </p>

                    <p>
                        Powered by Pixel Backend
                    </p>
                </div>
            </div>
        </footer>
    );
}