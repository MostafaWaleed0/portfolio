export function Time({ time }: { time: string }) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const event = new Date(time);
  const date = event.toLocaleString("en", options);

  return (
    <time dateTime={time} className="text-primary-600 weight-bold font-mono">
      <em>{date}</em>
    </time>
  );
}
