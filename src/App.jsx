import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import What2 from "./components/What2";
import Events from "./components/Events";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import AboutAno from "./components/AboutAno";
import EventAno from "./components/EventAno";
import Donate from "./components/Donate";
import Save from "./components/Save";

const Home = () => (
  <>
    <Hero />
    <About />
    <What2 />
    <Events />
    <Partners />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<AboutAno />} />
        <Route path="events" element={<EventAno />} />
        <Route path="donate" element={<Donate />} />
        <Route path="save-heaven" element={<Save />} />
      </Route>
    </Routes>
  );
};

export default App;
