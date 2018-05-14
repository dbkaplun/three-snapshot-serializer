import * as THREE from 'three';

import toJSON from './toJSON';

export default function createSerializer(opts) {
  return {
    test(obj) {
      return obj instanceof THREE.Object3D;
    },
    print(obj, serializer) {
      return serializer(toJSON(obj, opts));
    },
  };
}
