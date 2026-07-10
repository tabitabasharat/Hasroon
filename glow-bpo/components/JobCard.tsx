import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";

export interface Job {
  title: string;
  tag: string;
  location: string;
  experience: string;
  shift: string;
  salary: string;
  salaryNote: string;
  requirements: string[];
  benefits: string[];
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-panel border border-line rounded-2xl p-7 flex flex-col gap-4 transition-colors hover:border-glow">
      <div className="flex justify-between items-start gap-3">
        <h3 className="font-display text-lg text-white">{job.title}</h3>
        <span className="font-mono-brand text-[11px] text-glow-high border border-glow-deep px-2.5 py-1 rounded-full whitespace-nowrap">
          {job.tag}
        </span>
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <MapPin size={13} /> {job.location}
        </span>
        <span className="flex items-center gap-1.5">
          <Briefcase size={13} /> {job.experience}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={13} /> {job.shift}
        </span>
      </div>
      <div className="font-mono-brand text-xl text-white [text-shadow:0_0_12px_rgba(47,182,255,0.4)]">
        {job.salary}
        <small className="block text-[11px] text-muted font-sans">{job.salaryNote}</small>
      </div>
      <div className="text-xs text-muted space-y-1">
        <p className="text-white/80 font-medium">Requirements</p>
        <ul className="space-y-1">
          {job.requirements.map((r) => (
            <li key={r} className="pl-3 relative">
              <span className="absolute left-0 top-2 w-1 h-px bg-glow" />
              {r}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-xs text-muted space-y-1">
        <p className="text-white/80 font-medium">Benefits</p>
        <ul className="space-y-1">
          {job.benefits.map((b) => (
            <li key={b} className="pl-3 relative">
              <span className="absolute left-0 top-2 w-1 h-px bg-glow" />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <a
        href="https://wa.me/923205406080"
        className="mt-auto text-sm font-semibold text-glow-high flex items-center gap-1.5 pt-2"
      >
        Apply via WhatsApp <ArrowRight size={14} />
      </a>
    </div>
  );
}
