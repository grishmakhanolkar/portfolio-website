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
  return (
    <div>
      <Head>
        <title>Grishma - Portfolio Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <LandingPage />
        <About />
        <ProjectList />
        <Contact />
        {gotBlogs && <Blogs blogs={blogs} />}
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
    // console.log(response);
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
    // console.log(error);
    gotBlogs = false;
  }

  return { props: { blogs, gotBlogs } };
}
