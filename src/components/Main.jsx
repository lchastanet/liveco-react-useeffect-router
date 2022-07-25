import { Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Notes from "../pages/Notes"
import Facts from "../pages/Facts"

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facts/:type" element={<Facts />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </main>
  )
}
