import { WorkItem } from '../../../../work-item.interface';

export const WebpagePortfolioProject: WorkItem = {
    title: 'Personal Portfolio Website',
    category: ['Projects', 'QA'],
    cardColor: 'blue',
    startDate: '2025-06',
    endDate: '2025-06',
    description: 
        'Designed and deployed a personal portfolio website featuring an integrated fullstack chatbot demo using <strong>Angular</strong>, <strong>FastAPI</strong>, <strong>PostgreSQL</strong>, and <strong>OpenAI</strong>. The project demonstrates authentication, backend integration, and a tutorial-driven user experience.',

    readMoreText: 
        '<h2>Frontend</h2>' + 
        '<p>' + 
        'This portfolio website exemplifies my frontend engineering capabilities through a fully responsive, accessible, and modular interface built with <strong>Angular</strong>. It uses <strong>component-based architecture</strong> to enable scalability, code reuse, and clean separation of concerns across views and functionalities.' + 
        '</p>' + 
        '<p>' + 
        'The application demonstrates advanced <strong>stateful routing</strong> and <strong>JWT-based authentication</strong> using route guards, along with dynamic navigation flows based on user login status. Every route, including <code><strong>/chatbot/login</strong></code>, <code><strong>/chatbot/register</strong></code>, and <code><strong>/chatbot/chat</strong></code>, is protected and integrated with backend validation mechanisms.' + 
        '</p>' + 
        '<p>' + 
        'One of the signature features is the interactive chatbot demo, which lives in the <code><strong>/chatbot/chat</strong></code> route. The chatbot component dynamically builds and sends requests to protected endpoints like <code><strong>/chat</strong></code> and <code><strong>/chat-history</strong></code>, supporting a seamless user experience that mimics production-level behavior.' + 
        '</p>' + 
        '<p>' + 
        'To guide users, the interface implements an educational <strong>Tutorial Step System</strong> (Steps 1 to 4), where each screen visually explains the inner workings of the authentication flow, user registration, chatbot communication, and account management.' + 
        '</p>' + 
        '<p>' + 
        'The <code><strong>/mywork</strong></code> section displays dynamically filtered project and certification cards, each featuring collapsible descriptions, bullet points, thumbnails, and linked evidence; all styled and animated for modern UX standards. The entire UI is mobile-responsive, and optimized for both desktop and smaller screens.' + 
        '</p>' + 
        '<p>' + 
        'The codebase is version-controlled on GitHub and follows <strong>professional software delivery practices</strong>. It features a clean branching strategy using <strong>dev</strong>, <strong>qa-staging</strong>, and <strong>production</strong> branches, ensuring structured deployment pipelines and maintainability.' + 
        '</p>' + 
        '<h4 style="margin-top: 0.8rem; color: #007acc;">📁 <strong>GitHub Repository (Frontend): </strong>' +
        '<a href="https://github.com/RobertoRiveraT/frontend-rrt-portfolio-webpage" target="_blank">View on GitHub</a></h4> <br><br>' +

        '<h2>Backend</h2>' +
        '<p>The backend is powered by <strong>FastAPI</strong> and handles <strong>authentication</strong>, <strong>user management</strong>, and <strong>chat logic</strong>. Endpoints include:</p>' +
        '<ul>' +
        '<li><strong>/register</strong> and <strong>/login</strong> for user account creation and access.</li>' +
        '<li><strong>/chat</strong> for sending user messages to the chatbot engine, authenticated via <strong>JWT</strong>.</li>' +
        '<li><strong>/chat-history</strong> to retrieve previous user messages for prompt construction and display.</li>' +
        '<li><strong>/account</strong> for updating email, password, or deleting the account.</li>' +
        '</ul>' +
        '<p>Messages and user data are stored in a <strong>PostgreSQL</strong> database hosted on <strong>Railway</strong>. The chatbot engine constructs prompts by combining chat history, user messages, and a predefined bot persona, and then communicates with the <strong>OpenAI API</strong>.</p>' +
        '<h4 style="margin-top: 0.8rem; color: #2e7d32;">📁 <strong>GitHub Repository (Backend): </strong>' +
        '<a href="https://github.com/RobertoRiveraT/backend-rrt-portfolio-webpage" target="_blank">View on GitHub</a></h4><br><br>' +

        '<h2>Technologies Used:</h2>' +
        '<p>Angular, FastAPI, Python, TypeScript, HTML, CSS, OpenAI API, JWT, PostgreSQL, Railway, Vercel, responsive design, component-based architecture, RESTful API.</p>'

        ,

    bullets: [
        '<strong>Fullstack architecture</strong>: <strong>Angular</strong> frontend + <strong>FastAPI</strong> backend',
        '<strong>Secure session management</strong> with <strong>JWT</strong> and <strong>route guards</strong>',
        '<strong>Integrated chatbot</strong> with <strong>OpenAI</strong> and custom <strong>prompt builder</strong>',
        'Chat history stored and retrieved from <strong>PostgreSQL</strong> via <strong>/chat-history</strong>',
        '<strong>Dynamic portfolio filtering</strong> and interactive <strong>tutorials</strong>',
        'Deployed via <strong>Railway</strong> and optimized for <strong>scalability</strong>',
        'UI is mobile-<strong>responsive</strong>, and optimized for both desktop and smaller screens.'
    ],
    link: '/home',
    thumbnail: 'assets/img/work/chatbot_web_thumb.png',
    readMoreOpen: false
};
