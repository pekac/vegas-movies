import { findItemIndexInList } from "@lib/utils";

export default class Resource {
  constructor(list) {
    this.list = list;
  }

  get collection() {
    return this.list;
  }

  getIndex = (item) => findItemIndexInList(this.collection, item);

  isInList = (item) => this.getIndex(item) >= 0;

  update = (item) => {
    const index = this.getIndex(item);
    if (index >= 0) {
      return this.remove(index);
    }

    return this.add(item);
  };

  add = (item) => {
    this.collection.push(item);
    return this.collection;
  };

  remove = (index) => {
    this.collection.splice(index, 1);
    return this.collection;
  };
}
