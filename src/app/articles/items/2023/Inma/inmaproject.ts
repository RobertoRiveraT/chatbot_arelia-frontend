import { WorkItem } from '../../../work-item.interface';

export const InmaProject: WorkItem = {
    title: 'Inma — Award-Winning Open Data Healthcare App (Tokyo Hackathon)',
    category: ['Projects'],
    cardColor: 'blue',
    startDate: '2023-10',
    endDate: '2023-10',
    description:
        'Awarded in the 行政ニーズ (Administrative Needs) category at the <strong>Tokyo Governor’s Cup Open Data Hackathon 2023</strong>. <strong>Inma</strong> is a prototype healthcare accessibility app built using open government data to support foreign residents in Japan with medical services in their own language.',

    readMoreText:
        '<h2>Project Overview</h2>' +
        '<p>Inma is a social impact prototype designed to assist non-Japanese speakers—whether residents or tourists—in accessing appropriate medical services throughout Japan. The platform leverages government open data to display medical institutions by <strong>location, specialization, and supported languages</strong>. This helps users quickly find hospitals that can provide care in their preferred language.</p>' +

        '<h2>Hackathon Recognition</h2>' +
        '<p>Our team reached the <strong>final stage</strong> and received the <strong>Administrative Needs Award (行政ニーズ)</strong> at the <strong>Tokyo Open Data Hackathon 2023</strong>, hosted by the Tokyo Metropolitan Government. The award recognized our project’s ability to address real-world governance issues using public data.</p>' +

        '<h2>Teamwork & Tech Stack</h2>' +
        '<p>We developed the prototype using <strong>Glide</strong> (no-code app builder), connected to government datasets made available through Tokyo’s Open Data platform. The team collaborated across different countries and time zones, making this a truly international and interdisciplinary project.</p>' +
        
        '<ul>' +
        '<li><strong>Data integration:</strong> Extracted hospital data and structured it by multilingual support availability.</li>' +
        '<li><strong>User interface:</strong> Designed intuitive search and map-based filtering for accessibility and ease of use.</li>' +
        '<li><strong>Team roles:</strong> Roberto Rivera (data modeling & logic), Carren (presentation & submission), Vincent and Merete (UI & strategy).</li>' +
        '</ul>',

    bullets: [
        '<strong>Healthcare accessibility app</strong> prototype for foreign residents in Japan',
        '<strong>Awarded in the Administrative Needs category</strong> at <strong>Tokyo Open Data Hackathon 2023</strong>',
        '<strong>Integrated government open datasets</strong> to identify multilingual hospitals by region and specialty',
        '<strong>Created using Glide</strong>, a no-code mobile app platform',
        '<strong>Collaborated in an international team</strong> across disciplines and time zones',
        '<strong>Delivered in under 48 hours</strong> with working prototype and demo-ready UI'
    ],
    link: 'https://www.youtube.com/live/TiiDAus5tUk?si=QtKNWq7oG94X8gtL&t=11186',
    thumbnail: 'assets/img/work/2023/inma_project_thumb.jpg',
    readMoreOpen: false
};
