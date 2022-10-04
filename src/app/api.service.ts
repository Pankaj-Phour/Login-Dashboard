import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }



  // Api call Functions 


  getUser(endpoint:any){
    return this.http.get(environment.User + endpoint)
  }
  getstats(endpoint:any){
    return this.http.get(environment.Stats + endpoint)
  }

  postVideo(endpoint:any,params:any){
    return this.http.post(environment.Url + endpoint,params)
  }

  getRecordings(endpoint:any){
    return this.http.get(environment.Url + endpoint)
  }


  
  // Behaviour subjects 

  input = new BehaviorSubject<any>('');
  input$ = this.input.asObservable();

  dashboard = new BehaviorSubject<any>('');
  dashboard$  = this.dashboard.asObservable();
}
