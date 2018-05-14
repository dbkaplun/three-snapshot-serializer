export const UUID_REGEX = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
export const UUID_PLACEHOLDER = '00000000-0000-0000-0000-000000000000';
export const UUID_KEYS = {
  uuid: true,
  geometry: true,
  material: true,
};

export function numToUUID(num) {
  const hex = num.toString(16).toUpperCase();
  return UUID_PLACEHOLDER.slice(0, -hex.length) + hex;
}

export function replaceUUIDs(
  objJSONWithUUIDs,
  foundUUIDs = {},
) {
  let objJSON = objJSONWithUUIDs;
  const newFoundUUIDs = foundUUIDs;
  if (Array.isArray(objJSON)) {
    objJSON = objJSON.map(childJSON => replaceUUIDs(childJSON, newFoundUUIDs));
  } else if (typeof objJSON === 'object') {
    Object.entries(objJSON).forEach(([key, val]) => {
      if (key in UUID_KEYS) {
        if (UUID_REGEX.test(val)) {
          let idx;
          if (val in newFoundUUIDs) {
            idx = newFoundUUIDs[val];
          } else {
            idx = Object.keys(newFoundUUIDs).length;
            newFoundUUIDs[val] = idx;
          }
          objJSON[key] = numToUUID(idx);
        } else {
          throw new Error(`expected UUID in key '${key}'`);
        }
      } else {
        objJSON[key] = replaceUUIDs(val, newFoundUUIDs);
      }
    });
  }
  return objJSON;
}
