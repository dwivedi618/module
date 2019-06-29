import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var ctx = document.getElementById('doughnutChart');


    
    var doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Men', 'Women', 'Others'],
          datasets: [{
              label: '# of Votes',
              data: [500, 300, 100],
              backgroundColor: [
                  '#0AABBA',
                  '#F15500',
                  '#222222'
                 
              ],
              // borderColor: [
              //     '#222222'
              // ],
                 
              borderWidth: [ '1']
              
          }]
      },
      options: {
        maintainAspectRatio: false,
          // scales: {
          //     yAxes: [{
          //         ticks: {
          //             beginAtZero: true
          //         }
          //     }]
          // }
      }
  });
   
  }

}
