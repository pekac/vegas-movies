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
    const inList = index >= 0;
    if (inList) {
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
