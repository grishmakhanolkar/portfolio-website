import styles from './Blogs.module.scss';

function Blogs({ blogs }) {
  return (
    <section id="blogs" className={styles.blogs}>
      <div className={styles.blogsLayout}>
        <div className={styles.blogsInfo}>
          <h2 className="mx-1 mb-4 fs-1 fw-bold mt-5">My Blogs</h2>
          <p className="fs-5 fw-light mb-5">
            Here are some of my recent blog posts.
          </p>
        </div>
        {blogs.map((blog) => (
          <div key={blog.title} className={styles.blogsCard}>
            <div className="card p-3 shadow">
              <h3>{blog.title}</h3>
              <div className="d-inline-flex flex-row flex-wrap justify-content-center mx-auto ">
                {blog.categories.map((item) => (
                  <div
                    key={item}
                    className="m-2 p-2 border border-dark rounded"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={blog.link}
                target="blank"
                type="button"
                className="btn btn-outline-primary mx-auto mt-3 mb-3 rounded-pill fw-bold"
              >
                Read article
              </a>
            </div>
          </div>
        ))}
        <a
          href="https://medium.com/@grishmakhanolkar"
          target="blank"
          type="button"
          className="btn btn-outline-primary mx-auto mt-3 mb-3 rounded-pill fw-bold"
        >
          Read more blogs on Medium
        </a>
      </div>
      <hr />
    </section>
  );
}

export default Blogs;
