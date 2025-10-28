"use client"

import LocalizedClientLink from "@/modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import { useState, useEffect } from "react"

const HamburgerIcon = ({ className }: { className?: string }) => (
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
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
)

const XMarkIcon = ({ className }: { className?: string }) => (
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

type MobileMenuProps = {
  categories?: HttpTypes.StoreProductCategory[]
}

const MobileMenu = ({ categories }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Get main categories (no parent)
  const mainCategories = categories?.filter(
    (category) => !category.parent_category_id
  ) || []

  // Get subcategories for a parent
  const getSubCategories = (categoryId: string) => {
    return categories?.filter(
      (category) => category.parent_category_id === categoryId
    ) || []
  }

  return (
    <>
      {/* Menu Button - Only visible on small devices */}
      <button
        className="small:hidden p-2 -ml-2 rounded-md hover:bg-neutral-100 transition-colors"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <HamburgerIcon className="w-6 h-6 text-zinc-900" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 small:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out small:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200 flex-shrink-0">
            <h2 className="text-lg font-semibold text-zinc-900">Menu</h2>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-neutral-100 rounded-md transition-colors"
              aria-label="Close menu"
            >
              <XMarkIcon className="w-6 h-6 text-zinc-900" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {/* Products link */}
              <li>
                <LocalizedClientLink
                  href="/store"
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-md hover:bg-neutral-100 transition-colors text-base font-medium text-zinc-900"
                >
                  Products
                </LocalizedClientLink>
              </li>

              {/* Categories */}
              {mainCategories.length > 0 && (
                <li className="pt-2">
                  <div className="px-4 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    Categories
                  </div>
                  <ul className="mt-1 space-y-1">
                    {mainCategories.map((category) => {
                      const subCategories = getSubCategories(category.id)
                      return (
                        <li key={category.id}>
                          <LocalizedClientLink
                            href={`/categories/${category.handle}`}
                            onClick={closeMenu}
                            className="block px-4 py-3 rounded-md hover:bg-neutral-100 transition-colors text-base text-zinc-900"
                          >
                            {category.name}
                          </LocalizedClientLink>
                          {subCategories.length > 0 && (
                            <ul className="ml-4 space-y-1 mt-1">
                              {subCategories.map((subCat) => (
                                <li key={subCat.id}>
                                  <LocalizedClientLink
                                    href={`/categories/${subCat.handle}`}
                                    onClick={closeMenu}
                                    className="block px-4 py-2 rounded-md hover:bg-neutral-100 transition-colors text-sm text-neutral-600"
                                  >
                                    {subCat.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )}

              {/* About Us */}
              <li>
                <LocalizedClientLink
                  href="/about"
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-md hover:bg-neutral-100 transition-colors text-base font-medium text-zinc-900"
                >
                  About Us
                </LocalizedClientLink>
              </li>

              {/* Contact Us */}
              <li>
                <LocalizedClientLink
                  href="/contact"
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-md hover:bg-neutral-100 transition-colors text-base font-medium text-zinc-900"
                >
                  Contact Us
                </LocalizedClientLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default MobileMenu

