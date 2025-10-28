import { HttpTypes } from "@medusajs/types"

export type MetadataFilterOption = {
  key: string
  value: string
  count: number
}

export type MetadataFilters = Record<string, string[]>

/**
 * Extract unique metadata filter options from products
 */
export const extractMetadataFilters = (
  products: HttpTypes.StoreProduct[]
): Record<string, MetadataFilterOption[]> => {
  const filterMap = new Map<string, Map<string, number>>()

  products.forEach((product) => {
    if (!product.metadata) return

    Object.entries(product.metadata).forEach(([key, value]) => {
      if (!key || !value) return

      if (!filterMap.has(key)) {
        filterMap.set(key, new Map())
      }

      const valueMap = filterMap.get(key)!
      const currentCount = valueMap.get(value) || 0
      valueMap.set(value, currentCount + 1)
    })
  })

  const result: Record<string, MetadataFilterOption[]> = {}

  filterMap.forEach((valueMap, key) => {
    result[key] = Array.from(valueMap.entries())
      .map(([value, count]) => ({
        key,
        value,
        count,
      }))
      .sort((a, b) => a.value.localeCompare(b.value))
  })

  return result
}

/**
 * Filter products based on metadata filters
 */
export const filterProductsByMetadata = (
  products: HttpTypes.StoreProduct[],
  filters: MetadataFilters
): HttpTypes.StoreProduct[] => {
  if (Object.keys(filters).length === 0) {
    return products
  }

  console.log('filterProductsByMetadata called with filters:', filters)

  return products.filter((product) => {
    if (!product.metadata) {
      console.log(`Product ${product.id} has no metadata`)
      return false
    }

    const matches = Object.entries(filters).every(([filterKey, filterValues]) => {
      if (filterValues.length === 0) return true

      const productValue = product.metadata?.[filterKey]
      
      if (!productValue) {
        console.log(`Product ${product.id} doesn't have metadata key: ${filterKey}`)
        return false
      }

      // Handle case where metadata value might be an object or array
      const normalizedProductValue = 
        typeof productValue === 'string' 
          ? productValue 
          : Array.isArray(productValue)
            ? productValue.join(',')
            : String(productValue)

      // Check if any of the filter values match (case-insensitive)
      const match = filterValues.some(filterValue => 
        normalizedProductValue.toLowerCase() === filterValue.toLowerCase()
      )

      if (!match) {
        console.log(`Product ${product.id} - ${filterKey}: ${normalizedProductValue} doesn't match ${filterValues.join(',')}`)
      }

      return match
    })

    if (matches) {
      console.log(`Product ${product.id} matches all filters`)
    }

    return matches
  })
}

/**
 * Parse metadata filters from URL search params
 */
export const parseMetadataFilters = (
  searchParams: URLSearchParams | Record<string, string | string[] | undefined>
): MetadataFilters => {
  const filters: MetadataFilters = {}

  if (searchParams instanceof URLSearchParams) {
    searchParams.forEach((value, key) => {
      if (key.startsWith("metadata_")) {
        const filterKey = key.replace("metadata_", "")
        if (!filters[filterKey]) {
          filters[filterKey] = []
        }
        filters[filterKey].push(value)
      }
    })
  } else {
    // Handle object-based searchParams (from Next.js 15)
    Object.entries(searchParams).forEach(([key, value]) => {
      if (key.startsWith("metadata_")) {
        const filterKey = key.replace("metadata_", "")
        if (!filters[filterKey]) {
          filters[filterKey] = []
        }
        if (typeof value === 'string') {
          filters[filterKey].push(value)
        } else if (Array.isArray(value)) {
          filters[filterKey].push(...value)
        }
      }
    })
  }

  return filters
}

/**
 * Build URL search params with metadata filters
 */
export const buildMetadataFilterParams = (
  currentFilters: MetadataFilters,
  newFilter: { key: string; value: string; checked: boolean }
): string => {
  const params = new URLSearchParams()

  const updatedFilters = { ...currentFilters }

  if (!updatedFilters[newFilter.key]) {
    updatedFilters[newFilter.key] = []
  }

  if (newFilter.checked) {
    if (!updatedFilters[newFilter.key].includes(newFilter.value)) {
      updatedFilters[newFilter.key].push(newFilter.value)
    }
  } else {
    updatedFilters[newFilter.key] = updatedFilters[newFilter.key].filter(
      (v) => v !== newFilter.value
    )
  }

  Object.entries(updatedFilters).forEach(([key, values]) => {
    values.forEach((value) => {
      params.append(`metadata_${key}`, value)
    })
  })

  return params.toString()
}

