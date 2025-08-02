import AboutUsIntro from "../components/about-us-intro/About-Us-Intro.component";
import WhyUs from "../components/why-us/Why-Us.component";
import Team from "../components/team/team.component";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
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
            <AboutUsIntro />
            <WhyUs />
            <Team />
        </>
    );
};

export default About;
