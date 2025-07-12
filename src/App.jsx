import Footer from "./components/footer/Footer.component";

import "./App.css";
import NavigationBar from "./components/naivgation-bar/NavigationBar.component";
import AppRouter from "./router";
import ServicesCard from "./components/services-card/ServicesCard.component";

function App() {
  return (
    <>
      <NavigationBar />
      <AppRouter />
      <ServicesCard />
      <Footer />
    </>
  );
}

export default App;
