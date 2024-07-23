import { Link } from 'react-router-dom';

const Alugar = () => {
    return (
        <section id="produtoComfort" className="w-full h-auto min-h-[500px] p-[20px]">
            <div className="mx-auto my-20 w-full max-w-[1200px]">
                <h2 className="text-[40px] font-[UrbanistFont-Bold] text-[#343434] text-center mx-auto">Alugue pelo seu <span className='text-[#C8000F] font-[UrbanistFont-Bold]'>celular ou computador</span></h2>
                <p className="text-[20px] font-[UrbanistFont-Medium] text-[#343434] text-center mx-auto my-3 max-w-[660px]">Simplificamos o aluguel de bicicletas. Assine online, retire na loja e comece a pedalar com estilo. Fácil e conveniente, diretamente do seu dispositivo.</p>
                <div className='flex justify-between max-w-[1100px] max-gx:max-w-[750px] my-24 mx-auto max-gx:flex-wrap'>
                    <div className='bg-[#d9d9d94d] rounded-[10px] w-[350px] max-gx:w-[calc(50%-20px)] max-screen_500:w-full mx-2 px-5 pt-12 pb-10 relative max-gx:mb-14'>
                        <div className="absolute top-[-30px] rounded-[5px] w-[60px] h-[55px] bg-[#D88373] flex justify-center items-center">
                            <p className='text-[30px] font-[UrbanistFont-Bold] text-[#ffffff]'>1</p>
                        </div>
                        <h3 className='font-[UrbanistFont-SemiBold] text-[20px] text-[#D88373] mb-3'>Assine online</h3>
                        <p className='font-[UrbanistFont-Light] text-[16px] text-[#1E1E1E]'>Cadastre-se e escolha o plano que melhor se adapta ao seu estilo de vida. Em poucos cliques, você estará pronto para pedalar pela cidade.</p>
                    </div>
                    <div className='bg-[#d9d9d94d] rounded-[10px] w-[350px] max-gx:w-[calc(50%-20px)] max-screen_500:w-full mx-2 px-5 pt-12 pb-10 relative max-gx:mb-14'>
                        <div className="absolute top-[-30px] rounded-[5px] w-[60px] h-[55px] bg-[#D88373] flex justify-center items-center">
                            <p className='text-[30px] font-[UrbanistFont-Bold] text-[#ffffff]'>2</p>
                        </div>
                        <h3 className='font-[UrbanistFont-SemiBold] text-[20px] text-[#D88373] mb-3'>Retire na loja</h3>
                        <p className='font-[UrbanistFont-Light] text-[16px] text-[#1E1E1E]'>Após a assinatura, dirija-se à nossa loja mais próxima e retire sua bicicleta rapidamente. Sem burocracia, sem complicação.</p>
                    </div>
                    <div className='bg-[#d9d9d94d] rounded-[10px] w-[350px] max-gx:w-[calc(50%-20px)] max-screen_500:w-full mx-2 px-5 pt-12 pb-10 relative'>
                        <div className="absolute top-[-30px] rounded-[5px] w-[60px] h-[55px] bg-[#D88373] flex justify-center items-center">
                            <p className='text-[30px] font-[UrbanistFont-Bold] text-[#ffffff]'>3</p>
                        </div>
                        <h3 className='font-[UrbanistFont-SemiBold] text-[20px] text-[#D88373] mb-3'>Pronto! Pedale com estilo sem suar</h3>
                        <p className='font-[UrbanistFont-Light] text-[16px] text-[#1E1E1E]'>Com sua bicicleta em mãos, explore a cidade com conforto e estilo. Desfrute de uma experiência única sem o esforço de pedalar.</p>
                    </div>
                </div>
                <p className="text-[18px] font-[UrbanistFont-Medium] text-[#343434] text-center mx-auto my-3 max-w-[500px]">Visite o nosso show room e saia pedalando na hora. Rua Heitor Penteado, 257, próximo a estação Sumaré.</p>

            </div>
        </section>
    )
}

export default Alugar;