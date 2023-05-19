import Logo from '../../Images/logo.png';
import Image from 'next/image';

function Navbar(props) {
  const { setIsModalOpen } = props;
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body">
        <div className="container-fluid mx-3 mx-sm-5">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a className="navbar-brand" href="/">
            <Image width={50} height={50} src={Logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="#project"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="#blogs"
                >
                  Blogs
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link link-dark"
                  aria-current="page"
                  href="#testimonial"
                >
                  Testimonials
                </a>
              </li>
              <li className="nav-item mx-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  type="button"
                  className="btn btn-outline-primary ms-auto rounded-pill fw-bold"
                >
                  Say Hello
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
