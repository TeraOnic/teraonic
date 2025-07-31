export default function PrimaryBtn({ text }) {
  return (
    <button className="bg-secondary text-white p-4 rounded-[0.5rem] w-44 text-sm font-poppins hover:bg-primary transition-all duration-300">
      {text}
    </button>
  );
}