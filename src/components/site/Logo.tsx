export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display font-bold tracking-tight ${className}`}>
      <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-white shadow-elegant">
        <span className="text-[13px] leading-none">Q&amp;T</span>
      </span>
      <span className="text-lg">
        Q&amp;T <span className="text-gradient">Web Co.</span>
      </span>
    </span>
  );
}
