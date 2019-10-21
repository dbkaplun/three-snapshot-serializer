"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSerializer;

var _three = require("three");

var _toJSON = require("./toJSON");

var _toJSON2 = _interopRequireDefault(_toJSON);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSerializer(options) {
  return {
    test: function test(object) {
      return object instanceof _three.Object3D;
    },
    print: function print(object, serializer) {
      return serializer((0, _toJSON2.default)(object, options));
    }
  };
}