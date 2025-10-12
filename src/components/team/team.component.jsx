import TaqiCard from "./core/taqi";
import AsimCard from "./core/asim";
import AsadCard from "./core/asad";
import AhmedCard from "./core/ahmed";
import UsmanCard from "./core/usman";
const Team = () => {
  return (
    <section className="mx-32 mb-20 max-[720px]:mx-4">
      <h1 className="text-lg mb-12 text-center max-[480px]:text-3xl">Meet our team</h1>
      <p className="text-sm mx-96 text-center mb-12 max-[1320px]:mx-60 max-[1150px]:mx-40 max-[940px]:mx-10 max-[710px]:mx-4">
        At TeraOnic, our team of skilled Software Engineers, Developers and
        designers work together to build high-quality, reliable, and scalable
        software solutions tailored to your business needs.
      </p>
      <div className="grid grid-cols-5 gap-10 justify-items-center max-[1500px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[800px]:grid-cols-1">
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
