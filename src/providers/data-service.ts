import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {

  public db: any;

  init() {
            // Initialize Firebase
            var config = {
              apiKey: "AIzaSyBN-4cFJhPxuIgJKqK0FVFUxqWUnlbMIlI",
              authDomain: "spot-8479d.firebaseapp.com",
              databaseURL: "https://spot-8479d.firebaseio.com",
              storageBucket: "spot-8479d.appspot.com",
              messagingSenderId: "85024289958"
            };
            firebase.initializeApp(config);

            this.db = firebase.database().ref('/produtos/-KaAdTQXSNFh3sGBq5NH/');

            //let geforceRef = firebase.database().ref('/produtos/-KaAaAYUpPTX7Qsju5H2');

            /*
            this.db.put({
              "GeForce GTX 980": {
                preco: 1800.50,
                image: "geforce.jpg",
                categoria: "TO-DO Ex:Computadores/Placas de Video",
                peso: 0,
                tamanho: "N/A"
              }})
              */


              this.db.update({
                "GeForce GTX 980x": {
                  preco: 1100.50,
                  image: "geforce.jpg",
                  categoria: "TO-DO Ex:Computadores/Placas de Video",
                  peso: 1,
                  tamanho: "N/A"
                }})

            }

            /*
            let ofertas = [
                { id: 1, followicon : '', ratingservico: '95%', title: 'GeForce GTX 980', precoNormal: 1800.00, preco: 1499.00, image: 'geforce.jpg', loja: 'Star Info @ Rua 13 de Maio 110 / 2001 - Centro', distancia: 2250, info:'', desconto:'35'},
                { id: 2, followicon : '', ratingservico: '90%', title: 'ATI Radeon R9 290X', precoNormal: 1700.00, preco: 1200.00, image: 'r9-290x.png', loja: 'Star Info @ Rua 13 de Maio 110 / 2001 - Centro', distancia: 2250, info:'', desconto:'10'},
                { id: 3, followicon : 'ion-checkmark-circled', ratingservico: '85%', title: 'IPhone 6 Plus', precoNormal: 3999.00, preco: 3499.00, image: 'iphone.jpg', loja: 'Homeprice @ Rua do Rosario 101 / sl 311 - Centro', distancia: 2180, info:'', desconto:'15'},
                { id: 4, followicon : '', ratingservico: '85%', title: 'Motorola X', precoNormal: 1599.00, preco: 1399.00, image: 'motox.jpg', loja: 'Vivo @ Av. Rio Branco 156 / 102 - Centro', distancia: 2350, info: '', desconto:'20'},
                { id: 5, followicon : '', ratingservico: '85%', title: 'Royal Canin 8+ 1kg', precoNormal: 60.00, preco: 43.50, image: 'Royal_Canin_Mini_Adult_8_large.jpg', loja: 'PetDog @ Machado de Assis 221 / sl 311 - Flamengo', distancia: 80, info:'', desconto:'15'},
                { id: 6, followicon : 'ion-checkmark-circled', ratingservico: '85%', title: 'Óculos RAY-BAN RB5225 2034', precoNormal: 799.00, preco: 499.00, image: 'raybanrb5225.jpg', loja: 'Óticas do Vovô @ Rua do Catete 350 / 25 - Catete', distancia: 500, info:'Óculos grau Preto', desconto:'30'},
                { id: 7, followicon : '', ratingservico: '85%', title: 'Smartphone Samsung Galaxy Gran Prime', precoNormal: 759.00, preco: 499.00, image: 'samsung_galaxygp.jpg', loja: 'Homeprice @ Rua do Rosario 101 / sl 311 - Centro', distancia: 2800, info:'Smartphone Samsung Galaxy Gran Prime Dual Chip Desbloqueado Tim Android 4.4 Kit Kat Tela 5 8GB 3G Câmera 8MP - Branco', desconto:'35'},
                { id: 8, followicon : '', ratingservico: '85%', title: 'Motorola X', precoNormal: 1499.00, preco: 1398.00, image: 'motox.jpg', loja: 'Vivo @ Rua 13 de Maio 101 - Centro', distancia: 2000, info:'', desconto:'20'},
                { id: 9, followicon : '', ratingservico: '95%', title: 'Royal Canin 8+ 1kg', precoNormal: 59.00, preco: 39.50, image: 'Royal_Canin_Mini_Adult_8_large.jpg', loja: 'Dogs Out @ Rua Bambina 100 - Botafogo', distancia: 3000, info:'', desconto:'25'},
                { id: 10, followicon : '', ratingservico: '90%', title: 'Royal Canin 8+ 1kg', precoNormal: 59.00, preco: 51.50, image: 'Royal_Canin_Mini_Adult_8_large.jpg', loja: 'Pet Kovitch @ Rua Senador Vergueiro 200 - Flamengo', distancia: 900, info:'', desconto:'20'}
              ];
              */

  constructor(public http: Http) {
    console.log('Hello DataService Provider');
  }

}
