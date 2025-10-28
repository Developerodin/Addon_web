"use client"

import { MagnifyingGlassMini, XMarkMini } from "@medusajs/icons"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/store?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(e)
    }
  }

  const handleClear = () => {
    setSearchQuery("")
    router.push("/store")
  }

  if (!isClient) {
    return (
      <div className="relative mr-2 hidden small:inline-flex">
        <input
          disabled
          type="text"
          placeholder="Search for products"
          className="bg-gray-100 text-zinc-900 px-4 py-2 rounded-full pr-10 shadow-borders-base hidden small:inline-block"
        />
      </div>
    )
  }

  return (
    <div className="relative mr-2 hidden small:inline-flex">
      <form onSubmit={handleSearch} className="relative w-full">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for products"
          className="bg-gray-100 text-zinc-900 px-4 py-2 rounded-full pr-16 shadow-borders-base hidden small:inline-block focus:outline-none focus:ring-2 focus:ring-neutral-400 w-full"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-1">
          {searchQuery && (
            <button
              type="button"
              onClick={handleClear}
              className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Clear search"
            >
              <XMarkMini className="w-3 h-3 text-neutral-500" />
            </button>
          )}
          <button
            type="submit"
            className="flex items-center justify-center w-6 h-6"
            aria-label="Search"
          >
            <MagnifyingGlassMini className="w-4 h-4 text-neutral-500" />
          </button>
        </div>
      </form>
    </div>
  )
}

