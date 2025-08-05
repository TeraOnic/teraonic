import TestimonialBox from "./core/Testimonial-box.component";
import Talha from "../../assets/testimonials/talha.webp";
import Sohail from "../../assets/testimonials/sohail.webp";
import Blank from "../../assets/testimonials/blank.webp";

const Testimonials = () => {
  return (
    <>
      <h1 className="text-lg text-center mb-20 font-poppins">
        Client Testimonials
      </h1>
      <section className="mb-20 mx-32 flex justify-between">
        <TestimonialBox
          pic={Sohail}
          name={"Sohail Shafique"}
          designation={"CEO Silicom Technologies"}
          stars={5}
          testimonial={
            "Working with TeraOnics on our Figma design project was a seamless experience from start to finish. They delivered a clean, user-focused design that perfectly captured our brand vision. The team was highly responsive to feedback, detail-oriented, and ensured every component aligned with usability best practices. I highly recommend them for any UI/UX design work."
          }
        />
        <TestimonialBox
          pic={Talha}
          name={"Talha bin Safdar"}
          designation={"Founder WingMan Depo"}
          stars={5}
          testimonial={
            "TeraOnics provided a professional and responsive experience, delivering a clean, fully functional website that aligned perfectly with the brand. The team ensured smooth performance and custom solutions, making them highly recommended for web development needs."
          }
        />
        <TestimonialBox
          pic={Blank}
          name={"Ahmed Khan"}
          designation={"Co-Founder Fresh Berry UAE"}
          stars={4}
          testimonial={
            "TeraOnics was an absolute pleasure to work with on our UI/UX design. They quickly understood our goals and translated them into a modern, intuitive interface. The design process was smooth, collaborative, and thoughtful. If you're looking for a team that truly cares about both aesthetics and usability, I highly recommend TeraOnics. "
          }
        />
      </section>
    </>
  );
};

export default Testimonials;

