import styles from "../styles/Home.module.css";
import Hangman from "../components/Images/HangMan.png";
import LightsOut from "../components/Images/LightsOut.png";
import Login from "../components/Images/Login.png";
import QRCode from "../components/Images/QRCode.png";
import Translator from "../components/Images/Translator.png";
import ColourPalette from "../components/Images/colourpalette.png";
import ProjectCard from "./projectCard";

const newProject = [
  {
    projectName: "Login Page",
    Description: "Google OAuth Login page",
    imgSrc: Login,
    webUrl: "https://loginpage-sample.netlify.app/",
  },
  {
    projectName: "Hangman",
    Description: "Guess the correct word",
    imgSrc: Hangman,
    webUrl: "https://projecthangman.netlify.app",
  },
  {
    projectName: "Lights Out",
    Description: "Make all cells white to win",
    imgSrc: LightsOut,
    webUrl: "https://projectlightsout.netlify.app",
  },
  {
    projectName: "Translator App",
    Description: "Morse code/Pirate Talk/Shakesphere Dialect",
    imgSrc: Translator,
    webUrl: "https://projecttranslator.netlify.app",
  },
  {
    projectName: "QR Code",
    Description: "Convert Text/URL into a Visual QR Code",
    imgSrc: QRCode,
    webUrl: "https://projectqrcode.netlify.app",
  },
  {
    projectName: "Colour Palette",
    Description: "Select and copy any colour of your choice",
    imgSrc: ColourPalette,
    webUrl: "https://projectcolourpalette.netlify.app",
  },
];

function Project() {
  return (
    <section className={styles.project}>
      <h1 class="m-5 fw-bold">My Recent Work</h1>
      <h2 class="fs-5 fw-light mb-5 pb-3">
        Here are a few past projects I've worked on.
      </h2>

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-5 mx-1">
          {newProject.map((project) => (
            <div class="col d-block">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        class="btn btn-outline-primary ms-auto mt-5 mb-5 px-3 rounded-pill"
      >
        View all projects
      </button>
      <hr />
    </section>
  );
}

export default Project;
