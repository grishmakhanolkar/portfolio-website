import styles from './ProjectCard.module.scss';
import Image from 'next/image';

function ProjectCard({ project }) {
  const { projectName, Description, imgSrc } = project;
  return (
    <div className={styles.projectImage}>
      <Image
        className={styles.projImg}
        width={4}
        height={3}
        layout="responsive"
        objectFit="cover"
        objectPosition="top"
        src={imgSrc}
      />
      <div className={styles.projectname}>
        <h4 class=" mt-5 mt-sm-3 mt-md-5 mb-3 fw-bold">{projectName}</h4>
        <p class="fs-6 fw-light mb-3 p-1">{Description}</p>
        <button
          type="button"
          class="btn btn-outline-secondary ms-auto rounded-pill"
        >
          Visit Website
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
