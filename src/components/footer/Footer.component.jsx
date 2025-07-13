import WhatsappIcon from "../../assets/footer/whatsapp.svg";
import mailIcon from "../../assets/footer/mail.svg";
import linkedinIcon from "../../assets/footer/linkedin.svg";
export default function Footer() {
  return (
    <nav>
      <div className="bg-[#D9D9D9] py-10 px-32 flex items-center font-poppins justify-between">
        <div className="max-w-xl">
          <p className="text-m">TeraOnic</p>
          <p className="text-s">Custom software, purpose-built for your challenges. We craft solutions that work — beautifully and reliably.</p>
        </div>
        <div className="flex flex-col flex-wrap max-h-28 text-sm gap-x-9 gap-y-4">
          <a href="">Careers</a>
          <a href="">Our Projects</a>
          <a href="">Our Services</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </div>
        <div className="flex gap-6">
          <a href="https://wa.me/923219747270" target="_blank" rel="noopener noreferrer">
            <img src={WhatsappIcon} alt="Whatsapp Icon" />
          </a>
          <a href="mailto:teraonic.info@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={mailIcon} alt="Whatsapp Icon" />
          </a>
          <a href="https://www.linkedin.com/company/teraonic-software-solutions/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Whatsapp Icon" />
          </a>
        </div>
      </div>
    </nav>
  );
}
