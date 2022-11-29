import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: "primary",
      color: "primary",
      selected: false,
      slot: "start"
    },
    {
      name: "secondary",
      color: "secondary",
      selected: true,
      slot: "end"
    },
    {
      name: "tertiary",
      color: "tertiary",
      selected: true,
      slot: "start"
    },
    {
      name: "success",
      color: "success",
      selected: false,
      slot: "end"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick( item:any ) {
    console.log(item)
  }

}
