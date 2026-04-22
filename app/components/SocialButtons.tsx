import Link from "next/link";

const email = "autumn.munz87@gmail.com";
const linkedinUrl = "https://www.linkedin.com/in/autumn-munz/";
const behanceUrl = "https://www.behance.net/autumnmunz";

export default function SocialButtons() {
  return (
    <div className="flex items-center gap-3">
      <Link
        href={`mailto:${email}`}
        className="text-body-regular text-[#808080] underline transition-colors hover:text-foreground"
      >
        Email
      </Link>
      <Link
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-orange text-primary-white transition-colors duration-300 hover:bg-accent-orange/90"
        aria-label="LinkedIn"
      >
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 640 640" fill="currentColor" aria-hidden>
          <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
        </svg>
      </Link>
      <Link
        href={behanceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-orange text-primary-white transition-colors duration-300 hover:bg-accent-orange/90"
        aria-label="Behance"
      >
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 640 640" fill="currentColor" aria-hidden>
          <path d="M264 301.2C295.8 286 312.4 263 312.4 227.2C312.4 156.6 259.8 139.4 199.1 139.4L32 139.4L32 493.8L203.8 493.8C268.2 493.8 328.7 462.9 328.7 390.9C328.7 346.4 307.6 313.5 264 301.2zM109.9 199.9L183 199.9C211.1 199.9 236.4 207.8 236.4 240.4C236.4 270.5 216.7 282.6 188.9 282.6L109.9 282.6L109.9 199.9zM193.2 433.6L109.9 433.6L109.9 336L194.8 336C229.1 336 250.8 350.3 250.8 386.6C250.8 422.4 224.9 433.6 193.2 433.6zM551.7 192.9L408 192.9L408 158L551.7 158L551.7 192.9zM608 369.2C608 293.3 563.6 230 483.1 230C404.9 230 351.8 288.8 351.8 365.8C351.8 445.7 402.1 500.5 483.1 500.5C544.4 500.5 584.1 472.9 603.2 414.2L541 414.2C534.3 436.1 506.7 447.7 485.3 447.7C444 447.7 422.3 423.5 422.3 382.4L607.4 382.4C607.7 378.2 608 373.7 608 369.2zM422.4 338C424.7 304.3 447.1 283.2 480.9 283.2C516.3 283.2 534.1 304 537.1 338L422.4 338z" />
        </svg>
      </Link>
    </div>
  );
}
