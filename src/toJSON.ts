import { Object3D } from "three";
import { replaceUUIDs } from "./helpers/uuid";

export interface Configuration {
  shouldReplaceUUIDs?: boolean;
}

export default function toJSON(object: Object3D, config: Configuration = {}) {
  const { shouldReplaceUUIDs = true } = config;
  const objJSON = object.toJSON() as Object;

  if (shouldReplaceUUIDs) {
    return replaceUUIDs(objJSON);
  } else {
    return objJSON;
  }
}
