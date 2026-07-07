import React from "react"
import { Link } from "gatsby"
import Layout from "../../../components/layout"

const s = {
  badge: {
    display: "inline-block", fontSize: "11px", fontWeight: 600,
    letterSpacing: ".05em", textTransform: "uppercase", color: "#fff",
    background: "#3b82d4", borderRadius: "3px", padding: "2px 8px", marginBottom: "10px",
  },
  header: { borderBottom: "2px solid #e5e7eb", paddingBottom: "20px", marginBottom: "32px" },
  h1: { fontSize: "22px", fontWeight: 700, color: "#1f2328", marginBottom: "6px" },
  subtitle: { color: "#57606a", fontSize: "13px" },
  metaRow: { display: "flex", gap: "24px", marginTop: "14px", flexWrap: "wrap" },
  metaItem: { fontSize: "12px", color: "#57606a" },
  h2: {
    fontSize: "16px", fontWeight: 700, color: "#1f2328",
    margin: "36px 0 14px", paddingBottom: "6px", borderBottom: "1px solid #e5e7eb",
    display: "flex", alignItems: "center", gap: "8px",
  },
  num: {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: "22px", height: "22px", background: "#3b82d4", color: "#fff",
    fontSize: "11px", fontWeight: 700, borderRadius: "50%", flexShrink: 0,
  },
  h3: { fontSize: "13px", fontWeight: 700, color: "#1f2328", margin: "18px 0 8px" },
  p: { marginBottom: "12px", fontSize: "13px" },
  ul: { paddingLeft: "20px", marginBottom: "12px" },
  li: { marginBottom: "4px", fontSize: "13px" },
  code: { fontFamily: '"SFMono-Regular", Consolas, monospace', fontSize: "12px" },
  pre: {
    background: "#f7f8fa", border: "1px solid #e5e7eb", borderRadius: "5px",
    padding: "14px 16px", fontFamily: '"SFMono-Regular", Consolas, monospace',
    fontSize: "12px", lineHeight: 1.6, overflowX: "auto", color: "#1f2328",
    margin: "12px 0", whiteSpace: "pre",
  },
  tableWrap: { overflowX: "auto", margin: "12px 0" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "13px" },
  th: { background: "#f7f8fa", border: "1px solid #e5e7eb", padding: "8px 12px", textAlign: "left", fontWeight: 600 },
  td: { border: "1px solid #e5e7eb", padding: "8px 12px", color: "#1f2328", verticalAlign: "top" },
  tdAlt: { border: "1px solid #e5e7eb", padding: "8px 12px", color: "#1f2328", verticalAlign: "top", background: "#fafbfc" },
  flow: { background: "#f7f8fa", border: "1px solid #e5e7eb", borderRadius: "6px", padding: "20px", margin: "16px 0" },
  flowBox: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: "4px", padding: "8px 12px", fontSize: "12px", fontWeight: 600, textAlign: "center", color: "#1f2328" },
  pillarsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", margin: "14px 0" },
  pillarCard: { background: "#f7f8fa", border: "1px solid #e5e7eb", borderRadius: "6px", padding: "14px 16px" },
  pillarTitle: { fontSize: "13px", fontWeight: 700, color: "#1f2328", marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" },
  pill: { fontSize: "10px", fontWeight: 600, padding: "1px 6px", borderRadius: "10px", background: "#e8f0fc", color: "#3b82d4" },
  pillarP: { fontSize: "12px", color: "#57606a" },
  example: { borderLeft: "3px solid #3b82d4", background: "#f0f6ff", borderRadius: "0 5px 5px 0", padding: "12px 16px", margin: "12px 0", fontSize: "12.5px" },
  exampleFix: { borderLeft: "3px solid #2da44e", background: "#f0fdf4", borderRadius: "0 5px 5px 0", padding: "12px 16px", margin: "12px 0", fontSize: "12.5px" },
  exampleWarn: { borderLeft: "3px solid #cf222e", background: "#fff0f0", borderRadius: "0 5px 5px 0", padding: "12px 16px", margin: "12px 0", fontSize: "12.5px" },
  exTitle: { fontWeight: 700, fontSize: "12px", marginBottom: "6px" },
  pipeline: { display: "flex", alignItems: "flex-start", gap: 0, margin: "16px 0", overflowX: "auto" },
  pipeStep: { display: "flex", flexDirection: "column", alignItems: "center", minWidth: "110px" },
  pipeBox: { background: "#f7f8fa", border: "1px solid #e5e7eb", borderRadius: "5px", padding: "8px 10px", fontSize: "11px", fontWeight: 600, textAlign: "center", color: "#1f2328", width: "100px" },
  pipeConnector: { width: "28px", height: "1px", background: "#bcc0c8", marginTop: "26px", flexShrink: 0 },
  pipeLabel: { fontSize: "10px", color: "#57606a", marginTop: "6px", textAlign: "center", width: "100px" },
  templatePreview: {
    background: "#f7f8fa", border: "1px solid #e5e7eb", borderRadius: "6px",
    padding: "16px 18px", fontFamily: '"SFMono-Regular", Consolas, monospace',
    fontSize: "12px", lineHeight: 1.8, color: "#1f2328", margin: "12px 0",
  },
  statusList: { listStyle: "none", padding: 0, background: "#f7f8fa", border: "1px solid #e5e7eb", borderRadius: "6px" },
  statusItem: { display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderBottom: "1px solid #e5e7eb", fontSize: "13px" },
  statusItemLast: { display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", fontSize: "13px" },
  dot: { width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0 },
  breadcrumb: { fontSize: "12px", color: "#57606a", marginBottom: "24px" },
}

const Tag = ({ type, children }) => {
  const styles = {
    block: { background: "#ffeef0", color: "#cf222e" },
    warn:  { background: "#fff8c5", color: "#9a6700" },
    ok:    { background: "#dafbe1", color: "#2da44e" },
    info:  { background: "#e8f0fc", color: "#3b82d4" },
  }
  return (
    <span style={{ display: "inline-block", fontSize: "11px", fontWeight: 600, padding: "1px 7px", borderRadius: "10px", ...styles[type] }}>
      {children}
    </span>
  )
}

const Num = ({ n }) => <span style={s.num}>{n}</span>
const C = ({ children }) => <code style={s.code}>{children}</code>

export default function PRReviewArchitecture() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div style={s.breadcrumb}>
        <Link to="/devops/pr-review" style={{ color: "#3b82d4", textDecoration: "none" }}>
          ← PR Review Agent
        </Link>
        {" / Architecture & Design Plan"}
      </div>

      {/* Header */}
      <div style={s.header}>
        <div style={s.badge}>Design Specification</div>
        <h1 style={s.h1}>PR Review Agent — Architecture &amp; Design Plan</h1>
        <p style={s.subtitle}>Automated Pull Request governance for IBM AEM as a Cloud Service (AEMaaCS) — ibm-cms-cloud</p>
        <div style={s.metaRow}>
          {[
            ["Repository", "ibm-cms-cloud"],
            ["Platform", "GitHub Actions + watsonx / GPT-4o"],
            ["Jira Project", "ADCMS"],
            ["Branch", "develop"],
          ].map(([k, v]) => (
            <div key={k} style={s.metaItem}><strong style={{ color: "#1f2328" }}>{k}:</strong> {v}</div>
          ))}
        </div>
      </div>

      {/* 0 — Overview */}
      <h2 style={s.h2}><Num n="0" /> Overview</h2>
      <p style={s.p}>
        The PR Review Agent is a fully automated workflow triggered on every GitHub{" "}
        <C>pull_request</C> event (opened, edited, synchronize). It enforces enterprise PR
        standards, performs LLM-assisted code quality review, scans for security
        vulnerabilities, validates AEM cloud-readiness, and posts structured inline comments
        with suggested fixes — blocking merges on critical failures.
      </p>

      <div style={s.flow}>
        <div style={{ fontSize: "12px", fontWeight: 700, color: "#57606a", marginBottom: "12px", textTransform: "uppercase", letterSpacing: ".06em" }}>High-Level Flow</div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <div style={{ ...s.flowBox, borderLeft: "3px solid #3b82d4" }}>PR Opened<br /><span style={{ fontWeight: 400, color: "#57606a" }}>/ Edited / Sync</span></div>
          <span style={{ color: "#57606a", fontSize: "18px" }}>→</span>
          <div style={{ ...s.flowBox, borderLeft: "3px solid #7c5cd8", background: "#faf8ff" }}>PR Review<br />Agent</div>
          <span style={{ color: "#57606a", fontSize: "18px" }}>→</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {["PR Comment — Summary Report", "Inline File Comments + Suggested Fixes", "GitHub Status Checks", "Jira Ticket Transition → In Review"]
              .map(t => <div key={t} style={{ ...s.flowBox, borderLeft: "3px solid #57606a" }}>{t}</div>)}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "14px", flexWrap: "wrap" }}>
          <div style={{ fontSize: "12px", color: "#57606a", width: "200px" }}>All critical checks pass?</div>
          <div style={{ ...s.flowBox, borderLeft: "3px solid #2da44e", minWidth: "120px" }}>✅ Approve to Merge</div>
          <div style={{ fontSize: "12px", color: "#57606a" }}>or</div>
          <div style={{ ...s.flowBox, borderLeft: "3px solid #cf222e", minWidth: "140px" }}>🚫 Request Changes</div>
        </div>
      </div>

      {/* 1 — Six Pillars */}
      <h2 style={s.h2}><Num n="1" /> Six Core Capability Pillars</h2>
      <div style={s.pillarsGrid}>
        {[
          ["PR Template Compliance", "Pillar 1", "Validates PR title format, Jira URL, ticket key consistency, and all required sections against the official PR template."],
          ["Code Quality Review", "Pillar 2", "LLM-assisted static analysis on changed files — Java, JS/TS, SCSS, and HTL/Sightly with inline line-level comments."],
          ["Security & Vulnerability Scan", "Pillar 3", "OWASP CVE checks on Maven & npm dependencies, Semgrep SAST, and secret/credential leak detection."],
          ["AEM Cloud Readiness", "Pillar 4", "Enforces AEMaaCS-specific rules: mutable content placement, OSGi config naming, deprecated API detection, CODEOWNERS enforcement."],
          ["Dependency & Build Health", "Pillar 5", "Detects pom.xml version drift, SNAPSHOT versions on release branches, bundle size regressions, and licence compliance."],
          ["AI-Suggested Fixes", "Pillar 6", "For every issue found, the agent proposes a concrete, ready-to-apply code fix as an inline PR comment suggestion."],
        ].map(([title, pill, desc]) => (
          <div key={pill} style={s.pillarCard}>
            <div style={s.pillarTitle}>{title} <span style={s.pill}>{pill}</span></div>
            <p style={s.pillarP}>{desc}</p>
          </div>
        ))}
      </div>

      {/* 2 — Template Compliance */}
      <h2 style={s.h2}><Num n="2" /> Pillar 1 — PR Template Compliance</h2>
      <p style={s.p}>Based on <C>.github/pull_request_template.md</C>, every PR is checked against these rules:</p>
      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead><tr><th style={s.th}>Field</th><th style={s.th}>Validation Rule</th><th style={s.th}>Blocking?</th></tr></thead>
          <tbody>
            {[
              ["PR Title", <span>Must match <C>[ADCMS-\d+]: .+</C></span>, "block", "Hard Block"],
              ["Jira Ticket URL", <span>Must contain <C>https://jsw.ibm.com/browse/ADCMS-\d+</C></span>, "block", "Hard Block"],
              ["Jira Key Consistency", "Key in PR title must match the ticket number in Jira URL", "block", "Hard Block"],
              ["Jira Ticket State", "Ticket must not be in Closed / Done state", "block", "Hard Block"],
              ["Type of Change", "Section must not be empty or contain only the HTML comment placeholder", "warn", "Warning"],
              ["Brief Description", "Must have ≥ 20 characters of real content", "warn", "Warning"],
              ["Testing Instructions", "Must have at least one non-blank step beyond the bare 1.", "block", "Hard Block"],
              ["Acceptance Criteria", "Expected Results section must not be empty", "warn", "Warning"],
              ["Post Deployment", "Must not be left as a bare 1. with no content", "warn", "Warning"],
              ["Security Checklist", "All security checklist items must be checked or explicitly N/A", "block", "Hard Block"],
            ].map(([field, rule, tag, tagLabel], i) => (
              <tr key={field}>
                <td style={i % 2 ? s.tdAlt : s.td}><strong>{field}</strong></td>
                <td style={i % 2 ? s.tdAlt : s.td}>{rule}</td>
                <td style={i % 2 ? s.tdAlt : s.td}><Tag type={tag}>{tagLabel}</Tag></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ ...s.exampleWarn }}>
        <div style={{ ...s.exTitle, color: "#cf222e" }}>Sample Agent Output — Template Violations</div>
        ❌ <strong>PR Template Violations Found</strong><br /><br />
        • [HARD BLOCK] PR title "Fix styling" does not follow the convention.<br />
        &nbsp;&nbsp;✏️ Suggested title: <C>"ADCMS-1234: Fix padding on CTA components"</C><br /><br />
        • [HARD BLOCK] Jira Ticket URL is missing or malformed.<br />
        &nbsp;&nbsp;Expected format: <C>https://jsw.ibm.com/browse/ADCMS-XXXX</C><br /><br />
        • [WARNING] Testing Instructions section appears incomplete.
      </div>

      {/* 3 — Code Quality */}
      <h2 style={s.h2}><Num n="3" /> Pillar 2 — Code Quality Review (LLM-Assisted)</h2>
      <p style={s.p}>The agent diffs the PR, sends changed file chunks to the LLM, and posts inline comments at the exact lines:</p>
      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead><tr><th style={s.th}>Module</th><th style={s.th}>Language</th><th style={s.th}>What Is Checked</th></tr></thead>
          <tbody>
            {[
              ["core/", "Java", "Null safety, unclosed resources, broad exception catches, Sling model injection issues, missing @Nonnull/@Nullable annotations"],
              ["ui.frontend/", "JS / TS", "Unused variables, missing async error handling, debug statements left in, missing type annotations"],
              ["ui.frontend/", "SCSS / CSS", "Hardcoded colours instead of design tokens, !important abuse, magic numbers"],
              ["ui.apps/", "HTL / Sightly", "Business logic in templates, direct Java class usage, unescaped context attributes"],
            ].map(([mod, lang, checks], i) => (
              <tr key={`${mod}-${lang}`}>
                <td style={i % 2 ? s.tdAlt : s.td}><C>{mod}</C></td>
                <td style={i % 2 ? s.tdAlt : s.td}>{lang}</td>
                <td style={i % 2 ? s.tdAlt : s.td}>{checks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4 — Security */}
      <h2 style={s.h2}><Num n="4" /> Pillar 3 — Security &amp; Vulnerability Scan</h2>
      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead><tr><th style={s.th}>Scanner</th><th style={s.th}>Checks</th><th style={s.th}>Scope</th><th style={s.th}>CVE Threshold</th></tr></thead>
          <tbody>
            {[
              ["OWASP Dependency-Check", "CVEs in Maven dependencies", "pom.xml", "CVSS ≥ 7.0 → Block"],
              ["npm audit", "CVEs in npm packages", "ui.frontend/, ui.frontend.idl/, ui.frontend.widgets/", "High/Critical → Block"],
              ["Semgrep (OWASP)", "Injection, XSS, XXE, SSRF", "All Java & JS files", "Any finding → Block"],
              ["Trufflehog / Git-Secrets", "API keys, IBM Cloud credentials, tokens", "All committed files", "Any secret → Block"],
              ["AEM Security Rules", "QueryBuilder injection, anonymous Sling access, improper ACLs", "core/, ui.config/", "Critical → Block"],
            ].map(([scanner, checks, scope, threshold], i) => (
              <tr key={scanner}>
                <td style={i % 2 ? s.tdAlt : s.td}><strong>{scanner}</strong></td>
                <td style={i % 2 ? s.tdAlt : s.td}>{checks}</td>
                <td style={i % 2 ? s.tdAlt : s.td}><C>{scope}</C></td>
                <td style={i % 2 ? s.tdAlt : s.td}>{threshold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 5 — AEM Cloud */}
      <h2 style={s.h2}><Num n="5" /> Pillar 4 — AEM Cloud Readiness</h2>
      <p style={s.p}>Cloud-readiness rules specific to AEMaaCS (<em>ibm.com migration to AEMaaCS</em>):</p>
      <ul style={s.ul}>
        {[
          <span>No mutable content in <C>ui.apps/</C> — <C>/content</C> and <C>/conf</C> overlays must live in <C>ui.content/</C></span>,
          <span>OSGi config naming in <C>ui.config/</C> must follow <C>&lt;pid&gt;~&lt;runmode&gt;.cfg.json</C> pattern</span>,
          <span>No deprecated AEM APIs — flags <C>com.day.cq.*</C> where <C>com.adobe.cq.*</C> replacements exist</span>,
          <span>Replication API flagged as cloud-incompatible; Distribution API must be used instead</span>,
          <span>No <C>/etc/clientlibs</C> — must use <C>/apps/.../clientlibs</C></span>,
          <span>CODEOWNERS enforcement — changes to <C>ui.frontend.idl/js/main/</C> or <C>ui.frontend.idl/scss/</C> require review from <C>@Lucio-Poveda</C></span>,
          <span>analyse module reminder — links developer to run <C>mvn clean install</C> (triggers <C>aemanalyser-maven-plugin</C>)</span>,
        ].map((item, i) => <li key={i} style={s.li}>{item}</li>)}
      </ul>

      {/* 6 — Dependency */}
      <h2 style={s.h2}><Num n="6" /> Pillar 5 — Dependency &amp; Build Health</h2>
      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead><tr><th style={s.th}>Check</th><th style={s.th}>Rule</th><th style={s.th}>Blocking?</th></tr></thead>
          <tbody>
            {[
              ["Version drift", "Sub-module pom.xml version must not diverge from parent", "warn", "Warning"],
              ["SNAPSHOT on release branch", "SNAPSHOT dependencies blocked on main / release/*", "block", "Hard Block"],
              ["Bundle size regression", "Warning if ui.frontend build output grows > 10% vs base branch", "warn", "Warning"],
              ["Licence compliance", "GPL / AGPL dependencies flagged as incompatible with IBM enterprise usage", "block", "Hard Block"],
            ].map(([check, rule, tag, tagLabel], i) => (
              <tr key={check}>
                <td style={i % 2 ? s.tdAlt : s.td}>{check}</td>
                <td style={i % 2 ? s.tdAlt : s.td}>{rule}</td>
                <td style={i % 2 ? s.tdAlt : s.td}><Tag type={tag}>{tagLabel}</Tag></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 7 — AI Fixes */}
      <h2 style={s.h2}><Num n="7" /> Pillar 6 — AI-Suggested Fixes</h2>
      <p style={s.p}>For every issue found, the agent provides a concrete inline suggestion via the GitHub Suggestions API:</p>
      <div style={s.example}>
        <div style={{ ...s.exTitle, color: "#3b82d4" }}>Sample — Null Pointer Detection</div>
        🔍 <strong>Found:</strong> Potential null pointer at <C>core/src/main/.../MyModel.java:42</C><br />
        <C>resource.adaptTo(Page.class).getTitle()</C> — <C>adaptTo</C> can return null.
      </div>
      <div style={s.exampleFix}>
        <div style={{ ...s.exTitle, color: "#2da44e" }}>Suggested Fix (auto-inserted as GitHub suggestion)</div>
        <pre style={{ margin: 0, border: "none", background: "transparent", padding: 0, fontFamily: '"SFMono-Regular", Consolas, monospace', fontSize: "12px" }}>{`Page page = resource.adaptTo(Page.class);
String title = page != null ? page.getTitle() : StringUtils.EMPTY;`}</pre>
      </div>
      <div style={s.example}>
        <div style={{ ...s.exTitle, color: "#3b82d4" }}>Sample — Secret Detected</div>
        🔐 <strong>Potential IBM Cloud API key detected</strong> at <C>ui.config/config.cfg.json:7</C><br />
        Value matches pattern <C>ibmcloud_api_key</C>. Remove immediately and rotate credentials.
      </div>
      <div style={s.example}>
        <div style={{ ...s.exTitle, color: "#3b82d4" }}>Sample — Deprecated AEM API</div>
        ⚠️ <strong>Deprecated API usage</strong> at <C>core/src/main/.../PageHelper.java:18</C><br />
        <C>com.day.cq.wcm.api.Page</C> → replace with <C>com.adobe.cq.wcm.core.components.models.*</C>
      </div>

      {/* 8 — Pipeline */}
      <h2 style={s.h2}><Num n="8" /> GitHub Actions Workflow Pipeline</h2>
      <p style={s.p}>All jobs run in parallel after the PR event. Each job posts its own status check. The consolidated summary comment is posted after all jobs complete.</p>
      <div style={s.pipeline}>
        {[
          { label: "PR Event\nTrigger", sub: "opened / edited\n/ synchronize", color: "#3b82d4" },
          { label: "Template\nCompliance", sub: "pr-agent/\ntemplate", color: "#3b82d4" },
          { label: "LLM Code\nQuality", sub: "pr-agent/\ncode-quality", color: "#7c5cd8" },
          { label: "Security\nScan", sub: "pr-agent/\nsecurity", color: "#cf222e" },
          { label: "AEM Cloud\nReadiness", sub: "pr-agent/\naem-cloud", color: "#2da44e" },
          { label: "Dependency\nAudit", sub: "pr-agent/\ndependencies", color: "#57606a" },
          { label: "Summary\nComment", sub: "posted to\nPR thread", color: "#2da44e" },
        ].map(({ label, sub, color }, i, arr) => (
          <React.Fragment key={label}>
            <div style={s.pipeStep}>
              <div style={{ ...s.pipeBox, borderTop: `3px solid ${color}` }}>{label}</div>
              <div style={s.pipeLabel}>{sub}</div>
            </div>
            {i < arr.length - 1 && <div style={s.pipeConnector} />}
          </React.Fragment>
        ))}
      </div>

      <h3 style={s.h3}>Status Check — Blocking Matrix</h3>
      <ul style={s.statusList}>
        {[
          { color: "#cf222e", label: "pr-agent/template-compliance", tag: "block", tagLabel: "Blocks Merge" },
          { color: "#cf222e", label: "pr-agent/security-critical", tag: "block", tagLabel: "Blocks Merge" },
          { color: "#cf222e", label: "pr-agent/aem-cloud", tag: "block", tagLabel: "Blocks Merge" },
          { color: "#d29922", label: "pr-agent/code-quality", tag: "warn", tagLabel: "Advisory Only" },
          { color: "#d29922", label: "pr-agent/dependencies", tag: "warn", tagLabel: "Advisory Only" },
        ].map(({ color, label, tag, tagLabel }, i, arr) => (
          <li key={label} style={i === arr.length - 1 ? s.statusItemLast : s.statusItem}>
            <span style={{ ...s.dot, background: color }} />
            <strong>{label}</strong>
            <Tag type={tag}>{tagLabel}</Tag>
          </li>
        ))}
      </ul>

      {/* 9 — Jira */}
      <h2 style={s.h2}><Num n="9" /> Jira Integration</h2>
      <p style={s.p}>Because every PR title carries an <C>ADCMS-XXXX</C> key and the base URL is <C>https://jsw.ibm.com/browse/</C>, the agent performs automatic Jira lifecycle management:</p>
      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead><tr><th style={s.th}>Trigger</th><th style={s.th}>Jira Action</th></tr></thead>
          <tbody>
            {[
              ["PR Opened", "Transition ticket → In Review; post PR link as comment on Jira ticket"],
              ["PR Merged", "Transition ticket → Ready for QA"],
              ["PR Closed (no merge)", "Transition ticket → In Progress (revert)"],
              ["Template Compliance", "Validate ticket is not in Closed/Done state before allowing PR open"],
              ["Acceptance Criteria", "Pull Jira description and cross-reference against PR 'Expected Results' section"],
            ].map(([trigger, action], i) => (
              <tr key={trigger}>
                <td style={i % 2 ? s.tdAlt : s.td}>{trigger}</td>
                <td style={i % 2 ? s.tdAlt : s.td}>{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 10 — Tech Stack */}
      <h2 style={s.h2}><Num n="10" /> Recommended Tech Stack</h2>
      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead><tr><th style={s.th}>Component</th><th style={s.th}>Technology</th><th style={s.th}>Notes</th></tr></thead>
          <tbody>
            {[
              ["Orchestration", "GitHub Actions", "Native, zero infra cost"],
              ["Template compliance", "Python / Node.js script", "Regex-based, deterministic"],
              ["LLM code review", "watsonx Code Assistant or GPT-4o", "Sends diff chunks, receives structured JSON findings"],
              ["SAST", "Semgrep (OWASP rules)", "Free tier covers all OWASP rules; custom AEM ruleset"],
              ["CVE — Java", "OWASP Dependency-Check (Maven plugin)", "Integrated via pom.xml"],
              ["CVE — npm", "npm audit --json", "Runs in all three frontend modules"],
              ["Secret scanning", "Trufflehog or GitHub native secret scanning", "Scans full git history on PR commits"],
              ["PR commenting", "GitHub REST API via actions/github-script", "Inline suggestions + summary comment"],
              ["Jira integration", "Jira REST API v3", "Stored as GitHub Actions secrets"],
            ].map(([comp, tech, notes], i) => (
              <tr key={comp}>
                <td style={i % 2 ? s.tdAlt : s.td}>{comp}</td>
                <td style={i % 2 ? s.tdAlt : s.td}>{tech}</td>
                <td style={i % 2 ? s.tdAlt : s.td}>{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 11 — PR Template */}
      <h2 style={s.h2}><Num n="11" /> Proposed Enhanced PR Template</h2>
      <p style={s.p}>Checkboxes provide machine-readable signals the agent can validate without fragile text-parsing.</p>
      <div style={s.templatePreview}>
        <span style={{ color: "#57606a" }}>&lt;!-- PR Title MUST follow: "[ADCMS-XXXX]: Brief Description"<br />
        &nbsp;&nbsp;&nbsp;&nbsp; The agent will BLOCK non-compliant titles. --&gt;</span><br /><br />
        <span style={{ color: "#3b82d4", fontWeight: 700 }}>### Jira Ticket(s):</span><br />
        - https://jsw.ibm.com/browse/ADCMS-<br /><br />
        <span style={{ color: "#3b82d4", fontWeight: 700 }}>### Type of Change</span><br />
        {["New Feature", "Bug Fix", "Refactor / Tech Debt", "Hotfix", "Config / Infrastructure Change", "Documentation"].map(item => (
          <span key={item}><span style={{ color: "#2da44e" }}>- [ ]</span> {item}<br /></span>
        ))}
        <br />
        <span style={{ color: "#3b82d4", fontWeight: 700 }}>### Security Checklist</span><br />
        {["No credentials, API keys, or secrets committed", "No new external HTTP calls without security review", "Input / output properly sanitized"].map(item => (
          <span key={item}><span style={{ color: "#2da44e" }}>- [ ]</span> {item}<br /></span>
        ))}
        <br />
        <span style={{ color: "#3b82d4", fontWeight: 700 }}>### AEM Cloud Readiness</span><br />
        {["Tested against AEMaaCS SDK locally (mvn clean install)", "No mutable content in ui.apps", "OSGi configs follow naming convention"].map(item => (
          <span key={item}><span style={{ color: "#2da44e" }}>- [ ]</span> {item}<br /></span>
        ))}
      </div>

      {/* 12 — Phases */}
      <h2 style={s.h2}><Num n="12" /> Suggested Implementation Phases</h2>
      <div style={s.tableWrap}>
        <table style={s.table}>
          <thead><tr><th style={s.th}>Phase</th><th style={s.th}>Deliverables</th><th style={s.th}>Effort</th></tr></thead>
          <tbody>
            {[
              ["Phase 1 — Foundation", "GitHub Actions workflow skeleton, PR template compliance checker script, updated pull_request_template.md", "~3 days"],
              ["Phase 2 — Security", "Semgrep integration, OWASP Dependency-Check Maven plugin, npm audit job, Trufflehog secret scan", "~3 days"],
              ["Phase 3 — AEM Rules", "Custom Semgrep AEM ruleset, CODEOWNERS enforcement, OSGi config naming check, deprecated API detection", "~4 days"],
              ["Phase 4 — LLM Review", "LLM integration (watsonx / GPT-4o), inline PR comments with suggested fixes, diff chunking strategy", "~5 days"],
              ["Phase 5 — Jira Lifecycle", "Jira REST API integration — ticket validation, state transitions, bidirectional comment linking", "~2 days"],
            ].map(([phase, deliverables, effort], i) => (
              <tr key={phase}>
                <td style={i % 2 ? s.tdAlt : s.td}><strong>{phase}</strong></td>
                <td style={i % 2 ? s.tdAlt : s.td}>{deliverables}</td>
                <td style={i % 2 ? s.tdAlt : s.td}>{effort}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "40px", paddingTop: "14px", borderTop: "1px solid #e5e7eb", textAlign: "center", fontSize: "11px", color: "#8c8fa3" }}>
        Made with IBM Bob
      </div>
    </Layout>
  )
}
