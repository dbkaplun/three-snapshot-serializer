# three-snapshot-serializer
Jest snapshot serializer for THREE objects

## Usage

```sh
$ npm install jest-enzyme --save-dev
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
import { createSerializer } from 'three-snapshot-serializer';

expect.addSnapshotSerializer(createSerializer({ dropUUIDs: true }));
```
