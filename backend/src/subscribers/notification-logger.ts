import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

type NotificationData = {
  resource_type?: string;
  resource_id?: string;
  recipient?: string;
  channel?: string;
  template?: string;
  data?: Record<string, any>;
  metadata?: Record<string, any>;
  to?: string;
};

/**
 * Subscriber to capture and log all notifications, especially product import failures
 */
export default async function notificationLoggerHandler({
  event: { data },
  container,
}: SubscriberArgs<NotificationData>) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  const notificationData = data as NotificationData;

  // Check if this is a product import notification
  const title = notificationData.data?.title || "";
  const description = notificationData.data?.description || "";
  
  if (title.includes("Product import")) {
    // This is a product import notification
    console.error("\n=========================================");
    console.error("❌ PRODUCT IMPORT NOTIFICATION");
    console.error("=========================================");
    console.error("Title:", title);
    console.error("Description:", description);
    console.error("Channel:", notificationData.channel);
    console.error("Template:", notificationData.template);
    console.error("To:", notificationData.to || notificationData.recipient);
    console.error("Resource type:", notificationData.resource_type);
    console.error("Resource ID:", notificationData.resource_id);
    
    if (notificationData.data) {
      console.error("\nNotification Data:");
      console.error(JSON.stringify(notificationData.data, null, 2));
    }
    
    if (notificationData.metadata) {
      console.error("\nMetadata:");
      console.error(JSON.stringify(notificationData.metadata, null, 2));
    }
    
    console.error("\nFULL NOTIFICATION PAYLOAD:");
    console.error(JSON.stringify(notificationData, null, 2));
    console.error("\n=========================================\n");

    logger.error(
      `Product import notification sent - Title: ${title}, Channel: ${notificationData.channel || "unknown"}, Template: ${notificationData.template || "unknown"}`
    );
  } else {
    // Log other notifications more briefly
    console.log("\n=========================================");
    console.log("🔔 NOTIFICATION");
    console.log("=========================================");
    console.log("Channel:", notificationData.channel);
    console.log("Template:", notificationData.template);
    console.log("Data:", JSON.stringify(notificationData.data, null, 2));
    console.log("=========================================\n");
  }
}

export const config: SubscriberConfig = {
  event: "notification.created",
};

