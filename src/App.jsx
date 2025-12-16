import "./App.css";
import AppRouter from "./AppRouter";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location]);
  return (
    <>
      <ScrollToTop />
      <AppRouter />
    </>
  );
}

export default App;
