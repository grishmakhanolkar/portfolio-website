import styles from './LandingPage.module.scss';
import avatar from '../../components/Images/AvatarMaker.svg';
import LandFooter from '../../components/Images/LandFooter.svg';
import Image from 'next/image';

function LandingPage() {
  return (
    <>
      <section className={styles.landingpage}>
        <div>
          <h1 class="mx-1 mb-4 fw-bold">ReactJS - NextJS Frontend Developer</h1>
          <h2 class="fs-5 fw-light mb-5 pb-3">
            I design and code beautifully simple things, and I love what I do.
          </h2>
          <Image
            width={200}
            height={200}
            class="rounded-circle mt-2"
            src={avatar}
          />
        </div>
      </section>
      <div class="d-flex justify-content-center pt-5 mt-5">
        <Image class="h-50" fill src={LandFooter} />
      </div>
    </>
  );
}

export default LandingPage;
