
import {Component, OnChanges, OnInit, SimpleChanges,Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {FOODS} from '../mock-foods';
import {Food} from '../foods'
import { FoodService } from '../food.service';
@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  food: any;
  constructor(public activatedRoute: ActivatedRoute,
    private location: Location,
    private foodService: FoodService) { }

  ngOnInit(): void {
    this.food = window.history.state;
    console.log(this.food.product);
  }
  Share() {
    window.open(this.food.food.link);
  }
  goBack(): void {
    this.location.back();
  }
  edit(name, price, desc, ing, id): void{
    let element: Food;
    for(let i=0;i<FOODS.length;i++){
      if(FOODS[i].id == id){
        element = FOODS[i];
        break;
      }
    }
    element.name = name;
    element.price = price;
    element.description = desc;
    element.ingredients = ing;
    this.foodService.editFood(element).subscribe()
  }
  cancel(id){
    let element: Food;
    for(let i=0;i<FOODS.length;i++){
      if(FOODS[i].id == id){
        element = FOODS[i];
        break;
      }
    }
    (<HTMLInputElement>document.getElementById("name")).value = element.name;
    
  }

  delete(id) {
    this.foodService.deleteFood(id).subscribe()
  }

}
