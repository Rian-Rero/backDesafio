import mongoose from "mongoose";

const ToolsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

const ToolsModel = mongoose.model("tools", ToolsSchema);
export default ToolsModel;
