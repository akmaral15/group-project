import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Food} from './foods';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {FOODS} from './mock-foods'

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  [x:string]: any;

  constructor(private http: HttpClient,) { }

  private _url: string = "http://localhost:8000/api/foods/"

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  getFood(id: number): Observable<Food> {
    return of(FOODS.find(food => food.id === id));
  }

  getFoods (): Observable<Food> {
    return this.http.get<Food>(this._url)
  }
  getFoodsByCategoryId(id: number): Observable<any> {
    return this.http.get<any>(this._url + 'category/' + id + '/')
  }

  editFood(food): Observable<any> {
    return this.http.put<any>(this._url + food.id + '/', { ...food }, this.headers)
  }

  deleteFood(id): Observable<any> {
    return this.http.delete<any>(this._url + id + '/')
  }
  
  addFood(food): Observable<any> {
    return this.http.post<any>(this._url, food, this.headers)
  }

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
