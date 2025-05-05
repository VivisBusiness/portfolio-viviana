import { CardProps } from "../types/Card.types";

export const projectsList = (t: (key: string) => string): CardProps[]  => [
  {
    title: t('projects.verzalo.title'),
    description: t('projects.verzalo.description'),
    url: 'https://github.com/VivisBusiness/verzalo',
    buttonText: t('projects.buttonText'),
  },
  {
    title:  t('projects.personalPortfolio.title'),
    description: t('projects.personalPortfolio.description'),
    url: 'https://github.com/VivisBusiness/portfolio-viviana',
    buttonText: t('projects.buttonText'),
  },
  {
    title: t('projects.portfolioUI.title'),
    description: t('projects.portfolioUI.description'),
    url: 'https://www.figma.com/design/sVONJ3BS1CrfvPgCZj1K14/Desings-Viviana?node-id=2-5259&t=lPG4yjL8p1Wgz0ZU-0',
    buttonText: t('projects.buttonText'),
  },
];
