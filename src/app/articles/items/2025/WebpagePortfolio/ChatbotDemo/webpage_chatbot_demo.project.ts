import { WorkItem } from '../../../../work-item.interface';

export const WebpageChatbotDemoProject: WorkItem = {
    title: 'Realtime Web Chatbot Demo (Fullstack + Automated Testing)',
    category: ['Projects', 'QA'],
    cardColor: 'blue',
    startDate: '2024-05',
    endDate: '2024-05',
    description: 
        'Designed and deployed a fullstack AI-powered chatbot system leveraging <strong>Angular</strong>, <strong>FastAPI</strong>, <strong>PostgreSQL</strong>, <strong>OpenAI API</strong>, and fully integrated <strong>automated testing pipelines</strong> using <strong>GitHub Actions</strong> and <strong>Pytest</strong>.',

    readMoreText: 
        '<h2>Project Overview</h2>' + 
        '<p>This fullstack chatbot project serves both as a functional application and a demonstration of production-level backend engineering, security, API design, and continuous quality assurance through automated testing pipelines. The chatbot allows registered users to interact in real-time with an AI model powered by OpenAI, while ensuring secured user authentication and personalized conversational history management.</p>' + 

        '<h2>Frontend</h2>' + 
        '<p>The <strong>Angular</strong>-based frontend provides a fully responsive, component-driven user interface integrated into my personal portfolio website. It employs <strong>stateful routing</strong>, <strong>JWT-based authentication</strong>, and protected routes such as <code>/chatbot/login</code>, <code>/chatbot/register</code>, and <code>/chatbot/chat</code>. Users experience dynamic prompt generation, conversational flows, and a seamless chat interface directly integrated into the portfolio UI.</p>' +

        '<h2>Backend & API</h2>' + 
        '<p>The backend, powered by <strong>FastAPI</strong>, handles core application logic, user management, secure authentication, and chatbot interactions. Key endpoints include:</p>' +
        '<ul>' +
        '<li><strong>/register</strong> and <strong>/login</strong>: Secure JWT-based user registration and authentication.</li>' +
        '<li><strong>/chat</strong>: Processes user input, constructs prompts using full conversation history, and communicates with the <strong>OpenAI API</strong> to generate assistant responses.</li>' +
        '<li><strong>/chat-history</strong>: Stores and retrieves prior user-bot conversations, providing continuity in dialogue context.</li>' +
        '<li><strong>/update-email", /update-password, /delete-account"</strong>: Allows users to update email, change passwords, and delete accounts.</li>' +
        '</ul>' + 
        '<p>All messages, users, and session data are persisted in a <strong>PostgreSQL</strong> database hosted via <strong>Railway</strong>, ensuring scalability and data integrity.</p>' + 

        '<h2>Automated Testing & CI/CD</h2>' + 
        '<p>Robust backend testing was implemented using <strong>Pytest</strong>, covering full CRUD user management, authentication workflows, chat integration flows, token issuance, protected route enforcement, and edge case handling. Test coverage includes fixtures for test user creation, isolated cleanup using force-delete endpoints, and mock authentication headers for chat flows.</p>' + 
        '<p>Continuous integration is orchestrated via <strong>GitHub Actions</strong>, running test suites automatically on every pull request and deployment stage (dev, staging, production), guaranteeing code stability throughout the delivery pipeline. Test modules include:</p>' + 
        '<ul>' + 
        '<li><strong>test_auth.py</strong>: Registration and login JWT token issuance</li>' +
        '<li><strong>test_user.py</strong>: Email updates, password changes, account deletion</li>' +
        '<li><strong>test_chat_flow.py</strong>: Full chat interaction simulation and history retrieval</li>' +
        '</ul>' +

        '<h2>Technologies & Tools</h2>' + 
        '<p><strong>Angular</strong>, <strong>FastAPI</strong>, <strong>Python</strong>, <strong>PostgreSQL</strong>, <strong>OpenAI API</strong>, <strong>Railway</strong>, <strong>Vercel</strong>, <strong>JWT</strong>, <strong>REST API</strong>, <strong>Pytest</strong>, <strong>GitHub Actions</strong>, <strong>Automated QA pipelines</strong>, <strong>Responsive design</strong>, <strong>Component-based architecture</strong>.</p>' +

        '<h4 style="margin-top: 0.8rem; color: #007acc;">📁 <strong>Frontend Repository:</strong> <a href="https://github.com/RobertoRiveraT/frontend-rrt-portfolio-webpage" target="_blank">View on GitHub</a></h4>' +
        '<h4 style="margin-top: 0.8rem; color: #2e7d32;">📁 <strong>Backend Repository:</strong> <a href="https://github.com/RobertoRiveraT/backend-rrt-portfolio-webpage" target="_blank">View on GitHub</a></h4>'+
        '<h4 style="margin-top: 0.8rem; color: #2e7d32;"><strong>Backend Test Suites:</strong> <a href="https://github.com/RobertoRiveraT/backend-rrt-portfolio-webpage/actions" target="_blank">View on GitHub</a></h4><br><br>',
        
    bullets: [
        '<strong>End-to-end fullstack architecture</strong>: <strong>Angular</strong> frontend + <strong>FastAPI</strong> backend',
        '<strong>Secure authentication</strong> via <strong>JWT</strong> tokens and protected API routes',
        '<strong>OpenAI-powered chatbot</strong> with dynamic prompt construction using chat history',
        '<strong>PostgreSQL</strong> relational database hosted on <strong>Railway</strong>',
        '<strong>Full automated backend testing</strong> using <strong>Pytest</strong> covering all API flows',
        '<strong>Continuous integration pipelines</strong> implemented with <strong>GitHub Actions</strong>',
        '<strong>Modular frontend design</strong> integrated into professional portfolio website',
        'Deployed via <strong>Vercel</strong> (frontend) and <strong>Railway</strong> (backend) ensuring scalability'
    ],
    link: '/chatbot',
    thumbnail: 'assets/img/work/2025/chatbot_web_thumb.png',
    readMoreOpen: false
    };
