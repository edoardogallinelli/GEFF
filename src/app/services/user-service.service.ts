import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router : Router) {
    this.loadUser();
    if (!this.userData) {
      //TODO portami alla login
      this.router.navigateByUrl('login')
    }
  }

  private userData: any;

  
  async login(mail: string, password: string) {
    let response : any = await this.http.get(`http://localhost:3000/utenti?mail=${mail}&password=${password}`).toPromise()

    if (response.length > 0) { //utente trovato
      this.setUser(response[0]);
      console.log(response[0]);
      console.log(this.getUser(), 'risultato get user');


    } else {
      this.setUser(null)
      console.log("utente non trovato");

    }
  }

  loadUser() {
    let storedData = localStorage.getItem("userData"); //leggo se esiste user in localstorage
    if (!storedData) { //se non trova utenti imposta a null e ritorna
      this.userData = null;
      return;
    }
    this.userData = JSON.parse(storedData);//altrimenti imposta nello state locale il dato trovato
  }

  getUser() {
    return this.userData;
  }

  setUser(userData: any) { //salva in localstorage il valore dei dati dell'utente e li carica nello state locale
    localStorage.setItem("userData", JSON.stringify(userData));
    this.loadUser();
  }

  logout(){ //pulisce il localstorag
    this.setUser(null);
    console.log('Storage pulito correttamente');
    
  }

}
