import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section id="blog" className="relative w-full h-auto mt-40 mb-20 p-[20px]">
            <h2 className="text-[40px] font-[UrbanistFont-Bold] text-[#343434] text-center leading-[40px] mt-3">Nosso Blog</h2>
            <p className='text-[20px] font-[UrbanistFont-Medium] text-[#343434] max-w-[700px] mx-auto my-5 text-center'>Fique por dentro das novidades, dicas e histórias sobre o mundo das bicicletas. Explore conteúdos exclusivos para melhorar sua experiência de pedalada.</p>
            <div className='flex max-lg:flex-wrap max-w-[1100px]  max-sm:max-w-[400px] mx-auto my-14'>
                <div
                    style={{ boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.03)' }}
                    className='w-[calc(33.33%-20px)] max-lg:w-[calc(50%-30px)] max-sm:w-full rounded-[20px] my-5 mx-3 overflow-hidden'
                >
                    <img className='w-full max-h-[250px] object-cover' src="/image/blog/img1.jpg" alt="Imagem de uma bicicleta bliv" />
                    <div className='p-5 pb-7'>
                        <h2 className="text-[25px] font-[UrbanistFont-SemiBold] text-[#292929] leading-[30px]">6 dicas para uma pedalada segura</h2>
                        <p className='text-[16px] font-[UrbanistFont-Light] text-[#343434] my-5'>Se você está pensando em começar a se aventurar pela cidade de bicicleta (elétrica ou tradicional), ou já faz isso, temos dicas e informações valiosas para você.</p>
                        <Link to={"/"} className="flex justify-between rounded-md bg-[#c8000f] hover:bg-[#BD1E1E] text-[#ffffff] font-[UrbanistFont-Medium] text-[20px] px-5 py-4 select-none">SAIBA MAIS
                            <svg
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x={1}
                                    y={1}
                                    width={28}
                                    height={28}
                                    rx={14}
                                    stroke="white"
                                    strokeWidth={2}
                                />
                                <path
                                    d="M13.3877 9.22131L14.1248 8.4842C14.4369 8.17209 14.9416 8.17209 15.2504 8.4842L21.7051 14.9356C22.0172 15.2477 22.0172 15.7524 21.7051 16.0612L15.2504 22.5158C14.9383 22.828 14.4336 22.828 14.1248 22.5158L13.3877 21.7787C13.0723 21.4633 13.0789 20.9487 13.401 20.6399L17.402 16.8281H7.85938C7.41777 16.8281 7.0625 16.4729 7.0625 16.0313V14.9688C7.0625 14.5272 7.41777 14.1719 7.85938 14.1719H17.402L13.401 10.3602C13.0756 10.0514 13.0689 9.53674 13.3877 9.22131Z"
                                    fill="white"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                
                <div
                    style={{ boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.03)' }}
                    className='w-[calc(33.33%-20px)] max-lg:w-[calc(50%-30px)] max-sm:w-full rounded-[20px] my-5 mx-3 overflow-hidden'
                >
                    <img className='w-full max-h-[250px] object-cover' src="/image/blog/img2.jpg" alt="Imagem de uma bicicleta bliv" />
                    <div className='p-5 pb-7'>
                        <h2 className="text-[25px] font-[UrbanistFont-SemiBold] text-[#292929] leading-[30px]">As vantagens de usar uma e-bike no seu dia a dia</h2>
                        <p className='text-[16px] font-[UrbanistFont-Light] text-[#343434] my-5'>A OMS recomendou o uso de bicicletas em tempos de pandemia como uma forma segura e eficiente de manter o isolamento social e a saúde.</p>
                        <Link to={"/"} className="flex justify-between rounded-md bg-[#c8000f] hover:bg-[#BD1E1E] text-[#ffffff] font-[UrbanistFont-Medium] text-[20px] px-5 py-4 select-none">SAIBA MAIS
                            <svg
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x={1}
                                    y={1}
                                    width={28}
                                    height={28}
                                    rx={14}
                                    stroke="white"
                                    strokeWidth={2}
                                />
                                <path
                                    d="M13.3877 9.22131L14.1248 8.4842C14.4369 8.17209 14.9416 8.17209 15.2504 8.4842L21.7051 14.9356C22.0172 15.2477 22.0172 15.7524 21.7051 16.0612L15.2504 22.5158C14.9383 22.828 14.4336 22.828 14.1248 22.5158L13.3877 21.7787C13.0723 21.4633 13.0789 20.9487 13.401 20.6399L17.402 16.8281H7.85938C7.41777 16.8281 7.0625 16.4729 7.0625 16.0313V14.9688C7.0625 14.5272 7.41777 14.1719 7.85938 14.1719H17.402L13.401 10.3602C13.0756 10.0514 13.0689 9.53674 13.3877 9.22131Z"
                                    fill="white"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                
                <div
                    style={{ boxShadow: '10px 10px 20px 0px rgba(0, 0, 0, 0.03)' }}
                    className='w-[calc(33.33%-20px)] max-lg:w-[calc(50%-30px)] max-sm:w-full rounded-[20px] my-5 mx-3 overflow-hidden'
                >
                    <img className='w-full max-h-[250px] object-cover' src="/image/blog/img3.jpg" alt="Imagem de uma bicicleta bliv" />
                    <div className='p-5 pb-7'>
                        <h2 className="text-[25px] font-[UrbanistFont-SemiBold] text-[#292929] leading-[30px]">Os melhores lugares para pedalar em SP</h2>
                        <p className='text-[16px] font-[UrbanistFont-Light] text-[#343434] my-5'>Em tempos de pandemia, alguns dos lugares mencionados podem estar temporariamente fechados ou inativos. Verifique antes de visitar.</p>
                        <Link to={"/"} className="flex justify-between rounded-md bg-[#c8000f] hover:bg-[#BD1E1E] text-[#ffffff] font-[UrbanistFont-Medium] text-[20px] px-5 py-4 select-none">SAIBA MAIS
                            <svg
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x={1}
                                    y={1}
                                    width={28}
                                    height={28}
                                    rx={14}
                                    stroke="white"
                                    strokeWidth={2}
                                />
                                <path
                                    d="M13.3877 9.22131L14.1248 8.4842C14.4369 8.17209 14.9416 8.17209 15.2504 8.4842L21.7051 14.9356C22.0172 15.2477 22.0172 15.7524 21.7051 16.0612L15.2504 22.5158C14.9383 22.828 14.4336 22.828 14.1248 22.5158L13.3877 21.7787C13.0723 21.4633 13.0789 20.9487 13.401 20.6399L17.402 16.8281H7.85938C7.41777 16.8281 7.0625 16.4729 7.0625 16.0313V14.9688C7.0625 14.5272 7.41777 14.1719 7.85938 14.1719H17.402L13.401 10.3602C13.0756 10.0514 13.0689 9.53674 13.3877 9.22131Z"
                                    fill="white"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Blog;