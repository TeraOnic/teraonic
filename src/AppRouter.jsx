import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import About from "./routes/About";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
