import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

/**
 * Subscriber to capture batch job events (for product imports)
 */
export default async function batchJobHandler({
  event: { data },
  container,
}: SubscriberArgs<any>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);

  console.log("\n=========================================");
  console.log("🔄 BATCH JOB EVENT");
  console.log("=========================================");
  console.log("Job data:", JSON.stringify(data, null, 2));
  console.log("=========================================\n");

  logger.info("Batch job event", { data });
}

export const config: SubscriberConfig = {
  event: "batch_job.created",
};

