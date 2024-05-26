import React from "react";
import "./footer.css";

const footerData = {
  title: "Leonardo Horta",
  items: [
    { id: 1, menu: "Home", slug: "home" },
    { id: 2, menu: "About", slug: "about" },
    { id: 3, menu: "Skills", slug: "skills" },
    { id: 4, menu: "Works", slug: "works" },
    { id: 5, menu: "Achievements", slug: "achievements" },
    { id: 6, menu: "Contact", slug: "contact" },
  ],
  social: [
    {
      id: 1,
      name: "instagram",
      link: "https://www.instagram.com/_.horta2702._/",
      icon: "uil uil-instagram-alt",
    },
    {
      id: 2,
      name: "linkedin",
      link: "https://www.linkedin.com/in/leonardohorta27/",
      icon: "uil uil-linkedin",
    },
    {
      id: 3,
      name: "github",
      link: "https://github.com/LeonardoH27",
      icon: "uil uil-github",
    },
  ],

  rights: "All rigths reserved",
};

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__container container">
        <h1 className="footer__title">{footerData.title}</h1>
        <div className="nav__menu">
          <ul className="nav__list grid">
            {footerData.items.map((data) => {
              return (
                <li key={data.id} className="nav__item">
                  <a href={`#${data.slug}`} className="nav__link">
                    {data.menu}
                    <div className="footer__link"></div>
                  </a>
                </li>
              );
            })}
          </ul>
          <div>
            <div className="footer__social">
              {footerData.social.map((data, index) => {
                return (
                  <a
                    key={index}
                    href={data.link}
                    className="home__social-icon"
                    target="_blank"
                  >
                    <i className={data.icon}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <span className="footer__copy">&#169; {footerData.rights}</span>
      </nav>
    </footer>
  );
};

export default Footer;
