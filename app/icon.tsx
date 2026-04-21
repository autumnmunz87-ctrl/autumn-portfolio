import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        {/* fill matches --primary-black (#302F2B) from design system */}
        <svg
          width="24"
          height="32"
          viewBox="0 0 24 32"
          fill="#302F2B"
        >
          <rect x="10" y="14" width="4" height="18" rx="2" />
          <path d="M12 14 Q4 8 8 0 Q12 10 12 14 Z" />
          <path d="M12 14 Q20 8 16 0 Q12 10 12 14 Z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
