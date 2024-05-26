import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import "./achievements.css";

const client = createClient({
  space: "jnnpcct6w3gh",
  environment: "master",
  accessToken: "0KPgqwYWnYvFcjB29EA7BgyYSyuMCha8gvuHrFWqfvw",
});

function Achievements() {
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .getEntry("3R6z6LlzluBlreA983eEG0")
      .then((entry) => {
        const fields = entry.fields;

        const { sectiontitle, sectionsubtitle, sectiondescription } = fields;

        const achievements = Object.entries(fields)
          .filter(
            ([key]) =>
              key !== "sectiontitle" &&
              key !== "sectionsubtitle" &&
              key !== "sectiondescription"
          )
          .map(([achievement, id]) => {
            const imageName = `${achievement}image`;
            const imageUrl = entry.fields[imageName]?.fields?.file.url;
            return { name: achievement, id, imageUrl };
          });
        setData({
          sectiontitle,
          sectionsubtitle,
          sectiondescription,
          achievements,
        });
      })
      .catch(console.error);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="achievements">
      <section className="achievements__section" id="achievements">
        <h1 className="section__title">{data.sectiontitle}</h1>
        <h2 className="section__subtitle">{data.sectionsubtitle}</h2>
        <p className="achievements__description">{data.sectiondescription}</p>
        <ul className="achievements__container container grid">
          <div className="achievements__container container grid">
            <div className="badges">
              {data.achievements.map((achievement) => (
                <li key={achievement.id} className="badges__badge">
                  {achievement.imageUrl && (
                    <img src={achievement.imageUrl} alt={achievement.name} />
                  )}
                </li>
              ))}
            </div>
          </div>
        </ul>
      </section>
    </div>
  );
}

export default Achievements;
