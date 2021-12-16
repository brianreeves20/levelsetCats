import "./CatList.css";

const CatList = (props) => {
  const catArr = props.list;

  return (
    <div className="catList">
      {catArr && (
        <aside>
          {catArr.map((cat, i) => {
            return (
              <div
                className="cat"
                key={cat.id}
                onClick={(e) => {
                  e.preventDefault();

                  cat.views_count++;
                  props.setFeaturedResult(cat);
                }}
              >
                <h2 key={cat.id + i}>{cat.name}</h2>
                <h2 key={cat.id + (i + 1)}>{cat.birthdate}</h2>
              </div>
            );
          })}
        </aside>
      )}
      {!catArr && (
        <button onClick={props.handleClick}>Click to View All Cool Cats</button>
      )}
    </div>
  );
};

export default CatList;

/* 
loop through catArr and display the cats name, DOB, owner name

*/
