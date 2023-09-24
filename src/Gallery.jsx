import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { search } = useGlobalContext();
  // console.log("Search value is :",   search);
  // console.log(url + search);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", search],
    queryFn: async () => {
      const result = await axios(`${url}&query=${search}`);
      // console.log(result.data.results);
      return result.data.results;
    },
  });

  // console.log(isLoading);
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>Something went wrong</h4>
      </section>
    );
  }

  if (data.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {data.map((item) => {
        return (
          <img
            src={item?.urls?.regular}
            alt="img"
            key={item.id}
            className="img"
          />
        );
      })}
    </section>
  );
};
export default Gallery;
