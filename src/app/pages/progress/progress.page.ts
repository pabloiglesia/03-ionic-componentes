import { Component, OnInit } from '@angular/core';
import { DateTimePageModule } from '../date-time/date-time.module';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  progress: number = 0.2;
  buffer: number = 0.8;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( event ) {
    this.progress = event.detail.value.lower
    this.buffer = event.detail.value.upper
    // console.log(event.detail)
  }

}
