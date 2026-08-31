import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Ojasvi Ayurveda" description="This page doesn't exist." path="/404" />
      <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
        <p className="font-display text-6xl text-forest-900/20">404</p>
        <h1 className="font-display mt-4 text-3xl text-forest-950">Page Not Found</h1>
        <p className="mt-3 text-forest-900/70">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link
          to="/"
          className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream"
        >
          Back to Home
        </Link>
      </section>
    </>
  )
}
