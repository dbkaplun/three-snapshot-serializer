import { Object3D } from "three";
import toJSON from "./toJSON";

export default function createSerializer(options) {
  return {
    test(object) {
      return object instanceof Object3D;
    },

    print(object, serializer) {
      return serializer(toJSON(object, options));
    }
  };
}
