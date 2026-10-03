import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Servicios from "../pages/Servicios";
import Blog from "../pages/Blog";
import BlogDetail from "../components/blog/BlogDetail";
import Productos from "../pages/Productos";
import Contacto from "../pages/Contacto";
import ProductDetail from "../components/products/ProductDetail";
import Carrito from "../pages/Carrito";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:postId" element={<BlogDetail />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/productos/:productId" element={<ProductDetail />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/carrito" element={<Carrito />} />
    </Routes>
  );
}