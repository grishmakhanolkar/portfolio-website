import styles from "../styles/Home.module.css";
import Image from "next/image";
import LightsOut from "../components/Images/LightsOut.png";

function ProjectCard({ project }) {
  const { projectName, Description, imgSrc, webUrl } = project;
  return (
    <div className={styles.projectImage}>
      <Image
        className={styles.projImg}
        width={4}
        height={3}
        layout="responsive"
        src={imgSrc}
      />
      <div className={styles.projectname}>
        <h4 class=" mt-5 mt-sm-3 mt-md-5 mb-3 fw-bold">{projectName}</h4>
        <p class="fs-6 fw-light mb-3 p-1">{Description}</p>
        <button
          type="button"
          class="btn btn-outline-primary ms-auto rounded-pill"
        >
          Visit Website
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
