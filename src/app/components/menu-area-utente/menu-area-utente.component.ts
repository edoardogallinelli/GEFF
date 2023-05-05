import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-menu-area-utente',
  templateUrl: './menu-area-utente.component.html',
  styleUrls: ['./menu-area-utente.component.css']
})
export class MenuAreaUtenteComponent {

  constructor(private userService : UserService, private router : Router){

  }

public nome : string = ''
public cognome : string = ''
public foto : string = ''

  ngOnInit(){
    this.loadData()
    console.log(this.userService.getUser(), ' cosa c e dentro getUser ')
    console.log(this.userService.getUser().id, ' id dell utente ')
  }

  loadData(){
    this.nome = this.userService.getUser().nome
    this.cognome = this.userService.getUser().cognome
    this.foto = this.userService.getUser().fotoProfilo  

  }


  logout(){
    this.userService.logout()
    this.router.navigateByUrl('/home')
  }
}
