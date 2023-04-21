import Logo from '../../Images/logo.png';
import Image from 'next/image';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent pt-5 pb-5">
        <div className="container-fluid mx-3 mx-sm-5">
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
                  Projects
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
                  href="/contactpage"
                  type="button"
                  className="btn btn-outline-primary ms-auto rounded-pill"
                >
                  Say Hello
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
