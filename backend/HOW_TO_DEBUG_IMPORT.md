# How to Debug Product Import Errors

## Step 1: Restart Your Backend

**Stop your current backend and restart it:**

```bash
cd b2b-starter-medusa/backend
# Press Ctrl+C to stop
yarn dev
```

**Why?** The new error logging subscribers won't be loaded until you restart.

## Step 2: Try Import Again

After restarting, try your CSV import again. You should now see detailed error output like:

```
=========================================
❌ BATCH JOB FAILED - THIS IS THE ERROR!
=========================================
Error Message: [THE ACTUAL ERROR]
```

## Step 3: Common Fixes

### Fix #1: Add Shipping Profile (Most Common Issue)

Your CSV **must** have a `Product Shipping Profile Id` column with valid shipping profile IDs.

**To get shipping profile IDs:**
```bash
curl http://localhost:9000/admin/shipping-profiles
```

Or check in admin UI at Products → Settings → Shipping Profiles

**Add this column to your CSV:**
```csv
Product Id,Product Handle,Product Title,...,Product Shipping Profile Id
prod_123,my-product,My Product,...,sp_default
```

### Fix #2: Check Required Fields

Ensure your CSV has ALL these required columns:

- `Product Id` (or let it auto-generate)
- `Product Handle`
- `Product Title`
- `Product Status` (published, draft, proposed)
- `Product Shipping Profile Id` ⚠️ **Critical**
- `Variant Id`
- `Variant Title`
- `Variant Sku`
- `Variant Price [CURRENCY]` (e.g., `Variant Price USD`)

### Fix #3: Fix Data Types

- **Prices:** Must be valid numbers (no currency symbols)
- **Dates:** Must be ISO format: `2025-10-29T10:00:00.000Z`
- **Booleans:** Use `true` or `false`

### Fix #4: Check Column Headers

Column names are **case-sensitive** and must match exactly:
- ✅ `Variant Price USD` 
- ❌ `variant price usd`
- ❌ `Variant price USD`

### Fix #5: Verify Foreign Keys

All referenced IDs must exist:
- ✅ Product Collections
- ✅ Product Types
- ✅ Sales Channels
- ✅ Shipping Profiles
- ✅ Stock Locations

## Quick CSV Template

Save this as a template and fill in your data:

```csv
Product Id,Product Handle,Product Title,Product Status,Product Shipping Profile Id,Variant Title,Variant Sku,Variant Price USD
,my-product,My Product,published,sp_default,Default variant,SKU001,100
```

Replace `sp_default` with your actual shipping profile ID.

## Still Not Working?

If you see the error after restarting, the actual error message will tell you exactly what's wrong. Look for:

- Missing field: "X field is required"
- Invalid ID: "Could not find X with id Y"
- Invalid data type: "Invalid value for field X"

The detailed error will be shown in your console after restart!

