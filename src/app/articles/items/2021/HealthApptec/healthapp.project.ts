import { WorkItem } from '../../../work-item.interface';

export const HealthAppTecProject: WorkItem = {
    title: 'HealthApp iOS Application',
    category: ['Projects', 'Mobile'],
    cardColor: 'blue',
    startDate: '2021-09',
    endDate: '2021-11',
    description: 
        'Developed a native <strong>iOS mobile application</strong> as part of the <strong>Mobile Applications</strong> course. The project showcases <strong>remote data fetching</strong> from external JSON endpoints, <strong>Firebase Authentication</strong> integration, and multi-screen navigation using <strong>Swift</strong> and <strong>UIKit</strong>.',

    bullets: [
        'Built with <strong>Swift</strong> using <strong>UIKit</strong> and <strong>storyboards</strong>',
        'Implemented <strong>Firebase Authentication</strong> for secure user login',
        'Fetched external <strong>COVID-19 news</strong> and <strong>vaccination reports</strong> from remote <strong>JSON APIs</strong>',
        'Displayed data using <strong>horizontal collection views</strong> and <strong>searchable table views</strong>',
        'Integrated <strong>MapKit</strong> to show nearby hospitals with Waze integration',
        'Managed dependencies with <strong>CocoaPods</strong> including <strong>Firebase/Firestore</strong> and <strong>Firebase/Auth</strong>',
        'Configured <strong>GoogleService-Info.plist</strong> for secure backend connectivity'
    ],
    link: 'https://github.com/RobertoRiveraT/HealthAppTec',
    thumbnail: 'assets/img/work/2021/health_app_tec_1.jpg',
    readMoreOpen: false
};
