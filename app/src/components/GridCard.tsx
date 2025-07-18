"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

type CardProps = {
    image?: string
    title: string
    description?: string
    onClick?: () => void
    href?: string
    children?: ReactNode
    className?: string
}

export default function GridCard({
    image,
    title,
    description,
    onClick,
    href,
    children,
    className = "",
}: CardProps) {
    const Wrapper = href
        ? (props: any) => <a href={href} {...props} />
        : (props: any) => <div {...props} />

    return (
        <motion.div
            className={`cursor-pointer bg-white/10 rounded-2xl overflow-hidden shadow-magic flex flex-col transition transform hover:scale-[1.025] hover:shadow-xl ${className}`}
            whileHover={{ scale: 1.05, animationDuration: 0.2 }}
            whileTap={{ scale: 1, animationDuration: 0.2 }}
            variants={{
                hidden: { opacity: 0, y: 20 }, 
                visible: { opacity: 1, y: 0 },
            }}
            transition={{
                type: "tween",
                duration: 0.7,                
                ease: "easeInOut"             
            }}
            onClick={onClick}
            tabIndex={0} // TODO spefiect tab index in props
            role="button"
            aria-label={title}
        >
            <Wrapper>
                {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
                <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                    {description && <p className="text-white/80 text-sm">{description}</p>}
                    {children}
                </div>
            </Wrapper>
        </motion.div>
    )
}
