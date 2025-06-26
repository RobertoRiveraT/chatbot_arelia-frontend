import { WorkItem } from '../../../work-item.interface';

export const GuessTheNumberFlutter: WorkItem = {
    title: 'Guess the Number — Flutter Challenge',
    category: ['Projects'],
    cardColor: 'blue',
    startDate: '2025-04',
    endDate: '2025-04',
    description:
        'Developed a responsive number guessing game using <strong>Flutter Web</strong> as part of a personal technical challenge. The game features dynamic difficulty, input validation, and a smooth mobile-friendly UI.',

    readMoreText:
        '<h2>Overview</h2>' +
        '<p>This project was built as a casual <strong>Flutter Web technical challenge</strong> to practice UI design, game state management, and web deployment with Dart.</p>' +
        '<p>Players must guess a secret number within a dynamic range based on selected difficulty. The game provides color-coded feedback for each guess and tracks guess history in real time.</p>' +
        
        '<h2>Technical Highlights</h2>' +
        '<ul>' +
        '<li>Centralized game logic via a <code>GameController</code> class</li>' +
        '<li><strong>Difficulty scaling</strong> with changing ranges and logic</li>' +
        '<li>UI built with <strong>Flutter Widgets</strong> and organized into reusable components</li>' +
        '<li><strong>Widget testing</strong> included to verify core functionality</li>' +
        '<li>Fully responsive for both <strong>web and mobile screens</strong></li>' +
        '</ul>' +
        
        '<p><a href="https://drive.google.com/file/d/1yknblM6vfuxDzgTI5FADm1ckjAiY3YUX/view?usp=sharing" target="_blank">🎮 Watch Demo</a></p>' +
        '<p><a href="https://github.com/RobertoRiveraT/AdivinaElNumero-Desafio-RRT" target="_blank">📁 GitHub Repository</a></p><br><br>',

    bullets: [
        'Built with <strong>Flutter Web</strong> and <strong>Dart</strong>',
        'Multiple difficulty levels and responsive UI',
        'Central <code>GameController</code> for clean state management',
        'Input validation and guess history with visual feedback',
        'Includes basic <strong>widget testing</strong> in <code>/test</code>',
        'Part of a personal <strong>technical challenge</strong> to explore Flutter Web development'
    ],
    link: 'https://github.com/RobertoRiveraT/AdivinaElNumero-Desafio-RRT',
    thumbnail: 'assets/img/work/2025/adivina_flutter_thumb.jpg',
    readMoreOpen: false
};
