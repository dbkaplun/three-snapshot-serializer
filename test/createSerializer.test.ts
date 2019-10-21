import * as THREE from "three";
import createSerializer from "../src/serializer";

expect.addSnapshotSerializer(createSerializer());

describe("createSerializer", () => {
  it("should create a JSON snapshot for a THREE.Object3D", () => {
    const obj = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: "green" })
    );

    expect(obj).toMatchSnapshot();
  });
});
