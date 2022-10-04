import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Login:FormGroup;
  Submit:boolean  =false;
  form:FormGroup;
  constructor(private router:Router,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
    console.log("Hello");
    
    this.new();
    localStorage.setItem('selected','login');
    this.validation()
  }
  Log(e:any){
    console.log("Welcome to Login " + e);

  }
  validation(){
    this.Login = this.fb.group({
      email: new FormControl('',Validators.compose([Validators.required,Validators.email])),
      password: new FormControl('',Validators.required)
    })
  }
  submit(){

    localStorage.setItem('submit','true');
    this.Submit = true;
    setTimeout(()=>{
      this.Submit = false;
    },2000)
    if(this.Login.valid){
    this.router.navigate(['/dashboard'])
    }
  }

  new(){
    this.form= new FormGroup({
      age : new FormControl ('',Validators.required),
      gender:new FormControl('',Validators.required),
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
    })
    let obj = {
      age:12,
      gender:'Male',
      name: 'Pankaj',
      // email: 'pankaj@pankaj.com'
    }
    let obj2 = {
      age:22,
      gender:'Female',
      zipCode:'231232'
    }
    // this.form.setValue(obj);
    
    this.form.patchValue(obj2)
    console.log(this.form);
  }

}
