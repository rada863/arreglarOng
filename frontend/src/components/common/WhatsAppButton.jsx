import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <button
      type="button"
      aria-label="WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-50
        flex
        items-center
        gap-3
        rounded-full
        bg-[#25D366]
        px-5
        py-3
        text-white
        shadow-lg
        transition
        duration-300
        hover:scale-105
        hover:shadow-xl
      "
    >
      <FaWhatsapp size={28} />

      <span className="hidden font-semibold sm:block">
        WhatsApp
      </span>
    </button>
  );
}