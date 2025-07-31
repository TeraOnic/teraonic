const BusinessCard = () => {
  return (
    <div className="bg-primary text-white w-[24.5rem] rounded-2xl h-60 p-4 flex justify-between flex-col">
      <div className="flex justify-between">
        <h2 className="text-secondary font-nura">TERAONIC</h2>
        <img src="/QRcode.png" alt="QR Code" />
      </div>
      <div className="weight-700 text-end text-xs">
        <p>From Code To Impact</p>
        <p>AI | Web & Mobile | UI/UX </p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2.5">
            <img src="/gray-whatsapp.svg" alt="" />
            <p className="text-xs text-[#AEAEAE]">+923219747270</p>
        </div>
        <div className="flex gap-2.5">
            <img src="/gray-mail.svg" alt="" />
            <p className="text-xs text-[#AEAEAE]">teraonic.info@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
