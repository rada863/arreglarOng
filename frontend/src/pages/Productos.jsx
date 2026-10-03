import { useMemo, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/products/ProductCard";
import { products } from "../components/products/ProductsData";

const categories = [
  "Todos",
  "Categoria2",
  "Categoria3",
  "Categoria4",
  "Categoria5",
  "Categoria6",
];

export default function Productos() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const availableProducts = useMemo(() => {
    return products.filter((product) => {
      const hasStock = product.stock > 0;
      const belongsToCategory =
        selectedCategory === "Todos" ||
        product.category === selectedCategory;
      return hasStock && belongsToCategory;
    });
  }, [selectedCategory]);

  return (
    <MainLayout>
      {/* ENCABEZADO */}
      <section className="bg-[#343829] px-5 py-16 text-white sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 flex items-center gap-3">
            <span
              className="h-px w-8 bg-[#A9B586]"
              aria-hidden="true"
            />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#CBD7A3]">
              Texto de ejemplo
            </p>
          </div>
          <h1 className="mb-5 font-serif text-5xl font-bold md:text-6xl">
            Productos
          </h1>
          <p className="max-w-xl text-lg leading-8 text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      {/* CATALOGO */}
      <section className="bg-[#FAFBF6] px-5 py-12 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          {/* FILTROS */}
          <div
            className="-mx-5 mb-10 flex gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
            aria-label="Filtrar productos por categoría"
          >
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={isSelected}
                  className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#689E5F] focus:ring-offset-2 ${
                    isSelected
                      ? "bg-[#6F7860] text-white"
                      : "bg-[#EAF0DC] text-[#4D543F] hover:bg-[#DCEABC]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* PRODUCTOS */}
          {availableProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {availableProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-[#DCEAD8] bg-white px-6 py-16 text-center">
              <h2 className="mb-3 font-serif text-2xl font-bold text-[#293827]">
                Sin productos disponibles
              </h2>
              <p className="text-[#6F745F]">
                No hay productos con stock en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}