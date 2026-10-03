import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";

const navigation = [
  { id: 1, name: "Inicio", path: "/" },
  { id: 2, name: "Nosotros", path: "/nosotros" },
  { id: 3, name: "Servicios", path: "/servicios" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Productos", path: "/productos" },
  { id: 6, name: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCEAD8] bg-[#FAFBF6]/95 shadow-sm backdrop-blur">
      <nav
        className="mx-auto max-w-6xl px-4 sm:px-6"
        aria-label="Navegación principal"
      >
        {/* BARRA PRINCIPAL */}
        <div className="flex min-h-16 items-center justify-between gap-4 md:min-h-20">
          
          {/* MARCA */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2"
            aria-label="Ir al inicio de Buena Senda"
          >
            {/* Logo temporal */}
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6F7860]"
              aria-hidden="true"
            >
              <span className="h-5 w-3 rotate-45 rounded-full border-2 border-[#DCEABC]" />
            </span>
            <span className="truncate font-serif text-base font-bold text-[#343829] sm:text-xl">
              Buena Senda
            </span>
          </NavLink>

          {/* NAVEGACION DE ESCRITORIO */}
          <div className="hidden items-center justify-center gap-5 md:flex lg:gap-7">
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-semibold transition duration-300 ${
                    isActive
                      ? "text-[#6F7860]"
                      : "text-[#343829] hover:text-[#95A76F]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#95A76F] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CARRITO Y MENU TELEFONO*/}
          <div className="flex items-center gap-3">
            {/* CARRITO */}
            <NavLink
              to="/carrito"
              aria-label="Ir al carrito"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#DCEAD8] bg-white text-[#343829] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#95A76F] hover:bg-[#EFF5E5] hover:shadow-md"
            >
              <FaShoppingCart className="h-5 w-5" />

              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#6F7860] px-1 text-xs font-bold text-white">
                0
              </span>
            </NavLink>

            {/* BOTON MENU HAMBURGUESA */}
            <button
              type="button"
              onClick={() => setMenuOpen((currentValue) => !currentValue)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCEAD8] bg-white text-[#343829] transition duration-300 hover:bg-[#EFF5E5] focus:outline-none focus:ring-2 focus:ring-[#95A76F] focus:ring-offset-2 md:hidden"
            >
              {menuOpen ? (
                <FaTimes className="h-5 w-5" aria-hidden="true" />
              ) : (
                <FaBars className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>

        {/* MENU TELEFONO */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-[35rem] border-t border-[#DCEAD8] pb-4 pt-3 opacity-100"
              : "max-h-0 border-t border-transparent py-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 font-semibold transition duration-300 ${
                    isActive
                      ? "bg-[#EFF5E5] text-[#6F7860]"
                      : "text-[#343829] hover:bg-[#EFF5E5] hover:text-[#6F7860]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CARRITO DENTRO DEL MENU TELEFONO */}
          <button
            type="button"
            title="El carrito estará disponible próximamente"
            className="mt-3 flex w-full items-center justify-between rounded-2xl border border-[#DCEAD8] bg-white px-4 py-3 font-semibold text-[#343829] transition duration-300 hover:bg-[#EFF5E5]"
          >
            <span className="flex items-center gap-3">
              <FaShoppingCart aria-hidden="true" />
              Carrito
            </span>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#6F7860] px-1 text-xs font-bold text-white">
              0
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}