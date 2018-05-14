import { replaceUUIDs } from './uuid';

export default function toJSON(obj, {
  shouldReplaceUUIDs = true,
  toJSON: toJSONOpts,
} = {}) {
  let objJSON = obj.toJSON(toJSONOpts);
  if (shouldReplaceUUIDs) {
    objJSON = replaceUUIDs(objJSON);
  }
  return objJSON;
}
