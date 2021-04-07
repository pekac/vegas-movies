import { findItemInList } from "@lib/utils";

export default class Resource {
  constructor(list) {
    this.list = list;
  }

  get collection() {
    return this.list;
  }

  update = (movie) => {
    const index = findItemInList(this.collection, movie);
    if (index < 0) {
      return this.add(movie);
    }

    return this.remove(index);
  };

  add = (movie) => {
    this.collection.push(movie);
    return this.collection;
  };

  remove = (index) => {
    this.collection.splice(index, 1);
    return this.collection;
  };
}
