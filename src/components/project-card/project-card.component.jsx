export default function ProjectCard({ title, picture, category }) {
  return (
    <div className="w-96 hover:shadow-[12px_22px_4px_rgba(0,0,0,0.25)] transition-all duration-300 rounded-m group mr-12 font-poppins">
      <img
        src={picture}
        alt="Service Image"
        className="w-96 h-96 rounded-tl-m rounded-tr-m object-cover object-center"
      />
      <div className="bg-primary text-white w-96 px-6 py-7 rounded-bl-m rounded-br-m group-hover:bg-secondary transition-all duration-300">
        <p className="text-m mb-5 text-center">{title}</p>
        <p className="text-sm text-center">{category}</p>
      </div>
    </div>
  );
}