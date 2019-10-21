import * as R from "ramda";
import { recursiveMapValues } from "./ramda";

export type UUID = string;
export type UUIDMap = Map<UUID, UUID>;

export const UUID_PLACEHOLDER = "00000000-0000-0000-0000-000000000000";
export const UUID_REGEX = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;

/**
 * Converts a number to a UUID-like string.
 *
 * @number    number      Number to generate UUID from
 * @return    UUID string
 */
export function numToUUID(id: number) {
  const hex = id.toString(16).toUpperCase();

  return `${UUID_PLACEHOLDER.slice(0, -hex.length)}${hex}`;
}

/**
 * Replaces the UUID with substitute from map. If there is no substitute,
 * generates a new one.
 */
export const replaceUUID = R.curry((map: UUIDMap, uuid: UUID) => {
  return R.ifElse(
    (map: UUIDMap) => map.has(uuid),
    (map: UUIDMap) => map.get(uuid),
    R.pipe(
      (map: UUIDMap) => map.set(uuid, numToUUID(map.size)),
      (map: UUIDMap) => map.get(uuid)
    )
  )(map);
});

/**
 * Replaces all UUIDs with generated, well-known substitutes. Assures that each
 * UUID is the same across snapshots.
 */
export const replaceUUIDs = (object: Object) => {
  const foundUUIDs = new Map();

  return recursiveMapValues(
    R.ifElse(R.test(UUID_REGEX), replaceUUID(foundUUIDs), R.identity),
    object
  );
};
