import { WorkItem } from '../../../work-item.interface';

export const TikTokCloneProject: WorkItem = {
    title: 'TikTok Clone Web Application',
    category: ['Projects', 'Fullstack'],
    cardColor: 'blue',
    startDate: '2021-10',
    endDate: '2021-11',
    description: 
        'Developed a simplified fullstack <strong>TikTok clone</strong> web application implementing <strong>video browsing</strong>, <strong>user authentication</strong>, <strong>likes</strong>, and <strong>comments</strong>. The project combines a <strong>React</strong>-based front-end with a <strong>FastAPI</strong> back-end and a <strong>MariaDB/MySQL</strong> database.',

    bullets: [
        'Built the front-end using <strong>React</strong> and <strong>React Router</strong> for client-side navigation',
        'Developed the back-end REST API using <strong>FastAPI</strong> and <strong>Uvicorn</strong> server',
        'Integrated <strong>MariaDB/MySQL</strong> as relational database system for user and video data',
        'Managed Node.js dependencies via <strong>npm</strong> for the React app',
        'Implemented <strong>user registration</strong> and <strong>authentication flows</strong>',
        'Handled full video browsing experience including <strong>likes</strong> and <strong>comments</strong>',
        'Connected back-end API with front-end seamlessly for real-time data updates'
    ],
    link: 'https://github.com/RobertoRiveraT/ProyectoWeb-Tiktok',
    thumbnail: 'assets/img/work/2021/tiktokclone_1.jpg',
    readMoreOpen: false
};
