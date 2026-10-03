import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ProductCard from "./ProductCard";
import { products } from "./ProductsData";

export default function ProductDetail() {
    const { productId } = useParams();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setQuantity(1);
    }, [productId]);

    // Busca el producto usando el id que viene de la ruta
    const product = products.find(
        (item) => item.id === Number(productId)
    );

    if (!product) {
        return (
        <MainLayout>
            <section className="min-h-[60vh] bg-[#FAFBF6] px-5 py-20 sm:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-4 font-serif text-4xl font-bold text-[#293827]">
                    Producto no encontrado
                    </h1>
                    <p className="mb-8 text-[#6F745F]">
                    El producto solicitado no está disponible.
                    </p>
                    <Link
                    to="/productos"
                    className="inline-flex rounded-full bg-[#6F7860] px-7 py-3 font-semibold text-white transition hover:bg-[#293827] focus:outline-none focus:ring-2 focus:ring-[#689E5F] focus:ring-offset-2"
                    >
                    Volver a productos
                    </Link>
                </div>
            </section>
        </MainLayout>
        );
    }

  // Productos distintos al actual y que tengan stock
  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.stock > 0
    )
    .slice(0, 3);

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) =>
      Math.max(1, currentQuantity - 1)
    );
  };

  const increaseQuantity = () => {
    setQuantity((currentQuantity) =>
      Math.min(product.stock, currentQuantity + 1)
    );
  };

  return (
    <MainLayout>
      {/* DETALLE DEL PRODUCTO */}
      <section className="bg-[#FAFBF6] px-5 py-10 sm:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/productos"
            className="mb-9 inline-flex font-semibold text-[#6F7860] transition hover:text-[#293827] focus:outline-none focus:ring-2 focus:ring-[#689E5F]"
          >
            ← Volver a productos
          </Link>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            {/* IMAGEN */}
            <div className="relative flex min-h-[27rem] items-center justify-center rounded-3xl border border-[#EAF0DC] bg-white md:min-h-[37rem]">
              {product.tag && (
                <span className="absolute left-5 top-5 rounded-full bg-[#DCEABC] px-4 py-2 text-sm font-semibold text-[#293827]">
                  {product.tag}
                </span>
              )}
              <span className="text-3xl font-medium text-[#293827]">
                Imagen
              </span>
            </div>

            {/* INFORMACION */}
            <div>
              <span className="mb-5 inline-flex rounded-full bg-[#EAF0DC] px-4 py-2 text-sm font-semibold text-[#78905F]">
                {product.category}
              </span>
              <h1 className="mb-4 font-serif text-4xl font-bold text-[#293827] md:text-5xl">
                {product.name}
              </h1>
              <p className="mb-6 font-serif text-4xl font-bold text-[#78905F]">
                {product.price}
              </p>
              <p className="mb-7 leading-8 text-[#6F745F]">
                {product.longDescription || product.description}
              </p>

              {/* INGREDIENTES O MATERIALES */}
              <div className="mb-8 rounded-2xl border border-[#CAD7B0] bg-[#EAF0DC] p-6">
                <h2 className="mb-2 font-serif text-lg font-bold text-[#293827]">
                  Ingredientes / Materiales
                </h2>
                <p className="text-[#6F745F]">
                  {product.materials || "Lorem ipsum dolor sit amet."}
                </p>
              </div>

              {/* CANTIDAD */}
              <div className="mb-7 flex flex-wrap items-center gap-4">
                <span className="font-semibold text-[#6F745F]">
                  Cantidad:
                </span>
                <div className="flex items-center overflow-hidden rounded-xl border-2 border-[#9DAC7E]">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    aria-label="Disminuir cantidad"
                    className="flex h-12 w-12 items-center justify-center text-xl text-[#4D543F] transition hover:bg-[#EAF0DC] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    −
                  </button>
                  <span
                    className="flex h-12 min-w-12 items-center justify-center border-x border-[#9DAC7E] px-3 font-semibold text-[#293827]"
                    aria-live="polite"
                  >
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stock}
                    aria-label="Aumentar cantidad"
                    className="flex h-12 w-12 items-center justify-center text-xl text-[#4D543F] transition hover:bg-[#EAF0DC] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* BOTONES, SE CONECTAN MAS ADELANTE A LA LOGICA REAL */}
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <button
                  type="button"
                  disabled
                  title="Carrito disponible próximamente"
                  className="cursor-not-allowed rounded-2xl bg-[#6F7860] px-7 py-4 font-semibold text-white opacity-70"
                >
                  Agregar al carrito
                </button>
                <button
                  type="button"
                  disabled
                  title="Carrito disponible próximamente"
                  className="cursor-not-allowed rounded-2xl border-2 border-[#9DAC7E] px-7 py-4 font-semibold text-[#6F7860] opacity-70"
                >
                  Ver carrito
                </button>
              </div>
              <p className="mt-5 text-sm text-[#91A06E]">
                Stock disponible: {product.stock}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS RELACIONADOS */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-[#DCEAD8] bg-[#FAFBF6] px-5 py-14 sm:px-8 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 font-serif text-3xl font-bold text-[#293827] md:text-4xl">
              También te puede gustar
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
}