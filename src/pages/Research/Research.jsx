import React from 'react'
import {Link} from "react-router-dom"

const Research = () => {
    return (
        <section className={"research"}>
            <div className="container">
                <div className="research__row">
                    <h2 className="research__title">
                        Science and research at Flo
                    </h2>
                    <p className="research__subtitle">
                        Science and research are key to everything we do at Flo. Find out who we partner with, how to work with us, and how we protect the data of people who use Flo.
                    </p>

                    <h2 className="research__titles">
                        How we’re supporting and advancing female health
                    </h2>
                    <p className="research__subtitles">
                        We know that female health lacks research, so we’re doing our part to build a better future. Flo partners with researchers by providing them with <span>aggregated and de-identified reliable medical data</span>  without sharing any personal information from the people who use Flo.
                    </p>

                </div>
            </div>
            <section className="meet">
                <div className="container">
                    <h2 className="meet__title">
                        Meet our scientific advisory board
                    </h2>
                    <div className="meet__row">
                        <div className="meet__card">
                            <a href="">
                                <img src="https://flo.health/uploads/media/sulu-180x180-inset/08/7538-Payne-Jennifer_light.png?v=1-0" alt="#"/>
                                <h3 className="meet__subtitle">
                                    Dr. Jennifer Payne
                                </h3>
                                <p className="meet__profession">
                                    Professor of psychiatry and vice chair of <br/> research, University of Virginia, Virginia, US
                                </p>
                            </a>
                        </div>
                        <div className="meet__card">
                            <a href="">
                                <img src="https://flo.health/uploads/media/sulu-180x180-inset/00/7530-Sarah_light.png?v=1-0" alt="#"/>
                                <h3 className="meet__subtitle">
                                    Sarah Garfinkel, PhD
                                </h3>
                                <p className="meet__profession">
                                    Professor of cognitive neuroscience, University <br/> College London, UK
                                </p>
                            </a>
                        </div>
                        <div className="meet__card">
                            <a href="">
                                <img src="https://flo.health/uploads/media/sulu-180x180-inset/06/7536-Sarah-Hill_light.png?v=1-0" alt="#"/>
                                <h3 className="meet__subtitle">
                                    Sarah E. Hill, PhD
                                </h3>
                                <p className="meet__profession">
                                    Associate professor of psychology, Texas <br/> Christian University, founder and director, Eos <br/> Wellness Labs, Texas, US
                                </p>
                            </a>
                        </div>
                        <div className="meet__card">
                            <a href="">
                                <img src="https://flo.health/uploads/media/sulu-180x180-inset/02/7532-Liisa_light.png?v=1-0" alt="#"/>
                                <h3 className="meet__subtitle">
                                    Liisa Hantsoo, PhD
                                </h3>
                                <p className="meet__profession">
                                    Assistant professor of psychiatry and <br/> behavioral sciences, Johns Hopkins University, <br/> Maryland, US
                                </p>
                            </a>
                        </div>
                        <div className="meet__card">
                            <a href="">
                                <img src="https://flo.health/uploads/media/sulu-180x180-inset/08/7258-Jan%20Multmeier%20light.png?v=1-0" alt="#"/>
                                <h3 className="meet__subtitle">
                                    Jan Multmeier, PhD
                                </h3>
                                <p className="meet__profession">
                                    Cognitive scientist, director of clinical strategy, <br/> Patient21, Germany
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="meet__btn">
                        <Link to={"/see"}>
                            <a href="">See our full list of scientific advisors</a>
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Research;