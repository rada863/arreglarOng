import mongoose from "mongoose";
import slugify from "slugify";

const ProductsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    category: { type: String, required: true },
    images: [{ type: String }],
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

/* Generar slug automáticamente */
ProductsSchema.pre("save", function (next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true });
  }
  next();
});

export default mongoose.model("Products", ProductsSchema);
