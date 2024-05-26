import React from "react";

const SocialData = {
  items: [
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
};

const Social = () => {
  return (
    <div className="home__social">
      {SocialData.items.map((data, index) => {
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
  );
};

export default Social;
