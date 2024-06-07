import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  URL = "http://universities.hipolabs.com/search?country=United+States"

  constructor(public http:HttpClient) { }

  getData(){
    return this.http.get<any[]>(this.URL).pipe();
  }
}
