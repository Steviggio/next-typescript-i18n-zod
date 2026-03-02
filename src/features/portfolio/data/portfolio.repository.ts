import { PortfolioData, PortfolioDataSchema } from "../types/portfolio.schema";
import { Locale } from "../../../../i18n-config";
import { getDictionnary } from "@/app/[lang]/dictionnaries";

export const RAW_DATA = {
  lang: "fr",
  profile: {
    status: "available",
    name: "Steve Mothmora",
    nickname: "Steviggio",
    title: "Développeur JS | React.js / Node.js",
    about:
      "Développeur JavaScript, passionné de langues et de développement, j'aime prendre part à des projets innovants mélant créativité et modernité.",
    description:
      "Je suis Steviggio, un développeur Fullstack JS spécialisé dans les technologies modernes telles que Next.js, React, et Node.js. Avec une passion pour la création d'applications web performantes et intuitives, je m'efforce de transformer des idées innovantes en solutions numériques concrètes. En plus de mes compétences techniques, j'ai un intérêt marqué pour les langues et la communication interculturelle, ce qui enrichit ma perspective dans le développement de projets globaux.",
    location: "Orléans, France",
    role: "Développeur Fullstack JS",
    resumeUrl: "/CV_Mothmora_2026.pdf",
    avatarUrl: "/steve.jpg",
    email: "steviggio@gmail.com",
  },
  socials: [
    { name: "GitHub", url: "https://github.com/Steviggio", iconName: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/stevemothmora/",
      iconName: "linkedin",
    },
  ],
  projects: [
    {
      id: "polypost",
      title: "Polypost",
      description: "Tableau de bord temps réel avec Next.js 16 et Tremor.",
      link: "https://github.com/Steviggio/polypost",
      active: true,
      isSideProject: true,
      tech: ["Next.js", "Tremor", "TypeScript"],
    },
    {
      id: "eshop-template",
      title: "E-commerce Headless ",
      description:
        "Template E-commerce 'Headless' optimisé pour la performance.",
      link: "https://github.com/Steviggio/eshop-template",
      active: true,
      isSideProject: true,
      tech: ["Next.js", "Tremor", "TypeScript"],
    },
    {
      id: "speakio",
      title: "Speakio",
      description: "Plateforme d'accompagnement à l'apprentissage des langues.",
      link: "https://github.com",
      active: false,
      isSideProject: true,
    },
    {
      id: "portfolio",
      title: "Portfolio Minimaliste",
      description: "Le site sur lequel vous naviguez actuellement.",
      link: "https://github.com/Steviggio/next-portfolio",
      active: true,
      isSideProject: true,
      tech: ["Next.js", "TailwindCSS", "TypeScript", "Zod"],
    },
    {
      id: "ganatan",
      title: "Ganatan",
      description: "Plateforme de formation Fullstack Angular/Node.",
      link: "https://ganatan.com",
      active: true,
      companyLogoUrl: "/ganatan-logo.png",
      company: "Ganatan",
      tech: ["React", "Angular", "Node.js"],
      isSideProject: false,
    },
    {
      id: "qobook",
      title: "Qobook",
      description: "Librairie mobile pour découvrir et lire des livres.",
      link: "https://qobook.app",
      active: true,
      companyLogoUrl: "/efficience-logo.png",
      company: "Efficience Digitale",
      tech: ["React Native", "TypeScript", "Redux Toolkit", "Supabase"],
      isSideProject: false,
    },
    {
      id: "365fois",
      title: "365 fois plus de laicité",
      description: "Application native de sensibilisation à la laïcité.",
      link: "https://365fois.com",
      active: true,
      companyLogoUrl: "/365fois-logo.png",
      company: "365fois",
      tech: [
        "React Native",
        "Redux Toolkit",
        "TypeScript",
        "Strapi",
        "Mistral AI",
      ],
      isSideProject: false,
    },
    {
      id: "questitution",
      title: "Questitution",
      description:
        "Un jeu développé pour le conseil constitutionnel afin d'apprendre la constitution française au travers d'un quizz.",
      link: "https://www.decouvronsnotreconstitution.fr/jeu-questitution",
      active: true,
      companyLogoUrl: "/questitution-logo.svg",
      company: "Questitution",
      tech: ["React", "TypeScript"],
      isSideProject: false,
    },
    {
      id: "jetulis",
      title: "JeTuLis",
      description:
        "Une application mobile proposant une expérience de lecture immersive pour les enfants, avec des fonctionnalités de personnalisation et d'interactivité.",
      link: "https://jetulis.fr/",
      active: true,
      tech: ["React Native", "TypeScript", "Redux Toolkit", "Supabase"],
      companyLogoUrl: "/jetulis-logo.png",
      company: "Efficience Digitale",
      isSideProject: false,
    },
  ],
  experiences: [
    {
      id: "efficience",
      company: "Efficience Digitale",
      role: "Développeur Frontend",
      date: "Sept. 2024 — Oct. 2025",
      link: "https://efficience.com",
    },
    {
      id: "ganatan",
      company: "Ganatan",
      role: "Développeur Fullstack",
      date: "Août 2022 - Sept. 2023",
      link: "https://ganatan.com",
    },
    {
      id: "freelance",
      company: "Freelance",
      role: "Développeur Fullstack JS",
      date: "Août 2023 - Présent",
    },
  ],
};

export const technologies = [
  {
    javascript: [
      "React.js",
      "React Native",
      "Next.js",
      "Node.js",
      "TypeScript",
    ],
    python: ["Django", "Flask"],
    databases: ["MongoDB", "PostgreSQL", "MySQL"],
    devops: ["Docker", "Jenkins", "AWS", "Nginx"],
  },
];

export class PortfolioRepository {
  static async getPortfolio(lang: Locale): Promise<PortfolioData> {
    try {
      const dict = await getDictionnary(lang);

      const localizedData = {
        ...RAW_DATA,
        lang: lang,
        profile: {
          ...RAW_DATA.profile,
          title: dict.profile.title,
          about: dict.profile.about,
          description: dict.profile.description,
          role: dict.profile.role,
          location: dict.profile.location,
        },
        sections: dict.sections,
        projects: RAW_DATA.projects.map((project) => {
          const translation =
            dict.projects.informations[
              project.id as keyof typeof dict.projects.informations
            ];
          return {
            ...project,
            title: translation?.title ?? project.title,
            description: translation?.description ?? project.description,
          };
        }),
        experiences: RAW_DATA.experiences.map((exp) => {
          const localizedRole =
            dict.experiences.role[exp.id as keyof typeof dict.experiences.role];
          return {
            ...exp,
            role: localizedRole ?? exp.role,
          };
        }),
      };

      const result = PortfolioDataSchema.safeParse(localizedData);
      if (!result.success) {
        console.error("Invalid portfolio Data: ");
        throw new Error("Data integrity check failed");
      }
      return result.data;
    } catch (error) {
      console.error("Error fetching portfolio data: ", error);
      return RAW_DATA as unknown as PortfolioData;
    }
  }
}
