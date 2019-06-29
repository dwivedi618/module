import { Component, OnInit } from '@angular/core';
// chart.js import
import { Chart } from 'chart.js';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    var ctx = document.getElementById('myChart');


    
  var myChart = new Chart(ctx, {
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


  // implementation of dyanamic loading chart when button in this component clicked

  private barLoaded: boolean = false;
  private pieLoaded: boolean = true; //setting this one to true for one default loaded component
  private lineLoaded: boolean = false;
  public chartName : string ;
 

  // fuction for loading bar chart
    loadBarChart() {
    this.barLoaded = true
    this.chartName = "Bar chart"

    this.pieLoaded = false
    this.lineLoaded = false //only one one component loaded at a time other will set to false
}

  // fuction for loading pie chart
  loadPieChart(){
    this.pieLoaded = true
    this.chartName = "Pie chart"
    
    this.barLoaded = false
    this.lineLoaded = false //only one one component loaded at a time other will set to false

  }

    // fuction for loading line chart
    loadLineChart(){
      this.lineLoaded = true
      this.chartName = "Line chart"

      this.barLoaded = false
      this.pieLoaded = false //only one one component loaded at a time other will set to false
    }
}
