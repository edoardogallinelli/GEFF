import { Component } from '@angular/core';

@Component({
  selector: 'app-panorimica-comunita',
  templateUrl: './panorimica-comunita.component.html',
  styleUrls: ['./panorimica-comunita.component.css']
})
export class PanorimicaComunitaComponent{
      co2: string = "300";
      data: any;
      options: any;

      ngOnInit() {
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--text-color');
          const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
          const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  
          this.data = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                  {
                      type: 'bar',
                      label: 'Carica Batteria',
                      backgroundColor: '#50BFBB',
                      data: [50, 25, 12, 48, 90, 76, 42]
                  },
                  {
                      type: 'bar',
                      label: 'Prodotto dalla comunità',
                      backgroundColor: '#FFC701',
                      data: [21, 84, 24, 75, 37, 65, 34]
                  },
                  {
                      type: 'bar',
                      label: 'Consumato dalla comunità',
                      backgroundColor: '#18A6E0',
                      data: [41, 52, 24, 74, 23, 21, 32]
                  }
              ]
          };
  
          this.options = {
              maintainAspectRatio: false,
              aspectRatio: 0.8,
              plugins: {
                  tooltips: {
                      mode: 'index',
                      intersect: false
                  },
                  legend: {
                      labels: {
                          color: textColor
                      }
                  }
              },
              scales: {
                  x: {
                      stacked: true,
                      ticks: {
                          color: textColorSecondary
                      },
                      grid: {
                          color: surfaceBorder,
                          drawBorder: false
                      }
                  },
                  y: {
                      stacked: true,
                      ticks: {
                          color: textColorSecondary
                      },
                      grid: {
                          color: surfaceBorder,
                          drawBorder: false
                      }
                  }
              }
          };
      }
}
