import styles from './About.module.scss';
import JournalCode from '../../Images/journal-code.svg';
import Image from 'next/image';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutInfo}>
        <h2 className="mx-1 mb-4 fs-1 fw-bold mt-5">
          Hi, I am Grishma. Nice to meet you!
        </h2>
        <p className="fs-5 fw-light mb-5">
          I am a Web Developer. I build apps with a clean UI and a focus on the
          UX. My current tech stack is React, Next JS, Vue JS, Bootstrap,
          Tailwind and Material UI. I am open to freelancing and collaborating
          with others on interesting projects.
        </p>
      </div>
      <div className={styles.aboutCard}>
        <div className="card p-5 shadow">
          <Image
            width={50}
            height={50}
            src={JournalCode}
            alt="Frontend developer"
          />
          <div className="card-body d-flex justify-content-center flex-column p-3">
            <h2 className="p-1 p-md-4 fs-1 fw-bold">Frontend Developer</h2>
            <p className="fs-5 fw-light  p-lg-2">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <dl>
              <dt className=" p-lg-2">Languages I speak:</dt>
              <dd className=" p-lg-2 fw-light">
                HTML, JavaScript, CSS, NodeJS
              </dd>
              <dt className=" p-lg-2">Libraries I have used:</dt>
              <dd className=" p-lg-2 fw-light">SCSS, ReactJS</dd>
              <dt className=" p-lg-2">Frameworks I have tried:</dt>
              <dd className=" p-lg-2 fw-light">
                NextJS, VueJS, Tailwind, Bootstrap, Material UI, React Native
              </dd>
              <dt className=" p-lg-2">Tools:</dt>
              <dd className=" p-lg-2 fw-light">
                Github, Vercel, Netlify, VSCode, Postman, Firebase, Expo Go
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
