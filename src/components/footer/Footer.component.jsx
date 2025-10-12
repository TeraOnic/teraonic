import WhatsappIcon from "../../assets/footer/whatsapp.svg";
import mailIcon from "../../assets/footer/mail.svg";
import linkedinIcon from "../../assets/footer/linkedin.svg";
export default function Footer() {
  return (
    <nav className="bg-[#D9D9D9]">
      <div className="py-10 sm:px-10 px-4 max-w-[1690px] mx-auto flex flex-col lg:flex-row gap-y-9 lg:items-center font-poppins justify-between">
        <div className="max-w-xl ">
          <p className="text-m">TeraOnic</p>
          <p className="text-s">
            Custom software, purpose-built for your challenges. We craft
            solutions that work — beautifully and reliably.
          </p>
        </div>
        <div className="flex text-sm gap-x-9 gap-y-3 flex-col lg:flex-row items-center lg:items-start">
          <div className="flex lg:flex-col flex-row gap-x-5 gap-y-4">
            <a href="">Careers</a>
            <a href="">Our Projects</a>
            <a href="">Our Services</a>
          </div>
          <div className="flex lg:flex-col flex-row gap-x-5 gap-y-4">
            <a href="">About Us</a>
            <a href="">Contact Us</a>
          </div>
        </div>
        <div className="flex gap-6 justify-center">
          <a
            href="https://wa.me/923219747270"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WhatsappIcon} alt="Whatsapp Icon" />
          </a>
          <a
            href="mailto:teraonic.info@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mailIcon} alt="Whatsapp Icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/teraonic-software-solutions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="Whatsapp Icon" />
          </a>
        </div>
      </div>
      <p className="text-gray-500 text-center text-xs pb-5">
        Copyright © 2025 Teraonic. All Rights Reserved.
      </p>
    </nav>
  );
}
