import { isEmpty } from "@/lib/util/isEmpty"

type ConvertToLocaleParams = {
  amount: number
  currency_code?: string
  minimumFractionDigits?: number
  maximumFractionDigits?: number
  locale?: string
}

// Map currency codes to appropriate locales for proper formatting
const currencyToLocaleMap: Record<string, string> = {
  inr: "en-IN",
  eur: "en-IE",
  gbp: "en-GB",
  jpy: "ja-JP",
  cny: "zh-CN",
  krw: "ko-KR",
  usd: "en-US",
  cad: "en-CA",
  aud: "en-AU",
  nzd: "en-NZ",
}

// Get appropriate locale for currency code, default to en-US if not found
const getLocaleForCurrency = (currency_code?: string): string => {
  const code = (currency_code || "").toLowerCase()
  return (code && currencyToLocaleMap[code]) || "en-US"
}

export const convertToLocale = ({
  amount,
  currency_code,
  minimumFractionDigits,
  maximumFractionDigits,
  locale,
}: ConvertToLocaleParams) => {
  // Use provided locale or determine from currency code
  const finalLocale = locale || getLocaleForCurrency(currency_code)

  if (!currency_code || isEmpty(currency_code)) {
    // Graceful fallback: plain number in locale format without currency
    return new Intl.NumberFormat(finalLocale, {
      minimumFractionDigits,
      maximumFractionDigits,
    }).format(amount)
  }

  return new Intl.NumberFormat(finalLocale, {
    style: "currency",
    currency: currency_code,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount)
}
