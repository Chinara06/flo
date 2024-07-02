import React, {useEffect, useState} from 'react';
import {getSearchTeam} from "../../redux/team/team";
import {useDispatch, useSelector} from "react-redux";
import { IoMdPerson } from "react-icons/io";
import { MdMedicalServices } from "react-icons/md";
const Help = () => {
    const [name, setName] = useState("");
    const [selectedPerson, setSelectedPerson] = useState(null);
    const dispatch = useDispatch();
    const { dataSearch } = useSelector(store => store.team);

    const onChange = (e) => {
        setName(e.target.value);
        dispatch(getSearchTeam(e.target.value));
    };

    const handlePersonClick = (id) => {
        const person = dataSearch.find(item => item.id === id);
        setSelectedPerson(person);
    };

    return (
        <section className="help">
            <div className="help__row">
                <h2 className="help__title">
                    Search for experts
                </h2>
                <div className="help__inner">
                    <label className="help__find">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" focusable="false"
                             xmlns="http://www.w3.org/2000/svg" className="search-icon" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.125 18 13.078 17.2635 14.6177 16.0319L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L16.0319 14.6177C17.2635 13.078 18 11.125 18 9C18 4.02944 13.9706 0 9 0Z"
                                  fill="#828282"></path>
                        </svg>
                        <input
                            type="search"
                            onChange={onChange}
                            placeholder="Who do you want to find?"
                            size="40"
                        />
                    </label>
                    {dataSearch && (
                        <div className="help__team">
                            {dataSearch.map(item => (
                                <div
                                    className="help__person"
                                    key={item.id}
                                    onClick={() => handlePersonClick(item.id)}
                                >
                                    <p className="help__name">
                                        <span><IoMdPerson /></span>
                                        {item.name}
                                    </p>
                                    <p className="help__profession">
                                        <span><MdMedicalServices /></span>
                                        {item.profession}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                    {selectedPerson && (
                        <div className="person-details">
                            <h2>{selectedPerson.name}</h2>
                            <img src={selectedPerson.image} alt={selectedPerson.name} />
                            <p><strong>Profession:</strong> {selectedPerson.profession}</p>
                            <p><strong>Title:</strong> {selectedPerson.title}</p>
                            <p><strong>Text:</strong> {selectedPerson.text}</p>
                            <p><strong>Expertise:</strong> {selectedPerson.expert}</p>
                            <p><strong>Career:</strong> {selectedPerson.career}</p>
                            <p><strong>Education:</strong> {selectedPerson.education}</p>
                        </div>
                    )}
                </div>
            </div>
            <section className="about">
                <div className="about__row">
                    <div className="about__card">
                        <ul className="about__list">
                            <li className="about__item">
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/21509109f59a9c24223cdb61d5e36d9efa9d7f07.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Getting Started
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="about__list">
                            <li className="about__item">
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/6463e960f5062f4edcadf26c166e440f75963295.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Account & Data
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="about__list">
                            <li className="about__item">
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/be64ecb001f514018883a14dda6f9e469fedb3d0.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Using Flo
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="about__list">
                            <li className="about__item">
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/48fc614c779fda7e5888b339763605ad0deb6c57.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Subscriptions & Billing
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="about__list">
                            <li className="about__item">
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/331b9932273132d3a7e05bd5f1a2ed84becae7a9.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Troubleshooting
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="about__list">
                            <li className="about__item">
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/2b214da859893257f75b6a60bedacdf0346b5684.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        General Questions
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="about__list">
                            <li className="about__item">
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/8c974237375f70f24850303223786afca9565916.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Flo for Partners
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="about__list">
                            <li className="about__item">
                                <a href="">
                                    <div className="about__img">
                                        <img src="https://theme.zdassets.com/theme_assets/2411771/bc784601a2bc8d3e4f9dd7595c7dbd41a3213568.png" alt=""/>
                                    </div>
                                    <div className="about__title">
                                        Getting Started
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="contact">
                <div className="container">
                    <div className="contact__row">
                        <h3 className="contact__title">
                            Didn't find the answer?
                        </h3>
                        <button className="contact__btn">
                            Contact us
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Help;