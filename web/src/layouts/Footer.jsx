// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'
import footer_icon from '../assets/hive.svg'
import { ThemeContext } from '../Context/ThemeContext'
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const { theme } = useContext(ThemeContext)
    const location = useLocation();

    return (
        <footer className={`text-gray-400 ${theme.bg_Selected} body-font`}>
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <Link to="/" className="flex order-first  title-font font-medium items-center text-white  mb-4 md:mb-0">
  
                <a className={`flex title-font font-medium items-center md:justify-start justify-center ${theme.text_Color}`} >
                    <span className="text-xl">StarterHive</span>
                    <img className='object-contain h-6 w-6 ml-3 ' src={footer_icon} />
                </a>
             </Link>   
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023 StarterHive —
                    <a href="https://twitter.com/ArsalanYmalik" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@ArslanYM</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="https://twitter.com/ArsalanYmalik" target="_blank" className="text-gray-400" rel="noreferrer">
                        <FaTwitter className="text-2xl duration-300 hover:fill-sky-500" />
                    </a>
                    <a href="https://github.com/ArslanYM/StarterHive" target="_blank" className="ml-5 text-gray-400" rel="noreferrer">
                        <FaGithub className="text-2xl duration-300 hover:fill-gray-600" />
                    </a>
                    <a href="https://discord.gg/VkBTKUeVnG" target="_blank" className="ml-5 text-gray-400" rel="noreferrer">
                        <FaDiscord className="text-2xl duration-300 hover:fill-violet-500" />
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;
