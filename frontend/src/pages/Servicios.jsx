import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ServiceCard from "../components/services/ServiceCard";
import { services } from "../components/services/ServicesData";

export default function Servicios() {
  return (
    <MainLayout>
      {/* ENCABEZADO */}
      <section className="bg-[#343829] px-5 py-20 text-white sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#A9B586]" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#CBD7A3]">
              Lo que ofrecemos
            </p>
          </div>

          <h1 className="mb-5 text-5xl font-bold md:text-6xl">
            Servicios
          </h1>

          <p className="max-w-2xl text-lg text-white/75">
            Más allá de los productos, ofrecemos servicios pensados para hacer de cada experiencia algo especial.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-[#FAFBF6] px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECCION PEDIDOS */}
      <section className="bg-[#EFF5E5] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#A9B586]" />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A9B586]">
                Cómo funciona
              </p>

              <span className="h-px w-12 bg-[#A9B586]" />
            </div>

            <h2 className="text-4xl font-bold text-[#293827] md:text-5xl">
              Un pedido, paso a paso
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <article className="text-center">
              <span className="mb-4 block text-6xl font-bold text-[#D6DFC1]">
                01
              </span>

              <h3 className="mb-3 text-2xl font-bold text-[#293827]">
                Consultá
              </h3>

              <p className="leading-7 text-gray-600">
                Escribinos por WhatsApp o el formulario de contacto con tu idea o necesidad.
              </p>
            </article>

            <article className="text-center">
              <span className="mb-4 block text-6xl font-bold text-[#D6DFC1]">
                02
              </span>

              <h3 className="mb-3 text-2xl font-bold text-[#293827]">
                Presupuestamos
              </h3>

              <p className="leading-7 text-gray-600">
                En menos de 24 hs te enviamos una propuesta personalizada con opciones y precios.
              </p>
            </article>

            <article className="text-center">
              <span className="mb-4 block text-6xl font-bold text-[#D6DFC1]">
                03
              </span>

              <h3 className="mb-3 text-2xl font-bold text-[#293827]">
                Elaboramos
              </h3>

              <p className="leading-7 text-gray-600">
                Una vez confirmado el pedido, comenzamos la producción artesanal de tus productos.
              </p>
            </article>

            <article className="text-center">
              <span className="mb-4 block text-6xl font-bold text-[#D6DFC1]">
                04
              </span>

              <h3 className="mb-3 text-2xl font-bold text-[#293827]">
                Entregamos
              </h3>

              <p className="leading-7 text-gray-600">
                Coordina la entrega en nuestro local o pedí el envío a domicilio dentro de la zona.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECCION CONSULTA */}
      <section className="bg-[#6F7860] px-5 py-20 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            ¿Tienes una consulta?
          </h2>

          <p className="mb-8 text-lg text-white/80">
            Nos adaptamos a cada necesidad. Contáctenos y encontramos juntos la mejor solución artesanal.
          </p>

          <Link
            to="/contacto"
            className="inline-flex rounded-full bg-[#DCEABC] px-8 py-4 font-semibold text-[#293827] transition hover:bg-white"
          >
            Comenzar conversación
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}