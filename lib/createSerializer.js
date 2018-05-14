'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSerializer;

var _three = require('three');

var THREE = _interopRequireWildcard(_three);

var _toJSON = require('./toJSON');

var _toJSON2 = _interopRequireDefault(_toJSON);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createSerializer(opts) {
  return {
    test: function test(obj) {
      return obj instanceof THREE.Object3D;
    },
    print: function print(obj, serializer) {
      return serializer((0, _toJSON2.default)(obj, opts));
    }
  };
}