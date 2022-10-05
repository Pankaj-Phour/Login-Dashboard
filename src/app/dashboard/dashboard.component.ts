import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy {
data:any;
search:FormGroup;
original:any;
noData:boolean = false;
dashboard:boolean = false;
  constructor(private api:APIService) { }


  Log(e:any){
    console.log("Welcome to dashboard " + e);
    
  }
  ngOnInit(): void {
    localStorage.setItem('selected','dashboard');

    this.dashboard = true;
    this.api.dashboard.next(this.dashboard);

    this.validation()
    this.api.getUser('users').subscribe((e:any)=>{
      // console.log(e);
      this.original = e;
      this.data = e;
    })
    this.api.input$.subscribe((e:any)=>{ 
      // console.log(e);
      if(e && e.length>0){
        this.input(e); 
      }
      else{
        this.data = this.original 
        }
      });
  }

  validation(){
    this.search = new FormGroup({
      name: new FormControl('',Validators.required)
    })
  }

input(e:any){
  this.data = this.original;
  let value = e.toLowerCase();
  let typeOfValue = Number(value)
  typeOfValue*0 == 0 ? this.data = this.data.filter((e:any)=>{
    return e.id.includes(value)
  })
  : this.data =  this.data.filter((a:any)=>{
    return a.name.toLowerCase().includes(value)
  })
  if(value.length<1){
    this.data = this.original;
  }
  if(this.data.length<1){
    this.noData = true
  }else{
    this.noData = false;
  }
}



ngOnDestroy(): void {
    // this.dashboard = false;
    this.api.dashboard.next(false);
}
}
