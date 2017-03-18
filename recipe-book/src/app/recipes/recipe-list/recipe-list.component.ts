import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe= new Recipe('Dummy', 'Dummy', 'http://thumbs1.ebaystatic.com/d/l225/m/mM5u2kVAYbs3IRlwPfl6uOA.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
