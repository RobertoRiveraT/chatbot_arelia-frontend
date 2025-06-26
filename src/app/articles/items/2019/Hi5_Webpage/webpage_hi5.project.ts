import { WorkItem } from '../../../work-item.interface';

export const Hi5WebsiteProject: WorkItem = {
    title: 'Hi5 Website Project',
    category: ['Projects'],
    cardColor: 'blue',
    startDate: '2019-03',
    endDate: '2019-03',
    description: 
        'Developed a static website called <strong>Hi5</strong> as part of the <strong>Web Development</strong> course in <strong>March 2019</strong>. The project included multiple HTML pages and a responsive design using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>jQuery</strong>. It was deployed using <strong>FileZilla</strong> to the professor\'s server for direct grading.',

    readMoreText: 
        '<h2>Overview</h2>' +
        '<p>This project was created during a university course focused on <strong>web development fundamentals</strong>. The website is composed of several static HTML pages including <code><strong>index.html</strong></code>, <code><strong>Assets.html</strong></code>, <code><strong>Benchmarking.html</strong></code>, and <code><strong>Personas.html</strong></code>, each organized into structured folders for <strong>stylesheets</strong>, <strong>scripts</strong>, and <strong>images</strong>.</p>' +

        '<p>The layout is <strong>responsive</strong>, ensuring compatibility across both desktop and mobile devices. The project integrates <strong>bxSlider</strong>, a jQuery plugin used to build an <strong>interactive image carousel</strong>. It also includes visual diagrams and benchmarking charts to support the design and research documentation.</p>' +

        '<p>The final submission was done using <strong>FileZilla</strong>, connecting via FTP to the professor\'s hosting server. All files were manually uploaded and later reviewed and graded online. This process simulated real-world client delivery practices at an academic level.</p>' +

        '<h2>Technologies Used:</h2>' +
        '<p>HTML, CSS, jQuery, bxSlider, FileZilla, Responsive Design, Academic Deployment Practices</p>',

    bullets: [
        '<strong>Created in March 2019</strong> for a <strong>Web Development</strong> course',
        '<strong>Multi-page static site</strong> using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>jQuery</strong>',
        'Includes <strong>responsive layout</strong> and an <strong>image slider</strong> built with <strong>bxSlider</strong>',
        'Submitted using <strong>FileZilla</strong> FTP to professor\'s server',
        'Features research sections on <strong>personas</strong> and <strong>benchmarking</strong>',
        'Organized file structure for <strong>modularity</strong> and <strong>readability</strong>'
    ],
    link: 'https://robertoriverat.github.io/Hi5/',
    thumbnail: 'assets/img/work/2019/hi5_web_thumb.png',
    readMoreOpen: false
};
