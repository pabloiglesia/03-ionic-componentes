import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  @ViewChild  (IonInfiniteScroll)  ionInfiniteScroll: IonInfiniteScroll

  data:any = Array(20)

  constructor() { }

  ngOnInit() {
  }

  onIonInfinite() {
    setTimeout(() => {
      if (this.data.length > 50) {
        this.ionInfiniteScroll.complete()
        this.ionInfiniteScroll.disabled = true
      } else{
        const nuevoArray:any = Array(20)
        this.data.push(...nuevoArray)
        this.ionInfiniteScroll.complete()
      }
    }, 1500);
  }

}
