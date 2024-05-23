import React from 'react';
import {Link} from "react-router-dom"

const Library = () => {
    return (
        <section className={"library"}>
                <div className="library__row">
                    <div className="library__naw">
                        <h1 className="library__title">
                            Health Library
                        </h1>
                        <div className="library__find">
                            <form action="" className="library__form">
                                <label htmlFor="">
                                    <input type="search"/>
                                    <button className={"library__btn"} type={"submit"}>
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.8333 18.3333H19.5167L19.05 17.8833C20.6833 15.9833 21.6667 13.5167 21.6667 10.8333C21.6667 4.85 16.8167 0 10.8333 0C4.85 0 0 4.85 0 10.8333C0 16.8167 4.85 21.6667 10.8333 21.6667C13.5167 21.6667 15.9833 20.6833 17.8833 19.05L18.3333 19.5167V20.8333L26.6667 29.15L29.15 26.6667L20.8333 18.3333V18.3333ZM10.8333 18.3333C6.68333 18.3333 3.33333 14.9833 3.33333 10.8333C3.33333 6.68333 6.68333 3.33333 10.8333 3.33333C14.9833 3.33333 18.3333 6.68333 18.3333 10.8333C18.3333 14.9833 14.9833 18.3333 10.8333 18.3333Z" fill="#0E7270"></path></svg>
                                    </button>
                                </label>
                            </form>
                        </div>
                    </div>
                  <section className="explore">
                          <div className="explore__top">
                              <h3 className="explore__title">
                                  Explore by category
                              </h3>
                              <div className="explore__line"></div>
                          </div>
                          <div className="explore__bottom">
                              <div className="explore__category">
                                      <Link to={"/cycle"}>
                                              <a href="">
                                                  Your cycle
                                              </a>
                                      </Link>
                                      <Link to={"/health"}>
                                              <a href="">
                                                  Health 360°
                                              </a>
                                      </Link>
                                      <Link to={"/pregnant"}>
                                              <a href="">
                                                  Getting pregnant
                                              </a>
                                      </Link>
                                      <Link to={"/pregnancy"}>
                                              <a href="">
                                                  Pregnancy
                                              </a>
                                      </Link>
                                      <Link to={"/begin"}>
                                              <a href="">
                                                  Being a mom
                                              </a>
                                      </Link>
                              </div>
                      </div>
                  </section>
                    <section className="info">
                            <div className="info__row">
                                <div className="info__top">
                                    <h3 className="info__title">
                                        Your cycle
                                    </h3>
                                    <div className="info__line"></div>
                                </div>
                                <div className="info__cards">
                                    <a href="">
                                        <div className="info__card">
                                            <div className="info__img">
                                                <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                            </div>
                                            <div className="info__texts">
                                                <p className="info__desc">
                                                    Sexual health
                                                </p>
                                                <h3 className="info__text">
                                                    Can you have sex on your period?
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="info__card">
                                            <div className="info__img">
                                                <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                            </div>
                                            <div className="info__texts">
                                                <p className="info__desc">
                                                    Sexual health
                                                </p>
                                                <h3 className="info__text">
                                                    Can you have sex on your period?
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="info__card">
                                            <div className="info__img">
                                                <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                            </div>
                                            <div className="info__texts">
                                                <p className="info__desc">
                                                    Sexual health
                                                </p>
                                                <h3 className="info__text">
                                                    Can you have sex on your period?
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="info__card">
                                        <div className="info__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                        </div>
                                        <div className="info__texts">
                                            <p className="info__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="info__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                    </a>
                                </div>
                            </div>
                    </section>
                    <section className="info">
                        <div className="info__row">
                            <div className="explore__top">
                                <h3 className="explore__title">
                                    Health 360°
                                </h3>
                                <div className="explore__line"></div>
                            </div>
                            <div className="info__cards">
                                <a href="">
                                    <div className="info__card">
                                        <div className="info__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                        </div>
                                        <div className="info__texts">
                                            <p className="info__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="info__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="info__card">
                                        <div className="info__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                        </div>
                                        <div className="info__texts">
                                            <p className="info__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="info__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="info__card">
                                        <div className="info__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                        </div>
                                        <div className="info__texts">
                                            <p className="info__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="info__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="info__card">
                                        <div className="info__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                        </div>
                                        <div className="info__texts">
                                            <p className="info__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="info__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="article">
                        <div className="article__row">
                            <div className="article__top">
                                <h3 className="article__title">
                                    Getting pregnant
                                </h3>
                                <div className="article__line"></div>
                            </div>
                            <div className="article__cards">
                                <a href="">
                                    <div className="article__card">
                                        <div className="article__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"454"} height={"230"}/>
                                        </div>
                                        <div className="article__texts">
                                            <p className="article__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="article__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="article__card">
                                        <div className="article__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"454"} height={"230"}/>
                                        </div>
                                        <div className="article__texts">
                                            <p className="article__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="article__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="article__card">
                                        <div className="article__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"454"} height={"230"}/>
                                        </div>
                                        <div className="article__texts">
                                            <p className="article__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="article__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="article">
                        <div className="article__row">
                            <div className="article__top">
                                <h3 className="article__title">
                                    Tools & Calculators
                                </h3>
                                <div className="article__line"></div>
                            </div>
                            <div className="article__cards">
                                <a href="">
                                    <div className="article__card">
                                        <div className="article__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"454"} height={"230"}/>
                                        </div>
                                        <div className="article__texts">
                                            <p className="article__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="article__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="article__card">
                                        <div className="article__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"454"} height={"230"}/>
                                        </div>
                                        <div className="article__texts">
                                            <p className="article__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="article__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="article__card">
                                        <div className="article__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"454"} height={"230"}/>
                                        </div>
                                        <div className="article__texts">
                                            <p className="article__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="article__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="info">
                        <div className="info__row">
                            <div className="explore__top">
                                <h3 className="explore__title">
                                    Pregnancy
                                </h3>
                                <div className="explore__line"></div>
                            </div>
                            <div className="info__cards">
                                <a href="">
                                    <div className="info__card">
                                        <div className="info__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                        </div>
                                        <div className="info__texts">
                                            <p className="info__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="info__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="info__card">
                                        <div className="info__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                        </div>
                                        <div className="info__texts">
                                            <p className="info__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="info__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="info__card">
                                        <div className="info__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                        </div>
                                        <div className="info__texts">
                                            <p className="info__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="info__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="info__card">
                                        <div className="info__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                        </div>
                                        <div className="info__texts">
                                            <p className="info__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="info__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="info">
                        <div className="info__row">
                            <div className="explore__top">
                                <h3 className="explore__title">
                                    Being a mom
                                </h3>
                                <div className="explore__line"></div>
                            </div>
                            <div className="info__cards">
                                <a href="">
                                    <div className="info__card">
                                        <div className="info__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                        </div>
                                        <div className="info__texts">
                                            <p className="info__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="info__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="info__card">
                                        <div className="info__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                        </div>
                                        <div className="info__texts">
                                            <p className="info__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="info__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="info__card">
                                        <div className="info__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                        </div>
                                        <div className="info__texts">
                                            <p className="info__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="info__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="info__card">
                                        <div className="info__img">
                                            <img src="https://flo.health/uploads/media/sulu-846x-inset/01/10111-woman%20sharing%20her%20cycle%20with%20her%20partner.jpg?v=1-0" alt="" width={"197"} height={"122"}/>
                                        </div>
                                        <div className="info__texts">
                                            <p className="info__desc">
                                                Sexual health
                                            </p>
                                            <h3 className="info__text">
                                                Can you have sex on your period?
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
        </section>
    );
};

export default Library;