import { dashboardService } from "./dashboard.service.js";
import { successResponse } from "../../../utils/response.js";
import { logger } from "../../../utils/logger.js";

export const dashboardController = {
  async getDashboard(req, res, next) {
    try {
      const stats = await dashboardService.getStats();
      const activity = await dashboardService.getRecentActivity();

      logger.info("Dashboard consultado", {
        adminId: req.admin.id,
        ip: req.ip
      });

      return successResponse(
        res,
        { stats, activity },
        "Dashboard del panel admin"
      );
    } catch (err) {
      next(err);
    }
  }
};
