export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-100/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          Bramblepath Digital
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Building Tools<br />
          <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
            That Teach
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted">
          We create AI-powered educational software grounded in research.
          Our mission is to make personalized, high-quality learning
          accessible to every child.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-indigo-700 hover:shadow-xl"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
