
import React from "react";

const DEMO_URL = "https://demo.clinicq.au";
const PDF_URL = "/ClinicQ_Elite_OnePager.pdf";
const FORM_URL = "https://forms.gle/ZzcdsvFiqE1i5rdFA";

type SectionCardProps = {
  title: string;
  body: string;
  accent?: string;
};

function SectionCard({ title, body, accent = "#dbeafe" }: SectionCardProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderTop: `5px solid ${accent}`,
        borderRadius: 22,
        padding: 22,
        boxShadow: "0 18px 40px rgba(15,23,42,0.06)",
      }}
    >
      <div
        style={{
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: -0.3,
          color: "#0f172a",
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#475569",
          lineHeight: 1.7,
          fontSize: 15,
        }}
      >
        {body}
      </div>
    </div>
  );
}

function MiniStep({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr",
        gap: 14,
        alignItems: "flex-start",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: 20,
        padding: 18,
        boxShadow: "0 14px 30px rgba(15,23,42,0.05)",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 18,
          boxShadow: "0 12px 24px rgba(37,99,235,0.25)",
        }}
      >
        {number}
      </div>
      <div>
        <div
          style={{
            fontSize: 17,
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: 6,
            letterSpacing: -0.2,
          }}
        >
          {title}
        </div>
        <div style={{ color: "#475569", lineHeight: 1.65, fontSize: 15 }}>{body}</div>
      </div>
    </div>
  );
}

function CTAButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        padding: "15px 22px",
        borderRadius: 14,
        fontWeight: 800,
        fontSize: 16,
        letterSpacing: -0.2,
        ...(primary
          ? {
              background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
              color: "#ffffff",
              border: "1px solid #2563eb",
              boxShadow: "0 14px 30px rgba(37,99,235,0.24)",
            }
          : {
              background: "#ffffff",
              color: "#0f172a",
              border: "1px solid #cbd5e1",
              boxShadow: "0 10px 22px rgba(15,23,42,0.06)",
            }),
      }}
    >
      {children}
    </a>
  );
}

const smallPill: React.CSSProperties = {
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  color: "#334155",
  borderRadius: 999,
  padding: "10px 14px",
  fontWeight: 700,
  fontSize: 14,
};

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, rgba(37,99,235,0.08), transparent 22%), linear-gradient(180deg, #f8fbff 0%, #eef4ff 42%, #f8fafc 100%)",
        color: "#0f172a",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: 1220,
          margin: "0 auto",
          padding: "28px 20px 80px",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          <div>
            <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: -1 }}>ClinicQ</div>
            <div style={{ color: "#475569", fontSize: 14, marginTop: 4 }}>
              The operating system for clinical responsibility
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <CTAButton href={PDF_URL}>View one-page overview</CTAButton>
            <CTAButton href={DEMO_URL} primary>
              See how it works (2 min)
            </CTAButton>
          </div>
        </header>

        <section
          style={{
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(148,163,184,0.18)",
            borderRadius: 30,
            padding: 34,
            boxShadow: "0 28px 80px rgba(15,23,42,0.08)",
            marginBottom: 26,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: 28,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  fontWeight: 800,
                  fontSize: 13,
                  marginBottom: 18,
                }}
              >
                Inbox MVP wedge
              </div>

              <h1
                style={{
                  fontSize: 58,
                  lineHeight: 1.02,
                  letterSpacing: -2.3,
                  margin: "0 0 16px 0",
                  maxWidth: 760,
                }}
              >
                The fastest way to clear your results inbox — safely.
              </h1>

              <p
                style={{
                  fontSize: 21,
                  lineHeight: 1.6,
                  color: "#334155",
                  margin: 0,
                  maxWidth: 760,
                }}
              >
                ClinicQ is the operating system for clinical responsibility — a governance and workflow
                layer that ensures every result, task, and follow-up is owned, tracked, and completed.
              </p>

              <div
                style={{
                  marginTop: 24,
                  padding: "18px 20px",
                  borderRadius: 18,
                  background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)",
                  border: "1px solid #bfdbfe",
                  maxWidth: 760,
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    letterSpacing: -0.3,
                    color: "#0f172a",
                  }}
                >
                  Not because you remember. Because the system enforces it.
                </div>
                <div
                  style={{
                    marginTop: 8,
                    color: "#475569",
                    lineHeight: 1.65,
                    fontSize: 15,
                  }}
                >
                  Doctors do not need another architecture lecture. They need fewer missed
                  follow-ups, less inbox drag, less chasing, and more time back tomorrow morning.
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
                <CTAButton href={DEMO_URL} primary>
                  Start 2-minute walkthrough
                </CTAButton>
                <CTAButton href={FORM_URL}>Give feedback / join pilot</CTAButton>
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(180deg, #0f172a 0%, #172554 100%)",
                color: "#ffffff",
                borderRadius: 28,
                padding: 24,
                boxShadow: "0 24px 60px rgba(15,23,42,0.26)",
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 800, opacity: 0.9, marginBottom: 14 }}>
                What disappears for me tomorrow?
              </div>

              <div style={{ display: "grid", gap: 12 }}>
                {[
                  "Messy inbox scanning",
                  "Unclear follow-up ownership",
                  "Did anyone actually do that?",
                  "Re-checking the same result twice",
                  "Hidden admin drag after review",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 16,
                      padding: "12px 14px",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 18,
                  padding: "16px 18px",
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div style={{ fontWeight: 900, fontSize: 28, letterSpacing: -1 }}>
                  Significant time saved — today
                </div>
                <div style={{ marginTop: 6, color: "rgba(255,255,255,0.84)", lineHeight: 1.55 }}>
                  One-click action. High-risk item surfaced. Audit trail already done.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: 28,
            padding: 30,
            boxShadow: "0 24px 60px rgba(15,23,42,0.06)",
            marginBottom: 26,
          }}
        >
          <div style={{ color: "#dc2626", fontWeight: 900, letterSpacing: 1.2, fontSize: 13 }}>
            THE FRIDAY PROBLEM
          </div>
          <h2
            style={{
              fontSize: 42,
              lineHeight: 1.08,
              letterSpacing: -1.8,
              margin: "10px 0 12px 0",
            }}
          >
            Friday. 5:45pm.
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.65, color: "#334155", maxWidth: 860, margin: 0 }}>
            A pathology result arrives. <strong>High potassium.</strong> You have seen it. You intend to
            act. The only question that matters is:
          </p>
          <div
            style={{
              marginTop: 18,
              fontSize: 29,
              fontWeight: 900,
              letterSpacing: -1.1,
              color: "#0f172a",
            }}
          >
            What guarantees that it actually gets done?
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 18,
              marginTop: 24,
            }}
          >
            <div
              style={{
                borderRadius: 24,
                background: "linear-gradient(135deg, #fff7ed 0%, #fff1f2 100%)",
                border: "1px solid #fed7aa",
                padding: 22,
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 900,
                  color: "#9a3412",
                  letterSpacing: 1.0,
                  marginBottom: 12,
                }}
              >
                WITHOUT CLINICQ
              </div>
              <div style={{ display: "grid", gap: 10, color: "#7c2d12", lineHeight: 1.6 }}>
                <div>• No explicit owner</div>
                <div>• No enforced next step</div>
                <div>• No completion verification</div>
                <div>• No clean proof of what happened later</div>
                <div style={{ fontWeight: 800 }}>Quietly disappears into the system.</div>
              </div>
            </div>

            <div
              style={{
                borderRadius: 24,
                background: "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)",
                border: "1px solid #bfdbfe",
                padding: 22,
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 900,
                  color: "#1d4ed8",
                  letterSpacing: 1.0,
                  marginBottom: 12,
                }}
              >
                WITH CLINICQ
              </div>
              <div style={{ display: "grid", gap: 10, color: "#1e3a8a", lineHeight: 1.6 }}>
                <div>• Assigned to a named person</div>
                <div>• High-risk item surfaced instantly</div>
                <div>• One-click action available</div>
                <div>• Audit trail created automatically</div>
                <div style={{ fontWeight: 800 }}>Cannot be closed until truly resolved.</div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 26 }}>
          <div style={{ color: "#2563eb", fontWeight: 900, letterSpacing: 1.2, fontSize: 13 }}>
            INBOX MVP FLOW
          </div>
          <h2
            style={{
              fontSize: 40,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              margin: "10px 0 18px 0",
            }}
          >
            From inbox chaos to action — in seconds
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 14,
            }}
          >
            <SectionCard
              title="A. Messy GP inbox"
              body="Multiple results. No structure. Hidden risk mixed with routine noise."
              accent="#e2e8f0"
            />
            <SectionCard
              title="B. ClinicQ prioritises instantly"
              body="High-risk items surfaced first. No scanning through clutter."
              accent="#bfdbfe"
            />
            <SectionCard
              title="C. Critical item identified"
              body="The dangerous result is obvious, visible, and cannot drift."
              accent="#fed7aa"
            />
            <SectionCard
              title="D. One-click action"
              body="Assign, message, or follow up with a single controlled action."
              accent="#93c5fd"
            />
            <SectionCard
              title="E. Audit trail done"
              body="Traceability is created as a by-product of the workflow itself."
              accent="#86efac"
            />
          </div>

          <div
            style={{
              marginTop: 18,
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              borderRadius: 24,
              padding: 22,
              color: "#ffffff",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: 1.0, opacity: 0.84 }}>
              RESULT
            </div>
            <div style={{ marginTop: 6, fontSize: 28, fontWeight: 900, letterSpacing: -1 }}>
              Significant time saved today
            </div>
            <div style={{ marginTop: 8, color: "rgba(255,255,255,0.84)", lineHeight: 1.6 }}>
              Less chasing. Less rewriting. Less double-checking. The doctor actively intervenes only
              when the key decision points actually matter.
            </div>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 18,
            marginBottom: 26,
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 28,
              padding: 28,
              boxShadow: "0 22px 50px rgba(15,23,42,0.05)",
            }}
          >
            <div style={{ color: "#2563eb", fontWeight: 900, letterSpacing: 1.2, fontSize: 13 }}>
              REAL FRAMING
            </div>
            <h2
              style={{
                fontSize: 38,
                lineHeight: 1.1,
                letterSpacing: -1.5,
                margin: "10px 0 14px 0",
              }}
            >
              This is not another system.
            </h2>
            <p style={{ margin: 0, color: "#475569", lineHeight: 1.75, fontSize: 17 }}>
              ClinicQ is the <strong>operating system for clinical responsibility</strong> — a governance
              and workflow system for AI-assisted clinical work. It structures how work moves, who owns
              it, and which actions are permitted, without replacing the EMR or making clinical
              decisions.
            </p>

            <div
              style={{
                marginTop: 18,
                padding: "18px 20px",
                borderRadius: 18,
                background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)",
                border: "1px solid #bfdbfe",
              }}
            >
              <div style={{ fontSize: 21, fontWeight: 900, letterSpacing: -0.5 }}>
                The system that controls the AI — not the other way around.
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 28,
              padding: 28,
              boxShadow: "0 22px 50px rgba(15,23,42,0.05)",
            }}
          >
            <div style={{ color: "#2563eb", fontWeight: 900, letterSpacing: 1.2, fontSize: 13 }}>
              SIMPLE BY DESIGN
            </div>
            <h2
              style={{
                fontSize: 34,
                lineHeight: 1.12,
                letterSpacing: -1.2,
                margin: "10px 0 14px 0",
              }}
            >
              Review → Click → Done
            </h2>
            <p style={{ margin: 0, color: "#475569", lineHeight: 1.75, fontSize: 17 }}>
              For the doctor, the finished product is not meant to feel heavy. ClinicQ does the hard
              governance work in the background. The doctor steps in at the critical decision points,
              confirms the right action, and moves on.
            </p>
            <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
              <div style={smallPill}>High-risk item surfaced automatically</div>
              <div style={smallPill}>One-click action from the inbox flow</div>
              <div style={smallPill}>Completion remains visible until verified</div>
            </div>
          </div>
        </section>

        <section
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: 28,
            padding: 30,
            boxShadow: "0 22px 50px rgba(15,23,42,0.05)",
            marginBottom: 26,
          }}
        >
          <div style={{ color: "#2563eb", fontWeight: 900, letterSpacing: 1.2, fontSize: 13 }}>
            SAFETY, TRUST, LIABILITY
          </div>
          <h2
            style={{
              fontSize: 40,
              lineHeight: 1.1,
              letterSpacing: -1.6,
              margin: "10px 0 16px 0",
            }}
          >
            Designed to protect — not restrict
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            <SectionCard
              title="Less friction, not more"
              body="ClinicQ is not meant to feel like surveillance. It removes uncertainty by doing the tracking in the background, so the doctor can focus on medicine."
              accent="#bfdbfe"
            />
            <SectionCard
              title="Liability inversion protection"
              body="If the receptionist did what they were asked to do — or if they did not — the workflow record can show it. If a patient later disputes follow-up, the operational history is preserved."
              accent="#fed7aa"
            />
            <SectionCard
              title="Protection when something goes wrong"
              body="Named ownership, timestamps, workflow progression, and visible completion all help show what happened, who acted, and when."
              accent="#86efac"
            />
          </div>

          <div
            style={{
              marginTop: 18,
              padding: "18px 20px",
              borderRadius: 18,
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              color: "#334155",
              lineHeight: 1.7,
              fontSize: 16,
            }}
          >
            <strong>Important boundary:</strong> ClinicQ is designed to improve operational safety,
            auditability, and accountability within workflow. It supports clinicians in meeting
            obligations, but it does not replace clinical judgment, legal advice, or the primary
            clinical record.
          </div>
        </section>

        <section style={{ marginBottom: 26 }}>
          <div style={{ color: "#2563eb", fontWeight: 900, letterSpacing: 1.2, fontSize: 13 }}>
            HOW IT WORKS
          </div>
          <h2
            style={{
              fontSize: 40,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              margin: "10px 0 18px 0",
            }}
          >
            A governed six-step flow
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 14,
            }}
          >
            <MiniStep
              number="1"
              title="Clinical event occurs"
              body="A result, letter, or follow-up trigger enters the workflow."
            />
            <MiniStep
              number="2"
              title="Converted into governed obligation"
              body="The item is transformed into a tracked obligation, not just a passive note."
            />
            <MiniStep
              number="3"
              title="Mandatory ownership assigned"
              body="Responsibility is made explicit. No vague ‘someone will do it’ state remains."
            />
            <MiniStep
              number="4"
              title="Workflow progression enforced"
              body="The system governs what may happen next and keeps open work visible."
            />
            <MiniStep
              number="5"
              title="Completion must be verified"
              body="Closure is not assumed. The required action must actually be completed."
            />
            <MiniStep
              number="6"
              title="Loop remains open until truly closed"
              body="Nothing disappears early. Open work stays open until resolved."
            />
          </div>
        </section>

        <section
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: 28,
            padding: 30,
            boxShadow: "0 22px 50px rgba(15,23,42,0.05)",
            marginBottom: 26,
          }}
        >
          <div style={{ color: "#2563eb", fontWeight: 900, letterSpacing: 1.2, fontSize: 13 }}>
            INTEGRATION WITHOUT DEPENDENCY
          </div>
          <h2
            style={{
              fontSize: 40,
              lineHeight: 1.1,
              letterSpacing: -1.5,
              margin: "10px 0 16px 0",
            }}
          >
            Designed for integration — not disruption
          </h2>

          <p style={{ margin: 0, color: "#475569", lineHeight: 1.75, fontSize: 17, maxWidth: 900 }}>
            ClinicQ can work today without deep EMR integration. But it is being designed for
            integration over time, so completion verification, workflow routing, and auditability can
            become even more seamless as practices mature technically.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginTop: 20,
            }}
          >
            <SectionCard
              title="Tier 1 — Works immediately"
              body="Manual or no-code fallback paths. Copy / paste, controlled messaging, lightweight deployment."
              accent="#dbeafe"
            />
            <SectionCard
              title="Tier 2 — Workflow sync"
              body="Structured triggers, imports, uploads, or inbox-level workflow handoff."
              accent="#bfdbfe"
            />
            <SectionCard
              title="Tier 3 — Full integration"
              body="Designed to connect more deeply as vendor and practice conditions allow."
              accent="#93c5fd"
            />
          </div>

          <div
            style={{
              marginTop: 18,
              padding: "18px 20px",
              borderRadius: 18,
              background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%)",
              border: "1px solid #bfdbfe",
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: -0.5 }}>
              Every clinical system will move this way. ClinicQ is already there.
            </div>
          </div>
        </section>

        <section
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            borderRadius: 30,
            padding: 34,
            color: "#ffffff",
            boxShadow: "0 28px 80px rgba(15,23,42,0.20)",
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.72)", fontWeight: 900, letterSpacing: 1.2, fontSize: 13 }}>
            NEXT STEP
          </div>
          <h2
            style={{
              fontSize: 42,
              lineHeight: 1.08,
              letterSpacing: -1.6,
              margin: "10px 0 14px 0",
            }}
          >
            See exactly how this works in practice
          </h2>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.84)", lineHeight: 1.8, fontSize: 18, maxWidth: 900 }}>
            This is a 2-minute interactive walkthrough of a real scenario. Follow what happens when a
            result needs follow-up, watch how the high-risk item is surfaced instantly, and see how the
            system creates ownership, action, and traceability with minimal doctor effort.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <CTAButton href={DEMO_URL} primary>
              Start walkthrough
            </CTAButton>
            <CTAButton href={FORM_URL}>Give feedback / join pilot</CTAButton>
          </div>

          <div
            style={{
              marginTop: 18,
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.6,
              fontSize: 14,
            }}
          >
            We are testing ClinicQ with a small number of clinicians. If this reflects how work really
            flows in your practice, we would value your input.
          </div>
        </section>
      </div>
    </div>
  );
}
