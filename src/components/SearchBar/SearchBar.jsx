import css from "./SearchBar.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      return toast.error("Cannot be empty");
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <header className={css.searchBarContainer}>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            fontFamily: "sans-serif",
          },
        }}
      />
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchBtn}>
          <FaMagnifyingGlass />
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleChange}
          className={css.searchInput}
        />
      </form>
    </header>
  );
}