export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
      <img
        src="/avatar.jpg"
        alt="Your portrait"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
        draggable={false}
      />
      <h1 className="text-3xl font-bold text-white">Jack Francis Dalton</h1>
      <h2 className="text-xl font-medium text-white/80">Software Engineer & Delivery Manager</h2>
      <p className="max-w-xl mt-2 text-base text-white/80">
        enter about me text here
      </p>
    </section>
  );
}
