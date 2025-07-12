import Footer from "./components/footer/Footer.component";

import "./App.css";
import NavigationBar from "./components/naivgation-bar/NavigationBar.component";
import AppRouter from "./router";
import Services from "./components/services/Services.component";
import ProjectCard from "./components/project-card/project-card.jsx";
import pic from "./assets/services/4.png";

function App() {
  return (
    <>
      <NavigationBar />
      <AppRouter />
      <Services />
      <ProjectCard title="Nasa Website" picture={pic} category="Web Development"/>
      <Footer />
    </>
  );
}

export default App;
