import styles from "./Blogs.module.scss";

function Blogs() {
  return (
    <section className={styles.blogs}>
      <div className={styles.blogsInfo}>
        <h1 class="mx-1 mb-4 fw-bold mt-5">My Blogs</h1>
        <p class="fs-5 fw-light mb-5">Here are some of my recent blog posts.</p>
      </div>
      <div className={styles.blogsCard}>
        <div class="card p-5 shadow">ToDo</div>
      </div>
      <div className={styles.blogsCard}>
        <div class="card p-5 shadow">ToDo</div>
      </div>
      <div className={styles.blogsCard}>
        <div class="card p-5 shadow">ToDo</div>
      </div>
    </section>
  );
}

export default Blogs;
