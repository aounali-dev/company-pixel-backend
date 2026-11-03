"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import "./navbar.css";

const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Team", href: "/team" },
    // { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

    // Glass effect on scroll (navbar is always fixed)
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Close menu on route change
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Escape closes the menu, desktop size closes it too
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        const onResize = () => window.innerWidth >= 1024 && setOpen(false);
        window.addEventListener("keydown", onKey);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    const close = () => setOpen(false);

    return (
        <>
            <header className={cn("nb", scrolled && "nb--scrolled", open && "nb--open")}>
                <div className="nb__bar">
                    {/* Logo */}
                    <Link href="/" className="nb__logo" onClick={close} aria-label="Pixel Backend home">
                        <span className="nb__logo-box">
                            <Image
                                src="/images/pixel-Photoroom.png"
                                alt="Pixel Backend"
                                fill
                                sizes="170px"
                                priority
                                className="nb__logo-img"
                            />
                        </span>
                    </Link>

                    {/* Desktop links (centered) */}
                    <nav className="nb__nav" aria-label="Main">
                        <ul className="nb__list">
                            {links.map((l) => {
                                const active = isActive(l.href);
                                return (
                                    <li key={l.href} className={cn("nb__item", active && "nb__item--active")}>
                                        <Link
                                            href={l.href}
                                            className={cn("nb__link", active && "nb__link--active")}
                                            aria-current={active ? "page" : undefined}
                                        >
                                            <span className="nb__roll">
                                                <span className="nb__track">
                                                    <span>{l.label}</span>
                                                    <span aria-hidden="true">{l.label}</span>
                                                </span>
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* CTA + burger */}
                    <div className="nb__actions">
                        <Link href="/contact" className="nb__cta">
                            Start Project <ArrowUpRight size={16} />
                        </Link>
                        <button
                            type="button"
                            className="nb__burger"
                            onClick={() => setOpen((o) => !o)}
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </header>

            {/* Fullscreen mobile menu */}
            <div
                id="mobile-menu"
                className={cn("nb-menu", open && "nb-menu--open")}
                inert={!open}
            >
                <ul className="nb-menu__list">
                    {links.map((l, i) => (
                        <li key={l.href} className="nb-menu__item">
                            <Link
                                href={l.href}
                                onClick={close}
                                className={cn("nb-menu__link", isActive(l.href) && "nb-menu__link--active")}
                                aria-current={isActive(l.href) ? "page" : undefined}
                                style={{ "--i": i } as React.CSSProperties}
                            >
                                <span className="nb-menu__num">0{i + 1}</span>
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="nb-menu__foot">
                    <div className="nb-menu__meta">
                        <a href="mailto:info@pixelbackend.com">info@pixelbackend.com</a>
                        <a href="tel:+923170632398">+92 317 0632398</a>
                        <span><strong>Lahore Office:</strong> Daftarkhwan Vogue Towers, MM Alam Road, Lahore</span>
                        <span><strong>D, I, Khan Office:</strong>Ashiana Plaza, 1st Floor, M59, D.I. Khan</span>
                    </div>
                    <Link href="/contact" className="nb__cta" onClick={close}>
                        Start Project <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </>
    );
}