import { WorkItem } from '../../../../work-item.interface';

export const WebpageChatbotDemoProject: WorkItem = {
    title: 'Realtime Web Chatbot',
    category: ['Projects'],
    cardColor: 'blue',
    startDate: '2024-05',
    endDate: '2024-05',
    description: 
    'Designed and deployed a fullstack chatbot demo using <strong>Angular</strong>, <strong>FastAPI</strong>, <strong>PostgreSQL</strong> and <strong>OpenAI</strong>.',
    readMoreText: 
    '',
    bullets: [
    'JWT Auth with frontend route guard',
    'OpenAI API integration',
    'Dynamic prompt building with user history'
    ],
    link: '/chatbot',
    thumbnail: 'assets/img/work/chatbot_web_thumb.png',
    readMoreOpen: false // control toggle state
};
