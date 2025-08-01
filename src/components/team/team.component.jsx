import TaqiCard from "./core/taqi";
import AsimCard from "./core/asim";
import AsadCard from "./core/asad";
import AhmedCard from "./core/ahmed";
import UsmanCard from "./core/usman";
const Team = () => {
  return (
    <section className="mx-32 mb-20">
      <h1 className="text-lg mb-12 text-center">Meet our team</h1>
      <p className="text-sm mx-96 text-center mb-12">
        At TeraOnic, our team of skilled Software Engineers, Developers and
        designers work together to build high-quality, reliable, and scalable
        software solutions tailored to your business needs.
      </p>
      <div className="flex gap-2.5">
        <TaqiCard />
        <AsimCard />
        <AsadCard />
        <AhmedCard />
       <UsmanCard />
      </div>
    </section>
  );
};

export default Team;
