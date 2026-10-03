import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    body: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      default: "general",
      lowercase: true,
      trim: true
    },

    published: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

/* -----------------------------
   Generar slug automáticamente
----------------------------- */
ContentSchema.pre("validate", function (next) {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
  next();
});

/* -----------------------------
   Limpiar respuesta JSON
----------------------------- */
ContentSchema.methods.toJSON = function () {
  const obj = this.toObject();
  return obj;
};

/* -----------------------------
   Índices
----------------------------- */
ContentSchema.index({ slug: 1 });

export default mongoose.model("Content", ContentSchema);
