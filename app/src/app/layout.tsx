import type { Metadata } from "next";
import "./globals.css";
import NavTabs from "@/components/NavTabs";
import AnimatedCard from "@/components/AnimaitedCard";

export const metadata: Metadata = {
  title: "Your Name – Portfolio",
  description: "Minimalist portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-950"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 60% 0%, #23272f 40%, #15181d 100%)",
        }}
      >
        <main className="flex justify-center items-start min-h-screen">
          <div className="w-full max-w-4xl mt-20 rounded-3xl shadow-magic 
            bg-neutral-900/80 backdrop-blur-xl p-12 
            relative border border-white/10"
          >
            <NavTabs />
            <AnimatedCard>
              {children}
            </AnimatedCard>
          </div>
        </main>
      </body>
    </html>
  );
}
