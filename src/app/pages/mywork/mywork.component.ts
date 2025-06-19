import { Component } from '@angular/core';
import { workItems } from '../../articles/work-items';
import { WorkCategory } from '../../articles/work-item.interface';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.css']
})
export class MyworkComponent {
  // Tipo seguro para categorías
  selectedCategory: WorkCategory | 'All' = 'All';
  allItems = workItems;

  // Lista de categorías para generar los botones de filtro
  categories: Array<WorkCategory | 'All'> = ['All', 'Projects', 'Certifications', 'QA', 'Fullstack'];

  // Filtro seguro
  get filteredItems() {
    if (this.selectedCategory === 'All') {
      return this.allItems;
    }

    // Hacemos una variable auxiliar con tipo WorkCategory
    const selected: WorkCategory = this.selectedCategory;
    return this.allItems.filter(item => item.category.includes(selected));
  }

  filterCategory(category: WorkCategory | 'All') {
    this.selectedCategory = category;
  }

  toggleReadMore(item: any): void {
    item.readMoreOpen = !item.readMoreOpen;
  }

}
