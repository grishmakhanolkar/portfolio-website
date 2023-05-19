import Hangman from './Images/HangMan.png';
import LightsOut from './Images/LightsOut.png';
import Login from './Images/Login.png';
import QRCode from './Images/QRCode.png';
import Translator from './Images/Translator.png';
import ColourPalette from './Images/colourpalette.png';
import YTVideoPlayer from './Images/YTVideoPlayer.png';
import editCSV from './Images/editCSV.png';
import ecomm from './Images/ecomm.png';
import Todo from './Images/Todo.png';
import Yathzee from './Images/Yathzee.png';
import Bhasha from './Images/BhashaWeb.png';
import ApplicationAnalysis from './Images/AnalysisApp.png';

const projectDetails = [
  {
    id: 1,
    projectName: 'Bhasha website',
    Description:
      'Website built from scratch for a client using Next.js and Bootstrap, deployed on AWS Amplify. Helped implement CRM and improve SEO',
    imgSrc: Bhasha,
    webUrl: 'https://bhasha.io/online-kannada-classes',
  },
  {
    id: 2,
    projectName: 'Yathzee',
    Description:
      'React Native Android Game App built with Expo-Go. Published on Google Playstore',
    imgSrc: Yathzee,
    webUrl:
      'https://play.google.com/store/apps/details?id=com.yathzee.YathzeeGame',
  },
  {
    id: 3,
    projectName: 'Application Analysis',
    Description:
      'Web page built for a client using Vue.js and Chart.js to showcase daily reports and analysis',
    imgSrc: ApplicationAnalysis,
    webUrl: 'https://bit.ly/3M3HxzJ',
  },
  {
    id: 4,
    projectName: 'Lights Out',
    Description: 'Make all cells white to win',
    imgSrc: LightsOut,
    webUrl: 'https://projectlightsout.netlify.app',
  },
  {
    id: 5,
    projectName: 'CSV Editor',
    Description: 'Upload and edit any CSV file.',
    imgSrc: editCSV,
    webUrl: 'https://editcsv.netlify.app/',
  },
  {
    id: 6,
    projectName: 'E-commerce',
    Description: 'Shopping website.',
    imgSrc: ecomm,
    webUrl: 'https://cloth-shop.netlify.app/',
  },
  {
    id: 7,
    projectName: 'Login Page',
    Description: 'Google OAuth Login page',
    imgSrc: Login,
    webUrl: 'https://loginpage-sample.netlify.app/',
  },

  {
    id: 8,
    projectName: 'Hangman',
    Description: 'Guess the correct word',
    imgSrc: Hangman,
    webUrl: 'https://projecthangman.netlify.app',
  },
  {
    id: 9,
    projectName: 'ToDo App',
    Description:
      'Create your To Do list using this app. Created using React, React Hooks and Material UI.',
    imgSrc: Todo,
    webUrl: 'https://project-todo-list-app.netlify.app',
  },
  {
    id: 10,
    projectName: 'Colour Palette',
    Description: 'Select and copy any colour of your choice',
    imgSrc: ColourPalette,
    webUrl: 'https://projectcolourpalette.netlify.app',
  },
  {
    id: 11,
    projectName: 'QR Code',
    Description: 'Convert Text/URL into a Visual QR Code',
    imgSrc: QRCode,
    webUrl: 'https://projectqrcode.netlify.app',
  },
  {
    id: 12,
    projectName: 'Translator App',
    Description: 'Morse code/Pirate Talk/Shakesphere Dialect',
    imgSrc: Translator,
    webUrl: 'https://projecttranslator.netlify.app',
  },
  {
    id: 13,
    projectName: 'YT Video Player',
    Description:
      'Search and play any YouTube content. Created using Next JS and Bootstrap',
    imgSrc: YTVideoPlayer,
    webUrl: 'https://ytvideoplayer.netlify.app',
  },
];

export default projectDetails;
