import React from "react"
import Layout from "../../components/layout"
import pipeline from "../../images/pipeline.png"

export default function Onboarding() {
  return (
    <Layout>

      <h1>DevOps Onboarding</h1>

      <h2>Step 1 – Clone Repository</h2>
      <p>
        Clone the project repository from GitHub.
      </p>

      <pre>
        git clone https://github.com/Manjum766/gatsby-doc-site.git
      </pre>

      <h2>Step 2 – Install Dependencies</h2>

      <pre>
        npm install
      </pre>

      <h2>Step 3 – Run Pipeline</h2>

      <img
        src={pipeline}
        alt="pipeline"
        style={{ width: "300px" }}
      />

    </Layout>
  )
}