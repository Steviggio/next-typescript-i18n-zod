import LocaleSwitcher from "@/features/portfolio/components/locale-switcher";
import { Locale } from "@/../i18n-config";
import { getDictionnary } from "@/app/[lang]/dictionnaries";
import { PortfolioRepository } from "@/features/portfolio/data/portfolio.repository";
import { ThemeToggle } from "@/core/ui/theme-toggle";
import { HeroSection } from "@/features/portfolio/components/hero-section";
import { ProjectCard } from "@/features/portfolio/components/project-card";
import { ExperienceList } from "@/features/portfolio/components/experience-list";
import { FileText, Globe, Mail } from "lucide-react";
import { LinkedInIcon, GithubIcon } from "@/core/ui/icons/tech-icons";
import { env } from "process";
import { ContactSection } from "@/features/portfolio/components/contact-section";
import { AvailabilityBadge } from "@/features/portfolio/components/availability-badge";

const SocialIcons: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
  default: Globe,
};

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const data = await PortfolioRepository.getPortfolio(lang);
  const dict = await getDictionnary(lang);

  const sideProjects = data.projects.filter((p) => p.isSideProject);
  const professionalProjects = data.projects.filter((p) => !p.isSideProject);
  const devEnv = env.NODE_ENV || "development";

  const linkedinUrl =
    data.socials.find((s) => s.iconName === "linkedin")?.url || "#";

  return (
    <main className="min-h-screen bg-cream dark:bg-neutral-950 text-sage-dark dark:text-cream transition-colors duration-300 ease-in-out selection:bg-sage selection:text-cream">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        <header className="flex justify-between items-center mb-16">
          <h1 className="font-bold text-xl tracking-tight text-sage dark:text-cream">
            {data.profile.nickname}
          </h1>
          <ThemeToggle />
          {devEnv === "development" && (
            <div className="absolute top-4 right-[45%] flex flex-col justify-center items-center gap-3">
              <span className="ml-4 w-fit px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded">
                Dev mode
              </span>
              <LocaleSwitcher />
            </div>
          )}
        </header>
        <div className="flex flex-col gap-4 mb-10">
          <AvailabilityBadge status={data.profile.status} dict={dict.status} />
          <HeroSection profile={data.profile} />
        </div>

        {sideProjects.length > 0 && (
          <section className="mb-16">
            <h3 className="font-semibold text-sage-dark dark:text-cream mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage"></span>
              {dict.sections.selectedProjects}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sideProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        )}

        {professionalProjects.length > 0 && (
          <section className="mb-16">
            <div className="flex flex-col gap-3 pt-5">
              <h3 className="font-semibold text-sage-dark dark:text-cream mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage"></span>
                {dict.sections.companyProjects}
              </h3>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                {professionalProjects.map((project) => (
                  <div key={project.title} className="flex-1 min-w-[300px]">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mb-16">
          <h3 className="font-semibold text-sage-dark dark:text-cream mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sage"></span>
            {dict.sections.experiences}
          </h3>
          <ExperienceList experiences={data.experiences} />
          <div className="mt-10 pl-7">
            <a
              href={data.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sage text-cream text-sm font-medium hover:bg-sage-dark transition-colors shadow-sm hover:shadow-md"
            >
              <FileText className="h-4 w-4" />
              {dict.sections.resume}
            </a>
          </div>
        </section>

        {/* SECTION CONTACT  */}
        <section className="mb-16">
          <h3 className="font-semibold text-sage-dark dark:text-cream mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sage"></span>
            {dict.contact.title}
          </h3>
          <ContactSection
            dict={dict.contact}
            email={data.profile.email}
            linkedinUrl={linkedinUrl}
          />
        </section>

        <footer className="pt-8 border-t border-sage/10 dark:border-neutral-800 flex justify-between items-center text-sm text-sage/60 dark:text-neutral-500">
          <p>
            © {new Date().getFullYear()} {data.profile.name}
          </p>
          <div className="flex gap-4">
            {data.socials.map((social) => {
              const Icon = SocialIcons[social.iconName] || SocialIcons.default;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sage dark:hover:text-cream transition-colors p-2 hover:bg-sage/10 rounded-full"
                  aria-label={social.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </footer>
      </div>
    </main>
  );
}
