import { Icon } from '@iconify/react';
import { Skill } from '../../types/Skill.type';

export default function SkillCard({ name, icon }: Skill) {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-white dark:bg-gray-700"
      aria-label={name}
    >
      <Icon icon={icon} width="40" height="40" />
      <span className="mt-2 text-sm text-gray-700 dark:text-gray-200">{name}</span>
    </div>
  );
}
