import React from 'react';
import {Link} from "react-router-dom";

const Partner = () => {
    return (
        <section className="partner">
            <section className={"content"}>
                <div className="content__row">
                    <div className="content__left">
                        <h4 className="content__title">
                            Flo for Partners
                        </h4>
                        <h2 className="content__titles">
                            How to share the Flo app with your partner
                        </h2>
                        <p className="content__text">Whatever your goal — from understanding more about your cycle, figuring out your fertile window when you’re trying to conceive, or tracking your pregnancy week-by-week – Flo is always there to help. But what if your partner could be more involved, too?   </p>
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
                        <img src="https://flo.health/uploads/media/sulu-846x-inset/00/10410-HeroImage-Partner-Desktop.png?v=1-0" alt="#"/>
                    </div>
                </div>
            </section>
            <section className="users">
                <div className="container">
                    <div className="users__rows">
                        <div className="users__left">
                            <div className="users__left-texts">
                                <p className="users__left-text">
                                    Looking for a period-tracking app that you can <span> share with your partner </span>? Or a way to make trying to conceive more of a team effort? Or a <span> pregnancy app for dads</span> ? Flo’s got you covered! Flo for Partners offers them medical insights and proactive tips<span>to better support and understand you, </span>both physically and emotionally — whatever your goal. Yep, we even know how to explain period pain and PMS to your partner so <span> they get what it feels like.</span>
                                </p>
                            </div>
                        </div>
                        <div className="users__right">
                            <div className="users__row-percent">
                                <div className="users__row-circle">
                                    <div className="users__row-circles">
                                        <p className="users__row-text">
                                        <span>
                                         60%
                                        </span>
                                            <br/>
                                            of Flo users think their partner’s lack of female health knowledge affects their relationship.¹
                                        </p>
                                    </div>
                                </div>

                                <div className="users__row-circle">
                                    <div className="users__row-circless">
                                        <p className="users__row-text">
                                        <span>
                                           53%
                                        </span>
                                            <br/>
                                            said their emotional bond with their partner would be strengthened if they understood more about female health.¹
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
                                “He’s always been very supportive and understanding when it comes to menstruation. But I have found he is asking more [now]. I’m not going to him and making him ask me questions. He’s freely coming to me and asking me questions, and that makes me feel like I’m being listened to without having to say anything.”²
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
                        Your cycle decoded
                    </h2>
                    <div className="get__row">
                        <div className="get__card">
                            <img src="https://flo.health/cdn-cgi/image/quality=85,format=auto/uploads/media/sulu-80x80/00/10160-Feature%20icons-4.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                <span>
                                 We’ll explain
                                </span>
                                <br/>
                                Flo for Partners gives your partner access to quick-fire stories to learn how your cycle symptoms might change from day to day, when you’re likely to be ovulating (aka when to have sex if you’re trying to conceive), and how your baby (and body) is changing week by week.
                                <br/>
                                <br/>
                                Your partner can also read more in-depth, medically reviewed articles on what a period actually is, how to keep conception sex fun, and weird pregnancy symptoms that are kind of cool. Think of it as the lowdown on everything they need to know so you can become cycle pros together.
                            </p>
                        </div>

                        <div className="get__card">
                            <img src="https://flo.health/cdn-cgi/image/quality=85,format=auto/uploads/media/sulu-80x80/00/10160-Feature%20icons-4.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                <span>
                                 We’ll educate him
                                </span>
                                <br/>
                                “I am a visual learner, so watching Flo’s videos makes the process much more engaging.”2 - Rafael, Flo user's partner
                                <br/>
                                <br/>
                                Unlock new quizzes and polls for both of you — plus videos just for him.
                                <br/>
                                <br/>
                                “I like Flo’s quizzes because they give you not only the correct answer, but also the why. There are a lot of questions you know the answers for, but you don’t really know the reason.”2 - Flo user
                            </p>
                        </div>
                        <div className="get__card">
                            <img src="https://flo.health/cdn-cgi/image/quality=85,format=auto/uploads/media/sulu-80x80/00/10160-Feature%20icons-4.svg?v=1-0" alt="#"/>
                            <p className="get__text">
                                <span>
                                  We’ll help share the load
                                </span>
                                <br/>
                                Let’s be honest — trying to inform your partner about what’s going on with your body can be tricky, especially when you aren’t totally sure why you’re experiencing specific symptoms yourself. At its heart, Flo for Partners explains everything your partner needs to know — so you don’t have to. We’ll also give them actions they can take right away to support you better.
                                <br/>
                                <br/>
                                “We’ve been trying for a baby for a year so far, so reading and discussing Flo’s articles on these topics with my partner has been very useful. Whatever I wanted, I could find content that was relevant to my symptoms, which I would then show to my partner.”2 - Katerina, Flo user
                            </p>
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
                        Flo for Partners in the media
                    </h2>
                    <div className="media__row">
                        <div className="media__card">
                            <img src="https://flo.health/cdn-cgi/image/quality=85,format=auto/uploads/media/sulu-475x-inset/03/10383-hypebae%402x.svg?v=1-0" alt="#"/>
                            <div className="media__texts">
                                <p className="media__text">
                                    “The most requested feature on the app in 2022 and 2023 was an option for couples — specifically for heterosexual couples.”
                                </p>
                                <p className="media__text">
                                    Hypebae, Flo App Launches Flo for Couples: A New Feature for Better Sex
                                </p>
                            </div>
                        </div>
                        <div className="media__card">
                            <img src="https://flo.health/cdn-cgi/image/quality=85,format=auto/uploads/media/sulu-475x-inset/04/10384-Mashable%402x.png?v=1-0" alt="#" width={"203"} height={"35"}/>
                            <div className="media__texts">
                                <p className="media__text">
                                    “The new tool will allow partners insight into their significant other’s cycle and menstrual and reproductive health. The update will include push notifications, educational tips about periods and pregnancy, explanations of symptoms, advice on how to support partners, and quizzes.”
                                </p>
                                <p className="media__text">
                                    <a href="#">Mashable, Women’s health app Flo launches feature for partners</a>
                                </p>
                            </div>
                        </div>
                        <div className="media__card">
                            <img src="https://flo.health/cdn-cgi/image/quality=85,format=auto/uploads/media/sulu-475x-inset/05/10385-HealthcareDigital%201%402x.png?v=1-0" alt="#" width={"173"} height={"35"}/>
                            <div className="media__texts">
                                <p className="media__text">
                                    “It offers partners advice on how to support each other, explains the science behind period cycles and pregnancy to partners, in a way that they can understand, as well as quizzes and polls.”
                                </p>
                                <p className="media__text">
                                    <a href="#">Healthcare Digital, Flo Health’s new app Flo for Partners: periods & pregnancies</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="own">
                <div className="own__row">
                  <h3 className="own__title">
                      Ready to start sharing?
                  </h3>
                    <Link to={"/try"}>
                        <button className="own__btn">
                            Sign up to Flo for Partners now
                        </button>
                    </Link>
                    <h5 className="own__subtitle">
                        “Talking about my own health gave me a <br/> context to talk about his health.”²
                    </h5>
                    <div className="own__card">
                        <div className="join__img">
                            <img src="https://flo.health/uploads/media/sulu-40x40/04/10154-QuoteAvatar-2.svg?v=1-0" alt="#"/>
                        </div>
                        <div className="own__texts">
                            <p className="own__text">
                                Valeria
                            </p>
                            <p className="own__desc">
                                Flo user
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="references">
                    <div className="references__head">
                        <h3 className="references__title">
                            References
                        </h3>
                        <span>
                        <svg role="img" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.59 9.09009L12 13.6701L7.41 9.09009L6 10.5001L12 16.5001L18 10.5001L16.59 9.09009Z" fill="black" fill-opacity="0.5"></path>
                        </svg>
                    </span>
                    </div>
                    <div className="references__actives">
                        <div className="references__active">
                            <p className={"references__text"}>
                        <span className={"references__spans"}>
                            1.
                        </span>
                                <span className={"references__span"}>
                            Survey of 500 US obstetricians and gynecologists, DRG (2021)
                        </span>
                                <br/>
                                <span className={"references__spans"}>
                            2.
                        </span>
                                <span className={"references__span"}>
                            Total app downloads
                        </span>
                                <br/>
                                <span className={"references__spans"}>
                            3.
                        </span>
                                <span className={"references__span"}>
                             2,000 people surveyed in 2021
                        </span>
                                <br/>
                                <span className={"references__spans"}>
                            4.
                        </span>
                                <span className={"references__span"}>
                             2,500 people surveyed in 2022
                        </span>
                                <br/>
                                <span className={"references__spans"}>
                            5.
                        </span>
                                <span className={"references__span"}>
                            Monthly active users, as of Feb 2024
                        </span>
                                <br/>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Partner;