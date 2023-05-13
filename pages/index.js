import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';
import LandingPage from '../components/landingPage/LandingPage';
import About from '../components/about/About.js';
import ProjectList from '../components/projectList/ProjectList';
import Blogs from '../components/blogs/Blogs.js';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Parser from 'rss-parser';

export default function Home({ blogs, gotBlogs }) {
  if (!gotBlogs) {
    blogs = [
      {
        title: 'Web Performance - from 27 to 99',
        link: 'https://medium.com/p/32441d24a326',
        categories: [
          'web performance',
          'Next.JS',
          'google-oauth',
          'authentication',
          'firebase',
        ],
      },
      {
        title: 'Firebase for Login and Logout— Part 1',
        link: 'https://medium.com/p/c99d0022a467',
        categories: [
          'firebaseauthentication',
          'firestore',
          'google-oauth',
          'authentication',
          'firebase',
        ],
      },
      {
        title: 'Navigating to Nested React Components',
        link: 'https://medium.com/p/d4f68331537',
        categories: [
          'javascript',
          'react',
          'programming',
          'material-design',
          'portfolio',
        ],
      },
    ];
  }
  return (
    <div>
      <Head>
        <title>Grishma - Portfolio Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <Navbar />
        <LandingPage />
        <About />
        <ProjectList />
        <Contact />
        <Blogs blogs={blogs} />
        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let gotBlogs = false;
  let blogs = [];
  try {
    const parser = new Parser();
    const result = await fetch('https://medium.com/feed/@grishmakhanolkar');
    const response = await result.text();
    const feed = await parser.parseString(response);
    blogs = feed.items;
    const filterURLs = [
      'https://medium.com/p/5736a7718335',
      'https://medium.com/p/d4f68331537',
      'https://medium.com/p/c99d0022a467',
    ];
    blogs = blogs
      .filter((blog) => {
        return filterURLs.includes(blog.guid);
      })
      .map((blog) => {
        return {
          title: blog.title,
          link: blog.guid,
          categories: blog.categories,
        };
      });
    gotBlogs = true;
  } catch (error) {
    gotBlogs = false;
  }

  return { props: { blogs, gotBlogs } };
}
