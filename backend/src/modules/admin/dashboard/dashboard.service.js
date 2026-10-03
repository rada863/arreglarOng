import User from "../../database/models/User.js";
import Product from "../../database/models/Product.js";
import Content from "../../database/models/Content.js";
// Si tenés órdenes, import Order también

export const dashboardService = {
  async getStats() {
    const users = await User.countDocuments();
    const products = await Product.countDocuments();
    const content = await Content.countDocuments();

    return {
      users,
      products,
      content,
    };
  },

  async getRecentActivity() {
    const recentUsers = await User.find().sort({ createdAt: -1 }).limit(5);
    const recentProducts = await Product.find().sort({ createdAt: -1 }).limit(5);

    return {
      recentUsers,
      recentProducts,
    };
  }
};
