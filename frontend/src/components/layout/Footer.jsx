import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#343829] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">

          {/* MARCA */}
          <div>
            <h2 className="mb-6 font-serif text-3xl font-bold">
              Buena Senda
            </h2>

            <div className="flex gap-3">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6F7860] transition hover:bg-[#95A76F]"
              >
                <FaInstagram />
              </button>

              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6F7860] transition hover:bg-[#95A76F]"
              >
                <FaFacebookF />
              </button>

              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6F7860] transition hover:bg-[#95A76F]"
              >
                <FaWhatsapp />
              </button>
            </div>
          </div>

          {/* NAVEGACION */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Navegación
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/75 transition hover:text-[#DCEABC]"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  to="/nosotros"
                  className="text-white/75 transition hover:text-[#DCEABC]"
                >
                  Nosotros
                </Link>
              </li>

              <li>
                <Link
                  to="/servicios"
                  className="text-white/75 transition hover:text-[#DCEABC]"
                >
                  Servicios
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-white/75 transition hover:text-[#DCEABC]"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/productos"
                  className="text-white/75 transition hover:text-[#DCEABC]"
                >
                  Productos
                </Link>
              </li>

              <li>
                <Link
                  to="/contacto"
                  className="text-white/75 transition hover:text-[#DCEABC]"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Contacto
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#DCEABC]" />

                <span className="text-white/75">
                  Dirección
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#DCEABC]" />

                <span className="text-white/75">
                  Mail
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#DCEABC]" />

                <span className="text-white/75">
                  Número de contacto
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* COPY */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">

          <p>
            © 2026 Buena Senda. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">
            <button
              type="button"
              className="transition hover:text-white"
            >
              Privacidad
            </button>

            <button
              type="button"
              className="transition hover:text-white"
            >
              Términos
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}