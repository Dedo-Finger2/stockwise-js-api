/**
 * @param {Array<string>} requiredParams
 * @param {Object} object
 */
export function checkMissingRequiredParams(requiredParams, object) {
  const missingParams = [];

  for (const [key, value] of Object.entries(object)) {
    if (!value && requiredParams.includes(key)) {
      missingParams.push(key);
    }
  }

  if (missingParams.length) {
    throw new TypeError(`Missing required params: ${missingParams.join(", ")}`);
  }
}
