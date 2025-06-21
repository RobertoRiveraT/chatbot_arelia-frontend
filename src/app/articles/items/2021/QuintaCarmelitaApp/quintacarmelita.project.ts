import { WorkItem } from '../../../work-item.interface';

export const QuintaCarmelitaAppProject: WorkItem = {
    title: 'Quinta Carmelita Mobile App',
    category: ['Projects', 'Mobile'],
    cardColor: 'blue',
    startDate: '2020-10',
    endDate: '2021-06',
    description: 
        'Developed a fully functional <strong>Android mobile application</strong> for <strong>Fundación Quinta Carmelita</strong> as part of a real-world social service project. The app manages <strong>child profiles</strong>, <strong>medical records</strong>, and <strong>appointment scheduling</strong> while utilizing <strong>Firebase Authentication</strong>, <strong>Firebase Realtime Database</strong>, and <strong>Firestore</strong> for backend services.',

    readMoreText: 
        '<h2>Overview</h2>' +
        '<p>The project was developed in collaboration with <strong>Fundación Quinta Carmelita</strong>, a Mexican non-profit organization, as part of a university social service program. The app aimed to digitize the home\'s administrative processes and improve <strong>information management</strong> for children under their care.</p>' +
        
        '<p>The application provides a secure <strong>user authentication system</strong> using <strong>Firebase Authentication</strong> with role-based access for directors, caregivers ("yayas"), and medical staff. Depending on the user role, access is granted to different modules of the application, ensuring data privacy and controlled information visibility.</p>' +

        '<p>Core features include the management of <strong>children\'s profiles</strong> (general data, medical records, allergies, medications, behavior logs), as well as a dedicated <strong>WebView module</strong> that integrates appointment scheduling via embedded <strong>HTML/JavaScript pages</strong>. These web-based pages communicate with <strong>Firestore</strong> using a JavaScript interface embedded within the Android app.</p>' +

        '<p>The project followed an <strong>agile SCRUM methodology</strong> with weekly sprint planning meetings and task management through <strong>Trello</strong>. The development team was divided into business, design, and programming sub-teams, replicating real-world multidisciplinary project dynamics. The process involved direct interaction with the client to gather requirements, conduct user research interviews, and validate functional prototypes through user testing cycles.</p>' +

        '<h2>Technologies Used:</h2>' +
        '<p><strong>Android (Java)</strong>, <strong>Firebase Authentication</strong>, <strong>Firebase Realtime Database</strong>, <strong>Firestore</strong>, <strong>WebView</strong>, <strong>JavaScript interface integration</strong>, <strong>SCRUM</strong> project management, <strong>Trello</strong>, <strong>User Research & Agile Development</strong></p>',

    bullets: [
        'Built a <strong>fully functional Android application</strong> with real client requirements',
        'Implemented <strong>Firebase Authentication</strong> with role-based user access',
        'Managed complex <strong>children profiles</strong> including medical data, behavior logs, and appointments',
        'Integrated <strong>WebView modules</strong> for appointment scheduling using embedded <strong>HTML/JavaScript</strong>',
        'Structured entire backend with <strong>Firebase Realtime Database</strong> and <strong>Firestore</strong>',
        'Collaborated in a multidisciplinary team applying <strong>SCRUM methodology</strong> using <strong>Trello</strong>',
        'Conducted <strong>user research interviews</strong> and iterative <strong>prototype testing</strong> with real staff members'
    ],
    link: 'https://drive.google.com/file/d/1Ct-XP8XVolZdN6oY8MI3EuRrCIXoyMOr/view?usp=sharing',
    thumbnail: 'assets/img/work/2021/quinta_carmelita_1.jpg',
    readMoreOpen: false
};
