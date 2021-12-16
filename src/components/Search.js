import { useState } from "react";
import "./Search.css";
const Search = (props) => {
  const [name, setName] = useState("");
  const catArr = props.catArr;

  const handleSearch = (e) => {
    e.preventDefault();
    catArr.map((cat) => {
      if (name.toLowerCase() === cat.name.toLowerCase()) {
        props.setFeaturedCat(cat);
      }
    });
  };
  return (
    <div className="searchBar">
      <form onSubmit={handleSearch}>
        <input
          placeholder="Search Cat's Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

/*
when i search, map through array of cats, find cat whose name matches name given in search and display that cat as the featuredCat
*/
export default Search;
