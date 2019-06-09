import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { APIServiceProvider } from '../../providers/api-service/api-service';
import { GermanTexts } from '../../services/german-texts';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  private contactForm : FormGroup;
  public contactDisabled : boolean;
  public  name_value : string;
  public  email_value : string;
  public  message_value : string;
  public button_send : string;
  public response_text : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public apiService : APIServiceProvider,
    public events : Events) {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    this.cleanForm();
    this.response_text = '';
    this.changeButtonText();
  }

  changeButtonText(){
      this.button_send = GermanTexts['send-text'];
      // Mostrar texto en label debajo del boton
  }

  cleanForm(){
    this.contactDisabled = true;
    this.name_value = '';
    this.email_value = '';
    this.message_value = '';
  }

  attemptSendMail(){
    var emailData = { email : this.contactForm.value.email, name : this.contactForm.value.name, message : this.contactForm.value.message };
    this.apiService.runPost('contact_us.php',emailData).then((result) => {
        var obj : any = result;
        if (obj.status == "ok") {
            this.response_text = GermanTexts['email-success-message'];
            this.button_send = GermanTexts['sent-text'];
            this.cleanForm();

        } else {
            this.response_text = GermanTexts['email-error-message'];
        }
    }, (result) => {
          this.response_text = GermanTexts['email-error-message'];
    });
  }
}
