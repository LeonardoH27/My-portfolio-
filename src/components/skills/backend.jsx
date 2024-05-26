import React, { useState, useEffect } from "react";
import contentful from "contentful";
import { createClient } from "contentful";
import "./skills.css";

const client = createClient({
  space: "jnnpcct6w3gh",
  environment: "master",
  accessToken: "0KPgqwYWnYvFcjB29EA7BgyYSyuMCha8gvuHrFWqfvw",
});

function Backend() {
  const [backendSkillsData, setBackendSkillsData] = useState(null);

  useEffect(() => {
    client
      .getEntry("2IoNFCgadc6Mljomn8xEOS")
      .then((entry) => setBackendSkillsData(entry.fields))
      .catch(console.error);
  }, []);

  if (!backendSkillsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="skills__content">
      <div className="skills__box">
        <h1 className="skills__title">{backendSkillsData.sectiontitle}</h1>
        <p className="skills__name">{backendSkillsData.skills1}</p>
        <p className="skills__level">{backendSkillsData.skillslevel1}</p>
        <p className="skills__name">{backendSkillsData.skills2}</p>
        <p className="skills__level">{backendSkillsData.skillslevel2}</p>
        <p className="skills__name">{backendSkillsData.skills3}</p>
        <p className="skills__level">{backendSkillsData.skillslevel3}</p>
        <p className="skills__name">{backendSkillsData.skills4}</p>
        <p className="skills__level">{backendSkillsData.skillslevel4}</p>
        <p className="skills__name">{backendSkillsData.skills5}</p>
        <p className="skills__level">{backendSkillsData.skillslevel5}</p>
      </div>
    </div>
  );
}

export default Backend;
