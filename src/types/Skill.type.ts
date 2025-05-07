export interface Skill {
  name: string;
  icon: string;
}

export interface SkillsCategory {
  [category: string]: Skill[];
}
