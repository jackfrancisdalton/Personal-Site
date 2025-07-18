"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"
import { User, Briefcase, Code2, Music } from "lucide-react"

interface NavTab { 
    slug: string, 
    label: string, 
    icon: React.ElementType 
}

const tabs: NavTab[] = [
    { slug: '/', label: 'About Me', icon: User },
    { slug: '/experience', label: 'Experience', icon: Briefcase },
    { slug: '/projects', label: 'Software', icon: Code2 },
    { slug: '/personal', label: 'Projects', icon: Music },
]

export default function NavTabs() {
    const pathname = usePathname()
    const activeIndex = tabs.findIndex(tab =>
        tab.slug === '/' 
          ? pathname === '/' 
          : pathname.startsWith(tab.slug)
      );

    const generateTab = (tab: NavTab) => {
        const Icon = tab.icon
        const isActive = tab.slug === '/' 
            ? pathname === '/' 
            : pathname.startsWith(tab.slug);

        return (
            <Link key={tab.slug} href={tab.slug} scroll={false} className="flex-1">
                <div
                    className={`flex items-center justify-center gap-2 px-0 py-2 sm:px-4 sm:py-2
                        rounded-full font-medium transition-all duration-200 w-full relative z-10
                        ${isActive ? "text-white" : "text-gray-500 hover:text-gray-900"}`}
                >
                    {/* Mobile: icon only */}
                    <span className="sm:hidden flex items-center justify-center w-full">
                        <Icon className="w-5 h-5" />
                    </span>

                    {/* Desktop: icon + label */}
                    <span className="hidden sm:inline-flex items-center gap-2">
                        <Icon className="w-5 h-5" />
                        {tab.label}
                    </span>
                </div>
            </Link>
        )
    }

    return (
        <nav className="relative flex justify-center w-full mb-8">
            <div className="flex border-white border-2 border-dashed p-2 w-full rounded-full bg-white/5 shadow-inner relative overflow-hidden">
                {/* Animated highlight bubble */}
                <motion.div
                    className="absolute top-0 left-0 h-full z-0"
                    style={{ width: `calc(100% / ${tabs.length})` }}
                    animate={{ x: `${activeIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                >
                    <div className="h-full w-full bg-neutral-900/90 rounded-full shadow-magic" />
                </motion.div>

                {/* Tabs */}
                {tabs.map((tab, i) => generateTab(tab))}
            </div>
        </nav>
    )
}
