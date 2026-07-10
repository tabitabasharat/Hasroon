import { LucideIcon } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  items,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="bg-panel border border-line rounded-[18px] p-8 transition-all hover:border-glow hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(47,182,255,0.15)]">
      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-glow/25 to-glow-deep/15 flex items-center justify-center mb-5 text-glow-high">
        <Icon size={22} />
      </div>
      <h3 className="font-display text-lg text-white mb-2.5">{title}</h3>
      <p className="text-sm text-muted mb-4.5">{description}</p>
      <ul className="text-sm text-muted space-y-1.5">
        {items.map((item) => (
          <li key={item} className="pl-4.5 relative">
            <span className="absolute left-0 top-3 w-1.5 h-px bg-glow" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
