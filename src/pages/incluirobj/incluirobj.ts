import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../providers/data-service';

/*
  Generated class for the Incluirobj page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-incluirobj',
  templateUrl: 'incluirobj.html',
  providers: [DataService]
})
export class IncluirobjPage {

  public staticData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncluirobjPage');

  }

}
