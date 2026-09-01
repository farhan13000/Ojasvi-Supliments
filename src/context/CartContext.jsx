import { createContext, useContext, useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { getFeaturedProduct } from '../data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'ojashvi_cart_v1'
const DETAILS_KEY = 'ojashvi_checkout_details_v1'

const emptyDetails = { name: '', phone: '', address: '', city: '', pincode: '' }

function loadInitialCart() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  }
}

function loadInitialDetails() {
  if (typeof window === 'undefined') return emptyDetails
  try {
    const raw = window.localStorage.getItem(DETAILS_KEY)
    if (!raw) return emptyDetails
    const parsed = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) return emptyDetails
    return { ...emptyDetails, ...parsed }
  } catch {
    return emptyDetails
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitialCart)
  const [isCartOpen, setCartOpen] = useState(false)
  const [justAdded, setJustAdded] = useState(false)
  const [customerDetails, setCustomerDetailsState] = useState(loadInitialDetails)
  const justAddedTimeoutRef = useRef(null)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // localStorage unavailable (private mode etc.) — silently skip persistence
    }
  }, [items])

  useEffect(() => {
    try {
      window.localStorage.setItem(DETAILS_KEY, JSON.stringify(customerDetails))
    } catch {
      // localStorage unavailable — silently skip persistence
    }
  }, [customerDetails])

  const updateCustomerDetails = useCallback((patch) => {
    setCustomerDetailsState((prev) => ({ ...prev, ...patch }))
  }, [])

  const addToCart = useCallback((pack, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === pack.id)
      if (existing) {
        return prev.map((i) => (i.id === pack.id ? { ...i, qty: i.qty + qty } : i))
      }
      return [
        ...prev,
        {
          id: pack.id,
          productId: pack.productId ?? getFeaturedProduct().id,
          label: pack.label,
          subLabel: pack.subLabel,
          price: pack.price,
          mrp: pack.mrp,
          qty,
        },
      ]
    })
    setJustAdded(true)
    setCartOpen(true)
    window.clearTimeout(justAddedTimeoutRef.current)
    justAddedTimeoutRef.current = window.setTimeout(() => setJustAdded(false), 1600)
  }, [])

  useEffect(() => () => window.clearTimeout(justAddedTimeoutRef.current), [])

  const updateQty = useCallback((id, qty) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((i) => i.id !== id)
      return prev.map((i) => (i.id === id ? { ...i, qty } : i))
    })
  }, [])

  const removeFromCart = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
    const mrpTotal = items.reduce((sum, i) => sum + i.mrp * i.qty, 0)
    const count = items.reduce((sum, i) => sum + i.qty, 0)
    return { subtotal, mrpTotal, savings: Math.max(mrpTotal - subtotal, 0), count }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      totals,
      isCartOpen,
      justAdded,
      customerDetails,
      setCartOpen,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
      updateCustomerDetails,
    }),
    [items, totals, isCartOpen, justAdded, customerDetails, addToCart, updateQty, removeFromCart, clearCart, updateCustomerDetails],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
