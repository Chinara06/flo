import {React , useState} from 'react';
import {Link} from "react-router-dom"

const Header = () => {
    return (
            <header className={"header"}>
                <div className="container">
                    <div className="header__top active">
                        <nav className="header__nav">
                           <div className="header__content">
                               <Link to={"/"}>
                                               <span>
                      <svg width="78" height="36" viewBox="0 0 78 36" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flo Health logo">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.8499 31.1816C43.3618 31.202 43.4025 30.7545 44.1144 30.6731C45.5789 30.5104 46.9417 29.7171 47.7349 28.1306C48.7723 26.0559 47.9383 24.0422 47.2671 23.1676C46.4128 22.0692 46.7383 22.2319 47.5112 22.6387C48.2028 23.0049 48.935 23.4727 49.7486 24.1846C49.0774 18.6114 51.3758 14.4619 53.1251 12.3059C54.0187 11.2137 53.8654 12.0213 53.7252 12.7606L53.715 12.8144C53.3488 14.8281 53.5726 17.1672 54.1014 18.7334C53.898 15.8044 55.2812 0 65.5937 0C75.8859 0 80.076 11.3092 77.0249 20.4216C74.157 28.9849 64.6987 29.6765 63.2342 29.6765C65.3903 30.2053 67.343 30.0019 68.4007 29.7782C68.4383 29.771 68.4786 29.7629 68.5202 29.7545C68.9512 29.6678 69.5237 29.5525 68.7261 30.1646C66.2853 32.0563 63.5597 33.1953 60.59 33.5411C57.8644 33.8462 55.688 33.4394 54.1625 32.9919C54.2031 33.5208 54.2235 34.2327 54.2031 34.7209C54.1731 35.2417 54.1381 35.1904 53.9136 34.8607C53.6821 34.521 53.2494 33.8858 52.4132 33.2767C50.8702 32.1616 49.2611 32.1376 48.7345 32.1297C48.6213 32.128 48.5582 32.127 48.5564 32.1162C48.5542 32.1024 48.65 32.0729 48.8668 32.0059C48.9325 31.9857 49.0092 31.962 49.0977 31.9342C51.7623 31.1003 54.4269 29.9816 57.5389 27.8255C61.8918 24.7948 64.2309 21.3573 64.0682 21.2353C64.0597 21.2296 63.9883 21.3088 63.8544 21.4573C63.0219 22.3806 59.772 25.985 54.1828 28.5781C50.0537 30.4697 46.0874 31.0393 43.8499 31.1816ZM16.8584 16.4756C17.9567 16.6587 17.0618 18.4893 15.8617 18.591C15.8222 18.595 15.7184 18.6004 15.563 18.6086C14.9177 18.6427 13.3832 18.7237 11.875 18.9368C11.6716 19.4453 11.4682 19.9742 11.2648 20.5233C9.08838 26.4424 8.39681 30.3884 8.23409 31.6291C8.07137 32.8495 5.02033 31.6902 5.08135 29.5341C5.12203 27.8255 6.2204 23.5947 7.19674 20.381C5.97632 20.9912 4.97965 21.7641 4.59318 22.598C3.27106 22.6591 1.58282 21.459 2.43711 19.7708C3.27106 18.0825 5.85428 17.3909 8.35613 16.9841C9.86131 12.7534 11.1631 9.70231 12.0174 8.52258C12.0377 8.50224 12.053 8.4819 12.0682 8.46155C12.0835 8.44121 12.0987 8.42087 12.1191 8.40053C6.58653 9.43789 3.96263 11.3499 2.86426 12.9568C-0.00372061 12.8957 -1.59026 8.82768 2.37609 6.99706C6.26108 5.20711 12.2411 4.6986 18.0381 4.73928C23.8758 4.77997 28.2286 5.69528 29.6931 6.24447C30.8118 6.67161 29.9168 8.44122 28.7574 8.38019C28.5777 8.37163 28.2664 8.32074 27.8284 8.24913L27.8284 8.24912C26.1848 7.9804 22.7566 7.41988 17.794 7.70897C17.794 7.75725 17.7685 7.80554 17.7378 7.8639L17.7377 7.86393C17.7296 7.87931 17.7211 7.8954 17.7127 7.91237C16.5736 9.29551 14.7226 12.3465 12.9124 16.4756C14.804 16.3739 16.4109 16.4146 16.8584 16.4756ZM30.9745 19.2216C31.6661 18.4079 33.2323 16.9638 35.4697 16.9231C37.8699 16.8621 40.3107 19.4453 37.9309 25.6898C36.4054 29.6968 33.7205 32.9919 29.9168 32.9716C27.8015 32.9716 26.6014 31.3647 26.3166 29.2696C25.0555 30.7952 22.5943 32.9919 20.0721 32.9919C16.4719 32.9919 16.4109 28.5781 18.7093 21.5403C20.5603 15.8857 22.8994 12.6516 23.7944 12.0414C26.0522 10.4956 29.6117 12.0821 28.3506 13.2619C27.6997 13.8721 24.9335 17.696 23.1028 22.2929C21.2519 26.8695 21.0281 29.29 22.4316 29.29C23.7131 29.29 25.9912 26.8288 26.6217 25.8321C26.6451 25.7388 26.6751 25.6521 26.7042 25.5683C26.7257 25.506 26.7468 25.4453 26.7641 25.3847C27.7811 22.354 29.1236 20.0962 30.0999 19.486C30.3643 19.3233 30.6491 19.2419 30.9745 19.2216ZM31.1779 29.2086C32.9069 29.2086 34.6358 27.1136 35.6528 24.6524C36.4461 22.6794 36.385 20.1979 34.8392 20.2182C34.3917 20.2386 34.0256 20.4013 33.7205 20.6454C33.7408 20.8488 33.6798 21.0522 33.5171 21.2352C33.0885 21.7531 31.5469 23.9797 30.9566 24.8322C30.8746 24.9508 30.8109 25.0428 30.7711 25.0999C29.8151 26.8695 29.8558 29.2086 31.1779 29.2086Z" fill="#FF5A7D"></path>
</svg>
                  </span>
                               </Link>
                               <ul className={"header__list"}>
                                   <li className={"header__item"}><a href="#">Product</a>
                                       <ul className={"header__ul"}>
                                           <Link to={"/tracking"}>
                                               <li className={"header__items"}><a href="#">Tracking-cycle</a></li>
                                           </Link>
                                           <Link to={"/pregnant"}>
                                               <li className={"header__items"}><a href="#">Getting-pregnant</a></li>
                                           </Link>
                                           <Link to={"/pregnancy"}>
                                               <li className={"header__items"}><a href="#">Pregnancy</a></li>
                                           </Link>
                                           <Link to={"/partner"}>
                                               <li className={"header__items"}><a href="#">Partners</a></li>
                                           </Link>
                                           <Link to={"/pregnant"}>
                                               <li className={"header__items"}><a href="#">Pregnant</a></li>
                                           </Link>
                                           <Link to={"/help"}>
                                               <li className={"header__items"}><a href="#">Help center</a></li>
                                           </Link>
                                       </ul>
                                   </li>
                                   <li className={"header__item"}><a href="">About</a>
                                       <ul  className={"header__ul"}>
                                           <Link to={"/medical"}>
                                               <li><a href="#">Medical Affairs</a></li>
                                           </Link>
                                           <Link to={"/research"}>
                                               <li><a href="#">Science & Research</a></li>
                                           </Link>
                                           <Link to={"/press"}>
                                               <li><a href="#">Press center</a></li>
                                           </Link>
                                           <Link to={"/contact"}>
                                               <li><a href="#">Contact us</a></li>
                                           </Link>
                                       </ul>
                                   </li>
                                   <Link to={"/library"}>
                                       <li className={"header__item"}><a href="">Health Library</a>
                                           <ul  className={"header__ul"}>
                                               <Link to={"/cycle"}>
                                                   <li><a href="#">Your cycle</a></li>
                                               </Link>
                                               <Link to={"/health"}>
                                                   <li><a href="#">Health 360°</a></li>
                                               </Link>
                                               <Link to={"/getting"}>
                                                   <li><a href="#">Getting pregnant</a></li>
                                               </Link>
                                               <Link to={"/pregnancyTwo"}>
                                                   <li><a href="#">Pregnancy</a></li>
                                               </Link>
                                               <Link to={"/being"}>
                                                   <li><a href="#">Being a mom</a></li>
                                               </Link>
                                               <Link to={"/calculators"}>
                                                   <li><a href="#">Calculators</a></li>
                                               </Link>
                                           </ul>
                                       </li>
                                   </Link>

                                   <Link to={"/calculators"}>
                                       <li className={"header__item"}><a href="">Calculators</a>
                                           <ul  className={"header__ul"}>
                                               <Link to={"/ovulation"}>
                                                   <li><a href="#">Ovulation-calculator</a></li>
                                               </Link>
                                               <Link to={"/hcg"}>
                                                   <li><a href="#">hCG calculator</a></li>
                                               </Link>
                                               <Link to={"/test"}>
                                                   <li><a href="#">Pregnancy test calculator</a></li>
                                               </Link>
                                               <Link to={"/period"}>
                                                   <li><a href="#">Period calculator</a></li>
                                               </Link>
                                               <Link to={"/implantation"}>
                                                   <li><a href="#">Implantation calculator</a></li>
                                               </Link>
                                               <Link to={"/pregnancyCalc"}>
                                                   <li><a href="#">Pregnancy calculator</a></li>
                                               </Link>
                                               <Link to={"/due"}>
                                                   <li><a href="#">Pregnancy due date calculator</a></li>
                                               </Link>
                                               <Link to={"/ivf"}>
                                                   <li><a href="#">IVF and FET due date calculator</a></li>
                                               </Link>
                                               <Link to={"/ultrasound"}>
                                                   <li><a href="#">Due date by ultrasound calculator</a></li>
                                               </Link>
                                           </ul>
                                       </li>
                                   </Link>
                               </ul>
                           </div>
                            <div className="header__lists">
                                <ul className={"header__list"}>
                                    <Link to={"/try"}>
                                        <li className={"header__item"}>
                                            <a href="">Manage subscription</a>
                                        </li>
                                    </Link>
                                </ul>
                                <Link to={"/try"}>
                                    <div className="header__btn">
                                        <button className="header__btn">
                                            Try Flo today
                                        </button>
                                    </div>

                                </Link>
                            </div>

                        </nav>
                    </div>
                </div>

            </header>


    );
};

export default Header;