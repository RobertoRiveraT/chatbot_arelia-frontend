export type WorkCategory = 
'Projects' | 'SideProjects' | 'Certifications' | 'QA' | 'Fullstack' | 'Mobile' | 'GameDev';

export interface WorkItem {
    title: string;
    category: WorkCategory[];
    cardColor: 'green' | 'blue';
    startDate: string;
    endDate?: string;
    description: string;
    readMoreText?: string;
    bullets: string[];
    link?: string;
    thumbnail: string;
    readMoreOpen?: boolean;
}
