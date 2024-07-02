    import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMore} from "../../redux/more/more";
import {Link} from "react-router-dom"

const More = () => {

    const {data} = useSelector(store => store.more);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMore())
    },[])
    return (
        <section className={"more"}>
            <div className="container">
                <div className="more__row">
                    <h3 className="more__title">
                        Sexual Health
                    </h3>
                    <div className="more__cards">
                        {
                            data.map((item) => (
                                <Link to={`/oneMore/${item.id}`} key={item.id} className="more__card">

                                        <div className="more__img">
                                            <img src={item.image} alt=""/>
                                        </div>
                                        <div className="more__texts">
                                            <h3 className="more__subtitle">
                                                {
                                                    item.name
                                                }
                                            </h3>
                                            <p className="more__profession">
                                                {
                                                    item.profession
                                                }
                                            </p>
                                        </div>

                                </Link>
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>

    );
};

export default More;