import styles from "./styles.module.css";

function MovieContent({ movie }) {
  return (
    <>
      <h1 className={styles["movie-title"]}>{movie.original_title}</h1>
      <p className={styles["release-date"]}>
        Release date: {movie.release_date}
      </p>
      <div className={styles["summary-row"]}>
        <h5>SUMMARY</h5>
        <div className={styles["movie-grade"]}>{movie.vote_average}/10</div>
      </div>
      <p className={styles["movie-description"]}>{movie.overview}</p>
    </>
  );
}

export default MovieContent;
