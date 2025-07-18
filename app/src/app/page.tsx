export default function AboutPage() {

  const generateAvatar = () => {
    return (
      <div className="relative flex items-center justify-center w-64 h-64">
        <div className="conic-gradient-border"></div>
        <div className="w-61 h-61 rounded-full overflow-hidden border-2 border-black bg-white shadow-lg relative">
          <img
            className="object-cover w-full h-full"
            src="/avatar.jpg"
            alt="Your portrait"
            draggable={false}
          />
        </div>
      </div>
    )
  }

  const generateHeadings = () => {
    return (
      <>
        <h1 className="text-3xl font-bold text-white">Jack Francis Dalton</h1>
        <h2 className="text-2xl font-medium text-white/80 italic">Software Engineer & Delivery Manager</h2>
      </>
    )
  }

  const generateAboutText = () => {
    return (
      <p className="max-w-xl mt-2 text-base text-white/80">
        I'm a full stack engineer & Agile delivery manager 
        who loves building great software and fostering happy motivated teams.
        <br />
        <br />
        I’ve spent most of my career hands-on with code, from styling UIs down to optimising databases, 
        but over time what I’ve come to value most is creating the conditions for others to do their best work. 
        Whether that’s translating technical challenges into business cases, making sure there’s always 
        a deployment & rollback plan so developers can ship with confidence, or developing smart features that 
        save users/colleagues many hours week.
        <br />
        <br />
        I take a people-first approach. I see my role as clearing paths, making work predictable 
        (stable applications and stable roadmaps), and maximizing what teams can do in collaboration. 
        Delivering work feels great, but improving how it gets delivered feels even better!
        <br />
        <br />
        Outside of work, I'm obsessed with DIY home automation development, 
        and spend most of my waking time deep diving into music theory 
        (currently diving into modes of the harmonic minor scale like Lydian #2), 
        music production and learning any instrument I can get my hands on!
      </p>
    )
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
      {generateAvatar()}
      {generateHeadings()}
      {generateAboutText()}
    </section>
  );
}
