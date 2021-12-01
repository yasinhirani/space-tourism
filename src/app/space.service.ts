import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private http: HttpClient) { }

  getDestination(){
    return this.http.get('assets/json/data.json');
  }
}
