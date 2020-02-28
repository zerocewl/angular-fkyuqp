import {Component, OnInit, Input} from '@angular/core';
import {AngularGridInstance, Column, GridOption} from 'angular-slickgrid';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  columnDefinitions: Column[];
  gridOptions1: GridOption;
  dataset1: any[];

  @Input() gridId: string;

  constructor() {

  }

  ngOnInit(): void {
    this.columnDefinitions = [
      {id: 'title', name: 'Title', field: 'title', sortable: true},
      {id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true},
      {id: '%', name: '% Complete', field: 'percentComplete', sortable: true},
      {id: 'start', name: 'Start', field: 'start'},
      {id: 'finish', name: 'Finish', field: 'finish'},
      {id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', sortable: true}
    ];
    console.log('------------------------on init---------------');
    this.gridOptions1 = {
      enableAutoResize: true,
      enableSorting: true
    };

    this.mockData();
  }

  mockData() {
    // mock a dataset
    const mockDataset = [];
    for (let i = 0; i < 20; i++) {
      const randomYear = 2000 + Math.floor(Math.random() * 10);
      const randomMonth = Math.floor(Math.random() * 11);
      const randomDay = Math.floor((Math.random() * 29));
      const randomPercent = Math.round(Math.random() * 100);

      mockDataset[i] = {
        id: i,
        title: 'Task ' + i,
        duration: Math.round(Math.random() * 100) + '',
        percentComplete: randomPercent,
        start: `${randomMonth}/${randomDay}/${randomYear}`,
        finish: `${randomMonth}/${randomDay}/${randomYear}`,
        effortDriven: (i % 5 === 0)
      };
    }

    this.dataset1 = mockDataset;
  }

}
