import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line pt-12 pb-8">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div>
            <Image
              src="/images/logo.jpg"
              alt="GLOW BPO"
              width={30}
              height={30}
              className="h-8 w-8 object-contain rounded-full mb-3 [filter:drop-shadow(0_0_10px_rgba(47,182,255,0.7))]"
            />
            <p className="text-sm text-muted max-w-[240px]">
              Reach, Feel, Inspire. A healthcare contact center built in Rawalpindi, serving campaigns across the U.S.
            </p>
          </div>
          <div>
            <h4 className="text-sm text-white mb-4">Campaigns</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li><Link href="/#services" className="hover:text-glow-high">Medicare</Link></li>
              <li><Link href="/#services" className="hover:text-glow-high">ACA Marketplace</Link></li>
              <li><Link href="/#services" className="hover:text-glow-high">Hospital Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li><Link href="/about" className="hover:text-glow-high">About</Link></li>
              <li><Link href="/careers" className="hover:text-glow-high">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-glow-high">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-white mb-4">Connect</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li><a href="https://wa.me/923205406080" className="hover:text-glow-high">WhatsApp: +92 320 5406080</a></li>
              <li><a href="tel:+923335315550" className="hover:text-glow-high">Mobile: 0333 5315550</a></li>
              <li><a href="mailto:saqibarshad0308@gmail.com" className="hover:text-glow-high">saqibarshad0308@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 pt-6 border-t border-line text-xs text-muted">
          <span>© 2026 GLOW BPO. All rights reserved.</span>
          <span>JS Arcade, Plaza 74-A Iran Road, Satellite Town, Rawalpindi, 46000</span>
        </div>
      </div>
    </footer>
  );
}
