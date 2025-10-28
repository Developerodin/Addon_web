import { Container, Text } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping Policy for Addon Holdings",
}

type Params = {
  params: Promise<{
    countryCode: string
  }>
}

export default async function ShippingPage(props: Params) {
  return (
    <div className="bg-neutral-100 min-h-[calc(100vh-80px)]">
      <div className="content-container py-16">
        <Container className="bg-white p-8 rounded-lg shadow-borders-base">
          <h1 className="text-3xl font-semibold text-neutral-950 mb-6">Shipping Policy</h1>
          
          <div className="space-y-6 text-neutral-700">
            <section>
              <Text className="leading-relaxed mb-4">
                All products are thoroughly packed to avoid any kind of damages.
              </Text>
            </section>

            <section>
              <Text className="leading-relaxed mb-4">
                Addonbooking.com & Addon Holdings Private Limited use only reputed courier services. 
                We will notify you via a shipment confirmation email after dispatching the product.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Delivery Delays & Responsibility</h2>
              <Text className="leading-relaxed">
                You understand that there are many instances such as unforeseen acts of nature beyond 
                control of us, force majeure including epidemics, pandemics, Government orders, lockdowns 
                or problems on the delivery company's end, which may cause a delay in delivery, for which 
                we are not responsible.
              </Text>
            </section>

            <section>
              <Text className="leading-relaxed">
                You agree that in the event a non-delivery or delayed delivery occurs on account of a 
                mistake by you (i.e. wrong name or address or any other incorrect or incomplete information), 
                you shall be liable for and shall compensate us for any extra cost incurred by us for 
                redelivery or return.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Transfer of Risk</h2>
              <Text className="leading-relaxed">
                The risk of goods purchased from us is transferred to you at time of delivery. Risk passes 
                therefore from us to the customer as soon as the customer has received the package.
              </Text>
            </section>
          </div>
        </Container>
      </div>
    </div>
  )
}

