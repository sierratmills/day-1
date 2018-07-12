import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { MainPage } from '../main/main';

/**
 * Generated class for the OrderhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderhistory',
  templateUrl: 'orderhistory.html',
})
export class OrderhistoryPage {

  public userid;
  private order;
  public orderstore;
  public orderdate;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.http.get("http://localhost:3000/verify?jwt=" + localStorage.getItem("TOKEN")).subscribe(
      result => {
        var info = result.json();
        this.userid = info.userid;
        console.log(info);
      },

      err => {
        // Invalid, login!
      }
    );
    this.http.get("http://localhost:3000/orderhistory", this.userid).subscribe(
      result => {
        var info = result.json();
        this.order = info.order;
        this.orderdate = info.date;
        this.orderstore = info.store;
        console.log(this.order);
      },

      err => {
        // Invalid, login!
      }
    );
  }

  navigateToMain() {
    this.navCtrl.push(MainPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderhistoryPage');
  }

}
