import { Component, OnInit } from '@angular/core';
import { Food} from '../foods';
import {FOODS} from '../mock-foods'
import { FoodService } from '../food.service';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods
  constructor(private foodService: FoodService) { }

  share(food) {
    const url: string = window.location.href;
    window.alert(`The food ${ food.name } has been shared!`);
    window.open(`https://telegram.me/share/url?url=${ food.link }&text=Hey, check out this cool ${ food.name }`);

  }
  onNotify() {
    window.alert(`You will be notified when the item goes on sale`);
  }
  ngOnInit(): void {
    this.foodService.getFoods().subscribe(data => {
      this.foods = data
    })
  }

}
