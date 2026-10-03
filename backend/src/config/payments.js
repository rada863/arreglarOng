// Datos de pago del cliente (Alias, CBU, Titular, QR opcional)
// Este archivo se usa para mostrar la información de pago en el frontend
// y para que el admin pueda confirmar pagos manuales.

export const paymentConfig = {
  cuentaDni: {
    alias: "ALIASDELCLIENTE",               // Ej: mi.negocio.dni
    cbu: "0000000000000000000000",          // CBU real del cliente
    titular: "Nombre Apellido",             // Titular de la cuenta
    qr: "/uploads/qr-cuenta-dni.png",       // QR opcional (si el cliente lo tiene)
  },

  transferencia: {
    alias: "ALIASDELCLIENTE",               // Alias bancario
    cbu: "0000000000000000000000",          // CBU bancario
    titular: "Nombre Apellido",             // Titular de la cuenta
  },
};
