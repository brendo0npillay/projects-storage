
import { Button, Card } from "react-bootstrap";
import {
  TodoThumb,
  WeatherThumb,
  MemoryThumb,
  PortfolioThumb,
  RestaurantThumb,
  PlanetThumb,
  ImageGeneratorThumb,
} from "./ProjectThumbs";

export default function Projects() {
  const projects = [
    {
      name: "To-Do App",
      description:
        "A responsive task manager built with React and React Bootstrap. Create, complete, and delete tasks with real-time state updates.",
      gitLink: "https://github.com/brendo0npillay/todo-app",
      link: "https://todo-app-idde.onrender.com/",
      Thumb: TodoThumb,
    },
    {
      name: "Weather App",
      description:
        "A lightweight weather app built with HTML, CSS, and JavaScript. Search cities and view real-time weather conditions.",
      gitLink: "https://github.com/brendo0npillay/weatherapp",
      link: "https://weatherapp-4hr3.onrender.com/",
      Thumb: WeatherThumb,
    },
    {
      name: "Memory Game",
      description:
        "An interactive memory game built with JavaScript and Webpack, featuring card matching, animations, and responsive design.",
      gitLink: "https://github.com/brendo0npillay/memory-game",
      link: "https://memory-game-xfw0.onrender.com/",
      Thumb: MemoryThumb,
    },
    {
      name: "Portfolio",
      description:
        "A responsive portfolio showcasing my background, skills, projects, and social links.",
      gitLink: "https://github.com/brendo0npillay/brendo0npillay.github.io",
      link: "https://brendon-portfolio.onrender.com/",
      Thumb: PortfolioThumb,
    },
    {
      name: "Restaurant Site",
      description:
        "A modern WordPress restaurant website with location details, opening hours, contact information, and a styled menu.",
      gitLink: "",
      link: "https://kitch3n.great-site.net/?i=2",
      Thumb: RestaurantThumb,
    },
    {
      name: "Planet Viewer",
      description:
        "A dynamic 3D planet viewer built with Three.js and Vite, featuring realistic planets, smooth camera transitions, and interactive controls.",
      gitLink: "https://github.com/brendo0npillay/planet-view",
      link: "https://planet-view.onrender.com/",
      Thumb: PlanetThumb,
    },
    {
      name: "Image Generator",
      description:
        "An AI-powered image generator with text prompts, image previews, prompt history, and dynamic feedback.",
      gitLink: "https://github.com/brendo0npillay/ai-image-gen",
      link: "https://ai-image-gen-8vpr.onrender.com",
      Thumb: ImageGeneratorThumb,
    },
  ];

  return (
    <div className="projectContainer">
      <h3>Projects</h3>
      <p>A list of projects that have a viewable frontend site</p>

      <div className="cardContainer">
        {projects.map((item) => {
          const Thumb = item.Thumb;

          return (
            <Card key={item.name} className="projectCard">
              <div className="projectImage">
                <Thumb />
              </div>

              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>

                <div className="buttons">
                  <Button
                    className="butn"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                  >
                    View Site
                  </Button>

                  {item.gitLink && (
                    <Button
                      className="outBtn"
                      href={item.gitLink}
                      target="_blank"
                      rel="noreferrer"
                      variant="outline-primary"
                    >
                      View Repo
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
