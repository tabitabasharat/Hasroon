import Image from "next/image";
import Link from "next/link";
import { HeartPulse, ShieldCheck, Hospital, MessageCircle, MapPin, Clock } from "lucide-react";
import { PulseRings, SectionDivider, Waveform } from "@/components/Waveform";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-24 pb-24 overflow-hidden bg-[radial-gradient(ellipse_600px_400px_at_20%_0%,rgba(47,182,255,0.16),transparent_60%),radial-gradient(ellipse_500px_400px_at_90%_20%,rgba(11,99,214,0.18),transparent_60%)]">
        <PulseRings />
        <div className="max-w-[1180px] mx-auto px-7 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center relative z-10">
          <div>
            <div className="eyebrow mb-4.5">Healthcare Contact Center · Rawalpindi, Pakistan</div>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.06] text-white mb-5">
              Reach further.
              <br />
              Feel deeper.
              <br />
              <span className="glow-text">Inspire trust.</span>
            </h1>
            <p className="text-lg text-muted max-w-[520px] mb-9">
              GLOW BPO trains and deploys agents for Medicare, ACA, and Hospital
              Support campaigns — connecting U.S. healthcare providers with
              patients who need a real human on the line.
            </p>
            <div className="flex flex-wrap gap-3.5 mb-13">
              <Link
                href="/contact"
                className="px-7 py-4 rounded-full text-[15px] font-semibold bg-linear-to-br from-glow to-glow-deep text-[#04101f] hover:shadow-[0_0_28px_rgba(47,182,255,0.55)] hover:-translate-y-px transition-all"
              >
                Hire Our Agents
              </Link>
              <Link
                href="/careers"
                className="px-7 py-4 rounded-full text-[15px] font-medium border border-line hover:border-glow hover:bg-glow/10 transition-colors"
              >
                Join The Team →
              </Link>
            </div>
            <div className="flex flex-wrap border-t border-line pt-7">
              <StatCounter target={500} suffix="+" label="Agents Trained" />
              <StatCounter target={3} label="Active Campaigns" />
              <StatCounter target={24} suffix="/7" label="Operations" />
              <StatCounter target={200} suffix="K" label="PKR Top Earners" />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-2 border-glow/50 shadow-[0_0_50px_rgba(47,182,255,0.35),inset_0_0_40px_rgba(0,0,0,0.4)]">
              <Image
                src="/images/success.jpg"
                alt="GLOW agent on a live call"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/75" />
              <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-panel border border-glow-deep rounded-full px-4 py-2 flex items-center gap-2.5 font-mono-brand text-[11px] text-glow-high shadow-lg whitespace-nowrap">
                <span className="live-dot" />
                ON CALL
                <Waveform bars={5} className="h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* REACH — services */}
      <section id="services" className="py-24 bg-linear-to-b from-void via-panel/60 to-void">
        <div className="max-w-[1180px] mx-auto px-7">
          <Reveal className="max-w-[640px] mb-14">
            <div className="eyebrow mb-4.5">01 — Reach</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
              Every campaign is a bridge to real patients.
            </h2>
            <p className="text-base text-muted">
              We recruit and train specialists across three core healthcare
              verticals, so every call lands with accuracy and care.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5.5">
            <Reveal>
              <ServiceCard
                icon={HeartPulse}
                title="Medicare Campaign"
                description="Sales, enrollment, and retention support for Medicare plans."
                items={["Enrollment assistance", "Eligibility verification", "Retention & claims support"]}
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={ShieldCheck}
                title="ACA Marketplace"
                description="Guiding individuals through Affordable Care Act plan selection."
                items={["Plan comparison", "Insurance verification", "Renewal assistance"]}
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Hospital}
                title="Hospital Services"
                description="Front-line patient support for hospital systems and clinics."
                items={["Appointment scheduling", "Billing & records support", "24/7 patient help desk"]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FEEL teaser */}
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-7 grid md:grid-cols-2 gap-11 items-center">
          <Reveal className="relative rounded-[20px] overflow-hidden border border-line aspect-4/5">
            <Image src="/images/w.png" alt="GLOW agent culture" fill className="object-cover" />
          </Reveal>
          <Reveal>
            <div className="eyebrow mb-4.5">02 — Feel</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
              Behind every headset is a person who cares.
            </h2>
            <p className="text-base text-muted mb-7">
              Focus. Work. Believe. Achieve. Our floor culture is built on
              training that&apos;s certified, not just checked off — and
              leads who coach, not just monitor.
            </p>
            <Link
              href="/about"
              className="inline-flex px-6 py-3.5 rounded-full text-sm font-medium border border-line hover:border-glow hover:bg-glow/10 transition-colors"
            >
              Meet the culture →
            </Link>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* INSPIRE teaser */}
      <section className="py-24 bg-linear-to-b from-void via-panel/40 to-void">
        <div className="max-w-[1180px] mx-auto px-7">
          <Reveal className="max-w-[640px] mb-11">
            <div className="eyebrow mb-4.5">03 — Inspire</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
              Open roles, uncapped bonuses.
            </h2>
            <p className="text-base text-muted">
              We&apos;re hiring across all three campaigns. Night and evening
              shifts, competitive base, real incentive structure.
            </p>
          </Reveal>
          <Reveal className="relative rounded-3xl overflow-hidden border border-glow-deep min-h-[300px] flex items-end">
            <Image
              src="/images/y.png"
              alt="GLOW BPO now hiring Medicare verifiers and fronters"
              fill
              className="object-cover object-top brightness-55 saturate-110"
            />
            <div className="relative z-10 p-8 md:p-9 flex flex-wrap justify-between items-end gap-4 w-full">
              <div>
                <h3 className="font-display text-2xl text-white mb-1.5">
                  Now Hiring — Medicare Verifiers &amp; Fronters
                </h3>
                <p className="text-glow-high font-mono-brand text-xs tracking-wide">
                  1+ YR CALL CENTER EXPERIENCE · NIGHT SHIFT · IRAN ROAD, SATELLITE TOWN
                </p>
              </div>
              <Link
                href="/careers"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-linear-to-br from-glow to-glow-deep text-[#04101f]"
              >
                See All Openings
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-[1180px] mx-auto px-7 mb-24">
        <Reveal className="bg-linear-to-br from-glow/14 to-glow-deep/8 border border-glow-deep rounded-[26px] p-9 md:p-14 flex flex-wrap justify-between items-center gap-8">
          <div>
            <div className="eyebrow mb-3">Get In Touch</div>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white max-w-[480px]">
              Ready to reach, feel, and inspire with us?
            </h2>
          </div>
          <div className="flex flex-col gap-2.5 text-sm text-muted">
            <a href="https://wa.me/923205406080" className="flex items-center gap-2 text-text hover:text-glow-high">
              <MessageCircle size={16} /> +92 320-5406080 
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> JS Arcade, Plaza 74-A Iran Road, Satellite Town, Rawalpindi
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} /> Hiring open — walk-in interviews 
            </span>
          </div>
        </Reveal>
      </div>
    </>
  );
}
