import React from 'react';

const Help = () => {
    return (
        <section className={"help"}>
                <div className="help__row">
                        <h2 className="help__title">
                            How can Flo help you?
                        </h2>
                      <div className="help__inner">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" focusable="false"
                               xmlns="http://www.w3.org/2000/svg" className="search-icon" aria-hidden="true">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.125 18 13.078 17.2635 14.6177 16.0319L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L16.0319 14.6177C17.2635 13.078 18 11.125 18 9C18 4.02944 13.9706 0 9 0Z"
                                    fill="#828282"></path>
                          </svg>
                          <label className="help__form">
                              <input type="search" placeholder="What would you like to find?" size={"40"}/>
                          </label>
                </div>
            </div>
            <section className="about">
                <div className="about__row">
                    <div className="about__card">
                        <ul className="about__list">
                            <li className={"about__item"}>
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/21509109f59a9c24223cdb61d5e36d9efa9d7f07.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Getting Started
                                    </div>
                                </a>
                            </li>
                        </ul>
                            <ul className="about__list">
                            <li className={"about__item"}>
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/6463e960f5062f4edcadf26c166e440f75963295.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Account & Data
                                    </div>
                                </a>
                            </li>
                            </ul>
                                <ul className="about__list">
                            <li className={"about__item"}>
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/be64ecb001f514018883a14dda6f9e469fedb3d0.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Using Flo
                                    </div>
                                </a>
                            </li>
                                </ul>
                                    <ul className="about__list">
                            <li className={"about__item"}>
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/48fc614c779fda7e5888b339763605ad0deb6c57.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Subscriptions & Billing
                                    </div>
                                </a>
                            </li>
                                    </ul>
                                        <ul className="about__list">
                            <li className={"about__item"}>
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/331b9932273132d3a7e05bd5f1a2ed84becae7a9.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Troubleshooting
                                    </div>
                                </a>
                            </li>
                                        </ul>
                                            <ul className="about__list">
                            <li className={"about__item"}>
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/2b214da859893257f75b6a60bedacdf0346b5684.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        General Questions
                                    </div>
                                </a>
                            </li>
                                            </ul>
                                                <ul className="about__list">
                            <li className={"about__item"}>
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/8c974237375f70f24850303223786afca9565916.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Flo for Partners
                                    </div>
                                </a>
                            </li>
                                                </ul>
                                                    <ul className="about__list">
                            <li className={"about__item"}>
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/bc784601a2bc8d3e4f9dd7595c7dbd41a3213568.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Getting Started
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="contact">
                <div className="container">
                    <div className="contact__row">
                        <h3 className="contact__title">
                            Didn't find the answer?
                        </h3>
                        <button className="contact__btn">
                            Contact us
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Help;