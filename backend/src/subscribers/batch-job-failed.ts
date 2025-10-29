import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

type BatchJobFailureData = {
  id?: string;
  type?: string;
  context?: any;
  error?: any;
  message?: string;
  cause?: any;
};

/**
 * Subscriber to capture batch job failures - this is where we'll see the actual import error!
 */
export default async function batchJobFailedHandler({
  event: { data },
  container,
}: SubscriberArgs<BatchJobFailureData>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);

  console.error("\n=========================================");
  console.error("❌ BATCH JOB FAILED - THIS IS THE ERROR!");
  console.error("=========================================");
  
  if (data.id) {
    console.error("Job ID:", data.id);
  }
  
  if (data.type) {
    console.error("Job Type:", data.type);
  }
  
  if (data.message) {
    console.error("Error Message:", data.message);
  }
  
  if (data.error) {
    console.error("Error Details:", JSON.stringify(data.error, null, 2));
  }
  
  if (data.cause) {
    console.error("Error Cause:", JSON.stringify(data.cause, null, 2));
  }
  
  if (data.context) {
    console.error("Context:", JSON.stringify(data.context, null, 2));
  }
  
  console.error("\nFull error data:", JSON.stringify(data, null, 2));
  console.error("=========================================\n");

  logger.error("Batch job failed", {
    id: data.id,
    type: data.type,
    message: data.message,
    error: data.error,
    cause: data.cause,
    context: data.context,
  });
}

export const config: SubscriberConfig = {
  event: "batch_job.failed",
};

