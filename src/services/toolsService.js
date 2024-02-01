import ToolsModel from "../models/ToolsModel.js";
import { NotFoundError } from "../errors/baseErrors.js";

export async function get(inputFilters) {
  return ToolsModel.find(inputFilters).lean().exec();
}
export async function create(inputData) {
  return ToolsModel.create(inputData);
}
export async function update(_id, inputData) {
  const foundTool = await ToolsModel.findById(_id).exec();
  if (!foundTool) throw new NotFoundError("Tool not found");

  return foundCategory.set(inputData).save();
}
export async function destroy(_id) {
  const foundTool = await ToolsModel.findById(_id).exec();
  if (!foundTool) throw new NotFoundError("Category not found");

  await foundTool.deleteOne();
}
