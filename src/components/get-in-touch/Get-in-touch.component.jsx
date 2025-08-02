import GetInTouchCard from "./core/Get-in-touch-card.component";
import WhatsApp from "../../assets/contact-us/Whatsapp.svg";
import Linkedin from "../../assets/contact-us/Linkedin.svg";
import Mail from "../../assets/contact-us/Mail.svg";
import WhatsappHandle from "../handlers/whatsappHandle";
import LinkedinHandle from "../handlers/linkedinHandle";
import MailHandle from "../handlers/mailHandle";
const GetInTouch = () => {

  return (
    <article className="mx-[31.5rem] my-20 text-center flex flex-col items-center">
      <div className="mb-12">
        <h1 className="text-lg">Get in touch</h1>
        <p className="text-sm">Choose your preferred way to contact us</p>
      </div>
      <div className="flex gap-5">
        <GetInTouchCard
          logo={WhatsApp}
          heading={"Contact us on Whatsapp"}
          btnTitle={"Send Message"}
          onClick={WhatsappHandle}
        />
        <GetInTouchCard
          logo={Linkedin}
          heading={"Contact us on Linkedin"}
          btnTitle={"Send Message"}
          onClick={LinkedinHandle}
        />
        <GetInTouchCard
          logo={Mail}
          heading={"Contact us on Mail"}
          btnTitle={"Send Mail"}
          onClick={MailHandle}
        />
      </div>
    </article>
  );
};

export default GetInTouch;
