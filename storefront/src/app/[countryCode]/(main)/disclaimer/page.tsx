import { Container, Text } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for Addon Holdings",
}

type Params = {
  params: Promise<{
    countryCode: string
  }>
}

export default async function DisclaimerPage(props: Params) {
  return (
    <div className="bg-neutral-100 min-h-[calc(100vh-80px)]">
      <div className="content-container py-16">
        <Container className="bg-white p-8 rounded-lg shadow-borders-base">
          <h1 className="text-3xl font-semibold text-neutral-950 mb-6">Disclaimer</h1>
          
          <div className="space-y-6 text-neutral-700">
            <section>
              <Text className="leading-relaxed mb-4">
                Addon Holdings Private Limited owns the copyright to all the contents of this website, 
                including the images and any other content. All trademarks and other intellectual property 
                are owned or licensed by us.
              </Text>
            </section>

            <section>
              <Text className="leading-relaxed mb-4">
                You may not copy, reproduce, distribute, republish, download, display, post or transmit 
                any part of the website without written consent from us.
              </Text>
            </section>

            <section>
              <Text className="leading-relaxed">
                In case you have any queries, please feel free to reach out to us on{" "}
                <a href="mailto:addon_helpdesk@addbr.com" className="text-blue-600 hover:underline">
                  addon_helpdesk@addbr.com
                </a>
              </Text>
            </section>
          </div>
        </Container>
      </div>
    </div>
  )
}

