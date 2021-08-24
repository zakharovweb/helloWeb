import { v4 as uuid } from "uuid";
import { makeAutoObservable } from "mobx";

interface Item {
  id: number;
  text: string;
}

const removeItem = (items: Item[], id: number): Item[] =>
  items.filter((item) => item.id !== id);

const addItem = (items: Item[], text: string): Item[] => [
  ...items,
  {
    id: uuid(),
    text,
  },
];

class AppStore {
  items: Item[] = [];
  newItem: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  removeItem(id: number) {
    this.items = removeItem(this.items, id);
  }

  addItem() {
    if (this.newItem.length < 1) {
      alert("Entered item name")
    } else {
      this.items = addItem(this.items, this.newItem);
      this.newItem = "";
    }
  }

}

const store = new AppStore();

export default store;
