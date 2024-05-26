import React, { useState, useEffect } from "react";
import contentful from "contentful";
import { createClient } from "contentful";
import "./skills.css";

const client = createClient({
  space: "jnnpcct6w3gh",
  environment: "master",
  accessToken: "0KPgqwYWnYvFcjB29EA7BgyYSyuMCha8gvuHrFWqfvw",
});

function Frontend() {
  const [frontendData, setFrontendData] = useState(null);

  useEffect(() => {
    client
      .getEntry("5g3i0wvqWQnLs3AMDM7Be2")
      .then((entry) => setFrontendData(entry.fields))
      .catch(console.error);
  }, []);

  if (!frontendData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="skills__content">
      <div className="skills__box">
        <h1 className="skills__title">{frontendData.sectiontitle}</h1>
        <p className="skills__name">{frontendData.skills1}</p>
        <p className="skills__level">{frontendData.skillslevel1}</p>
        <p className="skills__name">{frontendData.skills2}</p>
        <p className="skills__level">{frontendData.skillslevel2}</p>
        <p className="skills__name">{frontendData.skills3}</p>
        <p className="skills__level">{frontendData.skillslevel3}</p>
        <p className="skills__name">{frontendData.skills4}</p>
        <p className="skills__level">{frontendData.skillslevel4}</p>
        <p className="skills__name">{frontendData.skills5}</p>
        <p className="skills__level">{frontendData.skillslevel5}</p>
      </div>
    </div>
  );
}

export default Frontend;
