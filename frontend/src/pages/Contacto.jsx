import MainLayout from "../layouts/MainLayout";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function Contacto() {
  return (
    <MainLayout>
      {/* ENCABEZADO */}
      <section className="bg-[#343829] px-5 py-20 text-white sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#A9B586]" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#CBD7A3]">
              Estamos aquí
            </p>
          </div>

          <h1 className="mb-5 font-serif text-5xl font-bold md:text-6xl">
            Contacto
          </h1>

          <p className="max-w-2xl text-lg text-white/75">
            Respondemos en menos de 24 horas hábiles.
            También podés escribirnos por WhatsApp.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-[#FAFBF6] px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[360px_1fr]">
          
          {/* INFORMACION */}
          <div>
            <h2 className="mb-8 font-serif text-3xl font-bold text-[#293827]">
              Información
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF0DC]">
                  <FaMapMarkerAlt className="text-[#6F7860]" />
                </div>

                <div>
                  <p className="font-semibold uppercase text-[#95A76F]">
                    Dirección
                  </p>

                  <p className="text-[#6F745F]">
                    Dirección de ejemplo
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF0DC]">
                  <FaEnvelope className="text-[#6F7860]" />
                </div>

                <div>
                  <p className="font-semibold uppercase text-[#95A76F]">
                    Email
                  </p>

                  <p className="text-[#6F745F]">
                    ejemplo@email.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF0DC]">
                  <FaPhoneAlt className="text-[#6F7860]" />
                </div>

                <div>
                  <p className="font-semibold uppercase text-[#95A76F]">
                    Teléfono
                  </p>

                  <p className="text-[#6F745F]">
                    +54 9 0000 000000
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF0DC]">
                  <FaClock className="text-[#6F7860]" />
                </div>

                <div>
                  <p className="font-semibold uppercase text-[#95A76F]">
                    Horario
                  </p>

                  <p className="text-[#6F745F]">
                    Lunes a Viernes, 9:00 - 17:00 hs
                  </p>
                </div>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="mt-10 rounded-3xl border border-[#DCEAD8] bg-[#EFF5E5] p-6 shadow-sm transition duration-300 md:hover:-translate-y-1 md:hover:shadow-md">
              <h3 className="mb-2 font-serif text-2xl font-bold text-[#293827]">
                ¿Preferís WhatsApp?
              </h3>

              <p className="mb-5 text-[#6F745F]">
                Te respondemos al instante.
              </p>

              <button
                type="button"
                className="font-semibold text-[#689E5F] transition hover:text-[#293827]"
              >
                Escribinos por WhatsApp →
              </button>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="rounded-3xl border border-[#DCEAD8] bg-[#EFF5E5] p-8">
            <form>
              <div className="grid gap-5 md:grid-cols-2">
                
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-medium text-[#293827]"
                  >
                    Nombre completo
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Nombre de ejemplo"
                    className="w-full rounded-2xl border border-[#DCEAD8] bg-white px-4 py-3 outline-none transition focus:border-[#95A76F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-medium text-[#293827]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="ejemplo@email.com"
                    className="w-full rounded-2xl border border-[#DCEAD8] bg-white px-4 py-3 outline-none transition focus:border-[#95A76F]"
                  />
                </div>

              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block font-medium text-[#293827]"
                >
                  Asunto
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="Asunto de ejemplo"
                  className="w-full rounded-2xl border border-[#DCEAD8] bg-white px-4 py-3 outline-none transition focus:border-[#95A76F]"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block font-medium text-[#293827]"
                >
                  Mensaje
                </label>

                <textarea
                  id="message"
                  rows="7"
                  placeholder="Contanos tu consulta, pedido o idea..."
                  className="w-full resize-none rounded-2xl border border-[#DCEAD8] bg-white px-4 py-3 outline-none transition focus:border-[#95A76F]"
                />
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-2xl bg-[#6F7860] px-8 py-4 font-semibold text-white transition hover:bg-[#293827]"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}