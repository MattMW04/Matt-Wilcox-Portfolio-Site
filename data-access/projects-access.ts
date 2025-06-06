import projects from '../data/projects.json';
import { Project } from '../app/types/types';

export function getProjects(): Project[] {
    return projects as Project[];
}
