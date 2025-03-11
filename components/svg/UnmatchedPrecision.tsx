export function UnmatchedPrecision({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v4m0 16v-4m10-8h-4M6 12H2" />
      <path d="m15 9-2 2-1 1m0 0-1 1-2 2" />
    </svg>
  );
}