export const ASSETS = {
    asad: "/images/asad.png",
    murtaza: "/images/murtaza.png",
    aouni: "/images/aouni.png",
    mujtaba: "/images/mujtaba.png",
    abdul: "/images/abdul.png",
    logo: "/images/pixel.png",
    logoPhotoroom: "/images/pixel-Photoroom.png",
    servicesHero: "/images/services-hero.jpg",

    graphic: {
        item1: "/graphic/1.png",
        item2: "/graphic/2.png",
        item3: "/graphic/3.png",
        item4: "/graphic/4.png",
        item5: "/graphic/5.png",
    },

    projects: {
        proj1: "/projects/1.png",
        proj2: "/projects/2.png",
        proj3: "/projects/3.png",
        proj4: "/projects/4.png",
        proj5: "/projects/5.png",
        proj6: "/projects/6.png",
    }
};

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
        image: "/projects/1.png"
    },
    {
        id: "Modern Home Inspiration",
        num: "02",
        title: "WordPress Financial Services Website",
        client: "Modern Home Inspiration",
        description: "Discover creative home decor ideas, interior styling tips, room inspiration, and smart organization solutions to transform everyday living spaces into beautiful, comfortable, and functional homes.",
        tags: [],
        liveUrl: "https://homenesglow.com/",
        image: "/projects/2.png"
    },
    {
        id: "Outdoor Grilling Essentials",
        num: "03",
        title: "Travel & Tourism Platform",
        client: "Outdoor Grilling Essentials",
        description: "Explore premium grills, smokers, outdoor cooking equipment, and essential accessories with detailed product comparisons, brand insights, and helpful buying guides for grilling enthusiasts.",
        tags: [],
        liveUrl: "https://grillcrave.pro/",
        image: "/projects/3.png"
    },
    {
        id: "Gold Price & Value Calculator",
        num: "04",
        title: "WordPress Bath Services Website",
        client: "Gold Price & Value Calculator",
        description: "Explore live gold prices, calculate gold values by weight and purity, and discover informative guides about gold jewelry, investment products, and precious metal market trends.",
        tags: [],
        liveUrl: "https://goldcalculator.live/",
        image: "/projects/4.png"
    },
    {
        id: "Premium Eyewear Guide",
        num: "05",
        title: "WordPress Development",
        client: "Premium Eyewear Guide",
        description: "Explore stylish sunglasses, optical frames, and smart eyewear through detailed reviews, brand comparisons, lens insights, and practical buying guides to find your perfect frame.",
        tags: [],
        liveUrl: "https://glazora.pro/",
        image: "/projects/5.png"
    },
    {
        id: "Mental Wellness & Growth",
        num: "06",
        title: "WordPress Logistics",
        client: "Mental Wellness & Growth",
        description: "Discover practical mental wellness tips, productivity strategies, healthy habits, and personal development guides to improve focus, reduce overthinking, strengthen critical thinking, and build a balanced lifestyle.",
        tags: [],
        liveUrl: "https://dailymindsoft.com/",
        image: "/projects/6.png"
    },
];

export const graphicProjects: GraphicProject[] = [
    { image: "/graphic/1.png" },
    { image: "/graphic/2.png" },
    { image: "/graphic/3.png" },
    { image: "/graphic/4.png" },
    { image: "/graphic/5.png" },
];