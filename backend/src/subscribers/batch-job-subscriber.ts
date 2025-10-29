import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

/**
 * Comprehensive subscriber for ALL batch job events
 */
export default async function batchJobSubscriber({
  event,
  container,
}: SubscriberArgs<any>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  
  // The event object contains all the information
  const eventData = event as any;
  
  console.error("\n═══════════════════════════════════════════");
  console.error("🔄 BATCH JOB EVENT CAPTURED");
  console.error("═══════════════════════════════════════════");
  
  // Log everything we can find
  console.error("Event type:", eventData.type || eventData.name || "unknown");
  console.error("Full event object:");
  console.error(JSON.stringify(eventData, null, 2));
  
  console.error("═══════════════════════════════════════════\n");
  
  logger.error("Batch job event captured", {
    event: eventData,
  });
}

export const config: SubscriberConfig = {
  event: "batch_job",
};

