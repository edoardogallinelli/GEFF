import { Component } from '@angular/core';

@Component({
    selector: 'app-panorimica-comunita',
    templateUrl: './panorimica-comunita.component.html',
    styleUrls: ['./panorimica-comunita.component.css']
})
export class PanorimicaComunitaComponent {
    co2: string = "300";
    data: any;
    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: ['December', 'January', 'February', 'March', 'April', 'May'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Prodotto dalla comunità',
                    backgroundColor: '#eca147',
                    data: [144, 142, 137, 136, 135, 44]
                },
                {
                    type: 'bar',
                    label: 'Rete Nazionale',
                    backgroundColor: '#50BFBB',
                    data: [36, 34, 33, 31, 30, 8]
                },
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
