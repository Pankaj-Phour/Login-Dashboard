import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,DoCheck {
  search:FormGroup;
  dashboard:boolean = false;
  camera:boolean = false;
  login:boolean = false;
  // dashboard:boolean = false;
  video:boolean = false;
  constructor(private api:APIService) { }

  ngOnInit(): void {
    this.validation();
    this.api.dashboard$.subscribe((e:any)=>{
      // console.log(e);
      if(e===true){
        this.dashboard = true;
      }
      else{
        this.dashboard = false;
      }
    })
  }

  validation(){
    this.search = new FormGroup({
      name: new FormControl('',Validators.required)
    })
  }
   
  input(e:any){
    this.api.input.next(e.target.value)
  }
  

  ngDoCheck(): void {
      const selected = localStorage.getItem('selected');
      if(selected=='camera'){
        this.camera = true;
        this.video = false;
        this.dashboard = false;
        this.login = false;
      }
      else if(selected=='video'){
        this.camera = false;
        this.video = true;
        this.dashboard = false;
        this.login = false;
  }
  else if(selected=='dashboard'){
    this.camera = false;
    this.video = false;
    this.dashboard = true;
    this.login = false;
    }
    else if(selected=='login'){
      this.camera = false;
      this.video = false;
      this.dashboard = false;
      this.login = true;
    }
  }
}
