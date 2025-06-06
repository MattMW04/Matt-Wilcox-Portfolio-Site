import skills from '../data/skills.json';
import { Skill } from '../app/types/types';

export function getSkillsByCategory(category: string): Skill[] {
    if (category in skills) {
        return (skills as Record<string, Skill[]>)[category];
    }
    return [];
}