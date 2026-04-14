import React from "react";

const DEMO_URL = "https://demo.clinicq.au";
const PDF_URL = "/ClinicQ_Elite_OnePager.pdf";
const LOGO_URL = "/clinicq-logo.png";

function App() {
  return (
    <div style={styles.app}>
      <div style={styles.glowTop} />
      <div style={styles.glowBottom} />

      <header style={styles.header}>
        <div style={styles.brandWrap}>
          <img
            src={LOGO_URL}
            alt="ClinicQ logo"
            style={styles.logo}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div>
            <div style={styles.brand}>ClinicQ</div>
            <div style={styles.brandSub}>Workflow governance for clinical follow-up</div>
          </div>
        </div>

        <div style={styles.headerButtons}>
          <a href={PDF_URL} target="_blank" rel="noreferrer" style={styles.secondaryButton}>
            View one-page overview
          </a>
          <a href={DEMO_URL} style={styles.primaryButton}>
            See how it works (2 min)
          </a>
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.heroSection}>
          <div style={styles.heroTextCol}>
            <div style={styles.kicker}>Inbox-first MVP</div>
            <h1 style={styles.heroTitle}>
              Clear your inbox faster —
              <br />
              without losing track of what needs to happen next
            </h1>
            <p style={styles.heroSubtitle}>
              ClinicQ helps you move through results, letters, and follow-ups more quickly and more
              clearly — while ensuring every item is owned, tracked, and completed.
            </p>

            <div style={styles.heroAssurance}>
              Nothing sits unowned. Nothing disappears. Nothing is assumed done.
            </div>

            <div style={styles.heroButtons}>
              <a href={DEMO_URL} style={styles.primaryButtonLarge}>
                See how it works (2 min)
              </a>
              <a href={PDF_URL} target="_blank" rel="noreferrer" style={styles.secondaryButtonLarge}>
                View one-page overview
              </a>
            </div>
          </div>

          <div style={styles.heroCard}>
            <div style={styles.heroCardLabel}>What changes tomorrow morning?</div>
            <div style={styles.heroCardList}>
              <div style={styles.heroCardItem}>Less scanning through a messy inbox</div>
              <div style={styles.heroCardItem}>Less guessing what still needs to happen</div>
              <div style={styles.heroCardItem}>Less chasing across staff roles</div>
              <div style={styles.heroCardItem}>Less re-checking whether something was done</div>
            </div>
            <div style={styles.heroCardResult}>
              <div style={styles.heroCardResultTitle}>Result</div>
              <div style={styles.heroCardResultValue}>Faster decisions. Clearer follow-up.</div>
              <div style={styles.heroCardResultText}>Less mental load for the doctor and the team.</div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionKicker}>Positioning</div>
          <h2 style={styles.sectionTitle}>A better way to manage what happens after the consultation</h2>
          <p style={styles.sectionText}>
            Most systems help you record clinical information. ClinicQ helps you manage what happens
            next.
          </p>
          <p style={styles.sectionText}>
            It turns follow-up work into structured workflows that are assigned, visible, and completed
            in a clear, trackable way.
          </p>

          <div style={styles.statementBox}>
            ClinicQ saves time and reduces medico-legal risk by turning follow-up work into structured,
            owned, and closed-loop workflows — something existing systems do not enforce.
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionKicker}>Inbox wedge</div>
          <h2 style={styles.sectionTitle}>From inbox → clear action in seconds</h2>

          <div style={styles.flowGrid}>
            <FlowCard number="1" title="Inbox item arrives" body="A result, letter, or follow-up lands in the workflow." />
            <FlowCard number="2" title="ClinicQ surfaces what matters" body="The important item is made visible quickly." />
            <FlowCard number="3" title="Next step is clear" body="The required action is obvious, not implied." />
            <FlowCard number="4" title="Action is taken" body="The right person can move immediately." />
            <FlowCard number="5" title="Ownership is assigned" body="Responsibility becomes explicit and visible." />
            <FlowCard number="6" title="Work stays visible until completion" body="Nothing quietly disappears before it is done." />
          </div>

          <div style={styles.resultBand}>
            <div style={styles.resultBandTitle}>Result: faster decisions, clearer follow-up, less mental load</div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionKicker}>Completion certainty</div>
          <div style={styles.certaintyGrid}>
            <div style={styles.certaintyBoxMuted}>
              <div style={styles.certaintySmall}>Most systems get you to:</div>
              <div style={styles.certaintyBig}>“I think it’s done”</div>
            </div>
            <div style={styles.certaintyBoxStrong}>
              <div style={styles.certaintySmallStrong}>ClinicQ gets you to:</div>
              <div style={styles.certaintyBigStrong}>“It’s clearly closed — or still open”</div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionKickerRed}>The Friday problem</div>
          <h2 style={styles.sectionTitle}>Friday 5:45pm</h2>
          <p style={styles.sectionText}>
            A pathology result arrives: <strong>High potassium.</strong> You have seen it. You intend
            to act.
          </p>
          <div style={styles.problemQuestion}>What guarantees that it actually gets done?</div>

          <div style={styles.splitGrid}>
            <div style={styles.splitLeft}>
              <div style={styles.splitHeaderLeft}>WITHOUT CLINICQ</div>
              <ul style={styles.splitList}>
                <li>Disappears</li>
                <li>No owner</li>
                <li>No confirmation</li>
                <li>No record</li>
              </ul>
              <div style={styles.splitBottomLeft}>No proof it was done</div>
            </div>

            <div style={styles.splitRight}>
              <div style={styles.splitHeaderRight}>WITH CLINICQ</div>
              <ul style={styles.splitList}>
                <li>Assigned</li>
                <li>Tracked</li>
                <li>Completed</li>
                <li>Verified</li>
              </ul>
              <div style={styles.splitBottomRight}>Provable, auditable closure</div>
            </div>
          </div>

          <div style={styles.problemTakeaway}>
            The difference is not convenience. It’s whether you can prove what happened.
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionKicker}>Comparison</div>
          <h2 style={styles.sectionTitle}>A different way of thinking about clinical systems</h2>
          <p style={styles.sectionText}>
            Most systems (like Best Practice) rely on people to follow the workflow. ClinicQ builds
            the workflow into the system itself.
          </p>

          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Area</th>
                  <th style={styles.th}>Typical system</th>
                  <th style={styles.th}>ClinicQ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.tdHead}>Role</td>
                  <td style={styles.td}>Clinical record</td>
                  <td style={styles.tdStrong}>Workflow layer</td>
                </tr>
                <tr>
                  <td style={styles.tdHead}>Tasks</td>
                  <td style={styles.td}>Can be created</td>
                  <td style={styles.tdStrong}>Must be completed</td>
                </tr>
                <tr>
                  <td style={styles.tdHead}>Ownership</td>
                  <td style={styles.td}>Often unclear</td>
                  <td style={styles.tdStrong}>Explicit</td>
                </tr>
                <tr>
                  <td style={styles.tdHead}>Visibility</td>
                  <td style={styles.td}>Distributed</td>
                  <td style={styles.tdStrong}>Always visible</td>
                </tr>
                <tr>
                  <td style={styles.tdHead}>Completion</td>
                  <td style={styles.td}>Assumed</td>
                  <td style={styles.tdStrong}>Verified</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionKicker}>Governance layer</div>
          <h2 style={styles.sectionTitle}>Work that doesn’t get lost</h2>
          <p style={styles.sectionText}>
            ClinicQ doesn’t replace your clinical system. It adds a layer of structure and visibility
            so that follow-up work is consistently tracked, clearly owned, and completed.
          </p>

          <div style={styles.governanceBox}>
            <div style={styles.governanceTitle}>ClinicQ is the system that controls how AI is allowed to operate.</div>
            <div style={styles.governanceText}>
              In ClinicQ, AI does not act independently. The system defines what it can do, when it can
              act, and what must be verified before anything is complete.
            </div>
          </div>
        </section>

        <section style={styles.ctaSection}>
          <div style={styles.ctaTitle}>See what happens when nothing falls through the cracks</div>
          <div style={styles.ctaButtons}>
            <a href={DEMO_URL} style={styles.primaryButtonLarge}>
              Try the interactive demo
            </a>
            <a href={PDF_URL} target="_blank" rel="noreferrer" style={styles.secondaryButtonLarge}>
              Download one-page overview
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function FlowCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div style={styles.flowCard}>
      <div style={styles.flowNumber}>{number}</div>
      <div style={styles.flowTitle}>{title}</div>
      <div style={styles.flowBody}>{body}</div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  app: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f8fbff 0%, #eef5ff 48%, #f8fafc 100%)",
    color: "#0f172a",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    position: "relative",
    overflowX: "hidden",
  },
  glowTop: {
    position: "fixed",
    top: -140,
    right: -120,
    width: 340,
    height: 340,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59,130,246,0.16), rgba(59,130,246,0))",
    pointerEvents: "none",
  },
  glowBottom: {
    position: "fixed",
    bottom: -180,
    left: -140,
    width: 380,
    height: 380,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(16,185,129,0.12), rgba(16,185,129,0))",
    pointerEvents: "none",
  },
  header: {
    maxWidth: 1240,
    margin: "0 auto",
    padding: "28px 20px 10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
    position: "relative",
    zIndex: 2,
  },
  brandWrap: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  logo: {
    width: 76,
    height: 76,
    objectFit: "contain",
    borderRadius: 14,
  },
  brand: {
    fontSize: 30,
    fontWeight: 800,
    letterSpacing: -0.9,
  },
  brandSub: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
  },
  headerButtons: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },
  main: {
    maxWidth: 1240,
    margin: "0 auto",
    padding: "8px 20px 42px",
    position: "relative",
    zIndex: 2,
  },
  heroSection: {
    display: "grid",
    gridTemplateColumns: "1.18fr 0.82fr",
    gap: 24,
    alignItems: "stretch",
    background: "rgba(255,255,255,0.82)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(148,163,184,0.18)",
    borderRadius: 30,
    padding: 30,
    boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
  },
  heroTextCol: {},
  kicker: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: 999,
    background: "#dbeafe",
    color: "#1d4ed8",
    fontWeight: 800,
    fontSize: 13,
    marginBottom: 18,
  },
  heroTitle: {
    fontSize: 58,
    lineHeight: 1.02,
    letterSpacing: -2.2,
    margin: "0 0 16px 0",
    maxWidth: 760,
  },
  heroSubtitle: {
    fontSize: 21,
    lineHeight: 1.62,
    color: "#334155",
    margin: 0,
    maxWidth: 760,
  },
  heroAssurance: {
    marginTop: 22,
    padding: "16px 18px",
    borderRadius: 18,
    background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)",
    border: "1px solid #bfdbfe",
    color: "#0f172a",
    fontWeight: 800,
    fontSize: 18,
    lineHeight: 1.5,
    maxWidth: 760,
  },
  heroButtons: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 26,
  },
  heroCard: {
    background: "linear-gradient(180deg, #0f172a 0%, #172554 100%)",
    color: "#ffffff",
    borderRadius: 28,
    padding: 24,
    boxShadow: "0 24px 60px rgba(15,23,42,0.24)",
  },
  heroCardLabel: {
    fontSize: 14,
    fontWeight: 800,
    opacity: 0.9,
    marginBottom: 14,
  },
  heroCardList: {
    display: "grid",
    gap: 12,
  },
  heroCardItem: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    padding: "12px 14px",
    lineHeight: 1.5,
  },
  heroCardResult: {
    marginTop: 18,
    padding: "16px 18px",
    borderRadius: 18,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  heroCardResultTitle: {
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: 1,
    opacity: 0.84,
    textTransform: "uppercase",
  },
  heroCardResultValue: {
    marginTop: 6,
    fontSize: 28,
    fontWeight: 900,
    letterSpacing: -1,
  },
  heroCardResultText: {
    marginTop: 8,
    color: "rgba(255,255,255,0.84)",
    lineHeight: 1.6,
  },
  section: {
    marginTop: 26,
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: 28,
    padding: 30,
    boxShadow: "0 18px 48px rgba(15,23,42,0.05)",
  },
  sectionKicker: {
    color: "#2563eb",
    fontWeight: 800,
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 10,
  },
  sectionKickerRed: {
    color: "#dc2626",
    fontWeight: 800,
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 40,
    lineHeight: 1.1,
    letterSpacing: -1.6,
    margin: "0 0 14px 0",
  },
  sectionText: {
    color: "#475569",
    fontSize: 18,
    lineHeight: 1.72,
    maxWidth: 920,
    margin: "0 0 10px 0",
  },
  statementBox: {
    marginTop: 18,
    background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)",
    border: "1px solid #bfdbfe",
    borderRadius: 22,
    padding: 22,
    color: "#0f172a",
    fontSize: 20,
    lineHeight: 1.6,
    fontWeight: 800,
    maxWidth: 980,
  },
  flowGrid: {
    marginTop: 20,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
  },
  flowCard: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 20,
    padding: 18,
  },
  flowNumber: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    background: "#dbeafe",
    color: "#1d4ed8",
    fontWeight: 900,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    fontSize: 14,
  },
  flowTitle: {
    fontSize: 17,
    fontWeight: 800,
    letterSpacing: -0.2,
    marginBottom: 8,
  },
  flowBody: {
    color: "#475569",
    fontSize: 14,
    lineHeight: 1.62,
  },
  resultBand: {
    marginTop: 18,
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    borderRadius: 22,
    padding: 20,
    color: "#ffffff",
  },
  resultBandTitle: {
    fontSize: 24,
    fontWeight: 800,
    lineHeight: 1.4,
    letterSpacing: -0.6,
  },
  certaintyGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginTop: 8,
  },
  certaintyBoxMuted: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 22,
    padding: 22,
  },
  certaintyBoxStrong: {
    background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)",
    border: "1px solid #bfdbfe",
    borderRadius: 22,
    padding: 22,
  },
  certaintySmall: {
    fontSize: 14,
    color: "#64748b",
    fontWeight: 800,
    marginBottom: 10,
  },
  certaintyBig: {
    fontSize: 30,
    fontWeight: 900,
    letterSpacing: -1,
    color: "#334155",
  },
  certaintySmallStrong: {
    fontSize: 14,
    color: "#1d4ed8",
    fontWeight: 800,
    marginBottom: 10,
  },
  certaintyBigStrong: {
    fontSize: 30,
    fontWeight: 900,
    letterSpacing: -1,
    color: "#0f172a",
  },
  problemQuestion: {
    marginTop: 18,
    fontSize: 29,
    fontWeight: 900,
    letterSpacing: -1.1,
    color: "#0f172a",
  },
  splitGrid: {
    marginTop: 24,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
  },
  splitLeft: {
    borderRadius: 24,
    background: "linear-gradient(135deg, #fff7ed 0%, #fff1f2 100%)",
    border: "1px solid #fed7aa",
    padding: 22,
  },
  splitRight: {
    borderRadius: 24,
    background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)",
    border: "1px solid #bfdbfe",
    padding: 22,
  },
  splitHeaderLeft: {
    fontSize: 14,
    fontWeight: 900,
    color: "#9a3412",
    letterSpacing: 1,
    marginBottom: 12,
  },
  splitHeaderRight: {
    fontSize: 14,
    fontWeight: 900,
    color: "#1d4ed8",
    letterSpacing: 1,
    marginBottom: 12,
  },
  splitList: {
    margin: 0,
    paddingLeft: 18,
    lineHeight: 1.9,
    color: "#334155",
    fontSize: 16,
    fontWeight: 700,
  },
  splitBottomLeft: {
    marginTop: 16,
    color: "#7c2d12",
    fontWeight: 800,
  },
  splitBottomRight: {
    marginTop: 16,
    color: "#0f3b2f",
    fontWeight: 800,
  },
  problemTakeaway: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: -0.5,
  },
  tableWrap: {
    marginTop: 18,
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: 18,
    overflow: "hidden",
  },
  th: {
    textAlign: "left",
    padding: "14px 14px",
    background: "#f8fafc",
    borderBottom: "1px solid #e2e8f0",
    fontSize: 14,
    fontWeight: 800,
    color: "#334155",
  },
  td: {
    padding: "14px 14px",
    borderBottom: "1px solid #e2e8f0",
    color: "#475569",
    fontSize: 15,
    lineHeight: 1.5,
  },
  tdHead: {
    padding: "14px 14px",
    borderBottom: "1px solid #e2e8f0",
    color: "#0f172a",
    fontSize: 15,
    fontWeight: 800,
  },
  tdStrong: {
    padding: "14px 14px",
    borderBottom: "1px solid #e2e8f0",
    color: "#1d4ed8",
    fontSize: 15,
    fontWeight: 800,
  },
  governanceBox: {
    marginTop: 18,
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    borderRadius: 24,
    padding: 24,
    color: "#ffffff",
  },
  governanceTitle: {
    fontSize: 26,
    fontWeight: 900,
    letterSpacing: -0.8,
    lineHeight: 1.3,
  },
  governanceText: {
    marginTop: 10,
    color: "rgba(255,255,255,0.84)",
    fontSize: 17,
    lineHeight: 1.72,
    maxWidth: 920,
  },
  ctaSection: {
    marginTop: 26,
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    borderRadius: 30,
    padding: 34,
    color: "#ffffff",
    boxShadow: "0 24px 60px rgba(15,23,42,0.18)",
  },
  ctaTitle: {
    fontSize: 38,
    lineHeight: 1.14,
    letterSpacing: -1.4,
    fontWeight: 900,
    maxWidth: 860,
  },
  ctaButtons: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 24,
  },
  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    color: "#ffffff",
    border: "1px solid #2563eb",
    borderRadius: 14,
    padding: "12px 16px",
    fontSize: 14,
    fontWeight: 800,
    boxShadow: "0 10px 24px rgba(37,99,235,0.20)",
  },
  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    background: "#ffffff",
    color: "#0f172a",
    border: "1px solid #cbd5e1",
    borderRadius: 14,
    padding: "12px 16px",
    fontSize: 14,
    fontWeight: 800,
  },
  primaryButtonLarge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    color: "#ffffff",
    border: "1px solid #2563eb",
    borderRadius: 16,
    padding: "15px 22px",
    fontSize: 16,
    fontWeight: 800,
    boxShadow: "0 12px 26px rgba(37,99,235,0.22)",
  },
  secondaryButtonLarge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    background: "#ffffff",
    color: "#0f172a",
    border: "1px solid #cbd5e1",
    borderRadius: 16,
    padding: "15px 22px",
    fontSize: 16,
    fontWeight: 800,
  },
};

export default App;