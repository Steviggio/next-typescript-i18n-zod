import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/core/lib/cn";
import type { Project } from "../types/portfolio.schema";
import {
  ReactIcon,
  NodeIcon,
  ReduxIcon,
  SupabaseIcon,
  MistralIcon,
  FirebaseIcon,
  StrapiIcon,
} from "@/core/ui/icons/tech-icons";
import { Badge } from "@/core/ui/badge";

interface ProjectCardProps {
  project: Project;
}

const TECH_ICONS: Record<string, React.ElementType> = {
  React: ReactIcon,
  "React.js": ReactIcon,
  "React Native": ReactIcon,
  "Node.js": NodeIcon,
  Redux: ReduxIcon,
  "Redux Toolkit": ReduxIcon,
  Supabase: SupabaseIcon,
  Firebase: FirebaseIcon,
  "Mistral AI": MistralIcon,
  Strapi: StrapiIcon,
};

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    description,
    link,
    active,
    tech,
    companyLogoUrl,
    isSideProject,
  } = project;

  const baseClasses = cn(
    "group block h-full p-5 rounded-lg border transition-all duration-300 select-none",
    "bg-cream-dark/30 dark:bg-neutral-900/50",
    "border-sage/20 dark:border-neutral-800", 
    active
      ? "hover:border-sage hover:bg-white dark:hover:border-sage-light dark:hover:bg-neutral-900 cursor-pointer"
      : "opacity-50 pointer-events-none border-gray-200 dark:border-0",
  );

  const content = (
    <>
      <div className="flex justify-between items-start mb-3 relative">
        {companyLogoUrl && !isSideProject && (
          <Image
            src={companyLogoUrl}
            alt={`Logo ${project.company}`}
            width={25}
            height={25}
            className="rounded-xl object-contain absolute -top-[1.6rem] -left-6 opacity-85 animate-heartbeat"
          />
        )}

        <div className="flex flex-col gap-1">
          <h4 className="font-medium text-sage-dark dark:text-cream group-hover:text-sage transition-colors">
            {title}
          </h4>
        </div>

        {active && (
          <ArrowUpRight className="h-4 w-4 text-sage/60 group-hover:text-sage group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        )}
      </div>

      <p className="text-sm text-sage/80 dark:text-neutral-400 leading-relaxed mb-3">
        {description}
      </p>

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {tech.map((t, index) => {
            const Icon = TECH_ICONS[t];

            return (
              <Badge key={index} variant="secondary" className="gap-1.5 pr-2.5">
                {Icon && <Icon className="h-4 w-4 " />}
                {t}
              </Badge>
            );
          })}
        </div>
      )}
    </>
  );

  if (!active) {
    return <div className={baseClasses}>{content}</div>;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClasses}
    >
      {content}
    </a>
  );
}
