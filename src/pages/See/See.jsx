import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTeam} from "../../redux/team/team";

const See = () => {
    const {data} = useSelector(store => store.team );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTeam())
    },[])
    return (
        <section className={"see"}>
            <div className="container">
                <h2 className="see__title">
                    Scientific Advisory Board
                </h2>
                <div className="see__row">
                    <div className="see__cards">

                        {
                            data.map((item) => (
                                <Link to={"/experts"} className="see__card">
                                    <a href="">
                                        <div className="see__img">
                                            <img src={item.image} alt=""/>
                                        </div>
                                        <div className="see__texts">
                                            <h3 className="see__subtitle">
                                                {
                                                    item.name
                                                }
                                            </h3>
                                            <p className="see__profession">
                                                {
                                                    item.profession
                                                }
                                            </p>
                                        </div>
                                    </a>
                                </Link>
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>
    );
};

export default See;