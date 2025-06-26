import { WorkItem } from '../../../work-item.interface';

export const PenguinTwitchBattleProject: WorkItem = {
    title: 'Penguin Twitch Battle  (Freelance Project)',
    category: ['Projects', 'QA', 'GameDev'],
    cardColor: 'blue',
    startDate: '2024-10',
    endDate: '2025-02',
    description: 
        'Developed a real-time, wave-based Twitch-integrated game in <strong>Unity</strong> where viewers join the battlefield as penguin avatars using the <code>!play</code> command.',
    readMoreText: 
        `<h2>Overview</h2>` +
        `<p><strong>Penguin Twitch Battle</strong> is a live interactive game created in Unity where Twitch chat participants spawn penguin avatars and battle enemy waves. The project combined pixel art aesthetics, Twitch integration, real-time systems, and object pooling to ensure smooth large-scale interactions.</p>` +
        
        `<h2>Technical Highlights</h2>` +
        `<ul>` +
        `<li><strong>Real-time Twitch IRC integration</strong> using a custom <code>TwitchIRC</code> handler and <code>ChatMessageReceived</code> events to convert messages into game actions.</li>` +
        `<li><strong>State Machines</strong> for penguin and enemy behavior, with states like <code>Idle</code>, <code>Walk</code>, <code>Attack</code>, and <code>Dead</code>.</li>` +
        `<li><strong>Observer Pattern</strong> to decouple systems such as damage reception, health updates, and visual feedback.</li>` +
        `<li><strong>Object Pooling</strong> for efficient spawning of penguins, enemies, and bullets, avoiding performance drops during peak activity.</li>` +
        `<li><strong>Interactive card system</strong> between waves that lets the streamer choose buffs/debuffs that affect all penguins.</li>` +
        `<li><strong>Pixel-perfect resolution</strong> (960x540 base), scaling well across devices while maintaining visual consistency.</li>` +
        `<li>Full design document and planning process available, with modular architecture for future expansion.</li>` +
        `</ul>` +

        `<h2>Technologies Used</h2>` +
        `<p>Unity 2022.3.34f1, C#, Twitch IRC, Git, pixel art pipeline, state machines.</p>`,

    bullets: [
        'Built in <strong>Unity</strong> with full Twitch chat integration',
        'Implemented <strong>Object Pooling</strong> and <strong>State Machines</strong> for optimized performance',
        'Interactive penguin avatars summoned by Twitch viewers via <code>!play</code>',
        'Includes card system for streamer-based decisions after each wave',
        'Supports <strong>3000+ concurrent players</strong> with stable frame rates',
        '📈 View debut stats: <a href="https://twitchtracker.com/tokovt/streams/315079496061" target="_blank">twitchtracker.com/tokovt</a>',
        '📄 View Game Planning Doc: <a href="https://drive.google.com/file/d/1n0R5iZOwaH73jX5KMN6IXFxlJCKE-9qh/view?usp=sharing" target="_blank">Google Drive</a>'
    ],
    link: 'https://youtu.be/8YmZPJ1UCdc?si=pwwIqQ1eRe2jdlQB&t=1175',
    thumbnail: 'assets/img/work/2024/penguin_twitch_battle_thumb.jpg',
    readMoreOpen: false
};
