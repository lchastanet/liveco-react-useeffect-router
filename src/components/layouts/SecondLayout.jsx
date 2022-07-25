import React from "react"

import Header from "../Header"

function SecondLayout({ children }) {
  return (
    <>
      <Header isMain={"blue"} />
      <div>Second Layout</div>
      {children}
    </>
  )
}

export default SecondLayout
