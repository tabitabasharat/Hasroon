"use client";
import { useEffect, useRef, useState } from "react";
//testingggg
const MIN_PAY = 45000;
const MAX_PAY = 200000;

function tierFor(v: number) {
  if (v < 25) return "Ramping Up";
  if (v < 50) return "Consistent Closer";
  if (v < 75) return "Top 20% Performer";
  return "Top Performer — Bonus Cap";
}

export default function EarningsCalculator() {
  const [level, setLevel] = useState(20);
  const [display, setDisplay] = useState(65000);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const target = Math.round(MIN_PAY + (MAX_PAY - MIN_PAY) * (level / 100));
    const start = display;
    const t0 = performance.now();
    const duration = 350;
    if (raf.current) cancelAnimationFrame(raf.current);
    function tick(now: number) {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 2);
      setDisplay(Math.round(start + (target - start) * eased));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  return (
    <div className="bg-panel border border-glow-deep rounded-[22px] p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="font-display font-bold text-xl text-white mb-2">
          Estimate your monthly take-home
        </h3>
        <p className="text-sm text-muted mb-7">
          Drag the slider to your performance level and see how base pay plus
          bonuses stack up on the Medicare campaign.
        </p>
        <div className="mb-2">
          <div className="flex justify-between text-xs text-muted font-mono-brand mb-2.5">
            <span>New Agent</span>
            <span>Top Performer</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={level}
            onChange={(e) => setLevel(parseInt(e.target.value, 10))}
          />
        </div>
        <div className="text-xs font-mono-brand text-glow-high mt-1.5">
          Tier: {tierFor(level)}
        </div>
      </div>
      <div className="text-center bg-panel-2 rounded-[18px] p-8 border border-line">
        <span className="block text-xs text-muted font-mono-brand tracking-widest uppercase mb-2.5">
          Estimated Monthly Pay
        </span>
        <div className="font-mono-brand text-4xl md:text-5xl font-semibold text-white [text-shadow:0_0_22px_rgba(47,182,255,0.5)]">
          {display.toLocaleString()} <small className="text-base text-muted">PKR</small>
        </div>
        <div className="h-2 bg-line rounded-full mt-5 overflow-hidden">
          <div
            className="h-full rounded-full bg-linear-to-r from-glow-deep via-glow to-glow-high transition-[width] duration-200 shadow-[0_0_12px_rgba(47,182,255,0.6)]"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
}
