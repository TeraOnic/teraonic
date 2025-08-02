import LocationIcon from "../../assets/contact-us/Location.svg"
import CallIcon from "../../assets/contact-us/Call.svg"
import MailIcon from "../../assets/contact-us/mail2.svg"
const Location = () => {
  return (
    <section className="flex mx-32 my-20 gap-6">
      <div className="w-[50%]">
        <div className="p-6 shadow-[0_0_4px_0_rgba(0,0,0,0.25)] w-full mb-6 rounded-sm flex flex-col gap-3">
            <h2 className="text-2xl">Office Address</h2>
            <div className="flex gap-3 items-start">
                <img className="pt-1" src={LocationIcon} alt="" />
                <p>AUBIC, Air University<br/>Sector E-9<br/>Islamabad, Pakistan</p>
            </div>
            <div className="flex gap-3 items-start">
                <img className="pt-1" src={CallIcon} alt="" />
                <p>+923219747270</p>
            </div>
            <div className="flex gap-3 items-start">
                <img className="pt-1" src={MailIcon} alt="" />
                <p>+teraonic.info@gmail.com</p>
            </div>
        </div>
        <div className="p-6 shadow-[0_0_4px_0_rgba(0,0,0,0.25)] w-full rounded-sm">
            <h2 className="text-2xl">Business Hours</h2>
            <div className="flex justify-between">
                <p>Monday - Friday</p>
                <p>8:00 AM - 4:00 PM</p>
            </div>
            <div className="flex justify-between">
                <p>Saturday</p>
                <p>Closed</p>
            </div>
            <div className="flex justify-between">
                <p>Sunday</p>
                <p>Closed</p>
            </div>
        </div>
      </div>

      <div className="w-[50%] h-auto rounded-sm overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8018263653503!2d73.0248221!3d33.7140765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf789588f29b%3A0xa50edddb550336fe!2sTeraOnic%20Software%20Solutions!5e0!3m2!1sen!2s!4v1754134247620!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
