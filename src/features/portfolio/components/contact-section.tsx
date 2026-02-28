import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/core/ui/icons/tech-icons";

type GlobalDict = typeof import("@/features/dictionaries/fr.json");

interface ContactSectionProps {
  dict: GlobalDict["contact"];
  email: string;
  linkedinUrl: string;
}

export function ContactSection({
  dict,
  email,
  linkedinUrl,
}: ContactSectionProps) {
  return (
    <div className="flex flex-col items-start gap-6 p-8 bg-cream-dark/30 dark:bg-neutral-900/50 border border-sage/20 dark:border-neutral-800 rounded-2xl">
      <div className="max-w-xl">
        <p className="text-sage/80 dark:text-neutral-400 leading-relaxed">
          {dict.description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
        <a
          href={`mailto:${email}`}
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-sage text-cream rounded-xl font-medium hover:bg-sage-dark dark:hover:bg-sage-light dark:hover:text-sage-dark transition-all duration-300 active:scale-95"
        >
          <Mail className="h-4 w-4" />
          {dict.emailLabel}
        </a>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-neutral-950 text-sage-dark dark:text-cream border border-sage/20 dark:border-neutral-800 rounded-xl font-medium hover:border-sage dark:hover:border-sage-light transition-all duration-300 active:scale-95"
        >
          <LinkedInIcon className="w-4 h-4" />
          {dict.linkedinLabel}
          <ArrowUpRight className="h-4 w-4 text-sage/40 group-hover:text-sage group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </div>
    </div>
  );
}
