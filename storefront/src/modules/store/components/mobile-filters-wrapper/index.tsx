"use client"

import MobileFilters from "../refinement-list/mobile-filters"
import { HttpTypes } from "@medusajs/types"
import { SortOptions } from "../refinement-list/sort-products"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useCallback } from "react"

type MobileFiltersWrapperProps = {
  sortBy: SortOptions
  allProducts: HttpTypes.StoreProduct[]
}

const MobileFiltersWrapper = ({ sortBy, allProducts }: MobileFiltersWrapperProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setQueryParams = useCallback(
    (name: string, value: SortOptions) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      router.push(`${pathname}?${params.toString()}`)
    },
    [router, pathname, searchParams]
  )

  return <MobileFilters sortBy={sortBy} setQueryParams={setQueryParams} allProducts={allProducts} />
}

export default MobileFiltersWrapper





