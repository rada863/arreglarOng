import * as contactService from "./contact.service.js";
import { successResponse } from "../../utils/response.js";
import { logger } from "../../utils/logger.js";

export const contactController = {
  /* -----------------------------------------
     ENVIAR MENSAJE DE CONTACTO
  ----------------------------------------- */
  async sendMessage(req, res, next) {
    try {
      const payload = {
        ...req.body,
        userId: req.user?.id || null,
        ip: req.ip
      };

      const result = await contactService.sendMessage(payload);

      logger.info("Nuevo mensaje de contacto recibido", {
        ip: req.ip,
        userId: req.user?.id || null,
        email: req.body.email,
        name: req.body.name
      });

      return successResponse(
        res,
        result,
        "Mensaje enviado correctamente"
      );
    } catch (err) {
      next(err);
    }
  },

  /* -----------------------------------------
     ADMIN: OBTENER TODOS LOS MENSAJES
  ----------------------------------------- */
  async getAll(req, res, next) {
    try {
      const messages = await contactService.getAll();

      logger.info("Mensajes de contacto consultados (admin)", {
        adminId: req.admin?.id,
        ip: req.ip
      });

      return successResponse(
        res,
        messages,
        "Mensajes obtenidos correctamente"
      );
    } catch (err) {
      next(err);
    }
  },

  /* -----------------------------------------
     ADMIN: OBTENER MENSAJE POR ID
  ----------------------------------------- */
  async getById(req, res, next) {
    try {
      const message = await contactService.getById(req.params.id);

      logger.info("Mensaje de contacto consultado (admin)", {
        adminId: req.admin?.id,
        ip: req.ip,
        messageId: req.params.id
      });

      return successResponse(
        res,
        message,
        "Mensaje obtenido correctamente"
      );
    } catch (err) {
      next(err);
    }
  },

  /* -----------------------------------------
     ADMIN: ELIMINAR MENSAJE
  ----------------------------------------- */
  async remove(req, res, next) {
    try {
      const removed = await contactService.remove(req.params.id);

      logger.warn("Mensaje de contacto eliminado (admin)", {
        adminId: req.admin?.id,
        ip: req.ip,
        messageId: req.params.id
      });

      return successResponse(
        res,
        removed,
        "Mensaje eliminado correctamente"
      );
    } catch (err) {
      next(err);
    }
  }
};
