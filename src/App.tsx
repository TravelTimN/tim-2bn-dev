import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import Skills from "./components/sections/Skills";
import Journey from "./components/sections/Journey";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Header />

            <main>
                <Hero />
                <FeaturedProjects />
                <Skills />
                <Journey />
                <About />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
