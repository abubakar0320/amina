import { MPHIL_CASE_STUDY } from "@/data/academic-profile";
import { Badge } from "@/components/ui/Badge";

const THESIS_TOOLS = [
  "TagAnt POS tagging (C5 and C7 tagsets)",
  "AntConc",
  "Concordance/KWIC analysis",
  "Contrastive Interlanguage Analysis",
  "Log-likelihood",
  "Error analysis",
] as const;

export function ResearchExperience() {
  return (
    <div className="rounded-xl border border-teal/25 bg-soft-teal/55 p-5 space-y-4">
      <div className="space-y-1">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy">
          Thesis
        </p>
        <h3 className="font-serif text-base sm:text-lg font-semibold leading-snug text-deep-navy italic">
          {MPHIL_CASE_STUDY.title}
        </h3>
      </div>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-teal/20 pt-3.5 text-sm">
        <div>
          <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-primary-navy/85">
            Research Supervisor
          </dt>
          <dd className="mt-0.5 font-semibold text-deep-navy">
            {MPHIL_CASE_STUDY.supervisor}
          </dd>
        </div>

        <div>
          <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-primary-navy/85">
            Department
          </dt>
          <dd className="mt-0.5 font-medium text-deep-navy">
            Department of Applied Linguistics, GCUF
          </dd>
        </div>

        <div className="sm:col-span-2">
          <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-primary-navy/85">
            Corpus and Approach
          </dt>
          <dd className="mt-0.5 leading-relaxed text-main-text/90">
            Comparative analysis of 800 English writing samples, including 400
            Pakistani and 400 native-speaker samples, using ICNALE V2.0.
          </dd>
        </div>
      </dl>

      <div className="border-t border-teal/20 pt-3.5 space-y-2">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-primary-navy">
          Analytical Tools
        </p>
        <div className="flex flex-wrap gap-2">
          {THESIS_TOOLS.map((tool) => (
            <Badge key={tool} variant="teal">
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
