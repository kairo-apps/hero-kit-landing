"use client";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Root-level error UI (must define own html/body — root layout is skipped on error).
 */
export default function GlobalError({ error, reset }: GlobalErrorProps): JSX.Element {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#080a12", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Something went wrong</h1>
          <p style={{ marginTop: "16px", opacity: 0.75, maxWidth: "28rem", fontSize: "0.875rem" }}>
            {error.message || "Please refresh the page or try again later."}
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: "32px",
              padding: "10px 24px",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 215, 0, 0.5)",
              background: "linear-gradient(to bottom, #ffd700, #e6c200)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
