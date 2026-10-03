import multer from "multer";
import path from "path";
import { errorResponse } from "../utils/response.js";

/**
 * Configuración de almacenamiento
 * Guarda archivos en /uploads con nombre único
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = file.originalname.replace(ext, "").replace(/\s+/g, "-");
    cb(null, `${name}-${Date.now()}${ext}`);
  }
});

/**
 * Validación de tipos permitidos
 */
const allowedTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/jpg"
];

const fileFilter = (req, file, cb) => {
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error("Tipo de archivo no permitido"), false);
  }
  cb(null, true);
};

/**
 * Configuración de multer
 */
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

/**
 * Middleware para subir 1 archivo
 */
export const uploadSingle = (fieldName) => {
  return (req, res, next) => {
    upload.single(fieldName)(req, res, (err) => {
      if (err) {
        return errorResponse(res, err.message, 400);
      }
      next();
    });
  };
};

/**
 * Middleware para subir múltiples archivos
 */
export const uploadMultiple = (fieldName, maxCount = 5) => {
  return (req, res, next) => {
    upload.array(fieldName, maxCount)(req, res, (err) => {
      if (err) {
        return errorResponse(res, err.message, 400);
      }
      next();
    });
  };
};
