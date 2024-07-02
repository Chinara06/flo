import React from 'react';
import { CiGlobe } from "react-icons/ci";
const Footer = () => {
    return (
        <footer className={"footer"}>
            <div className="container__small">
                <div className="footer__row">
                    <div className="footer__left">
                        <h4 className={"footer__title"}>
                            OUR Product
                        </h4>
                        <ul className="footer__items">
                            <li className="footer__item">
                                <a href="">Safety</a>
                                <a href="">Support Center</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__middle">
                        <h4 className={"footer__title"}>
                            COMPANY
                        </h4>
                        <ul className="footer__items">
                            <li className="footer__item">
                                <a href="">About</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__center">
                        <h4 className={"footer__title"}>
                            CONFIDENTIALITY
                        </h4>
                        <ul className="footer__items">
                            <li className="footer__item">
                                <a href="">Cookie Policy</a>
                                <a href="">Terms of Use</a>
                                <a href="">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__right">
                        <h4 className={"footer__title"}>
                            SOCIAL MEDIA
                        </h4>
                        <ul className="footer__items">
                            <li className="footer__item">
                                <a href="https://m.facebook.com/flotracker">Flo on Facebook</a>
                                <a href="https://www.instagram.com/flotracker/">Flo on Instagram</a>
                                <a href="https://www.tiktok.com/@flotracker?lang=en">Flo on TikTok</a>
                                <a href="https://uk.linkedin.com/company/flohealth">Flo on Linkedin</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="footer__nav">
                    <div className="footer__selects">
                        <form action="" className="footer__form">
                            <select name="" id="" className="footer__select">
                                <CiGlobe />
                                <option value="">  English</option>
                                <option value="">  Русский</option>
                                <option value=""> Español</option>
                                <option value="">  Deutsch</option>
                                <option value="">  Português</option>
                                <option value="">  Français</option>
                                <option value=""> Dansk</option>
                                <option value="">  Italiano</option>
                                <option value=""> 日本語</option>
                                <option value=""> 한국어</option>
                                <option value=""> Türkçe</option>
                                <option value=""> Українська</option>
                            </select>
                        </form>
                    </div>
                    <div className="footer__store">
                        <a href="https://apps.apple.com/us/app/flo-period-pregnancy-tracker/id1038369065">
                            <img src="https://flo.health/images/icons/app-store/RU/Black_lockup/SVG/app-store.svg" alt="#"/>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=org.iggymedia.periodtracker&hl=en&gl=US">
                            <img src="https://flo.health/images/icons/google-play/RU/Black_lockup/SVG/google-play.svg" alt="#"/>
                        </a>
                    </div>
                    <div className="footer__texts">
                        <p className="footer__text">
                            © 2024 Flo Health Inc., Flo Health UK Limited
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;