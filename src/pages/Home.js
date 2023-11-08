import Book from "../components/Book";
import { useState } from "react";

const Home = (props) => {
  const [itemTitle, setItemTitle] = useState("");
  const [itemAuthor, setItemAuthor] = useState("");
  const [targetBookNumber, setTargetBookNumber] = useState(0);

  let currItems = props.items;

  return (
    <>
      <h1>Home Page</h1>

      {/* Catalog search and show catalog */}
      <section>
        <h2>Catalog Search</h2>
        <input
          type="text"
          placeholder="search catalog by Title"
          size="100"
          style={{ marginLeft: "200px" }}
          onChange={(e) => props.handleSearchingCatalog(e.target.value)}
        ></input>

        <div id="filtered-search-list">
          {currItems.map((temp) => {
            return (
              <Book
                itemNo={temp.itemNo}
                title={temp.title}
                author={temp.author}
                isAvailable={temp.isAvailable}
              />
            );
          })}
        </div>
      </section>

      <section>
        <h2>Add Item</h2>
        <label>Title</label>
        <input
          placeholder="Ender's Game"
          onChange={(e) => {
            setItemTitle(e.target.value);
          }}
        ></input>
        <br></br>
        <label>Author</label>
        <input
          placeholder="Orson Scott Card"
          onChange={(e) => {
            setItemAuthor(e.target.value);
          }}
        ></input>
        <br></br>
        <button onClick={() => props.handleAddItem(itemTitle, itemAuthor)}>
          Add Item
        </button>
      </section>

      <section>
        <h2>Checkout Item</h2>
        <label>Item#</label>
        <input
          type="number"
          onChange={(e) => setTargetBookNumber(e.target.value)}
        ></input>
        <button onClick={() => props.handleCheckOut(targetBookNumber)}>
          Check Out Item
        </button>
      </section>

      <section>
        <h2>Return Item</h2>
        <label>Item#</label>
        <input
          type="number"
          onChange={(e) => setTargetBookNumber(e.target.value)}
        ></input>
        <button onClick={() => props.handleReturnItem(targetBookNumber)}>
          Return/Check In Item
        </button>
      </section>
    </>
  );
};

export default Home;
