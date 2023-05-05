import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public formAccesso = new FormGroup({
    mail: new FormControl(),
    password: new FormControl()
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private userService: UserService, private router : Router) { }

  ngOnInit(){
    if (this.userService.getUser()) {
      this.router.navigateByUrl("area-utente")
    }
  }
  private mail : any;
  private password : any;
  private utenteId : any;

  async login(){
    this.mail = this.formAccesso.value.mail;
    this.password = this.formAccesso.value.password;
    await this.userService.login(this.mail, this.password);
    if (this.userService.getUser()) {
      this.router.navigateByUrl('area-utente')
    } else {
      alert("Autenticazione fallita")
    }
  }
}
