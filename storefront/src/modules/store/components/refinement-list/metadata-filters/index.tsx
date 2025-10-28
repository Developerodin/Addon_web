"use client"

import { HttpTypes } from "@medusajs/types"
import { Container, Checkbox, Text } from "@medusajs/ui"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useMemo } from "react"
import {
  MetadataFilterOption,
  MetadataFilters,
  parseMetadataFilters,
  buildMetadataFilterParams,
} from "@/lib/util/metadata-filters"

type MetadataFiltersProps = {
  allProducts: HttpTypes.StoreProduct[]
}

const MetadataFiltersComponent = ({ allProducts }: MetadataFiltersProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Extract unique metadata options from all products
  const filterOptions = useMemo(() => {
    const optionMap = new Map<string, Map<string, number>>()

    allProducts.forEach((product) => {
      if (!product.metadata) return

      Object.entries(product.metadata).forEach(([key, value]) => {
        if (!key || !value) return

        // Normalize the value to a string for consistent handling
        const normalizedValue = 
          typeof value === 'string' 
            ? value 
            : Array.isArray(value)
              ? value.join(',')
              : String(value)

        if (!optionMap.has(key)) {
          optionMap.set(key, new Map())
        }

        const valueMap = optionMap.get(key)!
        const currentCount = valueMap.get(normalizedValue) || 0
        valueMap.set(normalizedValue, currentCount + 1)
      })
    })

    const result: Record<string, MetadataFilterOption[]> = {}

    optionMap.forEach((valueMap, key) => {
      result[key] = Array.from(valueMap.entries())
        .map(([value, count]) => ({
          key,
          value,
          count,
        }))
        .sort((a, b) => a.value.localeCompare(b.value))
    })

    return result
  }, [allProducts])

  const currentFilters = useMemo(
    () => parseMetadataFilters(searchParams),
    [searchParams]
  )

  const handleFilterChange = useCallback(
    (filterKey: string, value: string, checked: boolean) => {
      const updatedFilters = { ...currentFilters }

      if (!updatedFilters[filterKey]) {
        updatedFilters[filterKey] = []
      }

      if (checked) {
        // Add the value if it's not already in the array (case-insensitive)
        const exists = updatedFilters[filterKey].some(
          v => v.toLowerCase() === value.toLowerCase()
        )
        if (!exists) {
          updatedFilters[filterKey].push(value)
        }
      } else {
        // Remove the value (case-insensitive match)
        updatedFilters[filterKey] = updatedFilters[filterKey].filter(
          (v) => v.toLowerCase() !== value.toLowerCase()
        )
      }

      // Build new URL params
      const params = new URLSearchParams()

      // Preserve non-metadata params (like sortBy, page)
      searchParams.forEach((paramValue, paramKey) => {
        if (!paramKey.startsWith("metadata_")) {
          params.append(paramKey, paramValue)
        }
      })

      // Add metadata filters
      Object.entries(updatedFilters).forEach(([key, values]) => {
        values.forEach((val) => {
          params.append(`metadata_${key}`, val)
        })
      })

      // Reset to page 1 when filters change
      if (params.has("page")) {
        params.delete("page")
      }

      router.push(`${pathname}?${params.toString()}`)
    },
    [router, pathname, searchParams, currentFilters]
  )

  if (Object.keys(filterOptions).length === 0) {
    return null
  }

  return (
    <Container className="flex flex-col divide-y divide-neutral-200 p-0 w-full">
      {Object.entries(filterOptions).map(([key, options]) => (
        <div key={key} className="p-4 flex flex-col gap-3">
          <Text className="font-medium text-sm text-neutral-700 capitalize">
            {key.replace(/_/g, " ")}
          </Text>
          <div className="flex flex-col gap-2">
            {options.map((option) => {
              // Case-insensitive check for whether this option is currently selected
              const isChecked = currentFilters[key]?.some(
                filterValue => filterValue.toLowerCase() === option.value.toLowerCase()
              ) || false

              return (
                <label
                  key={`${key}-${option.value}`}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={(checked) =>
                      handleFilterChange(key, option.value, checked as boolean)
                    }
                  />
                  <Text className="text-sm text-neutral-600">{option.value}</Text>
                  <Text className="text-xs text-neutral-500">({option.count})</Text>
                </label>
              )
            })}
          </div>
        </div>
      ))}
    </Container>
  )
}

export default MetadataFiltersComponent

