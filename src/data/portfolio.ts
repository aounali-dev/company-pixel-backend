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
        description: "Explore trusted treadmill reviews, detailed specifications, brand comparisons, and fitness tools designed to simplify research and help users make informed home fitness equipment decisions",
        tags: [],
        liveUrl: "https://treadfit.pro/",
        image: ASSETS.projects.proj1
    },
    {
        id: "Modern Home Inspiration",
        num: "02",
        title: "WordPress Financial Services Website",
        client: "Modern Home Inspiration",
        description: "Discover creative home decor ideas, interior styling tips, room inspiration, and smart organization solutions to transform everyday living spaces into beautiful, comfortable, and functional homes.",
        tags: [],
        liveUrl: "https://homenesglow.com/",
        image: ASSETS.projects.proj2
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
];

export const graphicProjects: GraphicProject[] = [
    { image: ASSETS.graphic.item1 },
    { image: ASSETS.graphic.item2 },
    { image: ASSETS.graphic.item3 },
    { image: ASSETS.graphic.item4 },
    { image: ASSETS.graphic.item5 },
];