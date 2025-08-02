import WhyUsCard from "./core/why-us-card.component";
import Verified from "../../assets/why-us/Verified.svg";
import Collaboration from "../../assets/why-us/Colaboration.svg";
import Cost from "../../assets/why-us/Cost.svg";
const WhyUs = () => {
  return (
    <section className="mb-20 mx-32">
      <h1 className="text-lg mb-10 text-center">Why Choose TeraOnic</h1>
      <div className="flex justify-between">
        <WhyUsCard
          logo={Verified}
          heading1={"Reliable"}
          heading2={"LongTerm Partnership"}
          text={
            "We don’t just deliver projects — we build lasting relationships with consistent support and maintenance."
          }
        />
        <WhyUsCard
          logo={Collaboration}
          heading1={"Collaborative"}
          heading2={"Transparent Process"}
          text={
            "Your feedback drives every step. We keep you in the loop with clear communication and progress updates."
          }
        />
        <WhyUsCard
          logo={Cost}
          heading1={"Cost-Effective "}
          heading2={"Quality Solutions"}
          text={
            "Get premium quality software without stretching your budget — no hidden charges."
          }
        />
      </div>
    </section>
  );
};

export default WhyUs;
