import {
  MedusaNextFunction,
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework";
import { defineMiddlewares } from "@medusajs/medusa";
import { adminMiddlewares } from "./admin/middlewares";
import { storeMiddlewares } from "./store/middlewares";

export default defineMiddlewares({
  routes: [
    {
      matcher: "/*",
      middlewares: [
        (req: MedusaRequest, _res: MedusaResponse, next: MedusaNextFunction) => {
          const publicUrl = process.env.MEDUSA_BACKEND_URL;
          if (publicUrl) {
            try {
              const u = new URL(publicUrl);
              if (!req.headers["x-forwarded-host"]) {
                req.headers["x-forwarded-host"] = u.host;
              }
              if (!req.headers["x-forwarded-proto"]) {
                req.headers["x-forwarded-proto"] = u.protocol.replace(":", "");
              }
              const prefix = u.pathname && u.pathname !== "/" ? u.pathname : "";
              if (prefix && !req.headers["x-forwarded-prefix"]) {
                req.headers["x-forwarded-prefix"] = prefix;
              }
            } catch {}
          }
          next();
        },
      ],
    },
    ...adminMiddlewares,
    ...storeMiddlewares,
    {
      matcher: "/store/customers/me",
      middlewares: [
        (req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) => {
          req.allowed = ["employee"];
          next();
        },
      ],
    },
  ],
});
