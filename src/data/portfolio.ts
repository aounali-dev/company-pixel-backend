import { ASSETS } from "@/lib/assets";

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
    image: string;
}

export const webProjects: WebProject[] = [
    {
        id: "Treadmill Research Platform",
        num: "01",
        title: "WordPress Wellness Website",
        client: "Treadmill Research Platform",
        description: "Explore trusted treadmill reviews, detailed specifications, brand comparisons, and fitness tools designed to simplify research and help users make informed home fitness equipment decisions.",
        tags: [],
        liveUrl: "https://treadfit.pro/",
        image: ASSETS.projects.proj1
    },

    {
        id: "Garden Outdoor Guide",
        num: "10",
        title: "Garden Outdoor Guide", // Fixed missing quote here
        client: "Client Project 10",
        description: "A comprehensive gardening platform featuring expert plant care tips, outdoor tool recommendations, seasonal guides, and practical resources to help gardening enthusiasts create beautiful, sustainable green spaces.",
        tags: [],
        liveUrl: "https://seedrove.com/",
        image: ASSETS.projects.proj10
    },

    {
        id: "Outdoor Grilling Essentials",
        num: "03",
        title: "Travel & Tourism Platform",
        client: "Outdoor Grilling Essentials",
        description: "Explore premium grills, smokers, outdoor cooking equipment, and essential accessories with detailed product comparisons, brand insights, and helpful buying guides for grilling enthusiasts.",
        tags: [],
        liveUrl: "https://grillcrave.pro/",
        image: ASSETS.projects.proj3
    },
    {
        id: "Gold Price & Value Calculator",
        num: "04",
        title: "WordPress Bath Services Website",
        client: "Gold Price & Value Calculator",
        description: "Explore live gold prices, calculate gold values by weight and purity, and discover informative guides about gold jewelry, investment products, and precious metal market trends.",
        tags: [],
        liveUrl: "https://goldcalculator.live/",
        image: ASSETS.projects.proj4
    },

    {
        id: "Plumbing Products Guide",
        num: "08",
        title: "Plumbing Products Guide",
        client: "Client Project 8",
        description: "A modern plumbing product platform featuring curated recommendations, detailed comparisons, and trusted reviews of faucets, showers, bathroom fixtures, and essential plumbing accessories with a clean, user-friendly design.",
        tags: [],
        liveUrl: "https://taptest.pro/",
        image: ASSETS.projects.proj8
    },

    {
        id: "Premium Eyewear Guide",
        num: "05",
        title: "WordPress Development",
        client: "Premium Eyewear Guide",
        description: "Explore stylish sunglasses, optical frames, and smart eyewear through detailed reviews, brand comparisons, lens insights, and practical buying guides to find your perfect frame.",
        tags: [],
        liveUrl: "https://glazora.pro/",
        image: ASSETS.projects.proj5
    },
    {
        id: "Mental Wellness & Growth",
        num: "06",
        title: "WordPress Logistics",
        client: "Mental Wellness & Growth",
        description: "Discover practical mental wellness tips, productivity strategies, healthy habits, and personal development guides to improve focus, reduce overthinking, strengthen critical thinking, and build a balanced lifestyle.",
        tags: [],
        liveUrl: "https://dailymindsoft.com/",
        image: ASSETS.projects.proj6
    },
    {
        id: "Kitchen Home Guide",
        num: "07",
        title: "Kitchen Home Guide",
        client: "Client Project 7",
        description: "A modern kitchen and home guide featuring trusted product reviews, curated appliance recommendations, and everyday cooking inspiration with a clean, user-friendly design and fresh visual identity.",
        tags: [],
        liveUrl: "https://kitchzen.pro/",
        image: ASSETS.projects.proj7
    },

    {
        id: "Digital Learning Platform",
        num: "09",
        title: "Digital Learning Platform",
        client: "Client Project 9",
        description: "An innovative learning platform providing beginner-friendly technology tutorials, AI resources, practical digital guides, and productivity tips to help users develop skills and confidently embrace technology.",
        tags: [],
        liveUrl: "https://skillbrewhub.online/",
        image: ASSETS.projects.proj9
    },

    {
        id: "Technology News Hub",
        num: "11",
        title: "Technology News Hub",
        client: "Client Project 11",
        description: "A professional technology blog featuring the latest digital trends, cybersecurity insights, data visualization tools, and practical learning resources through an engaging, organized, and user-friendly design.",
        tags: [],
        liveUrl: "https://skillbrewhub.com/",
        image: ASSETS.projects.proj11
    },
    {
        id: "Retro Music Store",
        num: "12",
        title: "Retro Music Store",
        client: "Client Project 12",
        description: "A stylish vintage music merchandise store featuring unique vinyl clocks, retro tin signs, band-inspired apparel, and exclusive bundles with an engaging shopping experience and nostalgic design.",
        tags: [],
        liveUrl: "https://www.retroprogression.com/",
        image: ASSETS.projects.proj12
    },



    {
        id: "Premium Leather Store",
        num: "13",
        title: "Next-Gen Web Solution",
        client: "Client Project 13",
        description: "A luxury leather eCommerce website showcasing premium handbags, jackets, belts, and gloves with elegant product displays, sophisticated styling, and a seamless shopping experience.",
        tags: [],
        liveUrl: "https://stagleathers.com/",
        image: ASSETS.projects.proj13
    }
];

export const graphicProjects: GraphicProject[] = [
    { image: ASSETS.graphic.item1 },
    { image: ASSETS.graphic.item2 },
    { image: ASSETS.graphic.item3 },
    { image: ASSETS.graphic.item4 },
    { image: ASSETS.graphic.item5 },
];