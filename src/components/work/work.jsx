import React, { useState } from "react";
import "./work.css";

const worksData = {
  title: "Works",
  subtitle: "My projects",
  workstitle1: "Front-End Developer",
  workstitle2: "Back-End Developer",
  workstitle3: "Full-Stack Developer",
  worksdescription: "I will soon post new projects. Be attentive!",
  button: "View More",
};
const Works = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="works section" id="works">
      <h2 className="section__title">{worksData.title}</h2>
      <span className="section__subtitle">{worksData.subtitle}</span>

      <div className="works__container container grid">
        <div className="works__content">
          <div className="box box1">
            <i className="uil uil-bag-alt works__icon"></i>
            <h3 className="works__title">{worksData.workstitle1}</h3>
          </div>

          <span onClick={() => toggleTab(1)} className="works__button">
            {worksData.button}
            <i className="uil uil-arrow-right works__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1 ? "works__modal active-modal" : "works__modal"
            }
          >
            <div className="works__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times works__modal-close"
              ></i>

              <h3 className="works__modal-title">{worksData.workstitle1}</h3>
              <p className="works__modal-description">
                {worksData.worksdescription}
              </p>
            </div>
          </div>
        </div>

        <div className="works__content">
          <div className="box box2">
            <i className="uil uil-bag-alt works__icon"></i>
            <h3 className="works__title">{worksData.workstitle2}</h3>
          </div>

          <span onClick={() => toggleTab(2)} className="works__button">
            {worksData.button}
            <i className="uil uil-arrow-right works__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "works__modal active-modal" : "works__modal"
            }
          >
            <div className="works__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times works__modal-close"
              ></i>

              <h3 className="works__modal-title">{worksData.workstitle2}</h3>
              <p className="works__modal-description">
                {worksData.worksdescription}
              </p>
            </div>
          </div>
        </div>

        <div className="works__content">
          <div className="box box3">
            <i className="uil uil-bag-alt works__icon"></i>
            <h3 className="works__title">{worksData.workstitle3}</h3>
          </div>

          <span onClick={() => toggleTab(3)} className="works__button">
            {worksData.button}
            <i className="uil uil-arrow-right works__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3 ? "works__modal active-modal" : "works__modal"
            }
          >
            <div className="works__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times works__modal-close"
              ></i>

              <h3 className="works__modal-title">{worksData.workstitle3}</h3>
              <p className="works__modal-description">
                {worksData.worksdescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
