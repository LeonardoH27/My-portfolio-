import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import "./home.css";
import Svgdata from "../../assets/svg/svgdata";

const client = createClient({
  space: "jnnpcct6w3gh",
  environment: "master",
  accessToken: "0KPgqwYWnYvFcjB29EA7BgyYSyuMCha8gvuHrFWqfvw",
});

function Data() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    client
      .getEntry("7rSocJk66VzDHnm6K03xL2")
      .then((entry) => {
        setAboutData(entry.fields);
      })
      .catch(console.error);
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home__data">
      <div className="home__titles">
        <h1 className="home__title">{aboutData.sectiontitle}</h1>
        <h2 className="home__subtitle">{aboutData.sectionsubtitle}</h2>
        <p className="home__description">{aboutData.sectiondescription}</p>
      </div>
      {aboutData.imagemain && (
        <img
          className="home__img "
          src={aboutData.imagemain.fields.file.url}
          alt="Main Image"
        />
      )}

      {aboutData.curriculo && (
        <a
          href={aboutData.curriculo.fields.file.url}
          className="button button--flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome!
          <Svgdata />
        </a>
      )}
    </div>
  );
}

export default Data;
