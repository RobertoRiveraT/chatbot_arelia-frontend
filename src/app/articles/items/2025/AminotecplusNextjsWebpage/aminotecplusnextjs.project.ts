import { WorkItem } from '../../../work-item.interface';

export const AminotecWebRedesign: WorkItem = {
    title: 'Aminotec Plus Website Redesign & Deployment',
    category: ['Projects'],
    cardColor: 'blue',
    startDate: '2025-06',
    endDate: '2025-07',
    description:
        'Complete migration and modernization of the Aminotec Plus website. Migrated from static HTML, jQuery, and outdated CSS to a modern, responsive, and maintainable stack using <strong>Next.js</strong> with <strong>TypeScript</strong> and <strong>Tailwind CSS</strong>. Includes animation, routing, responsive design, SEO, deployment, and dynamic asset handling.',

    bullets: [
        '<strong>Migration</strong> of legacy HTML/CSS/jQuery site into modern <strong>Next.js 15 App Router</strong> project',
        'Fully <strong>responsive UI</strong> with <strong>Tailwind CSS</strong> and animated components using <strong>Lucide</strong> icons and <strong>custom transitions</strong>',
        'Clean <strong>layout structure</strong> using reusable components (Navbar, Footer, Hero, ProductCard, Carousel)',
        'Includes advanced features like <strong>Image Carousel</strong>, <strong>PDF downloads</strong>, animated logo shine, and dynamic mobile navbar',
        '<strong>SEO-optimized</strong> with custom <code>meta</code> tags, structured <code>sitemap.xml</code>, and <code>robots.txt</code>',
        'Repository uses a <strong>2-branch workflow</strong>: <code>dev</code> (linked to Vercel preview deployments) and <code>main</code> (connected to production)',
        'Deployed to <strong>Vercel</strong> with official domain: <strong>aminotecplus.com</strong>',
        'Domain DNS verification integrated with <strong>Google Search Console</strong> for indexing and searchability',
        'Includes structured company information, contact forms, location-based map embeds, and improved accessibility',
        'Mobile-first design optimized for performance and modern web standards'
    ],

    readMoreText:
        '<h2>Website Redesign</h2>' +
        '<p>This project migrated a legacy business website built in raw HTML, CSS, and jQuery to a modern Next.js 15 stack with App Router and TailwindCSS. The new implementation features reusable React components, layout consistency, mobile responsiveness, and SEO improvements.</p>' +
        '<h4 style="margin-top: 0.8rem; color: #007acc;">🌐 <strong>Live Website: </strong>' +
        '<a href="https://aminotecplus.com" target="_blank">aminotecplus.com</a></h4>' +
        '<h4 style="margin-top: 0.8rem; color: #007acc;">📎 <strong>Old Site (Archived): </strong>' +
        '<a href="https://robertoriverat.github.io/Amonitecplus/" target="_blank">View old version</a></h4>' +
        '<p>The project includes dynamic sections like a product listing page with conditional PDF downloads, a map-integrated contact page, and smooth UX enhancements (logo animation, hover states, carousel indicators, mobile menu transitions).</p>' +
        '<p>The repository uses a clean branching strategy, where <code>dev</code> is linked to preview deployments on Vercel for safe testing, and <code>main</code> is linked to the production site at <strong>aminotecplus.com</strong>.</p>' +
        '<p>Overall, this project showcases a modern frontend migration workflow, attention to detail in design, and production-grade deployment practices.</p>',

    link: 'https://aminotecplus.com',
    thumbnail: 'assets/img/work/2025/aminotec_thumb.png',
    readMoreOpen: false
};
