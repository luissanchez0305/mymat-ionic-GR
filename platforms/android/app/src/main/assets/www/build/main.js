webpackJsonp([0],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_german_texts__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SliderPage = (function () {
    function SliderPage(navCtrl, navParams, plt, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.storage = storage;
        this.showHeader = false;
    }
    SliderPage.prototype.ionViewDidLoad = function () {
        this.culture = __WEBPACK_IMPORTED_MODULE_3__services_german_texts__["a" /* GermanTexts */]['culture'];
        this.images = new Array();
        for (var i = 1; i <= 5; i++) {
            this.images.push('./assets/imgs/instructions/' + this.culture + '/' + i + '.png');
        }
    };
    SliderPage.prototype.skipInstructions = function () {
        this.navCtrl.popToRoot();
    };
    SliderPage.prototype.next = function () {
        this.slides.slideNext();
    };
    SliderPage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], SliderPage.prototype, "slides", void 0);
    SliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slider',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\slider\slider.html"*/'<ion-header *ngIf="showHeader">\n  <ion-navbar class="bar">\n    <button ion-button menuToggle end class="button button-clear">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <div class="logo"></div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding no-border>\n        <button float-left ion-button  color="light" class="swiper-button-prev swiper-button-black" (click)="prev()" [disabled]="slides.isBeginning()"></button>\n\n        <ion-slides #slides>\n          <ion-slide *ngFor="let image of images">\n              <img src="{{ image }}"/>\n          </ion-slide>\n        </ion-slides>\n        <button float-right ion-button color="light" class="swiper-button-next swiper-button-black" (click)="next()" [disabled]="slides.isEnd()"></button>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="dark">\n    <ion-buttons end>\n        <button ion-button class="button-clear" (click)="skipInstructions()">\n            Überspringen\n        </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\slider\slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SliderPage);
    return SliderPage;
}());

//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscribe_subscribe__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_routines_routines__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_german_texts__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__programs_programs__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wifi_wifi__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__favorites_favorites__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = (function () {
    function HomePage(navCtrl, storage, routines, network, zone, events, device, apiService, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.routines = routines;
        this.network = network;
        this.zone = zone;
        this.events = events;
        this.device = device;
        this.apiService = apiService;
        this.modalCtrl = modalCtrl;
        this.showAddFavoriteButton = false;
        this.tab_bubble = __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */]['tap-bubble'];
        this.run_routine = __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */]['run-routine'];
        this.add_favorite = __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */]['add-favorite'];
        this.clean_routine = __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */]['clean-routine'];
        //this.checkAllBubbles();
        this.events.subscribe('sharesBubbles', function (bubbles) {
            for (var i = 1; i <= bubbles.length; i++) {
                _this.updateBubbles(i, bubbles[i - 1]);
            }
            _this.AllBubblesChecked(_this.routines.getPrograms());
        });
        this.events.subscribe('addProgramsEvent', function (program1, program2, program3, program4) {
            _this.navCtrl.pop();
            console.log(program1);
            var bubbles = _this.routines.addPrograms('', program1, program2, program3, program4);
            _this.events.publish("sharesBubbles", bubbles);
        });
        this.AllBubblesChecked(this.routines.getPrograms());
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
        //this.navCtrl.push(SubscribePage, { callBackPage : 'none' });
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].deviceInfoKey).then(function (info) {
            if (typeof info === 'undefined' || info == null) {
                /*if(window.hasOwnProperty('cordova')){*/
                var formData = new FormData();
                var _uuid = __WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].test_uuid;
                if (window.hasOwnProperty('cordova')) {
                    _uuid = _this.device.uuid;
                }
                formData.append('uuid', _uuid);
                //var data = { 'uuid' : Constants.test_uuid };
                _this.apiService.runPost('check_device.php', formData).then(function (result) {
                    //console.log('check_device success');
                    _this.isDeviceOnline = true;
                    var obj = result;
                    if (obj.found == "0") {
                        // despliega la vista de insercion de datos
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__subscribe_subscribe__["a" /* SubscribePage */], { callBackPage: 'none' });
                    }
                    else {
                        _this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].deviceInfoKey, { "email": obj.email, "uuid": _uuid });
                    }
                }, function (result) {
                    //console.log('check_device error ' + result);
                    //this.isDeviceOnline = false;
                    /*this.storage.get(Constants.storageKeyLang).then((lang)=>{
                      this.translateService.getTranslation(lang).subscribe((value) => {
                        this.offline_device = value['offline-device-text-2'];
                      });
                    });*/
                });
                /*}*/
            }
        });
    }
    HomePage.prototype.addPrograms = function (routineName, program0, program1, program2, program3) {
        this.events.publish('addProgramsEvent', program0, program1, program2, program3);
        this.content.scrollTo(0, 0, 100);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].latestRoutinesKey).then(function (latests) {
            if (latests) {
                _this.showLatestSection = true;
                _this.latestRoutines = latests;
            }
            else {
                _this.showLatestSection = false;
            }
        });
    };
    HomePage.prototype.openAddFavorite = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].deviceInfoKey).then(function (info) {
            if (typeof info === 'undefined' || info == null) {
                // despliega la vista de insercion de datos
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__subscribe_subscribe__["a" /* SubscribePage */], { callBackPage: 'favorites' });
            }
            else {
                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__favorites_favorites__["a" /* FavoritesPage */], { 'showSave': true });
                profileModal.present();
            }
        });
    };
    HomePage.prototype.removeProgramFromRoutine = function (prg) {
        console.log('hold: ' + prg);
    };
    HomePage.prototype.selectBubble = function (prg, add) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__programs_programs__["a" /* ProgramsPage */], { bubble: prg });
    };
    HomePage.prototype.runRoutine = function () {
        var programs = this.routines.getPrograms();
        if (this.AllBubblesChecked(programs)) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__wifi_wifi__["a" /* WifiPage */], { prog1: this.routines.getProgram(programs[0]), prog2: this.routines.getProgram(programs[1]), prog3: this.routines.getProgram(programs[2]), prog4: this.routines.getProgram(programs[3])
            });
        }
    };
    HomePage.prototype.AllBubblesChecked = function (programs) {
        if (typeof programs[0] !== 'undefined' && programs[0] != null && programs[0].length > 0 &&
            typeof programs[1] !== 'undefined' && programs[1] != null && programs[1].length > 0 &&
            typeof programs[2] !== 'undefined' && programs[2] != null && programs[2].length > 0 &&
            typeof programs[3] !== 'undefined' && programs[3] != null && programs[3].length > 0) {
            this.EnableRunRoutine = true;
            this.showAddFavoriteButton = true;
        }
        else {
            this.EnableRunRoutine = false;
            this.showAddFavoriteButton = false;
        }
        return this.EnableRunRoutine;
    };
    HomePage.prototype.cleanRoutine = function () {
        this.routines.cleanPrograms();
        this.AllBubblesChecked(this.routines.getPrograms());
        this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble1, '');
        this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble2, '');
        this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble3, '');
        this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].storageKeyBubble4, '');
        this.updateBubbles(1, '');
        this.updateBubbles(2, '');
        this.updateBubbles(3, '');
        this.updateBubbles(4, '');
        this.showAddFavoriteButton = false;
    };
    HomePage.prototype.updateBubbles = function (bubble, name) {
        switch (bubble) {
            case 1:
                if (typeof name !== 'undefined' && name.length > 0) {
                    this.bubblesCurrentState1 = true;
                    this.bubblesNames1 = typeof __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */][name] === 'undefined' ? name : __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */][name];
                }
                else {
                    this.bubblesCurrentState1 = false;
                    this.bubblesNames1 = '';
                }
                break;
            case 2:
                if (typeof name !== 'undefined' && name.length > 0) {
                    this.bubblesCurrentState2 = true;
                    this.bubblesNames2 = typeof __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */][name] === 'undefined' ? name : __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */][name];
                }
                else {
                    this.bubblesCurrentState2 = false;
                    this.bubblesNames2 = '';
                }
                break;
            case 3:
                if (typeof name !== 'undefined' && name.length > 0) {
                    this.bubblesCurrentState3 = true;
                    this.bubblesNames3 = typeof __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */][name] === 'undefined' ? name : __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */][name];
                }
                else {
                    this.bubblesCurrentState3 = false;
                    this.bubblesNames3 = '';
                }
                break;
            case 4:
                if (typeof name !== 'undefined' && name.length > 0) {
                    this.bubblesCurrentState4 = true;
                    this.bubblesNames4 = typeof __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */][name] === 'undefined' ? name : __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */][name];
                }
                else {
                    this.bubblesCurrentState4 = false;
                    this.bubblesNames4 = '';
                }
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\home\home.html"*/'  <ion-header>\n  <ion-navbar class="bar">\n    <button ion-button menuToggle end class="button button-clear">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <div class="logo"></div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home">\n    <div padding class="bubblescontainer">\n        <div class="bubbles">\n            <div (click)="selectBubble(1)" on-hold="removeProgramFromRoutine(1)" [ngStyle]="bubblesCurrentState1 && {\'background-image\':\'url(assets/img/bubble-violet.png)\'}" class="single-bubble-1"></div>\n            <div class="bubbles-program-name-1" (click)="selectBubble(1,true)">{{ bubblesNames1 }}</div>\n\n            <div (click)="selectBubble(2)" on-hold="removeProgramFromRoutine(2)" [ngStyle]="bubblesCurrentState2 && {\'background-image\':\'url(assets/img/bubble-red.png)\'}" class="single-bubble-2"></div>\n            <div class="bubbles-program-name-2" (click)="selectBubble(2,true)">{{ bubblesNames2 }}</div>\n\n            <div (click)="selectBubble(3)" on-hold="removeProgramFromRoutine(3)" [ngStyle]="bubblesCurrentState3 && {\'background-image\':\'url(assets/img/bubble-yellow.png)\'}" class="single-bubble-3"></div>\n            <div class="bubbles-program-name-3" (click)="selectBubble(3,true)">{{ bubblesNames3 }}</div>\n\n            <div (click)="selectBubble(4)" on-hold="removeProgramFromRoutine(4)" [ngStyle]="bubblesCurrentState4 && {\'background-image\':\'url(assets/img/bubble-green.png)\'}" class="single-bubble-4"></div>\n            <div class="bubbles-program-name-4" (click)="selectBubble(4,true)">{{ bubblesNames4 }}</div>\n        </div>\n    </div>\n\n    <div class="bubbleexplain">\n        <br>\n        <b>{{ tap_bubble }}</b><br><br>\n        <!--<p translate="press-hold"> Press and hold a hearth to remove</p>-->\n        <button [disabled]="!EnableRunRoutine" class="greenbtn" menu-close nav-transition="ios" nav-direction="forward" (click)="runRoutine()" href="#">{{ run_routine }}</button>\n        <br><br>\n        <button [disabled]="!showAddFavoriteButton" class="orangebtn" menu-close nav-transition="ios" nav-direction="forward" (click)="openAddFavorite()" href="#">{{ add_favorite }}</button>\n        <br><br>\n        <button class="graybtn" menu-close nav-transition="ios" nav-direction="forward" (click)="cleanRoutine()" href="#">{{ clean_routine }}</button>\n\n    </div>\n    <div text-center text-uppercase padding-top *ngIf="showLatestSection">{{ latest_routines }}</div>\n    <div *ngFor="let routine of latestRoutines">\n        <div text-center padding-top>\n          {{ routine.day }} {{ routine.month }} {{ routine.year }} {{ routine.hours }}:{{ routine.minutes }}\n        </div>\n        <!--<div class="purchase-status">{{ routine.purchaseStatus }}</div>-->\n\n        <div class="paddingmodal">\n\n            <ion-list (click)="addPrograms(\'\', routine.programs[0].apiName, routine.programs[1].apiName,\n                routine.programs[2].apiName,routine.programs[3].apiName)">\n\n                <ion-item *ngFor="let program of routine.programs" class="addiction center">\n                     {{ program.name }}\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_routines_routines__["a" /* RoutinesProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_9__providers_api_service_api_service__["a" /* APIServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_german_texts__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slider_slider__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__favorites_favorites__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the SubscribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubscribePage = (function () {
    function SubscribePage(navCtrl, navParams, zone, formBuilder, storage, apiService, device, modalCtrl, network) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.apiService = apiService;
        this.device = device;
        this.modalCtrl = modalCtrl;
        this.network = network;
        // obtiene el parametro de que page va a correr al terminar el registro
        this.callBackPage = this.navParams.get('callBackPage');
        this.showSubmitButton = true;
        var aDate = new Date();
        this.maxDateOfPicker = this.maxDate = aDate.toISOString();
        this.subscribeForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            birthDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    SubscribePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubscribePage');
    };
    SubscribePage.prototype.attemptSubscribe = function () {
        var _this = this;
        this.response_text = '';
        var formData = new FormData();
        formData.append('email', this.subscribeForm.value.email);
        formData.append('name', this.subscribeForm.value.name);
        formData.append('birthDate', this.subscribeForm.value.birthDate);
        formData.append('gender', this.subscribeForm.value.gender);
        formData.append('isUpdate', 'false');
        if (window.hasOwnProperty('cordova')) {
            formData.append('uuid', this.device.uuid);
        }
        else {
            formData.append('uuid', __WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].test_uuid);
        }
        this.apiService.runPost('subscribe.php', formData).then(function (result) {
            _this.responseData = result;
            if (_this.responseData.status == 'ok') {
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].deviceInfoKey, { 'uuid': _this.responseData.uuid, 'email': _this.subscribeForm.value.email });
                _this.showSubmitButton = false;
                _this.response_text = __WEBPACK_IMPORTED_MODULE_7__services_german_texts__["a" /* GermanTexts */]['profile-success-message'];
                setTimeout(function () {
                    if (_this.callBackPage == 'none') {
                        // despliega la vista de de instrucciones
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__slider_slider__["a" /* SliderPage */]);
                    }
                    else if (_this.callBackPage == 'favorites') {
                        _this.navCtrl.pop();
                        var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__favorites_favorites__["a" /* FavoritesPage */], { 'showSave': true });
                        profileModal.present();
                    }
                }, 5000);
            }
            else {
                var error = __WEBPACK_IMPORTED_MODULE_7__services_german_texts__["a" /* GermanTexts */]['profile-error-message'] + ': ';
                if (_this.responseData.emailError != 'ok') {
                    error += _this.responseData.emailError;
                    _this.errorEmailClass = 'error';
                }
                if (_this.responseData.nameError != 'ok') {
                    error += _this.responseData.nameError;
                    _this.errorNameClass = 'error';
                }
                if (_this.responseData.genderError != 'ok') {
                    error += _this.responseData.genderError;
                    _this.errorGenderClass = 'error';
                }
                if (_this.responseData.dateOfBirthError != 'ok') {
                    error += _this.responseData.dateOfBirthError;
                    _this.errorDateClass = 'error';
                }
                _this.response_text = error;
            }
            // TODO: poner success y desplegar pagina principal
        }, function (result) {
            _this.response_text = __WEBPACK_IMPORTED_MODULE_7__services_german_texts__["a" /* GermanTexts */]['profile-error-message'];
        });
    };
    SubscribePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subscribe',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\subscribe\subscribe.html"*/'<!--\n  Generated template for the SubscribePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="bar">\n    <button ion-button menuToggle end class="button button-clear">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <div class="logo"></div>\n    </ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Your device is offline</ion-item>\n</ion-header>\n\n\n<ion-content padding class="home center">\n\n  <div class="list card cardprogram">\n    <ion-item>\n\n        <h2 padding>Registrierung</h2>\n\n    </ion-item>\n\n    <div padding class="item item-body">\n      <form [formGroup]="subscribeForm" (ngSubmit)="attemptSubscribe()">\n        <ion-list>\n          <label>\n            <p class="lorems center-forced">This information is used by our team to serve you better. You will only need to introduce it one single time</p>\n          </label>\n          <ion-label class="item-input contact" [ngClass]="errorNameClass">\n            <ion-input type="text" placeholder="Name:" formControlName="name" value="{{ name_value }}"></ion-input>\n          </ion-label>\n          <ion-label class="item-input contact" [ngClass]="errorEmailClass">\n            <ion-input type="email" placeholder="Email"  autocapitalize="none" formControlName="email" value="{{ email_value }}"></ion-input>\n          </ion-label>\n          <ion-item class="item-input contact" [ngClass]="errorGenderClass">\n            <ion-label class="item-input contact">Gender</ion-label>\n              <ion-select formControlName="gender" >\n                <ion-option value="f">Female</ion-option>\n                <ion-option value="m">Male</ion-option>\n              </ion-select>\n          </ion-item>\n          <ion-item class="item-input contact select" [ngClass]="errorDateClass">\n            <ion-label class="item-input contact" [ngClass]="errorGenderClass">Birthdate</ion-label >\n            <ion-datetime [max]="maxDateOfPicker" displayFormat="MMM DD, YYYY" pickerFormat="YYYY-MM-DD" formControlName="birthDate"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <button type="submit" ion-button *ngIf="showSubmitButton" [disabled]="!subscribeForm.valid" class="button-contact button-calm">Senden</button>\n          </ion-item>\n        </ion-list>\n        <div padding>\n          {{ response_text }}\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\subscribe\subscribe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__["a" /* APIServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */]])
    ], SubscribePage);
    return SubscribePage;
}());

//# sourceMappingURL=subscribe.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GermanTexts; });
var GermanTexts = {
    "back": "Rückkehr",
    "culture": "gr",
    "help": "<a class=\"item-content\" ng-href=\"#/app/help\" href=\"#/app/help\"> HILFE </a>",
    "contact-us": "<a class=\"item-content\" ng-href=\"#/app/contactus\" href=\"#/app/contactus\"> KONTAKTIEREN SIE UNS </a>",
    "contact-us-text": "KONTAKTIEREN SIE UNS",
    "remaining-time": "Verbleibende Zeit",
    "running-time": "Laufzeit",
    "get-in-touch": "Setzen Sie sich mit uns in Verbindung, indem Sie das folgende Formular ausfüllen. <br/>Oder kontaktieren Sie uns unter <a href=\"mailto:support@healinghouse.life\"> support@healinghouse.life </a>",
    "remove-program": "Programm entfernen",
    "time-expire-text": "Ihre Routine ist vorbei, hoffe, dass Sie sich heute gut fühlen",
    "fav-title": "MEINE FAVORITEN",
    "add-favorite": "FÜGEN SIE DIESE ROUTINE HINZU",
    "add-favorites": "Fügen Sie diese Favoriten hinzu",
    "favorite-routines": "Lieblingsroutinen",
    "my-favorites": "Meine Favoriten",
    "loading": "Wird geladen",
    "choose": "Wählen",
    "yes": "Ja",
    "cancel": "Abbrechen",
    "january": "Januar",
    "february": "Februar",
    "march": "März",
    "april": "April",
    "may": "Mai",
    "june": "Juni",
    "july": "Juli",
    "august": "August",
    "september": "September",
    "october": "Oktober",
    "november": "November",
    "december": "Dezember",
    "are-you-sure-program": "Möchten Sie dieses Programm wirklich entfernen?",
    "are-you-sure-routine": "Sind Sie sicher, dass Sie diese Routine entfernen wollen?",
    "latest-routines": "Neueste Routinen",
    "connect-favorites-text": "Verbinden Sie das Gerät mit Ihren bevorzugten Routinen",
    "name-Text": "Name:",
    "message-text": "Nachricht",
    "send-text": "Senden",
    "sent-text": "Gesendet",
    "home-title": "HOME",
    "help-title": "HILFE",
    "contact-title": "KONTAKTIERE UNS",
    "slider-title": "ANLEITUNG",
    "email-success-message": "Ihre Nachricht wurde gesendet! Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen",
    "email-success-title": "Gesendet",
    "email-error-message": "Beim Senden der E-Mail ist ein Fehler aufgetreten",
    "email-error-title": "Nachricht konnte nicht gesendet werden",
    "independent-programs": "UNABHÄNGIGE PROGRAMME",
    "register-login": "<a class=\"item-content\" ng-href=\"#/app/login\" href=\"#/app/login\"> REGISTRIEREN / ANMELDEN </a> ",
    "forgot-password": "Passwort vergessen",
    "forgot-password-link": "<a class=\"item-content\" ng-href=\"#/app/forgotpassword\" href=\"#/app/forgotpassword\"> VERGESSEN </a> ",
    "dont-worry": "Mach dir keine Sorgen",
    "introduce-email": "Stellen Sie Ihre E-Mail unter Ihrem Konto ein",
    "recover-password": "Passwort wiederherstellen",
    "register": "REGISTRIEREN",
    "register-link": "<a class=\"item-content\" ng-href=\"#/app/createaccount\" href=\"#/app/createaccount\"> REGISTRIEREN </a>",
    "password": "Passwort",
    "six-chars-min": "Mindestens 6 Zeichen",
    "male": "Mann",
    "female": "Weiblich",
    "please-create-account": "Bitte erstellen Sie ein Konto",
    "create-account": "Konto erstellen",
    "please-login": "Bitte melden Sie sich mit Ihren Kontoinformationen an",
    "please-pair": "BITTE PAAR DEINEN MYMAT",
    "activate-wifi": "Schritte zum Pairing Ihres MyMat",
    "activate-wifi-1": "1. Schalte dein MyMat ein",
    "activate-wifi-2": "2. Navigiere auf deinem Gerät zu deinen WLAN-Einstellungen",
    "activate-wifi-3": "3. Verbinden Sie das WLAN Ihres Geräts mit Ihrem MyMat-Netzwerk",
    "activate-wifi-4": "4. Ist einmal verbunden, kehren Sie zur MyMat-App zurück",
    "start-routine": "STARTROUTINE",
    "battery-power": "  ",
    "coil": "Spule",
    "start-your-routine": "STARTEN SIE IHRE ROUTINE",
    "no-detect-1": "Wir konnten Ihr MyMat nicht finden",
    "no-detect-2": "Bitte folgen Sie den Schritten, um dies zu tun",
    "email-sent": "Eine E-Mail mit Anweisungen zum Zurücksetzen Ihres Passworts wurde gesendet",
    "missing-email": "Fehlende Email",
    "name-text": "Name",
    "first-name-text": "Vorname",
    "last-name-text": "Nachname",
    "profile": "Dein Profil",
    "date-birth": "Geburtsdatum",
    "profile-login": "<a class=\"item-content\" ng-href=\"#/app/createaccount\" href=\"#/app/createaccount\"> PROFIL </a>",
    "offline-message": "Bitte verbinden Sie Ihr Gerät mit dem Internet",
    "Offline-title": "Gerät OFFLINE",
    "register-error-message": "Fehler beim Verbinden mit dem Hauptserver. Bitte versuchen Sie es später noch einmal",
    "register-error-title": "Verbindung zum Server konnte nicht hergestellt werden",
    "tap-program": "<label>Tippen Sie auf das Programm, das Sie zur Routine hinzufügen möchten. Tippen die Info-Taste, um mehr zu erfahren</label>",
    "welcome": "Willkommen bei MyMat App.",
    "add-program": "Hinzufügen",
    "tap-bubble": "TAP A BUBBLE (+) HINZUFÜGEN",
    "run-routine": "LASS DIESE ROUTINE LAUFEN",
    "clean-routine": "DIESE ROUTINE REINIGEN",
    "program-kits": "Programm-Kits",
    "popular-routines": "Unsere beliebtesten Routinen",
    "basic": "BASIC <br> <br>",
    "business-traveler": "BUSINESS &<br/>REISEN",
    "family-kit": "FAMILIE",
    "athlete": "SPORT",
    "spa-wellness": "SPA & WELLNESS",
    "stress-relief": "STRESS <br> BEFREIUNG",
    "senior-upper": "SENIOR",
    "chakra-balancing": "CHAKRAS",
    "elements-meridians": "ELEMENTE & <br> MERIDIANE",
    "petss": "HAUSTIERE S",
    "petsx": "HAUSTIERE X",
    "programs": "PROGRAMME",
    "continue": "Weiter",
    "profile-text": "Registrierung",
    "one-time-profile-text": "This information is used by our team to serve you better. You will only need to introduce it one single time",
    "gender-text": "Gender",
    "birthdate-text": "Birthdate",
    "male-text": "Male",
    "female-text": "Female",
    "button-send": "Senden",
    "button-save": "Sparen",
    "profile-error-message": "There's been an error saving your profile",
    "profile-success-message": "Your profile have been successful saved",
    "offline-device-text": "Your device is offline",
    "offline-device-text-2": "There's been an error communicating your device with our services. Please make sure it's online",
    "first-chakra-upper": "WURZEL-ZENTRUM",
    "second-chakra-upper": "SAKRAL-ZENTRUM",
    "third-chakra-upper": "SOLAR-PLEXUS-ZENTRUM",
    "fourth-chakra-upper": "HERZ-ZENTRUM",
    "fifth-chakra-upper": "HALS-ZENTRUM",
    "sixth-chakra-upper": "STRIN-ZENTRUM",
    "seventh-chakra-upper": "SCHEITEL-ZENTRUM",
    "help-text": "HILFE",
    "help-text1": "Woher weiß ich, welche Programme ich wählen soll?",
    "help-text2": "Es ist immer gut, mit dem Ausbalancieren des Systems zu beginnen. Dies sind einige Möglichkeiten, wie Sie das mit beginnen können:Energiebilanzierung, E-Smog, Freude, Vitalität <br> <br> Wenn Sie Ihr Schlafmuster verbessern möchten - wählen Sie: <br> Energiebilanz, E-Smog, Relax, Schlaf <br> <br> If Sie möchten am Morgen etwas mehr Energie haben: <br> Energieausgleich, Energie-Booster, Konzentration (und jedes Programm, das mit einem Problem in Verbindung steht, mit dem Sie es zu tun haben - wie Schmerzen, Muskel, Gelenke, Kopfschmerzen usw.) <br> <br> Eine vollständige Liste der Programme und deren Verwendung bezüglich der Symptome finden Sie in der Bedienungsanleitung, die im Lieferumfang enthalten ist oder kostenlos online verfügbar ist. ",
    "help-text3": "Welche Programme sollte ich am Abend vermeiden? ",
    "help-text4": "Wenn Sie eine gute Nachtruhe haben wollen, ist es besser, Ihren Organismus nicht übermäßig zu stimulieren. Wenn Sie daran gewöhnt sind, abends Kaffee zu trinken und trotzdem schlafen zu können, können Sie alle Programme verwenden, aber wenn Sie empfindlicher sind - sollten Sie vor dem Schlafengehen nicht die folgenden Programme anwenden: Kreislauf, Immunsystem, Nebennieren, Erschöpfung, Konzentration und Energie Booster ",
    "help-text5": "Wie beeinflussen elektromagnetische Felder meinen Körper? ",
    "help-text6": "Alles in unserem Körper ist elektrisch, unsere Zellen kommunizieren mit elektromagnetischen Frequenzen, unser Herz erzeugt mit jedem Schlag elektromagnetische Wellen, unser Nervensystem kommuniziert, wenn Neuronen über Synapsen auf elektromagnetische Signale reagieren. In diesem Sinne können wir verstehen, wie externe magnetische, elektrische und elektromagnetische Felder mit jedem Aspekt unseres Körpers reagieren. Indem wir spezifische Frequenzen mit niedriger Intensität regulieren, können wir genau auswählen, worauf wir reagieren wollen, indem wir auf bestimmte Zellen, Organe und Gewebe einwirken. ",
    "help-text7": "Wie hilft mir die Behandlung auf zellulärer Ebene? ",
    "help-text8": "Durch das Aufladen von Magnetfeldern in der Umgebung von Zellmembranen öffnen sich Kanäle für eine bessere Nährstoffdurchdringung. Das Öffnen der Kanäle fördert auch eine einfachere Abfallbeseitigung und stellt die korrekte Zellfunktion effizient wieder her. Ein effizientes System von Zellen schafft effizientes Gewebe, das sich zu Organen zusammensetzt. Die Wiederherstellung der richtigen Funktion von der zellularen Ebene bringt vorteilhafte Langzeitwirkungen auf alle verwandten Probleme und verbessert das allgemeine Wohlbefinden. Eine gesunde Zellfunktion verringert auch den Bedarf an Zellersatz, verlangsamt Alterungsprozesse und Energieverschwendung. ",
    "help-text9": "Kann die PEMF-Therapie mich vor zukünftigen Krankheiten schützen? ",
    "help-text10": "Effektiv arbeiten bei systematische Ebene wird die Möglichkeiten für die Entwicklung von Krankheiten verringern. Krankheiten beginnen auf zellulärer Ebene und Verletzungen müssen auf zellulärer Ebene beginnen zu heilen. Durch die Verwendung von gepulsten elektromagnetischen Frequenzen kann die allgemeine Zirkulation verbessert werden, wodurch Reparationsprozesse beschleunigt werden. Durch die Verbesserung der allgemeinen zellulären Gesundheit brechen sie weniger häufig ab. Gesunde Operationszellen beschleunigen die Rekuperation und gleichen körperliche Funktionen aus. ",
    "help-text11": "Sind mir keine Magnetfelder schlecht? ",
    "help-text12": "Der MyMat hat einen Frequenzbereich zwischen 1Hz bis 200kHz und Die EMF-Stärke überschreitet 10 Mikro-Tesla pro Kanal nicht. Der MyMat kann aufgrund seiner 4 Antennen bis zu 4 Kanäle gleichzeitig betreiben, also maximal 40 Mikro Tesla. Magnetfelder außerhalb der tiefen und extrem niedrigen Frequenzen wie Mikrowellen-, Infrarot-, Radio- und Ultraviolettfrequenzen haben unterschiedliche nachteilige Auswirkungen auf unsere Zellen und unseren Körper. Der größte Teil unseres Expositionsrisikos stammt von höheren Frequenzen wie Stromleitungen und Handys, die täglich an unseren Köpfen angeschlossen sind. Diese Frequenzen stellen höhere Risiken dar, da wir ständig mit ihnen konfrontiert sind und sie können Gewebeschäden auslösen, die Zellfunktion verändern und allgemeine zelluläre Schäden verursachen. Es ist praktisch unmöglich, ein Leben zu führen, das diese Frequenzen vermeidet, sie sind überall und dringen in alles ein. Wir können E-Smog nicht entkommen, aber wir können das MyMat verwenden, das mehrere Programme hat, die helfen können, schädliche Effekte von all unseren ständigen elektronischen Bombardements zu reduzieren, indem wir Frequenzen hinzufügen, die unseren Körper im Gleichgewicht halten und die gesunden, natürlichen Frequenzen erhalten. </ p> ",
    "help-text13": "Wird die PEMF-Therapie meine Medikamente ersetzen? ",
    "help-text14": "Die Therapie mit den gepulsten elektromagnetischen Frequenzen kann das allgemeine Wohlbefinden signifikant verbessern und viele negative Symptome verringern .. Es kann neben Behandlungen und Medikamenten verwendet werden, um die Ergebnisse zu verbessern. Es ist wichtig, mit medizinischen Fachleuten zu sprechen, bevor irgendwelche Behandlungen oder Medikamente ersetzt werden. Sobald ein richtiger Plan erstellt und Ergebnisse gesehen werden, ist es möglich, Behandlungen oder Medikamente zu reduzieren oder zu beseitigen. Fragen Sie immer nach medizinischen Ratschlägen oder Konsultationen, bevor Sie bestehende Behandlungen ändern oder ersetzen. </ p> ",
    "help-text15": "Wie beeinflussen elektromagnetische Felder meinen Körper? ",
    "help-text16": "Alles in unserem Körper ist elektrisch, unsere Zellen kommunizieren mit elektromagnetischen Frequenzen, unser Herz erzeugt elektromagnetische Wellen mit Jeder Schlag kommuniziert unser Nervensystem, wenn Neuronen über Synapsen auf elektromagnetische Signale reagieren. In diesem Sinne können wir verstehen, wie externe magnetische, elektrische und elektromagnetische Felder mit jedem Aspekt unserer",
    "help-text23": "Könnten Magnetfelder eine Überdosierung verursachen?",
    "Help-text24": "Die MyMat arbeitet mit gepulsten Magnetfeld von sehr geringer Intensität eine gesunde Zelle in idealer Kapazität arbeitet, so dass Sie keine Notwendigkeit für mehr Energie und können nicht mehr Energie akzeptieren, so diese Frequenzen ignorieren .. Eine beschädigte oder defekte Zelle kann einen Teil dieser Energie absorbieren, aber es ist unmöglich, sie zu überlasten, da keine Möglichkeit besteht, mehr Energie zu speichern, als benötigt wird. </ P> ",
    "help-text25": "Was sind einige der grundlegenden positiven Wirkungen, die PEMFs auf meinen Körper haben werden? </ div>",
    "help-text26": "Verbesserung der Gewebeheilung<br>Schmerzreduktion<br>Energie steigern<br>Verbessere den Schlaf <br>Es macht das Weichgewebe flexibler <br>Stimulation Meridiana <br>Senkung des Blutdrucks<br>Gerinnungsfaktoren verbessern<br>Reduzierte Arthritis Aufnahme von<br>Immunsystem Stimulation<br>Entgiftung<br>Helfen Sie der nervösen Funktion <br>Verbesserung der Nährstoffaufnahme<br>Reduktion der Muskelspannung",
    "addiction-upper": "SUCHT",
    "addiction-description": "• Ergänzend bei Suchtbehandlungen. • Zur Abgewöhnung von Zigaretten-, Alkohol- oder Dorgenkonsum. • Mindert die Nebenwirkungen bei Entzugserscheinungen. Zusatzprogramme: Entgiftung,  E-smog, Nebennieren, Frustration, Freude, Friede, Entspannung,  Erde-Element, Wasser-Element, Metall-Element, Leber-Meridian, Gallenblase-Meridian, Dickdarm-Meridian, Herz-Meridian, Nieren-Meridian, 1. und 2.  Chakra",
    "adrenal-gland-upper": "NEBENNIEREN",
    "adrenal-gland-description": "• Unterstützt die Erholung bei starker Erschöpfung. • Bei Dauer-Müdigkeit. • Unterstützend bei Hormon-Ungleichgewicht. • Als Ergänzungs-Behandlung bei Allergien und Autoimmun-Problemen. Zusatzprogramme: Rückenschmerzen, Erschöpfung, Lebensfreude, Energie-Spender, E-Smog, Wasser-Element, Wirbelsäule (Fehlausrichtungen der Wirbelsäule können Nierenstörungen begüstigen), 1. und 2. Chakra",
    "anti-aging-upper": "ANTI-AGING",
    "anti-aging-description": "• Anti-aging Programm um die Bio-Kommunikationsaktivität im Organismus aufrecht zu erhalten. • Hält den Körper in Form. • für den erfolgreichen Abtransport von Stoffwechselabfallprodukten. • Verringert die tägliche körperliche und geistige Stressladung. Zusatzprogramme: Knochen, Energie-Ausgleich, Mineral-Stoffwechsel, Bindegewebe, Elemente, Meridiane, 1. – 2. und 7. Chakra",
    "auditory-upper": "GEHÖR",
    "auditory-description": "• Ergänzt alle Behandlungen bei Störungen des Gehör- und Gleichgewichtsystem. • Vorbeugende Anwendung zur Beibehaltung der Hörqualität. • Ergänzungsbehandlung bei chronischen Gehörkanal- und Mittelohr-Entzündungen. • Anwenden bei lautem Arbeitsumfeld als Prävention. Zusatzprogramme: Kreislaufsystem, Lympsystem, Atmungssystem. Nebenhöhlen/Stirnhöhlen, Entgiftung, Nieren-Meridian, Leber-Meridian, Wasser-Element, 6. Chakra",
    "backache-upper": "RÜCKENSCHMERZEN",
    "backache-description": "• Vorbeugung und Minderung von Rückenschmerzen. • Unterstützend bei Wirbelsäulen-Therapie und Bandscheiben-Vorfällen. •  Lindert Schmerzen im Lendenbereich (Hexenschuss). • Lindert Muskelkater nach körperlicher Anstrengung. • Unterstützt die Behandlung von Rückenschmerzen, die Hand- und Armbewegungen blockieren. • Zusatzprogramme: Verdauung, Wirbelsäule, Nacken/Schulter, Muskelgewebe, Nerven, Frustration, Freude, Wasser-Element, Nieren-Meridian, Harnblase-Meridian, Dickdarm-Meridian, 1. und 2. Chakra",
    "bones-upper": "KNOCHEN",
    "bones-description": "• In der Rehabilitationsperiode nach Knochenbrüchen und Knochenkrankheiten. • Optimiert die Stoffwechselfunktionen des Knochengewebes. • Schmerzlindernd bei Beeinträchtigung der Stoffwechselfunktionen des Knochengewebes. • Ergänzt knochenstärkende Therapien. • Unterstützt die Kalziumaufnahme in die Knochenzellen (beugt Entkalkung vor). • Schmerzlindernd bei Knochenwachstum bei Kinder. Zusatsprogramme: Bindegewebe, Nebennieren, Schilddrüsen, Mineral-Stoffwechsel-Störung, Anti Aging, Verdauungssystem, Metall-Element, Wasser-Element, Dickdarm-Meridian, Leber-Meridian, Nieren-Meridian, 1. Chakra",
    "child-developement-upper": "KINDLICHE ENTWICKLUNG",
    "child-developement-description": "• Harmonisiert die geistige und körperliche Entwicklung bei Kindern. • Stimmuliert die spezifischen Gewebe bei der Entwicklung. • Verbindung mit der Erde, Erdung. Wichtig für Kinder die in städtischen Gebieten leben. Zusatzprogramme: Energie-Ausgleich, Knochen, Muskeln, Nervensystem, E-Smog, Freude, Frustration, Elemente, Perikardium-Meridian, Milz/Bauchspeicheldrüse-Meridian, Chakras",
    "circulatory-system-upper": "HERZ-KREISLAUFSYSTEM",
    "circulatory-system-description": "• Unterstützend bei Kreislaufproblemen. • Bei Neigung zu Ödemen in den Extremitäten. • Ergänzt die Behandlung von Arteriosklerose. • Zusatzprogramme: Nebennieren, Entspannung, Konzentration, Gedächtnis, Feuer-Element, Herz-Meridian, Perikardium-Meridian, 1. und 4. Chakra",
    "concentration-upper": "KONZENTRATION",
    "concentration-description": "• Regt das Gedächtnis an steigert/verbessert Problemlösungen und Sprachgeschick. • Mobilisiert die Energiereserven und fördert die Intuition. Geschäftstreffen und Prüfungen. Zusatzprogramme: Energie-Ausgleich, Anti Aging, Nebennieren, Darmflora, Gedächtnis, Milz,  Bauchspeicheldrüse-Meridian, Nieren-Meridian, Herz-Meridian, 1. – 3. und 6. Chakra",
    "connective-tissue-upper": "BINDEGEWEBE",
    "connective-tissue-description": "• Beugt Verletzungen vor bei überstrapaziertem Bindegewebe bei Leuten mit Bindegewebsschwäche (z.B. anfällig eine Hernie zu entwickeln, Krampfadern). • Wichtig bei x-welchem Anti-Aging Programm. Bessere Verfügbarkeit der Nährstoffe auf das Organ System. Zusatzprogramme:  Anti-Aging, Nebennieren, Verdauungssystem, Mineralien-Stoffwechsel-Störung, Gelenke, Muskeln, Wasser-Element, Holz-Element, 1., 3. und 6. Chakra",
    "constipation-upper": "VERSTOPFUNG",
    "constipation-description": "• Bei akuter und chronischer Verstopfung. Zusatzprogramme: Verdauungssystem, Mineralien-Stoffwechsel-Störung, Darmflora, Gallenblase-Meridian, Dickdarm-Meridian, 1.  und 3. Chakra",
    "detoxification-upper": "ENTGIFTUNG",
    "detoxification-description": "• Unterstützt die körpereigenen Entgiftungsmechanismen. • Nützlich nach jeder Vergiftung. • Bietet Schutz beim Passivrauchen. • Unterstützend bei Rauch-, Alkohol- und Medikamenten-Entzug. • Zusatzprogramm: Verdauung, Darmflora, E-Smog, Bindegewebe, Verstopfung (sofern anwendbar), Frieden, Milz/Bauchspeicheldrüse-Meridian, Leber-Meridian, Nieren-Meridian, Dickdarm-Meridian, Lungen-Meridian, 2. Chakra  Bemerkung: NICHT ANWENDEN IN DER SCHWANGERSCHAFT!",
    "diarrhea-upper": "DURCHFALL",
    "diarrhea-description": "• Bei akutem und chronischem Durchfall. Zusatzprogramme: Verdauungssystem, Entgiftung, Darmflora, Magen-Meridian, Dünn- und Dickdarm-Meridian, Feuer-Element, 1. und 3. Chakra",
    "digestive-system-upper": "VERDAUUNGSSYSTEM",
    "digestive-system-description": "• Verdauungsbeschwerden. • Stimmuliert die Organe des Verdauungssystems. • Fördert die Aufnahme von Vitaminen und Nahrungsergänzungsmittel. • Unterstützt das Verdauungssystem bei schwer verdaulichen Lebensmitteln  (Müdigkeit nach der Nahrungsaufnahme). • Unterstützend bei langfristiger pharmazeutischer Behandlung, vermindert Nebenwirkungen im Verdauungstrakt. Zusatzprogramme: Darmflora, Entgiftung, Frustration, Magen-Meridian, Milz/Bauchspeicheldrüse-Meridian, Dünndarm-Meridian, Dickdarm-Meridian, Gallenblase-Meridian, Erde-Element, Metal-Element, 3. Chakra",
    "discernment-upper": "GEDÄCHTNIS",
    "discernment-description": "• Unterstützt die Merkfähigkeit. • Steigert die Aufnahmefähigkeit für wichtige Informationen. • Unterstützt die Konzentrationsfähigkeit. • Gesteigerte Lernfähigkeit. Zusatzprogramme: Konzentration, Kreislaufsystem, Energiespender, Erde-Element, Wasser-Element, Gallenblase-Meridian, Milz/Bauschspeicheldrüse-Meridian, Herz-Meridian, 5., 6. und 7. Chakra",
    "e-smog-upper": "ELEKTRO-SMOG",
    "e-smog-description": "• Für Leute die in engem Kontakt mit elektronischen und elektrischen Geräten stehen. • Bei Handy-, Mikrowellen- und Telefonbestrahlung (v.a. in dicht besiedelten Gebieten). • Mindestens zweimal pro Woche anwenden!. • Günstig für Heiler/innen: Reinigt die Aura von schweren negativen Energien. Zusatzprogramme: Energie-Ausgleich, Milz/Bauchspeicheldrüse-Meridian, Dreifacher-Erwärmer-Meridian, Alle Chakra Programme",
    "energy-balancing-upper": "ENERGIEHAUSHALT",
    "energy-balancing-description": "• Täglich für das allgemeine Wohlbefinden. • Normalisiert organische Unter- oder Überfunktion. • Zum Ausgleich der Koordinationsfähigkeit. • Vorbeugend bei häufigen Kopfschmerzen. • Bei kalten Gliedermassen (Extremitäten). Zusatzprogramme: E-smog, Frustration, Freude, Nieren-Meridian, Wasser- Element, 1. und 4. Chakra",
    "energy-booster-upper": "ENERGIESCHUB",
    "energy-booster-description": "• Geistiger Antrieb in Stress-Situationen. • Gesteigerte Leistungsfähigkeit im Sport und bei der Arbeit. • Mobilisiert die Energiereserven und verbessert die Koordination. • Als Vorbereitung auf einen Wettkampf, ein Geschäfts-Meeting und auf Prüfungen. Klärt den Geist. Zusatzprogramme: Energie-Ausgleich, Anti-Aging, Nebennieren, Schilddrüsen, Nieren-Meridian, Wasser-Element, Leber-Meridian, Kreislauf, Atmungssystem, 1. – 3. und 6. Chakra",
    "exhaustion-upper": "ERSCHÖPFUNG",
    "exhaustion-description": "• Genesung von extremer Müdigkeit und Erschöpfung. • Löst innere Informationsblockaden. • Mindert Unwohlsein aufgrund von mangelnder Durchblutung. Zusatzprogramme:  Nebennieren, Schilddrüsen, Energie-Spender, Frustration, Kreislauf, Freude, Leber-Meridian, Herz-Meridian, Perikard-Meridian, Feuer-Element, 1. , 2.  und 3.  Chakra",
    "eyesight-upper": "SEHVERMÖGEN",
    "eyesight-description": "• Hilfreich bei müden Augen. • Erleichtert die Entspannung der Augenmuskeln. • Vorbeugend gegen Probleme und Krankheiten der Augen und des Sehvermögens. Zusatzprogramme: Holz-Element, Dreifacher-Erwärmer-Meridian, Nieren- und Leber-Meridian, 6. Chakra",
    "female-upper": "FRAUEN SPEZIFISCH",
    "female-description": "• Unterstützt das Fortpflanzungssystem sowie die Geschlechtsorgane. • Reguliert den Menstruationszyklus  und erhöht das Wohlbefinden vor und während der Menstruation. •  Bei häufig vorkommenden Zysten. • Unterstützt PMS Symptome (Prämenstruelles Syndrom). • Zur Ergänzung bei Inkontinenz-Behandlungen. • Für Männer mit starker Yin- Konstitution. Zusatzprogramme: Freude, Frustration, Friede, Harnsystem, Kreislaufsystem, Milz/Bauchspeicheldrüse-Meridian, Harnblase-Meridian, Leber-Meridian, 1. und 2. Chakra",
    "flu-upper": "GRIPPE",
    "flu-description": "• Stimmuliert das Immunsystem. • Stimmuliert den Heilungsprozess bei Grippe, Bronchitis, Mandelentzündung, Lungenentzündung und Darmgrippe. • Beginne mit diesem Programm bei den ersten Grippesymptomen und mehrere Tage nachdem die Syptome verschwunden sind. Zusatzprogramme: Immunsystem, Atmungssystem, Nebenhöhlen, Verdauungssystem,  Smog, Energie-Ausgleich, Frustration, Freude,  Erde-Element, Dickdarm-Meridian, Lungen-Meridian, 3., 4.  und 5.  Chakra",
    "glucose-metabolic-disorders-upper": "ZUCKER-STOFFWECHSELSTÖRUNG",
    "glucose-metabolic-disorders-description": "• Komplementär-Behandlung bei Zucker-Stoffwechselstörung – (Zucker, Kohlenhydrate). • Stimmuliert die bioinformatische Verbindung zur Bauchspeicheldrüse. • Vorteilhaft bei einer bestehenden Insulinresistenz. • Komplementärbehandlung bei Übergewicht, Depression, Type 1 und  2 Diabetes. Zusatzprogramme: Energie-Ausgleich, Freude, Frustration, Schilddrüse, Dreifacher-Erwärmer-Meridian, Milz/Bauchspeicheldrüse-Meridian, 1., 2., 3. und 4.",
    "hair-growth-upper": "HAARWACHSTUM",
    "hair-growth-description": "• Stimmuliert das Haarwachstum. • Verstärkt die Haarwurzel bei Haarausfall. • Zur Restaurierung bei beschädigtem Haar und Kopfhaut. • Als Ergänzungsbehandlung bei Haarausfall nach Chemotherapie. Zusatzprogramme: Entgiftung, Schilddrüse, Darmflora, Metall-Element, Magen-Meridian, Nieren-Meridian, Harnblase-Meridian, 2. und 6. Chakra",
    "headache-upper": "KOPFSCHMERZ",
    "headache-description": "• Bei Kopfschmerzen. Zusatzprogramme: Frustration, Nacken, Sehvermögen, Energie-Ausgleich, Nasen-Nebenhöhlen, Gehör, Darmflora, Verdauung, Verstopfung oder Bluthochdruck wenn anwendbar, Dickdarm-Meridian, Magen- Meridian, Leber-Meridian, Gallenblase-Meridian, 3. und 6. Chakra",
    "heart-function-upper": "HERZTÄTIGKEIT",
    "heart-function-description": "• Unterstützend bei Herzrythmus-Störungen. • Begünstigend in Stress-Situationen und Engegefühl in der Brust. Zusatzprogramme: Kreislauf, Bindegewebe, Energie-Ausgleich, Entspannung, Friede, Nervensystem, Feuer-Element, Herz-Meridian, 1., 3. und 4. Chakra",
    "hemorrhoids-upper": "HÄMORRHOIDEN",
    "hemorrhoids-description": "• Hemmt Hämorrhoiden-Syptome. • Ergänzt Behandlungen bei Mastdarm-Problemen. • Mindert Rektumschmerzen bei Verstopfung. Zusatzprogramme: Verstopfung, Kreislaufsystem, Bindegewebe, Energie-Ausgleich, Entspannung, Wasser-Element, Dreifacher-Erwärmer-Meridian, Dickdarm-Meridian, 1. Chakra",
    "hypertension-upper": "BLUTHOCHDRUCK",
    "hypertension-description": "• Ergänzt die Behandlung von Bluthochdruck. Zusatsprogramme:  Nebenniere, Kreislauf, Feuer-Element, Nieren-Meridian, Harnblase-Meridian, Pericardium-Meridian, Herz-Meridian, 1., 2., 4. und 7. Chakra",
    "immune-system-upper": "IMMUNSYSTEM",
    "immune-system-description": "• Fördert und optimiert die Funktion des Immunsystems. • als Zusatztherapie während einer viralen und/oder bakteriellen Erkrankung. • Fördert die Aufnahme von Antioxidantien und Vitaminen. • Stimuliert den Verdauungstrakt. Zusatzprogramme:  Lymphsystem, Entgiftung, Darmflora, Erschöpfung, Nebenniere, Frustration, Friede, Freude, 2. und 3. Chakra",
    "injury-upper": "VERLETZUNG",
    "injury-description": "• Stimuliert und beschleungt Heilungsprozesse von beschädigtem Gewebe. • Reduziert die Narbenbildung. • Hoch-wirksam nach Operationen. Zusatzprogramme: Haut, Knochen, Bindegewebe, Immunsystem, Zucker-Stoffwechsel-Störung, Kreislauf, Mineral-Stoffwechsel, Erde-Element, Wasser-Element, Holz-Element, 1. – 2. und 3. Chakra",
    "intestinal-flora-upper": "DARMFLORA",
    "intestinal-flora-description": "• Ergänzt die Anti-Pilzbehandlung des Verdauungssystems. • Harmonisiert die Darmflora, insbesondere bei Allergien. • Fördert die Wirksamkeit von speziellen Ernährungsweisen und optimiert die Lebenskraft. • Hilfreich für Menschen mit chronischer Dysbiose (Ungleichgewicht zwischen den guten und schlechten Darmbakterien). • Anregung des Immunsystems. • Als Ergänzungstherapie bei Blutarmut, Ekzemen, Parasiten und Pilzen. Zusatzprogramme: Verdauungssystem, Entgiftung, Mineral-Stoffwechsel, Immunsystem, Wasser-Element, Erde-Element, Dick- und Dünndarm-Meridian, Magen-Meridian, 2. Chakra",
    "jet-lag-upper": "JET-LAG",
    "jet-lag-description": "• Für Wetterempfindliche Menschen. • Reduziert Jet-Leg Effekt und Schwindel. • Schnellere Anklimatisierung auf anderes Wetter/Klima und Höhenmeter. •  Mindert Kopfschmerzen ausgelöst durch hohe Höhenlagen und Wetterfronten. • Ausgleich von Beschwerden die durch Wetterfronten begünstigt werden (z.B. Anspannung, erhöhter Blutdruck, rheumatische Beschwerden, etc.). Zusatzprogramme: Verdauungssystem, Kreislaufsystem, E-smog, Energie-Ausgleich,  Feuer-Element, Erde-Element, 1.  Chakra",
    "joints-upper": "GELENKE",
    "joints-description": "• Begünstigt den Heilungsprozess bei geschädigten Gelenkfunktionen. • Lindert Beschwerden aufgrund von Gelenkentzündungen. Zusatzprogramme: Verdauungssystem, Muskelgewebe, Bindegewebe, Immunsystem,  Nieren-Meridian, Magen-Meridian, Gallenblase-Meridian, Wasser-Element, 1. , 2.  und 5.  Chakra",
    "joy-upper": "FREUDE",
    "joy-description": "• Trägt dazu bei, die Ausgeglichenheit und gute Laune in schwierigen Zeiten zu bewahren. • Verhilft zu emotionaler/mentaler Ausgeglichenheit. • Ergänzt Behandlungen gegen Depression. Zusatzprogramme: Nebenniere, Energy Booster, Frustration, Darmflora, Metall-Element, 1. – 2. – 4. und 5. Chakra",
    "low-mental-drive-upper": "STRESSBEDINGT",
    "low-mental-drive-description": "• Bei stressbedingter nervlicher Störungen der sexuellen Lebenskraft. • Bei schwachem Libido aufgrund von alltäglichen Problemen (bei neuroendokrinen Problemen, Allergien und andere Erkrankungen zusätzlich das Programm LIBIDO I anwenden) Auch Parasiten können die Ursache einer ständigen Überstimmulierung des Nervensystems sein. • Dieses Programm eignet sich bei Funktionsstörungen aufgrund von Energie-Mangel. Zusatzprogramme: Erschöpfung, Entspannung, E-Smog, Energie-Ausgleich, Friede, Freude, Energie-Spender, Frustration, Erde-Element, Metall-Element, Wasser-Element, Herz-Meridian, Pericardium-Meridian, 1., 2 und 4. Chakra",
    "low-physical-drive-upper": "KORPERLICH BEDINGT",
    "low-physical-drive-description": "• Stimmuliert das sexuelle Lustgefühl bei organischen Problemen oder fehlender Energieversorgung. • Fördert die sexuelle Kapazität. • Ergänzende Behandlung in der Gerentologie (beim älter werden). • Dieses Programm eignet sich bei Funktionsstörungen, die die Folge des Altern oder körperlicher Probleme sind. Zusatzprogramme: Anti Aging, Entgiftung, Nebenniere, Bindegewebe, Kreislaufsystem, Erschöpfung, Erde-Element, Harnblase-Meridian, Pericardium-Meridian, Herz-Meridian, 1.  und 2.  Chakra",
    "lymphatic-system-upper": "LYMPHATISCHER APPARAT",
    "lymphatic-system-description": "• Optimiert den Lymph-Kreislauf und vermindert Lymphstauung. • Erleichtert die Genesung nach infektiösen Erkrankungen. • Hemmt allergische Reaktionen. Zusatzprogramme: Kreislauf-System, Entgiftung, Immun-System, Bindegewebe, Feuer-Element, Wasser-Element, 2. Chakra",
    "male-upper": "MÄNNER SPEZIFISCH",
    "male-description": "• Für Behandlungen der männlichen Hormone, bei sexuellen Störungen und des Harnsystems betreffend zur Unterstützung der Gewebe-Stoffwechselvorgänge. • Ergänzt Behandlungen bei Inkontinenz und Prostata-Problemen. • Steigert die Libido und das Gefühl von Geborgenheit. • Bei Errektionsstörungen. • Für Frauen mit einer starken yang-Konstitution; bei schmerzhaften, schweren oder Über 7 Tage andauernde Menstruationsblutungen oder wenn ein Testosteron Ausgleich nötig ist. Zusatzprogramme: Entspannung, Kreislaufsystem, Frustration, Freude, Friede, Feuer-Element, Harnblase-Meridian, Leber-Meridian, 1. und 2. Chakra",
    "meditation-1-upper": "MEDITATION 1",
    "meditation-1-description": "• Für Meditations-Anfänger – für das Friedensgefühl",
    "meditation-2-upper": "MEDITATION 2",
    "meditation-2-description": "• Für tiefere innere Reisen während der Meditation",
    "meditation-3-upper": "MEDITATION 3",
    "meditation-3-description": "• Für die fortgeschrittene Meditationspraxis",
    "gallbladder-meridian-upper": "GALLENBLASE-MERIDIAN",
    "gallbladder-meridian-short": "GALLENBLASEN",
    "gallbladder-meridian-description": "• Harmonisiert den Gallenblase-Meridian • Ergänzende Behandlung bei Kiefergelenkserkrankung, Zahnkrankheiten und Mandeln • Hilft Entscheidungen zu treffen in schwierigen Situationen •  Unterstützend bei Überaktivität oder Zwangsstörungen •  Gegen übermässig negative Einstellung •  bei Tendez Dinge aufzuschieben • Spitzenaktivität der Gallenblase ist 23:00 – 01:00 Uhr. • Die Gallenblase ist Yang – Sie ist mit dem Yin-Organ der Leber verbunden – entspricht dem Holz-Element und Unschlüssigkeit oder Entschlusskraf. Zusatzprogramme: Holz-Element, Frustration, Freude, Leber-Meridian, 3. Chakra, Dickdarm Meridian",
    "kidney-meridian-upper": "NIEREN-MERIDIAN",
    "kidney-meridian-short": "NIEREN",
    "kidney-meridian-description": "• Steigert die Aktivität des Nieren-Meridians. • Besänftigt Bluthochdruck und Ödeme. • begünstigt die Beziehung von Knochen und Knochenmark. • vermindert Ohrensausen und ähnliche Symptome. • Bei Rastlosigkeit, Überaktivität und allgemeiner Schwäche. • Steigert die sexuelle Energie. • Spitzenaktivität der Niere ist von 17:00 – 19:00 Uhr. • Die Niere ist Yin – verbunden mit dem Yang-Organ der Blase – entspricht dem Wasser-Element und der Angstgefühle. Zusatzprogramme: Wasser-Element, Harnblase-Meridian, Dreifacher-Erwärmer-Meridian, Bluthochdruck, HörSystem, Knochen, 2. Chakra",
    "heart-meridian-upper": "HERZ MERIDIAN",
    "heart-meridian-short": "HERZ",
    "heart-meridian-description": "• Harmonisiert den Herz-Meridian. • Verhilft zur emotionalen Stabilität bei Tendenz zu manisch-depressiv. • Verbessert das Gedächtnis und steigert die Konzentration. • Verbessert das Schlafmuster und erleichtert das Einschlafen. • Spitzenaktivität des Herz is 11:00 – 13:00 Uhr. • Das Herz ist Yin – ist mit dem Yang Organ des Dünndarms verbunden – entspricht dem Feuer-Element, dem Freudegefühl und der Aufregung. Zusatzprogramme: Feuer-Element, Perikardium-Meridian, Dünndarm-Meridian und Deifacher-Erwärmer-Meridian, Schlaf, Entspannung, Freude, Frustration, 4. Chakra",
    "large-intestine-meridian-upper": "DICKDARM-MERIDIAN",
    "large-intestine-meridian-short": "DICKDARM",
    "large-intestine-meridian-description": "• Harmonisiert den Dickdarm-Meridian • Bei chronischer Disbiose (gestörtes Bakterienverhältnis der Darmflora. Mehr patologische Bakterien als gesundheitsförderne) • Verbessert das Immunsystem • Als Komplementär-Therapie bei Blutarmut, Ekzemen, Parasiten und Pilze • Bei Neigung zu negativen Gedanken und Gefühlen und für Menschen, denen es körperlich und geistig schwer fällt, loszulassen und das Vergangene hinter sich zu lassen • Spitzenaktivität des Dickdarms ist von 05:00 – 07:00 Uhr • Der Dickdarm ist Yang – verbunden mit derm Yin-Organ der Lunge – entspricht dem Metall-Element und dem Gefühl der Trauer/Kummer. Zusatzprogramme: Metall-Element, Lungen-Meridian, Dreifacher-Erwärmer-Meridian, Verstopfung, Durchfall, 1. Chakra, und 3. Chaka",
    "liver-meridian-upper": "LEBER-MERIDIAN",
    "liver-meridian-short": "LEBER",
    "liver-meridian-description": "• Harmonisiert den Leber-Meridian. • Verbessert Augen-und Nebenhöhlen-Erkrankungen. • Bei Zahnproblemen. • Lindert Migräne und Kopfschmerzen. • Reduziert generelle Koordinationsschwierigkeiten. • Für voreingenommene, ungeduldige und frustrierte Menschen. • Für festgefahrene Menschen mit Zorn/Wut/Ärger und starker Persönlichkeit. • Für Menschen, die im Leben nicht weiterkommen aufgrund fehlender Zielsetzung. • Für Menschen, die häufig zwischen 1 und 3 Uhr morgens aufwachen und dann wieder einschlafen. • Spitzenaktivität der Leber ist von 01:00 – 03:00 Uhr. • Die Leber ist Yin – verbunden mit dem Yang-Organ der Gallenblase – entspricht dem Holz-Element und den Gefühlen von Zorn/Wut und Reizbarkeit. Zusatzprogramme: Holz-Element, Gallenblase-Meridian, Optimismus, Freude, Sehkraft, Nebenhöhlen, Entspannung, Kopfschmerzen, Energy-Ausgleich, Entgiftung, 3. Chakra",
    "lung-meridian-upper": "LUNGEN-MERIDIAN",
    "lung-meridian-short": "LUNGEN",
    "lung-meridian-description": "• Synchronisiert die Lungen-Meridian-Aktivität. Für Menschen die zu Besorgnis und Kummer neigen und das Gefühl der Unterdrückung haben oder nicht genug einatmen. • Beugt häufigen Erkältungen, Grippe, Mandelentzündung und Halsschmerzen vor. • Mindert Allergie-Symptome. • Spitzenaktivität der Lunge ist von 03:00 – 05:00 Uhr• • Die Lunge ist Yin – verbunden mit dem Yan-Organ des Dickdarms – entspricht dem Metall-Element und dem Gefühl von Kummer/Angst. Zusatzprogramme: Metall-Element, Dickdarm-Meridian, Atmungssystem, Immunsystem, 4. Chakra",
    "pericardium-meridian-upper": "KREISLAUF/PERIKARDIUM MERIDIAN",
    "pericardium-meridian-short": "PERIKARDIUM",
    "pericardium-meridian-description": "• Harmonisiert den Perikardium-Meridian von übersensiblen Menschen. • Für Menschen die Schwierigkeiten haben sich anzufreunden (Anschluss finden). • Hilft seellische Erschütterungen/Traumas zu bewältigen, die verhindern gute Beziehungen aufrecht zu erhalten. • Lindert Kreislauf- und Sexualstörungen. • Spitzenaktivität ist von 19:00 – 21:00 Uhr. • Der Perikardium ist Yin – verbunden mit dem Yang-Organ des Dreifachen-Erwärmers – entspricht dem Feuer-Element. Zusatzprogramme: Dünndarm-Meridian, Feuer-Element, Dreifacher-Erwärmer-Meridian, Herz-Meridian, 3. und 4. Chakra",
    "small-intestine-meridian-upper": "DÜNNDARM MERIDIAN",
    "small-intestine-meridian-short": "DÜNNDARM",
    "small-intestine-meridian-description": "• Harmonisiert die Dünndarm-Funktion. • unterstützt die Verdauung. • verbessert die Nährstoffaufnahme. • Lindert das Gefühl von Unsicherheit und  Verwirrung. • Spitzenaktivität ist von 13:00 – 15:00 Uhr. • Der Dünndarm ist Yang – verbunden mit dem Yin Organ dem Herzt – entspricht dem Feuer-Element und dem Gefühl der Freude und der Erregung. Zusatzprogramme: Entgiftung, Durchfall, Harnsystem, Feuer-Element, Herz-Meridian und Dreifacher-Erwärmer-Meridian, 3. und 4. Chakra",
    "spleen-pancreas-meridian-upper": "MILZ MERIDIAN",
    "spleen-pancreas-meridian-short": "MILZ",
    "spleen-pancreas-meridian-description": "• Harmonisiert Milz-/Bauchspeicheldrüse-Aktivität. • Unterstützt die Aufspaltung von festen und flüssigen Nahrungsbestandteilen. • Reduziert zwanghafte Einstellung. • Unterstützend bei Entscheidungsfällungen und Durchsetzungsvermögen. • Fördert die Konzentration und das Gedächtnis. • Spitzenaktivität der Milz/Bauchspeicheldrüse ist von  9:00 bis 11:00 Uhr. • Die Milz/Bauchspeicheldrüse ist ein Yin Organ – verbunden mit dem Yang Organ dem Magen – entspricht dem Erde-Element. Zusatzprogramme: Erde-Element, Magen-Meridian, Dreifacher-Erwärmer-Meridian, VerdauungsSystem, Muskeln, KreislaufSystem, Durchfall,  2.  und 3.  Chakra",
    "stomach-meridian-upper": "MAGEN-MERIDIAN",
    "stomach-meridian-short": "MAGEN",
    "stomach-meridian-description": "• Harmonisiert den Magen-Meridian. • Gegen Aufstossen, Übelkeit oder Erbrechen. • Lindert Schläfen-Kopfscherzen. • Bei Kieferhöhlenentzündung oder Trigeminusneuralgie. • Bei chronischem Stress. • Spitzenaktivität des Magens ist von 7:00 bis 9:00 Uhr. • Der Magen ist ein Yan-Organ – verbunden mit dem Yin-Organ der Milz  – entspricht dem Erde-Element und dem Gefühl von Angst und Stress. Zusatzprogramme: Erde-Element, VerdauungsSystem, Milz-/Bauchspeicheldrüse-Meridian, Kopfschmerzen, 3. Chakra",
    "triple-warmer-meridian-upper": "DREIFACHER ERWÄRMER MER.",
    "triple-warmer-meridian-short": "DREIFACHER ERWÄRMER",
    "triple-warmer-meridian-description": "• Harmonisiert den Dreifacher-Erwärmer-Meridian bei Menschen mit Hitze- oder Kältegefühl im Bauch. • Lindert Probleme im Zusammenhang mit der Nährstoffaufnahme und erlaubt eine effiziente Aufnahme der Nährstoffe und Ausleitung der Stoffwechsel-Endprodukte. • Verbessert den Stoffwechsel. • Spitzenaktivität des Dreifachen-Erwärmer-Meridians ist von 21:00 bis 23:00 Uhr. Zusatzprogramme: Holz-Element, Erde-Element, Lungen-Meridian, Herz-Meridian, Magen-Meridian, Milz-Meridian, Dünn- und Dickdarm-Meridiane, Nieren-Meridian, Blasen-Meridian, Atmungssystem, Verdauungssystem, 4. – 6. und 7. Chakra",
    "urinary-bladder-meridian-upper": "BLASEN MERIDIAN ",
    "urinary-bladder-meridian-short": "BLASEN",
    "urinary-bladder-meridian-description": "• Harmonisiert den Harnblase-Meridian (bei trockenen Augen, Gelenke, Hals, Dickdarm oder Scheide). • Für straffe und elastische Haut. • Unterstützt Menschen, die rasch in Panik geraten. • Fördert die Fähigkeit, schwierige Lebenssituationen zu meistern. • Spitzenaktivität der Harnblase ist von 15:00 bis 17:00 Uhr. • Die Harnblase ist Yang – verbunden mit dem Yin-Organ der Nieren- entspricht dem Wasser-Element und dem Angst-Gefühl. • Zusatzprogramme: Wirbelsäule, Erschöpfung, Augen, Gelenke,  Wasser-Element, Nieren-Meridian, Dreifacher-Erwärmer-Meridian, Dickdarm- Meridian, 2. Chakra",
    "metal-element-upper": "ELEMENT METALL/LUFT/WIND",
    "metal-element-short": "METALL/LUFT/WIND",
    "metal-element-description": "• Armonisiert emotionale Verhaltensweisen des Metal-Elementes: Traurigkeit und Depression. • Als Zusatzbehandlung bei Problemen mit abnormalen Organfunktionen: Lunge, Dickdarm und Haut, welche dem Metal-Element zugeordnet werden. Zusatzprogramme:  Meridiane und Chakras",
    "water-element-upper": "ELEMENT WASSER",
    "water-element-short": "WASSER",
    "water-element-description": "• Harmonisiert das emotionale Verhalten des Wasserelements wie Stress und Angst • Als ergänzende Behandlung von Problemen, die durch abnormale Aktivität von Organen wie Niere, Blase, Knochen und Sinnesorganen wie den vom Wasserelement kontrollierten Ohren entstehen. Support-Programme: Nierenmeridian, Meridian Harnblase, Lymphsystem, Stimmung, Knochen, Intuition, Frustration, Konzentration, Erdelement",
    "earth-element-upper": "ELEMENT ERDE",
    "earth-element-short": "ERDE",
    "earth-element-description": "• harmonisiert emotionale Verhaltensweisen des Erde-Elementes solche wie Angst und Besorgnis. • Als Zusatzbehandlung bei Problemen mit abnormalen Organfunktionen. Magen, Milz, Bauchspeicheldrüse und Muskelgewebe, welche dem Erde-Element zugeordnet werden. Zusatzprogramme:  Meridiane und Chakras",
    "fire-element-upper": "ELEMENT FEUER",
    "fire-element-short": "FEUER",
    "fire-element-description": "• Stabilisiert extreme Stimmungsschwankungen. • Als Zusatzbehandlung bei Problemen mit abnormalen Organfunktionen: Herz, Dünndarm und Blutgefässe, welche dem Feuer-Element zugeordnet werden. Zusatzprogramme: Meridiane und Chakras",
    "wood-element-upper": "ELEMENT HOLZ/ÄTHER",
    "wood-element-short": "HOLZ/ÄTHER",
    "wood-element-description": "• Harmonisiert das emotionale Verhalten des Holzelements wie Wut • Als ergänzende Behandlung für Probleme, die durch abnormale Aktivität von Organen wie Leber, Blase, Gewebe, wie Sehnen und Sinnesorgane wie den durch das Holzelement kontrollierten Augen entstehen. Unterstützungsprogramme: Lebermeridian, Meridian-Gallenblase, Nerven, Muskeln, Frustration, Bindegewebe, Gelenk, Milzmeridian, Erdelement, Metallelement, Entgiftung, Frieden, 1. Chakra, 3. Chakra, 4. Chakra , 6. Chakra",
    "mineral-metabolic-activity-upper": "MINERALSTOFFWECHSEL",
    "mineral-metabolic-activity-description": "• Unterstützt die Mineral-Stoffwechseltätigkeit und optimiert dessen Aufnahme und Verwendung. • Zusatzbehandlung bei Stoffwechsel-Störungen. Zusatzprogramme:  Verdauung, Darmflora, Entgiftung, Frustration, Friede, E-smog, Feuer-Element, Dick- und Dünndarm-Meridian, Magen-Meridian, Dreifacher-Erwärmer-Meridian, 1.  und 2.  Chakra",
    "muscle-tissue-upper": "MUSKELGEWEBE",
    "muscle-tissue-description": "• Therapiert das Muskelgewebe und regt die Muskelgenesung an. • Untersützt die Regenerierung des Muskelgewebes nach kleineren Verletzungen. • Unterstützt die Behandlung bei motorischen Befindlichkeitsstörungen (z.B. nach Unfall oder nach Gehirnschlag mit Lähmungserscheinung). • Steigert die muskuläre Leistungsfähigkeit und vermindert das Verletzungsrisiko. • Unterstützend für gesunde Gelenke durch Harmonisierung der Muskel-Fehlstellung. • Bei Neigung zu Muskelschwund. Zusatzprogramme: Kreislauf-System, Nervensystem, Bindegewebe, Lymphsystem, Regeneration, Verdauungssystem, Milz-Meridian, Dünndarm-Meridian, 1.  und  7.  Chakra",
    "neck-shoulder-upper": "NACKEN-SCHULTERBEREICH",
    "neck-shoulder-description": "• Löst Verspannungen im Nacken/Schulterbereich. • Erhöht die Leistungsfähigkeit der Blutgefässe im Nacken- und Kopfbereich. Zusatzprogramme: Kreislaufsystem, Wirbelsäule, Bindegewebe, Muskeln, Nervensystem, E-Smog, Gallenblase-Meridian, Harnblase-Meridian, Dreifacher-Erwärmer-Meridian, 1. und 5.  Chakra",
    "nervous-system-upper": "NERVENSYSTEM",
    "nervous-system-description": "• Fördert die Entspannung und Regenerierung des Zentral-Nervensystems. • Unterstützt die Behandlung von entartetem Muskel-Leiden (z.B. bei Muskelschwund). • Ergänzt die Nervenzellen-Behandlung bei der Regenerierung. • Ergänzt Muskelkoordinations-Behandlungen hervorgerufen durch Abgespanntheit (z.B. schwaches Nieren-Chi, erschöpfte Nebennieren,etc.). • Ergänzt die Behandlung bei häufigen spontanen Muskelbewegungen. • Parasiten können für eine andauernde Überstimmulierung des Nervensystems verantwortlich sein. Zusatzprogramme: Leber-Meridian, Anti-Aging, Entgiftung, Mineralien-Stoffwechsel-Störung, Wirbelsäule, Dickdarm, Verletzung, 6. und 7. Chakra",
    "pain-upper": "SCHMERZ",
    "pain-description": "• Bei akuten und chronischen Schmerzen. • Bei Kopf- und Gelenkschmerzen. • Anwendung nach Traumas oder Operationen. • Mindert Schmerzen aufgrund von Krampfadern. • Bei chronischen Schmerzen ist der Therapieerfolg nach einigen Tagen der Anwendung spürbar. Zusatzprogramme: Verletzung, Entspannung, Freude, Frustration, Nervensystem, Friede, Muskeln, Bindegewebe, Knochen, Gelenke, Verdauungssystem, Energie-Ausgleich, Chakras, Elemente und Meridiane",
    "peace-upper": "FRIEDEN",
    "peace-description": "• Besänftigt schwere emotionale Momente (Unfall, Scheidung, Probleme bei der Arbeit). • Stabilisiert die innere Harmonie. • Entspannend nach langer Arbeits- oder Lernstunden. Zusatzprogramme: E-Smog, Energie-Ausgleich, Frustration, Friede, Entspannung, Metall-Element, Wasser-Element, Herz-Meridian, Perikardio-Meridian, Leber-Meridian, Gallenblase-Meridian, Chakras",
    "regeneration-upper": "REGENERIERUNG",
    "regeneration-description": "• Beschleunigt den Regenerationsprozess bei körperlicher Ermüdung. • Lindert Muskelschmerzen nach dem Training. • Mindert das Erschöpfungsgefühl in den Beinen und im Lendenbereich nach langem Stehen und/oder Laufen. Zur Auffrischung der Beine und Hüfte. • Fördert die mentale Leistungsfähigkeit durch die körperliche Auffrischung. • Lindert Muskelkater nach körperlicher Anstrengung, 1 – 2 Anwendung gleich nach dem Training. • Nach dem Wettkampf or extremem Training. Zusatzprogramme: Lymphsystem, Kreislaufsystem, Energie-Spender, Lebensfreude, Muskeln, Verdauungssystem, Nebennieren, Nervensystem, Bindegewebe, Erde-Element, 1., 2. und 7. Chakra",
    "relaxation-upper": "ENTSPANNUNG",
    "relaxation-description": "• Bei Stress und Verspannungen. • Hilft unverarbeitete Emotionen und Stress zu kanalisieren. Zusatzprogramme:  Energie-Ausgleich, Frustration, Freude, Nebennieren, Friede, Schilddrüse, E-Smog, Herz-Meridian, 1. – 4. und 7. Chakra",
    "respiratory-system-upper": "ATMUNGSSYSTEM",
    "respiratory-system-description": "• Als komplementäre Selbstversorgung bei Atemwegs-Erkrankungen. • Stimuliert Heilungsprozess der Atemwege bei Husten, Grippe, Bronchitis, Mandelentzündung, Lungenentzündung (als Ergänzung). • Bei Reizhusten (auch Raucherhusten) Das Programm mind. 6 Wochen anwenden. • Optimiert die Atmungsfunktionen bei Erkälung. Beginne mit dem Programm bei den ersten Anzeichen und wende es bis einige Tage, nachdem die Symptome verschwunden sind, an Befreit die Atemwege. • Fördert die Wirkung von Atemübungen. Eine wirkungsvolle Ergänzung zu Yoga Positionen (asanas) – harmonisiert die Atmung und behalt ihn in einem natürlichen Rythmus. Zusatzprogramme: Immunsystem, Lymphsystem, Frustration, Grippe, Nebenhöhlen, Darmflora, Verdauungssystem, E-Smog, Energie-Ausgleich, Freude",
    "sinus-cavities-upper": "NASENNEBENHÖHLEN",
    "sinus-cavities-description": "• Lindert akute und chronische Stirnhöhlenentzündung und Schmerzen im Gesicht. • Unterstützt das Immunsystem. • Unterstützt die Stoffwechselvorgänge der Stirnhöhlen, und ist hilfreich bei Allergiesymptomen Als Vorbeugung für Stirnhöhlenentzündung in der Inkubinationszeit der Grippe. • Dieses Programm soll, über mehrere Tage nachdem die Symptome verschwunden sind, angewendet werden. Zusatzprogramme:  Immunsystem, Lymphsystem, Atmungssystem, Entgiftung, Metall-Element, Darmflora, Lungen-Meridian, 4. , 5.  und 6.  Chakra",
    "skin-conditions-upper": "HAUT",
    "skin-conditions-description": "• Bei Hauterkrankungen. • Ergänzend bei Hautentzündungen bei therapeutischen Eingriffen. • Ergänzungstherapie bei hormonellem Ungleichgewicht. Zusatzprogramme: Entgiftung, Anti Aging, Bindegewebe, Verdauungssystem, Für den Mann, Für die Frau, Metall-Element, Leber-Meridian, Gallenblase-Meridian, Harnblase-Meridian, 1., 2. und 4. Chakra",
    "sleep-enhancer-upper": "SCHLAFHYGIENE",
    "sleep-enhancer-description": "• Bei Einschlaf- und Durchschlafproblemen. • Verringert depressive Gedanken. • Steigert das körperliche und emotionale Friedensgefühl. Zusatzprogramme:   Energie-Ausgleich, Entspannung, Nebenniere, Friede, E-Smog, Freude, Frustration, Schilddrüsen, 1., 2., 3., 6. und 7. Chakra",
    "stress-relief-upper": "STRESS",
    "stress-relief-description": "• Hilfreich bei akuter Frustration. • Unterstützend bei der körperlichen und psychischen Problemlösung aufgrund von unterdrückten Emotionen. • Bei Überreaktionen (die oft in selbstzerstörenden Aktionen enden) aufgrund von einer angespannten Lebensführung. • Vermindert psychische Anspannung (z.B. bei der Selbstwarnehmung). • Befreit von elektromagnetischen Engrammen der unterdrückten Emotionen, welche zu agressivem Verhalten führen. • Für Menschen die immer allen helfen und sich selber zu wenig Zeit widmen. Verringert Störungen des Nervensystems und der Koordination, die durch unterdrückte Emotionen und Enttäuschungen hervorgerufen werden. • Für Leute, die das Gefühl haben, vom Leben selbst ungerecht behandelt zu werden. Zusatzprogramme: E-smog, Friede, Entspannung, Freude, Nebennieren, Energie-Ausgleich, Gallenblase-Meridian, Leber-Meridian, Feuer-Element, Herz-Meridian, Meditation 1., 2. , 3.  und 6.  Chakra",
    "thyroid-glands-upper": "SCHILDDRÜSE",
    "thyroid-glands-description": "• Als Ergänzungstherapie für Unter- und Übergewichtige. • Fördert die Wirkung von Abmagerungskuren und unterstützt die Lebenskraft. • Optimiert die Funktion der Zellmembrane. Zusatzprogramme: Nerven, Nebenniere, Anti-Aging, Kreislaufsystem, Freude, Frustration, Milz/Bauchspeicheldrüse-Meridian, Dreifacher-Erwärmer-Meridian, 2. und 5. Chakra",
    "urinary-upper": "NIEREN UND ABLEITENDE HARNWEGE",
    "urinary-description": "• Bei Blasenentzündung. • Mindert häufig vorkommender Schüttelfrost. Zusatzprogramme: Entspannung, Frustration, Nebenniere, Immunsystem, Darmflora, Harnblase-Meridian, Dreifacher-Erwärmer-Meridian, Wasser-Element, 2. Chakra",
    "vertebrae-upper": "WIRBELSÄULE",
    "vertebrae-description": "• Ergänzend bei Rückentherapien. • Vorbeugend gegen Gewebeschädigung bei Menschen, die häufig schwere Dinge heben. • Reduziert Rückenprobleme, die häufig nach chronischen Verdauungsstörungen auftreten. Zusatzprogramme: Muskeln,  Knochen, Gelenke, Entspannung, Bindegewebe, Verdauungssystem, Holz-Element, Leber-Meridian, Harnblase-Meridian, Gallenblase-Meridian,1.  und 2.  Chakra",
    "vitality-upper": "VITALITÄT",
    "vitality-description": "• Fördert die Vitalität. • Zur erfolgreichen Ausscheidung von Stoffwechsel-Abfallprodukten. • Verringert die tägliche Last an geistigem und körperlichem Stress. Zusatzprogramme:  Energie-Ausgleich, Energie-Spender, Nebennieren, Schilddrüsen, Mineral-Stoffwechsel, Bindegewebe, Knochen, Darmflora, E smog, Alle Meridian-Programme, 1. – 2. und 3. Chakra",
    "weight-control-upper": "GEWICHTSKONTROLLE",
    "weight-control-description": "• Ergänzend bei Gewichtsabnahme-Behandlungen. • Begünstigt die Nährstoffaufnahme. • Fördert die Gifststoff-Ausscheidung. • Verstärkt die Lebenskraft. • Vermindert überschüssige Nahrungsaufnahme aufgrund unterdrückter Emotionen. • Reduziert Depression während spezieller Diäten. • Unterdrückt das übermässige Verlangen auf Nahrung . • Unterstützt den Hormon-Haushalt. Zusatzprogramme: Verdauungssystem, Schilddrüse/Stoffwechsel, Entgiftung, Mineral-Stoffwechsel, Zucker-Stoffwechsel, Sucht, Erde-Element, Metall-Element, Dick- /Dünndarm-Meridian, Leber-Meridian, Gallenblase-Meridian, Meditation I, II, III, 1.  und 2.  Chakra",
    "1-chakra-description": "Befindet sich am Ende der Wirbelsäule und ist mit den Geschlechts- und Nebennierendrüsen verbunden verantwortlich für die Grundistinkte wie Kampf oder Fluch, Überleben Das 1. Chakra steuert die Sexulität (körperlich), Halt (geistig), Sinnlichkeit (emotional), Sicherheitsgefühl (spirituell) Zusatzprogramme: Elemente, Meridiane und Meditation",
    "2-chakra-description": "Befindet sich beim Kreuzbein Und ist mit den Hoden resp. Eierstöcken und den verschiedenen Sexualhormonen verbunden Verantwortlich für die Bereiche Beziehungen, Gewalt, Sucht und emotionale Grundbedürfnisse Das 2. Chakra steuert die Fortpflanzung (körperlich), Kreativität (geistig), Freude (emotional) und Begeisterung (spirituell) Zusatzprogramme: Elemente, Meridiane und Meditation",
    "3-chakra-description": "Befindet sich direkt unter den Rippen Und ist mit dem Verdauungssystem und den Nebennieren verbunden Verantwortlich für persönliche Stärke, Furcht, Beklämmung und Introvertiertheit Das 3.Chakra steuert die Verdauung (körperlich), persönliche Stärke (geistig), Ausdehnung (emotional) und Wachstum (spirituell) Zusatzprogramme: Elemente, Meridiane und Meditation",
    "4-chakra-description": "Befinet sich beim Brustbereich Und steht im Zusammenhang mit der Thymusdrüse und dem Immunsystem Ist verantwortwortlich für koplexe Emotionen, Mitgefühl, bedingungslose Liebe, Abweisung, Gleichgewicht Das 4. Chakra steuert den Kreislauf (körperlich), bedingungslose Liebe zu sich selbst und anderen (emotional), Leidenschaft (geistig) und Hingabe (spirituell) Zusatzprogramme: Elemente, Meridiane und Meditation",
    "5-chakra-description": "Befindet sich beim Halsbereich Und steht im Zusammenhang mit der Schilddrüse Ist verantwortlich für die Kommunikation und Wachstum durch die Ausdrucksform Das 5. Chakra steuert die Kommunikation (körperlich), Unabhängigkeit (emotional), fiessende Gedanken (geistig), Sicherheitsgefühl (spirituell) Zusatzprogramme: Elemente, Meridiane und Meditation",
    "6-chakra-description": "Befindet sich zwischen den Augenbrauen, auch das Dritte Auge genannt Steht im Zusammenhang mit der Zirbeldrüse, welche für die Melatonin-Produktion (Glückshormon) zuständig ist und steuert den Schlafrythmus Das 6. Chakra steuertdie Augen, die Konzentrationsfähigkeit und das visuelle Bewusstsein (körperlich), bringt Klarheit auf intuitiver Ebene Zusatzprogramme: Elemente, Meridiane und Meditation",
    "7-chakra-description": "Befindet sich oben am Kopf betrifft die Hirnanhangdrüse (Hypophyse), die mit dem endokrinen System und dem zentralen Nervensystem kommunizier mittels Hypothalamus   Das 7. Chakra regelt unsere innere Weisheit, universelles Bewusstsein und Einheit Zusatzprogramme: Elemente, Meridiane und Meditation",
    "pain-relief-upper": "SCHMERZLINDERUNG",
    "grounding-upper": "ERDUNG",
    "digestion-upper": "VERDAUUNG",
    "lower-backache-upper": "LOWER BACKACHE",
    "children-upper": "KINDER",
    "female-hormonal-imbalances-upper": "WEIBLICHES HORMONELLES UNGLEICHGEWICHT",
    "male-hormonal-imbalances-upper": "MAENNLICHES HORMONELLES UNGLEICHGEWICHT",
    "cold-flu-upper": "ERKAELTUNG/GRIPPE",
    "ear-problems-upper": "OHRENPROBLEME",
    "intestinal-flu-upper": "DARM GRIPPE",
    "endurance-upper": "ENDURANCE",
    "muscles-upper": "MUSKELGEWEBE",
    "thyroid-upper": "SCHILDDRUESE",
    "urinary-system-upper": "HARNSYSTEM",
    "lower-chakra-balancing-upper": "LOWER CHAKRA BALANCING",
    "upper-chakra-balancing-upper": "UPPER CHAKRA BALANCING",
    "meditation-basics-upper": "MEDITAZIONE GRUNDLEGEND",
    "meditation-medium-upper": "MEDITATION MEDIUM",
    "meditation-advanced-upper": "MEDITATION ERWEITERT",
    "liver-balancing-upper": "LEBERAUSTAUSCH",
    "liver-function-upper": "LEBERFUNKTION",
    "kidney-function-upper": "NIERENFUNKTION",
    "large-intestine-balancing-upper": "GROßE INTESTIN BALANCING",
    "pericardium-flow-upper": "PERICARDIUM-FLÜSSE",
    "routine-pets-upper1": "IMMUNSYSTEM",
    "routine-pets-upper2": "DESINTOXIZIERUNG",
    "routine-pets-upper3": "DIGESTIVE SYSTEM",
    "routine-pets-upper4": "KNOCHEN",
    "routine-pets-upper5": "HAUT",
    "routine-pets-upper6": "MUSKELN",
    "routine-pets-upper7": "STRESS BEFREIUNG",
    "routine-pets-upper8": "ATEMSYSTEM",
    "routine-petx-upper1": "IMMUNSYSTEM",
    "routine-petx-upper2": "DESINTOXIZIERUNG",
    "routine-petx-upper3": "DIGESTIVE SYSTEM",
    "routine-petx-upper4": "KNOCHEN",
    "routine-petx-upper5": "HAUT",
    "routine-petx-upper6": "MUSKELN",
    "routine-petx-upper7": "STRESS BEFREIUNG",
    "routine-petx-upper8": "ATEMSYSTEM",
    "petss-program-upper": "KLEINE TIERE",
    "petss-program-description": "•Dieses Programm in Kombination mit den anderen, hilft Ihrem Haustier (Katze, kleinem Hund oder kleinem Säugetier) sich viel schneller von Verletzungen, Krankheit oder Traumas der Trennung oder Reisen zu erholen.",
    "petsx-program-upper": "GROSSE TIERE",
    "petsx-program-description": "•Dieses Programm in Kombination mit anderen ist angezeigt, um Ihren größeren Haustieren (große Hunde, Pferde und andere Säugetiere)zu helfen, die  Erholungszeit nach Verletzungen, Krankheiten oder Traumas durch Trennung oder Reisen zu verkuerzen."
};
//# sourceMappingURL=german-texts.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
var Data = { Groups: [
        {
            category: 'basic',
            textName: '', name: 'pain-relief-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Pain_Conditions",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Peace",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Regeneration",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            textName: '', name: 'injury-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            textName: '', name: 'stress-relief-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            textName: '', name: 'immune-system-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            textName: '', name: 'respiratory-system-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Sinus_Cavities",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            textName: '', name: 'detoxification-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Large_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            textName: '', name: 'headache-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Headache",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Peace",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'basic',
            textName: '', name: 'grounding-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Earth_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Root_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            textName: '', name: 'energy-booster-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Energy_Booster",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Exhaustion",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Adrenal_Gland",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Brow_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            textName: '', name: 'JET-LAG',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Jet-Lag/Climate_Change",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Earth_Element",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            textName: '', name: 'JET-LAG',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Jet-Lag/Climate_Change",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Exhaustion",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Booster",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            textName: '', name: 'concentration-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Concentration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Discernment",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Adrenal_Gland",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Brow_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            textName: '', name: 'digestion-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Mineral_Metabolic_Activity",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            textName: '', name: 'respiratory-system-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            textName: '', name: 'lower-backache-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Backache",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Root_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            textName: '', name: 'neck-shoulder-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Neck/Shoulder",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Gallbladder_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'business and travel',
            textName: '', name: 'sleep-enhancer-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Sleep_Enhancer",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            textName: '', name: 'children-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Child_Development",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            textName: '', name: 'female-hormonal-imbalances-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Female_Hormone_Balance",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            textName: '', name: 'male-hormonal-imbalances-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Male_Hormone_Balance",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            textName: '', name: 'cold-flu-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Flu",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            textName: '', name: 'constipation-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Constipation",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Gallbladder_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Large_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            textName: '', name: 'diarrhea-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Diarrhea",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            textName: '', name: 'ear-problems-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Auditory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Triple_Warmer_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Brow_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            textName: '', name: 'eyesight-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Eyesight",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Brow_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'family',
            textName: '', name: 'intestinal-flu-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Flu",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            textName: '', name: 'energy-booster-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Energy_Booster",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Adrenal_Gland",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pericardium_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            textName: '', name: 'regeneration-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Regeneration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Vitality",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            textName: '', name: 'respiratory-system-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Sinus_Cavities",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            textName: '', name: 'injury-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pain_Conditions",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            textName: '', name: 'pain-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pain_Conditions",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Regeneration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            textName: '', name: 'backache-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Backache",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Neck/Shoulder",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Vertebrae",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Gallbladder_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            textName: '', name: 'muscles-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Connective_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Regeneration",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'athlete',
            textName: '', name: 'immune-system-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            textName: '', name: 'anti-aging-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Anti_Aging",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Connective_Tissues",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            textName: '', name: 'weight-control-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Addiction",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Weight_Control",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Triple_Warmer_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            textName: '', name: 'detoxification-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Mineral_Metabolic_Activity",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            textName: '', name: 'skin-conditions-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Connective_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Skin_Conditions",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            textName: '', name: 'hair-growth-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Hair_Growth",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            textName: '', name: 'low-physical-drive-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Pericardium_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Adrenal_Gland",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Low_Physical_Drive",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'spa',
            textName: '', name: 'low-mental-drive-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Low_Mental_Drive",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            textName: '', name: 'stress-relief-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Joy",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            textName: '', name: 'vitality-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Joy",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Booster",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Vitality",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            textName: '', name: 'sleep-enhancer-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Sleep_Enhancer",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Peace",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            textName: '', name: 'energy-booster-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Adrenal_Gland",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Booster",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Exhaustion",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            textName: '', name: 'hypertension-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Pericardium_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Hypertension",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Heart_Function",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            textName: '', name: 'thyroid-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Thyroid_Glands",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Throat_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'stress relief',
            textName: '', name: 'low-mental-drive-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Low_Mental_Drive",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            textName: '', name: 'regeneration-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Regeneration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Connective_Tissues",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            textName: '', name: 'vitality-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Energy_Booster",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Adrenal_Gland",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Vitality",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            textName: '', name: 'joy-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Peace",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Joy",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Metal_Element",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            textName: '', name: 'sleep-enhancer-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Electro_Smog",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Sleep_Enhancer",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            textName: '', name: 'heart-function-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Fire_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Heart_Function",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Triple_Warmer_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            textName: '', name: 'respiratory-system-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Sinus_Cavities",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            textName: '', name: 'hypertension-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Pericardium_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Hypertension",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            textName: '', name: 'glucose-metabolic-disorders-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Peace",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Glucose_Metabolic_Disorders",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Spleen_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            textName: '', name: 'hemorrhoids-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Hemorrhoids",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Constipation",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Root_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            textName: '', name: 'urinary-system-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Urinary_System/Cystitis",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Urinary_Bladder_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            textName: '', name: 'cold-flu-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Flu",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'senior',
            textName: '', name: 'pain-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Nervous_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pain_Conditions",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Regeneration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'chakra balancing',
            textName: '', name: 'lower-chakra-balancing-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Root_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Solar_Plexus_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Earth_Element",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'chakra balancing',
            textName: '', name: 'upper-chakra-balancing-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Throat_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Brow_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Crown_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'chakra balancing',
            textName: '', name: 'meditation-basics-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Meditation_1",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Root_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Solar_Plexus_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'chakra balancing',
            textName: '', name: 'meditation-medium-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Meditation_2",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Throat_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Peace",
                    runningtime: "",
                    description: ''
                }
            ]
        }, {
            category: 'chakra balancing',
            textName: '', name: 'meditation-advanced-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Meditation_3",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Brow_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Crown_Chakra",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Joy",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            textName: '', name: 'earth-element-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Stomach_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Spleen_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Earth_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            textName: '', name: 'fire-element-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Heart_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Small_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Fire_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Circulatory_System",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            textName: '', name: 'fire-element-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Pericardium_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Triple_Warmer_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Fire_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            textName: '', name: 'metal-element-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Large_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Metal_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Skin_Conditions",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            textName: '', name: 'water-element-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Urinary_Bladder_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Water_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            textName: '', name: 'wood-element-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Gallbladder_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Wood_Element",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Eyesight",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            textName: '', name: 'liver-function-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Gallbladder_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Solar_Plexus_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            textName: '', name: 'heart-function-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Heart_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Small_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            textName: '', name: 'kidney-function-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Kidney_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Urinary_Bladder_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Exhaustion",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Sacral_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            textName: '', name: 'large-intestine-balancing-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Large_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Solar_Plexus_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            textName: '', name: 'pericardium-flow-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Pericardium_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Triple_Warmer_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Heart_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'elements',
            textName: '', name: 'stomach-meridian-upper',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Stomach_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Spleen_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Solar_Plexus_Chakra",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            textName: '', name: 'routine-pets-upper1',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            textName: '', name: 'routine-pets-upper2',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Large_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            textName: '', name: 'routine-pets-upper3',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            textName: '', name: 'routine-pets-upper4',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            textName: '', name: 'routine-pets-upper5',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Skin_Conditions",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Connective_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            textName: '', name: 'routine-pets-upper6',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            textName: '', name: 'routine-pets-upper7',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petss',
            textName: '', name: 'routine-pets-upper8',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_1",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            textName: '', name: 'routine-petx-upper1',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            textName: '', name: 'routine-petx-upper2',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Detoxification",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Large_Intestine_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            textName: '', name: 'routine-petx-upper3',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Digestive_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Liver_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Intestinal_Flora",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            textName: '', name: 'routine-petx-upper4',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Bone_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            textName: '', name: 'routine-petx-upper5',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Skin_Conditions",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Connective_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            textName: '', name: 'routine-petx-upper6',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Muscle_Tissues",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lymphatic_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Injury",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            textName: '', name: 'routine-petx-upper7',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Frustration",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Relaxation",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Energy_Balancing",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        },
        {
            category: 'petsx',
            textName: '', name: 'routine-petx-upper8',
            programs: [
                {
                    textName: '', name: '',
                    apiName: "Respiratory_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Immune_System",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Lung_Meridian",
                    runningtime: "",
                    description: ''
                },
                {
                    textName: '', name: '',
                    apiName: "Pet_2",
                    runningtime: "",
                    description: ''
                }
            ]
        }
    ],
    Programs: [
        {
            textName: '', name: 'addiction-upper',
            apiName: "Addiction",
            runningtime: "15:05",
            description: 'addiction-description'
        },
        {
            textName: '', name: 'adrenal-gland-upper',
            apiName: "Adrenal_Gland",
            runningtime: "15:07",
            description: 'adrenal-gland-description'
        },
        {
            textName: '', name: 'anti-aging-upper',
            apiName: "Anti_Aging",
            runningtime: "11:01",
            description: 'anti-aging-description',
        },
        {
            textName: '', name: 'auditory-upper',
            apiName: "Auditory_System",
            runningtime: "14:31",
            description: 'auditory-description',
        },
        {
            textName: '', name: 'backache-upper',
            apiName: "Backache",
            runningtime: "16:30",
            description: 'backache-description',
        },
        {
            textName: '', name: 'bones-upper',
            apiName: "Bone_Tissues",
            runningtime: "15:04",
            description: 'bones-description'
        },
        {
            textName: '', name: 'child-developement-upper',
            apiName: "Child_Development",
            runningtime: "13:50",
            description: 'child-developement-description',
        },
        {
            textName: '', name: 'circulatory-system-upper',
            apiName: "Circulatory_System",
            runningtime: "15:06",
            description: 'circulatory-system-description',
        },
        {
            textName: '', name: 'concentration-upper',
            apiName: "Concentration",
            runningtime: "21:19",
            description: 'concentration-description'
        },
        {
            textName: '', name: 'connective-tissue-upper',
            apiName: "Connective_Tissues",
            runningtime: "16:54",
            description: 'connective-tissue-description',
        },
        {
            textName: '', name: 'constipation-upper',
            apiName: "Constipation",
            runningtime: "14:49",
            description: 'constipation-description'
        },
        {
            textName: '', name: 'detoxification-upper',
            apiName: "Detoxification",
            runningtime: "16:13",
            description: 'detoxification-description',
        },
        {
            textName: '', name: 'diarrhea-upper',
            apiName: "Diarrhea",
            runningtime: "13:59",
            description: 'diarrhea-description'
        },
        {
            textName: '', name: 'digestive-system-upper',
            apiName: "Digestive_System",
            runningtime: "16:41",
            description: 'digestive-system-description'
        },
        {
            textName: '', name: 'discernment-upper',
            apiName: "Discernment",
            runningtime: "13:37",
            description: 'discernment-description'
        },
        {
            textName: '', name: 'energy-balancing-upper',
            apiName: "Energy_Balancing",
            runningtime: "17:55",
            description: 'energy-balancing-description',
        },
        {
            textName: '', name: 'energy-booster-upper',
            apiName: "Energy_Booster",
            runningtime: "13:53",
            description: 'energy-booster-description'
        },
        {
            textName: '', name: "E-SMOG",
            apiName: "Electro_Smog",
            runningtime: "14:51",
            description: 'e-smog-description'
        },
        {
            textName: '', name: 'exhaustion-upper',
            apiName: "Exhaustion",
            runningtime: "14:59",
            description: 'exhaustion-description'
        },
        {
            textName: '', name: 'eyesight-upper',
            apiName: "Eyesight",
            runningtime: "16:11",
            description: 'eyesight-description'
        },
        {
            textName: '', name: 'female-upper',
            apiName: "Female_Hormone_Balance",
            runningtime: "14:17",
            description: 'female-description'
        },
        {
            textName: '', name: 'flu-upper',
            apiName: "Flu",
            runningtime: "13:59",
            description: 'flu-description'
        },
        {
            textName: '', name: 'glucose-metabolic-disorders-upper',
            apiName: "Glucose_Metabolic_Disorders",
            runningtime: "16:28",
            description: 'glucose-metabolic-disorders-description',
        },
        {
            textName: '', name: 'hair-growth-upper',
            apiName: "Hair_Growth",
            runningtime: "19:07",
            description: 'hair-growth-description'
        },
        {
            textName: '', name: 'headache-upper',
            apiName: "Headache",
            runningtime: "18:38",
            description: 'headache-description'
        },
        {
            textName: '', name: 'heart-function-upper',
            apiName: "Heart_Function",
            runningtime: "13:30",
            description: 'heart-function-description'
        },
        {
            textName: '', name: 'hemorrhoids-upper',
            apiName: "Hemorrhoids",
            runningtime: "21:13",
            description: 'hemorrhoids-description'
        },
        {
            textName: '', name: 'hypertension-upper',
            apiName: "Hypertension",
            runningtime: "18:53",
            description: 'hypertension-description'
        },
        {
            textName: '', name: 'immune-system-upper',
            apiName: "Immune_System",
            runningtime: "14:50",
            description: 'immune-system-description'
        },
        {
            textName: '', name: 'injury-upper',
            apiName: "Injury",
            runningtime: "18:46",
            description: 'injury-description'
        },
        {
            textName: '', name: 'intestinal-flora-upper',
            apiName: "Intestinal_Flora",
            runningtime: "18:58",
            description: 'intestinal-flora-description'
        },
        {
            textName: '', name: 'joints-upper',
            apiName: "Joints",
            runningtime: "17:07",
            description: 'joints-description'
        },
        {
            textName: '', name: 'joy-upper',
            apiName: "Joy",
            runningtime: "21:04",
            description: 'joy-description'
        },
        {
            textName: '', name: "JET-LAG",
            apiName: "Jet-Lag/Climate_Change",
            runningtime: "16:14",
            description: 'jet-lag-description'
        },
        {
            textName: '', name: 'low-mental-drive-upper',
            apiName: "Low_Mental_Drive",
            runningtime: "15:49",
            description: 'low-mental-drive-description'
        },
        {
            textName: '', name: 'low-physical-drive-upper',
            apiName: "Low_Physical_Drive",
            runningtime: "16:49",
            description: 'low-physical-drive-description'
        },
        {
            textName: '', name: 'lymphatic-system-upper',
            apiName: "Lymphatic_System",
            runningtime: "16:04",
            description: 'lymphatic-system-description'
        },
        {
            textName: '', name: 'male-upper',
            apiName: "Male_Hormone_Balance",
            runningtime: "12:31",
            description: 'male-description'
        },
        {
            textName: '', name: 'meditation-1-upper',
            apiName: "Meditation_1",
            runningtime: "33:15",
            description: 'meditation-1-description'
        },
        {
            textName: '', name: 'meditation-2-upper',
            apiName: "Meditation_2",
            runningtime: "29:43",
            description: 'meditation-2-description'
        },
        {
            textName: '', name: 'meditation-3-upper',
            apiName: "Meditation_3",
            runningtime: "22:49",
            description: 'meditation-3-description'
        },
        {
            textName: '', name: 'mineral-metabolic-activity-upper',
            apiName: "Mineral_Metabolic_Activity",
            runningtime: "17:25",
            description: 'mineral-metabolic-activity-description'
        },
        {
            textName: '', name: 'muscle-tissue-upper',
            apiName: "Muscle_Tissues",
            runningtime: "15:59",
            description: 'muscle-tissue-description'
        },
        {
            textName: '', name: 'neck-shoulder-upper',
            apiName: "Neck/Shoulder",
            runningtime: "16:16",
            description: 'neck-shoulder-description'
        },
        {
            textName: '', name: 'nervous-system-upper',
            apiName: "Nervous_System",
            runningtime: "19:10",
            description: 'nervous-system-description'
        },
        {
            textName: '', name: 'peace-upper',
            apiName: "Peace",
            runningtime: "22:08",
            description: 'peace-description'
        },
        {
            textName: '', name: 'pain-upper',
            apiName: "Pain_Conditions",
            runningtime: "15:18",
            description: 'pain-description'
        },
        {
            textName: '', name: 'regeneration-upper',
            apiName: "Regeneration",
            runningtime: "17:12",
            description: 'regeneration-description'
        },
        {
            textName: '', name: 'relaxation-upper',
            apiName: "Relaxation",
            runningtime: "19:55",
            description: 'relaxation-description'
        },
        {
            textName: '', name: 'respiratory-system-upper',
            apiName: "Respiratory_System",
            runningtime: "15:52",
            description: 'respiratory-system-description'
        },
        {
            textName: '', name: 'sinus-cavities-upper',
            apiName: "Sinus_Cavities",
            runningtime: "15:33",
            description: 'sinus-cavities-description'
        },
        {
            textName: '', name: 'skin-conditions-upper',
            apiName: "Skin_Conditions",
            runningtime: "15:50",
            description: 'skin-conditions-description'
        },
        {
            textName: '', name: 'sleep-enhancer-upper',
            apiName: "Sleep_Enhancer",
            runningtime: "19:58",
            description: 'sleep-enhancer-description'
        },
        {
            textName: '', name: 'stress-relief-upper',
            apiName: "Frustration",
            runningtime: "18:55",
            description: 'stress-relief-description'
        },
        {
            textName: '', name: 'thyroid-glands-upper',
            apiName: "Thyroid_Glands",
            runningtime: "17:53",
            description: 'thyroid-glands-description'
        },
        {
            textName: '', name: 'urinary-upper',
            apiName: "Urinary_System/Cystitis",
            runningtime: "13:39",
            description: 'urinary-description'
        },
        {
            textName: '', name: 'vertebrae-upper',
            apiName: "Vertebrae",
            runningtime: "12:53",
            description: 'vertebrae-description'
        },
        {
            textName: '', name: 'vitality-upper',
            apiName: "Vitality",
            runningtime: "14:00",
            description: 'vitality-description'
        },
        {
            textName: '', name: 'weight-control-upper',
            apiName: "Weight_Control",
            runningtime: "14:50",
            description: 'weight-control-description'
        },
        {
            textName: '', name: 'earth-element-upper',
            apiName: "Earth_Element",
            runningtime: "16:55",
            description: 'earth-element-description'
        },
        {
            textName: '', name: 'water-element-upper',
            apiName: "Water_Element",
            runningtime: "17:20",
            description: 'water-element-description'
        },
        {
            textName: '', name: 'fire-element-upper',
            apiName: "Fire_Element",
            runningtime: "15:05",
            description: 'fire-element-description'
        },
        {
            textName: '', name: 'metal-element-upper',
            apiName: "Metal_Element",
            runningtime: "12:39",
            description: 'metal-element-description'
        },
        {
            textName: '', name: 'wood-element-upper',
            apiName: "Wood_Element",
            runningtime: "17:09",
            description: 'wood-element-description'
        },
        {
            textName: '', name: 'stomach-meridian-upper',
            apiName: "Stomach_Meridian",
            runningtime: "17:15",
            description: 'stomach-meridian-description'
        },
        {
            textName: '', name: 'spleen-pancreas-meridian-upper',
            apiName: "Spleen_Meridian",
            runningtime: "15:37",
            description: 'spleen-pancreas-meridian-description'
        },
        {
            textName: '', name: 'heart-meridian-upper',
            apiName: "Heart_Meridian",
            runningtime: "14:45",
            description: 'heart-meridian-description'
        },
        {
            textName: '', name: 'small-intestine-meridian-upper',
            apiName: "Small_Intestine_Meridian",
            runningtime: "13:25",
            description: 'small-intestine-meridian-description'
        },
        {
            textName: '', name: 'pericardium-meridian-upper',
            apiName: "Pericardium_Meridian",
            runningtime: "21:55",
            description: 'pericardium-meridian-description'
        },
        {
            textName: '', name: 'triple-warmer-meridian-upper',
            apiName: "Triple_Warmer_Meridian",
            runningtime: "13:20",
            description: 'triple-warmer-meridian-description'
        },
        {
            textName: '', name: 'lung-meridian-upper',
            apiName: "Lung_Meridian",
            runningtime: "16:38",
            description: 'lung-meridian-description'
        },
        {
            textName: '', name: 'large-intestine-meridian-upper',
            apiName: "Large_Intestine_Meridian",
            runningtime: "13:53",
            description: 'large-intestine-meridian-description'
        },
        {
            textName: '', name: 'kidney-meridian-upper',
            apiName: "Kidney_Meridian",
            runningtime: "16:27",
            description: 'kidney-meridian-description'
        },
        {
            textName: '', name: 'urinary-bladder-meridian-upper',
            apiName: "Urinary_Bladder_Meridian",
            runningtime: "14:19",
            description: 'urinary-bladder-meridian-description'
        },
        {
            textName: '', name: 'liver-meridian-upper',
            apiName: "Liver_Meridian",
            runningtime: "16:11",
            description: 'liver-meridian-description'
        },
        {
            textName: '', name: 'gallbladder-meridian-upper',
            apiName: "Gallbladder_Meridian",
            runningtime: "20:39",
            description: 'gallbladder-meridian-description'
        },
        {
            textName: '', name: "first-chakra-upper",
            apiName: "Root_Chakra",
            runningtime: "15:49",
            description: '1-chakra-description'
        },
        {
            textName: '', name: "second-chakra-upper",
            apiName: "Sacral_Chakra",
            runningtime: "13:57",
            description: '2-chakra-description'
        },
        {
            textName: '', name: "third-chakra-upper",
            apiName: "Solar_Plexus_Chakra",
            runningtime: "16:51",
            description: '3-chakra-description'
        },
        {
            textName: '', name: "fourth-chakra-upper",
            apiName: "Heart_Chakra",
            runningtime: "18:16",
            description: '4-chakra-description'
        },
        {
            textName: '', name: "fifth-chakra-upper",
            apiName: "Throat_Chakra",
            runningtime: "17:59",
            description: '5-chakra-description'
        },
        {
            textName: '', name: "sixth-chakra-upper",
            apiName: "Brow_Chakra",
            runningtime: "16:13",
            description: '6-chakra-description'
        },
        {
            textName: '', name: "seventh-chakra-upper",
            apiName: "Crown_Chakra",
            runningtime: "13:45",
            description: '7-chakra-description'
        },
        {
            textName: '', name: 'petss-program-upper',
            apiName: "Pet_1",
            runningtime: "11:50",
            description: 'petss-program-description'
        },
        {
            textName: '', name: 'petsx-program-upper',
            apiName: "Pet_2",
            runningtime: "12:50",
            description: 'petsx-program-description'
        }
    ]
};
//# sourceMappingURL=offline_data.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offline_data__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_routines_routines__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_german_texts__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__program_program__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ProgramsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramsPage = (function () {
    function ProgramsPage(navCtrl, storage, navParams, routines, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.routines = routines;
        this.events = events;
        this.program = navParams.get('bubble');
        this.events.subscribe('add1ProgramEvent', function (programNumber, programName, programRunningTime, programApiName) {
            _this.program = programNumber;
            _this.add1Program(programName, programRunningTime, programApiName);
            _this.navCtrl.pop();
        });
    }
    ProgramsPage.prototype.ionViewDidLeave = function () {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyScrollTop, this.content.getContentDimensions().scrollTop);
    };
    ProgramsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyCurrentProgram).then(function (program) {
            _this.getPrograms(program != null ? program : 'basic');
        });
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs.length; i++) {
            var text = __WEBPACK_IMPORTED_MODULE_5__services_german_texts__["a" /* GermanTexts */][__WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs[i].name];
            __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs[i].textName = text ? text : __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs[i].name;
        }
        this.programs = __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs;
        this.routines.getKey(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyBubble1).then(function (val) {
            if (_this.program != 1 && val != null && val.length > 0) {
                _this.programName1 = val.split('|')[1];
            }
            else {
                _this.programName1 = '';
            }
        });
        this.routines.getKey(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyBubble2).then(function (val) {
            if (_this.program != 2 && val != null && val.length > 0) {
                _this.programName2 = val.split('|')[1];
            }
            else {
                _this.programName2 = '';
            }
        });
        this.routines.getKey(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyBubble3).then(function (val) {
            if (_this.program != 3 && val != null && val.length > 0) {
                _this.programName3 = val.split('|')[1];
            }
            else {
                _this.programName3 = '';
            }
        });
        this.routines.getKey(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyBubble4).then(function (val) {
            if (_this.program != 4 && val != null && val.length > 0) {
                _this.programName4 = val.split('|')[1];
            }
            else {
                _this.programName4 = '';
            }
        });
        setTimeout(function () {
            _this.storage.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyScrollTop).then(function (scroll) {
                _this.content.scrollTo(0, scroll, 100);
            });
        }, 500);
    };
    ProgramsPage.prototype.selectPreSetProgram = function (category) {
        this.getPrograms(category);
    };
    ProgramsPage.prototype.getPrograms = function (category) {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].storageKeyCurrentProgram, category);
        this.basicButton = false;
        this.businessTravelButton = false;
        this.familiyButton = false;
        this.athleteButton = false;
        this.spaButton = false;
        this.stressButton = false;
        this.seniorButton = false;
        this.chakraButton = false;
        this.elementsButton = false;
        this.petssButton = false;
        this.petsxButton = false;
        switch (category) {
            case 'basic':
                this.basicButton = true;
                break;
            case 'business and travel':
                this.businessTravelButton = true;
                break;
            case 'family':
                this.familiyButton = true;
                break;
            case 'athlete':
                this.athleteButton = true;
                break;
            case 'spa':
                this.spaButton = true;
                break;
            case 'stress relief':
                this.stressButton = true;
                break;
            case 'senior':
                this.seniorButton = true;
                break;
            case 'chakra balancing':
                this.chakraButton = true;
                break;
            case 'elements':
                this.elementsButton = true;
                break;
            case 'petss':
                this.petssButton = true;
                break;
            case 'petsx':
                this.petsxButton = true;
                break;
        }
        var groups = [];
        var groupIndex = 0;
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Groups.length; i++) {
            var group = __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Groups[i];
            if (group.category == category) {
                var text = __WEBPACK_IMPORTED_MODULE_5__services_german_texts__["a" /* GermanTexts */][group.name];
                group.textName = text ? text : group.name;
                groups[groupIndex] = group;
                for (var j = 0; j < group.programs.length; j++) {
                    var program = group.programs[j];
                    group.programs[j] = this.routines.getProgram(program.apiName);
                }
                groupIndex++;
            }
        }
        this.predefinedPrograms = groups;
    };
    ProgramsPage.prototype.addPrograms = function (routineName, program1, program2, program3, program4) {
        this.navCtrl.pop();
        var bubbleNames = this.routines.addPrograms(routineName, program1, program2, program3, program4);
        this.events.publish("sharesBubbles", bubbleNames);
    };
    ProgramsPage.prototype.add1Program = function (programName, programRunningTime, programApiName) {
        this.routines.addProgramToRoutine(this.program, '', programName, programRunningTime, programApiName);
        this.programName1 = this.program == 1 ? programName : (this.programName1.length > 0 ? this.programName1 : '');
        this.programName2 = this.program == 2 ? programName : (this.programName2.length > 0 ? this.programName2 : '');
        this.programName3 = this.program == 3 ? programName : (this.programName3.length > 0 ? this.programName3 : '');
        this.programName4 = this.program == 4 ? programName : (this.programName4.length > 0 ? this.programName4 : '');
        this.routines.setPrograms(this.programName1, this.programName2, this.programName3, this.programName4);
        var bubbleNames = [
            this.programName1,
            this.programName2,
            this.programName3,
            this.programName4
        ];
        this.events.publish("sharesBubbles", bubbleNames);
        this.navCtrl.pop();
    };
    ProgramsPage.prototype.moreProgramInfo = function (name, runTime, description, apiName) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__program_program__["a" /* ProgramPage */], { programNumber: this.program, name: name, runTime: runTime, description: description, apiName: apiName });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ProgramsPage.prototype, "content", void 0);
    ProgramsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-programs',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\programs\programs.html"*/'<!--\n  Generated template for the ProgramsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PROGRAMME</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="home center">\n    <br>\n    <div class="modaltitle">Programm Kits</div>\n    <div class="modaldesc">Unsere beliebtesten Routinen</div>\n\n    <ion-scroll scrollX="true" scrollY="false" class="wide-as-needed programs">\n\n            <ion-row nowrap class="program {{ basicButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'basic\')">\n                <div class="programpic"><img src="assets/img/Basic.png"></div>\n                <div class="programdesc">BASIC <br> <br></div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ businessTravelButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'business and travel\')">\n                <div class="programpic"><img src="assets/img/BusinessTraveller.png"></div>\n                <div class="programdesc">BUSINESS &<br/>REISEN</div>\n            </ion-row>\n\n           <ion-row nowrap class="program {{ familiyButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'family\')">\n                <div class="programpic"><img src="assets/img/family.png"></div>\n                <div class="programdesc">FAMILIE</div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ athleteButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'athlete\')">\n                <div class="programpic"><img src="assets/img/Athlete.png"></div>\n                <div class="programdesc">SPORT</div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ spaButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'spa\')">\n                <div class="programpic"><img src="assets/img/Spa.png"></div>\n                <div class="programdesc">SPA & WELLNESS</div>\n            </ion-row>\n\n\n            <ion-row nowrap class="program {{ stressButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'stress relief\')">\n                <div class="programpic"><img src="assets/img/stress.png"></div>\n                <div class="programdesc">STRESS <br> BEFREIUNG</div>\n            </ion-row>\n\n\n            <ion-row nowrap class="program {{ seniorButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'senior\')">\n                <div class="programpic"><img src="assets/img/Senior.png"></div>\n                <div class="programdesc">SENIOR</div>\n            </ion-row>\n\n\n            <ion-row nowrap class="program {{ chakraButton ? \'\' : \'opacity-50\' }}"  (click)="selectPreSetProgram(\'chakra balancing\')">\n                <div class="programpic"><img src="assets/img/chakra.png"></div>\n                <div class="programdesc">CHAKRAS</div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ elementsButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'elements\')">\n                <div class="programpic"><img src="assets/img/Elements.png"></div>\n                <div class="programdesc">ELEMENTE & <br> MERIDIANE</div>\n            </ion-row>\n            <ion-row nowrap class="program {{ petssButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'petss\')">\n                <div class="programpic"><img src="assets/img/MascotasS.png"></div>\n                <div class="programdesc">HAUSTIERE S</div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ petsxButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'petsx\')">\n                <div class="programpic"><img src="assets/img/MascotasX.png"></div>\n                <div class="programdesc">HAUSTIERE X</div>\n            </ion-row>\n    </ion-scroll>\n\n\n    <div class="modaltitle">PROGRAMME</div>\n    <div *ngFor="let routine of predefinedPrograms">\n\n        {{ routine.textName }}\n        <!--<div class="purchase-status">{{ routine.purchaseStatus }}</div>-->\n\n        <div class="paddingmodal">\n\n            <ion-list (click)="addPrograms(routine.name, routine.programs[0].apiName, routine.programs[1].apiName,\n                routine.programs[2].apiName,routine.programs[3].apiName)">\n\n                <ion-item *ngFor="let program of routine.programs" class="addiction center">\n                     {{ program.textName }}\n                </ion-item>\n\n            </ion-list>\n        </div>\n    </div>\n\n\n    <div class="modaltitle">UNABHÄNGIGE PROGRAMME</div>\n    <div class="modaldesc"><label>Tippen Sie auf das Programm, das Sie zur Routine hinzufügen möchten. Tippen die Info-Taste, um mehr zu erfahren</label></div>\n    <div class="paddingmodal">\n        <ion-list class="programlist">\n\n            <ion-item class="addiction center" *ngFor="let program of programs" nav-transition="ios" nav-direction="forward" href="#/app/routines">\n                <div class="programAddButton" (click)="add1Program(program.name, program.runningtime, program.apiName)">\n                    {{ program.textName }}\n                </div>\n                <div class="programInfoButton" end (click)="moreProgramInfo(program.name, program.runningtime, program.description, program.apiName)">\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                </div>\n            </ion-item>\n\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\programs\programs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_routines_routines__["a" /* RoutinesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ProgramsPage);
    return ProgramsPage;
}());

//# sourceMappingURL=programs.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_german_texts__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramPage = (function () {
    function ProgramPage(navCtrl, navParams, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
    }
    ProgramPage.prototype.ionViewDidLoad = function () {
        this.programRealName = this.navParams.get('name');
        var programTranslateName = this.navParams.get('name');
        if (this.isNameOnArray(__WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].shortTitles, programTranslateName))
            programTranslateName = programTranslateName.replace('-upper', '-short');
        this.programName = typeof __WEBPACK_IMPORTED_MODULE_3__services_german_texts__["a" /* GermanTexts */][programTranslateName] === 'undefined' ? programTranslateName : __WEBPACK_IMPORTED_MODULE_3__services_german_texts__["a" /* GermanTexts */][programTranslateName];
        this.programRunningTime = typeof __WEBPACK_IMPORTED_MODULE_3__services_german_texts__["a" /* GermanTexts */][this.navParams.get('runTime')] === 'undefined' ? this.navParams.get('runTime') : __WEBPACK_IMPORTED_MODULE_3__services_german_texts__["a" /* GermanTexts */][this.navParams.get('runTime')];
        this.programDescription = typeof __WEBPACK_IMPORTED_MODULE_3__services_german_texts__["a" /* GermanTexts */][this.navParams.get('description')] === 'undefined' ? this.navParams.get('description') : __WEBPACK_IMPORTED_MODULE_3__services_german_texts__["a" /* GermanTexts */][this.navParams.get('description')];
        this.programApiName = this.navParams.get('apiName');
        this.programNumber = this.navParams.get('programNumber');
    };
    ProgramPage.prototype.add1Program = function (programName, programRunningTime, programApiName) {
        this.events.publish("add1ProgramEvent", this.programNumber, this.programRealName, this.programRunningTime, this.programApiName);
    };
    ProgramPage.prototype.isNameOnArray = function (names, name) {
        for (var i = 0; i < names.length; i++) {
            if (names[i] == name) {
                return true;
            }
        }
        return false;
    };
    ProgramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-program',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\program\program.html"*/'<!--\n  Generated template for the ProgramPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ programName }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="home center">\n\n    <div class="program-info-modal-holder">\n        <div class="program-info-modal-header">\n          <h2 class="program-info-modal-running-time-title">Laufzeit</h2>\n        	<h2 class="program-info-modal-running-time">\n             {{ programRunningTime  }}\n        	</h2>\n        </div>\n\n        <div class="program-info-modal-mainbody">\n          <ion-scroll style="height:100%;overflow-y:scroll;">\n            <div style="height:100%; line-height:25px;">{{ programDescription }}</div>\n            <br/>\n            <button class="button-add-program" ion-button (click)="add1Program(programName, programRunningTime, programApiName)">Hinzufügen</button>\n          </ion-scroll>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\program\program.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ProgramPage);
    return ProgramPage;
}());

//# sourceMappingURL=program.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WifiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playing_playing__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_german_texts__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network_interface__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the WifiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WifiPage = (function () {
    function WifiPage(navCtrl, navParams, storage, apiService, networkInterface, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.apiService = apiService;
        this.networkInterface = networkInterface;
        this.platform = platform;
        this.intervalCount = 0;
        this.coilText = typeof __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */]['coil'] === 'undefined' ? 'Antena' : __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */]['coil'];
        this.program1 = this.navParams.get('prog1');
        this.program2 = this.navParams.get('prog2');
        this.program3 = this.navParams.get('prog3');
        this.program4 = this.navParams.get('prog4');
    }
    WifiPage.prototype.ionViewDidLeave = function () {
        this.stop();
    };
    WifiPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.mymatStatus = false;
        this.showIframeStatus = false;
        this.showLoading = true;
        this.isRunRoutineEnabled = true;
        if (this.platform.is('cordova')) {
            this.networkInterface.getWiFiIPAddress().then(function (response) {
                if (_this.verifyInternalIpAddress(response)) {
                    _this.verifyStatusValues();
                }
                else
                    _this.failIPVerification();
            }, function (response) {
                _this.failIPVerification();
            });
        }
        else {
            this.verifyStatusValues();
        }
        this.mymatWifi = true;
        this.intervalCount = 0;
    };
    WifiPage.prototype.verifyInternalIpAddress = function (ip) {
        for (var i = 100; i < 256; i++) {
            if (__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].localIPAddress + i == ip) {
                return true;
            }
        }
        return false;
    };
    WifiPage.prototype.verifyStatusValues = function (restart) {
        //this.mymatStatus = true;
        //this.showStatusTable = true;
        var _this = this;
        if (restart === void 0) { restart = true; }
        if (restart) {
            this.batteryImg = 'assets/img/b100.pn';
            this.coilText1 = 'N/A';
            this.coilText2 = 'N/A';
            this.coilText3 = 'N/A';
            this.coilText4 = 'N/A';
        }
        //this.mymatWifi = false;
        //this.showLoading = false;
        clearInterval(this.testIPInterval);
        // check if mymat is connected
        var myMatTest = this.apiService.test();
        myMatTest.then(function (response) {
            // if is connected quitar imagen, textos y loading y poner status del mat
            if (_this.verifyValues(response)) {
                _this.showStatus();
            }
            else {
                _this.failIPVerification();
            }
        }, function (response) {
            _this.failIPVerification();
        });
    };
    WifiPage.prototype.showNoStatus = function () {
        this.mymatNoStatus = true;
    };
    WifiPage.prototype.showStatus = function () {
        var _this = this;
        this.mymatWifi = false;
        this.mymatStatus = true;
        this.showStatusTable = true;
        this.showLoading = false;
        this.isRunRoutineEnabled = true;
        clearInterval(this.testStatusInterval);
        clearInterval(this.testIPInterval);
        this.testIPInterval = setInterval(function () {
            _this.networkInterface.getWiFiIPAddress().then(function (response) {
                if (_this.verifyInternalIpAddress(response)) {
                    _this.verifyStatusValues(false);
                }
                else {
                    _this.mymatWifi = true;
                    _this.mymatStatus = false;
                    _this.showStatusTable = false;
                    _this.showLoading = true;
                    _this.isRunRoutineEnabled = false;
                    _this.failIPVerification();
                }
            }, function (response) {
                _this.mymatWifi = true;
                _this.mymatStatus = false;
                _this.showStatusTable = false;
                _this.showLoading = true;
                _this.isRunRoutineEnabled = false;
                _this.failIPVerification();
            });
        }, 3000);
    };
    WifiPage.prototype.verifyValues = function (response) {
        if (response.indexOf("<p><h4>Power: ") > -1) {
            var power = response.split("<p><h4>Power: ");
            power = power[1].split("</h4></p>");
            var coil1 = response.split("<tr><td>1.</td><td>");
            coil1 = coil1[2].split("</td></tr>");
            var coil2 = response.split("<tr><td>2.</td><td>");
            coil2 = coil2[2].split("</td></tr>");
            var coil3 = response.split("<tr><td>3.</td><td>");
            coil3 = coil3[2].split("</td></tr>");
            var coil4 = response.split("<tr><td>4.</td><td>");
            coil4 = coil4[2].split("</td></tr>");
            this.batteryCharge = power[0];
            var powerVal = power[0].substr(0, power[0].length - 1);
            if (powerVal > 75)
                this.batteryImg = 'assets/img/b100.png';
            else if (powerVal > 50)
                this.batteryImg = 'assets/img/b75.png';
            else if (powerVal > 25)
                this.batteryImg = 'assets/img/b50.png';
            else if (powerVal > 10)
                this.batteryImg = 'assets/img/b25.png';
            else
                this.batteryImg = 'assets/img/b10.png';
            this.coilText1 = coil1[0];
            this.coilText2 = coil2[0];
            this.coilText3 = coil3[0];
            this.coilText4 = coil4[0];
            return true;
        }
        else {
            return false;
        }
    };
    WifiPage.prototype.failIPVerification = function () {
        var _this = this;
        this.testIPInterval = setInterval(function () {
            _this.networkInterface.getWiFiIPAddress().then(function (response) {
                if (_this.verifyInternalIpAddress(response)) {
                    _this.verifyStatusValues();
                }
            });
        }, 3000);
    };
    /*failStatusVerification(){
      this.testStatusInterval = setInterval(() => {
        // timeout of mymat detection 180 segundos
        var failMyMatTest = this.apiService.test();
        failMyMatTest.then((response) => {
          if(this.verifyValues(response)){
            this.showStatus();
          }
        }, (response) => {
          if(this.intervalCount >= 5){
            this.showNoStatus();
          }
        });
  
        this.intervalCount += 1;
      }, 3000);
  
      /*var programs = '';
  
      for(var i = 1; i <= 4; i++){
        switch(i){
          case 1:
            this.storage.get(Constants.storageKeyBubble1).then((val) => {
              programs += "?P1=" + val.split("|")[3] + '&';
            });
            break;
          case 2:
            this.storage.get(Constants.storageKeyBubble2).then((val) => {
       858]
          programs += "P2=" + val.split("|")[3] + '&';
            });
            break;
          case 3:
            this.storage.get(Constants.storageKeyBubble3).then((val) => {
              programs += "P3=" + val.split("|")[3] + '&';
            });
            break;
          case 4:
            this.storage.get(Constants.storageKeyBubble4).then((val) => {
              programs += "P4=" + val.split("|")[3];
  
              this.showIframeStatus = true;
              this.mymatWifi = false;
              this.mymatStatus = true;
              this.showStatusTable = false;
              this.iframeUrl = this.sanitize.bypassSecurityTrustResourceUrl(Constants.myMatApiIndexUrl + programs);
            });
            break;
        }
      }* /
    }*/
    WifiPage.prototype.startRoutine = function () {
        var _this = this;
        /* ANTES DE COCRRER RUTINA VERIFICAR SI SE ESTA CONECTADO AL WIFI DEL MYMAT */
        this.showLoading = true;
        this.isRunRoutineEnabled = false;
        this.apiService.test().then(function (response) {
            _this.showLoading = false;
            _this.isRunRoutineEnabled = true;
            if (_this.verifyValues(response)) {
                /* CORRER RUTINA */
                clearInterval(_this.testStatusInterval);
                clearInterval(_this.testIPInterval);
                var program1Obj = '|' + _this.program1.name + '|' + _this.program1.runningtime + '|' + _this.program1.apiName;
                var program2Obj = '|' + _this.program2.name + '|' + _this.program2.runningtime + '|' + _this.program2.apiName;
                var program3Obj = '|' + _this.program3.name + '|' + _this.program3.runningtime + '|' + _this.program3.apiName;
                var program4Obj = '|' + _this.program4.name + '|' + _this.program4.runningtime + '|' + _this.program4.apiName;
                var programs = [
                    program1Obj,
                    program2Obj,
                    program3Obj,
                    program4Obj
                ];
                _this.apiService.start(programs).then(function (response) {
                    console.log(response + '');
                }).catch(function (response) {
                    /*setTimeout(() => {
                      var emailData = { error : response.data };
                      this.apiService.sendError(emailData).then((result) => {
                        console.log(response.data);
                      });
                    }, 120000);*/
                });
                // Poner rutina en las ultimas corridas
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].latestRoutinesKey).then(function (routines) {
                    var latestArray = [];
                    var t = new Date();
                    var day = t.getDate();
                    var monthIndex = t.getMonth();
                    var year = t.getFullYear();
                    var hours = t.getHours();
                    var minutes = t.getMinutes();
                    var programsArray = [];
                    for (var i = 0; i < programs.length; i++) {
                        programsArray.push({ "apiName": programs[i].split('|')[3], "name": __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */][programs[i].split('|')[1]] });
                    }
                    latestArray.push({ "day": day, "month": __WEBPACK_IMPORTED_MODULE_6__services_german_texts__["a" /* GermanTexts */][__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].monthNames[monthIndex]], "year": year, "hours": _this.fixZeroOnNumber(hours), "minutes": _this.fixZeroOnNumber(minutes), "programs": programsArray });
                    if (routines != null && routines[0] != null) {
                        latestArray.push(routines[0]);
                    }
                    if (routines != null && routines[1] != null) {
                        latestArray.push(routines[1]);
                    }
                    _this.storage.set(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].latestRoutinesKey, latestArray);
                });
                /* CORRER RUTINA */
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__playing_playing__["a" /* PlayingPage */]);
            }
            else {
                _this.showLoading = false;
                _this.isRunRoutineEnabled = true;
                _this.mymatWifi = true;
                _this.mymatStatus = false;
                _this.showStatusTable = false;
                _this.showLoading = true;
                _this.failIPVerification();
            }
        }, function (response) {
            _this.showLoading = false;
            _this.isRunRoutineEnabled = true;
            _this.mymatWifi = true;
            _this.mymatStatus = false;
            _this.showStatusTable = false;
            _this.showLoading = true;
            _this.failIPVerification();
        });
    };
    WifiPage.prototype.fixZeroOnNumber = function (val) {
        if (val < 10) {
            return '0' + val;
        }
        return val;
    };
    WifiPage.prototype.stop = function () {
        clearInterval(this.testStatusInterval);
        clearInterval(this.testIPInterval);
    };
    WifiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wifi',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\wifi\wifi.html"*/'<!--\n\n  Generated template for the WifiPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="bar">\n\n    <button ion-button menuToggle end class="button button-clear">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <div class="logo"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="home center">\n\n        <br>\n\n        <div *ngIf="mymatWifi">\n\n            <img src="assets/img/wifi.png">\n\n            <div class="titleinstructions">BITTE PAAR DEINEN MYMAT</div>\n\n            <br>\n\n            <p>Schritte zum Pairing Ihres MyMat</p>\n\n            <p>1. Schalte dein MyMat ein</p>\n\n            <p>2. Navigiere auf deinem Gerät zu deinen WLAN-Einstellungen</p>\n\n            <p>3. Verbinden Sie das WLAN Ihres Geräts mit Ihrem MyMat-Netzwerk</p>\n\n            <p>4. Ist einmal verbunden, kehren Sie zur MyMat-App zurück</p>\n\n            <!--<p class="interval-counter">0</p>-->\n\n            <br/>\n\n            <div *ngIf="mymatNoStatus">\n\n                <p>Wir konnten Ihr MyMat nicht finden</p>\n\n                <p>Bitte folgen Sie den Schritten, um dies zu tun</p>\n\n            </div>\n\n            <img *ngIf="showLoading" src="assets/img/loading.gif" width="200" />\n\n        </div>\n\n        <div *ngIf="mymatStatus">\n\n            <iframe *ngIf="showIframeStatus" height="100%" width="100%" [src]="iframeUrl" (click)="startRoutine()"></iframe>\n\n            <div *ngIf="showStatusTable" class="status-table divTable">\n\n                <div class="divTableHeading">\n\n                    <div class="divTableRow">\n\n                        <div class="divTableHead divTableCellFirstLeft">\n\n                            <h4>Batterieladung</h4>\n\n                        </div>\n\n                        <div class="divTableHead divTableCellFirstRight">\n\n                            <h4 id="battery">{{ batteryCharge }} <img src="{{ batteryImg }}" height="16"></h4>\n\n\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class="divTableBody">\n\n                    <div class="divTableRow">\n\n                        <div class="divTableCell">{{ coilText }} 1</div>\n\n                        <div class="divTableCell" id="coil1">{{ coilText1 }}</div>\n\n                    </div>\n\n                    <div class="divTableRow">\n\n                        <div class="divTableCell coilOdd">{{ coilText }} 2</div>\n\n                        <div class="divTableCell coilOdd" id="coil2">{{ coilText2 }}</div>\n\n                    </div>\n\n                    <div class="divTableRow">\n\n                        <div class="divTableCell">{{ coilText }} 3</div>\n\n                        <div class="divTableCell" id="coil3">{{ coilText3 }}</div>\n\n                    </div>\n\n                    <div class="divTableRow">\n\n                        <div class="divTableCell coilOdd divTableCellLastLeft">{{ coilText }} 4</div>\n\n                        <div class="divTableCell coilOdd divTableCellLastRight" id="coil4">{{ coilText4 }}</div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <p>&nbsp;</p>\n\n            <button [disabled]="!isRunRoutineEnabled" class="greenbtn start-routine" menu-close nav-transition="ios" nav-direction="forward" (click)="startRoutine()">STARTROUTINE</button>\n\n            <img *ngIf="showLoading" src="assets/img/loading.gif" width="200" />\n\n        </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\wifi\wifi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* APIServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network_interface__["a" /* NetworkInterface */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], WifiPage);
    return WifiPage;
}());

//# sourceMappingURL=wifi.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_constants__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_german_texts__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PlayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayingPage = (function () {
    function PlayingPage(navCtrl, navParams, storage, localNotifications, plt, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.localNotifications = localNotifications;
        this.plt = plt;
        this.zone = zone;
        var _this = this;
        document.addEventListener('resume', function () {
            var t = new Date();
            _this.resume(t.getTime());
        });
    }
    PlayingPage.prototype.simulateResume = function () {
        var t = new Date();
        this.resume(t.getTime() + 10);
    };
    PlayingPage.prototype.resume = function (now) {
        if (Math.round(now / 1000) > this.finishTime) {
            this.displayRunningTime = '00:00';
            this.timerRemain = 0;
            this.timerId++;
            this.startTimer(this.timerId);
        }
        else {
            var secondsLeft = this.timerRemain = this.finishTime - Math.round(now / 1000);
            this.timerId++;
            this.startTimer(this.timerId);
            this.displayRunningTime = this.convertSecondsToTime(secondsLeft);
        }
    };
    PlayingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var program1CurrentTimeDecreasing;
        var program2CurrentTimeDecreasing;
        var program3CurrentTimeDecreasing;
        var program4CurrentTimeDecreasing;
        for (var i = 1; i <= 4; i++) {
            switch (i) {
                case 1:
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* Constants */].storageKeyBubble1).then(function (val) {
                        var value = val.split('|');
                        _this.program1CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
                        program1CurrentTimeDecreasing = value[2];
                        _this.programTitle1 = typeof __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */][value[1]] === 'undefined' ? value[1] : __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */][value[1]];
                    });
                    break;
                case 2:
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* Constants */].storageKeyBubble2).then(function (val) {
                        var value = val.split('|');
                        _this.program2CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
                        program2CurrentTimeDecreasing = value[2];
                        _this.programTitle2 = typeof __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */][value[1]] === 'undefined' ? value[1] : __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */][value[1]];
                    });
                    break;
                case 3:
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* Constants */].storageKeyBubble3).then(function (val) {
                        var value = val.split('|');
                        _this.program3CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
                        program3CurrentTimeDecreasing = value[2];
                        _this.programTitle3 = typeof __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */][value[1]] === 'undefined' ? value[1] : __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */][value[1]];
                    });
                    break;
                case 4:
                    this.storage.get(__WEBPACK_IMPORTED_MODULE_3__services_constants__["a" /* Constants */].storageKeyBubble4).then(function (val) {
                        var value = val.split('|');
                        _this.program4CurrentTimeDecreasingAsTime = value[2]; //this.convertSecondsToTime(value[2]);
                        program4CurrentTimeDecreasing = value[2];
                        _this.programTitle4 = typeof __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */][value[1]] === 'undefined' ? value[1] : __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */][value[1]];
                        if (program1CurrentTimeDecreasing > program2CurrentTimeDecreasing && program1CurrentTimeDecreasing > program3CurrentTimeDecreasing && program1CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                            _this.displayRunningTime = program1CurrentTimeDecreasing; //this.convertSecondsToTime(program1CurrentTimeDecreasing);
                        else if (program2CurrentTimeDecreasing > program3CurrentTimeDecreasing && program2CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                            _this.displayRunningTime = program2CurrentTimeDecreasing; //this.convertSecondsToTime(program2CurrentTimeDecreasing);
                        else if (program3CurrentTimeDecreasing > program4CurrentTimeDecreasing)
                            _this.displayRunningTime = program3CurrentTimeDecreasing; //this.convertSecondsToTime(program3CurrentTimeDecreasing);
                        else
                            _this.displayRunningTime = program4CurrentTimeDecreasing; //this.convertSecondsToTime(program4CurrentTimeDecreasing);
                        _this.displayRunningTime = _this.displayRunningTime;
                        var t = new Date();
                        _this.finishTime = Math.round(t.getTime() / 1000) + _this.getSeconds(_this.displayRunningTime);
                        _this.timerRemain = _this.getSeconds(_this.displayRunningTime);
                        _this.timerId = 1;
                        _this.startTimer(_this.timerId);
                        var $this = _this;
                        _this.localNotifications.schedule({
                            id: 1,
                            title: 'MyMat Light',
                            text: __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */]['time-expire-text'],
                            sound: 'file://assets/sounds/' + (_this.plt.is('ios') ? 'gong_c5.m4r' : 'gong_c5.mp3'),
                            trigger: { at: new Date(t.getTime() + _this.getSeconds(_this.displayRunningTime) * 1000) }
                        });
                        _this.localNotifications.on("click").subscribe({ next: function (notification) {
                                if (notification.id == 1) {
                                    var t = new Date();
                                    $this.resume(t.getTime());
                                }
                            }
                        });
                    });
                    break;
            }
        }
    };
    PlayingPage.prototype.ionViewWillLeave = function () {
        this.timerRemain = 0;
    };
    PlayingPage.prototype.startTimer = function (id) {
        var _this = this;
        setTimeout(function () {
            if (_this.timerRemain == 0 || _this.timerId != id) {
                return;
            }
            _this.timerRemain--;
            _this.zone.run(function () {
                _this.displayRunningTime = _this.decreaseSecond(_this.displayRunningTime);
            });
            if (_this.timerRemain > 0) {
                _this.startTimer(_this.timerId);
            }
        }, 1000);
    };
    PlayingPage.prototype.decreaseSecond = function (time) {
        var minutesStr = time.substr(0, time.indexOf(':'));
        var minutes = minutesStr[0] == '0' ? parseInt(minutesStr[1]) : parseInt(minutesStr);
        var secondsStr = time.substr(time.indexOf(':') + 1);
        var seconds = secondsStr[0] == '0' ? parseInt(secondsStr[1]) : parseInt(secondsStr);
        if (seconds - 1 == -1) {
            minutesStr = minutes - 1 < 10 && minutes - 1 >= 0 ? '0' + (minutes - 1) : minutes - 1 == -1 ? '00' : '' + (minutes - 1);
            secondsStr = '59';
        }
        else {
            secondsStr = seconds - 1 < 10 ? '0' + (seconds - 1) : '' + (seconds - 1);
        }
        return minutesStr + ':' + secondsStr;
    };
    PlayingPage.prototype.getSeconds = function (time) {
        var minutesStr = time.substr(0, time.indexOf(':'));
        var minutes = minutesStr[0] == '0' ? parseInt(minutesStr[1]) : parseInt(minutesStr);
        var secondsStr = time.substr(time.indexOf(':') + 1);
        var seconds = secondsStr[0] == '0' ? parseInt(secondsStr[1]) : parseInt(secondsStr);
        return (minutes * 60) + seconds;
    };
    PlayingPage.prototype.convertSecondsToTime = function (timeInSeconds) {
        var minutes = Math.floor(timeInSeconds / 60);
        var minutesStr = "0" + minutes;
        var seconds = "0" + (timeInSeconds - minutes * 60);
        return minutesStr.substr(-2) + ":" + seconds.substr(-2);
    };
    PlayingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-playing',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\playing\playing.html"*/'<!--\n\n  Generated template for the PlayingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="bar">\n\n    <button ion-button menuToggle end class="button button-clear">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <div class="logo"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="home center">\n\n  <div class="list card paddingSmall">\n\n      <div class="item">\n\n\n\n          <h2>Verbleibende Zeit</h2>\n\n          <h3 style="color:white;">{{ displayRunningTime }}</h3>\n\n\n\n      </div>\n\n\n\n      <div class="item item-time item-body">\n\n          <div class="program-running-left">\n\n            <div class="program-running-title">{{ programTitle1 }}</div>\n\n            <div class="program-running-duration">{{ program1CurrentTimeDecreasingAsTime }}</div>\n\n          </div>\n\n      </div>\n\n\n\n      <div class="item item-time item-body">\n\n          <div class="program-running-left">\n\n            <div class="program-running-title">{{ programTitle2 }}</div>\n\n            <div class="program-running-duration">{{  program2CurrentTimeDecreasingAsTime }}</div>\n\n          </div>\n\n      </div>\n\n\n\n       <div class="item item-time item-body">\n\n          <div class="program-running-left">\n\n            <div class="program-running-title">{{ programTitle3 }}</div>\n\n            <div class="program-running-duration">{{  program3CurrentTimeDecreasingAsTime }}</div>\n\n          </div>\n\n      </div>\n\n\n\n      <div class="item item-time item-body">\n\n          <div class="program-running-left">\n\n            <div class="program-running-title">{{ programTitle4 }}</div>\n\n            <div class="program-running-duration">{{  program4CurrentTimeDecreasingAsTime }}</div>\n\n          </div>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\playing\playing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], PlayingPage);
    return PlayingPage;
}());

//# sourceMappingURL=playing.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n    <ion-header>\n      <ion-navbar class="bar">\n        <button ion-button menuToggle end class="button button-clear">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n          <div class="logo"></div>\n        </ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding class="home">\n\n        <div class="list card cardprogram">\n\n            <div class="item">\n\n                <h2 padding>HILFE</h2>\n\n            </div>\n\n            <div padding class="item item-body">\n                <div class="">Woher weiß ich, welche Programme ich wählen soll?</div>\n                <p class="lorems">\n                    Es ist immer gut, mit dem Ausbalancieren des Systems zu beginnen. Dies sind einige Möglichkeiten, wie Sie das mit beginnen können:Energiebilanzierung, E-Smog, Freude, Vitalität <br> <br> Wenn Sie Ihr Schlafmuster verbessern möchten - wählen Sie: <br> Energiebilanz, E-Smog, Relax, Schlaf <br> <br> If Sie möchten am Morgen etwas mehr Energie haben: <br> Energieausgleich, Energie-Booster, Konzentration (und jedes Programm, das mit einem Problem in Verbindung steht, mit dem Sie es zu tun haben - wie Schmerzen, Muskel, Gelenke, Kopfschmerzen usw.) <br> <br> Eine vollständige Liste der Programme und deren Verwendung bezüglich der Symptome finden Sie in der Bedienungsanleitung, die im Lieferumfang enthalten ist oder kostenlos online verfügbar ist.\n                </p>\n                <div class="">Welche Programme sollte ich am Abend vermeiden?</div>\n                <p class="lorems">\n                    Wenn Sie eine gute Nachtruhe haben wollen, ist es besser, Ihren Organismus nicht übermäßig zu stimulieren. Wenn Sie daran gewöhnt sind, abends Kaffee zu trinken und trotzdem schlafen zu können, können Sie alle Programme verwenden, aber wenn Sie empfindlicher sind - sollten Sie vor dem Schlafengehen nicht die folgenden Programme anwenden: Kreislauf, Immunsystem, Nebennieren, Erschöpfung, Konzentration und Energie Booster\n                </p>\n                <div class="">Wie beeinflussen elektromagnetische Felder meinen Körper?</div>\n                <p class="lorems">\n                    Alles in unserem Körper ist elektrisch, unsere Zellen kommunizieren mit elektromagnetischen Frequenzen, unser Herz erzeugt mit jedem Schlag elektromagnetische Wellen, unser Nervensystem kommuniziert, wenn Neuronen über Synapsen auf elektromagnetische Signale reagieren. In diesem Sinne können wir verstehen, wie externe magnetische, elektrische und elektromagnetische Felder mit jedem Aspekt unseres Körpers reagieren. Indem wir spezifische Frequenzen mit niedriger Intensität regulieren, können wir genau auswählen, worauf wir reagieren wollen, indem wir auf bestimmte Zellen, Organe und Gewebe einwirken.\n                </p>\n                <div class="">Wie hilft mir die Behandlung auf zellulärer Ebene?</div>\n                <p class="lorems">\n                    Durch das Aufladen von Magnetfeldern in der Umgebung von Zellmembranen öffnen sich Kanäle für eine bessere Nährstoffdurchdringung. Das Öffnen der Kanäle fördert auch eine einfachere Abfallbeseitigung und stellt die korrekte Zellfunktion effizient wieder her. Ein effizientes System von Zellen schafft effizientes Gewebe, das sich zu Organen zusammensetzt. Die Wiederherstellung der richtigen Funktion von der zellularen Ebene bringt vorteilhafte Langzeitwirkungen auf alle verwandten Probleme und verbessert das allgemeine Wohlbefinden. Eine gesunde Zellfunktion verringert auch den Bedarf an Zellersatz, verlangsamt Alterungsprozesse und Energieverschwendung.\n                </p>\n\n                <div class="">Kann die PEMF-Therapie mich vor zukünftigen Krankheiten schützen?</div>\n                <p class="lorems"> Effektiv arbeiten bei systematische Ebene wird die Möglichkeiten für die Entwicklung von Krankheiten verringern. Krankheiten beginnen auf zellulärer Ebene und Verletzungen müssen auf zellulärer Ebene beginnen zu heilen. Durch die Verwendung von gepulsten elektromagnetischen Frequenzen kann die allgemeine Zirkulation verbessert werden, wodurch Reparationsprozesse beschleunigt werden. Durch die Verbesserung der allgemeinen zellulären Gesundheit brechen sie weniger häufig ab. Gesunde Operationszellen beschleunigen die Rekuperation und gleichen körperliche Funktionen aus </p>\n\n                <div class="">Sind mir keine Magnetfelder schlecht?</div>\n                <p class="lorems">Der MyMat hat einen Frequenzbereich zwischen 1Hz bis 200kHz und Die EMF-Stärke überschreitet 10 Mikro-Tesla pro Kanal nicht. Der MyMat kann aufgrund seiner 4 Antennen bis zu 4 Kanäle gleichzeitig betreiben, also maximal 40 Mikro Tesla. Magnetfelder außerhalb der tiefen und extrem niedrigen Frequenzen wie Mikrowellen-, Infrarot-, Radio- und Ultraviolettfrequenzen haben unterschiedliche nachteilige Auswirkungen auf unsere Zellen und unseren Körper. Der größte Teil unseres Expositionsrisikos stammt von höheren Frequenzen wie Stromleitungen und Handys, die täglich an unseren Köpfen angeschlossen sind. Diese Frequenzen stellen höhere Risiken dar, da wir ständig mit ihnen konfrontiert sind und sie können Gewebeschäden auslösen, die Zellfunktion verändern und allgemeine zelluläre Schäden verursachen. Es ist praktisch unmöglich, ein Leben zu führen, das diese Frequenzen vermeidet, sie sind überall und dringen in alles ein. Wir können E-Smog nicht entkommen, aber wir können das MyMat verwenden, das mehrere Programme hat, die helfen können, schädliche Effekte von all unseren ständigen elektronischen Bombardements zu reduzieren, indem wir Frequenzen hinzufügen, die unseren Körper im Gleichgewicht halten und die gesunden, natürlichen Frequenzen erhalten. </p>\n\n                <div class="">Wird die PEMF-Therapie meine Medikamente ersetzen?</div>\n                <p class="lorems"> Die Therapie mit den gepulsten elektromagnetischen Frequenzen kann das allgemeine Wohlbefinden signifikant verbessern und viele negative Symptome verringern .. Es kann neben Behandlungen und Medikamenten verwendet werden, um die Ergebnisse zu verbessern. Es ist wichtig, mit medizinischen Fachleuten zu sprechen, bevor irgendwelche Behandlungen oder Medikamente ersetzt werden. Sobald ein richtiger Plan erstellt und Ergebnisse gesehen werden, ist es möglich, Behandlungen oder Medikamente zu reduzieren oder zu beseitigen. Fragen Sie immer nach medizinischen Ratschlägen oder Konsultationen, bevor Sie bestehende Behandlungen ändern oder ersetzen</p>\n\n                <div class="">Wie beeinflussen elektromagnetische Felder meinen Körper?</div>\n                <p class="lorems">Alles in unserem Körper ist elektrisch, unsere Zellen kommunizieren mit elektromagnetischen Frequenzen, unser Herz erzeugt elektromagnetische Wellen mit Jeder Schlag kommuniziert unser Nervensystem, wenn Neuronen über Synapsen auf elektromagnetische Signale reagieren. In diesem Sinne können wir verstehen, wie externe magnetische, elektrische und elektromagnetische Felder mit jedem Aspekt unserer</p>\n\n                <div class="">Könnten Magnetfelder eine Überdosierung verursachen?</div>\n                <p class="lorems"> Die MyMat arbeitet mit gepulsten Magnetfeld von sehr geringer Intensität eine gesunde Zelle in idealer Kapazität arbeitet, so dass Sie keine Notwendigkeit für mehr Energie und können nicht mehr Energie akzeptieren, so diese Frequenzen ignorieren .. Eine beschädigte oder defekte Zelle kann einen Teil dieser Energie absorbieren, aber es ist unmöglich, sie zu überlasten, da keine Möglichkeit besteht, mehr Energie zu speichern, als benötigt wird.</p>\n\n                <div class="">Was sind einige der grundlegenden positiven Wirkungen, die PEMFs auf meinen Körper haben werden? </div>\n                <p class="lorems">Verbesserung der Gewebeheilung<br>Schmerzreduktion<br>Energie steigern<br>Verbessere den Schlaf <br>Es macht das Weichgewebe flexibler <br>Stimulation Meridiana <br>Senkung des Blutdrucks<br>Gerinnungsfaktoren verbessern<br>Reduzierte Arthritis Aufnahme von<br>Immunsystem Stimulation<br>Entgiftung<br>Helfen Sie der nervösen Funktion <br>Verbesserung der Nährstoffaufnahme<br>Reduktion der Muskelspannung</p>>\n            </div>\n        </div>\n\n    </ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_german_texts__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams, formBuilder, apiService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.events = events;
        this.contactForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        this.cleanForm();
        this.response_text = '';
        this.changeButtonText();
    };
    ContactPage.prototype.changeButtonText = function () {
        this.button_send = __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */]['send-text'];
        // Mostrar texto en label debajo del boton
    };
    ContactPage.prototype.cleanForm = function () {
        this.contactDisabled = true;
        this.name_value = '';
        this.email_value = '';
        this.message_value = '';
    };
    ContactPage.prototype.attemptSendMail = function () {
        var _this = this;
        var emailData = { email: this.contactForm.value.email, name: this.contactForm.value.name, message: this.contactForm.value.message };
        this.apiService.runPost('contact_us.php', emailData).then(function (result) {
            var obj = result;
            if (obj.status == "ok") {
                _this.response_text = __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */]['email-success-message'];
                _this.button_send = __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */]['sent-text'];
                _this.cleanForm();
            }
            else {
                _this.response_text = __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */]['email-error-message'];
            }
        }, function (result) {
            _this.response_text = __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */]['email-error-message'];
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\contact\contact.html"*/'<!--\n\n  Generated template for the ContactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar class="bar">\n\n    <button ion-button menuToggle end class="button button-clear">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <div class="logo"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="home center">\n\n  <div class="list card cardprogram">\n\n    <div class="item">\n\n\n\n        <h2 padding>KONTAKTIEREN SIE UNS</h2>\n\n\n\n    </div>\n\n\n\n    <div padding class="item item-body">\n\n      <form [formGroup]="contactForm" (ngSubmit)="attemptSendMail()">\n\n        <p class="lorems center-forced">Setzen Sie sich mit uns in Verbindung, indem Sie das folgende Formular ausfüllen. <br/>Oder kontaktieren Sie uns unter <a href="mailto:support@healinghouse.life"> support@healinghouse.life </a></p>\n\n        <label class="item-input contact">\n\n          <ion-input type="text" placeholder="Name:" formControlName="name" value="{{ name_value }}"></ion-input>\n\n        </label><br>\n\n        <label class="item-input contact">\n\n          <ion-input type="email" placeholder="Email"  autocapitalize="none"formControlName="email" value="{{ email_value }}"></ion-input>\n\n        </label><br>\n\n        <label class="item-input contact">\n\n          <ion-textarea placeholder="Nachricht" formControlName="message" value="{{ message_value }}"></ion-textarea>\n\n        </label><br>\n\n        <button type="submit" ion-button [disabled]="!contactForm.valid" [disabled]="contactDisabled" class="button-contact button-calm">{{ button_send }}</button>\n\n        <div padding>\n\n          {{ response_text }}\n\n        </div>\n\n      </form>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* APIServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network_interface__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_date_picker__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_help_help__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_programs_programs__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_wifi_wifi__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_playing_playing__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_program_program__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_subscribe_subscribe__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_slider_slider__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_favorites_favorites__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_routines_routines__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_api_service_api_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_network__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_device__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // solo se usa para hacer la prueba de conexion con el MyMat



//import { Network } from '@ionic-native/network';



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_programs_programs__["a" /* ProgramsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_wifi_wifi__["a" /* WifiPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_playing_playing__["a" /* PlayingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_subscribe_subscribe__["a" /* SubscribePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_program_program__["a" /* ProgramPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_favorites_favorites__["a" /* FavoritesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_programs_programs__["a" /* ProgramsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_wifi_wifi__["a" /* WifiPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_playing_playing__["a" /* PlayingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_subscribe_subscribe__["a" /* SubscribePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_program_program__["a" /* ProgramPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_favorites_favorites__["a" /* FavoritesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_23__providers_routines_routines__["a" /* RoutinesProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_network_interface__["a" /* NetworkInterface */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_date_picker__["a" /* DatePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_api_service_api_service__["a" /* APIServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_german_texts__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_help_help__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_slider_slider__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, events) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */]['home-title'], component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'menuitemhome', isPush: false },
            { title: __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */]['help-title'], component: __WEBPACK_IMPORTED_MODULE_6__pages_help_help__["a" /* HelpPage */], icon: 'menuitemhelp', isPush: false },
            { title: __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */]['contact-title'], component: __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */], icon: 'menuitemcontact', isPush: false },
            { title: __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */]['fav-title'], component: __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__["a" /* FavoritesPage */], icon: 'menufavorites', isPush: true },
            { title: __WEBPACK_IMPORTED_MODULE_4__services_german_texts__["a" /* GermanTexts */]['slider-title'], component: __WEBPACK_IMPORTED_MODULE_8__pages_slider_slider__["a" /* SliderPage */], icon: 'menuiteminfo', isPush: true }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.isPush)
            this.nav.push(page.component);
        else
            this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n    <ion-list>\n\n      <div class="menutitle"><img src="assets/img/logomenu.png"></div>\n\n      <button menuClose ion-item class="item-button item-block item-md {{ p.icon }}" *ngFor="let p of pages" (click)="openPage(p)">\n\n        <label class="item-content" text-uppercase></label>\n\n        {{ p.title }}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = {
    localIPAddress: '192.168.0.',
    myMatApiStartUrl: 'http://192.168.1.3/start.htm',
    myMatApiIndexUrl: 'http://192.168.1.3/index.htm',
    myMatApiUrl: 'http://healinghouse.life/api/mymat/',
    storageKeyBubble1: 'MyMat_bubbleRoutineProgram1',
    storageKeyBubble2: 'MyMat_bubbleRoutineProgram2',
    storageKeyBubble3: 'MyMat_bubbleRoutineProgram3',
    storageKeyBubble4: 'MyMat_bubbleRoutineProgram4',
    storageKeyScrollTop: 'MyMat_scrollTop',
    storageKeyCurrentProgram: 'MyMat_currentProgram',
    deviceInfoKey: 'MyMatDevice',
    test_uuid: 'UUIDTEST-1234-5678-9100-000000004',
    latestRoutinesKey: 'latestRoutines',
    monthNames: [
        "january", "february", "march",
        "april", "may", "june", "july",
        "August", "September", "October",
        "november", "december"
    ],
    shortTitles: [
        'earth-element-upper',
        'fire-element-upper',
        'metal-element-upper',
        'water-element-upper',
        'wood-element-upper',
        'gallbladder-meridian-upper',
        'kidney-meridian-upper',
        'heart-meridian-upper',
        'large-intestine-meridian-upper',
        'liver-meridian-upper',
        'lung-meridian-upper',
        'pericardium-meridian-upper',
        'small-intestine-meridian-upper',
        'spleen-pancreas-meridian-upper',
        'stomach-meridian-upper',
        'triple-warmer-meridian-upper',
        'urinary-bladder-meridian-upper'
    ]
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Network } from '@ionic-native/network';


//import * as $ from "jquery";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var APIServiceProvider = (function () {
    function APIServiceProvider(http, httpNative, httpModule) {
        this.http = http;
        this.httpNative = httpNative;
        this.httpModule = httpModule;
    }
    APIServiceProvider.prototype.test_language = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].myMatApiIndexUrl)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    APIServiceProvider.prototype.test = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return new Promise(function (resolve, reject) {
            _this.httpModule.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].myMatApiIndexUrl, { headers: headers })
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["timeout"])(5000) //5 seconds
            )
                .map(function (res) { return res.text(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    APIServiceProvider.prototype.sendError = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // watch network for a connection
            /*let connectSubscription = this.network.onConnect().subscribe(() => {*/
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.httpModule.post(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].myMatApiUrl + 'report_error.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
            /*});*/
        });
    };
    APIServiceProvider.prototype.sendEmail = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // watch network for a connection
            /*let connectSubscription = this.network.onConnect().subscribe(() => {*/
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.httpModule.post(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].myMatApiUrl + 'contact_us.php', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
            /*});*/
        });
    };
    APIServiceProvider.prototype.runPost = function (scriptFile, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].myMatApiUrl + scriptFile, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
            /*});*/
        });
    };
    APIServiceProvider.prototype.start = function (programs) {
        var program1 = programs[0].split("|")[3];
        var program2 = programs[1].split("|")[3];
        var program3 = programs[2].split("|")[3];
        var program4 = programs[3].split("|")[3];
        /*var formData = new FormData();
        formData.append('P1', program1);
        formData.append('P2', program2);
        formData.append('P3', program3);
        formData.append('P4', program4);*/
        var params = "P1=" + program1 + "&P2=" + program2 + "&P3=" + program3 + "&P4=" + program4;
        return this.httpNative.get(__WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* Constants */].myMatApiStartUrl + '?' + params, "", {});
    };
    APIServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], APIServiceProvider);
    return APIServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_routines_routines__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_german_texts__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = (function () {
    function FavoritesPage(navParams, viewCtrl, routines, formBuilder, storage, apiService, network, loadingCtrl, alertCtrl, zone, events) {
        var _this = this;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.routines = routines;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.apiService = apiService;
        this.network = network;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.events = events;
        this.showSaveForm = true;
        this.showLoadingListing = false;
        this.isDeviceOnline = true;
        var programs = this.routines.getPrograms();
        if (programs[0] && programs[1] && programs[2] && programs[3]) {
            this.program1 = __WEBPACK_IMPORTED_MODULE_7__services_german_texts__["a" /* GermanTexts */][programs[0]];
            this.program2 = __WEBPACK_IMPORTED_MODULE_7__services_german_texts__["a" /* GermanTexts */][programs[1]];
            this.program3 = __WEBPACK_IMPORTED_MODULE_7__services_german_texts__["a" /* GermanTexts */][programs[2]];
            this.program4 = __WEBPACK_IMPORTED_MODULE_7__services_german_texts__["a" /* GermanTexts */][programs[3]];
        }
        this.saveRoutineForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        if (navParams.get('showSave'))
            this.showSaveForm = true;
        else
            this.showSaveForm = false;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
                _this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].deviceInfoKey).then(function (device) {
                    _this.loadFavoriteList(device.email);
                });
            });
        });
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].deviceInfoKey).then(function (device) {
            if (typeof device !== 'undefined' && device != null)
                _this.loadFavoriteList(device.email);
        });
    };
    FavoritesPage.prototype.loadFavoriteList = function (email) {
        var _this = this;
        var formData = new FormData();
        //formData.append('uuid', uuid);
        formData.append('type', 'get');
        formData.append('email', email);
        if (this.isDeviceOnline) {
            this.showLoadingListing = true;
            this.apiService.runPost('favorites.php', formData).then(function (result) {
                _this.showLoadingListing = false;
                _this.responseData = result;
                _this.favoritesList = _this.responseData.favorites;
            }, function (err) {
                _this.showLoadingListing = false;
                console.log(err);
            });
        }
    };
    FavoritesPage.prototype.dismiss = function (event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.viewCtrl.dismiss();
    };
    FavoritesPage.prototype.delete = function (event, id) {
        var _this = this;
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        var formData = new FormData();
        //formData.append('uuid', uuid);
        formData.append('type', 'del');
        formData.append('id', id);
        this.apiService.runPost('favorites.php', formData).then(function (result) {
            _this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].deviceInfoKey).then(function (device) {
                _this.loadFavoriteList(device.email);
            });
        });
    };
    FavoritesPage.prototype.showProgram = function (id, name, program1, program2, program3, program4) {
        var _this = this;
        var program_1 = (program1 == 'E-SMOG' ? program1 : __WEBPACK_IMPORTED_MODULE_7__services_german_texts__["a" /* GermanTexts */][program1]);
        var program_2 = (program2 == 'E-SMOG' ? program2 : __WEBPACK_IMPORTED_MODULE_7__services_german_texts__["a" /* GermanTexts */][program2]);
        var program_3 = (program3 == 'E-SMOG' ? program3 : __WEBPACK_IMPORTED_MODULE_7__services_german_texts__["a" /* GermanTexts */][program3]);
        var program_4 = (program4 == 'E-SMOG' ? program4 : __WEBPACK_IMPORTED_MODULE_7__services_german_texts__["a" /* GermanTexts */][program4]);
        var alert = this.alertCtrl.create({
            title: 'Rutina - ' + name,
            message: program_1 + '\n' + program_2 + '\n' + program_3 + '\n' + program_4,
            buttons: [
                {
                    text: __WEBPACK_IMPORTED_MODULE_7__services_german_texts__["a" /* GermanTexts */]['choose'],
                    handler: function (data) {
                        _this.events.publish('addProgramsEvent', { name: program1 }, { name: program2 }, { name: program3 }, { name: program4 });
                    }
                }
            ]
        });
        alert.present();
        // Mostrar texto en label debajo del boton
    };
    FavoritesPage.prototype.attemptSaveFavorite = function () {
        var _this = this;
        this.response_text = '';
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].deviceInfoKey).then(function (device) {
            var formData = new FormData();
            var programs = _this.routines.getPrograms();
            formData.append('type', 'new');
            formData.append('email', device.email);
            formData.append('name', _this.saveRoutineForm.value.name);
            formData.append('program1', programs[0]);
            formData.append('program2', programs[1]);
            formData.append('program3', programs[2]);
            formData.append('program4', programs[3]);
            _this.apiService.runPost('favorites.php', formData).then(function (result) {
                _this.responseData = result;
                if (_this.responseData.status == 'ok') {
                    _this.showSaveForm = false;
                    _this.favoritesList = _this.responseData.favorites;
                }
            });
        });
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\favorites\favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Lieblingsroutinen\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Rückkehr</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Your device is offline</ion-item>\n</ion-header>\n\n<ion-content>\n  <div padding *ngIf="showSaveForm">\n    <div text-center text-uppercase>Fügen Sie diese Favoriten hinzu</div>\n    <form [formGroup]="saveRoutineForm" (ngSubmit)="attemptSaveFavorite()">\n      <ion-list>\n        <ion-item class="item-input contact">\n          <ion-input type="text" placeholder="Name:" formControlName="name" padding></ion-input>\n        </ion-item>\n        <ion-item>\n          <p>{{ program1 }}</p>\n          <p>{{ program2 }}</p>\n          <p>{{ program3 }}</p>\n          <p>{{ program4 }}</p>\n        </ion-item>\n        <ion-item>\n          <button type="submit" ion-button item-left [disabled]="!saveRoutineForm.valid" class="button-contact button-calm">Sparen</button>\n          <button ion-button icon-only item-end (click)="dismiss($event)" class="button-contact button-calm">\n            <span ion-text color="primary" showWhen="ios">Cancel</span>\n            <span ion-text showWhen="android,windows">Cancel</span>\n          </button>\n        </ion-item>\n      </ion-list>\n    </form>\n  </div>\n  <div padding-top>\n    <div text-center text-uppercase>Meine Favoriten</div>\n    <div *ngIf="showLoadingListing" text-center>Wird geladen...</div>\n    <div *ngIf="!isDeviceOnline" text-center>Verbinden Sie das Gerät mit Ihren bevorzugten Routinen...</div>\n    <ion-item *ngFor="let item of favoritesList" (click)="showProgram(item.id, item.name, item.program1, item.program2, item.program3, item.program4)">\n      {{item.name}}\n      <button ion-button icon-only item-end (click)="delete($event, item.id)">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-item>\n  </div>\n</ion-content>'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\favorites\favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_routines_routines__["a" /* RoutinesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__["a" /* APIServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutinesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offline_data__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_german_texts__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the RoutinesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RoutinesProvider = (function () {
    function RoutinesProvider(storage) {
        this.storage = storage;
        console.log('Hello RoutinesProvider Provider');
    }
    RoutinesProvider.prototype.setProgram = function (index, prog) {
        switch (index) {
            case 1:
                this.program1 = prog;
                break;
            case 2:
                this.program2 = prog;
                break;
            case 3:
                this.program3 = prog;
                break;
            case 4:
                this.program4 = prog;
                break;
        }
    };
    RoutinesProvider.prototype.cleanPrograms = function () {
        this.program1 = null;
        this.program2 = null;
        this.program3 = null;
        this.program4 = null;
    };
    RoutinesProvider.prototype.setPrograms = function (prog1, prog2, prog3, prog4) {
        this.program1 = prog1;
        this.program2 = prog2;
        this.program3 = prog3;
        this.program4 = prog4;
    };
    RoutinesProvider.prototype.getPrograms = function () {
        return [this.program1, this.program2, this.program3, this.program4];
    };
    RoutinesProvider.prototype.getKey = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RoutinesProvider.prototype.addPrograms = function (routineName, program1, program2, program3, program4) {
        var objProgram1 = this.getProgram(program1);
        var objProgram2 = this.getProgram(program2);
        var objProgram3 = this.getProgram(program3);
        var objProgram4 = this.getProgram(program4);
        this.insertPreSetProgram(routineName, objProgram1, objProgram2, objProgram3, objProgram4);
        this.setPrograms(objProgram1.name, objProgram2.name, objProgram3.name, objProgram4.name);
        return [objProgram1.name, objProgram2.name, objProgram3.name, objProgram4.name];
    };
    RoutinesProvider.prototype.getProgram = function (name) {
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs.length; i++) {
            var program = __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs[i];
            if (program.apiName == name || program.name == name.name || program.name == name) {
                var text = __WEBPACK_IMPORTED_MODULE_3__services_german_texts__["a" /* GermanTexts */][program.name];
                program.textName = text ? text : program.name;
                return program;
            }
        }
    };
    RoutinesProvider.prototype.insertPreSetProgram = function (routineName, program1, program2, program3, program4) {
        this.storage.set('MyMat_routineName', routineName);
        this.addProgramToRoutine(1, "", program1.name, program1.runningtime, program1.apiName);
        this.addProgramToRoutine(2, "", program2.name, program2.runningtime, program2.apiName);
        this.addProgramToRoutine(3, "", program3.name, program3.runningtime, program3.apiName);
        this.addProgramToRoutine(4, "", program4.name, program4.runningtime, program4.apiName);
    };
    RoutinesProvider.prototype.addProgramToRoutine = function (currentBubbleSlot, idProgram, programName, programRunningTime, apiName) {
        if (currentBubbleSlot == 1) {
            this.storage.set('MyMat_bubbleRoutineProgram1', idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName);
        }
        else if (currentBubbleSlot == 2) {
            this.storage.set('MyMat_bubbleRoutineProgram2', idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName);
        }
        else if (currentBubbleSlot == 3) {
            this.storage.set('MyMat_bubbleRoutineProgram3', idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName);
        }
        else if (currentBubbleSlot == 4) {
            this.storage.set('MyMat_bubbleRoutineProgram4', idProgram + "|" + programName + "|" + programRunningTime + "|" + apiName);
        }
    };
    RoutinesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], RoutinesProvider);
    return RoutinesProvider;
}());

//# sourceMappingURL=routines.js.map

/***/ })

},[264]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9zbGlkZXIvc2xpZGVyLnRzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5IiwiLi4vLi4vc3JjIGxhenkiLCIuLi8uLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3N1YnNjcmliZS9zdWJzY3JpYmUudHMiLCIuLi8uLi9zcmMvc2VydmljZXMvZ2VybWFuLXRleHRzLnRzIiwiLi4vLi4vc3JjL3NlcnZpY2VzL29mZmxpbmVfZGF0YS50cyIsIi4uLy4uL3NyYy9wYWdlcy9wcm9ncmFtcy9wcm9ncmFtcy50cyIsIi4uLy4uL3NyYy9wYWdlcy9wcm9ncmFtL3Byb2dyYW0udHMiLCIuLi8uLi9zcmMvcGFnZXMvd2lmaS93aWZpLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3BsYXlpbmcvcGxheWluZy50cyIsIi4uLy4uL3NyYy9wYWdlcy9oZWxwL2hlbHAudHMiLCIuLi8uLi9zcmMvcGFnZXMvY29udGFjdC9jb250YWN0LnRzIiwiLi4vLi4vc3JjL2FwcC9tYWluLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLi4vLi4vc3JjL3NlcnZpY2VzL2NvbnN0YW50cy50cyIsIi4uLy4uL3NyYy9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UudHMiLCIuLi8uLi9zcmMvcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy50cyIsIi4uLy4uL3NyYy9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDWTtBQUN4QjtBQUNpQjtBQUNqQjtBQUN6Qzs7Ozs7R0FLRztBQU1IO0lBS0Usb0JBQW1CLE9BQXNCLEVBQVMsU0FBb0IsRUFBUyxHQUFhLEVBQVMsT0FBZ0I7UUFBbEcsWUFBTyxHQUFQLE9BQU8sQ0FB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LE9BQU8sQ0FBQyxDQUFDO1FBQzlILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQzlILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQzlILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQzlILENBQUM7SUFDTCxDQUFDO0lBNUZRLGdCQUFnQjtRQUQ1Qix5RUFBVSxFQUFFO3lDQU9pQiwrREFBTztPQU54QixnQkFBZ0IsQ0E2RjVCO0lBQUQsdUJBQUM7Q0FBQTtBQTdGNEIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIFNsaWRlcyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IEdlcm1hblRleHRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2VybWFuLXRleHRzJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFNsaWRlclBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2Utc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlclBhZ2Uge1xuICBwdWJsaWMgc2hvd0hlYWRlciA6IGJvb2xlYW47XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcycpIHNsaWRlczogU2xpZGVzO1xuICBwdWJsaWMgaW1hZ2VzIDogQXJyYXk8c3RyaW5nPjtcbiAgcHVibGljIGN1bHR1cmU6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHVibGljIHBsdDogUGxhdGZvcm0sIHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlKSB7XG4gICAgdGhpcy5zaG93SGVhZGVyID0gZmFsc2U7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICB0aGlzLmN1bHR1cmUgPSBHZXJtYW5UZXh0c1snY3VsdHVyZSddO1xuICAgIHRoaXMuaW1hZ2VzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDw9IDU7IGkrKyl7XG4gICAgICB0aGlzLmltYWdlcy5wdXNoKCcuL2Fzc2V0cy9pbWdzL2luc3RydWN0aW9ucy8nICsgdGhpcy5jdWx0dXJlICsgJy8nKyBpICsnLnBuZycpO1xuICAgIH1cbiAgfVxuXG4gIHNraXBJbnN0cnVjdGlvbnMoKXtcbiAgICB0aGlzLm5hdkN0cmwucG9wVG9Sb290KCk7XG4gIH1cblxuICBuZXh0KCkge1xuICAgIHRoaXMuc2xpZGVzLnNsaWRlTmV4dCgpO1xuICB9XG5cbiAgcHJldigpIHtcbiAgICB0aGlzLnNsaWRlcy5zbGlkZVByZXYoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3NsaWRlci9zbGlkZXIudHMiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXRjaGVkIGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSAxNDU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9lc201IGxhenlcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXRjaGVkIGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSAxODk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMgbGF6eVxuLy8gbW9kdWxlIGlkID0gMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIEV2ZW50cywgTW9kYWxDb250cm9sbGVyLCBDb250ZW50IH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgU3Vic2NyaWJlUGFnZSB9IGZyb20gJy4uL3N1YnNjcmliZS9zdWJzY3JpYmUnO1xuaW1wb3J0IHsgUm91dGluZXNQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9yb3V0aW5lcy9yb3V0aW5lcyc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgR2VybWFuVGV4dHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nZXJtYW4tdGV4dHMnO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBEZXZpY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RldmljZSc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZ3JhbXNQYWdlIH0gZnJvbSAnLi4vcHJvZ3JhbXMvcHJvZ3JhbXMnO1xuaW1wb3J0IHsgV2lmaVBhZ2UgfSBmcm9tICcuLi93aWZpL3dpZmknO1xuaW1wb3J0IHsgRmF2b3JpdGVzUGFnZSB9IGZyb20gJy4uL2Zhdm9yaXRlcy9mYXZvcml0ZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG4gIEBWaWV3Q2hpbGQoQ29udGVudCkgY29udGVudDogQ29udGVudDtcbiAgcHVibGljIGJ1YmJsZXNOYW1lczEgOiBzdHJpbmc7XG4gIHB1YmxpYyBidWJibGVzTmFtZXMyIDogc3RyaW5nO1xuICBwdWJsaWMgYnViYmxlc05hbWVzMyA6IHN0cmluZztcbiAgcHVibGljIGJ1YmJsZXNOYW1lczQgOiBzdHJpbmc7XG4gIHB1YmxpYyBFbmFibGVSdW5Sb3V0aW5lIDogYm9vbGVhbjtcbiAgcHVibGljIGJ1YmJsZXNDdXJyZW50U3RhdGUxIDogYm9vbGVhbjtcbiAgcHVibGljIGJ1YmJsZXNDdXJyZW50U3RhdGUyIDogYm9vbGVhbjtcbiAgcHVibGljIGJ1YmJsZXNDdXJyZW50U3RhdGUzIDogYm9vbGVhbjtcbiAgcHVibGljIGJ1YmJsZXNDdXJyZW50U3RhdGU0IDogYm9vbGVhbjtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIG9mZmxpbmVfZGV2aWNlIDogc3RyaW5nO1xuICBwdWJsaWMgc2hvd0FkZEZhdm9yaXRlQnV0dG9uIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd0xhdGVzdFNlY3Rpb246IGJvb2xlYW47XG4gIHB1YmxpYyBsYXRlc3RSb3V0aW5lcyA6IGFueTtcbiAgcHVibGljIHRhYl9idWJibGUgOiBzdHJpbmc7XG4gIHB1YmxpYyBydW5fcm91dGluZSA6IHN0cmluZztcbiAgcHVibGljIGFkZF9mYXZvcml0ZSA6IHN0cmluZztcbiAgcHVibGljIGNsZWFuX3JvdXRpbmUgOiBzdHJpbmc7XG4gIHB1YmxpYyBsYXRlc3Rfcm91dGluZXMgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIHJvdXRpbmVzOiBSb3V0aW5lc1Byb3ZpZGVyLFxuICAgIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHB1YmxpYyBldmVudHM6IEV2ZW50cywgcHJpdmF0ZSBkZXZpY2U6IERldmljZSxcbiAgICBwdWJsaWMgYXBpU2VydmljZSA6IEFQSVNlcnZpY2VQcm92aWRlciwgcHVibGljIG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyKSB7XG4gICAgdGhpcy50YWJfYnViYmxlID0gR2VybWFuVGV4dHNbJ3RhcC1idWJibGUnXTtcbiAgICB0aGlzLnJ1bl9yb3V0aW5lID0gR2VybWFuVGV4dHNbJ3J1bi1yb3V0aW5lJ107XG4gICAgdGhpcy5hZGRfZmF2b3JpdGUgPSBHZXJtYW5UZXh0c1snYWRkLWZhdm9yaXRlJ107XG4gICAgdGhpcy5jbGVhbl9yb3V0aW5lID0gR2VybWFuVGV4dHNbJ2NsZWFuLXJvdXRpbmUnXTtcblxuICAgIC8vdGhpcy5jaGVja0FsbEJ1YmJsZXMoKTtcbiAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoJ3NoYXJlc0J1YmJsZXMnLCAoYnViYmxlcykgPT4ge1xuICAgICAgZm9yKHZhciBpID0gMTsgaSA8PSBidWJibGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzKGksIGJ1YmJsZXNbaSAtIDFdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuQWxsQnViYmxlc0NoZWNrZWQodGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZXZlbnRzLnN1YnNjcmliZSgnYWRkUHJvZ3JhbXNFdmVudCcsIChwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zLCBwcm9ncmFtNCkgPT4ge1xuICAgICAgdGhpcy5uYXZDdHJsLnBvcCgpO1xuICAgICAgY29uc29sZS5sb2cocHJvZ3JhbTEpO1xuICAgICAgbGV0IGJ1YmJsZXMgPSB0aGlzLnJvdXRpbmVzLmFkZFByb2dyYW1zKCcnLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zLCBwcm9ncmFtNCk7XG4gICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKFwic2hhcmVzQnViYmxlc1wiLCBidWJibGVzKTtcbiAgICB9KTtcbiAgICB0aGlzLkFsbEJ1YmJsZXNDaGVja2VkKHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbXMoKSk7XG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vdGhpcy5uYXZDdHJsLnB1c2goU3Vic2NyaWJlUGFnZSwgeyBjYWxsQmFja1BhZ2UgOiAnbm9uZScgfSk7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuZGV2aWNlSW5mb0tleSkudGhlbigoaW5mbyk9PntcbiAgICAgIGlmKHR5cGVvZiBpbmZvID09PSAndW5kZWZpbmVkJyB8fCBpbmZvID09IG51bGwpe1xuICAgICAgICAvKmlmKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnY29yZG92YScpKXsqL1xuICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgIHZhciBfdXVpZCA9IENvbnN0YW50cy50ZXN0X3V1aWQ7XG4gICAgICAgICAgaWYod2luZG93Lmhhc093blByb3BlcnR5KCdjb3Jkb3ZhJykpe1xuICAgICAgICAgICAgX3V1aWQgPSB0aGlzLmRldmljZS51dWlkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3V1aWQnLCBfdXVpZCk7XG5cbiAgICAgICAgICAvL3ZhciBkYXRhID0geyAndXVpZCcgOiBDb25zdGFudHMudGVzdF91dWlkIH07XG5cbiAgICAgICAgICB0aGlzLmFwaVNlcnZpY2UucnVuUG9zdCgnY2hlY2tfZGV2aWNlLnBocCcsZm9ybURhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2hlY2tfZGV2aWNlIHN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9iaiA6IGFueSA9IHJlc3VsdDtcbiAgICAgICAgICAgIGlmIChvYmouZm91bmQgPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgLy8gZGVzcGxpZWdhIGxhIHZpc3RhIGRlIGluc2VyY2lvbiBkZSBkYXRvc1xuICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwucHVzaChTdWJzY3JpYmVQYWdlLCB7IGNhbGxCYWNrUGFnZSA6ICdub25lJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXksIHsgXCJlbWFpbFwiIDogb2JqLmVtYWlsLCBcInV1aWRcIiA6IF91dWlkIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NoZWNrX2RldmljZSBlcnJvciAnICsgcmVzdWx0KTtcbiAgICAgICAgICAgIC8vdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgICAgICAgLyp0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5TGFuZykudGhlbigobGFuZyk9PntcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGxhbmcpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZmxpbmVfZGV2aWNlID0gdmFsdWVbJ29mZmxpbmUtZGV2aWNlLXRleHQtMiddO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pOyovXG4gICAgICAgICAgfSk7XG4gICAgICAgIC8qfSovXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRQcm9ncmFtcyhyb3V0aW5lTmFtZSwgcHJvZ3JhbTAsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMpe1xuICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ2FkZFByb2dyYW1zRXZlbnQnLCBwcm9ncmFtMCwgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMyk7XG4gICAgdGhpcy5jb250ZW50LnNjcm9sbFRvKDAsIDAsIDEwMCk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5sYXRlc3RSb3V0aW5lc0tleSkudGhlbigobGF0ZXN0cyk9PntcbiAgICAgIGlmKGxhdGVzdHMpe1xuICAgICAgICB0aGlzLnNob3dMYXRlc3RTZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYXRlc3RSb3V0aW5lcyA9IGxhdGVzdHM7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGlzLnNob3dMYXRlc3RTZWN0aW9uID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvcGVuQWRkRmF2b3JpdGUoKXtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChpbmZvKT0+e1xuICAgICAgaWYodHlwZW9mIGluZm8gPT09ICd1bmRlZmluZWQnIHx8IGluZm8gPT0gbnVsbCl7XG4gICAgICAgIC8vIGRlc3BsaWVnYSBsYSB2aXN0YSBkZSBpbnNlcmNpb24gZGUgZGF0b3NcbiAgICAgICAgdGhpcy5uYXZDdHJsLnB1c2goU3Vic2NyaWJlUGFnZSwgeyBjYWxsQmFja1BhZ2UgOiAnZmF2b3JpdGVzJyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcm9maWxlTW9kYWwgPSB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoRmF2b3JpdGVzUGFnZSwgeyAnc2hvd1NhdmUnOiB0cnVlIH0pO1xuICAgICAgICBwcm9maWxlTW9kYWwucHJlc2VudCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlUHJvZ3JhbUZyb21Sb3V0aW5lKHByZyl7XG4gICAgY29uc29sZS5sb2coJ2hvbGQ6ICcgKyBwcmcpO1xuICB9XG5cbiAgc2VsZWN0QnViYmxlKHByZywgYWRkKXtcbiAgICB0aGlzLm5hdkN0cmwucHVzaChQcm9ncmFtc1BhZ2UsIHsgYnViYmxlOiBwcmcgfSk7XG4gIH1cblxuICBydW5Sb3V0aW5lKCl7XG4gICAgdmFyIHByb2dyYW1zID0gdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpO1xuICAgIGlmKHRoaXMuQWxsQnViYmxlc0NoZWNrZWQocHJvZ3JhbXMpKXtcbiAgICAgIHRoaXMubmF2Q3RybC5wdXNoKFxuICAgICAgICBXaWZpUGFnZSxcbiAgICAgICAgeyBwcm9nMTogdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtKHByb2dyYW1zWzBdKSwgcHJvZzI6IHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbShwcm9ncmFtc1sxXSksIHByb2czOiB0aGlzLnJvdXRpbmVzLmdldFByb2dyYW0ocHJvZ3JhbXNbMl0pLCBwcm9nNDogdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtKHByb2dyYW1zWzNdKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBBbGxCdWJibGVzQ2hlY2tlZChwcm9ncmFtcyl7XG5cbiAgICBpZih0eXBlb2YgcHJvZ3JhbXNbMF0gIT09ICd1bmRlZmluZWQnICYmIHByb2dyYW1zWzBdICE9IG51bGwgJiYgcHJvZ3JhbXNbMF0ubGVuZ3RoID4gMCAmJlxuICAgIHR5cGVvZiBwcm9ncmFtc1sxXSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvZ3JhbXNbMV0gIT0gbnVsbCAmJiBwcm9ncmFtc1sxXS5sZW5ndGggPiAwICYmXG4gICAgdHlwZW9mIHByb2dyYW1zWzJdICE9PSAndW5kZWZpbmVkJyAmJiBwcm9ncmFtc1syXSAhPSBudWxsICYmIHByb2dyYW1zWzJdLmxlbmd0aCA+IDAgJiZcbiAgICB0eXBlb2YgcHJvZ3JhbXNbM10gIT09ICd1bmRlZmluZWQnICYmIHByb2dyYW1zWzNdICE9IG51bGwgJiYgcHJvZ3JhbXNbM10ubGVuZ3RoID4gMCl7XG4gICAgICAgIHRoaXMuRW5hYmxlUnVuUm91dGluZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd0FkZEZhdm9yaXRlQnV0dG9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRoaXMuRW5hYmxlUnVuUm91dGluZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dBZGRGYXZvcml0ZUJ1dHRvbiA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuRW5hYmxlUnVuUm91dGluZTtcbiAgfVxuXG4gIGNsZWFuUm91dGluZSgpe1xuICAgIHRoaXMucm91dGluZXMuY2xlYW5Qcm9ncmFtcygpO1xuICAgIHRoaXMuQWxsQnViYmxlc0NoZWNrZWQodGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMSwnJyk7XG4gICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTIsJycpO1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUzLCcnKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlNCwnJyk7XG4gICAgdGhpcy51cGRhdGVCdWJibGVzKDEsJycpO1xuICAgIHRoaXMudXBkYXRlQnViYmxlcygyLCcnKTtcbiAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoMywnJyk7XG4gICAgdGhpcy51cGRhdGVCdWJibGVzKDQsJycpO1xuICAgIHRoaXMuc2hvd0FkZEZhdm9yaXRlQnV0dG9uID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUJ1YmJsZXMoYnViYmxlLG5hbWUpe1xuICAgIHN3aXRjaChidWJibGUpe1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpZih0eXBlb2YgbmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNDdXJyZW50U3RhdGUxID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczEgPSB0eXBlb2YgR2VybWFuVGV4dHNbbmFtZV0gPT09ICd1bmRlZmluZWQnID8gbmFtZSA6IEdlcm1hblRleHRzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpZih0eXBlb2YgbmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNDdXJyZW50U3RhdGUyID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczIgPSB0eXBlb2YgR2VybWFuVGV4dHNbbmFtZV0gPT09ICd1bmRlZmluZWQnID8gbmFtZSA6IEdlcm1hblRleHRzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMiA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMiA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpZih0eXBlb2YgbmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNDdXJyZW50U3RhdGUzID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczMgPSB0eXBlb2YgR2VybWFuVGV4dHNbbmFtZV0gPT09ICd1bmRlZmluZWQnID8gbmFtZSA6IEdlcm1hblRleHRzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMyA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBpZih0eXBlb2YgbmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmFtZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNDdXJyZW50U3RhdGU0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczQgPSB0eXBlb2YgR2VybWFuVGV4dHNbbmFtZV0gPT09ICd1bmRlZmluZWQnID8gbmFtZSA6IEdlcm1hblRleHRzW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlNCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzNCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qcHJpdmF0ZSBjaGVja0FsbEJ1YmJsZXMoKXtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMSkudGhlbigodmFsKT0+e1xuICAgICAgaWYodmFsICE9PSBudWxsKXtcbiAgICAgICAgdmFyIG5hbWUgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzKDEsbmFtZSk7XG4gICAgICAgIHRoaXMucm91dGluZXMuc2V0UHJvZ3JhbSgxLG5hbWUpXG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdmFyIGVtYWlsRGF0YSA9IHsgYXJlYSA6ICdjaGVja0FsbEJ1YmJsZXMgMScsIG1lc3NhZ2UgOiBlcnIgfTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZW5kRXJyb3IoZW1haWxEYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTIpLnRoZW4oKHZhbCk9PntcbiAgICAgIGlmKHZhbCAhPT0gbnVsbCl7XG4gICAgICAgIHZhciBuYW1lID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlcygyLG5hbWUpO1xuICAgICAgICB0aGlzLnJvdXRpbmVzLnNldFByb2dyYW0oMixuYW1lKVxuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHZhciBlbWFpbERhdGEgPSB7IGFyZWEgOiAnY2hlY2tBbGxCdWJibGVzIDInLCBtZXNzYWdlIDogZXJyIH07XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2VuZEVycm9yKGVtYWlsRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUzKS50aGVuKCh2YWwpPT57XG4gICAgICBpZih2YWwgIT09IG51bGwpe1xuICAgICAgICB2YXIgbmFtZSA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoMyxuYW1lKTtcbiAgICAgICAgdGhpcy5yb3V0aW5lcy5zZXRQcm9ncmFtKDMsbmFtZSlcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB2YXIgZW1haWxEYXRhID0geyBhcmVhIDogJ2NoZWNrQWxsQnViYmxlcyAzJywgbWVzc2FnZSA6IGVyciB9O1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRFcnJvcihlbWFpbERhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlNCkudGhlbigodmFsKT0+e1xuICAgICAgaWYodmFsICE9PSBudWxsKXtcbiAgICAgICAgdmFyIG5hbWUgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzKDQsbmFtZSk7XG4gICAgICAgIHRoaXMucm91dGluZXMuc2V0UHJvZ3JhbSg0LG5hbWUpXG4gICAgICB9XG4gICAgICB0aGlzLkFsbEJ1YmJsZXNDaGVja2VkKHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbXMoKSlcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB2YXIgZW1haWxEYXRhID0geyBhcmVhIDogJ2NoZWNrQWxsQnViYmxlcyA0JywgbWVzc2FnZSA6IGVyciB9O1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRFcnJvcihlbWFpbERhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0qL1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIE1vZGFsQ29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERldmljZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IEdlcm1hblRleHRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2VybWFuLXRleHRzJztcbmltcG9ydCB7IFNsaWRlclBhZ2UgfSBmcm9tICcuLi9zbGlkZXIvc2xpZGVyJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgRmF2b3JpdGVzUGFnZSB9IGZyb20gJy4uL2Zhdm9yaXRlcy9mYXZvcml0ZXMnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFN1YnNjcmliZVBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2Utc3Vic2NyaWJlJyxcbiAgdGVtcGxhdGVVcmw6ICdzdWJzY3JpYmUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZVBhZ2Uge1xuICBwcml2YXRlIG1heERhdGVPZlBpY2tlciA6IHN0cmluZztcbiAgcHJpdmF0ZSBzdWJzY3JpYmVGb3JtIDogRm9ybUdyb3VwO1xuICBwdWJsaWMgc2hvd1N1Ym1pdEJ1dHRvbiA6IGJvb2xlYW47XG4gIHByaXZhdGUgbWF4RGF0ZSA6IHN0cmluZztcbiAgcHJpdmF0ZSByZXNwb25zZV90ZXh0IDogc3RyaW5nO1xuICBwcml2YXRlIHJlc3BvbnNlRGF0YSA6IGFueTtcbiAgcHJpdmF0ZSBjYWxsQmFja1BhZ2UgOiBzdHJpbmc7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBlcnJvck5hbWVDbGFzcyA6IHN0cmluZztcbiAgcHVibGljIGVycm9yRW1haWxDbGFzcyA6IHN0cmluZztcbiAgcHVibGljIGVycm9yR2VuZGVyQ2xhc3MgOiBzdHJpbmc7XG4gIHB1YmxpYyBlcnJvckRhdGVDbGFzcyA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgYXBpU2VydmljZSA6IEFQSVNlcnZpY2VQcm92aWRlcixcbiAgICBwcml2YXRlIGRldmljZTogRGV2aWNlLCBwcml2YXRlIG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmspIHtcbiAgICAgIC8vIG9idGllbmUgZWwgcGFyYW1ldHJvIGRlIHF1ZSBwYWdlIHZhIGEgY29ycmVyIGFsIHRlcm1pbmFyIGVsIHJlZ2lzdHJvXG4gICAgICB0aGlzLmNhbGxCYWNrUGFnZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnY2FsbEJhY2tQYWdlJyk7XG4gICAgICB0aGlzLnNob3dTdWJtaXRCdXR0b24gPSB0cnVlO1xuICAgICAgbGV0IGFEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIHRoaXMubWF4RGF0ZU9mUGlja2VyID0gdGhpcy5tYXhEYXRlID0gYURhdGUudG9JU09TdHJpbmcoKTtcblxuICAgICAgdGhpcy5zdWJzY3JpYmVGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBnZW5kZXI6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIGJpcnRoRGF0ZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgfSk7XG4gICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIFN1YnNjcmliZVBhZ2UnKTtcbiAgfVxuXG4gIGF0dGVtcHRTdWJzY3JpYmUoKXtcbiAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSAnJztcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCB0aGlzLnN1YnNjcmliZUZvcm0udmFsdWUuZW1haWwpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMuc3Vic2NyaWJlRm9ybS52YWx1ZS5uYW1lKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2JpcnRoRGF0ZScsIHRoaXMuc3Vic2NyaWJlRm9ybS52YWx1ZS5iaXJ0aERhdGUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZ2VuZGVyJywgdGhpcy5zdWJzY3JpYmVGb3JtLnZhbHVlLmdlbmRlcik7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdpc1VwZGF0ZScsICdmYWxzZScpO1xuICAgIGlmKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnY29yZG92YScpKXtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXVpZCcsIHRoaXMuZGV2aWNlLnV1aWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXVpZCcsIENvbnN0YW50cy50ZXN0X3V1aWQpO1xuICAgIH1cblxuICAgIHRoaXMuYXBpU2VydmljZS5ydW5Qb3N0KCdzdWJzY3JpYmUucGhwJyxmb3JtRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgIGlmKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSAnb2snKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXksIHsndXVpZCc6IHRoaXMucmVzcG9uc2VEYXRhLnV1aWQsICdlbWFpbCc6IHRoaXMuc3Vic2NyaWJlRm9ybS52YWx1ZS5lbWFpbCB9KTtcbiAgICAgICAgdGhpcy5zaG93U3VibWl0QnV0dG9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9IEdlcm1hblRleHRzWydwcm9maWxlLXN1Y2Nlc3MtbWVzc2FnZSddO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmKHRoaXMuY2FsbEJhY2tQYWdlID09ICdub25lJyl7XG4gICAgICAgICAgICAvLyBkZXNwbGllZ2EgbGEgdmlzdGEgZGUgZGUgaW5zdHJ1Y2Npb25lc1xuICAgICAgICAgICAgdGhpcy5uYXZDdHJsLnB1c2goU2xpZGVyUGFnZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYodGhpcy5jYWxsQmFja1BhZ2UgPT0gJ2Zhdm9yaXRlcycpe1xuICAgICAgICAgICAgdGhpcy5uYXZDdHJsLnBvcCgpO1xuICAgICAgICAgICAgbGV0IHByb2ZpbGVNb2RhbCA9IHRoaXMubW9kYWxDdHJsLmNyZWF0ZShGYXZvcml0ZXNQYWdlLCB7ICdzaG93U2F2ZSc6IHRydWUgfSk7XG4gICAgICAgICAgICBwcm9maWxlTW9kYWwucHJlc2VudCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVycm9yID0gR2VybWFuVGV4dHNbJ3Byb2ZpbGUtZXJyb3ItbWVzc2FnZSddICsgJzogJztcbiAgICAgICAgaWYodGhpcy5yZXNwb25zZURhdGEuZW1haWxFcnJvciAhPSAnb2snKXtcbiAgICAgICAgICBlcnJvciArPSB0aGlzLnJlc3BvbnNlRGF0YS5lbWFpbEVycm9yO1xuICAgICAgICAgIHRoaXMuZXJyb3JFbWFpbENsYXNzICA9ICdlcnJvcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5yZXNwb25zZURhdGEubmFtZUVycm9yICE9ICdvaycpe1xuICAgICAgICAgIGVycm9yICs9IHRoaXMucmVzcG9uc2VEYXRhLm5hbWVFcnJvcjtcbiAgICAgICAgICB0aGlzLmVycm9yTmFtZUNsYXNzICA9ICdlcnJvcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5yZXNwb25zZURhdGEuZ2VuZGVyRXJyb3IgIT0gJ29rJyl7XG4gICAgICAgICAgZXJyb3IgKz0gdGhpcy5yZXNwb25zZURhdGEuZ2VuZGVyRXJyb3I7XG4gICAgICAgICAgdGhpcy5lcnJvckdlbmRlckNsYXNzICA9ICdlcnJvcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5yZXNwb25zZURhdGEuZGF0ZU9mQmlydGhFcnJvciAhPSAnb2snKXtcbiAgICAgICAgICBlcnJvciArPSB0aGlzLnJlc3BvbnNlRGF0YS5kYXRlT2ZCaXJ0aEVycm9yO1xuICAgICAgICAgIHRoaXMuZXJyb3JEYXRlQ2xhc3MgID0gJ2Vycm9yJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9IGVycm9yO1xuICAgICAgfVxuICAgICAgLy8gVE9ETzogcG9uZXIgc3VjY2VzcyB5IGRlc3BsZWdhciBwYWdpbmEgcHJpbmNpcGFsXG4gICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gR2VybWFuVGV4dHNbJ3Byb2ZpbGUtZXJyb3ItbWVzc2FnZSddO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvc3Vic2NyaWJlL3N1YnNjcmliZS50cyIsImV4cG9ydCB2YXIgR2VybWFuVGV4dHMgPSB7XHJcbiAgICBcImJhY2tcIjpcIlLDvGNra2VoclwiLFxyXG4gICAgXCJjdWx0dXJlXCI6XCJnclwiLFxyXG4gICAgXCJoZWxwXCI6IFwiPGEgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCIgbmctaHJlZj1cXFwiIy9hcHAvaGVscFxcXCIgaHJlZj1cXFwiIy9hcHAvaGVscFxcXCI+IEhJTEZFIDwvYT5cIixcclxuICAgIFwiY29udGFjdC11c1wiOiBcIjxhIGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiIG5nLWhyZWY9XFxcIiMvYXBwL2NvbnRhY3R1c1xcXCIgaHJlZj1cXFwiIy9hcHAvY29udGFjdHVzXFxcIj4gS09OVEFLVElFUkVOIFNJRSBVTlMgPC9hPlwiLFxyXG4gICAgXCJjb250YWN0LXVzLXRleHRcIjogXCJLT05UQUtUSUVSRU4gU0lFIFVOU1wiLFxyXG4gICAgXCJyZW1haW5pbmctdGltZVwiOiBcIlZlcmJsZWliZW5kZSBaZWl0XCIsXHJcbiAgICBcInJ1bm5pbmctdGltZVwiOiBcIkxhdWZ6ZWl0XCIsXHJcbiAgICBcImdldC1pbi10b3VjaFwiOiBcIlNldHplbiBTaWUgc2ljaCBtaXQgdW5zIGluIFZlcmJpbmR1bmcsIGluZGVtIFNpZSBkYXMgZm9sZ2VuZGUgRm9ybXVsYXIgYXVzZsO8bGxlbi4gPGJyLz5PZGVyIGtvbnRha3RpZXJlbiBTaWUgdW5zIHVudGVyIDxhIGhyZWY9XFxcIm1haWx0bzpzdXBwb3J0QGhlYWxpbmdob3VzZS5saWZlXFxcIj4gc3VwcG9ydEBoZWFsaW5naG91c2UubGlmZSA8L2E+XCIsXHJcbiAgICBcInJlbW92ZS1wcm9ncmFtXCI6IFwiUHJvZ3JhbW0gZW50ZmVybmVuXCIsXHJcbiAgICBcInRpbWUtZXhwaXJlLXRleHRcIjogXCJJaHJlIFJvdXRpbmUgaXN0IHZvcmJlaSwgaG9mZmUsIGRhc3MgU2llIHNpY2ggaGV1dGUgZ3V0IGbDvGhsZW5cIixcclxuICAgIFwiZmF2LXRpdGxlXCI6IFwiTUVJTkUgRkFWT1JJVEVOXCIsXHJcbiAgICBcImFkZC1mYXZvcml0ZVwiOiBcIkbDnEdFTiBTSUUgRElFU0UgUk9VVElORSBISU5aVVwiLFxyXG4gICAgXCJhZGQtZmF2b3JpdGVzXCI6IFwiRsO8Z2VuIFNpZSBkaWVzZSBGYXZvcml0ZW4gaGluenVcIixcclxuICAgIFwiZmF2b3JpdGUtcm91dGluZXNcIjogXCJMaWVibGluZ3Nyb3V0aW5lblwiLFxyXG4gICAgXCJteS1mYXZvcml0ZXNcIjogXCJNZWluZSBGYXZvcml0ZW5cIixcclxuICAgIFwibG9hZGluZ1wiOlwiV2lyZCBnZWxhZGVuXCIsXHJcbiAgICBcImNob29zZVwiOlwiV8OkaGxlblwiLFxyXG4gICAgXCJ5ZXNcIjogXCJKYVwiLFxyXG4gICAgXCJjYW5jZWxcIjogXCJBYmJyZWNoZW5cIixcclxuICAgIFwiamFudWFyeVwiOiBcIkphbnVhclwiLFxyXG4gICAgXCJmZWJydWFyeVwiOiBcIkZlYnJ1YXJcIixcclxuICAgIFwibWFyY2hcIjogXCJNw6RyelwiLFxyXG4gICAgXCJhcHJpbFwiOiBcIkFwcmlsXCIsXHJcbiAgICBcIm1heVwiOiBcIk1haVwiLFxyXG4gICAgXCJqdW5lXCI6IFwiSnVuaVwiLFxyXG4gICAgXCJqdWx5XCI6IFwiSnVsaVwiLFxyXG4gICAgXCJhdWd1c3RcIiA6IFwiQXVndXN0XCIsXHJcbiAgICBcInNlcHRlbWJlclwiOiBcIlNlcHRlbWJlclwiLFxyXG4gICAgXCJvY3RvYmVyXCI6IFwiT2t0b2JlclwiLFxyXG4gICAgXCJub3ZlbWJlclwiOiBcIk5vdmVtYmVyXCIsXHJcbiAgICBcImRlY2VtYmVyXCI6IFwiRGV6ZW1iZXJcIixcclxuICAgIFwiYXJlLXlvdS1zdXJlLXByb2dyYW1cIjogXCJNw7ZjaHRlbiBTaWUgZGllc2VzIFByb2dyYW1tIHdpcmtsaWNoIGVudGZlcm5lbj9cIixcclxuICAgIFwiYXJlLXlvdS1zdXJlLXJvdXRpbmVcIjogXCJTaW5kIFNpZSBzaWNoZXIsIGRhc3MgU2llIGRpZXNlIFJvdXRpbmUgZW50ZmVybmVuIHdvbGxlbj9cIixcclxuICAgIFwibGF0ZXN0LXJvdXRpbmVzXCI6IFwiTmV1ZXN0ZSBSb3V0aW5lblwiLFxyXG4gICAgXCJjb25uZWN0LWZhdm9yaXRlcy10ZXh0XCI6IFwiVmVyYmluZGVuIFNpZSBkYXMgR2Vyw6R0IG1pdCBJaHJlbiBiZXZvcnp1Z3RlbiBSb3V0aW5lblwiLFxyXG4gICAgXCJuYW1lLVRleHRcIjogXCJOYW1lOlwiLFxyXG4gICAgXCJtZXNzYWdlLXRleHRcIjogXCJOYWNocmljaHRcIixcclxuICAgIFwic2VuZC10ZXh0XCI6IFwiU2VuZGVuXCIsXHJcbiAgICBcInNlbnQtdGV4dFwiIDogXCJHZXNlbmRldFwiLFxyXG4gICAgXCJob21lLXRpdGxlXCIgOiBcIkhPTUVcIixcclxuICAgIFwiaGVscC10aXRsZVwiIDogXCJISUxGRVwiLFxyXG4gICAgXCJjb250YWN0LXRpdGxlXCIgOiBcIktPTlRBS1RJRVJFIFVOU1wiLFxyXG4gICAgXCJzbGlkZXItdGl0bGVcIiA6IFwiQU5MRUlUVU5HXCIsXHJcbiAgICBcImVtYWlsLXN1Y2Nlc3MtbWVzc2FnZVwiOiBcIklocmUgTmFjaHJpY2h0IHd1cmRlIGdlc2VuZGV0ISBXaXIgd2VyZGVuIHVucyBzbyBzY2huZWxsIHdpZSBtw7ZnbGljaCBtaXQgSWhuZW4gaW4gVmVyYmluZHVuZyBzZXR6ZW5cIixcclxuICAgIFwiZW1haWwtc3VjY2Vzcy10aXRsZVwiOiBcIkdlc2VuZGV0XCIsXHJcbiAgICBcImVtYWlsLWVycm9yLW1lc3NhZ2VcIjogXCJCZWltIFNlbmRlbiBkZXIgRS1NYWlsIGlzdCBlaW4gRmVobGVyIGF1ZmdldHJldGVuXCIsXHJcbiAgICBcImVtYWlsLWVycm9yLXRpdGxlXCI6IFwiTmFjaHJpY2h0IGtvbm50ZSBuaWNodCBnZXNlbmRldCB3ZXJkZW5cIixcclxuICAgIFwiaW5kZXBlbmRlbnQtcHJvZ3JhbXNcIjogXCJVTkFCSMOETkdJR0UgUFJPR1JBTU1FXCIsXHJcbiAgICBcInJlZ2lzdGVyLWxvZ2luXCI6IFwiPGEgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCIgbmctaHJlZj1cXFwiIy9hcHAvbG9naW5cXFwiIGhyZWY9XFxcIiMvYXBwL2xvZ2luXFxcIj4gUkVHSVNUUklFUkVOIC8gQU5NRUxERU4gPC9hPiBcIixcclxuICAgIFwiZm9yZ290LXBhc3N3b3JkXCI6IFwiUGFzc3dvcnQgdmVyZ2Vzc2VuXCIsXHJcbiAgICBcImZvcmdvdC1wYXNzd29yZC1saW5rXCI6IFwiPGEgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCIgbmctaHJlZj1cXFwiIy9hcHAvZm9yZ290cGFzc3dvcmRcXFwiIGhyZWY9XFxcIiMvYXBwL2ZvcmdvdHBhc3N3b3JkXFxcIj4gVkVSR0VTU0VOIDwvYT4gXCIsXHJcbiAgICBcImRvbnQtd29ycnlcIjogXCJNYWNoIGRpciBrZWluZSBTb3JnZW5cIixcclxuICAgIFwiaW50cm9kdWNlLWVtYWlsXCI6IFwiU3RlbGxlbiBTaWUgSWhyZSBFLU1haWwgdW50ZXIgSWhyZW0gS29udG8gZWluXCIsXHJcbiAgICBcInJlY292ZXItcGFzc3dvcmRcIjogXCJQYXNzd29ydCB3aWVkZXJoZXJzdGVsbGVuXCIsXHJcbiAgICBcInJlZ2lzdGVyXCI6IFwiUkVHSVNUUklFUkVOXCIsXHJcbiAgICBcInJlZ2lzdGVyLWxpbmtcIjogXCI8YSBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIiBuZy1ocmVmPVxcXCIjL2FwcC9jcmVhdGVhY2NvdW50XFxcIiBocmVmPVxcXCIjL2FwcC9jcmVhdGVhY2NvdW50XFxcIj4gUkVHSVNUUklFUkVOIDwvYT5cIixcclxuICAgIFwicGFzc3dvcmRcIjogXCJQYXNzd29ydFwiLFxyXG4gICAgXCJzaXgtY2hhcnMtbWluXCI6IFwiTWluZGVzdGVucyA2IFplaWNoZW5cIixcclxuICAgIFwibWFsZVwiOlwiTWFublwiLFxyXG4gICAgXCJmZW1hbGVcIjogXCJXZWlibGljaFwiLFxyXG4gICAgXCJwbGVhc2UtY3JlYXRlLWFjY291bnRcIjogXCJCaXR0ZSBlcnN0ZWxsZW4gU2llIGVpbiBLb250b1wiLFxyXG4gICAgXCJjcmVhdGUtYWNjb3VudFwiOiBcIktvbnRvIGVyc3RlbGxlblwiLFxyXG4gICAgXCJwbGVhc2UtbG9naW5cIjogXCJCaXR0ZSBtZWxkZW4gU2llIHNpY2ggbWl0IElocmVuIEtvbnRvaW5mb3JtYXRpb25lbiBhblwiLFxyXG4gICAgXCJwbGVhc2UtcGFpclwiOiBcIkJJVFRFIFBBQVIgREVJTkVOIE1ZTUFUXCIsXHJcbiAgICBcImFjdGl2YXRlLXdpZmlcIjogXCJTY2hyaXR0ZSB6dW0gUGFpcmluZyBJaHJlcyBNeU1hdFwiLFxyXG4gICAgXCJhY3RpdmF0ZS13aWZpLTFcIjogXCIxLiBTY2hhbHRlIGRlaW4gTXlNYXQgZWluXCIsXHJcbiAgICBcImFjdGl2YXRlLXdpZmktMlwiOiBcIjIuIE5hdmlnaWVyZSBhdWYgZGVpbmVtIEdlcsOkdCB6dSBkZWluZW4gV0xBTi1FaW5zdGVsbHVuZ2VuXCIsXHJcbiAgICBcImFjdGl2YXRlLXdpZmktM1wiOiBcIjMuIFZlcmJpbmRlbiBTaWUgZGFzIFdMQU4gSWhyZXMgR2Vyw6R0cyBtaXQgSWhyZW0gTXlNYXQtTmV0endlcmtcIixcclxuICAgIFwiYWN0aXZhdGUtd2lmaS00XCI6IFwiNC4gSXN0IGVpbm1hbCB2ZXJidW5kZW4sIGtlaHJlbiBTaWUgenVyIE15TWF0LUFwcCB6dXLDvGNrXCIsXHJcbiAgICBcInN0YXJ0LXJvdXRpbmVcIjogXCJTVEFSVFJPVVRJTkVcIixcclxuICAgIFwiYmF0dGVyeS1wb3dlclwiOiBcIiAgXCIsXHJcbiAgICBcImNvaWxcIjogXCJTcHVsZVwiLFxyXG4gICAgXCJzdGFydC15b3VyLXJvdXRpbmVcIjogXCJTVEFSVEVOIFNJRSBJSFJFIFJPVVRJTkVcIixcclxuICAgIFwibm8tZGV0ZWN0LTFcIjogXCJXaXIga29ubnRlbiBJaHIgTXlNYXQgbmljaHQgZmluZGVuXCIsXHJcbiAgICBcIm5vLWRldGVjdC0yXCI6IFwiQml0dGUgZm9sZ2VuIFNpZSBkZW4gU2Nocml0dGVuLCB1bSBkaWVzIHp1IHR1blwiLFxyXG4gICAgXCJlbWFpbC1zZW50XCI6IFwiRWluZSBFLU1haWwgbWl0IEFud2Vpc3VuZ2VuIHp1bSBadXLDvGNrc2V0emVuIElocmVzIFBhc3N3b3J0cyB3dXJkZSBnZXNlbmRldFwiLFxyXG4gICAgXCJtaXNzaW5nLWVtYWlsXCI6IFwiRmVobGVuZGUgRW1haWxcIixcclxuICAgIFwibmFtZS10ZXh0XCIgOiBcIk5hbWVcIixcclxuICAgIFwiZmlyc3QtbmFtZS10ZXh0XCI6IFwiVm9ybmFtZVwiLFxyXG4gICAgXCJsYXN0LW5hbWUtdGV4dFwiOiBcIk5hY2huYW1lXCIsXHJcbiAgICBcInByb2ZpbGVcIjogXCJEZWluIFByb2ZpbFwiLFxyXG4gICAgXCJkYXRlLWJpcnRoXCI6IFwiR2VidXJ0c2RhdHVtXCIsXHJcbiAgICBcInByb2ZpbGUtbG9naW5cIjogXCI8YSBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIiBuZy1ocmVmPVxcXCIjL2FwcC9jcmVhdGVhY2NvdW50XFxcIiBocmVmPVxcXCIjL2FwcC9jcmVhdGVhY2NvdW50XFxcIj4gUFJPRklMIDwvYT5cIixcclxuICAgIFwib2ZmbGluZS1tZXNzYWdlXCI6IFwiQml0dGUgdmVyYmluZGVuIFNpZSBJaHIgR2Vyw6R0IG1pdCBkZW0gSW50ZXJuZXRcIixcclxuICAgIFwiT2ZmbGluZS10aXRsZVwiOiBcIkdlcsOkdCBPRkZMSU5FXCIsXHJcbiAgICBcInJlZ2lzdGVyLWVycm9yLW1lc3NhZ2VcIjogXCJGZWhsZXIgYmVpbSBWZXJiaW5kZW4gbWl0IGRlbSBIYXVwdHNlcnZlci4gQml0dGUgdmVyc3VjaGVuIFNpZSBlcyBzcMOkdGVyIG5vY2ggZWlubWFsXCIsXHJcbiAgICBcInJlZ2lzdGVyLWVycm9yLXRpdGxlXCI6IFwiVmVyYmluZHVuZyB6dW0gU2VydmVyIGtvbm50ZSBuaWNodCBoZXJnZXN0ZWxsdCB3ZXJkZW5cIixcclxuICAgIFwidGFwLXByb2dyYW1cIjogXCI8bGFiZWw+VGlwcGVuIFNpZSBhdWYgZGFzIFByb2dyYW1tLCBkYXMgU2llIHp1ciBSb3V0aW5lIGhpbnp1ZsO8Z2VuIG3DtmNodGVuLiBUaXBwZW4gZGllIEluZm8tVGFzdGUsIHVtIG1laHIgenUgZXJmYWhyZW48L2xhYmVsPlwiLFxyXG4gICAgXCJ3ZWxjb21lXCI6IFwiV2lsbGtvbW1lbiBiZWkgTXlNYXQgQXBwLlwiLFxyXG4gICAgXCJhZGQtcHJvZ3JhbVwiOiBcIkhpbnp1ZsO8Z2VuXCIsXHJcbiAgICBcInRhcC1idWJibGVcIjogXCJUQVAgQSBCVUJCTEUgKCspIEhJTlpVRsOcR0VOXCIsXHJcbiAgICBcInJ1bi1yb3V0aW5lXCI6IFwiTEFTUyBESUVTRSBST1VUSU5FIExBVUZFTlwiLFxyXG4gICAgXCJjbGVhbi1yb3V0aW5lXCI6IFwiRElFU0UgUk9VVElORSBSRUlOSUdFTlwiLFxyXG4gICAgXCJwcm9ncmFtLWtpdHNcIjogXCJQcm9ncmFtbS1LaXRzXCIsXHJcbiAgICBcInBvcHVsYXItcm91dGluZXNcIjogXCJVbnNlcmUgYmVsaWVidGVzdGVuIFJvdXRpbmVuXCIsXHJcbiAgICBcImJhc2ljXCI6IFwiQkFTSUMgPGJyPiA8YnI+XCIsXHJcbiAgICBcImJ1c2luZXNzLXRyYXZlbGVyXCI6IFwiQlVTSU5FU1MgJjxici8+UkVJU0VOXCIsXHJcbiAgICBcImZhbWlseS1raXRcIjogXCJGQU1JTElFXCIsXHJcbiAgICBcImF0aGxldGVcIjogXCJTUE9SVFwiLFxyXG4gICAgXCJzcGEtd2VsbG5lc3NcIjogXCJTUEEgJiBXRUxMTkVTU1wiLFxyXG4gICAgXCJzdHJlc3MtcmVsaWVmXCI6IFwiU1RSRVNTIDxicj4gQkVGUkVJVU5HXCIsXHJcbiAgICBcInNlbmlvci11cHBlclwiIDogXCJTRU5JT1JcIixcclxuICAgIFwiY2hha3JhLWJhbGFuY2luZ1wiOiBcIkNIQUtSQVNcIixcclxuICAgIFwiZWxlbWVudHMtbWVyaWRpYW5zXCI6IFwiRUxFTUVOVEUgJiA8YnI+IE1FUklESUFORVwiLFxyXG4gICAgXCJwZXRzc1wiOiBcIkhBVVNUSUVSRSBTXCIsXHJcbiAgICBcInBldHN4XCI6IFwiSEFVU1RJRVJFIFhcIixcclxuICAgIFwicHJvZ3JhbXNcIjogXCJQUk9HUkFNTUVcIixcclxuICAgIFwiY29udGludWVcIjogXCJXZWl0ZXJcIixcclxuICAgIFwicHJvZmlsZS10ZXh0XCI6IFwiUmVnaXN0cmllcnVuZ1wiLFxyXG4gICAgXCJvbmUtdGltZS1wcm9maWxlLXRleHRcIjogXCJUaGlzIGluZm9ybWF0aW9uIGlzIHVzZWQgYnkgb3VyIHRlYW0gdG8gc2VydmUgeW91IGJldHRlci4gWW91IHdpbGwgb25seSBuZWVkIHRvIGludHJvZHVjZSBpdCBvbmUgc2luZ2xlIHRpbWVcIixcclxuICAgIFwiZ2VuZGVyLXRleHRcIjogXCJHZW5kZXJcIixcclxuICAgIFwiYmlydGhkYXRlLXRleHRcIjogXCJCaXJ0aGRhdGVcIixcclxuICAgIFwibWFsZS10ZXh0XCI6IFwiTWFsZVwiLFxyXG4gICAgXCJmZW1hbGUtdGV4dFwiOiBcIkZlbWFsZVwiLFxyXG4gICAgXCJidXR0b24tc2VuZFwiOiBcIlNlbmRlblwiLFxyXG4gICAgXCJidXR0b24tc2F2ZVwiOiBcIlNwYXJlblwiLFxyXG4gICAgXCJwcm9maWxlLWVycm9yLW1lc3NhZ2VcIjogXCJUaGVyZSdzIGJlZW4gYW4gZXJyb3Igc2F2aW5nIHlvdXIgcHJvZmlsZVwiLFxyXG4gICAgXCJwcm9maWxlLXN1Y2Nlc3MtbWVzc2FnZVwiOiBcIllvdXIgcHJvZmlsZSBoYXZlIGJlZW4gc3VjY2Vzc2Z1bCBzYXZlZFwiLFxyXG4gICAgXCJvZmZsaW5lLWRldmljZS10ZXh0XCI6IFwiWW91ciBkZXZpY2UgaXMgb2ZmbGluZVwiLFxyXG4gICAgXCJvZmZsaW5lLWRldmljZS10ZXh0LTJcIiA6IFwiVGhlcmUncyBiZWVuIGFuIGVycm9yIGNvbW11bmljYXRpbmcgeW91ciBkZXZpY2Ugd2l0aCBvdXIgc2VydmljZXMuIFBsZWFzZSBtYWtlIHN1cmUgaXQncyBvbmxpbmVcIixcclxuICAgIFwiZmlyc3QtY2hha3JhLXVwcGVyXCI6IFwiV1VSWkVMLVpFTlRSVU1cIixcclxuICAgIFwic2Vjb25kLWNoYWtyYS11cHBlclwiOiBcIlNBS1JBTC1aRU5UUlVNXCIsXHJcbiAgICBcInRoaXJkLWNoYWtyYS11cHBlclwiOiBcIlNPTEFSLVBMRVhVUy1aRU5UUlVNXCIsXHJcbiAgICBcImZvdXJ0aC1jaGFrcmEtdXBwZXJcIjogXCJIRVJaLVpFTlRSVU1cIixcclxuICAgIFwiZmlmdGgtY2hha3JhLXVwcGVyXCI6IFwiSEFMUy1aRU5UUlVNXCIsXHJcbiAgICBcInNpeHRoLWNoYWtyYS11cHBlclwiOiBcIlNUUklOLVpFTlRSVU1cIixcclxuICAgIFwic2V2ZW50aC1jaGFrcmEtdXBwZXJcIjogXCJTQ0hFSVRFTC1aRU5UUlVNXCIsXHJcbiAgICBcImhlbHAtdGV4dFwiOiBcIkhJTEZFXCIsXHJcbiAgICBcImhlbHAtdGV4dDFcIjogXCJXb2hlciB3ZWnDnyBpY2gsIHdlbGNoZSBQcm9ncmFtbWUgaWNoIHfDpGhsZW4gc29sbD9cIixcclxuICAgIFwiaGVscC10ZXh0MlwiOiBcIkVzIGlzdCBpbW1lciBndXQsIG1pdCBkZW0gQXVzYmFsYW5jaWVyZW4gZGVzIFN5c3RlbXMgenUgYmVnaW5uZW4uIERpZXMgc2luZCBlaW5pZ2UgTcO2Z2xpY2hrZWl0ZW4sIHdpZSBTaWUgZGFzIG1pdCBiZWdpbm5lbiBrw7ZubmVuOkVuZXJnaWViaWxhbnppZXJ1bmcsIEUtU21vZywgRnJldWRlLCBWaXRhbGl0w6R0IDxicj4gPGJyPiBXZW5uIFNpZSBJaHIgU2NobGFmbXVzdGVyIHZlcmJlc3Nlcm4gbcO2Y2h0ZW4gLSB3w6RobGVuIFNpZTogPGJyPiBFbmVyZ2llYmlsYW56LCBFLVNtb2csIFJlbGF4LCBTY2hsYWYgPGJyPiA8YnI+IElmIFNpZSBtw7ZjaHRlbiBhbSBNb3JnZW4gZXR3YXMgbWVociBFbmVyZ2llIGhhYmVuOiA8YnI+IEVuZXJnaWVhdXNnbGVpY2gsIEVuZXJnaWUtQm9vc3RlciwgS29uemVudHJhdGlvbiAodW5kIGplZGVzIFByb2dyYW1tLCBkYXMgbWl0IGVpbmVtIFByb2JsZW0gaW4gVmVyYmluZHVuZyBzdGVodCwgbWl0IGRlbSBTaWUgZXMgenUgdHVuIGhhYmVuIC0gd2llIFNjaG1lcnplbiwgTXVza2VsLCBHZWxlbmtlLCBLb3Bmc2NobWVyemVuIHVzdy4pIDxicj4gPGJyPiBFaW5lIHZvbGxzdMOkbmRpZ2UgTGlzdGUgZGVyIFByb2dyYW1tZSB1bmQgZGVyZW4gVmVyd2VuZHVuZyBiZXrDvGdsaWNoIGRlciBTeW1wdG9tZSBmaW5kZW4gU2llIGluIGRlciBCZWRpZW51bmdzYW5sZWl0dW5nLCBkaWUgaW0gTGllZmVydW1mYW5nIGVudGhhbHRlbiBpc3Qgb2RlciBrb3N0ZW5sb3Mgb25saW5lIHZlcmbDvGdiYXIgaXN0LiBcIixcclxuICAgIFwiaGVscC10ZXh0M1wiOlwiV2VsY2hlIFByb2dyYW1tZSBzb2xsdGUgaWNoIGFtIEFiZW5kIHZlcm1laWRlbj8gXCIsXHJcbiAgICBcImhlbHAtdGV4dDRcIjpcIldlbm4gU2llIGVpbmUgZ3V0ZSBOYWNodHJ1aGUgaGFiZW4gd29sbGVuLCBpc3QgZXMgYmVzc2VyLCBJaHJlbiBPcmdhbmlzbXVzIG5pY2h0IMO8YmVybcOkw59pZyB6dSBzdGltdWxpZXJlbi4gV2VubiBTaWUgZGFyYW4gZ2V3w7ZobnQgc2luZCwgYWJlbmRzIEthZmZlZSB6dSB0cmlua2VuIHVuZCB0cm90emRlbSBzY2hsYWZlbiB6dSBrw7ZubmVuLCBrw7ZubmVuIFNpZSBhbGxlIFByb2dyYW1tZSB2ZXJ3ZW5kZW4sIGFiZXIgd2VubiBTaWUgZW1wZmluZGxpY2hlciBzaW5kIC0gc29sbHRlbiBTaWUgdm9yIGRlbSBTY2hsYWZlbmdlaGVuIG5pY2h0IGRpZSBmb2xnZW5kZW4gUHJvZ3JhbW1lIGFud2VuZGVuOiBLcmVpc2xhdWYsIEltbXVuc3lzdGVtLCBOZWJlbm5pZXJlbiwgRXJzY2jDtnBmdW5nLCBLb256ZW50cmF0aW9uIHVuZCBFbmVyZ2llIEJvb3N0ZXIgXCIsXHJcbiAgICBcImhlbHAtdGV4dDVcIjpcIldpZSBiZWVpbmZsdXNzZW4gZWxla3Ryb21hZ25ldGlzY2hlIEZlbGRlciBtZWluZW4gS8O2cnBlcj8gXCIsXHJcbiAgICBcImhlbHAtdGV4dDZcIjpcIkFsbGVzIGluIHVuc2VyZW0gS8O2cnBlciBpc3QgZWxla3RyaXNjaCwgdW5zZXJlIFplbGxlbiBrb21tdW5pemllcmVuIG1pdCBlbGVrdHJvbWFnbmV0aXNjaGVuIEZyZXF1ZW56ZW4sIHVuc2VyIEhlcnogZXJ6ZXVndCBtaXQgamVkZW0gU2NobGFnIGVsZWt0cm9tYWduZXRpc2NoZSBXZWxsZW4sIHVuc2VyIE5lcnZlbnN5c3RlbSBrb21tdW5pemllcnQsIHdlbm4gTmV1cm9uZW4gw7xiZXIgU3luYXBzZW4gYXVmIGVsZWt0cm9tYWduZXRpc2NoZSBTaWduYWxlIHJlYWdpZXJlbi4gSW4gZGllc2VtIFNpbm5lIGvDtm5uZW4gd2lyIHZlcnN0ZWhlbiwgd2llIGV4dGVybmUgbWFnbmV0aXNjaGUsIGVsZWt0cmlzY2hlIHVuZCBlbGVrdHJvbWFnbmV0aXNjaGUgRmVsZGVyIG1pdCBqZWRlbSBBc3Bla3QgdW5zZXJlcyBLw7ZycGVycyByZWFnaWVyZW4uIEluZGVtIHdpciBzcGV6aWZpc2NoZSBGcmVxdWVuemVuIG1pdCBuaWVkcmlnZXIgSW50ZW5zaXTDpHQgcmVndWxpZXJlbiwga8O2bm5lbiB3aXIgZ2VuYXUgYXVzd8OkaGxlbiwgd29yYXVmIHdpciByZWFnaWVyZW4gd29sbGVuLCBpbmRlbSB3aXIgYXVmIGJlc3RpbW10ZSBaZWxsZW4sIE9yZ2FuZSB1bmQgR2V3ZWJlIGVpbndpcmtlbi4gXCIsXHJcbiAgICBcImhlbHAtdGV4dDdcIjpcIldpZSBoaWxmdCBtaXIgZGllIEJlaGFuZGx1bmcgYXVmIHplbGx1bMOkcmVyIEViZW5lPyBcIixcclxuICAgIFwiaGVscC10ZXh0OFwiOlwiRHVyY2ggZGFzIEF1ZmxhZGVuIHZvbiBNYWduZXRmZWxkZXJuIGluIGRlciBVbWdlYnVuZyB2b24gWmVsbG1lbWJyYW5lbiDDtmZmbmVuIHNpY2ggS2Fuw6RsZSBmw7xyIGVpbmUgYmVzc2VyZSBOw6RocnN0b2ZmZHVyY2hkcmluZ3VuZy4gRGFzIMOWZmZuZW4gZGVyIEthbsOkbGUgZsO2cmRlcnQgYXVjaCBlaW5lIGVpbmZhY2hlcmUgQWJmYWxsYmVzZWl0aWd1bmcgdW5kIHN0ZWxsdCBkaWUga29ycmVrdGUgWmVsbGZ1bmt0aW9uIGVmZml6aWVudCB3aWVkZXIgaGVyLiBFaW4gZWZmaXppZW50ZXMgU3lzdGVtIHZvbiBaZWxsZW4gc2NoYWZmdCBlZmZpemllbnRlcyBHZXdlYmUsIGRhcyBzaWNoIHp1IE9yZ2FuZW4genVzYW1tZW5zZXR6dC4gRGllIFdpZWRlcmhlcnN0ZWxsdW5nIGRlciByaWNodGlnZW4gRnVua3Rpb24gdm9uIGRlciB6ZWxsdWxhcmVuIEViZW5lIGJyaW5ndCB2b3J0ZWlsaGFmdGUgTGFuZ3plaXR3aXJrdW5nZW4gYXVmIGFsbGUgdmVyd2FuZHRlbiBQcm9ibGVtZSB1bmQgdmVyYmVzc2VydCBkYXMgYWxsZ2VtZWluZSBXb2hsYmVmaW5kZW4uIEVpbmUgZ2VzdW5kZSBaZWxsZnVua3Rpb24gdmVycmluZ2VydCBhdWNoIGRlbiBCZWRhcmYgYW4gWmVsbGVyc2F0eiwgdmVybGFuZ3NhbXQgQWx0ZXJ1bmdzcHJvemVzc2UgdW5kIEVuZXJnaWV2ZXJzY2h3ZW5kdW5nLiBcIixcclxuICAgIFwiaGVscC10ZXh0OVwiOlwiS2FubiBkaWUgUEVNRi1UaGVyYXBpZSBtaWNoIHZvciB6dWvDvG5mdGlnZW4gS3JhbmtoZWl0ZW4gc2Now7x0emVuPyBcIixcclxuICAgIFwiaGVscC10ZXh0MTBcIjpcIkVmZmVrdGl2IGFyYmVpdGVuIGJlaSBzeXN0ZW1hdGlzY2hlIEViZW5lIHdpcmQgZGllIE3DtmdsaWNoa2VpdGVuIGbDvHIgZGllIEVudHdpY2tsdW5nIHZvbiBLcmFua2hlaXRlbiB2ZXJyaW5nZXJuLiBLcmFua2hlaXRlbiBiZWdpbm5lbiBhdWYgemVsbHVsw6RyZXIgRWJlbmUgdW5kIFZlcmxldHp1bmdlbiBtw7xzc2VuIGF1ZiB6ZWxsdWzDpHJlciBFYmVuZSBiZWdpbm5lbiB6dSBoZWlsZW4uIER1cmNoIGRpZSBWZXJ3ZW5kdW5nIHZvbiBnZXB1bHN0ZW4gZWxla3Ryb21hZ25ldGlzY2hlbiBGcmVxdWVuemVuIGthbm4gZGllIGFsbGdlbWVpbmUgWmlya3VsYXRpb24gdmVyYmVzc2VydCB3ZXJkZW4sIHdvZHVyY2ggUmVwYXJhdGlvbnNwcm96ZXNzZSBiZXNjaGxldW5pZ3Qgd2VyZGVuLiBEdXJjaCBkaWUgVmVyYmVzc2VydW5nIGRlciBhbGxnZW1laW5lbiB6ZWxsdWzDpHJlbiBHZXN1bmRoZWl0IGJyZWNoZW4gc2llIHdlbmlnZXIgaMOkdWZpZyBhYi4gR2VzdW5kZSBPcGVyYXRpb25zemVsbGVuIGJlc2NobGV1bmlnZW4gZGllIFJla3VwZXJhdGlvbiB1bmQgZ2xlaWNoZW4ga8O2cnBlcmxpY2hlIEZ1bmt0aW9uZW4gYXVzLiBcIixcclxuICAgIFwiaGVscC10ZXh0MTFcIjpcIlNpbmQgbWlyIGtlaW5lIE1hZ25ldGZlbGRlciBzY2hsZWNodD8gXCIsXHJcbiAgICBcImhlbHAtdGV4dDEyXCI6XCJEZXIgTXlNYXQgaGF0IGVpbmVuIEZyZXF1ZW56YmVyZWljaCB6d2lzY2hlbiAxSHogYmlzIDIwMGtIeiB1bmQgRGllIEVNRi1TdMOkcmtlIMO8YmVyc2NocmVpdGV0IDEwIE1pa3JvLVRlc2xhIHBybyBLYW5hbCBuaWNodC4gRGVyIE15TWF0IGthbm4gYXVmZ3J1bmQgc2VpbmVyIDQgQW50ZW5uZW4gYmlzIHp1IDQgS2Fuw6RsZSBnbGVpY2h6ZWl0aWcgYmV0cmVpYmVuLCBhbHNvIG1heGltYWwgNDAgTWlrcm8gVGVzbGEuIE1hZ25ldGZlbGRlciBhdcOfZXJoYWxiIGRlciB0aWVmZW4gdW5kIGV4dHJlbSBuaWVkcmlnZW4gRnJlcXVlbnplbiB3aWUgTWlrcm93ZWxsZW4tLCBJbmZyYXJvdC0sIFJhZGlvLSB1bmQgVWx0cmF2aW9sZXR0ZnJlcXVlbnplbiBoYWJlbiB1bnRlcnNjaGllZGxpY2hlIG5hY2h0ZWlsaWdlIEF1c3dpcmt1bmdlbiBhdWYgdW5zZXJlIFplbGxlbiB1bmQgdW5zZXJlbiBLw7ZycGVyLiBEZXIgZ3LDtsOfdGUgVGVpbCB1bnNlcmVzIEV4cG9zaXRpb25zcmlzaWtvcyBzdGFtbXQgdm9uIGjDtmhlcmVuIEZyZXF1ZW56ZW4gd2llIFN0cm9tbGVpdHVuZ2VuIHVuZCBIYW5keXMsIGRpZSB0w6RnbGljaCBhbiB1bnNlcmVuIEvDtnBmZW4gYW5nZXNjaGxvc3NlbiBzaW5kLiBEaWVzZSBGcmVxdWVuemVuIHN0ZWxsZW4gaMO2aGVyZSBSaXNpa2VuIGRhciwgZGEgd2lyIHN0w6RuZGlnIG1pdCBpaG5lbiBrb25mcm9udGllcnQgc2luZCB1bmQgc2llIGvDtm5uZW4gR2V3ZWJlc2Now6RkZW4gYXVzbMO2c2VuLCBkaWUgWmVsbGZ1bmt0aW9uIHZlcsOkbmRlcm4gdW5kIGFsbGdlbWVpbmUgemVsbHVsw6RyZSBTY2jDpGRlbiB2ZXJ1cnNhY2hlbi4gRXMgaXN0IHByYWt0aXNjaCB1bm3DtmdsaWNoLCBlaW4gTGViZW4genUgZsO8aHJlbiwgZGFzIGRpZXNlIEZyZXF1ZW56ZW4gdmVybWVpZGV0LCBzaWUgc2luZCDDvGJlcmFsbCB1bmQgZHJpbmdlbiBpbiBhbGxlcyBlaW4uIFdpciBrw7ZubmVuIEUtU21vZyBuaWNodCBlbnRrb21tZW4sIGFiZXIgd2lyIGvDtm5uZW4gZGFzIE15TWF0IHZlcndlbmRlbiwgZGFzIG1laHJlcmUgUHJvZ3JhbW1lIGhhdCwgZGllIGhlbGZlbiBrw7ZubmVuLCBzY2jDpGRsaWNoZSBFZmZla3RlIHZvbiBhbGwgdW5zZXJlbiBzdMOkbmRpZ2VuIGVsZWt0cm9uaXNjaGVuIEJvbWJhcmRlbWVudHMgenUgcmVkdXppZXJlbiwgaW5kZW0gd2lyIEZyZXF1ZW56ZW4gaGluenVmw7xnZW4sIGRpZSB1bnNlcmVuIEvDtnJwZXIgaW0gR2xlaWNoZ2V3aWNodCBoYWx0ZW4gdW5kIGRpZSBnZXN1bmRlbiwgbmF0w7xybGljaGVuIEZyZXF1ZW56ZW4gZXJoYWx0ZW4uIDwvIHA+IFwiLFxyXG4gICAgXCJoZWxwLXRleHQxM1wiOlwiV2lyZCBkaWUgUEVNRi1UaGVyYXBpZSBtZWluZSBNZWRpa2FtZW50ZSBlcnNldHplbj8gXCIsXHJcbiAgICBcImhlbHAtdGV4dDE0XCI6XCJEaWUgVGhlcmFwaWUgbWl0IGRlbiBnZXB1bHN0ZW4gZWxla3Ryb21hZ25ldGlzY2hlbiBGcmVxdWVuemVuIGthbm4gZGFzIGFsbGdlbWVpbmUgV29obGJlZmluZGVuIHNpZ25pZmlrYW50IHZlcmJlc3Nlcm4gdW5kIHZpZWxlIG5lZ2F0aXZlIFN5bXB0b21lIHZlcnJpbmdlcm4gLi4gRXMga2FubiBuZWJlbiBCZWhhbmRsdW5nZW4gdW5kIE1lZGlrYW1lbnRlbiB2ZXJ3ZW5kZXQgd2VyZGVuLCB1bSBkaWUgRXJnZWJuaXNzZSB6dSB2ZXJiZXNzZXJuLiBFcyBpc3Qgd2ljaHRpZywgbWl0IG1lZGl6aW5pc2NoZW4gRmFjaGxldXRlbiB6dSBzcHJlY2hlbiwgYmV2b3IgaXJnZW5kd2VsY2hlIEJlaGFuZGx1bmdlbiBvZGVyIE1lZGlrYW1lbnRlIGVyc2V0enQgd2VyZGVuLiBTb2JhbGQgZWluIHJpY2h0aWdlciBQbGFuIGVyc3RlbGx0IHVuZCBFcmdlYm5pc3NlIGdlc2VoZW4gd2VyZGVuLCBpc3QgZXMgbcO2Z2xpY2gsIEJlaGFuZGx1bmdlbiBvZGVyIE1lZGlrYW1lbnRlIHp1IHJlZHV6aWVyZW4gb2RlciB6dSBiZXNlaXRpZ2VuLiBGcmFnZW4gU2llIGltbWVyIG5hY2ggbWVkaXppbmlzY2hlbiBSYXRzY2hsw6RnZW4gb2RlciBLb25zdWx0YXRpb25lbiwgYmV2b3IgU2llIGJlc3RlaGVuZGUgQmVoYW5kbHVuZ2VuIMOkbmRlcm4gb2RlciBlcnNldHplbi4gPC8gcD4gXCIsXHJcbiAgICBcImhlbHAtdGV4dDE1XCI6XCJXaWUgYmVlaW5mbHVzc2VuIGVsZWt0cm9tYWduZXRpc2NoZSBGZWxkZXIgbWVpbmVuIEvDtnJwZXI/IFwiLFxyXG4gICAgXCJoZWxwLXRleHQxNlwiOlwiQWxsZXMgaW4gdW5zZXJlbSBLw7ZycGVyIGlzdCBlbGVrdHJpc2NoLCB1bnNlcmUgWmVsbGVuIGtvbW11bml6aWVyZW4gbWl0IGVsZWt0cm9tYWduZXRpc2NoZW4gRnJlcXVlbnplbiwgdW5zZXIgSGVyeiBlcnpldWd0IGVsZWt0cm9tYWduZXRpc2NoZSBXZWxsZW4gbWl0IEplZGVyIFNjaGxhZyBrb21tdW5pemllcnQgdW5zZXIgTmVydmVuc3lzdGVtLCB3ZW5uIE5ldXJvbmVuIMO8YmVyIFN5bmFwc2VuIGF1ZiBlbGVrdHJvbWFnbmV0aXNjaGUgU2lnbmFsZSByZWFnaWVyZW4uIEluIGRpZXNlbSBTaW5uZSBrw7ZubmVuIHdpciB2ZXJzdGVoZW4sIHdpZSBleHRlcm5lIG1hZ25ldGlzY2hlLCBlbGVrdHJpc2NoZSB1bmQgZWxla3Ryb21hZ25ldGlzY2hlIEZlbGRlciBtaXQgamVkZW0gQXNwZWt0IHVuc2VyZXJcIixcclxuXHJcbiAgICBcImhlbHAtdGV4dDIzXCI6IFwiS8O2bm50ZW4gTWFnbmV0ZmVsZGVyIGVpbmUgw5xiZXJkb3NpZXJ1bmcgdmVydXJzYWNoZW4/XCIsXHJcbiAgICBcIkhlbHAtdGV4dDI0XCI6IFwiRGllIE15TWF0IGFyYmVpdGV0IG1pdCBnZXB1bHN0ZW4gTWFnbmV0ZmVsZCB2b24gc2VociBnZXJpbmdlciBJbnRlbnNpdMOkdCBlaW5lIGdlc3VuZGUgWmVsbGUgaW4gaWRlYWxlciBLYXBheml0w6R0IGFyYmVpdGV0LCBzbyBkYXNzIFNpZSBrZWluZSBOb3R3ZW5kaWdrZWl0IGbDvHIgbWVociBFbmVyZ2llIHVuZCBrw7ZubmVuIG5pY2h0IG1laHIgRW5lcmdpZSBha3plcHRpZXJlbiwgc28gZGllc2UgRnJlcXVlbnplbiBpZ25vcmllcmVuIC4uIEVpbmUgYmVzY2jDpGRpZ3RlIG9kZXIgZGVmZWt0ZSBaZWxsZSBrYW5uIGVpbmVuIFRlaWwgZGllc2VyIEVuZXJnaWUgYWJzb3JiaWVyZW4sIGFiZXIgZXMgaXN0IHVubcO2Z2xpY2gsIHNpZSB6dSDDvGJlcmxhc3RlbiwgZGEga2VpbmUgTcO2Z2xpY2hrZWl0IGJlc3RlaHQsIG1laHIgRW5lcmdpZSB6dSBzcGVpY2hlcm4sIGFscyBiZW7DtnRpZ3Qgd2lyZC4gPC8gUD4gXCIsXHJcblxyXG4gICAgXCJoZWxwLXRleHQyNVwiOiBcIldhcyBzaW5kIGVpbmlnZSBkZXIgZ3J1bmRsZWdlbmRlbiBwb3NpdGl2ZW4gV2lya3VuZ2VuLCBkaWUgUEVNRnMgYXVmIG1laW5lbiBLw7ZycGVyIGhhYmVuIHdlcmRlbj8gPC8gZGl2PlwiLFxyXG4gICAgXCJoZWxwLXRleHQyNlwiOiBcIlZlcmJlc3NlcnVuZyBkZXIgR2V3ZWJlaGVpbHVuZzxicj5TY2htZXJ6cmVkdWt0aW9uPGJyPkVuZXJnaWUgc3RlaWdlcm48YnI+VmVyYmVzc2VyZSBkZW4gU2NobGFmIDxicj5FcyBtYWNodCBkYXMgV2VpY2hnZXdlYmUgZmxleGlibGVyIDxicj5TdGltdWxhdGlvbiBNZXJpZGlhbmEgPGJyPlNlbmt1bmcgZGVzIEJsdXRkcnVja3M8YnI+R2VyaW5udW5nc2Zha3RvcmVuIHZlcmJlc3Nlcm48YnI+UmVkdXppZXJ0ZSBBcnRocml0aXMgQXVmbmFobWUgdm9uPGJyPkltbXVuc3lzdGVtIFN0aW11bGF0aW9uPGJyPkVudGdpZnR1bmc8YnI+SGVsZmVuIFNpZSBkZXIgbmVydsO2c2VuIEZ1bmt0aW9uIDxicj5WZXJiZXNzZXJ1bmcgZGVyIE7DpGhyc3RvZmZhdWZuYWhtZTxicj5SZWR1a3Rpb24gZGVyIE11c2tlbHNwYW5udW5nXCIsXHJcblxyXG5cclxuXHJcbiAgICAgICAgXCJhZGRpY3Rpb24tdXBwZXJcIjogXCJTVUNIVFwiLFxyXG4gICAgICAgIFwiYWRkaWN0aW9uLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEVyZ8OkbnplbmQgYmVpIFN1Y2h0YmVoYW5kbHVuZ2VuLiDigKIgWnVyIEFiZ2V3w7ZobnVuZyB2b24gWmlnYXJldHRlbi0sIEFsa29ob2wtIG9kZXIgRG9yZ2Vua29uc3VtLiDigKIgTWluZGVydCBkaWUgTmViZW53aXJrdW5nZW4gYmVpIEVudHp1Z3NlcnNjaGVpbnVuZ2VuLiBadXNhdHpwcm9ncmFtbWU6IEVudGdpZnR1bmcsICBFLXNtb2csIE5lYmVubmllcmVuLCBGcnVzdHJhdGlvbiwgRnJldWRlLCBGcmllZGUsIEVudHNwYW5udW5nLCAgRXJkZS1FbGVtZW50LCBXYXNzZXItRWxlbWVudCwgTWV0YWxsLUVsZW1lbnQsIExlYmVyLU1lcmlkaWFuLCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgRGlja2Rhcm0tTWVyaWRpYW4sIEhlcnotTWVyaWRpYW4sIE5pZXJlbi1NZXJpZGlhbiwgMS4gdW5kIDIuICBDaGFrcmFcIixcclxuICAgICAgICBcImFkcmVuYWwtZ2xhbmQtdXBwZXJcIjogXCJORUJFTk5JRVJFTlwiLFxyXG4gICAgICAgIFwiYWRyZW5hbC1nbGFuZC1kZXNjcmlwdGlvblwiOiBcIuKAoiBVbnRlcnN0w7x0enQgZGllIEVyaG9sdW5nIGJlaSBzdGFya2VyIEVyc2Now7ZwZnVuZy4g4oCiIEJlaSBEYXVlci1Nw7xkaWdrZWl0LiDigKIgVW50ZXJzdMO8dHplbmQgYmVpIEhvcm1vbi1VbmdsZWljaGdld2ljaHQuIOKAoiBBbHMgRXJnw6RuenVuZ3MtQmVoYW5kbHVuZyBiZWkgQWxsZXJnaWVuIHVuZCBBdXRvaW1tdW4tUHJvYmxlbWVuLiBadXNhdHpwcm9ncmFtbWU6IFLDvGNrZW5zY2htZXJ6ZW4sIEVyc2Now7ZwZnVuZywgTGViZW5zZnJldWRlLCBFbmVyZ2llLVNwZW5kZXIsIEUtU21vZywgV2Fzc2VyLUVsZW1lbnQsIFdpcmJlbHPDpHVsZSAoRmVobGF1c3JpY2h0dW5nZW4gZGVyIFdpcmJlbHPDpHVsZSBrw7ZubmVuIE5pZXJlbnN0w7ZydW5nZW4gYmVnw7xzdGlnZW4pLCAxLiB1bmQgMi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJhbnRpLWFnaW5nLXVwcGVyXCI6IFwiQU5USS1BR0lOR1wiLFxyXG4gICAgICAgIFwiYW50aS1hZ2luZy1kZXNjcmlwdGlvblwiOiBcIuKAoiBBbnRpLWFnaW5nIFByb2dyYW1tIHVtIGRpZSBCaW8tS29tbXVuaWthdGlvbnNha3Rpdml0w6R0IGltIE9yZ2FuaXNtdXMgYXVmcmVjaHQgenUgZXJoYWx0ZW4uIOKAoiBIw6RsdCBkZW4gS8O2cnBlciBpbiBGb3JtLiDigKIgZsO8ciBkZW4gZXJmb2xncmVpY2hlbiBBYnRyYW5zcG9ydCB2b24gU3RvZmZ3ZWNoc2VsYWJmYWxscHJvZHVrdGVuLiDigKIgVmVycmluZ2VydCBkaWUgdMOkZ2xpY2hlIGvDtnJwZXJsaWNoZSB1bmQgZ2Vpc3RpZ2UgU3RyZXNzbGFkdW5nLiBadXNhdHpwcm9ncmFtbWU6IEtub2NoZW4sIEVuZXJnaWUtQXVzZ2xlaWNoLCBNaW5lcmFsLVN0b2Zmd2VjaHNlbCwgQmluZGVnZXdlYmUsIEVsZW1lbnRlLCBNZXJpZGlhbmUsIDEuIOKAkyAyLiB1bmQgNy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJhdWRpdG9yeS11cHBlclwiOiBcIkdFSMOWUlwiLFxyXG4gICAgICAgIFwiYXVkaXRvcnktZGVzY3JpcHRpb25cIjogXCLigKIgRXJnw6RuenQgYWxsZSBCZWhhbmRsdW5nZW4gYmVpIFN0w7ZydW5nZW4gZGVzIEdlaMO2ci0gdW5kIEdsZWljaGdld2ljaHRzeXN0ZW0uIOKAoiBWb3JiZXVnZW5kZSBBbndlbmR1bmcgenVyIEJlaWJlaGFsdHVuZyBkZXIgSMO2cnF1YWxpdMOkdC4g4oCiIEVyZ8Okbnp1bmdzYmVoYW5kbHVuZyBiZWkgY2hyb25pc2NoZW4gR2Vow7Zya2FuYWwtIHVuZCBNaXR0ZWxvaHItRW50esO8bmR1bmdlbi4g4oCiIEFud2VuZGVuIGJlaSBsYXV0ZW0gQXJiZWl0c3VtZmVsZCBhbHMgUHLDpHZlbnRpb24uIFp1c2F0enByb2dyYW1tZTogS3JlaXNsYXVmc3lzdGVtLCBMeW1wc3lzdGVtLCBBdG11bmdzc3lzdGVtLiBOZWJlbmjDtmhsZW4vU3Rpcm5ow7ZobGVuLCBFbnRnaWZ0dW5nLCBOaWVyZW4tTWVyaWRpYW4sIExlYmVyLU1lcmlkaWFuLCBXYXNzZXItRWxlbWVudCwgNi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJiYWNrYWNoZS11cHBlclwiOiBcIlLDnENLRU5TQ0hNRVJaRU5cIixcclxuICAgICAgICBcImJhY2thY2hlLWRlc2NyaXB0aW9uXCI6IFwi4oCiIFZvcmJldWd1bmcgdW5kIE1pbmRlcnVuZyB2b24gUsO8Y2tlbnNjaG1lcnplbi4g4oCiIFVudGVyc3TDvHR6ZW5kIGJlaSBXaXJiZWxzw6R1bGVuLVRoZXJhcGllIHVuZCBCYW5kc2NoZWliZW4tVm9yZsOkbGxlbi4g4oCiICBMaW5kZXJ0IFNjaG1lcnplbiBpbSBMZW5kZW5iZXJlaWNoIChIZXhlbnNjaHVzcykuIOKAoiBMaW5kZXJ0IE11c2tlbGthdGVyIG5hY2gga8O2cnBlcmxpY2hlciBBbnN0cmVuZ3VuZy4g4oCiIFVudGVyc3TDvHR6dCBkaWUgQmVoYW5kbHVuZyB2b24gUsO8Y2tlbnNjaG1lcnplbiwgZGllIEhhbmQtIHVuZCBBcm1iZXdlZ3VuZ2VuIGJsb2NraWVyZW4uIOKAoiBadXNhdHpwcm9ncmFtbWU6IFZlcmRhdXVuZywgV2lyYmVsc8OkdWxlLCBOYWNrZW4vU2NodWx0ZXIsIE11c2tlbGdld2ViZSwgTmVydmVuLCBGcnVzdHJhdGlvbiwgRnJldWRlLCBXYXNzZXItRWxlbWVudCwgTmllcmVuLU1lcmlkaWFuLCBIYXJuYmxhc2UtTWVyaWRpYW4sIERpY2tkYXJtLU1lcmlkaWFuLCAxLiB1bmQgMi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJib25lcy11cHBlclwiOiBcIktOT0NIRU5cIixcclxuICAgICAgICBcImJvbmVzLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEluIGRlciBSZWhhYmlsaXRhdGlvbnNwZXJpb2RlIG5hY2ggS25vY2hlbmJyw7xjaGVuIHVuZCBLbm9jaGVua3JhbmtoZWl0ZW4uIOKAoiBPcHRpbWllcnQgZGllIFN0b2Zmd2VjaHNlbGZ1bmt0aW9uZW4gZGVzIEtub2NoZW5nZXdlYmVzLiDigKIgU2NobWVyemxpbmRlcm5kIGJlaSBCZWVpbnRyw6RjaHRpZ3VuZyBkZXIgU3RvZmZ3ZWNoc2VsZnVua3Rpb25lbiBkZXMgS25vY2hlbmdld2ViZXMuIOKAoiBFcmfDpG56dCBrbm9jaGVuc3TDpHJrZW5kZSBUaGVyYXBpZW4uIOKAoiBVbnRlcnN0w7x0enQgZGllIEthbHppdW1hdWZuYWhtZSBpbiBkaWUgS25vY2hlbnplbGxlbiAoYmV1Z3QgRW50a2Fsa3VuZyB2b3IpLiDigKIgU2NobWVyemxpbmRlcm5kIGJlaSBLbm9jaGVud2FjaHN0dW0gYmVpIEtpbmRlci4gWnVzYXRzcHJvZ3JhbW1lOiBCaW5kZWdld2ViZSwgTmViZW5uaWVyZW4sIFNjaGlsZGRyw7xzZW4sIE1pbmVyYWwtU3RvZmZ3ZWNoc2VsLVN0w7ZydW5nLCBBbnRpIEFnaW5nLCBWZXJkYXV1bmdzc3lzdGVtLCBNZXRhbGwtRWxlbWVudCwgV2Fzc2VyLUVsZW1lbnQsIERpY2tkYXJtLU1lcmlkaWFuLCBMZWJlci1NZXJpZGlhbiwgTmllcmVuLU1lcmlkaWFuLCAxLiBDaGFrcmFcIixcclxuICAgICAgICBcImNoaWxkLWRldmVsb3BlbWVudC11cHBlclwiOiBcIktJTkRMSUNIRSBFTlRXSUNLTFVOR1wiLFxyXG4gICAgICAgIFwiY2hpbGQtZGV2ZWxvcGVtZW50LWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhhcm1vbmlzaWVydCBkaWUgZ2Vpc3RpZ2UgdW5kIGvDtnJwZXJsaWNoZSBFbnR3aWNrbHVuZyBiZWkgS2luZGVybi4g4oCiIFN0aW1tdWxpZXJ0IGRpZSBzcGV6aWZpc2NoZW4gR2V3ZWJlIGJlaSBkZXIgRW50d2lja2x1bmcuIOKAoiBWZXJiaW5kdW5nIG1pdCBkZXIgRXJkZSwgRXJkdW5nLiBXaWNodGlnIGbDvHIgS2luZGVyIGRpZSBpbiBzdMOkZHRpc2NoZW4gR2ViaWV0ZW4gbGViZW4uIFp1c2F0enByb2dyYW1tZTogRW5lcmdpZS1BdXNnbGVpY2gsIEtub2NoZW4sIE11c2tlbG4sIE5lcnZlbnN5c3RlbSwgRS1TbW9nLCBGcmV1ZGUsIEZydXN0cmF0aW9uLCBFbGVtZW50ZSwgUGVyaWthcmRpdW0tTWVyaWRpYW4sIE1pbHovQmF1Y2hzcGVpY2hlbGRyw7xzZS1NZXJpZGlhbiwgQ2hha3Jhc1wiLFxyXG4gICAgICAgIFwiY2lyY3VsYXRvcnktc3lzdGVtLXVwcGVyXCI6IFwiSEVSWi1LUkVJU0xBVUZTWVNURU1cIixcclxuICAgICAgICBcImNpcmN1bGF0b3J5LXN5c3RlbS1kZXNjcmlwdGlvblwiOiBcIuKAoiBVbnRlcnN0w7x0emVuZCBiZWkgS3JlaXNsYXVmcHJvYmxlbWVuLiDigKIgQmVpIE5laWd1bmcgenUgw5ZkZW1lbiBpbiBkZW4gRXh0cmVtaXTDpHRlbi4g4oCiIEVyZ8Okbnp0IGRpZSBCZWhhbmRsdW5nIHZvbiBBcnRlcmlvc2tsZXJvc2UuIOKAoiBadXNhdHpwcm9ncmFtbWU6IE5lYmVubmllcmVuLCBFbnRzcGFubnVuZywgS29uemVudHJhdGlvbiwgR2Vkw6RjaHRuaXMsIEZldWVyLUVsZW1lbnQsIEhlcnotTWVyaWRpYW4sIFBlcmlrYXJkaXVtLU1lcmlkaWFuLCAxLiB1bmQgNC4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJjb25jZW50cmF0aW9uLXVwcGVyXCI6IFwiS09OWkVOVFJBVElPTlwiLFxyXG4gICAgICAgIFwiY29uY2VudHJhdGlvbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBSZWd0IGRhcyBHZWTDpGNodG5pcyBhbiBzdGVpZ2VydC92ZXJiZXNzZXJ0IFByb2JsZW1sw7ZzdW5nZW4gdW5kIFNwcmFjaGdlc2NoaWNrLiDigKIgTW9iaWxpc2llcnQgZGllIEVuZXJnaWVyZXNlcnZlbiB1bmQgZsO2cmRlcnQgZGllIEludHVpdGlvbi4gR2VzY2jDpGZ0c3RyZWZmZW4gdW5kIFByw7xmdW5nZW4uIFp1c2F0enByb2dyYW1tZTogRW5lcmdpZS1BdXNnbGVpY2gsIEFudGkgQWdpbmcsIE5lYmVubmllcmVuLCBEYXJtZmxvcmEsIEdlZMOkY2h0bmlzLCBNaWx6LCAgQmF1Y2hzcGVpY2hlbGRyw7xzZS1NZXJpZGlhbiwgTmllcmVuLU1lcmlkaWFuLCBIZXJ6LU1lcmlkaWFuLCAxLiDigJMgMy4gdW5kIDYuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiY29ubmVjdGl2ZS10aXNzdWUtdXBwZXJcIjogXCJCSU5ERUdFV0VCRVwiLFxyXG4gICAgICAgIFwiY29ubmVjdGl2ZS10aXNzdWUtZGVzY3JpcHRpb25cIjogXCLigKIgQmV1Z3QgVmVybGV0enVuZ2VuIHZvciBiZWkgw7xiZXJzdHJhcGF6aWVydGVtIEJpbmRlZ2V3ZWJlIGJlaSBMZXV0ZW4gbWl0IEJpbmRlZ2V3ZWJzc2Nod8OkY2hlICh6LkIuIGFuZsOkbGxpZyBlaW5lIEhlcm5pZSB6dSBlbnR3aWNrZWxuLCBLcmFtcGZhZGVybikuIOKAoiBXaWNodGlnIGJlaSB4LXdlbGNoZW0gQW50aS1BZ2luZyBQcm9ncmFtbS4gQmVzc2VyZSBWZXJmw7xnYmFya2VpdCBkZXIgTsOkaHJzdG9mZmUgYXVmIGRhcyBPcmdhbiBTeXN0ZW0uIFp1c2F0enByb2dyYW1tZTogIEFudGktQWdpbmcsIE5lYmVubmllcmVuLCBWZXJkYXV1bmdzc3lzdGVtLCBNaW5lcmFsaWVuLVN0b2Zmd2VjaHNlbC1TdMO2cnVuZywgR2VsZW5rZSwgTXVza2VsbiwgV2Fzc2VyLUVsZW1lbnQsIEhvbHotRWxlbWVudCwgMS4sIDMuIHVuZCA2LiBDaGFrcmFcIixcclxuICAgICAgICBcImNvbnN0aXBhdGlvbi11cHBlclwiOiBcIlZFUlNUT1BGVU5HXCIsXHJcbiAgICAgICAgXCJjb25zdGlwYXRpb24tZGVzY3JpcHRpb25cIjogXCLigKIgQmVpIGFrdXRlciB1bmQgY2hyb25pc2NoZXIgVmVyc3RvcGZ1bmcuIFp1c2F0enByb2dyYW1tZTogVmVyZGF1dW5nc3N5c3RlbSwgTWluZXJhbGllbi1TdG9mZndlY2hzZWwtU3TDtnJ1bmcsIERhcm1mbG9yYSwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIERpY2tkYXJtLU1lcmlkaWFuLCAxLiAgdW5kIDMuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiZGV0b3hpZmljYXRpb24tdXBwZXJcIjogXCJFTlRHSUZUVU5HXCIsXHJcbiAgICAgICAgXCJkZXRveGlmaWNhdGlvbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBVbnRlcnN0w7x0enQgZGllIGvDtnJwZXJlaWdlbmVuIEVudGdpZnR1bmdzbWVjaGFuaXNtZW4uIOKAoiBOw7x0emxpY2ggbmFjaCBqZWRlciBWZXJnaWZ0dW5nLiDigKIgQmlldGV0IFNjaHV0eiBiZWltIFBhc3NpdnJhdWNoZW4uIOKAoiBVbnRlcnN0w7x0emVuZCBiZWkgUmF1Y2gtLCBBbGtvaG9sLSB1bmQgTWVkaWthbWVudGVuLUVudHp1Zy4g4oCiIFp1c2F0enByb2dyYW1tOiBWZXJkYXV1bmcsIERhcm1mbG9yYSwgRS1TbW9nLCBCaW5kZWdld2ViZSwgVmVyc3RvcGZ1bmcgKHNvZmVybiBhbndlbmRiYXIpLCBGcmllZGVuLCBNaWx6L0JhdWNoc3BlaWNoZWxkcsO8c2UtTWVyaWRpYW4sIExlYmVyLU1lcmlkaWFuLCBOaWVyZW4tTWVyaWRpYW4sIERpY2tkYXJtLU1lcmlkaWFuLCBMdW5nZW4tTWVyaWRpYW4sIDIuIENoYWtyYSAgQmVtZXJrdW5nOiBOSUNIVCBBTldFTkRFTiBJTiBERVIgU0NIV0FOR0VSU0NIQUZUIVwiLFxyXG4gICAgICAgIFwiZGlhcnJoZWEtdXBwZXJcIjogXCJEVVJDSEZBTExcIixcclxuICAgICAgICBcImRpYXJyaGVhLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEJlaSBha3V0ZW0gdW5kIGNocm9uaXNjaGVtIER1cmNoZmFsbC4gWnVzYXR6cHJvZ3JhbW1lOiBWZXJkYXV1bmdzc3lzdGVtLCBFbnRnaWZ0dW5nLCBEYXJtZmxvcmEsIE1hZ2VuLU1lcmlkaWFuLCBEw7xubi0gdW5kIERpY2tkYXJtLU1lcmlkaWFuLCBGZXVlci1FbGVtZW50LCAxLiB1bmQgMy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJkaWdlc3RpdmUtc3lzdGVtLXVwcGVyXCI6IFwiVkVSREFVVU5HU1NZU1RFTVwiLFxyXG4gICAgICAgIFwiZGlnZXN0aXZlLXN5c3RlbS1kZXNjcmlwdGlvblwiOiBcIuKAoiBWZXJkYXV1bmdzYmVzY2h3ZXJkZW4uIOKAoiBTdGltbXVsaWVydCBkaWUgT3JnYW5lIGRlcyBWZXJkYXV1bmdzc3lzdGVtcy4g4oCiIEbDtnJkZXJ0IGRpZSBBdWZuYWhtZSB2b24gVml0YW1pbmVuIHVuZCBOYWhydW5nc2VyZ8Okbnp1bmdzbWl0dGVsLiDigKIgVW50ZXJzdMO8dHp0IGRhcyBWZXJkYXV1bmdzc3lzdGVtIGJlaSBzY2h3ZXIgdmVyZGF1bGljaGVuIExlYmVuc21pdHRlbG4gIChNw7xkaWdrZWl0IG5hY2ggZGVyIE5haHJ1bmdzYXVmbmFobWUpLiDigKIgVW50ZXJzdMO8dHplbmQgYmVpIGxhbmdmcmlzdGlnZXIgcGhhcm1hemV1dGlzY2hlciBCZWhhbmRsdW5nLCB2ZXJtaW5kZXJ0IE5lYmVud2lya3VuZ2VuIGltIFZlcmRhdXVuZ3N0cmFrdC4gWnVzYXR6cHJvZ3JhbW1lOiBEYXJtZmxvcmEsIEVudGdpZnR1bmcsIEZydXN0cmF0aW9uLCBNYWdlbi1NZXJpZGlhbiwgTWlsei9CYXVjaHNwZWljaGVsZHLDvHNlLU1lcmlkaWFuLCBEw7xubmRhcm0tTWVyaWRpYW4sIERpY2tkYXJtLU1lcmlkaWFuLCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgRXJkZS1FbGVtZW50LCBNZXRhbC1FbGVtZW50LCAzLiBDaGFrcmFcIixcclxuICAgICAgICBcclxuICAgICAgICBcImRpc2Nlcm5tZW50LXVwcGVyXCI6IFwiR0VEw4RDSFROSVNcIixcclxuICAgICAgICBcImRpc2Nlcm5tZW50LWRlc2NyaXB0aW9uXCI6IFwi4oCiIFVudGVyc3TDvHR6dCBkaWUgTWVya2bDpGhpZ2tlaXQuIOKAoiBTdGVpZ2VydCBkaWUgQXVmbmFobWVmw6RoaWdrZWl0IGbDvHIgd2ljaHRpZ2UgSW5mb3JtYXRpb25lbi4g4oCiIFVudGVyc3TDvHR6dCBkaWUgS29uemVudHJhdGlvbnNmw6RoaWdrZWl0LiDigKIgR2VzdGVpZ2VydGUgTGVybmbDpGhpZ2tlaXQuIFp1c2F0enByb2dyYW1tZTogS29uemVudHJhdGlvbiwgS3JlaXNsYXVmc3lzdGVtLCBFbmVyZ2llc3BlbmRlciwgRXJkZS1FbGVtZW50LCBXYXNzZXItRWxlbWVudCwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIE1pbHovQmF1c2Noc3BlaWNoZWxkcsO8c2UtTWVyaWRpYW4sIEhlcnotTWVyaWRpYW4sIDUuLCA2LiB1bmQgNy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJlLXNtb2ctdXBwZXJcIjogXCJFTEVLVFJPLVNNT0dcIixcclxuICAgICAgICBcImUtc21vZy1kZXNjcmlwdGlvblwiOiBcIuKAoiBGw7xyIExldXRlIGRpZSBpbiBlbmdlbSBLb250YWt0IG1pdCBlbGVrdHJvbmlzY2hlbiB1bmQgZWxla3RyaXNjaGVuIEdlcsOkdGVuIHN0ZWhlbi4g4oCiIEJlaSBIYW5keS0sIE1pa3Jvd2VsbGVuLSB1bmQgVGVsZWZvbmJlc3RyYWhsdW5nICh2LmEuIGluIGRpY2h0IGJlc2llZGVsdGVuIEdlYmlldGVuKS4g4oCiIE1pbmRlc3RlbnMgendlaW1hbCBwcm8gV29jaGUgYW53ZW5kZW4hLiDigKIgR8O8bnN0aWcgZsO8ciBIZWlsZXIvaW5uZW46IFJlaW5pZ3QgZGllIEF1cmEgdm9uIHNjaHdlcmVuIG5lZ2F0aXZlbiBFbmVyZ2llbi4gWnVzYXR6cHJvZ3JhbW1lOiBFbmVyZ2llLUF1c2dsZWljaCwgTWlsei9CYXVjaHNwZWljaGVsZHLDvHNlLU1lcmlkaWFuLCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgQWxsZSBDaGFrcmEgUHJvZ3JhbW1lXCIsXHJcbiAgICAgICAgXHJcbiAgICAgICAgXCJlbmVyZ3ktYmFsYW5jaW5nLXVwcGVyXCI6IFwiRU5FUkdJRUhBVVNIQUxUXCIsXHJcbiAgICAgICAgXCJlbmVyZ3ktYmFsYW5jaW5nLWRlc2NyaXB0aW9uXCI6IFwi4oCiIFTDpGdsaWNoIGbDvHIgZGFzIGFsbGdlbWVpbmUgV29obGJlZmluZGVuLiDigKIgTm9ybWFsaXNpZXJ0IG9yZ2FuaXNjaGUgVW50ZXItIG9kZXIgw5xiZXJmdW5rdGlvbi4g4oCiIFp1bSBBdXNnbGVpY2ggZGVyIEtvb3JkaW5hdGlvbnNmw6RoaWdrZWl0LiDigKIgVm9yYmV1Z2VuZCBiZWkgaMOkdWZpZ2VuIEtvcGZzY2htZXJ6ZW4uIOKAoiBCZWkga2FsdGVuIEdsaWVkZXJtYXNzZW4gKEV4dHJlbWl0w6R0ZW4pLiBadXNhdHpwcm9ncmFtbWU6IEUtc21vZywgRnJ1c3RyYXRpb24sIEZyZXVkZSwgTmllcmVuLU1lcmlkaWFuLCBXYXNzZXItIEVsZW1lbnQsIDEuIHVuZCA0LiBDaGFrcmFcIixcclxuICAgICAgICBcImVuZXJneS1ib29zdGVyLXVwcGVyXCI6IFwiRU5FUkdJRVNDSFVCXCIsXHJcbiAgICAgICAgXCJlbmVyZ3ktYm9vc3Rlci1kZXNjcmlwdGlvblwiOiBcIuKAoiBHZWlzdGlnZXIgQW50cmllYiBpbiBTdHJlc3MtU2l0dWF0aW9uZW4uIOKAoiBHZXN0ZWlnZXJ0ZSBMZWlzdHVuZ3Nmw6RoaWdrZWl0IGltIFNwb3J0IHVuZCBiZWkgZGVyIEFyYmVpdC4g4oCiIE1vYmlsaXNpZXJ0IGRpZSBFbmVyZ2llcmVzZXJ2ZW4gdW5kIHZlcmJlc3NlcnQgZGllIEtvb3JkaW5hdGlvbi4g4oCiIEFscyBWb3JiZXJlaXR1bmcgYXVmIGVpbmVuIFdldHRrYW1wZiwgZWluIEdlc2Now6RmdHMtTWVldGluZyB1bmQgYXVmIFByw7xmdW5nZW4uIEtsw6RydCBkZW4gR2Vpc3QuIFp1c2F0enByb2dyYW1tZTogRW5lcmdpZS1BdXNnbGVpY2gsIEFudGktQWdpbmcsIE5lYmVubmllcmVuLCBTY2hpbGRkcsO8c2VuLCBOaWVyZW4tTWVyaWRpYW4sIFdhc3Nlci1FbGVtZW50LCBMZWJlci1NZXJpZGlhbiwgS3JlaXNsYXVmLCBBdG11bmdzc3lzdGVtLCAxLiDigJMgMy4gdW5kIDYuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiZXhoYXVzdGlvbi11cHBlclwiOiBcIkVSU0NIw5ZQRlVOR1wiLFxyXG4gICAgICAgIFwiZXhoYXVzdGlvbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBHZW5lc3VuZyB2b24gZXh0cmVtZXIgTcO8ZGlna2VpdCB1bmQgRXJzY2jDtnBmdW5nLiDigKIgTMO2c3QgaW5uZXJlIEluZm9ybWF0aW9uc2Jsb2NrYWRlbi4g4oCiIE1pbmRlcnQgVW53b2hsc2VpbiBhdWZncnVuZCB2b24gbWFuZ2VsbmRlciBEdXJjaGJsdXR1bmcuIFp1c2F0enByb2dyYW1tZTogIE5lYmVubmllcmVuLCBTY2hpbGRkcsO8c2VuLCBFbmVyZ2llLVNwZW5kZXIsIEZydXN0cmF0aW9uLCBLcmVpc2xhdWYsIEZyZXVkZSwgTGViZXItTWVyaWRpYW4sIEhlcnotTWVyaWRpYW4sIFBlcmlrYXJkLU1lcmlkaWFuLCBGZXVlci1FbGVtZW50LCAxLiAsIDIuICB1bmQgMy4gIENoYWtyYVwiLFxyXG4gICAgICAgIFwiZXllc2lnaHQtdXBwZXJcIjogXCJTRUhWRVJNw5ZHRU5cIixcclxuICAgICAgICBcImV5ZXNpZ2h0LWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhpbGZyZWljaCBiZWkgbcO8ZGVuIEF1Z2VuLiDigKIgRXJsZWljaHRlcnQgZGllIEVudHNwYW5udW5nIGRlciBBdWdlbm11c2tlbG4uIOKAoiBWb3JiZXVnZW5kIGdlZ2VuIFByb2JsZW1lIHVuZCBLcmFua2hlaXRlbiBkZXIgQXVnZW4gdW5kIGRlcyBTZWh2ZXJtw7ZnZW5zLiBadXNhdHpwcm9ncmFtbWU6IEhvbHotRWxlbWVudCwgRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIE5pZXJlbi0gdW5kIExlYmVyLU1lcmlkaWFuLCA2LiBDaGFrcmFcIixcclxuICAgICAgICBcImZlbWFsZS11cHBlclwiOiBcIkZSQVVFTiBTUEVaSUZJU0NIXCIsXHJcbiAgICAgICAgXCJmZW1hbGUtZGVzY3JpcHRpb25cIjogXCLigKIgVW50ZXJzdMO8dHp0IGRhcyBGb3J0cGZsYW56dW5nc3N5c3RlbSBzb3dpZSBkaWUgR2VzY2hsZWNodHNvcmdhbmUuIOKAoiBSZWd1bGllcnQgZGVuIE1lbnN0cnVhdGlvbnN6eWtsdXMgIHVuZCBlcmjDtmh0IGRhcyBXb2hsYmVmaW5kZW4gdm9yIHVuZCB3w6RocmVuZCBkZXIgTWVuc3RydWF0aW9uLiDigKIgIEJlaSBow6R1ZmlnIHZvcmtvbW1lbmRlbiBaeXN0ZW4uIOKAoiBVbnRlcnN0w7x0enQgUE1TIFN5bXB0b21lIChQcsOkbWVuc3RydWVsbGVzIFN5bmRyb20pLiDigKIgWnVyIEVyZ8Okbnp1bmcgYmVpIElua29udGluZW56LUJlaGFuZGx1bmdlbi4g4oCiIEbDvHIgTcOkbm5lciBtaXQgc3RhcmtlciBZaW4tIEtvbnN0aXR1dGlvbi4gWnVzYXR6cHJvZ3JhbW1lOiBGcmV1ZGUsIEZydXN0cmF0aW9uLCBGcmllZGUsIEhhcm5zeXN0ZW0sIEtyZWlzbGF1ZnN5c3RlbSwgTWlsei9CYXVjaHNwZWljaGVsZHLDvHNlLU1lcmlkaWFuLCBIYXJuYmxhc2UtTWVyaWRpYW4sIExlYmVyLU1lcmlkaWFuLCAxLiB1bmQgMi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJmbHUtdXBwZXJcIjogXCJHUklQUEVcIixcclxuICAgICAgICBcImZsdS1kZXNjcmlwdGlvblwiOiBcIuKAoiBTdGltbXVsaWVydCBkYXMgSW1tdW5zeXN0ZW0uIOKAoiBTdGltbXVsaWVydCBkZW4gSGVpbHVuZ3Nwcm96ZXNzIGJlaSBHcmlwcGUsIEJyb25jaGl0aXMsIE1hbmRlbGVudHrDvG5kdW5nLCBMdW5nZW5lbnR6w7xuZHVuZyB1bmQgRGFybWdyaXBwZS4g4oCiIEJlZ2lubmUgbWl0IGRpZXNlbSBQcm9ncmFtbSBiZWkgZGVuIGVyc3RlbiBHcmlwcGVzeW1wdG9tZW4gdW5kIG1laHJlcmUgVGFnZSBuYWNoZGVtIGRpZSBTeXB0b21lIHZlcnNjaHd1bmRlbiBzaW5kLiBadXNhdHpwcm9ncmFtbWU6IEltbXVuc3lzdGVtLCBBdG11bmdzc3lzdGVtLCBOZWJlbmjDtmhsZW4sIFZlcmRhdXVuZ3NzeXN0ZW0sICBTbW9nLCBFbmVyZ2llLUF1c2dsZWljaCwgRnJ1c3RyYXRpb24sIEZyZXVkZSwgIEVyZGUtRWxlbWVudCwgRGlja2Rhcm0tTWVyaWRpYW4sIEx1bmdlbi1NZXJpZGlhbiwgMy4sIDQuICB1bmQgNS4gIENoYWtyYVwiLFxyXG4gICAgICAgIFwiZ2x1Y29zZS1tZXRhYm9saWMtZGlzb3JkZXJzLXVwcGVyXCI6IFwiWlVDS0VSLVNUT0ZGV0VDSFNFTFNUw5ZSVU5HXCIsXHJcbiAgICAgICAgXCJnbHVjb3NlLW1ldGFib2xpYy1kaXNvcmRlcnMtZGVzY3JpcHRpb25cIjogXCLigKIgS29tcGxlbWVudMOkci1CZWhhbmRsdW5nIGJlaSBadWNrZXItU3RvZmZ3ZWNoc2Vsc3TDtnJ1bmcg4oCTIChadWNrZXIsIEtvaGxlbmh5ZHJhdGUpLiDigKIgU3RpbW11bGllcnQgZGllIGJpb2luZm9ybWF0aXNjaGUgVmVyYmluZHVuZyB6dXIgQmF1Y2hzcGVpY2hlbGRyw7xzZS4g4oCiIFZvcnRlaWxoYWZ0IGJlaSBlaW5lciBiZXN0ZWhlbmRlbiBJbnN1bGlucmVzaXN0ZW56LiDigKIgS29tcGxlbWVudMOkcmJlaGFuZGx1bmcgYmVpIMOcYmVyZ2V3aWNodCwgRGVwcmVzc2lvbiwgVHlwZSAxIHVuZCAgMiBEaWFiZXRlcy4gWnVzYXR6cHJvZ3JhbW1lOiBFbmVyZ2llLUF1c2dsZWljaCwgRnJldWRlLCBGcnVzdHJhdGlvbiwgU2NoaWxkZHLDvHNlLCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgTWlsei9CYXVjaHNwZWljaGVsZHLDvHNlLU1lcmlkaWFuLCAxLiwgMi4sIDMuIHVuZCA0LlwiLFxyXG4gICAgICAgIFwiaGFpci1ncm93dGgtdXBwZXJcIjogXCJIQUFSV0FDSFNUVU1cIixcclxuICAgICAgICBcImhhaXItZ3Jvd3RoLWRlc2NyaXB0aW9uXCI6IFwi4oCiIFN0aW1tdWxpZXJ0IGRhcyBIYWFyd2FjaHN0dW0uIOKAoiBWZXJzdMOkcmt0IGRpZSBIYWFyd3VyemVsIGJlaSBIYWFyYXVzZmFsbC4g4oCiIFp1ciBSZXN0YXVyaWVydW5nIGJlaSBiZXNjaMOkZGlndGVtIEhhYXIgdW5kIEtvcGZoYXV0LiDigKIgQWxzIEVyZ8Okbnp1bmdzYmVoYW5kbHVuZyBiZWkgSGFhcmF1c2ZhbGwgbmFjaCBDaGVtb3RoZXJhcGllLiBadXNhdHpwcm9ncmFtbWU6IEVudGdpZnR1bmcsIFNjaGlsZGRyw7xzZSwgRGFybWZsb3JhLCBNZXRhbGwtRWxlbWVudCwgTWFnZW4tTWVyaWRpYW4sIE5pZXJlbi1NZXJpZGlhbiwgSGFybmJsYXNlLU1lcmlkaWFuLCAyLiB1bmQgNi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJoZWFkYWNoZS11cHBlclwiOiBcIktPUEZTQ0hNRVJaXCIsXHJcbiAgICAgICAgXCJoZWFkYWNoZS1kZXNjcmlwdGlvblwiOiBcIuKAoiBCZWkgS29wZnNjaG1lcnplbi4gWnVzYXR6cHJvZ3JhbW1lOiBGcnVzdHJhdGlvbiwgTmFja2VuLCBTZWh2ZXJtw7ZnZW4sIEVuZXJnaWUtQXVzZ2xlaWNoLCBOYXNlbi1OZWJlbmjDtmhsZW4sIEdlaMO2ciwgRGFybWZsb3JhLCBWZXJkYXV1bmcsIFZlcnN0b3BmdW5nIG9kZXIgQmx1dGhvY2hkcnVjayB3ZW5uIGFud2VuZGJhciwgRGlja2Rhcm0tTWVyaWRpYW4sIE1hZ2VuLSBNZXJpZGlhbiwgTGViZXItTWVyaWRpYW4sIEdhbGxlbmJsYXNlLU1lcmlkaWFuLCAzLiB1bmQgNi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJoZWFydC1mdW5jdGlvbi11cHBlclwiOiBcIkhFUlpUw4RUSUdLRUlUXCIsXHJcbiAgICAgICAgXCJoZWFydC1mdW5jdGlvbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBVbnRlcnN0w7x0emVuZCBiZWkgSGVyenJ5dGhtdXMtU3TDtnJ1bmdlbi4g4oCiIEJlZ8O8bnN0aWdlbmQgaW4gU3RyZXNzLVNpdHVhdGlvbmVuIHVuZCBFbmdlZ2Vmw7xobCBpbiBkZXIgQnJ1c3QuIFp1c2F0enByb2dyYW1tZTogS3JlaXNsYXVmLCBCaW5kZWdld2ViZSwgRW5lcmdpZS1BdXNnbGVpY2gsIEVudHNwYW5udW5nLCBGcmllZGUsIE5lcnZlbnN5c3RlbSwgRmV1ZXItRWxlbWVudCwgSGVyei1NZXJpZGlhbiwgMS4sIDMuIHVuZCA0LiBDaGFrcmFcIixcclxuICAgICAgICBcImhlbW9ycmhvaWRzLXVwcGVyXCI6IFwiSMOETU9SUkhPSURFTlwiLFxyXG4gICAgICAgIFwiaGVtb3JyaG9pZHMtZGVzY3JpcHRpb25cIjogXCLigKIgSGVtbXQgSMOkbW9ycmhvaWRlbi1TeXB0b21lLiDigKIgRXJnw6RuenQgQmVoYW5kbHVuZ2VuIGJlaSBNYXN0ZGFybS1Qcm9ibGVtZW4uIOKAoiBNaW5kZXJ0IFJla3R1bXNjaG1lcnplbiBiZWkgVmVyc3RvcGZ1bmcuIFp1c2F0enByb2dyYW1tZTogVmVyc3RvcGZ1bmcsIEtyZWlzbGF1ZnN5c3RlbSwgQmluZGVnZXdlYmUsIEVuZXJnaWUtQXVzZ2xlaWNoLCBFbnRzcGFubnVuZywgV2Fzc2VyLUVsZW1lbnQsIERyZWlmYWNoZXItRXJ3w6RybWVyLU1lcmlkaWFuLCBEaWNrZGFybS1NZXJpZGlhbiwgMS4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJoeXBlcnRlbnNpb24tdXBwZXJcIjogXCJCTFVUSE9DSERSVUNLXCIsXHJcbiAgICAgICAgXCJoeXBlcnRlbnNpb24tZGVzY3JpcHRpb25cIjpcIuKAoiBFcmfDpG56dCBkaWUgQmVoYW5kbHVuZyB2b24gQmx1dGhvY2hkcnVjay4gWnVzYXRzcHJvZ3JhbW1lOiAgTmViZW5uaWVyZSwgS3JlaXNsYXVmLCBGZXVlci1FbGVtZW50LCBOaWVyZW4tTWVyaWRpYW4sIEhhcm5ibGFzZS1NZXJpZGlhbiwgUGVyaWNhcmRpdW0tTWVyaWRpYW4sIEhlcnotTWVyaWRpYW4sIDEuLCAyLiwgNC4gdW5kIDcuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiaW1tdW5lLXN5c3RlbS11cHBlclwiOiBcIklNTVVOU1lTVEVNXCIsXHJcbiAgICAgICAgXCJpbW11bmUtc3lzdGVtLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEbDtnJkZXJ0IHVuZCBvcHRpbWllcnQgZGllIEZ1bmt0aW9uIGRlcyBJbW11bnN5c3RlbXMuIOKAoiBhbHMgWnVzYXR6dGhlcmFwaWUgd8OkaHJlbmQgZWluZXIgdmlyYWxlbiB1bmQvb2RlciBiYWt0ZXJpZWxsZW4gRXJrcmFua3VuZy4g4oCiIEbDtnJkZXJ0IGRpZSBBdWZuYWhtZSB2b24gQW50aW94aWRhbnRpZW4gdW5kIFZpdGFtaW5lbi4g4oCiIFN0aW11bGllcnQgZGVuIFZlcmRhdXVuZ3N0cmFrdC4gWnVzYXR6cHJvZ3JhbW1lOiAgTHltcGhzeXN0ZW0sIEVudGdpZnR1bmcsIERhcm1mbG9yYSwgRXJzY2jDtnBmdW5nLCBOZWJlbm5pZXJlLCBGcnVzdHJhdGlvbiwgRnJpZWRlLCBGcmV1ZGUsIDIuIHVuZCAzLiBDaGFrcmFcIixcclxuICAgICAgICBcImluanVyeS11cHBlclwiOiBcIlZFUkxFVFpVTkdcIixcclxuICAgICAgICBcImluanVyeS1kZXNjcmlwdGlvblwiOiBcIuKAoiBTdGltdWxpZXJ0IHVuZCBiZXNjaGxldW5ndCBIZWlsdW5nc3Byb3plc3NlIHZvbiBiZXNjaMOkZGlndGVtIEdld2ViZS4g4oCiIFJlZHV6aWVydCBkaWUgTmFyYmVuYmlsZHVuZy4g4oCiIEhvY2gtd2lya3NhbSBuYWNoIE9wZXJhdGlvbmVuLiBadXNhdHpwcm9ncmFtbWU6IEhhdXQsIEtub2NoZW4sIEJpbmRlZ2V3ZWJlLCBJbW11bnN5c3RlbSwgWnVja2VyLVN0b2Zmd2VjaHNlbC1TdMO2cnVuZywgS3JlaXNsYXVmLCBNaW5lcmFsLVN0b2Zmd2VjaHNlbCwgRXJkZS1FbGVtZW50LCBXYXNzZXItRWxlbWVudCwgSG9sei1FbGVtZW50LCAxLiDigJMgMi4gdW5kIDMuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiaW50ZXN0aW5hbC1mbG9yYS11cHBlclwiOiBcIkRBUk1GTE9SQVwiLFxyXG4gICAgICAgIFwiaW50ZXN0aW5hbC1mbG9yYS1kZXNjcmlwdGlvblwiOiBcIuKAoiBFcmfDpG56dCBkaWUgQW50aS1QaWx6YmVoYW5kbHVuZyBkZXMgVmVyZGF1dW5nc3N5c3RlbXMuIOKAoiBIYXJtb25pc2llcnQgZGllIERhcm1mbG9yYSwgaW5zYmVzb25kZXJlIGJlaSBBbGxlcmdpZW4uIOKAoiBGw7ZyZGVydCBkaWUgV2lya3NhbWtlaXQgdm9uIHNwZXppZWxsZW4gRXJuw6RocnVuZ3N3ZWlzZW4gdW5kIG9wdGltaWVydCBkaWUgTGViZW5za3JhZnQuIOKAoiBIaWxmcmVpY2ggZsO8ciBNZW5zY2hlbiBtaXQgY2hyb25pc2NoZXIgRHlzYmlvc2UgKFVuZ2xlaWNoZ2V3aWNodCB6d2lzY2hlbiBkZW4gZ3V0ZW4gdW5kIHNjaGxlY2h0ZW4gRGFybWJha3RlcmllbikuIOKAoiBBbnJlZ3VuZyBkZXMgSW1tdW5zeXN0ZW1zLiDigKIgQWxzIEVyZ8Okbnp1bmdzdGhlcmFwaWUgYmVpIEJsdXRhcm11dCwgRWt6ZW1lbiwgUGFyYXNpdGVuIHVuZCBQaWx6ZW4uIFp1c2F0enByb2dyYW1tZTogVmVyZGF1dW5nc3N5c3RlbSwgRW50Z2lmdHVuZywgTWluZXJhbC1TdG9mZndlY2hzZWwsIEltbXVuc3lzdGVtLCBXYXNzZXItRWxlbWVudCwgRXJkZS1FbGVtZW50LCBEaWNrLSB1bmQgRMO8bm5kYXJtLU1lcmlkaWFuLCBNYWdlbi1NZXJpZGlhbiwgMi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJqZXQtbGFnLXVwcGVyXCI6IFwiSkVULUxBR1wiLFxyXG4gICAgICAgIFwiamV0LWxhZy1kZXNjcmlwdGlvblwiOiBcIuKAoiBGw7xyIFdldHRlcmVtcGZpbmRsaWNoZSBNZW5zY2hlbi4g4oCiIFJlZHV6aWVydCBKZXQtTGVnIEVmZmVrdCB1bmQgU2Nod2luZGVsLiDigKIgU2NobmVsbGVyZSBBbmtsaW1hdGlzaWVydW5nIGF1ZiBhbmRlcmVzIFdldHRlci9LbGltYSB1bmQgSMO2aGVubWV0ZXIuIOKAoiAgTWluZGVydCBLb3Bmc2NobWVyemVuIGF1c2dlbMO2c3QgZHVyY2ggaG9oZSBIw7ZoZW5sYWdlbiB1bmQgV2V0dGVyZnJvbnRlbi4g4oCiIEF1c2dsZWljaCB2b24gQmVzY2h3ZXJkZW4gZGllIGR1cmNoIFdldHRlcmZyb250ZW4gYmVnw7xuc3RpZ3Qgd2VyZGVuICh6LkIuIEFuc3Bhbm51bmcsIGVyaMO2aHRlciBCbHV0ZHJ1Y2ssIHJoZXVtYXRpc2NoZSBCZXNjaHdlcmRlbiwgZXRjLikuIFp1c2F0enByb2dyYW1tZTogVmVyZGF1dW5nc3N5c3RlbSwgS3JlaXNsYXVmc3lzdGVtLCBFLXNtb2csIEVuZXJnaWUtQXVzZ2xlaWNoLCAgRmV1ZXItRWxlbWVudCwgRXJkZS1FbGVtZW50LCAxLiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJqb2ludHMtdXBwZXJcIjogXCJHRUxFTktFXCIsXHJcbiAgICAgICAgXCJqb2ludHMtZGVzY3JpcHRpb25cIjogXCLigKIgQmVnw7xuc3RpZ3QgZGVuIEhlaWx1bmdzcHJvemVzcyBiZWkgZ2VzY2jDpGRpZ3RlbiBHZWxlbmtmdW5rdGlvbmVuLiDigKIgTGluZGVydCBCZXNjaHdlcmRlbiBhdWZncnVuZCB2b24gR2VsZW5rZW50esO8bmR1bmdlbi4gWnVzYXR6cHJvZ3JhbW1lOiBWZXJkYXV1bmdzc3lzdGVtLCBNdXNrZWxnZXdlYmUsIEJpbmRlZ2V3ZWJlLCBJbW11bnN5c3RlbSwgIE5pZXJlbi1NZXJpZGlhbiwgTWFnZW4tTWVyaWRpYW4sIEdhbGxlbmJsYXNlLU1lcmlkaWFuLCBXYXNzZXItRWxlbWVudCwgMS4gLCAyLiAgdW5kIDUuICBDaGFrcmFcIixcclxuICAgICAgICBcImpveS11cHBlclwiOiBcIkZSRVVERVwiLFxyXG4gICAgICAgIFwiam95LWRlc2NyaXB0aW9uXCI6IFwi4oCiIFRyw6RndCBkYXp1IGJlaSwgZGllIEF1c2dlZ2xpY2hlbmhlaXQgdW5kIGd1dGUgTGF1bmUgaW4gc2Nod2llcmlnZW4gWmVpdGVuIHp1IGJld2FocmVuLiDigKIgVmVyaGlsZnQgenUgZW1vdGlvbmFsZXIvbWVudGFsZXIgQXVzZ2VnbGljaGVuaGVpdC4g4oCiIEVyZ8Okbnp0IEJlaGFuZGx1bmdlbiBnZWdlbiBEZXByZXNzaW9uLiBadXNhdHpwcm9ncmFtbWU6IE5lYmVubmllcmUsIEVuZXJneSBCb29zdGVyLCBGcnVzdHJhdGlvbiwgRGFybWZsb3JhLCBNZXRhbGwtRWxlbWVudCwgMS4g4oCTIDIuIOKAkyA0LiB1bmQgNS4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJsb3ctbWVudGFsLWRyaXZlLXVwcGVyXCI6IFwiU1RSRVNTQkVESU5HVFwiLFxyXG4gICAgICAgIFwibG93LW1lbnRhbC1kcml2ZS1kZXNjcmlwdGlvblwiOiBcIuKAoiBCZWkgc3RyZXNzYmVkaW5ndGVyIG5lcnZsaWNoZXIgU3TDtnJ1bmdlbiBkZXIgc2V4dWVsbGVuIExlYmVuc2tyYWZ0LiDigKIgQmVpIHNjaHdhY2hlbSBMaWJpZG8gYXVmZ3J1bmQgdm9uIGFsbHTDpGdsaWNoZW4gUHJvYmxlbWVuIChiZWkgbmV1cm9lbmRva3JpbmVuIFByb2JsZW1lbiwgQWxsZXJnaWVuIHVuZCBhbmRlcmUgRXJrcmFua3VuZ2VuIHp1c8OkdHpsaWNoIGRhcyBQcm9ncmFtbSBMSUJJRE8gSSBhbndlbmRlbikgQXVjaCBQYXJhc2l0ZW4ga8O2bm5lbiBkaWUgVXJzYWNoZSBlaW5lciBzdMOkbmRpZ2VuIMOcYmVyc3RpbW11bGllcnVuZyBkZXMgTmVydmVuc3lzdGVtcyBzZWluLiDigKIgRGllc2VzIFByb2dyYW1tIGVpZ25ldCBzaWNoIGJlaSBGdW5rdGlvbnNzdMO2cnVuZ2VuIGF1ZmdydW5kIHZvbiBFbmVyZ2llLU1hbmdlbC4gWnVzYXR6cHJvZ3JhbW1lOiBFcnNjaMO2cGZ1bmcsIEVudHNwYW5udW5nLCBFLVNtb2csIEVuZXJnaWUtQXVzZ2xlaWNoLCBGcmllZGUsIEZyZXVkZSwgRW5lcmdpZS1TcGVuZGVyLCBGcnVzdHJhdGlvbiwgRXJkZS1FbGVtZW50LCBNZXRhbGwtRWxlbWVudCwgV2Fzc2VyLUVsZW1lbnQsIEhlcnotTWVyaWRpYW4sIFBlcmljYXJkaXVtLU1lcmlkaWFuLCAxLiwgMiB1bmQgNC4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJsb3ctcGh5c2ljYWwtZHJpdmUtdXBwZXJcIjogXCJLT1JQRVJMSUNIIEJFRElOR1RcIixcclxuICAgICAgICBcImxvdy1waHlzaWNhbC1kcml2ZS1kZXNjcmlwdGlvblwiOiBcIuKAoiBTdGltbXVsaWVydCBkYXMgc2V4dWVsbGUgTHVzdGdlZsO8aGwgYmVpIG9yZ2FuaXNjaGVuIFByb2JsZW1lbiBvZGVyIGZlaGxlbmRlciBFbmVyZ2lldmVyc29yZ3VuZy4g4oCiIEbDtnJkZXJ0IGRpZSBzZXh1ZWxsZSBLYXBheml0w6R0LiDigKIgRXJnw6RuemVuZGUgQmVoYW5kbHVuZyBpbiBkZXIgR2VyZW50b2xvZ2llIChiZWltIMOkbHRlciB3ZXJkZW4pLiDigKIgRGllc2VzIFByb2dyYW1tIGVpZ25ldCBzaWNoIGJlaSBGdW5rdGlvbnNzdMO2cnVuZ2VuLCBkaWUgZGllIEZvbGdlIGRlcyBBbHRlcm4gb2RlciBrw7ZycGVybGljaGVyIFByb2JsZW1lIHNpbmQuIFp1c2F0enByb2dyYW1tZTogQW50aSBBZ2luZywgRW50Z2lmdHVuZywgTmViZW5uaWVyZSwgQmluZGVnZXdlYmUsIEtyZWlzbGF1ZnN5c3RlbSwgRXJzY2jDtnBmdW5nLCBFcmRlLUVsZW1lbnQsIEhhcm5ibGFzZS1NZXJpZGlhbiwgUGVyaWNhcmRpdW0tTWVyaWRpYW4sIEhlcnotTWVyaWRpYW4sIDEuICB1bmQgMi4gIENoYWtyYVwiLFxyXG4gICAgICAgIFwibHltcGhhdGljLXN5c3RlbS11cHBlclwiOiBcIkxZTVBIQVRJU0NIRVIgQVBQQVJBVFwiLFxyXG4gICAgICAgIFwibHltcGhhdGljLXN5c3RlbS1kZXNjcmlwdGlvblwiOiBcIuKAoiBPcHRpbWllcnQgZGVuIEx5bXBoLUtyZWlzbGF1ZiB1bmQgdmVybWluZGVydCBMeW1waHN0YXV1bmcuIOKAoiBFcmxlaWNodGVydCBkaWUgR2VuZXN1bmcgbmFjaCBpbmZla3Rpw7ZzZW4gRXJrcmFua3VuZ2VuLiDigKIgSGVtbXQgYWxsZXJnaXNjaGUgUmVha3Rpb25lbi4gWnVzYXR6cHJvZ3JhbW1lOiBLcmVpc2xhdWYtU3lzdGVtLCBFbnRnaWZ0dW5nLCBJbW11bi1TeXN0ZW0sIEJpbmRlZ2V3ZWJlLCBGZXVlci1FbGVtZW50LCBXYXNzZXItRWxlbWVudCwgMi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJtYWxlLXVwcGVyXCI6IFwiTcOETk5FUiBTUEVaSUZJU0NIXCIsXHJcbiAgICAgICAgXCJtYWxlLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEbDvHIgQmVoYW5kbHVuZ2VuIGRlciBtw6RubmxpY2hlbiBIb3Jtb25lLCBiZWkgc2V4dWVsbGVuIFN0w7ZydW5nZW4gdW5kIGRlcyBIYXJuc3lzdGVtcyBiZXRyZWZmZW5kIHp1ciBVbnRlcnN0w7x0enVuZyBkZXIgR2V3ZWJlLVN0b2Zmd2VjaHNlbHZvcmfDpG5nZS4g4oCiIEVyZ8Okbnp0IEJlaGFuZGx1bmdlbiBiZWkgSW5rb250aW5lbnogdW5kIFByb3N0YXRhLVByb2JsZW1lbi4g4oCiIFN0ZWlnZXJ0IGRpZSBMaWJpZG8gdW5kIGRhcyBHZWbDvGhsIHZvbiBHZWJvcmdlbmhlaXQuIOKAoiBCZWkgRXJyZWt0aW9uc3N0w7ZydW5nZW4uIOKAoiBGw7xyIEZyYXVlbiBtaXQgZWluZXIgc3RhcmtlbiB5YW5nLUtvbnN0aXR1dGlvbjsgYmVpIHNjaG1lcnpoYWZ0ZW4sIHNjaHdlcmVuIG9kZXIgw5xiZXIgNyBUYWdlIGFuZGF1ZXJuZGUgTWVuc3RydWF0aW9uc2JsdXR1bmdlbiBvZGVyIHdlbm4gZWluIFRlc3Rvc3Rlcm9uIEF1c2dsZWljaCBuw7Z0aWcgaXN0LiBadXNhdHpwcm9ncmFtbWU6IEVudHNwYW5udW5nLCBLcmVpc2xhdWZzeXN0ZW0sIEZydXN0cmF0aW9uLCBGcmV1ZGUsIEZyaWVkZSwgRmV1ZXItRWxlbWVudCwgSGFybmJsYXNlLU1lcmlkaWFuLCBMZWJlci1NZXJpZGlhbiwgMS4gdW5kIDIuIENoYWtyYVwiLFxyXG4gICAgICAgIFwibWVkaXRhdGlvbi0xLXVwcGVyXCI6IFwiTUVESVRBVElPTiAxXCIsXHJcbiAgICAgICAgXCJtZWRpdGF0aW9uLTEtZGVzY3JpcHRpb25cIjogXCLigKIgRsO8ciBNZWRpdGF0aW9ucy1BbmbDpG5nZXIg4oCTIGbDvHIgZGFzIEZyaWVkZW5zZ2Vmw7xobFwiLFxyXG4gICAgICAgIFwibWVkaXRhdGlvbi0yLXVwcGVyXCI6IFwiTUVESVRBVElPTiAyXCIsXHJcbiAgICAgICAgXCJtZWRpdGF0aW9uLTItZGVzY3JpcHRpb25cIjogXCLigKIgRsO8ciB0aWVmZXJlIGlubmVyZSBSZWlzZW4gd8OkaHJlbmQgZGVyIE1lZGl0YXRpb25cIixcclxuICAgICAgICBcIm1lZGl0YXRpb24tMy11cHBlclwiOiBcIk1FRElUQVRJT04gM1wiLFxyXG4gICAgICAgIFwibWVkaXRhdGlvbi0zLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEbDvHIgZGllIGZvcnRnZXNjaHJpdHRlbmUgTWVkaXRhdGlvbnNwcmF4aXNcIixcclxuICAgICAgICBcclxuICAgICAgICBcImdhbGxibGFkZGVyLW1lcmlkaWFuLXVwcGVyXCI6IFwiR0FMTEVOQkxBU0UtTUVSSURJQU5cIixcclxuICAgICAgICBcImdhbGxibGFkZGVyLW1lcmlkaWFuLXNob3J0XCI6IFwiR0FMTEVOQkxBU0VOXCIsXHJcbiAgICAgICAgXCJnYWxsYmxhZGRlci1tZXJpZGlhbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGVuIEdhbGxlbmJsYXNlLU1lcmlkaWFuIOKAoiBFcmfDpG56ZW5kZSBCZWhhbmRsdW5nIGJlaSBLaWVmZXJnZWxlbmtzZXJrcmFua3VuZywgWmFobmtyYW5raGVpdGVuIHVuZCBNYW5kZWxuIOKAoiBIaWxmdCBFbnRzY2hlaWR1bmdlbiB6dSB0cmVmZmVuIGluIHNjaHdpZXJpZ2VuIFNpdHVhdGlvbmVuIOKAoiAgVW50ZXJzdMO8dHplbmQgYmVpIMOcYmVyYWt0aXZpdMOkdCBvZGVyIFp3YW5nc3N0w7ZydW5nZW4g4oCiICBHZWdlbiDDvGJlcm3DpHNzaWcgbmVnYXRpdmUgRWluc3RlbGx1bmcg4oCiICBiZWkgVGVuZGV6IERpbmdlIGF1Znp1c2NoaWViZW4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGRlciBHYWxsZW5ibGFzZSBpc3QgMjM6MDAg4oCTIDAxOjAwIFVoci4g4oCiIERpZSBHYWxsZW5ibGFzZSBpc3QgWWFuZyDigJMgU2llIGlzdCBtaXQgZGVtIFlpbi1PcmdhbiBkZXIgTGViZXIgdmVyYnVuZGVuIOKAkyBlbnRzcHJpY2h0IGRlbSBIb2x6LUVsZW1lbnQgdW5kIFVuc2NobMO8c3NpZ2tlaXQgb2RlciBFbnRzY2hsdXNza3JhZi4gWnVzYXR6cHJvZ3JhbW1lOiBIb2x6LUVsZW1lbnQsIEZydXN0cmF0aW9uLCBGcmV1ZGUsIExlYmVyLU1lcmlkaWFuLCAzLiBDaGFrcmEsIERpY2tkYXJtIE1lcmlkaWFuXCIsXHJcbiAgICAgICAgXCJraWRuZXktbWVyaWRpYW4tdXBwZXJcIjogXCJOSUVSRU4tTUVSSURJQU5cIixcclxuICAgICAgICBcImtpZG5leS1tZXJpZGlhbi1zaG9ydFwiOiBcIk5JRVJFTlwiLFxyXG4gICAgICAgIFwia2lkbmV5LW1lcmlkaWFuLWRlc2NyaXB0aW9uXCI6IFwi4oCiIFN0ZWlnZXJ0IGRpZSBBa3Rpdml0w6R0IGRlcyBOaWVyZW4tTWVyaWRpYW5zLiDigKIgQmVzw6RuZnRpZ3QgQmx1dGhvY2hkcnVjayB1bmQgw5ZkZW1lLiDigKIgYmVnw7xuc3RpZ3QgZGllIEJlemllaHVuZyB2b24gS25vY2hlbiB1bmQgS25vY2hlbm1hcmsuIOKAoiB2ZXJtaW5kZXJ0IE9ocmVuc2F1c2VuIHVuZCDDpGhubGljaGUgU3ltcHRvbWUuIOKAoiBCZWkgUmFzdGxvc2lna2VpdCwgw5xiZXJha3Rpdml0w6R0IHVuZCBhbGxnZW1laW5lciBTY2h3w6RjaGUuIOKAoiBTdGVpZ2VydCBkaWUgc2V4dWVsbGUgRW5lcmdpZS4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGRlciBOaWVyZSBpc3Qgdm9uIDE3OjAwIOKAkyAxOTowMCBVaHIuIOKAoiBEaWUgTmllcmUgaXN0IFlpbiDigJMgdmVyYnVuZGVuIG1pdCBkZW0gWWFuZy1PcmdhbiBkZXIgQmxhc2Ug4oCTIGVudHNwcmljaHQgZGVtIFdhc3Nlci1FbGVtZW50IHVuZCBkZXIgQW5nc3RnZWbDvGhsZS4gWnVzYXR6cHJvZ3JhbW1lOiBXYXNzZXItRWxlbWVudCwgSGFybmJsYXNlLU1lcmlkaWFuLCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgQmx1dGhvY2hkcnVjaywgSMO2clN5c3RlbSwgS25vY2hlbiwgMi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJoZWFydC1tZXJpZGlhbi11cHBlclwiOiBcIkhFUlogTUVSSURJQU5cIixcclxuICAgICAgICBcImhlYXJ0LW1lcmlkaWFuLXNob3J0XCI6IFwiSEVSWlwiLFxyXG4gICAgICAgIFwiaGVhcnQtbWVyaWRpYW4tZGVzY3JpcHRpb25cIjogXCLigKIgSGFybW9uaXNpZXJ0IGRlbiBIZXJ6LU1lcmlkaWFuLiDigKIgVmVyaGlsZnQgenVyIGVtb3Rpb25hbGVuIFN0YWJpbGl0w6R0IGJlaSBUZW5kZW56IHp1IG1hbmlzY2gtZGVwcmVzc2l2LiDigKIgVmVyYmVzc2VydCBkYXMgR2Vkw6RjaHRuaXMgdW5kIHN0ZWlnZXJ0IGRpZSBLb256ZW50cmF0aW9uLiDigKIgVmVyYmVzc2VydCBkYXMgU2NobGFmbXVzdGVyIHVuZCBlcmxlaWNodGVydCBkYXMgRWluc2NobGFmZW4uIOKAoiBTcGl0emVuYWt0aXZpdMOkdCBkZXMgSGVyeiBpcyAxMTowMCDigJMgMTM6MDAgVWhyLiDigKIgRGFzIEhlcnogaXN0IFlpbiDigJMgaXN0IG1pdCBkZW0gWWFuZyBPcmdhbiBkZXMgRMO8bm5kYXJtcyB2ZXJidW5kZW4g4oCTIGVudHNwcmljaHQgZGVtIEZldWVyLUVsZW1lbnQsIGRlbSBGcmV1ZGVnZWbDvGhsIHVuZCBkZXIgQXVmcmVndW5nLiBadXNhdHpwcm9ncmFtbWU6IEZldWVyLUVsZW1lbnQsIFBlcmlrYXJkaXVtLU1lcmlkaWFuLCBEw7xubmRhcm0tTWVyaWRpYW4gdW5kIERlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIFNjaGxhZiwgRW50c3Bhbm51bmcsIEZyZXVkZSwgRnJ1c3RyYXRpb24sIDQuIENoYWtyYVwiLFxyXG4gICAgICAgIFwibGFyZ2UtaW50ZXN0aW5lLW1lcmlkaWFuLXVwcGVyXCI6IFwiRElDS0RBUk0tTUVSSURJQU5cIixcclxuICAgICAgICBcImxhcmdlLWludGVzdGluZS1tZXJpZGlhbi1zaG9ydFwiOiBcIkRJQ0tEQVJNXCIsXHJcbiAgICAgICAgXCJsYXJnZS1pbnRlc3RpbmUtbWVyaWRpYW4tZGVzY3JpcHRpb25cIjogXCLigKIgSGFybW9uaXNpZXJ0IGRlbiBEaWNrZGFybS1NZXJpZGlhbiDigKIgQmVpIGNocm9uaXNjaGVyIERpc2Jpb3NlIChnZXN0w7ZydGVzIEJha3RlcmllbnZlcmjDpGx0bmlzIGRlciBEYXJtZmxvcmEuIE1laHIgcGF0b2xvZ2lzY2hlIEJha3RlcmllbiBhbHMgZ2VzdW5kaGVpdHNmw7ZyZGVybmUpIOKAoiBWZXJiZXNzZXJ0IGRhcyBJbW11bnN5c3RlbSDigKIgQWxzIEtvbXBsZW1lbnTDpHItVGhlcmFwaWUgYmVpIEJsdXRhcm11dCwgRWt6ZW1lbiwgUGFyYXNpdGVuIHVuZCBQaWx6ZSDigKIgQmVpIE5laWd1bmcgenUgbmVnYXRpdmVuIEdlZGFua2VuIHVuZCBHZWbDvGhsZW4gdW5kIGbDvHIgTWVuc2NoZW4sIGRlbmVuIGVzIGvDtnJwZXJsaWNoIHVuZCBnZWlzdGlnIHNjaHdlciBmw6RsbHQsIGxvc3p1bGFzc2VuIHVuZCBkYXMgVmVyZ2FuZ2VuZSBoaW50ZXIgc2ljaCB6dSBsYXNzZW4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGRlcyBEaWNrZGFybXMgaXN0IHZvbiAwNTowMCDigJMgMDc6MDAgVWhyIOKAoiBEZXIgRGlja2Rhcm0gaXN0IFlhbmcg4oCTIHZlcmJ1bmRlbiBtaXQgZGVybSBZaW4tT3JnYW4gZGVyIEx1bmdlIOKAkyBlbnRzcHJpY2h0IGRlbSBNZXRhbGwtRWxlbWVudCB1bmQgZGVtIEdlZsO8aGwgZGVyIFRyYXVlci9LdW1tZXIuIFp1c2F0enByb2dyYW1tZTogTWV0YWxsLUVsZW1lbnQsIEx1bmdlbi1NZXJpZGlhbiwgRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIFZlcnN0b3BmdW5nLCBEdXJjaGZhbGwsIDEuIENoYWtyYSwgdW5kIDMuIENoYWthXCIsXHJcbiAgICAgICAgXCJsaXZlci1tZXJpZGlhbi11cHBlclwiOiBcIkxFQkVSLU1FUklESUFOXCIsXHJcbiAgICAgICAgXCJsaXZlci1tZXJpZGlhbi1zaG9ydFwiOiBcIkxFQkVSXCIsXHJcbiAgICAgICAgXCJsaXZlci1tZXJpZGlhbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGVuIExlYmVyLU1lcmlkaWFuLiDigKIgVmVyYmVzc2VydCBBdWdlbi11bmQgTmViZW5ow7ZobGVuLUVya3Jhbmt1bmdlbi4g4oCiIEJlaSBaYWhucHJvYmxlbWVuLiDigKIgTGluZGVydCBNaWdyw6RuZSB1bmQgS29wZnNjaG1lcnplbi4g4oCiIFJlZHV6aWVydCBnZW5lcmVsbGUgS29vcmRpbmF0aW9uc3NjaHdpZXJpZ2tlaXRlbi4g4oCiIEbDvHIgdm9yZWluZ2Vub21tZW5lLCB1bmdlZHVsZGlnZSB1bmQgZnJ1c3RyaWVydGUgTWVuc2NoZW4uIOKAoiBGw7xyIGZlc3RnZWZhaHJlbmUgTWVuc2NoZW4gbWl0IFpvcm4vV3V0L8OEcmdlciB1bmQgc3RhcmtlciBQZXJzw7ZubGljaGtlaXQuIOKAoiBGw7xyIE1lbnNjaGVuLCBkaWUgaW0gTGViZW4gbmljaHQgd2VpdGVya29tbWVuIGF1ZmdydW5kIGZlaGxlbmRlciBaaWVsc2V0enVuZy4g4oCiIEbDvHIgTWVuc2NoZW4sIGRpZSBow6R1ZmlnIHp3aXNjaGVuIDEgdW5kIDMgVWhyIG1vcmdlbnMgYXVmd2FjaGVuIHVuZCBkYW5uIHdpZWRlciBlaW5zY2hsYWZlbi4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGRlciBMZWJlciBpc3Qgdm9uIDAxOjAwIOKAkyAwMzowMCBVaHIuIOKAoiBEaWUgTGViZXIgaXN0IFlpbiDigJMgdmVyYnVuZGVuIG1pdCBkZW0gWWFuZy1PcmdhbiBkZXIgR2FsbGVuYmxhc2Ug4oCTIGVudHNwcmljaHQgZGVtIEhvbHotRWxlbWVudCB1bmQgZGVuIEdlZsO8aGxlbiB2b24gWm9ybi9XdXQgdW5kIFJlaXpiYXJrZWl0LiBadXNhdHpwcm9ncmFtbWU6IEhvbHotRWxlbWVudCwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIE9wdGltaXNtdXMsIEZyZXVkZSwgU2Voa3JhZnQsIE5lYmVuaMO2aGxlbiwgRW50c3Bhbm51bmcsIEtvcGZzY2htZXJ6ZW4sIEVuZXJneS1BdXNnbGVpY2gsIEVudGdpZnR1bmcsIDMuIENoYWtyYVwiLFxyXG4gICAgICAgIFwibHVuZy1tZXJpZGlhbi11cHBlclwiOiBcIkxVTkdFTi1NRVJJRElBTlwiLFxyXG4gICAgICAgIFwibHVuZy1tZXJpZGlhbi1zaG9ydFwiOiBcIkxVTkdFTlwiLFxyXG4gICAgICAgIFwibHVuZy1tZXJpZGlhbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBTeW5jaHJvbmlzaWVydCBkaWUgTHVuZ2VuLU1lcmlkaWFuLUFrdGl2aXTDpHQuIEbDvHIgTWVuc2NoZW4gZGllIHp1IEJlc29yZ25pcyB1bmQgS3VtbWVyIG5laWdlbiB1bmQgZGFzIEdlZsO8aGwgZGVyIFVudGVyZHLDvGNrdW5nIGhhYmVuIG9kZXIgbmljaHQgZ2VudWcgZWluYXRtZW4uIOKAoiBCZXVndCBow6R1ZmlnZW4gRXJrw6RsdHVuZ2VuLCBHcmlwcGUsIE1hbmRlbGVudHrDvG5kdW5nIHVuZCBIYWxzc2NobWVyemVuIHZvci4g4oCiIE1pbmRlcnQgQWxsZXJnaWUtU3ltcHRvbWUuIOKAoiBTcGl0emVuYWt0aXZpdMOkdCBkZXIgTHVuZ2UgaXN0IHZvbiAwMzowMCDigJMgMDU6MDAgVWhy4oCiIOKAoiBEaWUgTHVuZ2UgaXN0IFlpbiDigJMgdmVyYnVuZGVuIG1pdCBkZW0gWWFuLU9yZ2FuIGRlcyBEaWNrZGFybXMg4oCTIGVudHNwcmljaHQgZGVtIE1ldGFsbC1FbGVtZW50IHVuZCBkZW0gR2Vmw7xobCB2b24gS3VtbWVyL0FuZ3N0LiBadXNhdHpwcm9ncmFtbWU6IE1ldGFsbC1FbGVtZW50LCBEaWNrZGFybS1NZXJpZGlhbiwgQXRtdW5nc3N5c3RlbSwgSW1tdW5zeXN0ZW0sIDQuIENoYWtyYVwiLFxyXG4gICAgICAgIFwicGVyaWNhcmRpdW0tbWVyaWRpYW4tdXBwZXJcIjogXCJLUkVJU0xBVUYvUEVSSUtBUkRJVU0gTUVSSURJQU5cIixcclxuICAgICAgICBcInBlcmljYXJkaXVtLW1lcmlkaWFuLXNob3J0XCI6IFwiUEVSSUtBUkRJVU1cIixcclxuICAgICAgICBcInBlcmljYXJkaXVtLW1lcmlkaWFuLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhhcm1vbmlzaWVydCBkZW4gUGVyaWthcmRpdW0tTWVyaWRpYW4gdm9uIMO8YmVyc2Vuc2libGVuIE1lbnNjaGVuLiDigKIgRsO8ciBNZW5zY2hlbiBkaWUgU2Nod2llcmlna2VpdGVuIGhhYmVuIHNpY2ggYW56dWZyZXVuZGVuIChBbnNjaGx1c3MgZmluZGVuKS4g4oCiIEhpbGZ0IHNlZWxsaXNjaGUgRXJzY2jDvHR0ZXJ1bmdlbi9UcmF1bWFzIHp1IGJld8OkbHRpZ2VuLCBkaWUgdmVyaGluZGVybiBndXRlIEJlemllaHVuZ2VuIGF1ZnJlY2h0IHp1IGVyaGFsdGVuLiDigKIgTGluZGVydCBLcmVpc2xhdWYtIHVuZCBTZXh1YWxzdMO2cnVuZ2VuLiDigKIgU3BpdHplbmFrdGl2aXTDpHQgaXN0IHZvbiAxOTowMCDigJMgMjE6MDAgVWhyLiDigKIgRGVyIFBlcmlrYXJkaXVtIGlzdCBZaW4g4oCTIHZlcmJ1bmRlbiBtaXQgZGVtIFlhbmctT3JnYW4gZGVzIERyZWlmYWNoZW4tRXJ3w6RybWVycyDigJMgZW50c3ByaWNodCBkZW0gRmV1ZXItRWxlbWVudC4gWnVzYXR6cHJvZ3JhbW1lOiBEw7xubmRhcm0tTWVyaWRpYW4sIEZldWVyLUVsZW1lbnQsIERyZWlmYWNoZXItRXJ3w6RybWVyLU1lcmlkaWFuLCBIZXJ6LU1lcmlkaWFuLCAzLiB1bmQgNC4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJzbWFsbC1pbnRlc3RpbmUtbWVyaWRpYW4tdXBwZXJcIjogXCJEw5xOTkRBUk0gTUVSSURJQU5cIixcclxuICAgICAgICBcInNtYWxsLWludGVzdGluZS1tZXJpZGlhbi1zaG9ydFwiOiBcIkTDnE5OREFSTVwiLFxyXG4gICAgICAgIFwic21hbGwtaW50ZXN0aW5lLW1lcmlkaWFuLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhhcm1vbmlzaWVydCBkaWUgRMO8bm5kYXJtLUZ1bmt0aW9uLiDigKIgdW50ZXJzdMO8dHp0IGRpZSBWZXJkYXV1bmcuIOKAoiB2ZXJiZXNzZXJ0IGRpZSBOw6RocnN0b2ZmYXVmbmFobWUuIOKAoiBMaW5kZXJ0IGRhcyBHZWbDvGhsIHZvbiBVbnNpY2hlcmhlaXQgdW5kICBWZXJ3aXJydW5nLiDigKIgU3BpdHplbmFrdGl2aXTDpHQgaXN0IHZvbiAxMzowMCDigJMgMTU6MDAgVWhyLiDigKIgRGVyIETDvG5uZGFybSBpc3QgWWFuZyDigJMgdmVyYnVuZGVuIG1pdCBkZW0gWWluIE9yZ2FuIGRlbSBIZXJ6dCDigJMgZW50c3ByaWNodCBkZW0gRmV1ZXItRWxlbWVudCB1bmQgZGVtIEdlZsO8aGwgZGVyIEZyZXVkZSB1bmQgZGVyIEVycmVndW5nLiBadXNhdHpwcm9ncmFtbWU6IEVudGdpZnR1bmcsIER1cmNoZmFsbCwgSGFybnN5c3RlbSwgRmV1ZXItRWxlbWVudCwgSGVyei1NZXJpZGlhbiB1bmQgRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIDMuIHVuZCA0LiBDaGFrcmFcIixcclxuICAgICAgICBcInNwbGVlbi1wYW5jcmVhcy1tZXJpZGlhbi11cHBlclwiOiBcIk1JTFogTUVSSURJQU5cIixcclxuICAgICAgICBcInNwbGVlbi1wYW5jcmVhcy1tZXJpZGlhbi1zaG9ydFwiOiBcIk1JTFpcIixcclxuICAgICAgICBcInNwbGVlbi1wYW5jcmVhcy1tZXJpZGlhbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgTWlsei0vQmF1Y2hzcGVpY2hlbGRyw7xzZS1Ba3Rpdml0w6R0LiDigKIgVW50ZXJzdMO8dHp0IGRpZSBBdWZzcGFsdHVuZyB2b24gZmVzdGVuIHVuZCBmbMO8c3NpZ2VuIE5haHJ1bmdzYmVzdGFuZHRlaWxlbi4g4oCiIFJlZHV6aWVydCB6d2FuZ2hhZnRlIEVpbnN0ZWxsdW5nLiDigKIgVW50ZXJzdMO8dHplbmQgYmVpIEVudHNjaGVpZHVuZ3Nmw6RsbHVuZ2VuIHVuZCBEdXJjaHNldHp1bmdzdmVybcO2Z2VuLiDigKIgRsO2cmRlcnQgZGllIEtvbnplbnRyYXRpb24gdW5kIGRhcyBHZWTDpGNodG5pcy4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGRlciBNaWx6L0JhdWNoc3BlaWNoZWxkcsO8c2UgaXN0IHZvbiAgOTowMCBiaXMgMTE6MDAgVWhyLiDigKIgRGllIE1pbHovQmF1Y2hzcGVpY2hlbGRyw7xzZSBpc3QgZWluIFlpbiBPcmdhbiDigJMgdmVyYnVuZGVuIG1pdCBkZW0gWWFuZyBPcmdhbiBkZW0gTWFnZW4g4oCTIGVudHNwcmljaHQgZGVtIEVyZGUtRWxlbWVudC4gWnVzYXR6cHJvZ3JhbW1lOiBFcmRlLUVsZW1lbnQsIE1hZ2VuLU1lcmlkaWFuLCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgVmVyZGF1dW5nc1N5c3RlbSwgTXVza2VsbiwgS3JlaXNsYXVmU3lzdGVtLCBEdXJjaGZhbGwsICAyLiAgdW5kIDMuICBDaGFrcmFcIixcclxuICAgICAgICBcInN0b21hY2gtbWVyaWRpYW4tdXBwZXJcIjogXCJNQUdFTi1NRVJJRElBTlwiLFxyXG4gICAgICAgIFwic3RvbWFjaC1tZXJpZGlhbi1zaG9ydFwiOiBcIk1BR0VOXCIsXHJcbiAgICAgICAgXCJzdG9tYWNoLW1lcmlkaWFuLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhhcm1vbmlzaWVydCBkZW4gTWFnZW4tTWVyaWRpYW4uIOKAoiBHZWdlbiBBdWZzdG9zc2VuLCDDnGJlbGtlaXQgb2RlciBFcmJyZWNoZW4uIOKAoiBMaW5kZXJ0IFNjaGzDpGZlbi1Lb3Bmc2NoZXJ6ZW4uIOKAoiBCZWkgS2llZmVyaMO2aGxlbmVudHrDvG5kdW5nIG9kZXIgVHJpZ2VtaW51c25ldXJhbGdpZS4g4oCiIEJlaSBjaHJvbmlzY2hlbSBTdHJlc3MuIOKAoiBTcGl0emVuYWt0aXZpdMOkdCBkZXMgTWFnZW5zIGlzdCB2b24gNzowMCBiaXMgOTowMCBVaHIuIOKAoiBEZXIgTWFnZW4gaXN0IGVpbiBZYW4tT3JnYW4g4oCTIHZlcmJ1bmRlbiBtaXQgZGVtIFlpbi1PcmdhbiBkZXIgTWlseiAg4oCTIGVudHNwcmljaHQgZGVtIEVyZGUtRWxlbWVudCB1bmQgZGVtIEdlZsO8aGwgdm9uIEFuZ3N0IHVuZCBTdHJlc3MuIFp1c2F0enByb2dyYW1tZTogRXJkZS1FbGVtZW50LCBWZXJkYXV1bmdzU3lzdGVtLCBNaWx6LS9CYXVjaHNwZWljaGVsZHLDvHNlLU1lcmlkaWFuLCBLb3Bmc2NobWVyemVuLCAzLiBDaGFrcmFcIixcclxuICAgICAgICBcInRyaXBsZS13YXJtZXItbWVyaWRpYW4tdXBwZXJcIjogXCJEUkVJRkFDSEVSIEVSV8OEUk1FUiBNRVIuXCIsXHJcbiAgICAgICAgXCJ0cmlwbGUtd2FybWVyLW1lcmlkaWFuLXNob3J0XCI6IFwiRFJFSUZBQ0hFUiBFUlfDhFJNRVJcIixcclxuICAgICAgICBcInRyaXBsZS13YXJtZXItbWVyaWRpYW4tZGVzY3JpcHRpb25cIjogXCLigKIgSGFybW9uaXNpZXJ0IGRlbiBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiBiZWkgTWVuc2NoZW4gbWl0IEhpdHplLSBvZGVyIEvDpGx0ZWdlZsO8aGwgaW0gQmF1Y2guIOKAoiBMaW5kZXJ0IFByb2JsZW1lIGltIFp1c2FtbWVuaGFuZyBtaXQgZGVyIE7DpGhyc3RvZmZhdWZuYWhtZSB1bmQgZXJsYXVidCBlaW5lIGVmZml6aWVudGUgQXVmbmFobWUgZGVyIE7DpGhyc3RvZmZlIHVuZCBBdXNsZWl0dW5nIGRlciBTdG9mZndlY2hzZWwtRW5kcHJvZHVrdGUuIOKAoiBWZXJiZXNzZXJ0IGRlbiBTdG9mZndlY2hzZWwuIOKAoiBTcGl0emVuYWt0aXZpdMOkdCBkZXMgRHJlaWZhY2hlbi1FcnfDpHJtZXItTWVyaWRpYW5zIGlzdCB2b24gMjE6MDAgYmlzIDIzOjAwIFVoci4gWnVzYXR6cHJvZ3JhbW1lOiBIb2x6LUVsZW1lbnQsIEVyZGUtRWxlbWVudCwgTHVuZ2VuLU1lcmlkaWFuLCBIZXJ6LU1lcmlkaWFuLCBNYWdlbi1NZXJpZGlhbiwgTWlsei1NZXJpZGlhbiwgRMO8bm4tIHVuZCBEaWNrZGFybS1NZXJpZGlhbmUsIE5pZXJlbi1NZXJpZGlhbiwgQmxhc2VuLU1lcmlkaWFuLCBBdG11bmdzc3lzdGVtLCBWZXJkYXV1bmdzc3lzdGVtLCA0LiDigJMgNi4gdW5kIDcuIENoYWtyYVwiLFxyXG4gICAgICAgIFwidXJpbmFyeS1ibGFkZGVyLW1lcmlkaWFuLXVwcGVyXCI6IFwiQkxBU0VOIE1FUklESUFOIFwiLFxyXG4gICAgICAgIFwidXJpbmFyeS1ibGFkZGVyLW1lcmlkaWFuLXNob3J0XCI6IFwiQkxBU0VOXCIsXHJcbiAgICAgICAgXCJ1cmluYXJ5LWJsYWRkZXItbWVyaWRpYW4tZGVzY3JpcHRpb25cIjogXCLigKIgSGFybW9uaXNpZXJ0IGRlbiBIYXJuYmxhc2UtTWVyaWRpYW4gKGJlaSB0cm9ja2VuZW4gQXVnZW4sIEdlbGVua2UsIEhhbHMsIERpY2tkYXJtIG9kZXIgU2NoZWlkZSkuIOKAoiBGw7xyIHN0cmFmZmUgdW5kIGVsYXN0aXNjaGUgSGF1dC4g4oCiIFVudGVyc3TDvHR6dCBNZW5zY2hlbiwgZGllIHJhc2NoIGluIFBhbmlrIGdlcmF0ZW4uIOKAoiBGw7ZyZGVydCBkaWUgRsOkaGlna2VpdCwgc2Nod2llcmlnZSBMZWJlbnNzaXR1YXRpb25lbiB6dSBtZWlzdGVybi4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGRlciBIYXJuYmxhc2UgaXN0IHZvbiAxNTowMCBiaXMgMTc6MDAgVWhyLiDigKIgRGllIEhhcm5ibGFzZSBpc3QgWWFuZyDigJMgdmVyYnVuZGVuIG1pdCBkZW0gWWluLU9yZ2FuIGRlciBOaWVyZW4tIGVudHNwcmljaHQgZGVtIFdhc3Nlci1FbGVtZW50IHVuZCBkZW0gQW5nc3QtR2Vmw7xobC4g4oCiIFp1c2F0enByb2dyYW1tZTogV2lyYmVsc8OkdWxlLCBFcnNjaMO2cGZ1bmcsIEF1Z2VuLCBHZWxlbmtlLCAgV2Fzc2VyLUVsZW1lbnQsIE5pZXJlbi1NZXJpZGlhbiwgRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIERpY2tkYXJtLSBNZXJpZGlhbiwgMi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJtZXRhbC1lbGVtZW50LXVwcGVyXCI6IFwiRUxFTUVOVCBNRVRBTEwvTFVGVC9XSU5EXCIsXHJcbiAgICAgICAgXCJtZXRhbC1lbGVtZW50LXNob3J0XCI6IFwiTUVUQUxML0xVRlQvV0lORFwiLFxyXG4gICAgICAgIFwibWV0YWwtZWxlbWVudC1kZXNjcmlwdGlvblwiOiBcIuKAoiBBcm1vbmlzaWVydCBlbW90aW9uYWxlIFZlcmhhbHRlbnN3ZWlzZW4gZGVzIE1ldGFsLUVsZW1lbnRlczogVHJhdXJpZ2tlaXQgdW5kIERlcHJlc3Npb24uIOKAoiBBbHMgWnVzYXR6YmVoYW5kbHVuZyBiZWkgUHJvYmxlbWVuIG1pdCBhYm5vcm1hbGVuIE9yZ2FuZnVua3Rpb25lbjogTHVuZ2UsIERpY2tkYXJtIHVuZCBIYXV0LCB3ZWxjaGUgZGVtIE1ldGFsLUVsZW1lbnQgenVnZW9yZG5ldCB3ZXJkZW4uIFp1c2F0enByb2dyYW1tZTogIE1lcmlkaWFuZSB1bmQgQ2hha3Jhc1wiLFxyXG4gICAgICAgIFwid2F0ZXItZWxlbWVudC11cHBlclwiOiBcIkVMRU1FTlQgV0FTU0VSXCIsXHJcbiAgICAgICAgXCJ3YXRlci1lbGVtZW50LXNob3J0XCI6IFwiV0FTU0VSXCIsXHJcbiAgICAgICAgXCJ3YXRlci1lbGVtZW50LWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhhcm1vbmlzaWVydCBkYXMgZW1vdGlvbmFsZSBWZXJoYWx0ZW4gZGVzIFdhc3NlcmVsZW1lbnRzIHdpZSBTdHJlc3MgdW5kIEFuZ3N0IOKAoiBBbHMgZXJnw6RuemVuZGUgQmVoYW5kbHVuZyB2b24gUHJvYmxlbWVuLCBkaWUgZHVyY2ggYWJub3JtYWxlIEFrdGl2aXTDpHQgdm9uIE9yZ2FuZW4gd2llIE5pZXJlLCBCbGFzZSwgS25vY2hlbiB1bmQgU2lubmVzb3JnYW5lbiB3aWUgZGVuIHZvbSBXYXNzZXJlbGVtZW50IGtvbnRyb2xsaWVydGVuIE9ocmVuIGVudHN0ZWhlbi4gU3VwcG9ydC1Qcm9ncmFtbWU6IE5pZXJlbm1lcmlkaWFuLCBNZXJpZGlhbiBIYXJuYmxhc2UsIEx5bXBoc3lzdGVtLCBTdGltbXVuZywgS25vY2hlbiwgSW50dWl0aW9uLCBGcnVzdHJhdGlvbiwgS29uemVudHJhdGlvbiwgRXJkZWxlbWVudFwiLFxyXG4gICAgICAgIFwiZWFydGgtZWxlbWVudC11cHBlclwiOiBcIkVMRU1FTlQgRVJERVwiLFxyXG4gICAgICAgIFwiZWFydGgtZWxlbWVudC1zaG9ydFwiOiBcIkVSREVcIixcclxuICAgICAgICBcImVhcnRoLWVsZW1lbnQtZGVzY3JpcHRpb25cIjogXCLigKIgaGFybW9uaXNpZXJ0IGVtb3Rpb25hbGUgVmVyaGFsdGVuc3dlaXNlbiBkZXMgRXJkZS1FbGVtZW50ZXMgc29sY2hlIHdpZSBBbmdzdCB1bmQgQmVzb3JnbmlzLiDigKIgQWxzIFp1c2F0emJlaGFuZGx1bmcgYmVpIFByb2JsZW1lbiBtaXQgYWJub3JtYWxlbiBPcmdhbmZ1bmt0aW9uZW4uIE1hZ2VuLCBNaWx6LCBCYXVjaHNwZWljaGVsZHLDvHNlIHVuZCBNdXNrZWxnZXdlYmUsIHdlbGNoZSBkZW0gRXJkZS1FbGVtZW50IHp1Z2VvcmRuZXQgd2VyZGVuLiBadXNhdHpwcm9ncmFtbWU6ICBNZXJpZGlhbmUgdW5kIENoYWtyYXNcIixcclxuICAgICAgICBcImZpcmUtZWxlbWVudC11cHBlclwiOiBcIkVMRU1FTlQgRkVVRVJcIixcclxuICAgICAgICBcImZpcmUtZWxlbWVudC1zaG9ydFwiOiBcIkZFVUVSXCIsXHJcbiAgICAgICAgXCJmaXJlLWVsZW1lbnQtZGVzY3JpcHRpb25cIjogXCLigKIgU3RhYmlsaXNpZXJ0IGV4dHJlbWUgU3RpbW11bmdzc2Nod2Fua3VuZ2VuLiDigKIgQWxzIFp1c2F0emJlaGFuZGx1bmcgYmVpIFByb2JsZW1lbiBtaXQgYWJub3JtYWxlbiBPcmdhbmZ1bmt0aW9uZW46IEhlcnosIETDvG5uZGFybSB1bmQgQmx1dGdlZsOkc3NlLCB3ZWxjaGUgZGVtIEZldWVyLUVsZW1lbnQgenVnZW9yZG5ldCB3ZXJkZW4uIFp1c2F0enByb2dyYW1tZTogTWVyaWRpYW5lIHVuZCBDaGFrcmFzXCIsXHJcbiAgICAgICAgXCJ3b29kLWVsZW1lbnQtdXBwZXJcIjogXCJFTEVNRU5UIEhPTFovw4RUSEVSXCIsXHJcbiAgICAgICAgXCJ3b29kLWVsZW1lbnQtc2hvcnRcIjogXCJIT0xaL8OEVEhFUlwiLFxyXG4gICAgICAgIFwid29vZC1lbGVtZW50LWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhhcm1vbmlzaWVydCBkYXMgZW1vdGlvbmFsZSBWZXJoYWx0ZW4gZGVzIEhvbHplbGVtZW50cyB3aWUgV3V0IOKAoiBBbHMgZXJnw6RuemVuZGUgQmVoYW5kbHVuZyBmw7xyIFByb2JsZW1lLCBkaWUgZHVyY2ggYWJub3JtYWxlIEFrdGl2aXTDpHQgdm9uIE9yZ2FuZW4gd2llIExlYmVyLCBCbGFzZSwgR2V3ZWJlLCB3aWUgU2VobmVuIHVuZCBTaW5uZXNvcmdhbmUgd2llIGRlbiBkdXJjaCBkYXMgSG9semVsZW1lbnQga29udHJvbGxpZXJ0ZW4gQXVnZW4gZW50c3RlaGVuLiBVbnRlcnN0w7x0enVuZ3Nwcm9ncmFtbWU6IExlYmVybWVyaWRpYW4sIE1lcmlkaWFuLUdhbGxlbmJsYXNlLCBOZXJ2ZW4sIE11c2tlbG4sIEZydXN0cmF0aW9uLCBCaW5kZWdld2ViZSwgR2VsZW5rLCBNaWx6bWVyaWRpYW4sIEVyZGVsZW1lbnQsIE1ldGFsbGVsZW1lbnQsIEVudGdpZnR1bmcsIEZyaWVkZW4sIDEuIENoYWtyYSwgMy4gQ2hha3JhLCA0LiBDaGFrcmEgLCA2LiBDaGFrcmFcIixcclxuICAgICAgICBcclxuICAgICAgICBcIm1pbmVyYWwtbWV0YWJvbGljLWFjdGl2aXR5LXVwcGVyXCI6IFwiTUlORVJBTFNUT0ZGV0VDSFNFTFwiLFxyXG4gICAgICAgIFwibWluZXJhbC1tZXRhYm9saWMtYWN0aXZpdHktZGVzY3JpcHRpb25cIjogXCLigKIgVW50ZXJzdMO8dHp0IGRpZSBNaW5lcmFsLVN0b2Zmd2VjaHNlbHTDpHRpZ2tlaXQgdW5kIG9wdGltaWVydCBkZXNzZW4gQXVmbmFobWUgdW5kIFZlcndlbmR1bmcuIOKAoiBadXNhdHpiZWhhbmRsdW5nIGJlaSBTdG9mZndlY2hzZWwtU3TDtnJ1bmdlbi4gWnVzYXR6cHJvZ3JhbW1lOiAgVmVyZGF1dW5nLCBEYXJtZmxvcmEsIEVudGdpZnR1bmcsIEZydXN0cmF0aW9uLCBGcmllZGUsIEUtc21vZywgRmV1ZXItRWxlbWVudCwgRGljay0gdW5kIETDvG5uZGFybS1NZXJpZGlhbiwgTWFnZW4tTWVyaWRpYW4sIERyZWlmYWNoZXItRXJ3w6RybWVyLU1lcmlkaWFuLCAxLiAgdW5kIDIuICBDaGFrcmFcIixcclxuICAgICAgICBcIm11c2NsZS10aXNzdWUtdXBwZXJcIjogXCJNVVNLRUxHRVdFQkVcIixcclxuICAgICAgICBcIm11c2NsZS10aXNzdWUtZGVzY3JpcHRpb25cIjogXCLigKIgVGhlcmFwaWVydCBkYXMgTXVza2VsZ2V3ZWJlIHVuZCByZWd0IGRpZSBNdXNrZWxnZW5lc3VuZyBhbi4g4oCiIFVudGVyc8O8dHp0IGRpZSBSZWdlbmVyaWVydW5nIGRlcyBNdXNrZWxnZXdlYmVzIG5hY2gga2xlaW5lcmVuIFZlcmxldHp1bmdlbi4g4oCiIFVudGVyc3TDvHR6dCBkaWUgQmVoYW5kbHVuZyBiZWkgbW90b3Jpc2NoZW4gQmVmaW5kbGljaGtlaXRzc3TDtnJ1bmdlbiAoei5CLiBuYWNoIFVuZmFsbCBvZGVyIG5hY2ggR2VoaXJuc2NobGFnIG1pdCBMw6RobXVuZ3NlcnNjaGVpbnVuZykuIOKAoiBTdGVpZ2VydCBkaWUgbXVza3Vsw6RyZSBMZWlzdHVuZ3Nmw6RoaWdrZWl0IHVuZCB2ZXJtaW5kZXJ0IGRhcyBWZXJsZXR6dW5nc3Jpc2lrby4g4oCiIFVudGVyc3TDvHR6ZW5kIGbDvHIgZ2VzdW5kZSBHZWxlbmtlIGR1cmNoIEhhcm1vbmlzaWVydW5nIGRlciBNdXNrZWwtRmVobHN0ZWxsdW5nLiDigKIgQmVpIE5laWd1bmcgenUgTXVza2Vsc2Nod3VuZC4gWnVzYXR6cHJvZ3JhbW1lOiBLcmVpc2xhdWYtU3lzdGVtLCBOZXJ2ZW5zeXN0ZW0sIEJpbmRlZ2V3ZWJlLCBMeW1waHN5c3RlbSwgUmVnZW5lcmF0aW9uLCBWZXJkYXV1bmdzc3lzdGVtLCBNaWx6LU1lcmlkaWFuLCBEw7xubmRhcm0tTWVyaWRpYW4sIDEuICB1bmQgIDcuICBDaGFrcmFcIixcclxuICAgICAgICBcIm5lY2stc2hvdWxkZXItdXBwZXJcIjogXCJOQUNLRU4tU0NIVUxURVJCRVJFSUNIXCIsXHJcbiAgICAgICAgXCJuZWNrLXNob3VsZGVyLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEzDtnN0IFZlcnNwYW5udW5nZW4gaW0gTmFja2VuL1NjaHVsdGVyYmVyZWljaC4g4oCiIEVyaMO2aHQgZGllIExlaXN0dW5nc2bDpGhpZ2tlaXQgZGVyIEJsdXRnZWbDpHNzZSBpbSBOYWNrZW4tIHVuZCBLb3BmYmVyZWljaC4gWnVzYXR6cHJvZ3JhbW1lOiBLcmVpc2xhdWZzeXN0ZW0sIFdpcmJlbHPDpHVsZSwgQmluZGVnZXdlYmUsIE11c2tlbG4sIE5lcnZlbnN5c3RlbSwgRS1TbW9nLCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgSGFybmJsYXNlLU1lcmlkaWFuLCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgMS4gdW5kIDUuICBDaGFrcmFcIixcclxuICAgICAgICBcIm5lcnZvdXMtc3lzdGVtLXVwcGVyXCI6IFwiTkVSVkVOU1lTVEVNXCIsXHJcbiAgICAgICAgXCJuZXJ2b3VzLXN5c3RlbS1kZXNjcmlwdGlvblwiOiBcIuKAoiBGw7ZyZGVydCBkaWUgRW50c3Bhbm51bmcgdW5kIFJlZ2VuZXJpZXJ1bmcgZGVzIFplbnRyYWwtTmVydmVuc3lzdGVtcy4g4oCiIFVudGVyc3TDvHR6dCBkaWUgQmVoYW5kbHVuZyB2b24gZW50YXJ0ZXRlbSBNdXNrZWwtTGVpZGVuICh6LkIuIGJlaSBNdXNrZWxzY2h3dW5kKS4g4oCiIEVyZ8Okbnp0IGRpZSBOZXJ2ZW56ZWxsZW4tQmVoYW5kbHVuZyBiZWkgZGVyIFJlZ2VuZXJpZXJ1bmcuIOKAoiBFcmfDpG56dCBNdXNrZWxrb29yZGluYXRpb25zLUJlaGFuZGx1bmdlbiBoZXJ2b3JnZXJ1ZmVuIGR1cmNoIEFiZ2VzcGFubnRoZWl0ICh6LkIuIHNjaHdhY2hlcyBOaWVyZW4tQ2hpLCBlcnNjaMO2cGZ0ZSBOZWJlbm5pZXJlbixldGMuKS4g4oCiIEVyZ8Okbnp0IGRpZSBCZWhhbmRsdW5nIGJlaSBow6R1ZmlnZW4gc3BvbnRhbmVuIE11c2tlbGJld2VndW5nZW4uIOKAoiBQYXJhc2l0ZW4ga8O2bm5lbiBmw7xyIGVpbmUgYW5kYXVlcm5kZSDDnGJlcnN0aW1tdWxpZXJ1bmcgZGVzIE5lcnZlbnN5c3RlbXMgdmVyYW50d29ydGxpY2ggc2Vpbi4gWnVzYXR6cHJvZ3JhbW1lOiBMZWJlci1NZXJpZGlhbiwgQW50aS1BZ2luZywgRW50Z2lmdHVuZywgTWluZXJhbGllbi1TdG9mZndlY2hzZWwtU3TDtnJ1bmcsIFdpcmJlbHPDpHVsZSwgRGlja2Rhcm0sIFZlcmxldHp1bmcsIDYuIHVuZCA3LiBDaGFrcmFcIixcclxuICAgICAgICBcInBhaW4tdXBwZXJcIjogXCJTQ0hNRVJaXCIsXHJcbiAgICAgICAgXCJwYWluLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEJlaSBha3V0ZW4gdW5kIGNocm9uaXNjaGVuIFNjaG1lcnplbi4g4oCiIEJlaSBLb3BmLSB1bmQgR2VsZW5rc2NobWVyemVuLiDigKIgQW53ZW5kdW5nIG5hY2ggVHJhdW1hcyBvZGVyIE9wZXJhdGlvbmVuLiDigKIgTWluZGVydCBTY2htZXJ6ZW4gYXVmZ3J1bmQgdm9uIEtyYW1wZmFkZXJuLiDigKIgQmVpIGNocm9uaXNjaGVuIFNjaG1lcnplbiBpc3QgZGVyIFRoZXJhcGllZXJmb2xnIG5hY2ggZWluaWdlbiBUYWdlbiBkZXIgQW53ZW5kdW5nIHNww7xyYmFyLiBadXNhdHpwcm9ncmFtbWU6IFZlcmxldHp1bmcsIEVudHNwYW5udW5nLCBGcmV1ZGUsIEZydXN0cmF0aW9uLCBOZXJ2ZW5zeXN0ZW0sIEZyaWVkZSwgTXVza2VsbiwgQmluZGVnZXdlYmUsIEtub2NoZW4sIEdlbGVua2UsIFZlcmRhdXVuZ3NzeXN0ZW0sIEVuZXJnaWUtQXVzZ2xlaWNoLCBDaGFrcmFzLCBFbGVtZW50ZSB1bmQgTWVyaWRpYW5lXCIsXHJcbiAgICAgICAgXCJwZWFjZS11cHBlclwiOiBcIkZSSUVERU5cIixcclxuICAgICAgICBcInBlYWNlLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEJlc8OkbmZ0aWd0IHNjaHdlcmUgZW1vdGlvbmFsZSBNb21lbnRlIChVbmZhbGwsIFNjaGVpZHVuZywgUHJvYmxlbWUgYmVpIGRlciBBcmJlaXQpLiDigKIgU3RhYmlsaXNpZXJ0IGRpZSBpbm5lcmUgSGFybW9uaWUuIOKAoiBFbnRzcGFubmVuZCBuYWNoIGxhbmdlciBBcmJlaXRzLSBvZGVyIExlcm5zdHVuZGVuLiBadXNhdHpwcm9ncmFtbWU6IEUtU21vZywgRW5lcmdpZS1BdXNnbGVpY2gsIEZydXN0cmF0aW9uLCBGcmllZGUsIEVudHNwYW5udW5nLCBNZXRhbGwtRWxlbWVudCwgV2Fzc2VyLUVsZW1lbnQsIEhlcnotTWVyaWRpYW4sIFBlcmlrYXJkaW8tTWVyaWRpYW4sIExlYmVyLU1lcmlkaWFuLCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgQ2hha3Jhc1wiLFxyXG4gICAgICAgIFwicmVnZW5lcmF0aW9uLXVwcGVyXCI6IFwiUkVHRU5FUklFUlVOR1wiLFxyXG4gICAgICAgIFwicmVnZW5lcmF0aW9uLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEJlc2NobGV1bmlndCBkZW4gUmVnZW5lcmF0aW9uc3Byb3plc3MgYmVpIGvDtnJwZXJsaWNoZXIgRXJtw7xkdW5nLiDigKIgTGluZGVydCBNdXNrZWxzY2htZXJ6ZW4gbmFjaCBkZW0gVHJhaW5pbmcuIOKAoiBNaW5kZXJ0IGRhcyBFcnNjaMO2cGZ1bmdzZ2Vmw7xobCBpbiBkZW4gQmVpbmVuIHVuZCBpbSBMZW5kZW5iZXJlaWNoIG5hY2ggbGFuZ2VtIFN0ZWhlbiB1bmQvb2RlciBMYXVmZW4uIFp1ciBBdWZmcmlzY2h1bmcgZGVyIEJlaW5lIHVuZCBIw7xmdGUuIOKAoiBGw7ZyZGVydCBkaWUgbWVudGFsZSBMZWlzdHVuZ3Nmw6RoaWdrZWl0IGR1cmNoIGRpZSBrw7ZycGVybGljaGUgQXVmZnJpc2NodW5nLiDigKIgTGluZGVydCBNdXNrZWxrYXRlciBuYWNoIGvDtnJwZXJsaWNoZXIgQW5zdHJlbmd1bmcsIDEg4oCTIDIgQW53ZW5kdW5nIGdsZWljaCBuYWNoIGRlbSBUcmFpbmluZy4g4oCiIE5hY2ggZGVtIFdldHRrYW1wZiBvciBleHRyZW1lbSBUcmFpbmluZy4gWnVzYXR6cHJvZ3JhbW1lOiBMeW1waHN5c3RlbSwgS3JlaXNsYXVmc3lzdGVtLCBFbmVyZ2llLVNwZW5kZXIsIExlYmVuc2ZyZXVkZSwgTXVza2VsbiwgVmVyZGF1dW5nc3N5c3RlbSwgTmViZW5uaWVyZW4sIE5lcnZlbnN5c3RlbSwgQmluZGVnZXdlYmUsIEVyZGUtRWxlbWVudCwgMS4sIDIuIHVuZCA3LiBDaGFrcmFcIixcclxuICAgICAgICBcInJlbGF4YXRpb24tdXBwZXJcIjogXCJFTlRTUEFOTlVOR1wiLFxyXG4gICAgICAgIFwicmVsYXhhdGlvbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBCZWkgU3RyZXNzIHVuZCBWZXJzcGFubnVuZ2VuLiDigKIgSGlsZnQgdW52ZXJhcmJlaXRldGUgRW1vdGlvbmVuIHVuZCBTdHJlc3MgenUga2FuYWxpc2llcmVuLiBadXNhdHpwcm9ncmFtbWU6ICBFbmVyZ2llLUF1c2dsZWljaCwgRnJ1c3RyYXRpb24sIEZyZXVkZSwgTmViZW5uaWVyZW4sIEZyaWVkZSwgU2NoaWxkZHLDvHNlLCBFLVNtb2csIEhlcnotTWVyaWRpYW4sIDEuIOKAkyA0LiB1bmQgNy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXJcIjogXCJBVE1VTkdTU1lTVEVNXCIsXHJcbiAgICAgICAgXCJyZXNwaXJhdG9yeS1zeXN0ZW0tZGVzY3JpcHRpb25cIjogXCLigKIgQWxzIGtvbXBsZW1lbnTDpHJlIFNlbGJzdHZlcnNvcmd1bmcgYmVpIEF0ZW13ZWdzLUVya3Jhbmt1bmdlbi4g4oCiIFN0aW11bGllcnQgSGVpbHVuZ3Nwcm96ZXNzIGRlciBBdGVtd2VnZSBiZWkgSHVzdGVuLCBHcmlwcGUsIEJyb25jaGl0aXMsIE1hbmRlbGVudHrDvG5kdW5nLCBMdW5nZW5lbnR6w7xuZHVuZyAoYWxzIEVyZ8Okbnp1bmcpLiDigKIgQmVpIFJlaXpodXN0ZW4gKGF1Y2ggUmF1Y2hlcmh1c3RlbikgRGFzIFByb2dyYW1tIG1pbmQuIDYgV29jaGVuIGFud2VuZGVuLiDigKIgT3B0aW1pZXJ0IGRpZSBBdG11bmdzZnVua3Rpb25lbiBiZWkgRXJrw6RsdW5nLiBCZWdpbm5lIG1pdCBkZW0gUHJvZ3JhbW0gYmVpIGRlbiBlcnN0ZW4gQW56ZWljaGVuIHVuZCB3ZW5kZSBlcyBiaXMgZWluaWdlIFRhZ2UsIG5hY2hkZW0gZGllIFN5bXB0b21lIHZlcnNjaHd1bmRlbiBzaW5kLCBhbiBCZWZyZWl0IGRpZSBBdGVtd2VnZS4g4oCiIEbDtnJkZXJ0IGRpZSBXaXJrdW5nIHZvbiBBdGVtw7xidW5nZW4uIEVpbmUgd2lya3VuZ3N2b2xsZSBFcmfDpG56dW5nIHp1IFlvZ2EgUG9zaXRpb25lbiAoYXNhbmFzKSDigJMgaGFybW9uaXNpZXJ0IGRpZSBBdG11bmcgdW5kIGJlaGFsdCBpaG4gaW4gZWluZW0gbmF0w7xybGljaGVuIFJ5dGhtdXMuIFp1c2F0enByb2dyYW1tZTogSW1tdW5zeXN0ZW0sIEx5bXBoc3lzdGVtLCBGcnVzdHJhdGlvbiwgR3JpcHBlLCBOZWJlbmjDtmhsZW4sIERhcm1mbG9yYSwgVmVyZGF1dW5nc3N5c3RlbSwgRS1TbW9nLCBFbmVyZ2llLUF1c2dsZWljaCwgRnJldWRlXCIsXHJcbiAgICAgICAgXCJzaW51cy1jYXZpdGllcy11cHBlclwiOiBcIk5BU0VOTkVCRU5Iw5ZITEVOXCIsXHJcbiAgICAgICAgXCJzaW51cy1jYXZpdGllcy1kZXNjcmlwdGlvblwiOiBcIuKAoiBMaW5kZXJ0IGFrdXRlIHVuZCBjaHJvbmlzY2hlIFN0aXJuaMO2aGxlbmVudHrDvG5kdW5nIHVuZCBTY2htZXJ6ZW4gaW0gR2VzaWNodC4g4oCiIFVudGVyc3TDvHR6dCBkYXMgSW1tdW5zeXN0ZW0uIOKAoiBVbnRlcnN0w7x0enQgZGllIFN0b2Zmd2VjaHNlbHZvcmfDpG5nZSBkZXIgU3Rpcm5ow7ZobGVuLCB1bmQgaXN0IGhpbGZyZWljaCBiZWkgQWxsZXJnaWVzeW1wdG9tZW4gQWxzIFZvcmJldWd1bmcgZsO8ciBTdGlybmjDtmhsZW5lbnR6w7xuZHVuZyBpbiBkZXIgSW5rdWJpbmF0aW9uc3plaXQgZGVyIEdyaXBwZS4g4oCiIERpZXNlcyBQcm9ncmFtbSBzb2xsLCDDvGJlciBtZWhyZXJlIFRhZ2UgbmFjaGRlbSBkaWUgU3ltcHRvbWUgdmVyc2Nod3VuZGVuIHNpbmQsIGFuZ2V3ZW5kZXQgd2VyZGVuLiBadXNhdHpwcm9ncmFtbWU6ICBJbW11bnN5c3RlbSwgTHltcGhzeXN0ZW0sIEF0bXVuZ3NzeXN0ZW0sIEVudGdpZnR1bmcsIE1ldGFsbC1FbGVtZW50LCBEYXJtZmxvcmEsIEx1bmdlbi1NZXJpZGlhbiwgNC4gLCA1LiAgdW5kIDYuICBDaGFrcmFcIixcclxuICAgICAgICBcInNraW4tY29uZGl0aW9ucy11cHBlclwiOiBcIkhBVVRcIixcclxuICAgICAgICBcInNraW4tY29uZGl0aW9ucy1kZXNjcmlwdGlvblwiOiBcIuKAoiBCZWkgSGF1dGVya3Jhbmt1bmdlbi4g4oCiIEVyZ8OkbnplbmQgYmVpIEhhdXRlbnR6w7xuZHVuZ2VuIGJlaSB0aGVyYXBldXRpc2NoZW4gRWluZ3JpZmZlbi4g4oCiIEVyZ8Okbnp1bmdzdGhlcmFwaWUgYmVpIGhvcm1vbmVsbGVtIFVuZ2xlaWNoZ2V3aWNodC4gWnVzYXR6cHJvZ3JhbW1lOiBFbnRnaWZ0dW5nLCBBbnRpIEFnaW5nLCBCaW5kZWdld2ViZSwgVmVyZGF1dW5nc3N5c3RlbSwgRsO8ciBkZW4gTWFubiwgRsO8ciBkaWUgRnJhdSwgTWV0YWxsLUVsZW1lbnQsIExlYmVyLU1lcmlkaWFuLCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgSGFybmJsYXNlLU1lcmlkaWFuLCAxLiwgMi4gdW5kIDQuIENoYWtyYVwiLFxyXG4gICAgICAgIFwic2xlZXAtZW5oYW5jZXItdXBwZXJcIjogXCJTQ0hMQUZIWUdJRU5FXCIsXHJcbiAgICAgICAgXCJzbGVlcC1lbmhhbmNlci1kZXNjcmlwdGlvblwiOiBcIuKAoiBCZWkgRWluc2NobGFmLSB1bmQgRHVyY2hzY2hsYWZwcm9ibGVtZW4uIOKAoiBWZXJyaW5nZXJ0IGRlcHJlc3NpdmUgR2VkYW5rZW4uIOKAoiBTdGVpZ2VydCBkYXMga8O2cnBlcmxpY2hlIHVuZCBlbW90aW9uYWxlIEZyaWVkZW5zZ2Vmw7xobC4gWnVzYXR6cHJvZ3JhbW1lOiAgIEVuZXJnaWUtQXVzZ2xlaWNoLCBFbnRzcGFubnVuZywgTmViZW5uaWVyZSwgRnJpZWRlLCBFLVNtb2csIEZyZXVkZSwgRnJ1c3RyYXRpb24sIFNjaGlsZGRyw7xzZW4sIDEuLCAyLiwgMy4sIDYuIHVuZCA3LiBDaGFrcmFcIixcclxuICAgICAgICBcInN0cmVzcy1yZWxpZWYtdXBwZXJcIjogXCJTVFJFU1NcIixcclxuICAgICAgICBcInN0cmVzcy1yZWxpZWYtZGVzY3JpcHRpb25cIjogXCLigKIgSGlsZnJlaWNoIGJlaSBha3V0ZXIgRnJ1c3RyYXRpb24uIOKAoiBVbnRlcnN0w7x0emVuZCBiZWkgZGVyIGvDtnJwZXJsaWNoZW4gdW5kIHBzeWNoaXNjaGVuIFByb2JsZW1sw7ZzdW5nIGF1ZmdydW5kIHZvbiB1bnRlcmRyw7xja3RlbiBFbW90aW9uZW4uIOKAoiBCZWkgw5xiZXJyZWFrdGlvbmVuIChkaWUgb2Z0IGluIHNlbGJzdHplcnN0w7ZyZW5kZW4gQWt0aW9uZW4gZW5kZW4pIGF1ZmdydW5kIHZvbiBlaW5lciBhbmdlc3Bhbm50ZW4gTGViZW5zZsO8aHJ1bmcuIOKAoiBWZXJtaW5kZXJ0IHBzeWNoaXNjaGUgQW5zcGFubnVuZyAoei5CLiBiZWkgZGVyIFNlbGJzdHdhcm5laG11bmcpLiDigKIgQmVmcmVpdCB2b24gZWxla3Ryb21hZ25ldGlzY2hlbiBFbmdyYW1tZW4gZGVyIHVudGVyZHLDvGNrdGVuIEVtb3Rpb25lbiwgd2VsY2hlIHp1IGFncmVzc2l2ZW0gVmVyaGFsdGVuIGbDvGhyZW4uIOKAoiBGw7xyIE1lbnNjaGVuIGRpZSBpbW1lciBhbGxlbiBoZWxmZW4gdW5kIHNpY2ggc2VsYmVyIHp1IHdlbmlnIFplaXQgd2lkbWVuLiBWZXJyaW5nZXJ0IFN0w7ZydW5nZW4gZGVzIE5lcnZlbnN5c3RlbXMgdW5kIGRlciBLb29yZGluYXRpb24sIGRpZSBkdXJjaCB1bnRlcmRyw7xja3RlIEVtb3Rpb25lbiB1bmQgRW50dMOkdXNjaHVuZ2VuIGhlcnZvcmdlcnVmZW4gd2VyZGVuLiDigKIgRsO8ciBMZXV0ZSwgZGllIGRhcyBHZWbDvGhsIGhhYmVuLCB2b20gTGViZW4gc2VsYnN0IHVuZ2VyZWNodCBiZWhhbmRlbHQgenUgd2VyZGVuLiBadXNhdHpwcm9ncmFtbWU6IEUtc21vZywgRnJpZWRlLCBFbnRzcGFubnVuZywgRnJldWRlLCBOZWJlbm5pZXJlbiwgRW5lcmdpZS1BdXNnbGVpY2gsIEdhbGxlbmJsYXNlLU1lcmlkaWFuLCBMZWJlci1NZXJpZGlhbiwgRmV1ZXItRWxlbWVudCwgSGVyei1NZXJpZGlhbiwgTWVkaXRhdGlvbiAxLiwgMi4gLCAzLiAgdW5kIDYuICBDaGFrcmFcIixcclxuICAgICAgICBcInRoeXJvaWQtZ2xhbmRzLXVwcGVyXCI6IFwiU0NISUxERFLDnFNFXCIsXHJcbiAgICAgICAgXCJ0aHlyb2lkLWdsYW5kcy1kZXNjcmlwdGlvblwiOiBcIuKAoiBBbHMgRXJnw6RuenVuZ3N0aGVyYXBpZSBmw7xyIFVudGVyLSB1bmQgw5xiZXJnZXdpY2h0aWdlLiDigKIgRsO2cmRlcnQgZGllIFdpcmt1bmcgdm9uIEFibWFnZXJ1bmdza3VyZW4gdW5kIHVudGVyc3TDvHR6dCBkaWUgTGViZW5za3JhZnQuIOKAoiBPcHRpbWllcnQgZGllIEZ1bmt0aW9uIGRlciBaZWxsbWVtYnJhbmUuIFp1c2F0enByb2dyYW1tZTogTmVydmVuLCBOZWJlbm5pZXJlLCBBbnRpLUFnaW5nLCBLcmVpc2xhdWZzeXN0ZW0sIEZyZXVkZSwgRnJ1c3RyYXRpb24sIE1pbHovQmF1Y2hzcGVpY2hlbGRyw7xzZS1NZXJpZGlhbiwgRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIDIuIHVuZCA1LiBDaGFrcmFcIixcclxuICAgICAgICBcInVyaW5hcnktdXBwZXJcIjogXCJOSUVSRU4gVU5EIEFCTEVJVEVOREUgSEFSTldFR0VcIixcclxuICAgICAgICBcInVyaW5hcnktZGVzY3JpcHRpb25cIjogXCLigKIgQmVpIEJsYXNlbmVudHrDvG5kdW5nLiDigKIgTWluZGVydCBow6R1ZmlnIHZvcmtvbW1lbmRlciBTY2jDvHR0ZWxmcm9zdC4gWnVzYXR6cHJvZ3JhbW1lOiBFbnRzcGFubnVuZywgRnJ1c3RyYXRpb24sIE5lYmVubmllcmUsIEltbXVuc3lzdGVtLCBEYXJtZmxvcmEsIEhhcm5ibGFzZS1NZXJpZGlhbiwgRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIFdhc3Nlci1FbGVtZW50LCAyLiBDaGFrcmFcIixcclxuICAgICAgICBcInZlcnRlYnJhZS11cHBlclwiOiBcIldJUkJFTFPDhFVMRVwiLFxyXG4gICAgICAgIFwidmVydGVicmFlLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEVyZ8OkbnplbmQgYmVpIFLDvGNrZW50aGVyYXBpZW4uIOKAoiBWb3JiZXVnZW5kIGdlZ2VuIEdld2ViZXNjaMOkZGlndW5nIGJlaSBNZW5zY2hlbiwgZGllIGjDpHVmaWcgc2Nod2VyZSBEaW5nZSBoZWJlbi4g4oCiIFJlZHV6aWVydCBSw7xja2VucHJvYmxlbWUsIGRpZSBow6R1ZmlnIG5hY2ggY2hyb25pc2NoZW4gVmVyZGF1dW5nc3N0w7ZydW5nZW4gYXVmdHJldGVuLiBadXNhdHpwcm9ncmFtbWU6IE11c2tlbG4sICBLbm9jaGVuLCBHZWxlbmtlLCBFbnRzcGFubnVuZywgQmluZGVnZXdlYmUsIFZlcmRhdXVuZ3NzeXN0ZW0sIEhvbHotRWxlbWVudCwgTGViZXItTWVyaWRpYW4sIEhhcm5ibGFzZS1NZXJpZGlhbiwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sMS4gIHVuZCAyLiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJ2aXRhbGl0eS11cHBlclwiOiBcIlZJVEFMSVTDhFRcIixcclxuICAgICAgICBcInZpdGFsaXR5LWRlc2NyaXB0aW9uXCI6IFwi4oCiIEbDtnJkZXJ0IGRpZSBWaXRhbGl0w6R0LiDigKIgWnVyIGVyZm9sZ3JlaWNoZW4gQXVzc2NoZWlkdW5nIHZvbiBTdG9mZndlY2hzZWwtQWJmYWxscHJvZHVrdGVuLiDigKIgVmVycmluZ2VydCBkaWUgdMOkZ2xpY2hlIExhc3QgYW4gZ2Vpc3RpZ2VtIHVuZCBrw7ZycGVybGljaGVtIFN0cmVzcy4gWnVzYXR6cHJvZ3JhbW1lOiAgRW5lcmdpZS1BdXNnbGVpY2gsIEVuZXJnaWUtU3BlbmRlciwgTmViZW5uaWVyZW4sIFNjaGlsZGRyw7xzZW4sIE1pbmVyYWwtU3RvZmZ3ZWNoc2VsLCBCaW5kZWdld2ViZSwgS25vY2hlbiwgRGFybWZsb3JhLCBFIHNtb2csIEFsbGUgTWVyaWRpYW4tUHJvZ3JhbW1lLCAxLiDigJMgMi4gdW5kIDMuIENoYWtyYVwiLFxyXG4gICAgICAgIFxyXG4gICAgICAgIFwid2VpZ2h0LWNvbnRyb2wtdXBwZXJcIjogXCJHRVdJQ0hUU0tPTlRST0xMRVwiLFxyXG4gICAgICAgIFwid2VpZ2h0LWNvbnRyb2wtZGVzY3JpcHRpb25cIjogXCLigKIgRXJnw6RuemVuZCBiZWkgR2V3aWNodHNhYm5haG1lLUJlaGFuZGx1bmdlbi4g4oCiIEJlZ8O8bnN0aWd0IGRpZSBOw6RocnN0b2ZmYXVmbmFobWUuIOKAoiBGw7ZyZGVydCBkaWUgR2lmc3RzdG9mZi1BdXNzY2hlaWR1bmcuIOKAoiBWZXJzdMOkcmt0IGRpZSBMZWJlbnNrcmFmdC4g4oCiIFZlcm1pbmRlcnQgw7xiZXJzY2jDvHNzaWdlIE5haHJ1bmdzYXVmbmFobWUgYXVmZ3J1bmQgdW50ZXJkcsO8Y2t0ZXIgRW1vdGlvbmVuLiDigKIgUmVkdXppZXJ0IERlcHJlc3Npb24gd8OkaHJlbmQgc3BlemllbGxlciBEacOkdGVuLiDigKIgVW50ZXJkcsO8Y2t0IGRhcyDDvGJlcm3DpHNzaWdlIFZlcmxhbmdlbiBhdWYgTmFocnVuZyAuIOKAoiBVbnRlcnN0w7x0enQgZGVuIEhvcm1vbi1IYXVzaGFsdC4gWnVzYXR6cHJvZ3JhbW1lOiBWZXJkYXV1bmdzc3lzdGVtLCBTY2hpbGRkcsO8c2UvU3RvZmZ3ZWNoc2VsLCBFbnRnaWZ0dW5nLCBNaW5lcmFsLVN0b2Zmd2VjaHNlbCwgWnVja2VyLVN0b2Zmd2VjaHNlbCwgU3VjaHQsIEVyZGUtRWxlbWVudCwgTWV0YWxsLUVsZW1lbnQsIERpY2stIC9Ew7xubmRhcm0tTWVyaWRpYW4sIExlYmVyLU1lcmlkaWFuLCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgTWVkaXRhdGlvbiBJLCBJSSwgSUlJLCAxLiAgdW5kIDIuICBDaGFrcmFcIixcclxuICAgICAgICBcIjEtY2hha3JhLWRlc2NyaXB0aW9uXCI6IFwiQmVmaW5kZXQgc2ljaCBhbSBFbmRlIGRlciBXaXJiZWxzw6R1bGUgdW5kIGlzdCBtaXQgZGVuIEdlc2NobGVjaHRzLSB1bmQgTmViZW5uaWVyZW5kcsO8c2VuIHZlcmJ1bmRlbiB2ZXJhbnR3b3J0bGljaCBmw7xyIGRpZSBHcnVuZGlzdGlua3RlIHdpZSBLYW1wZiBvZGVyIEZsdWNoLCDDnGJlcmxlYmVuIERhcyAxLiBDaGFrcmEgc3RldWVydCBkaWUgU2V4dWxpdMOkdCAoa8O2cnBlcmxpY2gpLCBIYWx0IChnZWlzdGlnKSwgU2lubmxpY2hrZWl0IChlbW90aW9uYWwpLCBTaWNoZXJoZWl0c2dlZsO8aGwgKHNwaXJpdHVlbGwpIFp1c2F0enByb2dyYW1tZTogRWxlbWVudGUsIE1lcmlkaWFuZSB1bmQgTWVkaXRhdGlvblwiLFxyXG4gICAgICAgIFwiMi1jaGFrcmEtZGVzY3JpcHRpb25cIjogXCJCZWZpbmRldCBzaWNoIGJlaW0gS3JldXpiZWluIFVuZCBpc3QgbWl0IGRlbiBIb2RlbiByZXNwLiBFaWVyc3TDtmNrZW4gdW5kIGRlbiB2ZXJzY2hpZWRlbmVuIFNleHVhbGhvcm1vbmVuIHZlcmJ1bmRlbiBWZXJhbnR3b3J0bGljaCBmw7xyIGRpZSBCZXJlaWNoZSBCZXppZWh1bmdlbiwgR2V3YWx0LCBTdWNodCB1bmQgZW1vdGlvbmFsZSBHcnVuZGJlZMO8cmZuaXNzZSBEYXMgMi4gQ2hha3JhIHN0ZXVlcnQgZGllIEZvcnRwZmxhbnp1bmcgKGvDtnJwZXJsaWNoKSwgS3JlYXRpdml0w6R0IChnZWlzdGlnKSwgRnJldWRlIChlbW90aW9uYWwpIHVuZCBCZWdlaXN0ZXJ1bmcgKHNwaXJpdHVlbGwpIFp1c2F0enByb2dyYW1tZTogRWxlbWVudGUsIE1lcmlkaWFuZSB1bmQgTWVkaXRhdGlvblwiLFxyXG4gICAgICAgIFwiMy1jaGFrcmEtZGVzY3JpcHRpb25cIjogXCJCZWZpbmRldCBzaWNoIGRpcmVrdCB1bnRlciBkZW4gUmlwcGVuIFVuZCBpc3QgbWl0IGRlbSBWZXJkYXV1bmdzc3lzdGVtIHVuZCBkZW4gTmViZW5uaWVyZW4gdmVyYnVuZGVuIFZlcmFudHdvcnRsaWNoIGbDvHIgcGVyc8O2bmxpY2hlIFN0w6Rya2UsIEZ1cmNodCwgQmVrbMOkbW11bmcgdW5kIEludHJvdmVydGllcnRoZWl0IERhcyAzLkNoYWtyYSBzdGV1ZXJ0IGRpZSBWZXJkYXV1bmcgKGvDtnJwZXJsaWNoKSwgcGVyc8O2bmxpY2hlIFN0w6Rya2UgKGdlaXN0aWcpLCBBdXNkZWhudW5nIChlbW90aW9uYWwpIHVuZCBXYWNoc3R1bSAoc3Bpcml0dWVsbCkgWnVzYXR6cHJvZ3JhbW1lOiBFbGVtZW50ZSwgTWVyaWRpYW5lIHVuZCBNZWRpdGF0aW9uXCIsXHJcbiAgICAgICAgXCI0LWNoYWtyYS1kZXNjcmlwdGlvblwiOiBcIkJlZmluZXQgc2ljaCBiZWltIEJydXN0YmVyZWljaCBVbmQgc3RlaHQgaW0gWnVzYW1tZW5oYW5nIG1pdCBkZXIgVGh5bXVzZHLDvHNlIHVuZCBkZW0gSW1tdW5zeXN0ZW0gSXN0IHZlcmFudHdvcnR3b3J0bGljaCBmw7xyIGtvcGxleGUgRW1vdGlvbmVuLCBNaXRnZWbDvGhsLCBiZWRpbmd1bmdzbG9zZSBMaWViZSwgQWJ3ZWlzdW5nLCBHbGVpY2hnZXdpY2h0IERhcyA0LiBDaGFrcmEgc3RldWVydCBkZW4gS3JlaXNsYXVmIChrw7ZycGVybGljaCksIGJlZGluZ3VuZ3Nsb3NlIExpZWJlIHp1IHNpY2ggc2VsYnN0IHVuZCBhbmRlcmVuIChlbW90aW9uYWwpLCBMZWlkZW5zY2hhZnQgKGdlaXN0aWcpIHVuZCBIaW5nYWJlIChzcGlyaXR1ZWxsKSBadXNhdHpwcm9ncmFtbWU6IEVsZW1lbnRlLCBNZXJpZGlhbmUgdW5kIE1lZGl0YXRpb25cIixcclxuICAgICAgICBcIjUtY2hha3JhLWRlc2NyaXB0aW9uXCI6IFwiQmVmaW5kZXQgc2ljaCBiZWltIEhhbHNiZXJlaWNoIFVuZCBzdGVodCBpbSBadXNhbW1lbmhhbmcgbWl0IGRlciBTY2hpbGRkcsO8c2UgSXN0IHZlcmFudHdvcnRsaWNoIGbDvHIgZGllIEtvbW11bmlrYXRpb24gdW5kIFdhY2hzdHVtIGR1cmNoIGRpZSBBdXNkcnVja3Nmb3JtIERhcyA1LiBDaGFrcmEgc3RldWVydCBkaWUgS29tbXVuaWthdGlvbiAoa8O2cnBlcmxpY2gpLCBVbmFiaMOkbmdpZ2tlaXQgKGVtb3Rpb25hbCksIGZpZXNzZW5kZSBHZWRhbmtlbiAoZ2Vpc3RpZyksIFNpY2hlcmhlaXRzZ2Vmw7xobCAoc3Bpcml0dWVsbCkgWnVzYXR6cHJvZ3JhbW1lOiBFbGVtZW50ZSwgTWVyaWRpYW5lIHVuZCBNZWRpdGF0aW9uXCIsXHJcbiAgICAgICAgXCI2LWNoYWtyYS1kZXNjcmlwdGlvblwiOiBcIkJlZmluZGV0IHNpY2ggendpc2NoZW4gZGVuIEF1Z2VuYnJhdWVuLCBhdWNoIGRhcyBEcml0dGUgQXVnZSBnZW5hbm50IFN0ZWh0IGltIFp1c2FtbWVuaGFuZyBtaXQgZGVyIFppcmJlbGRyw7xzZSwgd2VsY2hlIGbDvHIgZGllIE1lbGF0b25pbi1Qcm9kdWt0aW9uIChHbMO8Y2tzaG9ybW9uKSB6dXN0w6RuZGlnIGlzdCB1bmQgc3RldWVydCBkZW4gU2NobGFmcnl0aG11cyBEYXMgNi4gQ2hha3JhIHN0ZXVlcnRkaWUgQXVnZW4sIGRpZSBLb256ZW50cmF0aW9uc2bDpGhpZ2tlaXQgdW5kIGRhcyB2aXN1ZWxsZSBCZXd1c3N0c2VpbiAoa8O2cnBlcmxpY2gpLCBicmluZ3QgS2xhcmhlaXQgYXVmIGludHVpdGl2ZXIgRWJlbmUgWnVzYXR6cHJvZ3JhbW1lOiBFbGVtZW50ZSwgTWVyaWRpYW5lIHVuZCBNZWRpdGF0aW9uXCIsXHJcbiAgICAgICAgXCI3LWNoYWtyYS1kZXNjcmlwdGlvblwiOiBcIkJlZmluZGV0IHNpY2ggb2JlbiBhbSBLb3BmIGJldHJpZmZ0IGRpZSBIaXJuYW5oYW5nZHLDvHNlIChIeXBvcGh5c2UpLCBkaWUgbWl0IGRlbSBlbmRva3JpbmVuIFN5c3RlbSB1bmQgZGVtIHplbnRyYWxlbiBOZXJ2ZW5zeXN0ZW0ga29tbXVuaXppZXIgbWl0dGVscyBIeXBvdGhhbGFtdXMgICBEYXMgNy4gQ2hha3JhIHJlZ2VsdCB1bnNlcmUgaW5uZXJlIFdlaXNoZWl0LCB1bml2ZXJzZWxsZXMgQmV3dXNzdHNlaW4gdW5kIEVpbmhlaXQgWnVzYXR6cHJvZ3JhbW1lOiBFbGVtZW50ZSwgTWVyaWRpYW5lIHVuZCBNZWRpdGF0aW9uXCIsXHJcbiAgICAgICAgXCJwYWluLXJlbGllZi11cHBlclwiOiBcIlNDSE1FUlpMSU5ERVJVTkdcIixcclxuICAgICAgICBcImdyb3VuZGluZy11cHBlclwiOiBcIkVSRFVOR1wiLFxyXG4gICAgICAgIFwiZGlnZXN0aW9uLXVwcGVyXCI6IFwiVkVSREFVVU5HXCIsXHJcbiAgICAgICAgXCJsb3dlci1iYWNrYWNoZS11cHBlclwiOiBcIkxPV0VSIEJBQ0tBQ0hFXCIsXHJcbiAgICAgICAgXCJjaGlsZHJlbi11cHBlclwiOiBcIktJTkRFUlwiLFxyXG4gICAgICAgIFwiZmVtYWxlLWhvcm1vbmFsLWltYmFsYW5jZXMtdXBwZXJcIjogXCJXRUlCTElDSEVTIEhPUk1PTkVMTEVTIFVOR0xFSUNIR0VXSUNIVFwiLFxyXG4gICAgICAgIFwibWFsZS1ob3Jtb25hbC1pbWJhbGFuY2VzLXVwcGVyXCI6IFwiTUFFTk5MSUNIRVMgSE9STU9ORUxMRVMgVU5HTEVJQ0hHRVdJQ0hUXCIsXHJcbiAgICAgICAgXCJjb2xkLWZsdS11cHBlclwiOiBcIkVSS0FFTFRVTkcvR1JJUFBFXCIsXHJcbiAgICAgICAgXCJlYXItcHJvYmxlbXMtdXBwZXJcIjogXCJPSFJFTlBST0JMRU1FXCIsXHJcbiAgICAgICAgXCJpbnRlc3RpbmFsLWZsdS11cHBlclwiOiBcIkRBUk0gR1JJUFBFXCIsXHJcbiAgICAgICAgXCJlbmR1cmFuY2UtdXBwZXJcIjogXCJFTkRVUkFOQ0VcIixcclxuICAgICAgICBcIm11c2NsZXMtdXBwZXJcIjogXCJNVVNLRUxHRVdFQkVcIixcclxuICAgICAgICBcInRoeXJvaWQtdXBwZXJcIjogXCJTQ0hJTEREUlVFU0VcIixcclxuICAgICAgICBcInVyaW5hcnktc3lzdGVtLXVwcGVyXCI6IFwiSEFSTlNZU1RFTVwiLFxyXG4gICAgICAgIFwibG93ZXItY2hha3JhLWJhbGFuY2luZy11cHBlclwiOiBcIkxPV0VSIENIQUtSQSBCQUxBTkNJTkdcIixcclxuICAgICAgICBcInVwcGVyLWNoYWtyYS1iYWxhbmNpbmctdXBwZXJcIjogXCJVUFBFUiBDSEFLUkEgQkFMQU5DSU5HXCIsXHJcbiAgICAgICAgXCJtZWRpdGF0aW9uLWJhc2ljcy11cHBlclwiOiBcIk1FRElUQVpJT05FIEdSVU5ETEVHRU5EXCIsXHJcbiAgICAgICAgXCJtZWRpdGF0aW9uLW1lZGl1bS11cHBlclwiOiBcIk1FRElUQVRJT04gTUVESVVNXCIsXHJcbiAgICAgICAgXCJtZWRpdGF0aW9uLWFkdmFuY2VkLXVwcGVyXCI6IFwiTUVESVRBVElPTiBFUldFSVRFUlRcIixcclxuICAgICAgICBcImxpdmVyLWJhbGFuY2luZy11cHBlclwiOiBcIkxFQkVSQVVTVEFVU0NIXCIsXHJcbiAgICAgICAgXCJsaXZlci1mdW5jdGlvbi11cHBlclwiOiBcIkxFQkVSRlVOS1RJT05cIixcclxuICAgICAgICBcImtpZG5leS1mdW5jdGlvbi11cHBlclwiOiBcIk5JRVJFTkZVTktUSU9OXCIsXHJcbiAgICAgICAgXCJsYXJnZS1pbnRlc3RpbmUtYmFsYW5jaW5nLXVwcGVyXCI6IFwiR1JPw59FIElOVEVTVElOIEJBTEFOQ0lOR1wiLFxyXG4gICAgICAgIFwicGVyaWNhcmRpdW0tZmxvdy11cHBlclwiOiBcIlBFUklDQVJESVVNLUZMw5xTU0VcIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0cy11cHBlcjFcIjpcIklNTVVOU1lTVEVNXCIsXHJcbiAgICAgICAgXCJyb3V0aW5lLXBldHMtdXBwZXIyXCI6XCJERVNJTlRPWElaSUVSVU5HXCIsXHJcbiAgICAgICAgXCJyb3V0aW5lLXBldHMtdXBwZXIzXCI6XCJESUdFU1RJVkUgU1lTVEVNXCIsXHJcbiAgICAgICAgXCJyb3V0aW5lLXBldHMtdXBwZXI0XCI6XCJLTk9DSEVOXCIsXHJcbiAgICAgICAgXCJyb3V0aW5lLXBldHMtdXBwZXI1XCI6XCJIQVVUXCIsXHJcbiAgICAgICAgXCJyb3V0aW5lLXBldHMtdXBwZXI2XCI6XCJNVVNLRUxOXCIsXHJcbiAgICAgICAgXCJyb3V0aW5lLXBldHMtdXBwZXI3XCI6XCJTVFJFU1MgQkVGUkVJVU5HXCIsXHJcbiAgICAgICAgXCJyb3V0aW5lLXBldHMtdXBwZXI4XCI6XCJBVEVNU1lTVEVNXCIsXHJcbiAgICAgICAgXCJyb3V0aW5lLXBldHgtdXBwZXIxXCI6XCJJTU1VTlNZU1RFTVwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXR4LXVwcGVyMlwiOlwiREVTSU5UT1hJWklFUlVOR1wiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXR4LXVwcGVyM1wiOlwiRElHRVNUSVZFIFNZU1RFTVwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXR4LXVwcGVyNFwiOlwiS05PQ0hFTlwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXR4LXVwcGVyNVwiOlwiSEFVVFwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXR4LXVwcGVyNlwiOlwiTVVTS0VMTlwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXR4LXVwcGVyN1wiOlwiU1RSRVNTIEJFRlJFSVVOR1wiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXR4LXVwcGVyOFwiOlwiQVRFTVNZU1RFTVwiLFxyXG4gICAgICAgIFwicGV0c3MtcHJvZ3JhbS11cHBlclwiOlwiS0xFSU5FIFRJRVJFXCIsXHJcbiAgICAgICAgXCJwZXRzcy1wcm9ncmFtLWRlc2NyaXB0aW9uXCI6XCLigKJEaWVzZXMgUHJvZ3JhbW0gaW4gS29tYmluYXRpb24gbWl0IGRlbiBhbmRlcmVuLCBoaWxmdCBJaHJlbSBIYXVzdGllciAoS2F0emUsIGtsZWluZW0gSHVuZCBvZGVyIGtsZWluZW0gU8OkdWdldGllcikgc2ljaCB2aWVsIHNjaG5lbGxlciB2b24gVmVybGV0enVuZ2VuLCBLcmFua2hlaXQgb2RlciBUcmF1bWFzIGRlciBUcmVubnVuZyBvZGVyIFJlaXNlbiB6dSBlcmhvbGVuLlwiLFxyXG4gICAgICAgIFwicGV0c3gtcHJvZ3JhbS11cHBlclwiOlwiR1JPU1NFIFRJRVJFXCIsXHJcbiAgICAgICAgXCJwZXRzeC1wcm9ncmFtLWRlc2NyaXB0aW9uXCI6XCLigKJEaWVzZXMgUHJvZ3JhbW0gaW4gS29tYmluYXRpb24gbWl0IGFuZGVyZW4gaXN0IGFuZ2V6ZWlndCwgdW0gSWhyZW4gZ3LDtsOfZXJlbiBIYXVzdGllcmVuIChncm/Dn2UgSHVuZGUsIFBmZXJkZSB1bmQgYW5kZXJlIFPDpHVnZXRpZXJlKXp1IGhlbGZlbiwgZGllICBFcmhvbHVuZ3N6ZWl0IG5hY2ggVmVybGV0enVuZ2VuLCBLcmFua2hlaXRlbiBvZGVyIFRyYXVtYXMgZHVyY2ggVHJlbm51bmcgb2RlciBSZWlzZW4genUgdmVya3Vlcnplbi5cIlxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL2dlcm1hbi10ZXh0cy50cyIsImV4cG9ydCB2YXIgRGF0YSA9IHsgR3JvdXBzIDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3BhaW4tcmVsaWVmLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGFpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZXJ2b3VzX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlZ2VuZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2luanVyeS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdzdHJlc3MtcmVsaWVmLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaW1tdW5lLXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNpbnVzX0Nhdml0aWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdkZXRveGlmaWNhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkludGVzdGluYWxfRmxvcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2hlYWRhY2hlLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhZGFjaGVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlYWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZ3JvdW5kaW5nLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFYXJ0aF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSb290X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZW5lcmd5LWJvb3N0ZXItdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQm9vc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRXhoYXVzdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRyZW5hbF9HbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQnJvd19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ0pFVC1MQUcnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJKZXQtTGFnL0NsaW1hdGVfQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVhcnRoX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ0pFVC1MQUcnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJKZXQtTGFnL0NsaW1hdGVfQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFeGhhdXN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdjb25jZW50cmF0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29uY2VudHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlzY2Vybm1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdkaWdlc3Rpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWluZXJhbF9NZXRhYm9saWNfQWN0aXZpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkludGVzdGluYWxfRmxvcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncmVzcGlyYXRvcnktc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2xvd2VyLWJhY2thY2hlLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQmFja2FjaGVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSb290X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ25lY2stc2hvdWxkZXItdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZWNrL1Nob3VsZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTXVzY2xlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkdhbGxibGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3NsZWVwLWVuaGFuY2VyLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2xlZXBfRW5oYW5jZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdjaGlsZHJlbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNoaWxkX0RldmVsb3BtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCb25lX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZXJ2b3VzX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZmVtYWxlLWhvcm1vbmFsLWltYmFsYW5jZXMtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGZW1hbGVfSG9ybW9uZV9CYWxhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbWFsZS1ob3Jtb25hbC1pbWJhbGFuY2VzLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWFsZV9Ib3Jtb25lX0JhbGFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2NvbGQtZmx1LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRmx1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2NvbnN0aXBhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbnN0aXBhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxhcmdlX0ludGVzdGluZV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdkaWFycmhlYS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpYXJyaGVhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdlYXItcHJvYmxlbXMtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBdWRpdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRyaXBsZV9XYXJtZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2V5ZXNpZ2h0LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRXllc2lnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2ludGVzdGluYWwtZmx1LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRmx1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRobGV0ZScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2VuZXJneS1ib29zdGVyLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVyaWNhcmRpdW1fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRobGV0ZScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JlZ2VuZXJhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlZ2VuZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlZpdGFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNpbnVzX0Nhdml0aWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdpbmp1cnktdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTXVzY2xlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBhaW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdwYWluLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBhaW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdiYWNrYWNoZS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJhY2thY2hlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZWNrL1Nob3VsZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJWZXJ0ZWJyYWVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkdhbGxibGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtdXNjbGVzLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTXVzY2xlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlZ2VuZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaW1tdW5lLXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnYW50aS1hZ2luZy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQW50aV9BZ2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29ubmVjdGl2ZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3dlaWdodC1jb250cm9sLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiV2VpZ2h0X0NvbnRyb2xcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRyaXBsZV9XYXJtZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzcGEnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdkZXRveGlmaWNhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkludGVzdGluYWxfRmxvcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNaW5lcmFsX01ldGFib2xpY19BY3Rpdml0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzcGEnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdza2luLWNvbmRpdGlvbnMtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNraW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaGFpci1ncm93dGgtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhhaXJfR3Jvd3RoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzcGEnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsb3ctcGh5c2ljYWwtZHJpdmUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRyZW5hbF9HbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTG93X1BoeXNpY2FsX0RyaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbG93LW1lbnRhbC1kcml2ZS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxvd19NZW50YWxfRHJpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZXJ2b3VzX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0cmVzcyByZWxpZWYnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdzdHJlc3MtcmVsaWVmLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSm95XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3ZpdGFsaXR5LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkpveVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlZpdGFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3NsZWVwLWVuaGFuY2VyLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2xlZXBfRW5oYW5jZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlYWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2VuZXJneS1ib29zdGVyLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRyZW5hbF9HbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRXhoYXVzdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2h5cGVydGVuc2lvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIeXBlcnRlbnNpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfRnVuY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3RoeXJvaWQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRoeXJvaWRfR2xhbmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVGhyb2F0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0cmVzcyByZWxpZWYnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsb3ctbWVudGFsLWRyaXZlLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTG93X01lbnRhbF9Ecml2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JlZ2VuZXJhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlZ2VuZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAndml0YWxpdHktdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQm9vc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRyZW5hbF9HbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVml0YWxpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdqb3ktdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkpveVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWV0YWxfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdzbGVlcC1lbmhhbmNlci11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2xlZXBfRW5oYW5jZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2hlYXJ0LWZ1bmN0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRmlyZV9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9GdW5jdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3Jlc3BpcmF0b3J5LXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2ludXNfQ2F2aXRpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdoeXBlcnRlbnNpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSHlwZXJ0ZW5zaW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdnbHVjb3NlLW1ldGFib2xpYy1kaXNvcmRlcnMtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2x1Y29zZV9NZXRhYm9saWNfRGlzb3JkZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTcGxlZW5fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaGVtb3JyaG9pZHMtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZW1vcnJob2lkc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29uc3RpcGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSb290X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd1cmluYXJ5LXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVXJpbmFyeV9TeXN0ZW0vQ3lzdGl0aXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlVyaW5hcnlfQmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdjb2xkLWZsdS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZsdVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3BhaW4tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZXJ2b3VzX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGFpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnY2hha3JhIGJhbGFuY2luZycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2xvd2VyLWNoYWtyYS1iYWxhbmNpbmctdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSb290X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU29sYXJfUGxleHVzX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWFydGhfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjaGFrcmEgYmFsYW5jaW5nJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAndXBwZXItY2hha3JhLWJhbGFuY2luZy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVGhyb2F0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQnJvd19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNyb3duX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjaGFrcmEgYmFsYW5jaW5nJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbWVkaXRhdGlvbi1iYXNpY3MtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNZWRpdGF0aW9uXzFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTb2xhcl9QbGV4dXNfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2NoYWtyYSBiYWxhbmNpbmcnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtZWRpdGF0aW9uLW1lZGl1bS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUaHJvYXRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjaGFrcmEgYmFsYW5jaW5nJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbWVkaXRhdGlvbi1hZHZhbmNlZC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQnJvd19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNyb3duX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSm95XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZWFydGgtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlN0b21hY2hfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNwbGVlbl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWFydGhfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTXVzY2xlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZmlyZS1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNtYWxsX0ludGVzdGluZV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRmlyZV9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdmaXJlLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRmlyZV9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtZXRhbC1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGFyZ2VfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNZXRhbF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTa2luX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd3YXRlci1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJVcmluYXJ5X0JsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIldhdGVyX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3dvb2QtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJHYWxsYmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiV29vZF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFeWVzaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2xpdmVyLWZ1bmN0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkdhbGxibGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU29sYXJfUGxleHVzX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2hlYXJ0LWZ1bmN0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNtYWxsX0ludGVzdGluZV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdraWRuZXktZnVuY3Rpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlVyaW5hcnlfQmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRXhoYXVzdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbGFyZ2UtaW50ZXN0aW5lLWJhbGFuY2luZy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxhcmdlX0ludGVzdGluZV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU29sYXJfUGxleHVzX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncGVyaWNhcmRpdW0tZmxvdy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUcmlwbGVfV2FybWVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3N0b21hY2gtbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTdG9tYWNoX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTcGxlZW5fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTb2xhcl9QbGV4dXNfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHMtdXBwZXIxJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzcycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0cy11cHBlcjInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGFyZ2VfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHMtdXBwZXIzJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkludGVzdGluYWxfRmxvcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzcycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0cy11cHBlcjQnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCb25lX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHNzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyNScsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNraW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29ubmVjdGl2ZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzcycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0cy11cHBlcjYnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW5qdXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHMtdXBwZXI3JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzcycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0cy11cHBlcjgnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzeCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0eC11cHBlcjEnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHN4JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyMicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzeCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0eC11cHBlcjMnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHN4JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyNCcsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW5qdXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHgtdXBwZXI1JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2tpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHN4JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyNicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzeCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0eC11cHBlcjcnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHN4JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyOCcsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBQcm9ncmFtcyA6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2FkZGljdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjA1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYWRkaWN0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdhZHJlbmFsLWdsYW5kLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJBZHJlbmFsX0dsYW5kXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjA3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYWRyZW5hbC1nbGFuZC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnYW50aS1hZ2luZy11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQW50aV9BZ2luZ1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMTowMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2FudGktYWdpbmctZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdhdWRpdG9yeS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQXVkaXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjMxXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYXVkaXRvcnktZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdiYWNrYWNoZS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQmFja2FjaGVcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MzBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdiYWNrYWNoZS1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2JvbmVzLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJCb25lX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6MDRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdib25lcy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnY2hpbGQtZGV2ZWxvcGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJDaGlsZF9EZXZlbG9wbWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzo1MFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NoaWxkLWRldmVsb3BlbWVudC1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2NpcmN1bGF0b3J5LXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjA2XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnY2lyY3VsYXRvcnktc3lzdGVtLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnY29uY2VudHJhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29uY2VudHJhdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMToxOVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NvbmNlbnRyYXRpb24tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2Nvbm5lY3RpdmUtdGlzc3VlLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6NTRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjb25uZWN0aXZlLXRpc3N1ZS1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2NvbnN0aXBhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29uc3RpcGF0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjQ5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnY29uc3RpcGF0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdkZXRveGlmaWNhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkZXRveGlmaWNhdGlvbi1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2RpYXJyaGVhLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJEaWFycmhlYVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzo1OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2RpYXJyaGVhLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdkaWdlc3RpdmUtc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjQxXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGlnZXN0aXZlLXN5c3RlbS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZGlzY2Vybm1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkRpc2Nlcm5tZW50XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjM3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGlzY2Vybm1lbnQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2VuZXJneS1iYWxhbmNpbmctdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6NTVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdlbmVyZ3ktYmFsYW5jaW5nLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZW5lcmd5LWJvb3N0ZXItdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjUzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZW5lcmd5LWJvb3N0ZXItZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogXCJFLVNNT0dcIixcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6NTFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdlLXNtb2ctZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2V4aGF1c3Rpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkV4aGF1c3Rpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6NTlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdleGhhdXN0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdleWVzaWdodC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRXllc2lnaHRcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MTFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdleWVzaWdodC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZmVtYWxlLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJGZW1hbGVfSG9ybW9uZV9CYWxhbmNlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjE3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmVtYWxlLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdmbHUtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkZsdVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzo1OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZsdS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2dsdWNvc2UtbWV0YWJvbGljLWRpc29yZGVycy11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiR2x1Y29zZV9NZXRhYm9saWNfRGlzb3JkZXJzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjI4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZ2x1Y29zZS1tZXRhYm9saWMtZGlzb3JkZXJzLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaGFpci1ncm93dGgtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkhhaXJfR3Jvd3RoXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE5OjA3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaGFpci1ncm93dGgtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2hlYWRhY2hlLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFkYWNoZVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxODozOFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2hlYWRhY2hlLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdoZWFydC1mdW5jdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfRnVuY3Rpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6MzBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdoZWFydC1mdW5jdGlvbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2hlbW9ycmhvaWRzLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJIZW1vcnJob2lkc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMToxM1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2hlbW9ycmhvaWRzLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdoeXBlcnRlbnNpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkh5cGVydGVuc2lvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxODo1M1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2h5cGVydGVuc2lvbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaW1tdW5lLXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDo1MFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ltbXVuZS1zeXN0ZW0tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2luanVyeS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSW5qdXJ5XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjQ2XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaW5qdXJ5LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdpbnRlc3RpbmFsLWZsb3JhLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjU4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaW50ZXN0aW5hbC1mbG9yYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnam9pbnRzLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJKb2ludHNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6MDdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdqb2ludHMtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2pveS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSm95XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIxOjA0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnam95LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6IFwiSkVULUxBR1wiLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkpldC1MYWcvQ2xpbWF0ZV9DaGFuZ2VcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MTRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdqZXQtbGFnLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsb3ctbWVudGFsLWRyaXZlLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJMb3dfTWVudGFsX0RyaXZlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjQ5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbG93LW1lbnRhbC1kcml2ZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbG93LXBoeXNpY2FsLWRyaXZlLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJMb3dfUGh5c2ljYWxfRHJpdmVcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6NDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdsb3ctcGh5c2ljYWwtZHJpdmUtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2x5bXBoYXRpYy1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MDRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdseW1waGF0aWMtc3lzdGVtLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtYWxlLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJNYWxlX0hvcm1vbmVfQmFsYW5jZVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMjozMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21hbGUtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ21lZGl0YXRpb24tMS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTWVkaXRhdGlvbl8xXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjMzOjE1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbWVkaXRhdGlvbi0xLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtZWRpdGF0aW9uLTItdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fMlwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyOTo0M1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21lZGl0YXRpb24tMi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbWVkaXRhdGlvbi0zLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJNZWRpdGF0aW9uXzNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMjI6NDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtZWRpdGF0aW9uLTMtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ21pbmVyYWwtbWV0YWJvbGljLWFjdGl2aXR5LXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJNaW5lcmFsX01ldGFib2xpY19BY3Rpdml0eVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzoyNVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21pbmVyYWwtbWV0YWJvbGljLWFjdGl2aXR5LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtdXNjbGUtdGlzc3VlLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTo1OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ211c2NsZS10aXNzdWUtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ25lY2stc2hvdWxkZXItdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk5lY2svU2hvdWxkZXJcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MTZcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICduZWNrLXNob3VsZGVyLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICduZXJ2b3VzLXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTk6MTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICduZXJ2b3VzLXN5c3RlbS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncGVhY2UtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlBlYWNlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIyOjA4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAncGVhY2UtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3BhaW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlBhaW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNToxOFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3BhaW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JlZ2VuZXJhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjEyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAncmVnZW5lcmF0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyZWxheGF0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE5OjU1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAncmVsYXhhdGlvbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncmVzcGlyYXRvcnktc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6NTJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdyZXNwaXJhdG9yeS1zeXN0ZW0tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3NpbnVzLWNhdml0aWVzLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJTaW51c19DYXZpdGllc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTozM1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3NpbnVzLWNhdml0aWVzLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdza2luLWNvbmRpdGlvbnMtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlNraW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTo1MFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3NraW4tY29uZGl0aW9ucy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnc2xlZXAtZW5oYW5jZXItdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlNsZWVwX0VuaGFuY2VyXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE5OjU4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc2xlZXAtZW5oYW5jZXItZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3N0cmVzcy1yZWxpZWYtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjU1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc3RyZXNzLXJlbGllZi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAndGh5cm9pZC1nbGFuZHMtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlRoeXJvaWRfR2xhbmRzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjUzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAndGh5cm9pZC1nbGFuZHMtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd1cmluYXJ5LXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJVcmluYXJ5X1N5c3RlbS9DeXN0aXRpc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzozOVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3VyaW5hcnktZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd2ZXJ0ZWJyYWUtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlZlcnRlYnJhZVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMjo1M1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3ZlcnRlYnJhZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAndml0YWxpdHktdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlZpdGFsaXR5XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjAwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAndml0YWxpdHktZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3dlaWdodC1jb250cm9sLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJXZWlnaHRfQ29udHJvbFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDo1MFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3dlaWdodC1jb250cm9sLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdlYXJ0aC1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJFYXJ0aF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjU1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZWFydGgtZWxlbWVudC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnd2F0ZXItZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiV2F0ZXJfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzoyMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3dhdGVyLWVsZW1lbnQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2ZpcmUtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRmlyZV9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjA1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmlyZS1lbGVtZW50LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtZXRhbC1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJNZXRhbF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEyOjM5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbWV0YWwtZWxlbWVudC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnd29vZC1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJXb29kX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6MDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd3b29kLWVsZW1lbnQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3N0b21hY2gtbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlN0b21hY2hfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6MTVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzdG9tYWNoLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdzcGxlZW4tcGFuY3JlYXMtbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlNwbGVlbl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTozN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3NwbGVlbi1wYW5jcmVhcy1tZXJpZGlhbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaGVhcnQtbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjQ1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaGVhcnQtbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3NtYWxsLWludGVzdGluZS1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU21hbGxfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjI1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc21hbGwtaW50ZXN0aW5lLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdwZXJpY2FyZGl1bS1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVyaWNhcmRpdW1fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMjE6NTVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdwZXJpY2FyZGl1bS1tZXJpZGlhbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAndHJpcGxlLXdhcm1lci1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzoyMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3RyaXBsZS13YXJtZXItbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2x1bmctbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MzhcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdsdW5nLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsYXJnZS1pbnRlc3RpbmUtbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkxhcmdlX0ludGVzdGluZV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzo1M1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2xhcmdlLWludGVzdGluZS1tZXJpZGlhbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAna2lkbmV5LW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MjdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdraWRuZXktbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3VyaW5hcnktYmxhZGRlci1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVXJpbmFyeV9CbGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjE5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAndXJpbmFyeS1ibGFkZGVyLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsaXZlci1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MTFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdsaXZlci1tZXJpZGlhbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZ2FsbGJsYWRkZXItbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkdhbGxibGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIwOjM5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZ2FsbGJsYWRkZXItbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogXCJmaXJzdC1jaGFrcmEtdXBwZXJcIixcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJSb290X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTo0OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzEtY2hha3JhLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6IFwic2Vjb25kLWNoYWtyYS11cHBlclwiLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcyLWNoYWtyYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiBcInRoaXJkLWNoYWtyYS11cHBlclwiLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6NTFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICczLWNoYWtyYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiBcImZvdXJ0aC1jaGFrcmEtdXBwZXJcIixcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTg6MTZcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICc0LWNoYWtyYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiBcImZpZnRoLWNoYWtyYS11cHBlclwiLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlRocm9hdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6NTlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICc1LWNoYWtyYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiBcInNpeHRoLWNoYWtyYS11cHBlclwiLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjEzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNi1jaGFrcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogXCJzZXZlbnRoLWNoYWtyYS11cHBlclwiLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkNyb3duX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzo0NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzctY2hha3JhLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdwZXRzcy1wcm9ncmFtLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMTo1MFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3BldHNzLXByb2dyYW0tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3BldHN4LXByb2dyYW0tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEyOjUwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAncGV0c3gtcHJvZ3JhbS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL29mZmxpbmVfZGF0YS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIEV2ZW50cywgQ29udGVudCB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29mZmxpbmVfZGF0YSc7XG5pbXBvcnQgeyBSb3V0aW5lc1Byb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3JvdXRpbmVzL3JvdXRpbmVzJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XG5pbXBvcnQgeyBQcm9ncmFtUGFnZSB9IGZyb20gJy4uL3Byb2dyYW0vcHJvZ3JhbSc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFByb2dyYW1zUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1wcm9ncmFtcycsXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3JhbXMuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyYW1zUGFnZSB7XG4gIEBWaWV3Q2hpbGQoQ29udGVudCkgY29udGVudDogQ29udGVudDtcbiAgcHVibGljIHByZWRlZmluZWRQcm9ncmFtcyA6IGFueTtcbiAgcHVibGljIHByb2dyYW1zIDogYW55O1xuICBwdWJsaWMgcHJvZ3JhbSA6IG51bWJlcjtcbiAgcHVibGljIHByb2dyYW1OYW1lMSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1OYW1lMiA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1OYW1lMyA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1OYW1lNCA6IHN0cmluZztcbiAgcHVibGljIGJhc2ljQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIGJ1c2luZXNzVHJhdmVsQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIGZhbWlsaXlCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgYXRobGV0ZUJ1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBzcGFCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgc3RyZXNzQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIHNlbmlvckJ1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBjaGFrcmFCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgZWxlbWVudHNCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgcGV0c3NCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgcGV0c3hCdXR0b24gOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHVibGljIHJvdXRpbmVzOiBSb3V0aW5lc1Byb3ZpZGVyLFxuICAgIHB1YmxpYyBldmVudHM6IEV2ZW50cykge1xuICAgICAgdGhpcy5wcm9ncmFtID0gbmF2UGFyYW1zLmdldCgnYnViYmxlJyk7XG5cbiAgICAgIHRoaXMuZXZlbnRzLnN1YnNjcmliZSgnYWRkMVByb2dyYW1FdmVudCcsIChwcm9ncmFtTnVtYmVyLCBwcm9ncmFtTmFtZSwgcHJvZ3JhbVJ1bm5pbmdUaW1lLCBwcm9ncmFtQXBpTmFtZSkgPT4ge1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtTnVtYmVyO1xuICAgICAgICB0aGlzLmFkZDFQcm9ncmFtKHByb2dyYW1OYW1lLCBwcm9ncmFtUnVubmluZ1RpbWUsIHByb2dyYW1BcGlOYW1lKTtcbiAgICAgICAgdGhpcy5uYXZDdHJsLnBvcCgpO1xuICAgICAgfSk7XG4gIH1cbiAgaW9uVmlld0RpZExlYXZlKCl7XG4gICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleVNjcm9sbFRvcCwgdGhpcy5jb250ZW50LmdldENvbnRlbnREaW1lbnNpb25zKCkuc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCl7XG4gICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5Q3VycmVudFByb2dyYW0pLnRoZW4oKHByb2dyYW0pPT57XG4gICAgICAgIHRoaXMuZ2V0UHJvZ3JhbXMocHJvZ3JhbSAhPSBudWxsID8gcHJvZ3JhbSA6ICdiYXNpYycpO1xuICAgICAgfSlcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBEYXRhLlByb2dyYW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHRleHQgPSBHZXJtYW5UZXh0c1tEYXRhLlByb2dyYW1zW2ldLm5hbWVdO1xuICAgICAgICBEYXRhLlByb2dyYW1zW2ldLnRleHROYW1lID0gdGV4dCA/IHRleHQgOiBEYXRhLlByb2dyYW1zW2ldLm5hbWU7XG4gICAgICB9XG4gICAgICB0aGlzLnByb2dyYW1zID0gRGF0YS5Qcm9ncmFtcztcblxuICAgICAgdGhpcy5yb3V0aW5lcy5nZXRLZXkoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUxKS50aGVuKHZhbCA9PiB7XG4gICAgICAgIGlmKHRoaXMucHJvZ3JhbSAhPSAxICYmIHZhbCAhPSBudWxsICYmIHZhbC5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lMSA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTEgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnJvdXRpbmVzLmdldEtleShDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTIpLnRoZW4odmFsID0+IHtcbiAgICAgICAgaWYodGhpcy5wcm9ncmFtICE9IDIgJiYgdmFsICE9IG51bGwgJiYgdmFsLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUyID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lMiA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMucm91dGluZXMuZ2V0S2V5KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMykudGhlbih2YWwgPT4ge1xuICAgICAgICBpZih0aGlzLnByb2dyYW0gIT0gMyAmJiB2YWwgIT0gbnVsbCAmJiB2YWwubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTMgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUzID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5yb3V0aW5lcy5nZXRLZXkoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGU0KS50aGVuKHZhbCA9PiB7XG4gICAgICAgIGlmKHRoaXMucHJvZ3JhbSAhPSA0ICYmIHZhbCAhPSBudWxsICYmIHZhbC5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lNCA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTQgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleVNjcm9sbFRvcCkudGhlbigoc2Nyb2xsKT0+e1xuICAgICAgICAgIHRoaXMuY29udGVudC5zY3JvbGxUbygwLCBzY3JvbGwsIDEwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTAwKTtcbiAgfVxuXG4gIHNlbGVjdFByZVNldFByb2dyYW0oY2F0ZWdvcnkpe1xuICAgICAgdGhpcy5nZXRQcm9ncmFtcyhjYXRlZ29yeSk7XG4gIH1cblxuICBnZXRQcm9ncmFtcyhjYXRlZ29yeSl7XG4gICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleUN1cnJlbnRQcm9ncmFtLCBjYXRlZ29yeSk7XG4gICAgdGhpcy5iYXNpY0J1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuYnVzaW5lc3NUcmF2ZWxCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmZhbWlsaXlCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmF0aGxldGVCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnNwYUJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuc3RyZXNzQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5zZW5pb3JCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmNoYWtyYUJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudHNCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnBldHNzQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5wZXRzeEJ1dHRvbiA9IGZhbHNlO1xuICAgIHN3aXRjaChjYXRlZ29yeSl7XG4gICAgICBjYXNlICdiYXNpYyc6XG4gICAgICAgIHRoaXMuYmFzaWNCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2J1c2luZXNzIGFuZCB0cmF2ZWwnOlxuICAgICAgICB0aGlzLmJ1c2luZXNzVHJhdmVsQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmYW1pbHknOlxuICAgICAgICB0aGlzLmZhbWlsaXlCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2F0aGxldGUnOlxuICAgICAgICB0aGlzLmF0aGxldGVCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NwYSc6XG4gICAgICAgIHRoaXMuc3BhQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJlc3MgcmVsaWVmJzpcbiAgICAgICAgdGhpcy5zdHJlc3NCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Nlbmlvcic6XG4gICAgICAgIHRoaXMuc2VuaW9yQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjaGFrcmEgYmFsYW5jaW5nJzpcbiAgICAgICAgdGhpcy5jaGFrcmFCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VsZW1lbnRzJzpcbiAgICAgICAgdGhpcy5lbGVtZW50c0J1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGV0c3MnOlxuICAgICAgICB0aGlzLnBldHNzQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwZXRzeCc6XG4gICAgICAgIHRoaXMucGV0c3hCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGdyb3VwcyA9IFtdO1xuICAgIHZhciBncm91cEluZGV4ID0gMDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgRGF0YS5Hcm91cHMubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIGdyb3VwID0gRGF0YS5Hcm91cHNbaV07XG4gICAgICBpZihncm91cC5jYXRlZ29yeSA9PSBjYXRlZ29yeSl7XG4gICAgICAgIGxldCB0ZXh0ID0gR2VybWFuVGV4dHNbZ3JvdXAubmFtZV07XG4gICAgICAgIGdyb3VwLnRleHROYW1lID0gdGV4dCA/IHRleHQgOiBncm91cC5uYW1lO1xuICAgICAgICBncm91cHNbZ3JvdXBJbmRleF0gPSBncm91cDtcbiAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGdyb3VwLnByb2dyYW1zLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICB2YXIgcHJvZ3JhbSA9IGdyb3VwLnByb2dyYW1zW2pdO1xuICAgICAgICAgIGdyb3VwLnByb2dyYW1zW2pdID0gdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtKHByb2dyYW0uYXBpTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXBJbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByZWRlZmluZWRQcm9ncmFtcyA9IGdyb3VwcztcbiAgfVxuXG4gIGFkZFByb2dyYW1zKHJvdXRpbmVOYW1lLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zLCBwcm9ncmFtNCl7XG4gICAgdGhpcy5uYXZDdHJsLnBvcCgpO1xuICAgIHZhciBidWJibGVOYW1lcyA9IHRoaXMucm91dGluZXMuYWRkUHJvZ3JhbXMocm91dGluZU5hbWUsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMsIHByb2dyYW00KTtcbiAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKFwic2hhcmVzQnViYmxlc1wiLCBidWJibGVOYW1lcyk7XG4gIH1cblxuICBhZGQxUHJvZ3JhbShwcm9ncmFtTmFtZSwgcHJvZ3JhbVJ1bm5pbmdUaW1lLCBwcm9ncmFtQXBpTmFtZSl7XG4gICAgdGhpcy5yb3V0aW5lcy5hZGRQcm9ncmFtVG9Sb3V0aW5lKHRoaXMucHJvZ3JhbSwgJycsIHByb2dyYW1OYW1lLCBwcm9ncmFtUnVubmluZ1RpbWUsIHByb2dyYW1BcGlOYW1lKTtcblxuICAgIHRoaXMucHJvZ3JhbU5hbWUxID0gdGhpcy5wcm9ncmFtID09IDEgPyBwcm9ncmFtTmFtZSA6ICh0aGlzLnByb2dyYW1OYW1lMS5sZW5ndGggPiAwID8gdGhpcy5wcm9ncmFtTmFtZTEgOiAnJyk7XG4gICAgdGhpcy5wcm9ncmFtTmFtZTIgPSB0aGlzLnByb2dyYW0gPT0gMiA/IHByb2dyYW1OYW1lIDogKHRoaXMucHJvZ3JhbU5hbWUyLmxlbmd0aCA+IDAgPyB0aGlzLnByb2dyYW1OYW1lMiA6ICcnKTtcbiAgICB0aGlzLnByb2dyYW1OYW1lMyA9IHRoaXMucHJvZ3JhbSA9PSAzID8gcHJvZ3JhbU5hbWUgOiAodGhpcy5wcm9ncmFtTmFtZTMubGVuZ3RoID4gMCA/IHRoaXMucHJvZ3JhbU5hbWUzIDogJycpO1xuICAgIHRoaXMucHJvZ3JhbU5hbWU0ID0gdGhpcy5wcm9ncmFtID09IDQgPyBwcm9ncmFtTmFtZSA6ICh0aGlzLnByb2dyYW1OYW1lNC5sZW5ndGggPiAwID8gdGhpcy5wcm9ncmFtTmFtZTQgOiAnJyk7XG5cbiAgICB0aGlzLnJvdXRpbmVzLnNldFByb2dyYW1zKHRoaXMucHJvZ3JhbU5hbWUxLCB0aGlzLnByb2dyYW1OYW1lMiwgdGhpcy5wcm9ncmFtTmFtZTMsIHRoaXMucHJvZ3JhbU5hbWU0KTtcblxuICAgIHZhciBidWJibGVOYW1lcyA9IFtcbiAgICAgIHRoaXMucHJvZ3JhbU5hbWUxLFxuICAgICAgdGhpcy5wcm9ncmFtTmFtZTIsXG4gICAgICB0aGlzLnByb2dyYW1OYW1lMyxcbiAgICAgIHRoaXMucHJvZ3JhbU5hbWU0XG4gICAgXTtcbiAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKFwic2hhcmVzQnViYmxlc1wiLCBidWJibGVOYW1lcyk7XG4gICAgdGhpcy5uYXZDdHJsLnBvcCgpO1xuICB9XG5cbiAgbW9yZVByb2dyYW1JbmZvKG5hbWUsIHJ1blRpbWUsIGRlc2NyaXB0aW9uLCBhcGlOYW1lKXtcbiAgICB0aGlzLm5hdkN0cmwucHVzaChQcm9ncmFtUGFnZSwgeyBwcm9ncmFtTnVtYmVyOiB0aGlzLnByb2dyYW0sIG5hbWU6IG5hbWUsIHJ1blRpbWU6IHJ1blRpbWUsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgYXBpTmFtZTogYXBpTmFtZSB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3Byb2dyYW1zL3Byb2dyYW1zLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IEdlcm1hblRleHRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2VybWFuLXRleHRzJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgUHJvZ3JhbVBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtcHJvZ3JhbScsXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3JhbS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3JhbVBhZ2Uge1xuICBwdWJsaWMgcHJvZ3JhbU5hbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtUnVubmluZ1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtRGVzY3JpcHRpb24gOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtQXBpTmFtZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1OdW1iZXIgOiBudW1iZXI7XG4gIHB1YmxpYyBwcm9ncmFtUmVhbE5hbWUgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHVibGljIHN0b3JhZ2U6IFN0b3JhZ2UsXG4gICAgcHVibGljIGV2ZW50czogRXZlbnRzKSB7XG4gIH1cbiAgaW9uVmlld0RpZExvYWQoKXtcbiAgICB0aGlzLnByb2dyYW1SZWFsTmFtZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnbmFtZScpO1xuICAgIHZhciBwcm9ncmFtVHJhbnNsYXRlTmFtZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnbmFtZScpO1xuICAgIGlmKHRoaXMuaXNOYW1lT25BcnJheShDb25zdGFudHMuc2hvcnRUaXRsZXMsIHByb2dyYW1UcmFuc2xhdGVOYW1lKSlcbiAgICAgIHByb2dyYW1UcmFuc2xhdGVOYW1lID0gcHJvZ3JhbVRyYW5zbGF0ZU5hbWUucmVwbGFjZSgnLXVwcGVyJywgJy1zaG9ydCcpO1xuICAgIHRoaXMucHJvZ3JhbU5hbWUgPSB0eXBlb2YgR2VybWFuVGV4dHNbcHJvZ3JhbVRyYW5zbGF0ZU5hbWVdID09PSAndW5kZWZpbmVkJyA/IHByb2dyYW1UcmFuc2xhdGVOYW1lIDogR2VybWFuVGV4dHNbcHJvZ3JhbVRyYW5zbGF0ZU5hbWVdO1xuICAgIHRoaXMucHJvZ3JhbVJ1bm5pbmdUaW1lID0gdHlwZW9mIEdlcm1hblRleHRzW3RoaXMubmF2UGFyYW1zLmdldCgncnVuVGltZScpXSA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm5hdlBhcmFtcy5nZXQoJ3J1blRpbWUnKSA6IEdlcm1hblRleHRzW3RoaXMubmF2UGFyYW1zLmdldCgncnVuVGltZScpXTtcbiAgICB0aGlzLnByb2dyYW1EZXNjcmlwdGlvbiA9IHR5cGVvZiBHZXJtYW5UZXh0c1t0aGlzLm5hdlBhcmFtcy5nZXQoJ2Rlc2NyaXB0aW9uJyldID09PSAndW5kZWZpbmVkJyA/IHRoaXMubmF2UGFyYW1zLmdldCgnZGVzY3JpcHRpb24nKSA6IEdlcm1hblRleHRzW3RoaXMubmF2UGFyYW1zLmdldCgnZGVzY3JpcHRpb24nKV07XG4gICAgdGhpcy5wcm9ncmFtQXBpTmFtZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnYXBpTmFtZScpO1xuICAgIHRoaXMucHJvZ3JhbU51bWJlciA9IHRoaXMubmF2UGFyYW1zLmdldCgncHJvZ3JhbU51bWJlcicpO1xuICB9XG5cbiAgYWRkMVByb2dyYW0ocHJvZ3JhbU5hbWUsIHByb2dyYW1SdW5uaW5nVGltZSwgcHJvZ3JhbUFwaU5hbWUpe1xuICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJhZGQxUHJvZ3JhbUV2ZW50XCIsIHRoaXMucHJvZ3JhbU51bWJlciwgdGhpcy5wcm9ncmFtUmVhbE5hbWUsIHRoaXMucHJvZ3JhbVJ1bm5pbmdUaW1lLCB0aGlzLnByb2dyYW1BcGlOYW1lKTtcbiAgfVxuXG4gIGlzTmFtZU9uQXJyYXkobmFtZXMsIG5hbWUpe1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihuYW1lc1tpXSA9PSBuYW1lKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3Byb2dyYW0vcHJvZ3JhbS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIFBsYXRmb3JtICB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBBUElTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbGF5aW5nUGFnZSB9IGZyb20gJy4uL3BsYXlpbmcvcGxheWluZyc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEdlcm1hblRleHRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2VybWFuLXRleHRzJztcclxuaW1wb3J0IHsgTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yay1pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFdpZmlQYWdlIHBhZ2UuXHJcbiAqXHJcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxyXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BhZ2Utd2lmaScsXHJcbiAgdGVtcGxhdGVVcmw6ICd3aWZpLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lmaVBhZ2Uge1xyXG4gIHB1YmxpYyB0ZXN0QmVnaW5Sb3V0aW5lSW50ZXJ2YWwgOiBhbnk7XHJcbiAgcHVibGljIHRlc3RJUEludGVydmFsIDogYW55O1xyXG4gIHB1YmxpYyB0ZXN0U3RhdHVzSW50ZXJ2YWwgOiBhbnk7XHJcbiAgcHVibGljIGludGVydmFsQ291bnQgOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBteW1hdFN0YXR1cyA6IGJvb2xlYW47XHJcbiAgcHVibGljIG15bWF0V2lmaSA6IGJvb2xlYW47XHJcbiAgcHVibGljIG15bWF0Tm9TdGF0dXMgOiBib29sZWFuO1xyXG4gIHB1YmxpYyBiYXR0ZXJ5Q2hhcmdlIDogc3RyaW5nO1xyXG4gIHB1YmxpYyBiYXR0ZXJ5SW1nIDogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb2lsVGV4dCA6IHN0cmluZztcclxuICBwdWJsaWMgY29pbFRleHQxIDogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb2lsVGV4dDIgOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvaWxUZXh0MyA6IHN0cmluZztcclxuICBwdWJsaWMgY29pbFRleHQ0IDogc3RyaW5nO1xyXG4gIHB1YmxpYyBzaG93U3RhdHVzVGFibGUgOiBib29sZWFuO1xyXG4gIHB1YmxpYyBzaG93TG9hZGluZyA6IGJvb2xlYW47XHJcbiAgcHVibGljIGlzUnVuUm91dGluZUVuYWJsZWQgOiBib29sZWFuO1xyXG4gIHByaXZhdGUgcHJvZ3JhbTE6IGFueTtcclxuICBwcml2YXRlIHByb2dyYW0yOiBhbnk7XHJcbiAgcHJpdmF0ZSBwcm9ncmFtMzogYW55O1xyXG4gIHByaXZhdGUgcHJvZ3JhbTQ6IGFueTtcclxuXHJcbiAgcHVibGljIGlmcmFtZVVybDogYW55O1xyXG4gIHB1YmxpYyBzaG93SWZyYW1lU3RhdHVzIDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgYXBpU2VydmljZSA6IEFQSVNlcnZpY2VQcm92aWRlcixcclxuICAgICAgcHVibGljIG5ldHdvcmtJbnRlcmZhY2UgOiBOZXR3b3JrSW50ZXJmYWNlLCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtKSB7XHJcbiAgICAgIHRoaXMuY29pbFRleHQgPSB0eXBlb2YgR2VybWFuVGV4dHNbJ2NvaWwnXSA9PT0gJ3VuZGVmaW5lZCcgPyAnQW50ZW5hJyA6IEdlcm1hblRleHRzWydjb2lsJ107XHJcbiAgICAgIHRoaXMucHJvZ3JhbTEgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ3Byb2cxJyk7XHJcbiAgICAgIHRoaXMucHJvZ3JhbTIgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ3Byb2cyJyk7XHJcbiAgICAgIHRoaXMucHJvZ3JhbTMgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ3Byb2czJyk7XHJcbiAgICAgIHRoaXMucHJvZ3JhbTQgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ3Byb2c0Jyk7XHJcbiAgfVxyXG5cclxuICBpb25WaWV3RGlkTGVhdmUoKXtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgaW9uVmlld0RpZExvYWQoKSB7XHJcbiAgICB0aGlzLm15bWF0U3RhdHVzID0gZmFsc2U7XHJcbiAgICB0aGlzLnNob3dJZnJhbWVTdGF0dXMgPSBmYWxzZTtcclxuICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gdHJ1ZTtcclxuICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XHJcbiAgICAgIHRoaXMubmV0d29ya0ludGVyZmFjZS5nZXRXaUZpSVBBZGRyZXNzKCkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgaWYodGhpcy52ZXJpZnlJbnRlcm5hbElwQWRkcmVzcyhyZXNwb25zZSkpe1xyXG4gICAgICAgICAgdGhpcy52ZXJpZnlTdGF0dXNWYWx1ZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgfSwocmVzcG9uc2UpPT57XHJcbiAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0aGlzLnZlcmlmeVN0YXR1c1ZhbHVlcygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5teW1hdFdpZmkgPSB0cnVlO1xyXG4gICAgdGhpcy5pbnRlcnZhbENvdW50ID0gMDtcclxuICB9XHJcblxyXG4gIHZlcmlmeUludGVybmFsSXBBZGRyZXNzKGlwKXtcclxuICAgIGZvcihsZXQgaSA9IDEwMDsgaSA8IDI1NjsgaSsrKXtcclxuICAgICAgaWYoQ29uc3RhbnRzLmxvY2FsSVBBZGRyZXNzICsgaSA9PSBpcCl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHZlcmlmeVN0YXR1c1ZhbHVlcyhyZXN0YXJ0ID0gdHJ1ZSl7XHJcbiAgICAvL3RoaXMubXltYXRTdGF0dXMgPSB0cnVlO1xyXG4gICAgLy90aGlzLnNob3dTdGF0dXNUYWJsZSA9IHRydWU7XHJcblxyXG4gICAgaWYocmVzdGFydCl7XHJcbiAgICAgIHRoaXMuYmF0dGVyeUltZyA9ICdhc3NldHMvaW1nL2IxMDAucG4nO1xyXG4gICAgICB0aGlzLmNvaWxUZXh0MSA9ICdOL0EnO1xyXG4gICAgICB0aGlzLmNvaWxUZXh0MiA9ICdOL0EnO1xyXG4gICAgICB0aGlzLmNvaWxUZXh0MyA9ICdOL0EnO1xyXG4gICAgICB0aGlzLmNvaWxUZXh0NCA9ICdOL0EnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcy5teW1hdFdpZmkgPSBmYWxzZTtcclxuICAgIC8vdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RJUEludGVydmFsKTtcclxuXHJcbiAgICAvLyBjaGVjayBpZiBteW1hdCBpcyBjb25uZWN0ZWRcclxuICAgIHZhciBteU1hdFRlc3QgPSB0aGlzLmFwaVNlcnZpY2UudGVzdCgpO1xyXG4gICAgbXlNYXRUZXN0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIC8vIGlmIGlzIGNvbm5lY3RlZCBxdWl0YXIgaW1hZ2VuLCB0ZXh0b3MgeSBsb2FkaW5nIHkgcG9uZXIgc3RhdHVzIGRlbCBtYXRcclxuICAgICAgaWYodGhpcy52ZXJpZnlWYWx1ZXMocmVzcG9uc2UpKXtcclxuICAgICAgICB0aGlzLnNob3dTdGF0dXMoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLmZhaWxJUFZlcmlmaWNhdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93Tm9TdGF0dXMoKXtcclxuICAgICAgdGhpcy5teW1hdE5vU3RhdHVzID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNob3dTdGF0dXMoKXtcclxuICAgICAgdGhpcy5teW1hdFdpZmkgPSBmYWxzZTtcclxuICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmlzUnVuUm91dGluZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGVzdFN0YXR1c0ludGVydmFsKTtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RJUEludGVydmFsKTtcclxuXHJcbiAgICAgIHRoaXMudGVzdElQSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZXR3b3JrSW50ZXJmYWNlLmdldFdpRmlJUEFkZHJlc3MoKS50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgaWYodGhpcy52ZXJpZnlJbnRlcm5hbElwQWRkcmVzcyhyZXNwb25zZSkpe1xyXG4gICAgICAgICAgICAgIHRoaXMudmVyaWZ5U3RhdHVzVmFsdWVzKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgIHRoaXMubXltYXRXaWZpID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLm15bWF0U3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93U3RhdHVzVGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLmlzUnVuUm91dGluZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLmZhaWxJUFZlcmlmaWNhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgdGhpcy5teW1hdFdpZmkgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm15bWF0U3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzUnVuUm91dGluZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LCAzMDAwKTtcclxuICB9XHJcblxyXG4gIHZlcmlmeVZhbHVlcyhyZXNwb25zZSl7XHJcbiAgICBpZihyZXNwb25zZS5pbmRleE9mKFwiPHA+PGg0PlBvd2VyOiBcIikgPiAtMSl7XHJcbiAgICAgIHZhciBwb3dlciA9IHJlc3BvbnNlLnNwbGl0KFwiPHA+PGg0PlBvd2VyOiBcIik7XHJcbiAgICAgIHBvd2VyID0gcG93ZXJbMV0uc3BsaXQoXCI8L2g0PjwvcD5cIik7XHJcbiAgICAgIHZhciBjb2lsMSA9IHJlc3BvbnNlLnNwbGl0KFwiPHRyPjx0ZD4xLjwvdGQ+PHRkPlwiKTtcclxuICAgICAgY29pbDEgPSBjb2lsMVsyXS5zcGxpdChcIjwvdGQ+PC90cj5cIik7XHJcbiAgICAgIHZhciBjb2lsMiA9IHJlc3BvbnNlLnNwbGl0KFwiPHRyPjx0ZD4yLjwvdGQ+PHRkPlwiKTtcclxuICAgICAgY29pbDIgPSBjb2lsMlsyXS5zcGxpdChcIjwvdGQ+PC90cj5cIik7XHJcbiAgICAgIHZhciBjb2lsMyA9IHJlc3BvbnNlLnNwbGl0KFwiPHRyPjx0ZD4zLjwvdGQ+PHRkPlwiKTtcclxuICAgICAgY29pbDMgPSBjb2lsM1syXS5zcGxpdChcIjwvdGQ+PC90cj5cIik7XHJcbiAgICAgIHZhciBjb2lsNCA9IHJlc3BvbnNlLnNwbGl0KFwiPHRyPjx0ZD40LjwvdGQ+PHRkPlwiKTtcclxuICAgICAgY29pbDQgPSBjb2lsNFsyXS5zcGxpdChcIjwvdGQ+PC90cj5cIik7XHJcbiAgICAgIHRoaXMuYmF0dGVyeUNoYXJnZSA9IHBvd2VyWzBdO1xyXG4gICAgICB2YXIgcG93ZXJWYWwgPSBwb3dlclswXS5zdWJzdHIoMCxwb3dlclswXS5sZW5ndGgtMSk7XHJcbiAgICAgIGlmKHBvd2VyVmFsID4gNzUpXHJcbiAgICAgICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iMTAwLnBuZyc7XHJcbiAgICAgIGVsc2UgaWYocG93ZXJWYWwgPiA1MClcclxuICAgICAgICAgIHRoaXMuYmF0dGVyeUltZyA9ICdhc3NldHMvaW1nL2I3NS5wbmcnO1xyXG4gICAgICBlbHNlIGlmKHBvd2VyVmFsID4gMjUpXHJcbiAgICAgICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iNTAucG5nJztcclxuICAgICAgZWxzZSBpZihwb3dlclZhbCA+IDEwKVxyXG4gICAgICAgICAgdGhpcy5iYXR0ZXJ5SW1nID0gJ2Fzc2V0cy9pbWcvYjI1LnBuZyc7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICAgIHRoaXMuYmF0dGVyeUltZyA9ICdhc3NldHMvaW1nL2IxMC5wbmcnO1xyXG5cclxuICAgICAgdGhpcy5jb2lsVGV4dDEgPSBjb2lsMVswXTtcclxuICAgICAgdGhpcy5jb2lsVGV4dDIgPSBjb2lsMlswXTtcclxuICAgICAgdGhpcy5jb2lsVGV4dDMgPSBjb2lsM1swXTtcclxuICAgICAgdGhpcy5jb2lsVGV4dDQgPSBjb2lsNFswXTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZhaWxJUFZlcmlmaWNhdGlvbigpe1xyXG4gICAgICB0aGlzLnRlc3RJUEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmV0d29ya0ludGVyZmFjZS5nZXRXaUZpSVBBZGRyZXNzKCkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMudmVyaWZ5SW50ZXJuYWxJcEFkZHJlc3MocmVzcG9uc2UpKXtcclxuICAgICAgICAgICAgICB0aGlzLnZlcmlmeVN0YXR1c1ZhbHVlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICAvKmZhaWxTdGF0dXNWZXJpZmljYXRpb24oKXtcclxuICAgIHRoaXMudGVzdFN0YXR1c0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAvLyB0aW1lb3V0IG9mIG15bWF0IGRldGVjdGlvbiAxODAgc2VndW5kb3NcclxuICAgICAgdmFyIGZhaWxNeU1hdFRlc3QgPSB0aGlzLmFwaVNlcnZpY2UudGVzdCgpO1xyXG4gICAgICBmYWlsTXlNYXRUZXN0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy52ZXJpZnlWYWx1ZXMocmVzcG9uc2UpKXtcclxuICAgICAgICAgIHRoaXMuc2hvd1N0YXR1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5pbnRlcnZhbENvdW50ID49IDUpe1xyXG4gICAgICAgICAgdGhpcy5zaG93Tm9TdGF0dXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5pbnRlcnZhbENvdW50ICs9IDE7XHJcbiAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAvKnZhciBwcm9ncmFtcyA9ICcnO1xyXG5cclxuICAgIGZvcih2YXIgaSA9IDE7IGkgPD0gNDsgaSsrKXtcclxuICAgICAgc3dpdGNoKGkpe1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUxKS50aGVuKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgcHJvZ3JhbXMgKz0gXCI/UDE9XCIgKyB2YWwuc3BsaXQoXCJ8XCIpWzNdICsgJyYnO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMikudGhlbigodmFsKSA9PiB7XHJcbiAgICAgODU4XVxyXG4gICAgICAgIHByb2dyYW1zICs9IFwiUDI9XCIgKyB2YWwuc3BsaXQoXCJ8XCIpWzNdICsgJyYnO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMykudGhlbigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2dyYW1zICs9IFwiUDM9XCIgKyB2YWwuc3BsaXQoXCJ8XCIpWzNdICsgJyYnO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlNCkudGhlbigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2dyYW1zICs9IFwiUDQ9XCIgKyB2YWwuc3BsaXQoXCJ8XCIpWzNdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93SWZyYW1lU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5teW1hdFdpZmkgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lVXJsID0gdGhpcy5zYW5pdGl6ZS5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoQ29uc3RhbnRzLm15TWF0QXBpSW5kZXhVcmwgKyBwcm9ncmFtcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KiAvXHJcbiAgfSovXHJcblxyXG4gIHN0YXJ0Um91dGluZSgpe1xyXG4gICAgLyogQU5URVMgREUgQ09DUlJFUiBSVVRJTkEgVkVSSUZJQ0FSIFNJIFNFIEVTVEEgQ09ORUNUQURPIEFMIFdJRkkgREVMIE1ZTUFUICovXHJcbiAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLnRlc3QoKS50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLnZlcmlmeVZhbHVlcyhyZXNwb25zZSkpe1xyXG4gICAgICAgICAgLyogQ09SUkVSIFJVVElOQSAqL1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RTdGF0dXNJbnRlcnZhbCk7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGVzdElQSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgdmFyIHByb2dyYW0xT2JqID0gJ3wnICsgdGhpcy5wcm9ncmFtMS5uYW1lICsgJ3wnICsgdGhpcy5wcm9ncmFtMS5ydW5uaW5ndGltZSArICd8JyArIHRoaXMucHJvZ3JhbTEuYXBpTmFtZTtcclxuICAgICAgICAgIHZhciBwcm9ncmFtMk9iaiA9ICd8JyArIHRoaXMucHJvZ3JhbTIubmFtZSArICd8JyArIHRoaXMucHJvZ3JhbTIucnVubmluZ3RpbWUgKyAnfCcgKyB0aGlzLnByb2dyYW0yLmFwaU5hbWU7XHJcbiAgICAgICAgICB2YXIgcHJvZ3JhbTNPYmogPSAnfCcgKyB0aGlzLnByb2dyYW0zLm5hbWUgKyAnfCcgKyB0aGlzLnByb2dyYW0zLnJ1bm5pbmd0aW1lICsgJ3wnICsgdGhpcy5wcm9ncmFtMy5hcGlOYW1lO1xyXG4gICAgICAgICAgdmFyIHByb2dyYW00T2JqID0gJ3wnICsgdGhpcy5wcm9ncmFtNC5uYW1lICsgJ3wnICsgdGhpcy5wcm9ncmFtNC5ydW5uaW5ndGltZSArICd8JyArIHRoaXMucHJvZ3JhbTQuYXBpTmFtZTtcclxuXHJcbiAgICAgICAgICB2YXIgcHJvZ3JhbXMgPSBbXHJcbiAgICAgICAgICAgICAgcHJvZ3JhbTFPYmosXHJcbiAgICAgICAgICAgICAgcHJvZ3JhbTJPYmosXHJcbiAgICAgICAgICAgICAgcHJvZ3JhbTNPYmosXHJcbiAgICAgICAgICAgICAgcHJvZ3JhbTRPYmpcclxuICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnN0YXJ0KHByb2dyYW1zKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSArICcnKTtcclxuICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgIC8qc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdmFyIGVtYWlsRGF0YSA9IHsgZXJyb3IgOiByZXNwb25zZS5kYXRhIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRFcnJvcihlbWFpbERhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDEyMDAwMCk7Ki9cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIFBvbmVyIHJ1dGluYSBlbiBsYXMgdWx0aW1hcyBjb3JyaWRhc1xyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMubGF0ZXN0Um91dGluZXNLZXkpLnRoZW4oKHJvdXRpbmVzKT0+e1xyXG4gICAgICAgICAgICBsZXQgbGF0ZXN0QXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkYXkgPSB0LmdldERhdGUoKTtcclxuICAgICAgICAgICAgdmFyIG1vbnRoSW5kZXggPSB0LmdldE1vbnRoKCk7XHJcbiAgICAgICAgICAgIHZhciB5ZWFyID0gdC5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICB2YXIgaG91cnMgPSB0LmdldEhvdXJzKCk7XHJcbiAgICAgICAgICAgIHZhciBtaW51dGVzID0gdC5nZXRNaW51dGVzKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvZ3JhbXNBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvZ3JhbXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgIHByb2dyYW1zQXJyYXkucHVzaCh7IFwiYXBpTmFtZVwiIDogcHJvZ3JhbXNbaV0uc3BsaXQoJ3wnKVszXSwgXCJuYW1lXCIgOiBHZXJtYW5UZXh0c1twcm9ncmFtc1tpXS5zcGxpdCgnfCcpWzFdXSB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGF0ZXN0QXJyYXkucHVzaCh7IFwiZGF5XCIgOiBkYXksIFwibW9udGhcIiA6IEdlcm1hblRleHRzW0NvbnN0YW50cy5tb250aE5hbWVzW21vbnRoSW5kZXhdXSwgXCJ5ZWFyXCIgOiB5ZWFyLCBcImhvdXJzXCIgOiB0aGlzLmZpeFplcm9Pbk51bWJlcihob3VycyksIFwibWludXRlc1wiIDogdGhpcy5maXhaZXJvT25OdW1iZXIobWludXRlcyksIFwicHJvZ3JhbXNcIiA6IHByb2dyYW1zQXJyYXkgfSk7XHJcbiAgICAgICAgICAgIGlmKHJvdXRpbmVzICE9IG51bGwgJiYgcm91dGluZXNbMF0gIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgbGF0ZXN0QXJyYXkucHVzaChyb3V0aW5lc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocm91dGluZXMgIT0gbnVsbCAmJiByb3V0aW5lc1sxXSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICBsYXRlc3RBcnJheS5wdXNoKHJvdXRpbmVzWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5sYXRlc3RSb3V0aW5lc0tleSwgbGF0ZXN0QXJyYXkpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLyogQ09SUkVSIFJVVElOQSAqL1xyXG4gICAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoUGxheWluZ1BhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMubXltYXRXaWZpID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMubXltYXRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LChyZXNwb25zZSk9PntcclxuICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm15bWF0V2lmaSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpeFplcm9Pbk51bWJlcih2YWwpe1xyXG4gICAgaWYodmFsIDwgMTApe1xyXG4gICAgICByZXR1cm4gJzAnICsgdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHN0b3AoKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0U3RhdHVzSW50ZXJ2YWwpO1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RJUEludGVydmFsKTtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvd2lmaS93aWZpLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XG5pbXBvcnQgeyBMb2NhbE5vdGlmaWNhdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2xvY2FsLW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBQbGF5aW5nUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1wbGF5aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICdwbGF5aW5nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQbGF5aW5nUGFnZSB7XG4gIHB1YmxpYyBwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nQXNUaW1lIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1UaXRsZTEgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtVGl0bGUyIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbVRpdGxlMyA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1UaXRsZTQgOiBzdHJpbmc7XG4gIHB1YmxpYyBkaXNwbGF5UnVubmluZ1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBmaW5pc2hUaW1lIDogYW55O1xuICBwdWJsaWMgdGltZXJSZW1haW4gOiBhbnk7XG4gIHB1YmxpYyB0aW1lcklkIDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlLFxuICAgIHByaXZhdGUgbG9jYWxOb3RpZmljYXRpb25zIDogTG9jYWxOb3RpZmljYXRpb25zLCBwdWJsaWMgcGx0OiBQbGF0Zm9ybSwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZXN1bWUnLCAoKSA9PiB7XG4gICAgICAgIHZhciB0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgX3RoaXMucmVzdW1lKHQuZ2V0VGltZSgpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2ltdWxhdGVSZXN1bWUoKXtcbiAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5yZXN1bWUodC5nZXRUaW1lKCkgKyAxMCk7XG4gIH1cblxuICByZXN1bWUobm93KXtcbiAgICBpZihNYXRoLnJvdW5kKG5vdyAvIDEwMDApID4gdGhpcy5maW5pc2hUaW1lKXtcbiAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gJzAwOjAwJztcbiAgICAgIHRoaXMudGltZXJSZW1haW4gPSAwO1xuICAgICAgdGhpcy50aW1lcklkKys7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy50aW1lcklkKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHZhciBzZWNvbmRzTGVmdCA9IHRoaXMudGltZXJSZW1haW4gPSB0aGlzLmZpbmlzaFRpbWUgLSBNYXRoLnJvdW5kKG5vdyAvIDEwMDApO1xuICAgICAgdGhpcy50aW1lcklkKys7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy50aW1lcklkKTtcbiAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZShzZWNvbmRzTGVmdCk7XG4gICAgfVxuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgdmFyIHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nO1xuICAgIHZhciBwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZztcbiAgICB2YXIgcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmc7XG4gICAgdmFyIHByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nO1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPD0gNDsgaSsrKXtcbiAgICAgIHN3aXRjaChpKXtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUxKS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbC5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA9IHZhbHVlWzJdOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUodmFsdWVbMl0pO1xuICAgICAgICAgICAgcHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmcgPSB2YWx1ZVsyXTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbVRpdGxlMSA9IHR5cGVvZiBHZXJtYW5UZXh0c1t2YWx1ZVsxXV0gPT09ICd1bmRlZmluZWQnID8gdmFsdWVbMV0gOiBHZXJtYW5UZXh0c1t2YWx1ZVsxXV07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMikudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWwuc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgPSB2YWx1ZVsyXTsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHZhbHVlWzJdKTtcbiAgICAgICAgICAgIHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nID0gdmFsdWVbMl07XG4gICAgICAgICAgICB0aGlzLnByb2dyYW1UaXRsZTIgPSB0eXBlb2YgR2VybWFuVGV4dHNbdmFsdWVbMV1dID09PSAndW5kZWZpbmVkJyA/IHZhbHVlWzFdIDogR2VybWFuVGV4dHNbdmFsdWVbMV1dO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTMpLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsLnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nQXNUaW1lID0gdmFsdWVbMl07IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZSh2YWx1ZVsyXSk7XG4gICAgICAgICAgICBwcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZyA9IHZhbHVlWzJdO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtVGl0bGUzID0gdHlwZW9mIEdlcm1hblRleHRzW3ZhbHVlWzFdXSA9PT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZVsxXSA6IEdlcm1hblRleHRzW3ZhbHVlWzFdXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGU0KS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbC5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA9IHZhbHVlWzJdOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUodmFsdWVbMl0pO1xuICAgICAgICAgICAgcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmcgPSB2YWx1ZVsyXTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbVRpdGxlNCA9IHR5cGVvZiBHZXJtYW5UZXh0c1t2YWx1ZVsxXV0gPT09ICd1bmRlZmluZWQnID8gdmFsdWVbMV0gOiBHZXJtYW5UZXh0c1t2YWx1ZVsxXV07XG5cbiAgICAgICAgICAgIGlmKHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nID4gcHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmcgJiYgcHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmcgPiBwcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZyAmJiBwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZyA+IHByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nKVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gcHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmc7IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZShwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZyk7XG4gICAgICAgICAgICBlbHNlIGlmKHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nID4gcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcgJiYgcHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmcgPiBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZylcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9IHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUocHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmcpO1xuICAgICAgICAgICAgZWxzZSBpZihwcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZyA+IHByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nKVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmc7IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZShwcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZyk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPSBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZzsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nKTtcblxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPSB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZTtcbiAgICAgICAgICAgIHZhciB0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoVGltZSA9IE1hdGgucm91bmQodC5nZXRUaW1lKCkgLyAxMDAwKSArIHRoaXMuZ2V0U2Vjb25kcyh0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSk7XG5cbiAgICAgICAgICAgIHRoaXMudGltZXJSZW1haW4gPSB0aGlzLmdldFNlY29uZHModGhpcy5kaXNwbGF5UnVubmluZ1RpbWUpO1xuICAgICAgICAgICAgdGhpcy50aW1lcklkID0gMTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lcih0aGlzLnRpbWVySWQpO1xuXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKHtcbiAgICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdNeU1hdCBMaWdodCcsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBHZXJtYW5UZXh0c1sndGltZS1leHBpcmUtdGV4dCddLFxuICAgICAgICAgICAgICAgICAgc291bmQ6ICdmaWxlOi8vYXNzZXRzL3NvdW5kcy8nICsgKHRoaXMucGx0LmlzKCdpb3MnKSA/ICdnb25nX2M1Lm00cicgOiAnZ29uZ19jNS5tcDMnKSxcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IHsgYXQ6IG5ldyBEYXRlKHQuZ2V0VGltZSgpICsgdGhpcy5nZXRTZWNvbmRzKHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lKSAqIDEwMDApIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxOb3RpZmljYXRpb25zLm9uKFwiY2xpY2tcIikuc3Vic2NyaWJlKHsgbmV4dChub3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnJlc3VtZSh0LmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb25WaWV3V2lsbExlYXZlKCkge1xuICAgIHRoaXMudGltZXJSZW1haW4gPSAwO1xuICB9XG5cbiAgc3RhcnRUaW1lcihpZCl7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZih0aGlzLnRpbWVyUmVtYWluID09IDAgfHwgdGhpcy50aW1lcklkICE9IGlkKSB7IHJldHVybjsgfVxuXG4gICAgICB0aGlzLnRpbWVyUmVtYWluLS07XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPSB0aGlzLmRlY3JlYXNlU2Vjb25kKHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZih0aGlzLnRpbWVyUmVtYWluID4gMCl7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcih0aGlzLnRpbWVySWQpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgZGVjcmVhc2VTZWNvbmQodGltZSl7XG4gICAgdmFyIG1pbnV0ZXNTdHIgPSB0aW1lLnN1YnN0cigwLHRpbWUuaW5kZXhPZignOicpKTtcbiAgICB2YXIgbWludXRlcyA9IG1pbnV0ZXNTdHJbMF0gPT0gJzAnID8gcGFyc2VJbnQobWludXRlc1N0clsxXSkgOiBwYXJzZUludChtaW51dGVzU3RyKTtcbiAgICB2YXIgc2Vjb25kc1N0ciA9IHRpbWUuc3Vic3RyKHRpbWUuaW5kZXhPZignOicpICsgMSk7XG4gICAgdmFyIHNlY29uZHMgPSBzZWNvbmRzU3RyWzBdID09ICcwJyA/IHBhcnNlSW50KHNlY29uZHNTdHJbMV0pIDogcGFyc2VJbnQoc2Vjb25kc1N0cik7XG4gICAgaWYoc2Vjb25kcyAtIDEgPT0gLTEpe1xuICAgICAgbWludXRlc1N0ciA9IG1pbnV0ZXMgLSAxIDwgMTAgJiYgbWludXRlcyAtIDEgPj0gMCA/ICcwJyArIChtaW51dGVzIC0gMSkgOiBtaW51dGVzIC0gMSA9PSAtMSA/ICcwMCcgOiAnJyArIChtaW51dGVzIC0gMSk7XG4gICAgICBzZWNvbmRzU3RyID0gJzU5JztcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHNlY29uZHNTdHIgPSBzZWNvbmRzIC0gMSA8IDEwID8gJzAnICsgKHNlY29uZHMgLSAxKSA6ICcnICsgKHNlY29uZHMgLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIG1pbnV0ZXNTdHIgKyAnOicgKyBzZWNvbmRzU3RyO1xuICB9XG5cbiAgZ2V0U2Vjb25kcyh0aW1lKXtcbiAgICB2YXIgbWludXRlc1N0ciA9IHRpbWUuc3Vic3RyKDAsdGltZS5pbmRleE9mKCc6JykpO1xuICAgIHZhciBtaW51dGVzID0gbWludXRlc1N0clswXSA9PSAnMCcgPyBwYXJzZUludChtaW51dGVzU3RyWzFdKSA6IHBhcnNlSW50KG1pbnV0ZXNTdHIpO1xuICAgIHZhciBzZWNvbmRzU3RyID0gdGltZS5zdWJzdHIodGltZS5pbmRleE9mKCc6JykgKyAxKTtcbiAgICB2YXIgc2Vjb25kcyA9IHNlY29uZHNTdHJbMF0gPT0gJzAnID8gcGFyc2VJbnQoc2Vjb25kc1N0clsxXSkgOiBwYXJzZUludChzZWNvbmRzU3RyKTtcbiAgICByZXR1cm4gKG1pbnV0ZXMgKiA2MCkgKyBzZWNvbmRzO1xuICB9XG5cbiAgY29udmVydFNlY29uZHNUb1RpbWUodGltZUluU2Vjb25kcykge1xuICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lSW5TZWNvbmRzIC8gNjApO1xuICAgIHZhciBtaW51dGVzU3RyID0gXCIwXCIgKyBtaW51dGVzO1xuICAgIHZhciBzZWNvbmRzID0gXCIwXCIgKyAodGltZUluU2Vjb25kcyAtIG1pbnV0ZXMgKiA2MCk7XG4gICAgcmV0dXJuIG1pbnV0ZXNTdHIuc3Vic3RyKC0yKSArIFwiOlwiICsgc2Vjb25kcy5zdWJzdHIoLTIpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcGxheWluZy9wbGF5aW5nLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBIZWxwUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1oZWxwJyxcbiAgdGVtcGxhdGVVcmw6ICdoZWxwLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBIZWxwUGFnZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcykge1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIEhlbHBQYWdlJyk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2hlbHAvaGVscC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBFdmVudHMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgR2VybWFuVGV4dHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nZXJtYW4tdGV4dHMnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIENvbnRhY3RQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWNvbnRhY3QnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbnRhY3QuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RQYWdlIHtcbiAgcHJpdmF0ZSBjb250YWN0Rm9ybSA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGNvbnRhY3REaXNhYmxlZCA6IGJvb2xlYW47XG4gIHB1YmxpYyAgbmFtZV92YWx1ZSA6IHN0cmluZztcbiAgcHVibGljICBlbWFpbF92YWx1ZSA6IHN0cmluZztcbiAgcHVibGljICBtZXNzYWdlX3ZhbHVlIDogc3RyaW5nO1xuICBwdWJsaWMgYnV0dG9uX3NlbmQgOiBzdHJpbmc7XG4gIHB1YmxpYyByZXNwb25zZV90ZXh0IDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgYXBpU2VydmljZSA6IEFQSVNlcnZpY2VQcm92aWRlcixcbiAgICBwdWJsaWMgZXZlbnRzIDogRXZlbnRzKSB7XG4gICAgdGhpcy5jb250YWN0Rm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbWVzc2FnZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgdGhpcy5jbGVhbkZvcm0oKTtcbiAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSAnJztcbiAgICB0aGlzLmNoYW5nZUJ1dHRvblRleHQoKTtcbiAgfVxuXG4gIGNoYW5nZUJ1dHRvblRleHQoKXtcbiAgICAgIHRoaXMuYnV0dG9uX3NlbmQgPSBHZXJtYW5UZXh0c1snc2VuZC10ZXh0J107XG4gICAgICAvLyBNb3N0cmFyIHRleHRvIGVuIGxhYmVsIGRlYmFqbyBkZWwgYm90b25cbiAgfVxuXG4gIGNsZWFuRm9ybSgpe1xuICAgIHRoaXMuY29udGFjdERpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLm5hbWVfdmFsdWUgPSAnJztcbiAgICB0aGlzLmVtYWlsX3ZhbHVlID0gJyc7XG4gICAgdGhpcy5tZXNzYWdlX3ZhbHVlID0gJyc7XG4gIH1cblxuICBhdHRlbXB0U2VuZE1haWwoKXtcbiAgICB2YXIgZW1haWxEYXRhID0geyBlbWFpbCA6IHRoaXMuY29udGFjdEZvcm0udmFsdWUuZW1haWwsIG5hbWUgOiB0aGlzLmNvbnRhY3RGb3JtLnZhbHVlLm5hbWUsIG1lc3NhZ2UgOiB0aGlzLmNvbnRhY3RGb3JtLnZhbHVlLm1lc3NhZ2UgfTtcbiAgICB0aGlzLmFwaVNlcnZpY2UucnVuUG9zdCgnY29udGFjdF91cy5waHAnLGVtYWlsRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHZhciBvYmogOiBhbnkgPSByZXN1bHQ7XG4gICAgICAgIGlmIChvYmouc3RhdHVzID09IFwib2tcIikge1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gR2VybWFuVGV4dHNbJ2VtYWlsLXN1Y2Nlc3MtbWVzc2FnZSddO1xuICAgICAgICAgICAgdGhpcy5idXR0b25fc2VuZCA9IEdlcm1hblRleHRzWydzZW50LXRleHQnXTtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5Gb3JtKCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9IEdlcm1hblRleHRzWydlbWFpbC1lcnJvci1tZXNzYWdlJ107XG4gICAgICAgIH1cbiAgICB9LCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gR2VybWFuVGV4dHNbJ2VtYWlsLWVycm9yLW1lc3NhZ2UnXTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2NvbnRhY3QvY29udGFjdC50cyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZW5hYmxlUHJvZE1vZGUoKTtcclxuXHJcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluLnRzIiwiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBFcnJvckhhbmRsZXIsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElvbmljU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuaW1wb3J0IHsgSW9uaWNBcHAsIElvbmljRXJyb3JIYW5kbGVyLCBJb25pY01vZHVsZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7IC8vIHNvbG8gc2UgdXNhIHBhcmEgaGFjZXIgbGEgcHJ1ZWJhIGRlIGNvbmV4aW9uIGNvbiBlbCBNeU1hdFxyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9odHRwJztcclxuaW1wb3J0IHsgTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yay1pbnRlcmZhY2UnO1xyXG4vL2ltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xyXG5pbXBvcnQgeyBMb2NhbE5vdGlmaWNhdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2xvY2FsLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kYXRlLXBpY2tlcic7XHJcblxyXG5pbXBvcnQgeyBNeUFwcCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaG9tZS9ob21lJztcclxuaW1wb3J0IHsgSGVscFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9oZWxwL2hlbHAnO1xyXG5pbXBvcnQgeyBDb250YWN0UGFnZSB9IGZyb20gJy4uL3BhZ2VzL2NvbnRhY3QvY29udGFjdCc7XHJcbmltcG9ydCB7IFByb2dyYW1zUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3Byb2dyYW1zL3Byb2dyYW1zJztcclxuaW1wb3J0IHsgV2lmaVBhZ2UgfSBmcm9tICcuLi9wYWdlcy93aWZpL3dpZmknO1xyXG5pbXBvcnQgeyBQbGF5aW5nUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3BsYXlpbmcvcGxheWluZyc7XHJcbmltcG9ydCB7IFByb2dyYW1QYWdlIH0gZnJvbSAnLi4vcGFnZXMvcHJvZ3JhbS9wcm9ncmFtJztcclxuaW1wb3J0IHsgU3Vic2NyaWJlUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3N1YnNjcmliZS9zdWJzY3JpYmUnO1xyXG5pbXBvcnQgeyBTbGlkZXJQYWdlIH0gZnJvbSAnLi4vcGFnZXMvc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCB7IEZhdm9yaXRlc1BhZ2UgfSBmcm9tICcuLi9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzJztcclxuXHJcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3RhdHVzLWJhcic7XHJcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XHJcbmltcG9ydCB7IFJvdXRpbmVzUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMnO1xyXG5pbXBvcnQgeyBBUElTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcclxuaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE15QXBwLFxyXG4gICAgSG9tZVBhZ2UsXHJcbiAgICBIZWxwUGFnZSxcclxuICAgIENvbnRhY3RQYWdlLFxyXG4gICAgUHJvZ3JhbXNQYWdlLFxyXG4gICAgV2lmaVBhZ2UsXHJcbiAgICBQbGF5aW5nUGFnZSxcclxuICAgIFN1YnNjcmliZVBhZ2UsXHJcbiAgICBTbGlkZXJQYWdlLFxyXG4gICAgUHJvZ3JhbVBhZ2UsXHJcbiAgICBGYXZvcml0ZXNQYWdlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgSHR0cE1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBJb25pY01vZHVsZS5mb3JSb290KE15QXBwKSxcclxuICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGJvb3RzdHJhcDogW0lvbmljQXBwXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIE15QXBwLFxyXG4gICAgSG9tZVBhZ2UsXHJcbiAgICBIZWxwUGFnZSxcclxuICAgIENvbnRhY3RQYWdlLFxyXG4gICAgUHJvZ3JhbXNQYWdlLFxyXG4gICAgV2lmaVBhZ2UsXHJcbiAgICBQbGF5aW5nUGFnZSxcclxuICAgIFN1YnNjcmliZVBhZ2UsXHJcbiAgICBTbGlkZXJQYWdlLFxyXG4gICAgUHJvZ3JhbVBhZ2UsXHJcbiAgICBGYXZvcml0ZXNQYWdlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFN0YXR1c0JhcixcclxuICAgIFNwbGFzaFNjcmVlbixcclxuICAgIFJvdXRpbmVzUHJvdmlkZXIsXHJcbiAgICBOZXR3b3JrSW50ZXJmYWNlLFxyXG4gICAgTmV0d29yayxcclxuICAgIERldmljZSxcclxuICAgIExvY2FsTm90aWZpY2F0aW9ucyxcclxuICAgIERhdGVQaWNrZXIsXHJcbiAgICB7IHByb3ZpZGU6IEVycm9ySGFuZGxlciwgdXNlQ2xhc3M6IElvbmljRXJyb3JIYW5kbGVyIH0sXHJcbiAgICBBUElTZXJ2aWNlUHJvdmlkZXIsXHJcbiAgICBIVFRQXHJcblxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgSG9tZVBhZ2VcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVudUNvbnRyb2xsZXIsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBOYXYsIFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XHJcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3RhdHVzLWJhcic7XHJcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XHJcbmltcG9ydCB7IEdlcm1hblRleHRzIH0gZnJvbSAnLi4vc2VydmljZXMvZ2VybWFuLXRleHRzJztcclxuXHJcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaG9tZS9ob21lJztcclxuaW1wb3J0IHsgSGVscFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9oZWxwL2hlbHAnO1xyXG5pbXBvcnQgeyBDb250YWN0UGFnZSB9IGZyb20gJy4uL3BhZ2VzL2NvbnRhY3QvY29udGFjdCc7XHJcbmltcG9ydCB7IFNsaWRlclBhZ2UgfSBmcm9tICcuLi9wYWdlcy9zbGlkZXIvc2xpZGVyJztcclxuaW1wb3J0IHsgRmF2b3JpdGVzUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2Zhdm9yaXRlcy9mYXZvcml0ZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE15QXBwIHtcclxuICBAVmlld0NoaWxkKE5hdikgbmF2OiBOYXY7XHJcblxyXG4gIHJvb3RQYWdlOiBhbnkgPSBIb21lUGFnZTtcclxuICBsYW5nX2VuIDogYm9vbGVhbjtcclxuICBsYW5nX2VzIDogYm9vbGVhbjtcclxuICBsYW5nX3B0IDogYm9vbGVhbjtcclxuICBsYW5nX2ZyIDogYm9vbGVhbjtcclxuICBsYW5nX2dyIDogYm9vbGVhbjtcclxuICBsYW5nX2l0IDogYm9vbGVhbjtcclxuXHJcbiAgcGFnZXM6IEFycmF5PHt0aXRsZTogc3RyaW5nLCBjb21wb25lbnQ6IGFueSwgaWNvbjogYW55LCBpc1B1c2g6IGJvb2xlYW59PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHVibGljIHN0YXR1c0JhcjogU3RhdHVzQmFyLCBwdWJsaWMgc3BsYXNoU2NyZWVuOiBTcGxhc2hTY3JlZW4sXHJcbiAgICBwdWJsaWMgbWVudUN0cmw6IE1lbnVDb250cm9sbGVyLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVBcHAoKTtcclxuXHJcbiAgICAvLyB1c2VkIGZvciBhbiBleGFtcGxlIG9mIG5nRm9yIGFuZCBuYXZpZ2F0aW9uXHJcbiAgICB0aGlzLnBhZ2VzID0gW1xyXG4gICAgICB7IHRpdGxlOiBHZXJtYW5UZXh0c1snaG9tZS10aXRsZSddLCBjb21wb25lbnQ6IEhvbWVQYWdlLCBpY29uOiAnbWVudWl0ZW1ob21lJywgaXNQdXNoOiBmYWxzZSB9LFxyXG4gICAgICB7IHRpdGxlOiBHZXJtYW5UZXh0c1snaGVscC10aXRsZSddLCBjb21wb25lbnQ6IEhlbHBQYWdlLCBpY29uOiAnbWVudWl0ZW1oZWxwJywgaXNQdXNoOiBmYWxzZSB9LFxyXG4gICAgICB7IHRpdGxlOiBHZXJtYW5UZXh0c1snY29udGFjdC10aXRsZSddLCBjb21wb25lbnQ6IENvbnRhY3RQYWdlLCBpY29uOiAnbWVudWl0ZW1jb250YWN0JywgaXNQdXNoOiBmYWxzZSB9LFxyXG4gICAgICB7IHRpdGxlOiBHZXJtYW5UZXh0c1snZmF2LXRpdGxlJ10sIGNvbXBvbmVudDogRmF2b3JpdGVzUGFnZSwgaWNvbjogJ21lbnVmYXZvcml0ZXMnLCBpc1B1c2g6IHRydWUgfSxcclxuICAgICAgeyB0aXRsZTogR2VybWFuVGV4dHNbJ3NsaWRlci10aXRsZSddLCBjb21wb25lbnQ6IFNsaWRlclBhZ2UsIGljb246ICdtZW51aXRlbWluZm8nLCBpc1B1c2g6IHRydWV9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZUFwcCgpIHtcclxuICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcclxuICAgICAgLy8gT2theSwgc28gdGhlIHBsYXRmb3JtIGlzIHJlYWR5IGFuZCBvdXIgcGx1Z2lucyBhcmUgYXZhaWxhYmxlLlxyXG4gICAgICAvLyBIZXJlIHlvdSBjYW4gZG8gYW55IGhpZ2hlciBsZXZlbCBuYXRpdmUgdGhpbmdzIHlvdSBtaWdodCBuZWVkLlxyXG4gICAgICB0aGlzLnN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcclxuICAgICAgdGhpcy5zcGxhc2hTY3JlZW4uaGlkZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuUGFnZShwYWdlKSB7XHJcbiAgICAvLyBSZXNldCB0aGUgY29udGVudCBuYXYgdG8gaGF2ZSBqdXN0IHRoaXMgcGFnZVxyXG4gICAgLy8gd2Ugd291bGRuJ3Qgd2FudCB0aGUgYmFjayBidXR0b24gdG8gc2hvdyBpbiB0aGlzIHNjZW5hcmlvXHJcbiAgICBpZihwYWdlLmlzUHVzaClcclxuICAgICAgdGhpcy5uYXYucHVzaChwYWdlLmNvbXBvbmVudCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMubmF2LnNldFJvb3QocGFnZS5jb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJleHBvcnQgdmFyIENvbnN0YW50cyA9IHtcbiAgICBsb2NhbElQQWRkcmVzcyAgICA6ICcxOTIuMTY4LjAuJyxcbiAgXHRteU1hdEFwaVN0YXJ0VXJsICA6ICdodHRwOi8vMTkyLjE2OC4xLjMvc3RhcnQuaHRtJyxcbiAgICBteU1hdEFwaUluZGV4VXJsICA6ICdodHRwOi8vMTkyLjE2OC4xLjMvaW5kZXguaHRtJyxcbiAgXHRteU1hdEFwaVVybCAgICAgICA6ICdodHRwOi8vaGVhbGluZ2hvdXNlLmxpZmUvYXBpL215bWF0LycsIC8vJ2h0dHBzOi8vd3d3LmVzZmVyYXNvbHVjaW9uZXMuY29tL2FwaS9teW1hdC8nLFxuICAgIHN0b3JhZ2VLZXlCdWJibGUxIDogJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtMScsXG4gICAgc3RvcmFnZUtleUJ1YmJsZTIgOiAnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW0yJyxcbiAgICBzdG9yYWdlS2V5QnViYmxlMyA6ICdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTMnLFxuICAgIHN0b3JhZ2VLZXlCdWJibGU0IDogJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtNCcsXG4gICAgc3RvcmFnZUtleVNjcm9sbFRvcCA6ICdNeU1hdF9zY3JvbGxUb3AnLFxuICAgIHN0b3JhZ2VLZXlDdXJyZW50UHJvZ3JhbSA6ICdNeU1hdF9jdXJyZW50UHJvZ3JhbScsXG4gICAgZGV2aWNlSW5mb0tleTogJ015TWF0RGV2aWNlJyxcbiAgICB0ZXN0X3V1aWQ6ICdVVUlEVEVTVC0xMjM0LTU2NzgtOTEwMC0wMDAwMDAwMDQnLFxuICAgIGxhdGVzdFJvdXRpbmVzS2V5OiAnbGF0ZXN0Um91dGluZXMnLFxuICAgIG1vbnRoTmFtZXM6IFtcbiAgICAgICAgXCJqYW51YXJ5XCIsIFwiZmVicnVhcnlcIiwgXCJtYXJjaFwiLFxuICAgICAgICBcImFwcmlsXCIsIFwibWF5XCIsIFwianVuZVwiLCBcImp1bHlcIixcbiAgICAgICAgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsXG4gICAgICAgIFwibm92ZW1iZXJcIiwgXCJkZWNlbWJlclwiXG4gICAgICBdLFxuICAgIHNob3J0VGl0bGVzICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2VhcnRoLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpcmUtZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbWV0YWwtZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnd2F0ZXItZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnd29vZC1lbGVtZW50LXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdnYWxsYmxhZGRlci1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAna2lkbmV5LW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdoZWFydC1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFyZ2UtaW50ZXN0aW5lLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdsaXZlci1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbHVuZy1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAncGVyaWNhcmRpdW0tbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NtYWxsLWludGVzdGluZS1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3BsZWVuLXBhbmNyZWFzLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdG9tYWNoLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0cmlwbGUtd2FybWVyLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd1cmluYXJ5LWJsYWRkZXItbWVyaWRpYW4tdXBwZXInXG4gICAgICAgICAgICAgICAgICAgICAgXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9jb25zdGFudHMudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaHR0cCc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuLy9pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IHRpbWVvdXQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vL2ltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuXG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBBdXRoU2VydmljZVByb3ZpZGVyIHByb3ZpZGVyLlxuXG4gIFNlZSBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24gZm9yIG1vcmUgaW5mbyBvbiBwcm92aWRlcnNcbiAgYW5kIEFuZ3VsYXIgREkuXG4qL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFQSVNlcnZpY2VQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGh0dHBOYXRpdmU6IEhUVFAsIHB1YmxpYyBodHRwTW9kdWxlOiBIdHRwLCAvKiwgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrKi8pIHtcblxuICB9XG4gIHRlc3RfbGFuZ3VhZ2UoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5odHRwLmdldChDb25zdGFudHMubXlNYXRBcGlJbmRleFVybClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdGVzdCgpe1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5odHRwTW9kdWxlLmdldChDb25zdGFudHMubXlNYXRBcGlJbmRleFVybCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgICAgIHRpbWVvdXQoNTAwMCkgLy81IHNlY29uZHNcbiAgICAgICApXG4gICAgICAubWFwKHJlcyA9PiByZXMudGV4dCgpKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZW5kRXJyb3IoZGF0YSl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgICAgLypsZXQgY29ubmVjdFN1YnNjcmlwdGlvbiA9IHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4geyovXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuICAgICAgICB0aGlzLmh0dHBNb2R1bGUucG9zdChDb25zdGFudHMubXlNYXRBcGlVcmwgKyAncmVwb3J0X2Vycm9yLnBocCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMuanNvbigpKTtcbiAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIC8qfSk7Ki9cbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRFbWFpbChkYXRhKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgICAvKmxldCBjb25uZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7Ki9cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXG4gICAgICAgIHRoaXMuaHR0cE1vZHVsZS5wb3N0KENvbnN0YW50cy5teU1hdEFwaVVybCArICdjb250YWN0X3VzLnBocCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMuanNvbigpKTtcbiAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIC8qfSk7Ki9cbiAgICB9KTtcbiAgfVxuXG4gIHJ1blBvc3Qoc2NyaXB0RmlsZSwgZGF0YSl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoQ29uc3RhbnRzLm15TWF0QXBpVXJsICsgc2NyaXB0RmlsZSwgZGF0YSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAvKn0pOyovXG4gICAgfSk7XG4gIH1cblxuICBzdGFydChwcm9ncmFtcyl7XG4gICAgdmFyIHByb2dyYW0xID0gcHJvZ3JhbXNbMF0uc3BsaXQoXCJ8XCIpWzNdO1xuICAgIHZhciBwcm9ncmFtMiA9IHByb2dyYW1zWzFdLnNwbGl0KFwifFwiKVszXTtcbiAgICB2YXIgcHJvZ3JhbTMgPSBwcm9ncmFtc1syXS5zcGxpdChcInxcIilbM107XG4gICAgdmFyIHByb2dyYW00ID0gcHJvZ3JhbXNbM10uc3BsaXQoXCJ8XCIpWzNdO1xuXG4gICAgLyp2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ1AxJywgcHJvZ3JhbTEpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnUDInLCBwcm9ncmFtMik7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdQMycsIHByb2dyYW0zKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ1A0JywgcHJvZ3JhbTQpOyovXG4gICAgdmFyIHBhcmFtcyA9IFwiUDE9XCIrcHJvZ3JhbTErXCImUDI9XCIrcHJvZ3JhbTIrXCImUDM9XCIrcHJvZ3JhbTMrXCImUDQ9XCIrcHJvZ3JhbTQ7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwTmF0aXZlLmdldChDb25zdGFudHMubXlNYXRBcGlTdGFydFVybCArICc/JyArIHBhcmFtcywgXCJcIiwge30pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdlBhcmFtcywgVmlld0NvbnRyb2xsZXIsIExvYWRpbmdDb250cm9sbGVyLCBBbGVydENvbnRyb2xsZXIsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgUm91dGluZXNQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9yb3V0aW5lcy9yb3V0aW5lcyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IEdlcm1hblRleHRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2VybWFuLXRleHRzJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgRmF2b3JpdGVzUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1mYXZvcml0ZXMnLFxuICB0ZW1wbGF0ZVVybDogJ2Zhdm9yaXRlcy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVzUGFnZSB7XG4gIHByaXZhdGUgcHJvZ3JhbTEgOiBhbnk7XG4gIHByaXZhdGUgcHJvZ3JhbTIgOiBhbnk7XG4gIHByaXZhdGUgcHJvZ3JhbTMgOiBhbnk7XG4gIHByaXZhdGUgcHJvZ3JhbTQgOiBhbnk7XG4gIHByaXZhdGUgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwcml2YXRlIHJlc3BvbnNlX3RleHQgOiBzdHJpbmc7XG4gIHByaXZhdGUgc2F2ZVJvdXRpbmVGb3JtIDogRm9ybUdyb3VwO1xuICBwcml2YXRlIHNob3dTYXZlRm9ybSA6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIGZhdm9yaXRlc0xpc3QgOiBhbnk7XG4gIHByaXZhdGUgc2hvd0xvYWRpbmdMaXN0aW5nIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgb2ZmbGluZV9kZXZpY2UgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwdWJsaWMgdmlld0N0cmw6IFZpZXdDb250cm9sbGVyLCBwdWJsaWMgcm91dGluZXM6IFJvdXRpbmVzUHJvdmlkZXIsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIGFwaVNlcnZpY2UgOiBBUElTZXJ2aWNlUHJvdmlkZXIsXG4gICAgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLCBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLCBwdWJsaWMgYWxlcnRDdHJsIDogQWxlcnRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLCBwdWJsaWMgZXZlbnRzOiBFdmVudHMpIHtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICB2YXIgcHJvZ3JhbXMgPSB0aGlzLnJvdXRpbmVzLmdldFByb2dyYW1zKCk7XG4gICAgaWYocHJvZ3JhbXNbMF0gJiYgcHJvZ3JhbXNbMV0gJiYgcHJvZ3JhbXNbMl0gJiYgcHJvZ3JhbXNbM10pe1xuICAgICAgdGhpcy5wcm9ncmFtMSA9IEdlcm1hblRleHRzW3Byb2dyYW1zWzBdXTtcbiAgICAgIHRoaXMucHJvZ3JhbTIgPSBHZXJtYW5UZXh0c1twcm9ncmFtc1sxXV07XG4gICAgICB0aGlzLnByb2dyYW0zID0gR2VybWFuVGV4dHNbcHJvZ3JhbXNbMl1dO1xuICAgICAgdGhpcy5wcm9ncmFtNCA9IEdlcm1hblRleHRzW3Byb2dyYW1zWzNdXTtcbiAgICB9XG4gICAgdGhpcy5zYXZlUm91dGluZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICBpZihuYXZQYXJhbXMuZ2V0KCdzaG93U2F2ZScpKVxuICAgICAgdGhpcy5zaG93U2F2ZUZvcm0gPSB0cnVlO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuc2hvd1NhdmVGb3JtID0gZmFsc2U7XG5cbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXkpLnRoZW4oKGRldmljZSk9PntcbiAgICAgICAgICB0aGlzLmxvYWRGYXZvcml0ZUxpc3QoZGV2aWNlLmVtYWlsKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXkpLnRoZW4oKGRldmljZSk9PntcbiAgICAgIGlmKHR5cGVvZiBkZXZpY2UgIT09ICd1bmRlZmluZWQnICYmIGRldmljZSAhPSBudWxsKVxuICAgICAgICB0aGlzLmxvYWRGYXZvcml0ZUxpc3QoZGV2aWNlLmVtYWlsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRGYXZvcml0ZUxpc3QoZW1haWwpe1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgLy9mb3JtRGF0YS5hcHBlbmQoJ3V1aWQnLCB1dWlkKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCAnZ2V0Jyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIGVtYWlsKTtcbiAgICBpZih0aGlzLmlzRGV2aWNlT25saW5lKXtcbiAgICAgIHRoaXMuc2hvd0xvYWRpbmdMaXN0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5ydW5Qb3N0KCdmYXZvcml0ZXMucGhwJyxmb3JtRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmdMaXN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICB0aGlzLmZhdm9yaXRlc0xpc3QgPSB0aGlzLnJlc3BvbnNlRGF0YS5mYXZvcml0ZXM7XG5cbiAgICAgIH0sKGVycikgPT4ge1xuICAgICAgICB0aGlzLnNob3dMb2FkaW5nTGlzdGluZyA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGlzbWlzcyhldmVudCA6IEV2ZW50KSB7XG4gICAgaWYoZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLnZpZXdDdHJsLmRpc21pc3MoKTtcbiAgfVxuXG4gIGRlbGV0ZShldmVudDogRXZlbnQsIGlkKXtcbiAgICBpZihldmVudCl7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAvL2Zvcm1EYXRhLmFwcGVuZCgndXVpZCcsIHV1aWQpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgndHlwZScsICdkZWwnKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgaWQpO1xuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLnJ1blBvc3QoJ2Zhdm9yaXRlcy5waHAnLGZvcm1EYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXkpLnRoZW4oKGRldmljZSk9PntcbiAgICAgICAgdGhpcy5sb2FkRmF2b3JpdGVMaXN0KGRldmljZS5lbWFpbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dQcm9ncmFtKGlkLCBuYW1lLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zLCBwcm9ncmFtNCl7XG4gICAgbGV0IHByb2dyYW1fMSA9IChwcm9ncmFtMSA9PSAnRS1TTU9HJyA/IHByb2dyYW0xIDogR2VybWFuVGV4dHNbcHJvZ3JhbTFdKTtcbiAgICBsZXQgcHJvZ3JhbV8yID0gKHByb2dyYW0yID09ICdFLVNNT0cnID8gcHJvZ3JhbTIgOiBHZXJtYW5UZXh0c1twcm9ncmFtMl0pO1xuICAgIGxldCBwcm9ncmFtXzMgPSAocHJvZ3JhbTMgPT0gJ0UtU01PRycgPyBwcm9ncmFtMyA6IEdlcm1hblRleHRzW3Byb2dyYW0zXSk7XG4gICAgbGV0IHByb2dyYW1fNCA9IChwcm9ncmFtNCA9PSAnRS1TTU9HJyA/IHByb2dyYW00IDogR2VybWFuVGV4dHNbcHJvZ3JhbTRdKTtcbiAgICBsZXQgYWxlcnQgPSB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAgICAgdGl0bGU6ICdSdXRpbmEgLSAnICsgbmFtZSxcbiAgICAgIG1lc3NhZ2U6IHByb2dyYW1fMSArICdcXG4nICsgcHJvZ3JhbV8yICsgJ1xcbicgKyBwcm9ncmFtXzMgKyAnXFxuJyArIHByb2dyYW1fNCxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBHZXJtYW5UZXh0c1snY2hvb3NlJ10sXG4gICAgICAgICAgICAgICAgICBoYW5kbGVyOiBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaCgnYWRkUHJvZ3JhbXNFdmVudCcsIHsgbmFtZSA6IHByb2dyYW0xIH0sIHsgbmFtZSA6IHByb2dyYW0yIH0sIHsgbmFtZSA6IHByb2dyYW0zIH0sIHsgbmFtZSA6IHByb2dyYW00IH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgIH0pO1xuICAgIGFsZXJ0LnByZXNlbnQoKTtcbiAgICAvLyBNb3N0cmFyIHRleHRvIGVuIGxhYmVsIGRlYmFqbyBkZWwgYm90b25cblxuICB9XG5cbiAgYXR0ZW1wdFNhdmVGYXZvcml0ZSgpe1xuICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9ICcnO1xuXG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuZGV2aWNlSW5mb0tleSkudGhlbigoZGV2aWNlKT0+e1xuXG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGxldCBwcm9ncmFtcyA9IHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbXMoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHlwZScsICduZXcnKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCBkZXZpY2UuZW1haWwpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgdGhpcy5zYXZlUm91dGluZUZvcm0udmFsdWUubmFtZSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2dyYW0xJywgcHJvZ3JhbXNbMF0pO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9ncmFtMicsIHByb2dyYW1zWzFdKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZ3JhbTMnLCBwcm9ncmFtc1syXSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2dyYW00JywgcHJvZ3JhbXNbM10pO1xuXG4gICAgICB0aGlzLmFwaVNlcnZpY2UucnVuUG9zdCgnZmF2b3JpdGVzLnBocCcsZm9ybURhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgaWYodGhpcy5yZXNwb25zZURhdGEuc3RhdHVzID09ICdvaycpe1xuICAgICAgICAgICAgdGhpcy5zaG93U2F2ZUZvcm0gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVzTGlzdCA9IHRoaXMucmVzcG9uc2VEYXRhLmZhdm9yaXRlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2Zhdm9yaXRlcy9mYXZvcml0ZXMudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29mZmxpbmVfZGF0YSc7XG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XG5cbi8qXG4gIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFJvdXRpbmVzUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVyc1xuICBhbmQgQW5ndWxhciBESS5cbiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGluZXNQcm92aWRlciB7XG4gIHB1YmxpYyBwcm9ncmFtMSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW0yIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbTMgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtNCA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmFnZTogU3RvcmFnZSkge1xuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBSb3V0aW5lc1Byb3ZpZGVyIFByb3ZpZGVyJyk7XG4gIH1cblxuICBwdWJsaWMgc2V0UHJvZ3JhbShpbmRleCxwcm9nKXtcbiAgICBzd2l0Y2ggKGluZGV4KXtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5wcm9ncmFtMSA9IHByb2c7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLnByb2dyYW0yID0gcHJvZztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMucHJvZ3JhbTMgPSBwcm9nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdGhpcy5wcm9ncmFtNCA9IHByb2c7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhblByb2dyYW1zKCl7XG4gICAgdGhpcy5wcm9ncmFtMSA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmFtMiA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmFtMyA9IG51bGw7XG4gICAgdGhpcy5wcm9ncmFtNCA9IG51bGw7XG4gIH1cblxuICBwdWJsaWMgc2V0UHJvZ3JhbXMocHJvZzEsIHByb2cyLCBwcm9nMywgcHJvZzQpe1xuICAgIHRoaXMucHJvZ3JhbTEgPSBwcm9nMTtcbiAgICB0aGlzLnByb2dyYW0yID0gcHJvZzI7XG4gICAgdGhpcy5wcm9ncmFtMyA9IHByb2czO1xuICAgIHRoaXMucHJvZ3JhbTQgPSBwcm9nNDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcm9ncmFtcygpe1xuICAgIHJldHVybiBbIHRoaXMucHJvZ3JhbTEsIHRoaXMucHJvZ3JhbTIsIHRoaXMucHJvZ3JhbTMsIHRoaXMucHJvZ3JhbTQgXTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgZ2V0S2V5KGtleTpzdHJpbmcpe1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0KGtleSk7XG4gIH1cblxuICBwdWJsaWMgYWRkUHJvZ3JhbXMocm91dGluZU5hbWUsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMsIHByb2dyYW00KXtcbiAgICB2YXIgb2JqUHJvZ3JhbTEgPSB0aGlzLmdldFByb2dyYW0ocHJvZ3JhbTEpO1xuICAgIHZhciBvYmpQcm9ncmFtMiA9IHRoaXMuZ2V0UHJvZ3JhbShwcm9ncmFtMik7XG4gICAgdmFyIG9ialByb2dyYW0zID0gdGhpcy5nZXRQcm9ncmFtKHByb2dyYW0zKTtcbiAgICB2YXIgb2JqUHJvZ3JhbTQgPSB0aGlzLmdldFByb2dyYW0ocHJvZ3JhbTQpO1xuICAgIHRoaXMuaW5zZXJ0UHJlU2V0UHJvZ3JhbShyb3V0aW5lTmFtZSwgb2JqUHJvZ3JhbTEsIG9ialByb2dyYW0yLCBvYmpQcm9ncmFtMywgb2JqUHJvZ3JhbTQpO1xuXG4gICAgdGhpcy5zZXRQcm9ncmFtcyhvYmpQcm9ncmFtMS5uYW1lLCBvYmpQcm9ncmFtMi5uYW1lLCBvYmpQcm9ncmFtMy5uYW1lLCBvYmpQcm9ncmFtNC5uYW1lKTtcbiAgICByZXR1cm4gW29ialByb2dyYW0xLm5hbWUsIG9ialByb2dyYW0yLm5hbWUsIG9ialByb2dyYW0zLm5hbWUsIG9ialByb2dyYW00Lm5hbWVdO1xuICB9XG5cbiAgcHVibGljIGdldFByb2dyYW0obmFtZSl7XG4gICAgICBmb3IodmFyIGkgPSAwOyAgaSA8IERhdGEuUHJvZ3JhbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IERhdGEuUHJvZ3JhbXNbaV07XG4gICAgICAgIGlmKHByb2dyYW0uYXBpTmFtZSA9PSBuYW1lIHx8IHByb2dyYW0ubmFtZSA9PSBuYW1lLm5hbWUgfHwgcHJvZ3JhbS5uYW1lID09IG5hbWUpe1xuICAgICAgICAgIGxldCB0ZXh0ID0gR2VybWFuVGV4dHNbcHJvZ3JhbS5uYW1lXTtcbiAgICAgICAgICBwcm9ncmFtLnRleHROYW1lID0gdGV4dCA/IHRleHQgOiBwcm9ncmFtLm5hbWU7XG4gICAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpbnNlcnRQcmVTZXRQcm9ncmFtIChyb3V0aW5lTmFtZSwgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMywgcHJvZ3JhbTQpIHtcblxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdNeU1hdF9yb3V0aW5lTmFtZScsIHJvdXRpbmVOYW1lKTtcbiAgICAgICAgdGhpcy5hZGRQcm9ncmFtVG9Sb3V0aW5lKDEsIFwiXCIsIHByb2dyYW0xLm5hbWUsIHByb2dyYW0xLnJ1bm5pbmd0aW1lLCBwcm9ncmFtMS5hcGlOYW1lKTtcblxuICAgICAgICB0aGlzLmFkZFByb2dyYW1Ub1JvdXRpbmUoMiwgXCJcIiwgcHJvZ3JhbTIubmFtZSwgcHJvZ3JhbTIucnVubmluZ3RpbWUsIHByb2dyYW0yLmFwaU5hbWUpO1xuXG4gICAgICAgIHRoaXMuYWRkUHJvZ3JhbVRvUm91dGluZSgzLCBcIlwiLCBwcm9ncmFtMy5uYW1lLCBwcm9ncmFtMy5ydW5uaW5ndGltZSwgcHJvZ3JhbTMuYXBpTmFtZSk7XG5cbiAgICAgICAgdGhpcy5hZGRQcm9ncmFtVG9Sb3V0aW5lKDQsIFwiXCIsIHByb2dyYW00Lm5hbWUsIHByb2dyYW00LnJ1bm5pbmd0aW1lLCBwcm9ncmFtNC5hcGlOYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRQcm9ncmFtVG9Sb3V0aW5lIChjdXJyZW50QnViYmxlU2xvdCwgaWRQcm9ncmFtLCBwcm9ncmFtTmFtZSwgcHJvZ3JhbVJ1bm5pbmdUaW1lLCBhcGlOYW1lKSB7XG4gICAgICAgIGlmIChjdXJyZW50QnViYmxlU2xvdCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTEnLCBpZFByb2dyYW0gKyBcInxcIiArIHByb2dyYW1OYW1lICsgXCJ8XCIgKyBwcm9ncmFtUnVubmluZ1RpbWUgKyBcInxcIiArIGFwaU5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRCdWJibGVTbG90ID09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtMicsIGlkUHJvZ3JhbSArIFwifFwiICsgcHJvZ3JhbU5hbWUgKyBcInxcIiArIHByb2dyYW1SdW5uaW5nVGltZSArIFwifFwiICsgYXBpTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEJ1YmJsZVNsb3QgPT0gMykge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW0zJywgaWRQcm9ncmFtICsgXCJ8XCIgKyBwcm9ncmFtTmFtZSArIFwifFwiICsgcHJvZ3JhbVJ1bm5pbmdUaW1lICsgXCJ8XCIgKyBhcGlOYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50QnViYmxlU2xvdCA9PSA0KSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTQnLCBpZFByb2dyYW0gKyBcInxcIiArIHByb2dyYW1OYW1lICsgXCJ8XCIgKyBwcm9ncmFtUnVubmluZ1RpbWUgKyBcInxcIiArIGFwaU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3ZpZGVycy9yb3V0aW5lcy9yb3V0aW5lcy50cyJdLCJzb3VyY2VSb290IjoiIn0=