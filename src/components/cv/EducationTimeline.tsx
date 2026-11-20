import { Award, GraduationCap } from "lucide-react";
import { EDUCATION_RECORDS } from "@/data/academic-profile";

export function EducationTimeline() {
  return (
    <ol className="space-y-4">
      {EDUCATION_RECORDS.map((edu, index) => (
        <li
          key={edu.id}
          className="group rounded-xl border border-purple/25 bg-soft-purple/55 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-colors duration-200 hover:border-purple/50 hover:bg-soft-purple/80"
        >
          <div className="flex items-start gap-3.5">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple/30 bg-pure-white text-purple transition-colors duration-200 group-hover:border-purple">
              <GraduationCap aria-hidden="true" className="h-4 w-4" />
            </span>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-semibold text-deep-navy">
                {edu.degree}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-primary-navy">
                {edu.institution}
              </p>
            </div>
          </div>

          <span
            className={`self-start sm:self-center inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
              index === 0
                ? "border-purple/35 bg-pure-white text-deep-navy"
                : "border-border-subtle bg-pure-white text-main-text"
            }`}
          >
            <Award aria-hidden="true" className="h-3.5 w-3.5 text-purple" />
            <span>CGPA: {edu.cgpa}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}
