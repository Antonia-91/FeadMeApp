import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <main className="main">
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
              Antonia
            </a>
          </li>
          <li>
            <FaEnvelope />
            Antonia.pettersson91@gmail.com
          </li>
        </ul>
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
        <h2>About</h2>
        <p>
          FeadMeAPP is a degree project for my education as a Frontend Developer
          at the Media Institute. The project's frontend is built in React, the
          backend in Node.js and MySQL. The database is built in PhpMyAdmin.
          Just nu anväder jag mig utav """ API för att få fram sökresultat av
          recept. Men jag har även påbörjar att samla egna recept och bygger ett
          eget API. Dessa recept fetchas fram under "categorier på Home sidan".
          Databasen med dessa recept ligger just nu hårdkodat i separata filer
          under Backend mappen
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
    </main>
  );
};

export default About;
