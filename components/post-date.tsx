// components/post-date.tsx
import { parseISO, format, isValid } from "date-fns";

type Props = {
  dateString?: string | null;
  className?: string;
  fallbackText?: string; // optional text if date is missing/invalid
};

export default function PostDate({
  dateString,
  className,
  fallbackText = "",
}: Props) {
  if (!dateString || typeof dateString !== "string") {
    return fallbackText ? <span className={className}>{fallbackText}</span> : null;
  }

  // Accept "YYYY-MM-DD" or full ISO strings.
  const parsed = parseISO(dateString);

  // If parseISO fails (non-ISO), try Date() as a fallback
  const date = isValid(parsed) ? parsed : new Date(dateString);

  if (!isValid(date)) {
    return fallbackText ? <span className={className}>{fallbackText}</span> : null;
  }

  return (
    <time className={className} dateTime={date.toISOString()}>
      {format(date, "MMM d, yyyy")}
    </time>
  );
}
