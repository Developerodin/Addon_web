import { clx } from "@medusajs/ui"

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
const getLocaleForCurrency = (currency_code: string): string => {
  const code = currency_code.toLowerCase()
  return currencyToLocaleMap[code] || "en-US"
}

export const formatAmount = (amount: number, currency_code: string) => {
  const locale = getLocaleForCurrency(currency_code)
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency_code,
  }).format(amount)
}

type AmountCellProps = {
  currencyCode: string
  amount?: number | null
  originalAmount?: number | null
  align?: "left" | "right"
  className?: string
}

export const AmountCell = ({
  currencyCode,
  amount,
  originalAmount,
  align = "left",
  className,
}: AmountCellProps) => {
  const formatted = formatAmount(amount!, currencyCode)
  const originalAmountPresent = typeof originalAmount === "number"
  const originalAmountDiffers = originalAmount !== amount
  const shouldShowAmountDiff = originalAmountPresent && originalAmountDiffers

  return (
    <div
      className={clx(
        "flex h-full w-full items-center overflow-hidden",
        {
          "flex-col": shouldShowAmountDiff,
          "justify-start text-left": align === "left",
          "justify-end text-right": align === "right",
        },
        className
      )}
    >
      {shouldShowAmountDiff ? (
        <>
          <span className="truncate line-through text-xs">
            {formatAmount(originalAmount!, currencyCode)}
          </span>
          <span className="truncate text-blue-400 txt-small">{formatted}</span>
        </>
      ) : (
        <>
          <span className="truncate">{formatted}</span>
        </>
      )}
    </div>
  )
}
