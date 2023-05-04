import { Component } from '@angular/core';

@Component({
  selector: 'app-panoramica-focus',
  templateUrl: './panoramica-focus.component.html',
  styleUrls: ['./panoramica-focus.component.css']
})
export class PanoramicaFocusComponent {
  data: any;

  options: any;

  ngOnInit() {

      this.data = {
          labels: ['A', 'B', 'C'],
          datasets: [
              {
                  data: [300, 50, 100],
                  backgroundColor: ["#f00","#0f0","#00f"],
                  hoverBackgroundColor: ["#000","#000","#000"]
              }
          ]
      };


      this.options = {
          cutout: '60%',
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
