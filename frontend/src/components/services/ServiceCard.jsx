import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <article className="rounded-3xl border border-[#CAD7B0] bg-[#EFF5E5] p-8">
      <div className="mb-6 h-12 w-12 rounded-2xl bg-[#D6E5B8]" />

      <h3 className="mb-3 text-2xl font-bold text-[#293827]">
        {service.title}
      </h3>

      <p className="mb-6 leading-7 text-gray-600">
        {service.description}
      </p>

      <Link
        to="/contacto"
        className="font-semibold text-[#8A9A5B] transition hover:text-[#293827]"
      >
        Consultar →
      </Link>
    </article>
  );
}