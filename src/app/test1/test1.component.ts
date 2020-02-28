import {Component, OnInit} from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private common: CommonService) {
  }

  ngOnInit(): void {

  }

}
