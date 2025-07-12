import WebDevImg from '../../assets/services/4.png';

export default function ServicesCard() {
    return (
        <div>
            <img src={WebDevImg} alt="Nasa Image" className="max-w-[394px] max-h-[394px]" />

            <div className='bg-green-600'>
                <p>Nasa Website heheh</p>
            </div>
        </div>
    )
}