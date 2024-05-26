import React from "react";
import "./Header.css";
import Logomain from "../../assets/img/logo.png";

const headerData = {
  items: [
    { id: 1, menu: "Home", slug: "home" },
    { id: 2, menu: "About", slug: "about" },
    { id: 3, menu: "Skills", slug: "skills" },
    { id: 4, menu: "Works", slug: "works" },
    { id: 5, menu: "Achievements", slug: "achievements" },
    { id: 6, menu: "Contact", slug: "contact" },
  ],
};

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a class="nav__logo"> </a>
        <img
          className="logo__main"
          src={Logomain}
          alt="logo__main"
          title="logo__main"
        />

        <div className="nav__menu">
          <ul className="nav__list grid">
            {headerData.items.map((data) => {
              return (
                <li key={data.id} className="nav__item">
                  <a href={`#${data.slug}`} className="nav__link">
                    {data.menu}
                    <div className="logo_main"></div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
