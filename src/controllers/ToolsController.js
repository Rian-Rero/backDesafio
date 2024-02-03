import ToolsModel from "../models/ToolsModel.js";
import asyncHandler from "../utils/general/asyncHandler.js";
import * as ToolsValidator from "../validators/toolsValidator.js";
import * as ToolsService from "../services/toolsService.js";
import { SUCCESS_CODES } from "../utils/general/constants.js";

export const get = asyncHandler(async (req, res) => {
  const inputFilters = ToolsValidator.get(req);
  const tools = await ToolsService.get(inputFilters);

  res.status(SUCCESS_CODES.OK).json(tools);
});
export const create = asyncHandler(async (req, res) => {
  const inputData = ToolsValidator.create(req);
  const newTool = await ToolsService.create(inputData);

  res.status(SUCCESS_CODES.CREATED).json(newTool);
});
export const update = asyncHandler(async (req, res) => {
  const { _id, ...inputData } = ToolsValidator.update(req);
  const updatedTool = await ToolsService.update({ _id, inputData });

  res.status(SUCCESS_CODES.OK).json(updatedTool);
});
export const destroy = asyncHandler(async (req, res) => {
  const { _id } = ToolsValidator.destroy(req);
  await ToolsService.destroy(_id);

  res.sendStatus(SUCCESS_CODES.NO_CONTENT);
});
