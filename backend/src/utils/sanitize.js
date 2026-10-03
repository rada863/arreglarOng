import xss from "xss";

/**
 * Sanitiza SOLO strings.
 * No toca números, booleanos, arrays ni objetos.
 * No rompe HTML válido, solo elimina XSS real.
 */
export const sanitize = (value) => {
  if (typeof value === "string") {
    return xss(value, {
      whiteList: {}, // sin etiquetas permitidas → máxima seguridad
      stripIgnoreTag: true,
      stripIgnoreTagBody: ["script"],
    });
  }

  if (Array.isArray(value)) {
    return value.map((v) => sanitize(v));
  }

  if (value !== null && typeof value === "object") {
    const cleanObj = {};
    for (const key in value) {
      cleanObj[key] = sanitize(value[key]);
    }
    return cleanObj;
  }

  return value;
};
