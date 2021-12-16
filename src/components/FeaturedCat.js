import { useState } from "react";
import Edit from "./Edit";
import "./FeaturedCat.css";

const FeaturedCat = (props) => {
  const featuredCat = props.featuredResult;
  const setFeaturedResult = props.setFeaturedResult;
  const [open, setOpen] = useState(false);

  return (
    <div className="cat">
      {open && (
        <Edit
          featuredCat={featuredCat}
          setFeaturedResult={setFeaturedResult}
          open={open}
          setOpen={setOpen}
        />
      )}
      {featuredCat && (
        <div>
          <img src={featuredCat.thumbnail_url} />
          <h2>{featuredCat.name}</h2>
          <h2>{featuredCat.birthdate}</h2>
          <h2>{featuredCat.owner_name}</h2>
          <h3>{featuredCat.views_count}</h3>
          <button onClick={props.handleDelete}>Delete</button>
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            Edit
          </button>
        </div>
      )}
      {!featuredCat && <h3>Please Select a Cat's Profile to View</h3>}
    </div>
  );
};

export default FeaturedCat;

//if there is a featuredCat, post the profile, otherwise post "select a cat's profile to view"
