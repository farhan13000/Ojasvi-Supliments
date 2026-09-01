import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-forest-900/60">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {idx === 0 && <Home size={13} className="text-forest-900/40" />}
              {item.to && !isLast ? (
                <Link to={item.to} className="focus-ring rounded transition hover:text-forest-900">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'font-medium text-forest-900' : ''} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight size={13} className="text-forest-900/30" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
