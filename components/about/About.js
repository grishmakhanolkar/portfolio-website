import styles from "./About.module.scss";
import JournalCode from "../../components/Images/journal-code.svg";
import Image from "next/image";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutInfo}>
        <h1 class="mx-1 mb-4 fw-bold mt-5">
          Hi, I'm Grishma. Nice to meet you!
        </h1>
        <p class="fs-5 fw-light mb-5">
          I am a Web Developer. I build apps with a clean UI and a focus on the
          UX. My current tech stack is React, Next JS, Bootstrap and Material
          UI. I'm open to freelancing and collaborating with others on
          interesting projects.
        </p>
      </div>
      <div className={styles.aboutCard}>
        <div class="card p-5 shadow">
          <Image width={50} height={50} src={JournalCode} />
          <div class="card-body d-flex justify-content-center flex-column p-3">
            <h3 class="p-4">Frontend Developer</h3>
            <p class="p-2">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <p class="p-2">Languages I speak:</p>
            <p class="p-2">HTML, JavaScript, CSS, SCSS, ReactJS, NextJS, Git</p>
            <p class="p-2">Dev Tools:</p>
            <p class="p-2">
              Bootstrap, Github, Material UI, Node, Netlify, VSCode
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
