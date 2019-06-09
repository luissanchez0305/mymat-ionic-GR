import { Component, ViewChild } from '@angular/core';
import { MenuController, Events } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GermanTexts } from '../services/german-texts';

import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';
import { ContactPage } from '../pages/contact/contact';
import { SliderPage } from '../pages/slider/slider';
import { FavoritesPage } from '../pages/favorites/favorites';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  lang_en : boolean;
  lang_es : boolean;
  lang_pt : boolean;
  lang_fr : boolean;
  lang_gr : boolean;
  lang_it : boolean;

  pages: Array<{title: string, component: any, icon: any, isPush: boolean}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public menuCtrl: MenuController, public events : Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: GermanTexts['home-title'], component: HomePage, icon: 'menuitemhome', isPush: false },
      { title: GermanTexts['help-title'], component: HelpPage, icon: 'menuitemhelp', isPush: false },
      { title: GermanTexts['contact-title'], component: ContactPage, icon: 'menuitemcontact', isPush: false },
      { title: GermanTexts['fav-title'], component: FavoritesPage, icon: 'menufavorites', isPush: true },
      { title: GermanTexts['slider-title'], component: SliderPage, icon: 'menuiteminfo', isPush: true}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.isPush)
      this.nav.push(page.component);
    else
      this.nav.setRoot(page.component);
  }
}
