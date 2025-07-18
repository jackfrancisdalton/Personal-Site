'use client';
import { TimelineItem } from "@/types/TimelineTypes";
import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineProps {
    items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
    const generateConnectingLine = (item: TimelineItem, alignLeft: boolean) => {
        return (
            <div
                className="absolute top-1/2 -translate-y-1/2 z-20"
                style={{ [alignLeft ? "right" : "left"]: "-52px" }}
            >
                <div className="w-10 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-transparent" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border-4 border-white/30 flex items-center justify-center -mt-3">
                    {item.icon && <Image src={item.icon} alt="" width={20} height={20} />}
                </div>
            </div>
        );
    };

    const generateContent = (item: TimelineItem) => {
        return (
            <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-2">
                    {item.logo && (
                        <Image
                            src={item.logo}
                            alt=""
                            width={32}
                            height={32}
                            className="rounded-md bg-white/80 p-1"
                        />
                    )}
                    <span className="text-lg font-bold text-white">{item.title}</span>
                </div>
                {item.subtitle && (
                    <div className="text-sm text-blue-200 font-medium">{item.subtitle}</div>
                )}
                <div className="text-xs text-white/70">{item.years}</div>
                <div className="mt-2 text-sm text-white/80">{item.description}</div>
            </div>
        );
    };

    const generateCentralLine = () => {
        return (
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500/60 to-purple-500/60 rounded-full -translate-x-1/2 z-0" />
        );
    };

    return (
        <div className="relative flex flex-col items-center py-16">
            {generateCentralLine()}
            <div className="w-full flex flex-col gap-20 relative z-10">
                {items.map((item, idx) => {
                    const alignLeft = idx % 2 === 0;
                    const xFrom = alignLeft ? -80 : 80;
                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: xFrom }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.6, delay: idx * 0.08 }}
                            className={`flex items-center w-full ${
                                alignLeft ? "justify-start pr-16" : "justify-end pl-16"
                            }`}
                        >
                            <div
                                className={`relative bg-neutral-900/90 border border-white/10 rounded-xl shadow-lg px-6 py-5 max-w-md w-full flex gap-4 ${
                                    alignLeft ? "flex-row-reverse" : ""
                                }`}
                            >
                                {generateConnectingLine(item, alignLeft)}
                                {generateContent(item)}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
