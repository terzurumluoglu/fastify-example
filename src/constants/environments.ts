export const ENVIRONMENT = {
  schema: {
    type: "object",
    required: ["PORT", "ENVIRONMENT", "MESSAGE"],
    properties: {
      PORT: { type: "integer", default: 3000 },
      ENVIRONMENT: { type: "string", default: "DEVELOPMENT" },
      MESSAGE: { type: "string", default: "THE SERVER IS RUNNING" },
    },
  },
};
