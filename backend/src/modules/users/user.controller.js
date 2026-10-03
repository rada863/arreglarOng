import { usersService } from "./users.service.js";
import { successResponse, errorResponse } from "../../utils/response.js";
import { logger } from "../../utils/logger.js";

export const usersController = {
  async getAll(req, res, next) {
    try {
      const users = await usersService.getAll();

      logger.info("Listado de usuarios", {
        ip: req.ip,
        path: req.originalUrl,
        method: req.method,
        count: users.length,
      });

      return successResponse(res, users, "Usuarios obtenidos");
    } catch (err) {
      next(err);
    }
  },

  async getById(req, res, next) {
    try {
      const user = await usersService.getById(req.params.id);

      if (!user) {
        return errorResponse(res, "Usuario no encontrado", 404);
      }

      logger.info("Usuario obtenido", {
        ip: req.ip,
        path: req.originalUrl,
        method: req.method,
        userId: req.params.id,
      });

      return successResponse(res, user, "Usuario encontrado");
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const user = await usersService.create(req.body);

      logger.info("Usuario creado", {
        ip: req.ip,
        path: req.originalUrl,
        method: req.method,
        userId: user.id,
      });

      return successResponse(res, user, "Usuario creado", 201);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const user = await usersService.update(req.params.id, req.body);

      if (!user) {
        return errorResponse(res, "Usuario no encontrado", 404);
      }

      logger.info("Usuario actualizado", {
        ip: req.ip,
        path: req.originalUrl,
        method: req.method,
        userId: req.params.id,
      });

      return successResponse(res, user, "Usuario actualizado");
    } catch (err) {
      next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const user = await usersService.remove(req.params.id);

      if (!user) {
        return errorResponse(res, "Usuario no encontrado", 404);
      }

      logger.warn("Usuario eliminado", {
        ip: req.ip,
        path: req.originalUrl,
        method: req.method,
        userId: req.params.id,
      });

      return successResponse(res, null, "Usuario eliminado");
    } catch (err) {
      next(err);
    }
  },
};
