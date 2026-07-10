export function Waveform({ bars = 9, className = "" }: { bars?: number; className?: string }) {
  return (
    <div className={`waveform ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <i key={i} />
      ))}
    </div>
  );
}

export function SectionDivider() {
  return (
    <div className="flex justify-center py-2 opacity-50">
      <Waveform bars={12} className="h-5" />
    </div>
  );
}

export function PulseRings() {
  return (
    <svg
      className="pulse-rings absolute -right-30 top-1/2 -translate-y-1/2 w-[640px] h-[640px] pointer-events-none opacity-50"
      viewBox="0 0 640 640"
    >
      <circle cx="320" cy="320" r="20" />
      <circle cx="320" cy="320" r="20" />
      <circle cx="320" cy="320" r="20" />
      <circle cx="320" cy="320" r="20" />
    </svg>
  );
}
