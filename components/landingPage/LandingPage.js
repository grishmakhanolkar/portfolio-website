import styles from './LandingPage.module.scss';
import avatar from '../../Images/AvatarMaker.svg';
import LandFooter from '../../Images/LandFooter.svg';
import Image from 'next/image';

function LandingPage(props) {
  const { setIsModalOpen } = props;
  return (
    <>
      <section className={styles.landingpage}>
        <div>
          <h1 className="mx-1 mb-4 fw-bold">
            Freelance Web Developer <br />
            <span className="fs-3">ReactJS - NextJS Frontend Developer</span>
          </h1>
          <p className="fs-5 fw-light">
            I design and code beautifully simple things, and I love what I do.
          </p>
          <p className="fs-5 fw-light mb-5 pb-3">
            I can help you Design, Biuld, Deploy and Maintain your web presence.
          </p>
          <Image
            width={200}
            height={200}
            className="rounded-circle mt-2"
            src={avatar}
            alt="avatar"
          />
          <div className="p-4">
            <button
              type="button"
              className="btn btn-primary ms-auto rounded-pill fw-bold"
              onClick={() => setIsModalOpen(true)}
            >
              Get your Proof of Concept for Free! Hire me.
            </button>
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-center pt-5 mt-5">
        <Image className="h-50" src={LandFooter} alt="illustration" />
      </div>
    </>
  );
}

export default LandingPage;
