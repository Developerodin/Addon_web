import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

type ProductImportErrorData = {
  id: string;
  file_name?: string;
  error?: string;
  metadata?: Record<string, any>;
  description?: string;
};

/**
 * Subscriber to capture product import errors and log them to console
 */
export default async function productImportErrorHandler({
  event: { data },
  container,
}: SubscriberArgs<ProductImportErrorData>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);

  const errorData = data as ProductImportErrorData;

  console.error("\n=========================================");
  console.error("❌ PRODUCT IMPORT FAILED");
  console.error("=========================================");
  console.error("Import ID:", errorData.id);
  console.error("File name:", errorData.file_name || "Unknown");
  
  if (errorData.error) {
    console.error("Error details:", errorData.error);
  }
  
  if (errorData.description) {
    console.error("Description:", errorData.description);
  }
  
  if (errorData.metadata) {
    console.error("Full error data:", JSON.stringify(errorData, null, 2));
  }
  console.error("=========================================\n");

  logger.error(
    `Product import failed - ID: ${errorData.id}, File: ${errorData.file_name || "unknown"}, Error: ${errorData.error || errorData.description || "unknown"}`
  );
}

export const config: SubscriberConfig = {
  event: "import-product-batch.completed",
};

