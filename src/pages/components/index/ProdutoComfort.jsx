import { Link } from 'react-router-dom';

const ProdutoComfort = () => {
    return (
        <section id="produtoComfort" className="w-full h-auto min-h-[500px] p-[20px]">
            <div className="flex items-center mx-auto my-20 w-full max-w-[1200px] max-gx:flex-wrap">
                <div className='w-[800px] max-xl:w-[65%] max-gx:w-full max-gx:max-w-[600px] max-gx:mx-auto'><img className='w-full' src="/image/produtocomfort/bike.png" alt="" /></div>
                <div className='w-[calc(100%-800px)] max-xl:w-[calc(100%-65%)] max-gx:w-full max-gx:max-w-[600px] max-gx:mx-auto max-gx:text-center max-gx:mt-5'>
                    <h2 className="text-[40px] font-[UrbanistFont-Bold] text-[#343434]">BLIV Comfort</h2>
                    <p className="text-[22px] font-[UrbanistFont-Regular] text-[#343434] py-5">A bicicleta elétrica (ebike) perfeita para o seu dia a dia. Use para ir ao trabalho sem suar ou para seu lazer. O melhor jeito de mobilidade sustentável. </p>
                    <Link to={"/"} className="select-none inline-block rounded-md bg-[#c8000f] hover:bg-[#BD1E1E] text-[#ffffff] font-[UrbanistFont-Medium] text-[20px] px-14 max-sm:px-5 py-4">CONHEÇA NOSSOS PLANOS</Link>
                </div>

            </div>
        </section>
    )
}

export default ProdutoComfort;