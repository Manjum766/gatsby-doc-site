import React from "react"
import Sidebar from "../components/sidebar"

export default function HomePage() {

  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ padding: "40px" }}>
        <h1>Documentation Portal</h1>
        <p>Select a topic from the sidebar.</p>
      </div>

    </div>
  )
}