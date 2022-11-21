import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage = ''
  roleMessage = ''

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled'
            console.log(this.handlerMessage)
          },
        },
        {
          text: 'OK',
          role: 'destructive',
          handler: () => {
            this.handlerMessage = 'Alert confirmed'
            console.log(this.handlerMessage)
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertForm() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      buttons: [
        {

          text: 'OK',
          handler: ( data ) => {
            console.log( data )
          }
        }
      ],
      inputs: [
        {
          name: 'name',
          id: 'name',
          placeholder: 'Name',
        },
        {
          name: 'nickname',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          }
        },
        {
          name: 'age',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name: 'description',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password',
        },
      ],
    });

    await alert.present();
  }
}
