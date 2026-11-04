export interface WebProject {
    id: string;
    num: string;
    title: string;
    client: string;
    description: string;
    tags: string[];
    liveUrl: string;
    image: string;
}

export interface GraphicProject {
    id: string;
    num: string;
    title: string;
    category: string;
    image: string;
}

export const webProjects: WebProject[] = [
    {
        id: "treadmill-research-platform",
        num: "01",
        title: "WordPress Wellness Website",
        client: "Treadmill Research Platform",
        description: "Explore trusted treadmill reviews, detailed specifications, brand comparisons, and fitness tools designed to simplify research and help users make informed home fitness equipment decisions",
        tags: ["WordPress", "Wellness", "Fitness"],
        liveUrl: "https://treadfit.pro/",
        image: "/projects/1.png"
    },
    {
        id: "modern-home-inspiration",
        num: "02",
        title: "WordPress Financial Services Website",
        client: "Modern Home Inspiration",
        description: "Discover creative home decor ideas, interior styling tips, room inspiration, and smart organization solutions to transform everyday living spaces into beautiful, comfortable, and functional homes.",
        tags: ["WordPress", "Interior", "Design"],
        liveUrl: "https://homenesglow.com/",
        image: "/projects/2.png"
    },
    {
        id: "outdoor-grilling-essentials",
        num: "03",
        title: "Travel & Tourism Platform",
        client: "Outdoor Grilling Essentials",
        description: "Explore premium grills, smokers, outdoor cooking equipment, and essential accessories with detailed product comparisons, brand insights, and helpful buying guides for grilling enthusiasts.",
        tags: ["WordPress", "E-Commerce", "Guides"],
        liveUrl: "https://grillcrave.pro/",
        image: "/projects/3.png"
    },
    {
        id: "gold-price-calculator",
        num: "04",
        title: "WordPress Bath Services Website",
        client: "Gold Price & Value Calculator",
        description: "Explore live gold prices, calculate gold values by weight and purity, and discover informative guides about gold jewelry, investment products, and precious metal market trends.",
        tags: ["Calculator", "Finance", "Precious Metals"],
        liveUrl: "https://goldcalculator.live/",
        image: "/projects/4.png"
    },
    {
        id: "premium-eyewear-guide",
        num: "05",
        title: "WordPress Development",
        client: "Premium Eyewear Guide",
        description: "Explore stylish sunglasses, optical frames, and smart eyewear through detailed reviews, brand comparisons, lens insights, and practical buying guides to find your perfect frame.",
        tags: ["Eyewear", "Reviews", "Fashion"],
        liveUrl: "https://glazora.pro/",
        image: "/projects/5.png"
    },
    {
        id: "mental-wellness-growth",
        num: "06",
        title: "WordPress Logistics",
        client: "Mental Wellness & Growth",
        description: "Discover practical mental wellness tips, productivity strategies, healthy habits, and personal development guides to improve focus, reduce overthinking, strengthen critical thinking, and build a balanced lifestyle.",
        tags: ["Mental Health", "Wellness", "Growth"],
        liveUrl: "https://dailymindsoft.com/",
        image: "/projects/6.png"
    },
];

export const graphicProjects: GraphicProject[] = [
    {
        id: "graphic-1",
        num: "01",
        title: "Brand Identity Vector",
        category: "Branding",
        image: "/Graphic/1.jfif"
    },
    {
        id: "graphic-2",
        num: "02",
        title: "Social Media Promo Banner",
        category: "Social Media",
        image: "/Graphic/2.jfif"
    },
    {
        id: "graphic-3",
        num: "03",
        title: "UI/UX Creative Poster",
        category: "UI Graphics",
        image: "/Graphic/3.jfif"
    },
    {
        id: "graphic-4",
        num: "04",
        title: "Corporate Marketing Asset",
        category: "Corporate",
        image: "/Graphic/4.jfif"
    },
    {
        id: "graphic-5",
        num: "05",
        title: "Product Showcase Creative",
        category: "Showcase",
        image: "/Graphic/5.jfif"
    }
];