
export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: "asad-ali",
        name: "Asad Ali",
        role: "Founder",
        bio: "Founder of PixelBackend. He leads the company's vision, development, and business strategy, focusing on delivering innovative digital solutions, quality services, and reliable technology experiences for clients.",
        image: "/images/asad-f.png"
    },
    {
        id: "murtaza",
        name: "Muhammad Murtaza",
        role: "CEO",
        bio: "Chief Executive Officer (CEO) of PixelBackend. He leads the company's overall operations, business strategy, and growth. He focuses on innovation, team management, customer satisfaction, and delivering high-quality digital solutions.",
        image: "/images/murtaza.png"
    },
    {
        id: "aoun-ali",
        name: "Aoun Ali",
        role: "Full-Stack Developer",
        bio: "Full-Stack Developer at PixelBackend. He specializes in developing modern, responsive, and user-friendly websites and web applications. He works on both frontend and backend development, focusing on clean code, website performance, database management, and delivering reliable digital solutions.",
        image: "/images/aoun.png"
    },
    {
        id: "mujtaba",
        name: "Muhammad Mujtaba",
        role: "Web Developer",
        bio: "Web Developer at PixelBackend, responsible for creating, designing, and maintaining modern, responsive, and user-friendly websites. He focuses on website functionality, attractive layouts, performance optimization, and delivering quality web solutions to clients.",
        image: "/images/mujtaba.png"
    },
    {
        id: "abdul-hye",
        name: "Abdul Hye",
        role: "SEO Expert",
        bio: "SEO Expert at PixelBackend, specializing in improving website visibility and search engine rankings. He focuses on keyword research, on-page SEO, off-page SEO, technical SEO, and content optimization to increase organic traffic and help businesses grow online.",
        image: "/images/abdul.png"
    },
    {
        id: "zarshan",
        name: "Zarshan Mehdi",
        role: "Video Editor",
        bio: "Professional Video Editor specializing in creative video editing, cinematic transitions, color grading, motion graphics, reels, shorts, and social media content.",
        image: "/images/zarshan.png"
    }
];

export const team = teamMembers;
