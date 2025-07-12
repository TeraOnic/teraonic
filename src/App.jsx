import Footer from "./components/footer/Footer.component";

import "./App.css";
import NavigationBar from "./components/naivgation-bar/NavigationBar.component";
import AppRouter from "./router";
import Services from "./components/services/Services.component";
import Projects from "./components/projects/Projects.component";

function App() {
  return (
    <>
      <NavigationBar />
      <AppRouter />
      <Services />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
