import { Clock } from "lucide-react";
import type { AcademicProfilePlatform } from "@/data/publications-and-profiles";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalAcademicLink } from "@/components/publications/ExternalAcademicLink";

export interface ResearchProfileCardProps {
  profile: AcademicProfilePlatform;
}

export function ResearchProfileCard({ profile }: ResearchProfileCardProps) {
  const isAvailable = profile.verified && Boolean(profile.url);

  return (
    <Card
      as="article"
      surface="white"
      interactive={isAvailable}
      accentTone="navy"
      className="flex flex-col justify-between border-primary-navy/15"
    >
      <div>
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            {/* Platform Identity Mark */}
            <span
              aria-hidden="true"
              style={{
                backgroundColor: profile.badgeBgHex,
                color: profile.badgeTextHex,
                borderColor: profile.badgeBorderHex,
              }}
              className="inline-flex h-11 min-w-[2.75rem] px-2.5 items-center justify-center rounded-xl border font-sans text-sm font-bold tracking-tight shadow-2xs"
            >
              {profile.brandMark}
            </span>

            <Badge variant={isAvailable ? "teal" : "blue"}>
              {isAvailable ? "Verified Profile" : "Awaiting Verification"}
            </Badge>
          </div>

          <h3 className="font-serif text-xl font-semibold text-deep-navy">
            {profile.name}
          </h3>
        </CardHeader>

        <CardBody className="space-y-3 pt-0 pb-5">
          <p className="text-sm leading-[1.7] text-secondary-text">
            {profile.purpose}
          </p>

          {profile.verified && profile.identifier && (
            <div className="rounded-xl border border-primary-navy/20 bg-soft-blue/65 px-3.5 py-2.5">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-primary-navy">
                {profile.identifierLabel ?? "Identifier"}
              </p>
              <p className="text-xs font-semibold text-deep-navy break-all">
                {profile.identifier}
              </p>
            </div>
          )}
        </CardBody>
      </div>

      <CardFooter className="pt-4">
        {isAvailable && profile.url ? (
          <ExternalAcademicLink
            href={profile.url}
            label="Visit Profile"
            ariaLabel={`Visit Amina Mumtaz's verified ${profile.name} profile`}
            variant="secondary"
            size="md"
            fullWidth
          />
        ) : (
          <p className="flex items-center gap-2 text-xs leading-relaxed text-secondary-text">
            <Clock aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-primary-navy" />
            <span>
              Official profile URL will appear here once verified.
            </span>
          </p>
        )}
      </CardFooter>
    </Card>
  );
}
