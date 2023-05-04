import { Component } from '@angular/core';

@Component({
  selector: 'app-panoramica-focus',
  templateUrl: './panoramica-focus.component.html',
  styleUrls: ['./panoramica-focus.component.css']
})
export class PanoramicaFocusComponent {
    data: any;
    costo: any[]=["50"];
    options: any;
    percentuale: any[]=["100"];
    ngOnInit() {
        this.data = {
            labels: ['Rete propria', 'Rete della comunità', 'Rete nazionale'],
            datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ["#18A6E0","#FFC701","#2ECC71"],
                hoverBackgroundColor: ["#000","#000","#000"]
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


