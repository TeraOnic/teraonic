import Footer from "./components/footer/Footer.component";

import "./App.css";
import NavigationBar from "./components/naivgation-bar/NavigationBar.component";
import AppRouter from "./router";

function App() {
  return (
    <>
      <NavigationBar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
