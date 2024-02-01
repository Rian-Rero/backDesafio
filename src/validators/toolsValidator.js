import validate from "./validate.js";
import { z } from "zod";
import objectIdSchema from "../utils/libs/zod/objectIdSchema.js";

export const get = validate(
  z.object({
    query: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      imageURL: z.string().optional(),
    }),
  })
);
export const create = validate(
  z.object({
    body: z.object({
      name: z
        .string({ required_error: "Tool name is required" })
        .min(3, "Tool name must be atleast 3 characters")
        .max(40, "Tool name must be a maximum of 40 characters"),
      description: z
        .string({ required_error: "Tool description is required" })
        .min(3, "Tool description must be atleast 3 characters")
        .max(40, "Tool description must be a maximum of 40 characters"),
      imageURL: z
        .string({ required_error: "Tool url is required" })
        .min(3, "Use url must be atleast 3 characters")
        .max(200, "Tool url must be a maximum of 200 characters"),
    }),
  })
);
export const update = validate(
  z.object({
    body: z.object({
      name: z
        .string()
        .min(3, "Tool name must be atleast 3 characters")
        .max(40, "Tool name must be a maximum of 40 characters")
        .optional(),
      description: z
        .string()
        .min(3, "Tool description must be atleast 3 characters")
        .max(40, "Tool description must be a maximum of 40 characters")
        .optional(),
      imageURL: z
        .string()
        .min(3, "Use url must be atleast 3 characters")
        .max(200, "Tool url must be a maximum of 200 characters")
        .optional(),
    }),
    params: z.object({
      _id: objectIdSchema("tool _id"),
    }),
  })
);

export const destroy = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema("tool _id"),
    }),
  })
);
