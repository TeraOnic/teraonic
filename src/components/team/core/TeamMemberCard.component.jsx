import { motion } from "framer-motion";

const TeamMemberCard = ({ name, role, image }) => {
    return (
        <motion.div
            className="relative w-[320px] h-[450px] rounded-[30px] overflow-hidden cursor-pointer group shadow-2xl"
            whileHover={{ y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* Background Image with Scale Effect */}
            <div className="absolute inset-0 w-full h-full bg-primary">
                <motion.img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* Subtle Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            </div>

            {/* Floating Glass Content Box */}
            <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl overflow-hidden relative">
                    {/* Glow Effect behind text */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-secondary/30 blur-[40px] rounded-full"></div>

                    <div className="relative z-10">
                        <span className="inline-block px-2 py-1 mb-2 text-[10px] font-bold tracking-[0.2em] text-white uppercase bg-black/20 rounded-md backdrop-blur-sm border border-white/5">
                            {role}
                        </span>

                        <h3 className="text-3xl font-nura text-white leading-tight mb-2 group-hover:text-secondary transition-colors duration-300">
                            {name}
                        </h3>

                        {/* Animated Line */}
                        <div className="w-8 h-1 bg-secondary rounded-full group-hover:w-full transition-all duration-500 ease-in-out"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamMemberCard;
