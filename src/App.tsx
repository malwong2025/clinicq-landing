import React from "react";

const DEMO_URL = "https://demo.clinicq.au";
const PDF_URL = "/ClinicQ_Overview.pdf";
const LOGO_URL = "/clinicq-logo.png";

type CompareItem = {
  area: string;
  typical: string;
  clinicq: string;
};

const comparisonItems: CompareItem[] = [
  {
    area: "Core role",
    typical: "Clinical record system",
    clinicq: "Responsibility engine for selected follow-up",
  },
  {
    area: "Patients needing follow-up",
    typical: "Recorded, recalled, or manually remembered",
    clinicq: "Deliberately added to a visible Watchlist",
  },
  {
    area: "Ownership",
    typical: "Often implicit or scattered",
    clinicq: "Explicit owner and due date",
  },
  {
    area: "Visibility",
    typical: "Distributed across inboxes, notes, habits, and memory",
    clinicq: "Persistent until completed or deliberately closed",
  },
  {
    area: "Completion certainty",
    typical: "Often assumed",
    clinicq: "Clearly closed — or still open",
  },
];

export default function App() {
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
          <div style={styles.brandTextWrap}>
            <div style={styles.brand}>ClinicQ</div>
            <div style={styles.brandSub}>Selected Patient Watchlist · workflow governance</div>
          </div>
        </div>

        <div style={styles.headerButtons}>
          <a href={PDF_URL} target="_blank" rel="noreferrer" style={styles.secondaryButton}>
            View one-page overview
          </a>
          <a href={DEMO_URL} style={styles.primaryButton}>
            See how it works
          </a>
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.heroSection}>
          <div style={styles.heroTextCol}>
            <div style={styles.kicker}>Selected Patient Watchlist</div>

            <h1 style={styles.heroTitle}>
              The patients you worry about
              <br />
              stay visible until they are dealt with.
            </h1>

            <p style={styles.heroSubtitle}>
              ClinicQ helps doctors clear the inbox quickly — then deliberately add selected patients
              to a Watchlist when follow-up must not be lost. Each watched patient has an owner, a due
              date, and a visible state until the loop is completed or deliberately closed.
            </p>

            <div style={styles.heroAssurance}>
              This is not a list of all patients. It is the doctor-curated list of patients you have
              chosen not to lose.
            </div>

            <div style={styles.heroButtons}>
              <a href={DEMO_URL} style={styles.primaryButtonLarge}>
                Try the Watchlist demo
              </a>
              <a href={PDF_URL} target="_blank" rel="noreferrer" style={styles.secondaryButtonLarge}>
                View one-page overview
              </a>
            </div>
          </div>

          <div style={styles.heroCard}>
            <div style={styles.heroCardTopLine}>What changes tomorrow morning?</div>

            <div style={styles.heroCardList}>
              <div style={styles.heroCardItem}>Routine inbox items can be handled quickly</div>
              <div style={styles.heroCardItem}>Concerning patients are added with one click</div>
              <div style={styles.heroCardItem}>Each watched patient gets an owner and due date</div>
              <div style={styles.heroCardItem}>Overdue follow-up rises back into view automatically</div>
            </div>

            <div style={styles.heroCardResult}>
              <div style={styles.heroCardResultLabel}>Result</div>
              <div style={styles.heroCardResultTitle}>Less mental load. Fewer lost follow-ups.</div>
              <div style={styles.heroCardResultText}>
                The system holds onto the patients you do not want to lose.
              </div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionKicker}>The wedge</div>
          <h2 style={styles.sectionTitle}>ClinicQ starts with one simple doctor decision</h2>

          <p style={styles.sectionText}>
            Most inbox items do not need heavy workflow. But every doctor has patients who feel just
            uncomfortable enough that they should not rely on memory, notes, or hope.
          </p>

          <div style={styles.statementBox}>
            “This patient worries me. I want them actively tracked until follow-up is done.”
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionKicker}>Inbox → Watchlist</div>
          <h2 style={styles.sectionTitle}>From inbox handling to active follow-up in seconds</h2>

          <div style={styles.flowGrid}>
            <FlowCard
              number="1"
              title="Inbox item arrives"
              body="A result, letter, discharge summary, or follow-up concern appears in the workflow."
            />
            <FlowCard
              number="2"
              title="Doctor reviews quickly"
              body="Routine items can be processed without turning everything into noise."
            />
            <FlowCard
              number="3"
              title="Add to Watchlist"
              body="The doctor deliberately marks the patient as one not to lose."
            />
            <FlowCard
              number="4"
              title="Owner and due date are set"
              body="Responsibility becomes explicit instead of implied."
            />
            <FlowCard
              number="5"
              title="Overdue patients surface"
              body="Patients do not quietly disappear when follow-up has not happened."
            />
            <FlowCard
              number="6"
              title="Close only when dealt with"
              body="The patient leaves the Watchlist only after completion or deliberate closure."
            />
          </div>

          <div style={styles.resultBand}>
            <div style={styles.resultBandTitle}>
              Result: fast inbox handling, selected active tracking, and closed-loop completion.
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionKicker}>Why doctors feel it immediately</div>
          <h2 style={styles.sectionTitle}>Three patients doctors recognise instantly</h2>

          <div style={styles.patientGrid}>
            <PatientCard
              label="Acute result"
              name="Sarah Mitchell"
              body="High potassium. Needs same-day follow-up. This is the patient you do not want sitting in the back of your mind."
            />
            <PatientCard
              label="Vulnerable patient"
              name="Margaret Wilson"
              body="Residential aged care, dementia, post-discharge medication changes. She cannot be expected to manage the follow-up herself."
            />
            <PatientCard
              label="Non-attendance risk"
              name="Daniel Reed"
              body="Mental health follow-up planned, but attendance is uncertain. Advice alone may not be enough."
            />
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
            to act. You may even have documented the intention.
          </p>

          <div style={styles.problemQuestion}>What guarantees that the follow-up actually happens?</div>

          <div style={styles.splitGrid}>
            <div style={styles.splitLeft}>
              <div style={styles.splitHeaderLeft}>WITHOUT CLINICQ</div>
              <ul style={styles.splitList}>
                <li>Reviewed</li>
                <li>Intended</li>
                <li>Mentally noted</li>
                <li>Easy to lose</li>
              </ul>
              <div style={styles.splitBottomLeft}>No visible responsibility loop</div>
            </div>

            <div style={styles.splitRight}>
              <div style={styles.splitHeaderRight}>WITH CLINICQ</div>
              <ul style={styles.splitList}>
                <li>Added to Watchlist</li>
                <li>Owner assigned</li>
                <li>Due date visible</li>
                <li>Closed only when dealt with</li>
              </ul>
              <div style={styles.splitBottomRight}>Visible, auditable closure</div>
            </div>
          </div>

          <div style={styles.problemTakeaway}>
            ClinicQ does not replace clinical judgment. It makes the responsibility visible until it is resolved.
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionKicker}>Comparison</div>
          <h2 style={styles.sectionTitle}>A different way of thinking about follow-up</h2>

          <p style={styles.sectionText}>
            EMRs store clinical information. Booking systems manage appointments. AI tools generate outputs.
            ClinicQ governs the follow-up responsibility that can otherwise disappear between them.
          </p>

          <div style={styles.compareGrid}>
            {comparisonItems.map((item) => (
              <div key={item.area} style={styles.compareCard}>
                <div style={styles.compareArea}>{item.area}</div>

                <div style={styles.compareRow}>
                  <div style={styles.compareLabel}>Typical system</div>
                  <div style={styles.compareValue}>{item.typical}</div>
                </div>

                <div style={styles.compareRowStrong}>
                  <div style={styles.compareLabelStrong}>ClinicQ</div>
                  <div style={styles.compareValueStrong}>{item.clinicq}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionKicker}>Governance layer</div>
          <h2 style={styles.sectionTitle}>Human-in-the-loop by design</h2>

          <p style={styles.sectionText}>
            ClinicQ is not an EMR, not a booking system, and not an AI doctor. It does not diagnose,
            triage, prescribe, or replace clinical judgment. The clinician chooses what matters; ClinicQ
            keeps the responsibility visible until completion.
          </p>

          <div style={styles.governanceBox}>
            <div style={styles.governanceTitle}>
              Integration without dependency. Accountability without automation overreach.
            </div>
            <div style={styles.governanceText}>
              ClinicQ can start alongside existing systems. Deeper integration can come later, but the
              core safety behaviour is the same: selected follow-up is owned, tracked, auditable, and closed-loop.
            </div>
          </div>
        </section>

        <section style={styles.ctaSection}>
          <div style={styles.ctaBrandWrap}>
            <img
              src={LOGO_URL}
              alt="ClinicQ logo"
              style={styles.ctaLogo}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div>
              <div style={styles.ctaBrand}>ClinicQ</div>
              <div style={styles.ctaTag}>For the patients you do not want to lose</div>
            </div>
          </div>

          <div style={styles.ctaTitle}>See the Selected Patient Watchlist in action</div>

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

function PatientCard({ label, name, body }: { label: string; name: string; body: string }) {
  return (
    <div style={styles.patientCard}>
      <div style={styles.patientLabel}>{label}</div>
      <div style={styles.patientName}>{name}</div>
      <div style={styles.patientBody}>{body}</div>
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
    padding: "18px 16px 8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 14,
    flexWrap: "wrap",
    position: "relative",
    zIndex: 2,
  },
  brandWrap: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    minWidth: 0,
  },
  brandTextWrap: {
    minWidth: 0,
  },
  logo: {
    width: 60,
    height: 60,
    objectFit: "contain",
    borderRadius: 14,
    flexShrink: 0,
  },
  brand: {
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: -0.9,
    lineHeight: 1,
    color: "#0f172a",
  },
  brandSub: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 4,
    lineHeight: 1.35,
  },
  headerButtons: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    width: "100%",
  },
  main: {
    maxWidth: 1240,
    margin: "0 auto",
    padding: "8px 16px 36px",
    position: "relative",
    zIndex: 2,
  },
  heroSection: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 18,
    alignItems: "stretch",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(148,163,184,0.18)",
    borderRadius: 26,
    padding: 22,
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
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: "clamp(2.35rem, 7vw, 4.15rem)",
    lineHeight: 1.03,
    letterSpacing: -1.8,
    margin: "0 0 14px 0",
    maxWidth: 820,
    color: "#0f172a",
  },
  heroSubtitle: {
    fontSize: 18,
    lineHeight: 1.6,
    color: "#334155",
    margin: 0,
    maxWidth: 780,
  },
  heroAssurance: {
    marginTop: 18,
    padding: "14px 16px",
    borderRadius: 16,
    background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)",
    border: "1px solid #bfdbfe",
    color: "#0f172a",
    fontWeight: 800,
    fontSize: 16,
    lineHeight: 1.5,
    maxWidth: 780,
  },
  heroButtons: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 22,
    width: "100%",
  },
  heroCard: {
    background: "linear-gradient(180deg, #0f172a 0%, #172554 100%)",
    color: "#ffffff",
    borderRadius: 24,
    padding: 20,
    boxShadow: "0 24px 60px rgba(15,23,42,0.24)",
  },
  heroCardTopLine: {
    fontSize: 14,
    fontWeight: 800,
    opacity: 0.92,
    marginBottom: 14,
  },
  heroCardList: {
    display: "grid",
    gap: 10,
  },
  heroCardItem: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 14,
    padding: "11px 13px",
    lineHeight: 1.5,
    fontSize: 15,
  },
  heroCardResult: {
    marginTop: 16,
    padding: "15px 16px",
    borderRadius: 16,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  heroCardResultLabel: {
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: 1,
    opacity: 0.84,
    textTransform: "uppercase",
  },
  heroCardResultTitle: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: 900,
    letterSpacing: -0.8,
    lineHeight: 1.2,
  },
  heroCardResultText: {
    marginTop: 8,
    color: "rgba(255,255,255,0.84)",
    lineHeight: 1.55,
    fontSize: 14,
  },
  section: {
    marginTop: 20,
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: 24,
    padding: 22,
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
    fontSize: "clamp(1.8rem, 5vw, 2.3rem)",
    lineHeight: 1.12,
    letterSpacing: -1.1,
    margin: "0 0 14px 0",
    color: "#0f172a",
  },
  sectionText: {
    color: "#475569",
    fontSize: 17,
    lineHeight: 1.68,
    maxWidth: 920,
    margin: "0 0 10px 0",
  },
  statementBox: {
    marginTop: 16,
    background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)",
    border: "1px solid #bfdbfe",
    borderRadius: 18,
    padding: 18,
    color: "#0f172a",
    fontSize: 22,
    lineHeight: 1.45,
    fontWeight: 900,
    maxWidth: 980,
  },
  flowGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 12,
  },
  flowCard: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 18,
    padding: 16,
  },
  flowNumber: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#dbeafe",
    color: "#1d4ed8",
    fontWeight: 900,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    fontSize: 13,
  },
  flowTitle: {
    fontSize: 16,
    fontWeight: 800,
    letterSpacing: -0.2,
    marginBottom: 8,
    color: "#0f172a",
  },
  flowBody: {
    color: "#475569",
    fontSize: 14,
    lineHeight: 1.58,
  },
  resultBand: {
    marginTop: 16,
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    borderRadius: 18,
    padding: 18,
    color: "#ffffff",
  },
  resultBandTitle: {
    fontSize: 22,
    fontWeight: 800,
    lineHeight: 1.38,
    letterSpacing: -0.4,
  },
  patientGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 12,
    marginTop: 18,
  },
  patientCard: {
    background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
    border: "1px solid #e2e8f0",
    borderRadius: 18,
    padding: 18,
  },
  patientLabel: {
    color: "#2563eb",
    fontSize: 12,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  patientName: {
    fontSize: 20,
    fontWeight: 900,
    color: "#0f172a",
    letterSpacing: -0.4,
    marginBottom: 8,
  },
  patientBody: {
    color: "#475569",
    lineHeight: 1.62,
    fontSize: 15,
  },
  certaintyGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 12,
    marginTop: 8,
  },
  certaintyBoxMuted: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 18,
    padding: 18,
  },
  certaintyBoxStrong: {
    background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)",
    border: "1px solid #bfdbfe",
    borderRadius: 18,
    padding: 18,
  },
  certaintySmall: {
    fontSize: 14,
    color: "#64748b",
    fontWeight: 800,
    marginBottom: 10,
  },
  certaintyBig: {
    fontSize: 28,
    fontWeight: 900,
    letterSpacing: -0.8,
    color: "#334155",
    lineHeight: 1.2,
  },
  certaintySmallStrong: {
    fontSize: 14,
    color: "#1d4ed8",
    fontWeight: 800,
    marginBottom: 10,
  },
  certaintyBigStrong: {
    fontSize: 28,
    fontWeight: 900,
    letterSpacing: -0.8,
    color: "#0f172a",
    lineHeight: 1.2,
  },
  problemQuestion: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: 900,
    letterSpacing: -0.7,
    color: "#0f172a",
    lineHeight: 1.25,
  },
  splitGrid: {
    marginTop: 20,
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 14,
  },
  splitLeft: {
    borderRadius: 20,
    background: "linear-gradient(135deg, #fff7ed 0%, #fff1f2 100%)",
    border: "1px solid #fed7aa",
    padding: 18,
  },
  splitRight: {
    borderRadius: 20,
    background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)",
    border: "1px solid #bfdbfe",
    padding: 18,
  },
  splitHeaderLeft: {
    fontSize: 13,
    fontWeight: 900,
    color: "#9a3412",
    letterSpacing: 1,
    marginBottom: 10,
  },
  splitHeaderRight: {
    fontSize: 13,
    fontWeight: 900,
    color: "#1d4ed8",
    letterSpacing: 1,
    marginBottom: 10,
  },
  splitList: {
    margin: 0,
    paddingLeft: 18,
    lineHeight: 1.9,
    color: "#334155",
    fontSize: 15,
    fontWeight: 700,
  },
  splitBottomLeft: {
    marginTop: 14,
    color: "#7c2d12",
    fontWeight: 800,
    fontSize: 15,
  },
  splitBottomRight: {
    marginTop: 14,
    color: "#0f3b2f",
    fontWeight: 800,
    fontSize: 15,
  },
  problemTakeaway: {
    marginTop: 18,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: -0.4,
    lineHeight: 1.4,
    color: "#0f172a",
  },
  compareGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 12,
  },
  compareCard: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 18,
    padding: 16,
  },
  compareArea: {
    fontSize: 16,
    fontWeight: 900,
    color: "#0f172a",
    marginBottom: 12,
    letterSpacing: -0.2,
  },
  compareRow: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },
  compareRowStrong: {
    background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)",
    border: "1px solid #bfdbfe",
    borderRadius: 14,
    padding: 12,
  },
  compareLabel: {
    fontSize: 12,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: "#64748b",
    marginBottom: 6,
  },
  compareLabelStrong: {
    fontSize: 12,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: "#1d4ed8",
    marginBottom: 6,
  },
  compareValue: {
    fontSize: 15,
    color: "#475569",
    fontWeight: 700,
    lineHeight: 1.5,
  },
  compareValueStrong: {
    fontSize: 15,
    color: "#0f172a",
    fontWeight: 800,
    lineHeight: 1.5,
  },
  governanceBox: {
    marginTop: 16,
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    borderRadius: 20,
    padding: 20,
    color: "#ffffff",
  },
  governanceTitle: {
    fontSize: 24,
    fontWeight: 900,
    letterSpacing: -0.6,
    lineHeight: 1.28,
  },
  governanceText: {
    marginTop: 10,
    color: "rgba(255,255,255,0.84)",
    fontSize: 16,
    lineHeight: 1.68,
    maxWidth: 920,
  },
  ctaSection: {
    marginTop: 20,
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    borderRadius: 24,
    padding: 24,
    color: "#ffffff",
    boxShadow: "0 24px 60px rgba(15,23,42,0.18)",
  },
  ctaBrandWrap: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 18,
  },
  ctaLogo: {
    width: 54,
    height: 54,
    objectFit: "contain",
    borderRadius: 12,
    flexShrink: 0,
  },
  ctaBrand: {
    fontSize: 22,
    fontWeight: 900,
    lineHeight: 1,
  },
  ctaTag: {
    marginTop: 4,
    color: "rgba(255,255,255,0.78)",
    fontSize: 14,
    fontWeight: 700,
  },
  ctaTitle: {
    fontSize: 30,
    lineHeight: 1.16,
    letterSpacing: -0.9,
    fontWeight: 900,
    maxWidth: 860,
  },
  ctaButtons: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 22,
    width: "100%",
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
    flex: "1 1 220px",
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
    flex: "1 1 240px",
    minHeight: 54,
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
    flex: "1 1 240px",
    minHeight: 54,
  },
};
