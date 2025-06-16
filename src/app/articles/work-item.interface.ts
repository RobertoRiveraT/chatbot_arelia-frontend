export interface WorkItem {
    title: string;
    category: 'Projects' | 'Certifications';
    startDate: string;
    endDate?: string;
    description: string;
    readMoreText?: string;
    bullets: string[];
    link?: string;
    thumbnail: string;
    readMoreOpen?: boolean;
}
