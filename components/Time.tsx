interface Values {
  day: any
  month: any
  separator: any
  year: any
}

const Time: React.FC<Values> = ({
  day = '',
  month,
  separator = ' ',
  year = '',
}) => {
  var arrayMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const dataTime = `${year}-${month < 10 ? `0${month}` : `${month}`}-${
    day < 10 ? `0${day}` : `${day}`
  }`

  const data = `${`${
    arrayMonths[month - 1]
  }`}${separator}${day},${separator}${year}`

  return (
    <time dateTime={dataTime} className="text-primary-600 weight-bold">
      <em>{data}</em>
    </time>
  )
}

export default Time
