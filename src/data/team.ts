export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    tags: string[];
}
export const teamMembers: TeamMember[] = [
    {
        id: "asad-ali",
        name: "Asad Ali",
        role: "Founder & CEO",
        bio: "Leading Pixel Backend with a vision to build stronger, smarter, and exceptional digital experiences for modern enterprises.",
        image: "/images/asad.png",
        tags: ["Leadership", "Strategy", "Vision"]
    },
    {
        id: "murtaza",
        name: "Murtaza",
        role: "Chief Executive Officer",
        bio: "Driving operational excellence, scaling agency growth, and executing high-impact technical solutions across global markets.",
        image: "/pixel-backend/public/team/murtaza.jfif",
        tags: ["Management", "Operations", "Growth"]
    },
    {
        id: "aoun-ali",
        name: "Aoun Ali",
        role: "Full-Stack Developer",
        bio: "Engineering high-performance web applications, modern UI/UX architecture, and robust front-to-back systems with React and Next.js.",
        image: "/projects/team/aouni.png",
        tags: ["React", "Next.js", "TypeScript"]
    },
    {
        id: "mujtaba",
        name: "Mujtaba",
        role: "Backend Developer (Laravel)",
        bio: "Specializing in robust backend architectures, secure RESTful APIs, database optimization, and scalable Laravel applications.",
        image: "/projects/team/mujtaba.jfif",
        tags: ["Laravel", "PHP", "MySQL"]
    },
    {
        id: "abdul-hye",
        name: "Abdul Hye",
        role: "SEO Expert",
        bio: "Optimizing digital assets, technical SEO audits, and organic traffic growth strategies to dominate search engine rankings.",
        image: "/projects/team/abdul.jfif",
        tags: ["Technical SEO", "Analytics", "Growth"]
    }
];

export const team = teamMembers;