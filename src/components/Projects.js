import { Button, Card } from "react-bootstrap";
import todo from "../assets/todo.png";
import weather from "../assets/weather.png";
import memory from "../assets/memory.png";
import portfolio from "../assets/portfolio.png";
import restaurant from "../assets/restaurant.jpg";
import holder from "../assets/placeholder.svg";

export default function Projects() {
  const projects = [
    {
      name: "To-Do App",
      description:
        "A responsive task management app built with React, using React Bootstrap for UI and CSS for styling. It handles task creation, completion, and deletion in real time with React state, and works smoothly across all devices.",
      gitLink: "https://github.com/brendo0npillay/todo-app",
      link: "https://todo-app-idde.onrender.com/",
      img: todo,
    },
    {
      name: "Weather App",
      description:
        "A lightweight, responsive weather app built with HTML, CSS, and JavaScript. It fetches real-time data from a weather API, letting users search any city and view current conditions with a clean, user-friendly interface.",
      gitLink: "https://github.com/brendo0npillay/weatherapp",
      link: "https://weatherapp-4hr3.onrender.com/",
      img: weather,
    },
    {
      name: "Memory Game",
      description:
        "An interactive memory game built with HTML, CSS, and JavaScript, bundled with Webpack for performance and modular code. Players match card pairs using visual memory, with smooth animations and responsive design for all devices.",
      gitLink: "https://github.com/brendo0npillay/memory-game",
      link: "https://memory-game-xfw0.onrender.com/",
      img: memory,
    },
    {
      name: "Portfolio",
      description:
        "A clean, responsive portfolio site built with HTML and CSS. It showcases my background, skills, and social links in a simple layout that highlights my strengths and works well on all devices.",
      gitLink: "https://github.com/brendo0npillay/brendo0npillay.github.io",
      link: "https://brendon-portfolio.onrender.com/",
      img: portfolio,
    },
    {
      name: "Restaurant site",
      description:
        "A modern, responsive restaurant site built with WordPress. It includes location, hours, contact info, and a styled menu to showcase dishes, all presented with a clean design that reflects the brand's vibe and ensures a smooth user experience.",
      gitLink: "",
      link: "https://kitch3n.great-site.net/?i=2",
      img: restaurant,
    },
    {
      name: "Planet Viewer",
      description:
        "A dynamic 3D planet viewer built with Three.js and powered by Vite. It features realistic planet models, smooth camera transitions, and interactive controls, all wrapped in a sleek, transparent UI that offers an immersive space-themed experience.",
      gitLink: "https://github.com/brendo0npillay/planet-view",
      link: "https://planet-view.onrender.com/",
      img: holder,
    },
  ];
  return (
    <div className="projectContainer">
      <h3>Projects</h3>
      <p>A list of projects that have a viewable frontend site</p>
      <div className="cardContainer">
        {projects.map((item) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <div className="buttons">
                <Button
                  className="butn"
                  href={item.link}
                  target="_blank"
                  variant="primary"
                >
                  View Site
                </Button>
                <Button
                  className="outBtn"
                  href={item.gitLink}
                  target="_blank"
                  variant="outline-primary"
                >
                  View Repo
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
