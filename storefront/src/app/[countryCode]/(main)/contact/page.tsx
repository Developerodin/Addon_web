"use client"

import { Container, Text, Button, Input, Textarea } from "@medusajs/ui"
import { useState } from "react"

type Params = {
  params: Promise<{
    countryCode: string
  }>
}

export default function ContactPage(props: Params) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    setTimeout(() => {
      setSubmitStatus("success")
      setIsSubmitting(false)
      setFormData({ name: "", email: "", message: "" })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }, 1000)
  }

  return (
    <div className="bg-neutral-100 min-h-[calc(100vh-80px)]">
      <div className="content-container py-16">
        <Container className="bg-white p-8 rounded-lg shadow-borders-base">
          <h1 className="text-3xl font-semibold text-neutral-950 mb-6">Contact Us</h1>
          
          <div className="space-y-8">
            {/* Contact Information Section */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Contact Information</h2>
              <Text className="leading-relaxed mb-4">
                In case of any queries, please feel free to reach out to us at 
                <a href="mailto:addon_helpdesk@addbr.com" className="text-blue-600 hover:underline ml-1">
                  addon_helpdesk@addbr.com
                </a>
              </Text>
              
              <div className="bg-neutral-50 p-4 rounded-lg space-y-2 text-neutral-700">
                <p className="font-semibold text-neutral-950">Office Address:</p>
                <Text className="leading-relaxed">
                  B7/G, Asmeeta Textile Park, Near Kon Toll Naka, Kon Village, 
                  Addl Kalyan Bhiwandi Industrial Area, Taluka- Bhiwandi, 
                  District- Thane-421302. Maharashtra. India
                </Text>
                
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-neutral-200">
                  <p>
                    <strong className="text-neutral-950">Email:</strong>{" "}
                    <a href="mailto:addon_helpdesk@addbr.com" className="text-blue-600 hover:underline">
                      addon_helpdesk@addbr.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-neutral-950">Phone:</strong>{" "}
                    <a href="tel:+91912240140386" className="text-blue-600 hover:underline">
                      +91 91224 01403 86
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Form Section */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-950 mb-4">Enquire Now</h2>
              
              {submitStatus === "success" && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <Text className="text-green-700">
                    Thank you for your inquiry! We'll get back to you soon.
                  </Text>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <Text className="text-red-700">
                    Something went wrong. Please try again later.
                  </Text>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-950 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-950 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="Enter your email"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-950 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Enter your message..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </section>
          </div>
        </Container>
      </div>
    </div>
  )
}

