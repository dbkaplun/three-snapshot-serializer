import { Object3D } from "three";
import toJSON, { Configuration } from "./toJSON";

export default function createSerializer(options?: Configuration) {
  return {
    test(object: any) {
      return object instanceof Object3D;
    },

    print(object: Object3D, printer: Function) {
      return printer(toJSON(object, options));
    }
  };
}
