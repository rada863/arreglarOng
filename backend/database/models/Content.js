import mongoose from "mongoose";
import slugify from "slugify";

const ContentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 150,
    },

    slug: {
      type: String,
      unique: true,
      index: true,
      trim: true,
      lowercase: true,
    },

    body: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },

    category: {
      type: String,
      default: "general",
      trim: true,
      lowercase: true,
      maxlength: 50,
    },

    published: {
      type: Boolean,
      default: true,
    },

    // Si mañana querés relacionarlo con admins o usuarios
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      default: null,
    },

    // Preparado para SEO
    metaDescription: {
      type: String,
      trim: true,
      maxlength: 160,
    },

    metaKeywords: {
      type: [String],
      trim: true,
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

/**
 * Generar slug automáticamente al crear o actualizar
 */
ContentSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true,
      trim: true,
    });
  }
  next();
});

ContentSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();

  if (update.title) {
    update.slug = slugify(update.title, {
      lower: true,
      strict: true,
      trim: true,
    });
  }

  next();
});

// Índice compuesto para búsquedas rápidas
ContentSchema.index({ category: 1, published: 1 });

export default mongoose.model("Content", ContentSchema);
