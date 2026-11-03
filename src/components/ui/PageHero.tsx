
import "./page-hero.css";
import type { CSSProperties } from "react";

type Props = {
    crumb: string;
    eyebrow?: string;
    title: string;
    outline?: string;
    text?: string;
};

const n = (i: number) => ({ "--n": i }) as CSSProperties;

export default function PageHero({
    crumb,
    eyebrow,
    title,
    outline,
    text
}: Props) {
    return (
        <header className="ph">
            <div className="ph__bg" aria-hidden="true">
                <div className="ph__grid" />
                <div className="ph__ring" />
            </div>

            <div className="ph__inner">

                {eyebrow && (
                    <p className="ph__eyebrow ph__up" style={n(1)}>
                        {eyebrow}
                    </p>
                )}

                <h1 className="ph__title ph__up" style={n(2)}>
                    {title}
                    {outline && <span>{outline}</span>}
                </h1>

                {text && (
                    <p className="ph__text ph__up" style={n(3)}>
                        {text}
                    </p>
                )}

            </div>
        </header>
    );
}
