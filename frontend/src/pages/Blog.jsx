import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BlogCard from "../components/blog/BlogCard";
import { posts } from "../components/blog/BlogData";

const featuredPost = posts[0];
const otherPosts = posts.slice(1);

export default function Blog() {
  return (
    <MainLayout>
      {/* ENCABEZADO */}
      <section className="bg-[#343829] px-5 py-20 text-white sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#A9B586]" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#CBD7A3]">
              Sección de ejemplo
            </p>
          </div>
          <h1 className="mb-5 text-5xl font-bold md:text-6xl">
            Blog
          </h1>
          <p className="max-w-2xl text-lg text-white/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Integer vitae justo sed neque fermentum
            consequat.
          </p>
        </div>
      </section>

      {/* ARTICULO DESTACADO */}
      <section className="bg-[#FAFBF6] px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          {featuredPost && (
            <article className="overflow-hidden rounded-3xl border border-[#DCEAD8] bg-white md:grid md:grid-cols-2">
              {/* Imagen */}
              <div className="flex min-h-80 items-center justify-center bg-[#E9F2E6]">
                <span className="font-semibold text-[#293827]">
                  Imagen
                </span>
              </div>
              {/* Contenido */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="mb-4 inline-flex w-fit rounded-full bg-[#DCEAD8] px-4 py-2 text-sm font-semibold text-[#293827]">
                  {featuredPost.category}
                </span>
                <h2 className="mb-4 text-3xl font-bold text-[#293827]">
                  {featuredPost.title}
                </h2>
                <p className="mb-6 leading-7 text-gray-600">
                  {featuredPost.description}
                </p>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="w-fit font-semibold text-[#689E5F] transition hover:text-[#293827]"
                >
                  Leer más →
                </Link>
              </div>
            </article>
          )}

          {/* RESTO DE LOS ARTICULOS */}
          {otherPosts.length > 0 && (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((post) => (
                <BlogCard key={post.id || post.title} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}