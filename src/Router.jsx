import { Routes, Router } from "react-router";
import Home from "./routes/Home";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}
