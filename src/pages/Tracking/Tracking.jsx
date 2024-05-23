import React, { useState } from 'react';
import {Link} from "react-router-dom"
const Tracking = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <section className="tracking">
            <section className="content">
                <div className="content__row">
                    <div className="content__left">
                        <h4 className="content__title">
                            Flo App for Tracking Your Period
                        </h4>
                        <h2 className="content__titles">
                            Your cycle is so much more than your period
                        </h2>
                        <p className="content__text">
                            It can affect everything — from your mood to your energy levels and sex drive. The good news is that understanding the connection between your cycle and your life is more straightforward than you might think.
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
                        <img src="https://flo.health/uploads/media/sulu-846x-inset/06/10226-HeroImage-Track-Desktop.png?v=1-0" alt="#"/>
                    </div>
                </div>
            </section>
            <section className="users">
                <div className="container">
                    <div className="users__rows">
                        <div className="users__left">
                            <div className="users__left-texts">
                                <p className="users__left-text">
                                    Tell Flo about yourself and log how you’re feeling. Our clever tech will help <span>predict where you are in your cycle</span> (and what you might expect now and in the future) so you can <span>understand your body even better.</span>
                                    <br/><br/>
                                    No wonder <span>350 million women</span> and people who have periods trust Flo².
                                </p>
                            </div>
                        </div>
                        <div className="users__right">
                            <div className="users__row-percent">
                                <div className="users__row-circle">
                                    <div className="users__row-circles">
                                        <p className="users__row-text">
                                            <span>
                                                90%
                                            </span>
                                            <br/>
                                            of users say Flo accurately predicts period start³
                                        </p>
                                    </div>
                                </div>

                                <div className="users__row-circle">
                                    <div className="users__row-circless">
                                        <p className="users__row-text">
                                            <span>
                                                71%
                                            </span>
                                            <br/>
                                            of users say Flo helps improve how they manage menstrual symptoms⁴
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
                                “It gives you insights into why you feel the way you do. It may sound silly but I didn’t realize how much of my mood and behavior is determined by my cycle. It feels validating and has given me a new connection to my body.”
                            </h2>
                            <div className="join__card">
                                <div className="join__img">
                                    <img src="https://flo.health/uploads/media/sulu-40x40/03/10153-QuoteAvatar.svg?v=1-0" alt="#"/>
                                </div>

                                <div className="join__texts">
                                    <p className="join__text">
                                        Flo user
                                    </p>
                                    <p className="join__desc">
                                        App Store review
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="join__try">
                            <h2 className="join__subtitle">
                                Join 60 million others using Flo monthly<sup>5</sup>
                            </h2>
                            <Link to={"/try"}>
                                <button className="join__btn">
                                    Try Flo today
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="get">
                <div className="container">
                    <h2 className="get__title">
                        Get accurate period predictions
                    </h2>
                    <h4 className="get__subtitle">
                        Know when your period’s likely to arrive this cycle and in the future with our clever AI, so you’re always one step ahead.
                    </h4>
                    <div className="get__row">
                        <div className="get__card">
                            <img src="https://flo.health/uploads/media/sulu-80x80/01/10161-Feature%20icons.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                <span>
                                    Live more in sync with your cycle
                                </span>
                                <br/>
                                Cravings before your period starts? Bloating around ovulation? Track 70+ symptoms and events, learn what they might mean (and how to manage them better), and know how you might feel tomorrow — or even next cycle.
                            </p>
                        </div>
                        <div className="get__card">
                            <img src="https://flo.health/uploads/media/sulu-80x80/08/10158-Feature%20icons-2.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                <span>
                                    Find expert content you can trust
                                </span>
                                <br/>
                                From your first period to your last, know what to expect at every life stage with hundreds of articles, videos, and courses cocreated with our team of 120+ doctors and health experts.
                            </p>
                        </div>
                        <div className="get__card">
                            <img src="https://flo.health/uploads/media/sulu-80x80/00/10160-Feature%20icons-4.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                <span>
                                    Share all this (+ more) with your partner
                                </span>
                                <br/>
                                Get the support you need from your partner during your cycle with expert insights and proactive tips sent straight to their very own Flo app. We’ll help them understand why you might be feeling a certain way and how they can help.
                            </p>
                        </div>
                        <div className="get__card">
                            <img src="https://flo.health/uploads/media/sulu-80x80/07/10157-Feature%20icons-3.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                <span>
                                    Remember: Your body, your data
                                </span>
                                <br/>
                                We offer end-to-end encryption, secure access, and the ability to delete anything you’ve logged at any time. You can also access the app without sharing personally identifiable information, such as your name or email address, thanks to our award-winning anonymous mode.
                            </p>
                        </div>
                        <div className="get__card">
                            <img src="https://flo.health/uploads/media/sulu-80x80/09/10159-Feature%20icons-1.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                <span>
                                    Switch to Flo for Getting Pregnant or Flo for Pregnancy
                                </span>
                                <br/>
                                If you decide you want to get pregnant, you can switch to our Trying to Conceive mode for your personalized journey to parenthood. Plus, you can track your pregnancy with Flo too.
                            </p>
                        </div>

                        <div className="get__card">
                            <img className="get__img" src="https://flo.health/media/10156/download/HandwrittenCTA2.svg?v=1" width="193" height="103" alt=""/>
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
                            <img src="https://flo.health/media/10167/download/Healthline.svg?v=1" alt="#"/>
                            <div className="media__texts">
                                <p className="media__text">
                                    “Flo is the period tracker app I’ve been using since 2016. The app shows you graphs related to your menstrual cycle. I’m also able to log PMDD [premenstrual dysphoric disorder] flare-ups, which helps me keep track of frequent mental and physical symptoms that I’m experiencing.”
                                </p>
                                <p className="media__text">
                                    <a href="#">Healthline’s</a>
                                    You’re Not Alone mental health series
                                </p>
                            </div>
                        </div>
                        <div className="media__card">
                            <img src="https://flo.health/media/10168/download/MarieClaire.svg?v=1" alt="#"/>
                            <div className="media__texts">
                                <p className="media__text">
                                    “Best for: First-timers, after simple easy-to-use period apps.”
                                </p>
                                <p className="media__text">
                                    <a href="#">Marie Claire’s best period tracking apps</a>
                                </p>
                            </div>
                        </div>
                        <div className="media__card">
                            <img src="https://flo.health/media/10166/download/Cosmo.svg?v=1" alt="#"/>
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
                        <img src="https://flo.health/uploads/media/sulu-840x780-inset/07/10227-FooterImage-Track.png?v=1-0" alt="#"/>
                    </div>
                    <div className="own__right">
                        <h2 className="own__title">
                            Know your body.
                            <br/>
                            Own your health.
                        </h2>
                        <button className="own__btn">
                            Try Flo today, for free
                        </button>
                        <h4 className="own__subtitle">
                            “Never in my life left an app review but had to for Flo. It's so personalized, after a couple months use it started accurately predicting my moods, physical symptoms, energy levels & everything you can think of.”
                        </h4>
                        <div className="own__card">
                            <div className="join__img">
                                <img src="https://flo.health/uploads/media/sulu-40x40/04/10154-QuoteAvatar-2.svg?v=1-0" alt="#"/>
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
            <div className="references">
                <div className="container">
                    <div className="references__head">
                        <h3 className="references__title">
                            References
                        </h3>
                        <span onClick={toggleActive}>
                        <svg role="img" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.59 9.09009L12 13.6701L7.41 9.09009L6 10.5001L12 16.5001L18 10.5001L16.59 9.09009Z" fill="black" fillOpacity="0.5"></path>
                        </svg>
                    </span>
                    </div>
                    <div className={`references__actives ${isActive ? 'active' : ''}`}>
                        <div className="references__active">
                            <div className="references__texts">
                                <p className="references__text">
                                    <span className="references__spans">1.</span>
                                    <span className="references__span">Survey of 500 US obstetricians and gynecologists, DRG (2021)</span>
                                    <br />
                                    <span className="references__spans">2.</span>
                                    <span className="references__span">Total app downloads</span>
                                    <br />
                                    <span className="references__spans">3.</span>
                                    <span className="references__span">2,000 people surveyed in 2021</span>
                                    <br />
                                    <span className="references__spans">4.</span>
                                    <span className="references__span">2,500 people surveyed in 2022</span>
                                    <br />
                                    <span className="references__spans">5.</span>
                                    <span className="references__span">Monthly active users, as of Feb 2024</span>
                                </p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tracking;