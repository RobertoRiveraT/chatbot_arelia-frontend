import { Component } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.css']
})
export class MyworkComponent {
  selectedCategory: string = 'All';

  allItems = [
    {
      title: 'Realtime Chatbot System',
      type: 'Projects',
      startDate: '2024-01',
      endDate: '2024-04',
      description: 'Designed and deployed a fullstack chatbot demo using Angular, FastAPI, PostgreSQL and OpenAI.',
      bullets: [
        'JWT Auth with frontend route guard',
        'OpenAI API integration',
        'Dynamic prompt building with user history'
      ],
      link: 'https://github.com/RobertoRiveraT',
      thumbnail: 'assets/img/work/chatbot_web_thumb.png'
    },
    {
      title: 'QA Testing & Automation (Java)',
      type: 'Certifications',
      startDate: '2023-02',
      endDate: '',
      description: 'Completed a certification on Java-based QA Testing including unit tests, mocks, test plans, and automation.',
      bullets: [
        'JUnit, Test Plans & TDD',
        'Coverage analysis',
        'CI/CD integration with GitHub Actions'
      ],
      link: 'https://example.com/certificate',
      thumbnail: 'assets/img/work/chatbot_web_thumb.png'
    }
    // Puedes añadir más aquí
  ];

  get filteredItems() {
    if (this.selectedCategory === 'All') return this.allItems;
    return this.allItems.filter(item => item.type === this.selectedCategory);
  }

  filterCategory(category: string) {
    this.selectedCategory = category;
  }
}
