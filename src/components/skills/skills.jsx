import React, { useState, useEffect } from "react";
import contentful from "contentful";
import { createClient } from "contentful";
import "./skills.css";
import Frontend from "./frontend";
import Backend from "./backend";

const client = createClient({
  space: "jnnpcct6w3gh",
  environment: "master",
  accessToken: "0KPgqwYWnYvFcjB29EA7BgyYSyuMCha8gvuHrFWqfvw",
});

function Skills() {
  const [skillsData, setSkillsData] = useState(null);

  useEffect(() => {
    client
      .getEntry("5O5Y4o20SAyIyBfkHKFOk1")
      .then((entry) => setSkillsData(entry.fields))
      .catch(console.error);
  }, []);

  if (!skillsData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="skills section" id="skills">
      <h1 className="section__title">{skillsData.sectiontitle}</h1>
      <h2 className="section__subtitle">{skillsData.sectionsubtitle}</h2>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
