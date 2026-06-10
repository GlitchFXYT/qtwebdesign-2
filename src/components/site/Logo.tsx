import logo from "@/assets/qt-logo.png.asset.json";

export function Logo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const h = size === "sm" ? "h-8" : size === "lg" ? "h-14" : "h-10";
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={logo.url}
        alt="Q&T Web Co."
        className={`${h} w-auto object-contain`}
        width={1240}
        height={1240}
      />
    </span>
  );
}
