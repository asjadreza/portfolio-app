import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/weather.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/simon.png";
import IMG6 from "../../assets/beadrop.png";

const data = [
  {
    id: 1,
    image: IMG6,
    title: "Beatdrop",
    github: "http://github.com/asjadreza/fe-beatdrop-prod",
    demo: "https://fe-beatdrop-prod.vercel.app/",
  },

  {
    id: 2,
    image: IMG1,
    title: "Weather-web-app",
    github: "https://github.com/asjadreza/WeatherWebApp",
    demo: "https://weather-web-app-32ou.onrender.com/",
  },

  {
    id: 3,
    image: IMG2,
    title: "Todo Web-app",
    github: "https://github.com/asjadreza/todo-app",
    demo: "https://todo-app-a6r3.onrender.com/",
  },

  {
    id: 4,
    image: IMG3,
    title: "Snake-Game",
    github: "https://github.com/asjadreza/Snake-Game/",
    demo: "https://asjadreza.github.io/Snake-Game/",
  },

  {
    id: 5,
    image: IMG4,
    title: "Tic-Tac-Toe",
    github: "https://github.com/asjadreza/tic-tac-toe",
    demo: "https://asjadreza.github.io/tic-tac-toe/",
  },

  {
    id: 6,
    image: IMG5,
    title: "Simon game",
    github: "https://github.com/asjadreza/Simon_game",
    demo: "https://asjadreza.github.io/Simon_game/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
