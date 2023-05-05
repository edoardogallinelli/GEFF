import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-panoramica-personale',
  templateUrl: './panoramica-personale.component.html',
  styleUrls: ['./panoramica-personale.component.css']
})
export class PanoramicaPersonaleComponent {
  data: any;
  options: any;
  urlIconaMeteo: string = "";

  constructor(
    private http: HttpClient
  ) {

  }



  ngOnInit() {

    this.http.get("http://localhost:3000/meteo?localita=rome")
      .subscribe((response: any) => {
        //qui dentro definiamo quello che succede quando la chiamata `e terminata
        this.urlIconaMeteo = response[0].icona

        if (response[0].meteo == "soleggiato") {
          this.urlIconaMeteo = "../../../assets/images/soleggiato.png"
        } else if (response[0].meteo == "nuvoloso") {
          this.urlIconaMeteo = "../assets/images/nuvoloso.png"
        } else if (response[0].meteo == "piovoso") {
          this.urlIconaMeteo = "../src/assets/images/piovoso.png"
        }
      });

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    // const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'],
      datasets: [
        {
          label: 'Energia Prodotta',
          data: [20, 20, 30, 10, 15, 17, 22],
          fill: false,
          tension: 0.4,
          borderColor: '#C8E9E9'
        },

        {
          label: 'Energia Ridistribuita',
          data: [15, 11, 25, 3, 7, 13, 11],
          fill: false,
          borderColor: ' #ffc40c',
          tension: 0.4,

        },
        {
          label: ' Energia Consumata',
          data: [5, 9, 5, 7, 8, 4, 11],
          fill: true,
          borderDash: [5, 5],
          borderColor: '#ace1af',
          tension: 0.4,
          backgroundColor: "#ace1af"
        },
      ]
    };

    this.options = {
      responsive: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: "none !important"
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: "none !important"
          },
          scaleLabel: {
            display: true,
            labelString: "KW/h",
            fontColor: "green"
          }
        }
      }
    }
  }

}