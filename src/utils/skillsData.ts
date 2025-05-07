import { SkillsCategory } from "../types/Skill.type";

export const skills: SkillsCategory = {
  Frontend: [
    { name: 'HTML', icon: 'vscode-icons:file-type-html' },
    { name: 'CSS', icon: 'vscode-icons:file-type-css' },
    { name: 'SCSS', icon: 'vscode-icons:file-type-scss2' },
    { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
    { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official' },
    { name: 'ReactJS', icon: 'logos:react' },
    { name: 'React Native', icon: 'logos:react' },
    { name: 'Angular 7+', icon: 'logos:angular-icon' },
    { name: 'TailwindCSS', icon: 'vscode-icons:file-type-tailwind' },
    { name: 'Figma', icon: 'logos:figma' },
  ],
  Backend: [
    { name: 'NestJS', icon: 'simple-icons:nestjs' },
    { name: 'Spring Boot', icon: 'simple-icons:springboot' },
    { name: 'Firebase', icon: 'logos:firebase' },
    { name: 'RESTful APIs', icon: 'carbon:api' },
  ],
  Databases: [
    { name: 'MongoDB', icon: 'logos:mongodb-icon' },
    { name: 'MySQL', icon: 'logos:mysql-icon' },
  ],
  Testing: [
    { name: 'Jest', icon: 'logos:jest' },
    { name: 'Postman', icon: 'logos:postman-icon' },
    { name: 'Swagger', icon: 'logos:swagger' },
    { name: 'SoapUI', icon: 'simple-icons:soapui' },
  ],
  DevTools: [
    { name: 'Git', icon: 'logos:git-icon' },
    { name: 'GitHub', icon: 'mdi:github' },
    { name: 'Azure DevOps', icon: 'logos:azure-devops' },
  ],
  IDEs: [
    { name: 'Xcode', icon: 'logos:xcode' },
    { name: 'Android Studio', icon: 'logos:android-studio' },
  ],
};
