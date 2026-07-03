import React from "react"
import Layout from "../../components/layout"

export default function PRReviewPage() {
  return (
    <Layout>
      <h1>PR Review Agent</h1>
      <p>
        The PR Review Agent is a fully automated GitHub Actions workflow that
        triggers on every pull request event (<code>opened</code>,{" "}
        <code>edited</code>, <code>synchronize</code>, <code>reopened</code>).
      </p>

      <h2>What it does</h2>
      <ul>
        <li>
          <strong>Enforces enterprise PR standards</strong> — validates
          Conventional Commit title format, branch naming convention, and
          ensures the PR template is filled in.
        </li>
        <li>
          <strong>Builds &amp; lints</strong> — runs <code>gatsby build</code>{" "}
          and checks for debug statements or hard-coded secrets in source files.
        </li>
        <li>
          <strong>LLM-assisted code review</strong> — sends the PR diff to
          GPT-4o and posts a structured review comment with severity-rated
          findings.
        </li>
        <li>
          <strong>Security scanning</strong> — runs{" "}
          <code>npm audit</code>, Gitleaks secret detection, and OWASP
          Dependency-Check with SARIF upload to the GitHub Security tab.
        </li>
      </ul>

      <h2>Required setup</h2>
      <ol>
        <li>
          Set <strong>Workflow permissions</strong> to <em>Read and write</em>{" "}
          in <code>Settings → Actions → General</code>.
        </li>
        <li>
          Add the <code>OPENAI_API_KEY</code> repository secret for LLM
          reviews.
        </li>
        <li>
          Add a branch protection rule on <code>master</code> requiring the{" "}
          <em>✅ PR Review Gate</em> status check to pass before merge.
        </li>
      </ol>
    </Layout>
  )
}
