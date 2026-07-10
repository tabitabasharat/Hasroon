import Image from "next/image";
import { Target, TrendingUp, Mountain, Trophy } from "lucide-react";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import { SectionDivider } from "@/components/Waveform";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — GLOW BPO",
  description: "The story, mission, and culture behind GLOW BPO.",
};

const pillars = [
  { icon: Target, title: "Focus", desc: "on your goals" },
  { icon: TrendingUp, title: "Work", desc: "with discipline" },
  { icon: Mountain, title: "Believe", desc: "in your potential" },
  { icon: Trophy, title: "Achieve", desc: "great things" },
];

export default function About() {
  return (
    <>
      <section className="pt-20 pb-20 bg-[radial-gradient(ellipse_600px_400px_at_80%_0%,rgba(47,182,255,0.14),transparent_60%)]">
        <div className="max-w-[1180px] mx-auto px-7">
          <Reveal className="max-w-[720px]">
            <div className="eyebrow mb-4.5">About GLOW BPO</div>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-5 leading-[1.1]">
              Reach, Feel, Inspire — the arc of every call we make.
            </h1>
            <p className="text-lg text-muted">
              GLOW BPO is a healthcare contact center based in Rawalpindi,
              Pakistan, built to give U.S. Medicare, ACA, and hospital
              campaigns a trained, compliant, and genuinely caring voice on
              the line — while building real careers for the people who
              answer the phone.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* Mission breakdown */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-7 grid md:grid-cols-3 gap-6">
          {[
            {
              step: "Reach",
              body: "We connect healthcare organizations with patients through outbound and inbound campaigns — Medicare enrollment, ACA marketplace support, and hospital patient services.",
            },
            {
              step: "Feel",
              body: "Every agent is trained to actually listen. Compliance and HIPAA-aware handling aren't checkboxes here — they're what let a patient feel heard.",
            },
            {
              step: "Inspire",
              body: "We built GLOW as a place people can grow — from floor agent to team lead to QA — with uncapped bonuses and a culture that rewards consistency.",
            },
          ].map((b, i) => (
            <Reveal key={b.step}>
              <div className="bg-panel border border-line rounded-2xl p-8 h-full">
                <div className="font-mono-brand text-xs text-glow-high mb-3">0{i + 1}</div>
                <h3 className="font-display text-xl text-white mb-3">{b.step}</h3>
                <p className="text-sm text-muted">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Values / culture poster */}
      <section className="py-20 bg-linear-to-b from-void via-panel/50 to-void">
        <div className="max-w-[1180px] mx-auto px-7 grid md:grid-cols-2 gap-12 items-center">
          <Reveal className="relative rounded-[22px] overflow-hidden border border-line aspect-3/4">
            <Image
              src="/images/values-poster.jpg"
              alt="Your focus determines your reality — GLOW BPO culture"
              fill
              className="object-cover"
            />
          </Reveal>
          <Reveal>
            <div className="eyebrow mb-4.5">What We Live By</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-3 leading-tight">
              &ldquo;Your focus determines your reality.&rdquo;
            </h2>
            <p className="text-base text-muted mb-9">
              Keep working, keep growing, and success will follow — dream it,
              work for it, achieve it. You are closer than you think.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-3 items-start">
                  <p.icon className="text-glow-high shrink-0 mt-0.5" size={20} />
                  <div>
                    <b className="block text-sm text-white mb-0.5">{p.title}</b>
                    <span className="text-sm text-muted">{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* Stats strip */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-7">
          <Reveal className="bg-panel border border-line rounded-3xl p-10 flex flex-wrap gap-8">
            <StatCounter target={500} suffix="+" label="Agents Trained" />
            <StatCounter target={3} label="Active Campaigns" />
            <StatCounter target={98} suffix="%" label="Client Satisfaction" />
            <StatCounter target={24} suffix="/7" label="Operations" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
