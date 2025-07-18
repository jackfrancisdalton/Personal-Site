"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type DetailsLayoutProps = {
    backHref: string;
    image: string;
    imageAlt: string;
    imageLayoutId: string;
    title: string;
    children: ReactNode;
};

export default function DetailsLayout({
    backHref,
    image,
    imageAlt,
    imageLayoutId,
    title,
    children,
}: DetailsLayoutProps) {
    return (
        <section className="w-full max-w-2xl mx-auto flex flex-col gap-8">
            <div className="pt-4">
                <Link
                    href={backHref}
                    className="text-blue-300 hover:underline hover:text-blue-200 text-sm transition"
                >
                    ← Go to projects
                </Link>
            </div>

            <motion.div
                className="rounded-2xl overflow-hidden shadow-lg aspect-video bg-neutral-800"
                layoutId={imageLayoutId}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
                <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                    draggable={false}
                />
            </motion.div>

            <h1 className="text-3xl font-bold text-white">{title}</h1>
            {children}
        </section>
    );
}
