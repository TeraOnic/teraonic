import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import Layout from "./routes/Layout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
