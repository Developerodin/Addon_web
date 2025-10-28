import { Container, Text } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Addon Holdings",
}

type Params = {
  params: Promise<{
    countryCode: string
  }>
}

export default async function TermsPage(props: Params) {
  return (
    <div className="bg-neutral-100 min-h-[calc(100vh-80px)]">
      <div className="content-container py-16">
        <Container className="bg-white p-8 rounded-lg shadow-borders-base">
          <h1 className="text-3xl font-semibold text-neutral-950 mb-6">Terms & Conditions</h1>
          
          <div className="space-y-6 text-neutral-700">
            <section>
              <Text className="leading-relaxed mb-6">
                This website is owned and operated by Addon Holdings Private Limited. In using this website 
                and thereby the service of Addon Holdings Private Limited, you are deemed to have accepted 
                the Terms and Conditions listed below or as may be revised from time to time, which is, 
                for an indefinite period and you understand and agree that you are bound by such terms and 
                conditions. We reserve the right to change these terms & conditions from time to time 
                without any obligation to inform you and it is your responsibility to look through them 
                as frequently as possible. All rights, including copyright, on this website are owned by 
                Addon Holdings Private Limited. Any use of this website or its contents, including copying 
                or storing it in whole or part is prohibited without the permission of Addon Holdings 
                Private Limited. In case you have any queries, please feel free to reach out to us on{" "}
                <a href="mailto:addon_helpdesk@addbr.com" className="text-blue-600 hover:underline">
                  addon_helpdesk@addbr.com
                </a>
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Legal Capacity</h2>
              <Text className="leading-relaxed">
                By placing an order on the website of addonbooking.com, you represent that you are over 
                the age of 18. We reserve the right to only accept orders from those over 18 years.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Personal Information</h2>
              <Text className="leading-relaxed">
                As part of the registration process, you may be asked to select a username and password. 
                You will be responsible for the confidentiality and use of your username and password and 
                agree not to transfer or resell your use of or access to the site to any third party. You 
                will also need to provide additional information as asked, which should be true, accurate, 
                current, and complete in all respects. You agree to maintain and update your information 
                to keep it accurate, current, and complete, as that is essential for the effective processing 
                of your orders. The personal information you enter during a purchase is used for order processing 
                and promotion purposes and will be disclosed to third parties involved in the processing of 
                your order or promotion. In addition to personal information, we may also log IP address and 
                other information described in detail in the Privacy Policy. By placing order with addonbooking.com, 
                you authorize Addon Holdings Private Limited to contact you for any purposes related to your order/account.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Products</h2>
              <Text className="leading-relaxed">
                By purchasing a product from addonbooking.com, a valid purchase agreement between Addon Holdings 
                Private Limited and the customer has been entered. This agreement is mutually binding and cannot 
                be changed online. Addon Holdings will not be liable for any mistakes made by the user in 
                placing an order.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Pricing & Payments</h2>
              <Text className="leading-relaxed">
                The prices of the Products are subject to change without any prior notice, and at the sole 
                discretion of Addon Holdings. In respect of payment for any product/s that are ordered on 
                the website, you will have the option to make such payments by either credit card, debit card, 
                or net banking.
              </Text>
              <Text className="leading-relaxed mt-4">
                Upon initiating a transaction for purchase of any products through credit card or debit card 
                or net banking, you will be directed to a secure payment gateway for making payment. In this 
                regard, we may enter into an agreement with third-party payment gateway aggregators, and nodal 
                banks for the purpose of collection, remittance and retention of the payments made by you. In 
                respect of the payment mechanisms offered on the website, and your use thereof, we shall not be 
                liable in any manner for any loss or damage that may be caused to you on account of any issues 
                arising out of the transaction and/or the payment mechanism, including any interruption or 
                cancellation thereof, for any reasons whatsoever.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Returns</h2>
              <Text className="leading-relaxed">
                In case of any returns due to product related concerns, kindly follow the process as per our 
                agreement/understanding.
              </Text>
              <Text className="leading-relaxed mt-4">
                The website maintains a strict no return policy. Accordingly, we shall not accept any return 
                requests from users in respect of any products that are sold and delivered.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Limitation of Liability</h2>
              <Text className="leading-relaxed">
                In no event shall addonbooking.com & Addon Holdings Private Limited (or any of its directors, 
                officers, employees, agents, suppliers, affiliates or anyone else creating, producing or 
                distributing the products) be liable for any direct, indirect, incidental, special or consequential 
                damages, or damages in any way attributable to or in respect of loss of profits, revenue, data or 
                use, incurred by you whether in an action in contract or tort, arising from the use of or inability 
                to use the website, products purchased here from or elsewhere, or that results from mistakes, 
                omissions, interruptions, deletion of files, errors, defects, delays in operation, or transmission 
                or any failure of performance, whether or not limited to acts of God, communication failure, theft, 
                destruction or unauthorized access to records, programs or the website, whether or not addonbooking.com 
                & Addon Holdings Private Limited has been advised of the possibility.
              </Text>
              <Text className="leading-relaxed mt-4">
                Notwithstanding the above, the user's exclusive remedy for all damages, losses and causes of 
                actions whether in contract or tort, including negligence or otherwise, shall not exceed the cost 
                of the product procured from us.
              </Text>
              <Text className="leading-relaxed mt-4">
                You agree to defend, indemnify and hold harmless addonbooking.com & Addon Holdings Private Limited, 
                our directors, officers, employees, suppliers and affiliates from any claim, liability or demand, 
                including costs and expenses, arising in respect hereof or from your actions or use of this website 
                or purchase of products from addonbooking.com & Addon Holdings Private Limited, breach of your 
                warranties, representations or undertakings or non-fulfilment of your obligations herein or arising 
                out of your violation of applicable laws, including intellectual property rights.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Links to Third Party Sites</h2>
              <Text className="leading-relaxed">
                External third-party links to and from this website must be made in accordance with linking policy 
                contained herein, and by using this website you agree to be bound by the same. This website may contain 
                links to third party sites, all of which provides access to other Internet sites. Access to these 
                links is at the user's own risk, and addonbooking.com & Addon Holdings Private Limited is not 
                responsible for the accuracy or reliability of any information, data, opinions, advice or statements 
                made on these sites. addonbooking.com & Addon Holdings Private Limited provides these links merely 
                as a convenience and the inclusion of such links does not imply an insulation from the possible risks 
                attached with usage of any of the third-party sites. Once you have used the third-party links to leave 
                our site, you should note that we do not have any control over that other website, and we accept no 
                responsibility for them or for any loss or damage that may arise from your use of them.
              </Text>
              <Text className="leading-relaxed mt-4">
                You may not use any intellectual property possessed by us, to link to this website without our express 
                written permission.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Intellectual Property</h2>
              <Text className="leading-relaxed">
                Copyright 2021. All rights reserved.
              </Text>
              <Text className="leading-relaxed mt-4">
                "Addon Booking", Addonbooking.com, Addon Holdings Private Limited and the names of the products sold 
                by addonbooking.com are copyrights, service marks or trademarks, as applicable, of Addon Holdings 
                Private Limited or licensed by us in India and other countries. Users of this website are prohibited 
                from using any copyrights, service marks or trademarks contained on this website without the prior 
                written consent of Addon Holdings Private Limited.
              </Text>
              <Text className="leading-relaxed mt-4">
                Unless otherwise mentioned, the text, layout, appearance, photographs, design, look, and graphics 
                contained on this website and on the products sold by addonbooking.com are owned by Addon Holdings 
                Private Limited. This website or any portion thereof this website may not be reproduced, redistributed, 
                or published in any form, or by any means, or stored in any computer, without prior express written 
                permission from Addon Holdings Private Limited.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Legal</h2>
              <Text className="leading-relaxed">
                You may not use the Site for any of the following purposes: disseminating any unlawful, harassing, 
                libelous, abusive, threatening, harmful, vulgar, obscene, or otherwise objectionable material; 
                transmitting material that encourages conduct that constitutes a criminal offence or results in civil 
                liability or otherwise breaches any applicable laws, regulations or code of practice; gaining unauthorized 
                access to other computer systems; interfering with any other person's use or enjoyment of the Site; 
                breaching any applicable laws; interfering or disrupting networks or web sites connected to the Site; 
                making, transmitting or storing electronic copies of materials protected by copyright without the 
                permission of the owner. Addonbooking.com & Addon Holdings Private Limited reserves the right to take 
                appropriate legal action against any user for any illegal or immoral acts on or involving the use of 
                its Site.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">General Disclaimer</h2>
              <Text className="leading-relaxed">
                Although addonbooking.com & Addon Holdings Private Limited strives to provide information that is useful 
                and accurate, a possibility exists that the contents of this website could include inaccuracies or errors. 
                Addonbooking.com & Addon Holdings Private Limited makes no guarantees or warranties or assurances as to 
                the completeness or correctness of any information on this website or in relation to the achievement of 
                any objectives. The information provided on this website is provided "as-is" and all warranties, express 
                or implied, are disclaimed. Addonbooking.com & Addon Holdings Private Limited assumes no liability or 
                responsibility for any errors or omissions in the content contained on this site.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Governing Law & Jurisdiction</h2>
              <Text className="leading-relaxed">
                All disputes in connection with these Terms of Use shall be governed and construed in accordance with 
                Indian laws and subject to the below are subject to the exclusive jurisdiction of competent Courts at 
                Mumbai only. Any dispute arising out of or in relation to any terms of these Terms of Use shall be 
                referred to a sole independent arbitrator appointed by Addon Holdings Private Limited and his/her decision 
                shall be final and binding on all parties. The arbitration shall be in accordance with the Arbitration 
                and Conciliation Act, 1996 (as amended from time to time). The arbitration shall be held in Mumbai.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Contact Us</h2>
              <Text className="leading-relaxed">
                Should you have any queries regarding our website's policies or terms, please write to us at{" "}
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

