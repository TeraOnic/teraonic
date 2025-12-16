const TestimonialCard = ({ pic, name, designation, stars, text }) => {
    return (
        <div className="w-[350px] md:w-[450px] p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/40 shadow-xl mx-4 flex flex-col justify-between h-[250px] hover:bg-white/60 transition-colors duration-300">
            <div>
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-5 h-5 ${i < stars ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm italic line-clamp-3">
                    "{text}"
                </p>
            </div>

            <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                    <img src={pic} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="font-bold text-primary">{name}</h4>
                    <p className="text-xs text-secondary/80 font-medium uppercase tracking-wide">
                        {designation}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
