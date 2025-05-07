export const contactData = (t: (key: string) => string)  =>  [
  {
    name: 'LinkedIn',
    icon: 'logos:linkedin-icon',
    tooltip: t('contact.linkedIn'),
    url: 'https://www.linkedin.com/in/viviana-moreno-gordillo',
  },
  {
    name: 'GitHub',
    icon: 'logos:github-icon',
    tooltip: t('contact.gitHub'),
    url: 'https://github.com/VivisBusiness',
  },
  {
    name: 'Email',
    icon: 'logos:google-gmail',
    tooltip: t('contact.email'),
    url: 'mailto:vivis11business@gmail.com',
  },
  {
    name: 'CodePen',
    icon: 'logos:codepen-icon',
    tooltip: t('contact.CodePen'),
    url: 'https://codepen.io/vivis97',
  },
];
