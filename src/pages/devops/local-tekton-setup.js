import React from "react"
import Layout from "../../components/layout"

const styles = {
  subtitle: { color: "#57606a", marginBottom: "32px", fontSize: "13px" },
  section: { fontSize: "12px", fontWeight: "600", textTransform: "uppercase",
    letterSpacing: "0.05em", color: "#57606a", margin: "28px 0 12px" },
  h3: { fontSize: "14px", fontWeight: "600", margin: "20px 0 10px" },
  p: { marginBottom: "12px" },
  ul: { paddingLeft: "20px", marginBottom: "12px" },
  ol: { paddingLeft: "20px", marginBottom: "12px" },
  li: { marginBottom: "6px" },
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
  stepBox: {
    border: "1px solid #e5e7eb", borderRadius: "6px",
    overflow: "hidden", marginBottom: "14px",
  },
  stepHeader: {
    background: "#f7f8fa", padding: "9px 14px", fontWeight: "600",
    fontSize: "13px", borderBottom: "1px solid #e5e7eb",
  },
  stepBody: { padding: "12px 14px", fontSize: "13px" },
  table: { width: "100%", borderCollapse: "collapse", marginBottom: "12px" },
  th: {
    background: "#f7f8fa", border: "1px solid #e5e7eb", padding: "8px 12px",
    textAlign: "left", fontWeight: "600", fontSize: "12px",
    textTransform: "uppercase", letterSpacing: "0.04em", color: "#57606a",
  },
  td: { border: "1px solid #e5e7eb", padding: "9px 12px", verticalAlign: "top" },
  tdAlt: { border: "1px solid #e5e7eb", padding: "9px 12px", verticalAlign: "top", background: "#f7f8fa" },
}

function Code({ children }) {
  return <code style={styles.inlineCode}>{children}</code>
}

function Cmd({ children }) {
  return <div style={styles.commandBlock}>{children}</div>
}

function StepBox({ title, children }) {
  return (
    <div style={styles.stepBox}>
      <div style={styles.stepHeader}>{title}</div>
      <div style={styles.stepBody}>{children}</div>
    </div>
  )
}

export default function LocalTektonSetup() {
  return (
    <Layout>
      <h1>Tekton Setup — macOS + Rancher Desktop</h1>
      <p style={styles.subtitle}>
        Local Kubernetes environment with Tekton Pipelines, Triggers, and Dashboard UI
      </p>

      {/* ── Overview ── */}
      <h2 style={styles.section}>Overview</h2>
      <p style={styles.p}>
        This guide walks you through setting up <strong>Tekton Pipelines</strong> and{" "}
        <strong>Tekton Triggers</strong> on your local macOS machine using{" "}
        <strong>Rancher Desktop</strong>. You'll also install and access the{" "}
        <strong>Tekton Dashboard</strong> UI through port-forwarding for a complete
        local development environment.
      </p>
      <p style={styles.p}><strong>What you'll have at the end:</strong></p>
      <ul style={styles.ul}>
        <li style={styles.li}>A local Kubernetes cluster managed by Rancher Desktop</li>
        <li style={styles.li}>Tekton Pipelines and Triggers installed and verified</li>
        <li style={styles.li}>Tekton Dashboard running and accessible via your browser</li>
        <li style={styles.li}>All verification commands to confirm your setup is working</li>
      </ul>
      <div style={styles.infoBox}>
        <strong>💡 Note:</strong> This guide covers setup only. Pipeline execution and
        webhook configuration are covered in <Code>tekton/README.md</Code>.
      </div>

      {/* ── Prerequisites ── */}
      <h2 style={styles.section}>Prerequisites</h2>

      <StepBox title="1. Rancher Desktop">
        <p style={styles.p}>
          Download and install <strong>Rancher Desktop</strong> from{" "}
          <a href="https://rancherdesktop.io" target="_blank" rel="noreferrer">rancherdesktop.io</a>.
        </p>
        <p style={styles.p}><strong>Recommended settings:</strong></p>
        <ul style={styles.ul}>
          <li style={styles.li}>Kubernetes version: 1.28+ (any recent stable version)</li>
          <li style={styles.li}>Container runtime: <Code>containerd</Code> or <Code>dockerd</Code></li>
          <li style={styles.li}>Memory: 4 GB minimum, 8 GB recommended</li>
          <li style={styles.li}>CPUs: 2 minimum, 4 recommended</li>
        </ul>
        <p style={styles.p}>
          After installation, start Rancher Desktop and wait for the Kubernetes cluster
          to become ready (green checkmark in the UI).
        </p>
      </StepBox>

      <StepBox title="2. kubectl CLI">
        <p style={styles.p}>
          Rancher Desktop includes <Code>kubectl</Code> by default. Verify it's working:
        </p>
        <Cmd>{"kubectl version --client\nkubectl cluster-info"}</Cmd>
        <p style={styles.p}>
          You should see your local cluster endpoint (typically <Code>https://127.0.0.1:6443</Code>).
        </p>
      </StepBox>

      <StepBox title="3. Optional: Tekton CLI (tkn)">
        <p style={styles.p}>
          The <Code>tkn</Code> CLI provides convenient shortcuts for Tekton operations.
          Install via Homebrew:
        </p>
        <Cmd>brew install tektoncd-cli</Cmd>
        <p style={styles.p}>Verify installation:</p>
        <Cmd>tkn version</Cmd>
      </StepBox>

      {/* ── Installation ── */}
      <h2 style={styles.section}>Installation Steps</h2>

      <StepBox title="Step 1: Install Tekton Pipelines">
        <p style={styles.p}>
          Tekton Pipelines provides the core Task and Pipeline CRDs (Custom Resource Definitions).
        </p>
        <Cmd>{"kubectl apply --filename \\\n  https://storage.googleapis.com/tekton-releases/pipeline/latest/release.yaml"}</Cmd>
        <p style={styles.p}><strong>Wait for all pods to become ready:</strong></p>
        <Cmd>kubectl get pods --namespace tekton-pipelines</Cmd>
        <div style={styles.successBox}>
          <strong>✅ Expected output:</strong> All pods in <Code>tekton-pipelines</Code> namespace
          should show <Code>Running</Code> or <Code>Completed</Code> within 1–2 minutes.
        </div>
        <p style={styles.p}><strong>Verify CRDs are installed:</strong></p>
        <Cmd>kubectl get crds | grep tekton.dev</Cmd>
        <p style={styles.p}>
          You should see <Code>tasks.tekton.dev</Code>, <Code>pipelines.tekton.dev</Code>,{" "}
          <Code>pipelineruns.tekton.dev</Code>, etc.
        </p>
      </StepBox>

      <StepBox title="Step 2: Install Tekton Triggers">
        <p style={styles.p}>
          Tekton Triggers enables event-driven pipeline execution via EventListeners,
          TriggerBindings, and TriggerTemplates.
        </p>
        <Cmd>{"kubectl apply --filename \\\n  https://storage.googleapis.com/tekton-releases/triggers/latest/release.yaml\nkubectl apply --filename \\\n  https://storage.googleapis.com/tekton-releases/triggers/latest/interceptors.yaml"}</Cmd>
        <p style={styles.p}><strong>Wait for all pods to become ready:</strong></p>
        <Cmd>kubectl get pods --namespace tekton-pipelines</Cmd>
        <div style={styles.successBox}>
          <strong>✅ Expected output:</strong> Additional pods like{" "}
          <Code>tekton-triggers-controller</Code>, <Code>tekton-triggers-webhook</Code>, and{" "}
          <Code>tekton-triggers-core-interceptors</Code> should all be <Code>Running</Code>.
        </div>
        <p style={styles.p}><strong>Verify Triggers CRDs:</strong></p>
        <Cmd>kubectl get crds | grep triggers.tekton.dev</Cmd>
      </StepBox>

      <StepBox title="Step 3: Install Tekton Dashboard">
        <p style={styles.p}>
          Tekton Dashboard provides a web UI for viewing pipelines, tasks, and runs.
        </p>
        <Cmd>{"kubectl apply --filename \\\n  https://storage.googleapis.com/tekton-releases/dashboard/latest/release.yaml"}</Cmd>
        <p style={styles.p}><strong>Wait for the Dashboard pod to become ready:</strong></p>
        <Cmd>kubectl get pods --namespace tekton-pipelines -l app=tekton-dashboard</Cmd>
        <div style={styles.successBox}>
          <strong>✅ Expected output:</strong> The <Code>tekton-dashboard</Code> pod should
          show <Code>Running</Code> within 1–2 minutes.
        </div>
      </StepBox>

      {/* ── Dashboard Access ── */}
      <h2 style={styles.section}>Access Tekton Dashboard UI</h2>

      <StepBox title="Port-Forward to Dashboard Service">
        <p style={styles.p}>
          Use <Code>kubectl port-forward</Code> to expose the Dashboard on localhost:
        </p>
        <Cmd>kubectl --namespace tekton-pipelines port-forward svc/tekton-dashboard 9097:9097</Cmd>
        <p style={styles.p}>Keep this terminal window open. The Dashboard is accessible at:</p>
        <div style={styles.infoBox}>
          <strong>🌐 Dashboard URL:</strong>{" "}
          <a href="http://localhost:9097" target="_blank" rel="noreferrer">http://localhost:9097</a>
        </div>
      </StepBox>

      <div style={styles.warningBox}>
        <strong>⚠️ Important:</strong> The <Code>port-forward</Code> command must remain running
        to keep the Dashboard accessible. Press <Code>Ctrl+C</Code> to stop it when done. For
        persistent access, run it in a separate terminal tab or use <Code>tmux</Code>.
      </div>

      {/* ── Dashboard Write Access ── */}
      <h2 style={styles.section}>Enable Manual Pipeline Creation in the UI</h2>

      <StepBox title="Grant Dashboard write access for local development">
        <p style={styles.p}>
          If the <strong>Create</strong> button is missing, the Dashboard service account
          usually has read-only permissions. For local development, grant it cluster access:
        </p>
        <Cmd>{"kubectl create clusterrolebinding tekton-dashboard-admin \\\n  --clusterrole=cluster-admin \\\n  --serviceaccount=tekton-pipelines:tekton-dashboard"}</Cmd>
        <p style={styles.p}>Verify the Dashboard can create pipelines:</p>
        <Cmd>{"kubectl auth can-i create pipelines.tekton.dev \\\n  --as system:serviceaccount:tekton-pipelines:tekton-dashboard"}</Cmd>
        <div style={styles.successBox}>
          <strong>✅ Expected output:</strong> The command should return <Code>yes</Code>.
        </div>
      </StepBox>

      <StepBox title="Restart Dashboard after RBAC change">
        <p style={styles.p}>
          Restart the Dashboard pod so the UI picks up the updated permissions:
        </p>
        <Cmd>kubectl delete pod -n tekton-pipelines -l app=tekton-dashboard</Cmd>
        <p style={styles.p}>Wait for the replacement pod, then restart port-forward:</p>
        <Cmd>{"kubectl get pods -n tekton-pipelines -l app=tekton-dashboard\nkubectl --namespace tekton-pipelines port-forward svc/tekton-dashboard 9097:9097"}</Cmd>
      </StepBox>

      <StepBox title="Create a pipeline manually from the Dashboard">
        <ol style={styles.ol}>
          <li style={styles.li}>Open <Code>http://localhost:9097</Code>.</li>
          <li style={styles.li}>Use the namespace selector to choose your target namespace.</li>
          <li style={styles.li}>Open the <strong>Pipelines</strong> page.</li>
          <li style={styles.li}>Click <strong>Create</strong> or <strong>Create from YAML</strong>.</li>
          <li style={styles.li}>Paste your pipeline YAML and save.</li>
        </ol>
        <Cmd>kubectl get pipelines</Cmd>
        <div style={styles.infoBox}>
          <strong>Tip:</strong> Create pipelines in the same namespace currently selected in
          the UI for them to appear immediately.
        </div>
      </StepBox>

      {/* ── Verification ── */}
      <h2 style={styles.section}>Verification Checklist</h2>
      <p style={styles.p}>Run these commands to confirm your Tekton installation is healthy:</p>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Component</th>
            <th style={styles.th}>Verification Command</th>
            <th style={styles.th}>Expected Output</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Tekton Pipelines",  "kubectl get pods -n tekton-pipelines -l app.kubernetes.io/part-of=tekton-pipelines", "All pods Running"],
            ["Tekton Triggers",   "kubectl get pods -n tekton-pipelines -l app.kubernetes.io/part-of=tekton-triggers",  "All pods Running"],
            ["Tekton Dashboard",  "kubectl get pods -n tekton-pipelines -l app=tekton-dashboard",                       "Pod Running"],
            ["Pipeline CRDs",     "kubectl get crds | grep tekton.dev",                                                 "Multiple CRDs listed"],
            ["Trigger CRDs",      "kubectl get crds | grep triggers.tekton.dev",                                        "Multiple CRDs listed"],
            ["Dashboard UI",      "Open http://localhost:9097 (after port-forward)",                                    "Dashboard UI loads"],
            ["Dashboard access",  "kubectl auth can-i create pipelines.tekton.dev --as system:serviceaccount:tekton-pipelines:tekton-dashboard", "yes"],
          ].map(([comp, cmd, expected], i) => (
            <tr key={comp}>
              <td style={i % 2 ? styles.tdAlt : styles.td}>{comp}</td>
              <td style={i % 2 ? styles.tdAlt : styles.td}><Code>{cmd}</Code></td>
              <td style={i % 2 ? styles.tdAlt : styles.td}>{expected}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.successBox}>
        <strong>✅ Setup Complete!</strong> Your local Tekton environment is ready. You can
        now create Tasks, Pipelines, and EventListeners.
      </div>

      {/* ── Next Steps ── */}
      <h2 style={styles.section}>Next Steps</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>Create and run your first Task and Pipeline</li>
        <li style={styles.li}>Deploy the AEM Pipeline Status integration (see <Code>tekton/README.md</Code>)</li>
        <li style={styles.li}>Set up EventListeners and Triggers for webhook-driven pipelines</li>
        <li style={styles.li}>Explore the Tekton Dashboard to visualize your pipeline runs</li>
      </ul>
      <div style={styles.infoBox}>
        <strong>📚 Reference Files:</strong> Ready-to-use Tekton manifests in the <Code>tekton/</Code> directory:
        <ul style={{ ...styles.ul, marginTop: "8px", marginBottom: 0 }}>
          <li style={styles.li}><Code>task.yaml</Code> — Example Task for AEM Slack notifications</li>
          <li style={styles.li}><Code>pipeline.yaml</Code> — Example Pipeline</li>
          <li style={styles.li}><Code>trigger-binding.yaml</Code> — TriggerBinding for webhook fields</li>
          <li style={styles.li}><Code>trigger-template.yaml</Code> — TriggerTemplate for PipelineRuns</li>
          <li style={styles.li}><Code>event-listener.yaml</Code> — EventListener with RBAC and Ingress</li>
        </ul>
      </div>

      {/* ── Troubleshooting ── */}
      <h2 style={styles.section}>Troubleshooting</h2>

      <h3 style={styles.h3}>Pods stuck in Pending or ImagePullBackOff</h3>
      <p style={styles.p}><strong>Possible causes:</strong></p>
      <ul style={styles.ul}>
        <li style={styles.li}>Insufficient resources in Rancher Desktop (increase memory/CPU)</li>
        <li style={styles.li}>Network issues preventing image pulls</li>
        <li style={styles.li}>Architecture mismatch on Apple Silicon (verify ARM64 image support)</li>
      </ul>
      <Cmd>{"kubectl describe pod <pod-name> -n tekton-pipelines\nkubectl logs <pod-name> -n tekton-pipelines"}</Cmd>

      <h3 style={styles.h3}>CRDs not found after installation</h3>
      <p style={styles.p}>
        CRDs may still be installing. Wait 30–60 seconds and retry. If the issue persists,
        re-apply the release manifest:
      </p>
      <Cmd>{"kubectl apply --filename \\\n  https://storage.googleapis.com/tekton-releases/pipeline/latest/release.yaml"}</Cmd>

      <h3 style={styles.h3}>Dashboard shows "Forbidden" or permission errors</h3>
      <p style={styles.p}>
        Grant cluster-admin access (local development only):
      </p>
      <Cmd>{"kubectl create clusterrolebinding tekton-dashboard-admin \\\n  --clusterrole=cluster-admin \\\n  --serviceaccount=tekton-pipelines:tekton-dashboard"}</Cmd>
      <div style={styles.warningBox}>
        <strong>⚠️ Security Note:</strong> Only use <Code>cluster-admin</Code> for local
        development, never in production.
      </div>

      <h3 style={styles.h3}>Port-forward command fails or connection refused</h3>
      <ul style={styles.ul}>
        <li style={styles.li}>Dashboard pod not yet ready — check with <Code>kubectl get pods -n tekton-pipelines</Code></li>
        <li style={styles.li}>Port 9097 already in use — try <Code>kubectl port-forward ... 9098:9097</Code></li>
        <li style={styles.li}>Wrong kubectl context — verify with <Code>kubectl config current-context</Code></li>
      </ul>

      <h3 style={styles.h3}>Rancher Desktop cluster not starting</h3>
      <ul style={styles.ul}>
        <li style={styles.li}>Restart Rancher Desktop completely (Quit and reopen)</li>
        <li style={styles.li}>Reset Kubernetes from Rancher Desktop preferences (deletes all data)</li>
        <li style={styles.li}>Check for conflicting Docker Desktop installation</li>
        <li style={styles.li}>Review logs: <Code>~/Library/Logs/rancher-desktop</Code></li>
      </ul>

      <h3 style={styles.h3}>Architecture warnings on Apple Silicon (M1/M2/M3)</h3>
      <p style={styles.p}>
        Warnings about <Code>linux/amd64</Code> images on <Code>linux/arm64</Code> are usually
        informational — most Tekton images support multi-arch. If pods fail, enable Rosetta
        emulation in Rancher Desktop under <Code>Virtual Machine → Emulation</Code>.
      </p>

      <h3 style={styles.h3}>Need more help?</h3>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <strong>Tekton Docs:</strong>{" "}
          <a href="https://tekton.dev/docs/" target="_blank" rel="noreferrer">tekton.dev/docs</a>
        </li>
        <li style={styles.li}>
          <strong>Rancher Desktop Docs:</strong>{" "}
          <a href="https://docs.rancherdesktop.io/" target="_blank" rel="noreferrer">docs.rancherdesktop.io</a>
        </li>
        <li style={styles.li}>
          <strong>Tekton Slack:</strong>{" "}
          <a href="https://tektoncd.slack.com" target="_blank" rel="noreferrer">tektoncd.slack.com</a>
        </li>
      </ul>
    </Layout>
  )
}
