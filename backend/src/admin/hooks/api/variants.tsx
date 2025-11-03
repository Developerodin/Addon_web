import { FetchError } from "@medusajs/js-sdk";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { queryKeysFactory } from "../../lib/query-key-factory";
import { sdk } from "../../lib/client";

const PRODUCT_VARIANT_QUERY_KEY = "product_variant" as const;
export const productVariantQueryKeys = queryKeysFactory(
  PRODUCT_VARIANT_QUERY_KEY
);

export const useVariants = (
  query?: Record<string, any>,
  options?: Omit<
    UseQueryOptions<any, FetchError, any, QueryKey>,
    "queryFn" | "queryKey"
  >
) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.productVariant.list(query),
    queryKey: productVariantQueryKeys.list(query),
    ...options,
  });

  function normalizeAssetUrl(input?: string | null): string | undefined {
    if (!input) return undefined;
    try {
      if (input.startsWith("http://localhost:9000/")) {
        const rest = input.replace("http://localhost:9000", "");
        const origin = typeof window !== "undefined" ? window.location.origin : "";
        return `${origin}/api${rest}`;
      }
      if (input.startsWith("/static/") || input.startsWith("/uploads/")) {
        return `/api${input}`;
      }
    } catch (_) {}
    return input;
  }

  const normalized = data
    ? {
        ...data,
        variants: (data.variants || []).map((v: any) => {
          const p = v.product || {};
          const thumb = normalizeAssetUrl(p.thumbnail);
          const images = Array.isArray(p.images)
            ? p.images.map((img: any) => ({ ...img, url: normalizeAssetUrl(img.url) }))
            : p.images;
          return {
            ...v,
            product: {
              ...p,
              thumbnail: thumb ?? p.thumbnail,
              images,
            },
          };
        }),
      }
    : data;

  return { ...normalized, ...rest };
};
