import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public formLogin:FormGroup;
  route: any;

 
 constructor(private toastr:ToastrService,private fb:FormBuilder, private loginService: LoginService, private router:Router) {
  this.formLogin = this.criarFormLogin();
 }

 ngOnInit(): void {
   
 }
 public criarFormLogin():FormGroup{
  return this.fb.group({
    email : ["",[Validators.required, Validators.email]],
    senha: ["",[Validators.required, Validators.minLength(5)]]
  })
 }

 public isFormControlInvalid(controlName:string):boolean{
  return !!(this.formLogin.get(controlName)?.invalid && this.formLogin.get(controlName)?.touched)
}

public submitForm(){
  const {email, senha} = this.formLogin.value;
  this.formLogin.reset;

  this.loginService.login(email, senha).subscribe(
    res => {
      this.toastr.success("Login efetuado com sucesso");
      this.router.navigate(['/']);
    },
    err =>{
      this.toastr.error(err);
    }
  )
}
}
