import { Component, NgZone } from '@angular/core';
import { NavParams, ViewController, LoadingController, AlertController, Events } from 'ionic-angular';
import { RoutinesProvider } from '../../providers/routines/routines';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { APIServiceProvider } from '../../providers/api-service/api-service';
import { Network } from '@ionic-native/network';
import { Constants } from '../../services/constants';
import { GermanTexts } from '../../services/german-texts';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  private program1 : any;
  private program2 : any;
  private program3 : any;
  private program4 : any;
  private responseData : any;
  private response_text : string;
  private saveRoutineForm : FormGroup;
  private showSaveForm : boolean = true;
  private favoritesList : any;
  private showLoadingListing : boolean = false;
  public isDeviceOnline : boolean;
  public offline_device : string;

  constructor(public navParams: NavParams, public viewCtrl: ViewController, public routines: RoutinesProvider,
    private formBuilder: FormBuilder, private storage: Storage, public apiService : APIServiceProvider,
    private network: Network, public loadingCtrl: LoadingController, public alertCtrl : AlertController,
    private zone: NgZone, public events: Events) {
    this.isDeviceOnline = true;
    var programs = this.routines.getPrograms();
    if(programs[0] && programs[1] && programs[2] && programs[3]){
      this.program1 = GermanTexts[programs[0]];
      this.program2 = GermanTexts[programs[1]];
      this.program3 = GermanTexts[programs[2]];
      this.program4 = GermanTexts[programs[3]];
    }
    this.saveRoutineForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
    if(navParams.get('showSave'))
      this.showSaveForm = true;
    else
      this.showSaveForm = false;

    // watch network for a disconnect
    this.network.onDisconnect().subscribe(() => {
      this.zone.run(() => {
        this.isDeviceOnline = false;
      });
    });

    // watch network for a connection
    this.network.onConnect().subscribe(() => {
      this.zone.run(() => {
        this.isDeviceOnline = true;

        this.storage.get(Constants.deviceInfoKey).then((device)=>{
          this.loadFavoriteList(device.email);
        });
      });
    });
  }

  ionViewDidLoad() {
    this.storage.get(Constants.deviceInfoKey).then((device)=>{
      if(typeof device !== 'undefined' && device != null)
        this.loadFavoriteList(device.email);
    });
  }

  loadFavoriteList(email){
    var formData = new FormData();

    //formData.append('uuid', uuid);
    formData.append('type', 'get');
    formData.append('email', email);
    if(this.isDeviceOnline){
      this.showLoadingListing = true;
      this.apiService.runPost('favorites.php',formData).then((result) => {
        this.showLoadingListing = false;
        this.responseData = result;
        this.favoritesList = this.responseData.favorites;

      },(err) => {
        this.showLoadingListing = false;
        console.log(err);
      });
    }
  }

  dismiss(event : Event) {
    if(event){
      event.preventDefault();
      event.stopPropagation();
    }
    this.viewCtrl.dismiss();
  }

  delete(event: Event, id){
    if(event){
      event.preventDefault();
      event.stopPropagation();
    }

    var formData = new FormData();

    //formData.append('uuid', uuid);
    formData.append('type', 'del');
    formData.append('id', id);

    this.apiService.runPost('favorites.php',formData).then((result) => {
      this.storage.get(Constants.deviceInfoKey).then((device)=>{
        this.loadFavoriteList(device.email);
      });
    });
  }

  showProgram(id, name, program1, program2, program3, program4){
    let program_1 = (program1 == 'E-SMOG' ? program1 : GermanTexts[program1]);
    let program_2 = (program2 == 'E-SMOG' ? program2 : GermanTexts[program2]);
    let program_3 = (program3 == 'E-SMOG' ? program3 : GermanTexts[program3]);
    let program_4 = (program4 == 'E-SMOG' ? program4 : GermanTexts[program4]);
    let alert = this.alertCtrl.create({
      title: 'Rutina - ' + name,
      message: program_1 + '\n' + program_2 + '\n' + program_3 + '\n' + program_4,
      buttons: [
                {
                  text: GermanTexts['choose'],
                  handler: data => {
                    this.events.publish('addProgramsEvent', { name : program1 }, { name : program2 }, { name : program3 }, { name : program4 });
                  }
                }
              ]
    });
    alert.present();
    // Mostrar texto en label debajo del boton

  }

  attemptSaveFavorite(){
    this.response_text = '';

    this.storage.get(Constants.deviceInfoKey).then((device)=>{

      var formData = new FormData();
      let programs = this.routines.getPrograms();
      formData.append('type', 'new');
      formData.append('email', device.email);
      formData.append('name', this.saveRoutineForm.value.name);
      formData.append('program1', programs[0]);
      formData.append('program2', programs[1]);
      formData.append('program3', programs[2]);
      formData.append('program4', programs[3]);

      this.apiService.runPost('favorites.php',formData).then((result) => {
        this.responseData = result;
        if(this.responseData.status == 'ok'){
            this.showSaveForm = false;
            this.favoritesList = this.responseData.favorites;
        }
      });

    });
  }
}
