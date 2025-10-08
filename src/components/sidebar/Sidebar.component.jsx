export default function Sidebar({ open, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-20 transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ willChange: "transform" }}
    >
      <button
        className="absolute top-4 right-4 text-gray-600"
        onClick={onClose}
      >
        Close
      </button>
      <div className="p-8">
        <h2 className="text-lg font-bold mb-4">Sidebar</h2>
        {/* Add sidebar content here */}
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
        </ul>
      </div>
    </div>
  );
}
