export default function SecondaryBtn({ text }) {
  return (
    <button className="bg-transparent text-black px-16 py-4 rounded-full text-sm font-poppins border-[1px] hover:bg-secondary hover:text-white hover:border-transparent transition-all duration-300">
      {text}
    </button>
  );
}