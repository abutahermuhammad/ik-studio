/**
 *
 * @param {string} str
 * @returns {string}
 */
export const sanitizeString = (str) => {
  return str.split("").join("-");
};
