import { Container, Text } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Addon Holdings",
}

type Params = {
  params: Promise<{
    countryCode: string
  }>
}

export default async function AboutPage(props: Params) {
  return (
    <div className="bg-neutral-100 min-h-[calc(100vh-80px)]">
      <div className="content-container py-16">
        <Container className="bg-white p-8 rounded-lg shadow-borders-base">
          <h1 className="text-3xl font-semibold text-neutral-950 mb-6">About Us</h1>
          
          <div className="space-y-6 text-neutral-700">
            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Who We Are</h2>
              <Text className="leading-relaxed">
                Addon Holdings is a leading B2B e-commerce platform specializing in high-quality products 
                for businesses. We are committed to providing exceptional service, competitive pricing, 
                and reliable supply chain solutions to help your business thrive.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Our Mission</h2>
              <Text className="leading-relaxed">
                To empower businesses with access to premium products at wholesale prices, 
                backed by excellent customer service and efficient logistics.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Why Choose Us</h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                <li>Competitive wholesale pricing for businesses</li>
                <li>Fast and reliable shipping</li>
                <li>Expert customer support team</li>
                <li>Wide selection of quality products</li>
                <li>Streamlined B2B ordering process</li>
              </ul>
            </section>
          </div>
        </Container>
      </div>
    </div>
  )
}

