interface LoaderProps {
  className?: string;
}

export function Loader({ className }: LoaderProps) {
  return (
    <svg
      className={`animate-spin h-5 w-5 text-sky-500 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
      />
    </svg>
  )
}
