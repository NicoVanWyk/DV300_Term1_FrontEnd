import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { WarehouseCardService } from '../../services/warehouse-card.service';
import { Ingredients } from '../../models/ingredients.model';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-warehouse-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './warehouse-card.component.html',
  styleUrl: './warehouse-card.component.css'
})
export class WarehouseCardComponent {

  constructor(private service: WarehouseCardService) { };

  @Input() item: Ingredients = {
    id: 0,
    name: "NaN",
    totalWarehouse1: 0,
    totalWarehouse2: 0,
    totalWarehouse3: 0,
    totalAmount: 0,
    description: "NaN",
    image: "NaN"
  }

  @Input() recipeItem: Recipe = {
    id: 0,
    name: "NaN",
    description: "NaN",
    amountCrafted: 0,
    totalWarehouse1: 0,
    totalWarehouse2: 0,
    totalWarehouse3: 0,
    totalAmount: 0,
    ingredientsNeeded: [],
    image: "NaN",
    isCraftable: false
  }

}
