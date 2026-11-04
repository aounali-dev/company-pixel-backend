"use client";

import React, { useState } from "react";
import "@/components/sections/whatsapp-widget.css";

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const whatsappNumber = "923489156101";

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    };

    return (
        <div className="pixel-wa-wrapper">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="pixel-wa-button"
                    aria-label="Open WhatsApp Chat"
                >
                    <svg className="pixel-wa-svg" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    <span className="pixel-wa-label">WhatsApp</span>
                </button>
            )}

            {isOpen && (
                <div className="pixel-wa-popup">
                    <div className="pixel-wa-header">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="pixel-wa-close"
                            aria-label="Close Chat"
                        >
                            ✕
                        </button>
                        <div className="pixel-wa-header-flex">
                            <div className="pixel-wa-avatar">PB</div>
                            <div>
                                <h3 className="pixel-wa-title">Pixel Backend</h3>
                                <p className="pixel-wa-status">
                                    <span className="pixel-wa-dot"></span>
                                    Online & Ready to Help
                                </p>
                            </div>
                        </div>
                        <p className="pixel-wa-desc">
                            Connect directly with our engineering and development team instantly via WhatsApp.
                        </p>
                    </div>

                    <div className="pixel-wa-body">
                        <div className="pixel-wa-card">
                            <div className="pixel-wa-card-avatar">PB</div>
                            <div>
                                <div className="pixel-wa-card-title">Support Expert</div>
                                <div className="pixel-wa-card-text">Hi! Drop your project query here.</div>
                            </div>
                        </div>
                    </div>

                    <div className="pixel-wa-footer">
                        <form onSubmit={handleSendMessage} className="pixel-wa-form">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message here..."
                                className="pixel-wa-input"
                            />
                            <button
                                type="submit"
                                className="pixel-wa-send"
                                aria-label="Send message"
                            >
                                <svg className="pixel-wa-send-svg" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                </svg>
                            </button>
                        </form>
                        <div className="pixel-wa-secure">
                            Secured and Direct WhatsApp Integration
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}