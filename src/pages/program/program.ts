import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Constants } from '../../services/constants';
import { GermanTexts } from '../../services/german-texts';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-program',
  templateUrl: 'program.html',
})
export class ProgramPage {
  public programName : string;
  public programRunningTime : string;
  public programDescription : string;
  public programApiName : string;
  public programNumber : number;
  public programRealName : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public events: Events) {
  }
  ionViewDidLoad(){
    this.programRealName = this.navParams.get('name');
    var programTranslateName = this.navParams.get('name');
    if(this.isNameOnArray(Constants.shortTitles, programTranslateName))
      programTranslateName = programTranslateName.replace('-upper', '-short');
    this.programName = typeof GermanTexts[programTranslateName] === 'undefined' ? programTranslateName : GermanTexts[programTranslateName];
    this.programRunningTime = typeof GermanTexts[this.navParams.get('runTime')] === 'undefined' ? this.navParams.get('runTime') : GermanTexts[this.navParams.get('runTime')];
    this.programDescription = typeof GermanTexts[this.navParams.get('description')] === 'undefined' ? this.navParams.get('description') : GermanTexts[this.navParams.get('description')];
    this.programApiName = this.navParams.get('apiName');
    this.programNumber = this.navParams.get('programNumber');
  }

  add1Program(programName, programRunningTime, programApiName){
    this.events.publish("add1ProgramEvent", this.programNumber, this.programRealName, this.programRunningTime, this.programApiName);
  }

  isNameOnArray(names, name){
    for(var i = 0; i < names.length; i++){
      if(names[i] == name){
        return true;
      }
    }
    return false;
  }
}
