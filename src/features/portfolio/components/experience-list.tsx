import Link from "next/link";
import { cn } from "@/core/lib/cn";
import type { Experience } from "../types/portfolio.schema";

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="ml-1 space-y-8 border-l-2 border-sage/20 pl-6">
      {experiences.map((exp, index) => (
        <div key={`${exp.company}-${index}`} className="group relative">
          {/* Point de timeline */}
          <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-cream bg-sage/40 transition-colors group-hover:bg-sage dark:border-neutral-950" />

          <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
            {exp.link ? (
              <Link
                href={exp.link}
                target="_blank"
                className="font-medium text-sage-dark transition-colors hover:text-sage dark:text-cream dark:hover:text-sage-light"
              >
                {exp.company}
              </Link>
            ) : (
              <span className="font-medium text-sage-dark dark:text-cream">
                {exp.company}
              </span>
            )}

            <span className="font-mono text-sm text-sage/70 dark:text-neutral-500">
              {exp.date}
            </span>
          </div>

          <p className="mt-1 text-sm text-sage dark:text-neutral-400">
            {exp.role}
          </p>

          {exp.description && (
            <p className="mt-2 text-sm text-muted-foreground max-w-lg">
              {exp.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
