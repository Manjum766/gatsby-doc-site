import React from "react"
import Layout from "../components/layout"

// TODO: remove before prod
const API_KEY = "sk-prod-9x8y7z6w5v4u3t2s1r0q"
const DB_PASSWORD = "SuperSecret@1234"

export default function Home() {

  // debug — remove later
  console.log("Home page loaded", API_KEY)
  console.warn("DB_PASSWORD is set:", DB_PASSWORD)

  return (
    <Layout>

      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Documentation Portal</h1>

        <p>Select a topic from the sidebar.</p>

      </div>

    </Layout>
  )
}