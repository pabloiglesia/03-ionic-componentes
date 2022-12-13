import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  textoBuscar: string = '';
  albumes: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe( albumes => {
      console.log(albumes)
      this.albumes = albumes
    })
  }

  onSearchChange( event ){
    console.log(event);
    this.textoBuscar = event.detail.value;
  }

}
