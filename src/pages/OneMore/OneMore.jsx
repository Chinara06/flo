
import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneMore, getMore} from "../../redux/more/more";

const OneMore = () => {
        const {oneMore} = useSelector(store => store.more );
        const dispatch = useDispatch();
        const {id} = useParams();
        useEffect(() => {
            dispatch(getOneMore(id))
        },[id])
        return (
            <section className={"oneMore"}>
                <div className="container">
                    <div className="oneMore__row">
                        <div className="oneMore__img">
                            {
                                <img src={oneMore.image} alt=""/>
                            }
                        </div>
                        <div className="oneMore__texts">
                            <div className="oneMore__name">
                                {
                                    oneMore.name
                                }
                            </div>
                            <div className="oneMore__profession">
                                {
                                    oneMore.profession
                                }
                            </div>
                            <div className="oneMore__title">
                                {
                                    oneMore.title
                                }
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                <section className="areas">
                    <div className="container">
                        <div className="areas__row">
                            <div className="areas__left">
                                <img src="https://flo.health/images/icons/green-quote.svg" alt="#"/>
                                <div className="areas__text">
                                    {
                                        oneMore.text
                                    }
                                </div>
                            </div>
                            <div className="areas__right">
                                <div className="areas__left">
                                    <div className="areas__expert">
                                    <span>
                                          Areas of expertise
                                    </span>
                                        <br/>
                                        <br/>
                                        {
                                            oneMore.expert
                                        }
                                    </div>
                                </div>
                                <div className="areas__left">
                                    <div className="areas__career">
                                    <span>
                                        Career
                                    </span>
                                        <br/>
                                        <br/>
                                        {
                                            oneMore.career
                                        }
                                    </div>
                                </div>
                                <div className="areas__left">
                                    <div className="areas__education">
                                    <span>
                                        Education
                                    </span>
                                        <br/>
                                        <br/>
                                        {
                                            oneMore.education
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    };

export default OneMore;