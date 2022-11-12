import styles from './Footer.module.scss';
import thumbsup from '../../components/Images/hand-thumbs-up.svg';
import Image from 'next/image';
import FacebookIcon from '../../components/Images/Icons/facebook.svg';
import GithubIcon from '../../components/Images/Icons/github.svg';
import Insta from '../../components/Images/Icons/instagram.svg';
import LinkedinIcon from '../../components/Images/Icons/linkedin.svg';
import TwitterIcon from '../../components/Images/Icons/twitter.svg';
import MediumIcon from '../../components/Images/Icons/medium.svg';

const socialIcon = [
  {
    siteLink: 'https://www.linkedin.com/in/grishmakhanolkar/',
    imgLink: LinkedinIcon,
    name: 'linkedin',
  },
  {
    siteLink: 'https://www.facebook.com/grishma.khanolkar/',
    imgLink: FacebookIcon,
    name: 'facebook',
  },
  {
    siteLink: 'https://www.instagram.com/grishmakhanolkar/',
    imgLink: Insta,
    name: 'insta',
  },
  {
    siteLink: 'https://twitter.com/k_grishma/',
    imgLink: TwitterIcon,
    name: 'twitter',
  },
  {
    siteLink: 'https://github.com/grishmakhanolkar',
    imgLink: GithubIcon,
    name: 'github',
  },
  {
    siteLink: 'https://medium.com/@grishmakhanolkar',
    imgLink: MediumIcon,
    name: 'medium',
  },
];

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footerCard}>
        <div class="card p-5 shadow bg-transparent border-0">
          <div class="row row-cols-1 row-cols-sm-1 row-cols-lg-3 gy-5 mx-1">
            <div class="col d-block d-flex align-items-center">
              <h2 class="m-auto fw-bold fs-0">Start a project</h2>
            </div>
            <div class="col d-block d-flex align-items-center">
              <h2 class="fs-4 fw-light m-auto">
                Interested in working together? We should queue up a time to
                chat.
              </h2>
            </div>
            <div class="col d-block d-flex align-items-center">
              <button
                type="button"
                class="btn btn-outline-primary m-auto rounded-pill"
              >
                <Image fill="white" src={thumbsup} /> Let us do it
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 class="fs-5 fw-light m-5 pb-5 pt-5">
        Living, learning, and leveling up one day at a time.
      </h2>
      <div>
        {socialIcon.map((socIcon) => (
          <a
            key={socIcon.name}
            class="m-4 mt-5 pt-5 pb-5"
            target="blank"
            href={socIcon.siteLink}
          >
            <Image
              alt={socIcon.name}
              src={socIcon.imgLink}
              width={30}
              height={30}
            />
          </a>
        ))}
        <p class="fs-6 fw-light mt-5 pb-5 pt-5">
          Made with NextJS and Bootstrap
        </p>
      </div>
    </section>
  );
}

export default Footer;
