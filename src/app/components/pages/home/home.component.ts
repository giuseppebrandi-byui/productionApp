import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  foodMenu: Food[] | [] = [];
  foodServiceInstance: FoodService;
  selectionForm = this.formBuilder.group({
    searchParam: '',
  });
  // dateToday: Date = new Date();

  constructor(
    private foodservice: FoodService,
    private formBuilder: FormBuilder
  ) {
    this.foodMenu = foodservice.getAll();
    this.foodServiceInstance = foodservice;
  }
  showLasagna(): void {
    // this.foodMenu = this.foodServiceInstance.getById('6')
    //   ? [this.foodServiceInstance.getById('6')]
    //   : this.foodServiceInstance.getAll();
    this.foodMenu = this.foodServiceInstance.analizeSearch('6');
    console.log(typeof this.foodMenu);
  }
  restoreStatus(): void {
    this.foodMenu = this.foodServiceInstance.getAll();
    console.log(typeof this.foodMenu);
  }

  onSubmit(): void {
    console.log(
      this.foodServiceInstance.analizeSearch(
        this.selectionForm.value.searchParam!
      )
    );
  }
}
