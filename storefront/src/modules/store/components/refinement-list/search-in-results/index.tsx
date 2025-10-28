"use client"

import { MagnifyingGlassMini } from "@medusajs/icons"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useState, useCallback } from "react"

const SearchInResults = ({ listName }: { listName?: string }) => {
  const placeholder = listName ? `Search in ${listName}` : "Search in products"
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [searchValue, setSearchValue] = useState(searchParams.get("q") || "")

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      if (value) {
        params.set(name, value)
      } else {
        params.delete(name)
      }
      params.delete("page") // Reset to page 1 when searching
      return params.toString()
    },
    [searchParams]
  )

  const handleSearch = (value: string) => {
    const query = createQueryString("q", value)
    router.push(`${pathname}?${query}`)
  }

  return (
    <div className="group relative text-sm focus-within:border-neutral-500 rounded-t-lg focus-within:outline focus-within:outline-neutral-500">
      <input
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
          handleSearch(e.target.value)
        }}
        className="w-full p-2 pr-8 focus:outline-none rounded-lg"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <MagnifyingGlassMini className="w-4 h-4 text-neutral-500" />
      </div>
    </div>
  )
}

export default SearchInResults
