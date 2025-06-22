import { Component, OnInit } from '@angular/core';
import { workItems } from '../../articles/work-items';
import { WorkCategory } from '../../articles/work-item.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.css']
})
export class MyworkComponent implements OnInit {
  // Tipo seguro para categorías
  selectedCategory: WorkCategory | 'All' = 'All';
  allItems = workItems;

  // Lista de categorías para generar los botones de filtro
  categories: Array<WorkCategory | 'All'> = ['All', 'Projects', 'Certifications', 'QA', 'Fullstack'];

  // Constructor con router y activatedRoute para manejar los parámetros de URL
  constructor(private route: ActivatedRoute, private router: Router) {}

  // Al inicializar el componente, revisamos si hay un parámetro de categoría en la URL
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category && this.categories.includes(category)) {
        this.selectedCategory = category as WorkCategory | 'All';
      } else {
        this.selectedCategory = 'All';
      }
    });
  }

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

    // Actualizamos la URL con el filtro activo usando queryParams
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: category },
      queryParamsHandling: 'merge' // mantenemos otros posibles query params
    });
  }

  toggleReadMore(item: any): void {
    item.readMoreOpen = !item.readMoreOpen;
  }
}
