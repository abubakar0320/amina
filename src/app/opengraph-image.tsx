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
                backgroundColor: "#0D635F",
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
              border: "3px solid #D8A228",
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
              borderLeft: "5px solid #0D635F",
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
              { label: "Applied Linguistics", bg: "#EAF0FA", border: "#B9CCE8", text: "#192B50" },
              { label: "Corpus Linguistics", bg: "#0D635F", border: "#0D635F", text: "#FFFFFF" },
              { label: "Colligation Studies", bg: "#553388", border: "#553388", text: "#FFFFFF" },
              { label: "English Language Teaching", bg: "#D8A228", border: "#B38114", text: "#192B50" },
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
                  color: topic.text,
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
