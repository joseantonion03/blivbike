import { Link } from 'react-router-dom';
import { useRef, useState } from "react"


const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div
            className="overflow-hidden mb-2.5"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h2 data-aos="fade-up" className="cursor-pointer p-5 rounded-md flex items-center justify-between bg-[#343434] text-white font-[UrbanistFont-Medium]">
                {faqsList.q}

                {



                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        className={`${state ? '-rotate-90' : ''} mr-3 transition-transform duration-300 ease-linear`}

                    >
                        <path d="M11.3086 17.3867L10.4414 18.2539C10.0742 18.6211 9.48047 18.6211 9.11719 18.2539L1.52344 10.6641C1.15625 10.2969 1.15625 9.70312 1.52344 9.33984L9.11719 1.74609C9.48437 1.37891 10.0781 1.37891 10.4414 1.74609L11.3086 2.61328C11.6797 2.98437 11.6719 3.58984 11.293 3.95312L6.58594 8.4375L17.8125 8.4375C18.332 8.4375 18.75 8.85547 18.75 9.375V10.625C18.75 11.1445 18.332 11.5625 17.8125 11.5625L6.58594 11.5625L11.293 16.0469C11.6758 16.4102 11.6836 17.0156 11.3086 17.3867Z" fill="white" />
                    </svg>

                }

            </h2>
            <div
                ref={answerElRef}
                className="duration-300"
                style={state ? { height: answerH, borderRadius: '0px 0px 5px 5px', background: 'rgba(52, 52, 52, 0.60)' } : { height: '0px' }}
            >
                <div className='px-3 pt-2 pb-1'>
                    <p className="text-gray-100 p-2">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}


const Faq = () => {
    const faqsList = [
        {
            q: "Qual a capacidade da bateria?",
            a: "Até 60 km dependendo do trajeto. Os carregadores das baterias são como de notebook, o carregador é bivolt e da uma carga completa em 4 a 5 horas ao custo de aproximadamente R$0,30 de energia elétrica."
        },
        {
            q: "Qual o tempo de vida útil de uma bateria?",
            a: "A bateira tem um ciclo de 1000 cargas, em média as bikes seminovas tem 6 meses de uso e já devem ter usado 50 ciclos de carga, com uma vida útil ainda de 2,5 anos."
        },
        {
            q: "Posso pegar chuva com a bike?",
            a: "Pode sim, só não pode pegar inundação e jato de água."
        },
        {
            q: "As bike seminova estão em bom estado?",
            a: "Nossas bicicletas seminovas são utilizadas no máximo 6 meses, e bem conservadas. O valor varia de acordo com os Km rodado e o modelo."
        },
        {
            q: "Como é feita a assinatura?",
            a: "A assinatura é feita diretamente aqui no site com cartão de crédito e os valores são lançados uma vez por mês. Só precisa ter disponível o valor do lançamento mensal."
        },
        {
            q: "Vocês vendem bike elétrica? ",
            a: "Sim. Em nosso site você pode checar as bikes disponíveis para venda."
        },
        {
            q: "Test RIDE?",
            a: "A melhor maneira de sentir os benefícios da bike elétrica BLIV é realmente pedalando. Nosso show room fica na Rua Heitor Penteado, 257. Será um prazer recebê-lo."
        },
        {
            q: "Tem aluguel por dia ou final de semana?",
            a: "Não. Nossos planos de assinatura são mensais, trimestrais, semestrais e anuais."
        },
        {
            q: "Eu pago a manutenção?",
            a: "odas as peças que necessitam ser trocadas por conta de desgaste nós cobrimos, como pastilhas de freios e pedais. A manutenção é feita no nosso showroom fica na Rua Heitor Penteado, 1017 ao lado do metrô Vila Madalena."
        },
        {
            q: "Em caso de compra, tenho vantagem por ser assinante?",
            a: "Claro!! Oferecemos descontos especiais para assinantes."
        },
        {
            q: "Qual o valor das bikes para compra?",
            a: "Os valores das bikes variam de acordo com o tempo de uso e seus Km rodados. A forma de pagamento é em até 12x no seu cartão."
        },
        {
            q: "Tem desconto para assinatura?",
            a: "Temos descontos proporcionados de acordo com o seu plano, quanto maior a fidelização maior será o seu desconto.	"
        },
        {
            q: "Caso não fique um ano com a bike?",
            a: "Se devolver a bike antes do prazo contratado, uma taxa de 30% do total das parcelas restantes será cobrada."
        },

    ]
    return (
        <section id="especificacoes" className="relative w-full h-auto my-40 p-[20px]">
            <div className='flex max-lg:flex-wrap justify-between max-w-[1000px] mx-auto'>
                <div className='w-[480px] max-lg:w-full lg:h-[350px] max-lg:mb-10 relative'>
                    <h3 className='font-[UrbanistFont-ExtraBold] text-[240px] text-[#1E1E1E] opacity-10 text-center select-none max-screen_500:text-[40vw] max-screen_500:leading-[40px]'>FAQ</h3>
                    <h2 className="text-[33px] font-[UrbanistFont-Bold] text-[#C8000F] text-center leading-[40px] screen_500:absolute screen_500:whitespace-nowrap screen_500:left-[50%] screen_500:translate-x-[-50%] screen_500:top-[60%]">PERGUNTAS FREQUENTES</h2>
                    <Link to={""} className='flex items-center font-[UrbanistFont-Regular] text-[18px] max-lg:justify-center lg:ml-[30px] select-none max-screen_500:pt-10'>Suporte <svg
                        width={29}
                        height={29}
                        viewBox="0 0 29 29"
                        fill="none"
                        className='ml-2'
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle opacity="0.1" cx="14.5" cy="14.5" r="14.5" fill="#1E1E1E" />
                        <g clipPath="url(#clip0_38_436)">
                            <path
                                d="M11.3333 18.6667L19.125 10.875"
                                stroke="#1E1E1E"
                                strokeWidth="1.375"
                            />
                            <path
                                d="M10.875 10.875H19.125V19.125"
                                stroke="#1E1E1E"
                                strokeWidth="1.375"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_38_436">
                                <rect width={22} height={22} fill="white" transform="translate(4 4)" />
                            </clipPath>
                        </defs>
                    </svg>
                    </Link>
                </div>
                <div className='w-[calc(100%-500px)] max-lg:w-full max-lg:max-w-[600px] max-lg:mx-auto'>
                    {
                        faqsList.map((item, idx) => (
                            <FaqsCard
                                idx={idx}
                                key={idx}
                                faqsList={item}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Faq;