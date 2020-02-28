import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  gridId = "gridId1"

  constructor(private common: CommonService) { }

  ngOnInit(): void {

  }

}
