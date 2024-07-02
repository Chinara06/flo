import React , {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {postContact} from "../../redux/contact/contact";
import {Link} from "react-router-dom";

const Contact = () => {
    const [contact,setContact] = useState({
        id:uuidv4(),
        name:"",
        email:'',
        tell:"",
        message:"",
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const postContacts = (e) => {
        e.preventDefault()
        if( contact.name && contact.email && contact.tell && contact.message ){
            dispatch(postContact(contact)).then(navigate("/"))
        }
        else{
            alert("Заполните все поля")
        }
    }
    const onChange = (e) => {
        setContact({...contact,[e.target.name]:e.target.value})
    }
    return (
        <div className="contact">
            <div className="container">
                <div className="contact__row">
                    <div className="contact__form">
                        <h3 className="contact__title">Contact Us</h3>
                        <form onSubmit={postContacts} className="contact__card">
                            <label>
                                Full name
                                <input name="name" value={contact.name} onChange={onChange} type="text" />
                            </label>
                            <label>
                                Email
                                <input name="email" value={contact.email} onChange={onChange} type="email" />
                            </label>
                            <label>
                                Phone (optional)
                                <input name="tell" value={contact.tell} onChange={onChange} type="tel" />
                            </label>
                            <label>
                                Message
                                <textarea name="message" value={contact.message} onChange={onChange} cols="200" rows="10"></textarea>
                            </label>
                            <button type="submit" className="help__btn">
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;