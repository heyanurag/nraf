const qs = require("querystring");

const EXT_MIME_TYPE_HEADER_MAP = {
  ".css": "text/css",
  ".ico": "image/vnd.microsoft.icon",
  ".png": "image/png",
  ".js": "application/javascript; charset=utf-8",
};

function typeBasedParser(type, data) {
  if (type === "application/x-www-form-urlencoded") return qs.parse(data);
  else if (
    type === "application/json;charset=utf-8" ||
    type === "application/json"
  )
    return JSON.parse(data);
  else return null;
}

module.exports = {
  typeBasedParser,
  EXT_MIME_TYPE_HEADER_MAP,
};
