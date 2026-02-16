import { Github, Linkedin, FileText, Globe, Mail } from "lucide-react";
import { PortfolioRepository } from "@/data/portfolio.repository";
import { HeroSection } from "@/features/portfolio/components/hero-section";
import { ProjectCard } from "@/features/portfolio/components/project-card";
import { ExperienceList } from "@/features/portfolio/components/experience-list";
import { ThemeToggle } from "@/core/ui/theme-toggle";

const SocialIcons: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  default: Globe,
};

export default async function Home() {
  const data = await PortfolioRepository.getPortfolio();
  const sideProjects = data.projects.filter((p) => p.isSideProject);
  const professionalProjects = data.projects.filter((p) => !p.isSideProject);

  return (
    <main className="min-h-screen bg-cream dark:bg-neutral-950 text-sage-dark dark:text-cream transition-colors duration-300 ease-in-out selection:bg-sage selection:text-cream">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        <header className="flex justify-between items-center mb-16">
          <h1 className="font-bold text-xl tracking-tight text-sage dark:text-cream">
            {data.profile.nickname}
          </h1>
          <ThemeToggle />
        </header>

        <HeroSection profile={data.profile} />

        {sideProjects.length > 0 && (
          <section className="mb-16">
            <h3 className="font-semibold text-sage-dark dark:text-cream mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage"></span>
              Projets Sélectionnés
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sideProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* PROJETS EN ENTREPRISE */}
        {professionalProjects.length > 0 && (
          <section className="mb-16">
            <div className="flex flex-col gap-3 pt-5">
              <h3 className="font-semibold text-sage-dark dark:text-cream mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage"></span>
                Projets en entreprise
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

        {/* EXPÉRIENCES */}
        <section className="mb-16">
          <h3 className="font-semibold text-sage-dark dark:text-cream mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sage"></span>
            Expérience
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
              Voir le CV complet
            </a>
          </div>
        </section>

        {/* FOOTER */}
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
