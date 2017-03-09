import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userProfile: any = null;
  zone: NgZone;

  constructor(public navCtrl: NavController) {
    this.zone = new NgZone({});
  }

  twLogin(): void {
    TwitterConnect.login().then( response => {
      const twitterCredential = firebase.auth.TwitterAuthProvider.credential(response.token, response.secret);

      firebase.auth().signInWithCredential(twitterCredential).then( userProfile => {
        this.zone.run( () => {
          this.userProfile = userProfile;
          this.userProfile.twName = response.userName;
          console.log(this.userProfile);
        });
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log("Error connecting to twitter: ", error);
    });
  }

}
