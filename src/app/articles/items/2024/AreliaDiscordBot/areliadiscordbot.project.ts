import { WorkItem } from '../../../work-item.interface';

export const AreliaDiscordBotProject: WorkItem = {
    title: 'Arelia — AI-Powered Discord Chatbot (Freelance Project)',
    category: ['Projects'],
    cardColor: 'blue',
    startDate: '2024-03',
    endDate: '2025-05',
    description:
        'Designed and deployed AreliaBOT, an AI-powered Discord chatbot with dynamic personality, sentiment analysis, and community engagement capabilities. Developed as a freelance project to increase user interaction, retention, and emotional connection within large Spanish-speaking communities. Achieved over <strong>16,000 successful user interactions</strong> during its operational lifecycle.',

    readMoreText: 
        '<h2>Project Overview</h2>' + 
        '<p>AreliaBOT is a production-grade Discord AI chatbot designed to transform passive servers into vibrant communities. Unlike static bots, Arelia adapts to user sentiment, simulates emotional intelligence, and delivers highly personalized, character-driven interactions in real time, powered by <strong>OpenAI GPT-4o</strong> and advanced sentiment analysis pipelines.</p>' +

        '<h2>Key Business Impact</h2>' +
        '<ul>' +
        '<li><strong>Boosted community engagement:</strong> Active user participation increased significantly, creating a lively and emotionally connected server environment.</li>' +
        '<li><strong>Emotional connection:</strong> Users formed genuine bonds with Arelia’s personality, often requesting her return after project completion.</li>' +
        '<li><strong>Fan art and organic growth:</strong> Community members created original content inspired by Arelia, proving the bot’s impact extended beyond simple automation.</li>' +
        '<li><strong>Real-world demonstration:</strong> Showcased how AI-powered conversational systems can drive long-term retention, emotional interaction, and server differentiation.</li>' +
        '</ul>' +

        '<h2>Core Functionalities</h2>' +
        '<ul>' + 
        '<li><strong>Personality-driven AI:</strong> Modular prompt system using structured personality files (traits + behavior modes) defining Arelia’s dynamic mood system (caring, sarcastic, flirtatious, disagreeable).</li>' +
        '<li><strong>Sentiment analysis pipeline:</strong> Combines lexical scoring (keyword matching) with <strong>VADER Sentiment Analyzer</strong> to dynamically adjust tone and emotional response scoring (0-100 scale).</li>' +
        '<li><strong>Context-aware short-term memory:</strong> Maintains recent conversation history per target channel via in-memory rolling cache and persistent storage using <strong>Firebase Realtime Database</strong>.</li>' +
        '<li><strong>Real-time conversational AI:</strong> Multi-turn contextually coherent conversations powered by <strong>OpenAI GPT-4o</strong>, dynamically merging user messages and referenced history.</li>' +
        '<li><strong>Utility features:</strong> Daily motivational messages (via webhook system), sticky message announcements, guild-specific cooldown management, and administrator control panels.</li>' +
        '<li><strong>Slash command integration:</strong> Terms of Service acceptance, configuration management, and status reporting directly inside Discord.</li>' +
        '</ul>' +

        '<h2>Backend Architecture & Scalability</h2>' +
        '<ul>' +
        '<li><strong>Microservice-based Cog Architecture:</strong> Clean separation of chatbot, sentiment analysis, announcer, permissions, cooldown, and server memory modules.</li>' +
        '<li><strong>High fault-tolerance:</strong> Fully asynchronous design leveraging Discord API event loop optimizations for 24/7 uptime across multiple active servers.</li>' +
        '<li><strong>Multi-server persistence:</strong> Firebase Realtime Database ensures resilient data storage for multi-guild deployments with real-time configuration updates.</li>' +
        '<li><strong>Scalable hosting:</strong> Deployed on <strong>Railway</strong> (production) and <strong>Replit</strong> (redundancy), combined with lightweight Flask keep-alive servers for failover safety.</li>' +
        '</ul>' +

        '<h2>Backend Deployment Pipeline</h2>' +
        '<p>The backend architecture followed a multi-environment deployment pipeline to ensure safe development, testing, and production releases:</p>' +
        '<ul>' +
        '<li><strong>Development Bot (Arelia-Dev):</strong> A dedicated test bot operated in a private development Discord server to validate new features before public release.</li>' +
        '<li><strong>Code Validation in Replit:</strong> New code was first executed and manually verified in <strong>Replit</strong>, allowing rapid iteration and debugging in a controlled environment.</li>' +
        '<li><strong>GitHub Integration:</strong> Once verified, code was committed to the project’s <strong>GitHub repository</strong> which triggered automated version control and CI workflows.</li>' +
        '<li><strong>Production Deployment (Railway):</strong> The latest stable branch from GitHub automatically deployed to <strong>Railway</strong>, ensuring continuous delivery to the live production instance serving active Discord communities.</li>' +
        '</ul>' +
        '<p>This pipeline provided full end-to-end testing and deployment control, reducing risks of introducing errors into production while supporting rapid feature development.</p>' +

        '<h2>Technologies Used</h2>' +
        '<p><strong>Python 3.10+</strong>, <strong>Discord-Py</strong>, <strong>OpenAI GPT-4o</strong>, <strong>Firebase Realtime Database</strong>, <strong>VADER Sentiment Analyzer</strong>, <strong>Levenshtein Distance</strong>, <strong>Flask</strong>, <strong>Railway</strong>, <strong>Replit</strong>, <strong>Pytest</strong> (internal QA), <strong>GitHub</strong>, <strong>Persona-driven prompt engineering</strong>, <strong>AI-powered community building</strong>.</p>',

    bullets: [
        '<strong>Personality-driven AI chatbot</strong> powered by <strong>OpenAI GPT-4o</strong> and modular dynamic prompts',
        '<strong>Sentiment analysis pipeline</strong> with VADER and lexical scoring for emotionally adaptive responses',
        '<strong>Dynamic mood switching system</strong> based on real-time conversation scoring',
        '<strong>Short-term memory system</strong> for coherent multi-turn interactions',
        '<strong>Fully persistent multi-server configuration</strong> via <strong>Firebase Realtime Database</strong>',
        '<strong>Engaged over 8,000 Discord users</strong> with measurable increases in server activity',
        '<strong>Freelance project successfully deployed in production environments</strong>',
        '<strong>Operational lifecycle:</strong> Active in production from <strong>March 2024 to May 2025</strong>. Project concluded successfully after fulfilling its engagement objectives; client chose not to pursue further community expansion.'
    ],
    link: 'https://drive.google.com/file/d/1Da9byo2259xnZqHmnotLvVPPcj503hT_/view?usp=sharing',
    thumbnail: 'assets/img/work/2024/areliabot_web_thumb.png',
    readMoreOpen: false
};
