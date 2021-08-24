import * as React from "react";
import { observer } from "mobx-react";
import store from "../store";

function ListItems() {
  return (
    <>
      {store.items.map((item) => (
        <div key={item.id} className='row'>
          <input
            value={item.text}
            onChange={(e) => (item.text = e.target.value)}
          />
          <button
            onClick={() => {
              store.removeItem(item.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

const ObservedListItems = observer(ListItems);

function ItemList() {
  return (
    <>
      <h2>Item List</h2>
      <ObservedListItems />
    </>
  )
}

export default ItemList;
