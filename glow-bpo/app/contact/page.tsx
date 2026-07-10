import { MessageCircle, Phone, MapPin, Clock, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — GLOW BPO",
  description: "Get in touch with GLOW BPO to hire agents or ask about open roles.",
};

export default function Contact() {
  return (
    <section className="pt-20 pb-24 bg-[radial-gradient(ellipse_600px_400px_at_80%_0%,rgba(47,182,255,0.14),transparent_60%)]">
      <div className="max-w-[1180px] mx-auto px-7">
        <Reveal className="max-w-[640px] mb-14">
          <div className="eyebrow mb-4.5">Get In Touch</div>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-5 leading-[1.1]">
            Let&apos;s talk staffing, or your next shift.
          </h1>
          <p className="text-lg text-muted">
            Whether you&apos;re a healthcare organization looking to
            outsource, or you want to apply for an open role — reach out and
            we&apos;ll get back to you fast.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10">
          <Reveal>
            <div className="bg-panel border border-line rounded-2xl p-8 flex flex-col gap-6 h-full">
              <div>
                <h3 className="font-display text-lg text-white mb-4">Reach us directly</h3>
                <div className="flex flex-col gap-4 text-sm text-muted">
                  <a
                    href="tel:+923335315550"
                    className="flex items-center gap-3 text-text hover:text-glow-high transition-colors"
                  >
                    <Phone size={18} className="text-glow-high shrink-0" />
                    0333 5315550 
                  </a>
                  <a
                    href="https://wa.me/923205406080"
                    className="flex items-center gap-3 text-text hover:text-glow-high transition-colors"
                  >
                    <MessageCircle size={18} className="text-glow-high shrink-0" />
                    +92 320 5406080 
                  </a>
                  <a
                    href="mailto:saqibarshad0308@gmail.com"
                    className="flex items-center gap-3 text-text hover:text-glow-high transition-colors"
                  >
                    <Mail size={18} className="text-glow-high shrink-0" />
                    saqibarshad0308@gmail.com
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-glow-high shrink-0 mt-0.5" />
                    JS Arcade, Plaza 74-A Iran Road, Block A, 1st Floor,
                    Satellite Town, Rawalpindi, Pakistan, 46000
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-glow-high shrink-0" />
                    Walking Interviews: 8:00 PM – 3:00 AM daily
                  </div>
                </div>
              </div>
              <div className="border-t border-line pt-6 mt-auto">
                <p className="text-xs text-muted">
                  Applying for a role? It&apos;s usually faster to message us
                  directly on WhatsApp than to fill out the form.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
