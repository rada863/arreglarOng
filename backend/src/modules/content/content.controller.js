import { contentService } from "./content.service.js";
import { successResponse, errorResponse } from "../../../utils/response.js";
import { logger } from "../../../utils/logger.js";

export const contentController = {
  async getAll(req, res, next) {
    try {
      const items = await contentService.getAll(req.query);

      logger.info("Contenido listado", {
        adminId: req.admin?.id,
        ip: req.ip,
        count: items.length
      });

      return successResponse(res, items, "Contenido obtenido");
    } catch (err) {
      next(err);
    }
  },

  async getById(req, res, next) {
    try {
      const item = await contentService.getById(req.params.id);

      if (!item) {
        return errorResponse(res, "Contenido no encontrado", 404);
      }

      logger.info("Contenido obtenido por ID", {
        adminId: req.admin?.id,
        ip: req.ip,
        contentId: req.params.id
      });

      return successResponse(res, item, "Contenido encontrado");
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const item = await contentService.create(req.body);

      logger.warn("Contenido creado", {
        adminId: req.admin?.id,
        ip: req.ip,
        contentId: item._id
      });

      return successResponse(res, item, "Contenido creado correctamente", 201);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const item = await contentService.update(req.params.id, req.body);

      if (!item) {
        return errorResponse(res, "Contenido no encontrado", 404);
      }

      logger.warn("Contenido actualizado", {
        adminId: req.admin?.id,
        ip: req.ip,
        contentId: req.params.id
      });

      return successResponse(res, item, "Contenido actualizado");
    } catch (err) {
      next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const item = await contentService.remove(req.params.id);

      if (!item) {
        return errorResponse(res, "Contenido no encontrado", 404);
      }

      logger.warn("Contenido eliminado", {
        adminId: req.admin?.id,
        ip: req.ip,
        contentId: req.params.id
      });

      return successResponse(res, null, "Contenido eliminado");
    } catch (err) {
      next(err);
    }
  }
};
