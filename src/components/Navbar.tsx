import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center">
          <Image
            src="/full_logo.png"
            alt="BlazeAutomate"
            width={220}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm text-zinc-700 sm:flex">
          <a className="hover:text-zinc-950" href="#about">
            About Us
          </a>
          <a className="hover:text-zinc-950" href="#why-us">
            Why Us
          </a>
          <a className="hover:text-zinc-950" href="#services">
            What We Do
          </a>
          <a className="hover:text-zinc-950" href="#contact">
            Book Appointment
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
