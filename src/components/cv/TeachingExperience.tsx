import { Building2, MapPin } from "lucide-react";
import { VERIFIED_TEACHING_POSITIONS } from "@/data/teaching-and-resources";

export function TeachingExperience() {
  return (
    <ul className="space-y-3">
      {VERIFIED_TEACHING_POSITIONS.map((position) => (
        <li
          key={position.id}
          className="rounded-xl border border-golden-yellow/60 bg-soft-gold/65 px-4 py-3.5 sm:px-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
        >
          <div className="flex items-start sm:items-center gap-3">
            <span className="mt-0.5 sm:mt-0 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-golden-yellow bg-pure-white text-deep-navy">
              <Building2 aria-hidden="true" className="h-4 w-4" />
            </span>
            <p className="text-sm sm:text-[0.95rem] text-deep-navy">
              <span className="font-semibold">{position.role}</span>
              <span className="mx-2 text-terracotta">&mdash;</span>
              <span className="font-medium text-primary-navy">{position.institution}</span>
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 pl-11 sm:pl-0 text-xs text-main-text/85 shrink-0">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-terracotta" />
            <span>{position.location}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
