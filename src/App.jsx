import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Sap from "./components/Sap";
import Credentials from "./components/Credentials";
import Background from "./components/Background";
import Contact from "./components/Contact";

export default function App() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Projects />
                <Sap />
                <Credentials />
                <Background />
                <Contact />
            </main>
        </>
    );
}
