import styles from "./styles.module.css";

export interface Props {
  overview: string;
  rating: number;
  releaseDate: string;
  title: string;
}

function MovieContent({ overview, rating, releaseDate, title }: Props) {
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
