# three-snapshot-serializer

Jest snapshot serializer for THREE objects

## Usage

```sh
$ npm install three-snapshot-serializer --save-dev
```

To use for all test files, add the following to package.json:

```json
{
  "jest": {
    "snapshotSerializers": ["three-snapshot-serializer"]
  }
}
```

To use in one test file:

```js
import { createSerializer } from "three-snapshot-serializer";

expect.addSnapshotSerializer(createSerializer({ dropUUIDs: true }));
```

To use in one assertion:

```js
import { toJSON } from "three-snapshot-serializer";

expect(toJSON(obj)).matchesSnapshot();
```
