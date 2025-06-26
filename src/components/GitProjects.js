import { Button, Card } from "react-bootstrap";
import gitLogo from "../assets/github-logo-png_seeklogo-273183-removebg-preview.png";

export default function GitProjects() {
  const projects = [
    {
      name: "Node and SQL project",
      description:
        "A full-stack app using Node.js, Express, PostgreSQL, and Docker to manage visitor records. It features a static form, data storage, CRUD operations, and confirmation pages rendered with Pug.",
      link: "https://github.com/brendo0npillay/node-sql",
    },
    {
      name: "Bank manage Project",
      description:
        "A JavaScript banking simulation using classes to model accounts and operations. It demonstrates encapsulation, validation, and precise calculations with Decimal.js. Jasmine tests ensure accuracy and reliability.",
      link: "https://github.com/brendo0npillay/bank",
    },
    {
      name: "Animal class project",
      description:
        "This project models animals using classes to demonstrate encapsulation, inheritance, polymorphism, and composition. It includes Jasmine unit tests to verify functionality.",
      link: "https://github.com/brendo0npillay/animals",
    },
    {
      name: "Semi-tone difference Project",
      description:
        "A project with a Note class that compares notes within a note circle. It features a frontend where users guess the interval between notes and includes Jasmine tests to verify the comparison methods.",
      link: "https://github.com/brendo0npillay/semitone",
    },
    {
      name: "email sender",
      description:
        "A command-line tool using Brevo to send inspirational quotes via email to individuals or groups. Includes Jasmine tests to ensure reliable message sending.",
      link: "https://github.com/brendo0npillay/email-sender",
    },
    {
      name: "Github api Project",
      description:
        "A tool using the GitHub API to fetch pull requests from a specific repo based on owner, repo name, and date range. Jasmine tests verify the retrieval and filtering functions.",
      link: "https://github.com/brendo0npillay/consume-github-api",
    }
  ];
  return (
    <div className="projectContainer">
      <h3>Github Projects</h3>
      <p>A list of projects that do not have viewable site but have a repository</p>
      <div className="cardContainer">
        {projects.map((item) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={gitLogo} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <div className="buttons">
                <Button
                  className="outBtn"
                  href={item.link}
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
