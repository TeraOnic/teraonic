import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navigation-bar/NavigationBar.component";
import PlaceOrderCard from "../components/PlaceOrderCard/PlaceOrderCard.component";
import Footer from "../components/footer/Footer.component";

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <PlaceOrderCard />
      <Footer />
    </>
  );
}
