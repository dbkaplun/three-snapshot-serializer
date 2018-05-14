import * as THREE from 'three';

import { replaceUUIDs } from './uuid';

export default function createSerializer({
  shouldReplaceUUIDs = true,
  toJSON: toJSONOptions,
} = {}) {
  return {
    test(obj) {
      return obj instanceof THREE.Object3D;
    },
    print(obj, serializer) {
      let objJSON = obj.toJSON(toJSONOptions);
      if (shouldReplaceUUIDs) {
        objJSON = replaceUUIDs(objJSON);
      }
      return serializer(objJSON);
    },
  };
}
