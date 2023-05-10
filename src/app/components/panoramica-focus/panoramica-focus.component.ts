import { UserService } from './../../services/user-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-panoramica-focus',
  templateUrl: './panoramica-focus.component.html',
  styleUrls: ['./panoramica-focus.component.css']
})
export class PanoramicaFocusComponent {
  public isProsumer: boolean = true;
  data: any;
  dataConsumer: any;
  costo: string = "11";
  costoCosumer: string = "21";
  options: any;
  // optionsConsumer: any;
  percentuale: number = 80;
  colori: string[] = ["#E2493F", "#E2943F", "#6DE23F"];
  colore: string = '';

  constructor (private userService: UserService){}
  ngOnInit() {
    //tramite il servizio, verifico se l'utente è prosumer o consumer
    this.isProsumer = this.userService.getUser().prosumer
    if (this.percentuale <= 10) {
      this.colore = this.colori[0]
    }
    else if (this.percentuale <= 30) {
      this.colore = this.colori[1];
    }
    else { this.colore = this.colori[2] }
    this.data = {
      labels: ['Rete propria', 'Rete della comunità', 'Rete nazionale'],
      datasets: [
        {
          data: [300, 80, 60],
          backgroundColor: ["#18A6E0", "#eca147", "#2ECC71"],
          hoverBackgroundColor: ["#056C91", "#b67030", "#168747"]
        }
      ]
    };
    this.dataConsumer = {
      labels: [ 'Rete della comunità', 'Rete nazionale'],
      datasets: [
        {
          data: [80, 40],
          backgroundColor: ["#18A6E0", "#eca147"],
          hoverBackgroundColor: ["#056C91", "#b67030"]
        }
      ]
    };
    this.options = {
      mantainAspectRatio: false,
      cutout: '50%',
      plugins: {
        legend: {
          labels: {
            color: "black"
          }
        }
      }
    };
  }


}


