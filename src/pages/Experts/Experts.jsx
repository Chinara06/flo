import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOnePerson, getTeam} from "../../redux/team/team";


const Experts = () => {
    const {onePerson} = useSelector(store => store.team );
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getOnePerson(id))
    },[])
    return (
        <section className={"experts"}>
          <div className="container">
              <div className="experts__row">
                  <div className="experts__img">
                      {
                          <img src={onePerson.image} alt=""/>
                      }
                  </div>
                  <div className="experts__texts">
                      <div className="experts__name">
                          {
                              onePerson.name
                          }
                      </div>
                      <div className="experts__profession">
                          {
                              onePerson.profession
                          }
                      </div>
                      <div className="experts__title">
                          {
                              onePerson.title
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
                                    onePerson.text
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
                                        onePerson.expert
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
                                        onePerson.career
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
                                        onePerson.education
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

export default Experts;