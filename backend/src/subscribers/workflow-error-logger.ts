import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

type WorkflowErrorData = {
  workflow_id?: string;
  execution_id?: string;
  action?: string;
  mediator?: string;
  input?: any;
  error?: any;
  step?: string;
  message?: string;
  cause?: any;
};

/**
 * Subscriber to capture and log workflow errors
 */
export default async function workflowErrorLoggerHandler({
  event: { data },
  container,
}: SubscriberArgs<WorkflowErrorData>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  const errorData = data as WorkflowErrorData;

  console.error("\n=========================================");
  console.error("⚠️ WORKFLOW ERROR");
  console.error("=========================================");
  console.error("Workflow ID:", errorData.workflow_id);
  console.error("Execution ID:", errorData.execution_id);
  console.error("Action:", errorData.action);
  console.error("Step:", errorData.step);
  
  if (errorData.error) {
    console.error("Error:", errorData.error);
  }
  
  if (errorData.message) {
    console.error("Message:", errorData.message);
  }
  
  if (errorData.cause) {
    console.error("Cause:", errorData.cause);
  }
  
  console.error("Full error data:", JSON.stringify(errorData, null, 2));
  console.error("=========================================\n");

  logger.error(
    `Workflow error - Workflow ID: ${errorData.workflow_id || "unknown"}, Action: ${errorData.action || "unknown"}, Step: ${errorData.step || "unknown"}, Message: ${errorData.message || "none"}`
  );
}

export const config: SubscriberConfig = {
  event: "workflow.step.failed",
};

