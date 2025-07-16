import Services from "../components/services/Services.component";
import Projects from "../components/projects/Projects.component";
import Banner from "../components/Banner/Banner.component";
import PlaceOrderCard from "../components/PlaceOrderCard/PlaceOrderCard.component";
export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Projects />
      <PlaceOrderCard />
    </>
  );
}
