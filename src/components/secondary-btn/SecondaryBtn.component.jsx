export default function SecondaryBtn({ text }) {
  return (
    <button className="bg-transparent border text-black p-4 rounded-[0.5rem] w-44 text-sm font-poppins hover:bg-primary hover:text-white transition-all duration-300">
      {text}
    </button>
  );
}