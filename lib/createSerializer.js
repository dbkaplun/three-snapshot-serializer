'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSerializer;

var _three = require('three');

var THREE = _interopRequireWildcard(_three);

var _uuid = require('./uuid');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createSerializer() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$shouldReplaceUUI = _ref.shouldReplaceUUIDs,
      shouldReplaceUUIDs = _ref$shouldReplaceUUI === undefined ? true : _ref$shouldReplaceUUI,
      toJSONOptions = _ref.toJSON;

  return {
    test: function test(obj) {
      return obj instanceof THREE.Object3D;
    },
    print: function print(obj, serializer) {
      var objJSON = obj.toJSON(toJSONOptions);
      if (shouldReplaceUUIDs) {
        objJSON = (0, _uuid.replaceUUIDs)(objJSON);
      }
      return serializer(objJSON);
    }
  };
}