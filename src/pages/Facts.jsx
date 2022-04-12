import React from 'react'
import { useParams } from 'react-router-dom'

import FactLoader from '../components/facts/FactLoader'

export default function Facts() {
    const { type } = useParams()

  return <FactLoader type={type} />
}
