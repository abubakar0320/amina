import { renderAcademicSocialCard } from "./opengraph-image";

export const alt =
  "Amina Mumtaz — Applied Linguistics Researcher & University Lecturer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function TwitterImage() {
  return renderAcademicSocialCard();
}
