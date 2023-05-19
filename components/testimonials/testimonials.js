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
        </div>
        <div className="carousel-inner py-4 py-md-0">
          <div className="carousel-item active">
            <Image
              width={150}
              height={150}
              src={Denston}
              className="d-block"
              alt="..."
            />
            <div style={{ maxWidth: '800px', margin: 'auto' }}>
              <p className="p-5 fs-5 fw-light">
                <strong>"</strong>Throughout the project, Grishma actively
                listened to our requirements, grasped our vision, and translated
                it into a visually appealing and functional website. <br />
                Thank you, Grishma, for your outstanding work on our website. We
                look forward to continuing our collaboration with you in the
                future.<strong>"</strong>
              </p>
              <h4>Denston Lewis</h4>
              <p className="pb-5 fs-5 fw-light">-Director, Bhasha.io</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              width={150}
              height={150}
              src={Pratik}
              className="d-block"
              alt="..."
            />
            <div style={{ maxWidth: '800px', margin: 'auto' }}>
              <p className="p-5 fs-5 fw-light">
                "I hired Grishma for a project related to data visualization and
                integration with our existing site. She did an amazing job
                asking the right questions and providing relevant insights on
                customer facing metrics related to reliability and performance.
                She did a great job building a responsive performant website.
                Would definitely recommend anyone looking for expertise in
                frontend development to hire her."
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
