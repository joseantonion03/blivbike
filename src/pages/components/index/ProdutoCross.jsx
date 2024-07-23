import { Link } from 'react-router-dom';

const ProdutoCross = () => {
    return (
        <section id="produtoComfort" className="w-full h-auto min-h-[500px] p-[20px]">
            <div className="flex items-center mx-auto my-20 w-full max-w-[1200px] max-gx:flex-wrap">
                <div className='w-[calc(100%-800px)] max-xl:w-[calc(100%-65%)] max-gx:order-2 max-gx:w-full max-gx:max-w-[600px] max-gx:mx-auto max-gx:text-center max-gx:mt-5'>
                    <h2 className="text-[40px] font-[UrbanistFont-Bold] text-[#343434]">BLIV CROSS e-MTB</h2>
                    <p className="text-[22px] font-[UrbanistFont-Regular] text-[#343434] pt-5">A e-MTB Cross encara qualquer desafio. Ideal para entregas e mobilidade na cidade, no campo ou na praia.</p>
                    <p className='text-[#C8000F] text-[18px] font-[UrbanistFont-SemiBold] py-4'>BLIV a marca número #1 dos entregadores!</p>
                    <Link to={"/"} className="select-none inline-block rounded-md bg-[#c8000f] hover:bg-[#BD1E1E] text-[#ffffff] font-[UrbanistFont-Medium] text-[20px] px-14 max-sm:px-5 py-4">RESERVE A SUA</Link>
                </div>
                <div className='w-[800px] max-xl:w-[65%] max-gx:order-1 max-gx:w-full max-gx:max-w-[600px] max-gx:mx-auto'><img className='w-full' src="/image/produtocross/bike.png" alt="" /></div>

            </div>
        </section>
    )
}

export default ProdutoCross;