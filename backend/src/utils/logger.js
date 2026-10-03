const sanitizeMeta = (meta) => {
  const clone = JSON.parse(JSON.stringify(meta));

  const sanitize = (obj) => {
    if (!obj || typeof obj !== "object") return;

    for (const key in obj) {
      if (key.toLowerCase().includes("password")) obj[key] = "***";
      if (key.toLowerCase().includes("token")) obj[key] = "***";

      if (typeof obj[key] === "object") {
        sanitize(obj[key]);
      }
    }
  };

  sanitize(clone);
  return clone;
};

export const logger = {
  info: (message, meta = {}) => {
    console.log(
      JSON.stringify({
        level: "info",
        message,
        timestamp: new Date().toISOString(),
        ...sanitizeMeta(meta),
      })
    );
  },

  warn: (message, meta = {}) => {
    console.warn(
      JSON.stringify({
        level: "warn",
        message,
        timestamp: new Date().toISOString(),
        ...sanitizeMeta(meta),
      })
    );
  },

  error: (message, meta = {}) => {
    console.error(
      JSON.stringify({
        level: "error",
        message,
        timestamp: new Date().toISOString(),
        ...sanitizeMeta(meta),
      })
    );
  },
};
