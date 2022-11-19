import Logo from '../../Images/logo.png';
import Image from 'next/image';
import Avatar from '../../Images/Avatar.png';
import close from '../../Images/Icons/close.svg';
import styles from './PageHeader.module.scss';

function PageHeader() {
  return (
    <section>
      <nav className="navbar bg-transparent">
        <div className="container-fluid mx-5 mt-3">
          <a className="navbar-brand" href="/">
            <Image width={50} height={50} src={Logo} alt="Logo" />
          </a>

          <ul className="navbar-nav ms-auto d-flex flex-row">
            <li className="nav-item mx-3">
              <a className="nav-link link-dark" aria-current="page" href="/">
                <Image width={25} height={25} src={close} alt="close" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.pageHeader}>
        <Image
          width={100}
          height={100}
          class="rounded-circle"
          src={Avatar}
          alt="avatar"
        />
      </div>
    </section>
  );
}

export default PageHeader;
