import React from 'react';
import {Link} from "react-router-dom";
const Calculators = () => {
    return (
        <section className={"calculators"}>
            <div className="container">
                <div className="calculators__row">
                    <div className="calculators__top">
                        <h3 className="calculators__title">
                            Tools
                        </h3>
                    </div>
                    <div className="calculators__cards">
                    <Link to={"/ovulation"}>
                        <a href="">
                            <div className="calculators__card">
                                <div className="calculators__img">
                                    <img src="https://flo.health/uploads/media/sulu-500x-inset/06/6906-ovulation-calculator01_1006x755.jpg?v=1-0" alt="" width={"313"} height={"237"}/>
                                </div>
                                <div className="calculators__texts">
                                    <h3 className="calculators__text">
                                        Ovulation calculator
                                    </h3>
                                </div>
                            </div>
                        </a>
                    </Link>
                        <Link to={"/hcg"}>
                            <a href="">
                                <div className="calculators__card">
                                    <div className="calculators__img">
                                        <img src="https://flo.health/uploads/media/sulu-500x-inset/08/9898-01_1006x755.jpg?v=1-0" alt="" width={"313"} height={"237"}/>
                                    </div>
                                    <div className="calculators__texts">
                                        <h3 className="calculators__text">
                                            Beta hCG doubling time calculator
                                        </h3>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link to={"/test"}>
                            <a href="">
                                <div className="calculators__card">
                                    <div className="calculators__img">
                                        <img src="https://flo.health/uploads/media/sulu-500x-inset/02/9902-01_1006x755.jpg?v=1-0" alt="" width={"313"} height={"237"}/>
                                    </div>
                                    <div className="calculators__texts">
                                        <h3 className="calculators__text">
                                            Pregnancy test calculator
                                        </h3>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link to={"/period"}>
                            <a href="">
                                <div className="calculators__card">
                                    <div className="calculators__img">
                                        <img src="https://flo.health/uploads/media/sulu-500x-inset/00/9910-01_1006x755.jpg?v=1-0" alt="" width={"313"} height={"237"}/>
                                    </div>
                                    <div className="calculators__texts">
                                        <h3 className="calculators__text">
                                            Period calculator
                                        </h3>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link to={"/implantation"}>
                            <a href="">
                                <div className="calculators__card">
                                    <div className="calculators__img">
                                        <img src="https://flo.health/uploads/media/sulu-500x-inset/04/9424-Woman%20holding%20a%20calendar%20showing%20her%20period%20and%20the%20date%20of%20ovulation%20and%20implantation%201006x755%20%282%29.jpg?v=1-0" alt="" width={"313"} height={"237"}/>
                                    </div>
                                    <div className="calculators__texts">
                                        <h3 className="calculators__text">
                                            Implantation calculator
                                        </h3>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link to={"/pregnancyCalc"}>
                            <a href="">
                                <div className="calculators__card">
                                    <div className="calculators__img">
                                        <img src="https://flo.health/uploads/media/sulu-500x-inset/02/9072-Woman%20looking%20at%20a%20calendar%20showing%20days%20of%20pregnancy%2001_1006x755.jpg?v=1-0" alt="" width={"313"} height={"237"}/>
                                    </div>
                                    <div className="calculators__texts">
                                        <h3 className="calculators__text">
                                            Pregnancy calculator
                                        </h3>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link to={"/due"}>
                            <a href="">
                                <div className="calculators__card">
                                    <div className="calculators__img">
                                        <img src="https://flo.health/uploads/media/sulu-500x-inset/02/9922-01_1006x755.jpg?v=1-0" alt="" width={"313"} height={"237"}/>
                                    </div>
                                    <div className="calculators__texts">
                                        <h3 className="calculators__text">
                                            Pregnancy due date calculator
                                        </h3>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link to={"/ivf"}>
                            <a href="">
                                <div className="calculators__card">
                                    <div className="calculators__img">
                                        <img src="https://flo.health/uploads/media/sulu-500x-inset/05/9925-01_1006x755.jpg?v=1-0" alt="" width={"313"} height={"237"}/>
                                    </div>
                                    <div className="calculators__texts">
                                        <h3 className="calculators__text">
                                            IVF and FET due date calculator
                                        </h3>
                                    </div>
                                </div>
                            </a>
                        </Link>
                        <Link to={"/ultrasound"}>
                            <a href="">
                                <div className="calculators__card">
                                    <div className="calculators__img">
                                        <img src="https://flo.health/uploads/media/sulu-500x-inset/00/9930-01_1006x755.jpg?v=1-0" alt="" width={"313"} height={"237"}/>
                                    </div>
                                    <div className="calculators__texts">
                                        <h3 className="calculators__text">
                                            Due date by ultrasound calculator
                                        </h3>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculators;