import React from 'react';

const Contact = () => {
    return (
        <div className={"contact"}>
            <div className="container">
                <div className="contact__row">
                    <form className={"contact__form"} action="">
                        <h3 className="contact__title">
                            Contact Us
                        </h3>
                        <div className="contact__card">
                            <label>
                                Full name
                                <input type="text"/>
                            </label>
                            <label>
                                Email
                                <input type="email"/>
                            </label>
                            <label>
                                Phone (optional)
                                <input type="tel"/>
                            </label>
                            <label>
                                Message
                                <textarea name="" id="" cols="200" rows="10"></textarea>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;