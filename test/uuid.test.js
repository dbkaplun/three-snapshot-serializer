import { UUID_PLACEHOLDER, UUID_REGEX } from '../src/uuid';

describe('UUID_PLACEHOLDER', () => {
  it('should match UUID_REGEX', () => {
    expect(UUID_PLACEHOLDER).toMatch(UUID_REGEX);
  });
});
