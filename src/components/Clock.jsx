import {useState, useEffect} from 'react'
import moment from 'moment-with-locales-es6'

export default function Clock() {
  const [date, setDate] = useState(moment().locale("fr").format("ll LTS"))

  useEffect(() => {
    const clock = setInterval(() => {
      setDate(moment().locale("fr").format("ll LTS"))
    }, 1000)
    return () => {
        clearInterval(clock)
    }
  }, [])

  return (
    <div>{date.toString()}</div>
  )
}
