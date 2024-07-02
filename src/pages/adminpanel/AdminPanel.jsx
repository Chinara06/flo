import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getContact} from "../../redux/contact/contact";
import { IoMdPerson } from "react-icons/io";

const AdminPanel = () => {
    const {data} = useSelector(store => store.contact);
   const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContact())
    },[])
    console.log(data)
    return (
        <section className={"admin"}>
            <div className="container">
                <div className="admin__row">
                    {
                        data.map(item => (
                            <div className="admin__card">
                                <div className="admin__names">
                                    <div className={"admin__icon"}>
                                        <IoMdPerson />
                                    </div>
                                    <div className={"admin__name"}>
                                        {item.name}
                                    </div>
                                </div>
                                <p className={"admin__desc"}>
                                   <span> Email</span>:
                                    {item.email}
                                </p>
                                <p className={"admin__desc"}>
                                    <span>Tell</span>:
                                    {item.tell}
                                </p>
                                <p className={"admin__desc"}>
                                    <span>Message</span>:
                                    {item.message}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default AdminPanel;