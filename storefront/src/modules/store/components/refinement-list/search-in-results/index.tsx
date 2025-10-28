"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useState, useCallback } from "react"

const MagnifyingGlassIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
)

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
        <MagnifyingGlassIcon className="w-4 h-4 text-neutral-500" />
      </div>
    </div>
  )
}

export default SearchInResults
