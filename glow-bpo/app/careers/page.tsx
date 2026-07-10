import Image from "next/image";
import { MessageCircle, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import EarningsCalculator from "@/components/EarningsCalculator";
import JobCard, { Job } from "@/components/JobCard";
import { SectionDivider } from "@/components/Waveform";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — GLOW BPO",
  description: "Open roles on the Medicare, ACA, and Hospital Services campaigns at GLOW BPO, Rawalpindi.",
};

const jobs: Job[] = [
  {
    title: "Medicare Verifier / Fronter",
    tag: "Night Shift",
    location: "Rawalpindi, On-site",
    experience: "1+ yr experience",
    shift: "Night shift",
    salary: "Up to 200K",
    salaryNote: "PKR / month with bonuses",
    requirements: [
      "Proven experience in a call centre (1+ years)",
      "Strong English communication skills",
      "Able to work night shift",
      "Proficient multitasking",
    ],
    benefits: [
      "Competitive salary",
      "Collaborative & performance bonuses",
      "Career growth opportunities",
      "Annual trips",
    ],
  },
  {
    title: "CSR & Self Verifier — Medicare",
    tag: "Evening Shift",
    location: "Rawalpindi, On-site",
    experience: "3–6 months experience",
    shift: "6:00 PM – 4:00 AM",
    salary: "Walk-in Interviews",
    salaryNote: "Open now, no appointment needed",
    requirements: [
      "3 to 6 months of relevant experience",
      "Comfortable with evening/night hours",
      "Clear spoken English",
    ],
    benefits: [
      "Fast hiring — walk-in interviews",
      "On-the-job training provided",
      "Growth path to Verifier / Fronter roles",
    ],
  },
];

const process = [
  "Submit Application",
  "Resume Review",
  "Initial Interview",
  "Skill Assessment",
  "Training Program",
  "Placement",
];

export default function Careers() {
  return (
    <>
      <section className="pt-20 pb-16 bg-[radial-gradient(ellipse_600px_400px_at_20%_0%,rgba(47,182,255,0.16),transparent_60%)]">
        <div className="max-w-[1180px] mx-auto px-7">
          <Reveal className="max-w-[680px]">
            <div className="eyebrow mb-4.5">Careers at GLOW BPO</div>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-5 leading-[1.1]">
              Earn it. Own it. Repeat it.
            </h1>
            <p className="text-lg text-muted">
              We&apos;re hiring across Medicare campaigns right now. Competitive
              base pay, uncapped bonuses, and a real path from floor agent to
              team lead.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hiring posters */}
      <section className="pb-20">
        <div className="max-w-[1180px] mx-auto px-7 grid md:grid-cols-2 gap-6">
          <Reveal className="relative rounded-2xl overflow-hidden border border-glow-deep aspect-square">
            <Image
              src="/images/success.jpg"
              alt="Now hiring Medicare campaign verifiers and fronters"
              fill
              className="object-cover"
            />
          </Reveal>
          <Reveal className="relative rounded-2xl overflow-hidden border border-glow-deep aspect-square">
            <Image
              src="/images/t.png"
              alt="Now hiring CSR and self verifier on Medicare, walk-interviews"
              fill
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* Earnings calculator */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-7">
          <Reveal className="max-w-[640px] mb-11">
            <div className="eyebrow mb-4.5">Know Before You Apply</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
              What could you take home?
            </h2>
          </Reveal>
          <Reveal>
            <EarningsCalculator />
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* Open roles */}
      <section className="py-20 bg-linear-to-b from-void via-panel/40 to-void">
        <div className="max-w-[1180px] mx-auto px-7">
          <Reveal className="max-w-[640px] mb-11">
            <div className="eyebrow mb-4.5">Open Roles</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
              Two ways in, right now.
            </h2>
            <p className="text-base text-muted">
              Experienced closers and newer agents both have a real entry
              point on the Medicare campaign.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-[820px]">
            {jobs.map((job) => (
              <Reveal key={job.title}>
                <JobCard job={job} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Hiring process */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-7">
          <Reveal className="max-w-[640px] mb-14">
            <div className="eyebrow mb-4.5">How It Works</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
              From application to floor.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-6 gap-4">
            {process.map((step, i) => (
              <Reveal key={step}>
                <div className="bg-panel border border-line rounded-xl p-5 h-full">
                  <div className="font-mono-brand text-xs text-glow-high mb-2.5">0{i + 1}</div>
                  <div className="text-sm text-white font-medium">{step}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-[1180px] mx-auto px-7 mb-24">
        <Reveal className="bg-linear-to-br from-glow/14 to-glow-deep/8 border border-glow-deep rounded-[26px] p-9 md:p-14 flex flex-wrap justify-between items-center gap-8">
          <div>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white max-w-[480px]">
              Walk-in interviews are open. Bring a CV, or just show up.
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
              <Clock size={16} /> 8:00 PM – 3:00 AM walk-in interviews
            </span>
          </div>
        </Reveal>
      </div>
    </>
  );
}
