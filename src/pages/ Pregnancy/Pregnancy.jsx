import React from 'react';
import {Link} from "react-router-dom"

const Pregnancy = () => {
    return (
        <section className="pregnancy">
            <section className={"content"}>
                <div className="content__row">
                    <div className="content__left">
                        <h4 className="content__title">
                            Flo App for Pregnancy
                        </h4>
                        <h2 className="content__titles">Track your baby's growth and see how your body is changing
                        </h2>
                        <p className="content__text">Pregnant moms and parents-to-be, consider Flo App for Pregnancy your guide to every pregnancy stage — from that all-important positive test to your due date.
                        </p>
                        <div className="footer__store">
                            <a href="https://apps.apple.com/us/app/flo-period-pregnancy-tracker/id1038369065">
                                <img src="https://flo.health/images/icons/app-store/RU/Black_lockup/SVG/app-store.svg" alt="#"/>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=org.iggymedia.periodtracker&hl=en&gl=US">
                                <img src="https://flo.health/images/icons/google-play/RU/Black_lockup/SVG/google-play.svg" alt="#"/>
                            </a>
                        </div>
                    </div>
                    <div className="content__right">
                        <img src="	https://flo.health/uploads/media/sulu-846x-inset/07/10247-HeroImage-Preg-Desktop.png?v=1-0" alt="#"/>
                    </div>
                </div>
            </section>
            <section className="users">
                <div className="container">
                    <div className="users__rows">
                        <div className="users__left">
                            <div className="users__left-texts">
                                <p className="users__left-text">
                                    In the Flo for Pregnancy mode, you’ll find an  <span>easy-to-use pregnancy tracker</span> with the lowdown on what to expect week by week. Plus a <span>friendly space to chat</span> with other parents-to-be, and all the <span>expert info you need</span> — whether you’re wondering what foods are considered safe or why you might be experiencing a certain symptom.
                                </p>
                            </div>
                        </div>
                        <div className="users__right">
                            <div className="users__row-percent">
                                <div className="users__row-circle">
                                    <div className="users__row-circles">
                                        <p className="users__row-text">
                                        <span>
                                         82%
                                        </span>
                                            <br/>
                                            of Flo users felt more educated about their pregnancy²                                        </p>
                                    </div>
                                </div>

                                <div className="users__row-circle">
                                    <div className="users__row-circless">
                                        <p className="users__row-text">
                                        <span>
                                          1 in 3
                                        </span>
                                            <br/>
                                            felt more prepared to become a parent³                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="join">
                <div className="container">
                    <div className="join__row">
                        <div className="join__cards">
                            <h2 className="join__title">“I truly feel like I’ve gained so much knowledge about my body, my symptoms, and my pregnancy as a first-time mom through this app.”
                            </h2>
                            <div className="join__card">
                                <div className="join__img">
                                    <img src="https://flo.health/uploads/media/sulu-40x40/09/10149-QuoteAvatar1.svg?v=1-0" alt="#"/>
                                </div>

                                <div className="join__texts">
                                    <p className="join__text">
                                        Lexi, USA
                                    </p>
                                    <p className="join__desc">
                                        Flo for Pregnancy user
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="join__try">
                            <h2 className="join__subtitle">
                                Join 60 million others using <br/> Flo monthly<sup>5</sup>
                            </h2>
                            <Link to={"/try"}>
                                <button className="join__btn">
                                    Try Flo today, for free
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="get">
                <div className="container">
                    <h2 className="get__title">
                        Follow your baby’s growth week by week
                    </h2>
                    <h4 className="get__subtitle">Your body and your baby will go through some big changes over the next weeks and months. With Flo’s pregnancy tracker, you can:
                    </h4>
                    <div className="get__row">
                        <div className="get__card">
                            <img src="https://flo.health/uploads/media/sulu-80x80/06/10136-Feature%20icon1.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                Get to know your baby with the lowdown on all those important fetal development milestones, such as when they’ll open their eyes for the first time.
                            </p>
                        </div>
                        <div className="get__card">
                            <img src="	https://flo.health/uploads/media/sulu-80x80/05/10135-Feature%20icons3.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                Find out what you need to do when with our weekly checklist — including the best time to book childbirth education classes.
                            </p>
                        </div>
                        <div className="get__card">
                            <img src="https://flo.health/uploads/media/sulu-80x80/00/10160-Feature%20icons-4.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                Share all of this and more with your partner (if you have one) so they know how to support you both.
                            </p>
                        </div>
                        <div className="get__card">
                            <img src="https://flo.health/uploads/media/sulu-80x80/07/10137-Feature%20icons2.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                Scroll forward and back through the weeks to see how your baby (and your body) is growing and changing.
                                 </p>
                        </div>
                        <div className="get__card">
                            <img src="https://flo.health/uploads/media/sulu-80x80/08/10138-Feature%20icons4.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                Get answers to the most frequently asked questions each week.
                            </p>
                        </div>

                        <div className="get__card">
                            <img className={"get__img"} src="https://flo.health/media/10156/download/HandwrittenCTA2.svg?v=1" width={"193"} height={"103"} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="media">
                <div className="container">
                    <h2 className="media__title">
                        Flo for Tracking Your Period in the media
                    </h2>
                    <div className="media__row">
                        <div className="media__card">
                            <img src="	https://flo.health/media/10144/download/Cosmo.svg?v=1" alt="#"/>
                            <div className="media__texts">
                                <p className="media__text">
                                    “If you thought Flo was an app that only tracks your periods, then think again... Flo also enables parents-to-be to learn about different pregnancy symptoms and your baby’s development...”
                                </p>
                                <p className="media__text">
                                    <a href="#">Cosmopolitan's best pregnancy apps</a>
                                </p>
                            </div>
                        </div>
                        <div className="media__card">
                            <img src="https://flo.health/media/10145/download/LoveHappens.svg?v=1" alt="#"/>
                            <div className="media__texts">
                                <p className="media__text">
                                    “The Flo app can give expectant mothers insights into the timing and progress of their pregnancy, helping them feel more connected and engaged in the process.”
                                </p>
                                <p className="media__text">
                                    <a href="#">Love Happens Mag</a>
                                </p>
                            </div>
                        </div>
                        <div className="media__card">
                            <img src="	https://flo.health/media/10146/download/WomensHealth.svg?v=1" alt="#"/>
                            <div className="media__texts">
                                <p className="media__text">
                                    “This app does it all when it comes to your period and pregnancy. ‘Flo is the best fertility app I can recommend. Use it to track your period, cycle prediction, pregnancy symptoms, and more,’ says Dr. Rahman.”
                                </p>
                                <p className="media__text">
                                    <a href="#">Women's Health's best pregnancy apps of 2023</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="own">
                <div className="own__row">
                    <div className="own__left">
                        <img src="https://flo.health/uploads/media/sulu-840x780-inset/00/10250-FooterImage-Pregnancy-compress.png?v=1-0" alt="#"/>
                    </div>
                    <div className="own__right">
                        <h2 className="own__title">
                            Start your personalized
                            <br/>
                            journey to parenthood.
                        </h2>
                        <Link to={"/try"}>
                            <button className="own__btn">
                                Try Flo today, for free
                            </button>
                        </Link>
                        <h4 className="own__subtitle">
                            “Flo has allowed me to keep track of my pregnancy... It’s very useful because this is my first baby, so I don’t really know what’s going on half the time.”
                        </h4>
                        <div className="own__card">
                            <div className="join__img">
                                <img src="https://flo.health/uploads/media/sulu-40x40/02/10132-QuoteAvatar3.svg?v=1-0" alt="#"/>
                            </div>
                            <div className="own__texts">
                                <p className="own__text">
                                    Anessa, USA
                                </p>
                                <p className="own__desc">
                                    Flo for Pregnancy user
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Pregnancy;