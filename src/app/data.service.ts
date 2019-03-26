// import HttpClient to get data from api
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getJobDetails() {
    return this.http.get('https://damp-caverns-43990.herokuapp.com/jobs')
  }
}
