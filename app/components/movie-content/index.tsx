import styles from "./styles.module.css";

function MovieContent({ title, rating, overview, releaseDate }) {
  return (
    <>
      <h1 className={styles["movie-title"]}>{title}</h1>
      <p className={styles["release-date"]}>Release date: {releaseDate}</p>
      <div className={styles["summary-row"]}>
        <h5>SUMMARY</h5>
        <div className={styles["movie-grade"]}>{rating}/10</div>
      </div>
      <p className={styles["movie-description"]}>{overview}</p>
    </>
  );
}

export default MovieContent;
