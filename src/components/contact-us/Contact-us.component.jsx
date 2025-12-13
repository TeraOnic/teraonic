import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

import WhatsApp from "../../assets/contact-us/Whatsapp.svg";
import Linkedin from "../../assets/contact-us/Linkedin.svg";
import Mail from "../../assets/contact-us/Mail.svg";

import WhatsappHandle from "../handlers/whatsappHandle";
import LinkedinHandle from "../handlers/linkedinHandle";
import MailHandle from "../handlers/mailHandle";

const ContactUs = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/teraonic.info@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error submitting form.");
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.2)}
          className="glass-panel rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
        >
          {/* Left Col: Contact Info (Dark Theme) */}
          <div className="w-full md:w-2/5 bg-primary p-12 text-white relative flex flex-col justify-between overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-nura mb-4">Let's Discuss Your Project</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to take your digital presence to the next level? We are here to help you achieve your goals.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 group cursor-pointer" onClick={MailHandle}>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                    <img src={Mail} alt="Mail" className="w-6 h-6 invert" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Email Us</p>
                    <p className="font-medium group-hover:text-secondary transition-colors">teraonic.info@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer" onClick={WhatsappHandle}>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                    <img src={WhatsApp} alt="WhatsApp" className="w-6 h-6 invert" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">WhatsApp</p>
                    <p className="font-medium group-hover:text-green-400 transition-colors">Chat with us</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer" onClick={LinkedinHandle}>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0077b5] transition-colors duration-300">
                    <img src={Linkedin} alt="Linkedin" className="w-6 h-6 invert" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">LinkedIn</p>
                    <p className="font-medium group-hover:text-[#0077b5] transition-colors">Connect with us</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <p className="text-xs text-center text-gray-500">© 2024 TeraOnic. All rights reserved.</p>
            </div>
          </div>

          {/* Right Col: Form */}
          <div className="w-full md:w-3/5 p-8 md:p-12 bg-white/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input type="hidden" name="Type" value="Contact Us" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">First Name</label>
                  <input
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    name="First Name"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Last Name</label>
                  <input
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    name="Last Name"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  name="Email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                <textarea
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  name="Message"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-secondary text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-primary hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2"
              >
                Send Message
              </button>
            </form>

            {status && <p className="mt-6 text-center text-sm font-medium text-green-600 bg-green-50 py-2 rounded-lg">{status}</p>}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
