"use client";

import { Quote, Star } from "lucide-react";
import "./reviews.css";

interface Review {
    id: string;
    name: string;
    role: string;
    country: string;
    project: string;
    rating: number;
    text: string;
}

const reviews: Review[] = [
    {
        id: "1",
        name: "Sarah Mitchell",
        role: "Founder, Wellness Studio",

        rating: 5,
        text: "They understood our brand from the first call and built a calm, easy-to-use website. Clients can now book sessions online, and the whole process was clearly communicated.",
    },
    {
        id: "2",
        name: "Daniel Reyes",
        role: "Financial Advisor",

        rating: 5,
        text: "The website explains our services clearly and loads quickly. Pixel Backend delivered on schedule and handled every revision without any fuss.",
    },
    {
        id: "3",
        name: "Ahmed Raza",
        role: "Director, Logistics Company",

        rating: 5,
        text: "We needed a professional online presence for our shipping business. The team kept the design clean, the pages organised, and the delivery on time.",
    },
    {
        id: "4",
        name: "James Carter",
        role: "Owner, Bathroom Refinishing",

        rating: 5,
        text: "Our new site shows our work properly and makes it easy for customers to request a quote. Good communication from kickoff to launch.",
    },
    {
        id: "5",
        name: "Hina Malik",
        role: "Founder, Travel Agency",

        rating: 5,
        text: "They built our booking platform around how we actually work. It is simple for customers, and the team stayed responsive after launch as well.",
    },
    {
        id: "6",
        name: "Laura Bennett",
        role: "Programme Lead, Environmental Initiative",

        rating: 5,
        text: "Pixel Backend turned our message into a clear, modern website. Their attention to detail was strong, and the pages work well on mobile.",
    },
];

function Card({ item }: { item: Review }) {
    return (
        <article className="rv-card">
            <div className="rv-card__top">
                <span className="rv-chip">{item.project}</span>
                <Quote className="rv-card__quote" size={34} aria-hidden="true" />
            </div>

            <div className="rv-stars" role="img" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
            </div>

            <p className="rv-card__text">{item.text}</p>

            <div className="rv-card__foot">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
                <em>{item.country}</em>
            </div>
        </article>
    );
}

export default function ReviewsSection() {
    return (
        <section className="rv-section" aria-label="Client reviews">
            <div className="rv-wrap">
                <div className="rv-header">
                    <div>
                        <p className="rv-eyebrow">Testimonials</p>
                        <h2 className="rv-h2">
                            What Our Clients <span>Say About Us.</span>
                        </h2>
                    </div>

                    <div className="rv-side">
                        <p className="rv-sub">
                            Feedback from businesses we have built websites and digital solutions for.
                        </p>
                        <div className="rv-stats">
                            <div>
                                <strong>40+</strong>
                                <span>Happy Clients</span>
                            </div>
                            <div>
                                <strong>50+</strong>
                                <span>Projects Delivered</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rv-row">
                <div className="rv-track">
                    {[0, 1, 2].map((n) => (
                        <div className="rv-set" key={n} aria-hidden={n > 0 ? true : undefined}>
                            {reviews.map((item) => (
                                <Card key={`${n}-${item.id}`} item={item} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}