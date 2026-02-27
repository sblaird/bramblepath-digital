export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Our Work
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Tools designed to make a real difference in how children learn.
          </p>
        </div>

        {/* DecodiVerse Feature Card */}
        <div className="overflow-hidden rounded-3xl border border-border bg-card-bg shadow-sm">
          <div className="grid md:grid-cols-2">
            {/* Left: Visual */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 p-12 md:p-16">
              <div className="text-center text-white">
                <div className="mb-4 text-6xl font-bold tracking-tight sm:text-7xl">
                  Decodi<span className="text-indigo-200">Verse</span>
                </div>
                <p className="text-lg font-medium text-indigo-100">
                  Magical Stories for Magical Readers
                </p>
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col justify-center p-10 md:p-14">
              <div className="mb-4 inline-flex w-fit items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                Launching March 2026
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                AI-Powered Personalized Storybooks
              </h3>
              <p className="mb-6 text-muted leading-relaxed">
                DecodiVerse creates illustrated storybooks where every word is
                matched to a child&apos;s phonics level. Built on the Science of
                Reading, it generates complete 10-page stories with
                illustrations in under two minutes — ensuring children only
                encounter words they can actually decode.
              </p>

              <div className="mb-8 space-y-3">
                {[
                  "Phonics-validated vocabulary (K through Grade 3)",
                  "8 art styles including watercolor, comic, and pixel art",
                  "Downloadable PDFs with parent & teacher reading guides",
                  "Multiple content safety layers — safe by design",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-sm text-muted">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://decodiverse.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
                >
                  Visit DecodiVerse
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon placeholder */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-border"
            >
              <p className="text-sm font-medium text-muted/60">
                More projects coming soon
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
