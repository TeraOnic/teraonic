import Star from "../../../assets/testimonials/Star.svg"
const TestimonialBox = ({pic, name, designation, testimonial, stars = 5}) => {
  return (
    <div className="flex flex-col justify-center text-center p-8 items-center gap-6 rounded-3xl border w-md">
      <img src={pic} alt="" className="size-20 rounded-full"/>
      <div>
        <h3 className="text-secondary text-2xl font-bold">{name}</h3>
        <h3 className="text-[#60656F] text-2xl">{designation}</h3>
         <div className="stars flex justify-center gap-1">
          {Array.from({ length: stars }).map((_, idx) => (
            <img src={Star} alt="star" key={idx}/>
          ))}
        </div>
      </div>
      <p className="text-2xl font-normal h-96 overflow-auto">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialBox;
