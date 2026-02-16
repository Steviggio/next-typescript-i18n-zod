import Image from "next/image";
import { cn } from "@/core/lib/cn";
import type { Profile } from "../types/portfolio.schema";

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="mb-16 flex flex-col gap-5">
      <div
        className={cn(
          "justify-between flex flex-col items-stretch px-8 pb-5 border rounded-xl shadow-md transition-shadow duration-300",
          "dark:shadow-neutral-900 dark:border-neutral-800 hover:shadow-lg",
          "bg-white dark:bg-transparent",
        )}
      >
        <div className="flex flex-row items-center justify-between pt-5 pr-5">
          <div>
            <h3 className="text-lg font-semibold text-sage-dark dark:text-cream">
              {profile.name}
            </h3>
            <p className="text-sm font-bold text-sage dark:text-sage-light">
              {profile.role}
            </p>
          </div>

          <div className="text-right hidden sm:block">
            <p className="text-sm text-sage/80 dark:text-neutral-400">
              {profile.location}
            </p>
          </div>

          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            width={70}
            height={70}
            className="w-fit border-2 rounded-3xl border-gray-300 shadow-sm object-cover dark:border-gray-600"
          />
        </div>

        <div className="flex items-center justify-start text-sm mt-3">
          <p className="text-sage dark:text-neutral-400 leading-relaxed">
            {profile.title}
          </p>
        </div>
      </div>
    </section>
  );
}
