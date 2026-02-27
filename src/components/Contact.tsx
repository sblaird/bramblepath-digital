export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-section-alt py-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s Connect
        </h2>
        <p className="mb-10 text-lg text-muted">
          Have questions, ideas, or want to collaborate? We&apos;d love to hear
          from you.
        </p>

        <a
          href="mailto:info@bramblepathdigital.com"
          className="inline-flex h-12 items-center gap-3 rounded-full bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-indigo-700 hover:shadow-xl"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          info@bramblepathdigital.com
        </a>
      </div>
    </section>
  );
}
