export interface ServiceItem {
    id: string;
    title: string;
    category: string;
    shortDesc: string;
    fullDesc: string;
    features: string[];
    iconName: string;
}

export const services: ServiceItem[] = [
    {
        id: "web-development",
        title: "Web Development",
        category: "Development",
        shortDesc: "Custom, high-performance web applications, landing pages, and full-stack solutions built with modern frameworks.",
        fullDesc: "We engineer scalable, lightning-fast web applications and custom digital platforms tailored to your business infrastructure. Utilizing advanced full-stack architectures, we ensure your digital presence is secure, responsive, and built to convert.",
        features: [
            "Next.js & React High-Performance Apps",
            "Full-Stack Custom Backend Integration",
            "Responsive Mobile-First UI Engineering",
            "API Development & Database Architecture"
        ],
        iconName: "Code"
    },
    {
        id: "wordpress-cms",
        title: "WordPress & CMS",
        category: "CMS",
        shortDesc: "Professional WordPress website development, custom themes, e-commerce stores, and seamless plugin integration.",
        fullDesc: "Take total control of your content with bespoke WordPress solutions. From lightning-fast custom themes to complex e-commerce stores, we build secure, SEO-optimized content management systems designed for effortless scaling.",
        features: [
            "Custom Theme & Plugin Development",
            "WooCommerce Store Setup & Optimization",
            "Speed & Security Hardening",
            "Seamless CMS Migration & Training"
        ],
        iconName: "Layout"
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        category: "Marketing",
        shortDesc: "Strategic marketing campaigns, social media management, and growth strategies tailored to reach your target audience.",
        fullDesc: "Accelerate your brand growth with data-driven marketing frameworks. We orchestrate comprehensive multi-channel campaigns designed to capture market share, engage high-intent leads, and maximize your return on ad spend.",
        features: [
            "Targeted Social Media Management",
            "Paid Ad Campaigns (Meta, Google)",
            "Conversion Rate Optimization (CRO)",
            "Brand Positioning & Strategy"
        ],
        iconName: "TrendingUp"
    },
    {
        id: "graphic-designing",
        title: "Graphic Designing",
        category: "Design",
        shortDesc: "Creative visual assets, modern branding, UI/UX layouts, and striking promotional graphics that capture attention.",
        fullDesc: "Transform your visual identity with striking, purpose-driven design. We craft cohesive branding kits, intuitive UI/UX layouts, and high-impact promotional assets that resonate with your audience and elevate your brand prestige.",
        features: [
            "Complete Brand Identity & Guidelines",
            "UI/UX Web & Mobile App Layouts",
            "Marketing & Social Media Creatives",
            "High-Resolution Vector Assets"
        ],
        iconName: "Palette"
    },
    {
        id: "seo-optimization",
        title: "SEO Optimization",
        category: "Growth",
        shortDesc: "Comprehensive on-page and technical SEO to boost your search rankings, visibility, and organic traffic.",
        fullDesc: "Dominate search engine results pages with rigorous technical and on-page SEO strategies. We audit, optimize, and scale your website architecture to drive sustainable, high-converting organic traffic directly to your business.",
        features: [
            "Comprehensive Technical SEO Audits",
            "On-Page & Content Optimization",
            "Keyword Research & Competitor Analysis",
            "Core Web Vitals & Speed Tuning"
        ],
        iconName: "Search"
    },
    {
        id: "video-editing",
        title: "Video Editing",
        category: "Creative",
        shortDesc: "Engaging promotional videos, seamless cuts, color grading, and multimedia content tailored for maximum impact.",
        fullDesc: "Captivate viewers and tell compelling brand stories through professional video production and editing. From dynamic promotional clips to engaging social media reels, we deliver cinema-grade edits engineered for maximum retention.",
        features: [
            "Dynamic Short & Long-Form Edits",
            "Professional Color Grading & Audio",
            "Motion Graphics & Visual Effects",
            "Optimized Reels, TikToks & YouTube Cuts"
        ],
        iconName: "Video"
    },
    {
        id: "ebay-management",
        title: "eBay Account Management",
        category: "E-Commerce",
        shortDesc: "End-to-end eBay store optimization, listing management, inventory sync, and seller performance growth.",
        fullDesc: "Maximize your store visibility and sales velocity on eBay. Our dedicated management service handles product optimization, inventory tracking, customer support, and algorithmic ranking strategies to scale your store revenue.",
        features: [
            "SEO-Optimized Product Listings",
            "Inventory & Order Management",
            "Seller Metrics & Account Health Care",
            "Competitor Pricing Strategies"
        ],
        iconName: "ShoppingBag"
    },
    {
        id: "etsy-management",
        title: "Etsy Account Management",
        category: "E-Commerce",
        shortDesc: "Professional Etsy shop setup, tag optimization, listing creation, and artisan brand scaling.",
        fullDesc: "Stand out in the handmade and vintage marketplace. We optimize your Etsy shop listings with high-converting tags, stunning visual curation, and strategic ad management to attract devoted buyers and boost sales.",
        features: [
            "Etsy SEO & Tag Architecture",
            "Listing Creation & Photo Curation",
            "Etsy Ads Campaign Management",
            "Customer Review & Branding Enhancement"
        ],
        iconName: "Store"
    },
    {
        id: "shopify-management",
        title: "Shopify Account Management",
        category: "E-Commerce",
        shortDesc: "Complete Shopify store administration, product catalog management, conversion optimization, and app integration.",
        fullDesc: "Scale your standalone e-commerce empire on Shopify. We manage your product catalogs, optimize checkout funnels, integrate powerful sales apps, and execute growth strategies to maximize your store's lifetime value.",
        features: [
            "Catalog & Variant Management",
            "Conversion Funnel Optimization",
            "App Ecosystem Integration & Audit",
            "Order Fulfillment & Inventory Workflow"
        ],
        iconName: "ShoppingCart"
    },
    {
        id: "youtube-automation",
        title: "YouTube Automation",
        category: "Automation",
        shortDesc: "Faceless channel creation, scriptwriting, voiceover coordination, video production, and algorithmic scaling.",
        fullDesc: "Build passive income streams through high-performing automated YouTube channels. We handle the entire pipeline from niche research and high-retention scripting to elite editing and thumbnail generation.",
        features: [
            "Profitable Niche & Keyword Research",
            "Engaging Scriptwriting & Voiceovers",
            "High-CTR Thumbnail & Video Production",
            "Channel Growth & Analytics Tracking"
        ],
        iconName: "PlaySquare"
    },
    {
        id: "facebook-automation",
        title: "Facebook Automation",
        category: "Automation",
        shortDesc: "Automated Messenger bots, group management systems, scheduled posting funnels, and lead generation workflows.",
        fullDesc: "Streamline your Facebook presence and community engagement with robust automation workflows. Convert prospects 24/7 with intelligent messenger funnels and automated interaction systems.",
        features: [
            "Messenger Chatbot Funnel Design",
            "Automated Lead Capture & CRM Sync",
            "Scheduled Content & Group Management",
            "Engagement & Response Automation"
        ],
        iconName: "MessageSquare"
    },
    {
        id: "tiktok-automation",
        title: "TikTok Automation",
        category: "Automation",
        shortDesc: "Viral short-form content pipelines, automated posting schedules, trend analysis, and follower growth systems.",
        fullDesc: "Capitalize on short-form video algorithms with automated TikTok scaling systems. We curate viral content concepts, manage bulk production pipelines, and deploy data-driven posting schedules.",
        features: [
            "Viral Trend Research & Ideation",
            "Bulk Short-Form Video Production",
            "Automated Multi-Account Scheduling",
            "Audience Growth & Engagement Tracking"
        ],
        iconName: "Smartphone"
    },
    {
        id: "app-development",
        title: "App Development",
        category: "Development",
        shortDesc: "Native and cross-platform mobile applications built for iOS and Android with high-performance frameworks.",
        fullDesc: "Bring your mobile app concept to life with robust iOS and Android engineering. We build intuitive, high-performance mobile apps utilizing React Native and native stacks for seamless user experiences.",
        features: [
            "Cross-Platform iOS & Android Apps",
            "Intuitive Mobile UI/UX Design",
            "Secure Cloud Backend Integration",
            "App Store Deployment & Maintenance"
        ],
        iconName: "Cpu"
    },
    {
        id: "software-development",
        title: "Software Development",
        category: "Development",
        shortDesc: "Enterprise-grade custom software solutions, cloud systems, internal tools, and robust API architectures.",
        fullDesc: "Empower your enterprise with custom software solutions designed for maximum efficiency and security. We build bespoke internal dashboards, cloud-native tools, and complex scalable software architectures.",
        features: [
            "Enterprise Custom Software Solutions",
            "Cloud-Native Scalable Architecture",
            "Secure Internal Dashboards & Tools",
            "Robust API & Database Engineering"
        ],
        iconName: "Server"
    }
];