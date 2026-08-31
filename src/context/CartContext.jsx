import { createContext, useContext, useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { product } from '../data/product'

const CartContext = createContext(null)
const STORAGE_KEY = 'ojasvi_cart_v1'

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

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitialCart)
  const [isCartOpen, setCartOpen] = useState(false)
  const [justAdded, setJustAdded] = useState(false)
  const justAddedTimeoutRef = useRef(null)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // localStorage unavailable (private mode etc.) — silently skip persistence
    }
  }, [items])

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
          productId: product.id,
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
      setCartOpen,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
    }),
    [items, totals, isCartOpen, justAdded, addToCart, updateQty, removeFromCart, clearCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
