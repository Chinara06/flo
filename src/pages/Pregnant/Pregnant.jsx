import React, {useState} from 'react';
import {Link} from "react-router-dom"

const Pregnant = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };
    return (
        <section className="pregnant">
            <section className={"content"}>
                <div className="content__row">
                    <div className="content__left">
                        <h4 className="content__title">
                            Flo App for Getting Pregnant
                        </h4>
                        <h2 className="content__titles">
                            Know when you’re most fertile
                        </h2>
                        <p className="content__text">Trying for a baby? Get tips for timing conception sex to maximize your chances. Nearly 9 million women got pregnant while tracking their ovulation with Flo. Harness the power of your body signals by tracking your cycle so you can learn how to find your best days to conceive.</p>
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
                        <img src="https://flo.health/uploads/media/sulu-846x-inset/06/10256-HeroImage-TTC-Desktop.png?v=1-0" alt="#"/>
                    </div>
                </div>
            </section>
            <section className="users">
                <div className="container">
                    <div className="users__rows">
                        <div className="users__left">
                            <div className="users__left-texts">
                                <p className="users__left-text">
                                    In the Flo App for Getting Pregnant, you’ll find a <span> supportive space to chat </span>with others who are trying, health insights to get you and your partner ready for conception, and <span> sex tips to keep things fun. </span> Plus, there’s <span>plenty of expert info </span>to help you decode everything — from early signs of pregnancy to reasons why it could be taking a little longer than planned.
                                      </p>
                            </div>
                        </div>
                        <div className="users__right">
                            <div className="users__row-percent">
                                <div className="users__row-circle">
                                    <div className="users__row-circles">
                                        <p className="users__row-text">
                                        <span>
                                           1 in 2
                                        </span>
                                            <br/>
                                            women say Flo helped <br/> them feel more <br/> prepared for <br/> pregnancy²
                                        </p>
                                    </div>
                                </div>

                                <div className="users__row-circle">
                                    <div className="users__row-circless">
                                        <p className="users__row-text">
                                        <span>
                                            76%
                                        </span>
                                            <br/>
                                            of users say they got pregnant while tracking ovulation with Flo³
                                        </p>
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
                            <h2 className="join__title">
                                “Flo helped me get pregnant after 3 years of trying. Can't fault it.”
                            </h2>
                            <div className="join__card">
                                <div className="join__img">
                                    <img src="https://flo.health/uploads/media/sulu-40x40/03/10173-QuoteAvatar.svg?v=1-0" alt="#"/>
                                </div>

                                <div className="join__texts">
                                    <p className="join__text">
                                        Flo user
                                    </p>
                                    <p className="join__desc">
                                        Flo for Getting Pregnant user
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
                        Flo App for Getting Pregnant: Key features
                    </h2>
                    <div className="get__row">
                        <div className="get__card">
                            <img src="https://flo.health/uploads/media/sulu-80x80/06/10176-Feature%20icons.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                <span>
                                  Ace conception sex
                                </span>
                                <br/>
                                From knowing how often to try — and when — to keeping things fun, we’ve got your conception sex questions covered.
                            </p>
                        </div>

                        <div className="get__card">
                            <img src="https://flo.health/uploads/media/sulu-80x80/00/10160-Feature%20icons-4.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                <span>
                                  Share the mental load with your partner
                                </span>
                                <br/>
                                Trying to conceive takes two — that’s why we created Flo for Partners. We’ll explain everything they need to know, including how your cycle works, to support you better.                            </p>
                        </div>
                        <div className="get__card">
                            <img src="https://flo.health/uploads/media/sulu-80x80/08/10158-Feature%20icons-2.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                <span>
                                   Get tips from the experts
                                </span>
                                <br/>
                                Diet, sleep, and managing stress are so important right now —  get personalized daily insights cocreated with our team of 120+ doctors and health experts to help you and your partner take better care of yourselves. You can even set up daily prenatal vitamin reminders.                            </p>
                        </div>
                        <div className="get__img">
                            <img src="https://flo.health/media/10179/download/HandwrittenCTA2.svg?v=1" alt="#"/>
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
                            <img src="https://flo.health/media/10181/download/Glamour.svg?v=1" alt="#"/>
                            <div className="media__texts">
                                <p className="media__text">
                                    “Flo is the period tracker app I’ve been using since 2016. The app shows you graphs related to your menstrual cycle. I’m also able to log PMDD [premenstrual dysphoric disorder] flare-ups, which helps me keep track of frequent mental and physical symptoms that I’m experiencing.”
                                </p>
                                <p className="media__text">
                                    <a href="#">Healthline’s</a>
                                    You’re Not Alone  mental health series
                                </p>
                            </div>
                        </div>
                        <div className="media__card">
                            <img src="https://flo.health/media/10182/download/Parade.svg?v=1" alt="#"/>
                            <div className="media__texts">
                                <p className="media__text">
                                    “Best for: First-timers, after simple easy-to-use period apps.”
                                </p>
                                <p className="media__text">
                                    <a href="#">Marie Claire’s best period  tracking apps</a>
                                </p>
                            </div>
                        </div>
                        <div className="media__card">
                            <img src="https://flo.health/media/10180/download/Shape.svg?v=1" alt="#"/>
                            <div className="media__texts">
                                <p className="media__text">
                                    “Best app to track your menstrual cycle. Having used the free version of Flo, I was unsure how much benefit there’d be to the premium version. But, after leaning into the new features, I’d recommend it to anyone wanting to feel more clued up about their cycle. My favourite feature is the diary function, which offers in-depth insights on irregular cycles.”
                                </p>
                                <p className="media__text">
                                    Natasha, Fashion Editor at
                                    <br/>
                                    <a href="#">Natasha, Fashion Editor at</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="own">
                <div className="own__row">
                    <div className="own__left">
                        <img src="https://flo.health/uploads/media/sulu-840x780-inset/08/10258-FooterImage-TTC.png?v=1-0" alt="#"/>
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
                        <h4 className="own__subtitle">“Helped me get pregnant right away. It’s amazing. And the Secret Chats are the best part!”
                        </h4>
                        <div className="own__card">
                            <div className="join__img">
                                <img src="	https://flo.health/uploads/media/sulu-40x40/04/10154-QuoteAvatar-2.svg?v=1-0" alt="#"/>
                            </div>
                            <div className="own__texts">
                                <p className="own__text">
                                    Flo user
                                </p>
                                <p className="own__desc">
                                    App Store review
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
};

export default Pregnant;