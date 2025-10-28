import { listProductsWithSort, listProducts } from "@/lib/data/products"
import { getRegion } from "@/lib/data/regions"
import ProductPreview from "@/modules/products/components/product-preview"
import { Pagination } from "@/modules/store/components/pagination"
import { SortOptions } from "@/modules/store/components/refinement-list/sort-products"
import { B2BCustomer } from "@/types"
import { Container } from "@medusajs/ui"
import { filterProductsByMetadata, MetadataFilters } from "@/lib/util/metadata-filters"
import { sortProducts } from "@/lib/util/sort-products"

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
  order?: string
  customer_group_id?: string
}

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
  customer,
  metadataFilters = {},
}: {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string
  productsIds?: string[]
  countryCode: string
  customer?: B2BCustomer | null
  metadataFilters?: MetadataFilters
}) {
  const queryParams: PaginatedProductsParams = {
    limit: 12,
  }

  if (collectionId) {
    queryParams["collection_id"] = [collectionId]
  } else if (categoryId) {
    queryParams["category_id"] = [categoryId]
  }

  if (productsIds) {
    queryParams["id"] = productsIds
  }

  if (sortBy === "created_at") {
    queryParams["order"] = "created_at"
  }

  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // Check if we need to apply metadata filters
  const hasMetadataFilters = Object.keys(metadataFilters).length > 0

  let products: any[]
  let count: number

  if (hasMetadataFilters) {
    // Fetch all products (up to 1000) and apply filters client-side
    const {
      response: { products: allProducts, count: totalCount },
    } = await listProducts({
      pageParam: 1, // Start from page 1
      queryParams: {
        ...queryParams,
        limit: 1000, // Fetch more products for metadata filtering
      },
      countryCode,
    })

    // Sort the products first
    const sortedProducts = sortProducts(allProducts, sortBy)

    // Apply metadata filters
    const filteredProducts = filterProductsByMetadata(sortedProducts, metadataFilters)
    count = filteredProducts.length
    
    // Apply pagination to filtered results
    const pageParam = (page - 1) * PRODUCT_LIMIT
    products = filteredProducts.slice(pageParam, pageParam + PRODUCT_LIMIT)
  } else {
    // No metadata filters, paginate normally using the API
    const {
      response: { products: paginatedProducts, count: totalCount },
    } = await listProductsWithSort({
      page,
      queryParams,
      sortBy,
      countryCode,
    })

    products = paginatedProducts
    count = totalCount
  }

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)

  return (
    <>
      <ul
        className="grid grid-cols-1 w-full small:grid-cols-3 medium:grid-cols-4 gap-3"
        data-testid="products-list"
      >
        {products.length > 0 ? (
          products.map((p) => {
            return (
              <li key={p.id}>
                <ProductPreview product={p} region={region} />
              </li>
            )
          })
        ) : (
          <Container className="text-center text-sm text-neutral-500">
            No products found for this category.
          </Container>
        )}
      </ul>
      {totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  )
}
