import * as React from "react";
import { observer } from "mobx-react";
import store from "../store";

function ItemAdd() {
  return (
    <div>
      <input
        value={store.newItem}
        onChange={(e) => (store.newItem = e.target.value)}
        placeholder="New Item"
      />
      <button onClick={() => store.addItem()}>Add Item</button>
    </div>
  );
}

export default observer(ItemAdd);
