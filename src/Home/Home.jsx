import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
            <section className={"flo"}>
                <div className="header__bottom">
                    <div className="container">
                        <p className="header__text">Flo for two: we tell you what it is and
                            <Link to={"/partners"}>
                                <a href=""> how to register</a>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="flo__row">
                        <h1 className="flo__title">
                            Monitor your overall <br/> health, not just your<br/> cycle
                        </h1>
                        <p className="flo__text">
                            Flo's mission is to support the health and wellness of every girl, every <br/> woman and every person who menstruates, anywhere in the world.
                        </p>
                    </div>
                </div>
            <section className="forecast">
                <div className="container">
                  <div className="flo__roww">
                      <div className="flo__left">
                          <img className={"flo__img"} src="https://flo.health/uploads/media/sulu-1230x-inset/00/5150-img_product_1.png?v=1-0" alt="#" width={"420"} height={"599"}/>
                      </div>
                      <div className="flo__right">
                          <h3 className="flo__titles">
                              Get forecasts for your <br/> cycle based on artificial <br/> intelligence
                          </h3>
                          <p className="flo__texts">
                              Flo creates the most accurate period and ovulation <br/> forecasts based on artificial intelligence, tracking  <br/> more than 70 symptoms, such as lower abdominal  <br/> pain, discharge patterns, headaches, and more.
                          </p>
                      </div>
                  </div>
                </div>
                </section>

                    <section className="tab">
                        <div className="container">
                        <div className="flo__menu">
                            <a className={"flo__actives"} href="#">Medical experts</a>
                            <a className={"flo__actives"}  href="#">Science and research</a>
                        </div>
                        <div className="tab__expertises">
                            <div className="flo__list">
                                <div className="tab__item">
                                    <img src="https://flo.health/uploads/media/sulu-1230x-inset/04/5064-img_doc2.jpg?v=1-0" alt="#" width={"170"} height={"170"}/>
                                </div>
                                <div className="tab__item">
                                    <img src="https://flo.health/uploads/media/sulu-1230x-inset/03/5063-img_doc1.jpg?v=1-0" alt="#" width={"170"} height={"170"}/>
                                </div>
                                <div className="tab__item">
                                    <img src="https://flo.health/uploads/media/sulu-1230x-inset/02/5062-img_doc3.jpg?v=1-0" alt="#" width={"170"} height={"170"}/>
                                </div>
                                <div className="tab__item">
                                 <div className="tab__rounds">
                                     <div className="header__round">
                                         <span>100+</span>
                                     </div>

                                  </div>
                                </div>
                            </div>
                            <p className="flo__desc">
                                Our team of scientists, doctors and healthcare professionals bring you science-based content you can trust.
                            </p>
                        </div>
                        </div>
                    </section>

                <section className="security">
                    <div className="container">
                        <h2 className="flo__subtitle">
                            Your data is <br/> protected
                        </h2>
                        <p className="flo__descs">
                            You trust us with your personal information, so we guarantee absolute transparency regarding our security policies and data usage.
                        </p>
                        <Link to={"/privacy"}>
                        <div className="security__control">
                                <a href={""}>
                                    Learn more about privacy and security
                                </a>
                        </div>
                        </Link>
                    </div>
                </section>
                <section className="mentioning">
                    <div className="container">
                        <div className="mentioning__items">
                            <div className="mentioning__item">
                                <div className="mentioning__image">
                                    <img src="https://flo.health/uploads/media/sulu-1230x-inset/09/5069-logo_vogue.svg?v=1-0" alt="img"/>
                                </div>
                                <p className="mentioning__text">
                                    “Flo shares information with women that makes them stronger.”
                                </p>
                            </div>
                            <div className="mentioning__item">
                                <div className="mentioning__image">
                                    <img src="https://flo.health/uploads/media/sulu-1230x-inset/01/5071-logo_wh.svg?v=1-0" alt="img"/>
                                </div>
                                <p className="mentioning__text">
                                    “Even if you don’t use Flo yourself yet, someone you know probably already uses it.”
                                </p>
                            </div>
                            <div className="mentioning__item">
                                <div className="mentioning__image">
                                    <img src="https://flo.health/uploads/media/sulu-1230x-inset/00/5070-logo_wsj.svg?v=1-0" alt="img"/>
                                </div>
                                <p className="mentioning__text">
                                    “Flo’s goal is to become not just an app, but a platform that answers any questions about women’s health.”
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="articles">

                        <div className="articles__naw">
                            <a className="articles-title">
                                Articles
                            </a>
                        </div>
                        <div className="articles__cards">
                            <div className="articles__card">
                                <a href="">
                                    <div className="articles__image">
                                        <img src="https://flo.health/uploads/media/sulu-576x300-inset/02/1442-shutterstock_591242858.jpg?v=1-0" alt="#" width={"278"} height={"225"}/>
                                    </div>
                                    <p className="articles__card-text">
                                        Stressful state
                                    </p>
                                </a>
                            </div>
                            <div className="articles__card">
                                <a href="">
                                    <div className="articles__image">
                                        <img src="https://flo.health/uploads/media/sulu-576x300-inset/03/1033-depressed%20woman%20on%20the%20bed.jpg?v=1-0" width={"278"} height={"225"} alt="#"/>
                                    </div>
                                    <p className="articles__card-text">
                                        Seasonal depressive disorder
                                    </p>
                                </a>
                            </div>
                            <div className="articles__card">
                                <a href="">
                                    <div className="articles__image">
                                        <img src="https://flo.health/uploads/media/sulu-576x300-inset/09/599-baby%20blues%20-%20m.jpg?v=1-0" alt="#" width={"278"} height={"225"}/>
                                    </div>
                                    <p className="articles__card-text">
                                        Postpartum depression
                                    </p>
                                </a>
                            </div>
                            <div className="articles__card">
                                <a href="">
                                    <div className="articles__image">
                                        <img src="https://flo.health/uploads/media/sulu-576x300-inset/06/1236-woman%20suffering%20from%20depression%20sitting%20on%20bed.jpg?v=1-0" alt="#"  width={"278"} height={"225"}/>
                                    </div>
                                    <p className="articles__card-text">
                                        Clinical depression
                                    </p>
                                </a>
                            </div>
                        </div>
                </section>
            </section>
    );
};

export default Home;