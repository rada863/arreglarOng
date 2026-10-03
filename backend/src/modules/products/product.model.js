import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    slug: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true, 
      trim: true 
    },

    description: { type: String, required: true, trim: true },

    price: { 
      type: Number, 
      required: true, 
      min: [0, "El precio no puede ser negativo"] 
    },

    stock: { 
      type: Number, 
      default: 0, 
      min: [0, "El stock no puede ser negativo"] 
    },

    category: { 
      type: String, 
      required: true, 
      lowercase: true, 
      trim: true 
    },

    images: [{ type: String }],

    active: { type: Boolean, default: true }
  },
  { 
    timestamps: true,
    versionKey: false
  }
);

// Generar slug automáticamente si no viene
ProductSchema.pre("validate", function(next) {
  if (this.name && !this.slug) {
    this.slug = this.name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
  next();
});

export default mongoose.model("Product", ProductSchema);

