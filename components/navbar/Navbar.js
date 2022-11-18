import Logo from '../../Images/logo.png';
import Image from 'next/image';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-transparent pt-5 pb-5">
        <div class="container-fluid mx-3 mx-sm-5">
          <a class="navbar-brand" href="/">
            <Image width={50} height={50} src={Logo} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggler">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item mx-3">
                <a class="nav-link link-dark" aria-current="page" href="#project">
                  Projects
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link link-dark" aria-current="page" href="#blogs">
                  Blogs
                </a>
              </li>
              <li class="nav-item mx-3">
                <a
                  href="/contactpage"
                  type="button"
                  class="btn btn-outline-primary ms-auto rounded-pill"
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
