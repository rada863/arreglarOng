import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import MainLayout from "../layouts/MainLayout";

export default function Carrito() {
  return (
    <MainLayout>
      {/* ESTADO VACIO */}
      <section className="bg-[#FAFBF6] px-5 py-20 sm:px-8 md:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#EFF5E5]">
            <FaShoppingCart
              size={38}
              className="text-[#95A76F]"
            />
          </div>

          <h2 className="mb-4 font-serif text-4xl font-bold text-[#293827]">
            Tu carrito está vacío
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-8 text-[#6F745F]">
            Explorá nuestros productos y elegí los que más te gusten.
          </p>

          <Link
            to="/productos"
            className="inline-flex rounded-full bg-[#6F7860] px-8 py-4 font-semibold text-white transition hover:bg-[#343829]"
          >
            Ver productos
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}