"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import SortProducts, { SortOptions } from "./sort-products"
import { Container } from "@medusajs/ui"
import SearchInResults from "./search-in-results"
import { HttpTypes } from "@medusajs/types"
import CategoryList from "./category-list"
import MetadataFiltersClient from "./metadata-filters"

type RefinementListProps = {
  sortBy: SortOptions
  listName?: string
  "data-testid"?: string
  categories?: HttpTypes.StoreProductCategory[]
  currentCategory?: HttpTypes.StoreProductCategory
  allProducts?: HttpTypes.StoreProduct[]
}

const RefinementList = ({
  sortBy,
  listName,
  "data-testid": dataTestId,
  categories,
  currentCategory,
  allProducts,
}: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  return (
    <>
      {/* Desktop View - All filters visible */}
      <div className="hidden small:flex flex-col divide-neutral-200 small:w-1/5 w-full gap-3">
        <Container className="flex flex-col divide-y divide-neutral-200 p-0 w-full">
          <SearchInResults listName={listName} />
          <SortProducts
            sortBy={sortBy}
            setQueryParams={setQueryParams}
            data-testid={dataTestId}
          />
        </Container>
        {categories && (
          <CategoryList
            categories={categories}
            currentCategory={currentCategory}
          />
        )}
        {allProducts && allProducts.length > 0 && (
          <MetadataFiltersClient allProducts={allProducts} />
        )}
      </div>

      {/* Mobile View - Search and categories visible */}
      <div className="flex small:hidden flex-col divide-neutral-200 w-full gap-3">
        <SearchInResults listName={listName} />
        {categories && (
          <CategoryList
            categories={categories}
            currentCategory={currentCategory}
          />
        )}
      </div>
    </>
  )
}

export default RefinementList
