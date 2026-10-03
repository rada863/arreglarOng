import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/products/ProductCard";
import { products } from "../components/products/ProductsData";

const servicios = [
  {
    id: 1,
    title: "Título de ejemplo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae.",
  },
  {
    id: 2,
    title: "Título de ejemplo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae.",
  },
  {
    id: 3,
    title: "Título de ejemplo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae.",
  },
];

const featuredProducts = products.slice(0, 3);

export default function Home() {
  return (
    <MainLayout>
      {/* ENCABEZADO */}
      <section className="bg-[#343829] px-5 py-20 sm:px-8 md:flex md:min-h-[40rem] md:items-center">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl text-center md:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#DCEABC]">
              Texto introductorio
            </p>

            <h1 className="mb-5 text-5xl font-bold text-white">
              Título principal de ejemplo
            </h1>

            <p className="mb-8 leading-7 text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque vitae turpis sed neque dignissim feugiat et vitae velit.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Link
                to="/productos"
                className="inline-flex rounded-full bg-[#6F7860] px-7 py-3 font-semibold text-white transition hover:bg-[#95A76F] focus:outline-none focus:ring-2 focus:ring-[#95A76F] focus:ring-offset-2 focus:ring-offset-[#343829]"
              >
                Comprar ahora
              </Link>

              <Link
                to="/nosotros"
                className="inline-flex rounded-full bg-[#6F7860] px-7 py-3 font-semibold text-white transition hover:bg-[#95A76F] focus:outline-none focus:ring-2 focus:ring-[#95A76F] focus:ring-offset-2 focus:ring-offset-[#343829]"
              >
                Nuestra historia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-[#FAFBF6] px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          <article className="text-center">
            <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-[#DCEABC]" />
            <h3 className="font-bold text-[#343829]">
              Beneficio ejemplo
            </h3>
            <p className="text-sm text-[#6F7860]">
              Lorem ipsum
            </p>
          </article>

          <article className="text-center">
            <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-[#DCEABC]" />
            <h3 className="font-bold text-[#343829]">
              Beneficio ejemplo
            </h3>
            <p className="text-sm text-[#6F7860]">
              Lorem ipsum
            </p>
          </article>

          <article className="text-center">
            <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-[#DCEABC]" />
            <h3 className="font-bold text-[#343829]">
              Beneficio ejemplo
            </h3>
            <p className="text-sm text-[#6F7860]">
              Lorem ipsum
            </p>
          </article>

          <article className="text-center">
            <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-[#DCEABC]" />
            <h3 className="font-bold text-[#343829]">
              Beneficio ejemplo
            </h3>
            <p className="text-sm text-[#6F7860]">
              Lorem ipsum
            </p>
          </article>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="bg-[#FAFBF6] px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#95A76F]">
                Nuestra tienda
              </p>

              <h2 className="text-3xl font-bold text-[#343829] md:text-4xl">
                Productos destacados
              </h2>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/productos"
              className="inline-flex rounded-full bg-[#6F7860] px-7 py-3 font-semibold text-white transition hover:bg-[#95A76F] focus:outline-none focus:ring-2 focus:ring-[#95A76F] focus:ring-offset-2"
            >
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-[#EFF5E5] px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#95A76F]">
              Lo que ofrecemos
            </p>

            <h2 className="text-3xl font-bold text-[#343829] md:text-4xl">
              Nuestros servicios
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#6F7860]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vitae turpis sed neque dignissim feugiat.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {servicios.map((servicio) => (
              <article
                key={servicio.id}
                className="rounded-3xl bg-[#FAFBF6] p-6 shadow-sm transition md:hover:-translate-y-1 md:hover:shadow-md"
              >
                {/* Espacio reservado para icono */}
                <div className="mb-5 h-16 w-16 rounded-2xl bg-[#DCEABC]" />

                <h3 className="mb-3 text-xl font-bold text-[#343829]">
                  {servicio.title}
                </h3>

                <p className="leading-7 text-[#6F7860]">
                  {servicio.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/servicios"
              className="inline-flex rounded-full bg-[#6F7860] px-7 py-3 font-semibold text-white transition hover:bg-[#95A76F] focus:outline-none focus:ring-2 focus:ring-[#95A76F] focus:ring-offset-2"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="bg-[#FAFBF6] px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#95A76F]">
              Nuestra historia
            </p>

            <h2 className="mb-4 text-3xl font-bold text-[#343829] md:text-4xl">
              Título
            </h2>

            <p className="mb-6 leading-7 text-[#6F7860]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper, nibh nec feugiat consequat, justo erat ultrices
              sapien, vitae pulvinar justo magna sed dolor.
            </p>

            <Link
              to="/nosotros"
              className="inline-flex rounded-full bg-[#6F7860] px-7 py-3 font-semibold text-white transition hover:bg-[#95A76F] focus:outline-none focus:ring-2 focus:ring-[#95A76F] focus:ring-offset-2"
            >
              Conocer más
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACTO A FORMULARIO */}
      <section className="bg-[#6F7860] px-5 py-14 text-center text-white sm:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            ¿Tienes un pedido especial?
          </h2>

          <p className="mb-7 leading-7 text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vitae justo sed neque fermentum consequat.
          </p>

          <Link
            to="/contacto"
            className="inline-flex rounded-full bg-[#DCEABC] px-7 py-3 font-bold text-[#343829] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#DCEABC] focus:ring-offset-2 focus:ring-offset-[#6F7860]"
          >
            Escribinos
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}