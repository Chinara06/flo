import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
            <section className={"flo"}>
                <div className="header__bottom">
                    <div className="container">
                        <p className="header__text">
                            Flo для двоих: рассказываем, что это и
                            <Link to={"/partners"}>
                                <a href=""> как зарегистрироваться</a>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="flo__row">
                        <h1 className="flo__title">
                            Следите за <br/> здоровьем в <br/> целом, не только <br/> за циклом
                        </h1>
                        <p className="flo__text">
                            Задача Flo — поддерживать здоровье и хорошее самочувствие <br/> каждой девушки, каждой женщины и каждого человека, у которого <br/> есть месячные, в любой точке мира
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
                              Получайте прогнозы <br/> по вашему циклу на <br/> основе  <br/> искусственного <br/> интеллекта
                          </h3>
                          <p className="flo__texts">
                              Flo создает наиболее точные прогнозы месячных и <br/> овуляции на основе искусственного интеллекта, <br/> отслеживая более 70 симптомов, таких как боли <br/> внизу живота, характер выделений, головная боль <br/> и др.
                          </p>
                      </div>
                  </div>
                </div>
                </section>

                    <section className="tab">
                        <div className="container">
                        <div className="flo__menu">
                            <a className={"flo__actives"} href="#">Медицинские эксперты</a>
                            <a className={"flo__actives"}  href="#">Наука и исследования</a>
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
                                Наша команда ученых, врачей и медицинских специалистов создает для вас научно обоснованные материалы, которым можно доверять.
                            </p>
                        </div>
                        </div>
                    </section>

                <section className="security">
                    <div className="container">
                        <h2 className="flo__subtitle">
                            Ваши данные —  под защитой
                        </h2>
                        <p className="flo__descs">
                            Вы доверяете нам личную информацию, поэтому мы гарантируем абсолютную прозрачность в отношении нашей политики безопасности и использования данных
                        </p>
                        <div className="security__control">
                            <a href="">
                                Узнать больше о конфиденциальности и безопасности
                            </a>
                        </div>
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
                                    «Flo делится с женщинами информацией, которая  делает их сильнее»
                                </p>
                            </div>
                            <div className="mentioning__item">
                                <div className="mentioning__image">
                                    <img src="https://flo.health/uploads/media/sulu-1230x-inset/01/5071-logo_wh.svg?v=1-0" alt="img"/>
                                </div>
                                <p className="mentioning__text">
                                    «Даже если вы сами еще не используете Flo, то наверняка кто-то из ваших знакомых уже им пользуется»
                                </p>
                            </div>
                            <div className="mentioning__item">
                                <div className="mentioning__image">
                                    <img src="https://flo.health/uploads/media/sulu-1230x-inset/00/5070-logo_wsj.svg?v=1-0" alt="img"/>
                                </div>
                                <p className="mentioning__text">
                                    «Цель Flo — стать не просто приложением, а платформой, отвечающей на любые вопросы о женском здоровье»
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="articles">

                        <div className="articles__naw">
                            <a className="articles-title">
                                Статьи
                            </a>
                        </div>
                        <div className="articles__cards">
                            <div className="articles__card">
                                <a href="">
                                    <div className="articles__image">
                                        <img src="https://flo.health/uploads/media/sulu-576x300-inset/02/1442-shutterstock_591242858.jpg?v=1-0" alt="#" width={"278"} height={"225"}/>
                                    </div>
                                    <p className="articles__card-text">
                                        Стрессовое состояние
                                    </p>
                                </a>
                            </div>
                            <div className="articles__card">
                                <a href="">
                                    <div className="articles__image">
                                        <img src="https://flo.health/uploads/media/sulu-576x300-inset/03/1033-depressed%20woman%20on%20the%20bed.jpg?v=1-0" width={"278"} height={"225"} alt="#"/>
                                    </div>
                                    <p className="articles__card-text">
                                        Сезонное депрессивное расстройство
                                    </p>
                                </a>
                            </div>
                            <div className="articles__card">
                                <a href="">
                                    <div className="articles__image">
                                        <img src="https://flo.health/uploads/media/sulu-576x300-inset/09/599-baby%20blues%20-%20m.jpg?v=1-0" alt="#" width={"278"} height={"225"}/>
                                    </div>
                                    <p className="articles__card-text">
                                        Послеродовая депрессия
                                    </p>
                                </a>
                            </div>
                            <div className="articles__card">
                                <a href="">
                                    <div className="articles__image">
                                        <img src="https://flo.health/uploads/media/sulu-576x300-inset/06/1236-woman%20suffering%20from%20depression%20sitting%20on%20bed.jpg?v=1-0" alt="#"  width={"278"} height={"225"}/>
                                    </div>
                                    <p className="articles__card-text">
                                        Клиническая депрессия
                                    </p>
                                </a>
                            </div>
                        </div>
                </section>
            </section>
    );
};

export default Home;