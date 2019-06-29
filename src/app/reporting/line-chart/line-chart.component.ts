import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var ctx = document.getElementById('lineChart');


    
    var lineChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Men', 'Women', 'Others'],
          datasets: [{
              label: '# of Votes',
              data: [500, 300, 100],
              backgroundColor: [
                  '#0AABBA',
                  '#F15500',
                  'yellow'
                 
              ],
              // borderColor: [
              //     '#222222'
              // ],
                 
              borderWidth: [ '1']
              
          }]
      },
      options: {
        maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
   
  }

}
