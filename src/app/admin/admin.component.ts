import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private fs: FoodService) { }

  adminModel = {
    name: '',
    image: '',
    description: '',
    ingredients: '',
    price: '',
    category: ''
  }
  
  ngOnInit(): void {
  }
  
  onAdd() {
    this.fs.addFood(this.adminModel).subscribe()
  }

}
