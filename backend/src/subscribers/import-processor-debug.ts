import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

/**
 * Catch-all subscriber for import-related events
 * Uses multiple event patterns to catch different event naming conventions
 */
export default async function importProcessorDebugHandler({
  event,
  container,
}: SubscriberArgs<any>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);

  // Try to extract event name from various possible sources
  const eventName = (event as any).eventName || (event as any).name || "unknown";
  
  console.error("\n=========================================");
  console.error("🔍 IMPORT DEBUG");
  console.error("=========================================");
  console.error("Event name:", eventName);
  console.error("Full event:", JSON.stringify(event, null, 2));
  console.error("=========================================\n");

  logger.error(`Import debug event - Event name: ${eventName}`);
}

export const config: SubscriberConfig = {
  event: "import-product-batch",
};

