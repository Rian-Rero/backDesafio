import ToolsModel from "../models/ToolsModel.js";
class ToolsController {
  async read(req, res) {
    try {
      const category = await ToolsModel.find(req.body);
      return res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: "ERROR", error: error.message });
    }
  }
}
export default new ToolsController();
