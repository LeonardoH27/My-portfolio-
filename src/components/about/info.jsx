import React from "react";

const infoData = {
  about: [
    {
      id: 1,
      title: "Experience",
      subtitle: "at least 1 year of experience",
      icon: "bx bx-code-alt",
    },
    {
      id: 2,
      title: "Badge",
      subtitle: "8 Badges",
      icon: "bx bx-award ",
    },
    {
      id: 3,
      title: "Support",
      subtitle: "Online 24 hours",
      icon: "bx bx-chat",
    },
  ],
};
const Info = () => {
  return (
    <div className="about__info">
      {infoData.about.map((data, index) => {
        return (
          <div key={index} className="about__box">
            <i class={data.icon}></i>
            <h3 className="about__title">{data.title}</h3>
            <span className="about__substitle"> {data.subtitle}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
