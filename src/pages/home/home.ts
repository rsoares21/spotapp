import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { IncluirobjPage } from '../incluirobj/incluirobj';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  incluirobjPage = IncluirobjPage;

  constructor(public navCtrl: NavController) {

  }

}
