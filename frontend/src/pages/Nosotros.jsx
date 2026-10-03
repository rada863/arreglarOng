import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const values = [
  {
    id: 1,
    title: "Calidad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Compromiso",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Cercanía",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "Artesanal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const team = [
  {
    id: 1,
    name: "Nombre de ejemplo",
    role: "Rol de ejemplo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Nombre de ejemplo",
    role: "Rol de ejemplo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Nombre de ejemplo",
    role: "Rol de ejemplo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Nombre de ejemplo",
    role: "Rol de ejemplo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Nosotros() {
  return (
    <MainLayout>
      {/* ENCABEZADO */}
      <section className="bg-[#343829] px-5 py-20 text-white sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#A9B586]" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#CBD7A3]">
              Quiénes somos
            </p>
          </div>
          <h1 className="mb-5 text-5xl font-bold md:text-6xl">
            Nosotros
          </h1>
          <p className="max-w-2xl text-lg text-white/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Integer vitae justo sed neque fermentum
            consequat.
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="bg-[#FAFBF6] px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#95A76F]">
              Nuestra historia
            </p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-[#293827]">
              Título de ejemplo
            </h2>
            <p className="mb-5 leading-8 text-[#6F745F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer vitae justo sed neque fermentum
              consequat.
            </p>
            <p className="mb-5 leading-8 text-[#6F745F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer vitae justo sed neque fermentum
              consequat.
            </p>
            <p className="leading-8 text-[#6F745F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer vitae justo sed neque fermentum
              consequat.
            </p>
          </div>
          <div className="relative">
            <div className="flex min-h-[28rem] items-center justify-center rounded-3xl bg-[#E9F2E6]">
              <span className="text-xl font-semibold text-[#293827]">
                Imagen
              </span>
            </div>
            <div className="absolute -bottom-6 left-6 rounded-3xl bg-[#6F7860] px-6 py-5 text-white shadow-lg">
              <p className="text-3xl font-bold">+30 años</p>
              <p className="text-sm">Trabajando juntos</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISION Y VISION */}
      <section className="bg-[#EFF5E5] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#95A76F]">
              Nuestros principios
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#293827]">
              Misión y Visión
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-[#DCEAD8] bg-white p-8 shadow-sm transition duration-300 md:hover:-translate-y-1 md:hover:shadow-md">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-[#DCEABC]" />
              <h3 className="mb-4 text-3xl font-bold text-[#293827]">
                Misión
              </h3>
              <p className="leading-8 text-[#6F745F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer vitae justo sed neque fermentum
                consequat. Lorem ipsum dolor sit amet.
              </p>
            </article>
            <article className="rounded-3xl border border-[#DCEAD8] bg-white p-8 shadow-sm transition duration-300 md:hover:-translate-y-1 md:hover:shadow-md">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-[#DCEABC]" />
              <h3 className="mb-4 text-3xl font-bold text-[#293827]">
                Visión
              </h3>
              <p className="leading-8 text-[#6F745F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer vitae justo sed neque fermentum
                consequat. Lorem ipsum dolor sit amet.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-[#FAFBF6] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#95A76F]">
              Nuestros valores
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#293827]">
              Lo que nos representa
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.id}
                className="group rounded-3xl border border-[#D6E0C4] bg-[#EFF5E5] p-7 shadow-sm transition duration-300 md:hover:-translate-y-1 md:hover:shadow-md"
              >
                <div className="mb-5 h-12 w-12 rounded-2xl bg-[#D6E5B8]" />
                <h3 className="mb-4 font-serif text-2xl font-bold text-[#293827]">
                  {value.title}
                </h3>
                <p className="leading-7 text-[#6F745F]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="bg-[#EFF5E5] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#95A76F]">
              Nuestro equipo
            </p>
            <h2 className="font-serif text-4xl font-bold text-[#293827]">
              Personas detrás del taller
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <article
                key={member.id}
                className="p-6 text-center transition duration-300 md:hover:-translate-y-1"
              >
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-[#DCEABC]">
                  <span className="text-sm font-semibold text-[#293827]">
                    Imagen
                  </span>
                </div>
                <h3 className="mb-1 text-xl font-bold text-[#293827]">
                  {member.name}
                </h3>
                <p className="mb-4 font-semibold text-[#95A76F]">
                  {member.role}
                </p>
                <p className="leading-7 text-[#6F745F]">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECCION CONTACTO */}
      <section className="bg-[#6F7860] px-5 py-20 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 font-serif text-4xl font-bold md:text-5xl">
            ¿Quieres conocernos más?
          </h2>
          <Link
            to="/contacto"
            className="inline-flex rounded-full bg-[#DCEABC] px-8 py-4 font-semibold text-[#293827] transition hover:bg-[#c9d8a3]"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}