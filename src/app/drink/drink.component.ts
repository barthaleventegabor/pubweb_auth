import { Component, inject } from '@angular/core';
import { DrinkapiService } from '../shared/drinkapi.service';

@Component({
  selector: 'app-drink',
  imports: [],
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.css',
})
export class DrinkComponent {
  private readonly drinkApi = inject(DrinkapiService);
  protected drinks:any;

  ngOnInit() {
    this.getDrinks();
  }
  getDrinks() {
    this.drinkApi.getDrinks().subscribe({
      next: (result:any) => {
        console.log(result.data);
        this.drinks = result.data;
      },
      error: () => {
        console.error();
      },
    })
  }

}
