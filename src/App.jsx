import Footer from "./components/footer/Footer.component";

import "./App.css";
import NavigationBar from "./components/naivgation-bar/NavigationBar.component";
import AppRouter from "./router";
import Services from "./components/services/Services.component";

function App() {
  return (
    <>
      <NavigationBar />
      <AppRouter />
      <Services />
      <Footer />
    </>
  );
}

export default App;
