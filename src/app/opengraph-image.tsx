import { ImageResponse } from "next/og";

export const alt =
  "Amina Mumtaz — Applied Linguistics Researcher & University Lecturer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export function renderAcademicSocialCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          padding: "56px 64px",
          border: "14px solid #192B50",
          fontFamily: "sans-serif",
          color: "#273449",
        }}
      >
        {/* Top Academic Eyebrow Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#EAF0FA",
              border: "1px solid #E3E8F0",
              borderRadius: "999px",
              padding: "10px 22px",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#253B70",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                backgroundColor: "#168C87",
              }}
            />
            <span>ACADEMIC RESEARCH PROFILE</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "76px",
              height: "76px",
              borderRadius: "999px",
              backgroundColor: "#192B50",
              border: "3px solid #E7BD55",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#FFFFFF",
            }}
          >
            AM
          </div>
        </div>

        {/* Center Identity & Specializations */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#192B50",
            }}
          >
            Amina Mumtaz
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderLeft: "5px solid #168C87",
              paddingLeft: "22px",
              fontSize: "30px",
              fontWeight: 500,
              color: "#253B70",
            }}
          >
            Applied Linguistics Researcher &amp; University Lecturer
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "10px",
            }}
          >
            {[
              { label: "Applied Linguistics", bg: "#EAF0FA", border: "#D4E0F3" },
              { label: "Corpus Linguistics", bg: "#E7F4F1", border: "#C8E3DF" },
              { label: "Colligation Studies", bg: "#F0EBF7", border: "#DDD3EE" },
              { label: "English Language Teaching", bg: "#FBF5E5", border: "#E8DCBA" },
            ].map((topic) => (
              <div
                key={topic.label}
                style={{
                  backgroundColor: topic.bg,
                  border: `1px solid ${topic.border}`,
                  borderRadius: "999px",
                  padding: "10px 20px",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#192B50",
                }}
              >
                {topic.label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Attribution Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #E3E8F0",
            paddingTop: "22px",
            fontSize: "20px",
            color: "#667085",
          }}
        >
          <span>MPhil in Applied Linguistics (GCUF) · ICNALE V2.0 Research</span>
          <span style={{ color: "#253B70", fontWeight: 600 }}>
            Shahkot, Punjab, Pakistan
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

export default async function OpenGraphImage() {
  return renderAcademicSocialCard();
}
