import React from "react"

import Header from "../Header"

function MainLayout({ children }) {
  return (
    <>
      <Header isMain={"red"} />
      <div>Main Layout</div>
      {children}
    </>
  )
}

export default MainLayout
