/**
  Applies a function to every node of a JSON object
  Careful: Assumes a JSON objects have no circular references
  To check for circular references use a map and a flag
  @param {*} json - JSON object to traverse
  @param {function} fn - function to apply
 */
const deepJSON = (json, fn) => {
    // ignore invalid parameters
    if (typeof json !== 'object' || typeof fn !== 'function') {
        return;
    }
    fn(json);
    Object.keys(json).forEach(key => deepJSON(json[key], fn, false));
};
