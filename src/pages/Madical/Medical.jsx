import { Navigation, Pagination, A11y } from 'swiper/modules';
import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"
import {getTeam} from "../../redux/team/team";


const Medical = () => {

    const {data} = useSelector(store => store.team );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTeam())
    },[])
    return (
        <section className={"medical"}>
            <div className="container">
                <div className="medical__row">
                    <h1 className="medical__title">
                        Medical accuracy and expertise: Why you can trust Flo
                    </h1>
                    <p className="medical__subtitle">
                        <span>
                            Our medical and scientific team is a global collective of distinguished physicians, leading researchers, and seasoned health experts. United by a shared mission, we ensure that every feature, article, and insight you experience on Flo is backed by scientific rigor and clinical safety.
                        </span>
                         <br/>
                         <br/>
                         <span>
                             Whether you’re an expert in the field or just beginning your health journey, trust that you’re in capable hands with a team dedicated to providing you with accurate and trustworthy health insights.
                         </span>
                    </p>
                </div>
            </div>
            <section className="swiper">
                <div className="container">
                    <Swiper
                        style={{height:"300px"}}
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}

                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <div className="swiper__row">
                            <SwiperSlide className={"swiper__slide"}>
                                <h3 className="swiper__title">
                                    Accuracy you can count on
                                </h3>
                                <p className="swiper__subtitle">
                                    Skip the misinformation across the internet and get straight to the facts. Our content isn’t just researched; it’s peer reviewed by a panel of over 120 health care experts and esteemed scientific institutions. You’re not just reading information; you’re gaining knowledge about your body and health you can trust.
                                </p>
                            </SwiperSlide >
                            <SwiperSlide className={"swiper__slide"}>
                                <h3 className="swiper__title">
                                    Safety first, always
                                </h3>
                                <p className="swiper__subtitle">
                                    We get it — your health is too important to leave to chance. That’s why we developed our rigorous clinical risk management process. Rest assured; Flo is aligned with
                                    <a href="https://flo.health/trusted-sources-of-health-information"> international health standards</a>
                                    and legal protocols. Your safety isn’t just our priority; it’s our promise.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide className={"swiper__slide"}>
                                <h3 className="swiper__title">
                                    Making an impact: Beyond the app
                                </h3>
                                <p className="swiper__subtitle">
                                    We’re not just here to offer another health app; we’re here to revolutionize how women and people who menstruate engage with their health. We work tirelessly to advance research in female health, destigmatize issues affecting women and people who menstruate, and offer actionable insights that make a meaningful difference in your life.
                                </p>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </section>
            <section className="meet">
                <div className="container">
                    <h2 className="meet__title">
                        Meet Flo’s medical and scientific leadership team
                    </h2>
                    <div className="meet__row">
                        {
                            data.map((item) => (
                                <Link to={`/experts/${item.id}`} className="meet__card">
                                    <a href="">
                                  <div className="meet__img">
                                      <img src={item.image} alt=""/>
                                  </div>
                                    <h3 className="meet__subtitle">
                                        {
                                            item.name
                                        }
                                    </h3>
                                    <p className="meet__profession">
                                        {
                                            item.profession
                                        }
                                    </p>
                                    </a>
                                </Link>
                         ))
                        }
                            <div className="meet__btn">
                                <Link to={"/more"}>
                                    <a href="">
                                        Meet the experts
                                    </a>
                                </Link>
                            </div>

                </div>
                </div>
            </section>
            <section className="accordion">
                <div className="container">
                    <h2 className="accordion__title">
                        How they ensure the highest clinical standards
                    </h2>

                </div>
            </section>
        </section>

    );
};

export default Medical;