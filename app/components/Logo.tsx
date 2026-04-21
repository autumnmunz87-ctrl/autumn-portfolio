export default function Logo({
  className = "h-[58px] w-[59px]",
}: {
  className?: string;
}) {
  return (
    <div
      className={`bg-primary-black shrink-0 transition-colors duration-200 group-hover:bg-accent-orange ${className}`}
      style={{
        maskImage: "url('/logo-leaf.png')",
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskImage: "url('/logo-leaf.png')",
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
      }}
      aria-hidden
    />
  );
}
