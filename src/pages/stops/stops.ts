import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { StopDetailsPage } from '../stop-details/stop-details';

import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the StopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stops',
  templateUrl: 'stops.html',
})
export class StopsPage {
  /*
    items: Array<{ title: string }>;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
      this.items = [];
      let item1 = { title: 'Weber Arch' };
      let item2 = { title: 'Tech Institute' };
      this.items.push(item1);
      this.items.push(item2);
    }
  */

  items: Observable<any[]>;
  // busStopsRef: AngularFireList<any>;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    // this.busStopsRef = this.firebaseProvider.getBusStops();
    // this.busStops = this.busStopsRef.valueChanges();
    this.items = this.firebaseProvider.getBusStops().valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StopsPage');
    // var time = new Date().getDay();
    // console.log(time);
  }

  itemTapped(event, item) {
    let stopDetailsModal = this.modalCtrl.create(StopDetailsPage,
      { stopName: item.name, stopLine: item.line, stopID: item.id },
      { cssClass: 'stopDetailsModal' });
    // console.log("itemid: "+item.id)
    stopDetailsModal.present();
  }

}
