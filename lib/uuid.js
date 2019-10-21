"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.numToUUID = numToUUID;
exports.replaceUUIDs = replaceUUIDs;
var UUID_REGEX = exports.UUID_REGEX = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
var UUID_PLACEHOLDER = exports.UUID_PLACEHOLDER = "00000000-0000-0000-0000-000000000000";
var UUID_KEYS = exports.UUID_KEYS = {
  uuid: true,
  geometry: true,
  material: true
};

function numToUUID(num) {
  var hex = num.toString(16).toUpperCase();
  return UUID_PLACEHOLDER.slice(0, -hex.length) + hex;
}

function replaceUUIDs(objJSONWithUUIDs) {
  var foundUUIDs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var objJSON = objJSONWithUUIDs;
  var newFoundUUIDs = foundUUIDs;

  if (Array.isArray(objJSON)) {
    objJSON = objJSON.map(function (childJSON) {
      return replaceUUIDs(childJSON, newFoundUUIDs);
    });
  } else if ((typeof objJSON === "undefined" ? "undefined" : _typeof(objJSON)) === "object") {
    Object.entries(objJSON).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      if (key in UUID_KEYS) {
        if (UUID_REGEX.test(val)) {
          var idx = void 0;
          if (val in newFoundUUIDs) {
            idx = newFoundUUIDs[val];
          } else {
            idx = Object.keys(newFoundUUIDs).length;
            newFoundUUIDs[val] = idx;
          }
          objJSON[key] = numToUUID(idx);
        } else {
          throw new Error("expected UUID in key '" + key + "'");
        }
      } else {
        objJSON[key] = replaceUUIDs(val, newFoundUUIDs);
      }
    });
  }

  return objJSON;
}