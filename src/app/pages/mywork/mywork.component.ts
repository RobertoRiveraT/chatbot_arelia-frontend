import { Component } from '@angular/core';
import { workItems } from '../../articles/work-items';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.css']
})
export class MyworkComponent {
  selectedCategory: string = 'All';
  allItems = workItems;

  get filteredItems() {
    if (this.selectedCategory === 'All') return this.allItems;
    return this.allItems.filter(item => item.category === this.selectedCategory);
  }

  filterCategory(category: string) {
    this.selectedCategory = category;
  }

  toggleReadMore(item: any): void {
    item.readMoreOpen = !item.readMoreOpen;
  }

}
