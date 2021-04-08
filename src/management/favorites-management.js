import Resource from "./resource";

import { ATTRIBUTES } from "@constants/attributes";

export default class FavoritesManagement extends Resource {
  constructor(list) {
    super(list, ATTRIBUTES.FAVORITE);
  }
}
