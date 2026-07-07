import React from "react"
import Layout from "../../components/layout"

const s = {
  badge: {
    display: "inline-block", fontSize: "11px", fontWeight: 600,
    letterSpacing: ".05em", textTransform: "uppercase", color: "#fff",
    background: "#2da44e", borderRadius: "3px", padding: "2px 8px", marginBottom: "10px",
  },
  header: { borderBottom: "2px solid #e5e7eb", paddingBottom: "20px", marginBottom: "32px" },
  h1: { fontSize: "22px", fontWeight: 700, color: "#1f2328", marginBottom: "6px" },
  subtitle: { color: "#57606a", fontSize: "13px" },
  metaRow: { display: "flex", gap: "24px", marginTop: "14px", flexWrap: "wrap" },
  metaItem: { fontSize: "12px", color: "#57606a" },
  section: {
    fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
    letterSpacing: ".06em", color: "#57606a", margin: "32px 0 12px",
    paddingBottom: "4px", borderBottom: "1px solid #e5e7eb",
  },
  h2: {
    fontSize: "15px", fontWeight: 700, color: "#1f2328",
    margin: "28px 0 12px", display: "flex", alignItems: "center", gap: "8px",
  },
  h3: { fontSize: "13px", fontWeight: 700, color: "#1f2328", margin: "18px 0 8px" },
  p: { marginBottom: "12px", fontSize: "13px", lineHeight: 1.7 },
  ul: { paddingLeft: "20px", marginBottom: "12px" },
  ol: { paddingLeft: "20px", marginBottom: "12px" },
  li: { marginBottom: "6px", fontSize: "13px" },
  num: {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: "22px", height: "22px", background: "#2da44e", color: "#fff",
    fontSize: "11px", fontWeight: 700, borderRadius: "50%", flexShrink: 0,
  },
  inlineCode: {
    background: "#f0f0f0", borderRadius: "3px", padding: "1px 5px",
    fontFamily: '"SF Mono", "Consolas", monospace', fontSize: "12px",
  },
  commandBlock: {
    background: "#1f2328", color: "#e6edf3", borderRadius: "6px",
    padding: "14px 16px", fontFamily: '"SF Mono", "Consolas", monospace',
    fontSize: "12px", lineHeight: "1.8", margin: "12px 0", overflowX: "auto",
    whiteSpace: "pre",
  },
  infoBox: {
    background: "#e0f2fe", borderLeft: "4px solid #0284c7", borderRadius: "6px",
    padding: "12px 16px", margin: "12px 0", fontSize: "13px",
  },
  warningBox: {
    background: "#fef9c3", borderLeft: "4px solid #ca8a04", borderRadius: "6px",
    padding: "12px 16px", margin: "12px 0", fontSize: "13px",
  },
  successBox: {
    background: "#dcfce7", borderLeft: "4px solid #166534", borderRadius: "6px",
    padding: "12px 16px", margin: "12px 0", fontSize: "13px",
  },
  tableWrap: { overflowX: "auto", margin: "12px 0" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "13px" },
  th: {
    background: "#f7f8fa", border: "1px solid #e5e7eb", padding: "8px 12px",
    textAlign: "left", fontWeight: 600, fontSize: "12px",
    textTransform: "uppercase", letterSpacing: "0.04em", color: "#57606a",
  },
  td:  { border: "1px solid #e5e7eb", padding: "9px 12px", verticalAlign: "top" },
  tdA: { border: "1px solid #e5e7eb", padding: "9px 12px", verticalAlign: "top", background: "#f7f8fa" },
  flow: {
    background: "#f7f8fa", border: "1px solid #e5e7eb", borderRadius: "6px",
    padding: "20px 24px", margin: "16px 0",
  },
  flowStep: {
    display: "flex", alignItems: "flex-start", gap: "12px",
    paddingBottom: "14px", marginBottom: "14px", borderBottom: "1px solid #e5e7eb",
  },
  flowStepLast: {
    display: "flex", alignItems: "flex-start", gap: "12px",
  },
  stepNum: {
    minWidth: "24px", height: "24px", borderRadius: "50%",
    background: "#2da44e", color: "#fff", fontSize: "11px", fontWeight: 700,
    display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px",
  },
  stepText: { fontSize: "13px", lineHeight: 1.6 },
  stepTitle: { fontWeight: 700, color: "#1f2328", marginBottom: "2px" },
  pill: {
    display: "inline-block", fontSize: "10px", fontWeight: 600, padding: "1px 6px",
    borderRadius: "10px", background: "#e8f0fc", color: "#3b82d4",
  },
  pillGreen: {
    display: "inline-block", fontSize: "10px", fontWeight: 600, padding: "1px 6px",
    borderRadius: "10px", background: "#dcfce7", color: "#166534",
  },
  pillOrange: {
    display: "inline-block", fontSize: "10px", fontWeight: 600, padding: "1px 6px",
    borderRadius: "10px", background: "#fef9c3", color: "#9a6700",
  },
  secretRow: {
    display: "flex", alignItems: "baseline", gap: "10px",
    padding: "10px 0", borderBottom: "1px solid #e5e7eb", fontSize: "13px",
  },
  secretRowLast: {
    display: "flex", alignItems: "baseline", gap: "10px",
    padding: "10px 0", fontSize: "13px",
  },
  secretKey: {
    fontFamily: '"SF Mono","Consolas",monospace', fontSize: "12px",
    background: "#f0f0f0", padding: "2px 6px", borderRadius: "3px",
    flexShrink: 0, minWidth: "200px",
  },
  exampleBlock: {
    background: "#f7f8fa", border: "1px solid #e5e7eb", borderRadius: "6px",
    fontFamily: '"SF Mono","Consolas",monospace', fontSize: "12px",
    lineHeight: 1.8, padding: "16px 18px", margin: "12px 0", color: "#1f2328",
    overflowX: "auto", whiteSpace: "pre",
  },
  outputBox: {
    borderLeft: "4px solid #2da44e", background: "#f0fdf4",
    padding: "14px 18px", borderRadius: "0 6px 6px 0",
    margin: "12px 0", fontSize: "13px",
  },
}

const C = ({ children }) => <code style={s.inlineCode}>{children}</code>
const Cmd = ({ children }) => <div style={s.commandBlock}>{children}</div>
const Num = ({ n }) => <span style={s.num}>{n}</span>

const FLOW_STEPS = [
  {
    title: "Trigger",
    desc: <>PR merged into <C>master</C>, or manual dispatch from the GitHub Actions UI with an optional sprint name and release tag.</>,
  },
  {
    title: "Resolve metadata",
    desc: <>Computes the release tag (supplied or auto-generated as <C>vYYYY.MM.DD-&lt;sha&gt;</C>) and sprint identifier (<C>active</C> or named).</>,
  },
  {
    title: "Collect merged PRs",
    desc: <>Uses the GitHub CLI to list all PRs merged into <C>master</C> since the last published GitHub Release tag. Each PR title, author, labels, and first 500 chars of body are captured.</>,
  },
  {
    title: "Fetch Jira sprint tickets",
    desc: <>Calls the Jira Agile REST API to locate board <strong>SCRUM-1</strong> on <C>manjum005.atlassian.net</C>, then fetches every issue in the target sprint — including summary, type, status, priority, assignee, and labels.</>,
  },
  {
    title: "GPT-4o release notes",
    desc: <>Both datasets are sent to GPT-4o with a structured prompt. The LLM groups issues by type (Story / Bug / Task), maps PRs to Jira tickets where keys match, writes a 2–3 sentence executive Highlights summary, and outputs clean Markdown.</>,
  },
  {
    title: "Create GitHub Release",
    desc: <>The generated Markdown is used as the GitHub Release body. If the tag already exists the release body is updated in-place; otherwise a new release is created pointing at <C>master</C>.</>,
  },
  {
    title: "CHANGELOG PR",
    desc: <>The new release notes are prepended to <C>CHANGELOG.md</C> on a new branch <C>chore/release-notes-&lt;tag&gt;</C> and a ready-to-merge PR is opened automatically.</>,
  },
]

const SECRETS = [
  { key: "JIRA_BASE_URL",     desc: "Full Atlassian URL — e.g. https://manjum005.atlassian.net",   required: true },
  { key: "JIRA_USER_EMAIL",   desc: "Your Atlassian account email address",                        required: true },
  { key: "JIRA_API_TOKEN",    desc: "Atlassian API token (Account Settings → Security → API tokens)", required: true },
  { key: "JIRA_PROJECT_KEY",  desc: "Jira project key — SCRUM for this board",                     required: true },
  { key: "OPENAI_API_KEY",    desc: "OpenAI API key for GPT-4o. When absent, raw Markdown is generated instead", required: false },
]

const OUTPUT_SECTIONS = [
  ["Highlights",         "2–3 sentence executive summary of the most impactful changes"],
  ["New Features",       "Stories / tasks introducing new user-visible functionality"],
  ["Bug Fixes",          "Bug-type Jira issues and fix/* PRs"],
  ["Improvements",       "Refactors, performance wins, non-breaking enhancements"],
  ["Security & Chores",  "Security fixes, dependency upgrades, CI/CD changes"],
  ["Jira Tickets",       "Full table: key, summary, type, status, assignee, link"],
  ["Pull Requests",      "Merged PRs mapped to their Jira ticket where the key appears in the title/body"],
]

export default function ReleaseNotesPage() {
  return (
    <Layout>
      {/* ── Header ── */}
      <div style={s.header}>
        <div style={s.badge}>GitHub Actions + Jira + GPT-4o</div>
        <h1 style={s.h1}>Release Notes Generator</h1>
        <p style={s.subtitle}>
          Automated sprint release notes — pulls every Jira ticket from your active sprint,
          correlates merged PRs, and produces structured Markdown via GPT-4o.
        </p>
        <div style={s.metaRow}>
          {[
            ["Jira Project", "SCRUM"],
            ["Jira Board",   "manjum005.atlassian.net/jira/software/projects/SCRUM/boards/1"],
            ["Workflow file", ".github/workflows/release-notes.yml"],
            ["Trigger", "PR merged to master / manual dispatch"],
          ].map(([k, v]) => (
            <div key={k} style={s.metaItem}><strong style={{ color: "#1f2328" }}>{k}:</strong> {v}</div>
          ))}
        </div>
      </div>

      {/* ── Overview ── */}
      <h2 style={s.section}>Overview</h2>
      <p style={s.p}>
        Every time a PR is merged to <C>master</C> — or on demand via the GitHub Actions UI —
        the Release Notes Generator workflow automatically:
      </p>
      <ul style={s.ul}>
        <li style={s.li}>Authenticates with your Jira instance and fetches all tickets for the active (or named) sprint on the <C>SCRUM</C> board</li>
        <li style={s.li}>Collects all GitHub PRs merged since the last published release tag</li>
        <li style={s.li}>Sends both datasets to <strong>GPT-4o</strong> which groups, summarises, and formats them into professional release notes</li>
        <li style={s.li}>Creates a <strong>GitHub Release</strong> with the generated Markdown as its body</li>
        <li style={s.li}>Opens a <strong>PR to update <C>CHANGELOG.md</C></strong> — no manual editing needed</li>
      </ul>
      <div style={s.infoBox}>
        <strong>No OpenAI key?</strong> The workflow degrades gracefully — it produces a plain
        Markdown list of Jira tickets and PRs without LLM summarisation. Everything else still works.
      </div>

      {/* ── How It Works ── */}
      <h2 style={s.section}>How It Works — Step by Step</h2>
      <div style={s.flow}>
        {FLOW_STEPS.map(({ title, desc }, i) => (
          <div key={title} style={i < FLOW_STEPS.length - 1 ? s.flowStep : s.flowStepLast}>
            <div style={s.stepNum}>{i + 1}</div>
            <div style={s.stepText}>
              <div style={s.stepTitle}>{title}</div>
              <div style={{ color: "#57606a" }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Required Secrets ── */}
      <h2 style={s.section}>Required Secrets Setup</h2>
      <p style={s.p}>
        Add these in <strong>GitHub → Settings → Secrets and variables → Actions → New repository secret</strong>:
      </p>
      <div style={{ border: "1px solid #e5e7eb", borderRadius: "6px", overflow: "hidden", margin: "12px 0" }}>
        {SECRETS.map(({ key, desc, required }, i, arr) => (
          <div key={key} style={{ ...(i < arr.length - 1 ? s.secretRow : s.secretRowLast), padding: "10px 14px" }}>
            <code style={s.secretKey}>{key}</code>
            <span style={{ color: "#57606a", fontSize: "13px", flex: 1 }}>{desc}</span>
            <span style={required ? s.pillGreen : s.pillOrange}>
              {required ? "Required" : "Optional"}
            </span>
          </div>
        ))}
      </div>

      <h3 style={s.h3}>Getting a Jira API Token</h3>
      <ol style={s.ol}>
        <li style={s.li}>Go to <strong>id.atlassian.com</strong> → <strong>Security</strong> → <strong>API tokens</strong></li>
        <li style={s.li}>Click <strong>Create API token</strong>, name it <C>GitHub-Release-Notes</C></li>
        <li style={s.li}>Copy the token immediately — it won't be shown again</li>
        <li style={s.li}>Set <C>JIRA_USER_EMAIL</C> to the email of the account that created the token</li>
      </ol>

      {/* ── Trigger Modes ── */}
      <h2 style={s.section}>Trigger Modes</h2>

      <h3 style={s.h3}>Automatic — on PR merge</h3>
      <p style={s.p}>
        The workflow triggers on every PR that is merged to <C>master</C>. It uses the
        <strong> active sprint</strong> and auto-generates a date-based tag
        (<C>vYYYY.MM.DD-&lt;sha&gt;</C>).
      </p>

      <h3 style={s.h3}>Manual — workflow dispatch</h3>
      <p style={s.p}>
        Navigate to <strong>GitHub → Actions → Release Notes Generator → Run workflow</strong>
        and fill in the two optional inputs:
      </p>
      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Input</th>
              <th style={s.th}>Example</th>
              <th style={s.th}>Default</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["sprint_name", "Sprint 1", "Active sprint on the board"],
              ["release_tag",  "v1.2.0",  "Auto-generated: vYYYY.MM.DD-<sha>"],
            ].map(([inp, ex, def], i) => (
              <tr key={inp}>
                <td style={i % 2 ? s.tdA : s.td}><C>{inp}</C></td>
                <td style={i % 2 ? s.tdA : s.td}><C>{ex}</C></td>
                <td style={i % 2 ? s.tdA : s.td}>{def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={s.warningBox}>
        <strong>Sprint name must be exact.</strong> The workflow matches the sprint name
        character-for-character against the Jira API. Check the exact name at{" "}
        <C>manjum005.atlassian.net/jira/software/projects/SCRUM/boards/1</C> (Backlog view shows sprint names).
      </div>

      {/* ── Output Structure ── */}
      <h2 style={s.section}>Generated Release Notes Structure</h2>
      <p style={s.p}>GPT-4o produces the following sections when an OpenAI key is present:</p>
      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Section</th>
              <th style={s.th}>Content</th>
            </tr>
          </thead>
          <tbody>
            {OUTPUT_SECTIONS.map(([section, content], i) => (
              <tr key={section}>
                <td style={i % 2 ? s.tdA : s.td}><strong>{section}</strong></td>
                <td style={i % 2 ? s.tdA : s.td}>{content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={s.h3}>Example Output</h3>
      <div style={s.exampleBlock}>{`# Release v2025.01.15-a3f9c2
**Date:** 2025-01-15
**Sprint:** Sprint 3

## Highlights
This release delivers the PR Review Agent documentation and local Tekton setup
guide, completing the DevOps onboarding section. A Jira lifecycle integration
was added so tickets transition automatically on PR open/merge.

## New Features
| Ticket | Summary | Assignee |
|--------|---------|----------|
| [SCRUM-12](https://manjum005.atlassian.net/browse/SCRUM-12) | PR Review Agent architecture page | @Manjum766 |
| [SCRUM-14](https://manjum005.atlassian.net/browse/SCRUM-14) | Local Tekton setup documentation | @Manjum766 |

## Bug Fixes
| Ticket | Summary |
|--------|---------|
| [SCRUM-11](https://manjum005.atlassian.net/browse/SCRUM-11) | Fix sidebar active link highlight on sub-pages |

## Pull Requests
- [#42] docs(pr-review): add architecture & design plan — @Manjum766 → SCRUM-12
- [#41] fix(sidebar): correct active child link detection — @Manjum766 → SCRUM-11`}
      </div>

      {/* ── Jira API Details ── */}
      <h2 style={s.section}>Jira Integration Details</h2>

      <h3 style={s.h3}>API endpoints used</h3>
      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Purpose</th>
              <th style={s.th}>Endpoint</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Find board ID for SCRUM project", "/rest/agile/1.0/board?projectKeyOrId=SCRUM"],
              ["Get active sprint",               "/rest/agile/1.0/board/{id}/sprint?state=active"],
              ["Get named sprint",                "/rest/agile/1.0/board/{id}/sprint?maxResults=50"],
              ["Fetch sprint issues",             "/rest/api/3/search?jql=sprint={id}&maxResults=100"],
            ].map(([purpose, endpoint], i) => (
              <tr key={endpoint}>
                <td style={i % 2 ? s.tdA : s.td}>{purpose}</td>
                <td style={i % 2 ? s.tdA : s.td}><C>{endpoint}</C></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={s.h3}>Fields captured per Jira ticket</h3>
      <ul style={s.ul}>
        {["key (e.g. SCRUM-12)", "summary", "issue type (Story / Bug / Task / Sub-task)", "status (To Do / In Progress / Done)", "priority", "assignee display name", "labels", "direct URL to ticket"].map(f => (
          <li key={f} style={s.li}><C>{f}</C></li>
        ))}
      </ul>

      <div style={s.infoBox}>
        <strong>Sprint not found?</strong> If the sprint name doesn't match exactly, the workflow
        falls back to the 50 most recently updated issues in the project — so you always get
        something useful rather than an empty release.
      </div>

      {/* ── Workflow Permissions ── */}
      <h2 style={s.section}>One-Time Repository Setup</h2>
      <ol style={s.ol}>
        <li style={s.li}>
          <strong>Workflow permissions:</strong> Go to <C>Settings → Actions → General → Workflow permissions</C>{" "}
          and select <strong>Read and write</strong>. This allows the workflow to create releases and open PRs.
        </li>
        <li style={s.li}>
          <strong>Add all 5 secrets</strong> listed in the secrets table above.
        </li>
        <li style={s.li}>
          <strong>First run:</strong> Trigger manually via{" "}
          <C>Actions → Release Notes Generator → Run workflow</C> to validate the Jira connection
          before relying on the automatic merge trigger.
        </li>
      </ol>

      <div style={s.successBox}>
        <strong>Verify Jira connectivity manually:</strong>
        <Cmd>{`curl -u YOUR_EMAIL:YOUR_API_TOKEN \\
  "https://manjum005.atlassian.net/rest/agile/1.0/board?projectKeyOrId=SCRUM" \\
  | jq '.values[].name'`}</Cmd>
        You should see the board name printed. If you get a 401, the email or token is wrong.
      </div>

      {/* ── Workflow File Reference ── */}
      <h2 style={s.section}>Workflow File Reference</h2>
      <p style={s.p}>
        The complete workflow is at{" "}
        <C>.github/workflows/release-notes.yml</C> in the repository.
        Jobs run sequentially (each step depends on the previous output):
      </p>
      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Step</th>
              <th style={s.th}>Tool</th>
              <th style={s.th}>Output</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Checkout + metadata",    "git, bash",                    "release tag, sprint name"],
              ["Previous tag lookup",    "git tag",                      "base ref for PR range"],
              ["Collect merged PRs",     "GitHub CLI (gh)",              "/tmp/prs.json"],
              ["Fetch Jira tickets",     "curl + Jira REST API",         "/tmp/jira_tickets.json"],
              ["Generate notes",         "GPT-4o (or Python fallback)",  "/tmp/release_notes.md"],
              ["Create GitHub Release",  "GitHub CLI (gh)",              "GitHub Release with notes"],
              ["CHANGELOG PR",           "git + GitHub CLI",             "PR on chore/release-notes-* branch"],
            ].map(([step, tool, output], i) => (
              <tr key={step}>
                <td style={i % 2 ? s.tdA : s.td}><strong>{step}</strong></td>
                <td style={i % 2 ? s.tdA : s.td}><C>{tool}</C></td>
                <td style={i % 2 ? s.tdA : s.td}>{output}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Troubleshooting ── */}
      <h2 style={s.section}>Troubleshooting</h2>

      <h3 style={s.h3}>401 Unauthorized from Jira API</h3>
      <ul style={s.ul}>
        <li style={s.li}><C>JIRA_USER_EMAIL</C> must be the exact email of the account that owns the API token</li>
        <li style={s.li}>API tokens expire — regenerate at <C>id.atlassian.com → Security → API tokens</C></li>
        <li style={s.li}>The Atlassian free plan requires the user to be a project member</li>
      </ul>

      <h3 style={s.h3}>Sprint not found / empty ticket list</h3>
      <ul style={s.ul}>
        <li style={s.li}>Check the exact sprint name at <C>SCRUM board → Backlog</C> view</li>
        <li style={s.li}>Sprint names are case-sensitive (e.g. <C>Sprint 1</C> not <C>sprint 1</C>)</li>
        <li style={s.li}>If no sprint is active and input is blank, the fallback lists recent project issues</li>
      </ul>

      <h3 style={s.h3}>GitHub Release already exists</h3>
      <p style={s.p}>
        The workflow calls <C>gh release edit</C> if the tag already exists, updating the body
        in-place. You can safely re-run the workflow after fixing secrets.
      </p>

      <h3 style={s.h3}>CHANGELOG PR conflicts</h3>
      <p style={s.p}>
        If a <C>chore/release-notes-*</C> branch already exists from a previous run, delete it
        from GitHub and re-run. Each run creates a fresh branch with the tag in the name.
      </p>

      <h3 style={s.h3}>LLM produces empty or truncated output</h3>
      <ul style={s.ul}>
        <li style={s.li}>Verify <C>OPENAI_API_KEY</C> is valid and the account has GPT-4o access</li>
        <li style={s.li}>Very large sprints (100+ tickets) may approach token limits — the workflow caps at 2000 output tokens</li>
        <li style={s.li}>The Python fallback always produces output regardless of LLM availability</li>
      </ul>

      <div style={{ marginTop: "40px", paddingTop: "14px", borderTop: "1px solid #e5e7eb", textAlign: "center", fontSize: "11px", color: "#8c8fa3" }}>
        Made with IBM Bob
      </div>
    </Layout>
  )
}
