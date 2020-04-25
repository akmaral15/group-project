import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Category} from './categories';
import {CATEGORIES} from './mock-categories'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _url: string = "http://localhost:8000/api/categories"
  constructor(private http: HttpClient) { }
  getCategory(id: number): Observable<Category> {
    return of(CATEGORIES.find(category => category.id === id));
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(this._url)
  }
}
