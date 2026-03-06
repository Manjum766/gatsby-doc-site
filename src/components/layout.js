import React from "react"
import Sidebar from "./sidebar"

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      
      <Sidebar />

      <main style={{
        flex: 1,
        padding: "30px",
        background: "#f5f5f5"
      }}>
        {children}
      </main>

    </div>
  )
}