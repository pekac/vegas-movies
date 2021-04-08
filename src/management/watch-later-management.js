import Resource from "./resource";

import { ATTRIBUTES } from "@constants/attributes";

export default class WatchLaterManagement extends Resource {
  constructor(list) {
    super(list, ATTRIBUTES.WATCH_LATER);
  }
}
