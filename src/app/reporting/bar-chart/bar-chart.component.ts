import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var ctx = document.getElementById('barChart');


    
    var barChart = new Chart(ctx, {
      type: 'bar',
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
