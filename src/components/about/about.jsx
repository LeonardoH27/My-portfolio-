import React from "react";
import "./about.css";
import Info from "../about/info";
import Image from "../../assets/img/imageabout.jpg";
import Cv from "../../assets/files/meucv.pdf";
import Svg from "../../assets/svg/svg";
import Qualification from "../about/qualification/qualification";

const aboutData = {
  title: "About",
  subtitle: "Introduction",
  description:
    " I'm taking my first steps in this new world, thus creating my portfolio. Here I'm going to share a little of myself, I hope you like it.",
};

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">{aboutData.title}</h2>
      <span className="section__subtitle">{aboutData.subtitle}</span>

      <div className="about__container container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">{aboutData.description}</p>

          <a download="" href={Cv} className="button button--flex">
            Download CV
            <Svg />
          </a>
        </div>
      </div>
      <Qualification />
    </section>
  );
};

export default About;
