import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Sap from "./components/Sap";
import Experience from "./components/Experience";
import Credentials from "./components/Credentials";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Projects />
                <Skills />
                <Sap />
                <Experience />
                <Credentials />
                <Education />
                <Contact />
            </main>
        </>
    );
}
