import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import './css/Drawer.css'; // Crie um arquivo CSS para estilizar o menu


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [{ x }, set] = useSpring(() => ({
        x: -300 // Largura do menu
    }));

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')

        }
    }, [isOpen])

    const openMenu = () => {
        setIsOpen(true);
        set({ x: 0 });
    };

    const closeMenu = () => {
        setIsOpen(false);
        set({ x: -300 });
    };

    const bind = useDrag(({ down, movement: [mx] }) => {
        if (down) {
            set({ x: mx });
        } else {
            if (mx > -150) {
                openMenu();
            } else {
                closeMenu();
            }
        }
    });

    //ESCREVA O DIRETORIO DE CADA PÁGINA NESSE OBJETO
    const dirPage = {
        comoalugar: "#",
        emtb: "#",
        ecomfort: "#",
        assinar: "#"
    }

    return (
        <header className="w-full h-[100px] border-b-[0.8px] border-solid border-[#efefef] px-5">
            <div className='flex justify-between items-center max-w-[1200px] mx-auto h-full'>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={168}
                        height={20}
                        viewBox="0 0 168 20"
                        fill="none"
                    >
                        <g clipPath="url(#clip0_10_8)">
                            <mask
                                id="mask0_10_8"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x={-18}
                                y={-12}
                                width={203}
                                height={44}
                            >
                                <path
                                    d="M-17.4276 -11.8658H184.731V31.0059H-17.4276V-11.8658Z"
                                    fill="white"
                                />
                            </mask>
                            <g mask="url(#mask0_10_8)">
                                <path
                                    d="M24.8737 8.08879H31.6446C36.235 8.08879 38.3455 7.23002 39.3519 5.90042C40.4211 4.48773 39.8607 3.71205 34.905 3.71205H28.1864L24.8737 8.08879ZM18.5418 16.4543H25.3123C30.7898 16.4543 33.3383 15.7065 34.5961 14.0446C35.8541 12.3824 34.438 11.6345 28.9607 11.6345H22.19L18.5418 16.4543ZM15.1379 0.000204086H40.8551C52.2791 0.000204086 55.6946 1.82833 53.1367 5.20782C51.082 7.92262 50.7055 9.19682 45.2679 9.83383L45.2258 9.88942C50.4209 10.0556 50.0572 11.4129 47.4572 14.8478C46.2831 16.3989 44.2021 17.7008 41.9668 18.449C38.6765 19.5569 35.8893 20 27.7514 20H0L15.1379 0.000204086Z"
                                    fill="#C8000F"
                                    fillOpacity="0.941176"
                                />
                                <path
                                    d="M62.2442 0H78.1021L66.6543 15.1247H84.025L80.3348 20H47.1061L62.2442 0Z"
                                    fill="#C8000F"
                                    fillOpacity="0.941176"
                                />
                                <path
                                    d="M97.5079 0H113.366L98.228 20H82.3699L97.5079 0Z"
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
                            <clipPath id="clip0_10_8">
                                <rect width="167.304" height={20} fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <nav className='max-nav:hidden'>
                    <ul className='flex'>
                        <li className="px-4 text-[#0B2B54] text-[20px] font-[UrbanistFont-Regular]"><Link to={dirPage.comoalugar}>Como alugar</Link></li>
                        <li className="px-4 text-[#0B2B54] text-[20px] font-[UrbanistFont-Regular]"><Link to={dirPage.emtb}>e-MTB</Link></li>
                        <li className="px-4 text-[#0B2B54] text-[20px] font-[UrbanistFont-Regular]"><Link to={dirPage.ecomfort}>e-CONFORT</Link></li>
                    </ul>
                </nav>
                <Link to={dirPage.assinar} className="select-none inline-block rounded-[5px] bg-[#c8000f] hover:bg-[#BD1E1E] text-[#ffffff] font-[UrbanistFont-Medium] text-[20px] px-10 py-3 max-nav:hidden">ASSINE AGORA</Link>
                <button
                    className='nav:hidden'
                    onClick={openMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-12"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>

            </div>

            <div className="w-full h-full nav:hidden relative">
                <animated.div
                    className="fixed top-0 z-[999] left-0 px-[20px] w-full h-full max-w-[300px] bg-[#f5f5f5]"
                    {...bind()}
                    style={{ transform: x.to(x => `translateX(${x}px)`) }}
                >
                    <div className="flex flex-col">
                        <div className='w-full h-[100px] border-b-[0.8px] border-solid border-[#efefef] flex items-center justify-between'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={168}
                                height={20}
                                viewBox="0 0 168 20"
                                fill="none"
                                className='max-w-[150px]'
                            >
                                <g clipPath="url(#clip0_10_8)">
                                    <mask
                                        id="mask0_10_8"
                                        style={{ maskType: "luminance" }}
                                        maskUnits="userSpaceOnUse"
                                        x={-18}
                                        y={-12}
                                        width={203}
                                        height={44}
                                    >
                                        <path
                                            d="M-17.4276 -11.8658H184.731V31.0059H-17.4276V-11.8658Z"
                                            fill="white"
                                        />
                                    </mask>
                                    <g mask="url(#mask0_10_8)">
                                        <path
                                            d="M24.8737 8.08879H31.6446C36.235 8.08879 38.3455 7.23002 39.3519 5.90042C40.4211 4.48773 39.8607 3.71205 34.905 3.71205H28.1864L24.8737 8.08879ZM18.5418 16.4543H25.3123C30.7898 16.4543 33.3383 15.7065 34.5961 14.0446C35.8541 12.3824 34.438 11.6345 28.9607 11.6345H22.19L18.5418 16.4543ZM15.1379 0.000204086H40.8551C52.2791 0.000204086 55.6946 1.82833 53.1367 5.20782C51.082 7.92262 50.7055 9.19682 45.2679 9.83383L45.2258 9.88942C50.4209 10.0556 50.0572 11.4129 47.4572 14.8478C46.2831 16.3989 44.2021 17.7008 41.9668 18.449C38.6765 19.5569 35.8893 20 27.7514 20H0L15.1379 0.000204086Z"
                                            fill="#C8000F"
                                            fillOpacity="0.941176"
                                        />
                                        <path
                                            d="M62.2442 0H78.1021L66.6543 15.1247H84.025L80.3348 20H47.1061L62.2442 0Z"
                                            fill="#C8000F"
                                            fillOpacity="0.941176"
                                        />
                                        <path
                                            d="M97.5079 0H113.366L98.228 20H82.3699L97.5079 0Z"
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
                                    <clipPath id="clip0_10_8">
                                        <rect width="167.304" height={20} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <button
                                onClick={closeMenu}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-12"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </button>

                        </div>
                        <ul className='flex flex-col py-4'>
                            <li className="py-2 text-[#0B2B54] text-[20px] font-[UrbanistFont-Regular]"><Link to={dirPage.comoalugar}>Como alugar</Link></li>
                            <li className="py-2 text-[#0B2B54] text-[20px] font-[UrbanistFont-Regular]"><Link to={dirPage.emtb}>e-MTB</Link></li>
                            <li className="py-2 text-[#0B2B54] text-[20px] font-[UrbanistFont-Regular]"><Link to={dirPage.ecomfort}>e-CONFORT</Link></li>
                        </ul>
                        <Link to={dirPage.assinar} className="select-none inline-block my-5 rounded-[5px] bg-[#c8000f] hover:bg-[#BD1E1E] text-[#ffffff] font-[UrbanistFont-Medium] text-[20px] text-center w-full py-3">ASSINE AGORA</Link>
                    </div>
                </animated.div>
                {isOpen && <div className="overflay fixed top-0 left-0 w-full h-full bg-[#00000080] backdrop-blur-sm z-[998]" onClick={closeMenu}></div>}

            </div>
        </header>
    );
}

export default Header;
