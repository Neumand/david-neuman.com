/**
 *
 * @param {string} string
 */
export const toKebabCase = (string) =>
  string.replace(' ', '-').toLocaleLowerCase();
