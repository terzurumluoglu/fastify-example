export const getAllTags = {
  schema: {
    description: "Get All Tags That Recorded On The Database",
    tags: ["tags"],
  },
};

export const getTagsByKeys = {
  schema: {
    description: "Get Tags by Tag Keys",
    tags: ["tags"],
    params: {
      type: "object",
      properties: {
        tags: {
          type: "string",
        },
      },
      required: ["tags"],
    },
  },
};
