import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer" className="relative w-full h-auto px-[20px] pt-36 pb-10">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={168}
                height={20}
                viewBox="0 0 168 20"
                fill="none"
                className='text-center mx-auto my-2'
            >
                <g clipPath="url(#clip0_38_549)">
                    <mask
                        id="mask0_38_549"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={-18}
                        y={-12}
                        width={203}
                        height={44}
                    >
                        <path
                            d="M-17.4275 -11.8658H184.731V31.0059H-17.4275V-11.8658Z"
                            fill="white"
                        />
                    </mask>
                    <g mask="url(#mask0_38_549)">
                        <path
                            d="M24.8737 8.08879H31.6446C36.235 8.08879 38.3455 7.23002 39.3519 5.90042C40.4211 4.48773 39.8607 3.71205 34.905 3.71205H28.1864L24.8737 8.08879ZM18.5418 16.4543H25.3123C30.7898 16.4543 33.3383 15.7065 34.5961 14.0446C35.8541 12.3824 34.438 11.6345 28.9607 11.6345H22.19L18.5418 16.4543ZM15.1379 0.000204086H40.8551C52.2791 0.000204086 55.6946 1.82833 53.1367 5.20782C51.082 7.92262 50.7055 9.19682 45.2679 9.83383L45.2258 9.88942C50.4209 10.0556 50.0572 11.4129 47.4572 14.8478C46.2831 16.3989 44.2021 17.7008 41.9668 18.449C38.6765 19.5569 35.8893 20 27.7514 20H1.90735e-06L15.1379 0.000204086Z"
                            fill="#C8000F"
                            fillOpacity="0.941176"
                        />
                        <path
                            d="M62.2441 0H78.1021L66.6542 15.1247H84.025L80.3347 20H47.1061L62.2441 0Z"
                            fill="#C8000F"
                            fillOpacity="0.941176"
                        />
                        <path
                            d="M97.508 0H113.366L98.228 20H82.3699L97.508 0Z"
                            fill="#C8000F"
                            fillOpacity="0.941176"
                        />
                        <path
                            d="M114.618 0H132.093L131.922 12.6317L151.133 0H167.304L135.526 20H116.12L114.618 0Z"
                            fill="#C8000F"
                            fillOpacity="0.941176"
                        />
                    </g>
                </g>
                <defs>
                    <clipPath id="clip0_38_549">
                        <rect width="167.304" height={20} fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <h2 className="text-[25px] font-[UrbanistFont-Medium] text-[#181818] text-center mt-5 mb-1 leading-[40px]">BLIV SOLUCOES URBANAS DE MOBILIDADE LTDA - 31.880.931/0001-55</h2>
            <p className="text-[18px] font-[UrbanistFont-Medium] text-[#181818] text-center ">© BLIV BIKE. ALL RIGHTS RESERVED.</p>
            <p className="font-[UrbanistFont-Regular] text-[25px] text-[#181818] leading-[35px] flex justify-center flex-wrap my-10">Desenvolvido por: <img className="w-[130px] ml-3" src="/image/footer/atomo.webp" alt="Agencia Atomo" /></p>
        </footer>
    )
}

export default Footer;