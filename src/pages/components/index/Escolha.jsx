import { Link } from 'react-router-dom';

const Escolha = () => {
    return (
        <section id="escolha" className="relative w-full h-auto bg-[#BD1E1E] flex justify-center my-20 items-center px-[20px] py-28">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={117}
                height={117}
                viewBox="0 0 117 117"
                fill="none"
                className='absolute left-[50%] translate-x-[-50%] top-[-60px]'
            >
                <circle
                    cx="58.5"
                    cy="58.5"
                    r="58.5"
                    transform="matrix(1 0 0 -1 0 117)"
                    fill="white"
                />
                <path
                    d="M57.8278 82.1186L70.534 69.4124L66.5104 65.4594L57.8278 74.1419L49.1452 65.4594L45.1216 69.4124L57.8278 82.1186ZM57.8278 100.472C53.9218 100.472 50.2511 99.7308 46.8158 98.2484C43.3804 96.766 40.3921 94.7542 37.8508 92.213C35.3096 89.6717 33.2978 86.6834 31.8154 83.248C30.333 79.8126 29.5918 76.142 29.5918 72.236C29.5918 68.33 30.333 64.6593 31.8154 61.224C33.2978 57.7886 35.3096 54.8003 37.8508 52.259C40.3921 49.7178 43.3804 47.706 46.8158 46.2236C50.2511 44.7412 53.9218 44 57.8278 44C61.7338 44 65.4044 44.7412 68.8398 46.2236C72.2752 47.706 75.2635 49.7178 77.8048 52.259C80.346 54.8003 82.3578 57.7886 83.8402 61.224C85.3226 64.6593 86.0638 68.33 86.0638 72.236C86.0638 76.142 85.3226 79.8126 83.8402 83.248C82.3578 86.6834 80.346 89.6717 77.8048 92.213C75.2635 94.7542 72.2752 96.766 68.8398 98.2484C65.4044 99.7308 61.7338 100.472 57.8278 100.472ZM57.8278 94.8248C64.1338 94.8248 69.4751 92.6365 73.8517 88.2599C78.2283 83.8833 80.4166 78.542 80.4166 72.236C80.4166 65.93 78.2283 60.5886 73.8517 56.2121C69.4751 51.8355 64.1338 49.6472 57.8278 49.6472C51.5217 49.6472 46.1804 51.8355 41.8039 56.2121C37.4273 60.5886 35.239 65.93 35.239 72.236C35.239 78.542 37.4273 83.8833 41.8039 88.2599C46.1804 92.6365 51.5217 94.8248 57.8278 94.8248Z"
                    fill="#BD1E1E"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={117}
                height={117}
                viewBox="0 0 117 117"
                fill="none"
                className='absolute left-[50%] translate-x-[-50%] bottom-[-60px]'

            >
                <circle cx="58.5" cy="58.5" r="58.5" fill="white" />
                <path
                    d="M57.8278 34.8814L70.534 47.5876L66.5104 51.5406L57.8278 42.8581L49.1452 51.5406L45.1216 47.5876L57.8278 34.8814ZM57.8278 16.528C53.9218 16.528 50.2511 17.2692 46.8158 18.7516C43.3804 20.234 40.3921 22.2458 37.8508 24.787C35.3096 27.3283 33.2978 30.3166 31.8154 33.752C30.333 37.1874 29.5918 40.858 29.5918 44.764C29.5918 48.67 30.333 52.3407 31.8154 55.776C33.2978 59.2114 35.3096 62.1997 37.8508 64.741C40.3921 67.2822 43.3804 69.294 46.8158 70.7764C50.2511 72.2588 53.9218 73 57.8278 73C61.7338 73 65.4044 72.2588 68.8398 70.7764C72.2752 69.294 75.2635 67.2822 77.8048 64.741C80.346 62.1997 82.3578 59.2114 83.8402 55.776C85.3226 52.3407 86.0638 48.67 86.0638 44.764C86.0638 40.858 85.3226 37.1874 83.8402 33.752C82.3578 30.3166 80.346 27.3283 77.8048 24.787C75.2635 22.2458 72.2752 20.234 68.8398 18.7516C65.4044 17.2692 61.7338 16.528 57.8278 16.528ZM57.8278 22.1752C64.1338 22.1752 69.4751 24.3635 73.8517 28.7401C78.2283 33.1167 80.4166 38.458 80.4166 44.764C80.4166 51.07 78.2283 56.4114 73.8517 60.7879C69.4751 65.1645 64.1338 67.3528 57.8278 67.3528C51.5217 67.3528 46.1804 65.1645 41.8039 60.7879C37.4273 56.4114 35.239 51.07 35.239 44.764C35.239 38.458 37.4273 33.1167 41.8039 28.7401C46.1804 24.3635 51.5217 22.1752 57.8278 22.1752Z"
                    fill="#BD1E1E"
                />
            </svg>
            <div className='w-full h-full relative'>
                <p className='text-efeito-escolha z-[0] select-none text-[215px] max-lg:text-[20vw] max-screen_500:text-[15vw] font-[UrbanistFont-ExtraBold] absolute left-[50%] translate-x-[-50%] bottom-[-45px] whitespace-nowrap'>BLIV BIKE</p>
                <h2 className="text-[40px] mt-5 font-[UrbanistFont-Medium] text-[#ffffff] leading-[40px] text-center">Várias Cores. Qual é a sua?</h2>
                <div className='flex z-10 justify-center items-center max-lg:flex-wrap w-full max-w-[1200px] mt-10 mb-16 mx-auto'>
                    <div className='w-[calc(25%-20px)] z-10 max-lg:w-[calc(50%-20px)] max-screen_500:w-full rounded-[10px] overflow-hidden m-2'><img className='w-full background-image' src="/image/escolha/laranja.jpg" alt="Bike Bliv Verde" /></div>
                    <div className='w-[calc(25%-20px)] z-10 max-lg:w-[calc(50%-20px)] max-screen_500:w-full rounded-[10px] overflow-hidden m-2'><img className='w-full background-image' src="/image/escolha/vermelha.jpg" alt="Bike Bliv Vermelha" /></div>
                    <div className='w-[calc(25%-20px)] z-10 max-lg:w-[calc(50%-20px)] max-screen_500:w-full rounded-[10px] overflow-hidden m-2'><img className='w-full background-image' src="/image/escolha/verde.jpg" alt="Bike Bliv Verde" /></div>
                    <div className='w-[calc(25%-20px)] z-10 max-lg:w-[calc(50%-20px)] max-screen_500:w-full rounded-[10px] overflow-hidden m-2'><img className='w-full background-image' src="/image/escolha/azul.jpg" alt="Bike Bliv Aazul" /></div>
                </div>
                <div className='flex justify-center mb-10'>
                    <Link to={"/"} className="inline-block rounded-md z-10 bg-[#ffffff] hover:bg-[#f7f7f7] text-[#C8000F] font-[UrbanistFont-Bold] text-[20px] px-14 max-sm:px-5 py-4 select-none">GARANTIR MINHA BIKE AGORA</Link>
                </div>

            </div>

        </section>
    )
}

export default Escolha;