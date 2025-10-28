"use client"

import { Github } from "@medusajs/icons"
import { Heading } from "@medusajs/ui"
import Button from "@/modules/common/components/button"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-neutral-100">
      <Image
        src="https://i.etsystatic.com/iap/80051d/7309390701/iap_1200x1200.7309390701_g6xqv05e.jpg?version=0"
        alt="Hero background"
        fill
        quality={100}
        priority
        className="object-cover"
      />
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <p className="text-white text-xs uppercase">
            Quality essentials for everyday comfort
          </p>

          <Heading
            level="h1"
            className="text-4xl small:text-6xl leading-normal small:leading-tight text-white font-normal mt-10 mb-5"
          >
            <span className="inline-block">Addon</span>{" "}
            <span className="inline-block mt-2 small:mt-0">Holdings</span>
          </Heading>

          <p className="leading-10 text-white font-normal text-lg">
            Premium handkerchiefs, socks, and towels for your comfort
          </p>
        </span>
        <a
          href="/store"
        >
          <Button variant="secondary" className="rounded-2xl">
            Shop Now
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
