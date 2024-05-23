import React from 'react';

const Try = () => {
    return (
        <section className={"try"}>
          <div className="container">
              <div className="try__row">
                  <div className="try__img">
                      <img src="https://flo.health/uploads/media/sulu-1000x-inset/02/9482-Banner.jpg?v=1-0" alt="#"/>
                  </div>
               <div className="try__banner">
                   <h2 className="try__title">
                       We are on a mission to improve the well-being of all women
                   </h2>
                   <p className="try__subtitle">
                       At Flo, we believe that knowledge is power, especially when it comes to your health. Numerous studies show that health literacy directly influences different health outcomes, meaning poor health literacy rates often lead to poor overall health and well-being for women and girls, and people who menstruate.
                 <br/>
                   </p>
                   <p className="try__subtitle">
                       Therefore,
                       <span>Flo is gifting Flo Premium for free*</span>
                       in countries where access to reliable health information is limited. Our ambition is to reach 1bn women with this initiative, so they can have better access to reliable health information through the Flo app. And together with all of you, we believe that we can make a true impact on improving health literacy across the globe.
                   </p>
                   <br/>
                   <p className="try__subtitles">
                       <span>Your body. Your data. </span>
                       At Flo, we don't sell your data. No matter where you are, and what service you use, we protect your data in accordance with the European General Data Protection Regulations. You can delete, access, and update it at any time. You can read our privacy policy here
                   </p>
                   <br/>
                   <p className="try__desc">
                       <span>
                            *Available in 65 countries** on Android for one year from upgrade date. Available in Ukraine on iOS and Android until 31.12.2025.
                       </span>
                   </p>
                   <br/>
                   <p className="try__desc">
                       <span>
                           **List of counties can be found below in our FAQ’s.
                       </span>
                   </p>
                   <div className="try__market">
                       <a href="https://play.google.com/store/apps/details?id=org.iggymedia.periodtracker&hl=en&gl=US">
                           <img src="https://flo.health/uploads/media/sulu-1230x-inset/08/6018-google-play-badge%201.svg?v=1-0" alt="#" width={"296"} height={"119"}/>
                       </a>
                   </div>
               </div>
              </div>
          </div>
        </section>
    );
};

export default Try;