import { useState } from "react";
import "./Edit.css";

const Edit = (props) => {
  const featuredCat = props.featuredCat;

  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [picture, setPicture] = useState("");
  const [owner, setOwner] = useState("");
  const handleEdit = (e) => {
    e.preventDefault();
    props.setOpen(false);
    if (name) {
      featuredCat.name = name;

      props.setFeaturedResult(featuredCat);
    }
    if (birthdate) {
      featuredCat.birthdate = birthdate;
      props.setFeaturedResult(featuredCat);
    }
    if (picture) {
      featuredCat.thumbnail_url = picture;
      props.setFeaturedResult(featuredCat);
    }
    if (owner) {
      featuredCat.owner_name = owner;
      props.setFeaturedResult(featuredCat);
    }
  };

  return (
    <div className="editBox">
      <form onSubmit={handleEdit}>
        <input
          placeholder="Cat's Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="date"
          value={birthdate}
          onChange={(e) => {
            setBirthdate(e.target.value);
          }}
        />
        <input
          placeholder="Cat's Picture URL"
          value={picture}
          onChange={(e) => {
            setPicture(e.target.value);
          }}
        />
        <label>
          Select Owner:
          <select
            value={owner}
            onChange={(e) => {
              setOwner(e.target.value);
            }}
          >
            <option value={null}></option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Doe">Jane Doe</option>
            <option value="Kate Debarros">Kate Debarros</option>
          </select>
        </label>
        <button>Make Changes</button>
      </form>
    </div>
  );
};

export default Edit;
