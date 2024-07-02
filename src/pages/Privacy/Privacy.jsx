import React from 'react';

const Privacy = () => {
    return (
        <section className={"privacy"}>
            <div className="container">
                <div className="privacy__row">
                    <div className="privacy__texts">
                        <h2 className="privacy__title">
                            Your body. Your data.
                        </h2>
                        <p className="privacy__desc">When it comes to your body, we believe you deserve to be in complete control of your data. You can delete, access, and update it at any time by writing to our customer support team.</p>
                    </div>
                    <div className="privacy__img">
                        <img src="https://flo.health/uploads/media/sulu-630x-inset/06/6376-img_privacy.svg?v=1-0" alt="#" width={"630"} height={"388"}/>
                    </div>
                </div>
            </div>
            <section className="banner">
                <div className="container">
                    <div className="banner__card">
                        <div className="banner__img">
                            <div className="">
                                <img src="https://flo.health/cdn-cgi/image/quality=85,format=auto/uploads/media/sulu-1230x-inset/09/10079-iso_27001.png?v=1-0" alt="#" width={"120"} height={"89"}/>
                            </div>
                            <div className="">
                                <img src="https://flo.health/cdn-cgi/image/quality=85,format=auto/uploads/media/sulu-1230x-inset/09/10079-iso_27001.png?v=1-0" alt="#" width={"120"} height={"89"}/>
                            </div>
                        </div>
                        <h3 className="banner__title">
                            Protecting users’ data at the highest standard possible
                        </h3>
                        <p className="banner__desc">
                            Flo is the first period and ovulation tracker to achieve dual ISO 27001 and ISO 27701 Certifications
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Privacy;