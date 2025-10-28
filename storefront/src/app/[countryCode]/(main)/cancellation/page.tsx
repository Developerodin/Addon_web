import { Container, Text } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "Cancellation Policy for Addon Holdings",
}

type Params = {
  params: Promise<{
    countryCode: string
  }>
}

export default async function CancellationPage(props: Params) {
  return (
    <div className="bg-neutral-100 min-h-[calc(100vh-80px)]">
      <div className="content-container py-16">
        <Container className="bg-white p-8 rounded-lg shadow-borders-base">
          <h1 className="text-3xl font-semibold text-neutral-950 mb-6">Cancellation Policy</h1>
          
          <div className="space-y-6 text-neutral-700">
            <section>
              <Text className="leading-relaxed mb-4">
                There could be orders or parts of an order that we are unable to accept and may cancel 
                them. We reserve the right, at our sole discretion, to refuse or cancel any order or 
                part of an order for any reason.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Reasons for Order Cancellation</h2>
              <Text className="leading-relaxed">
                Reasons for your order cancellations may include limitations on quantities available for 
                purchase, mistakes or faults in product or pricing information, or problems identified by 
                our departments.
              </Text>
            </section>

            <section>
              <Text className="leading-relaxed">
                We may also require additional information or verification/s before accepting any order. 
                We will inform you if your entire order or any part of your order is cancelled or if 
                additional information is required to accept your order.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Refund Process</h2>
              <Text className="leading-relaxed">
                If your order is cancelled after your credit/debit card has been charged, the said amount 
                will be reverted in your card account.
              </Text>
              <Text className="leading-relaxed mt-4">
                We will seek authorization on your card for the aggregate amount of the order placed by you, 
                however, we may charge your card (capture) only with the amount corresponding to the actual 
                portion of the order that we are able/willing to fulfill, and any associated shipping charges/taxes 
                and levies etc.
              </Text>
              <Text className="leading-relaxed mt-4">
                Any surplus amount, for which we might have originally sought and received an authorization on 
                your card from your Card Issuer, if not captured by us in the time period stipulated by our 
                Merchant Banker, will not be captured/charged. If, however, the same is charged to your card/bank 
                account in error, we will refund it as soon as the same is realized by us or brought to our notice, 
                whichever is sooner.
              </Text>
              <Text className="leading-relaxed mt-4">
                Addonbooking.com & Addon Holdings Private Limited reserves the right to capture/charge your card 
                to the full or partially authorized amount for the concerned order.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Cancelling or Modifying Your Order</h2>
              <Text className="leading-relaxed">
                If you wish to cancel or modify your order, please send an email to{" "}
                <a href="mailto:addon_helpdesk@addbr.com" className="text-blue-600 hover:underline">
                  addon_helpdesk@addbr.com
                </a>
                . We will make every effort to accommodate your request. However, once an order has been submitted, 
                we cannot guarantee the purchase can be cancelled or modified. If you have received an incorrect product, 
                please contact us within 24 hours of receipt of your order. The customer agrees not to dispute the 
                decision made by Addonbooking.com & Addon Holdings Private Limited and accept Addonbooking.com & 
                Addon Holdings Private Limited decision regarding the cancellation.
              </Text>
            </section>
          </div>
        </Container>
      </div>
    </div>
  )
}

