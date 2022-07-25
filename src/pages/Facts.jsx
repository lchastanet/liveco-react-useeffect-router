import React from "react"
import { useParams } from "react-router-dom"

import FactLoader from "../components/facts/FactLoader"

import SecondLayout from "../components/layouts/SecondLayout"

export default function Facts() {
  const { type } = useParams()

  return (
    <SecondLayout>
      <FactLoader type={type} />
    </SecondLayout>
  )
}
