import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Category} from './categories';
import {CATEGORIES} from './mock-categories'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getCategory(id: number): Observable<Category> {
    return of(CATEGORIES.find(category => category.id === id));
  }

  getCategories(): Observable<any> {
    return of(CATEGORIES);
  }
}
