import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { userInput } = useGlobalContext();
  //   console.log(search);
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    userInput(searchValue);
  };
  return (
    <section>
      <h2 className="title">Unsplash Images</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          className="form-input search-input"
          placeholder="cat"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
