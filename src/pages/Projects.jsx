import { useLoaderData } from "react-router-dom";

function Projects(props) {

  const projects = useLoaderData()
  console.log(projects);

    return projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img src={project.image} style={{width: "600px", height: "auto"}} />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ));
}

export default Projects;