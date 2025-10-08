export default function SecondaryBtn({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent border text-black rounded-[0.5rem] text-sm font-poppins hover:bg-primary hover:text-white transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
}

