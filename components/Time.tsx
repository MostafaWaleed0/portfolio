import { TimeType } from 'lib/types';

export default function Time({ time }: TimeType) {
  const year = Number(time.substring(0, 4));
  const month = Number(time.substring(5, 7));
  const day = Number(time.substring(8, 10));

  const arrayMonths: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const data = `${`${arrayMonths[month - 1]}`} ${day}, ${year}`;

  return (
    <time dateTime={time} className="text-primary-600 weight-bold">
      <em>{data}</em>
    </time>
  );
}
