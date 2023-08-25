import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  responsedata:any;

  constructor(private service:AuthService,private route:Router){
    localStorage.clear();
  }

  login = new FormGroup(
    {
      username : new FormControl("",[Validators.required,Validators.minLength(2)]),
      password : new FormControl("",Validators.required)
    }
  )

  ProceedLogin(){
    if(this.login.valid){

      this.service.ProceedLogin(this.login.value).subscribe( result => {
          if(result !=null)
          {
            this.responsedata = result;
            localStorage.setItem('token',this.responsedata.token);
            localStorage.setItem('Role','Admin');//Setting up the Hard role Role
            this.route.navigate(['']);
            //hopetutors.com
          }
          else
          {
            console.log("Wrong credentials");
          }
      });

      console.log("After Subscribe Line");
    }
  }

}
