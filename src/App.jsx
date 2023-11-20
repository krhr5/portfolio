import Sidenav from "./components/Sidenav"
import DarkmodeButton from "./components/DarkmodeButton"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { motion, useScroll, useSpring } from "framer-motion";
import "./styles/app.css"
import "./styles/hint.css"

function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });
  return (
    <>
      <div className="main">
        <motion.div className="progress-bar" style={{ scaleX }}/>
        <DarkmodeButton/>
        <Sidenav/>
        <Hero/>
        <Experience/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
