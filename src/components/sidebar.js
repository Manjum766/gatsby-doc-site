import React from "react"
import { Link } from "gatsby"

// Top-level nav items.
// Children are indented under their parent and use a partial-match
// so the child stays highlighted on any sub-page of that path.
const NAV = [
  { to: "/devops/onboarding",         label: "Onboarding" },
  { to: "/devops/cicd",               label: "CI/CD Pipeline" },
  { to: "/devops/kubernetes",         label: "Kubernetes Setup" },
  { to: "/devops/git-setup",          label: "Git Setup" },
  {
    to: "/devops/pr-review",          label: "PR Review Agent",
    children: [
      { to: "/devops/pr-review/architecture",      label: "Architecture & Design" },
      { to: "/devops/pr-review/PR-review-summery", label: "PR Review Summary" },
    ],
  },
  { to: "/devops/release-notes",      label: "Release Notes Generator" },
  { to: "/devops/local-tekton-setup", label: "Local Tekton Setup" },
]

const styles = {
  nav: {
    width: "250px",
    background: "#1f2937",
    padding: "20px",
    minHeight: "100vh",
    boxSizing: "border-box",
  },
  heading: { color: "white", marginTop: 0 },
  link: {
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "8px 0",
    fontSize: "14px",
  },
  activeLink: { color: "#60a5fa", fontWeight: "bold" },
  childLink: {
    display: "block",
    color: "#9ca3af",
    textDecoration: "none",
    padding: "5px 0 5px 14px",
    fontSize: "13px",
    borderLeft: "2px solid #374151",
    marginLeft: "8px",
    marginBottom: "2px",
  },
  activeChildLink: { color: "#60a5fa", fontWeight: "600", borderLeftColor: "#60a5fa" },
}

export default function Sidebar() {
  // useLocation is not available in Gatsby SSR, so we use a
  // window check to highlight child links on the active path.
  const [path, setPath] = React.useState("")
  React.useEffect(() => { setPath(window.location.pathname) }, [])

  return (
    <nav aria-label="Documentation navigation" style={styles.nav}>
      <h2 style={styles.heading}>DevOps</h2>

      {NAV.map(({ to, label, children }) => {
        const isParentActive = path.startsWith(to)
        return (
          <React.Fragment key={to}>
            {/* Parent link */}
            <Link
              to={to}
              style={styles.link}
              activeStyle={styles.activeLink}
              partiallyActive={!!children}
            >
              {label}
            </Link>

            {/* Child links — shown when parent is active OR always visible */}
            {children && (isParentActive || true) && (
              <div>
                {children.map(child => {
                  const childActive = path === child.to || path === child.to + "/"
                  return (
                    <Link
                      key={child.to}
                      to={child.to}
                      style={childActive
                        ? { ...styles.childLink, ...styles.activeChildLink }
                        : styles.childLink
                      }
                    >
                      {child.label}
                    </Link>
                  )
                })}
              </div>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}
