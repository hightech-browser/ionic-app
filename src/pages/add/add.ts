import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { LocationTracker } from '../../app/providers/location-tracker/location-tracker';

@Component({
  selector: 'add-compo',
  templateUrl: 'add.html'
})
export class AddComponent {
  public position : any;
  public hash : string;
  constructor(params: NavParams, public viewCtrl: ViewController, public location : LocationTracker) {
   location.getLocation().then(data =>{
     this.position = data;
   });
  }

  add(){
    this.viewCtrl.dismiss({
      hash : this.hash,
      position: this.position
    });
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}