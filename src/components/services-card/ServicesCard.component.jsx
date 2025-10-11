export default function ServicesCard({ title, picture, description }) {
  return (
    <div className="font-poppins w-64 bg-primary rounded-2xl py-6 px-3">
      <img src={picture} alt="" />
      <h3 className="text-2xl text-white my-3">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
