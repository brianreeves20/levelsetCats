import { useEffect, useState } from "react";
import "./App.css";

import CatList from "./components/CatList";
import FeaturedCat from "./components/FeaturedCat";
const catsArr = [
  {
    id: 1,
    name: "Sam",
    birthdate: "2018-10-02",
    owner_name: "John Doe",
    thumbnail_url:
      "https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    views_count: 0,
  },
  {
    id: 2,
    name: "Kitty",
    birthdate: "2016-01-01",
    owner_name: "Jane Smith",
    thumbnail_url:
      "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
    views_count: 0,
  },
  {
    id: 3,
    name: "Felix",
    birthdate: "2011-01-10",
    owner_name: "Sam Jones",
    thumbnail_url:
      "https://images.unsplash.com/photo-1607242792481-37f27e1d74e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
    views_count: 0,
  },
  {
    id: 4,
    name: "Garfield",
    birthdate: "2020-02-10",
    owner_name: "Claire Morrison",
    thumbnail_url:
      "https://images.unsplash.com/photo-1604675223954-b1aabd668078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
    views_count: 0,
  },
  {
    id: 5,
    name: "Poppy",
    birthdate: "2014-11-11",
    owner_name: "Jane Doe",
    thumbnail_url:
      "https://images.unsplash.com/photo-1580784355694-0d5295dcc007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
    views_count: 0,
  },
];
localStorage.setItem("cats", JSON.stringify(catsArr));
function App() {
  const [featuredResult, setFeaturedResult] = useState(null);

  let cats = JSON.parse(localStorage.getItem("cats"));
  const [list, setList] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    setList(cats);
  };

  // console.log(cats);
  // console.log(featuredResult);
  const handleDelete = () => {
    cats.map((cat, i) => {
      //for each cat, look at the ID, if it matches the ID of featuredResult then delete that cat from the array cats

      if (cat.id === featuredResult.id) {
        cats.splice(i, 1);
        return cats;
      }
    });

    localStorage.setItem("cats", JSON.stringify(cats));
    setFeaturedResult(null);
    setList(cats);
  };

  return (
    <div className="App">
      <header className="header">
        <span>Cool Cats</span>
      </header>
      <CatList
        list={list}
        setFeaturedResult={setFeaturedResult}
        handleClick={handleClick}
      />
      <FeaturedCat
        list={list}
        setList={setList}
        setFeaturedResult={setFeaturedResult}
        featuredResult={featuredResult}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;

/*Im able to change the featuredCat by using state variables:

need to find a way to chnage catList using state variables:

*/
