import { WorkItem } from '../../../work-item.interface';

export const NFCDigitalWalletProject: WorkItem = {
    title: 'NFC-Based Digital Wallet System',
    category: ['Projects', 'Mobile'],
    cardColor: 'blue',
    startDate: '2022-10',
    endDate: '2022-11',
    description: 
        'Designed and implemented a <strong>mobile application</strong> using <strong>Android Studio</strong> to interact with <strong>MIFARE 1K NFC tags</strong> for an electronic wallet system. The solution integrates <strong>RFID/NFC technology</strong> with <strong>Firebase</strong> to manage user balances, visit counts, and song requests in a real-time cloud database.',

    bullets: [
        'Developed a native <strong>Android mobile application</strong> using <strong>Java</strong> and <strong>Android Studio</strong>',
        'Integrated <strong>NFC (Near Field Communication)</strong> for reading and writing <strong>MIFARE 1K tags</strong>',
        'Connected to <strong>Firebase Realtime Database</strong> for remote data storage and synchronization',
        'Implemented <strong>RFID tag registration</strong> and dynamic point-based rewards system',
        'Managed <strong>read/write operations</strong> directly on NFC tag memory sectors',
        'Allowed users to submit <strong>song requests</strong> via mobile interface',
        'Analyzed and modified existing <strong>MIFARE Classic Tool</strong> application to extend functionality'
    ],
    link: 'https://github.com/RobertoRiveraT/MUSIC_QUEUER_NFC', 
    thumbnail: 'assets/img/work/2022/music_queuer_1.jpg',
    readMoreOpen: false
};
