import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[#DCEAD8] bg-white">
      
      <div className="flex h-56 items-center justify-center bg-[#E9F2E6]">
        <span className="font-semibold text-[#293827]">
          Imagen
        </span>
      </div>

      <div className="p-6">
        
        <span className="mb-4 inline-flex rounded-full bg-[#DCEAD8] px-3 py-1 text-sm font-semibold text-[#293827]">
          {post.category}
        </span>

        <h3 className="mb-3 text-2xl font-bold text-[#293827]">
          {post.title}
        </h3>

        <p className="mb-5 leading-7 text-gray-600">
          {post.description}
        </p>

        <Link
          to={`/blog/${post.id}`}
          className="font-semibold text-[#689E5F] transition hover:text-[#293827]"
        >
          Leer más →
        </Link>

      </div>
    </article>
  );
}