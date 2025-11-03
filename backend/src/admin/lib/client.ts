import Medusa from "@medusajs/js-sdk";

// Use '/api' when deployed behind Nginx path prefix; fallback to '/' for local dev
const baseUrl = process.env.NODE_ENV === "production" ? "/api" : "/";

export const sdk = new Medusa({
  baseUrl,
  auth: {
    type: "session",
  },
});
