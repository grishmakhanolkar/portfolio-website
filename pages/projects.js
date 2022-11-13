import ProjectCard from '../components/projectCard/ProjectCard';
import projectDetails from '../components/ProjectDetails';
import PageHeader from '../components/pageHeader/PageHeader';

function Project() {
  return (
    <section>
      <PageHeader />
      <h1 class="m-5 fw-bold">My Projects</h1>
      <h2 class="fs-5 fw-light m-5 pb-3">
        Here are the past projects that I have worked on.
      </h2>

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-5 mx-1">
          {projectDetails.map((project) => (
            <div key={project.id} class="col d-block">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <a
        href="/"
        type="button"
        class="btn btn-outline-primary ms-auto mt-5 mb-5 px-3 rounded-pill"
      >
        Go back to Home
      </a>
    </section>
  );
}

export default Project;
