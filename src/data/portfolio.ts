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
        id: "holly-holistic",
        num: "01",
        title: "WordPress Wellness Website",
        client: "Holly Holistic",
        description: "A calming and elegant holistic wellness website designed to showcase crystal healing, spiritual guidance, and Crystal Alchemy certification.",
        tags: ["WordPress", "Booking System", "UI/UX"],
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "smart-mindset-pinoy",
        num: "02",
        title: "WordPress Financial Services Website",
        client: "Smart Mindset Pinoy",
        description: "Empowering individuals and families with trusted financial guidance, healthcare, insurance, and wealth-building solutions.",
        tags: ["WordPress", "Elementor", "JavaScript"],
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "easy-travelo",
        num: "03",
        title: "Travel & Tourism Platform",
        client: "Easy Travelo",
        description: "Explore new destinations, create unforgettable memories, and travel with ease through custom experiences designed for adventure.",
        tags: ["Laravel", "Booking System", "UI/UX"],
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "alwynkotts",
        num: "04",
        title: "WordPress Bath Services Website",
        client: "Alwynkotts",
        description: "Restoring bathrooms with professional bathtub repair, reglazing, refinishing, resurfacing, and installation services.",
        tags: ["WordPress", "Booking System", "UI/UX"],
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "road-green",
        num: "05",
        title: "WordPress Development",
        client: "Road Green",
        description: "Creating greener cities for a healthier, more sustainable future, making every city cleaner and better for generations.",
        tags: ["WordPress", "PHP", "CSS"],
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "flow-ship-ltd",
        num: "06",
        title: "WordPress Logistics",
        client: "Flow Ship Ltd",
        description: "Moving businesses forward with reliable logistics, efficient solutions, and seamless global transportation.",
        tags: ["WordPress", "Elementor", "JavaScript"],
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "silver-clip",
        num: "07",
        title: "WordPress Technical Services",
        client: "Silver Clip Technical Services",
        description: "Providing professional property maintenance and technical services including painting, plumbing, and AC maintenance across Dubai.",
        tags: ["WordPress", "Elementor", "JavaScript"],
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "idaafa",
        num: "08",
        title: "WordPress Business Support Services",
        client: "We, iDaafa",
        description: "Providing comprehensive professional business support services including ISO certification, accounting, and web development.",
        tags: ["WordPress", "Elementor", "JavaScript"],
        liveUrl: "#",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
    }
];

export const graphicProjects: GraphicProject[] = [
    {
        id: "g-01",
        num: "01",
        title: "Brand Identity & Visual Assets",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "g-02",
        num: "02",
        title: "UI/UX Mobile & Web Layouts",
        category: "UI/UX",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "g-03",
        num: "03",
        title: "Social Media Campaign Creatives",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "g-04",
        num: "04",
        title: "Promotional Banner & Vector Art",
        category: "Illustration",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "g-05",
        num: "05",
        title: "Corporate Packaging & Print Design",
        category: "Print",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop"
    }
];