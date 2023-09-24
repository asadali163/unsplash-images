import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
// import { useGlobalContext } from "./context";

const App = () => {
  // const { greeting } = useGlobalContext();
  // console.log(greeting);
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
