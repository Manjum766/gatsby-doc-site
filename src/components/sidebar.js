import React from "react"
import { Link } from "gatsby"

const NAV_LINKS = [
  { to: "/devops/onboarding",   label: "Onboarding" },
  { to: "/devops/cicd",         label: "CI/CD Pipeline" },
  { to: "/devops/kubernetes",   label: "Kubernetes Setup" },
  { to: "/devops/git-setup",    label: "Git Setup" },
  { to: "/devops/pr-review",    label: "PR Review Agent" },
]

const linkStyle = {
  display: "block",
  color: "white",
  textDecoration: "none",
  padding: "8px 0",
}

const activeLinkStyle = { color: "#60a5fa", fontWeight: "bold" }

export default function Sidebar() {
  return (
    <nav
      aria-label="Documentation navigation"
      style={{
        width: "250px",
        background: "#1f2937",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "white", marginTop: 0 }}>DevOps</h2>

      {NAV_LINKS.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          style={linkStyle}
          activeStyle={activeLinkStyle}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}