import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value.trim();

    if (topic === "") {
      toast.error("Please enter a search term!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="text"
          name="topic"
          placeholder="Search photos..."
          className={css.inputSearch}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchBar;
