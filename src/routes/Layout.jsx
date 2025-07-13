import { Outlet } from "react-router";
import NavigationBar from "../components/naivgation-bar/NavigationBar.component";
import Footer from "../components/footer/Footer.component";

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}
