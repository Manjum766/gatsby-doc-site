import React, { useState } from "react"
import { Link } from "gatsby"

export default function Sidebar() {

  const [showDevops, setShowDevops] = useState(false)

  const toggleDevops = () => {
    setShowDevops(!showDevops)
  }

  return (
    <div style={{
      width: "220px",
      background: "#f4f4f4",
      padding: "20px"
    }}>

      <div
        style={{ cursor: "pointer", fontWeight: "bold" }}
        onClick={toggleDevops}
      >
        DevOps ▼
      </div>

      {showDevops && (
        <ul style={{ marginTop: "10px" }}>
          <li>
            <Link to="/devops/onboarding">
              Onboarding Steps
            </Link>
          </li>
        </ul>
      )}

    </div>
  )
}