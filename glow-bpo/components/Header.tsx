import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-void/70 backdrop-blur-xl border-b border-line">
      <nav className="max-w-[1180px] mx-auto flex items-center justify-between px-7 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.jpg"
            alt="GLOW BPO"
            width={32}
            height={32}
            className="h-8 w-8 object-contain rounded-full [filter:drop-shadow(0_0_10px_rgba(47,182,255,0.7))]"
          />
        </Link>
        <div className="hidden md:flex gap-8 text-sm text-muted">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-text transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-full border border-line text-sm font-medium hover:border-glow hover:bg-glow/10 transition-colors"
          >
            Hire Agents
          </Link>
          <Link
            href="/careers"
            className="inline-flex px-5 py-2.5 rounded-full text-sm font-semibold bg-linear-to-br from-glow to-glow-deep text-[#04101f] hover:shadow-[0_0_28px_rgba(47,182,255,0.55)] hover:-translate-y-px transition-all"
          >
            Apply Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
