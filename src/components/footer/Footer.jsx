import React from 'react'
import { FaLinkedin , FaTelegram, FaGithub, FaDiscord, FaSkype, FaMedium, FaMailchimp } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
        <div className="footer__socials">

                <a href="https://www.linkedin.com/in/radoslavatanasovde" target='_blank' className="footer__social-links">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/radoslavatanasov1" target='_blank' className="footer__social-links">
                    <FaGithub/>
                </a>
                <a href="mailto:radoslavatanasovoffical1@gmail.com" target='_blank' className="footer__social-links">
                    <FaMailchimp/>
                </a>

            </div>
  
            <p className="footer__copyright text-cs">Designed and Developed by <span>Radoslav A.</span></p>
        </div>
    </footer>
  )
}

export default Footer