import { Container, Text } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Addon Holdings",
}

type Params = {
  params: Promise<{
    countryCode: string
  }>
}

export default async function PrivacyPage(props: Params) {
  return (
    <div className="bg-neutral-100 min-h-[calc(100vh-80px)]">
      <div className="content-container py-16">
        <Container className="bg-white p-8 rounded-lg shadow-borders-base">
          <h1 className="text-3xl font-semibold text-neutral-950 mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-neutral-700">
            <section>
              <Text className="leading-relaxed mb-6">
                This Privacy Policy ("Policy") applies to the website www.addonbooking.com. This Policy describes 
                how Addonbooking.com & Addon Holdings Private Limited collects, uses, stores, and discloses personal 
                information of customers through our website and online services, and other websites and online 
                services that link to this website and/ or this policy (collectively, the "Sites"), through our 
                programs ("Services").
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">What Type of Information Does Addonbooking.com & Addon Holdings Private Limited Collect?</h2>
              <Text className="leading-relaxed">
                Personal Information that may be collected by Addonbooking.com & Addon Holdings Private Limited may include:
              </Text>
              <ul className="list-disc list-inside space-y-2 mt-4 text-neutral-700">
                <li>Your first and/or last name, username, password, email address, postal address, phone number, date of birth, gender, demographics information, and any other information you choose to share with us.</li>
                <li>Financial account information, such as credit card details, electronic wallet details and other payment information.</li>
              </ul>
              <Text className="leading-relaxed mt-4">
                We may also collect information about you such as:
              </Text>
              <ul className="list-disc list-inside space-y-2 mt-4 text-neutral-700">
                <li>If you create an account - your username, password, mobile phone number.</li>
                <li>If you buy our products - details of your purchases including what you buy, where you buy from, how frequently you buy.</li>
                <li>If you take a survey or interact with us in various other ways - demographics information and information about subjects shared by you.</li>
              </ul>
              <Text className="leading-relaxed mt-4">
                We may automatically collect website use information when you visit our Sites. This information may include 
                information about your Internet service provider, domain name, operating system, browser type, Internet 
                protocol (IP) address, access times, referring websites, if any, web pages you request, and the time and 
                date of those requests. Our collection of website use information may involve the use of cookies and web beacons. 
                Cookies are small data files stored on your hard drive by a website. Among other things, cookies help us 
                improve our Sites and your experience. We use cookies to see which areas and features are popular and to count 
                visits to our Sites. Web beacons are electronic images that may be used on our Sites or in our emails. We use 
                web beacons to deliver cookies, count visits, understand usage and campaign effectiveness and to tell if an email 
                has been opened and acted upon. We may also use local shared objects (flash cookies).
              </Text>
              <Text className="leading-relaxed mt-4">
                We may combine information we collect about you with information we receive from third parties. We may also 
                collect and share aggregated data or anonymized data that does not directly identify you. All such information 
                shall be collected by us and retained on our servers.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">How Does Addonbooking.com & Addon Holdings Private Limited Use Personal Information About You?</h2>
              <Text className="leading-relaxed">
                We may use information about you for purposes described in this Policy or disclosed to you on our Site or 
                with our Services. For example, we may use information about you to:
              </Text>
              <ul className="list-disc list-inside space-y-2 mt-4 text-neutral-700">
                <li>Process and manage your purchase and use of our products and services, including your accounts and program participation.</li>
                <li>Respond to your customer service inquiries, post your comments or statements on any blog or other online forum maintained on our Sites, or take other actions in response to your inquiries or other Site activities.</li>
                <li>Create personalized promotions by combining your personal information with non-personal information about you, such as the amounts and types of purchases you make or any benefits you receive through our programs.</li>
                <li>Communicate with you about your orders or purchases, your services, accounts and program participation, and your requests for information.</li>
                <li>Communicate with you about our brands, products, events, or other promotional purposes, including co-branded offers and affiliate and partner offers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Does Addonbooking.com & Addon Holdings Private Limited Share Personal Information with Third Parties?</h2>
              <Text className="leading-relaxed">
                Addonbooking.com & Addon Holdings Private Limited may share your personal information in limited ways, such as:
              </Text>
              <ul className="list-disc list-inside space-y-2 mt-4 text-neutral-700">
                <li>We may share the information with companies that provide support services to us (including credit card processors, mailing houses, courier companies, customer relationship management agency or website hosts or data managers), that help us market and/or distribute our products and services (such as warehousing, delivery companies, outsourced invoicing, etc.) and Addonbooking.com & Addon Holdings Private Limited or its affiliates. These entities may use information about you to perform their functions on our behalf.</li>
                <li>We may disclose specific information (i) upon lawful request, in response to legal process, and when required to comply with laws, (ii) to enforce our agreements, corporate policies, and terms of use, or (iii) to protect the rights, property or safety of Addonbooking.com & Addon Holdings Private Limited, our employees, agents, customers, and others.</li>
                <li>If you participate in any blog or other online forum on our Sites, any personal information that you post on our Sites may be shared with other forum participants and Site visitors.</li>
                <li>In the event of a merger, acquisition, financing, or sale of assets or any other situation involving the transfer of some or all our business assets, we may disclose personal information to those involved in the negotiation or transfer.</li>
                <li>Further, personal data or information may be shared without obtaining prior consent from the provider of information, with Government agencies mandated under the law to obtain such information for the purposes of verification of identity, or for prevention, detection, investigation including cyber incidents, prosecution and punishment of offences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">What Choices Does Addonbooking.com & Addon Holdings Private Limited Offer About Personal Information?</h2>
              <Text className="leading-relaxed">
                Addonbooking.com & Addon Holdings Private Limited offers choices for you to request to update or change your 
                personal information. You can send a request to our email{" "}
                <a href="mailto:addon_helpdesk@addbr.com" className="text-blue-600 hover:underline">
                  addon_helpdesk@addbr.com
                </a>
                . If you opt out of receiving promotional communications from us, we may still send you non-promotional 
                communications such as emails about your accounts or our ongoing transactions. You can usually choose to 
                set your browser to warn you when a cookie is being sent or to remove or reject cookies. Each browser is 
                a little different, so look at your browser 'help' menu to learn the correct way to modify your cookie 
                settings. If you choose to remove or reject cookies, it will affect many features or Services on our Sites. 
                Further, you can choose to withdraw your consent to the use/ disclosure/ retention of such information. In 
                such a case, however, Addonbooking.com & Addon Holdings Private Limited may at its discretion choose not 
                to provide the goods or services, for the provision of which the consent to use the information was sought.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">How is Personal Information Secured?</h2>
              <Text className="leading-relaxed">
                Addonbooking.com & Addon Holdings Private Limited takes reasonable security measures and procedures, and as 
                specified by Information Technology Act or any other applicable law, to maintain appropriate physical, 
                technical and administrative security to help prevent loss, misuse, or unauthorized access, disclosure or 
                modification of sensitive personal information. While we take these reasonable efforts to safeguard your 
                personal information, you acknowledge and agree that no system or transmission of data over the Internet 
                or any other public network can be guaranteed to be 100% secure.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Use by Minors</h2>
              <Text className="leading-relaxed">
                We do not intend for our website or online services to be used by anyone under the age of 18 as per Indian Law. 
                If you are a parent or guardian and believe we may have collected information about a child, please contact us.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">How We Protect Your Information?</h2>
              <Text className="leading-relaxed">
                Addonbooking.com & Addon Holdings Private Limited protects your information using technical, physical, and 
                administrative security measures to reduce the risk of loss, misuse, unauthorized access, disclosure or 
                modification of your information. Some of our safeguards include firewalls, data encryption, physical access 
                controls, and administrative informational controls. When you transmit overly sensitive information (such as 
                a credit card number) through our website, we encrypt the transmission of that information using the Secure 
                Sockets Layer (SSL) protocol. While we have employed security technologies and procedures to assist safeguarding 
                your personal information, no system or network can be guaranteed to be 100% secure. Notwithstanding anything 
                contained herein, we reserve the right to store all personal information for at least 7 years after the financial 
                year when the order is placed due to book-keeping requirements or such longer period as may be legally permitted, 
                in order to protect our interests and in order to facilitate a renewed trade and for the investigation of fraud.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Governing Law & Jurisdiction</h2>
              <Text className="leading-relaxed">
                All disputes in connection with the Privacy Policy shall be governed and construed in accordance with Indian laws 
                and subject to the below, are subject to the exclusive jurisdiction of competent Courts at Mumbai only. Any dispute 
                arising out of or in relation to any terms of this Policy shall be referred to a sole independent arbitrator 
                appointed by Addon Holdings Private Limited and his/her decision shall be final and binding on all parties. The 
                arbitration shall be in accordance with the Arbitration and Conciliation Act, 1996 (as amended from time to time). 
                The arbitration shall be held in Mumbai.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Privacy Policy Updates</h2>
              <Text className="leading-relaxed">
                We reserve the right to modify or amend this privacy policy from time to time at our sole discretion. When we do so, 
                we will post the new privacy policy on this page. We encourage you to check the date of our privacy policy when you 
                visit this Site for any updates or changes. By agreeing to the Terms of Use of this website, which incorporate this 
                Policy, you hereby consent to the collection, receiving, possessing, storing, dealing, sharing and/or handling of your 
                personal information by Addonbooking.com & Addon Holdings Private Limited in the manner and to the extent provided 
                under this Policy, as may be modified by Addonbooking.com & Addon Holdings Private Limited from time to time.
              </Text>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Contact Us</h2>
              <Text className="leading-relaxed">
                If you have any questions regarding this Privacy Policy, please contact us at{" "}
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

