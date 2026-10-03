import { Contact } from "./contact.model.js";

export const contactService = {
  /* -----------------------------------------
     CREAR MENSAJE DE CONTACTO
  ----------------------------------------- */
  async sendMessage(data) {
    const message = await Contact.create({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      message: data.message,
      userId: data.userId || null,
      ip: data.ip || null
    });

    return message.toJSON();
  },

  /* -----------------------------------------
     ADMIN: OBTENER TODOS LOS MENSAJES
  ----------------------------------------- */
  async getAll() {
    return await Contact.find()
      .sort({ createdAt: -1 })
      .lean();
  },

  /* -----------------------------------------
     ADMIN: OBTENER MENSAJE POR ID
  ----------------------------------------- */
  async getById(id) {
    const message = await Contact.findById(id).lean();

    if (!message) {
      const error = new Error("Mensaje no encontrado");
      error.status = 404;
      throw error;
    }

    return message;
  },

  /* -----------------------------------------
     ADMIN: ELIMINAR MENSAJE
  ----------------------------------------- */
  async remove(id) {
    const message = await Contact.findByIdAndDelete(id).lean();

    if (!message) {
      const error = new Error("Mensaje no encontrado");
      error.status = 404;
      throw error;
    }

    return message;
  }
};
