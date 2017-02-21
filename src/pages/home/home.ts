import { Component } from '@angular/core';
import * as io from "socket.io-client";
import { NavController, ModalController } from 'ionic-angular';
import { AddComponent } from '../add/add';
import { Devices } from '../../app/providers/devices/devices';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  socket : any;
  url : string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public devices: Devices) { 
    devices.load();
  }

  open(path){
    this.socket = io('https://hightech-browser.herokuapp.com');
    this.socket.emit("open", {'hash' : '84nlosfx1z933uw4u36gwx9a4i', 'url' : path});
  }

  add(){
   let profileModal = this.modalCtrl.create(AddComponent, { userId: 8675309 });

   profileModal.onDidDismiss(data => {
     if(!data) return;
     this.devices.add(data);
   });

   profileModal.present();
  }

}
