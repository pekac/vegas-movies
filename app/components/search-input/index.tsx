"use client";

import styles from "./styles.module.css";

import { useMovies } from "@context/movie";

function SearchInput() {
  const { search } = useMovies();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  };

  return (
    <div className={styles["wrap"]}>
      <div className={styles["search"]}>
        <input
          type="text"
          className={styles["search-term"]}
          placeholder="What are you looking for?"
          onChange={onChange}
        />
        <button type="submit" className={styles["search-button"]}>
          <i className="material-icons">search</i>
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
