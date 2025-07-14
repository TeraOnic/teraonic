export default function PrimaryBtn({ text }) {
  return (
    <button className="bg-secondary text-white px-3 py-2 rounded-sm text-sm font-poppins hover:bg-primary transition-all duration-300">
      {text}
    </button>
  );
}