'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

export default function AnimatedCard({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="absolute w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}