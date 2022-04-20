import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <main className="main">
      <section className="section">
        <h2>About</h2>
        <p>
          FeadMeApp is a degree project for my education as a Frontend Developer
          at the Media Institute. The project's frontend is built in React, the
          backend in Node.js and MySQL. The database is built in PhpMyAdmin.
          Right now I'm using the "themealdb" API to get recipe search results.
          But I also start collecting my own recipes and build my own API. These
          recipes are presented under "categories on the Home page". The
          database with these recipes is currently hard-coded in separate files
          under the Backend folder
        </p>
      </section>

      <section className="section">
        <h2>API</h2>
        <p>
          I am using the free version of
          <a href="https://www.themealdb.com/" target="_blank" rel="nereferrer">
            {" "}
            https://www.themealdb.com/
          </a>
          .... Right now I am using this API because there was a free version
          that has no limit of searches which fits well because this is "only" a
          school project. in the future if I choose to develop this project I
          will make it possible to use several different APIs so the search
          result will be greater
        </p>
      </section>

      <section className="section">
        <h2>Antonia</h2>
        <p>
          Student at:
          <a
            href="https://medieinstitutet.se/"
            target="_blank"
            rel="nereferrer"
          >
            Medieinstitutet
          </a>{" "}
          2020-2022, Frontend Developer
        </p>
      </section>
      <section className="section">
        <h2>Contact</h2>
        <ul>
          <li>
            {" "}
            <a
              href="https://github.com/Antonia-91"
              target="_blank"
              rel="nereferrer"
            >
              {" "}
              <FaGithub />
               Github
            </a>
          </li>
          <li>
            <FaEnvelope />
            Antonia.pettersson91@gmail.com
          </li>
        </ul>
      </section>
    </main>
  );
};

export default About;
