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
    "first-chakra-upper": "1. CHAKRA",
    "second-chakra-upper": "2. CHAKRA",
    "third-chakra-upper": "3. CHAKRA",
    "fourth-chakra-upper": "4. CHAKRA",
    "fifth-chakra-upper": "5. CHAKRA",
    "sixth-chakra-upper": "6. CHAKRA",
    "seventh-chakra-upper": "7. CHAKRA",
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
    "anti-aging-upper": "ANTI AGING",
    "anti-aging-description": "• Anti-aging Programm um die Bio-Kommunikationsaktivität im Organismus aufrecht zu erhalten. • Hält den Körper in Form. • für den erfolgreichen Abtransport von Stoffwechselabfallprodukten. • Verringert die tägliche körperliche und geistige Stressladung. Zusatzprogramme: Knochen, Energie-Ausgleich, Mineral-Stoffwechsel, Bindegewebe, Elemente, Meridiane, 1. – 2. und 7. Chakra",
    "auditory-upper": "HÖRSYSTEM",
    "auditory-description": "• Ergänzt alle Behandlungen bei Störungen des Gehör- und Gleichgewichtsystem. • Vorbeugende Anwendung zur Beibehaltung der Hörqualität. • Ergänzungsbehandlung bei chronischen Gehörkanal- und Mittelohr-Entzündungen. • Anwenden bei lautem Arbeitsumfeld als Prävention. Zusatzprogramme: Kreislaufsystem, Lympsystem, Atmungssystem. Nebenhöhlen/Stirnhöhlen, Entgiftung, Nieren-Meridian, Leber-Meridian, Wasser-Element, 6. Chakra",
    "backache-upper": "RÜCKENSCHMERZEN",
    "backache-description": "• Vorbeugung und Minderung von Rückenschmerzen. • Unterstützend bei Wirbelsäulen-Therapie und Bandscheiben-Vorfällen. •  Lindert Schmerzen im Lendenbereich (Hexenschuss). • Lindert Muskelkater nach körperlicher Anstrengung. • Unterstützt die Behandlung von Rückenschmerzen, die Hand- und Armbewegungen blockieren. • Zusatzprogramme: Verdauung, Wirbelsäule, Nacken/Schulter, Muskelgewebe, Nerven, Frustration, Freude, Wasser-Element, Nieren-Meridian, Harnblase-Meridian, Dickdarm-Meridian, 1. und 2. Chakra",
    "bones-upper": "KNOCHEN",
    "bones-description": "• In der Rehabilitationsperiode nach Knochenbrüchen und Knochenkrankheiten. • Optimiert die Stoffwechselfunktionen des Knochengewebes. • Schmerzlindernd bei Beeinträchtigung der Stoffwechselfunktionen des Knochengewebes. • Ergänzt knochenstärkende Therapien. • Unterstützt die Kalziumaufnahme in die Knochenzellen (beugt Entkalkung vor). • Schmerzlindernd bei Knochenwachstum bei Kinder. Zusatsprogramme: Bindegewebe, Nebennieren, Schilddrüsen, Mineral-Stoffwechsel-Störung, Anti Aging, Verdauungssystem, Metall-Element, Wasser-Element, Dickdarm-Meridian, Leber-Meridian, Nieren-Meridian, 1. Chakra",
    "child-developement-upper": "KINDLICHE ENTWICKLUNG",
    "child-developement-description": "• Harmonisiert die geistige und körperliche Entwicklung bei Kindern. • Stimmuliert die spezifischen Gewebe bei der Entwicklung. • Verbindung mit der Erde, Erdung. Wichtig für Kinder die in städtischen Gebieten leben. Zusatzprogramme: Energie-Ausgleich, Knochen, Muskeln, Nervensystem, E-Smog, Freude, Frustration, Elemente, Perikardium-Meridian, Milz/Bauchspeicheldrüse-Meridian, Chakras",
    "circulatory-system-upper": "KREISLAUF-SYSTEM",
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
    "digestive-system-upper": "VERDAUUNG",
    "digestive-system-description": "• Verdauungsbeschwerden. • Stimmuliert die Organe des Verdauungssystems. • Fördert die Aufnahme von Vitaminen und Nahrungsergänzungsmittel. • Unterstützt das Verdauungssystem bei schwer verdaulichen Lebensmitteln  (Müdigkeit nach der Nahrungsaufnahme). • Unterstützend bei langfristiger pharmazeutischer Behandlung, vermindert Nebenwirkungen im Verdauungstrakt. Zusatzprogramme: Darmflora, Entgiftung, Frustration, Magen-Meridian, Milz/Bauchspeicheldrüse-Meridian, Dünndarm-Meridian, Dickdarm-Meridian, Gallenblase-Meridian, Erde-Element, Metal-Element, 3. Chakra",
    "discernment-upper": "GEDÄCHTNIS",
    "discernment-description": "• Unterstützt die Merkfähigkeit. • Steigert die Aufnahmefähigkeit für wichtige Informationen. • Unterstützt die Konzentrationsfähigkeit. • Gesteigerte Lernfähigkeit. Zusatzprogramme: Konzentration, Kreislaufsystem, Energiespender, Erde-Element, Wasser-Element, Gallenblase-Meridian, Milz/Bauschspeicheldrüse-Meridian, Herz-Meridian, 5., 6. und 7. Chakra",
    "earth-element-upper": "ERDE ELEMENT",
    "earth-element-short": "ERDE",
    "earth-element-description": "• harmonisiert emotionale Verhaltensweisen des Erde-Elementes solche wie Angst und Besorgnis. • Als Zusatzbehandlung bei Problemen mit abnormalen Organfunktionen. Magen, Milz, Bauchspeicheldrüse und Muskelgewebe, welche dem Erde-Element zugeordnet werden. Zusatzprogramme:  Meridiane und Chakras",
    "e-smog-upper": "E-SMOG",
    "e-smog-description": "• Für Leute die in engem Kontakt mit elektronischen und elektrischen Geräten stehen. • Bei Handy-, Mikrowellen- und Telefonbestrahlung (v.a. in dicht besiedelten Gebieten). • Mindestens zweimal pro Woche anwenden!. • Günstig für Heiler/innen: Reinigt die Aura von schweren negativen Energien. Zusatzprogramme: Energie-Ausgleich, Milz/Bauchspeicheldrüse-Meridian, Dreifacher-Erwärmer-Meridian, Alle Chakra Programme",
    "energy-balancing-upper": "ENERGIE-AUSGLEICH",
    "energy-balancing-description": "• Täglich für das allgemeine Wohlbefinden. • Normalisiert organische Unter- oder Überfunktion. • Zum Ausgleich der Koordinationsfähigkeit. • Vorbeugend bei häufigen Kopfschmerzen. • Bei kalten Gliedermassen (Extremitäten). Zusatzprogramme: E-smog, Frustration, Freude, Nieren-Meridian, Wasser- Element, 1. und 4. Chakra",
    "energy-booster-upper": "ENERGIE-SPENDER",
    "energy-booster-description": "• Geistiger Antrieb in Stress-Situationen. • Gesteigerte Leistungsfähigkeit im Sport und bei der Arbeit. • Mobilisiert die Energiereserven und verbessert die Koordination. • Als Vorbereitung auf einen Wettkampf, ein Geschäfts-Meeting und auf Prüfungen. Klärt den Geist. Zusatzprogramme: Energie-Ausgleich, Anti-Aging, Nebennieren, Schilddrüsen, Nieren-Meridian, Wasser-Element, Leber-Meridian, Kreislauf, Atmungssystem, 1. – 3. und 6. Chakra",
    "exhaustion-upper": "ERSCHÖPFUNG",
    "exhaustion-description": "• Genesung von extremer Müdigkeit und Erschöpfung. • Löst innere Informationsblockaden. • Mindert Unwohlsein aufgrund von mangelnder Durchblutung. Zusatzprogramme:  Nebennieren, Schilddrüsen, Energie-Spender, Frustration, Kreislauf, Freude, Leber-Meridian, Herz-Meridian, Perikard-Meridian, Feuer-Element, 1. , 2.  und 3.  Chakra",
    "eyesight-upper": "SEHVERMÖGEN",
    "eyesight-description": "• Hilfreich bei müden Augen. • Erleichtert die Entspannung der Augenmuskeln. • Vorbeugend gegen Probleme und Krankheiten der Augen und des Sehvermögens. Zusatzprogramme: Holz-Element, Dreifacher-Erwärmer-Meridian, Nieren- und Leber-Meridian, 6. Chakra",
    "female-upper": "FRAU",
    "female-description": "• Unterstützt das Fortpflanzungssystem sowie die Geschlechtsorgane. • Reguliert den Menstruationszyklus  und erhöht das Wohlbefinden vor und während der Menstruation. •  Bei häufig vorkommenden Zysten. • Unterstützt PMS Symptome (Prämenstruelles Syndrom). • Zur Ergänzung bei Inkontinenz-Behandlungen. • Für Männer mit starker Yin- Konstitution. Zusatzprogramme: Freude, Frustration, Friede, Harnsystem, Kreislaufsystem, Milz/Bauchspeicheldrüse-Meridian, Harnblase-Meridian, Leber-Meridian, 1. und 2. Chakra",
    "fire-element-upper": "FEUER ELEMENT",
    "fire-element-short": "FEUER",
    "fire-element-description": "• Stabilisiert extreme Stimmungsschwankungen. • Als Zusatzbehandlung bei Problemen mit abnormalen Organfunktionen: Herz, Dünndarm und Blutgefässe, welche dem Feuer-Element zugeordnet werden. Zusatzprogramme: Meridiane und Chakras",
    "flu-upper": "GRIPPE",
    "flu-description": "• Stimmuliert das Immunsystem. • Stimmuliert den Heilungsprozess bei Grippe, Bronchitis, Mandelentzündung, Lungenentzündung und Darmgrippe. • Beginne mit diesem Programm bei den ersten Grippesymptomen und mehrere Tage nachdem die Syptome verschwunden sind. Zusatzprogramme: Immunsystem, Atmungssystem, Nebenhöhlen, Verdauungssystem,  Smog, Energie-Ausgleich, Frustration, Freude,  Erde-Element, Dickdarm-Meridian, Lungen-Meridian, 3., 4.  und 5.  Chakra",
    "glucose-metabolic-disorders-upper": "ZUCKER-STOFFWECHSEL-STÖRUNG",
    "glucose-metabolic-disorders-description": "• Komplementär-Behandlung bei Zucker-Stoffwechselstörung – (Zucker, Kohlenhydrate). • Stimmuliert die bioinformatische Verbindung zur Bauchspeicheldrüse. • Vorteilhaft bei einer bestehenden Insulinresistenz. • Komplementärbehandlung bei Übergewicht, Depression, Type 1 und  2 Diabetes. Zusatzprogramme: Energie-Ausgleich, Freude, Frustration, Schilddrüse, Dreifacher-Erwärmer-Meridian, Milz/Bauchspeicheldrüse-Meridian, 1., 2., 3. und 4.",
    "hair-growth-upper": "HAARWACHSTUM",
    "hair-growth-description": "• Stimmuliert das Haarwachstum. • Verstärkt die Haarwurzel bei Haarausfall. • Zur Restaurierung bei beschädigtem Haar und Kopfhaut. • Als Ergänzungsbehandlung bei Haarausfall nach Chemotherapie. Zusatzprogramme: Entgiftung, Schilddrüse, Darmflora, Metall-Element, Magen-Meridian, Nieren-Meridian, Harnblase-Meridian, 2. und 6. Chakra",
    "headache-upper": "KOPFSCHMERZEN",
    "headache-description": "• Bei Kopfschmerzen. Zusatzprogramme: Frustration, Nacken, Sehvermögen, Energie-Ausgleich, Nasen-Nebenhöhlen, Gehör, Darmflora, Verdauung, Verstopfung oder Bluthochdruck wenn anwendbar, Dickdarm-Meridian, Magen- Meridian, Leber-Meridian, Gallenblase-Meridian, 3. und 6. Chakra",
    "heart-function-upper": "HERZ-FUNKTION",
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
    "low-mental-drive-upper": "SCHWACHER LIBIDO II",
    "low-mental-drive-description": "• Bei stressbedingter nervlicher Störungen der sexuellen Lebenskraft. • Bei schwachem Libido aufgrund von alltäglichen Problemen (bei neuroendokrinen Problemen, Allergien und andere Erkrankungen zusätzlich das Programm LIBIDO I anwenden) Auch Parasiten können die Ursache einer ständigen Überstimmulierung des Nervensystems sein. • Dieses Programm eignet sich bei Funktionsstörungen aufgrund von Energie-Mangel. Zusatzprogramme: Erschöpfung, Entspannung, E-Smog, Energie-Ausgleich, Friede, Freude, Energie-Spender, Frustration, Erde-Element, Metall-Element, Wasser-Element, Herz-Meridian, Pericardium-Meridian, 1., 2 und 4. Chakra",
    "low-physical-drive-upper": "SCHWACHER LIBIDO I",
    "low-physical-drive-description": "• Stimmuliert das sexuelle Lustgefühl bei organischen Problemen oder fehlender Energieversorgung. • Fördert die sexuelle Kapazität. • Ergänzende Behandlung in der Gerentologie (beim älter werden). • Dieses Programm eignet sich bei Funktionsstörungen, die die Folge des Altern oder körperlicher Probleme sind. Zusatzprogramme: Anti Aging, Entgiftung, Nebenniere, Bindegewebe, Kreislaufsystem, Erschöpfung, Erde-Element, Harnblase-Meridian, Pericardium-Meridian, Herz-Meridian, 1.  und 2.  Chakra",
    "lymphatic-system-upper": "LYMPHSYSTEM",
    "lymphatic-system-description": "• Optimiert den Lymph-Kreislauf und vermindert Lymphstauung. • Erleichtert die Genesung nach infektiösen Erkrankungen. • Hemmt allergische Reaktionen. Zusatzprogramme: Kreislauf-System, Entgiftung, Immun-System, Bindegewebe, Feuer-Element, Wasser-Element, 2. Chakra",
    "male-upper": "MANN",
    "male-description": "• Für Behandlungen der männlichen Hormone, bei sexuellen Störungen und des Harnsystems betreffend zur Unterstützung der Gewebe-Stoffwechselvorgänge. • Ergänzt Behandlungen bei Inkontinenz und Prostata-Problemen. • Steigert die Libido und das Gefühl von Geborgenheit. • Bei Errektionsstörungen. • Für Frauen mit einer starken yang-Konstitution; bei schmerzhaften, schweren oder Über 7 Tage andauernde Menstruationsblutungen oder wenn ein Testosteron Ausgleich nötig ist. Zusatzprogramme: Entspannung, Kreislaufsystem, Frustration, Freude, Friede, Feuer-Element, Harnblase-Meridian, Leber-Meridian, 1. und 2. Chakra",
    "meditation-1-upper": "MEDITATION 1",
    "meditation-1-description": "• Für Meditations-Anfänger – für das Friedensgefühl",
    "meditation-2-upper": "MEDITATION 2",
    "meditation-2-description": "• Für tiefere innere Reisen während der Meditation",
    "meditation-3-upper": "MEDITATION 3",
    "meditation-3-description": "• Für die fortgeschrittene Meditationspraxis",
    "gallbladder-meridian-upper": "GALLENBLASEN MERIDIAN",
    "gallbladder-meridian-short": "GALLENBLASEN",
    "gallbladder-meridian-description": "• Harmonisiert den Gallenblase-Meridian • Ergänzende Behandlung bei Kiefergelenkserkrankung, Zahnkrankheiten und Mandeln • Hilft Entscheidungen zu treffen in schwierigen Situationen •  Unterstützend bei Überaktivität oder Zwangsstörungen •  Gegen übermässig negative Einstellung •  bei Tendez Dinge aufzuschieben • Spitzenaktivität der Gallenblase ist 23:00 – 01:00 Uhr. • Die Gallenblase ist Yang – Sie ist mit dem Yin-Organ der Leber verbunden – entspricht dem Holz-Element und Unschlüssigkeit oder Entschlusskraf. Zusatzprogramme: Holz-Element, Frustration, Freude, Leber-Meridian, 3. Chakra, Dickdarm Meridian",
    "kidney-meridian-upper": "NIEREN MERIDIAN",
    "kidney-meridian-short": "NIEREN",
    "kidney-meridian-description": "• Steigert die Aktivität des Nieren-Meridians. • Besänftigt Bluthochdruck und Ödeme. • begünstigt die Beziehung von Knochen und Knochenmark. • vermindert Ohrensausen und ähnliche Symptome. • Bei Rastlosigkeit, Überaktivität und allgemeiner Schwäche. • Steigert die sexuelle Energie. • Spitzenaktivität der Niere ist von 17:00 – 19:00 Uhr. • Die Niere ist Yin – verbunden mit dem Yang-Organ der Blase – entspricht dem Wasser-Element und der Angstgefühle. Zusatzprogramme: Wasser-Element, Harnblase-Meridian, Dreifacher-Erwärmer-Meridian, Bluthochdruck, HörSystem, Knochen, 2. Chakra",
    "heart-meridian-upper": "HERZ MERIDIAN",
    "heart-meridian-short": "HERZ",
    "heart-meridian-description": "• Harmonisiert den Herz-Meridian. • Verhilft zur emotionalen Stabilität bei Tendenz zu manisch-depressiv. • Verbessert das Gedächtnis und steigert die Konzentration. • Verbessert das Schlafmuster und erleichtert das Einschlafen. • Spitzenaktivität des Herz is 11:00 – 13:00 Uhr. • Das Herz ist Yin – ist mit dem Yang Organ des Dünndarms verbunden – entspricht dem Feuer-Element, dem Freudegefühl und der Aufregung. Zusatzprogramme: Feuer-Element, Perikardium-Meridian, Dünndarm-Meridian und Deifacher-Erwärmer-Meridian, Schlaf, Entspannung, Freude, Frustration, 4. Chakra",
    "large-intestine-meridian-upper": "DICKDARM MERIDIAN",
    "large-intestine-meridian-short": "DICKDARM",
    "large-intestine-meridian-description": "• Harmonisiert den Dickdarm-Meridian • Bei chronischer Disbiose (gestörtes Bakterienverhältnis der Darmflora. Mehr patologische Bakterien als gesundheitsförderne) • Verbessert das Immunsystem • Als Komplementär-Therapie bei Blutarmut, Ekzemen, Parasiten und Pilze • Bei Neigung zu negativen Gedanken und Gefühlen und für Menschen, denen es körperlich und geistig schwer fällt, loszulassen und das Vergangene hinter sich zu lassen • Spitzenaktivität des Dickdarms ist von 05:00 – 07:00 Uhr • Der Dickdarm ist Yang – verbunden mit derm Yin-Organ der Lunge – entspricht dem Metall-Element und dem Gefühl der Trauer/Kummer. Zusatzprogramme: Metall-Element, Lungen-Meridian, Dreifacher-Erwärmer-Meridian, Verstopfung, Durchfall, 1. Chakra, und 3. Chaka",
    "liver-meridian-upper": "LEBER MERIDIAN",
    "liver-meridian-short": "LEBER",
    "liver-meridian-description": "• Harmonisiert den Leber-Meridian. • Verbessert Augen-und Nebenhöhlen-Erkrankungen. • Bei Zahnproblemen. • Lindert Migräne und Kopfschmerzen. • Reduziert generelle Koordinationsschwierigkeiten. • Für voreingenommene, ungeduldige und frustrierte Menschen. • Für festgefahrene Menschen mit Zorn/Wut/Ärger und starker Persönlichkeit. • Für Menschen, die im Leben nicht weiterkommen aufgrund fehlender Zielsetzung. • Für Menschen, die häufig zwischen 1 und 3 Uhr morgens aufwachen und dann wieder einschlafen. • Spitzenaktivität der Leber ist von 01:00 – 03:00 Uhr. • Die Leber ist Yin – verbunden mit dem Yang-Organ der Gallenblase – entspricht dem Holz-Element und den Gefühlen von Zorn/Wut und Reizbarkeit. Zusatzprogramme: Holz-Element, Gallenblase-Meridian, Optimismus, Freude, Sehkraft, Nebenhöhlen, Entspannung, Kopfschmerzen, Energy-Ausgleich, Entgiftung, 3. Chakra",
    "lung-meridian-upper": "LUNGEN MERIDIAN",
    "lung-meridian-short": "LUNGEN",
    "lung-meridian-description": "• Synchronisiert die Lungen-Meridian-Aktivität. Für Menschen die zu Besorgnis und Kummer neigen und das Gefühl der Unterdrückung haben oder nicht genug einatmen. • Beugt häufigen Erkältungen, Grippe, Mandelentzündung und Halsschmerzen vor. • Mindert Allergie-Symptome. • Spitzenaktivität der Lunge ist von 03:00 – 05:00 Uhr• • Die Lunge ist Yin – verbunden mit dem Yan-Organ des Dickdarms – entspricht dem Metall-Element und dem Gefühl von Kummer/Angst. Zusatzprogramme: Metall-Element, Dickdarm-Meridian, Atmungssystem, Immunsystem, 4. Chakra",
    "pericardium-meridian-upper": "PERIKARDIUM MERIDIAN",
    "pericardium-meridian-short": "PERIKARDIUM",
    "pericardium-meridian-description": "• Harmonisiert den Perikardium-Meridian von übersensiblen Menschen. • Für Menschen die Schwierigkeiten haben sich anzufreunden (Anschluss finden). • Hilft seellische Erschütterungen/Traumas zu bewältigen, die verhindern gute Beziehungen aufrecht zu erhalten. • Lindert Kreislauf- und Sexualstörungen. • Spitzenaktivität ist von 19:00 – 21:00 Uhr. • Der Perikardium ist Yin – verbunden mit dem Yang-Organ des Dreifachen-Erwärmers – entspricht dem Feuer-Element. Zusatzprogramme: Dünndarm-Meridian, Feuer-Element, Dreifacher-Erwärmer-Meridian, Herz-Meridian, 3. und 4. Chakra",
    "small-intestine-meridian-upper": "DÜNNDARM MERIDIAN",
    "small-intestine-meridian-short": "DÜNNDARM",
    "small-intestine-meridian-description": "• Harmonisiert die Dünndarm-Funktion. • unterstützt die Verdauung. • verbessert die Nährstoffaufnahme. • Lindert das Gefühl von Unsicherheit und  Verwirrung. • Spitzenaktivität ist von 13:00 – 15:00 Uhr. • Der Dünndarm ist Yang – verbunden mit dem Yin Organ dem Herzt – entspricht dem Feuer-Element und dem Gefühl der Freude und der Erregung. Zusatzprogramme: Entgiftung, Durchfall, Harnsystem, Feuer-Element, Herz-Meridian und Dreifacher-Erwärmer-Meridian, 3. und 4. Chakra",
    "spleen-pancreas-meridian-upper": "BAUCHSPEICHELDRÜSE MER.",
    "spleen-pancreas-meridian-short": "BAUCHSPEICHELDRÜSE",
    "spleen-pancreas-meridian-description": "• Harmonisiert Milz-/Bauchspeicheldrüse-Aktivität. • Unterstützt die Aufspaltung von festen und flüssigen Nahrungsbestandteilen. • Reduziert zwanghafte Einstellung. • Unterstützend bei Entscheidungsfällungen und Durchsetzungsvermögen. • Fördert die Konzentration und das Gedächtnis. • Spitzenaktivität der Milz/Bauchspeicheldrüse ist von  9:00 bis 11:00 Uhr. • Die Milz/Bauchspeicheldrüse ist ein Yin Organ – verbunden mit dem Yang Organ dem Magen – entspricht dem Erde-Element. Zusatzprogramme: Erde-Element, Magen-Meridian, Dreifacher-Erwärmer-Meridian, VerdauungsSystem, Muskeln, KreislaufSystem, Durchfall,  2.  und 3.  Chakra",
    "stomach-meridian-upper": "MAGEN MERIDIAN",
    "stomach-meridian-short": "MAGEN",
    "stomach-meridian-description": "• Harmonisiert den Magen-Meridian. • Gegen Aufstossen, Übelkeit oder Erbrechen. • Lindert Schläfen-Kopfscherzen. • Bei Kieferhöhlenentzündung oder Trigeminusneuralgie. • Bei chronischem Stress. • Spitzenaktivität des Magens ist von 7:00 bis 9:00 Uhr. • Der Magen ist ein Yan-Organ – verbunden mit dem Yin-Organ der Milz  – entspricht dem Erde-Element und dem Gefühl von Angst und Stress. Zusatzprogramme: Erde-Element, VerdauungsSystem, Milz-/Bauchspeicheldrüse-Meridian, Kopfschmerzen, 3. Chakra",
    "triple-warmer-meridian-upper": "DREIFACHER ERWÄRMER MER.",
    "triple-warmer-meridian-short": "DREIFACHER ERWÄRMER",
    "triple-warmer-meridian-description": "• Harmonisiert den Dreifacher-Erwärmer-Meridian bei Menschen mit Hitze- oder Kältegefühl im Bauch. • Lindert Probleme im Zusammenhang mit der Nährstoffaufnahme und erlaubt eine effiziente Aufnahme der Nährstoffe und Ausleitung der Stoffwechsel-Endprodukte. • Verbessert den Stoffwechsel. • Spitzenaktivität des Dreifachen-Erwärmer-Meridians ist von 21:00 bis 23:00 Uhr. Zusatzprogramme: Holz-Element, Erde-Element, Lungen-Meridian, Herz-Meridian, Magen-Meridian, Milz-Meridian, Dünn- und Dickdarm-Meridiane, Nieren-Meridian, Blasen-Meridian, Atmungssystem, Verdauungssystem, 4. – 6. und 7. Chakra",
    "urinary-bladder-meridian-upper": "HARNBLASE MERIDIAN ",
    "urinary-bladder-meridian-short": "HARNBLASE",
    "urinary-bladder-meridian-description": "• Harmonisiert den Harnblase-Meridian (bei trockenen Augen, Gelenke, Hals, Dickdarm oder Scheide). • Für straffe und elastische Haut. • Unterstützt Menschen, die rasch in Panik geraten. • Fördert die Fähigkeit, schwierige Lebenssituationen zu meistern. • Spitzenaktivität der Harnblase ist von 15:00 bis 17:00 Uhr. • Die Harnblase ist Yang – verbunden mit dem Yin-Organ der Nieren- entspricht dem Wasser-Element und dem Angst-Gefühl. • Zusatzprogramme: Wirbelsäule, Erschöpfung, Augen, Gelenke,  Wasser-Element, Nieren-Meridian, Dreifacher-Erwärmer-Meridian, Dickdarm- Meridian, 2. Chakra",
    "metal-element-upper": "METALL ELEMENT",
    "metal-element-short": "METALL",
    "metal-element-description": "• Armonisiert emotionale Verhaltensweisen des Metal-Elementes: Traurigkeit und Depression. • Als Zusatzbehandlung bei Problemen mit abnormalen Organfunktionen: Lunge, Dickdarm und Haut, welche dem Metal-Element zugeordnet werden. Zusatzprogramme:  Meridiane und Chakras",
    "mineral-metabolic-activity-upper": "MINERAL STOFFWECHSEL",
    "mineral-metabolic-activity-description": "• Unterstützt die Mineral-Stoffwechseltätigkeit und optimiert dessen Aufnahme und Verwendung. • Zusatzbehandlung bei Stoffwechsel-Störungen. Zusatzprogramme:  Verdauung, Darmflora, Entgiftung, Frustration, Friede, E-smog, Feuer-Element, Dick- und Dünndarm-Meridian, Magen-Meridian, Dreifacher-Erwärmer-Meridian, 1.  und 2.  Chakra",
    "muscle-tissue-upper": "MUSKELGEWEBE",
    "muscle-tissue-description": "• Therapiert das Muskelgewebe und regt die Muskelgenesung an. • Untersützt die Regenerierung des Muskelgewebes nach kleineren Verletzungen. • Unterstützt die Behandlung bei motorischen Befindlichkeitsstörungen (z.B. nach Unfall oder nach Gehirnschlag mit Lähmungserscheinung). • Steigert die muskuläre Leistungsfähigkeit und vermindert das Verletzungsrisiko. • Unterstützend für gesunde Gelenke durch Harmonisierung der Muskel-Fehlstellung. • Bei Neigung zu Muskelschwund. Zusatzprogramme: Kreislauf-System, Nervensystem, Bindegewebe, Lymphsystem, Regeneration, Verdauungssystem, Milz-Meridian, Dünndarm-Meridian, 1.  und  7.  Chakra",
    "neck-shoulder-upper": "NACKEN-SCHULTER",
    "neck-shoulder-description": "• Löst Verspannungen im Nacken/Schulterbereich. • Erhöht die Leistungsfähigkeit der Blutgefässe im Nacken- und Kopfbereich. Zusatzprogramme: Kreislaufsystem, Wirbelsäule, Bindegewebe, Muskeln, Nervensystem, E-Smog, Gallenblase-Meridian, Harnblase-Meridian, Dreifacher-Erwärmer-Meridian, 1. und 5.  Chakra",
    "nervous-system-upper": "NERVENSYSTEM",
    "nervous-system-description": "• Fördert die Entspannung und Regenerierung des Zentral-Nervensystems. • Unterstützt die Behandlung von entartetem Muskel-Leiden (z.B. bei Muskelschwund). • Ergänzt die Nervenzellen-Behandlung bei der Regenerierung. • Ergänzt Muskelkoordinations-Behandlungen hervorgerufen durch Abgespanntheit (z.B. schwaches Nieren-Chi, erschöpfte Nebennieren,etc.). • Ergänzt die Behandlung bei häufigen spontanen Muskelbewegungen. • Parasiten können für eine andauernde Überstimmulierung des Nervensystems verantwortlich sein. Zusatzprogramme: Leber-Meridian, Anti-Aging, Entgiftung, Mineralien-Stoffwechsel-Störung, Wirbelsäule, Dickdarm, Verletzung, 6. und 7. Chakra",
    "pain-upper": "SCHMERZEN",
    "pain-description": "• Bei akuten und chronischen Schmerzen. • Bei Kopf- und Gelenkschmerzen. • Anwendung nach Traumas oder Operationen. • Mindert Schmerzen aufgrund von Krampfadern. • Bei chronischen Schmerzen ist der Therapieerfolg nach einigen Tagen der Anwendung spürbar. Zusatzprogramme: Verletzung, Entspannung, Freude, Frustration, Nervensystem, Friede, Muskeln, Bindegewebe, Knochen, Gelenke, Verdauungssystem, Energie-Ausgleich, Chakras, Elemente und Meridiane",
    "peace-upper": "FRIEDE",
    "peace-description": "• Besänftigt schwere emotionale Momente (Unfall, Scheidung, Probleme bei der Arbeit). • Stabilisiert die innere Harmonie. • Entspannend nach langer Arbeits- oder Lernstunden. Zusatzprogramme: E-Smog, Energie-Ausgleich, Frustration, Friede, Entspannung, Metall-Element, Wasser-Element, Herz-Meridian, Perikardio-Meridian, Leber-Meridian, Gallenblase-Meridian, Chakras",
    "regeneration-upper": "REGENERIERUNG",
    "regeneration-description": "• Beschleunigt den Regenerationsprozess bei körperlicher Ermüdung. • Lindert Muskelschmerzen nach dem Training. • Mindert das Erschöpfungsgefühl in den Beinen und im Lendenbereich nach langem Stehen und/oder Laufen. Zur Auffrischung der Beine und Hüfte. • Fördert die mentale Leistungsfähigkeit durch die körperliche Auffrischung. • Lindert Muskelkater nach körperlicher Anstrengung, 1 – 2 Anwendung gleich nach dem Training. • Nach dem Wettkampf or extremem Training. Zusatzprogramme: Lymphsystem, Kreislaufsystem, Energie-Spender, Lebensfreude, Muskeln, Verdauungssystem, Nebennieren, Nervensystem, Bindegewebe, Erde-Element, 1., 2. und 7. Chakra",
    "relaxation-upper": "ENTSPANNUNG",
    "relaxation-description": "• Bei Stress und Verspannungen. • Hilft unverarbeitete Emotionen und Stress zu kanalisieren. Zusatzprogramme:  Energie-Ausgleich, Frustration, Freude, Nebennieren, Friede, Schilddrüse, E-Smog, Herz-Meridian, 1. – 4. und 7. Chakra",
    "respiratory-system-upper": "ATMUNGSSYSTEM",
    "respiratory-system-description": "• Als komplementäre Selbstversorgung bei Atemwegs-Erkrankungen. • Stimuliert Heilungsprozess der Atemwege bei Husten, Grippe, Bronchitis, Mandelentzündung, Lungenentzündung (als Ergänzung). • Bei Reizhusten (auch Raucherhusten) Das Programm mind. 6 Wochen anwenden. • Optimiert die Atmungsfunktionen bei Erkälung. Beginne mit dem Programm bei den ersten Anzeichen und wende es bis einige Tage, nachdem die Symptome verschwunden sind, an Befreit die Atemwege. • Fördert die Wirkung von Atemübungen. Eine wirkungsvolle Ergänzung zu Yoga Positionen (asanas) – harmonisiert die Atmung und behalt ihn in einem natürlichen Rythmus. Zusatzprogramme: Immunsystem, Lymphsystem, Frustration, Grippe, Nebenhöhlen, Darmflora, Verdauungssystem, E-Smog, Energie-Ausgleich, Freude",
    "sinus-cavities-upper": "STIRNHÖHLEN",
    "sinus-cavities-description": "• Lindert akute und chronische Stirnhöhlenentzündung und Schmerzen im Gesicht. • Unterstützt das Immunsystem. • Unterstützt die Stoffwechselvorgänge der Stirnhöhlen, und ist hilfreich bei Allergiesymptomen Als Vorbeugung für Stirnhöhlenentzündung in der Inkubinationszeit der Grippe. • Dieses Programm soll, über mehrere Tage nachdem die Symptome verschwunden sind, angewendet werden. Zusatzprogramme:  Immunsystem, Lymphsystem, Atmungssystem, Entgiftung, Metall-Element, Darmflora, Lungen-Meridian, 4. , 5.  und 6.  Chakra",
    "skin-conditions-upper": "HAUT",
    "skin-conditions-description": "• Bei Hauterkrankungen. • Ergänzend bei Hautentzündungen bei therapeutischen Eingriffen. • Ergänzungstherapie bei hormonellem Ungleichgewicht. Zusatzprogramme: Entgiftung, Anti Aging, Bindegewebe, Verdauungssystem, Für den Mann, Für die Frau, Metall-Element, Leber-Meridian, Gallenblase-Meridian, Harnblase-Meridian, 1., 2. und 4. Chakra",
    "sleep-enhancer-upper": "SCHLAF-FÖRDERND",
    "sleep-enhancer-description": "• Bei Einschlaf- und Durchschlafproblemen. • Verringert depressive Gedanken. • Steigert das körperliche und emotionale Friedensgefühl. Zusatzprogramme:   Energie-Ausgleich, Entspannung, Nebenniere, Friede, E-Smog, Freude, Frustration, Schilddrüsen, 1., 2., 3., 6. und 7. Chakra",
    "stress-relief-upper": "STRESS/FRUSTRATION",
    "stress-relief-description": "• Hilfreich bei akuter Frustration. • Unterstützend bei der körperlichen und psychischen Problemlösung aufgrund von unterdrückten Emotionen. • Bei Überreaktionen (die oft in selbstzerstörenden Aktionen enden) aufgrund von einer angespannten Lebensführung. • Vermindert psychische Anspannung (z.B. bei der Selbstwarnehmung). • Befreit von elektromagnetischen Engrammen der unterdrückten Emotionen, welche zu agressivem Verhalten führen. • Für Menschen die immer allen helfen und sich selber zu wenig Zeit widmen. Verringert Störungen des Nervensystems und der Koordination, die durch unterdrückte Emotionen und Enttäuschungen hervorgerufen werden. • Für Leute, die das Gefühl haben, vom Leben selbst ungerecht behandelt zu werden. Zusatzprogramme: E-smog, Friede, Entspannung, Freude, Nebennieren, Energie-Ausgleich, Gallenblase-Meridian, Leber-Meridian, Feuer-Element, Herz-Meridian, Meditation 1., 2. , 3.  und 6.  Chakra",
    "thyroid-glands-upper": "SCHILDDRÜSE",
    "thyroid-glands-description": "• Als Ergänzungstherapie für Unter- und Übergewichtige. • Fördert die Wirkung von Abmagerungskuren und unterstützt die Lebenskraft. • Optimiert die Funktion der Zellmembrane. Zusatzprogramme: Nerven, Nebenniere, Anti-Aging, Kreislaufsystem, Freude, Frustration, Milz/Bauchspeicheldrüse-Meridian, Dreifacher-Erwärmer-Meridian, 2. und 5. Chakra",
    "urinary-upper": "HARNSYSTEM",
    "urinary-description": "• Bei Blasenentzündung. • Mindert häufig vorkommender Schüttelfrost. Zusatzprogramme: Entspannung, Frustration, Nebenniere, Immunsystem, Darmflora, Harnblase-Meridian, Dreifacher-Erwärmer-Meridian, Wasser-Element, 2. Chakra",
    "vertebrae-upper": "WIRBELSÄULE",
    "vertebrae-description": "• Ergänzend bei Rückentherapien. • Vorbeugend gegen Gewebeschädigung bei Menschen, die häufig schwere Dinge heben. • Reduziert Rückenprobleme, die häufig nach chronischen Verdauungsstörungen auftreten. Zusatzprogramme: Muskeln,  Knochen, Gelenke, Entspannung, Bindegewebe, Verdauungssystem, Holz-Element, Leber-Meridian, Harnblase-Meridian, Gallenblase-Meridian,1.  und 2.  Chakra",
    "vitality-upper": "LEBENSKRAFT’",
    "vitality-description": "• Fördert die Vitalität. • Zur erfolgreichen Ausscheidung von Stoffwechsel-Abfallprodukten. • Verringert die tägliche Last an geistigem und körperlichem Stress. Zusatzprogramme:  Energie-Ausgleich, Energie-Spender, Nebennieren, Schilddrüsen, Mineral-Stoffwechsel, Bindegewebe, Knochen, Darmflora, E smog, Alle Meridian-Programme, 1. – 2. und 3. Chakra",
    "water-element-upper": "WASSER ELEMENT",
    "water-element-short": "WASSER",
    "water-element-description": "• Harmonisiert das emotionale Verhalten des Wasserelements wie Stress und Angst • Als ergänzende Behandlung von Problemen, die durch abnormale Aktivität von Organen wie Niere, Blase, Knochen und Sinnesorganen wie den vom Wasserelement kontrollierten Ohren entstehen. Support-Programme: Nierenmeridian, Meridian Harnblase, Lymphsystem, Stimmung, Knochen, Intuition, Frustration, Konzentration, Erdelement",
    "weight-control-upper": "GEWICHTSKONTROLLE",
    "weight-control-description": "• Ergänzend bei Gewichtsabnahme-Behandlungen. • Begünstigt die Nährstoffaufnahme. • Fördert die Gifststoff-Ausscheidung. • Verstärkt die Lebenskraft. • Vermindert überschüssige Nahrungsaufnahme aufgrund unterdrückter Emotionen. • Reduziert Depression während spezieller Diäten. • Unterdrückt das übermässige Verlangen auf Nahrung . • Unterstützt den Hormon-Haushalt. Zusatzprogramme: Verdauungssystem, Schilddrüse/Stoffwechsel, Entgiftung, Mineral-Stoffwechsel, Zucker-Stoffwechsel, Sucht, Erde-Element, Metall-Element, Dick- /Dünndarm-Meridian, Leber-Meridian, Gallenblase-Meridian, Meditation I, II, III, 1.  und 2.  Chakra",
    "wood-element-upper": "HOLZ ELEMENT",
    "wood-element-short": "HOLZ",
    "wood-element-description": "• Harmonisiert das emotionale Verhalten des Holzelements wie Wut • Als ergänzende Behandlung für Probleme, die durch abnormale Aktivität von Organen wie Leber, Blase, Gewebe, wie Sehnen und Sinnesorgane wie den durch das Holzelement kontrollierten Augen entstehen. Unterstützungsprogramme: Lebermeridian, Meridian-Gallenblase, Nerven, Muskeln, Frustration, Bindegewebe, Gelenk, Milzmeridian, Erdelement, Metallelement, Entgiftung, Frieden, 1. Chakra, 3. Chakra, 4. Chakra , 6. Chakra",
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
    "petss-program-upper": "PET S",
    "petss-program-description": "•Dieses Programm in Kombination mit den anderen, hilft Ihrem Haustier (Katze, kleinem Hund oder kleinem Säugetier) sich viel schneller von Verletzungen, Krankheit oder Traumas der Trennung oder Reisen zu erholen.",
    "petsx-program-upper": "PET X",
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
            textName: '', name: 'earth-element-upper',
            apiName: "Earth_Element",
            runningtime: "16:55",
            description: 'earth-element-description'
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
            textName: '', name: 'water-element-upper',
            apiName: "Water_Element",
            runningtime: "17:20",
            description: 'water-element-description'
        },
        {
            textName: '', name: 'wood-element-upper',
            apiName: "Wood_Element",
            runningtime: "17:09",
            description: 'wood-element-description'
        },
        {
            textName: '', name: 'gallbladder-meridian-upper',
            apiName: "Gallbladder_Meridian",
            runningtime: "20:39",
            description: 'gallbladder-meridian-description'
        },
        {
            textName: '', name: 'heart-meridian-upper',
            apiName: "Heart_Meridian",
            runningtime: "14:45",
            description: 'heart-meridian-description'
        },
        {
            textName: '', name: 'kidney-meridian-upper',
            apiName: "Kidney_Meridian",
            runningtime: "16:27",
            description: 'kidney-meridian-description'
        },
        {
            textName: '', name: 'large-intestine-meridian-upper',
            apiName: "Large_Intestine_Meridian",
            runningtime: "13:53",
            description: 'large-intestine-meridian-description'
        },
        {
            textName: '', name: 'liver-meridian-upper',
            apiName: "Liver_Meridian",
            runningtime: "16:11",
            description: 'liver-meridian-description'
        },
        {
            textName: '', name: 'lung-meridian-upper',
            apiName: "Lung_Meridian",
            runningtime: "16:38",
            description: 'lung-meridian-description'
        },
        {
            textName: '', name: 'pericardium-meridian-upper',
            apiName: "Pericardium_Meridian",
            runningtime: "21:55",
            description: 'pericardium-meridian-description'
        },
        {
            textName: '', name: 'small-intestine-meridian-upper',
            apiName: "Small_Intestine_Meridian",
            runningtime: "13:25",
            description: 'small-intestine-meridian-description'
        },
        {
            textName: '', name: 'spleen-pancreas-meridian-upper',
            apiName: "Spleen_Meridian",
            runningtime: "15:37",
            description: 'spleen-pancreas-meridian-description'
        },
        {
            textName: '', name: 'stomach-meridian-upper',
            apiName: "Stomach_Meridian",
            runningtime: "17:15",
            description: 'stomach-meridian-description'
        },
        {
            textName: '', name: 'triple-warmer-meridian-upper',
            apiName: "Triple_Warmer_Meridian",
            runningtime: "13:20",
            description: 'triple-warmer-meridian-description'
        },
        {
            textName: '', name: 'urinary-bladder-meridian-upper',
            apiName: "Urinary_Bladder_Meridian",
            runningtime: "14:19",
            description: 'urinary-bladder-meridian-description'
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
            textName: '', name: "e-smog-upper",
            apiName: "Electro_Smog",
            runningtime: "14:51",
            description: 'e-smog-description'
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
            textName: '', name: "jet-lag-upper",
            apiName: "Jet-Lag/Climate_Change",
            runningtime: "16:14",
            description: 'jet-lag-description'
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
            textName: '', name: 'pain-upper',
            apiName: "Pain_Conditions",
            runningtime: "15:18",
            description: 'pain-description'
        },
        {
            textName: '', name: 'peace-upper',
            apiName: "Peace",
            runningtime: "22:08",
            description: 'peace-description'
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
            __WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs[i].textName = __WEBPACK_IMPORTED_MODULE_5__services_german_texts__["a" /* GermanTexts */][__WEBPACK_IMPORTED_MODULE_2__services_offline_data__["a" /* Data */].Programs[i].name];
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
                group.textName = __WEBPACK_IMPORTED_MODULE_5__services_german_texts__["a" /* GermanTexts */][group.name];
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
    localIPAddress: '192.168.0.100',
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
                program.textName = __WEBPACK_IMPORTED_MODULE_3__services_german_texts__["a" /* GermanTexts */][program.name];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9zbGlkZXIvc2xpZGVyLnRzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5IiwiLi4vLi4vc3JjIGxhenkiLCIuLi8uLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3N1YnNjcmliZS9zdWJzY3JpYmUudHMiLCIuLi8uLi9zcmMvc2VydmljZXMvZ2VybWFuLXRleHRzLnRzIiwiLi4vLi4vc3JjL3NlcnZpY2VzL29mZmxpbmVfZGF0YS50cyIsIi4uLy4uL3NyYy9wYWdlcy9wcm9ncmFtcy9wcm9ncmFtcy50cyIsIi4uLy4uL3NyYy9wYWdlcy9wcm9ncmFtL3Byb2dyYW0udHMiLCIuLi8uLi9zcmMvcGFnZXMvd2lmaS93aWZpLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3BsYXlpbmcvcGxheWluZy50cyIsIi4uLy4uL3NyYy9wYWdlcy9oZWxwL2hlbHAudHMiLCIuLi8uLi9zcmMvcGFnZXMvY29udGFjdC9jb250YWN0LnRzIiwiLi4vLi4vc3JjL2FwcC9tYWluLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLi4vLi4vc3JjL3NlcnZpY2VzL2NvbnN0YW50cy50cyIsIi4uLy4uL3NyYy9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UudHMiLCIuLi8uLi9zcmMvcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy50cyIsIi4uLy4uL3NyYy9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDWTtBQUN4QjtBQUNpQjtBQUNqQjtBQUN6Qzs7Ozs7R0FLRztBQU1IO0lBS0Usb0JBQW1CLE9BQXNCLEVBQVMsU0FBb0IsRUFBUyxHQUFhLEVBQVMsT0FBZ0I7UUFBbEcsWUFBTyxHQUFQLE9BQU8sQ0FB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QztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLFNBQVMsR0FBRyxHQUFHLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDOUgsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLFNBQVMsR0FBRyxHQUFHLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDOUgsQ0FBQztJQUNMLENBQUM7SUEzRlEsZ0JBQWdCO1FBRDVCLHlFQUFVLEVBQUU7eUNBT2lCLCtEQUFPO09BTnhCLGdCQUFnQixDQTRGNUI7SUFBRCx1QkFBQztDQUFBO0FBNUY0QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgU2xpZGVzIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgR2VybWFuVGV4dHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nZXJtYW4tdGV4dHMnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgU2xpZGVyUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyUGFnZSB7XG4gIHB1YmxpYyBzaG93SGVhZGVyIDogYm9vbGVhbjtcbiAgQFZpZXdDaGlsZCgnc2xpZGVzJykgc2xpZGVzOiBTbGlkZXM7XG4gIHB1YmxpYyBpbWFnZXMgOiBBcnJheTxzdHJpbmc+O1xuICBwdWJsaWMgY3VsdHVyZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwdWJsaWMgcGx0OiBQbGF0Zm9ybSwgcHVibGljIHN0b3JhZ2U6IFN0b3JhZ2UpIHtcbiAgICB0aGlzLnNob3dIZWFkZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuY3VsdHVyZSA9IEdlcm1hblRleHRzWydjdWx0dXJlJ107XG4gICAgdGhpcy5pbWFnZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPD0gNTsgaSsrKXtcbiAgICAgIHRoaXMuaW1hZ2VzLnB1c2goJy4vYXNzZXRzL2ltZ3MvaW5zdHJ1Y3Rpb25zLycgKyB0aGlzLmN1bHR1cmUgKyAnLycrIGkgKycucG5nJyk7XG4gICAgfVxuICB9XG5cbiAgc2tpcEluc3RydWN0aW9ucygpe1xuICAgIHRoaXMubmF2Q3RybC5wb3BUb1Jvb3QoKTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgdGhpcy5zbGlkZXMuc2xpZGVOZXh0KCk7XG4gIH1cblxuICBwcmV2KCkge1xuICAgIHRoaXMuc2xpZGVzLnNsaWRlUHJldigpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvc2xpZGVyL3NsaWRlci50cyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDE0NTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eVxuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDE4OTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYyBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgRXZlbnRzLCBNb2RhbENvbnRyb2xsZXIsIENvbnRlbnQgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVQYWdlIH0gZnJvbSAnLi4vc3Vic2NyaWJlL3N1YnNjcmliZSc7XG5pbXBvcnQgeyBSb3V0aW5lc1Byb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3JvdXRpbmVzL3JvdXRpbmVzJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IERldmljZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV2aWNlJztcbmltcG9ydCB7IEFQSVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBQcm9ncmFtc1BhZ2UgfSBmcm9tICcuLi9wcm9ncmFtcy9wcm9ncmFtcyc7XG5pbXBvcnQgeyBXaWZpUGFnZSB9IGZyb20gJy4uL3dpZmkvd2lmaSc7XG5pbXBvcnQgeyBGYXZvcml0ZXNQYWdlIH0gZnJvbSAnLi4vZmF2b3JpdGVzL2Zhdm9yaXRlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIHtcbiAgQFZpZXdDaGlsZChDb250ZW50KSBjb250ZW50OiBDb250ZW50O1xuICBwdWJsaWMgYnViYmxlc05hbWVzMSA6IHN0cmluZztcbiAgcHVibGljIGJ1YmJsZXNOYW1lczIgOiBzdHJpbmc7XG4gIHB1YmxpYyBidWJibGVzTmFtZXMzIDogc3RyaW5nO1xuICBwdWJsaWMgYnViYmxlc05hbWVzNCA6IHN0cmluZztcbiAgcHVibGljIEVuYWJsZVJ1blJvdXRpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0N1cnJlbnRTdGF0ZTEgOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0N1cnJlbnRTdGF0ZTIgOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0N1cnJlbnRTdGF0ZTMgOiBib29sZWFuO1xuICBwdWJsaWMgYnViYmxlc0N1cnJlbnRTdGF0ZTQgOiBib29sZWFuO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgb2ZmbGluZV9kZXZpY2UgOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93QWRkRmF2b3JpdGVCdXR0b24gOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93TGF0ZXN0U2VjdGlvbjogYm9vbGVhbjtcbiAgcHVibGljIGxhdGVzdFJvdXRpbmVzIDogYW55O1xuICBwdWJsaWMgdGFiX2J1YmJsZSA6IHN0cmluZztcbiAgcHVibGljIHJ1bl9yb3V0aW5lIDogc3RyaW5nO1xuICBwdWJsaWMgYWRkX2Zhdm9yaXRlIDogc3RyaW5nO1xuICBwdWJsaWMgY2xlYW5fcm91dGluZSA6IHN0cmluZztcbiAgcHVibGljIGxhdGVzdF9yb3V0aW5lcyA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgcm91dGluZXM6IFJvdXRpbmVzUHJvdmlkZXIsXG4gICAgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLCBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHVibGljIGV2ZW50czogRXZlbnRzLCBwcml2YXRlIGRldmljZTogRGV2aWNlLFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlIDogQVBJU2VydmljZVByb3ZpZGVyLCBwdWJsaWMgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIpIHtcbiAgICB0aGlzLnRhYl9idWJibGUgPSBHZXJtYW5UZXh0c1sndGFwLWJ1YmJsZSddO1xuICAgIHRoaXMucnVuX3JvdXRpbmUgPSBHZXJtYW5UZXh0c1sncnVuLXJvdXRpbmUnXTtcbiAgICB0aGlzLmFkZF9mYXZvcml0ZSA9IEdlcm1hblRleHRzWydhZGQtZmF2b3JpdGUnXTtcbiAgICB0aGlzLmNsZWFuX3JvdXRpbmUgPSBHZXJtYW5UZXh0c1snY2xlYW4tcm91dGluZSddO1xuXG4gICAgLy90aGlzLmNoZWNrQWxsQnViYmxlcygpO1xuICAgIHRoaXMuZXZlbnRzLnN1YnNjcmliZSgnc2hhcmVzQnViYmxlcycsIChidWJibGVzKSA9PiB7XG4gICAgICBmb3IodmFyIGkgPSAxOyBpIDw9IGJ1YmJsZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoaSwgYnViYmxlc1tpIC0gMV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5BbGxCdWJibGVzQ2hlY2tlZCh0aGlzLnJvdXRpbmVzLmdldFByb2dyYW1zKCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ldmVudHMuc3Vic2NyaWJlKCdhZGRQcm9ncmFtc0V2ZW50JywgKHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMsIHByb2dyYW00KSA9PiB7XG4gICAgICB0aGlzLm5hdkN0cmwucG9wKCk7XG4gICAgICBjb25zb2xlLmxvZyhwcm9ncmFtMSk7XG4gICAgICBsZXQgYnViYmxlcyA9IHRoaXMucm91dGluZXMuYWRkUHJvZ3JhbXMoJycsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMsIHByb2dyYW00KTtcbiAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJzaGFyZXNCdWJibGVzXCIsIGJ1YmJsZXMpO1xuICAgIH0pO1xuICAgIHRoaXMuQWxsQnViYmxlc0NoZWNrZWQodGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpKTtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy90aGlzLm5hdkN0cmwucHVzaChTdWJzY3JpYmVQYWdlLCB7IGNhbGxCYWNrUGFnZSA6ICdub25lJyB9KTtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChpbmZvKT0+e1xuICAgICAgaWYodHlwZW9mIGluZm8gPT09ICd1bmRlZmluZWQnIHx8IGluZm8gPT0gbnVsbCl7XG4gICAgICAgIC8qaWYod2luZG93Lmhhc093blByb3BlcnR5KCdjb3Jkb3ZhJykpeyovXG4gICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgdmFyIF91dWlkID0gQ29uc3RhbnRzLnRlc3RfdXVpZDtcbiAgICAgICAgICBpZih3aW5kb3cuaGFzT3duUHJvcGVydHkoJ2NvcmRvdmEnKSl7XG4gICAgICAgICAgICBfdXVpZCA9IHRoaXMuZGV2aWNlLnV1aWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXVpZCcsIF91dWlkKTtcblxuICAgICAgICAgIC8vdmFyIGRhdGEgPSB7ICd1dWlkJyA6IENvbnN0YW50cy50ZXN0X3V1aWQgfTtcblxuICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5ydW5Qb3N0KCdjaGVja19kZXZpY2UucGhwJyxmb3JtRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjaGVja19kZXZpY2Ugc3VjY2VzcycpO1xuICAgICAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2JqIDogYW55ID0gcmVzdWx0O1xuICAgICAgICAgICAgaWYgKG9iai5mb3VuZCA9PSBcIjBcIikge1xuICAgICAgICAgICAgICAvLyBkZXNwbGllZ2EgbGEgdmlzdGEgZGUgaW5zZXJjaW9uIGRlIGRhdG9zXG4gICAgICAgICAgICAgIHRoaXMubmF2Q3RybC5wdXNoKFN1YnNjcmliZVBhZ2UsIHsgY2FsbEJhY2tQYWdlIDogJ25vbmUnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuZGV2aWNlSW5mb0tleSwgeyBcImVtYWlsXCIgOiBvYmouZW1haWwsIFwidXVpZFwiIDogX3V1aWQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2hlY2tfZGV2aWNlIGVycm9yICcgKyByZXN1bHQpO1xuICAgICAgICAgICAgLy90aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICAgICAgICAvKnRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlMYW5nKS50aGVuKChsYW5nKT0+e1xuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRpb24obGFuZykuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub2ZmbGluZV9kZXZpY2UgPSB2YWx1ZVsnb2ZmbGluZS1kZXZpY2UtdGV4dC0yJ107XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7Ki9cbiAgICAgICAgICB9KTtcbiAgICAgICAgLyp9Ki9cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZFByb2dyYW1zKHJvdXRpbmVOYW1lLCBwcm9ncmFtMCwgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMyl7XG4gICAgdGhpcy5ldmVudHMucHVibGlzaCgnYWRkUHJvZ3JhbXNFdmVudCcsIHByb2dyYW0wLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zKTtcbiAgICB0aGlzLmNvbnRlbnQuc2Nyb2xsVG8oMCwgMCwgMTAwKTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLmxhdGVzdFJvdXRpbmVzS2V5KS50aGVuKChsYXRlc3RzKT0+e1xuICAgICAgaWYobGF0ZXN0cyl7XG4gICAgICAgIHRoaXMuc2hvd0xhdGVzdFNlY3Rpb24gPSB0cnVlO1xuICAgICAgICB0aGlzLmxhdGVzdFJvdXRpbmVzID0gbGF0ZXN0cztcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHRoaXMuc2hvd0xhdGVzdFNlY3Rpb24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5BZGRGYXZvcml0ZSgpe1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXkpLnRoZW4oKGluZm8pPT57XG4gICAgICBpZih0eXBlb2YgaW5mbyA9PT0gJ3VuZGVmaW5lZCcgfHwgaW5mbyA9PSBudWxsKXtcbiAgICAgICAgLy8gZGVzcGxpZWdhIGxhIHZpc3RhIGRlIGluc2VyY2lvbiBkZSBkYXRvc1xuICAgICAgICB0aGlzLm5hdkN0cmwucHVzaChTdWJzY3JpYmVQYWdlLCB7IGNhbGxCYWNrUGFnZSA6ICdmYXZvcml0ZXMnIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHByb2ZpbGVNb2RhbCA9IHRoaXMubW9kYWxDdHJsLmNyZWF0ZShGYXZvcml0ZXNQYWdlLCB7ICdzaG93U2F2ZSc6IHRydWUgfSk7XG4gICAgICAgIHByb2ZpbGVNb2RhbC5wcmVzZW50KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVQcm9ncmFtRnJvbVJvdXRpbmUocHJnKXtcbiAgICBjb25zb2xlLmxvZygnaG9sZDogJyArIHByZyk7XG4gIH1cblxuICBzZWxlY3RCdWJibGUocHJnLCBhZGQpe1xuICAgIHRoaXMubmF2Q3RybC5wdXNoKFByb2dyYW1zUGFnZSwgeyBidWJibGU6IHByZyB9KTtcbiAgfVxuXG4gIHJ1blJvdXRpbmUoKXtcbiAgICB2YXIgcHJvZ3JhbXMgPSB0aGlzLnJvdXRpbmVzLmdldFByb2dyYW1zKCk7XG4gICAgaWYodGhpcy5BbGxCdWJibGVzQ2hlY2tlZChwcm9ncmFtcykpe1xuICAgICAgdGhpcy5uYXZDdHJsLnB1c2goXG4gICAgICAgIFdpZmlQYWdlLFxuICAgICAgICB7IHByb2cxOiB0aGlzLnJvdXRpbmVzLmdldFByb2dyYW0ocHJvZ3JhbXNbMF0pLCBwcm9nMjogdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtKHByb2dyYW1zWzFdKSwgcHJvZzM6IHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbShwcm9ncmFtc1syXSksIHByb2c0OiB0aGlzLnJvdXRpbmVzLmdldFByb2dyYW0ocHJvZ3JhbXNbM10pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIEFsbEJ1YmJsZXNDaGVja2VkKHByb2dyYW1zKXtcblxuICAgIGlmKHR5cGVvZiBwcm9ncmFtc1swXSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvZ3JhbXNbMF0gIT0gbnVsbCAmJiBwcm9ncmFtc1swXS5sZW5ndGggPiAwICYmXG4gICAgdHlwZW9mIHByb2dyYW1zWzFdICE9PSAndW5kZWZpbmVkJyAmJiBwcm9ncmFtc1sxXSAhPSBudWxsICYmIHByb2dyYW1zWzFdLmxlbmd0aCA+IDAgJiZcbiAgICB0eXBlb2YgcHJvZ3JhbXNbMl0gIT09ICd1bmRlZmluZWQnICYmIHByb2dyYW1zWzJdICE9IG51bGwgJiYgcHJvZ3JhbXNbMl0ubGVuZ3RoID4gMCAmJlxuICAgIHR5cGVvZiBwcm9ncmFtc1szXSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvZ3JhbXNbM10gIT0gbnVsbCAmJiBwcm9ncmFtc1szXS5sZW5ndGggPiAwKXtcbiAgICAgICAgdGhpcy5FbmFibGVSdW5Sb3V0aW5lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93QWRkRmF2b3JpdGVCdXR0b24gPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgdGhpcy5FbmFibGVSdW5Sb3V0aW5lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd0FkZEZhdm9yaXRlQnV0dG9uID0gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5FbmFibGVSdW5Sb3V0aW5lO1xuICB9XG5cbiAgY2xlYW5Sb3V0aW5lKCl7XG4gICAgdGhpcy5yb3V0aW5lcy5jbGVhblByb2dyYW1zKCk7XG4gICAgdGhpcy5BbGxCdWJibGVzQ2hlY2tlZCh0aGlzLnJvdXRpbmVzLmdldFByb2dyYW1zKCkpO1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUxLCcnKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMiwnJyk7XG4gICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTMsJycpO1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGU0LCcnKTtcbiAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoMSwnJyk7XG4gICAgdGhpcy51cGRhdGVCdWJibGVzKDIsJycpO1xuICAgIHRoaXMudXBkYXRlQnViYmxlcygzLCcnKTtcbiAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoNCwnJyk7XG4gICAgdGhpcy5zaG93QWRkRmF2b3JpdGVCdXR0b24gPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQnViYmxlcyhidWJibGUsbmFtZSl7XG4gICAgc3dpdGNoKGJ1YmJsZSl7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGlmKHR5cGVvZiBuYW1lICE9PSAndW5kZWZpbmVkJyAmJiBuYW1lLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTEgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMSA9IHR5cGVvZiBHZXJtYW5UZXh0c1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBuYW1lIDogR2VybWFuVGV4dHNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNDdXJyZW50U3RhdGUxID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5idWJibGVzTmFtZXMxID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGlmKHR5cGVvZiBuYW1lICE9PSAndW5kZWZpbmVkJyAmJiBuYW1lLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTIgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMiA9IHR5cGVvZiBHZXJtYW5UZXh0c1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBuYW1lIDogR2VybWFuVGV4dHNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNDdXJyZW50U3RhdGUyID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5idWJibGVzTmFtZXMyID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGlmKHR5cGVvZiBuYW1lICE9PSAndW5kZWZpbmVkJyAmJiBuYW1lLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTMgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzMyA9IHR5cGVvZiBHZXJtYW5UZXh0c1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBuYW1lIDogR2VybWFuVGV4dHNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNDdXJyZW50U3RhdGUzID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5idWJibGVzTmFtZXMzID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGlmKHR5cGVvZiBuYW1lICE9PSAndW5kZWZpbmVkJyAmJiBuYW1lLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYnViYmxlc05hbWVzNCA9IHR5cGVvZiBHZXJtYW5UZXh0c1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBuYW1lIDogR2VybWFuVGV4dHNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNDdXJyZW50U3RhdGU0ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5idWJibGVzTmFtZXM0ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLypwcml2YXRlIGNoZWNrQWxsQnViYmxlcygpe1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUxKS50aGVuKCh2YWwpPT57XG4gICAgICBpZih2YWwgIT09IG51bGwpe1xuICAgICAgICB2YXIgbmFtZSA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoMSxuYW1lKTtcbiAgICAgICAgdGhpcy5yb3V0aW5lcy5zZXRQcm9ncmFtKDEsbmFtZSlcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB2YXIgZW1haWxEYXRhID0geyBhcmVhIDogJ2NoZWNrQWxsQnViYmxlcyAxJywgbWVzc2FnZSA6IGVyciB9O1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRFcnJvcihlbWFpbERhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMikudGhlbigodmFsKT0+e1xuICAgICAgaWYodmFsICE9PSBudWxsKXtcbiAgICAgICAgdmFyIG5hbWUgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzKDIsbmFtZSk7XG4gICAgICAgIHRoaXMucm91dGluZXMuc2V0UHJvZ3JhbSgyLG5hbWUpXG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdmFyIGVtYWlsRGF0YSA9IHsgYXJlYSA6ICdjaGVja0FsbEJ1YmJsZXMgMicsIG1lc3NhZ2UgOiBlcnIgfTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZW5kRXJyb3IoZW1haWxEYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTMpLnRoZW4oKHZhbCk9PntcbiAgICAgIGlmKHZhbCAhPT0gbnVsbCl7XG4gICAgICAgIHZhciBuYW1lID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlcygzLG5hbWUpO1xuICAgICAgICB0aGlzLnJvdXRpbmVzLnNldFByb2dyYW0oMyxuYW1lKVxuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHZhciBlbWFpbERhdGEgPSB7IGFyZWEgOiAnY2hlY2tBbGxCdWJibGVzIDMnLCBtZXNzYWdlIDogZXJyIH07XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2VuZEVycm9yKGVtYWlsRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGU0KS50aGVuKCh2YWwpPT57XG4gICAgICBpZih2YWwgIT09IG51bGwpe1xuICAgICAgICB2YXIgbmFtZSA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoNCxuYW1lKTtcbiAgICAgICAgdGhpcy5yb3V0aW5lcy5zZXRQcm9ncmFtKDQsbmFtZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuQWxsQnViYmxlc0NoZWNrZWQodGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpKVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHZhciBlbWFpbERhdGEgPSB7IGFyZWEgOiAnY2hlY2tBbGxCdWJibGVzIDQnLCBtZXNzYWdlIDogZXJyIH07XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2VuZEVycm9yKGVtYWlsRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSovXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2UnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IEFQSVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgR2VybWFuVGV4dHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nZXJtYW4tdGV4dHMnO1xuaW1wb3J0IHsgU2xpZGVyUGFnZSB9IGZyb20gJy4uL3NsaWRlci9zbGlkZXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBGYXZvcml0ZXNQYWdlIH0gZnJvbSAnLi4vZmF2b3JpdGVzL2Zhdm9yaXRlcyc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgU3Vic2NyaWJlUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zdWJzY3JpYmUnLFxuICB0ZW1wbGF0ZVVybDogJ3N1YnNjcmliZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlUGFnZSB7XG4gIHByaXZhdGUgbWF4RGF0ZU9mUGlja2VyIDogc3RyaW5nO1xuICBwcml2YXRlIHN1YnNjcmliZUZvcm0gOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBzaG93U3VibWl0QnV0dG9uIDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBtYXhEYXRlIDogc3RyaW5nO1xuICBwcml2YXRlIHJlc3BvbnNlX3RleHQgOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwcml2YXRlIGNhbGxCYWNrUGFnZSA6IHN0cmluZztcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIGVycm9yTmFtZUNsYXNzIDogc3RyaW5nO1xuICBwdWJsaWMgZXJyb3JFbWFpbENsYXNzIDogc3RyaW5nO1xuICBwdWJsaWMgZXJyb3JHZW5kZXJDbGFzcyA6IHN0cmluZztcbiAgcHVibGljIGVycm9yRGF0ZUNsYXNzIDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQVBJU2VydmljZVByb3ZpZGVyLFxuICAgIHByaXZhdGUgZGV2aWNlOiBEZXZpY2UsIHByaXZhdGUgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsIHByaXZhdGUgbmV0d29yazogTmV0d29yaykge1xuICAgICAgLy8gb2J0aWVuZSBlbCBwYXJhbWV0cm8gZGUgcXVlIHBhZ2UgdmEgYSBjb3JyZXIgYWwgdGVybWluYXIgZWwgcmVnaXN0cm9cbiAgICAgIHRoaXMuY2FsbEJhY2tQYWdlID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdjYWxsQmFja1BhZ2UnKTtcbiAgICAgIHRoaXMuc2hvd1N1Ym1pdEJ1dHRvbiA9IHRydWU7XG4gICAgICBsZXQgYURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgdGhpcy5tYXhEYXRlT2ZQaWNrZXIgPSB0aGlzLm1heERhdGUgPSBhRGF0ZS50b0lTT1N0cmluZygpO1xuXG4gICAgICB0aGlzLnN1YnNjcmliZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIG5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIGdlbmRlcjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgYmlydGhEYXRlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnaW9uVmlld0RpZExvYWQgU3Vic2NyaWJlUGFnZScpO1xuICB9XG5cbiAgYXR0ZW1wdFN1YnNjcmliZSgpe1xuICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9ICcnO1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIHRoaXMuc3Vic2NyaWJlRm9ybS52YWx1ZS5lbWFpbCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgdGhpcy5zdWJzY3JpYmVGb3JtLnZhbHVlLm5hbWUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnYmlydGhEYXRlJywgdGhpcy5zdWJzY3JpYmVGb3JtLnZhbHVlLmJpcnRoRGF0ZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdnZW5kZXInLCB0aGlzLnN1YnNjcmliZUZvcm0udmFsdWUuZ2VuZGVyKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lzVXBkYXRlJywgJ2ZhbHNlJyk7XG4gICAgaWYod2luZG93Lmhhc093blByb3BlcnR5KCdjb3Jkb3ZhJykpe1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCd1dWlkJywgdGhpcy5kZXZpY2UudXVpZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCd1dWlkJywgQ29uc3RhbnRzLnRlc3RfdXVpZCk7XG4gICAgfVxuXG4gICAgdGhpcy5hcGlTZXJ2aWNlLnJ1blBvc3QoJ3N1YnNjcmliZS5waHAnLGZvcm1EYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgaWYodGhpcy5yZXNwb25zZURhdGEuc3RhdHVzID09ICdvaycpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuZGV2aWNlSW5mb0tleSwgeyd1dWlkJzogdGhpcy5yZXNwb25zZURhdGEudXVpZCwgJ2VtYWlsJzogdGhpcy5zdWJzY3JpYmVGb3JtLnZhbHVlLmVtYWlsIH0pO1xuICAgICAgICB0aGlzLnNob3dTdWJtaXRCdXR0b24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gR2VybWFuVGV4dHNbJ3Byb2ZpbGUtc3VjY2Vzcy1tZXNzYWdlJ107XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYodGhpcy5jYWxsQmFja1BhZ2UgPT0gJ25vbmUnKXtcbiAgICAgICAgICAgIC8vIGRlc3BsaWVnYSBsYSB2aXN0YSBkZSBkZSBpbnN0cnVjY2lvbmVzXG4gICAgICAgICAgICB0aGlzLm5hdkN0cmwucHVzaChTbGlkZXJQYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZih0aGlzLmNhbGxCYWNrUGFnZSA9PSAnZmF2b3JpdGVzJyl7XG4gICAgICAgICAgICB0aGlzLm5hdkN0cmwucG9wKCk7XG4gICAgICAgICAgICBsZXQgcHJvZmlsZU1vZGFsID0gdGhpcy5tb2RhbEN0cmwuY3JlYXRlKEZhdm9yaXRlc1BhZ2UsIHsgJ3Nob3dTYXZlJzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHByb2ZpbGVNb2RhbC5wcmVzZW50KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MDAwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZXJyb3IgPSBHZXJtYW5UZXh0c1sncHJvZmlsZS1lcnJvci1tZXNzYWdlJ10gKyAnOiAnO1xuICAgICAgICBpZih0aGlzLnJlc3BvbnNlRGF0YS5lbWFpbEVycm9yICE9ICdvaycpe1xuICAgICAgICAgIGVycm9yICs9IHRoaXMucmVzcG9uc2VEYXRhLmVtYWlsRXJyb3I7XG4gICAgICAgICAgdGhpcy5lcnJvckVtYWlsQ2xhc3MgID0gJ2Vycm9yJztcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnJlc3BvbnNlRGF0YS5uYW1lRXJyb3IgIT0gJ29rJyl7XG4gICAgICAgICAgZXJyb3IgKz0gdGhpcy5yZXNwb25zZURhdGEubmFtZUVycm9yO1xuICAgICAgICAgIHRoaXMuZXJyb3JOYW1lQ2xhc3MgID0gJ2Vycm9yJztcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnJlc3BvbnNlRGF0YS5nZW5kZXJFcnJvciAhPSAnb2snKXtcbiAgICAgICAgICBlcnJvciArPSB0aGlzLnJlc3BvbnNlRGF0YS5nZW5kZXJFcnJvcjtcbiAgICAgICAgICB0aGlzLmVycm9yR2VuZGVyQ2xhc3MgID0gJ2Vycm9yJztcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnJlc3BvbnNlRGF0YS5kYXRlT2ZCaXJ0aEVycm9yICE9ICdvaycpe1xuICAgICAgICAgIGVycm9yICs9IHRoaXMucmVzcG9uc2VEYXRhLmRhdGVPZkJpcnRoRXJyb3I7XG4gICAgICAgICAgdGhpcy5lcnJvckRhdGVDbGFzcyAgPSAnZXJyb3InO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBwb25lciBzdWNjZXNzIHkgZGVzcGxlZ2FyIHBhZ2luYSBwcmluY2lwYWxcbiAgICB9LCAocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSBHZXJtYW5UZXh0c1sncHJvZmlsZS1lcnJvci1tZXNzYWdlJ107XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9zdWJzY3JpYmUvc3Vic2NyaWJlLnRzIiwiZXhwb3J0IHZhciBHZXJtYW5UZXh0cyA9IHtcclxuICAgIFwiYmFja1wiOlwiUsO8Y2trZWhyXCIsXHJcbiAgICBcImN1bHR1cmVcIjpcImdyXCIsXHJcbiAgICBcImhlbHBcIjogXCI8YSBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIiBuZy1ocmVmPVxcXCIjL2FwcC9oZWxwXFxcIiBocmVmPVxcXCIjL2FwcC9oZWxwXFxcIj4gSElMRkUgPC9hPlwiLFxyXG4gICAgXCJjb250YWN0LXVzXCI6IFwiPGEgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCIgbmctaHJlZj1cXFwiIy9hcHAvY29udGFjdHVzXFxcIiBocmVmPVxcXCIjL2FwcC9jb250YWN0dXNcXFwiPiBLT05UQUtUSUVSRU4gU0lFIFVOUyA8L2E+XCIsXHJcbiAgICBcImNvbnRhY3QtdXMtdGV4dFwiOiBcIktPTlRBS1RJRVJFTiBTSUUgVU5TXCIsXHJcbiAgICBcInJlbWFpbmluZy10aW1lXCI6IFwiVmVyYmxlaWJlbmRlIFplaXRcIixcclxuICAgIFwicnVubmluZy10aW1lXCI6IFwiTGF1ZnplaXRcIixcclxuICAgIFwiZ2V0LWluLXRvdWNoXCI6IFwiU2V0emVuIFNpZSBzaWNoIG1pdCB1bnMgaW4gVmVyYmluZHVuZywgaW5kZW0gU2llIGRhcyBmb2xnZW5kZSBGb3JtdWxhciBhdXNmw7xsbGVuLiA8YnIvPk9kZXIga29udGFrdGllcmVuIFNpZSB1bnMgdW50ZXIgPGEgaHJlZj1cXFwibWFpbHRvOnN1cHBvcnRAaGVhbGluZ2hvdXNlLmxpZmVcXFwiPiBzdXBwb3J0QGhlYWxpbmdob3VzZS5saWZlIDwvYT5cIixcclxuICAgIFwicmVtb3ZlLXByb2dyYW1cIjogXCJQcm9ncmFtbSBlbnRmZXJuZW5cIixcclxuICAgIFwidGltZS1leHBpcmUtdGV4dFwiOiBcIklocmUgUm91dGluZSBpc3Qgdm9yYmVpLCBob2ZmZSwgZGFzcyBTaWUgc2ljaCBoZXV0ZSBndXQgZsO8aGxlblwiLFxyXG4gICAgXCJmYXYtdGl0bGVcIjogXCJNRUlORSBGQVZPUklURU5cIixcclxuICAgIFwiYWRkLWZhdm9yaXRlXCI6IFwiRsOcR0VOIFNJRSBESUVTRSBST1VUSU5FIEhJTlpVXCIsXHJcbiAgICBcImFkZC1mYXZvcml0ZXNcIjogXCJGw7xnZW4gU2llIGRpZXNlIEZhdm9yaXRlbiBoaW56dVwiLFxyXG4gICAgXCJmYXZvcml0ZS1yb3V0aW5lc1wiOiBcIkxpZWJsaW5nc3JvdXRpbmVuXCIsXHJcbiAgICBcIm15LWZhdm9yaXRlc1wiOiBcIk1laW5lIEZhdm9yaXRlblwiLFxyXG4gICAgXCJsb2FkaW5nXCI6XCJXaXJkIGdlbGFkZW5cIixcclxuICAgIFwiY2hvb3NlXCI6XCJXw6RobGVuXCIsXHJcbiAgICBcInllc1wiOiBcIkphXCIsXHJcbiAgICBcImNhbmNlbFwiOiBcIkFiYnJlY2hlblwiLFxyXG4gICAgXCJqYW51YXJ5XCI6IFwiSmFudWFyXCIsXHJcbiAgICBcImZlYnJ1YXJ5XCI6IFwiRmVicnVhclwiLFxyXG4gICAgXCJtYXJjaFwiOiBcIk3DpHJ6XCIsXHJcbiAgICBcImFwcmlsXCI6IFwiQXByaWxcIixcclxuICAgIFwibWF5XCI6IFwiTWFpXCIsXHJcbiAgICBcImp1bmVcIjogXCJKdW5pXCIsXHJcbiAgICBcImp1bHlcIjogXCJKdWxpXCIsXHJcbiAgICBcImF1Z3VzdFwiIDogXCJBdWd1c3RcIixcclxuICAgIFwic2VwdGVtYmVyXCI6IFwiU2VwdGVtYmVyXCIsXHJcbiAgICBcIm9jdG9iZXJcIjogXCJPa3RvYmVyXCIsXHJcbiAgICBcIm5vdmVtYmVyXCI6IFwiTm92ZW1iZXJcIixcclxuICAgIFwiZGVjZW1iZXJcIjogXCJEZXplbWJlclwiLFxyXG4gICAgXCJhcmUteW91LXN1cmUtcHJvZ3JhbVwiOiBcIk3DtmNodGVuIFNpZSBkaWVzZXMgUHJvZ3JhbW0gd2lya2xpY2ggZW50ZmVybmVuP1wiLFxyXG4gICAgXCJhcmUteW91LXN1cmUtcm91dGluZVwiOiBcIlNpbmQgU2llIHNpY2hlciwgZGFzcyBTaWUgZGllc2UgUm91dGluZSBlbnRmZXJuZW4gd29sbGVuP1wiLFxyXG4gICAgXCJsYXRlc3Qtcm91dGluZXNcIjogXCJOZXVlc3RlIFJvdXRpbmVuXCIsXHJcbiAgICBcImNvbm5lY3QtZmF2b3JpdGVzLXRleHRcIjogXCJWZXJiaW5kZW4gU2llIGRhcyBHZXLDpHQgbWl0IElocmVuIGJldm9yenVndGVuIFJvdXRpbmVuXCIsXHJcbiAgICBcIm5hbWUtVGV4dFwiOiBcIk5hbWU6XCIsXHJcbiAgICBcIm1lc3NhZ2UtdGV4dFwiOiBcIk5hY2hyaWNodFwiLFxyXG4gICAgXCJzZW5kLXRleHRcIjogXCJTZW5kZW5cIixcclxuICAgIFwic2VudC10ZXh0XCIgOiBcIkdlc2VuZGV0XCIsXHJcbiAgICBcImhvbWUtdGl0bGVcIiA6IFwiSE9NRVwiLFxyXG4gICAgXCJoZWxwLXRpdGxlXCIgOiBcIkhJTEZFXCIsXHJcbiAgICBcImNvbnRhY3QtdGl0bGVcIiA6IFwiS09OVEFLVElFUkUgVU5TXCIsXHJcbiAgICBcInNsaWRlci10aXRsZVwiIDogXCJBTkxFSVRVTkdcIixcclxuICAgIFwiZW1haWwtc3VjY2Vzcy1tZXNzYWdlXCI6IFwiSWhyZSBOYWNocmljaHQgd3VyZGUgZ2VzZW5kZXQhIFdpciB3ZXJkZW4gdW5zIHNvIHNjaG5lbGwgd2llIG3DtmdsaWNoIG1pdCBJaG5lbiBpbiBWZXJiaW5kdW5nIHNldHplblwiLFxyXG4gICAgXCJlbWFpbC1zdWNjZXNzLXRpdGxlXCI6IFwiR2VzZW5kZXRcIixcclxuICAgIFwiZW1haWwtZXJyb3ItbWVzc2FnZVwiOiBcIkJlaW0gU2VuZGVuIGRlciBFLU1haWwgaXN0IGVpbiBGZWhsZXIgYXVmZ2V0cmV0ZW5cIixcclxuICAgIFwiZW1haWwtZXJyb3ItdGl0bGVcIjogXCJOYWNocmljaHQga29ubnRlIG5pY2h0IGdlc2VuZGV0IHdlcmRlblwiLFxyXG4gICAgXCJpbmRlcGVuZGVudC1wcm9ncmFtc1wiOiBcIlVOQUJIw4ROR0lHRSBQUk9HUkFNTUVcIixcclxuICAgIFwicmVnaXN0ZXItbG9naW5cIjogXCI8YSBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIiBuZy1ocmVmPVxcXCIjL2FwcC9sb2dpblxcXCIgaHJlZj1cXFwiIy9hcHAvbG9naW5cXFwiPiBSRUdJU1RSSUVSRU4gLyBBTk1FTERFTiA8L2E+IFwiLFxyXG4gICAgXCJmb3Jnb3QtcGFzc3dvcmRcIjogXCJQYXNzd29ydCB2ZXJnZXNzZW5cIixcclxuICAgIFwiZm9yZ290LXBhc3N3b3JkLWxpbmtcIjogXCI8YSBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIiBuZy1ocmVmPVxcXCIjL2FwcC9mb3Jnb3RwYXNzd29yZFxcXCIgaHJlZj1cXFwiIy9hcHAvZm9yZ290cGFzc3dvcmRcXFwiPiBWRVJHRVNTRU4gPC9hPiBcIixcclxuICAgIFwiZG9udC13b3JyeVwiOiBcIk1hY2ggZGlyIGtlaW5lIFNvcmdlblwiLFxyXG4gICAgXCJpbnRyb2R1Y2UtZW1haWxcIjogXCJTdGVsbGVuIFNpZSBJaHJlIEUtTWFpbCB1bnRlciBJaHJlbSBLb250byBlaW5cIixcclxuICAgIFwicmVjb3Zlci1wYXNzd29yZFwiOiBcIlBhc3N3b3J0IHdpZWRlcmhlcnN0ZWxsZW5cIixcclxuICAgIFwicmVnaXN0ZXJcIjogXCJSRUdJU1RSSUVSRU5cIixcclxuICAgIFwicmVnaXN0ZXItbGlua1wiOiBcIjxhIGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiIG5nLWhyZWY9XFxcIiMvYXBwL2NyZWF0ZWFjY291bnRcXFwiIGhyZWY9XFxcIiMvYXBwL2NyZWF0ZWFjY291bnRcXFwiPiBSRUdJU1RSSUVSRU4gPC9hPlwiLFxyXG4gICAgXCJwYXNzd29yZFwiOiBcIlBhc3N3b3J0XCIsXHJcbiAgICBcInNpeC1jaGFycy1taW5cIjogXCJNaW5kZXN0ZW5zIDYgWmVpY2hlblwiLFxyXG4gICAgXCJtYWxlXCI6XCJNYW5uXCIsXHJcbiAgICBcImZlbWFsZVwiOiBcIldlaWJsaWNoXCIsXHJcbiAgICBcInBsZWFzZS1jcmVhdGUtYWNjb3VudFwiOiBcIkJpdHRlIGVyc3RlbGxlbiBTaWUgZWluIEtvbnRvXCIsXHJcbiAgICBcImNyZWF0ZS1hY2NvdW50XCI6IFwiS29udG8gZXJzdGVsbGVuXCIsXHJcbiAgICBcInBsZWFzZS1sb2dpblwiOiBcIkJpdHRlIG1lbGRlbiBTaWUgc2ljaCBtaXQgSWhyZW4gS29udG9pbmZvcm1hdGlvbmVuIGFuXCIsXHJcbiAgICBcInBsZWFzZS1wYWlyXCI6IFwiQklUVEUgUEFBUiBERUlORU4gTVlNQVRcIixcclxuICAgIFwiYWN0aXZhdGUtd2lmaVwiOiBcIlNjaHJpdHRlIHp1bSBQYWlyaW5nIElocmVzIE15TWF0XCIsXHJcbiAgICBcImFjdGl2YXRlLXdpZmktMVwiOiBcIjEuIFNjaGFsdGUgZGVpbiBNeU1hdCBlaW5cIixcclxuICAgIFwiYWN0aXZhdGUtd2lmaS0yXCI6IFwiMi4gTmF2aWdpZXJlIGF1ZiBkZWluZW0gR2Vyw6R0IHp1IGRlaW5lbiBXTEFOLUVpbnN0ZWxsdW5nZW5cIixcclxuICAgIFwiYWN0aXZhdGUtd2lmaS0zXCI6IFwiMy4gVmVyYmluZGVuIFNpZSBkYXMgV0xBTiBJaHJlcyBHZXLDpHRzIG1pdCBJaHJlbSBNeU1hdC1OZXR6d2Vya1wiLFxyXG4gICAgXCJhY3RpdmF0ZS13aWZpLTRcIjogXCI0LiBJc3QgZWlubWFsIHZlcmJ1bmRlbiwga2VocmVuIFNpZSB6dXIgTXlNYXQtQXBwIHp1csO8Y2tcIixcclxuICAgIFwic3RhcnQtcm91dGluZVwiOiBcIlNUQVJUUk9VVElORVwiLFxyXG4gICAgXCJiYXR0ZXJ5LXBvd2VyXCI6IFwiICBcIixcclxuICAgIFwiY29pbFwiOiBcIlNwdWxlXCIsXHJcbiAgICBcInN0YXJ0LXlvdXItcm91dGluZVwiOiBcIlNUQVJURU4gU0lFIElIUkUgUk9VVElORVwiLFxyXG4gICAgXCJuby1kZXRlY3QtMVwiOiBcIldpciBrb25udGVuIElociBNeU1hdCBuaWNodCBmaW5kZW5cIixcclxuICAgIFwibm8tZGV0ZWN0LTJcIjogXCJCaXR0ZSBmb2xnZW4gU2llIGRlbiBTY2hyaXR0ZW4sIHVtIGRpZXMgenUgdHVuXCIsXHJcbiAgICBcImVtYWlsLXNlbnRcIjogXCJFaW5lIEUtTWFpbCBtaXQgQW53ZWlzdW5nZW4genVtIFp1csO8Y2tzZXR6ZW4gSWhyZXMgUGFzc3dvcnRzIHd1cmRlIGdlc2VuZGV0XCIsXHJcbiAgICBcIm1pc3NpbmctZW1haWxcIjogXCJGZWhsZW5kZSBFbWFpbFwiLFxyXG4gICAgXCJuYW1lLXRleHRcIiA6IFwiTmFtZVwiLFxyXG4gICAgXCJmaXJzdC1uYW1lLXRleHRcIjogXCJWb3JuYW1lXCIsXHJcbiAgICBcImxhc3QtbmFtZS10ZXh0XCI6IFwiTmFjaG5hbWVcIixcclxuICAgIFwicHJvZmlsZVwiOiBcIkRlaW4gUHJvZmlsXCIsXHJcbiAgICBcImRhdGUtYmlydGhcIjogXCJHZWJ1cnRzZGF0dW1cIixcclxuICAgIFwicHJvZmlsZS1sb2dpblwiOiBcIjxhIGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiIG5nLWhyZWY9XFxcIiMvYXBwL2NyZWF0ZWFjY291bnRcXFwiIGhyZWY9XFxcIiMvYXBwL2NyZWF0ZWFjY291bnRcXFwiPiBQUk9GSUwgPC9hPlwiLFxyXG4gICAgXCJvZmZsaW5lLW1lc3NhZ2VcIjogXCJCaXR0ZSB2ZXJiaW5kZW4gU2llIElociBHZXLDpHQgbWl0IGRlbSBJbnRlcm5ldFwiLFxyXG4gICAgXCJPZmZsaW5lLXRpdGxlXCI6IFwiR2Vyw6R0IE9GRkxJTkVcIixcclxuICAgIFwicmVnaXN0ZXItZXJyb3ItbWVzc2FnZVwiOiBcIkZlaGxlciBiZWltIFZlcmJpbmRlbiBtaXQgZGVtIEhhdXB0c2VydmVyLiBCaXR0ZSB2ZXJzdWNoZW4gU2llIGVzIHNww6R0ZXIgbm9jaCBlaW5tYWxcIixcclxuICAgIFwicmVnaXN0ZXItZXJyb3ItdGl0bGVcIjogXCJWZXJiaW5kdW5nIHp1bSBTZXJ2ZXIga29ubnRlIG5pY2h0IGhlcmdlc3RlbGx0IHdlcmRlblwiLFxyXG4gICAgXCJ0YXAtcHJvZ3JhbVwiOiBcIjxsYWJlbD5UaXBwZW4gU2llIGF1ZiBkYXMgUHJvZ3JhbW0sIGRhcyBTaWUgenVyIFJvdXRpbmUgaGluenVmw7xnZW4gbcO2Y2h0ZW4uIFRpcHBlbiBkaWUgSW5mby1UYXN0ZSwgdW0gbWVociB6dSBlcmZhaHJlbjwvbGFiZWw+XCIsXHJcbiAgICBcIndlbGNvbWVcIjogXCJXaWxsa29tbWVuIGJlaSBNeU1hdCBBcHAuXCIsXHJcbiAgICBcImFkZC1wcm9ncmFtXCI6IFwiSGluenVmw7xnZW5cIixcclxuICAgIFwidGFwLWJ1YmJsZVwiOiBcIlRBUCBBIEJVQkJMRSAoKykgSElOWlVGw5xHRU5cIixcclxuICAgIFwicnVuLXJvdXRpbmVcIjogXCJMQVNTIERJRVNFIFJPVVRJTkUgTEFVRkVOXCIsXHJcbiAgICBcImNsZWFuLXJvdXRpbmVcIjogXCJESUVTRSBST1VUSU5FIFJFSU5JR0VOXCIsXHJcbiAgICBcInByb2dyYW0ta2l0c1wiOiBcIlByb2dyYW1tLUtpdHNcIixcclxuICAgIFwicG9wdWxhci1yb3V0aW5lc1wiOiBcIlVuc2VyZSBiZWxpZWJ0ZXN0ZW4gUm91dGluZW5cIixcclxuICAgIFwiYmFzaWNcIjogXCJCQVNJQyA8YnI+IDxicj5cIixcclxuICAgIFwiYnVzaW5lc3MtdHJhdmVsZXJcIjogXCJCVVNJTkVTUyAmPGJyLz5SRUlTRU5cIixcclxuICAgIFwiZmFtaWx5LWtpdFwiOiBcIkZBTUlMSUVcIixcclxuICAgIFwiYXRobGV0ZVwiOiBcIlNQT1JUXCIsXHJcbiAgICBcInNwYS13ZWxsbmVzc1wiOiBcIlNQQSAmIFdFTExORVNTXCIsXHJcbiAgICBcInN0cmVzcy1yZWxpZWZcIjogXCJTVFJFU1MgPGJyPiBCRUZSRUlVTkdcIixcclxuICAgIFwic2VuaW9yLXVwcGVyXCIgOiBcIlNFTklPUlwiLFxyXG4gICAgXCJjaGFrcmEtYmFsYW5jaW5nXCI6IFwiQ0hBS1JBU1wiLFxyXG4gICAgXCJlbGVtZW50cy1tZXJpZGlhbnNcIjogXCJFTEVNRU5URSAmIDxicj4gTUVSSURJQU5FXCIsXHJcbiAgICBcInBldHNzXCI6IFwiSEFVU1RJRVJFIFNcIixcclxuICAgIFwicGV0c3hcIjogXCJIQVVTVElFUkUgWFwiLFxyXG4gICAgXCJwcm9ncmFtc1wiOiBcIlBST0dSQU1NRVwiLFxyXG4gICAgXCJjb250aW51ZVwiOiBcIldlaXRlclwiLFxyXG4gICAgXCJwcm9maWxlLXRleHRcIjogXCJSZWdpc3RyaWVydW5nXCIsXHJcbiAgICBcIm9uZS10aW1lLXByb2ZpbGUtdGV4dFwiOiBcIlRoaXMgaW5mb3JtYXRpb24gaXMgdXNlZCBieSBvdXIgdGVhbSB0byBzZXJ2ZSB5b3UgYmV0dGVyLiBZb3Ugd2lsbCBvbmx5IG5lZWQgdG8gaW50cm9kdWNlIGl0IG9uZSBzaW5nbGUgdGltZVwiLFxyXG4gICAgXCJnZW5kZXItdGV4dFwiOiBcIkdlbmRlclwiLFxyXG4gICAgXCJiaXJ0aGRhdGUtdGV4dFwiOiBcIkJpcnRoZGF0ZVwiLFxyXG4gICAgXCJtYWxlLXRleHRcIjogXCJNYWxlXCIsXHJcbiAgICBcImZlbWFsZS10ZXh0XCI6IFwiRmVtYWxlXCIsXHJcbiAgICBcImJ1dHRvbi1zZW5kXCI6IFwiU2VuZGVuXCIsXHJcbiAgICBcImJ1dHRvbi1zYXZlXCI6IFwiU3BhcmVuXCIsXHJcbiAgICBcInByb2ZpbGUtZXJyb3ItbWVzc2FnZVwiOiBcIlRoZXJlJ3MgYmVlbiBhbiBlcnJvciBzYXZpbmcgeW91ciBwcm9maWxlXCIsXHJcbiAgICBcInByb2ZpbGUtc3VjY2Vzcy1tZXNzYWdlXCI6IFwiWW91ciBwcm9maWxlIGhhdmUgYmVlbiBzdWNjZXNzZnVsIHNhdmVkXCIsXHJcbiAgICBcIm9mZmxpbmUtZGV2aWNlLXRleHRcIjogXCJZb3VyIGRldmljZSBpcyBvZmZsaW5lXCIsXHJcbiAgICBcIm9mZmxpbmUtZGV2aWNlLXRleHQtMlwiIDogXCJUaGVyZSdzIGJlZW4gYW4gZXJyb3IgY29tbXVuaWNhdGluZyB5b3VyIGRldmljZSB3aXRoIG91ciBzZXJ2aWNlcy4gUGxlYXNlIG1ha2Ugc3VyZSBpdCdzIG9ubGluZVwiLFxyXG4gICAgXCJmaXJzdC1jaGFrcmEtdXBwZXJcIjogXCIxLiBDSEFLUkFcIixcclxuICAgIFwic2Vjb25kLWNoYWtyYS11cHBlclwiOiBcIjIuIENIQUtSQVwiLFxyXG4gICAgXCJ0aGlyZC1jaGFrcmEtdXBwZXJcIjogXCIzLiBDSEFLUkFcIixcclxuICAgIFwiZm91cnRoLWNoYWtyYS11cHBlclwiOiBcIjQuIENIQUtSQVwiLFxyXG4gICAgXCJmaWZ0aC1jaGFrcmEtdXBwZXJcIjogXCI1LiBDSEFLUkFcIixcclxuICAgIFwic2l4dGgtY2hha3JhLXVwcGVyXCI6IFwiNi4gQ0hBS1JBXCIsXHJcbiAgICBcInNldmVudGgtY2hha3JhLXVwcGVyXCI6IFwiNy4gQ0hBS1JBXCIsXHJcbiAgICBcImhlbHAtdGV4dFwiOiBcIkhJTEZFXCIsXHJcbiAgICBcImhlbHAtdGV4dDFcIjogXCJXb2hlciB3ZWnDnyBpY2gsIHdlbGNoZSBQcm9ncmFtbWUgaWNoIHfDpGhsZW4gc29sbD9cIixcclxuICAgIFwiaGVscC10ZXh0MlwiOiBcIkVzIGlzdCBpbW1lciBndXQsIG1pdCBkZW0gQXVzYmFsYW5jaWVyZW4gZGVzIFN5c3RlbXMgenUgYmVnaW5uZW4uIERpZXMgc2luZCBlaW5pZ2UgTcO2Z2xpY2hrZWl0ZW4sIHdpZSBTaWUgZGFzIG1pdCBiZWdpbm5lbiBrw7ZubmVuOkVuZXJnaWViaWxhbnppZXJ1bmcsIEUtU21vZywgRnJldWRlLCBWaXRhbGl0w6R0IDxicj4gPGJyPiBXZW5uIFNpZSBJaHIgU2NobGFmbXVzdGVyIHZlcmJlc3Nlcm4gbcO2Y2h0ZW4gLSB3w6RobGVuIFNpZTogPGJyPiBFbmVyZ2llYmlsYW56LCBFLVNtb2csIFJlbGF4LCBTY2hsYWYgPGJyPiA8YnI+IElmIFNpZSBtw7ZjaHRlbiBhbSBNb3JnZW4gZXR3YXMgbWVociBFbmVyZ2llIGhhYmVuOiA8YnI+IEVuZXJnaWVhdXNnbGVpY2gsIEVuZXJnaWUtQm9vc3RlciwgS29uemVudHJhdGlvbiAodW5kIGplZGVzIFByb2dyYW1tLCBkYXMgbWl0IGVpbmVtIFByb2JsZW0gaW4gVmVyYmluZHVuZyBzdGVodCwgbWl0IGRlbSBTaWUgZXMgenUgdHVuIGhhYmVuIC0gd2llIFNjaG1lcnplbiwgTXVza2VsLCBHZWxlbmtlLCBLb3Bmc2NobWVyemVuIHVzdy4pIDxicj4gPGJyPiBFaW5lIHZvbGxzdMOkbmRpZ2UgTGlzdGUgZGVyIFByb2dyYW1tZSB1bmQgZGVyZW4gVmVyd2VuZHVuZyBiZXrDvGdsaWNoIGRlciBTeW1wdG9tZSBmaW5kZW4gU2llIGluIGRlciBCZWRpZW51bmdzYW5sZWl0dW5nLCBkaWUgaW0gTGllZmVydW1mYW5nIGVudGhhbHRlbiBpc3Qgb2RlciBrb3N0ZW5sb3Mgb25saW5lIHZlcmbDvGdiYXIgaXN0LiBcIixcclxuICAgIFwiaGVscC10ZXh0M1wiOlwiV2VsY2hlIFByb2dyYW1tZSBzb2xsdGUgaWNoIGFtIEFiZW5kIHZlcm1laWRlbj8gXCIsXHJcbiAgICBcImhlbHAtdGV4dDRcIjpcIldlbm4gU2llIGVpbmUgZ3V0ZSBOYWNodHJ1aGUgaGFiZW4gd29sbGVuLCBpc3QgZXMgYmVzc2VyLCBJaHJlbiBPcmdhbmlzbXVzIG5pY2h0IMO8YmVybcOkw59pZyB6dSBzdGltdWxpZXJlbi4gV2VubiBTaWUgZGFyYW4gZ2V3w7ZobnQgc2luZCwgYWJlbmRzIEthZmZlZSB6dSB0cmlua2VuIHVuZCB0cm90emRlbSBzY2hsYWZlbiB6dSBrw7ZubmVuLCBrw7ZubmVuIFNpZSBhbGxlIFByb2dyYW1tZSB2ZXJ3ZW5kZW4sIGFiZXIgd2VubiBTaWUgZW1wZmluZGxpY2hlciBzaW5kIC0gc29sbHRlbiBTaWUgdm9yIGRlbSBTY2hsYWZlbmdlaGVuIG5pY2h0IGRpZSBmb2xnZW5kZW4gUHJvZ3JhbW1lIGFud2VuZGVuOiBLcmVpc2xhdWYsIEltbXVuc3lzdGVtLCBOZWJlbm5pZXJlbiwgRXJzY2jDtnBmdW5nLCBLb256ZW50cmF0aW9uIHVuZCBFbmVyZ2llIEJvb3N0ZXIgXCIsXHJcbiAgICBcImhlbHAtdGV4dDVcIjpcIldpZSBiZWVpbmZsdXNzZW4gZWxla3Ryb21hZ25ldGlzY2hlIEZlbGRlciBtZWluZW4gS8O2cnBlcj8gXCIsXHJcbiAgICBcImhlbHAtdGV4dDZcIjpcIkFsbGVzIGluIHVuc2VyZW0gS8O2cnBlciBpc3QgZWxla3RyaXNjaCwgdW5zZXJlIFplbGxlbiBrb21tdW5pemllcmVuIG1pdCBlbGVrdHJvbWFnbmV0aXNjaGVuIEZyZXF1ZW56ZW4sIHVuc2VyIEhlcnogZXJ6ZXVndCBtaXQgamVkZW0gU2NobGFnIGVsZWt0cm9tYWduZXRpc2NoZSBXZWxsZW4sIHVuc2VyIE5lcnZlbnN5c3RlbSBrb21tdW5pemllcnQsIHdlbm4gTmV1cm9uZW4gw7xiZXIgU3luYXBzZW4gYXVmIGVsZWt0cm9tYWduZXRpc2NoZSBTaWduYWxlIHJlYWdpZXJlbi4gSW4gZGllc2VtIFNpbm5lIGvDtm5uZW4gd2lyIHZlcnN0ZWhlbiwgd2llIGV4dGVybmUgbWFnbmV0aXNjaGUsIGVsZWt0cmlzY2hlIHVuZCBlbGVrdHJvbWFnbmV0aXNjaGUgRmVsZGVyIG1pdCBqZWRlbSBBc3Bla3QgdW5zZXJlcyBLw7ZycGVycyByZWFnaWVyZW4uIEluZGVtIHdpciBzcGV6aWZpc2NoZSBGcmVxdWVuemVuIG1pdCBuaWVkcmlnZXIgSW50ZW5zaXTDpHQgcmVndWxpZXJlbiwga8O2bm5lbiB3aXIgZ2VuYXUgYXVzd8OkaGxlbiwgd29yYXVmIHdpciByZWFnaWVyZW4gd29sbGVuLCBpbmRlbSB3aXIgYXVmIGJlc3RpbW10ZSBaZWxsZW4sIE9yZ2FuZSB1bmQgR2V3ZWJlIGVpbndpcmtlbi4gXCIsXHJcbiAgICBcImhlbHAtdGV4dDdcIjpcIldpZSBoaWxmdCBtaXIgZGllIEJlaGFuZGx1bmcgYXVmIHplbGx1bMOkcmVyIEViZW5lPyBcIixcclxuICAgIFwiaGVscC10ZXh0OFwiOlwiRHVyY2ggZGFzIEF1ZmxhZGVuIHZvbiBNYWduZXRmZWxkZXJuIGluIGRlciBVbWdlYnVuZyB2b24gWmVsbG1lbWJyYW5lbiDDtmZmbmVuIHNpY2ggS2Fuw6RsZSBmw7xyIGVpbmUgYmVzc2VyZSBOw6RocnN0b2ZmZHVyY2hkcmluZ3VuZy4gRGFzIMOWZmZuZW4gZGVyIEthbsOkbGUgZsO2cmRlcnQgYXVjaCBlaW5lIGVpbmZhY2hlcmUgQWJmYWxsYmVzZWl0aWd1bmcgdW5kIHN0ZWxsdCBkaWUga29ycmVrdGUgWmVsbGZ1bmt0aW9uIGVmZml6aWVudCB3aWVkZXIgaGVyLiBFaW4gZWZmaXppZW50ZXMgU3lzdGVtIHZvbiBaZWxsZW4gc2NoYWZmdCBlZmZpemllbnRlcyBHZXdlYmUsIGRhcyBzaWNoIHp1IE9yZ2FuZW4genVzYW1tZW5zZXR6dC4gRGllIFdpZWRlcmhlcnN0ZWxsdW5nIGRlciByaWNodGlnZW4gRnVua3Rpb24gdm9uIGRlciB6ZWxsdWxhcmVuIEViZW5lIGJyaW5ndCB2b3J0ZWlsaGFmdGUgTGFuZ3plaXR3aXJrdW5nZW4gYXVmIGFsbGUgdmVyd2FuZHRlbiBQcm9ibGVtZSB1bmQgdmVyYmVzc2VydCBkYXMgYWxsZ2VtZWluZSBXb2hsYmVmaW5kZW4uIEVpbmUgZ2VzdW5kZSBaZWxsZnVua3Rpb24gdmVycmluZ2VydCBhdWNoIGRlbiBCZWRhcmYgYW4gWmVsbGVyc2F0eiwgdmVybGFuZ3NhbXQgQWx0ZXJ1bmdzcHJvemVzc2UgdW5kIEVuZXJnaWV2ZXJzY2h3ZW5kdW5nLiBcIixcclxuICAgIFwiaGVscC10ZXh0OVwiOlwiS2FubiBkaWUgUEVNRi1UaGVyYXBpZSBtaWNoIHZvciB6dWvDvG5mdGlnZW4gS3JhbmtoZWl0ZW4gc2Now7x0emVuPyBcIixcclxuICAgIFwiaGVscC10ZXh0MTBcIjpcIkVmZmVrdGl2IGFyYmVpdGVuIGJlaSBzeXN0ZW1hdGlzY2hlIEViZW5lIHdpcmQgZGllIE3DtmdsaWNoa2VpdGVuIGbDvHIgZGllIEVudHdpY2tsdW5nIHZvbiBLcmFua2hlaXRlbiB2ZXJyaW5nZXJuLiBLcmFua2hlaXRlbiBiZWdpbm5lbiBhdWYgemVsbHVsw6RyZXIgRWJlbmUgdW5kIFZlcmxldHp1bmdlbiBtw7xzc2VuIGF1ZiB6ZWxsdWzDpHJlciBFYmVuZSBiZWdpbm5lbiB6dSBoZWlsZW4uIER1cmNoIGRpZSBWZXJ3ZW5kdW5nIHZvbiBnZXB1bHN0ZW4gZWxla3Ryb21hZ25ldGlzY2hlbiBGcmVxdWVuemVuIGthbm4gZGllIGFsbGdlbWVpbmUgWmlya3VsYXRpb24gdmVyYmVzc2VydCB3ZXJkZW4sIHdvZHVyY2ggUmVwYXJhdGlvbnNwcm96ZXNzZSBiZXNjaGxldW5pZ3Qgd2VyZGVuLiBEdXJjaCBkaWUgVmVyYmVzc2VydW5nIGRlciBhbGxnZW1laW5lbiB6ZWxsdWzDpHJlbiBHZXN1bmRoZWl0IGJyZWNoZW4gc2llIHdlbmlnZXIgaMOkdWZpZyBhYi4gR2VzdW5kZSBPcGVyYXRpb25zemVsbGVuIGJlc2NobGV1bmlnZW4gZGllIFJla3VwZXJhdGlvbiB1bmQgZ2xlaWNoZW4ga8O2cnBlcmxpY2hlIEZ1bmt0aW9uZW4gYXVzLiBcIixcclxuICAgIFwiaGVscC10ZXh0MTFcIjpcIlNpbmQgbWlyIGtlaW5lIE1hZ25ldGZlbGRlciBzY2hsZWNodD8gXCIsXHJcbiAgICBcImhlbHAtdGV4dDEyXCI6XCJEZXIgTXlNYXQgaGF0IGVpbmVuIEZyZXF1ZW56YmVyZWljaCB6d2lzY2hlbiAxSHogYmlzIDIwMGtIeiB1bmQgRGllIEVNRi1TdMOkcmtlIMO8YmVyc2NocmVpdGV0IDEwIE1pa3JvLVRlc2xhIHBybyBLYW5hbCBuaWNodC4gRGVyIE15TWF0IGthbm4gYXVmZ3J1bmQgc2VpbmVyIDQgQW50ZW5uZW4gYmlzIHp1IDQgS2Fuw6RsZSBnbGVpY2h6ZWl0aWcgYmV0cmVpYmVuLCBhbHNvIG1heGltYWwgNDAgTWlrcm8gVGVzbGEuIE1hZ25ldGZlbGRlciBhdcOfZXJoYWxiIGRlciB0aWVmZW4gdW5kIGV4dHJlbSBuaWVkcmlnZW4gRnJlcXVlbnplbiB3aWUgTWlrcm93ZWxsZW4tLCBJbmZyYXJvdC0sIFJhZGlvLSB1bmQgVWx0cmF2aW9sZXR0ZnJlcXVlbnplbiBoYWJlbiB1bnRlcnNjaGllZGxpY2hlIG5hY2h0ZWlsaWdlIEF1c3dpcmt1bmdlbiBhdWYgdW5zZXJlIFplbGxlbiB1bmQgdW5zZXJlbiBLw7ZycGVyLiBEZXIgZ3LDtsOfdGUgVGVpbCB1bnNlcmVzIEV4cG9zaXRpb25zcmlzaWtvcyBzdGFtbXQgdm9uIGjDtmhlcmVuIEZyZXF1ZW56ZW4gd2llIFN0cm9tbGVpdHVuZ2VuIHVuZCBIYW5keXMsIGRpZSB0w6RnbGljaCBhbiB1bnNlcmVuIEvDtnBmZW4gYW5nZXNjaGxvc3NlbiBzaW5kLiBEaWVzZSBGcmVxdWVuemVuIHN0ZWxsZW4gaMO2aGVyZSBSaXNpa2VuIGRhciwgZGEgd2lyIHN0w6RuZGlnIG1pdCBpaG5lbiBrb25mcm9udGllcnQgc2luZCB1bmQgc2llIGvDtm5uZW4gR2V3ZWJlc2Now6RkZW4gYXVzbMO2c2VuLCBkaWUgWmVsbGZ1bmt0aW9uIHZlcsOkbmRlcm4gdW5kIGFsbGdlbWVpbmUgemVsbHVsw6RyZSBTY2jDpGRlbiB2ZXJ1cnNhY2hlbi4gRXMgaXN0IHByYWt0aXNjaCB1bm3DtmdsaWNoLCBlaW4gTGViZW4genUgZsO8aHJlbiwgZGFzIGRpZXNlIEZyZXF1ZW56ZW4gdmVybWVpZGV0LCBzaWUgc2luZCDDvGJlcmFsbCB1bmQgZHJpbmdlbiBpbiBhbGxlcyBlaW4uIFdpciBrw7ZubmVuIEUtU21vZyBuaWNodCBlbnRrb21tZW4sIGFiZXIgd2lyIGvDtm5uZW4gZGFzIE15TWF0IHZlcndlbmRlbiwgZGFzIG1laHJlcmUgUHJvZ3JhbW1lIGhhdCwgZGllIGhlbGZlbiBrw7ZubmVuLCBzY2jDpGRsaWNoZSBFZmZla3RlIHZvbiBhbGwgdW5zZXJlbiBzdMOkbmRpZ2VuIGVsZWt0cm9uaXNjaGVuIEJvbWJhcmRlbWVudHMgenUgcmVkdXppZXJlbiwgaW5kZW0gd2lyIEZyZXF1ZW56ZW4gaGluenVmw7xnZW4sIGRpZSB1bnNlcmVuIEvDtnJwZXIgaW0gR2xlaWNoZ2V3aWNodCBoYWx0ZW4gdW5kIGRpZSBnZXN1bmRlbiwgbmF0w7xybGljaGVuIEZyZXF1ZW56ZW4gZXJoYWx0ZW4uIDwvIHA+IFwiLFxyXG4gICAgXCJoZWxwLXRleHQxM1wiOlwiV2lyZCBkaWUgUEVNRi1UaGVyYXBpZSBtZWluZSBNZWRpa2FtZW50ZSBlcnNldHplbj8gXCIsXHJcbiAgICBcImhlbHAtdGV4dDE0XCI6XCJEaWUgVGhlcmFwaWUgbWl0IGRlbiBnZXB1bHN0ZW4gZWxla3Ryb21hZ25ldGlzY2hlbiBGcmVxdWVuemVuIGthbm4gZGFzIGFsbGdlbWVpbmUgV29obGJlZmluZGVuIHNpZ25pZmlrYW50IHZlcmJlc3Nlcm4gdW5kIHZpZWxlIG5lZ2F0aXZlIFN5bXB0b21lIHZlcnJpbmdlcm4gLi4gRXMga2FubiBuZWJlbiBCZWhhbmRsdW5nZW4gdW5kIE1lZGlrYW1lbnRlbiB2ZXJ3ZW5kZXQgd2VyZGVuLCB1bSBkaWUgRXJnZWJuaXNzZSB6dSB2ZXJiZXNzZXJuLiBFcyBpc3Qgd2ljaHRpZywgbWl0IG1lZGl6aW5pc2NoZW4gRmFjaGxldXRlbiB6dSBzcHJlY2hlbiwgYmV2b3IgaXJnZW5kd2VsY2hlIEJlaGFuZGx1bmdlbiBvZGVyIE1lZGlrYW1lbnRlIGVyc2V0enQgd2VyZGVuLiBTb2JhbGQgZWluIHJpY2h0aWdlciBQbGFuIGVyc3RlbGx0IHVuZCBFcmdlYm5pc3NlIGdlc2VoZW4gd2VyZGVuLCBpc3QgZXMgbcO2Z2xpY2gsIEJlaGFuZGx1bmdlbiBvZGVyIE1lZGlrYW1lbnRlIHp1IHJlZHV6aWVyZW4gb2RlciB6dSBiZXNlaXRpZ2VuLiBGcmFnZW4gU2llIGltbWVyIG5hY2ggbWVkaXppbmlzY2hlbiBSYXRzY2hsw6RnZW4gb2RlciBLb25zdWx0YXRpb25lbiwgYmV2b3IgU2llIGJlc3RlaGVuZGUgQmVoYW5kbHVuZ2VuIMOkbmRlcm4gb2RlciBlcnNldHplbi4gPC8gcD4gXCIsXHJcbiAgICBcImhlbHAtdGV4dDE1XCI6XCJXaWUgYmVlaW5mbHVzc2VuIGVsZWt0cm9tYWduZXRpc2NoZSBGZWxkZXIgbWVpbmVuIEvDtnJwZXI/IFwiLFxyXG4gICAgXCJoZWxwLXRleHQxNlwiOlwiQWxsZXMgaW4gdW5zZXJlbSBLw7ZycGVyIGlzdCBlbGVrdHJpc2NoLCB1bnNlcmUgWmVsbGVuIGtvbW11bml6aWVyZW4gbWl0IGVsZWt0cm9tYWduZXRpc2NoZW4gRnJlcXVlbnplbiwgdW5zZXIgSGVyeiBlcnpldWd0IGVsZWt0cm9tYWduZXRpc2NoZSBXZWxsZW4gbWl0IEplZGVyIFNjaGxhZyBrb21tdW5pemllcnQgdW5zZXIgTmVydmVuc3lzdGVtLCB3ZW5uIE5ldXJvbmVuIMO8YmVyIFN5bmFwc2VuIGF1ZiBlbGVrdHJvbWFnbmV0aXNjaGUgU2lnbmFsZSByZWFnaWVyZW4uIEluIGRpZXNlbSBTaW5uZSBrw7ZubmVuIHdpciB2ZXJzdGVoZW4sIHdpZSBleHRlcm5lIG1hZ25ldGlzY2hlLCBlbGVrdHJpc2NoZSB1bmQgZWxla3Ryb21hZ25ldGlzY2hlIEZlbGRlciBtaXQgamVkZW0gQXNwZWt0IHVuc2VyZXJcIixcclxuXHJcbiAgICBcImhlbHAtdGV4dDIzXCI6IFwiS8O2bm50ZW4gTWFnbmV0ZmVsZGVyIGVpbmUgw5xiZXJkb3NpZXJ1bmcgdmVydXJzYWNoZW4/XCIsXHJcbiAgICBcIkhlbHAtdGV4dDI0XCI6IFwiRGllIE15TWF0IGFyYmVpdGV0IG1pdCBnZXB1bHN0ZW4gTWFnbmV0ZmVsZCB2b24gc2VociBnZXJpbmdlciBJbnRlbnNpdMOkdCBlaW5lIGdlc3VuZGUgWmVsbGUgaW4gaWRlYWxlciBLYXBheml0w6R0IGFyYmVpdGV0LCBzbyBkYXNzIFNpZSBrZWluZSBOb3R3ZW5kaWdrZWl0IGbDvHIgbWVociBFbmVyZ2llIHVuZCBrw7ZubmVuIG5pY2h0IG1laHIgRW5lcmdpZSBha3plcHRpZXJlbiwgc28gZGllc2UgRnJlcXVlbnplbiBpZ25vcmllcmVuIC4uIEVpbmUgYmVzY2jDpGRpZ3RlIG9kZXIgZGVmZWt0ZSBaZWxsZSBrYW5uIGVpbmVuIFRlaWwgZGllc2VyIEVuZXJnaWUgYWJzb3JiaWVyZW4sIGFiZXIgZXMgaXN0IHVubcO2Z2xpY2gsIHNpZSB6dSDDvGJlcmxhc3RlbiwgZGEga2VpbmUgTcO2Z2xpY2hrZWl0IGJlc3RlaHQsIG1laHIgRW5lcmdpZSB6dSBzcGVpY2hlcm4sIGFscyBiZW7DtnRpZ3Qgd2lyZC4gPC8gUD4gXCIsXHJcblxyXG4gICAgXCJoZWxwLXRleHQyNVwiOiBcIldhcyBzaW5kIGVpbmlnZSBkZXIgZ3J1bmRsZWdlbmRlbiBwb3NpdGl2ZW4gV2lya3VuZ2VuLCBkaWUgUEVNRnMgYXVmIG1laW5lbiBLw7ZycGVyIGhhYmVuIHdlcmRlbj8gPC8gZGl2PlwiLFxyXG4gICAgXCJoZWxwLXRleHQyNlwiOiBcIlZlcmJlc3NlcnVuZyBkZXIgR2V3ZWJlaGVpbHVuZzxicj5TY2htZXJ6cmVkdWt0aW9uPGJyPkVuZXJnaWUgc3RlaWdlcm48YnI+VmVyYmVzc2VyZSBkZW4gU2NobGFmIDxicj5FcyBtYWNodCBkYXMgV2VpY2hnZXdlYmUgZmxleGlibGVyIDxicj5TdGltdWxhdGlvbiBNZXJpZGlhbmEgPGJyPlNlbmt1bmcgZGVzIEJsdXRkcnVja3M8YnI+R2VyaW5udW5nc2Zha3RvcmVuIHZlcmJlc3Nlcm48YnI+UmVkdXppZXJ0ZSBBcnRocml0aXMgQXVmbmFobWUgdm9uPGJyPkltbXVuc3lzdGVtIFN0aW11bGF0aW9uPGJyPkVudGdpZnR1bmc8YnI+SGVsZmVuIFNpZSBkZXIgbmVydsO2c2VuIEZ1bmt0aW9uIDxicj5WZXJiZXNzZXJ1bmcgZGVyIE7DpGhyc3RvZmZhdWZuYWhtZTxicj5SZWR1a3Rpb24gZGVyIE11c2tlbHNwYW5udW5nXCIsXHJcblxyXG5cclxuXHJcbiAgICAgICAgXCJhZGRpY3Rpb24tdXBwZXJcIjogXCJTVUNIVFwiLFxyXG4gICAgICAgIFwiYWRkaWN0aW9uLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEVyZ8OkbnplbmQgYmVpIFN1Y2h0YmVoYW5kbHVuZ2VuLiDigKIgWnVyIEFiZ2V3w7ZobnVuZyB2b24gWmlnYXJldHRlbi0sIEFsa29ob2wtIG9kZXIgRG9yZ2Vua29uc3VtLiDigKIgTWluZGVydCBkaWUgTmViZW53aXJrdW5nZW4gYmVpIEVudHp1Z3NlcnNjaGVpbnVuZ2VuLiBadXNhdHpwcm9ncmFtbWU6IEVudGdpZnR1bmcsICBFLXNtb2csIE5lYmVubmllcmVuLCBGcnVzdHJhdGlvbiwgRnJldWRlLCBGcmllZGUsIEVudHNwYW5udW5nLCAgRXJkZS1FbGVtZW50LCBXYXNzZXItRWxlbWVudCwgTWV0YWxsLUVsZW1lbnQsIExlYmVyLU1lcmlkaWFuLCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgRGlja2Rhcm0tTWVyaWRpYW4sIEhlcnotTWVyaWRpYW4sIE5pZXJlbi1NZXJpZGlhbiwgMS4gdW5kIDIuICBDaGFrcmFcIixcclxuICAgICAgICBcImFkcmVuYWwtZ2xhbmQtdXBwZXJcIjogXCJORUJFTk5JRVJFTlwiLFxyXG4gICAgICAgIFwiYWRyZW5hbC1nbGFuZC1kZXNjcmlwdGlvblwiOiBcIuKAoiBVbnRlcnN0w7x0enQgZGllIEVyaG9sdW5nIGJlaSBzdGFya2VyIEVyc2Now7ZwZnVuZy4g4oCiIEJlaSBEYXVlci1Nw7xkaWdrZWl0LiDigKIgVW50ZXJzdMO8dHplbmQgYmVpIEhvcm1vbi1VbmdsZWljaGdld2ljaHQuIOKAoiBBbHMgRXJnw6RuenVuZ3MtQmVoYW5kbHVuZyBiZWkgQWxsZXJnaWVuIHVuZCBBdXRvaW1tdW4tUHJvYmxlbWVuLiBadXNhdHpwcm9ncmFtbWU6IFLDvGNrZW5zY2htZXJ6ZW4sIEVyc2Now7ZwZnVuZywgTGViZW5zZnJldWRlLCBFbmVyZ2llLVNwZW5kZXIsIEUtU21vZywgV2Fzc2VyLUVsZW1lbnQsIFdpcmJlbHPDpHVsZSAoRmVobGF1c3JpY2h0dW5nZW4gZGVyIFdpcmJlbHPDpHVsZSBrw7ZubmVuIE5pZXJlbnN0w7ZydW5nZW4gYmVnw7xzdGlnZW4pLCAxLiB1bmQgMi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJhbnRpLWFnaW5nLXVwcGVyXCI6IFwiQU5USSBBR0lOR1wiLFxyXG4gICAgICAgIFwiYW50aS1hZ2luZy1kZXNjcmlwdGlvblwiOiBcIuKAoiBBbnRpLWFnaW5nIFByb2dyYW1tIHVtIGRpZSBCaW8tS29tbXVuaWthdGlvbnNha3Rpdml0w6R0IGltIE9yZ2FuaXNtdXMgYXVmcmVjaHQgenUgZXJoYWx0ZW4uIOKAoiBIw6RsdCBkZW4gS8O2cnBlciBpbiBGb3JtLiDigKIgZsO8ciBkZW4gZXJmb2xncmVpY2hlbiBBYnRyYW5zcG9ydCB2b24gU3RvZmZ3ZWNoc2VsYWJmYWxscHJvZHVrdGVuLiDigKIgVmVycmluZ2VydCBkaWUgdMOkZ2xpY2hlIGvDtnJwZXJsaWNoZSB1bmQgZ2Vpc3RpZ2UgU3RyZXNzbGFkdW5nLiBadXNhdHpwcm9ncmFtbWU6IEtub2NoZW4sIEVuZXJnaWUtQXVzZ2xlaWNoLCBNaW5lcmFsLVN0b2Zmd2VjaHNlbCwgQmluZGVnZXdlYmUsIEVsZW1lbnRlLCBNZXJpZGlhbmUsIDEuIOKAkyAyLiB1bmQgNy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJhdWRpdG9yeS11cHBlclwiOiBcIkjDllJTWVNURU1cIixcclxuICAgICAgICBcImF1ZGl0b3J5LWRlc2NyaXB0aW9uXCI6IFwi4oCiIEVyZ8Okbnp0IGFsbGUgQmVoYW5kbHVuZ2VuIGJlaSBTdMO2cnVuZ2VuIGRlcyBHZWjDtnItIHVuZCBHbGVpY2hnZXdpY2h0c3lzdGVtLiDigKIgVm9yYmV1Z2VuZGUgQW53ZW5kdW5nIHp1ciBCZWliZWhhbHR1bmcgZGVyIEjDtnJxdWFsaXTDpHQuIOKAoiBFcmfDpG56dW5nc2JlaGFuZGx1bmcgYmVpIGNocm9uaXNjaGVuIEdlaMO2cmthbmFsLSB1bmQgTWl0dGVsb2hyLUVudHrDvG5kdW5nZW4uIOKAoiBBbndlbmRlbiBiZWkgbGF1dGVtIEFyYmVpdHN1bWZlbGQgYWxzIFByw6R2ZW50aW9uLiBadXNhdHpwcm9ncmFtbWU6IEtyZWlzbGF1ZnN5c3RlbSwgTHltcHN5c3RlbSwgQXRtdW5nc3N5c3RlbS4gTmViZW5ow7ZobGVuL1N0aXJuaMO2aGxlbiwgRW50Z2lmdHVuZywgTmllcmVuLU1lcmlkaWFuLCBMZWJlci1NZXJpZGlhbiwgV2Fzc2VyLUVsZW1lbnQsIDYuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiYmFja2FjaGUtdXBwZXJcIjogXCJSw5xDS0VOU0NITUVSWkVOXCIsXHJcbiAgICAgICAgXCJiYWNrYWNoZS1kZXNjcmlwdGlvblwiOiBcIuKAoiBWb3JiZXVndW5nIHVuZCBNaW5kZXJ1bmcgdm9uIFLDvGNrZW5zY2htZXJ6ZW4uIOKAoiBVbnRlcnN0w7x0emVuZCBiZWkgV2lyYmVsc8OkdWxlbi1UaGVyYXBpZSB1bmQgQmFuZHNjaGVpYmVuLVZvcmbDpGxsZW4uIOKAoiAgTGluZGVydCBTY2htZXJ6ZW4gaW0gTGVuZGVuYmVyZWljaCAoSGV4ZW5zY2h1c3MpLiDigKIgTGluZGVydCBNdXNrZWxrYXRlciBuYWNoIGvDtnJwZXJsaWNoZXIgQW5zdHJlbmd1bmcuIOKAoiBVbnRlcnN0w7x0enQgZGllIEJlaGFuZGx1bmcgdm9uIFLDvGNrZW5zY2htZXJ6ZW4sIGRpZSBIYW5kLSB1bmQgQXJtYmV3ZWd1bmdlbiBibG9ja2llcmVuLiDigKIgWnVzYXR6cHJvZ3JhbW1lOiBWZXJkYXV1bmcsIFdpcmJlbHPDpHVsZSwgTmFja2VuL1NjaHVsdGVyLCBNdXNrZWxnZXdlYmUsIE5lcnZlbiwgRnJ1c3RyYXRpb24sIEZyZXVkZSwgV2Fzc2VyLUVsZW1lbnQsIE5pZXJlbi1NZXJpZGlhbiwgSGFybmJsYXNlLU1lcmlkaWFuLCBEaWNrZGFybS1NZXJpZGlhbiwgMS4gdW5kIDIuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiYm9uZXMtdXBwZXJcIjogXCJLTk9DSEVOXCIsXHJcbiAgICAgICAgXCJib25lcy1kZXNjcmlwdGlvblwiOiBcIuKAoiBJbiBkZXIgUmVoYWJpbGl0YXRpb25zcGVyaW9kZSBuYWNoIEtub2NoZW5icsO8Y2hlbiB1bmQgS25vY2hlbmtyYW5raGVpdGVuLiDigKIgT3B0aW1pZXJ0IGRpZSBTdG9mZndlY2hzZWxmdW5rdGlvbmVuIGRlcyBLbm9jaGVuZ2V3ZWJlcy4g4oCiIFNjaG1lcnpsaW5kZXJuZCBiZWkgQmVlaW50csOkY2h0aWd1bmcgZGVyIFN0b2Zmd2VjaHNlbGZ1bmt0aW9uZW4gZGVzIEtub2NoZW5nZXdlYmVzLiDigKIgRXJnw6RuenQga25vY2hlbnN0w6Rya2VuZGUgVGhlcmFwaWVuLiDigKIgVW50ZXJzdMO8dHp0IGRpZSBLYWx6aXVtYXVmbmFobWUgaW4gZGllIEtub2NoZW56ZWxsZW4gKGJldWd0IEVudGthbGt1bmcgdm9yKS4g4oCiIFNjaG1lcnpsaW5kZXJuZCBiZWkgS25vY2hlbndhY2hzdHVtIGJlaSBLaW5kZXIuIFp1c2F0c3Byb2dyYW1tZTogQmluZGVnZXdlYmUsIE5lYmVubmllcmVuLCBTY2hpbGRkcsO8c2VuLCBNaW5lcmFsLVN0b2Zmd2VjaHNlbC1TdMO2cnVuZywgQW50aSBBZ2luZywgVmVyZGF1dW5nc3N5c3RlbSwgTWV0YWxsLUVsZW1lbnQsIFdhc3Nlci1FbGVtZW50LCBEaWNrZGFybS1NZXJpZGlhbiwgTGViZXItTWVyaWRpYW4sIE5pZXJlbi1NZXJpZGlhbiwgMS4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJjaGlsZC1kZXZlbG9wZW1lbnQtdXBwZXJcIjogXCJLSU5ETElDSEUgRU5UV0lDS0xVTkdcIixcclxuICAgICAgICBcImNoaWxkLWRldmVsb3BlbWVudC1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGllIGdlaXN0aWdlIHVuZCBrw7ZycGVybGljaGUgRW50d2lja2x1bmcgYmVpIEtpbmRlcm4uIOKAoiBTdGltbXVsaWVydCBkaWUgc3BlemlmaXNjaGVuIEdld2ViZSBiZWkgZGVyIEVudHdpY2tsdW5nLiDigKIgVmVyYmluZHVuZyBtaXQgZGVyIEVyZGUsIEVyZHVuZy4gV2ljaHRpZyBmw7xyIEtpbmRlciBkaWUgaW4gc3TDpGR0aXNjaGVuIEdlYmlldGVuIGxlYmVuLiBadXNhdHpwcm9ncmFtbWU6IEVuZXJnaWUtQXVzZ2xlaWNoLCBLbm9jaGVuLCBNdXNrZWxuLCBOZXJ2ZW5zeXN0ZW0sIEUtU21vZywgRnJldWRlLCBGcnVzdHJhdGlvbiwgRWxlbWVudGUsIFBlcmlrYXJkaXVtLU1lcmlkaWFuLCBNaWx6L0JhdWNoc3BlaWNoZWxkcsO8c2UtTWVyaWRpYW4sIENoYWtyYXNcIixcclxuICAgICAgICBcImNpcmN1bGF0b3J5LXN5c3RlbS11cHBlclwiOiBcIktSRUlTTEFVRi1TWVNURU1cIixcclxuICAgICAgICBcImNpcmN1bGF0b3J5LXN5c3RlbS1kZXNjcmlwdGlvblwiOiBcIuKAoiBVbnRlcnN0w7x0emVuZCBiZWkgS3JlaXNsYXVmcHJvYmxlbWVuLiDigKIgQmVpIE5laWd1bmcgenUgw5ZkZW1lbiBpbiBkZW4gRXh0cmVtaXTDpHRlbi4g4oCiIEVyZ8Okbnp0IGRpZSBCZWhhbmRsdW5nIHZvbiBBcnRlcmlvc2tsZXJvc2UuIOKAoiBadXNhdHpwcm9ncmFtbWU6IE5lYmVubmllcmVuLCBFbnRzcGFubnVuZywgS29uemVudHJhdGlvbiwgR2Vkw6RjaHRuaXMsIEZldWVyLUVsZW1lbnQsIEhlcnotTWVyaWRpYW4sIFBlcmlrYXJkaXVtLU1lcmlkaWFuLCAxLiB1bmQgNC4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJjb25jZW50cmF0aW9uLXVwcGVyXCI6IFwiS09OWkVOVFJBVElPTlwiLFxyXG4gICAgICAgIFwiY29uY2VudHJhdGlvbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBSZWd0IGRhcyBHZWTDpGNodG5pcyBhbiBzdGVpZ2VydC92ZXJiZXNzZXJ0IFByb2JsZW1sw7ZzdW5nZW4gdW5kIFNwcmFjaGdlc2NoaWNrLiDigKIgTW9iaWxpc2llcnQgZGllIEVuZXJnaWVyZXNlcnZlbiB1bmQgZsO2cmRlcnQgZGllIEludHVpdGlvbi4gR2VzY2jDpGZ0c3RyZWZmZW4gdW5kIFByw7xmdW5nZW4uIFp1c2F0enByb2dyYW1tZTogRW5lcmdpZS1BdXNnbGVpY2gsIEFudGkgQWdpbmcsIE5lYmVubmllcmVuLCBEYXJtZmxvcmEsIEdlZMOkY2h0bmlzLCBNaWx6LCAgQmF1Y2hzcGVpY2hlbGRyw7xzZS1NZXJpZGlhbiwgTmllcmVuLU1lcmlkaWFuLCBIZXJ6LU1lcmlkaWFuLCAxLiDigJMgMy4gdW5kIDYuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiY29ubmVjdGl2ZS10aXNzdWUtdXBwZXJcIjogXCJCSU5ERUdFV0VCRVwiLFxyXG4gICAgICAgIFwiY29ubmVjdGl2ZS10aXNzdWUtZGVzY3JpcHRpb25cIjogXCLigKIgQmV1Z3QgVmVybGV0enVuZ2VuIHZvciBiZWkgw7xiZXJzdHJhcGF6aWVydGVtIEJpbmRlZ2V3ZWJlIGJlaSBMZXV0ZW4gbWl0IEJpbmRlZ2V3ZWJzc2Nod8OkY2hlICh6LkIuIGFuZsOkbGxpZyBlaW5lIEhlcm5pZSB6dSBlbnR3aWNrZWxuLCBLcmFtcGZhZGVybikuIOKAoiBXaWNodGlnIGJlaSB4LXdlbGNoZW0gQW50aS1BZ2luZyBQcm9ncmFtbS4gQmVzc2VyZSBWZXJmw7xnYmFya2VpdCBkZXIgTsOkaHJzdG9mZmUgYXVmIGRhcyBPcmdhbiBTeXN0ZW0uIFp1c2F0enByb2dyYW1tZTogIEFudGktQWdpbmcsIE5lYmVubmllcmVuLCBWZXJkYXV1bmdzc3lzdGVtLCBNaW5lcmFsaWVuLVN0b2Zmd2VjaHNlbC1TdMO2cnVuZywgR2VsZW5rZSwgTXVza2VsbiwgV2Fzc2VyLUVsZW1lbnQsIEhvbHotRWxlbWVudCwgMS4sIDMuIHVuZCA2LiBDaGFrcmFcIixcclxuICAgICAgICBcImNvbnN0aXBhdGlvbi11cHBlclwiOiBcIlZFUlNUT1BGVU5HXCIsXHJcbiAgICAgICAgXCJjb25zdGlwYXRpb24tZGVzY3JpcHRpb25cIjogXCLigKIgQmVpIGFrdXRlciB1bmQgY2hyb25pc2NoZXIgVmVyc3RvcGZ1bmcuIFp1c2F0enByb2dyYW1tZTogVmVyZGF1dW5nc3N5c3RlbSwgTWluZXJhbGllbi1TdG9mZndlY2hzZWwtU3TDtnJ1bmcsIERhcm1mbG9yYSwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIERpY2tkYXJtLU1lcmlkaWFuLCAxLiAgdW5kIDMuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiZGV0b3hpZmljYXRpb24tdXBwZXJcIjogXCJFTlRHSUZUVU5HXCIsXHJcbiAgICAgICAgXCJkZXRveGlmaWNhdGlvbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBVbnRlcnN0w7x0enQgZGllIGvDtnJwZXJlaWdlbmVuIEVudGdpZnR1bmdzbWVjaGFuaXNtZW4uIOKAoiBOw7x0emxpY2ggbmFjaCBqZWRlciBWZXJnaWZ0dW5nLiDigKIgQmlldGV0IFNjaHV0eiBiZWltIFBhc3NpdnJhdWNoZW4uIOKAoiBVbnRlcnN0w7x0emVuZCBiZWkgUmF1Y2gtLCBBbGtvaG9sLSB1bmQgTWVkaWthbWVudGVuLUVudHp1Zy4g4oCiIFp1c2F0enByb2dyYW1tOiBWZXJkYXV1bmcsIERhcm1mbG9yYSwgRS1TbW9nLCBCaW5kZWdld2ViZSwgVmVyc3RvcGZ1bmcgKHNvZmVybiBhbndlbmRiYXIpLCBGcmllZGVuLCBNaWx6L0JhdWNoc3BlaWNoZWxkcsO8c2UtTWVyaWRpYW4sIExlYmVyLU1lcmlkaWFuLCBOaWVyZW4tTWVyaWRpYW4sIERpY2tkYXJtLU1lcmlkaWFuLCBMdW5nZW4tTWVyaWRpYW4sIDIuIENoYWtyYSAgQmVtZXJrdW5nOiBOSUNIVCBBTldFTkRFTiBJTiBERVIgU0NIV0FOR0VSU0NIQUZUIVwiLFxyXG4gICAgICAgIFwiZGlhcnJoZWEtdXBwZXJcIjogXCJEVVJDSEZBTExcIixcclxuICAgICAgICBcImRpYXJyaGVhLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEJlaSBha3V0ZW0gdW5kIGNocm9uaXNjaGVtIER1cmNoZmFsbC4gWnVzYXR6cHJvZ3JhbW1lOiBWZXJkYXV1bmdzc3lzdGVtLCBFbnRnaWZ0dW5nLCBEYXJtZmxvcmEsIE1hZ2VuLU1lcmlkaWFuLCBEw7xubi0gdW5kIERpY2tkYXJtLU1lcmlkaWFuLCBGZXVlci1FbGVtZW50LCAxLiB1bmQgMy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJkaWdlc3RpdmUtc3lzdGVtLXVwcGVyXCI6IFwiVkVSREFVVU5HXCIsXHJcbiAgICAgICAgXCJkaWdlc3RpdmUtc3lzdGVtLWRlc2NyaXB0aW9uXCI6IFwi4oCiIFZlcmRhdXVuZ3NiZXNjaHdlcmRlbi4g4oCiIFN0aW1tdWxpZXJ0IGRpZSBPcmdhbmUgZGVzIFZlcmRhdXVuZ3NzeXN0ZW1zLiDigKIgRsO2cmRlcnQgZGllIEF1Zm5haG1lIHZvbiBWaXRhbWluZW4gdW5kIE5haHJ1bmdzZXJnw6RuenVuZ3NtaXR0ZWwuIOKAoiBVbnRlcnN0w7x0enQgZGFzIFZlcmRhdXVuZ3NzeXN0ZW0gYmVpIHNjaHdlciB2ZXJkYXVsaWNoZW4gTGViZW5zbWl0dGVsbiAgKE3DvGRpZ2tlaXQgbmFjaCBkZXIgTmFocnVuZ3NhdWZuYWhtZSkuIOKAoiBVbnRlcnN0w7x0emVuZCBiZWkgbGFuZ2ZyaXN0aWdlciBwaGFybWF6ZXV0aXNjaGVyIEJlaGFuZGx1bmcsIHZlcm1pbmRlcnQgTmViZW53aXJrdW5nZW4gaW0gVmVyZGF1dW5nc3RyYWt0LiBadXNhdHpwcm9ncmFtbWU6IERhcm1mbG9yYSwgRW50Z2lmdHVuZywgRnJ1c3RyYXRpb24sIE1hZ2VuLU1lcmlkaWFuLCBNaWx6L0JhdWNoc3BlaWNoZWxkcsO8c2UtTWVyaWRpYW4sIETDvG5uZGFybS1NZXJpZGlhbiwgRGlja2Rhcm0tTWVyaWRpYW4sIEdhbGxlbmJsYXNlLU1lcmlkaWFuLCBFcmRlLUVsZW1lbnQsIE1ldGFsLUVsZW1lbnQsIDMuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiZGlzY2Vybm1lbnQtdXBwZXJcIjogXCJHRUTDhENIVE5JU1wiLFxyXG4gICAgICAgIFwiZGlzY2Vybm1lbnQtZGVzY3JpcHRpb25cIjogXCLigKIgVW50ZXJzdMO8dHp0IGRpZSBNZXJrZsOkaGlna2VpdC4g4oCiIFN0ZWlnZXJ0IGRpZSBBdWZuYWhtZWbDpGhpZ2tlaXQgZsO8ciB3aWNodGlnZSBJbmZvcm1hdGlvbmVuLiDigKIgVW50ZXJzdMO8dHp0IGRpZSBLb256ZW50cmF0aW9uc2bDpGhpZ2tlaXQuIOKAoiBHZXN0ZWlnZXJ0ZSBMZXJuZsOkaGlna2VpdC4gWnVzYXR6cHJvZ3JhbW1lOiBLb256ZW50cmF0aW9uLCBLcmVpc2xhdWZzeXN0ZW0sIEVuZXJnaWVzcGVuZGVyLCBFcmRlLUVsZW1lbnQsIFdhc3Nlci1FbGVtZW50LCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgTWlsei9CYXVzY2hzcGVpY2hlbGRyw7xzZS1NZXJpZGlhbiwgSGVyei1NZXJpZGlhbiwgNS4sIDYuIHVuZCA3LiBDaGFrcmFcIixcclxuICAgICAgICBcImVhcnRoLWVsZW1lbnQtdXBwZXJcIjogXCJFUkRFIEVMRU1FTlRcIixcclxuICAgICAgICBcImVhcnRoLWVsZW1lbnQtc2hvcnRcIjogXCJFUkRFXCIsXHJcbiAgICAgICAgXCJlYXJ0aC1lbGVtZW50LWRlc2NyaXB0aW9uXCI6IFwi4oCiIGhhcm1vbmlzaWVydCBlbW90aW9uYWxlIFZlcmhhbHRlbnN3ZWlzZW4gZGVzIEVyZGUtRWxlbWVudGVzIHNvbGNoZSB3aWUgQW5nc3QgdW5kIEJlc29yZ25pcy4g4oCiIEFscyBadXNhdHpiZWhhbmRsdW5nIGJlaSBQcm9ibGVtZW4gbWl0IGFibm9ybWFsZW4gT3JnYW5mdW5rdGlvbmVuLiBNYWdlbiwgTWlseiwgQmF1Y2hzcGVpY2hlbGRyw7xzZSB1bmQgTXVza2VsZ2V3ZWJlLCB3ZWxjaGUgZGVtIEVyZGUtRWxlbWVudCB6dWdlb3JkbmV0IHdlcmRlbi4gWnVzYXR6cHJvZ3JhbW1lOiAgTWVyaWRpYW5lIHVuZCBDaGFrcmFzXCIsXHJcbiAgICAgICAgXCJlLXNtb2ctdXBwZXJcIjogXCJFLVNNT0dcIixcclxuICAgICAgICBcImUtc21vZy1kZXNjcmlwdGlvblwiOiBcIuKAoiBGw7xyIExldXRlIGRpZSBpbiBlbmdlbSBLb250YWt0IG1pdCBlbGVrdHJvbmlzY2hlbiB1bmQgZWxla3RyaXNjaGVuIEdlcsOkdGVuIHN0ZWhlbi4g4oCiIEJlaSBIYW5keS0sIE1pa3Jvd2VsbGVuLSB1bmQgVGVsZWZvbmJlc3RyYWhsdW5nICh2LmEuIGluIGRpY2h0IGJlc2llZGVsdGVuIEdlYmlldGVuKS4g4oCiIE1pbmRlc3RlbnMgendlaW1hbCBwcm8gV29jaGUgYW53ZW5kZW4hLiDigKIgR8O8bnN0aWcgZsO8ciBIZWlsZXIvaW5uZW46IFJlaW5pZ3QgZGllIEF1cmEgdm9uIHNjaHdlcmVuIG5lZ2F0aXZlbiBFbmVyZ2llbi4gWnVzYXR6cHJvZ3JhbW1lOiBFbmVyZ2llLUF1c2dsZWljaCwgTWlsei9CYXVjaHNwZWljaGVsZHLDvHNlLU1lcmlkaWFuLCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgQWxsZSBDaGFrcmEgUHJvZ3JhbW1lXCIsXHJcbiAgICAgICAgXCJlbmVyZ3ktYmFsYW5jaW5nLXVwcGVyXCI6IFwiRU5FUkdJRS1BVVNHTEVJQ0hcIixcclxuICAgICAgICBcImVuZXJneS1iYWxhbmNpbmctZGVzY3JpcHRpb25cIjogXCLigKIgVMOkZ2xpY2ggZsO8ciBkYXMgYWxsZ2VtZWluZSBXb2hsYmVmaW5kZW4uIOKAoiBOb3JtYWxpc2llcnQgb3JnYW5pc2NoZSBVbnRlci0gb2RlciDDnGJlcmZ1bmt0aW9uLiDigKIgWnVtIEF1c2dsZWljaCBkZXIgS29vcmRpbmF0aW9uc2bDpGhpZ2tlaXQuIOKAoiBWb3JiZXVnZW5kIGJlaSBow6R1ZmlnZW4gS29wZnNjaG1lcnplbi4g4oCiIEJlaSBrYWx0ZW4gR2xpZWRlcm1hc3NlbiAoRXh0cmVtaXTDpHRlbikuIFp1c2F0enByb2dyYW1tZTogRS1zbW9nLCBGcnVzdHJhdGlvbiwgRnJldWRlLCBOaWVyZW4tTWVyaWRpYW4sIFdhc3Nlci0gRWxlbWVudCwgMS4gdW5kIDQuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiZW5lcmd5LWJvb3N0ZXItdXBwZXJcIjogXCJFTkVSR0lFLVNQRU5ERVJcIixcclxuICAgICAgICBcImVuZXJneS1ib29zdGVyLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEdlaXN0aWdlciBBbnRyaWViIGluIFN0cmVzcy1TaXR1YXRpb25lbi4g4oCiIEdlc3RlaWdlcnRlIExlaXN0dW5nc2bDpGhpZ2tlaXQgaW0gU3BvcnQgdW5kIGJlaSBkZXIgQXJiZWl0LiDigKIgTW9iaWxpc2llcnQgZGllIEVuZXJnaWVyZXNlcnZlbiB1bmQgdmVyYmVzc2VydCBkaWUgS29vcmRpbmF0aW9uLiDigKIgQWxzIFZvcmJlcmVpdHVuZyBhdWYgZWluZW4gV2V0dGthbXBmLCBlaW4gR2VzY2jDpGZ0cy1NZWV0aW5nIHVuZCBhdWYgUHLDvGZ1bmdlbi4gS2zDpHJ0IGRlbiBHZWlzdC4gWnVzYXR6cHJvZ3JhbW1lOiBFbmVyZ2llLUF1c2dsZWljaCwgQW50aS1BZ2luZywgTmViZW5uaWVyZW4sIFNjaGlsZGRyw7xzZW4sIE5pZXJlbi1NZXJpZGlhbiwgV2Fzc2VyLUVsZW1lbnQsIExlYmVyLU1lcmlkaWFuLCBLcmVpc2xhdWYsIEF0bXVuZ3NzeXN0ZW0sIDEuIOKAkyAzLiB1bmQgNi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJleGhhdXN0aW9uLXVwcGVyXCI6IFwiRVJTQ0jDllBGVU5HXCIsXHJcbiAgICAgICAgXCJleGhhdXN0aW9uLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEdlbmVzdW5nIHZvbiBleHRyZW1lciBNw7xkaWdrZWl0IHVuZCBFcnNjaMO2cGZ1bmcuIOKAoiBMw7ZzdCBpbm5lcmUgSW5mb3JtYXRpb25zYmxvY2thZGVuLiDigKIgTWluZGVydCBVbndvaGxzZWluIGF1ZmdydW5kIHZvbiBtYW5nZWxuZGVyIER1cmNoYmx1dHVuZy4gWnVzYXR6cHJvZ3JhbW1lOiAgTmViZW5uaWVyZW4sIFNjaGlsZGRyw7xzZW4sIEVuZXJnaWUtU3BlbmRlciwgRnJ1c3RyYXRpb24sIEtyZWlzbGF1ZiwgRnJldWRlLCBMZWJlci1NZXJpZGlhbiwgSGVyei1NZXJpZGlhbiwgUGVyaWthcmQtTWVyaWRpYW4sIEZldWVyLUVsZW1lbnQsIDEuICwgMi4gIHVuZCAzLiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJleWVzaWdodC11cHBlclwiOiBcIlNFSFZFUk3DlkdFTlwiLFxyXG4gICAgICAgIFwiZXllc2lnaHQtZGVzY3JpcHRpb25cIjogXCLigKIgSGlsZnJlaWNoIGJlaSBtw7xkZW4gQXVnZW4uIOKAoiBFcmxlaWNodGVydCBkaWUgRW50c3Bhbm51bmcgZGVyIEF1Z2VubXVza2Vsbi4g4oCiIFZvcmJldWdlbmQgZ2VnZW4gUHJvYmxlbWUgdW5kIEtyYW5raGVpdGVuIGRlciBBdWdlbiB1bmQgZGVzIFNlaHZlcm3DtmdlbnMuIFp1c2F0enByb2dyYW1tZTogSG9sei1FbGVtZW50LCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgTmllcmVuLSB1bmQgTGViZXItTWVyaWRpYW4sIDYuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiZmVtYWxlLXVwcGVyXCI6IFwiRlJBVVwiLFxyXG4gICAgICAgIFwiZmVtYWxlLWRlc2NyaXB0aW9uXCI6IFwi4oCiIFVudGVyc3TDvHR6dCBkYXMgRm9ydHBmbGFuenVuZ3NzeXN0ZW0gc293aWUgZGllIEdlc2NobGVjaHRzb3JnYW5lLiDigKIgUmVndWxpZXJ0IGRlbiBNZW5zdHJ1YXRpb25zenlrbHVzICB1bmQgZXJow7ZodCBkYXMgV29obGJlZmluZGVuIHZvciB1bmQgd8OkaHJlbmQgZGVyIE1lbnN0cnVhdGlvbi4g4oCiICBCZWkgaMOkdWZpZyB2b3Jrb21tZW5kZW4gWnlzdGVuLiDigKIgVW50ZXJzdMO8dHp0IFBNUyBTeW1wdG9tZSAoUHLDpG1lbnN0cnVlbGxlcyBTeW5kcm9tKS4g4oCiIFp1ciBFcmfDpG56dW5nIGJlaSBJbmtvbnRpbmVuei1CZWhhbmRsdW5nZW4uIOKAoiBGw7xyIE3DpG5uZXIgbWl0IHN0YXJrZXIgWWluLSBLb25zdGl0dXRpb24uIFp1c2F0enByb2dyYW1tZTogRnJldWRlLCBGcnVzdHJhdGlvbiwgRnJpZWRlLCBIYXJuc3lzdGVtLCBLcmVpc2xhdWZzeXN0ZW0sIE1pbHovQmF1Y2hzcGVpY2hlbGRyw7xzZS1NZXJpZGlhbiwgSGFybmJsYXNlLU1lcmlkaWFuLCBMZWJlci1NZXJpZGlhbiwgMS4gdW5kIDIuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiZmlyZS1lbGVtZW50LXVwcGVyXCI6IFwiRkVVRVIgRUxFTUVOVFwiLFxyXG4gICAgICAgIFwiZmlyZS1lbGVtZW50LXNob3J0XCI6IFwiRkVVRVJcIixcclxuICAgICAgICBcImZpcmUtZWxlbWVudC1kZXNjcmlwdGlvblwiOiBcIuKAoiBTdGFiaWxpc2llcnQgZXh0cmVtZSBTdGltbXVuZ3NzY2h3YW5rdW5nZW4uIOKAoiBBbHMgWnVzYXR6YmVoYW5kbHVuZyBiZWkgUHJvYmxlbWVuIG1pdCBhYm5vcm1hbGVuIE9yZ2FuZnVua3Rpb25lbjogSGVyeiwgRMO8bm5kYXJtIHVuZCBCbHV0Z2Vmw6Rzc2UsIHdlbGNoZSBkZW0gRmV1ZXItRWxlbWVudCB6dWdlb3JkbmV0IHdlcmRlbi4gWnVzYXR6cHJvZ3JhbW1lOiBNZXJpZGlhbmUgdW5kIENoYWtyYXNcIixcclxuICAgICAgICBcImZsdS11cHBlclwiOiBcIkdSSVBQRVwiLFxyXG4gICAgICAgIFwiZmx1LWRlc2NyaXB0aW9uXCI6IFwi4oCiIFN0aW1tdWxpZXJ0IGRhcyBJbW11bnN5c3RlbS4g4oCiIFN0aW1tdWxpZXJ0IGRlbiBIZWlsdW5nc3Byb3plc3MgYmVpIEdyaXBwZSwgQnJvbmNoaXRpcywgTWFuZGVsZW50esO8bmR1bmcsIEx1bmdlbmVudHrDvG5kdW5nIHVuZCBEYXJtZ3JpcHBlLiDigKIgQmVnaW5uZSBtaXQgZGllc2VtIFByb2dyYW1tIGJlaSBkZW4gZXJzdGVuIEdyaXBwZXN5bXB0b21lbiB1bmQgbWVocmVyZSBUYWdlIG5hY2hkZW0gZGllIFN5cHRvbWUgdmVyc2Nod3VuZGVuIHNpbmQuIFp1c2F0enByb2dyYW1tZTogSW1tdW5zeXN0ZW0sIEF0bXVuZ3NzeXN0ZW0sIE5lYmVuaMO2aGxlbiwgVmVyZGF1dW5nc3N5c3RlbSwgIFNtb2csIEVuZXJnaWUtQXVzZ2xlaWNoLCBGcnVzdHJhdGlvbiwgRnJldWRlLCAgRXJkZS1FbGVtZW50LCBEaWNrZGFybS1NZXJpZGlhbiwgTHVuZ2VuLU1lcmlkaWFuLCAzLiwgNC4gIHVuZCA1LiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJnbHVjb3NlLW1ldGFib2xpYy1kaXNvcmRlcnMtdXBwZXJcIjogXCJaVUNLRVItU1RPRkZXRUNIU0VMLVNUw5ZSVU5HXCIsXHJcbiAgICAgICAgXCJnbHVjb3NlLW1ldGFib2xpYy1kaXNvcmRlcnMtZGVzY3JpcHRpb25cIjogXCLigKIgS29tcGxlbWVudMOkci1CZWhhbmRsdW5nIGJlaSBadWNrZXItU3RvZmZ3ZWNoc2Vsc3TDtnJ1bmcg4oCTIChadWNrZXIsIEtvaGxlbmh5ZHJhdGUpLiDigKIgU3RpbW11bGllcnQgZGllIGJpb2luZm9ybWF0aXNjaGUgVmVyYmluZHVuZyB6dXIgQmF1Y2hzcGVpY2hlbGRyw7xzZS4g4oCiIFZvcnRlaWxoYWZ0IGJlaSBlaW5lciBiZXN0ZWhlbmRlbiBJbnN1bGlucmVzaXN0ZW56LiDigKIgS29tcGxlbWVudMOkcmJlaGFuZGx1bmcgYmVpIMOcYmVyZ2V3aWNodCwgRGVwcmVzc2lvbiwgVHlwZSAxIHVuZCAgMiBEaWFiZXRlcy4gWnVzYXR6cHJvZ3JhbW1lOiBFbmVyZ2llLUF1c2dsZWljaCwgRnJldWRlLCBGcnVzdHJhdGlvbiwgU2NoaWxkZHLDvHNlLCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgTWlsei9CYXVjaHNwZWljaGVsZHLDvHNlLU1lcmlkaWFuLCAxLiwgMi4sIDMuIHVuZCA0LlwiLFxyXG4gICAgICAgIFwiaGFpci1ncm93dGgtdXBwZXJcIjogXCJIQUFSV0FDSFNUVU1cIixcclxuICAgICAgICBcImhhaXItZ3Jvd3RoLWRlc2NyaXB0aW9uXCI6IFwi4oCiIFN0aW1tdWxpZXJ0IGRhcyBIYWFyd2FjaHN0dW0uIOKAoiBWZXJzdMOkcmt0IGRpZSBIYWFyd3VyemVsIGJlaSBIYWFyYXVzZmFsbC4g4oCiIFp1ciBSZXN0YXVyaWVydW5nIGJlaSBiZXNjaMOkZGlndGVtIEhhYXIgdW5kIEtvcGZoYXV0LiDigKIgQWxzIEVyZ8Okbnp1bmdzYmVoYW5kbHVuZyBiZWkgSGFhcmF1c2ZhbGwgbmFjaCBDaGVtb3RoZXJhcGllLiBadXNhdHpwcm9ncmFtbWU6IEVudGdpZnR1bmcsIFNjaGlsZGRyw7xzZSwgRGFybWZsb3JhLCBNZXRhbGwtRWxlbWVudCwgTWFnZW4tTWVyaWRpYW4sIE5pZXJlbi1NZXJpZGlhbiwgSGFybmJsYXNlLU1lcmlkaWFuLCAyLiB1bmQgNi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJoZWFkYWNoZS11cHBlclwiOiBcIktPUEZTQ0hNRVJaRU5cIixcclxuICAgICAgICBcImhlYWRhY2hlLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEJlaSBLb3Bmc2NobWVyemVuLiBadXNhdHpwcm9ncmFtbWU6IEZydXN0cmF0aW9uLCBOYWNrZW4sIFNlaHZlcm3DtmdlbiwgRW5lcmdpZS1BdXNnbGVpY2gsIE5hc2VuLU5lYmVuaMO2aGxlbiwgR2Vow7ZyLCBEYXJtZmxvcmEsIFZlcmRhdXVuZywgVmVyc3RvcGZ1bmcgb2RlciBCbHV0aG9jaGRydWNrIHdlbm4gYW53ZW5kYmFyLCBEaWNrZGFybS1NZXJpZGlhbiwgTWFnZW4tIE1lcmlkaWFuLCBMZWJlci1NZXJpZGlhbiwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIDMuIHVuZCA2LiBDaGFrcmFcIixcclxuICAgICAgICBcImhlYXJ0LWZ1bmN0aW9uLXVwcGVyXCI6IFwiSEVSWi1GVU5LVElPTlwiLFxyXG4gICAgICAgIFwiaGVhcnQtZnVuY3Rpb24tZGVzY3JpcHRpb25cIjogXCLigKIgVW50ZXJzdMO8dHplbmQgYmVpIEhlcnpyeXRobXVzLVN0w7ZydW5nZW4uIOKAoiBCZWfDvG5zdGlnZW5kIGluIFN0cmVzcy1TaXR1YXRpb25lbiB1bmQgRW5nZWdlZsO8aGwgaW4gZGVyIEJydXN0LiBadXNhdHpwcm9ncmFtbWU6IEtyZWlzbGF1ZiwgQmluZGVnZXdlYmUsIEVuZXJnaWUtQXVzZ2xlaWNoLCBFbnRzcGFubnVuZywgRnJpZWRlLCBOZXJ2ZW5zeXN0ZW0sIEZldWVyLUVsZW1lbnQsIEhlcnotTWVyaWRpYW4sIDEuLCAzLiB1bmQgNC4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJoZW1vcnJob2lkcy11cHBlclwiOiBcIkjDhE1PUlJIT0lERU5cIixcclxuICAgICAgICBcImhlbW9ycmhvaWRzLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhlbW10IEjDpG1vcnJob2lkZW4tU3lwdG9tZS4g4oCiIEVyZ8Okbnp0IEJlaGFuZGx1bmdlbiBiZWkgTWFzdGRhcm0tUHJvYmxlbWVuLiDigKIgTWluZGVydCBSZWt0dW1zY2htZXJ6ZW4gYmVpIFZlcnN0b3BmdW5nLiBadXNhdHpwcm9ncmFtbWU6IFZlcnN0b3BmdW5nLCBLcmVpc2xhdWZzeXN0ZW0sIEJpbmRlZ2V3ZWJlLCBFbmVyZ2llLUF1c2dsZWljaCwgRW50c3Bhbm51bmcsIFdhc3Nlci1FbGVtZW50LCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgRGlja2Rhcm0tTWVyaWRpYW4sIDEuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiaHlwZXJ0ZW5zaW9uLXVwcGVyXCI6IFwiQkxVVEhPQ0hEUlVDS1wiLFxyXG4gICAgICAgIFwiaHlwZXJ0ZW5zaW9uLWRlc2NyaXB0aW9uXCI6XCLigKIgRXJnw6RuenQgZGllIEJlaGFuZGx1bmcgdm9uIEJsdXRob2NoZHJ1Y2suIFp1c2F0c3Byb2dyYW1tZTogIE5lYmVubmllcmUsIEtyZWlzbGF1ZiwgRmV1ZXItRWxlbWVudCwgTmllcmVuLU1lcmlkaWFuLCBIYXJuYmxhc2UtTWVyaWRpYW4sIFBlcmljYXJkaXVtLU1lcmlkaWFuLCBIZXJ6LU1lcmlkaWFuLCAxLiwgMi4sIDQuIHVuZCA3LiBDaGFrcmFcIixcclxuICAgICAgICBcImltbXVuZS1zeXN0ZW0tdXBwZXJcIjogXCJJTU1VTlNZU1RFTVwiLFxyXG4gICAgICAgIFwiaW1tdW5lLXN5c3RlbS1kZXNjcmlwdGlvblwiOiBcIuKAoiBGw7ZyZGVydCB1bmQgb3B0aW1pZXJ0IGRpZSBGdW5rdGlvbiBkZXMgSW1tdW5zeXN0ZW1zLiDigKIgYWxzIFp1c2F0enRoZXJhcGllIHfDpGhyZW5kIGVpbmVyIHZpcmFsZW4gdW5kL29kZXIgYmFrdGVyaWVsbGVuIEVya3Jhbmt1bmcuIOKAoiBGw7ZyZGVydCBkaWUgQXVmbmFobWUgdm9uIEFudGlveGlkYW50aWVuIHVuZCBWaXRhbWluZW4uIOKAoiBTdGltdWxpZXJ0IGRlbiBWZXJkYXV1bmdzdHJha3QuIFp1c2F0enByb2dyYW1tZTogIEx5bXBoc3lzdGVtLCBFbnRnaWZ0dW5nLCBEYXJtZmxvcmEsIEVyc2Now7ZwZnVuZywgTmViZW5uaWVyZSwgRnJ1c3RyYXRpb24sIEZyaWVkZSwgRnJldWRlLCAyLiB1bmQgMy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJpbmp1cnktdXBwZXJcIjogXCJWRVJMRVRaVU5HXCIsXHJcbiAgICAgICAgXCJpbmp1cnktZGVzY3JpcHRpb25cIjogXCLigKIgU3RpbXVsaWVydCB1bmQgYmVzY2hsZXVuZ3QgSGVpbHVuZ3Nwcm96ZXNzZSB2b24gYmVzY2jDpGRpZ3RlbSBHZXdlYmUuIOKAoiBSZWR1emllcnQgZGllIE5hcmJlbmJpbGR1bmcuIOKAoiBIb2NoLXdpcmtzYW0gbmFjaCBPcGVyYXRpb25lbi4gWnVzYXR6cHJvZ3JhbW1lOiBIYXV0LCBLbm9jaGVuLCBCaW5kZWdld2ViZSwgSW1tdW5zeXN0ZW0sIFp1Y2tlci1TdG9mZndlY2hzZWwtU3TDtnJ1bmcsIEtyZWlzbGF1ZiwgTWluZXJhbC1TdG9mZndlY2hzZWwsIEVyZGUtRWxlbWVudCwgV2Fzc2VyLUVsZW1lbnQsIEhvbHotRWxlbWVudCwgMS4g4oCTIDIuIHVuZCAzLiBDaGFrcmFcIixcclxuICAgICAgICBcImludGVzdGluYWwtZmxvcmEtdXBwZXJcIjogXCJEQVJNRkxPUkFcIixcclxuICAgICAgICBcImludGVzdGluYWwtZmxvcmEtZGVzY3JpcHRpb25cIjogXCLigKIgRXJnw6RuenQgZGllIEFudGktUGlsemJlaGFuZGx1bmcgZGVzIFZlcmRhdXVuZ3NzeXN0ZW1zLiDigKIgSGFybW9uaXNpZXJ0IGRpZSBEYXJtZmxvcmEsIGluc2Jlc29uZGVyZSBiZWkgQWxsZXJnaWVuLiDigKIgRsO2cmRlcnQgZGllIFdpcmtzYW1rZWl0IHZvbiBzcGV6aWVsbGVuIEVybsOkaHJ1bmdzd2Vpc2VuIHVuZCBvcHRpbWllcnQgZGllIExlYmVuc2tyYWZ0LiDigKIgSGlsZnJlaWNoIGbDvHIgTWVuc2NoZW4gbWl0IGNocm9uaXNjaGVyIER5c2Jpb3NlIChVbmdsZWljaGdld2ljaHQgendpc2NoZW4gZGVuIGd1dGVuIHVuZCBzY2hsZWNodGVuIERhcm1iYWt0ZXJpZW4pLiDigKIgQW5yZWd1bmcgZGVzIEltbXVuc3lzdGVtcy4g4oCiIEFscyBFcmfDpG56dW5nc3RoZXJhcGllIGJlaSBCbHV0YXJtdXQsIEVremVtZW4sIFBhcmFzaXRlbiB1bmQgUGlsemVuLiBadXNhdHpwcm9ncmFtbWU6IFZlcmRhdXVuZ3NzeXN0ZW0sIEVudGdpZnR1bmcsIE1pbmVyYWwtU3RvZmZ3ZWNoc2VsLCBJbW11bnN5c3RlbSwgV2Fzc2VyLUVsZW1lbnQsIEVyZGUtRWxlbWVudCwgRGljay0gdW5kIETDvG5uZGFybS1NZXJpZGlhbiwgTWFnZW4tTWVyaWRpYW4sIDIuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiamV0LWxhZy11cHBlclwiOiBcIkpFVC1MQUdcIixcclxuICAgICAgICBcImpldC1sYWctZGVzY3JpcHRpb25cIjogXCLigKIgRsO8ciBXZXR0ZXJlbXBmaW5kbGljaGUgTWVuc2NoZW4uIOKAoiBSZWR1emllcnQgSmV0LUxlZyBFZmZla3QgdW5kIFNjaHdpbmRlbC4g4oCiIFNjaG5lbGxlcmUgQW5rbGltYXRpc2llcnVuZyBhdWYgYW5kZXJlcyBXZXR0ZXIvS2xpbWEgdW5kIEjDtmhlbm1ldGVyLiDigKIgIE1pbmRlcnQgS29wZnNjaG1lcnplbiBhdXNnZWzDtnN0IGR1cmNoIGhvaGUgSMO2aGVubGFnZW4gdW5kIFdldHRlcmZyb250ZW4uIOKAoiBBdXNnbGVpY2ggdm9uIEJlc2Nod2VyZGVuIGRpZSBkdXJjaCBXZXR0ZXJmcm9udGVuIGJlZ8O8bnN0aWd0IHdlcmRlbiAoei5CLiBBbnNwYW5udW5nLCBlcmjDtmh0ZXIgQmx1dGRydWNrLCByaGV1bWF0aXNjaGUgQmVzY2h3ZXJkZW4sIGV0Yy4pLiBadXNhdHpwcm9ncmFtbWU6IFZlcmRhdXVuZ3NzeXN0ZW0sIEtyZWlzbGF1ZnN5c3RlbSwgRS1zbW9nLCBFbmVyZ2llLUF1c2dsZWljaCwgIEZldWVyLUVsZW1lbnQsIEVyZGUtRWxlbWVudCwgMS4gIENoYWtyYVwiLFxyXG4gICAgICAgIFwiam9pbnRzLXVwcGVyXCI6IFwiR0VMRU5LRVwiLFxyXG4gICAgICAgIFwiam9pbnRzLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEJlZ8O8bnN0aWd0IGRlbiBIZWlsdW5nc3Byb3plc3MgYmVpIGdlc2Now6RkaWd0ZW4gR2VsZW5rZnVua3Rpb25lbi4g4oCiIExpbmRlcnQgQmVzY2h3ZXJkZW4gYXVmZ3J1bmQgdm9uIEdlbGVua2VudHrDvG5kdW5nZW4uIFp1c2F0enByb2dyYW1tZTogVmVyZGF1dW5nc3N5c3RlbSwgTXVza2VsZ2V3ZWJlLCBCaW5kZWdld2ViZSwgSW1tdW5zeXN0ZW0sICBOaWVyZW4tTWVyaWRpYW4sIE1hZ2VuLU1lcmlkaWFuLCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgV2Fzc2VyLUVsZW1lbnQsIDEuICwgMi4gIHVuZCA1LiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJqb3ktdXBwZXJcIjogXCJGUkVVREVcIixcclxuICAgICAgICBcImpveS1kZXNjcmlwdGlvblwiOiBcIuKAoiBUcsOkZ3QgZGF6dSBiZWksIGRpZSBBdXNnZWdsaWNoZW5oZWl0IHVuZCBndXRlIExhdW5lIGluIHNjaHdpZXJpZ2VuIFplaXRlbiB6dSBiZXdhaHJlbi4g4oCiIFZlcmhpbGZ0IHp1IGVtb3Rpb25hbGVyL21lbnRhbGVyIEF1c2dlZ2xpY2hlbmhlaXQuIOKAoiBFcmfDpG56dCBCZWhhbmRsdW5nZW4gZ2VnZW4gRGVwcmVzc2lvbi4gWnVzYXR6cHJvZ3JhbW1lOiBOZWJlbm5pZXJlLCBFbmVyZ3kgQm9vc3RlciwgRnJ1c3RyYXRpb24sIERhcm1mbG9yYSwgTWV0YWxsLUVsZW1lbnQsIDEuIOKAkyAyLiDigJMgNC4gdW5kIDUuIENoYWtyYVwiLFxyXG4gICAgICAgIFwibG93LW1lbnRhbC1kcml2ZS11cHBlclwiOiBcIlNDSFdBQ0hFUiBMSUJJRE8gSUlcIixcclxuICAgICAgICBcImxvdy1tZW50YWwtZHJpdmUtZGVzY3JpcHRpb25cIjogXCLigKIgQmVpIHN0cmVzc2JlZGluZ3RlciBuZXJ2bGljaGVyIFN0w7ZydW5nZW4gZGVyIHNleHVlbGxlbiBMZWJlbnNrcmFmdC4g4oCiIEJlaSBzY2h3YWNoZW0gTGliaWRvIGF1ZmdydW5kIHZvbiBhbGx0w6RnbGljaGVuIFByb2JsZW1lbiAoYmVpIG5ldXJvZW5kb2tyaW5lbiBQcm9ibGVtZW4sIEFsbGVyZ2llbiB1bmQgYW5kZXJlIEVya3Jhbmt1bmdlbiB6dXPDpHR6bGljaCBkYXMgUHJvZ3JhbW0gTElCSURPIEkgYW53ZW5kZW4pIEF1Y2ggUGFyYXNpdGVuIGvDtm5uZW4gZGllIFVyc2FjaGUgZWluZXIgc3TDpG5kaWdlbiDDnGJlcnN0aW1tdWxpZXJ1bmcgZGVzIE5lcnZlbnN5c3RlbXMgc2Vpbi4g4oCiIERpZXNlcyBQcm9ncmFtbSBlaWduZXQgc2ljaCBiZWkgRnVua3Rpb25zc3TDtnJ1bmdlbiBhdWZncnVuZCB2b24gRW5lcmdpZS1NYW5nZWwuIFp1c2F0enByb2dyYW1tZTogRXJzY2jDtnBmdW5nLCBFbnRzcGFubnVuZywgRS1TbW9nLCBFbmVyZ2llLUF1c2dsZWljaCwgRnJpZWRlLCBGcmV1ZGUsIEVuZXJnaWUtU3BlbmRlciwgRnJ1c3RyYXRpb24sIEVyZGUtRWxlbWVudCwgTWV0YWxsLUVsZW1lbnQsIFdhc3Nlci1FbGVtZW50LCBIZXJ6LU1lcmlkaWFuLCBQZXJpY2FyZGl1bS1NZXJpZGlhbiwgMS4sIDIgdW5kIDQuIENoYWtyYVwiLFxyXG4gICAgICAgIFwibG93LXBoeXNpY2FsLWRyaXZlLXVwcGVyXCI6IFwiU0NIV0FDSEVSIExJQklETyBJXCIsXHJcbiAgICAgICAgXCJsb3ctcGh5c2ljYWwtZHJpdmUtZGVzY3JpcHRpb25cIjogXCLigKIgU3RpbW11bGllcnQgZGFzIHNleHVlbGxlIEx1c3RnZWbDvGhsIGJlaSBvcmdhbmlzY2hlbiBQcm9ibGVtZW4gb2RlciBmZWhsZW5kZXIgRW5lcmdpZXZlcnNvcmd1bmcuIOKAoiBGw7ZyZGVydCBkaWUgc2V4dWVsbGUgS2FwYXppdMOkdC4g4oCiIEVyZ8OkbnplbmRlIEJlaGFuZGx1bmcgaW4gZGVyIEdlcmVudG9sb2dpZSAoYmVpbSDDpGx0ZXIgd2VyZGVuKS4g4oCiIERpZXNlcyBQcm9ncmFtbSBlaWduZXQgc2ljaCBiZWkgRnVua3Rpb25zc3TDtnJ1bmdlbiwgZGllIGRpZSBGb2xnZSBkZXMgQWx0ZXJuIG9kZXIga8O2cnBlcmxpY2hlciBQcm9ibGVtZSBzaW5kLiBadXNhdHpwcm9ncmFtbWU6IEFudGkgQWdpbmcsIEVudGdpZnR1bmcsIE5lYmVubmllcmUsIEJpbmRlZ2V3ZWJlLCBLcmVpc2xhdWZzeXN0ZW0sIEVyc2Now7ZwZnVuZywgRXJkZS1FbGVtZW50LCBIYXJuYmxhc2UtTWVyaWRpYW4sIFBlcmljYXJkaXVtLU1lcmlkaWFuLCBIZXJ6LU1lcmlkaWFuLCAxLiAgdW5kIDIuICBDaGFrcmFcIixcclxuICAgICAgICBcImx5bXBoYXRpYy1zeXN0ZW0tdXBwZXJcIjogXCJMWU1QSFNZU1RFTVwiLFxyXG4gICAgICAgIFwibHltcGhhdGljLXN5c3RlbS1kZXNjcmlwdGlvblwiOiBcIuKAoiBPcHRpbWllcnQgZGVuIEx5bXBoLUtyZWlzbGF1ZiB1bmQgdmVybWluZGVydCBMeW1waHN0YXV1bmcuIOKAoiBFcmxlaWNodGVydCBkaWUgR2VuZXN1bmcgbmFjaCBpbmZla3Rpw7ZzZW4gRXJrcmFua3VuZ2VuLiDigKIgSGVtbXQgYWxsZXJnaXNjaGUgUmVha3Rpb25lbi4gWnVzYXR6cHJvZ3JhbW1lOiBLcmVpc2xhdWYtU3lzdGVtLCBFbnRnaWZ0dW5nLCBJbW11bi1TeXN0ZW0sIEJpbmRlZ2V3ZWJlLCBGZXVlci1FbGVtZW50LCBXYXNzZXItRWxlbWVudCwgMi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJtYWxlLXVwcGVyXCI6IFwiTUFOTlwiLFxyXG4gICAgICAgIFwibWFsZS1kZXNjcmlwdGlvblwiOiBcIuKAoiBGw7xyIEJlaGFuZGx1bmdlbiBkZXIgbcOkbm5saWNoZW4gSG9ybW9uZSwgYmVpIHNleHVlbGxlbiBTdMO2cnVuZ2VuIHVuZCBkZXMgSGFybnN5c3RlbXMgYmV0cmVmZmVuZCB6dXIgVW50ZXJzdMO8dHp1bmcgZGVyIEdld2ViZS1TdG9mZndlY2hzZWx2b3Jnw6RuZ2UuIOKAoiBFcmfDpG56dCBCZWhhbmRsdW5nZW4gYmVpIElua29udGluZW56IHVuZCBQcm9zdGF0YS1Qcm9ibGVtZW4uIOKAoiBTdGVpZ2VydCBkaWUgTGliaWRvIHVuZCBkYXMgR2Vmw7xobCB2b24gR2Vib3JnZW5oZWl0LiDigKIgQmVpIEVycmVrdGlvbnNzdMO2cnVuZ2VuLiDigKIgRsO8ciBGcmF1ZW4gbWl0IGVpbmVyIHN0YXJrZW4geWFuZy1Lb25zdGl0dXRpb247IGJlaSBzY2htZXJ6aGFmdGVuLCBzY2h3ZXJlbiBvZGVyIMOcYmVyIDcgVGFnZSBhbmRhdWVybmRlIE1lbnN0cnVhdGlvbnNibHV0dW5nZW4gb2RlciB3ZW5uIGVpbiBUZXN0b3N0ZXJvbiBBdXNnbGVpY2ggbsO2dGlnIGlzdC4gWnVzYXR6cHJvZ3JhbW1lOiBFbnRzcGFubnVuZywgS3JlaXNsYXVmc3lzdGVtLCBGcnVzdHJhdGlvbiwgRnJldWRlLCBGcmllZGUsIEZldWVyLUVsZW1lbnQsIEhhcm5ibGFzZS1NZXJpZGlhbiwgTGViZXItTWVyaWRpYW4sIDEuIHVuZCAyLiBDaGFrcmFcIixcclxuICAgICAgICBcIm1lZGl0YXRpb24tMS11cHBlclwiOiBcIk1FRElUQVRJT04gMVwiLFxyXG4gICAgICAgIFwibWVkaXRhdGlvbi0xLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEbDvHIgTWVkaXRhdGlvbnMtQW5mw6RuZ2VyIOKAkyBmw7xyIGRhcyBGcmllZGVuc2dlZsO8aGxcIixcclxuICAgICAgICBcIm1lZGl0YXRpb24tMi11cHBlclwiOiBcIk1FRElUQVRJT04gMlwiLFxyXG4gICAgICAgIFwibWVkaXRhdGlvbi0yLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEbDvHIgdGllZmVyZSBpbm5lcmUgUmVpc2VuIHfDpGhyZW5kIGRlciBNZWRpdGF0aW9uXCIsXHJcbiAgICAgICAgXCJtZWRpdGF0aW9uLTMtdXBwZXJcIjogXCJNRURJVEFUSU9OIDNcIixcclxuICAgICAgICBcIm1lZGl0YXRpb24tMy1kZXNjcmlwdGlvblwiOiBcIuKAoiBGw7xyIGRpZSBmb3J0Z2VzY2hyaXR0ZW5lIE1lZGl0YXRpb25zcHJheGlzXCIsXHJcbiAgICAgICAgXCJnYWxsYmxhZGRlci1tZXJpZGlhbi11cHBlclwiOiBcIkdBTExFTkJMQVNFTiBNRVJJRElBTlwiLFxyXG4gICAgICAgIFwiZ2FsbGJsYWRkZXItbWVyaWRpYW4tc2hvcnRcIjogXCJHQUxMRU5CTEFTRU5cIixcclxuICAgICAgICBcImdhbGxibGFkZGVyLW1lcmlkaWFuLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhhcm1vbmlzaWVydCBkZW4gR2FsbGVuYmxhc2UtTWVyaWRpYW4g4oCiIEVyZ8OkbnplbmRlIEJlaGFuZGx1bmcgYmVpIEtpZWZlcmdlbGVua3NlcmtyYW5rdW5nLCBaYWhua3JhbmtoZWl0ZW4gdW5kIE1hbmRlbG4g4oCiIEhpbGZ0IEVudHNjaGVpZHVuZ2VuIHp1IHRyZWZmZW4gaW4gc2Nod2llcmlnZW4gU2l0dWF0aW9uZW4g4oCiICBVbnRlcnN0w7x0emVuZCBiZWkgw5xiZXJha3Rpdml0w6R0IG9kZXIgWndhbmdzc3TDtnJ1bmdlbiDigKIgIEdlZ2VuIMO8YmVybcOkc3NpZyBuZWdhdGl2ZSBFaW5zdGVsbHVuZyDigKIgIGJlaSBUZW5kZXogRGluZ2UgYXVmenVzY2hpZWJlbiDigKIgU3BpdHplbmFrdGl2aXTDpHQgZGVyIEdhbGxlbmJsYXNlIGlzdCAyMzowMCDigJMgMDE6MDAgVWhyLiDigKIgRGllIEdhbGxlbmJsYXNlIGlzdCBZYW5nIOKAkyBTaWUgaXN0IG1pdCBkZW0gWWluLU9yZ2FuIGRlciBMZWJlciB2ZXJidW5kZW4g4oCTIGVudHNwcmljaHQgZGVtIEhvbHotRWxlbWVudCB1bmQgVW5zY2hsw7xzc2lna2VpdCBvZGVyIEVudHNjaGx1c3NrcmFmLiBadXNhdHpwcm9ncmFtbWU6IEhvbHotRWxlbWVudCwgRnJ1c3RyYXRpb24sIEZyZXVkZSwgTGViZXItTWVyaWRpYW4sIDMuIENoYWtyYSwgRGlja2Rhcm0gTWVyaWRpYW5cIixcclxuICAgICAgICBcImtpZG5leS1tZXJpZGlhbi11cHBlclwiOiBcIk5JRVJFTiBNRVJJRElBTlwiLFxyXG4gICAgICAgIFwia2lkbmV5LW1lcmlkaWFuLXNob3J0XCI6IFwiTklFUkVOXCIsXHJcbiAgICAgICAgXCJraWRuZXktbWVyaWRpYW4tZGVzY3JpcHRpb25cIjogXCLigKIgU3RlaWdlcnQgZGllIEFrdGl2aXTDpHQgZGVzIE5pZXJlbi1NZXJpZGlhbnMuIOKAoiBCZXPDpG5mdGlndCBCbHV0aG9jaGRydWNrIHVuZCDDlmRlbWUuIOKAoiBiZWfDvG5zdGlndCBkaWUgQmV6aWVodW5nIHZvbiBLbm9jaGVuIHVuZCBLbm9jaGVubWFyay4g4oCiIHZlcm1pbmRlcnQgT2hyZW5zYXVzZW4gdW5kIMOkaG5saWNoZSBTeW1wdG9tZS4g4oCiIEJlaSBSYXN0bG9zaWdrZWl0LCDDnGJlcmFrdGl2aXTDpHQgdW5kIGFsbGdlbWVpbmVyIFNjaHfDpGNoZS4g4oCiIFN0ZWlnZXJ0IGRpZSBzZXh1ZWxsZSBFbmVyZ2llLiDigKIgU3BpdHplbmFrdGl2aXTDpHQgZGVyIE5pZXJlIGlzdCB2b24gMTc6MDAg4oCTIDE5OjAwIFVoci4g4oCiIERpZSBOaWVyZSBpc3QgWWluIOKAkyB2ZXJidW5kZW4gbWl0IGRlbSBZYW5nLU9yZ2FuIGRlciBCbGFzZSDigJMgZW50c3ByaWNodCBkZW0gV2Fzc2VyLUVsZW1lbnQgdW5kIGRlciBBbmdzdGdlZsO8aGxlLiBadXNhdHpwcm9ncmFtbWU6IFdhc3Nlci1FbGVtZW50LCBIYXJuYmxhc2UtTWVyaWRpYW4sIERyZWlmYWNoZXItRXJ3w6RybWVyLU1lcmlkaWFuLCBCbHV0aG9jaGRydWNrLCBIw7ZyU3lzdGVtLCBLbm9jaGVuLCAyLiBDaGFrcmFcIixcclxuICAgICAgICBcImhlYXJ0LW1lcmlkaWFuLXVwcGVyXCI6IFwiSEVSWiBNRVJJRElBTlwiLFxyXG4gICAgICAgIFwiaGVhcnQtbWVyaWRpYW4tc2hvcnRcIjogXCJIRVJaXCIsXHJcbiAgICAgICAgXCJoZWFydC1tZXJpZGlhbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGVuIEhlcnotTWVyaWRpYW4uIOKAoiBWZXJoaWxmdCB6dXIgZW1vdGlvbmFsZW4gU3RhYmlsaXTDpHQgYmVpIFRlbmRlbnogenUgbWFuaXNjaC1kZXByZXNzaXYuIOKAoiBWZXJiZXNzZXJ0IGRhcyBHZWTDpGNodG5pcyB1bmQgc3RlaWdlcnQgZGllIEtvbnplbnRyYXRpb24uIOKAoiBWZXJiZXNzZXJ0IGRhcyBTY2hsYWZtdXN0ZXIgdW5kIGVybGVpY2h0ZXJ0IGRhcyBFaW5zY2hsYWZlbi4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGRlcyBIZXJ6IGlzIDExOjAwIOKAkyAxMzowMCBVaHIuIOKAoiBEYXMgSGVyeiBpc3QgWWluIOKAkyBpc3QgbWl0IGRlbSBZYW5nIE9yZ2FuIGRlcyBEw7xubmRhcm1zIHZlcmJ1bmRlbiDigJMgZW50c3ByaWNodCBkZW0gRmV1ZXItRWxlbWVudCwgZGVtIEZyZXVkZWdlZsO8aGwgdW5kIGRlciBBdWZyZWd1bmcuIFp1c2F0enByb2dyYW1tZTogRmV1ZXItRWxlbWVudCwgUGVyaWthcmRpdW0tTWVyaWRpYW4sIETDvG5uZGFybS1NZXJpZGlhbiB1bmQgRGVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgU2NobGFmLCBFbnRzcGFubnVuZywgRnJldWRlLCBGcnVzdHJhdGlvbiwgNC4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJsYXJnZS1pbnRlc3RpbmUtbWVyaWRpYW4tdXBwZXJcIjogXCJESUNLREFSTSBNRVJJRElBTlwiLFxyXG4gICAgICAgIFwibGFyZ2UtaW50ZXN0aW5lLW1lcmlkaWFuLXNob3J0XCI6IFwiRElDS0RBUk1cIixcclxuICAgICAgICBcImxhcmdlLWludGVzdGluZS1tZXJpZGlhbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGVuIERpY2tkYXJtLU1lcmlkaWFuIOKAoiBCZWkgY2hyb25pc2NoZXIgRGlzYmlvc2UgKGdlc3TDtnJ0ZXMgQmFrdGVyaWVudmVyaMOkbHRuaXMgZGVyIERhcm1mbG9yYS4gTWVociBwYXRvbG9naXNjaGUgQmFrdGVyaWVuIGFscyBnZXN1bmRoZWl0c2bDtnJkZXJuZSkg4oCiIFZlcmJlc3NlcnQgZGFzIEltbXVuc3lzdGVtIOKAoiBBbHMgS29tcGxlbWVudMOkci1UaGVyYXBpZSBiZWkgQmx1dGFybXV0LCBFa3plbWVuLCBQYXJhc2l0ZW4gdW5kIFBpbHplIOKAoiBCZWkgTmVpZ3VuZyB6dSBuZWdhdGl2ZW4gR2VkYW5rZW4gdW5kIEdlZsO8aGxlbiB1bmQgZsO8ciBNZW5zY2hlbiwgZGVuZW4gZXMga8O2cnBlcmxpY2ggdW5kIGdlaXN0aWcgc2Nod2VyIGbDpGxsdCwgbG9zenVsYXNzZW4gdW5kIGRhcyBWZXJnYW5nZW5lIGhpbnRlciBzaWNoIHp1IGxhc3NlbiDigKIgU3BpdHplbmFrdGl2aXTDpHQgZGVzIERpY2tkYXJtcyBpc3Qgdm9uIDA1OjAwIOKAkyAwNzowMCBVaHIg4oCiIERlciBEaWNrZGFybSBpc3QgWWFuZyDigJMgdmVyYnVuZGVuIG1pdCBkZXJtIFlpbi1PcmdhbiBkZXIgTHVuZ2Ug4oCTIGVudHNwcmljaHQgZGVtIE1ldGFsbC1FbGVtZW50IHVuZCBkZW0gR2Vmw7xobCBkZXIgVHJhdWVyL0t1bW1lci4gWnVzYXR6cHJvZ3JhbW1lOiBNZXRhbGwtRWxlbWVudCwgTHVuZ2VuLU1lcmlkaWFuLCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgVmVyc3RvcGZ1bmcsIER1cmNoZmFsbCwgMS4gQ2hha3JhLCB1bmQgMy4gQ2hha2FcIixcclxuICAgICAgICBcImxpdmVyLW1lcmlkaWFuLXVwcGVyXCI6IFwiTEVCRVIgTUVSSURJQU5cIixcclxuICAgICAgICBcImxpdmVyLW1lcmlkaWFuLXNob3J0XCI6IFwiTEVCRVJcIixcclxuICAgICAgICBcImxpdmVyLW1lcmlkaWFuLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhhcm1vbmlzaWVydCBkZW4gTGViZXItTWVyaWRpYW4uIOKAoiBWZXJiZXNzZXJ0IEF1Z2VuLXVuZCBOZWJlbmjDtmhsZW4tRXJrcmFua3VuZ2VuLiDigKIgQmVpIFphaG5wcm9ibGVtZW4uIOKAoiBMaW5kZXJ0IE1pZ3LDpG5lIHVuZCBLb3Bmc2NobWVyemVuLiDigKIgUmVkdXppZXJ0IGdlbmVyZWxsZSBLb29yZGluYXRpb25zc2Nod2llcmlna2VpdGVuLiDigKIgRsO8ciB2b3JlaW5nZW5vbW1lbmUsIHVuZ2VkdWxkaWdlIHVuZCBmcnVzdHJpZXJ0ZSBNZW5zY2hlbi4g4oCiIEbDvHIgZmVzdGdlZmFocmVuZSBNZW5zY2hlbiBtaXQgWm9ybi9XdXQvw4RyZ2VyIHVuZCBzdGFya2VyIFBlcnPDtm5saWNoa2VpdC4g4oCiIEbDvHIgTWVuc2NoZW4sIGRpZSBpbSBMZWJlbiBuaWNodCB3ZWl0ZXJrb21tZW4gYXVmZ3J1bmQgZmVobGVuZGVyIFppZWxzZXR6dW5nLiDigKIgRsO8ciBNZW5zY2hlbiwgZGllIGjDpHVmaWcgendpc2NoZW4gMSB1bmQgMyBVaHIgbW9yZ2VucyBhdWZ3YWNoZW4gdW5kIGRhbm4gd2llZGVyIGVpbnNjaGxhZmVuLiDigKIgU3BpdHplbmFrdGl2aXTDpHQgZGVyIExlYmVyIGlzdCB2b24gMDE6MDAg4oCTIDAzOjAwIFVoci4g4oCiIERpZSBMZWJlciBpc3QgWWluIOKAkyB2ZXJidW5kZW4gbWl0IGRlbSBZYW5nLU9yZ2FuIGRlciBHYWxsZW5ibGFzZSDigJMgZW50c3ByaWNodCBkZW0gSG9sei1FbGVtZW50IHVuZCBkZW4gR2Vmw7xobGVuIHZvbiBab3JuL1d1dCB1bmQgUmVpemJhcmtlaXQuIFp1c2F0enByb2dyYW1tZTogSG9sei1FbGVtZW50LCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgT3B0aW1pc211cywgRnJldWRlLCBTZWhrcmFmdCwgTmViZW5ow7ZobGVuLCBFbnRzcGFubnVuZywgS29wZnNjaG1lcnplbiwgRW5lcmd5LUF1c2dsZWljaCwgRW50Z2lmdHVuZywgMy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJsdW5nLW1lcmlkaWFuLXVwcGVyXCI6IFwiTFVOR0VOIE1FUklESUFOXCIsXHJcbiAgICAgICAgXCJsdW5nLW1lcmlkaWFuLXNob3J0XCI6IFwiTFVOR0VOXCIsXHJcbiAgICAgICAgXCJsdW5nLW1lcmlkaWFuLWRlc2NyaXB0aW9uXCI6IFwi4oCiIFN5bmNocm9uaXNpZXJ0IGRpZSBMdW5nZW4tTWVyaWRpYW4tQWt0aXZpdMOkdC4gRsO8ciBNZW5zY2hlbiBkaWUgenUgQmVzb3JnbmlzIHVuZCBLdW1tZXIgbmVpZ2VuIHVuZCBkYXMgR2Vmw7xobCBkZXIgVW50ZXJkcsO8Y2t1bmcgaGFiZW4gb2RlciBuaWNodCBnZW51ZyBlaW5hdG1lbi4g4oCiIEJldWd0IGjDpHVmaWdlbiBFcmvDpGx0dW5nZW4sIEdyaXBwZSwgTWFuZGVsZW50esO8bmR1bmcgdW5kIEhhbHNzY2htZXJ6ZW4gdm9yLiDigKIgTWluZGVydCBBbGxlcmdpZS1TeW1wdG9tZS4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGRlciBMdW5nZSBpc3Qgdm9uIDAzOjAwIOKAkyAwNTowMCBVaHLigKIg4oCiIERpZSBMdW5nZSBpc3QgWWluIOKAkyB2ZXJidW5kZW4gbWl0IGRlbSBZYW4tT3JnYW4gZGVzIERpY2tkYXJtcyDigJMgZW50c3ByaWNodCBkZW0gTWV0YWxsLUVsZW1lbnQgdW5kIGRlbSBHZWbDvGhsIHZvbiBLdW1tZXIvQW5nc3QuIFp1c2F0enByb2dyYW1tZTogTWV0YWxsLUVsZW1lbnQsIERpY2tkYXJtLU1lcmlkaWFuLCBBdG11bmdzc3lzdGVtLCBJbW11bnN5c3RlbSwgNC4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJwZXJpY2FyZGl1bS1tZXJpZGlhbi11cHBlclwiOiBcIlBFUklLQVJESVVNIE1FUklESUFOXCIsXHJcbiAgICAgICAgXCJwZXJpY2FyZGl1bS1tZXJpZGlhbi1zaG9ydFwiOiBcIlBFUklLQVJESVVNXCIsXHJcbiAgICAgICAgXCJwZXJpY2FyZGl1bS1tZXJpZGlhbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGVuIFBlcmlrYXJkaXVtLU1lcmlkaWFuIHZvbiDDvGJlcnNlbnNpYmxlbiBNZW5zY2hlbi4g4oCiIEbDvHIgTWVuc2NoZW4gZGllIFNjaHdpZXJpZ2tlaXRlbiBoYWJlbiBzaWNoIGFuenVmcmV1bmRlbiAoQW5zY2hsdXNzIGZpbmRlbikuIOKAoiBIaWxmdCBzZWVsbGlzY2hlIEVyc2Now7x0dGVydW5nZW4vVHJhdW1hcyB6dSBiZXfDpGx0aWdlbiwgZGllIHZlcmhpbmRlcm4gZ3V0ZSBCZXppZWh1bmdlbiBhdWZyZWNodCB6dSBlcmhhbHRlbi4g4oCiIExpbmRlcnQgS3JlaXNsYXVmLSB1bmQgU2V4dWFsc3TDtnJ1bmdlbi4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGlzdCB2b24gMTk6MDAg4oCTIDIxOjAwIFVoci4g4oCiIERlciBQZXJpa2FyZGl1bSBpc3QgWWluIOKAkyB2ZXJidW5kZW4gbWl0IGRlbSBZYW5nLU9yZ2FuIGRlcyBEcmVpZmFjaGVuLUVyd8Okcm1lcnMg4oCTIGVudHNwcmljaHQgZGVtIEZldWVyLUVsZW1lbnQuIFp1c2F0enByb2dyYW1tZTogRMO8bm5kYXJtLU1lcmlkaWFuLCBGZXVlci1FbGVtZW50LCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgSGVyei1NZXJpZGlhbiwgMy4gdW5kIDQuIENoYWtyYVwiLFxyXG4gICAgICAgIFwic21hbGwtaW50ZXN0aW5lLW1lcmlkaWFuLXVwcGVyXCI6IFwiRMOcTk5EQVJNIE1FUklESUFOXCIsXHJcbiAgICAgICAgXCJzbWFsbC1pbnRlc3RpbmUtbWVyaWRpYW4tc2hvcnRcIjogXCJEw5xOTkRBUk1cIixcclxuICAgICAgICBcInNtYWxsLWludGVzdGluZS1tZXJpZGlhbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGllIETDvG5uZGFybS1GdW5rdGlvbi4g4oCiIHVudGVyc3TDvHR6dCBkaWUgVmVyZGF1dW5nLiDigKIgdmVyYmVzc2VydCBkaWUgTsOkaHJzdG9mZmF1Zm5haG1lLiDigKIgTGluZGVydCBkYXMgR2Vmw7xobCB2b24gVW5zaWNoZXJoZWl0IHVuZCAgVmVyd2lycnVuZy4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGlzdCB2b24gMTM6MDAg4oCTIDE1OjAwIFVoci4g4oCiIERlciBEw7xubmRhcm0gaXN0IFlhbmcg4oCTIHZlcmJ1bmRlbiBtaXQgZGVtIFlpbiBPcmdhbiBkZW0gSGVyenQg4oCTIGVudHNwcmljaHQgZGVtIEZldWVyLUVsZW1lbnQgdW5kIGRlbSBHZWbDvGhsIGRlciBGcmV1ZGUgdW5kIGRlciBFcnJlZ3VuZy4gWnVzYXR6cHJvZ3JhbW1lOiBFbnRnaWZ0dW5nLCBEdXJjaGZhbGwsIEhhcm5zeXN0ZW0sIEZldWVyLUVsZW1lbnQsIEhlcnotTWVyaWRpYW4gdW5kIERyZWlmYWNoZXItRXJ3w6RybWVyLU1lcmlkaWFuLCAzLiB1bmQgNC4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJzcGxlZW4tcGFuY3JlYXMtbWVyaWRpYW4tdXBwZXJcIjogXCJCQVVDSFNQRUlDSEVMRFLDnFNFIE1FUi5cIixcclxuICAgICAgICBcInNwbGVlbi1wYW5jcmVhcy1tZXJpZGlhbi1zaG9ydFwiOiBcIkJBVUNIU1BFSUNIRUxEUsOcU0VcIixcclxuICAgICAgICBcInNwbGVlbi1wYW5jcmVhcy1tZXJpZGlhbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgTWlsei0vQmF1Y2hzcGVpY2hlbGRyw7xzZS1Ba3Rpdml0w6R0LiDigKIgVW50ZXJzdMO8dHp0IGRpZSBBdWZzcGFsdHVuZyB2b24gZmVzdGVuIHVuZCBmbMO8c3NpZ2VuIE5haHJ1bmdzYmVzdGFuZHRlaWxlbi4g4oCiIFJlZHV6aWVydCB6d2FuZ2hhZnRlIEVpbnN0ZWxsdW5nLiDigKIgVW50ZXJzdMO8dHplbmQgYmVpIEVudHNjaGVpZHVuZ3Nmw6RsbHVuZ2VuIHVuZCBEdXJjaHNldHp1bmdzdmVybcO2Z2VuLiDigKIgRsO2cmRlcnQgZGllIEtvbnplbnRyYXRpb24gdW5kIGRhcyBHZWTDpGNodG5pcy4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGRlciBNaWx6L0JhdWNoc3BlaWNoZWxkcsO8c2UgaXN0IHZvbiAgOTowMCBiaXMgMTE6MDAgVWhyLiDigKIgRGllIE1pbHovQmF1Y2hzcGVpY2hlbGRyw7xzZSBpc3QgZWluIFlpbiBPcmdhbiDigJMgdmVyYnVuZGVuIG1pdCBkZW0gWWFuZyBPcmdhbiBkZW0gTWFnZW4g4oCTIGVudHNwcmljaHQgZGVtIEVyZGUtRWxlbWVudC4gWnVzYXR6cHJvZ3JhbW1lOiBFcmRlLUVsZW1lbnQsIE1hZ2VuLU1lcmlkaWFuLCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgVmVyZGF1dW5nc1N5c3RlbSwgTXVza2VsbiwgS3JlaXNsYXVmU3lzdGVtLCBEdXJjaGZhbGwsICAyLiAgdW5kIDMuICBDaGFrcmFcIixcclxuICAgICAgICBcInN0b21hY2gtbWVyaWRpYW4tdXBwZXJcIjogXCJNQUdFTiBNRVJJRElBTlwiLFxyXG4gICAgICAgIFwic3RvbWFjaC1tZXJpZGlhbi1zaG9ydFwiOiBcIk1BR0VOXCIsXHJcbiAgICAgICAgXCJzdG9tYWNoLW1lcmlkaWFuLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhhcm1vbmlzaWVydCBkZW4gTWFnZW4tTWVyaWRpYW4uIOKAoiBHZWdlbiBBdWZzdG9zc2VuLCDDnGJlbGtlaXQgb2RlciBFcmJyZWNoZW4uIOKAoiBMaW5kZXJ0IFNjaGzDpGZlbi1Lb3Bmc2NoZXJ6ZW4uIOKAoiBCZWkgS2llZmVyaMO2aGxlbmVudHrDvG5kdW5nIG9kZXIgVHJpZ2VtaW51c25ldXJhbGdpZS4g4oCiIEJlaSBjaHJvbmlzY2hlbSBTdHJlc3MuIOKAoiBTcGl0emVuYWt0aXZpdMOkdCBkZXMgTWFnZW5zIGlzdCB2b24gNzowMCBiaXMgOTowMCBVaHIuIOKAoiBEZXIgTWFnZW4gaXN0IGVpbiBZYW4tT3JnYW4g4oCTIHZlcmJ1bmRlbiBtaXQgZGVtIFlpbi1PcmdhbiBkZXIgTWlseiAg4oCTIGVudHNwcmljaHQgZGVtIEVyZGUtRWxlbWVudCB1bmQgZGVtIEdlZsO8aGwgdm9uIEFuZ3N0IHVuZCBTdHJlc3MuIFp1c2F0enByb2dyYW1tZTogRXJkZS1FbGVtZW50LCBWZXJkYXV1bmdzU3lzdGVtLCBNaWx6LS9CYXVjaHNwZWljaGVsZHLDvHNlLU1lcmlkaWFuLCBLb3Bmc2NobWVyemVuLCAzLiBDaGFrcmFcIixcclxuICAgICAgICBcInRyaXBsZS13YXJtZXItbWVyaWRpYW4tdXBwZXJcIjogXCJEUkVJRkFDSEVSIEVSV8OEUk1FUiBNRVIuXCIsXHJcbiAgICAgICAgXCJ0cmlwbGUtd2FybWVyLW1lcmlkaWFuLXNob3J0XCI6IFwiRFJFSUZBQ0hFUiBFUlfDhFJNRVJcIixcclxuICAgICAgICBcInRyaXBsZS13YXJtZXItbWVyaWRpYW4tZGVzY3JpcHRpb25cIjogXCLigKIgSGFybW9uaXNpZXJ0IGRlbiBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiBiZWkgTWVuc2NoZW4gbWl0IEhpdHplLSBvZGVyIEvDpGx0ZWdlZsO8aGwgaW0gQmF1Y2guIOKAoiBMaW5kZXJ0IFByb2JsZW1lIGltIFp1c2FtbWVuaGFuZyBtaXQgZGVyIE7DpGhyc3RvZmZhdWZuYWhtZSB1bmQgZXJsYXVidCBlaW5lIGVmZml6aWVudGUgQXVmbmFobWUgZGVyIE7DpGhyc3RvZmZlIHVuZCBBdXNsZWl0dW5nIGRlciBTdG9mZndlY2hzZWwtRW5kcHJvZHVrdGUuIOKAoiBWZXJiZXNzZXJ0IGRlbiBTdG9mZndlY2hzZWwuIOKAoiBTcGl0emVuYWt0aXZpdMOkdCBkZXMgRHJlaWZhY2hlbi1FcnfDpHJtZXItTWVyaWRpYW5zIGlzdCB2b24gMjE6MDAgYmlzIDIzOjAwIFVoci4gWnVzYXR6cHJvZ3JhbW1lOiBIb2x6LUVsZW1lbnQsIEVyZGUtRWxlbWVudCwgTHVuZ2VuLU1lcmlkaWFuLCBIZXJ6LU1lcmlkaWFuLCBNYWdlbi1NZXJpZGlhbiwgTWlsei1NZXJpZGlhbiwgRMO8bm4tIHVuZCBEaWNrZGFybS1NZXJpZGlhbmUsIE5pZXJlbi1NZXJpZGlhbiwgQmxhc2VuLU1lcmlkaWFuLCBBdG11bmdzc3lzdGVtLCBWZXJkYXV1bmdzc3lzdGVtLCA0LiDigJMgNi4gdW5kIDcuIENoYWtyYVwiLFxyXG4gICAgICAgIFwidXJpbmFyeS1ibGFkZGVyLW1lcmlkaWFuLXVwcGVyXCI6IFwiSEFSTkJMQVNFIE1FUklESUFOIFwiLFxyXG4gICAgICAgIFwidXJpbmFyeS1ibGFkZGVyLW1lcmlkaWFuLXNob3J0XCI6IFwiSEFSTkJMQVNFXCIsXHJcbiAgICAgICAgXCJ1cmluYXJ5LWJsYWRkZXItbWVyaWRpYW4tZGVzY3JpcHRpb25cIjogXCLigKIgSGFybW9uaXNpZXJ0IGRlbiBIYXJuYmxhc2UtTWVyaWRpYW4gKGJlaSB0cm9ja2VuZW4gQXVnZW4sIEdlbGVua2UsIEhhbHMsIERpY2tkYXJtIG9kZXIgU2NoZWlkZSkuIOKAoiBGw7xyIHN0cmFmZmUgdW5kIGVsYXN0aXNjaGUgSGF1dC4g4oCiIFVudGVyc3TDvHR6dCBNZW5zY2hlbiwgZGllIHJhc2NoIGluIFBhbmlrIGdlcmF0ZW4uIOKAoiBGw7ZyZGVydCBkaWUgRsOkaGlna2VpdCwgc2Nod2llcmlnZSBMZWJlbnNzaXR1YXRpb25lbiB6dSBtZWlzdGVybi4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGRlciBIYXJuYmxhc2UgaXN0IHZvbiAxNTowMCBiaXMgMTc6MDAgVWhyLiDigKIgRGllIEhhcm5ibGFzZSBpc3QgWWFuZyDigJMgdmVyYnVuZGVuIG1pdCBkZW0gWWluLU9yZ2FuIGRlciBOaWVyZW4tIGVudHNwcmljaHQgZGVtIFdhc3Nlci1FbGVtZW50IHVuZCBkZW0gQW5nc3QtR2Vmw7xobC4g4oCiIFp1c2F0enByb2dyYW1tZTogV2lyYmVsc8OkdWxlLCBFcnNjaMO2cGZ1bmcsIEF1Z2VuLCBHZWxlbmtlLCAgV2Fzc2VyLUVsZW1lbnQsIE5pZXJlbi1NZXJpZGlhbiwgRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIERpY2tkYXJtLSBNZXJpZGlhbiwgMi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJtZXRhbC1lbGVtZW50LXVwcGVyXCI6IFwiTUVUQUxMIEVMRU1FTlRcIixcclxuICAgICAgICBcIm1ldGFsLWVsZW1lbnQtc2hvcnRcIjogXCJNRVRBTExcIixcclxuICAgICAgICBcIm1ldGFsLWVsZW1lbnQtZGVzY3JpcHRpb25cIjogXCLigKIgQXJtb25pc2llcnQgZW1vdGlvbmFsZSBWZXJoYWx0ZW5zd2Vpc2VuIGRlcyBNZXRhbC1FbGVtZW50ZXM6IFRyYXVyaWdrZWl0IHVuZCBEZXByZXNzaW9uLiDigKIgQWxzIFp1c2F0emJlaGFuZGx1bmcgYmVpIFByb2JsZW1lbiBtaXQgYWJub3JtYWxlbiBPcmdhbmZ1bmt0aW9uZW46IEx1bmdlLCBEaWNrZGFybSB1bmQgSGF1dCwgd2VsY2hlIGRlbSBNZXRhbC1FbGVtZW50IHp1Z2VvcmRuZXQgd2VyZGVuLiBadXNhdHpwcm9ncmFtbWU6ICBNZXJpZGlhbmUgdW5kIENoYWtyYXNcIixcclxuICAgICAgICBcIm1pbmVyYWwtbWV0YWJvbGljLWFjdGl2aXR5LXVwcGVyXCI6IFwiTUlORVJBTCBTVE9GRldFQ0hTRUxcIixcclxuICAgICAgICBcIm1pbmVyYWwtbWV0YWJvbGljLWFjdGl2aXR5LWRlc2NyaXB0aW9uXCI6IFwi4oCiIFVudGVyc3TDvHR6dCBkaWUgTWluZXJhbC1TdG9mZndlY2hzZWx0w6R0aWdrZWl0IHVuZCBvcHRpbWllcnQgZGVzc2VuIEF1Zm5haG1lIHVuZCBWZXJ3ZW5kdW5nLiDigKIgWnVzYXR6YmVoYW5kbHVuZyBiZWkgU3RvZmZ3ZWNoc2VsLVN0w7ZydW5nZW4uIFp1c2F0enByb2dyYW1tZTogIFZlcmRhdXVuZywgRGFybWZsb3JhLCBFbnRnaWZ0dW5nLCBGcnVzdHJhdGlvbiwgRnJpZWRlLCBFLXNtb2csIEZldWVyLUVsZW1lbnQsIERpY2stIHVuZCBEw7xubmRhcm0tTWVyaWRpYW4sIE1hZ2VuLU1lcmlkaWFuLCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgMS4gIHVuZCAyLiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJtdXNjbGUtdGlzc3VlLXVwcGVyXCI6IFwiTVVTS0VMR0VXRUJFXCIsXHJcbiAgICAgICAgXCJtdXNjbGUtdGlzc3VlLWRlc2NyaXB0aW9uXCI6IFwi4oCiIFRoZXJhcGllcnQgZGFzIE11c2tlbGdld2ViZSB1bmQgcmVndCBkaWUgTXVza2VsZ2VuZXN1bmcgYW4uIOKAoiBVbnRlcnPDvHR6dCBkaWUgUmVnZW5lcmllcnVuZyBkZXMgTXVza2VsZ2V3ZWJlcyBuYWNoIGtsZWluZXJlbiBWZXJsZXR6dW5nZW4uIOKAoiBVbnRlcnN0w7x0enQgZGllIEJlaGFuZGx1bmcgYmVpIG1vdG9yaXNjaGVuIEJlZmluZGxpY2hrZWl0c3N0w7ZydW5nZW4gKHouQi4gbmFjaCBVbmZhbGwgb2RlciBuYWNoIEdlaGlybnNjaGxhZyBtaXQgTMOkaG11bmdzZXJzY2hlaW51bmcpLiDigKIgU3RlaWdlcnQgZGllIG11c2t1bMOkcmUgTGVpc3R1bmdzZsOkaGlna2VpdCB1bmQgdmVybWluZGVydCBkYXMgVmVybGV0enVuZ3NyaXNpa28uIOKAoiBVbnRlcnN0w7x0emVuZCBmw7xyIGdlc3VuZGUgR2VsZW5rZSBkdXJjaCBIYXJtb25pc2llcnVuZyBkZXIgTXVza2VsLUZlaGxzdGVsbHVuZy4g4oCiIEJlaSBOZWlndW5nIHp1IE11c2tlbHNjaHd1bmQuIFp1c2F0enByb2dyYW1tZTogS3JlaXNsYXVmLVN5c3RlbSwgTmVydmVuc3lzdGVtLCBCaW5kZWdld2ViZSwgTHltcGhzeXN0ZW0sIFJlZ2VuZXJhdGlvbiwgVmVyZGF1dW5nc3N5c3RlbSwgTWlsei1NZXJpZGlhbiwgRMO8bm5kYXJtLU1lcmlkaWFuLCAxLiAgdW5kICA3LiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJuZWNrLXNob3VsZGVyLXVwcGVyXCI6IFwiTkFDS0VOLVNDSFVMVEVSXCIsXHJcbiAgICAgICAgXCJuZWNrLXNob3VsZGVyLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEzDtnN0IFZlcnNwYW5udW5nZW4gaW0gTmFja2VuL1NjaHVsdGVyYmVyZWljaC4g4oCiIEVyaMO2aHQgZGllIExlaXN0dW5nc2bDpGhpZ2tlaXQgZGVyIEJsdXRnZWbDpHNzZSBpbSBOYWNrZW4tIHVuZCBLb3BmYmVyZWljaC4gWnVzYXR6cHJvZ3JhbW1lOiBLcmVpc2xhdWZzeXN0ZW0sIFdpcmJlbHPDpHVsZSwgQmluZGVnZXdlYmUsIE11c2tlbG4sIE5lcnZlbnN5c3RlbSwgRS1TbW9nLCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgSGFybmJsYXNlLU1lcmlkaWFuLCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgMS4gdW5kIDUuICBDaGFrcmFcIixcclxuICAgICAgICBcIm5lcnZvdXMtc3lzdGVtLXVwcGVyXCI6IFwiTkVSVkVOU1lTVEVNXCIsXHJcbiAgICAgICAgXCJuZXJ2b3VzLXN5c3RlbS1kZXNjcmlwdGlvblwiOiBcIuKAoiBGw7ZyZGVydCBkaWUgRW50c3Bhbm51bmcgdW5kIFJlZ2VuZXJpZXJ1bmcgZGVzIFplbnRyYWwtTmVydmVuc3lzdGVtcy4g4oCiIFVudGVyc3TDvHR6dCBkaWUgQmVoYW5kbHVuZyB2b24gZW50YXJ0ZXRlbSBNdXNrZWwtTGVpZGVuICh6LkIuIGJlaSBNdXNrZWxzY2h3dW5kKS4g4oCiIEVyZ8Okbnp0IGRpZSBOZXJ2ZW56ZWxsZW4tQmVoYW5kbHVuZyBiZWkgZGVyIFJlZ2VuZXJpZXJ1bmcuIOKAoiBFcmfDpG56dCBNdXNrZWxrb29yZGluYXRpb25zLUJlaGFuZGx1bmdlbiBoZXJ2b3JnZXJ1ZmVuIGR1cmNoIEFiZ2VzcGFubnRoZWl0ICh6LkIuIHNjaHdhY2hlcyBOaWVyZW4tQ2hpLCBlcnNjaMO2cGZ0ZSBOZWJlbm5pZXJlbixldGMuKS4g4oCiIEVyZ8Okbnp0IGRpZSBCZWhhbmRsdW5nIGJlaSBow6R1ZmlnZW4gc3BvbnRhbmVuIE11c2tlbGJld2VndW5nZW4uIOKAoiBQYXJhc2l0ZW4ga8O2bm5lbiBmw7xyIGVpbmUgYW5kYXVlcm5kZSDDnGJlcnN0aW1tdWxpZXJ1bmcgZGVzIE5lcnZlbnN5c3RlbXMgdmVyYW50d29ydGxpY2ggc2Vpbi4gWnVzYXR6cHJvZ3JhbW1lOiBMZWJlci1NZXJpZGlhbiwgQW50aS1BZ2luZywgRW50Z2lmdHVuZywgTWluZXJhbGllbi1TdG9mZndlY2hzZWwtU3TDtnJ1bmcsIFdpcmJlbHPDpHVsZSwgRGlja2Rhcm0sIFZlcmxldHp1bmcsIDYuIHVuZCA3LiBDaGFrcmFcIixcclxuICAgICAgICBcInBhaW4tdXBwZXJcIjogXCJTQ0hNRVJaRU5cIixcclxuICAgICAgICBcInBhaW4tZGVzY3JpcHRpb25cIjogXCLigKIgQmVpIGFrdXRlbiB1bmQgY2hyb25pc2NoZW4gU2NobWVyemVuLiDigKIgQmVpIEtvcGYtIHVuZCBHZWxlbmtzY2htZXJ6ZW4uIOKAoiBBbndlbmR1bmcgbmFjaCBUcmF1bWFzIG9kZXIgT3BlcmF0aW9uZW4uIOKAoiBNaW5kZXJ0IFNjaG1lcnplbiBhdWZncnVuZCB2b24gS3JhbXBmYWRlcm4uIOKAoiBCZWkgY2hyb25pc2NoZW4gU2NobWVyemVuIGlzdCBkZXIgVGhlcmFwaWVlcmZvbGcgbmFjaCBlaW5pZ2VuIFRhZ2VuIGRlciBBbndlbmR1bmcgc3DDvHJiYXIuIFp1c2F0enByb2dyYW1tZTogVmVybGV0enVuZywgRW50c3Bhbm51bmcsIEZyZXVkZSwgRnJ1c3RyYXRpb24sIE5lcnZlbnN5c3RlbSwgRnJpZWRlLCBNdXNrZWxuLCBCaW5kZWdld2ViZSwgS25vY2hlbiwgR2VsZW5rZSwgVmVyZGF1dW5nc3N5c3RlbSwgRW5lcmdpZS1BdXNnbGVpY2gsIENoYWtyYXMsIEVsZW1lbnRlIHVuZCBNZXJpZGlhbmVcIixcclxuICAgICAgICBcInBlYWNlLXVwcGVyXCI6IFwiRlJJRURFXCIsXHJcbiAgICAgICAgXCJwZWFjZS1kZXNjcmlwdGlvblwiOiBcIuKAoiBCZXPDpG5mdGlndCBzY2h3ZXJlIGVtb3Rpb25hbGUgTW9tZW50ZSAoVW5mYWxsLCBTY2hlaWR1bmcsIFByb2JsZW1lIGJlaSBkZXIgQXJiZWl0KS4g4oCiIFN0YWJpbGlzaWVydCBkaWUgaW5uZXJlIEhhcm1vbmllLiDigKIgRW50c3Bhbm5lbmQgbmFjaCBsYW5nZXIgQXJiZWl0cy0gb2RlciBMZXJuc3R1bmRlbi4gWnVzYXR6cHJvZ3JhbW1lOiBFLVNtb2csIEVuZXJnaWUtQXVzZ2xlaWNoLCBGcnVzdHJhdGlvbiwgRnJpZWRlLCBFbnRzcGFubnVuZywgTWV0YWxsLUVsZW1lbnQsIFdhc3Nlci1FbGVtZW50LCBIZXJ6LU1lcmlkaWFuLCBQZXJpa2FyZGlvLU1lcmlkaWFuLCBMZWJlci1NZXJpZGlhbiwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIENoYWtyYXNcIixcclxuICAgICAgICBcInJlZ2VuZXJhdGlvbi11cHBlclwiOiBcIlJFR0VORVJJRVJVTkdcIixcclxuICAgICAgICBcInJlZ2VuZXJhdGlvbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBCZXNjaGxldW5pZ3QgZGVuIFJlZ2VuZXJhdGlvbnNwcm96ZXNzIGJlaSBrw7ZycGVybGljaGVyIEVybcO8ZHVuZy4g4oCiIExpbmRlcnQgTXVza2Vsc2NobWVyemVuIG5hY2ggZGVtIFRyYWluaW5nLiDigKIgTWluZGVydCBkYXMgRXJzY2jDtnBmdW5nc2dlZsO8aGwgaW4gZGVuIEJlaW5lbiB1bmQgaW0gTGVuZGVuYmVyZWljaCBuYWNoIGxhbmdlbSBTdGVoZW4gdW5kL29kZXIgTGF1ZmVuLiBadXIgQXVmZnJpc2NodW5nIGRlciBCZWluZSB1bmQgSMO8ZnRlLiDigKIgRsO2cmRlcnQgZGllIG1lbnRhbGUgTGVpc3R1bmdzZsOkaGlna2VpdCBkdXJjaCBkaWUga8O2cnBlcmxpY2hlIEF1ZmZyaXNjaHVuZy4g4oCiIExpbmRlcnQgTXVza2Vsa2F0ZXIgbmFjaCBrw7ZycGVybGljaGVyIEFuc3RyZW5ndW5nLCAxIOKAkyAyIEFud2VuZHVuZyBnbGVpY2ggbmFjaCBkZW0gVHJhaW5pbmcuIOKAoiBOYWNoIGRlbSBXZXR0a2FtcGYgb3IgZXh0cmVtZW0gVHJhaW5pbmcuIFp1c2F0enByb2dyYW1tZTogTHltcGhzeXN0ZW0sIEtyZWlzbGF1ZnN5c3RlbSwgRW5lcmdpZS1TcGVuZGVyLCBMZWJlbnNmcmV1ZGUsIE11c2tlbG4sIFZlcmRhdXVuZ3NzeXN0ZW0sIE5lYmVubmllcmVuLCBOZXJ2ZW5zeXN0ZW0sIEJpbmRlZ2V3ZWJlLCBFcmRlLUVsZW1lbnQsIDEuLCAyLiB1bmQgNy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJyZWxheGF0aW9uLXVwcGVyXCI6IFwiRU5UU1BBTk5VTkdcIixcclxuICAgICAgICBcInJlbGF4YXRpb24tZGVzY3JpcHRpb25cIjogXCLigKIgQmVpIFN0cmVzcyB1bmQgVmVyc3Bhbm51bmdlbi4g4oCiIEhpbGZ0IHVudmVyYXJiZWl0ZXRlIEVtb3Rpb25lbiB1bmQgU3RyZXNzIHp1IGthbmFsaXNpZXJlbi4gWnVzYXR6cHJvZ3JhbW1lOiAgRW5lcmdpZS1BdXNnbGVpY2gsIEZydXN0cmF0aW9uLCBGcmV1ZGUsIE5lYmVubmllcmVuLCBGcmllZGUsIFNjaGlsZGRyw7xzZSwgRS1TbW9nLCBIZXJ6LU1lcmlkaWFuLCAxLiDigJMgNC4gdW5kIDcuIENoYWtyYVwiLFxyXG4gICAgICAgIFwicmVzcGlyYXRvcnktc3lzdGVtLXVwcGVyXCI6IFwiQVRNVU5HU1NZU1RFTVwiLFxyXG4gICAgICAgIFwicmVzcGlyYXRvcnktc3lzdGVtLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEFscyBrb21wbGVtZW50w6RyZSBTZWxic3R2ZXJzb3JndW5nIGJlaSBBdGVtd2Vncy1FcmtyYW5rdW5nZW4uIOKAoiBTdGltdWxpZXJ0IEhlaWx1bmdzcHJvemVzcyBkZXIgQXRlbXdlZ2UgYmVpIEh1c3RlbiwgR3JpcHBlLCBCcm9uY2hpdGlzLCBNYW5kZWxlbnR6w7xuZHVuZywgTHVuZ2VuZW50esO8bmR1bmcgKGFscyBFcmfDpG56dW5nKS4g4oCiIEJlaSBSZWl6aHVzdGVuIChhdWNoIFJhdWNoZXJodXN0ZW4pIERhcyBQcm9ncmFtbSBtaW5kLiA2IFdvY2hlbiBhbndlbmRlbi4g4oCiIE9wdGltaWVydCBkaWUgQXRtdW5nc2Z1bmt0aW9uZW4gYmVpIEVya8OkbHVuZy4gQmVnaW5uZSBtaXQgZGVtIFByb2dyYW1tIGJlaSBkZW4gZXJzdGVuIEFuemVpY2hlbiB1bmQgd2VuZGUgZXMgYmlzIGVpbmlnZSBUYWdlLCBuYWNoZGVtIGRpZSBTeW1wdG9tZSB2ZXJzY2h3dW5kZW4gc2luZCwgYW4gQmVmcmVpdCBkaWUgQXRlbXdlZ2UuIOKAoiBGw7ZyZGVydCBkaWUgV2lya3VuZyB2b24gQXRlbcO8YnVuZ2VuLiBFaW5lIHdpcmt1bmdzdm9sbGUgRXJnw6RuenVuZyB6dSBZb2dhIFBvc2l0aW9uZW4gKGFzYW5hcykg4oCTIGhhcm1vbmlzaWVydCBkaWUgQXRtdW5nIHVuZCBiZWhhbHQgaWhuIGluIGVpbmVtIG5hdMO8cmxpY2hlbiBSeXRobXVzLiBadXNhdHpwcm9ncmFtbWU6IEltbXVuc3lzdGVtLCBMeW1waHN5c3RlbSwgRnJ1c3RyYXRpb24sIEdyaXBwZSwgTmViZW5ow7ZobGVuLCBEYXJtZmxvcmEsIFZlcmRhdXVuZ3NzeXN0ZW0sIEUtU21vZywgRW5lcmdpZS1BdXNnbGVpY2gsIEZyZXVkZVwiLFxyXG4gICAgICAgIFwic2ludXMtY2F2aXRpZXMtdXBwZXJcIjogXCJTVElSTkjDlkhMRU5cIixcclxuICAgICAgICBcInNpbnVzLWNhdml0aWVzLWRlc2NyaXB0aW9uXCI6IFwi4oCiIExpbmRlcnQgYWt1dGUgdW5kIGNocm9uaXNjaGUgU3Rpcm5ow7ZobGVuZW50esO8bmR1bmcgdW5kIFNjaG1lcnplbiBpbSBHZXNpY2h0LiDigKIgVW50ZXJzdMO8dHp0IGRhcyBJbW11bnN5c3RlbS4g4oCiIFVudGVyc3TDvHR6dCBkaWUgU3RvZmZ3ZWNoc2Vsdm9yZ8OkbmdlIGRlciBTdGlybmjDtmhsZW4sIHVuZCBpc3QgaGlsZnJlaWNoIGJlaSBBbGxlcmdpZXN5bXB0b21lbiBBbHMgVm9yYmV1Z3VuZyBmw7xyIFN0aXJuaMO2aGxlbmVudHrDvG5kdW5nIGluIGRlciBJbmt1YmluYXRpb25zemVpdCBkZXIgR3JpcHBlLiDigKIgRGllc2VzIFByb2dyYW1tIHNvbGwsIMO8YmVyIG1laHJlcmUgVGFnZSBuYWNoZGVtIGRpZSBTeW1wdG9tZSB2ZXJzY2h3dW5kZW4gc2luZCwgYW5nZXdlbmRldCB3ZXJkZW4uIFp1c2F0enByb2dyYW1tZTogIEltbXVuc3lzdGVtLCBMeW1waHN5c3RlbSwgQXRtdW5nc3N5c3RlbSwgRW50Z2lmdHVuZywgTWV0YWxsLUVsZW1lbnQsIERhcm1mbG9yYSwgTHVuZ2VuLU1lcmlkaWFuLCA0LiAsIDUuICB1bmQgNi4gIENoYWtyYVwiLFxyXG4gICAgICAgIFwic2tpbi1jb25kaXRpb25zLXVwcGVyXCI6IFwiSEFVVFwiLFxyXG4gICAgICAgIFwic2tpbi1jb25kaXRpb25zLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEJlaSBIYXV0ZXJrcmFua3VuZ2VuLiDigKIgRXJnw6RuemVuZCBiZWkgSGF1dGVudHrDvG5kdW5nZW4gYmVpIHRoZXJhcGV1dGlzY2hlbiBFaW5ncmlmZmVuLiDigKIgRXJnw6RuenVuZ3N0aGVyYXBpZSBiZWkgaG9ybW9uZWxsZW0gVW5nbGVpY2hnZXdpY2h0LiBadXNhdHpwcm9ncmFtbWU6IEVudGdpZnR1bmcsIEFudGkgQWdpbmcsIEJpbmRlZ2V3ZWJlLCBWZXJkYXV1bmdzc3lzdGVtLCBGw7xyIGRlbiBNYW5uLCBGw7xyIGRpZSBGcmF1LCBNZXRhbGwtRWxlbWVudCwgTGViZXItTWVyaWRpYW4sIEdhbGxlbmJsYXNlLU1lcmlkaWFuLCBIYXJuYmxhc2UtTWVyaWRpYW4sIDEuLCAyLiB1bmQgNC4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJzbGVlcC1lbmhhbmNlci11cHBlclwiOiBcIlNDSExBRi1Gw5ZSREVSTkRcIixcclxuICAgICAgICBcInNsZWVwLWVuaGFuY2VyLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEJlaSBFaW5zY2hsYWYtIHVuZCBEdXJjaHNjaGxhZnByb2JsZW1lbi4g4oCiIFZlcnJpbmdlcnQgZGVwcmVzc2l2ZSBHZWRhbmtlbi4g4oCiIFN0ZWlnZXJ0IGRhcyBrw7ZycGVybGljaGUgdW5kIGVtb3Rpb25hbGUgRnJpZWRlbnNnZWbDvGhsLiBadXNhdHpwcm9ncmFtbWU6ICAgRW5lcmdpZS1BdXNnbGVpY2gsIEVudHNwYW5udW5nLCBOZWJlbm5pZXJlLCBGcmllZGUsIEUtU21vZywgRnJldWRlLCBGcnVzdHJhdGlvbiwgU2NoaWxkZHLDvHNlbiwgMS4sIDIuLCAzLiwgNi4gdW5kIDcuIENoYWtyYVwiLFxyXG4gICAgICAgIFwic3RyZXNzLXJlbGllZi11cHBlclwiOiBcIlNUUkVTUy9GUlVTVFJBVElPTlwiLFxyXG4gICAgICAgIFwic3RyZXNzLXJlbGllZi1kZXNjcmlwdGlvblwiOiBcIuKAoiBIaWxmcmVpY2ggYmVpIGFrdXRlciBGcnVzdHJhdGlvbi4g4oCiIFVudGVyc3TDvHR6ZW5kIGJlaSBkZXIga8O2cnBlcmxpY2hlbiB1bmQgcHN5Y2hpc2NoZW4gUHJvYmxlbWzDtnN1bmcgYXVmZ3J1bmQgdm9uIHVudGVyZHLDvGNrdGVuIEVtb3Rpb25lbi4g4oCiIEJlaSDDnGJlcnJlYWt0aW9uZW4gKGRpZSBvZnQgaW4gc2VsYnN0emVyc3TDtnJlbmRlbiBBa3Rpb25lbiBlbmRlbikgYXVmZ3J1bmQgdm9uIGVpbmVyIGFuZ2VzcGFubnRlbiBMZWJlbnNmw7xocnVuZy4g4oCiIFZlcm1pbmRlcnQgcHN5Y2hpc2NoZSBBbnNwYW5udW5nICh6LkIuIGJlaSBkZXIgU2VsYnN0d2FybmVobXVuZykuIOKAoiBCZWZyZWl0IHZvbiBlbGVrdHJvbWFnbmV0aXNjaGVuIEVuZ3JhbW1lbiBkZXIgdW50ZXJkcsO8Y2t0ZW4gRW1vdGlvbmVuLCB3ZWxjaGUgenUgYWdyZXNzaXZlbSBWZXJoYWx0ZW4gZsO8aHJlbi4g4oCiIEbDvHIgTWVuc2NoZW4gZGllIGltbWVyIGFsbGVuIGhlbGZlbiB1bmQgc2ljaCBzZWxiZXIgenUgd2VuaWcgWmVpdCB3aWRtZW4uIFZlcnJpbmdlcnQgU3TDtnJ1bmdlbiBkZXMgTmVydmVuc3lzdGVtcyB1bmQgZGVyIEtvb3JkaW5hdGlvbiwgZGllIGR1cmNoIHVudGVyZHLDvGNrdGUgRW1vdGlvbmVuIHVuZCBFbnR0w6R1c2NodW5nZW4gaGVydm9yZ2VydWZlbiB3ZXJkZW4uIOKAoiBGw7xyIExldXRlLCBkaWUgZGFzIEdlZsO8aGwgaGFiZW4sIHZvbSBMZWJlbiBzZWxic3QgdW5nZXJlY2h0IGJlaGFuZGVsdCB6dSB3ZXJkZW4uIFp1c2F0enByb2dyYW1tZTogRS1zbW9nLCBGcmllZGUsIEVudHNwYW5udW5nLCBGcmV1ZGUsIE5lYmVubmllcmVuLCBFbmVyZ2llLUF1c2dsZWljaCwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIExlYmVyLU1lcmlkaWFuLCBGZXVlci1FbGVtZW50LCBIZXJ6LU1lcmlkaWFuLCBNZWRpdGF0aW9uIDEuLCAyLiAsIDMuICB1bmQgNi4gIENoYWtyYVwiLFxyXG4gICAgICAgIFwidGh5cm9pZC1nbGFuZHMtdXBwZXJcIjogXCJTQ0hJTEREUsOcU0VcIixcclxuICAgICAgICBcInRoeXJvaWQtZ2xhbmRzLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEFscyBFcmfDpG56dW5nc3RoZXJhcGllIGbDvHIgVW50ZXItIHVuZCDDnGJlcmdld2ljaHRpZ2UuIOKAoiBGw7ZyZGVydCBkaWUgV2lya3VuZyB2b24gQWJtYWdlcnVuZ3NrdXJlbiB1bmQgdW50ZXJzdMO8dHp0IGRpZSBMZWJlbnNrcmFmdC4g4oCiIE9wdGltaWVydCBkaWUgRnVua3Rpb24gZGVyIFplbGxtZW1icmFuZS4gWnVzYXR6cHJvZ3JhbW1lOiBOZXJ2ZW4sIE5lYmVubmllcmUsIEFudGktQWdpbmcsIEtyZWlzbGF1ZnN5c3RlbSwgRnJldWRlLCBGcnVzdHJhdGlvbiwgTWlsei9CYXVjaHNwZWljaGVsZHLDvHNlLU1lcmlkaWFuLCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgMi4gdW5kIDUuIENoYWtyYVwiLFxyXG4gICAgICAgIFwidXJpbmFyeS11cHBlclwiOiBcIkhBUk5TWVNURU1cIixcclxuICAgICAgICBcInVyaW5hcnktZGVzY3JpcHRpb25cIjogXCLigKIgQmVpIEJsYXNlbmVudHrDvG5kdW5nLiDigKIgTWluZGVydCBow6R1ZmlnIHZvcmtvbW1lbmRlciBTY2jDvHR0ZWxmcm9zdC4gWnVzYXR6cHJvZ3JhbW1lOiBFbnRzcGFubnVuZywgRnJ1c3RyYXRpb24sIE5lYmVubmllcmUsIEltbXVuc3lzdGVtLCBEYXJtZmxvcmEsIEhhcm5ibGFzZS1NZXJpZGlhbiwgRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIFdhc3Nlci1FbGVtZW50LCAyLiBDaGFrcmFcIixcclxuICAgICAgICBcInZlcnRlYnJhZS11cHBlclwiOiBcIldJUkJFTFPDhFVMRVwiLFxyXG4gICAgICAgIFwidmVydGVicmFlLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEVyZ8OkbnplbmQgYmVpIFLDvGNrZW50aGVyYXBpZW4uIOKAoiBWb3JiZXVnZW5kIGdlZ2VuIEdld2ViZXNjaMOkZGlndW5nIGJlaSBNZW5zY2hlbiwgZGllIGjDpHVmaWcgc2Nod2VyZSBEaW5nZSBoZWJlbi4g4oCiIFJlZHV6aWVydCBSw7xja2VucHJvYmxlbWUsIGRpZSBow6R1ZmlnIG5hY2ggY2hyb25pc2NoZW4gVmVyZGF1dW5nc3N0w7ZydW5nZW4gYXVmdHJldGVuLiBadXNhdHpwcm9ncmFtbWU6IE11c2tlbG4sICBLbm9jaGVuLCBHZWxlbmtlLCBFbnRzcGFubnVuZywgQmluZGVnZXdlYmUsIFZlcmRhdXVuZ3NzeXN0ZW0sIEhvbHotRWxlbWVudCwgTGViZXItTWVyaWRpYW4sIEhhcm5ibGFzZS1NZXJpZGlhbiwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sMS4gIHVuZCAyLiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJ2aXRhbGl0eS11cHBlclwiOiBcIkxFQkVOU0tSQUZU4oCZXCIsXHJcbiAgICAgICAgXCJ2aXRhbGl0eS1kZXNjcmlwdGlvblwiOiBcIuKAoiBGw7ZyZGVydCBkaWUgVml0YWxpdMOkdC4g4oCiIFp1ciBlcmZvbGdyZWljaGVuIEF1c3NjaGVpZHVuZyB2b24gU3RvZmZ3ZWNoc2VsLUFiZmFsbHByb2R1a3Rlbi4g4oCiIFZlcnJpbmdlcnQgZGllIHTDpGdsaWNoZSBMYXN0IGFuIGdlaXN0aWdlbSB1bmQga8O2cnBlcmxpY2hlbSBTdHJlc3MuIFp1c2F0enByb2dyYW1tZTogIEVuZXJnaWUtQXVzZ2xlaWNoLCBFbmVyZ2llLVNwZW5kZXIsIE5lYmVubmllcmVuLCBTY2hpbGRkcsO8c2VuLCBNaW5lcmFsLVN0b2Zmd2VjaHNlbCwgQmluZGVnZXdlYmUsIEtub2NoZW4sIERhcm1mbG9yYSwgRSBzbW9nLCBBbGxlIE1lcmlkaWFuLVByb2dyYW1tZSwgMS4g4oCTIDIuIHVuZCAzLiBDaGFrcmFcIixcclxuICAgICAgICBcIndhdGVyLWVsZW1lbnQtdXBwZXJcIjogXCJXQVNTRVIgRUxFTUVOVFwiLFxyXG4gICAgICAgIFwid2F0ZXItZWxlbWVudC1zaG9ydFwiOiBcIldBU1NFUlwiLFxyXG4gICAgICAgIFwid2F0ZXItZWxlbWVudC1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGFzIGVtb3Rpb25hbGUgVmVyaGFsdGVuIGRlcyBXYXNzZXJlbGVtZW50cyB3aWUgU3RyZXNzIHVuZCBBbmdzdCDigKIgQWxzIGVyZ8OkbnplbmRlIEJlaGFuZGx1bmcgdm9uIFByb2JsZW1lbiwgZGllIGR1cmNoIGFibm9ybWFsZSBBa3Rpdml0w6R0IHZvbiBPcmdhbmVuIHdpZSBOaWVyZSwgQmxhc2UsIEtub2NoZW4gdW5kIFNpbm5lc29yZ2FuZW4gd2llIGRlbiB2b20gV2Fzc2VyZWxlbWVudCBrb250cm9sbGllcnRlbiBPaHJlbiBlbnRzdGVoZW4uIFN1cHBvcnQtUHJvZ3JhbW1lOiBOaWVyZW5tZXJpZGlhbiwgTWVyaWRpYW4gSGFybmJsYXNlLCBMeW1waHN5c3RlbSwgU3RpbW11bmcsIEtub2NoZW4sIEludHVpdGlvbiwgRnJ1c3RyYXRpb24sIEtvbnplbnRyYXRpb24sIEVyZGVsZW1lbnRcIixcclxuICAgICAgICBcIndlaWdodC1jb250cm9sLXVwcGVyXCI6IFwiR0VXSUNIVFNLT05UUk9MTEVcIixcclxuICAgICAgICBcIndlaWdodC1jb250cm9sLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEVyZ8OkbnplbmQgYmVpIEdld2ljaHRzYWJuYWhtZS1CZWhhbmRsdW5nZW4uIOKAoiBCZWfDvG5zdGlndCBkaWUgTsOkaHJzdG9mZmF1Zm5haG1lLiDigKIgRsO2cmRlcnQgZGllIEdpZnN0c3RvZmYtQXVzc2NoZWlkdW5nLiDigKIgVmVyc3TDpHJrdCBkaWUgTGViZW5za3JhZnQuIOKAoiBWZXJtaW5kZXJ0IMO8YmVyc2Now7xzc2lnZSBOYWhydW5nc2F1Zm5haG1lIGF1ZmdydW5kIHVudGVyZHLDvGNrdGVyIEVtb3Rpb25lbi4g4oCiIFJlZHV6aWVydCBEZXByZXNzaW9uIHfDpGhyZW5kIHNwZXppZWxsZXIgRGnDpHRlbi4g4oCiIFVudGVyZHLDvGNrdCBkYXMgw7xiZXJtw6Rzc2lnZSBWZXJsYW5nZW4gYXVmIE5haHJ1bmcgLiDigKIgVW50ZXJzdMO8dHp0IGRlbiBIb3Jtb24tSGF1c2hhbHQuIFp1c2F0enByb2dyYW1tZTogVmVyZGF1dW5nc3N5c3RlbSwgU2NoaWxkZHLDvHNlL1N0b2Zmd2VjaHNlbCwgRW50Z2lmdHVuZywgTWluZXJhbC1TdG9mZndlY2hzZWwsIFp1Y2tlci1TdG9mZndlY2hzZWwsIFN1Y2h0LCBFcmRlLUVsZW1lbnQsIE1ldGFsbC1FbGVtZW50LCBEaWNrLSAvRMO8bm5kYXJtLU1lcmlkaWFuLCBMZWJlci1NZXJpZGlhbiwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIE1lZGl0YXRpb24gSSwgSUksIElJSSwgMS4gIHVuZCAyLiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJ3b29kLWVsZW1lbnQtdXBwZXJcIjogXCJIT0xaIEVMRU1FTlRcIixcclxuICAgICAgICBcIndvb2QtZWxlbWVudC1zaG9ydFwiOiBcIkhPTFpcIixcclxuICAgICAgICBcIndvb2QtZWxlbWVudC1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGFzIGVtb3Rpb25hbGUgVmVyaGFsdGVuIGRlcyBIb2x6ZWxlbWVudHMgd2llIFd1dCDigKIgQWxzIGVyZ8OkbnplbmRlIEJlaGFuZGx1bmcgZsO8ciBQcm9ibGVtZSwgZGllIGR1cmNoIGFibm9ybWFsZSBBa3Rpdml0w6R0IHZvbiBPcmdhbmVuIHdpZSBMZWJlciwgQmxhc2UsIEdld2ViZSwgd2llIFNlaG5lbiB1bmQgU2lubmVzb3JnYW5lIHdpZSBkZW4gZHVyY2ggZGFzIEhvbHplbGVtZW50IGtvbnRyb2xsaWVydGVuIEF1Z2VuIGVudHN0ZWhlbi4gVW50ZXJzdMO8dHp1bmdzcHJvZ3JhbW1lOiBMZWJlcm1lcmlkaWFuLCBNZXJpZGlhbi1HYWxsZW5ibGFzZSwgTmVydmVuLCBNdXNrZWxuLCBGcnVzdHJhdGlvbiwgQmluZGVnZXdlYmUsIEdlbGVuaywgTWlsem1lcmlkaWFuLCBFcmRlbGVtZW50LCBNZXRhbGxlbGVtZW50LCBFbnRnaWZ0dW5nLCBGcmllZGVuLCAxLiBDaGFrcmEsIDMuIENoYWtyYSwgNC4gQ2hha3JhICwgNi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCIxLWNoYWtyYS1kZXNjcmlwdGlvblwiOiBcIkJlZmluZGV0IHNpY2ggYW0gRW5kZSBkZXIgV2lyYmVsc8OkdWxlIHVuZCBpc3QgbWl0IGRlbiBHZXNjaGxlY2h0cy0gdW5kIE5lYmVubmllcmVuZHLDvHNlbiB2ZXJidW5kZW4gdmVyYW50d29ydGxpY2ggZsO8ciBkaWUgR3J1bmRpc3Rpbmt0ZSB3aWUgS2FtcGYgb2RlciBGbHVjaCwgw5xiZXJsZWJlbiBEYXMgMS4gQ2hha3JhIHN0ZXVlcnQgZGllIFNleHVsaXTDpHQgKGvDtnJwZXJsaWNoKSwgSGFsdCAoZ2Vpc3RpZyksIFNpbm5saWNoa2VpdCAoZW1vdGlvbmFsKSwgU2ljaGVyaGVpdHNnZWbDvGhsIChzcGlyaXR1ZWxsKSBadXNhdHpwcm9ncmFtbWU6IEVsZW1lbnRlLCBNZXJpZGlhbmUgdW5kIE1lZGl0YXRpb25cIixcclxuICAgICAgICBcIjItY2hha3JhLWRlc2NyaXB0aW9uXCI6IFwiQmVmaW5kZXQgc2ljaCBiZWltIEtyZXV6YmVpbiBVbmQgaXN0IG1pdCBkZW4gSG9kZW4gcmVzcC4gRWllcnN0w7Zja2VuIHVuZCBkZW4gdmVyc2NoaWVkZW5lbiBTZXh1YWxob3Jtb25lbiB2ZXJidW5kZW4gVmVyYW50d29ydGxpY2ggZsO8ciBkaWUgQmVyZWljaGUgQmV6aWVodW5nZW4sIEdld2FsdCwgU3VjaHQgdW5kIGVtb3Rpb25hbGUgR3J1bmRiZWTDvHJmbmlzc2UgRGFzIDIuIENoYWtyYSBzdGV1ZXJ0IGRpZSBGb3J0cGZsYW56dW5nIChrw7ZycGVybGljaCksIEtyZWF0aXZpdMOkdCAoZ2Vpc3RpZyksIEZyZXVkZSAoZW1vdGlvbmFsKSB1bmQgQmVnZWlzdGVydW5nIChzcGlyaXR1ZWxsKSBadXNhdHpwcm9ncmFtbWU6IEVsZW1lbnRlLCBNZXJpZGlhbmUgdW5kIE1lZGl0YXRpb25cIixcclxuICAgICAgICBcIjMtY2hha3JhLWRlc2NyaXB0aW9uXCI6IFwiQmVmaW5kZXQgc2ljaCBkaXJla3QgdW50ZXIgZGVuIFJpcHBlbiBVbmQgaXN0IG1pdCBkZW0gVmVyZGF1dW5nc3N5c3RlbSB1bmQgZGVuIE5lYmVubmllcmVuIHZlcmJ1bmRlbiBWZXJhbnR3b3J0bGljaCBmw7xyIHBlcnPDtm5saWNoZSBTdMOkcmtlLCBGdXJjaHQsIEJla2zDpG1tdW5nIHVuZCBJbnRyb3ZlcnRpZXJ0aGVpdCBEYXMgMy5DaGFrcmEgc3RldWVydCBkaWUgVmVyZGF1dW5nIChrw7ZycGVybGljaCksIHBlcnPDtm5saWNoZSBTdMOkcmtlIChnZWlzdGlnKSwgQXVzZGVobnVuZyAoZW1vdGlvbmFsKSB1bmQgV2FjaHN0dW0gKHNwaXJpdHVlbGwpIFp1c2F0enByb2dyYW1tZTogRWxlbWVudGUsIE1lcmlkaWFuZSB1bmQgTWVkaXRhdGlvblwiLFxyXG4gICAgICAgIFwiNC1jaGFrcmEtZGVzY3JpcHRpb25cIjogXCJCZWZpbmV0IHNpY2ggYmVpbSBCcnVzdGJlcmVpY2ggVW5kIHN0ZWh0IGltIFp1c2FtbWVuaGFuZyBtaXQgZGVyIFRoeW11c2Ryw7xzZSB1bmQgZGVtIEltbXVuc3lzdGVtIElzdCB2ZXJhbnR3b3J0d29ydGxpY2ggZsO8ciBrb3BsZXhlIEVtb3Rpb25lbiwgTWl0Z2Vmw7xobCwgYmVkaW5ndW5nc2xvc2UgTGllYmUsIEFid2Vpc3VuZywgR2xlaWNoZ2V3aWNodCBEYXMgNC4gQ2hha3JhIHN0ZXVlcnQgZGVuIEtyZWlzbGF1ZiAoa8O2cnBlcmxpY2gpLCBiZWRpbmd1bmdzbG9zZSBMaWViZSB6dSBzaWNoIHNlbGJzdCB1bmQgYW5kZXJlbiAoZW1vdGlvbmFsKSwgTGVpZGVuc2NoYWZ0IChnZWlzdGlnKSB1bmQgSGluZ2FiZSAoc3Bpcml0dWVsbCkgWnVzYXR6cHJvZ3JhbW1lOiBFbGVtZW50ZSwgTWVyaWRpYW5lIHVuZCBNZWRpdGF0aW9uXCIsXHJcbiAgICAgICAgXCI1LWNoYWtyYS1kZXNjcmlwdGlvblwiOiBcIkJlZmluZGV0IHNpY2ggYmVpbSBIYWxzYmVyZWljaCBVbmQgc3RlaHQgaW0gWnVzYW1tZW5oYW5nIG1pdCBkZXIgU2NoaWxkZHLDvHNlIElzdCB2ZXJhbnR3b3J0bGljaCBmw7xyIGRpZSBLb21tdW5pa2F0aW9uIHVuZCBXYWNoc3R1bSBkdXJjaCBkaWUgQXVzZHJ1Y2tzZm9ybSBEYXMgNS4gQ2hha3JhIHN0ZXVlcnQgZGllIEtvbW11bmlrYXRpb24gKGvDtnJwZXJsaWNoKSwgVW5hYmjDpG5naWdrZWl0IChlbW90aW9uYWwpLCBmaWVzc2VuZGUgR2VkYW5rZW4gKGdlaXN0aWcpLCBTaWNoZXJoZWl0c2dlZsO8aGwgKHNwaXJpdHVlbGwpIFp1c2F0enByb2dyYW1tZTogRWxlbWVudGUsIE1lcmlkaWFuZSB1bmQgTWVkaXRhdGlvblwiLFxyXG4gICAgICAgIFwiNi1jaGFrcmEtZGVzY3JpcHRpb25cIjogXCJCZWZpbmRldCBzaWNoIHp3aXNjaGVuIGRlbiBBdWdlbmJyYXVlbiwgYXVjaCBkYXMgRHJpdHRlIEF1Z2UgZ2VuYW5udCBTdGVodCBpbSBadXNhbW1lbmhhbmcgbWl0IGRlciBaaXJiZWxkcsO8c2UsIHdlbGNoZSBmw7xyIGRpZSBNZWxhdG9uaW4tUHJvZHVrdGlvbiAoR2zDvGNrc2hvcm1vbikgenVzdMOkbmRpZyBpc3QgdW5kIHN0ZXVlcnQgZGVuIFNjaGxhZnJ5dGhtdXMgRGFzIDYuIENoYWtyYSBzdGV1ZXJ0ZGllIEF1Z2VuLCBkaWUgS29uemVudHJhdGlvbnNmw6RoaWdrZWl0IHVuZCBkYXMgdmlzdWVsbGUgQmV3dXNzdHNlaW4gKGvDtnJwZXJsaWNoKSwgYnJpbmd0IEtsYXJoZWl0IGF1ZiBpbnR1aXRpdmVyIEViZW5lIFp1c2F0enByb2dyYW1tZTogRWxlbWVudGUsIE1lcmlkaWFuZSB1bmQgTWVkaXRhdGlvblwiLFxyXG4gICAgICAgIFwiNy1jaGFrcmEtZGVzY3JpcHRpb25cIjogXCJCZWZpbmRldCBzaWNoIG9iZW4gYW0gS29wZiBiZXRyaWZmdCBkaWUgSGlybmFuaGFuZ2Ryw7xzZSAoSHlwb3BoeXNlKSwgZGllIG1pdCBkZW0gZW5kb2tyaW5lbiBTeXN0ZW0gdW5kIGRlbSB6ZW50cmFsZW4gTmVydmVuc3lzdGVtIGtvbW11bml6aWVyIG1pdHRlbHMgSHlwb3RoYWxhbXVzICAgRGFzIDcuIENoYWtyYSByZWdlbHQgdW5zZXJlIGlubmVyZSBXZWlzaGVpdCwgdW5pdmVyc2VsbGVzIEJld3Vzc3RzZWluIHVuZCBFaW5oZWl0IFp1c2F0enByb2dyYW1tZTogRWxlbWVudGUsIE1lcmlkaWFuZSB1bmQgTWVkaXRhdGlvblwiLFxyXG4gICAgICAgIFwicGFpbi1yZWxpZWYtdXBwZXJcIjogXCJTQ0hNRVJaTElOREVSVU5HXCIsXHJcbiAgICAgICAgXCJncm91bmRpbmctdXBwZXJcIjogXCJFUkRVTkdcIixcclxuICAgICAgICBcImRpZ2VzdGlvbi11cHBlclwiOiBcIlZFUkRBVVVOR1wiLFxyXG4gICAgICAgIFwibG93ZXItYmFja2FjaGUtdXBwZXJcIjogXCJMT1dFUiBCQUNLQUNIRVwiLFxyXG4gICAgICAgIFwiY2hpbGRyZW4tdXBwZXJcIjogXCJLSU5ERVJcIixcclxuICAgICAgICBcImZlbWFsZS1ob3Jtb25hbC1pbWJhbGFuY2VzLXVwcGVyXCI6IFwiV0VJQkxJQ0hFUyBIT1JNT05FTExFUyBVTkdMRUlDSEdFV0lDSFRcIixcclxuICAgICAgICBcIm1hbGUtaG9ybW9uYWwtaW1iYWxhbmNlcy11cHBlclwiOiBcIk1BRU5OTElDSEVTIEhPUk1PTkVMTEVTIFVOR0xFSUNIR0VXSUNIVFwiLFxyXG4gICAgICAgIFwiY29sZC1mbHUtdXBwZXJcIjogXCJFUktBRUxUVU5HL0dSSVBQRVwiLFxyXG4gICAgICAgIFwiZWFyLXByb2JsZW1zLXVwcGVyXCI6IFwiT0hSRU5QUk9CTEVNRVwiLFxyXG4gICAgICAgIFwiaW50ZXN0aW5hbC1mbHUtdXBwZXJcIjogXCJEQVJNIEdSSVBQRVwiLFxyXG4gICAgICAgIFwiZW5kdXJhbmNlLXVwcGVyXCI6IFwiRU5EVVJBTkNFXCIsXHJcbiAgICAgICAgXCJtdXNjbGVzLXVwcGVyXCI6IFwiTVVTS0VMR0VXRUJFXCIsXHJcbiAgICAgICAgXCJ0aHlyb2lkLXVwcGVyXCI6IFwiU0NISUxERFJVRVNFXCIsXHJcbiAgICAgICAgXCJ1cmluYXJ5LXN5c3RlbS11cHBlclwiOiBcIkhBUk5TWVNURU1cIixcclxuICAgICAgICBcImxvd2VyLWNoYWtyYS1iYWxhbmNpbmctdXBwZXJcIjogXCJMT1dFUiBDSEFLUkEgQkFMQU5DSU5HXCIsXHJcbiAgICAgICAgXCJ1cHBlci1jaGFrcmEtYmFsYW5jaW5nLXVwcGVyXCI6IFwiVVBQRVIgQ0hBS1JBIEJBTEFOQ0lOR1wiLFxyXG4gICAgICAgIFwibWVkaXRhdGlvbi1iYXNpY3MtdXBwZXJcIjogXCJNRURJVEFaSU9ORSBHUlVORExFR0VORFwiLFxyXG4gICAgICAgIFwibWVkaXRhdGlvbi1tZWRpdW0tdXBwZXJcIjogXCJNRURJVEFUSU9OIE1FRElVTVwiLFxyXG4gICAgICAgIFwibWVkaXRhdGlvbi1hZHZhbmNlZC11cHBlclwiOiBcIk1FRElUQVRJT04gRVJXRUlURVJUXCIsXHJcbiAgICAgICAgXCJsaXZlci1iYWxhbmNpbmctdXBwZXJcIjogXCJMRUJFUkFVU1RBVVNDSFwiLFxyXG4gICAgICAgIFwibGl2ZXItZnVuY3Rpb24tdXBwZXJcIjogXCJMRUJFUkZVTktUSU9OXCIsXHJcbiAgICAgICAgXCJraWRuZXktZnVuY3Rpb24tdXBwZXJcIjogXCJOSUVSRU5GVU5LVElPTlwiLFxyXG4gICAgICAgIFwibGFyZ2UtaW50ZXN0aW5lLWJhbGFuY2luZy11cHBlclwiOiBcIkdST8OfRSBJTlRFU1RJTiBCQUxBTkNJTkdcIixcclxuICAgICAgICBcInBlcmljYXJkaXVtLWZsb3ctdXBwZXJcIjogXCJQRVJJQ0FSRElVTS1GTMOcU1NFXCIsXHJcbiAgICAgICAgXCJyb3V0aW5lLXBldHMtdXBwZXIxXCI6XCJJTU1VTlNZU1RFTVwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyMlwiOlwiREVTSU5UT1hJWklFUlVOR1wiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyM1wiOlwiRElHRVNUSVZFIFNZU1RFTVwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyNFwiOlwiS05PQ0hFTlwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyNVwiOlwiSEFVVFwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyNlwiOlwiTVVTS0VMTlwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyN1wiOlwiU1RSRVNTIEJFRlJFSVVOR1wiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyOFwiOlwiQVRFTVNZU1RFTVwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXR4LXVwcGVyMVwiOlwiSU1NVU5TWVNURU1cIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjJcIjpcIkRFU0lOVE9YSVpJRVJVTkdcIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjNcIjpcIkRJR0VTVElWRSBTWVNURU1cIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjRcIjpcIktOT0NIRU5cIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjVcIjpcIkhBVVRcIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjZcIjpcIk1VU0tFTE5cIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjdcIjpcIlNUUkVTUyBCRUZSRUlVTkdcIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjhcIjpcIkFURU1TWVNURU1cIixcclxuICAgICAgICBcInBldHNzLXByb2dyYW0tdXBwZXJcIjpcIlBFVCBTXCIsXHJcbiAgICAgICAgXCJwZXRzcy1wcm9ncmFtLWRlc2NyaXB0aW9uXCI6XCLigKJEaWVzZXMgUHJvZ3JhbW0gaW4gS29tYmluYXRpb24gbWl0IGRlbiBhbmRlcmVuLCBoaWxmdCBJaHJlbSBIYXVzdGllciAoS2F0emUsIGtsZWluZW0gSHVuZCBvZGVyIGtsZWluZW0gU8OkdWdldGllcikgc2ljaCB2aWVsIHNjaG5lbGxlciB2b24gVmVybGV0enVuZ2VuLCBLcmFua2hlaXQgb2RlciBUcmF1bWFzIGRlciBUcmVubnVuZyBvZGVyIFJlaXNlbiB6dSBlcmhvbGVuLlwiLFxyXG4gICAgICAgIFwicGV0c3gtcHJvZ3JhbS11cHBlclwiOlwiUEVUIFhcIixcclxuICAgICAgICBcInBldHN4LXByb2dyYW0tZGVzY3JpcHRpb25cIjpcIuKAokRpZXNlcyBQcm9ncmFtbSBpbiBLb21iaW5hdGlvbiBtaXQgYW5kZXJlbiBpc3QgYW5nZXplaWd0LCB1bSBJaHJlbiBncsO2w59lcmVuIEhhdXN0aWVyZW4gKGdyb8OfZSBIdW5kZSwgUGZlcmRlIHVuZCBhbmRlcmUgU8OkdWdldGllcmUpenUgaGVsZmVuLCBkaWUgIEVyaG9sdW5nc3plaXQgbmFjaCBWZXJsZXR6dW5nZW4sIEtyYW5raGVpdGVuIG9kZXIgVHJhdW1hcyBkdXJjaCBUcmVubnVuZyBvZGVyIFJlaXNlbiB6dSB2ZXJrdWVyemVuLlwiXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvZ2VybWFuLXRleHRzLnRzIiwiZXhwb3J0IHZhciBEYXRhID0geyBHcm91cHMgOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncGFpbi1yZWxpZWYtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQYWluX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaW5qdXJ5LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW5qdXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCb25lX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3N0cmVzcy1yZWxpZWYtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdpbW11bmUtc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3Jlc3BpcmF0b3J5LXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2ludXNfQ2F2aXRpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2RldG94aWZpY2F0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxhcmdlX0ludGVzdGluZV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaGVhZGFjaGUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFkYWNoZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdncm91bmRpbmctdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVhcnRoX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdlbmVyZ3ktYm9vc3Rlci11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFeGhhdXN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBZHJlbmFsX0dsYW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnSkVULUxBRycsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkpldC1MYWcvQ2xpbWF0ZV9DaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWFydGhfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnSkVULUxBRycsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkpldC1MYWcvQ2xpbWF0ZV9DaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkV4aGF1c3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2NvbmNlbnRyYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25jZW50cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaXNjZXJubWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRyZW5hbF9HbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQnJvd19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2RpZ2VzdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNaW5lcmFsX01ldGFib2xpY19BY3Rpdml0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbG93ZXItYmFja2FjaGUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCYWNrYWNoZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbmVjay1zaG91bGRlci11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lY2svU2hvdWxkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnc2xlZXAtZW5oYW5jZXItdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTbGVlcF9FbmhhbmNlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2NoaWxkcmVuLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2hpbGRfRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTXVzY2xlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdmZW1hbGUtaG9ybW9uYWwtaW1iYWxhbmNlcy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZlbWFsZV9Ib3Jtb25lX0JhbGFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtYWxlLWhvcm1vbmFsLWltYmFsYW5jZXMtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNYWxlX0hvcm1vbmVfQmFsYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnY29sZC1mbHUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGbHVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnY29uc3RpcGF0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29uc3RpcGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJHYWxsYmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGFyZ2VfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2RpYXJyaGVhLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlhcnJoZWFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2Vhci1wcm9ibGVtcy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkF1ZGl0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQnJvd19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZXllc2lnaHQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFeWVzaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQnJvd19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaW50ZXN0aW5hbC1mbHUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGbHVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZW5lcmd5LWJvb3N0ZXItdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQm9vc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRyZW5hbF9HbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncmVnZW5lcmF0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVml0YWxpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRobGV0ZScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3Jlc3BpcmF0b3J5LXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2ludXNfQ2F2aXRpZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRobGV0ZScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2luanVyeS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGFpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRobGV0ZScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3BhaW4tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZXJ2b3VzX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGFpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRobGV0ZScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2JhY2thY2hlLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQmFja2FjaGVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lY2svU2hvdWxkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlZlcnRlYnJhZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRobGV0ZScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ211c2NsZXMtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbm5lY3RpdmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdpbW11bmUtc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzcGEnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdhbnRpLWFnaW5nLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBbnRpX0FnaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnd2VpZ2h0LWNvbnRyb2wtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBZGRpY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJXZWlnaHRfQ29udHJvbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2RldG94aWZpY2F0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1pbmVyYWxfTWV0YWJvbGljX0FjdGl2aXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3NraW4tY29uZGl0aW9ucy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbm5lY3RpdmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2tpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzcGEnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdoYWlyLWdyb3d0aC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGFpcl9Hcm93dGhcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2xvdy1waHlzaWNhbC1kcml2ZS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBZHJlbmFsX0dsYW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMb3dfUGh5c2ljYWxfRHJpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzcGEnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsb3ctbWVudGFsLWRyaXZlLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTG93X01lbnRhbF9Ecml2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3N0cmVzcy1yZWxpZWYtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJKb3lcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzdHJlc3MgcmVsaWVmJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAndml0YWxpdHktdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZXJ2b3VzX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSm95XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQm9vc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVml0YWxpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzdHJlc3MgcmVsaWVmJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnc2xlZXAtZW5oYW5jZXItdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTbGVlcF9FbmhhbmNlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzdHJlc3MgcmVsaWVmJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZW5lcmd5LWJvb3N0ZXItdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBZHJlbmFsX0dsYW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQm9vc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFeGhhdXN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzdHJlc3MgcmVsaWVmJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaHlwZXJ0ZW5zaW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVyaWNhcmRpdW1fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkh5cGVydGVuc2lvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9GdW5jdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzdHJlc3MgcmVsaWVmJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAndGh5cm9pZC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVGh5cm9pZF9HbGFuZHNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUaHJvYXRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RyZXNzIHJlbGllZicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2xvdy1tZW50YWwtZHJpdmUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMb3dfTWVudGFsX0RyaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncmVnZW5lcmF0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbm5lY3RpdmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd2aXRhbGl0eS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBZHJlbmFsX0dsYW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJWaXRhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2pveS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlYWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSm95XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNZXRhbF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3NsZWVwLWVuaGFuY2VyLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTbGVlcF9FbmhhbmNlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaGVhcnQtZnVuY3Rpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGaXJlX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0Z1bmN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUcmlwbGVfV2FybWVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncmVzcGlyYXRvcnktc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTaW51c19DYXZpdGllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2h5cGVydGVuc2lvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIeXBlcnRlbnNpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2dsdWNvc2UtbWV0YWJvbGljLWRpc29yZGVycy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlYWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJHbHVjb3NlX01ldGFib2xpY19EaXNvcmRlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNwbGVlbl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdoZW1vcnJob2lkcy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlbW9ycmhvaWRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25zdGlwYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3VyaW5hcnktc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJVcmluYXJ5X1N5c3RlbS9DeXN0aXRpc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVXJpbmFyeV9CbGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2NvbGQtZmx1LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRmx1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncGFpbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQYWluX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlZ2VuZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjaGFrcmEgYmFsYW5jaW5nJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbG93ZXItY2hha3JhLWJhbGFuY2luZy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTb2xhcl9QbGV4dXNfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFYXJ0aF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2NoYWtyYSBiYWxhbmNpbmcnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd1cHBlci1jaGFrcmEtYmFsYW5jaW5nLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUaHJvYXRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ3Jvd25fQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2NoYWtyYSBiYWxhbmNpbmcnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtZWRpdGF0aW9uLWJhc2ljcy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUm9vdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnY2hha3JhIGJhbGFuY2luZycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ21lZGl0YXRpb24tbWVkaXVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWVkaXRhdGlvbl8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRocm9hdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlYWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2NoYWtyYSBiYWxhbmNpbmcnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtZWRpdGF0aW9uLWFkdmFuY2VkLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWVkaXRhdGlvbl8zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ3Jvd25fQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJKb3lcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdlYXJ0aC1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU3RvbWFjaF9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU3BsZWVuX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFYXJ0aF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdmaXJlLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU21hbGxfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGaXJlX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2ZpcmUtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUcmlwbGVfV2FybWVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGaXJlX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ21ldGFsLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1ldGFsX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNraW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3dhdGVyLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlVyaW5hcnlfQmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiV2F0ZXJfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnd29vZC1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkdhbGxibGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJXb29kX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkV5ZXNpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbGl2ZXItZnVuY3Rpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTb2xhcl9QbGV4dXNfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaGVhcnQtZnVuY3Rpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU21hbGxfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2tpZG5leS1mdW5jdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVXJpbmFyeV9CbGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFeGhhdXN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsYXJnZS1pbnRlc3RpbmUtYmFsYW5jaW5nLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGFyZ2VfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTb2xhcl9QbGV4dXNfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdwZXJpY2FyZGl1bS1mbG93LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVyaWNhcmRpdW1fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRyaXBsZV9XYXJtZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnc3RvbWFjaC1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlN0b21hY2hfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNwbGVlbl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzcycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0cy11cHBlcjEnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHNzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyMicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzcycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0cy11cHBlcjMnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHNzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyNCcsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW5qdXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHMtdXBwZXI1JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2tpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25uZWN0aXZlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHNzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyNicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzcycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0cy11cHBlcjcnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHNzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyOCcsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHN4JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyMScsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHgtdXBwZXIyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxhcmdlX0ludGVzdGluZV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHN4JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyMycsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHgtdXBwZXI0JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzeCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0eC11cHBlcjUnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTa2luX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbm5lY3RpdmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW5qdXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHgtdXBwZXI2JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTXVzY2xlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHN4JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyNycsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHgtdXBwZXI4JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFByb2dyYW1zIDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZWFydGgtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRWFydGhfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjo1NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2VhcnRoLWVsZW1lbnQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2ZpcmUtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRmlyZV9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjA1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmlyZS1lbGVtZW50LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtZXRhbC1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJNZXRhbF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEyOjM5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbWV0YWwtZWxlbWVudC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnd2F0ZXItZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiV2F0ZXJfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzoyMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3dhdGVyLWVsZW1lbnQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3dvb2QtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiV29vZF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjA5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnd29vZC1lbGVtZW50LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdnYWxsYmxhZGRlci1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMjA6MzlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdnYWxsYmxhZGRlci1tZXJpZGlhbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaGVhcnQtbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjQ1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaGVhcnQtbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2tpZG5leS1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjI3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAna2lkbmV5LW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsYXJnZS1pbnRlc3RpbmUtbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkxhcmdlX0ludGVzdGluZV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzo1M1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2xhcmdlLWludGVzdGluZS1tZXJpZGlhbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbGl2ZXItbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjExXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbGl2ZXItbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsdW5nLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjM4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbHVuZy1tZXJpZGlhbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncGVyaWNhcmRpdW0tbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIxOjU1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAncGVyaWNhcmRpdW0tbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3NtYWxsLWludGVzdGluZS1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU21hbGxfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjI1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc21hbGwtaW50ZXN0aW5lLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdzcGxlZW4tcGFuY3JlYXMtbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlNwbGVlbl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTozN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3NwbGVlbi1wYW5jcmVhcy1tZXJpZGlhbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnc3RvbWFjaC1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU3RvbWFjaF9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzoxNVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3N0b21hY2gtbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3RyaXBsZS13YXJtZXItbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlRyaXBsZV9XYXJtZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6MjBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0cmlwbGUtd2FybWVyLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd1cmluYXJ5LWJsYWRkZXItbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlVyaW5hcnlfQmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDoxOVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3VyaW5hcnktYmxhZGRlci1tZXJpZGlhbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiBcImZpcnN0LWNoYWtyYS11cHBlclwiLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlJvb3RfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjQ5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnMS1jaGFrcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogXCJzZWNvbmQtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzo1N1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzItY2hha3JhLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6IFwidGhpcmQtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU29sYXJfUGxleHVzX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjo1MVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzMtY2hha3JhLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6IFwiZm91cnRoLWNoYWtyYS11cHBlclwiLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxODoxNlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzQtY2hha3JhLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6IFwiZmlmdGgtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVGhyb2F0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzo1OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzUtY2hha3JhLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6IFwic2l4dGgtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQnJvd19DaGFrcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICc2LWNoYWtyYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiBcInNldmVudGgtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQ3Jvd25fQ2hha3JhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjQ1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNy1jaGFrcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2FkZGljdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRkaWN0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjA1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYWRkaWN0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdhZHJlbmFsLWdsYW5kLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJBZHJlbmFsX0dsYW5kXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjA3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYWRyZW5hbC1nbGFuZC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnYW50aS1hZ2luZy11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQW50aV9BZ2luZ1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMTowMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2FudGktYWdpbmctZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnYXVkaXRvcnktdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkF1ZGl0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDozMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2F1ZGl0b3J5LWRlc2NyaXB0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnYmFja2FjaGUtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkJhY2thY2hlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjMwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYmFja2FjaGUtZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdib25lcy11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjA0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYm9uZXMtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2NoaWxkLWRldmVsb3BlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2hpbGRfRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjaGlsZC1kZXZlbG9wZW1lbnQtZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdjaXJjdWxhdG9yeS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTowNlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NpcmN1bGF0b3J5LXN5c3RlbS1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogICdjb25jZW50cmF0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJDb25jZW50cmF0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIxOjE5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnY29uY2VudHJhdGlvbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnY29ubmVjdGl2ZS10aXNzdWUtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkNvbm5lY3RpdmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjo1NFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2Nvbm5lY3RpdmUtdGlzc3VlLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnY29uc3RpcGF0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJDb25zdGlwYXRpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6NDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjb25zdGlwYXRpb24tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2RldG94aWZpY2F0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjoxM1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2RldG94aWZpY2F0aW9uLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZGlhcnJoZWEtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkRpYXJyaGVhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjU5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGlhcnJoZWEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2RpZ2VzdGl2ZS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6NDFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkaWdlc3RpdmUtc3lzdGVtLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdkaXNjZXJubWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlzY2Vybm1lbnRcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6MzdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkaXNjZXJubWVudC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiBcImUtc21vZy11cHBlclwiLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDo1MVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2Utc21vZy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZW5lcmd5LWJhbGFuY2luZy11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzo1NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2VuZXJneS1iYWxhbmNpbmctZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdlbmVyZ3ktYm9vc3Rlci11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdlbmVyZ3ktYm9vc3Rlci1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZXhoYXVzdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRXhoYXVzdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDo1OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2V4aGF1c3Rpb24tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2V5ZXNpZ2h0LXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJFeWVzaWdodFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjoxMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2V5ZXNpZ2h0LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdmZW1hbGUtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkZlbWFsZV9Ib3Jtb25lX0JhbGFuY2VcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6MTdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdmZW1hbGUtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2ZsdS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRmx1XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjU5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZmx1LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZ2x1Y29zZS1tZXRhYm9saWMtZGlzb3JkZXJzLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJHbHVjb3NlX01ldGFib2xpY19EaXNvcmRlcnNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MjhcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdnbHVjb3NlLW1ldGFib2xpYy1kaXNvcmRlcnMtZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdoYWlyLWdyb3d0aC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSGFpcl9Hcm93dGhcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTk6MDdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdoYWlyLWdyb3d0aC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaGVhZGFjaGUtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkhlYWRhY2hlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjM4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaGVhZGFjaGUtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2hlYXJ0LWZ1bmN0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9GdW5jdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzozMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2hlYXJ0LWZ1bmN0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaGVtb3JyaG9pZHMtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkhlbW9ycmhvaWRzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIxOjEzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaGVtb3JyaG9pZHMtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2h5cGVydGVuc2lvbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSHlwZXJ0ZW5zaW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjUzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaHlwZXJ0ZW5zaW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdpbW11bmUtc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjUwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaW1tdW5lLXN5c3RlbS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaW5qdXJ5LXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTg6NDZcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdpbmp1cnktZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2ludGVzdGluYWwtZmxvcmEtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkludGVzdGluYWxfRmxvcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTg6NThcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdpbnRlc3RpbmFsLWZsb3JhLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6IFwiamV0LWxhZy11cHBlclwiLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkpldC1MYWcvQ2xpbWF0ZV9DaGFuZ2VcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTY6MTRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdqZXQtbGFnLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdqb2ludHMtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkpvaW50c1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzowN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2pvaW50cy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnam95LXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJKb3lcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMjE6MDRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdqb3ktZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2xvdy1tZW50YWwtZHJpdmUtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkxvd19NZW50YWxfRHJpdmVcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6NDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdsb3ctbWVudGFsLWRyaXZlLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsb3ctcGh5c2ljYWwtZHJpdmUtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkxvd19QaHlzaWNhbF9Ecml2ZVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjo0OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2xvdy1waHlzaWNhbC1kcml2ZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbHltcGhhdGljLXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjowNFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2x5bXBoYXRpYy1zeXN0ZW0tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ21hbGUtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk1hbGVfSG9ybW9uZV9CYWxhbmNlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEyOjMxXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbWFsZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbWVkaXRhdGlvbi0xLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJNZWRpdGF0aW9uXzFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMzM6MTVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtZWRpdGF0aW9uLTEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ21lZGl0YXRpb24tMi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTWVkaXRhdGlvbl8yXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjI5OjQzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbWVkaXRhdGlvbi0yLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtZWRpdGF0aW9uLTMtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fM1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMjo0OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21lZGl0YXRpb24tMy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbWluZXJhbC1tZXRhYm9saWMtYWN0aXZpdHktdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk1pbmVyYWxfTWV0YWJvbGljX0FjdGl2aXR5XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjI1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbWluZXJhbC1tZXRhYm9saWMtYWN0aXZpdHktZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ211c2NsZS10aXNzdWUtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjU5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbXVzY2xlLXRpc3N1ZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbmVjay1zaG91bGRlci11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVjay9TaG91bGRlclwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjoxNlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ25lY2stc2hvdWxkZXItZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ25lcnZvdXMtc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJOZXJ2b3VzX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxOToxMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ25lcnZvdXMtc3lzdGVtLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdwYWluLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJQYWluX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6MThcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdwYWluLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdwZWFjZS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMjI6MDhcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdwZWFjZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncmVnZW5lcmF0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6MTJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdyZWdlbmVyYXRpb24tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JlbGF4YXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTk6NTVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdyZWxheGF0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTo1MlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3Jlc3BpcmF0b3J5LXN5c3RlbS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnc2ludXMtY2F2aXRpZXMtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlNpbnVzX0Nhdml0aWVzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjMzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc2ludXMtY2F2aXRpZXMtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3NraW4tY29uZGl0aW9ucy11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU2tpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjUwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc2tpbi1jb25kaXRpb25zLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdzbGVlcC1lbmhhbmNlci11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU2xlZXBfRW5oYW5jZXJcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTk6NThcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzbGVlcC1lbmhhbmNlci1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnc3RyZXNzLXJlbGllZi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTg6NTVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzdHJlc3MtcmVsaWVmLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd0aHlyb2lkLWdsYW5kcy11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVGh5cm9pZF9HbGFuZHNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6NTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0aHlyb2lkLWdsYW5kcy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3VyaW5hcnktdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlVyaW5hcnlfU3lzdGVtL0N5c3RpdGlzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjM5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAndXJpbmFyeS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3ZlcnRlYnJhZS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVmVydGVicmFlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEyOjUzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAndmVydGVicmFlLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd2aXRhbGl0eS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVml0YWxpdHlcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6MDBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd2aXRhbGl0eS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnd2VpZ2h0LWNvbnRyb2wtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIldlaWdodF9Db250cm9sXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjUwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnd2VpZ2h0LWNvbnRyb2wtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3BldHNzLXByb2dyYW0tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjExOjUwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAncGV0c3MtcHJvZ3JhbS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncGV0c3gtcHJvZ3JhbS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTI6NTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdwZXRzeC1wcm9ncmFtLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvb2ZmbGluZV9kYXRhLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgRXZlbnRzLCBDb250ZW50IH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2ZmbGluZV9kYXRhJztcbmltcG9ydCB7IFJvdXRpbmVzUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IEdlcm1hblRleHRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2VybWFuLXRleHRzJztcbmltcG9ydCB7IFByb2dyYW1QYWdlIH0gZnJvbSAnLi4vcHJvZ3JhbS9wcm9ncmFtJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgUHJvZ3JhbXNQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXByb2dyYW1zJyxcbiAgdGVtcGxhdGVVcmw6ICdwcm9ncmFtcy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3JhbXNQYWdlIHtcbiAgQFZpZXdDaGlsZChDb250ZW50KSBjb250ZW50OiBDb250ZW50O1xuICBwdWJsaWMgcHJlZGVmaW5lZFByb2dyYW1zIDogYW55O1xuICBwdWJsaWMgcHJvZ3JhbXMgOiBhbnk7XG4gIHB1YmxpYyBwcm9ncmFtIDogbnVtYmVyO1xuICBwdWJsaWMgcHJvZ3JhbU5hbWUxIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbU5hbWUyIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbU5hbWUzIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbU5hbWU0IDogc3RyaW5nO1xuICBwdWJsaWMgYmFzaWNCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgYnVzaW5lc3NUcmF2ZWxCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgZmFtaWxpeUJ1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBhdGhsZXRlQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIHNwYUJ1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBzdHJlc3NCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgc2VuaW9yQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIGNoYWtyYUJ1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBlbGVtZW50c0J1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBwZXRzc0J1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBwZXRzeEJ1dHRvbiA6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwdWJsaWMgcm91dGluZXM6IFJvdXRpbmVzUHJvdmlkZXIsXG4gICAgcHVibGljIGV2ZW50czogRXZlbnRzKSB7XG4gICAgICB0aGlzLnByb2dyYW0gPSBuYXZQYXJhbXMuZ2V0KCdidWJibGUnKTtcblxuICAgICAgdGhpcy5ldmVudHMuc3Vic2NyaWJlKCdhZGQxUHJvZ3JhbUV2ZW50JywgKHByb2dyYW1OdW1iZXIsIHByb2dyYW1OYW1lLCBwcm9ncmFtUnVubmluZ1RpbWUsIHByb2dyYW1BcGlOYW1lKSA9PiB7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW1OdW1iZXI7XG4gICAgICAgIHRoaXMuYWRkMVByb2dyYW0ocHJvZ3JhbU5hbWUsIHByb2dyYW1SdW5uaW5nVGltZSwgcHJvZ3JhbUFwaU5hbWUpO1xuICAgICAgICB0aGlzLm5hdkN0cmwucG9wKCk7XG4gICAgICB9KTtcbiAgfVxuICBpb25WaWV3RGlkTGVhdmUoKXtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5U2Nyb2xsVG9wLCB0aGlzLmNvbnRlbnQuZ2V0Q29udGVudERpbWVuc2lvbnMoKS5zY3JvbGxUb3ApO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKXtcbiAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlDdXJyZW50UHJvZ3JhbSkudGhlbigocHJvZ3JhbSk9PntcbiAgICAgICAgdGhpcy5nZXRQcm9ncmFtcyhwcm9ncmFtICE9IG51bGwgPyBwcm9ncmFtIDogJ2Jhc2ljJyk7XG4gICAgICB9KVxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IERhdGEuUHJvZ3JhbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBEYXRhLlByb2dyYW1zW2ldLnRleHROYW1lID0gR2VybWFuVGV4dHNbRGF0YS5Qcm9ncmFtc1tpXS5uYW1lXTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvZ3JhbXMgPSBEYXRhLlByb2dyYW1zO1xuXG4gICAgICB0aGlzLnJvdXRpbmVzLmdldEtleShDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTEpLnRoZW4odmFsID0+IHtcbiAgICAgICAgaWYodGhpcy5wcm9ncmFtICE9IDEgJiYgdmFsICE9IG51bGwgJiYgdmFsLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUxID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lMSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMucm91dGluZXMuZ2V0S2V5KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMikudGhlbih2YWwgPT4ge1xuICAgICAgICBpZih0aGlzLnByb2dyYW0gIT0gMiAmJiB2YWwgIT0gbnVsbCAmJiB2YWwubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTIgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUyID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5yb3V0aW5lcy5nZXRLZXkoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUzKS50aGVuKHZhbCA9PiB7XG4gICAgICAgIGlmKHRoaXMucHJvZ3JhbSAhPSAzICYmIHZhbCAhPSBudWxsICYmIHZhbC5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lMyA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTMgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnJvdXRpbmVzLmdldEtleShDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTQpLnRoZW4odmFsID0+IHtcbiAgICAgICAgaWYodGhpcy5wcm9ncmFtICE9IDQgJiYgdmFsICE9IG51bGwgJiYgdmFsLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWU0ID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lNCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5U2Nyb2xsVG9wKS50aGVuKChzY3JvbGwpPT57XG4gICAgICAgICAgdGhpcy5jb250ZW50LnNjcm9sbFRvKDAsIHNjcm9sbCwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MDApO1xuICB9XG5cbiAgc2VsZWN0UHJlU2V0UHJvZ3JhbShjYXRlZ29yeSl7XG4gICAgICB0aGlzLmdldFByb2dyYW1zKGNhdGVnb3J5KTtcbiAgfVxuXG4gIGdldFByb2dyYW1zKGNhdGVnb3J5KXtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5Q3VycmVudFByb2dyYW0sIGNhdGVnb3J5KTtcbiAgICB0aGlzLmJhc2ljQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5idXNpbmVzc1RyYXZlbEJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuZmFtaWxpeUJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuYXRobGV0ZUJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuc3BhQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5zdHJlc3NCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnNlbmlvckJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuY2hha3JhQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5lbGVtZW50c0J1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMucGV0c3NCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnBldHN4QnV0dG9uID0gZmFsc2U7XG4gICAgc3dpdGNoKGNhdGVnb3J5KXtcbiAgICAgIGNhc2UgJ2Jhc2ljJzpcbiAgICAgICAgdGhpcy5iYXNpY0J1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYnVzaW5lc3MgYW5kIHRyYXZlbCc6XG4gICAgICAgIHRoaXMuYnVzaW5lc3NUcmF2ZWxCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZhbWlseSc6XG4gICAgICAgIHRoaXMuZmFtaWxpeUJ1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXRobGV0ZSc6XG4gICAgICAgIHRoaXMuYXRobGV0ZUJ1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3BhJzpcbiAgICAgICAgdGhpcy5zcGFCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmVzcyByZWxpZWYnOlxuICAgICAgICB0aGlzLnN0cmVzc0J1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VuaW9yJzpcbiAgICAgICAgdGhpcy5zZW5pb3JCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoYWtyYSBiYWxhbmNpbmcnOlxuICAgICAgICB0aGlzLmNoYWtyYUJ1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWxlbWVudHMnOlxuICAgICAgICB0aGlzLmVsZW1lbnRzQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwZXRzcyc6XG4gICAgICAgIHRoaXMucGV0c3NCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BldHN4JzpcbiAgICAgICAgdGhpcy5wZXRzeEJ1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZ3JvdXBzID0gW107XG4gICAgdmFyIGdyb3VwSW5kZXggPSAwO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBEYXRhLkdyb3Vwcy5sZW5ndGg7IGkrKyl7XG4gICAgICB2YXIgZ3JvdXAgPSBEYXRhLkdyb3Vwc1tpXTtcbiAgICAgIGlmKGdyb3VwLmNhdGVnb3J5ID09IGNhdGVnb3J5KXtcbiAgICAgICAgZ3JvdXAudGV4dE5hbWUgPSBHZXJtYW5UZXh0c1tncm91cC5uYW1lXTtcbiAgICAgICAgZ3JvdXBzW2dyb3VwSW5kZXhdID0gZ3JvdXA7XG4gICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBncm91cC5wcm9ncmFtcy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgdmFyIHByb2dyYW0gPSBncm91cC5wcm9ncmFtc1tqXTtcbiAgICAgICAgICBncm91cC5wcm9ncmFtc1tqXSA9IHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbShwcm9ncmFtLmFwaU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGdyb3VwSW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcmVkZWZpbmVkUHJvZ3JhbXMgPSBncm91cHM7XG4gIH1cblxuICBhZGRQcm9ncmFtcyhyb3V0aW5lTmFtZSwgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMywgcHJvZ3JhbTQpe1xuICAgIHRoaXMubmF2Q3RybC5wb3AoKTtcbiAgICB2YXIgYnViYmxlTmFtZXMgPSB0aGlzLnJvdXRpbmVzLmFkZFByb2dyYW1zKHJvdXRpbmVOYW1lLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zLCBwcm9ncmFtNCk7XG4gICAgdGhpcy5ldmVudHMucHVibGlzaChcInNoYXJlc0J1YmJsZXNcIiwgYnViYmxlTmFtZXMpO1xuICB9XG5cbiAgYWRkMVByb2dyYW0ocHJvZ3JhbU5hbWUsIHByb2dyYW1SdW5uaW5nVGltZSwgcHJvZ3JhbUFwaU5hbWUpe1xuICAgIHRoaXMucm91dGluZXMuYWRkUHJvZ3JhbVRvUm91dGluZSh0aGlzLnByb2dyYW0sICcnLCBwcm9ncmFtTmFtZSwgcHJvZ3JhbVJ1bm5pbmdUaW1lLCBwcm9ncmFtQXBpTmFtZSk7XG5cbiAgICB0aGlzLnByb2dyYW1OYW1lMSA9IHRoaXMucHJvZ3JhbSA9PSAxID8gcHJvZ3JhbU5hbWUgOiAodGhpcy5wcm9ncmFtTmFtZTEubGVuZ3RoID4gMCA/IHRoaXMucHJvZ3JhbU5hbWUxIDogJycpO1xuICAgIHRoaXMucHJvZ3JhbU5hbWUyID0gdGhpcy5wcm9ncmFtID09IDIgPyBwcm9ncmFtTmFtZSA6ICh0aGlzLnByb2dyYW1OYW1lMi5sZW5ndGggPiAwID8gdGhpcy5wcm9ncmFtTmFtZTIgOiAnJyk7XG4gICAgdGhpcy5wcm9ncmFtTmFtZTMgPSB0aGlzLnByb2dyYW0gPT0gMyA/IHByb2dyYW1OYW1lIDogKHRoaXMucHJvZ3JhbU5hbWUzLmxlbmd0aCA+IDAgPyB0aGlzLnByb2dyYW1OYW1lMyA6ICcnKTtcbiAgICB0aGlzLnByb2dyYW1OYW1lNCA9IHRoaXMucHJvZ3JhbSA9PSA0ID8gcHJvZ3JhbU5hbWUgOiAodGhpcy5wcm9ncmFtTmFtZTQubGVuZ3RoID4gMCA/IHRoaXMucHJvZ3JhbU5hbWU0IDogJycpO1xuXG4gICAgdGhpcy5yb3V0aW5lcy5zZXRQcm9ncmFtcyh0aGlzLnByb2dyYW1OYW1lMSwgdGhpcy5wcm9ncmFtTmFtZTIsIHRoaXMucHJvZ3JhbU5hbWUzLCB0aGlzLnByb2dyYW1OYW1lNCk7XG5cbiAgICB2YXIgYnViYmxlTmFtZXMgPSBbXG4gICAgICB0aGlzLnByb2dyYW1OYW1lMSxcbiAgICAgIHRoaXMucHJvZ3JhbU5hbWUyLFxuICAgICAgdGhpcy5wcm9ncmFtTmFtZTMsXG4gICAgICB0aGlzLnByb2dyYW1OYW1lNFxuICAgIF07XG4gICAgdGhpcy5ldmVudHMucHVibGlzaChcInNoYXJlc0J1YmJsZXNcIiwgYnViYmxlTmFtZXMpO1xuICAgIHRoaXMubmF2Q3RybC5wb3AoKTtcbiAgfVxuXG4gIG1vcmVQcm9ncmFtSW5mbyhuYW1lLCBydW5UaW1lLCBkZXNjcmlwdGlvbiwgYXBpTmFtZSl7XG4gICAgdGhpcy5uYXZDdHJsLnB1c2goUHJvZ3JhbVBhZ2UsIHsgcHJvZ3JhbU51bWJlcjogdGhpcy5wcm9ncmFtLCBuYW1lOiBuYW1lLCBydW5UaW1lOiBydW5UaW1lLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIGFwaU5hbWU6IGFwaU5hbWUgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9wcm9ncmFtcy9wcm9ncmFtcy50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBFdmVudHMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFByb2dyYW1QYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXByb2dyYW0nLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyYW0uaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyYW1QYWdlIHtcbiAgcHVibGljIHByb2dyYW1OYW1lIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbVJ1bm5pbmdUaW1lIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbURlc2NyaXB0aW9uIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbUFwaU5hbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtTnVtYmVyIDogbnVtYmVyO1xuICBwdWJsaWMgcHJvZ3JhbVJlYWxOYW1lIDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlLFxuICAgIHB1YmxpYyBldmVudHM6IEV2ZW50cykge1xuICB9XG4gIGlvblZpZXdEaWRMb2FkKCl7XG4gICAgdGhpcy5wcm9ncmFtUmVhbE5hbWUgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ25hbWUnKTtcbiAgICB2YXIgcHJvZ3JhbVRyYW5zbGF0ZU5hbWUgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ25hbWUnKTtcbiAgICBpZih0aGlzLmlzTmFtZU9uQXJyYXkoQ29uc3RhbnRzLnNob3J0VGl0bGVzLCBwcm9ncmFtVHJhbnNsYXRlTmFtZSkpXG4gICAgICBwcm9ncmFtVHJhbnNsYXRlTmFtZSA9IHByb2dyYW1UcmFuc2xhdGVOYW1lLnJlcGxhY2UoJy11cHBlcicsICctc2hvcnQnKTtcbiAgICB0aGlzLnByb2dyYW1OYW1lID0gdHlwZW9mIEdlcm1hblRleHRzW3Byb2dyYW1UcmFuc2xhdGVOYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBwcm9ncmFtVHJhbnNsYXRlTmFtZSA6IEdlcm1hblRleHRzW3Byb2dyYW1UcmFuc2xhdGVOYW1lXTtcbiAgICB0aGlzLnByb2dyYW1SdW5uaW5nVGltZSA9IHR5cGVvZiBHZXJtYW5UZXh0c1t0aGlzLm5hdlBhcmFtcy5nZXQoJ3J1blRpbWUnKV0gPT09ICd1bmRlZmluZWQnID8gdGhpcy5uYXZQYXJhbXMuZ2V0KCdydW5UaW1lJykgOiBHZXJtYW5UZXh0c1t0aGlzLm5hdlBhcmFtcy5nZXQoJ3J1blRpbWUnKV07XG4gICAgdGhpcy5wcm9ncmFtRGVzY3JpcHRpb24gPSB0eXBlb2YgR2VybWFuVGV4dHNbdGhpcy5uYXZQYXJhbXMuZ2V0KCdkZXNjcmlwdGlvbicpXSA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm5hdlBhcmFtcy5nZXQoJ2Rlc2NyaXB0aW9uJykgOiBHZXJtYW5UZXh0c1t0aGlzLm5hdlBhcmFtcy5nZXQoJ2Rlc2NyaXB0aW9uJyldO1xuICAgIHRoaXMucHJvZ3JhbUFwaU5hbWUgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ2FwaU5hbWUnKTtcbiAgICB0aGlzLnByb2dyYW1OdW1iZXIgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ3Byb2dyYW1OdW1iZXInKTtcbiAgfVxuXG4gIGFkZDFQcm9ncmFtKHByb2dyYW1OYW1lLCBwcm9ncmFtUnVubmluZ1RpbWUsIHByb2dyYW1BcGlOYW1lKXtcbiAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKFwiYWRkMVByb2dyYW1FdmVudFwiLCB0aGlzLnByb2dyYW1OdW1iZXIsIHRoaXMucHJvZ3JhbVJlYWxOYW1lLCB0aGlzLnByb2dyYW1SdW5uaW5nVGltZSwgdGhpcy5wcm9ncmFtQXBpTmFtZSk7XG4gIH1cblxuICBpc05hbWVPbkFycmF5KG5hbWVzLCBuYW1lKXtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspe1xuICAgICAgaWYobmFtZXNbaV0gPT0gbmFtZSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9wcm9ncmFtL3Byb2dyYW0udHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBQbGF0Zm9ybSAgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGxheWluZ1BhZ2UgfSBmcm9tICcuLi9wbGF5aW5nL3BsYXlpbmcnO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XHJcbmltcG9ydCB7IE5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmstaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBXaWZpUGFnZSBwYWdlLlxyXG4gKlxyXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cclxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXHJcbiAqL1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYWdlLXdpZmknLFxyXG4gIHRlbXBsYXRlVXJsOiAnd2lmaS5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZmlQYWdlIHtcclxuICBwdWJsaWMgdGVzdEJlZ2luUm91dGluZUludGVydmFsIDogYW55O1xyXG4gIHB1YmxpYyB0ZXN0SVBJbnRlcnZhbCA6IGFueTtcclxuICBwdWJsaWMgdGVzdFN0YXR1c0ludGVydmFsIDogYW55O1xyXG4gIHB1YmxpYyBpbnRlcnZhbENvdW50IDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbXltYXRTdGF0dXMgOiBib29sZWFuO1xyXG4gIHB1YmxpYyBteW1hdFdpZmkgOiBib29sZWFuO1xyXG4gIHB1YmxpYyBteW1hdE5vU3RhdHVzIDogYm9vbGVhbjtcclxuICBwdWJsaWMgYmF0dGVyeUNoYXJnZSA6IHN0cmluZztcclxuICBwdWJsaWMgYmF0dGVyeUltZyA6IHN0cmluZztcclxuICBwdWJsaWMgY29pbFRleHQgOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvaWxUZXh0MSA6IHN0cmluZztcclxuICBwdWJsaWMgY29pbFRleHQyIDogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb2lsVGV4dDMgOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvaWxUZXh0NCA6IHN0cmluZztcclxuICBwdWJsaWMgc2hvd1N0YXR1c1RhYmxlIDogYm9vbGVhbjtcclxuICBwdWJsaWMgc2hvd0xvYWRpbmcgOiBib29sZWFuO1xyXG4gIHB1YmxpYyBpc1J1blJvdXRpbmVFbmFibGVkIDogYm9vbGVhbjtcclxuICBwcml2YXRlIHByb2dyYW0xOiBhbnk7XHJcbiAgcHJpdmF0ZSBwcm9ncmFtMjogYW55O1xyXG4gIHByaXZhdGUgcHJvZ3JhbTM6IGFueTtcclxuICBwcml2YXRlIHByb2dyYW00OiBhbnk7XHJcblxyXG4gIHB1YmxpYyBpZnJhbWVVcmw6IGFueTtcclxuICBwdWJsaWMgc2hvd0lmcmFtZVN0YXR1cyA6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIGFwaVNlcnZpY2UgOiBBUElTZXJ2aWNlUHJvdmlkZXIsXHJcbiAgICAgIHB1YmxpYyBuZXR3b3JrSW50ZXJmYWNlIDogTmV0d29ya0ludGVyZmFjZSwgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xyXG4gICAgICB0aGlzLmNvaWxUZXh0ID0gdHlwZW9mIEdlcm1hblRleHRzWydjb2lsJ10gPT09ICd1bmRlZmluZWQnID8gJ0FudGVuYScgOiBHZXJtYW5UZXh0c1snY29pbCddO1xyXG4gICAgICB0aGlzLnByb2dyYW0xID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdwcm9nMScpO1xyXG4gICAgICB0aGlzLnByb2dyYW0yID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdwcm9nMicpO1xyXG4gICAgICB0aGlzLnByb2dyYW0zID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdwcm9nMycpO1xyXG4gICAgICB0aGlzLnByb2dyYW00ID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdwcm9nNCcpO1xyXG4gIH1cclxuXHJcbiAgaW9uVmlld0RpZExlYXZlKCl7XHJcbiAgICB0aGlzLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIGlvblZpZXdEaWRMb2FkKCkge1xyXG4gICAgdGhpcy5teW1hdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93SWZyYW1lU3RhdHVzID0gZmFsc2U7XHJcbiAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IHRydWU7XHJcbiAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xyXG4gICAgICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UuZ2V0V2lGaUlQQWRkcmVzcygpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgIGlmKHRoaXMudmVyaWZ5SW50ZXJuYWxJcEFkZHJlc3MocmVzcG9uc2UpKXtcclxuICAgICAgICAgIHRoaXMudmVyaWZ5U3RhdHVzVmFsdWVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgIH0sKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdGhpcy52ZXJpZnlTdGF0dXNWYWx1ZXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMubXltYXRXaWZpID0gdHJ1ZTtcclxuICAgIHRoaXMuaW50ZXJ2YWxDb3VudCA9IDA7XHJcbiAgfVxyXG5cclxuICB2ZXJpZnlJbnRlcm5hbElwQWRkcmVzcyhpcCl7XHJcbiAgICBmb3IobGV0IGkgPSAxMDA7IGkgPCAyNTY7IGkrKyl7XHJcbiAgICAgIGlmKENvbnN0YW50cy5sb2NhbElQQWRkcmVzcyArIGkgPT0gaXApe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB2ZXJpZnlTdGF0dXNWYWx1ZXMocmVzdGFydCA9IHRydWUpe1xyXG4gICAgLy90aGlzLm15bWF0U3RhdHVzID0gdHJ1ZTtcclxuICAgIC8vdGhpcy5zaG93U3RhdHVzVGFibGUgPSB0cnVlO1xyXG5cclxuICAgIGlmKHJlc3RhcnQpe1xyXG4gICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iMTAwLnBuJztcclxuICAgICAgdGhpcy5jb2lsVGV4dDEgPSAnTi9BJztcclxuICAgICAgdGhpcy5jb2lsVGV4dDIgPSAnTi9BJztcclxuICAgICAgdGhpcy5jb2lsVGV4dDMgPSAnTi9BJztcclxuICAgICAgdGhpcy5jb2lsVGV4dDQgPSAnTi9BJztcclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMubXltYXRXaWZpID0gZmFsc2U7XHJcbiAgICAvL3RoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0SVBJbnRlcnZhbCk7XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgbXltYXQgaXMgY29ubmVjdGVkXHJcbiAgICB2YXIgbXlNYXRUZXN0ID0gdGhpcy5hcGlTZXJ2aWNlLnRlc3QoKTtcclxuICAgIG15TWF0VGVzdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAvLyBpZiBpcyBjb25uZWN0ZWQgcXVpdGFyIGltYWdlbiwgdGV4dG9zIHkgbG9hZGluZyB5IHBvbmVyIHN0YXR1cyBkZWwgbWF0XHJcbiAgICAgIGlmKHRoaXMudmVyaWZ5VmFsdWVzKHJlc3BvbnNlKSl7XHJcbiAgICAgICAgdGhpcy5zaG93U3RhdHVzKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICB0aGlzLmZhaWxJUFZlcmlmaWNhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9LCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd05vU3RhdHVzKCl7XHJcbiAgICAgIHRoaXMubXltYXROb1N0YXR1cyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzaG93U3RhdHVzKCl7XHJcbiAgICAgIHRoaXMubXltYXRXaWZpID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubXltYXRTdGF0dXMgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RTdGF0dXNJbnRlcnZhbCk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0SVBJbnRlcnZhbCk7XHJcblxyXG4gICAgICB0aGlzLnRlc3RJUEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmV0d29ya0ludGVyZmFjZS5nZXRXaUZpSVBBZGRyZXNzKCkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMudmVyaWZ5SW50ZXJuYWxJcEFkZHJlc3MocmVzcG9uc2UpKXtcclxuICAgICAgICAgICAgICB0aGlzLnZlcmlmeVN0YXR1c1ZhbHVlcyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICB0aGlzLm15bWF0V2lmaSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgIHRoaXMubXltYXRXaWZpID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICB2ZXJpZnlWYWx1ZXMocmVzcG9uc2Upe1xyXG4gICAgaWYocmVzcG9uc2UuaW5kZXhPZihcIjxwPjxoND5Qb3dlcjogXCIpID4gLTEpe1xyXG4gICAgICB2YXIgcG93ZXIgPSByZXNwb25zZS5zcGxpdChcIjxwPjxoND5Qb3dlcjogXCIpO1xyXG4gICAgICBwb3dlciA9IHBvd2VyWzFdLnNwbGl0KFwiPC9oND48L3A+XCIpO1xyXG4gICAgICB2YXIgY29pbDEgPSByZXNwb25zZS5zcGxpdChcIjx0cj48dGQ+MS48L3RkPjx0ZD5cIik7XHJcbiAgICAgIGNvaWwxID0gY29pbDFbMl0uc3BsaXQoXCI8L3RkPjwvdHI+XCIpO1xyXG4gICAgICB2YXIgY29pbDIgPSByZXNwb25zZS5zcGxpdChcIjx0cj48dGQ+Mi48L3RkPjx0ZD5cIik7XHJcbiAgICAgIGNvaWwyID0gY29pbDJbMl0uc3BsaXQoXCI8L3RkPjwvdHI+XCIpO1xyXG4gICAgICB2YXIgY29pbDMgPSByZXNwb25zZS5zcGxpdChcIjx0cj48dGQ+My48L3RkPjx0ZD5cIik7XHJcbiAgICAgIGNvaWwzID0gY29pbDNbMl0uc3BsaXQoXCI8L3RkPjwvdHI+XCIpO1xyXG4gICAgICB2YXIgY29pbDQgPSByZXNwb25zZS5zcGxpdChcIjx0cj48dGQ+NC48L3RkPjx0ZD5cIik7XHJcbiAgICAgIGNvaWw0ID0gY29pbDRbMl0uc3BsaXQoXCI8L3RkPjwvdHI+XCIpO1xyXG4gICAgICB0aGlzLmJhdHRlcnlDaGFyZ2UgPSBwb3dlclswXTtcclxuICAgICAgdmFyIHBvd2VyVmFsID0gcG93ZXJbMF0uc3Vic3RyKDAscG93ZXJbMF0ubGVuZ3RoLTEpO1xyXG4gICAgICBpZihwb3dlclZhbCA+IDc1KVxyXG4gICAgICAgICAgdGhpcy5iYXR0ZXJ5SW1nID0gJ2Fzc2V0cy9pbWcvYjEwMC5wbmcnO1xyXG4gICAgICBlbHNlIGlmKHBvd2VyVmFsID4gNTApXHJcbiAgICAgICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iNzUucG5nJztcclxuICAgICAgZWxzZSBpZihwb3dlclZhbCA+IDI1KVxyXG4gICAgICAgICAgdGhpcy5iYXR0ZXJ5SW1nID0gJ2Fzc2V0cy9pbWcvYjUwLnBuZyc7XHJcbiAgICAgIGVsc2UgaWYocG93ZXJWYWwgPiAxMClcclxuICAgICAgICAgIHRoaXMuYmF0dGVyeUltZyA9ICdhc3NldHMvaW1nL2IyNS5wbmcnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iMTAucG5nJztcclxuXHJcbiAgICAgIHRoaXMuY29pbFRleHQxID0gY29pbDFbMF07XHJcbiAgICAgIHRoaXMuY29pbFRleHQyID0gY29pbDJbMF07XHJcbiAgICAgIHRoaXMuY29pbFRleHQzID0gY29pbDNbMF07XHJcbiAgICAgIHRoaXMuY29pbFRleHQ0ID0gY29pbDRbMF07XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmYWlsSVBWZXJpZmljYXRpb24oKXtcclxuICAgICAgdGhpcy50ZXN0SVBJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UuZ2V0V2lGaUlQQWRkcmVzcygpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLnZlcmlmeUludGVybmFsSXBBZGRyZXNzKHJlc3BvbnNlKSl7XHJcbiAgICAgICAgICAgICAgdGhpcy52ZXJpZnlTdGF0dXNWYWx1ZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sIDMwMDApO1xyXG4gIH1cclxuXHJcbiAgLypmYWlsU3RhdHVzVmVyaWZpY2F0aW9uKCl7XHJcbiAgICB0aGlzLnRlc3RTdGF0dXNJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gdGltZW91dCBvZiBteW1hdCBkZXRlY3Rpb24gMTgwIHNlZ3VuZG9zXHJcbiAgICAgIHZhciBmYWlsTXlNYXRUZXN0ID0gdGhpcy5hcGlTZXJ2aWNlLnRlc3QoKTtcclxuICAgICAgZmFpbE15TWF0VGVzdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMudmVyaWZ5VmFsdWVzKHJlc3BvbnNlKSl7XHJcbiAgICAgICAgICB0aGlzLnNob3dTdGF0dXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuaW50ZXJ2YWxDb3VudCA+PSA1KXtcclxuICAgICAgICAgIHRoaXMuc2hvd05vU3RhdHVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuaW50ZXJ2YWxDb3VudCArPSAxO1xyXG4gICAgfSwgMzAwMCk7XHJcblxyXG4gICAgLyp2YXIgcHJvZ3JhbXMgPSAnJztcclxuXHJcbiAgICBmb3IodmFyIGkgPSAxOyBpIDw9IDQ7IGkrKyl7XHJcbiAgICAgIHN3aXRjaChpKXtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMSkudGhlbigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2dyYW1zICs9IFwiP1AxPVwiICsgdmFsLnNwbGl0KFwifFwiKVszXSArICcmJztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTIpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgIDg1OF1cclxuICAgICAgICBwcm9ncmFtcyArPSBcIlAyPVwiICsgdmFsLnNwbGl0KFwifFwiKVszXSArICcmJztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTMpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9ncmFtcyArPSBcIlAzPVwiICsgdmFsLnNwbGl0KFwifFwiKVszXSArICcmJztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTQpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9ncmFtcyArPSBcIlA0PVwiICsgdmFsLnNwbGl0KFwifFwiKVszXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0lmcmFtZVN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubXltYXRXaWZpID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXltYXRTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlmcmFtZVVybCA9IHRoaXMuc2FuaXRpemUuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKENvbnN0YW50cy5teU1hdEFwaUluZGV4VXJsICsgcHJvZ3JhbXMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSogL1xyXG4gIH0qL1xyXG5cclxuICBzdGFydFJvdXRpbmUoKXtcclxuICAgIC8qIEFOVEVTIERFIENPQ1JSRVIgUlVUSU5BIFZFUklGSUNBUiBTSSBTRSBFU1RBIENPTkVDVEFETyBBTCBXSUZJIERFTCBNWU1BVCAqL1xyXG4gICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmlzUnVuUm91dGluZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYXBpU2VydmljZS50ZXN0KCkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy52ZXJpZnlWYWx1ZXMocmVzcG9uc2UpKXtcclxuICAgICAgICAgIC8qIENPUlJFUiBSVVRJTkEgKi9cclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0U3RhdHVzSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RJUEludGVydmFsKTtcclxuICAgICAgICAgIHZhciBwcm9ncmFtMU9iaiA9ICd8JyArIHRoaXMucHJvZ3JhbTEubmFtZSArICd8JyArIHRoaXMucHJvZ3JhbTEucnVubmluZ3RpbWUgKyAnfCcgKyB0aGlzLnByb2dyYW0xLmFwaU5hbWU7XHJcbiAgICAgICAgICB2YXIgcHJvZ3JhbTJPYmogPSAnfCcgKyB0aGlzLnByb2dyYW0yLm5hbWUgKyAnfCcgKyB0aGlzLnByb2dyYW0yLnJ1bm5pbmd0aW1lICsgJ3wnICsgdGhpcy5wcm9ncmFtMi5hcGlOYW1lO1xyXG4gICAgICAgICAgdmFyIHByb2dyYW0zT2JqID0gJ3wnICsgdGhpcy5wcm9ncmFtMy5uYW1lICsgJ3wnICsgdGhpcy5wcm9ncmFtMy5ydW5uaW5ndGltZSArICd8JyArIHRoaXMucHJvZ3JhbTMuYXBpTmFtZTtcclxuICAgICAgICAgIHZhciBwcm9ncmFtNE9iaiA9ICd8JyArIHRoaXMucHJvZ3JhbTQubmFtZSArICd8JyArIHRoaXMucHJvZ3JhbTQucnVubmluZ3RpbWUgKyAnfCcgKyB0aGlzLnByb2dyYW00LmFwaU5hbWU7XHJcblxyXG4gICAgICAgICAgdmFyIHByb2dyYW1zID0gW1xyXG4gICAgICAgICAgICAgIHByb2dyYW0xT2JqLFxyXG4gICAgICAgICAgICAgIHByb2dyYW0yT2JqLFxyXG4gICAgICAgICAgICAgIHByb2dyYW0zT2JqLFxyXG4gICAgICAgICAgICAgIHByb2dyYW00T2JqXHJcbiAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5zdGFydChwcm9ncmFtcykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UgKyAnJyk7XHJcbiAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAvKnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHZhciBlbWFpbERhdGEgPSB7IGVycm9yIDogcmVzcG9uc2UuZGF0YSB9O1xyXG4gICAgICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5zZW5kRXJyb3IoZW1haWxEYXRhKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAxMjAwMDApOyovXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyBQb25lciBydXRpbmEgZW4gbGFzIHVsdGltYXMgY29ycmlkYXNcclxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLmxhdGVzdFJvdXRpbmVzS2V5KS50aGVuKChyb3V0aW5lcyk9PntcclxuICAgICAgICAgICAgbGV0IGxhdGVzdEFycmF5ID0gW107XHJcblxyXG4gICAgICAgICAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF5ID0gdC5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBtb250aEluZGV4ID0gdC5nZXRNb250aCgpO1xyXG4gICAgICAgICAgICB2YXIgeWVhciA9IHQuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgdmFyIGhvdXJzID0gdC5nZXRIb3VycygpO1xyXG4gICAgICAgICAgICB2YXIgbWludXRlcyA9IHQuZ2V0TWludXRlcygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb2dyYW1zQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2dyYW1zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICBwcm9ncmFtc0FycmF5LnB1c2goeyBcImFwaU5hbWVcIiA6IHByb2dyYW1zW2ldLnNwbGl0KCd8JylbM10sIFwibmFtZVwiIDogR2VybWFuVGV4dHNbcHJvZ3JhbXNbaV0uc3BsaXQoJ3wnKVsxXV0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhdGVzdEFycmF5LnB1c2goeyBcImRheVwiIDogZGF5LCBcIm1vbnRoXCIgOiBHZXJtYW5UZXh0c1tDb25zdGFudHMubW9udGhOYW1lc1ttb250aEluZGV4XV0sIFwieWVhclwiIDogeWVhciwgXCJob3Vyc1wiIDogdGhpcy5maXhaZXJvT25OdW1iZXIoaG91cnMpLCBcIm1pbnV0ZXNcIiA6IHRoaXMuZml4WmVyb09uTnVtYmVyKG1pbnV0ZXMpLCBcInByb2dyYW1zXCIgOiBwcm9ncmFtc0FycmF5IH0pO1xyXG4gICAgICAgICAgICBpZihyb3V0aW5lcyAhPSBudWxsICYmIHJvdXRpbmVzWzBdICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgIGxhdGVzdEFycmF5LnB1c2gocm91dGluZXNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHJvdXRpbmVzICE9IG51bGwgJiYgcm91dGluZXNbMV0gIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgbGF0ZXN0QXJyYXkucHVzaChyb3V0aW5lc1sxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMubGF0ZXN0Um91dGluZXNLZXksIGxhdGVzdEFycmF5KTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8qIENPUlJFUiBSVVRJTkEgKi9cclxuICAgICAgICAgIHRoaXMubmF2Q3RybC5zZXRSb290KFBsYXlpbmdQYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLm15bWF0V2lmaSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLm15bWF0U3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmZhaWxJUFZlcmlmaWNhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwocmVzcG9uc2UpPT57XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5teW1hdFdpZmkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubXltYXRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXhaZXJvT25OdW1iZXIodmFsKXtcclxuICAgIGlmKHZhbCA8IDEwKXtcclxuICAgICAgcmV0dXJuICcwJyArIHZhbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBzdG9wKCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMudGVzdFN0YXR1c0ludGVydmFsKTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0SVBJbnRlcnZhbCk7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3dpZmkvd2lmaS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgR2VybWFuVGV4dHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nZXJtYW4tdGV4dHMnO1xuaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9sb2NhbC1ub3RpZmljYXRpb25zJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgUGxheWluZ1BhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtcGxheWluZycsXG4gIHRlbXBsYXRlVXJsOiAncGxheWluZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGxheWluZ1BhZ2Uge1xuICBwdWJsaWMgcHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nQXNUaW1lIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtVGl0bGUxIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbVRpdGxlMiA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1UaXRsZTMgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtVGl0bGU0IDogc3RyaW5nO1xuICBwdWJsaWMgZGlzcGxheVJ1bm5pbmdUaW1lIDogc3RyaW5nO1xuICBwdWJsaWMgZmluaXNoVGltZSA6IGFueTtcbiAgcHVibGljIHRpbWVyUmVtYWluIDogYW55O1xuICBwdWJsaWMgdGltZXJJZCA6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwdWJsaWMgc3RvcmFnZTogU3RvcmFnZSxcbiAgICBwcml2YXRlIGxvY2FsTm90aWZpY2F0aW9ucyA6IExvY2FsTm90aWZpY2F0aW9ucywgcHVibGljIHBsdDogUGxhdGZvcm0sIHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzdW1lJywgKCkgPT4ge1xuICAgICAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIF90aGlzLnJlc3VtZSh0LmdldFRpbWUoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNpbXVsYXRlUmVzdW1lKCl7XG4gICAgdmFyIHQgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMucmVzdW1lKHQuZ2V0VGltZSgpICsgMTApO1xuICB9XG5cbiAgcmVzdW1lKG5vdyl7XG4gICAgaWYoTWF0aC5yb3VuZChub3cgLyAxMDAwKSA+IHRoaXMuZmluaXNoVGltZSl7XG4gICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9ICcwMDowMCc7XG4gICAgICB0aGlzLnRpbWVyUmVtYWluID0gMDtcbiAgICAgIHRoaXMudGltZXJJZCsrO1xuICAgICAgdGhpcy5zdGFydFRpbWVyKHRoaXMudGltZXJJZCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB2YXIgc2Vjb25kc0xlZnQgPSB0aGlzLnRpbWVyUmVtYWluID0gdGhpcy5maW5pc2hUaW1lIC0gTWF0aC5yb3VuZChub3cgLyAxMDAwKTtcbiAgICAgIHRoaXMudGltZXJJZCsrO1xuICAgICAgdGhpcy5zdGFydFRpbWVyKHRoaXMudGltZXJJZCk7XG4gICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9IHRoaXMuY29udmVydFNlY29uZHNUb1RpbWUoc2Vjb25kc0xlZnQpO1xuICAgIH1cbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHZhciBwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZztcbiAgICB2YXIgcHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmc7XG4gICAgdmFyIHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nO1xuICAgIHZhciBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZztcbiAgICBmb3IodmFyIGkgPSAxOyBpIDw9IDQ7IGkrKyl7XG4gICAgICBzd2l0Y2goaSl7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMSkudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWwuc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgPSB2YWx1ZVsyXTsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHZhbHVlWzJdKTtcbiAgICAgICAgICAgIHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nID0gdmFsdWVbMl07XG4gICAgICAgICAgICB0aGlzLnByb2dyYW1UaXRsZTEgPSB0eXBlb2YgR2VybWFuVGV4dHNbdmFsdWVbMV1dID09PSAndW5kZWZpbmVkJyA/IHZhbHVlWzFdIDogR2VybWFuVGV4dHNbdmFsdWVbMV1dO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTIpLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsLnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nQXNUaW1lID0gdmFsdWVbMl07IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZSh2YWx1ZVsyXSk7XG4gICAgICAgICAgICBwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZyA9IHZhbHVlWzJdO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtVGl0bGUyID0gdHlwZW9mIEdlcm1hblRleHRzW3ZhbHVlWzFdXSA9PT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZVsxXSA6IEdlcm1hblRleHRzW3ZhbHVlWzFdXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUzKS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbC5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA9IHZhbHVlWzJdOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUodmFsdWVbMl0pO1xuICAgICAgICAgICAgcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcgPSB2YWx1ZVsyXTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbVRpdGxlMyA9IHR5cGVvZiBHZXJtYW5UZXh0c1t2YWx1ZVsxXV0gPT09ICd1bmRlZmluZWQnID8gdmFsdWVbMV0gOiBHZXJtYW5UZXh0c1t2YWx1ZVsxXV07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlNCkudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWwuc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgPSB2YWx1ZVsyXTsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHZhbHVlWzJdKTtcbiAgICAgICAgICAgIHByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nID0gdmFsdWVbMl07XG4gICAgICAgICAgICB0aGlzLnByb2dyYW1UaXRsZTQgPSB0eXBlb2YgR2VybWFuVGV4dHNbdmFsdWVbMV1dID09PSAndW5kZWZpbmVkJyA/IHZhbHVlWzFdIDogR2VybWFuVGV4dHNbdmFsdWVbMV1dO1xuXG4gICAgICAgICAgICBpZihwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZyA+IHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nICYmIHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nID4gcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcgJiYgcHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmcgPiBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZylcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9IHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUocHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmcpO1xuICAgICAgICAgICAgZWxzZSBpZihwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZyA+IHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nICYmIHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nID4gcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPSBwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZzsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nKTtcbiAgICAgICAgICAgIGVsc2UgaWYocHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcgPiBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZylcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9IHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUocHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmc7IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZShwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZyk7XG5cbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gdGhpcy5kaXNwbGF5UnVubmluZ1RpbWU7XG4gICAgICAgICAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaFRpbWUgPSBNYXRoLnJvdW5kKHQuZ2V0VGltZSgpIC8gMTAwMCkgKyB0aGlzLmdldFNlY29uZHModGhpcy5kaXNwbGF5UnVubmluZ1RpbWUpO1xuXG4gICAgICAgICAgICB0aGlzLnRpbWVyUmVtYWluID0gdGhpcy5nZXRTZWNvbmRzKHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IDE7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy50aW1lcklkKTtcblxuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZSh7XG4gICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTXlNYXQgTGlnaHQnLFxuICAgICAgICAgICAgICAgICAgdGV4dDogR2VybWFuVGV4dHNbJ3RpbWUtZXhwaXJlLXRleHQnXSxcbiAgICAgICAgICAgICAgICAgIHNvdW5kOiAnZmlsZTovL2Fzc2V0cy9zb3VuZHMvJyArICh0aGlzLnBsdC5pcygnaW9zJykgPyAnZ29uZ19jNS5tNHInIDogJ2dvbmdfYzUubXAzJyksXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB7IGF0OiBuZXcgRGF0ZSh0LmdldFRpbWUoKSArIHRoaXMuZ2V0U2Vjb25kcyh0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSkgKiAxMDAwKSB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5vbihcImNsaWNrXCIpLnN1YnNjcmliZSh7IG5leHQobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3RpZmljYXRpb24uaWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5yZXN1bWUodC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uVmlld1dpbGxMZWF2ZSgpIHtcbiAgICB0aGlzLnRpbWVyUmVtYWluID0gMDtcbiAgfVxuXG4gIHN0YXJ0VGltZXIoaWQpe1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYodGhpcy50aW1lclJlbWFpbiA9PSAwIHx8IHRoaXMudGltZXJJZCAhPSBpZCkgeyByZXR1cm47IH1cblxuICAgICAgdGhpcy50aW1lclJlbWFpbi0tO1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gdGhpcy5kZWNyZWFzZVNlY29uZCh0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy50aW1lclJlbWFpbiA+IDApe1xuICAgICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy50aW1lcklkKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGRlY3JlYXNlU2Vjb25kKHRpbWUpe1xuICAgIHZhciBtaW51dGVzU3RyID0gdGltZS5zdWJzdHIoMCx0aW1lLmluZGV4T2YoJzonKSk7XG4gICAgdmFyIG1pbnV0ZXMgPSBtaW51dGVzU3RyWzBdID09ICcwJyA/IHBhcnNlSW50KG1pbnV0ZXNTdHJbMV0pIDogcGFyc2VJbnQobWludXRlc1N0cik7XG4gICAgdmFyIHNlY29uZHNTdHIgPSB0aW1lLnN1YnN0cih0aW1lLmluZGV4T2YoJzonKSArIDEpO1xuICAgIHZhciBzZWNvbmRzID0gc2Vjb25kc1N0clswXSA9PSAnMCcgPyBwYXJzZUludChzZWNvbmRzU3RyWzFdKSA6IHBhcnNlSW50KHNlY29uZHNTdHIpO1xuICAgIGlmKHNlY29uZHMgLSAxID09IC0xKXtcbiAgICAgIG1pbnV0ZXNTdHIgPSBtaW51dGVzIC0gMSA8IDEwICYmIG1pbnV0ZXMgLSAxID49IDAgPyAnMCcgKyAobWludXRlcyAtIDEpIDogbWludXRlcyAtIDEgPT0gLTEgPyAnMDAnIDogJycgKyAobWludXRlcyAtIDEpO1xuICAgICAgc2Vjb25kc1N0ciA9ICc1OSc7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBzZWNvbmRzU3RyID0gc2Vjb25kcyAtIDEgPCAxMCA/ICcwJyArIChzZWNvbmRzIC0gMSkgOiAnJyArIChzZWNvbmRzIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiBtaW51dGVzU3RyICsgJzonICsgc2Vjb25kc1N0cjtcbiAgfVxuXG4gIGdldFNlY29uZHModGltZSl7XG4gICAgdmFyIG1pbnV0ZXNTdHIgPSB0aW1lLnN1YnN0cigwLHRpbWUuaW5kZXhPZignOicpKTtcbiAgICB2YXIgbWludXRlcyA9IG1pbnV0ZXNTdHJbMF0gPT0gJzAnID8gcGFyc2VJbnQobWludXRlc1N0clsxXSkgOiBwYXJzZUludChtaW51dGVzU3RyKTtcbiAgICB2YXIgc2Vjb25kc1N0ciA9IHRpbWUuc3Vic3RyKHRpbWUuaW5kZXhPZignOicpICsgMSk7XG4gICAgdmFyIHNlY29uZHMgPSBzZWNvbmRzU3RyWzBdID09ICcwJyA/IHBhcnNlSW50KHNlY29uZHNTdHJbMV0pIDogcGFyc2VJbnQoc2Vjb25kc1N0cik7XG4gICAgcmV0dXJuIChtaW51dGVzICogNjApICsgc2Vjb25kcztcbiAgfVxuXG4gIGNvbnZlcnRTZWNvbmRzVG9UaW1lKHRpbWVJblNlY29uZHMpIHtcbiAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IodGltZUluU2Vjb25kcyAvIDYwKTtcbiAgICB2YXIgbWludXRlc1N0ciA9IFwiMFwiICsgbWludXRlcztcbiAgICB2YXIgc2Vjb25kcyA9IFwiMFwiICsgKHRpbWVJblNlY29uZHMgLSBtaW51dGVzICogNjApO1xuICAgIHJldHVybiBtaW51dGVzU3RyLnN1YnN0cigtMikgKyBcIjpcIiArIHNlY29uZHMuc3Vic3RyKC0yKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3BsYXlpbmcvcGxheWluZy50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgSGVscFBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaGVscCcsXG4gIHRlbXBsYXRlVXJsOiAnaGVscC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSGVscFBhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMpIHtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBIZWxwUGFnZScpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9oZWxwL2hlbHAudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgRXZlbnRzIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEdlcm1hblRleHRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2VybWFuLXRleHRzJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBDb250YWN0UGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1jb250YWN0JyxcbiAgdGVtcGxhdGVVcmw6ICdjb250YWN0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0UGFnZSB7XG4gIHByaXZhdGUgY29udGFjdEZvcm0gOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBjb250YWN0RGlzYWJsZWQgOiBib29sZWFuO1xuICBwdWJsaWMgIG5hbWVfdmFsdWUgOiBzdHJpbmc7XG4gIHB1YmxpYyAgZW1haWxfdmFsdWUgOiBzdHJpbmc7XG4gIHB1YmxpYyAgbWVzc2FnZV92YWx1ZSA6IHN0cmluZztcbiAgcHVibGljIGJ1dHRvbl9zZW5kIDogc3RyaW5nO1xuICBwdWJsaWMgcmVzcG9uc2VfdGV4dCA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIGFwaVNlcnZpY2UgOiBBUElTZXJ2aWNlUHJvdmlkZXIsXG4gICAgcHVibGljIGV2ZW50cyA6IEV2ZW50cykge1xuICAgIHRoaXMuY29udGFjdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIG1lc3NhZ2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuY2xlYW5Gb3JtKCk7XG4gICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gJyc7XG4gICAgdGhpcy5jaGFuZ2VCdXR0b25UZXh0KCk7XG4gIH1cblxuICBjaGFuZ2VCdXR0b25UZXh0KCl7XG4gICAgICB0aGlzLmJ1dHRvbl9zZW5kID0gR2VybWFuVGV4dHNbJ3NlbmQtdGV4dCddO1xuICAgICAgLy8gTW9zdHJhciB0ZXh0byBlbiBsYWJlbCBkZWJham8gZGVsIGJvdG9uXG4gIH1cblxuICBjbGVhbkZvcm0oKXtcbiAgICB0aGlzLmNvbnRhY3REaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5uYW1lX3ZhbHVlID0gJyc7XG4gICAgdGhpcy5lbWFpbF92YWx1ZSA9ICcnO1xuICAgIHRoaXMubWVzc2FnZV92YWx1ZSA9ICcnO1xuICB9XG5cbiAgYXR0ZW1wdFNlbmRNYWlsKCl7XG4gICAgdmFyIGVtYWlsRGF0YSA9IHsgZW1haWwgOiB0aGlzLmNvbnRhY3RGb3JtLnZhbHVlLmVtYWlsLCBuYW1lIDogdGhpcy5jb250YWN0Rm9ybS52YWx1ZS5uYW1lLCBtZXNzYWdlIDogdGhpcy5jb250YWN0Rm9ybS52YWx1ZS5tZXNzYWdlIH07XG4gICAgdGhpcy5hcGlTZXJ2aWNlLnJ1blBvc3QoJ2NvbnRhY3RfdXMucGhwJyxlbWFpbERhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB2YXIgb2JqIDogYW55ID0gcmVzdWx0O1xuICAgICAgICBpZiAob2JqLnN0YXR1cyA9PSBcIm9rXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9IEdlcm1hblRleHRzWydlbWFpbC1zdWNjZXNzLW1lc3NhZ2UnXTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uX3NlbmQgPSBHZXJtYW5UZXh0c1snc2VudC10ZXh0J107XG4gICAgICAgICAgICB0aGlzLmNsZWFuRm9ybSgpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSBHZXJtYW5UZXh0c1snZW1haWwtZXJyb3ItbWVzc2FnZSddO1xuICAgICAgICB9XG4gICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9IEdlcm1hblRleHRzWydlbWFpbC1lcnJvci1tZXNzYWdlJ107XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9jb250YWN0L2NvbnRhY3QudHMiLCJpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi50cyIsImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcbmltcG9ydCB7IElvbmljQXBwLCBJb25pY0Vycm9ySGFuZGxlciwgSW9uaWNNb2R1bGUgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnOyAvLyBzb2xvIHNlIHVzYSBwYXJhIGhhY2VyIGxhIHBydWViYSBkZSBjb25leGlvbiBjb24gZWwgTXlNYXRcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaHR0cCc7XHJcbmltcG9ydCB7IE5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmstaW50ZXJmYWNlJztcclxuLy9pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcclxuaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9sb2NhbC1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGF0ZS1waWNrZXInO1xyXG5cclxuaW1wb3J0IHsgTXlBcHAgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2hvbWUvaG9tZSc7XHJcbmltcG9ydCB7IEhlbHBQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaGVscC9oZWxwJztcclxuaW1wb3J0IHsgQ29udGFjdFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9jb250YWN0L2NvbnRhY3QnO1xyXG5pbXBvcnQgeyBQcm9ncmFtc1BhZ2UgfSBmcm9tICcuLi9wYWdlcy9wcm9ncmFtcy9wcm9ncmFtcyc7XHJcbmltcG9ydCB7IFdpZmlQYWdlIH0gZnJvbSAnLi4vcGFnZXMvd2lmaS93aWZpJztcclxuaW1wb3J0IHsgUGxheWluZ1BhZ2UgfSBmcm9tICcuLi9wYWdlcy9wbGF5aW5nL3BsYXlpbmcnO1xyXG5pbXBvcnQgeyBQcm9ncmFtUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3Byb2dyYW0vcHJvZ3JhbSc7XHJcbmltcG9ydCB7IFN1YnNjcmliZVBhZ2UgfSBmcm9tICcuLi9wYWdlcy9zdWJzY3JpYmUvc3Vic2NyaWJlJztcclxuaW1wb3J0IHsgU2xpZGVyUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3NsaWRlci9zbGlkZXInO1xyXG5pbXBvcnQgeyBGYXZvcml0ZXNQYWdlIH0gZnJvbSAnLi4vcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcyc7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXInO1xyXG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4nO1xyXG5pbXBvcnQgeyBSb3V0aW5lc1Byb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL3JvdXRpbmVzL3JvdXRpbmVzJztcclxuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XHJcbmltcG9ydCB7IERldmljZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNeUFwcCxcclxuICAgIEhvbWVQYWdlLFxyXG4gICAgSGVscFBhZ2UsXHJcbiAgICBDb250YWN0UGFnZSxcclxuICAgIFByb2dyYW1zUGFnZSxcclxuICAgIFdpZmlQYWdlLFxyXG4gICAgUGxheWluZ1BhZ2UsXHJcbiAgICBTdWJzY3JpYmVQYWdlLFxyXG4gICAgU2xpZGVyUGFnZSxcclxuICAgIFByb2dyYW1QYWdlLFxyXG4gICAgRmF2b3JpdGVzUGFnZVxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIEh0dHBNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUuZm9yUm9vdChNeUFwcCksXHJcbiAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBib290c3RyYXA6IFtJb25pY0FwcF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBNeUFwcCxcclxuICAgIEhvbWVQYWdlLFxyXG4gICAgSGVscFBhZ2UsXHJcbiAgICBDb250YWN0UGFnZSxcclxuICAgIFByb2dyYW1zUGFnZSxcclxuICAgIFdpZmlQYWdlLFxyXG4gICAgUGxheWluZ1BhZ2UsXHJcbiAgICBTdWJzY3JpYmVQYWdlLFxyXG4gICAgU2xpZGVyUGFnZSxcclxuICAgIFByb2dyYW1QYWdlLFxyXG4gICAgRmF2b3JpdGVzUGFnZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBTdGF0dXNCYXIsXHJcbiAgICBTcGxhc2hTY3JlZW4sXHJcbiAgICBSb3V0aW5lc1Byb3ZpZGVyLFxyXG4gICAgTmV0d29ya0ludGVyZmFjZSxcclxuICAgIE5ldHdvcmssXHJcbiAgICBEZXZpY2UsXHJcbiAgICBMb2NhbE5vdGlmaWNhdGlvbnMsXHJcbiAgICBEYXRlUGlja2VyLFxyXG4gICAgeyBwcm92aWRlOiBFcnJvckhhbmRsZXIsIHVzZUNsYXNzOiBJb25pY0Vycm9ySGFuZGxlciB9LFxyXG4gICAgQVBJU2VydmljZVByb3ZpZGVyLFxyXG4gICAgSFRUUFxyXG5cclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEhvbWVQYWdlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1lbnVDb250cm9sbGVyLCBFdmVudHMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcclxuaW1wb3J0IHsgTmF2LCBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXInO1xyXG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4nO1xyXG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XHJcblxyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2hvbWUvaG9tZSc7XHJcbmltcG9ydCB7IEhlbHBQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaGVscC9oZWxwJztcclxuaW1wb3J0IHsgQ29udGFjdFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9jb250YWN0L2NvbnRhY3QnO1xyXG5pbXBvcnQgeyBTbGlkZXJQYWdlIH0gZnJvbSAnLi4vcGFnZXMvc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCB7IEZhdm9yaXRlc1BhZ2UgfSBmcm9tICcuLi9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUFwcCB7XHJcbiAgQFZpZXdDaGlsZChOYXYpIG5hdjogTmF2O1xyXG5cclxuICByb290UGFnZTogYW55ID0gSG9tZVBhZ2U7XHJcbiAgbGFuZ19lbiA6IGJvb2xlYW47XHJcbiAgbGFuZ19lcyA6IGJvb2xlYW47XHJcbiAgbGFuZ19wdCA6IGJvb2xlYW47XHJcbiAgbGFuZ19mciA6IGJvb2xlYW47XHJcbiAgbGFuZ19nciA6IGJvb2xlYW47XHJcbiAgbGFuZ19pdCA6IGJvb2xlYW47XHJcblxyXG4gIHBhZ2VzOiBBcnJheTx7dGl0bGU6IHN0cmluZywgY29tcG9uZW50OiBhbnksIGljb246IGFueSwgaXNQdXNoOiBib29sZWFufT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sIHB1YmxpYyBzdGF0dXNCYXI6IFN0YXR1c0JhciwgcHVibGljIHNwbGFzaFNjcmVlbjogU3BsYXNoU2NyZWVuLFxyXG4gICAgcHVibGljIG1lbnVDdHJsOiBNZW51Q29udHJvbGxlciwgcHVibGljIGV2ZW50cyA6IEV2ZW50cykge1xyXG4gICAgdGhpcy5pbml0aWFsaXplQXBwKCk7XHJcblxyXG4gICAgLy8gdXNlZCBmb3IgYW4gZXhhbXBsZSBvZiBuZ0ZvciBhbmQgbmF2aWdhdGlvblxyXG4gICAgdGhpcy5wYWdlcyA9IFtcclxuICAgICAgeyB0aXRsZTogR2VybWFuVGV4dHNbJ2hvbWUtdGl0bGUnXSwgY29tcG9uZW50OiBIb21lUGFnZSwgaWNvbjogJ21lbnVpdGVtaG9tZScsIGlzUHVzaDogZmFsc2UgfSxcclxuICAgICAgeyB0aXRsZTogR2VybWFuVGV4dHNbJ2hlbHAtdGl0bGUnXSwgY29tcG9uZW50OiBIZWxwUGFnZSwgaWNvbjogJ21lbnVpdGVtaGVscCcsIGlzUHVzaDogZmFsc2UgfSxcclxuICAgICAgeyB0aXRsZTogR2VybWFuVGV4dHNbJ2NvbnRhY3QtdGl0bGUnXSwgY29tcG9uZW50OiBDb250YWN0UGFnZSwgaWNvbjogJ21lbnVpdGVtY29udGFjdCcsIGlzUHVzaDogZmFsc2UgfSxcclxuICAgICAgeyB0aXRsZTogR2VybWFuVGV4dHNbJ2Zhdi10aXRsZSddLCBjb21wb25lbnQ6IEZhdm9yaXRlc1BhZ2UsIGljb246ICdtZW51ZmF2b3JpdGVzJywgaXNQdXNoOiB0cnVlIH0sXHJcbiAgICAgIHsgdGl0bGU6IEdlcm1hblRleHRzWydzbGlkZXItdGl0bGUnXSwgY29tcG9uZW50OiBTbGlkZXJQYWdlLCBpY29uOiAnbWVudWl0ZW1pbmZvJywgaXNQdXNoOiB0cnVlfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVBcHAoKSB7XHJcbiAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIC8vIE9rYXksIHNvIHRoZSBwbGF0Zm9ybSBpcyByZWFkeSBhbmQgb3VyIHBsdWdpbnMgYXJlIGF2YWlsYWJsZS5cclxuICAgICAgLy8gSGVyZSB5b3UgY2FuIGRvIGFueSBoaWdoZXIgbGV2ZWwgbmF0aXZlIHRoaW5ncyB5b3UgbWlnaHQgbmVlZC5cclxuICAgICAgdGhpcy5zdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlblBhZ2UocGFnZSkge1xyXG4gICAgLy8gUmVzZXQgdGhlIGNvbnRlbnQgbmF2IHRvIGhhdmUganVzdCB0aGlzIHBhZ2VcclxuICAgIC8vIHdlIHdvdWxkbid0IHdhbnQgdGhlIGJhY2sgYnV0dG9uIHRvIHNob3cgaW4gdGhpcyBzY2VuYXJpb1xyXG4gICAgaWYocGFnZS5pc1B1c2gpXHJcbiAgICAgIHRoaXMubmF2LnB1c2gocGFnZS5jb21wb25lbnQpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLm5hdi5zZXRSb290KHBhZ2UuY29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiZXhwb3J0IHZhciBDb25zdGFudHMgPSB7XG4gICAgbG9jYWxJUEFkZHJlc3MgICAgOiAnMTkyLjE2OC4wLjEwMCcsXG4gIFx0bXlNYXRBcGlTdGFydFVybCAgOiAnaHR0cDovLzE5Mi4xNjguMS4zL3N0YXJ0Lmh0bScsXG4gICAgbXlNYXRBcGlJbmRleFVybCAgOiAnaHR0cDovLzE5Mi4xNjguMS4zL2luZGV4Lmh0bScsXG4gIFx0bXlNYXRBcGlVcmwgICAgICAgOiAnaHR0cDovL2hlYWxpbmdob3VzZS5saWZlL2FwaS9teW1hdC8nLCAvLydodHRwczovL3d3dy5lc2ZlcmFzb2x1Y2lvbmVzLmNvbS9hcGkvbXltYXQvJyxcbiAgICBzdG9yYWdlS2V5QnViYmxlMSA6ICdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTEnLFxuICAgIHN0b3JhZ2VLZXlCdWJibGUyIDogJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtMicsXG4gICAgc3RvcmFnZUtleUJ1YmJsZTMgOiAnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW0zJyxcbiAgICBzdG9yYWdlS2V5QnViYmxlNCA6ICdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTQnLFxuICAgIHN0b3JhZ2VLZXlTY3JvbGxUb3AgOiAnTXlNYXRfc2Nyb2xsVG9wJyxcbiAgICBzdG9yYWdlS2V5Q3VycmVudFByb2dyYW0gOiAnTXlNYXRfY3VycmVudFByb2dyYW0nLFxuICAgIGRldmljZUluZm9LZXk6ICdNeU1hdERldmljZScsXG4gICAgdGVzdF91dWlkOiAnVVVJRFRFU1QtMTIzNC01Njc4LTkxMDAtMDAwMDAwMDA0JyxcbiAgICBsYXRlc3RSb3V0aW5lc0tleTogJ2xhdGVzdFJvdXRpbmVzJyxcbiAgICBtb250aE5hbWVzOiBbXG4gICAgICAgIFwiamFudWFyeVwiLCBcImZlYnJ1YXJ5XCIsIFwibWFyY2hcIixcbiAgICAgICAgXCJhcHJpbFwiLCBcIm1heVwiLCBcImp1bmVcIiwgXCJqdWx5XCIsXG4gICAgICAgIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLFxuICAgICAgICBcIm5vdmVtYmVyXCIsIFwiZGVjZW1iZXJcIlxuICAgICAgXSxcbiAgICBzaG9ydFRpdGxlcyAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICdlYXJ0aC1lbGVtZW50LXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmaXJlLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ21ldGFsLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dhdGVyLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dvb2QtZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2FsbGJsYWRkZXItbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2tpZG5leS1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGVhcnQtbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhcmdlLWludGVzdGluZS1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGl2ZXItbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2x1bmctbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BlcmljYXJkaXVtLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzbWFsbC1pbnRlc3RpbmUtbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwbGVlbi1wYW5jcmVhcy1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RvbWFjaC1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAndHJpcGxlLXdhcm1lci1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAndXJpbmFyeS1ibGFkZGVyLW1lcmlkaWFuLXVwcGVyJ1xuICAgICAgICAgICAgICAgICAgICAgIF1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvY29uc3RhbnRzLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEhUVFAgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2h0dHAnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbi8vaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy9pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcblxuLypcbiAgR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgQXV0aFNlcnZpY2VQcm92aWRlciBwcm92aWRlci5cblxuICBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uIGZvciBtb3JlIGluZm8gb24gcHJvdmlkZXJzXG4gIGFuZCBBbmd1bGFyIERJLlxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBUElTZXJ2aWNlUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBodHRwTmF0aXZlOiBIVFRQLCBwdWJsaWMgaHR0cE1vZHVsZTogSHR0cCwgLyosIHByaXZhdGUgbmV0d29yazogTmV0d29yayovKSB7XG5cbiAgfVxuICB0ZXN0X2xhbmd1YWdlKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5nZXQoQ29uc3RhbnRzLm15TWF0QXBpSW5kZXhVcmwpXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHRlc3QoKXtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cE1vZHVsZS5nZXQoQ29uc3RhbnRzLm15TWF0QXBpSW5kZXhVcmwsIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgICAgICB0aW1lb3V0KDUwMDApIC8vNSBzZWNvbmRzXG4gICAgICAgKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLnRleHQoKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2VuZEVycm9yKGRhdGEpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICAgIC8qbGV0IGNvbm5lY3RTdWJzY3JpcHRpb24gPSB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHsqL1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cbiAgICAgICAgdGhpcy5odHRwTW9kdWxlLnBvc3QoQ29uc3RhbnRzLm15TWF0QXBpVXJsICsgJ3JlcG9ydF9lcnJvci5waHAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmpzb24oKSk7XG4gICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAvKn0pOyovXG4gICAgfSk7XG4gIH1cblxuICBzZW5kRW1haWwoZGF0YSl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgICAgLypsZXQgY29ubmVjdFN1YnNjcmlwdGlvbiA9IHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4geyovXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuICAgICAgICB0aGlzLmh0dHBNb2R1bGUucG9zdChDb25zdGFudHMubXlNYXRBcGlVcmwgKyAnY29udGFjdF91cy5waHAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmpzb24oKSk7XG4gICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAvKn0pOyovXG4gICAgfSk7XG4gIH1cblxuICBydW5Qb3N0KHNjcmlwdEZpbGUsIGRhdGEpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KENvbnN0YW50cy5teU1hdEFwaVVybCArIHNjcmlwdEZpbGUsIGRhdGEpXG4gICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgLyp9KTsqL1xuICAgIH0pO1xuICB9XG5cbiAgc3RhcnQocHJvZ3JhbXMpe1xuICAgIHZhciBwcm9ncmFtMSA9IHByb2dyYW1zWzBdLnNwbGl0KFwifFwiKVszXTtcbiAgICB2YXIgcHJvZ3JhbTIgPSBwcm9ncmFtc1sxXS5zcGxpdChcInxcIilbM107XG4gICAgdmFyIHByb2dyYW0zID0gcHJvZ3JhbXNbMl0uc3BsaXQoXCJ8XCIpWzNdO1xuICAgIHZhciBwcm9ncmFtNCA9IHByb2dyYW1zWzNdLnNwbGl0KFwifFwiKVszXTtcblxuICAgIC8qdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdQMScsIHByb2dyYW0xKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ1AyJywgcHJvZ3JhbTIpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnUDMnLCBwcm9ncmFtMyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdQNCcsIHByb2dyYW00KTsqL1xuICAgIHZhciBwYXJhbXMgPSBcIlAxPVwiK3Byb2dyYW0xK1wiJlAyPVwiK3Byb2dyYW0yK1wiJlAzPVwiK3Byb2dyYW0zK1wiJlA0PVwiK3Byb2dyYW00O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cE5hdGl2ZS5nZXQoQ29uc3RhbnRzLm15TWF0QXBpU3RhcnRVcmwgKyAnPycgKyBwYXJhbXMsIFwiXCIsIHt9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZQYXJhbXMsIFZpZXdDb250cm9sbGVyLCBMb2FkaW5nQ29udHJvbGxlciwgQWxlcnRDb250cm9sbGVyLCBFdmVudHMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFJvdXRpbmVzUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFQSVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEZhdm9yaXRlc1BhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtZmF2b3JpdGVzJyxcbiAgdGVtcGxhdGVVcmw6ICdmYXZvcml0ZXMuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlc1BhZ2Uge1xuICBwcml2YXRlIHByb2dyYW0xIDogYW55O1xuICBwcml2YXRlIHByb2dyYW0yIDogYW55O1xuICBwcml2YXRlIHByb2dyYW0zIDogYW55O1xuICBwcml2YXRlIHByb2dyYW00IDogYW55O1xuICBwcml2YXRlIHJlc3BvbnNlRGF0YSA6IGFueTtcbiAgcHJpdmF0ZSByZXNwb25zZV90ZXh0IDogc3RyaW5nO1xuICBwcml2YXRlIHNhdmVSb3V0aW5lRm9ybSA6IEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSBzaG93U2F2ZUZvcm0gOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBmYXZvcml0ZXNMaXN0IDogYW55O1xuICBwcml2YXRlIHNob3dMb2FkaW5nTGlzdGluZyA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIG9mZmxpbmVfZGV2aWNlIDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHVibGljIHZpZXdDdHJsOiBWaWV3Q29udHJvbGxlciwgcHVibGljIHJvdXRpbmVzOiBSb3V0aW5lc1Byb3ZpZGVyLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQVBJU2VydmljZVByb3ZpZGVyLFxuICAgIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlciwgcHVibGljIGFsZXJ0Q3RybCA6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHVibGljIGV2ZW50czogRXZlbnRzKSB7XG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgdmFyIHByb2dyYW1zID0gdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpO1xuICAgIGlmKHByb2dyYW1zWzBdICYmIHByb2dyYW1zWzFdICYmIHByb2dyYW1zWzJdICYmIHByb2dyYW1zWzNdKXtcbiAgICAgIHRoaXMucHJvZ3JhbTEgPSBHZXJtYW5UZXh0c1twcm9ncmFtc1swXV07XG4gICAgICB0aGlzLnByb2dyYW0yID0gR2VybWFuVGV4dHNbcHJvZ3JhbXNbMV1dO1xuICAgICAgdGhpcy5wcm9ncmFtMyA9IEdlcm1hblRleHRzW3Byb2dyYW1zWzJdXTtcbiAgICAgIHRoaXMucHJvZ3JhbTQgPSBHZXJtYW5UZXh0c1twcm9ncmFtc1szXV07XG4gICAgfVxuICAgIHRoaXMuc2F2ZVJvdXRpbmVGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgaWYobmF2UGFyYW1zLmdldCgnc2hvd1NhdmUnKSlcbiAgICAgIHRoaXMuc2hvd1NhdmVGb3JtID0gdHJ1ZTtcbiAgICBlbHNlXG4gICAgICB0aGlzLnNob3dTYXZlRm9ybSA9IGZhbHNlO1xuXG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChkZXZpY2UpPT57XG4gICAgICAgICAgdGhpcy5sb2FkRmF2b3JpdGVMaXN0KGRldmljZS5lbWFpbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChkZXZpY2UpPT57XG4gICAgICBpZih0eXBlb2YgZGV2aWNlICE9PSAndW5kZWZpbmVkJyAmJiBkZXZpY2UgIT0gbnVsbClcbiAgICAgICAgdGhpcy5sb2FkRmF2b3JpdGVMaXN0KGRldmljZS5lbWFpbCk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkRmF2b3JpdGVMaXN0KGVtYWlsKXtcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIC8vZm9ybURhdGEuYXBwZW5kKCd1dWlkJywgdXVpZCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd0eXBlJywgJ2dldCcpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCBlbWFpbCk7XG4gICAgaWYodGhpcy5pc0RldmljZU9ubGluZSl7XG4gICAgICB0aGlzLnNob3dMb2FkaW5nTGlzdGluZyA9IHRydWU7XG4gICAgICB0aGlzLmFwaVNlcnZpY2UucnVuUG9zdCgnZmF2b3JpdGVzLnBocCcsZm9ybURhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLnNob3dMb2FkaW5nTGlzdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgdGhpcy5mYXZvcml0ZXNMaXN0ID0gdGhpcy5yZXNwb25zZURhdGEuZmF2b3JpdGVzO1xuXG4gICAgICB9LChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZ0xpc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRpc21pc3MoZXZlbnQgOiBFdmVudCkge1xuICAgIGlmKGV2ZW50KXtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy52aWV3Q3RybC5kaXNtaXNzKCk7XG4gIH1cblxuICBkZWxldGUoZXZlbnQ6IEV2ZW50LCBpZCl7XG4gICAgaWYoZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgLy9mb3JtRGF0YS5hcHBlbmQoJ3V1aWQnLCB1dWlkKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCAnZGVsJyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIGlkKTtcblxuICAgIHRoaXMuYXBpU2VydmljZS5ydW5Qb3N0KCdmYXZvcml0ZXMucGhwJyxmb3JtRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChkZXZpY2UpPT57XG4gICAgICAgIHRoaXMubG9hZEZhdm9yaXRlTGlzdChkZXZpY2UuZW1haWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93UHJvZ3JhbShpZCwgbmFtZSwgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMywgcHJvZ3JhbTQpe1xuICAgIGxldCBwcm9ncmFtXzEgPSAocHJvZ3JhbTEgPT0gJ0UtU01PRycgPyBwcm9ncmFtMSA6IEdlcm1hblRleHRzW3Byb2dyYW0xXSk7XG4gICAgbGV0IHByb2dyYW1fMiA9IChwcm9ncmFtMiA9PSAnRS1TTU9HJyA/IHByb2dyYW0yIDogR2VybWFuVGV4dHNbcHJvZ3JhbTJdKTtcbiAgICBsZXQgcHJvZ3JhbV8zID0gKHByb2dyYW0zID09ICdFLVNNT0cnID8gcHJvZ3JhbTMgOiBHZXJtYW5UZXh0c1twcm9ncmFtM10pO1xuICAgIGxldCBwcm9ncmFtXzQgPSAocHJvZ3JhbTQgPT0gJ0UtU01PRycgPyBwcm9ncmFtNCA6IEdlcm1hblRleHRzW3Byb2dyYW00XSk7XG4gICAgbGV0IGFsZXJ0ID0gdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgIHRpdGxlOiAnUnV0aW5hIC0gJyArIG5hbWUsXG4gICAgICBtZXNzYWdlOiBwcm9ncmFtXzEgKyAnXFxuJyArIHByb2dyYW1fMiArICdcXG4nICsgcHJvZ3JhbV8zICsgJ1xcbicgKyBwcm9ncmFtXzQsXG4gICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogR2VybWFuVGV4dHNbJ2Nob29zZSddLFxuICAgICAgICAgICAgICAgICAgaGFuZGxlcjogZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ2FkZFByb2dyYW1zRXZlbnQnLCB7IG5hbWUgOiBwcm9ncmFtMSB9LCB7IG5hbWUgOiBwcm9ncmFtMiB9LCB7IG5hbWUgOiBwcm9ncmFtMyB9LCB7IG5hbWUgOiBwcm9ncmFtNCB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICB9KTtcbiAgICBhbGVydC5wcmVzZW50KCk7XG4gICAgLy8gTW9zdHJhciB0ZXh0byBlbiBsYWJlbCBkZWJham8gZGVsIGJvdG9uXG5cbiAgfVxuXG4gIGF0dGVtcHRTYXZlRmF2b3JpdGUoKXtcbiAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSAnJztcblxuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXkpLnRoZW4oKGRldmljZSk9PntcblxuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBsZXQgcHJvZ3JhbXMgPSB0aGlzLnJvdXRpbmVzLmdldFByb2dyYW1zKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCAnbmV3Jyk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgZGV2aWNlLmVtYWlsKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMuc2F2ZVJvdXRpbmVGb3JtLnZhbHVlLm5hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9ncmFtMScsIHByb2dyYW1zWzBdKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZ3JhbTInLCBwcm9ncmFtc1sxXSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2dyYW0zJywgcHJvZ3JhbXNbMl0pO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9ncmFtNCcsIHByb2dyYW1zWzNdKTtcblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnJ1blBvc3QoJ2Zhdm9yaXRlcy5waHAnLGZvcm1EYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgIGlmKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSAnb2snKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NhdmVGb3JtID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlc0xpc3QgPSB0aGlzLnJlc3BvbnNlRGF0YS5mYXZvcml0ZXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vZmZsaW5lX2RhdGEnO1xuaW1wb3J0IHsgR2VybWFuVGV4dHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nZXJtYW4tdGV4dHMnO1xuXG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBSb3V0aW5lc1Byb3ZpZGVyIHByb3ZpZGVyLlxuXG4gIFNlZSBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24gZm9yIG1vcmUgaW5mbyBvbiBwcm92aWRlcnNcbiAgYW5kIEFuZ3VsYXIgREkuXG4qL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRpbmVzUHJvdmlkZXIge1xuICBwdWJsaWMgcHJvZ3JhbTEgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtMiA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW0zIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbTQgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0b3JhZ2U6IFN0b3JhZ2UpIHtcbiAgICBjb25zb2xlLmxvZygnSGVsbG8gUm91dGluZXNQcm92aWRlciBQcm92aWRlcicpO1xuICB9XG5cbiAgcHVibGljIHNldFByb2dyYW0oaW5kZXgscHJvZyl7XG4gICAgc3dpdGNoIChpbmRleCl7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMucHJvZ3JhbTEgPSBwcm9nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5wcm9ncmFtMiA9IHByb2c7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLnByb2dyYW0zID0gcHJvZztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHRoaXMucHJvZ3JhbTQgPSBwcm9nO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYW5Qcm9ncmFtcygpe1xuICAgIHRoaXMucHJvZ3JhbTEgPSBudWxsO1xuICAgIHRoaXMucHJvZ3JhbTIgPSBudWxsO1xuICAgIHRoaXMucHJvZ3JhbTMgPSBudWxsO1xuICAgIHRoaXMucHJvZ3JhbTQgPSBudWxsO1xuICB9XG5cbiAgcHVibGljIHNldFByb2dyYW1zKHByb2cxLCBwcm9nMiwgcHJvZzMsIHByb2c0KXtcbiAgICB0aGlzLnByb2dyYW0xID0gcHJvZzE7XG4gICAgdGhpcy5wcm9ncmFtMiA9IHByb2cyO1xuICAgIHRoaXMucHJvZ3JhbTMgPSBwcm9nMztcbiAgICB0aGlzLnByb2dyYW00ID0gcHJvZzQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJvZ3JhbXMoKXtcbiAgICByZXR1cm4gWyB0aGlzLnByb2dyYW0xLCB0aGlzLnByb2dyYW0yLCB0aGlzLnByb2dyYW0zLCB0aGlzLnByb2dyYW00IF07XG4gIH1cbiAgcHVibGljIGFzeW5jIGdldEtleShrZXk6c3RyaW5nKXtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmdldChrZXkpO1xuICB9XG5cbiAgcHVibGljIGFkZFByb2dyYW1zKHJvdXRpbmVOYW1lLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zLCBwcm9ncmFtNCl7XG4gICAgdmFyIG9ialByb2dyYW0xID0gdGhpcy5nZXRQcm9ncmFtKHByb2dyYW0xKTtcbiAgICB2YXIgb2JqUHJvZ3JhbTIgPSB0aGlzLmdldFByb2dyYW0ocHJvZ3JhbTIpO1xuICAgIHZhciBvYmpQcm9ncmFtMyA9IHRoaXMuZ2V0UHJvZ3JhbShwcm9ncmFtMyk7XG4gICAgdmFyIG9ialByb2dyYW00ID0gdGhpcy5nZXRQcm9ncmFtKHByb2dyYW00KTtcbiAgICB0aGlzLmluc2VydFByZVNldFByb2dyYW0ocm91dGluZU5hbWUsIG9ialByb2dyYW0xLCBvYmpQcm9ncmFtMiwgb2JqUHJvZ3JhbTMsIG9ialByb2dyYW00KTtcblxuICAgIHRoaXMuc2V0UHJvZ3JhbXMob2JqUHJvZ3JhbTEubmFtZSwgb2JqUHJvZ3JhbTIubmFtZSwgb2JqUHJvZ3JhbTMubmFtZSwgb2JqUHJvZ3JhbTQubmFtZSk7XG4gICAgcmV0dXJuIFtvYmpQcm9ncmFtMS5uYW1lLCBvYmpQcm9ncmFtMi5uYW1lLCBvYmpQcm9ncmFtMy5uYW1lLCBvYmpQcm9ncmFtNC5uYW1lXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcm9ncmFtKG5hbWUpe1xuICAgICAgZm9yKHZhciBpID0gMDsgIGkgPCBEYXRhLlByb2dyYW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHByb2dyYW0gPSBEYXRhLlByb2dyYW1zW2ldO1xuICAgICAgICBpZihwcm9ncmFtLmFwaU5hbWUgPT0gbmFtZSB8fCBwcm9ncmFtLm5hbWUgPT0gbmFtZS5uYW1lIHx8IHByb2dyYW0ubmFtZSA9PSBuYW1lKXtcbiAgICAgICAgICBwcm9ncmFtLnRleHROYW1lID0gR2VybWFuVGV4dHNbcHJvZ3JhbS5uYW1lXTtcbiAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgcHVibGljIGluc2VydFByZVNldFByb2dyYW0gKHJvdXRpbmVOYW1lLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zLCBwcm9ncmFtNCkge1xuXG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ015TWF0X3JvdXRpbmVOYW1lJywgcm91dGluZU5hbWUpO1xuICAgICAgICB0aGlzLmFkZFByb2dyYW1Ub1JvdXRpbmUoMSwgXCJcIiwgcHJvZ3JhbTEubmFtZSwgcHJvZ3JhbTEucnVubmluZ3RpbWUsIHByb2dyYW0xLmFwaU5hbWUpO1xuXG4gICAgICAgIHRoaXMuYWRkUHJvZ3JhbVRvUm91dGluZSgyLCBcIlwiLCBwcm9ncmFtMi5uYW1lLCBwcm9ncmFtMi5ydW5uaW5ndGltZSwgcHJvZ3JhbTIuYXBpTmFtZSk7XG5cbiAgICAgICAgdGhpcy5hZGRQcm9ncmFtVG9Sb3V0aW5lKDMsIFwiXCIsIHByb2dyYW0zLm5hbWUsIHByb2dyYW0zLnJ1bm5pbmd0aW1lLCBwcm9ncmFtMy5hcGlOYW1lKTtcblxuICAgICAgICB0aGlzLmFkZFByb2dyYW1Ub1JvdXRpbmUoNCwgXCJcIiwgcHJvZ3JhbTQubmFtZSwgcHJvZ3JhbTQucnVubmluZ3RpbWUsIHByb2dyYW00LmFwaU5hbWUpO1xuICB9XG5cbiAgcHVibGljIGFkZFByb2dyYW1Ub1JvdXRpbmUgKGN1cnJlbnRCdWJibGVTbG90LCBpZFByb2dyYW0sIHByb2dyYW1OYW1lLCBwcm9ncmFtUnVubmluZ1RpbWUsIGFwaU5hbWUpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRCdWJibGVTbG90ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtMScsIGlkUHJvZ3JhbSArIFwifFwiICsgcHJvZ3JhbU5hbWUgKyBcInxcIiArIHByb2dyYW1SdW5uaW5nVGltZSArIFwifFwiICsgYXBpTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEJ1YmJsZVNsb3QgPT0gMikge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW0yJywgaWRQcm9ncmFtICsgXCJ8XCIgKyBwcm9ncmFtTmFtZSArIFwifFwiICsgcHJvZ3JhbVJ1bm5pbmdUaW1lICsgXCJ8XCIgKyBhcGlOYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50QnViYmxlU2xvdCA9PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTMnLCBpZFByb2dyYW0gKyBcInxcIiArIHByb2dyYW1OYW1lICsgXCJ8XCIgKyBwcm9ncmFtUnVubmluZ1RpbWUgKyBcInxcIiArIGFwaU5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRCdWJibGVTbG90ID09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtNCcsIGlkUHJvZ3JhbSArIFwifFwiICsgcHJvZ3JhbU5hbWUgKyBcInxcIiArIHByb2dyYW1SdW5uaW5nVGltZSArIFwifFwiICsgYXBpTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvdmlkZXJzL3JvdXRpbmVzL3JvdXRpbmVzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==