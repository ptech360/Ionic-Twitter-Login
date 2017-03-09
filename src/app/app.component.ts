import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/statusbar';
import { Splashscreen } from '@ionic-native/splashscreen';
import { HomePage } from '../pages/home/home';
import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {

    firebase.initializeApp({
      apiKey: "AIzaSyBwEUe6x_w_yLFrr--xYLQJLxRT2Rc8vtY",
      authDomain: "ionic-firebase-auth-9f555.firebaseapp.com",
      databaseURL: "https://ionic-firebase-auth-9f555.firebaseio.com",
      storageBucket: "ionic-firebase-auth-9f555.appspot.com",
      messagingSenderId: "904481277327"
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
