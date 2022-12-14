import styles from './ProjectCard.module.scss';
import Image from 'next/image';

function ProjectCard({ project }) {
  const { projectName, Description, imgSrc, webUrl } = project;
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
        alt={projectName}
      />
      <div className={styles.projectname}>
        <h4 className=" mt-5 mt-sm-3 mt-md-5 mb-3 fw-bold">{projectName}</h4>
        <p className="fs-6 fw-light mb-3 p-1">{Description}</p>
        <a
          href={webUrl}
          target="blank"
          type="button"
          className="btn btn-outline-secondary ms-auto rounded-pill"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
