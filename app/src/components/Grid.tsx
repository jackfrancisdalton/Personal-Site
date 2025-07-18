import { motion } from "framer-motion"
import { ReactNode } from "react"

interface GridProps {
    children: ReactNode
    className?: string
}

export default function Grid({ children, className = "" }: GridProps) {
    return (
        <motion.div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
            }}
        >
            {children}
        </motion.div>
    )
}
