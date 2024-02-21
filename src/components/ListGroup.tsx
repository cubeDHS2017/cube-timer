import { Fragment } from "react";

function ListGroup() {
  const items = ["New York", "Tokyo", "London", "Paris"];

  if (items.length === 0)
    return <p>No items found</p>;

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
