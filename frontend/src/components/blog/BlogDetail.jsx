import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { posts } from "./BlogData";
import BlogCard from "./BlogCard";

export default function BlogDetail() {
  const { postId } = useParams();

  const post = posts.find(
    (item) => item.id === Number(postId)
  );

  if (!post) {
    return (
      <MainLayout>
        <section className="px-5 py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#293827]">
            Artículo no encontrado
          </h1>

          <Link
            to="/blog"
            className="font-semibold text-[#689E5F]"
          >
            Volver al blog
          </Link>
        </section>
      </MainLayout>
    );
  }

  const relatedPosts = posts
    .filter((item) => item.id !== post.id)
    .slice(0, 3);

  return (
    <MainLayout>
      {/* ENCABEZADO */}
      <section className="bg-[#343829] px-5 py-20 text-white sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">

          <Link
            to="/blog"
            className="mb-8 inline-flex text-sm font-semibold text-[#CBD7A3]"
          >
            ← Volver al blog
          </Link>

          <span className="mb-4 inline-flex rounded-full bg-[#DCEAD8] px-4 py-2 text-sm font-semibold text-[#293827]">
            {post.category}
          </span>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight">
            {post.title}
          </h1>

        </div>
      </section>

      {/* CONTENIDO */}
      <section className="bg-[#FAFBF6] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">

          <div className="mb-10 flex h-80 items-center justify-center rounded-3xl bg-[#E9F2E6]">
            <span className="font-semibold text-[#293827]">
              Imagen
            </span>
          </div>

          <article className="rounded-3xl border border-[#DCEAD8] bg-white p-8">
            <h2 className="mb-4 text-3xl font-bold text-[#293827]">
              {post.title}
            </h2>

            <p className="whitespace-pre-line leading-8 text-gray-600">
              {post.content}
            </p>
          </article>
        </div>
      </section>

      {/* RELACIONADOS */}
      <section className="bg-[#FAFBF6] px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-6xl">

          <h2 className="mb-8 text-3xl font-bold text-[#293827]">
            Más artículos
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <BlogCard
                key={relatedPost.id}
                post={relatedPost}
              />
            ))}
          </div>

        </div>
      </section>
    </MainLayout>
  );
}