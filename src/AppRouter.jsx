import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" index element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
