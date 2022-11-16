import styles from './ProjectList.module.scss';
import ProjectCard from '../projectCard/ProjectCard';
import projectDetails from '../../ProjectDetails';

function ProjectList() {
  return (
    <section id="project" className={styles.project}>
      <h1 class="m-5 fw-bold">My Recent Work</h1>
      <h2 class="fs-5 fw-light m-5 pb-3">
        Here are a few past projects I have worked on.
      </h2>

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-5 mx-1">
          {projectDetails
            .filter((_, idx) => idx < 6)
            .map((project) => (
              <div key={project.id} class="col d-block">
                <ProjectCard project={project} />
              </div>
            ))}
        </div>
      </div>
      <a
        href="/projects"
        type="button"
        class="btn btn-outline-primary ms-auto mt-5 mb-5 px-3 rounded-pill"
      >
        View all projects
      </a>
      <hr />
    </section>
  );
}

export default ProjectList;
