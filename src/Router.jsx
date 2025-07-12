import { Routes, Route } from "react-router";
import Home from "./routes/Home";

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}
