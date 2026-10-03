import xss from "xss";

export const sanitizeInputs = (req, res, next) => {
  // Sanitizar solo strings
  const sanitize = (value) => {
    if (typeof value === "string") {
      return xss(value); // elimina XSS sin romper texto
    }
    return value;
  };

  // Body
  if (req.body) {
    for (const key in req.body) {
      req.body[key] = sanitize(req.body[key]);
    }
  }

  // Query
  if (req.query) {
    for (const key in req.query) {
      req.query[key] = sanitize(req.query[key]);
    }
  }

  // Params
  if (req.params) {
    for (const key in req.params) {
      req.params[key] = sanitize(req.params[key]);
    }
  }

  next();
};
