"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/', label: 'About Me' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Software Projects' },
  { href: '/personal', label: 'Personal Projects' },
]

export default function NavTabs() {
  const pathname = usePathname()
  return (
    <nav className="flex justify-center space-x-4 mb-8">
      {tabs.map(tab => (
        <Link key={tab.href} href={tab.href} scroll={false}>
          <span className={`px-4 py-2 rounded-full font-medium transition
            ${pathname === tab.href
              ? 'bg-black/80 text-white shadow-magic'
              : 'text-gray-600 hover:bg-gray-100'}
          `}>
            {tab.label}
          </span>
        </Link>
      ))}
    </nav>
  )
}
