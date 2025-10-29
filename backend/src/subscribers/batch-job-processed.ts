import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

type BatchJobData = {
  id?: string;
  type?: string;
  context?: any;
  result?: any;
  error?: any;
};

/**
 * Subscriber to capture batch job processed events
 */
export default async function batchJobProcessedHandler({
  event: { data },
  container,
}: SubscriberArgs<BatchJobData>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);

  console.log("\n=========================================");
  console.log("✅ BATCH JOB PROCESSED");
  console.log("=========================================");
  console.log("Job data:", JSON.stringify(data, null, 2));
  console.log("=========================================\n");

  logger.info("Batch job processed", { data });
}

export const config: SubscriberConfig = {
  event: "batch_job.processed",
};

