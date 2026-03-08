import React from "react"
import { Link } from "gatsby"

export default function Sidebar() {

  const linkStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "8px 0"
  }

  return (
    <div
      style={{
        width: "250px",
        background: "#1f2937",
        padding: "20px",
        minHeight: "100vh"
      }}
    >

      <h2 style={{ color: "white" }}>DevOps</h2>

      <Link
        to="/devops/onboarding"
        style={linkStyle}
        activeStyle={{ color: "#60a5fa", fontWeight: "bold" }}
      >
        Onboarding
      </Link>

      <Link
        to="/devops/cicd"
        style={linkStyle}
        activeStyle={{ color: "#60a5fa", fontWeight: "bold" }}
      >
        CI/CD Pipeline
      </Link>

      <Link
        to="/devops/kubernetes"
        style={linkStyle}
        activeStyle={{ color: "#60a5fa", fontWeight: "bold" }}
      >
        Kubernetes Setup
      </Link>

    </div>
  )
}