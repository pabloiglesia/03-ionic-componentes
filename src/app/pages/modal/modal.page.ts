import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        'nombre': 'Pablo',
        'pais': 'Espana'
      }
    });
    modal.present();

    // const { data } = await modal.onDidDismiss();  // La info se recibe cuando el modal ya se ha cerrado completamente


    const { data, role } = await modal.onWillDismiss(); // La info se recibe cuando el modal empieza a cerrarse

    console.log(data)
  }

  ngOnInit() {
    
  }

}
