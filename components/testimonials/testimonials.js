/* eslint-disable react/no-unescaped-entities */
import Denston from '../../Images/Denston2.png';
import Pratik from '../../Images/Pratik.png';
import Image from 'next/image';

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      style={{ paddingTop: '100px', marginTop: '-85px' }}
    >
      <h2 className="mx-1 mb-1 mb-lg-4 fs-1 fw-bold mt-1 mt-lg-5">
        Testimonials
      </h2>
      <h3 className="fs-5 fw-light">Clients have said some nice things...</h3>
      <div id="carouselIndicators" className="carousel slide m-1 m-md-5 p-md-5">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="0"
            className="active bg-primary"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="bg-primary"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="bg-primary"
          ></button>
        </div>
        <div className="carousel-inner py-4 py-md-0">
          <div className="carousel-item active">
            <Image
              width={150}
              height={150}
              src={Denston}
              className="d-block"
              alt="Testimonial from Bhasha.io"
            />
            <div style={{ maxWidth: '800px', margin: 'auto' }}>
              <p className="p-5 fs-6 fw-light">
                <strong>"</strong>From start to finish, Grishma's dedication,
                expertise, and professionalism were evident in every aspect of
                the project. Working with Grishma has been an absolute pleasure.
                Our website's performance has improved significantly, thanks to
                Grishma's technical prowess and ability to optimize for speed
                and efficiency. Throughout the project, she actively listened to
                our requirements, grasped our vision, and translated it into a
                visually appealing and functional website. Thank you, Grishma,
                for your outstanding work on our website. We look forward to
                continuing our collaboration with you in the future.
                <strong>"</strong>
              </p>
              <h4>Denston Lewis</h4>
              <p className="pb-5 fs-5 fw-light">-Director, Bhasha.io</p>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="#e67695"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <div style={{ maxWidth: '800px', margin: 'auto' }}>
              <p className="p-5 fs-6 fw-light">
                <strong>"</strong>Grishma is a talented front-end software
                developer. I had the pleasure of working with Grishma on a
                project where her knowledge and expertise in Node.js, Next.js,
                Vue.js, HTML, JavaScript, CSS, and Bootstrap impressed me. She
                has shown a good ability to learn new frontend technologies and
                deliver high quality work. She is professional and communicates
                effectively with fellow team mates and everyone involved in the
                project. I recommend Grishma to anyone in need of a good
                front-end software developer. Her expertise coupled with her
                fast learning capabilities and efficient implementation of
                tasks, make her a valuable team member.<strong>"</strong>
              </p>
              <h4>Rajashekar Palavalli</h4>
              <p className="pb-5 fs-5 fw-light"></p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              width={150}
              height={150}
              src={Pratik}
              className="d-block"
              alt="Testimonial from Pratik"
            />
            <div style={{ maxWidth: '800px', margin: 'auto' }}>
              <p className="p-5 fs-6 fw-light">
                <strong>"</strong>I hired Grishma for a project related to data
                visualization and integration with our existing site. She did an
                amazing job asking the right questions and providing relevant
                insights on customer facing metrics related to reliability and
                performance. She did a great job building a responsive
                performant website. Would definitely recommend anyone looking
                for expertise in frontend development to hire her.
                <strong>"</strong>
              </p>
              <h4>Pratik</h4>
              <p className="pb-5 fs-5 fw-light"></p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
