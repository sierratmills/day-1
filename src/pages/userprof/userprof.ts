import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { Http } from '@angular/http';

/**
 * Generated class for the UserprofPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprof',
  templateUrl: 'userprof.html',
})
export class UserprofPage {

  public firstname: String;
  public lastname: String;
  public email: String;
  public username: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get("http://localhost:3000/verify?jwt=" + localStorage.getItem("TOKEN")).subscribe(
      result => {
        var info = result.json();
        this.firstname = info.user.firstname;
        this.lastname = info.user.lastname;
        this.email = info.user.email;
        this.username = info.user.username;
      },

      err => {
        // Invalid, login!
      }
    );
  }

  navigateToProfile() {
    console.log("Navigating..");
    this.navCtrl.push(ProfilePage);
  }

  navigateToHomePage() {
    console.log("Navigating..");
    this.navCtrl.push(HomePage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofPage');
  }

}
