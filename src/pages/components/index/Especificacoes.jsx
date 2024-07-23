import { Link } from 'react-router-dom';

const Especificacoes = () => {
    return (
        <section id="especificacoes" className="relative w-full h-auto mt-2 mb-10 p-[20px]">
            <h3 className="text-[25px] font-[UrbanistFont-Bold] text-[#343434] text-center leading-[30px]">Desenhada por especialistas</h3>
            <h2 className="text-[40px] my-2 font-[UrbanistFont-Bold] text-[#343434] text-center leading-[40px]">Para você não se preocupar</h2>
            <div className='max-w-[950px] mx-auto my-16 max-sm:mb-10 flex justify-between max-sm:flex-wrap'>
                <div className='text-right w-[calc(50%-40px)] max-sm:w-full max-sm:text-left '>
                    <div className='bg-[#343434] px-5 py-1 rounded-[13px] my-3'>
                        <p className='text-[18px] font-[UrbanistFont-Medium] text-[#ffffff] max-w-[700px] mx-auto my-5'><span className='font-[UrbanistFont-Bold]'>Modalidade:</span> Eletric Comfort</p>
                    </div>
                    <div className='bg-[#343434] px-5 py-1 rounded-[13px] my-3'>
                        <p className='text-[18px] font-[UrbanistFont-Medium] text-[#ffffff] max-w-[700px] mx-auto my-5'><span className='font-[UrbanistFont-Bold]'>Freios:</span> Disco Mecânico</p>
                    </div>
                    <div className='bg-[#343434] px-5 py-1 rounded-[13px] my-3'>
                        <p className='text-[18px] font-[UrbanistFont-Medium] text-[#ffffff] max-w-[700px] mx-auto my-5'><span className='font-[UrbanistFont-Bold]'>Pedivela:</span> Uma coroa</p>
                    </div>
                    <div className='bg-[#343434] px-5 py-1 rounded-[13px] my-3'>
                        <p className='text-[18px] font-[UrbanistFont-Medium] text-[#ffffff] max-w-[700px] mx-auto my-5'><span className='font-[UrbanistFont-Bold]'>Pneu:</span> Urban 1.9</p>
                    </div>
                    <div className='bg-[#343434] px-5 py-1 rounded-[13px] my-3'>
                        <p className='text-[18px] font-[UrbanistFont-Medium] text-[#ffffff] max-w-[700px] mx-auto my-5'><span className='font-[UrbanistFont-Bold]'>Bateria:</span> 11.6Ah / Autonomia 40 – 50 Km Aprox</p>
                    </div>
                    <div className='bg-[#343434] px-5 py-1 rounded-[13px] my-3'>
                        <p className='text-[18px] font-[UrbanistFont-Medium] text-[#ffffff] max-w-[700px] mx-auto my-5'><span className='font-[UrbanistFont-Bold]'>Material do quadro:</span> Alumínio</p>
                    </div>
                    <div className='bg-[#343434] px-5 py-1 rounded-[13px] my-3 max-sm:mb-0'>
                        <p className='text-[18px] font-[UrbanistFont-Medium] text-[#ffffff] max-w-[700px] mx-auto my-5'><span className='font-[UrbanistFont-Bold]'>Passador:</span> Shimano RS35</p>
                    </div>

                </div>
                <div className='w-[60px] max-sm:hidden'>
                    <ul className="flex flex-col mx-auto justify-between items-center w-[5px] h-full bg-[#d9d9d94d] rounded-full">
                        <li data-aos="fade-up" className="bg-[#343434] w-[23px] h-[23px] rounded-full"></li>
                        <li data-aos="fade-up" className="bg-[#343434] w-[23px] h-[23px] rounded-full"></li>
                        <li data-aos="fade-up" className="bg-[#343434] w-[23px] h-[23px] rounded-full"></li>
                        <li data-aos="fade-up" className="bg-[#343434] w-[23px] h-[23px] rounded-full"></li>
                    </ul>
                </div>
                <div className='text-left w-[calc(50%-40px)] max-sm:w-full max-sm:text-left'>
                    <div className='bg-[#343434] px-5 py-1 rounded-[13px] my-3'>
                        <p className='text-[18px] font-[UrbanistFont-Medium] text-[#ffffff] max-w-[700px] mx-auto my-5'><span className='font-[UrbanistFont-Bold]'>Velocidade:</span> 7</p>
                    </div>
                    <div className='bg-[#343434] px-5 py-1 rounded-[13px] my-3'>
                        <p className='text-[18px] font-[UrbanistFont-Medium] text-[#ffffff] max-w-[700px] mx-auto my-5'><span className='font-[UrbanistFont-Bold]'>Guidon:</span> Alumínio Comfort</p>
                    </div>
                    <div className='bg-[#343434] px-5 py-1 rounded-[13px] my-3'>
                        <p className='text-[18px] font-[UrbanistFont-Medium] text-[#ffffff] max-w-[700px] mx-auto my-5'><span className='font-[UrbanistFont-Bold]'>Carregador:</span> Bivolt 110-220</p>
                    </div>
                    <div className='bg-[#343434] px-5 py-1 rounded-[13px] my-3'>
                        <p className='text-[18px] font-[UrbanistFont-Medium] text-[#ffffff] max-w-[700px] mx-auto my-5'><span className='font-[UrbanistFont-Bold]'>Suspensão:</span> BLIV - Alumínio 80mm</p>
                    </div>
                    <div className='bg-[#343434] px-5 py-1 rounded-[13px] my-3'>
                        <p className='text-[18px] font-[UrbanistFont-Medium] text-[#ffffff] max-w-[700px] mx-auto my-5'><span className='font-[UrbanistFont-Bold]'>Câmbio Tras.:</span> Shimano TY300</p>
                    </div>
                    <div className='bg-[#343434] px-5 py-1 rounded-[13px] my-3'>
                        <p className='text-[18px] font-[UrbanistFont-Medium] text-[#ffffff] max-w-[700px] mx-auto my-5'><span className='font-[UrbanistFont-Bold]'>Motor:</span> Cubo traseiro 350W / 36V</p>
                    </div>

                </div>
            </div>
            <Link to={"/"} className="flex justify-center max-w-[300px] mx-auto items-center rounded-md bg-[#c8000f] hover:bg-[#BD1E1E] text-[#ffffff] font-[UrbanistFont-Medium] text-[20px] px-5 py-4 select-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    className='mr-3'
                >
                    <g clipPath="url(#clip0_38_426)">
                        <path
                            d="M24.6094 12.5C24.6094 19.1895 19.1895 24.6094 12.5 24.6094C5.81055 24.6094 0.390625 19.1895 0.390625 12.5C0.390625 5.81055 5.81055 0.390625 12.5 0.390625C19.1895 0.390625 24.6094 5.81055 24.6094 12.5ZM10.3516 6.83594V12.5H6.88965C6.36719 12.5 6.10352 13.1348 6.47461 13.501L12.085 19.082C12.3145 19.3115 12.6807 19.3115 12.9102 19.082L18.5205 13.501C18.8916 13.1299 18.6279 12.5 18.1055 12.5H14.6484V6.83594C14.6484 6.51367 14.3848 6.25 14.0625 6.25H10.9375C10.6152 6.25 10.3516 6.51367 10.3516 6.83594Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_38_426">
                            <rect width={25} height={25} fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                BAIXAR MANUAL
            </Link>
        </section>
    )
}

export default Especificacoes;