import logo from "@/assets/qt-logo.png.asset.json";

export function Logo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const h = size === "sm" ? "h-12" : size === "lg" ? "h-24" : "h-16";
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
