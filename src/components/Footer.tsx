export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Bramblepath Digital LLC. All rights
          reserved.
        </p>
        <nav className="flex gap-6">
          <a
            href="#about"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
