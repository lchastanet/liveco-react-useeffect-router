import axios from 'axios'
import { useState, useEffect } from 'react'

import FactCard from './FactCard'

export default function FactLoader({ type }) {
    const [item, setItem] = useState(null)

    const typeString = type.toLowerCase()

    useEffect(() => {
      axios.get(`https://some-random-api.ml/animal/${typeString}`)
              .then(res => res.data)
              .then(data => setItem(data))
    }, [typeString])

  return (<>{item && <FactCard item={item} />}</>)
}
