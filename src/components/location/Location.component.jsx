import { motion } from "framer-motion";
import LocationIcon from "../../assets/contact-us/Location.svg"
import CallIcon from "../../assets/contact-us/Call.svg"
import MailIcon from "../../assets/contact-us/mail2.svg"

const Location = () => {
  return (
    <section className="relative w-full h-[600px] mt-12 overflow-hidden group">
      {/* Map Background */}
      <div className="absolute inset-0 w-full h-full grayscale-[100%] group-hover:grayscale-0 transition-all duration-1000 ease-in-out">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8018263653503!2d73.0248221!3d33.7140765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf789588f29b%3A0xa50edddb550336fe!2sTeraOnic%20Software%20Solutions!5e0!3m2!1sen!2s!4v1754134247620!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/20 to-transparent pointer-events-none"></div>
      </div>

      {/* Floating Glass Card */}
      <div className="absolute top-1/2 left-4 md:left-20 -translate-y-1/2 max-w-sm w-full perspective-1000">
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: 20 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-[2rem] shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 relative overflow-hidden"
        >
          {/* Glossy Reflection */}
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/20 to-transparent rotate-45 pointer-events-none"></div>

          <div className="relative z-10">
            <div>
              <h3 className="text-secondary tracking-widest uppercase text-xs font-bold mb-2">Our Location</h3>
              <h2 className="text-3xl font-nura text-primary mb-6">Visit Our Office</h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <img src={LocationIcon} alt="" className="w-5 h-5 opacity-70" />
                </div>
                <div>
                  <p className="font-bold text-primary">Islamabad, Pakistan</p>
                  <p className="text-sm text-gray-500">AUBIC, Air University<br />Sector E-9</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <img src={CallIcon} alt="" className="w-5 h-5 opacity-70" />
                </div>
                <div>
                  <p className="font-bold text-primary">Call Us</p>
                  <p className="text-sm text-gray-500">+92 321 9747270</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <img src={MailIcon} alt="" className="w-5 h-5 opacity-70" />
                </div>
                <div>
                  <p className="font-bold text-primary">Email Us</p>
                  <p className="text-sm text-gray-500">teraonic.info@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-primary">Mon - Fri</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">08:00 AM - 04:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-sm mt-2">
                <span className="font-semibold text-gray-500">Sat - Sun</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-bold">Closed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
