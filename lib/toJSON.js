'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toJSON;

var _uuid = require('./uuid');

function toJSON(obj) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$shouldReplaceUUI = _ref.shouldReplaceUUIDs,
      shouldReplaceUUIDs = _ref$shouldReplaceUUI === undefined ? true : _ref$shouldReplaceUUI,
      toJSONOpts = _ref.toJSON;

  var objJSON = obj.toJSON(toJSONOpts);
  if (shouldReplaceUUIDs) {
    objJSON = (0, _uuid.replaceUUIDs)(objJSON);
  }
  return objJSON;
}