import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Team from "@/components/sections/Team";
import Cta from "@/components/sections/Cta";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Team />
            <Cta />
        </main>
    );
}