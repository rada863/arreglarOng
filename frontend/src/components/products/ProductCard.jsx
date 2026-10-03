import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#DCEAD8] bg-[#FAFBF6]">
      {/* Imagen */}
      <div className="relative flex h-72 items-center justify-center bg-white sm:h-80">
        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-[#DCEABC] px-3 py-1 text-xs font-semibold text-[#293827]">
            {product.tag}
          </span>
        )}
        <span className="text-xl font-medium text-[#293827]">
          Imagen
        </span>
      </div>

      {/* Informacion */}
      <div className="p-5">
        <p className="mb-2 text-sm font-semibold text-[#95A76F]">
          {product.category}
        </p>

        <h2 className="mb-2 font-serif text-xl font-bold text-[#293827]">
          {product.name}
        </h2>

        <p className="mb-4 leading-7 text-[#6F745F]">
          {product.description}
        </p>

        <div className="flex flex-col gap-4 min-[390px]:flex-row min-[390px]:items-center min-[390px]:justify-between">
          <p className="font-serif text-3xl font-bold text-[#789052]">
            {product.price}
          </p>

          <div className="flex flex-wrap gap-2">
            {/* Ir al detalle */}
            <Link
              to={`/productos/${product.id}`}
              className="rounded-xl border-2 border-[#9DAC7E] px-4 py-2 font-semibold text-[#4D543F] transition hover:bg-[#EAF0DC] focus:outline-none focus:ring-2 focus:ring-[#689E5F]"
            >
              Ver detalle
            </Link>

            {/* Carrito mas adelante */}
            <button
              type="button"
              disabled
              title="Carrito disponible próximamente"
              className="cursor-not-allowed rounded-xl bg-[#6F7860] px-4 py-2 font-semibold text-white opacity-70"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}