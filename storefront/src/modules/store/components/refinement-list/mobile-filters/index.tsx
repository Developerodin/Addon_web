"use client"

import { HttpTypes } from "@medusajs/types"
import { useState, useEffect } from "react"
import { Container } from "@medusajs/ui"
import SortProducts, { SortOptions } from "../sort-products"
import MetadataFiltersClient from "../metadata-filters"

const FunnelSVG = ({ className }: { className?: string }) => (
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
      d="M12 3c2.755 0 5.455.232 8.083.678a2.25 2.25 0 01.841 3.866c-.03.14-.034.28-.037.42-.026 2.325-.027 4.646.004 6.974a2.25 2.25 0 01-.841 3.885c-.028.138-.031.279-.035.42a48.98 48.98 0 00-.037 5.868 2.25 2.25 0 01-1.385 1.935c-.163.078-.333.142-.509.19-.174.047-.35.087-.527.12a48.91 48.91 0 00-3.278 0c-.177-.033-.353-.073-.527-.12-.176-.048-.346-.112-.509-.19a2.25 2.25 0 01-1.385-1.935c-.001-.9-.002-1.797.002-2.697.005-.141.008-.283.035-.42.21-1.683.746-3.046 1.496-4.179a2.25 2.25 0 01.841-1.365c.14-.03.28-.034.42-.037C9.455 6.232 7.255 6 4.5 6c-2.755 0-4.955.232-6.583.678-.14.003-.28.008-.42.037a2.25 2.25 0 00-.841 1.365c-.75 1.133-1.286 2.496-1.496 4.179-.027.137-.03.279-.035.42a48.98 48.98 0 00.037 5.868c.048.163.112.346.19.509.047.174.087.35.12.527.03.548.056 1.098.08 1.647-.018.12-.022.24-.022.363v.017z"
    />
  </svg>
)

const XMarkSVG = ({ className }: { className?: string }) => (
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

type MobileFiltersProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  allProducts: HttpTypes.StoreProduct[]
}

const MobileFilters = ({ sortBy, setQueryParams, allProducts }: MobileFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Prevent body scroll when filter drawer is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Filter Button - Visible on small devices */}
      <button
        className="small:hidden flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors text-sm font-medium"
        onClick={() => setIsOpen(true)}
        aria-label="Open filters"
      >
        <FunnelSVG className="w-5 h-5" />
        Filter
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 small:hidden"
          onClick={closeDrawer}
        />
      )}

      {/* Filter Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out small:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200 flex-shrink-0">
            <h2 className="text-lg font-semibold text-zinc-900">Filters</h2>
            <button
              onClick={closeDrawer}
              className="p-2 hover:bg-neutral-100 rounded-md transition-colors"
              aria-label="Close filters"
            >
              <XMarkSVG className="w-6 h-6 text-zinc-900" />
            </button>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-3">
              {/* Sort Products */}
              <Container className="flex flex-col divide-y divide-neutral-200 p-0 w-full">
                <SortProducts
                  sortBy={sortBy}
                  setQueryParams={setQueryParams}
                />
              </Container>

              {/* Metadata Filters */}
              {allProducts && allProducts.length > 0 && (
                <MetadataFiltersClient allProducts={allProducts} />
              )}
            </div>
          </div>

          {/* Footer with Apply Button */}
          <div className="border-t border-neutral-200 p-4 flex-shrink-0">
            <button
              onClick={closeDrawer}
              className="w-full px-4 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileFilters

