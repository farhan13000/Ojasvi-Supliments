import { useCallback, useId, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion'
import { RotateCw, Sparkles } from 'lucide-react'
import { product } from '../data/product'

function randomSparkle() {
  const angle = Math.random() * Math.PI * 2
  const distance = 70 + Math.random() * 90
  return {
    id: `${Date.now()}-${Math.random()}`,
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance - 30,
    scale: 0.5 + Math.random() * 0.8,
    delay: Math.random() * 0.15,
  }
}

export default function Product360({ productName = `Ojasvi ${product.name}` }) {
  const uid = useId()
  const rotateY = useMotionValue(0)
  const draggingRef = useRef(false)
  const startXRef = useRef(0)
  const startRotateRef = useRef(0)
  const movedRef = useRef(false)
  const [spinning, setSpinning] = useState(false)
  const [sparkles, setSparkles] = useState([])

  const shadowScale = useTransform(rotateY, (v) => {
    const rad = (v * Math.PI) / 180
    return 0.82 + 0.18 * Math.abs(Math.cos(rad))
  })
  const highlightX = useTransform(rotateY, (v) => {
    const norm = ((v % 360) + 360) % 360
    return `${Math.sin((norm * Math.PI) / 180) * 60 + 20}%`
  })

  const burst = useCallback(() => {
    const next = Array.from({ length: 7 }, randomSparkle)
    setSparkles((prev) => [...prev, ...next])
    window.setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => !next.find((n) => n.id === s.id)))
    }, 900)
  }, [])

  const spin = useCallback(() => {
    if (spinning) return
    setSpinning(true)
    burst()
    animate(rotateY, rotateY.get() + 360, {
      duration: 1.15,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => setSpinning(false),
    })
  }, [rotateY, spinning, burst])

  const settle = useCallback(() => {
    const current = rotateY.get()
    const target = Math.round(current / 360) * 360
    animate(rotateY, target, { duration: 0.5, ease: 'easeOut' })
  }, [rotateY])

  const onPointerDown = (e) => {
    draggingRef.current = true
    movedRef.current = false
    startXRef.current = e.clientX
    startRotateRef.current = rotateY.get()
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!draggingRef.current) return
    const delta = e.clientX - startXRef.current
    if (Math.abs(delta) > 4) movedRef.current = true
    rotateY.set(startRotateRef.current + delta * 0.6)
  }

  const onPointerUp = () => {
    if (!draggingRef.current) return
    draggingRef.current = false
    if (movedRef.current) {
      settle()
    } else {
      spin()
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      spin()
    }
  }

  return (
    <div className="relative flex flex-col items-center select-none">
      <div className="animate-float-slow">
        <div
          className="perspective-1200 relative h-[340px] w-[300px] cursor-grab touch-none active:cursor-grabbing sm:h-[420px] sm:w-[380px]"
          role="button"
          tabIndex={0}
          aria-label={`${productName} product package — drag or press Enter to rotate 360 degrees`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={(e) => draggingRef.current && onPointerUp(e)}
          onKeyDown={onKeyDown}
        >
          {/* glow */}
          <motion.div
            aria-hidden="true"
            className="absolute bottom-2 left-1/2 h-10 w-56 -translate-x-1/2 rounded-full bg-forest-900/30 blur-xl"
            style={{ scaleX: shadowScale }}
          />

          <motion.div className="preserve-3d relative h-full w-full" style={{ rotateY }}>
            <PackageArt uid={uid} name={productName} />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[2rem] mix-blend-overlay"
              style={{
                backgroundImage:
                  'linear-gradient(75deg, transparent 30%, rgba(255,255,255,0.55) 45%, transparent 60%)',
                backgroundSize: '250% 100%',
                backgroundPositionX: highlightX,
              }}
            />
          </motion.div>

          <AnimatePresence>
            {sparkles.map((s) => (
              <motion.span
                key={s.id}
                className="pointer-events-none absolute left-1/2 top-1/2 text-gold-500"
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], x: s.x, y: s.y, scale: s.scale }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: s.delay, ease: 'easeOut' }}
              >
                <Sparkles size={16} strokeWidth={2.5} />
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={spin}
        className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full border border-forest-800/15 bg-white/70 px-4 py-2 text-sm font-medium text-forest-900 shadow-sm backdrop-blur transition hover:bg-white"
        whileTap={{ scale: 0.94 }}
      >
        <motion.span
          animate={spinning ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 1.15, ease: [0.65, 0, 0.35, 1] }}
        >
          <RotateCw size={16} />
        </motion.span>
        Tap or drag to rotate 360°
      </motion.button>
    </div>
  )
}

function PackageArt({ uid, name }) {
  const gradBottle = `bottleGrad-${uid}`
  const gradCap = `capGrad-${uid}`
  const gradBox = `boxGrad-${uid}`
  const gradBoxTop = `boxTopGrad-${uid}`
  const gradBoxSide = `boxSideGrad-${uid}`
  const gradLabel = `labelGrad-${uid}`

  return (
    <svg
      viewBox="0 0 400 460"
      className="absolute inset-0 h-full w-full drop-shadow-[0_25px_35px_rgba(11,35,24,0.35)]"
      role="img"
      aria-label={`${name} — bottle and box packaging`}
    >
      <defs>
        <linearGradient id={gradBottle} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0e2e1f" />
          <stop offset="45%" stopColor="#1f5c3f" />
          <stop offset="55%" stopColor="#276b49" />
          <stop offset="100%" stopColor="#0b2318" />
        </linearGradient>
        <linearGradient id={gradCap} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a9821b" />
          <stop offset="50%" stopColor="#f0d78a" />
          <stop offset="100%" stopColor="#a9821b" />
        </linearGradient>
        <linearGradient id={gradLabel} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbf3e3" />
          <stop offset="100%" stopColor="#f6ecd6" />
        </linearGradient>
        <linearGradient id={gradBox} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#16452e" />
          <stop offset="100%" stopColor="#0b2318" />
        </linearGradient>
        <linearGradient id={gradBoxTop} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2a7350" />
          <stop offset="100%" stopColor="#1f5c3f" />
        </linearGradient>
        <linearGradient id={gradBoxSide} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#081c13" />
          <stop offset="100%" stopColor="#0b2318" />
        </linearGradient>
      </defs>

      {/* BOX (back-left, whole package) */}
      <g transform="translate(18 150)">
        <polygon points="0,60 90,20 90,220 0,260" fill={`url(#${gradBoxSide})`} />
        <polygon points="0,60 90,20 190,55 100,95" fill={`url(#${gradBoxTop})`} />
        <polygon points="100,95 190,55 190,245 100,290" fill={`url(#${gradBox})`} />
        <text x="112" y="150" fill="#e6c458" fontSize="14" fontFamily="Marcellus, serif" transform="skewY(-11)">
          OJASVI
        </text>
        <text x="112" y="180" fill="#fbf3e3" fontSize="10" fontFamily="Poppins, sans-serif" fontWeight="600" transform="skewY(-11)">
          STRENGTH+
        </text>
        <circle cx="145" cy="220" r="18" fill="none" stroke="#c9a227" strokeWidth="1.5" transform="skewY(-11)" />
        <text
          x="145"
          y="223"
          fill="#c9a227"
          fontSize="7"
          fontFamily="Poppins, sans-serif"
          textAnchor="middle"
          transform="skewY(-11)"
        >
          100%
        </text>
      </g>

      {/* BOTTLE (front-right, main hero) */}
      <g transform="translate(150 40)">
        <rect x="45" y="0" width="30" height="18" rx="3" fill={`url(#${gradCap})`} />
        <rect x="50" y="-6" width="20" height="8" rx="2" fill="#e6c458" />
        <path
          d="M40 18 H80 L88 46 C92 56 92 62 92 72 V330 C92 344 82 354 68 354 H52 C38 354 28 344 28 330 V72 C28 62 28 56 32 46 Z"
          fill={`url(#${gradBottle})`}
          stroke="#0b2318"
          strokeWidth="1.5"
        />
        <rect x="30" y="120" width="60" height="150" rx="10" fill={`url(#${gradLabel})`} stroke="#c9a227" strokeWidth="1.2" />
        <text x="60" y="160" textAnchor="middle" fill="#123524" fontSize="17" fontFamily="Marcellus, serif">
          OJASVI
        </text>
        <line x1="42" y1="172" x2="78" y2="172" stroke="#c9a227" strokeWidth="1.2" />
        <text x="60" y="189" textAnchor="middle" fill="#7a1f2b" fontSize="11" fontFamily="Poppins, sans-serif" fontWeight="700">
          STRENGTH+
        </text>
        <text x="60" y="200" textAnchor="middle" fill="#3a3226" fontSize="6.5" fontFamily="Poppins, sans-serif">
          Ayurvedic Vitality Capsules
        </text>
        <path
          d="M52 216 C52 208 60 206 60 214 C60 206 68 208 68 216 C68 224 60 230 60 230 C60 230 52 224 52 216 Z"
          fill="#2a7350"
        />
        <text x="60" y="252" textAnchor="middle" fill="#123524" fontSize="7" fontFamily="Poppins, sans-serif">
          30 CAPSULES
        </text>
        <circle cx="60" cy="145" r="1.5" fill="#c9a227" />
      </g>
    </svg>
  )
}
