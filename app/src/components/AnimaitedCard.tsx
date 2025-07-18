'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function AnimatedCard({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <div className="relative">
        <motion.div
            key={pathname}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    </div>
  )
}