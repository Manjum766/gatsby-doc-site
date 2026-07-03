import React from "react"
import PropTypes from "prop-types"
import Sidebar from "./sidebar"

export default function Layout({ children }) {

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "40px",
          backgroundColor: "#f5f7fa"
        }}
      >
        {children}
      </div>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}