import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TypesModel } from '../models/magicthegathering/types-model';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  public types: string[];
  public type: string;
  public check: number;

  constructor(private http: HttpClient) {

    this.types = [];
  }

  getTypes(): Observable<TypesModel> {
    // return of(this.types);
    return this.http.get<TypesModel>('https://api.magicthegathering.io/v1/types');
    ;
  }

  isType(someType: string): boolean {
    this.check = this.types.indexOf(someType)
    if (-1 === this.check) {
      return false;
    }
    return true;
  }

}
