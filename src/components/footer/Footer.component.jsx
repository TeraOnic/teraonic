import { Link } from "react-router-dom";
import { LuPhone, LuMail, LuLinkedin } from "react-icons/lu";

export default function Footer() {
  return (
    <nav>
      <div className="bg-[#D9D9D9] py-10 px-8 md:px-32 flex flex-col md:flex-row items-center font-poppins justify-between gap-8 md:gap-0">
        <div className="max-w-xl text-center md:text-left">
          <p className="text-m font-bold font-nura">TeraOnic</p>
          <p className="text-s mt-2 text-gray-600">Custom software, purpose-built for your challenges. We craft solutions that work — beautifully and reliably.</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-9 gap-y-4 text-sm font-medium">
          <Link to="/projects" className="hover:text-secondary transition-colors">Our Projects</Link>
          <Link to="/about" className="hover:text-secondary transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link>
        </div>
        <div className="flex gap-6">
          <a href="https://wa.me/923219747270" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors">
            <LuPhone />
          </a>
          <a href="mailto:teraonic.info@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors">
            <LuMail />
          </a>
          <a href="https://www.linkedin.com/company/teraonic-software-solutions/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors">
            <LuLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
