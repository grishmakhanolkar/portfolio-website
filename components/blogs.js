import styles from "../styles/Home.module.css";

function Blogs() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutInfo}>
        <h1 class="mx-1 mb-4 fw-bold mt-5">My Blogs</h1>
        <p class="fs-5 fw-light mb-5">Here are some of my recent blog posts.</p>
      </div>
      <div className={styles.aboutCard}>
        <div class="card p-5 shadow">ToDo</div>
      </div>
      <div className={styles.aboutCard}>
        <div class="card p-5 shadow">ToDo</div>
      </div>
      <div className={styles.aboutCard}>
        <div class="card p-5 shadow">ToDo</div>
      </div>
    </section>
  );
}

export default Blogs;
