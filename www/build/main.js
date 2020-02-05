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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
    ], ProgramsPage.prototype, "content", void 0);
    ProgramsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-programs',template:/*ion-inline-start:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\programs\programs.html"*/'<!--\n  Generated template for the ProgramsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PROGRAMME</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="home center">\n    <br>\n    <div class="modaltitle">Programm Kits</div>\n    <div class="modaldesc">Unsere beliebtesten Routinen</div>\n\n    <ion-scroll scrollX="true" scrollY="false" class="wide-as-needed programs">\n\n            <ion-row nowrap class="program {{ basicButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'basic\')">\n                <div class="programpic"><img src="assets/img/Basic.png"></div>\n                <div class="programdesc">BASIC <br> <br></div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ businessTravelButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'business and travel\')">\n                <div class="programpic"><img src="assets/img/BusinessTraveller.png"></div>\n                <div class="programdesc">BUSINESS &<br/>REISEN</div>\n            </ion-row>\n\n           <ion-row nowrap class="program {{ familiyButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'family\')">\n                <div class="programpic"><img src="assets/img/family.png"></div>\n                <div class="programdesc">FAMILIE</div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ athleteButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'athlete\')">\n                <div class="programpic"><img src="assets/img/Athlete.png"></div>\n                <div class="programdesc">SPORT</div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ spaButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'spa\')">\n                <div class="programpic"><img src="assets/img/Spa.png"></div>\n                <div class="programdesc">SPA & WELLNESS</div>\n            </ion-row>\n\n\n            <ion-row nowrap class="program {{ stressButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'stress relief\')">\n                <div class="programpic"><img src="assets/img/stress.png"></div>\n                <div class="programdesc">STRESS <br> BEFREIUNG</div>\n            </ion-row>\n\n\n            <ion-row nowrap class="program {{ seniorButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'senior\')">\n                <div class="programpic"><img src="assets/img/Senior.png"></div>\n                <div class="programdesc">SENIOR</div>\n            </ion-row>\n\n\n            <ion-row nowrap class="program {{ chakraButton ? \'\' : \'opacity-50\' }}"  (click)="selectPreSetProgram(\'chakra balancing\')">\n                <div class="programpic"><img src="assets/img/chakra.png"></div>\n                <div class="programdesc">CHAKRAS</div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ elementsButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'elements\')">\n                <div class="programpic"><img src="assets/img/Elements.png"></div>\n                <div class="programdesc">ELEMENTE & <br> MERIDIANE</div>\n            </ion-row>\n            <ion-row nowrap class="program {{ petssButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'petss\')">\n                <div class="programpic"><img src="assets/img/MascotasS.png"></div>\n                <div class="programdesc">HAUSTIERE S</div>\n            </ion-row>\n\n            <ion-row nowrap class="program {{ petsxButton ? \'\' : \'opacity-50\' }}" (click)="selectPreSetProgram(\'petsx\')">\n                <div class="programpic"><img src="assets/img/MascotasX.png"></div>\n                <div class="programdesc">HAUSTIERE X</div>\n            </ion-row>\n    </ion-scroll>\n\n\n    <div class="modaltitle">PROGRAMME</div>\n    <div *ngFor="let routine of predefinedPrograms">\n\n        {{ routine.textName }}\n        <!--<div class="purchase-status">{{ routine.purchaseStatus }}</div>-->\n\n        <div class="paddingmodal">\n\n            <ion-list (click)="addPrograms(routine.name, routine.programs[0].apiName, routine.programs[1].apiName,\n                routine.programs[2].apiName,routine.programs[3].apiName)">\n\n                <ion-item *ngFor="let program of routine.programs" class="addiction center">\n                     {{ program.textName }}\n                </ion-item>\n\n            </ion-list>\n        </div>\n    </div>\n\n\n    <div class="modaltitle">UNABHÄNGIGE PROGRAMME</div>\n    <div class="modaldesc"><label>Tippen Sie auf das Programm, das Sie zur Routine hinzufügen möchten. Tippen die Info-Taste, um mehr zu erfahren</label></div>\n    <div class="paddingmodal">\n        <ion-list class="programlist">\n\n            <ion-item class="addiction center" *ngFor="let program of programs" nav-transition="ios" nav-direction="forward" href="#/app/routines">\n                <div class="programAddButton" (click)="add1Program(program.name, program.runningtime, program.apiName)">\n                    {{ program.textName }}\n                </div>\n                <div class="programInfoButton" end (click)="moreProgramInfo(program.name, program.runningtime, program.description, program.apiName)">\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                </div>\n            </ion-item>\n\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"c:\Users\lsanc\projects\mymat-ionic3-GR\src\pages\programs\programs.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_routines_routines__["a" /* RoutinesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_routines_routines__["a" /* RoutinesProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _f || Object])
    ], ProgramsPage);
    return ProgramsPage;
    var _a, _b, _c, _d, _e, _f;
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _a || Object])
    ], RoutinesProvider);
    return RoutinesProvider;
    var _a;
}());

//# sourceMappingURL=routines.js.map

/***/ })

},[264]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9zbGlkZXIvc2xpZGVyLnRzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5IiwiLi4vLi4vc3JjIGxhenkiLCIuLi8uLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3N1YnNjcmliZS9zdWJzY3JpYmUudHMiLCIuLi8uLi9zcmMvc2VydmljZXMvZ2VybWFuLXRleHRzLnRzIiwiLi4vLi4vc3JjL3NlcnZpY2VzL29mZmxpbmVfZGF0YS50cyIsIi4uLy4uL3NyYy9wYWdlcy9wcm9ncmFtcy9wcm9ncmFtcy50cyIsIi4uLy4uL3NyYy9wYWdlcy9wcm9ncmFtL3Byb2dyYW0udHMiLCIuLi8uLi9zcmMvcGFnZXMvd2lmaS93aWZpLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL3BsYXlpbmcvcGxheWluZy50cyIsIi4uLy4uL3NyYy9wYWdlcy9oZWxwL2hlbHAudHMiLCIuLi8uLi9zcmMvcGFnZXMvY29udGFjdC9jb250YWN0LnRzIiwiLi4vLi4vc3JjL2FwcC9tYWluLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLi4vLi4vc3JjL3NlcnZpY2VzL2NvbnN0YW50cy50cyIsIi4uLy4uL3NyYy9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UudHMiLCIuLi8uLi9zcmMvcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy50cyIsIi4uLy4uL3NyYy9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDWTtBQUN4QjtBQUNpQjtBQUNqQjtBQUN6Qzs7Ozs7R0FLRztBQU1IO0lBS0Usb0JBQW1CLE9BQXNCLEVBQVMsU0FBb0IsRUFBUyxHQUFhLEVBQVMsT0FBZ0I7UUFBbEcsWUFBTyxHQUFQLE9BQU8sQ0FB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QUFHLE9BQU8sQ0FBQyxDQUFDO1FBQzlILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQzlILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQzlILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQzlILENBQUM7SUFDTCxDQUFDO0lBNUZRLGdCQUFnQjtRQUQ1Qix5RUFBVSxFQUFFOzZEQU9pQiwrREFBTyxvQkFBUCwrREFBTztPQU54QixnQkFBZ0IsQ0E2RjVCO0lBQUQsdUJBQUM7O0NBQUE7QUE3RjRCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBTbGlkZXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBTbGlkZXJQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJQYWdlIHtcbiAgcHVibGljIHNob3dIZWFkZXIgOiBib29sZWFuO1xuICBAVmlld0NoaWxkKCdzbGlkZXMnKSBzbGlkZXM6IFNsaWRlcztcbiAgcHVibGljIGltYWdlcyA6IEFycmF5PHN0cmluZz47XG4gIHB1YmxpYyBjdWx0dXJlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHB1YmxpYyBwbHQ6IFBsYXRmb3JtLCBwdWJsaWMgc3RvcmFnZTogU3RvcmFnZSkge1xuICAgIHRoaXMuc2hvd0hlYWRlciA9IGZhbHNlO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgdGhpcy5jdWx0dXJlID0gR2VybWFuVGV4dHNbJ2N1bHR1cmUnXTtcbiAgICB0aGlzLmltYWdlcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8PSA1OyBpKyspe1xuICAgICAgdGhpcy5pbWFnZXMucHVzaCgnLi9hc3NldHMvaW1ncy9pbnN0cnVjdGlvbnMvJyArIHRoaXMuY3VsdHVyZSArICcvJysgaSArJy5wbmcnKTtcbiAgICB9XG4gIH1cblxuICBza2lwSW5zdHJ1Y3Rpb25zKCl7XG4gICAgdGhpcy5uYXZDdHJsLnBvcFRvUm9vdCgpO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICB0aGlzLnNsaWRlcy5zbGlkZU5leHQoKTtcbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgdGhpcy5zbGlkZXMuc2xpZGVQcmV2KCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9zbGlkZXIvc2xpZGVyLnRzIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F0Y2hlZCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gMTQ1O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F0Y2hlZCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gMTg5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjIGxhenlcbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBFdmVudHMsIE1vZGFsQ29udHJvbGxlciwgQ29udGVudCB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IFN1YnNjcmliZVBhZ2UgfSBmcm9tICcuLi9zdWJzY3JpYmUvc3Vic2NyaWJlJztcbmltcG9ydCB7IFJvdXRpbmVzUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IEdlcm1hblRleHRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2VybWFuLXRleHRzJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2UnO1xuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IFByb2dyYW1zUGFnZSB9IGZyb20gJy4uL3Byb2dyYW1zL3Byb2dyYW1zJztcbmltcG9ydCB7IFdpZmlQYWdlIH0gZnJvbSAnLi4vd2lmaS93aWZpJztcbmltcG9ydCB7IEZhdm9yaXRlc1BhZ2UgfSBmcm9tICcuLi9mYXZvcml0ZXMvZmF2b3JpdGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuICBAVmlld0NoaWxkKENvbnRlbnQpIGNvbnRlbnQ6IENvbnRlbnQ7XG4gIHB1YmxpYyBidWJibGVzTmFtZXMxIDogc3RyaW5nO1xuICBwdWJsaWMgYnViYmxlc05hbWVzMiA6IHN0cmluZztcbiAgcHVibGljIGJ1YmJsZXNOYW1lczMgOiBzdHJpbmc7XG4gIHB1YmxpYyBidWJibGVzTmFtZXM0IDogc3RyaW5nO1xuICBwdWJsaWMgRW5hYmxlUnVuUm91dGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBidWJibGVzQ3VycmVudFN0YXRlMSA6IGJvb2xlYW47XG4gIHB1YmxpYyBidWJibGVzQ3VycmVudFN0YXRlMiA6IGJvb2xlYW47XG4gIHB1YmxpYyBidWJibGVzQ3VycmVudFN0YXRlMyA6IGJvb2xlYW47XG4gIHB1YmxpYyBidWJibGVzQ3VycmVudFN0YXRlNCA6IGJvb2xlYW47XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBvZmZsaW5lX2RldmljZSA6IHN0cmluZztcbiAgcHVibGljIHNob3dBZGRGYXZvcml0ZUJ1dHRvbiA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNob3dMYXRlc3RTZWN0aW9uOiBib29sZWFuO1xuICBwdWJsaWMgbGF0ZXN0Um91dGluZXMgOiBhbnk7XG4gIHB1YmxpYyB0YWJfYnViYmxlIDogc3RyaW5nO1xuICBwdWJsaWMgcnVuX3JvdXRpbmUgOiBzdHJpbmc7XG4gIHB1YmxpYyBhZGRfZmF2b3JpdGUgOiBzdHJpbmc7XG4gIHB1YmxpYyBjbGVhbl9yb3V0aW5lIDogc3RyaW5nO1xuICBwdWJsaWMgbGF0ZXN0X3JvdXRpbmVzIDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyByb3V0aW5lczogUm91dGluZXNQcm92aWRlcixcbiAgICBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgem9uZTogTmdab25lLCBwdWJsaWMgZXZlbnRzOiBFdmVudHMsIHByaXZhdGUgZGV2aWNlOiBEZXZpY2UsXG4gICAgcHVibGljIGFwaVNlcnZpY2UgOiBBUElTZXJ2aWNlUHJvdmlkZXIsIHB1YmxpYyBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcikge1xuICAgIHRoaXMudGFiX2J1YmJsZSA9IEdlcm1hblRleHRzWyd0YXAtYnViYmxlJ107XG4gICAgdGhpcy5ydW5fcm91dGluZSA9IEdlcm1hblRleHRzWydydW4tcm91dGluZSddO1xuICAgIHRoaXMuYWRkX2Zhdm9yaXRlID0gR2VybWFuVGV4dHNbJ2FkZC1mYXZvcml0ZSddO1xuICAgIHRoaXMuY2xlYW5fcm91dGluZSA9IEdlcm1hblRleHRzWydjbGVhbi1yb3V0aW5lJ107XG5cbiAgICAvL3RoaXMuY2hlY2tBbGxCdWJibGVzKCk7XG4gICAgdGhpcy5ldmVudHMuc3Vic2NyaWJlKCdzaGFyZXNCdWJibGVzJywgKGJ1YmJsZXMpID0+IHtcbiAgICAgIGZvcih2YXIgaSA9IDE7IGkgPD0gYnViYmxlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlcyhpLCBidWJibGVzW2kgLSAxXSk7XG4gICAgICB9XG4gICAgICB0aGlzLkFsbEJ1YmJsZXNDaGVja2VkKHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbXMoKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoJ2FkZFByb2dyYW1zRXZlbnQnLCAocHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMywgcHJvZ3JhbTQpID0+IHtcbiAgICAgIHRoaXMubmF2Q3RybC5wb3AoKTtcbiAgICAgIGNvbnNvbGUubG9nKHByb2dyYW0xKTtcbiAgICAgIGxldCBidWJibGVzID0gdGhpcy5yb3V0aW5lcy5hZGRQcm9ncmFtcygnJywgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMywgcHJvZ3JhbTQpO1xuICAgICAgdGhpcy5ldmVudHMucHVibGlzaChcInNoYXJlc0J1YmJsZXNcIiwgYnViYmxlcyk7XG4gICAgfSk7XG4gICAgdGhpcy5BbGxCdWJibGVzQ2hlY2tlZCh0aGlzLnJvdXRpbmVzLmdldFByb2dyYW1zKCkpO1xuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvL3RoaXMubmF2Q3RybC5wdXNoKFN1YnNjcmliZVBhZ2UsIHsgY2FsbEJhY2tQYWdlIDogJ25vbmUnIH0pO1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXkpLnRoZW4oKGluZm8pPT57XG4gICAgICBpZih0eXBlb2YgaW5mbyA9PT0gJ3VuZGVmaW5lZCcgfHwgaW5mbyA9PSBudWxsKXtcbiAgICAgICAgLyppZih3aW5kb3cuaGFzT3duUHJvcGVydHkoJ2NvcmRvdmEnKSl7Ki9cbiAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICB2YXIgX3V1aWQgPSBDb25zdGFudHMudGVzdF91dWlkO1xuICAgICAgICAgIGlmKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnY29yZG92YScpKXtcbiAgICAgICAgICAgIF91dWlkID0gdGhpcy5kZXZpY2UudXVpZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd1dWlkJywgX3V1aWQpO1xuXG4gICAgICAgICAgLy92YXIgZGF0YSA9IHsgJ3V1aWQnIDogQ29uc3RhbnRzLnRlc3RfdXVpZCB9O1xuXG4gICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnJ1blBvc3QoJ2NoZWNrX2RldmljZS5waHAnLGZvcm1EYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NoZWNrX2RldmljZSBzdWNjZXNzJyk7XG4gICAgICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvYmogOiBhbnkgPSByZXN1bHQ7XG4gICAgICAgICAgICBpZiAob2JqLmZvdW5kID09IFwiMFwiKSB7XG4gICAgICAgICAgICAgIC8vIGRlc3BsaWVnYSBsYSB2aXN0YSBkZSBpbnNlcmNpb24gZGUgZGF0b3NcbiAgICAgICAgICAgICAgdGhpcy5uYXZDdHJsLnB1c2goU3Vic2NyaWJlUGFnZSwgeyBjYWxsQmFja1BhZ2UgOiAnbm9uZScgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5LCB7IFwiZW1haWxcIiA6IG9iai5lbWFpbCwgXCJ1dWlkXCIgOiBfdXVpZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjaGVja19kZXZpY2UgZXJyb3IgJyArIHJlc3VsdCk7XG4gICAgICAgICAgICAvL3RoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8qdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUxhbmcpLnRoZW4oKGxhbmcpPT57XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGlvbihsYW5nKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vZmZsaW5lX2RldmljZSA9IHZhbHVlWydvZmZsaW5lLWRldmljZS10ZXh0LTInXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTsqL1xuICAgICAgICAgIH0pO1xuICAgICAgICAvKn0qL1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkUHJvZ3JhbXMocm91dGluZU5hbWUsIHByb2dyYW0wLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zKXtcbiAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdhZGRQcm9ncmFtc0V2ZW50JywgcHJvZ3JhbTAsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMpO1xuICAgIHRoaXMuY29udGVudC5zY3JvbGxUbygwLCAwLCAxMDApO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMubGF0ZXN0Um91dGluZXNLZXkpLnRoZW4oKGxhdGVzdHMpPT57XG4gICAgICBpZihsYXRlc3RzKXtcbiAgICAgICAgdGhpcy5zaG93TGF0ZXN0U2VjdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMubGF0ZXN0Um91dGluZXMgPSBsYXRlc3RzO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgdGhpcy5zaG93TGF0ZXN0U2VjdGlvbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3BlbkFkZEZhdm9yaXRlKCl7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuZGV2aWNlSW5mb0tleSkudGhlbigoaW5mbyk9PntcbiAgICAgIGlmKHR5cGVvZiBpbmZvID09PSAndW5kZWZpbmVkJyB8fCBpbmZvID09IG51bGwpe1xuICAgICAgICAvLyBkZXNwbGllZ2EgbGEgdmlzdGEgZGUgaW5zZXJjaW9uIGRlIGRhdG9zXG4gICAgICAgIHRoaXMubmF2Q3RybC5wdXNoKFN1YnNjcmliZVBhZ2UsIHsgY2FsbEJhY2tQYWdlIDogJ2Zhdm9yaXRlcycgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJvZmlsZU1vZGFsID0gdGhpcy5tb2RhbEN0cmwuY3JlYXRlKEZhdm9yaXRlc1BhZ2UsIHsgJ3Nob3dTYXZlJzogdHJ1ZSB9KTtcbiAgICAgICAgcHJvZmlsZU1vZGFsLnByZXNlbnQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVByb2dyYW1Gcm9tUm91dGluZShwcmcpe1xuICAgIGNvbnNvbGUubG9nKCdob2xkOiAnICsgcHJnKTtcbiAgfVxuXG4gIHNlbGVjdEJ1YmJsZShwcmcsIGFkZCl7XG4gICAgdGhpcy5uYXZDdHJsLnB1c2goUHJvZ3JhbXNQYWdlLCB7IGJ1YmJsZTogcHJnIH0pO1xuICB9XG5cbiAgcnVuUm91dGluZSgpe1xuICAgIHZhciBwcm9ncmFtcyA9IHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbXMoKTtcbiAgICBpZih0aGlzLkFsbEJ1YmJsZXNDaGVja2VkKHByb2dyYW1zKSl7XG4gICAgICB0aGlzLm5hdkN0cmwucHVzaChcbiAgICAgICAgV2lmaVBhZ2UsXG4gICAgICAgIHsgcHJvZzE6IHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbShwcm9ncmFtc1swXSksIHByb2cyOiB0aGlzLnJvdXRpbmVzLmdldFByb2dyYW0ocHJvZ3JhbXNbMV0pLCBwcm9nMzogdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtKHByb2dyYW1zWzJdKSwgcHJvZzQ6IHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbShwcm9ncmFtc1szXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgQWxsQnViYmxlc0NoZWNrZWQocHJvZ3JhbXMpe1xuXG4gICAgaWYodHlwZW9mIHByb2dyYW1zWzBdICE9PSAndW5kZWZpbmVkJyAmJiBwcm9ncmFtc1swXSAhPSBudWxsICYmIHByb2dyYW1zWzBdLmxlbmd0aCA+IDAgJiZcbiAgICB0eXBlb2YgcHJvZ3JhbXNbMV0gIT09ICd1bmRlZmluZWQnICYmIHByb2dyYW1zWzFdICE9IG51bGwgJiYgcHJvZ3JhbXNbMV0ubGVuZ3RoID4gMCAmJlxuICAgIHR5cGVvZiBwcm9ncmFtc1syXSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvZ3JhbXNbMl0gIT0gbnVsbCAmJiBwcm9ncmFtc1syXS5sZW5ndGggPiAwICYmXG4gICAgdHlwZW9mIHByb2dyYW1zWzNdICE9PSAndW5kZWZpbmVkJyAmJiBwcm9ncmFtc1szXSAhPSBudWxsICYmIHByb2dyYW1zWzNdLmxlbmd0aCA+IDApe1xuICAgICAgICB0aGlzLkVuYWJsZVJ1blJvdXRpbmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dBZGRGYXZvcml0ZUJ1dHRvbiA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGlzLkVuYWJsZVJ1blJvdXRpbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93QWRkRmF2b3JpdGVCdXR0b24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLkVuYWJsZVJ1blJvdXRpbmU7XG4gIH1cblxuICBjbGVhblJvdXRpbmUoKXtcbiAgICB0aGlzLnJvdXRpbmVzLmNsZWFuUHJvZ3JhbXMoKTtcbiAgICB0aGlzLkFsbEJ1YmJsZXNDaGVja2VkKHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbXMoKSk7XG4gICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTEsJycpO1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUyLCcnKTtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMywnJyk7XG4gICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTQsJycpO1xuICAgIHRoaXMudXBkYXRlQnViYmxlcygxLCcnKTtcbiAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoMiwnJyk7XG4gICAgdGhpcy51cGRhdGVCdWJibGVzKDMsJycpO1xuICAgIHRoaXMudXBkYXRlQnViYmxlcyg0LCcnKTtcbiAgICB0aGlzLnNob3dBZGRGYXZvcml0ZUJ1dHRvbiA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVCdWJibGVzKGJ1YmJsZSxuYW1lKXtcbiAgICBzd2l0Y2goYnViYmxlKXtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaWYodHlwZW9mIG5hbWUgIT09ICd1bmRlZmluZWQnICYmIG5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5idWJibGVzTmFtZXMxID0gdHlwZW9mIEdlcm1hblRleHRzW25hbWVdID09PSAndW5kZWZpbmVkJyA/IG5hbWUgOiBHZXJtYW5UZXh0c1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTEgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczEgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaWYodHlwZW9mIG5hbWUgIT09ICd1bmRlZmluZWQnICYmIG5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5idWJibGVzTmFtZXMyID0gdHlwZW9mIEdlcm1hblRleHRzW25hbWVdID09PSAndW5kZWZpbmVkJyA/IG5hbWUgOiBHZXJtYW5UZXh0c1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTIgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczIgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaWYodHlwZW9mIG5hbWUgIT09ICd1bmRlZmluZWQnICYmIG5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlMyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5idWJibGVzTmFtZXMzID0gdHlwZW9mIEdlcm1hblRleHRzW25hbWVdID09PSAndW5kZWZpbmVkJyA/IG5hbWUgOiBHZXJtYW5UZXh0c1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTMgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczMgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaWYodHlwZW9mIG5hbWUgIT09ICd1bmRlZmluZWQnICYmIG5hbWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5idWJibGVzQ3VycmVudFN0YXRlNCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5idWJibGVzTmFtZXM0ID0gdHlwZW9mIEdlcm1hblRleHRzW25hbWVdID09PSAndW5kZWZpbmVkJyA/IG5hbWUgOiBHZXJtYW5UZXh0c1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuYnViYmxlc0N1cnJlbnRTdGF0ZTQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJ1YmJsZXNOYW1lczQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKnByaXZhdGUgY2hlY2tBbGxCdWJibGVzKCl7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTEpLnRoZW4oKHZhbCk9PntcbiAgICAgIGlmKHZhbCAhPT0gbnVsbCl7XG4gICAgICAgIHZhciBuYW1lID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlcygxLG5hbWUpO1xuICAgICAgICB0aGlzLnJvdXRpbmVzLnNldFByb2dyYW0oMSxuYW1lKVxuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHZhciBlbWFpbERhdGEgPSB7IGFyZWEgOiAnY2hlY2tBbGxCdWJibGVzIDEnLCBtZXNzYWdlIDogZXJyIH07XG4gICAgICB0aGlzLmFwaVNlcnZpY2Uuc2VuZEVycm9yKGVtYWlsRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUyKS50aGVuKCh2YWwpPT57XG4gICAgICBpZih2YWwgIT09IG51bGwpe1xuICAgICAgICB2YXIgbmFtZSA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXMoMixuYW1lKTtcbiAgICAgICAgdGhpcy5yb3V0aW5lcy5zZXRQcm9ncmFtKDIsbmFtZSlcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB2YXIgZW1haWxEYXRhID0geyBhcmVhIDogJ2NoZWNrQWxsQnViYmxlcyAyJywgbWVzc2FnZSA6IGVyciB9O1xuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRFcnJvcihlbWFpbERhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMykudGhlbigodmFsKT0+e1xuICAgICAgaWYodmFsICE9PSBudWxsKXtcbiAgICAgICAgdmFyIG5hbWUgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzKDMsbmFtZSk7XG4gICAgICAgIHRoaXMucm91dGluZXMuc2V0UHJvZ3JhbSgzLG5hbWUpXG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdmFyIGVtYWlsRGF0YSA9IHsgYXJlYSA6ICdjaGVja0FsbEJ1YmJsZXMgMycsIG1lc3NhZ2UgOiBlcnIgfTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZW5kRXJyb3IoZW1haWxEYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTQpLnRoZW4oKHZhbCk9PntcbiAgICAgIGlmKHZhbCAhPT0gbnVsbCl7XG4gICAgICAgIHZhciBuYW1lID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlcyg0LG5hbWUpO1xuICAgICAgICB0aGlzLnJvdXRpbmVzLnNldFByb2dyYW0oNCxuYW1lKVxuICAgICAgfVxuICAgICAgdGhpcy5BbGxCdWJibGVzQ2hlY2tlZCh0aGlzLnJvdXRpbmVzLmdldFByb2dyYW1zKCkpXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdmFyIGVtYWlsRGF0YSA9IHsgYXJlYSA6ICdjaGVja0FsbEJ1YmJsZXMgNCcsIG1lc3NhZ2UgOiBlcnIgfTtcbiAgICAgIHRoaXMuYXBpU2VydmljZS5zZW5kRXJyb3IoZW1haWxEYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9Ki9cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9ob21lL2hvbWUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBNb2RhbENvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEZXZpY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RldmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XG5pbXBvcnQgeyBTbGlkZXJQYWdlIH0gZnJvbSAnLi4vc2xpZGVyL3NsaWRlcic7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IEZhdm9yaXRlc1BhZ2UgfSBmcm9tICcuLi9mYXZvcml0ZXMvZmF2b3JpdGVzJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBTdWJzY3JpYmVQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXN1YnNjcmliZScsXG4gIHRlbXBsYXRlVXJsOiAnc3Vic2NyaWJlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVQYWdlIHtcbiAgcHJpdmF0ZSBtYXhEYXRlT2ZQaWNrZXIgOiBzdHJpbmc7XG4gIHByaXZhdGUgc3Vic2NyaWJlRm9ybSA6IEZvcm1Hcm91cDtcbiAgcHVibGljIHNob3dTdWJtaXRCdXR0b24gOiBib29sZWFuO1xuICBwcml2YXRlIG1heERhdGUgOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVzcG9uc2VfdGV4dCA6IHN0cmluZztcbiAgcHJpdmF0ZSByZXNwb25zZURhdGEgOiBhbnk7XG4gIHByaXZhdGUgY2FsbEJhY2tQYWdlIDogc3RyaW5nO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgZXJyb3JOYW1lQ2xhc3MgOiBzdHJpbmc7XG4gIHB1YmxpYyBlcnJvckVtYWlsQ2xhc3MgOiBzdHJpbmc7XG4gIHB1YmxpYyBlcnJvckdlbmRlckNsYXNzIDogc3RyaW5nO1xuICBwdWJsaWMgZXJyb3JEYXRlQ2xhc3MgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIGFwaVNlcnZpY2UgOiBBUElTZXJ2aWNlUHJvdmlkZXIsXG4gICAgcHJpdmF0ZSBkZXZpY2U6IERldmljZSwgcHJpdmF0ZSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlciwgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrKSB7XG4gICAgICAvLyBvYnRpZW5lIGVsIHBhcmFtZXRybyBkZSBxdWUgcGFnZSB2YSBhIGNvcnJlciBhbCB0ZXJtaW5hciBlbCByZWdpc3Ryb1xuICAgICAgdGhpcy5jYWxsQmFja1BhZ2UgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ2NhbGxCYWNrUGFnZScpO1xuICAgICAgdGhpcy5zaG93U3VibWl0QnV0dG9uID0gdHJ1ZTtcbiAgICAgIGxldCBhRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICB0aGlzLm1heERhdGVPZlBpY2tlciA9IHRoaXMubWF4RGF0ZSA9IGFEYXRlLnRvSVNPU3RyaW5nKCk7XG5cbiAgICAgIHRoaXMuc3Vic2NyaWJlRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgZ2VuZGVyOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBiaXJ0aERhdGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBTdWJzY3JpYmVQYWdlJyk7XG4gIH1cblxuICBhdHRlbXB0U3Vic2NyaWJlKCl7XG4gICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gJyc7XG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgdGhpcy5zdWJzY3JpYmVGb3JtLnZhbHVlLmVtYWlsKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCB0aGlzLnN1YnNjcmliZUZvcm0udmFsdWUubmFtZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdiaXJ0aERhdGUnLCB0aGlzLnN1YnNjcmliZUZvcm0udmFsdWUuYmlydGhEYXRlKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2dlbmRlcicsIHRoaXMuc3Vic2NyaWJlRm9ybS52YWx1ZS5nZW5kZXIpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnaXNVcGRhdGUnLCAnZmFsc2UnKTtcbiAgICBpZih3aW5kb3cuaGFzT3duUHJvcGVydHkoJ2NvcmRvdmEnKSl7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3V1aWQnLCB0aGlzLmRldmljZS51dWlkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3V1aWQnLCBDb25zdGFudHMudGVzdF91dWlkKTtcbiAgICB9XG5cbiAgICB0aGlzLmFwaVNlcnZpY2UucnVuUG9zdCgnc3Vic2NyaWJlLnBocCcsZm9ybURhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICBpZih0aGlzLnJlc3BvbnNlRGF0YS5zdGF0dXMgPT0gJ29rJykge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5LCB7J3V1aWQnOiB0aGlzLnJlc3BvbnNlRGF0YS51dWlkLCAnZW1haWwnOiB0aGlzLnN1YnNjcmliZUZvcm0udmFsdWUuZW1haWwgfSk7XG4gICAgICAgIHRoaXMuc2hvd1N1Ym1pdEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSBHZXJtYW5UZXh0c1sncHJvZmlsZS1zdWNjZXNzLW1lc3NhZ2UnXTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZih0aGlzLmNhbGxCYWNrUGFnZSA9PSAnbm9uZScpe1xuICAgICAgICAgICAgLy8gZGVzcGxpZWdhIGxhIHZpc3RhIGRlIGRlIGluc3RydWNjaW9uZXNcbiAgICAgICAgICAgIHRoaXMubmF2Q3RybC5wdXNoKFNsaWRlclBhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMuY2FsbEJhY2tQYWdlID09ICdmYXZvcml0ZXMnKXtcbiAgICAgICAgICAgIHRoaXMubmF2Q3RybC5wb3AoKTtcbiAgICAgICAgICAgIGxldCBwcm9maWxlTW9kYWwgPSB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoRmF2b3JpdGVzUGFnZSwgeyAnc2hvd1NhdmUnOiB0cnVlIH0pO1xuICAgICAgICAgICAgcHJvZmlsZU1vZGFsLnByZXNlbnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMDApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBlcnJvciA9IEdlcm1hblRleHRzWydwcm9maWxlLWVycm9yLW1lc3NhZ2UnXSArICc6ICc7XG4gICAgICAgIGlmKHRoaXMucmVzcG9uc2VEYXRhLmVtYWlsRXJyb3IgIT0gJ29rJyl7XG4gICAgICAgICAgZXJyb3IgKz0gdGhpcy5yZXNwb25zZURhdGEuZW1haWxFcnJvcjtcbiAgICAgICAgICB0aGlzLmVycm9yRW1haWxDbGFzcyAgPSAnZXJyb3InO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucmVzcG9uc2VEYXRhLm5hbWVFcnJvciAhPSAnb2snKXtcbiAgICAgICAgICBlcnJvciArPSB0aGlzLnJlc3BvbnNlRGF0YS5uYW1lRXJyb3I7XG4gICAgICAgICAgdGhpcy5lcnJvck5hbWVDbGFzcyAgPSAnZXJyb3InO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucmVzcG9uc2VEYXRhLmdlbmRlckVycm9yICE9ICdvaycpe1xuICAgICAgICAgIGVycm9yICs9IHRoaXMucmVzcG9uc2VEYXRhLmdlbmRlckVycm9yO1xuICAgICAgICAgIHRoaXMuZXJyb3JHZW5kZXJDbGFzcyAgPSAnZXJyb3InO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucmVzcG9uc2VEYXRhLmRhdGVPZkJpcnRoRXJyb3IgIT0gJ29rJyl7XG4gICAgICAgICAgZXJyb3IgKz0gdGhpcy5yZXNwb25zZURhdGEuZGF0ZU9mQmlydGhFcnJvcjtcbiAgICAgICAgICB0aGlzLmVycm9yRGF0ZUNsYXNzICA9ICdlcnJvcic7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSBlcnJvcjtcbiAgICAgIH1cbiAgICAgIC8vIFRPRE86IHBvbmVyIHN1Y2Nlc3MgeSBkZXNwbGVnYXIgcGFnaW5hIHByaW5jaXBhbFxuICAgIH0sIChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9IEdlcm1hblRleHRzWydwcm9maWxlLWVycm9yLW1lc3NhZ2UnXTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3N1YnNjcmliZS9zdWJzY3JpYmUudHMiLCJleHBvcnQgdmFyIEdlcm1hblRleHRzID0ge1xyXG4gICAgXCJiYWNrXCI6XCJSw7xja2tlaHJcIixcclxuICAgIFwiY3VsdHVyZVwiOlwiZ3JcIixcclxuICAgIFwiaGVscFwiOiBcIjxhIGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiIG5nLWhyZWY9XFxcIiMvYXBwL2hlbHBcXFwiIGhyZWY9XFxcIiMvYXBwL2hlbHBcXFwiPiBISUxGRSA8L2E+XCIsXHJcbiAgICBcImNvbnRhY3QtdXNcIjogXCI8YSBjbGFzcz1cXFwiaXRlbS1jb250ZW50XFxcIiBuZy1ocmVmPVxcXCIjL2FwcC9jb250YWN0dXNcXFwiIGhyZWY9XFxcIiMvYXBwL2NvbnRhY3R1c1xcXCI+IEtPTlRBS1RJRVJFTiBTSUUgVU5TIDwvYT5cIixcclxuICAgIFwiY29udGFjdC11cy10ZXh0XCI6IFwiS09OVEFLVElFUkVOIFNJRSBVTlNcIixcclxuICAgIFwicmVtYWluaW5nLXRpbWVcIjogXCJWZXJibGVpYmVuZGUgWmVpdFwiLFxyXG4gICAgXCJydW5uaW5nLXRpbWVcIjogXCJMYXVmemVpdFwiLFxyXG4gICAgXCJnZXQtaW4tdG91Y2hcIjogXCJTZXR6ZW4gU2llIHNpY2ggbWl0IHVucyBpbiBWZXJiaW5kdW5nLCBpbmRlbSBTaWUgZGFzIGZvbGdlbmRlIEZvcm11bGFyIGF1c2bDvGxsZW4uIDxici8+T2RlciBrb250YWt0aWVyZW4gU2llIHVucyB1bnRlciA8YSBocmVmPVxcXCJtYWlsdG86c3VwcG9ydEBoZWFsaW5naG91c2UubGlmZVxcXCI+IHN1cHBvcnRAaGVhbGluZ2hvdXNlLmxpZmUgPC9hPlwiLFxyXG4gICAgXCJyZW1vdmUtcHJvZ3JhbVwiOiBcIlByb2dyYW1tIGVudGZlcm5lblwiLFxyXG4gICAgXCJ0aW1lLWV4cGlyZS10ZXh0XCI6IFwiSWhyZSBSb3V0aW5lIGlzdCB2b3JiZWksIGhvZmZlLCBkYXNzIFNpZSBzaWNoIGhldXRlIGd1dCBmw7xobGVuXCIsXHJcbiAgICBcImZhdi10aXRsZVwiOiBcIk1FSU5FIEZBVk9SSVRFTlwiLFxyXG4gICAgXCJhZGQtZmF2b3JpdGVcIjogXCJGw5xHRU4gU0lFIERJRVNFIFJPVVRJTkUgSElOWlVcIixcclxuICAgIFwiYWRkLWZhdm9yaXRlc1wiOiBcIkbDvGdlbiBTaWUgZGllc2UgRmF2b3JpdGVuIGhpbnp1XCIsXHJcbiAgICBcImZhdm9yaXRlLXJvdXRpbmVzXCI6IFwiTGllYmxpbmdzcm91dGluZW5cIixcclxuICAgIFwibXktZmF2b3JpdGVzXCI6IFwiTWVpbmUgRmF2b3JpdGVuXCIsXHJcbiAgICBcImxvYWRpbmdcIjpcIldpcmQgZ2VsYWRlblwiLFxyXG4gICAgXCJjaG9vc2VcIjpcIlfDpGhsZW5cIixcclxuICAgIFwieWVzXCI6IFwiSmFcIixcclxuICAgIFwiY2FuY2VsXCI6IFwiQWJicmVjaGVuXCIsXHJcbiAgICBcImphbnVhcnlcIjogXCJKYW51YXJcIixcclxuICAgIFwiZmVicnVhcnlcIjogXCJGZWJydWFyXCIsXHJcbiAgICBcIm1hcmNoXCI6IFwiTcOkcnpcIixcclxuICAgIFwiYXByaWxcIjogXCJBcHJpbFwiLFxyXG4gICAgXCJtYXlcIjogXCJNYWlcIixcclxuICAgIFwianVuZVwiOiBcIkp1bmlcIixcclxuICAgIFwianVseVwiOiBcIkp1bGlcIixcclxuICAgIFwiYXVndXN0XCIgOiBcIkF1Z3VzdFwiLFxyXG4gICAgXCJzZXB0ZW1iZXJcIjogXCJTZXB0ZW1iZXJcIixcclxuICAgIFwib2N0b2JlclwiOiBcIk9rdG9iZXJcIixcclxuICAgIFwibm92ZW1iZXJcIjogXCJOb3ZlbWJlclwiLFxyXG4gICAgXCJkZWNlbWJlclwiOiBcIkRlemVtYmVyXCIsXHJcbiAgICBcImFyZS15b3Utc3VyZS1wcm9ncmFtXCI6IFwiTcO2Y2h0ZW4gU2llIGRpZXNlcyBQcm9ncmFtbSB3aXJrbGljaCBlbnRmZXJuZW4/XCIsXHJcbiAgICBcImFyZS15b3Utc3VyZS1yb3V0aW5lXCI6IFwiU2luZCBTaWUgc2ljaGVyLCBkYXNzIFNpZSBkaWVzZSBSb3V0aW5lIGVudGZlcm5lbiB3b2xsZW4/XCIsXHJcbiAgICBcImxhdGVzdC1yb3V0aW5lc1wiOiBcIk5ldWVzdGUgUm91dGluZW5cIixcclxuICAgIFwiY29ubmVjdC1mYXZvcml0ZXMtdGV4dFwiOiBcIlZlcmJpbmRlbiBTaWUgZGFzIEdlcsOkdCBtaXQgSWhyZW4gYmV2b3J6dWd0ZW4gUm91dGluZW5cIixcclxuICAgIFwibmFtZS1UZXh0XCI6IFwiTmFtZTpcIixcclxuICAgIFwibWVzc2FnZS10ZXh0XCI6IFwiTmFjaHJpY2h0XCIsXHJcbiAgICBcInNlbmQtdGV4dFwiOiBcIlNlbmRlblwiLFxyXG4gICAgXCJzZW50LXRleHRcIiA6IFwiR2VzZW5kZXRcIixcclxuICAgIFwiaG9tZS10aXRsZVwiIDogXCJIT01FXCIsXHJcbiAgICBcImhlbHAtdGl0bGVcIiA6IFwiSElMRkVcIixcclxuICAgIFwiY29udGFjdC10aXRsZVwiIDogXCJLT05UQUtUSUVSRSBVTlNcIixcclxuICAgIFwic2xpZGVyLXRpdGxlXCIgOiBcIkFOTEVJVFVOR1wiLFxyXG4gICAgXCJlbWFpbC1zdWNjZXNzLW1lc3NhZ2VcIjogXCJJaHJlIE5hY2hyaWNodCB3dXJkZSBnZXNlbmRldCEgV2lyIHdlcmRlbiB1bnMgc28gc2NobmVsbCB3aWUgbcO2Z2xpY2ggbWl0IElobmVuIGluIFZlcmJpbmR1bmcgc2V0emVuXCIsXHJcbiAgICBcImVtYWlsLXN1Y2Nlc3MtdGl0bGVcIjogXCJHZXNlbmRldFwiLFxyXG4gICAgXCJlbWFpbC1lcnJvci1tZXNzYWdlXCI6IFwiQmVpbSBTZW5kZW4gZGVyIEUtTWFpbCBpc3QgZWluIEZlaGxlciBhdWZnZXRyZXRlblwiLFxyXG4gICAgXCJlbWFpbC1lcnJvci10aXRsZVwiOiBcIk5hY2hyaWNodCBrb25udGUgbmljaHQgZ2VzZW5kZXQgd2VyZGVuXCIsXHJcbiAgICBcImluZGVwZW5kZW50LXByb2dyYW1zXCI6IFwiVU5BQkjDhE5HSUdFIFBST0dSQU1NRVwiLFxyXG4gICAgXCJyZWdpc3Rlci1sb2dpblwiOiBcIjxhIGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiIG5nLWhyZWY9XFxcIiMvYXBwL2xvZ2luXFxcIiBocmVmPVxcXCIjL2FwcC9sb2dpblxcXCI+IFJFR0lTVFJJRVJFTiAvIEFOTUVMREVOIDwvYT4gXCIsXHJcbiAgICBcImZvcmdvdC1wYXNzd29yZFwiOiBcIlBhc3N3b3J0IHZlcmdlc3NlblwiLFxyXG4gICAgXCJmb3Jnb3QtcGFzc3dvcmQtbGlua1wiOiBcIjxhIGNsYXNzPVxcXCJpdGVtLWNvbnRlbnRcXFwiIG5nLWhyZWY9XFxcIiMvYXBwL2ZvcmdvdHBhc3N3b3JkXFxcIiBocmVmPVxcXCIjL2FwcC9mb3Jnb3RwYXNzd29yZFxcXCI+IFZFUkdFU1NFTiA8L2E+IFwiLFxyXG4gICAgXCJkb250LXdvcnJ5XCI6IFwiTWFjaCBkaXIga2VpbmUgU29yZ2VuXCIsXHJcbiAgICBcImludHJvZHVjZS1lbWFpbFwiOiBcIlN0ZWxsZW4gU2llIElocmUgRS1NYWlsIHVudGVyIElocmVtIEtvbnRvIGVpblwiLFxyXG4gICAgXCJyZWNvdmVyLXBhc3N3b3JkXCI6IFwiUGFzc3dvcnQgd2llZGVyaGVyc3RlbGxlblwiLFxyXG4gICAgXCJyZWdpc3RlclwiOiBcIlJFR0lTVFJJRVJFTlwiLFxyXG4gICAgXCJyZWdpc3Rlci1saW5rXCI6IFwiPGEgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCIgbmctaHJlZj1cXFwiIy9hcHAvY3JlYXRlYWNjb3VudFxcXCIgaHJlZj1cXFwiIy9hcHAvY3JlYXRlYWNjb3VudFxcXCI+IFJFR0lTVFJJRVJFTiA8L2E+XCIsXHJcbiAgICBcInBhc3N3b3JkXCI6IFwiUGFzc3dvcnRcIixcclxuICAgIFwic2l4LWNoYXJzLW1pblwiOiBcIk1pbmRlc3RlbnMgNiBaZWljaGVuXCIsXHJcbiAgICBcIm1hbGVcIjpcIk1hbm5cIixcclxuICAgIFwiZmVtYWxlXCI6IFwiV2VpYmxpY2hcIixcclxuICAgIFwicGxlYXNlLWNyZWF0ZS1hY2NvdW50XCI6IFwiQml0dGUgZXJzdGVsbGVuIFNpZSBlaW4gS29udG9cIixcclxuICAgIFwiY3JlYXRlLWFjY291bnRcIjogXCJLb250byBlcnN0ZWxsZW5cIixcclxuICAgIFwicGxlYXNlLWxvZ2luXCI6IFwiQml0dGUgbWVsZGVuIFNpZSBzaWNoIG1pdCBJaHJlbiBLb250b2luZm9ybWF0aW9uZW4gYW5cIixcclxuICAgIFwicGxlYXNlLXBhaXJcIjogXCJCSVRURSBQQUFSIERFSU5FTiBNWU1BVFwiLFxyXG4gICAgXCJhY3RpdmF0ZS13aWZpXCI6IFwiU2Nocml0dGUgenVtIFBhaXJpbmcgSWhyZXMgTXlNYXRcIixcclxuICAgIFwiYWN0aXZhdGUtd2lmaS0xXCI6IFwiMS4gU2NoYWx0ZSBkZWluIE15TWF0IGVpblwiLFxyXG4gICAgXCJhY3RpdmF0ZS13aWZpLTJcIjogXCIyLiBOYXZpZ2llcmUgYXVmIGRlaW5lbSBHZXLDpHQgenUgZGVpbmVuIFdMQU4tRWluc3RlbGx1bmdlblwiLFxyXG4gICAgXCJhY3RpdmF0ZS13aWZpLTNcIjogXCIzLiBWZXJiaW5kZW4gU2llIGRhcyBXTEFOIElocmVzIEdlcsOkdHMgbWl0IElocmVtIE15TWF0LU5ldHp3ZXJrXCIsXHJcbiAgICBcImFjdGl2YXRlLXdpZmktNFwiOiBcIjQuIElzdCBlaW5tYWwgdmVyYnVuZGVuLCBrZWhyZW4gU2llIHp1ciBNeU1hdC1BcHAgenVyw7xja1wiLFxyXG4gICAgXCJzdGFydC1yb3V0aW5lXCI6IFwiU1RBUlRST1VUSU5FXCIsXHJcbiAgICBcImJhdHRlcnktcG93ZXJcIjogXCIgIFwiLFxyXG4gICAgXCJjb2lsXCI6IFwiU3B1bGVcIixcclxuICAgIFwic3RhcnQteW91ci1yb3V0aW5lXCI6IFwiU1RBUlRFTiBTSUUgSUhSRSBST1VUSU5FXCIsXHJcbiAgICBcIm5vLWRldGVjdC0xXCI6IFwiV2lyIGtvbm50ZW4gSWhyIE15TWF0IG5pY2h0IGZpbmRlblwiLFxyXG4gICAgXCJuby1kZXRlY3QtMlwiOiBcIkJpdHRlIGZvbGdlbiBTaWUgZGVuIFNjaHJpdHRlbiwgdW0gZGllcyB6dSB0dW5cIixcclxuICAgIFwiZW1haWwtc2VudFwiOiBcIkVpbmUgRS1NYWlsIG1pdCBBbndlaXN1bmdlbiB6dW0gWnVyw7xja3NldHplbiBJaHJlcyBQYXNzd29ydHMgd3VyZGUgZ2VzZW5kZXRcIixcclxuICAgIFwibWlzc2luZy1lbWFpbFwiOiBcIkZlaGxlbmRlIEVtYWlsXCIsXHJcbiAgICBcIm5hbWUtdGV4dFwiIDogXCJOYW1lXCIsXHJcbiAgICBcImZpcnN0LW5hbWUtdGV4dFwiOiBcIlZvcm5hbWVcIixcclxuICAgIFwibGFzdC1uYW1lLXRleHRcIjogXCJOYWNobmFtZVwiLFxyXG4gICAgXCJwcm9maWxlXCI6IFwiRGVpbiBQcm9maWxcIixcclxuICAgIFwiZGF0ZS1iaXJ0aFwiOiBcIkdlYnVydHNkYXR1bVwiLFxyXG4gICAgXCJwcm9maWxlLWxvZ2luXCI6IFwiPGEgY2xhc3M9XFxcIml0ZW0tY29udGVudFxcXCIgbmctaHJlZj1cXFwiIy9hcHAvY3JlYXRlYWNjb3VudFxcXCIgaHJlZj1cXFwiIy9hcHAvY3JlYXRlYWNjb3VudFxcXCI+IFBST0ZJTCA8L2E+XCIsXHJcbiAgICBcIm9mZmxpbmUtbWVzc2FnZVwiOiBcIkJpdHRlIHZlcmJpbmRlbiBTaWUgSWhyIEdlcsOkdCBtaXQgZGVtIEludGVybmV0XCIsXHJcbiAgICBcIk9mZmxpbmUtdGl0bGVcIjogXCJHZXLDpHQgT0ZGTElORVwiLFxyXG4gICAgXCJyZWdpc3Rlci1lcnJvci1tZXNzYWdlXCI6IFwiRmVobGVyIGJlaW0gVmVyYmluZGVuIG1pdCBkZW0gSGF1cHRzZXJ2ZXIuIEJpdHRlIHZlcnN1Y2hlbiBTaWUgZXMgc3DDpHRlciBub2NoIGVpbm1hbFwiLFxyXG4gICAgXCJyZWdpc3Rlci1lcnJvci10aXRsZVwiOiBcIlZlcmJpbmR1bmcgenVtIFNlcnZlciBrb25udGUgbmljaHQgaGVyZ2VzdGVsbHQgd2VyZGVuXCIsXHJcbiAgICBcInRhcC1wcm9ncmFtXCI6IFwiPGxhYmVsPlRpcHBlbiBTaWUgYXVmIGRhcyBQcm9ncmFtbSwgZGFzIFNpZSB6dXIgUm91dGluZSBoaW56dWbDvGdlbiBtw7ZjaHRlbi4gVGlwcGVuIGRpZSBJbmZvLVRhc3RlLCB1bSBtZWhyIHp1IGVyZmFocmVuPC9sYWJlbD5cIixcclxuICAgIFwid2VsY29tZVwiOiBcIldpbGxrb21tZW4gYmVpIE15TWF0IEFwcC5cIixcclxuICAgIFwiYWRkLXByb2dyYW1cIjogXCJIaW56dWbDvGdlblwiLFxyXG4gICAgXCJ0YXAtYnViYmxlXCI6IFwiVEFQIEEgQlVCQkxFICgrKSBISU5aVUbDnEdFTlwiLFxyXG4gICAgXCJydW4tcm91dGluZVwiOiBcIkxBU1MgRElFU0UgUk9VVElORSBMQVVGRU5cIixcclxuICAgIFwiY2xlYW4tcm91dGluZVwiOiBcIkRJRVNFIFJPVVRJTkUgUkVJTklHRU5cIixcclxuICAgIFwicHJvZ3JhbS1raXRzXCI6IFwiUHJvZ3JhbW0tS2l0c1wiLFxyXG4gICAgXCJwb3B1bGFyLXJvdXRpbmVzXCI6IFwiVW5zZXJlIGJlbGllYnRlc3RlbiBSb3V0aW5lblwiLFxyXG4gICAgXCJiYXNpY1wiOiBcIkJBU0lDIDxicj4gPGJyPlwiLFxyXG4gICAgXCJidXNpbmVzcy10cmF2ZWxlclwiOiBcIkJVU0lORVNTICY8YnIvPlJFSVNFTlwiLFxyXG4gICAgXCJmYW1pbHkta2l0XCI6IFwiRkFNSUxJRVwiLFxyXG4gICAgXCJhdGhsZXRlXCI6IFwiU1BPUlRcIixcclxuICAgIFwic3BhLXdlbGxuZXNzXCI6IFwiU1BBICYgV0VMTE5FU1NcIixcclxuICAgIFwic3RyZXNzLXJlbGllZlwiOiBcIlNUUkVTUyA8YnI+IEJFRlJFSVVOR1wiLFxyXG4gICAgXCJzZW5pb3ItdXBwZXJcIiA6IFwiU0VOSU9SXCIsXHJcbiAgICBcImNoYWtyYS1iYWxhbmNpbmdcIjogXCJDSEFLUkFTXCIsXHJcbiAgICBcImVsZW1lbnRzLW1lcmlkaWFuc1wiOiBcIkVMRU1FTlRFICYgPGJyPiBNRVJJRElBTkVcIixcclxuICAgIFwicGV0c3NcIjogXCJIQVVTVElFUkUgU1wiLFxyXG4gICAgXCJwZXRzeFwiOiBcIkhBVVNUSUVSRSBYXCIsXHJcbiAgICBcInByb2dyYW1zXCI6IFwiUFJPR1JBTU1FXCIsXHJcbiAgICBcImNvbnRpbnVlXCI6IFwiV2VpdGVyXCIsXHJcbiAgICBcInByb2ZpbGUtdGV4dFwiOiBcIlJlZ2lzdHJpZXJ1bmdcIixcclxuICAgIFwib25lLXRpbWUtcHJvZmlsZS10ZXh0XCI6IFwiVGhpcyBpbmZvcm1hdGlvbiBpcyB1c2VkIGJ5IG91ciB0ZWFtIHRvIHNlcnZlIHlvdSBiZXR0ZXIuIFlvdSB3aWxsIG9ubHkgbmVlZCB0byBpbnRyb2R1Y2UgaXQgb25lIHNpbmdsZSB0aW1lXCIsXHJcbiAgICBcImdlbmRlci10ZXh0XCI6IFwiR2VuZGVyXCIsXHJcbiAgICBcImJpcnRoZGF0ZS10ZXh0XCI6IFwiQmlydGhkYXRlXCIsXHJcbiAgICBcIm1hbGUtdGV4dFwiOiBcIk1hbGVcIixcclxuICAgIFwiZmVtYWxlLXRleHRcIjogXCJGZW1hbGVcIixcclxuICAgIFwiYnV0dG9uLXNlbmRcIjogXCJTZW5kZW5cIixcclxuICAgIFwiYnV0dG9uLXNhdmVcIjogXCJTcGFyZW5cIixcclxuICAgIFwicHJvZmlsZS1lcnJvci1tZXNzYWdlXCI6IFwiVGhlcmUncyBiZWVuIGFuIGVycm9yIHNhdmluZyB5b3VyIHByb2ZpbGVcIixcclxuICAgIFwicHJvZmlsZS1zdWNjZXNzLW1lc3NhZ2VcIjogXCJZb3VyIHByb2ZpbGUgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWwgc2F2ZWRcIixcclxuICAgIFwib2ZmbGluZS1kZXZpY2UtdGV4dFwiOiBcIllvdXIgZGV2aWNlIGlzIG9mZmxpbmVcIixcclxuICAgIFwib2ZmbGluZS1kZXZpY2UtdGV4dC0yXCIgOiBcIlRoZXJlJ3MgYmVlbiBhbiBlcnJvciBjb21tdW5pY2F0aW5nIHlvdXIgZGV2aWNlIHdpdGggb3VyIHNlcnZpY2VzLiBQbGVhc2UgbWFrZSBzdXJlIGl0J3Mgb25saW5lXCIsXHJcbiAgICBcImZpcnN0LWNoYWtyYS11cHBlclwiOiBcIldVUlpFTC1aRU5UUlVNXCIsXHJcbiAgICBcInNlY29uZC1jaGFrcmEtdXBwZXJcIjogXCJTQUtSQUwtWkVOVFJVTVwiLFxyXG4gICAgXCJ0aGlyZC1jaGFrcmEtdXBwZXJcIjogXCJTT0xBUi1QTEVYVVMtWkVOVFJVTVwiLFxyXG4gICAgXCJmb3VydGgtY2hha3JhLXVwcGVyXCI6IFwiSEVSWi1aRU5UUlVNXCIsXHJcbiAgICBcImZpZnRoLWNoYWtyYS11cHBlclwiOiBcIkhBTFMtWkVOVFJVTVwiLFxyXG4gICAgXCJzaXh0aC1jaGFrcmEtdXBwZXJcIjogXCJTVFJJTi1aRU5UUlVNXCIsXHJcbiAgICBcInNldmVudGgtY2hha3JhLXVwcGVyXCI6IFwiU0NIRUlURUwtWkVOVFJVTVwiLFxyXG4gICAgXCJoZWxwLXRleHRcIjogXCJISUxGRVwiLFxyXG4gICAgXCJoZWxwLXRleHQxXCI6IFwiV29oZXIgd2Vpw58gaWNoLCB3ZWxjaGUgUHJvZ3JhbW1lIGljaCB3w6RobGVuIHNvbGw/XCIsXHJcbiAgICBcImhlbHAtdGV4dDJcIjogXCJFcyBpc3QgaW1tZXIgZ3V0LCBtaXQgZGVtIEF1c2JhbGFuY2llcmVuIGRlcyBTeXN0ZW1zIHp1IGJlZ2lubmVuLiBEaWVzIHNpbmQgZWluaWdlIE3DtmdsaWNoa2VpdGVuLCB3aWUgU2llIGRhcyBtaXQgYmVnaW5uZW4ga8O2bm5lbjpFbmVyZ2llYmlsYW56aWVydW5nLCBFLVNtb2csIEZyZXVkZSwgVml0YWxpdMOkdCA8YnI+IDxicj4gV2VubiBTaWUgSWhyIFNjaGxhZm11c3RlciB2ZXJiZXNzZXJuIG3DtmNodGVuIC0gd8OkaGxlbiBTaWU6IDxicj4gRW5lcmdpZWJpbGFueiwgRS1TbW9nLCBSZWxheCwgU2NobGFmIDxicj4gPGJyPiBJZiBTaWUgbcO2Y2h0ZW4gYW0gTW9yZ2VuIGV0d2FzIG1laHIgRW5lcmdpZSBoYWJlbjogPGJyPiBFbmVyZ2llYXVzZ2xlaWNoLCBFbmVyZ2llLUJvb3N0ZXIsIEtvbnplbnRyYXRpb24gKHVuZCBqZWRlcyBQcm9ncmFtbSwgZGFzIG1pdCBlaW5lbSBQcm9ibGVtIGluIFZlcmJpbmR1bmcgc3RlaHQsIG1pdCBkZW0gU2llIGVzIHp1IHR1biBoYWJlbiAtIHdpZSBTY2htZXJ6ZW4sIE11c2tlbCwgR2VsZW5rZSwgS29wZnNjaG1lcnplbiB1c3cuKSA8YnI+IDxicj4gRWluZSB2b2xsc3TDpG5kaWdlIExpc3RlIGRlciBQcm9ncmFtbWUgdW5kIGRlcmVuIFZlcndlbmR1bmcgYmV6w7xnbGljaCBkZXIgU3ltcHRvbWUgZmluZGVuIFNpZSBpbiBkZXIgQmVkaWVudW5nc2FubGVpdHVuZywgZGllIGltIExpZWZlcnVtZmFuZyBlbnRoYWx0ZW4gaXN0IG9kZXIga29zdGVubG9zIG9ubGluZSB2ZXJmw7xnYmFyIGlzdC4gXCIsXHJcbiAgICBcImhlbHAtdGV4dDNcIjpcIldlbGNoZSBQcm9ncmFtbWUgc29sbHRlIGljaCBhbSBBYmVuZCB2ZXJtZWlkZW4/IFwiLFxyXG4gICAgXCJoZWxwLXRleHQ0XCI6XCJXZW5uIFNpZSBlaW5lIGd1dGUgTmFjaHRydWhlIGhhYmVuIHdvbGxlbiwgaXN0IGVzIGJlc3NlciwgSWhyZW4gT3JnYW5pc211cyBuaWNodCDDvGJlcm3DpMOfaWcgenUgc3RpbXVsaWVyZW4uIFdlbm4gU2llIGRhcmFuIGdld8O2aG50IHNpbmQsIGFiZW5kcyBLYWZmZWUgenUgdHJpbmtlbiB1bmQgdHJvdHpkZW0gc2NobGFmZW4genUga8O2bm5lbiwga8O2bm5lbiBTaWUgYWxsZSBQcm9ncmFtbWUgdmVyd2VuZGVuLCBhYmVyIHdlbm4gU2llIGVtcGZpbmRsaWNoZXIgc2luZCAtIHNvbGx0ZW4gU2llIHZvciBkZW0gU2NobGFmZW5nZWhlbiBuaWNodCBkaWUgZm9sZ2VuZGVuIFByb2dyYW1tZSBhbndlbmRlbjogS3JlaXNsYXVmLCBJbW11bnN5c3RlbSwgTmViZW5uaWVyZW4sIEVyc2Now7ZwZnVuZywgS29uemVudHJhdGlvbiB1bmQgRW5lcmdpZSBCb29zdGVyIFwiLFxyXG4gICAgXCJoZWxwLXRleHQ1XCI6XCJXaWUgYmVlaW5mbHVzc2VuIGVsZWt0cm9tYWduZXRpc2NoZSBGZWxkZXIgbWVpbmVuIEvDtnJwZXI/IFwiLFxyXG4gICAgXCJoZWxwLXRleHQ2XCI6XCJBbGxlcyBpbiB1bnNlcmVtIEvDtnJwZXIgaXN0IGVsZWt0cmlzY2gsIHVuc2VyZSBaZWxsZW4ga29tbXVuaXppZXJlbiBtaXQgZWxla3Ryb21hZ25ldGlzY2hlbiBGcmVxdWVuemVuLCB1bnNlciBIZXJ6IGVyemV1Z3QgbWl0IGplZGVtIFNjaGxhZyBlbGVrdHJvbWFnbmV0aXNjaGUgV2VsbGVuLCB1bnNlciBOZXJ2ZW5zeXN0ZW0ga29tbXVuaXppZXJ0LCB3ZW5uIE5ldXJvbmVuIMO8YmVyIFN5bmFwc2VuIGF1ZiBlbGVrdHJvbWFnbmV0aXNjaGUgU2lnbmFsZSByZWFnaWVyZW4uIEluIGRpZXNlbSBTaW5uZSBrw7ZubmVuIHdpciB2ZXJzdGVoZW4sIHdpZSBleHRlcm5lIG1hZ25ldGlzY2hlLCBlbGVrdHJpc2NoZSB1bmQgZWxla3Ryb21hZ25ldGlzY2hlIEZlbGRlciBtaXQgamVkZW0gQXNwZWt0IHVuc2VyZXMgS8O2cnBlcnMgcmVhZ2llcmVuLiBJbmRlbSB3aXIgc3BlemlmaXNjaGUgRnJlcXVlbnplbiBtaXQgbmllZHJpZ2VyIEludGVuc2l0w6R0IHJlZ3VsaWVyZW4sIGvDtm5uZW4gd2lyIGdlbmF1IGF1c3fDpGhsZW4sIHdvcmF1ZiB3aXIgcmVhZ2llcmVuIHdvbGxlbiwgaW5kZW0gd2lyIGF1ZiBiZXN0aW1tdGUgWmVsbGVuLCBPcmdhbmUgdW5kIEdld2ViZSBlaW53aXJrZW4uIFwiLFxyXG4gICAgXCJoZWxwLXRleHQ3XCI6XCJXaWUgaGlsZnQgbWlyIGRpZSBCZWhhbmRsdW5nIGF1ZiB6ZWxsdWzDpHJlciBFYmVuZT8gXCIsXHJcbiAgICBcImhlbHAtdGV4dDhcIjpcIkR1cmNoIGRhcyBBdWZsYWRlbiB2b24gTWFnbmV0ZmVsZGVybiBpbiBkZXIgVW1nZWJ1bmcgdm9uIFplbGxtZW1icmFuZW4gw7ZmZm5lbiBzaWNoIEthbsOkbGUgZsO8ciBlaW5lIGJlc3NlcmUgTsOkaHJzdG9mZmR1cmNoZHJpbmd1bmcuIERhcyDDlmZmbmVuIGRlciBLYW7DpGxlIGbDtnJkZXJ0IGF1Y2ggZWluZSBlaW5mYWNoZXJlIEFiZmFsbGJlc2VpdGlndW5nIHVuZCBzdGVsbHQgZGllIGtvcnJla3RlIFplbGxmdW5rdGlvbiBlZmZpemllbnQgd2llZGVyIGhlci4gRWluIGVmZml6aWVudGVzIFN5c3RlbSB2b24gWmVsbGVuIHNjaGFmZnQgZWZmaXppZW50ZXMgR2V3ZWJlLCBkYXMgc2ljaCB6dSBPcmdhbmVuIHp1c2FtbWVuc2V0enQuIERpZSBXaWVkZXJoZXJzdGVsbHVuZyBkZXIgcmljaHRpZ2VuIEZ1bmt0aW9uIHZvbiBkZXIgemVsbHVsYXJlbiBFYmVuZSBicmluZ3Qgdm9ydGVpbGhhZnRlIExhbmd6ZWl0d2lya3VuZ2VuIGF1ZiBhbGxlIHZlcndhbmR0ZW4gUHJvYmxlbWUgdW5kIHZlcmJlc3NlcnQgZGFzIGFsbGdlbWVpbmUgV29obGJlZmluZGVuLiBFaW5lIGdlc3VuZGUgWmVsbGZ1bmt0aW9uIHZlcnJpbmdlcnQgYXVjaCBkZW4gQmVkYXJmIGFuIFplbGxlcnNhdHosIHZlcmxhbmdzYW10IEFsdGVydW5nc3Byb3plc3NlIHVuZCBFbmVyZ2lldmVyc2Nod2VuZHVuZy4gXCIsXHJcbiAgICBcImhlbHAtdGV4dDlcIjpcIkthbm4gZGllIFBFTUYtVGhlcmFwaWUgbWljaCB2b3IgenVrw7xuZnRpZ2VuIEtyYW5raGVpdGVuIHNjaMO8dHplbj8gXCIsXHJcbiAgICBcImhlbHAtdGV4dDEwXCI6XCJFZmZla3RpdiBhcmJlaXRlbiBiZWkgc3lzdGVtYXRpc2NoZSBFYmVuZSB3aXJkIGRpZSBNw7ZnbGljaGtlaXRlbiBmw7xyIGRpZSBFbnR3aWNrbHVuZyB2b24gS3JhbmtoZWl0ZW4gdmVycmluZ2Vybi4gS3JhbmtoZWl0ZW4gYmVnaW5uZW4gYXVmIHplbGx1bMOkcmVyIEViZW5lIHVuZCBWZXJsZXR6dW5nZW4gbcO8c3NlbiBhdWYgemVsbHVsw6RyZXIgRWJlbmUgYmVnaW5uZW4genUgaGVpbGVuLiBEdXJjaCBkaWUgVmVyd2VuZHVuZyB2b24gZ2VwdWxzdGVuIGVsZWt0cm9tYWduZXRpc2NoZW4gRnJlcXVlbnplbiBrYW5uIGRpZSBhbGxnZW1laW5lIFppcmt1bGF0aW9uIHZlcmJlc3NlcnQgd2VyZGVuLCB3b2R1cmNoIFJlcGFyYXRpb25zcHJvemVzc2UgYmVzY2hsZXVuaWd0IHdlcmRlbi4gRHVyY2ggZGllIFZlcmJlc3NlcnVuZyBkZXIgYWxsZ2VtZWluZW4gemVsbHVsw6RyZW4gR2VzdW5kaGVpdCBicmVjaGVuIHNpZSB3ZW5pZ2VyIGjDpHVmaWcgYWIuIEdlc3VuZGUgT3BlcmF0aW9uc3plbGxlbiBiZXNjaGxldW5pZ2VuIGRpZSBSZWt1cGVyYXRpb24gdW5kIGdsZWljaGVuIGvDtnJwZXJsaWNoZSBGdW5rdGlvbmVuIGF1cy4gXCIsXHJcbiAgICBcImhlbHAtdGV4dDExXCI6XCJTaW5kIG1pciBrZWluZSBNYWduZXRmZWxkZXIgc2NobGVjaHQ/IFwiLFxyXG4gICAgXCJoZWxwLXRleHQxMlwiOlwiRGVyIE15TWF0IGhhdCBlaW5lbiBGcmVxdWVuemJlcmVpY2ggendpc2NoZW4gMUh6IGJpcyAyMDBrSHogdW5kIERpZSBFTUYtU3TDpHJrZSDDvGJlcnNjaHJlaXRldCAxMCBNaWtyby1UZXNsYSBwcm8gS2FuYWwgbmljaHQuIERlciBNeU1hdCBrYW5uIGF1ZmdydW5kIHNlaW5lciA0IEFudGVubmVuIGJpcyB6dSA0IEthbsOkbGUgZ2xlaWNoemVpdGlnIGJldHJlaWJlbiwgYWxzbyBtYXhpbWFsIDQwIE1pa3JvIFRlc2xhLiBNYWduZXRmZWxkZXIgYXXDn2VyaGFsYiBkZXIgdGllZmVuIHVuZCBleHRyZW0gbmllZHJpZ2VuIEZyZXF1ZW56ZW4gd2llIE1pa3Jvd2VsbGVuLSwgSW5mcmFyb3QtLCBSYWRpby0gdW5kIFVsdHJhdmlvbGV0dGZyZXF1ZW56ZW4gaGFiZW4gdW50ZXJzY2hpZWRsaWNoZSBuYWNodGVpbGlnZSBBdXN3aXJrdW5nZW4gYXVmIHVuc2VyZSBaZWxsZW4gdW5kIHVuc2VyZW4gS8O2cnBlci4gRGVyIGdyw7bDn3RlIFRlaWwgdW5zZXJlcyBFeHBvc2l0aW9uc3Jpc2lrb3Mgc3RhbW10IHZvbiBow7ZoZXJlbiBGcmVxdWVuemVuIHdpZSBTdHJvbWxlaXR1bmdlbiB1bmQgSGFuZHlzLCBkaWUgdMOkZ2xpY2ggYW4gdW5zZXJlbiBLw7ZwZmVuIGFuZ2VzY2hsb3NzZW4gc2luZC4gRGllc2UgRnJlcXVlbnplbiBzdGVsbGVuIGjDtmhlcmUgUmlzaWtlbiBkYXIsIGRhIHdpciBzdMOkbmRpZyBtaXQgaWhuZW4ga29uZnJvbnRpZXJ0IHNpbmQgdW5kIHNpZSBrw7ZubmVuIEdld2ViZXNjaMOkZGVuIGF1c2zDtnNlbiwgZGllIFplbGxmdW5rdGlvbiB2ZXLDpG5kZXJuIHVuZCBhbGxnZW1laW5lIHplbGx1bMOkcmUgU2Now6RkZW4gdmVydXJzYWNoZW4uIEVzIGlzdCBwcmFrdGlzY2ggdW5tw7ZnbGljaCwgZWluIExlYmVuIHp1IGbDvGhyZW4sIGRhcyBkaWVzZSBGcmVxdWVuemVuIHZlcm1laWRldCwgc2llIHNpbmQgw7xiZXJhbGwgdW5kIGRyaW5nZW4gaW4gYWxsZXMgZWluLiBXaXIga8O2bm5lbiBFLVNtb2cgbmljaHQgZW50a29tbWVuLCBhYmVyIHdpciBrw7ZubmVuIGRhcyBNeU1hdCB2ZXJ3ZW5kZW4sIGRhcyBtZWhyZXJlIFByb2dyYW1tZSBoYXQsIGRpZSBoZWxmZW4ga8O2bm5lbiwgc2Now6RkbGljaGUgRWZmZWt0ZSB2b24gYWxsIHVuc2VyZW4gc3TDpG5kaWdlbiBlbGVrdHJvbmlzY2hlbiBCb21iYXJkZW1lbnRzIHp1IHJlZHV6aWVyZW4sIGluZGVtIHdpciBGcmVxdWVuemVuIGhpbnp1ZsO8Z2VuLCBkaWUgdW5zZXJlbiBLw7ZycGVyIGltIEdsZWljaGdld2ljaHQgaGFsdGVuIHVuZCBkaWUgZ2VzdW5kZW4sIG5hdMO8cmxpY2hlbiBGcmVxdWVuemVuIGVyaGFsdGVuLiA8LyBwPiBcIixcclxuICAgIFwiaGVscC10ZXh0MTNcIjpcIldpcmQgZGllIFBFTUYtVGhlcmFwaWUgbWVpbmUgTWVkaWthbWVudGUgZXJzZXR6ZW4/IFwiLFxyXG4gICAgXCJoZWxwLXRleHQxNFwiOlwiRGllIFRoZXJhcGllIG1pdCBkZW4gZ2VwdWxzdGVuIGVsZWt0cm9tYWduZXRpc2NoZW4gRnJlcXVlbnplbiBrYW5uIGRhcyBhbGxnZW1laW5lIFdvaGxiZWZpbmRlbiBzaWduaWZpa2FudCB2ZXJiZXNzZXJuIHVuZCB2aWVsZSBuZWdhdGl2ZSBTeW1wdG9tZSB2ZXJyaW5nZXJuIC4uIEVzIGthbm4gbmViZW4gQmVoYW5kbHVuZ2VuIHVuZCBNZWRpa2FtZW50ZW4gdmVyd2VuZGV0IHdlcmRlbiwgdW0gZGllIEVyZ2Vibmlzc2UgenUgdmVyYmVzc2Vybi4gRXMgaXN0IHdpY2h0aWcsIG1pdCBtZWRpemluaXNjaGVuIEZhY2hsZXV0ZW4genUgc3ByZWNoZW4sIGJldm9yIGlyZ2VuZHdlbGNoZSBCZWhhbmRsdW5nZW4gb2RlciBNZWRpa2FtZW50ZSBlcnNldHp0IHdlcmRlbi4gU29iYWxkIGVpbiByaWNodGlnZXIgUGxhbiBlcnN0ZWxsdCB1bmQgRXJnZWJuaXNzZSBnZXNlaGVuIHdlcmRlbiwgaXN0IGVzIG3DtmdsaWNoLCBCZWhhbmRsdW5nZW4gb2RlciBNZWRpa2FtZW50ZSB6dSByZWR1emllcmVuIG9kZXIgenUgYmVzZWl0aWdlbi4gRnJhZ2VuIFNpZSBpbW1lciBuYWNoIG1lZGl6aW5pc2NoZW4gUmF0c2NobMOkZ2VuIG9kZXIgS29uc3VsdGF0aW9uZW4sIGJldm9yIFNpZSBiZXN0ZWhlbmRlIEJlaGFuZGx1bmdlbiDDpG5kZXJuIG9kZXIgZXJzZXR6ZW4uIDwvIHA+IFwiLFxyXG4gICAgXCJoZWxwLXRleHQxNVwiOlwiV2llIGJlZWluZmx1c3NlbiBlbGVrdHJvbWFnbmV0aXNjaGUgRmVsZGVyIG1laW5lbiBLw7ZycGVyPyBcIixcclxuICAgIFwiaGVscC10ZXh0MTZcIjpcIkFsbGVzIGluIHVuc2VyZW0gS8O2cnBlciBpc3QgZWxla3RyaXNjaCwgdW5zZXJlIFplbGxlbiBrb21tdW5pemllcmVuIG1pdCBlbGVrdHJvbWFnbmV0aXNjaGVuIEZyZXF1ZW56ZW4sIHVuc2VyIEhlcnogZXJ6ZXVndCBlbGVrdHJvbWFnbmV0aXNjaGUgV2VsbGVuIG1pdCBKZWRlciBTY2hsYWcga29tbXVuaXppZXJ0IHVuc2VyIE5lcnZlbnN5c3RlbSwgd2VubiBOZXVyb25lbiDDvGJlciBTeW5hcHNlbiBhdWYgZWxla3Ryb21hZ25ldGlzY2hlIFNpZ25hbGUgcmVhZ2llcmVuLiBJbiBkaWVzZW0gU2lubmUga8O2bm5lbiB3aXIgdmVyc3RlaGVuLCB3aWUgZXh0ZXJuZSBtYWduZXRpc2NoZSwgZWxla3RyaXNjaGUgdW5kIGVsZWt0cm9tYWduZXRpc2NoZSBGZWxkZXIgbWl0IGplZGVtIEFzcGVrdCB1bnNlcmVyXCIsXHJcblxyXG4gICAgXCJoZWxwLXRleHQyM1wiOiBcIkvDtm5udGVuIE1hZ25ldGZlbGRlciBlaW5lIMOcYmVyZG9zaWVydW5nIHZlcnVyc2FjaGVuP1wiLFxyXG4gICAgXCJIZWxwLXRleHQyNFwiOiBcIkRpZSBNeU1hdCBhcmJlaXRldCBtaXQgZ2VwdWxzdGVuIE1hZ25ldGZlbGQgdm9uIHNlaHIgZ2VyaW5nZXIgSW50ZW5zaXTDpHQgZWluZSBnZXN1bmRlIFplbGxlIGluIGlkZWFsZXIgS2FwYXppdMOkdCBhcmJlaXRldCwgc28gZGFzcyBTaWUga2VpbmUgTm90d2VuZGlna2VpdCBmw7xyIG1laHIgRW5lcmdpZSB1bmQga8O2bm5lbiBuaWNodCBtZWhyIEVuZXJnaWUgYWt6ZXB0aWVyZW4sIHNvIGRpZXNlIEZyZXF1ZW56ZW4gaWdub3JpZXJlbiAuLiBFaW5lIGJlc2Now6RkaWd0ZSBvZGVyIGRlZmVrdGUgWmVsbGUga2FubiBlaW5lbiBUZWlsIGRpZXNlciBFbmVyZ2llIGFic29yYmllcmVuLCBhYmVyIGVzIGlzdCB1bm3DtmdsaWNoLCBzaWUgenUgw7xiZXJsYXN0ZW4sIGRhIGtlaW5lIE3DtmdsaWNoa2VpdCBiZXN0ZWh0LCBtZWhyIEVuZXJnaWUgenUgc3BlaWNoZXJuLCBhbHMgYmVuw7Z0aWd0IHdpcmQuIDwvIFA+IFwiLFxyXG5cclxuICAgIFwiaGVscC10ZXh0MjVcIjogXCJXYXMgc2luZCBlaW5pZ2UgZGVyIGdydW5kbGVnZW5kZW4gcG9zaXRpdmVuIFdpcmt1bmdlbiwgZGllIFBFTUZzIGF1ZiBtZWluZW4gS8O2cnBlciBoYWJlbiB3ZXJkZW4/IDwvIGRpdj5cIixcclxuICAgIFwiaGVscC10ZXh0MjZcIjogXCJWZXJiZXNzZXJ1bmcgZGVyIEdld2ViZWhlaWx1bmc8YnI+U2NobWVyenJlZHVrdGlvbjxicj5FbmVyZ2llIHN0ZWlnZXJuPGJyPlZlcmJlc3NlcmUgZGVuIFNjaGxhZiA8YnI+RXMgbWFjaHQgZGFzIFdlaWNoZ2V3ZWJlIGZsZXhpYmxlciA8YnI+U3RpbXVsYXRpb24gTWVyaWRpYW5hIDxicj5TZW5rdW5nIGRlcyBCbHV0ZHJ1Y2tzPGJyPkdlcmlubnVuZ3NmYWt0b3JlbiB2ZXJiZXNzZXJuPGJyPlJlZHV6aWVydGUgQXJ0aHJpdGlzIEF1Zm5haG1lIHZvbjxicj5JbW11bnN5c3RlbSBTdGltdWxhdGlvbjxicj5FbnRnaWZ0dW5nPGJyPkhlbGZlbiBTaWUgZGVyIG5lcnbDtnNlbiBGdW5rdGlvbiA8YnI+VmVyYmVzc2VydW5nIGRlciBOw6RocnN0b2ZmYXVmbmFobWU8YnI+UmVkdWt0aW9uIGRlciBNdXNrZWxzcGFubnVuZ1wiLFxyXG5cclxuXHJcblxyXG4gICAgICAgIFwiYWRkaWN0aW9uLXVwcGVyXCI6IFwiU1VDSFRcIixcclxuICAgICAgICBcImFkZGljdGlvbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBFcmfDpG56ZW5kIGJlaSBTdWNodGJlaGFuZGx1bmdlbi4g4oCiIFp1ciBBYmdld8O2aG51bmcgdm9uIFppZ2FyZXR0ZW4tLCBBbGtvaG9sLSBvZGVyIERvcmdlbmtvbnN1bS4g4oCiIE1pbmRlcnQgZGllIE5lYmVud2lya3VuZ2VuIGJlaSBFbnR6dWdzZXJzY2hlaW51bmdlbi4gWnVzYXR6cHJvZ3JhbW1lOiBFbnRnaWZ0dW5nLCAgRS1zbW9nLCBOZWJlbm5pZXJlbiwgRnJ1c3RyYXRpb24sIEZyZXVkZSwgRnJpZWRlLCBFbnRzcGFubnVuZywgIEVyZGUtRWxlbWVudCwgV2Fzc2VyLUVsZW1lbnQsIE1ldGFsbC1FbGVtZW50LCBMZWJlci1NZXJpZGlhbiwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIERpY2tkYXJtLU1lcmlkaWFuLCBIZXJ6LU1lcmlkaWFuLCBOaWVyZW4tTWVyaWRpYW4sIDEuIHVuZCAyLiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJhZHJlbmFsLWdsYW5kLXVwcGVyXCI6IFwiTkVCRU5OSUVSRU5cIixcclxuICAgICAgICBcImFkcmVuYWwtZ2xhbmQtZGVzY3JpcHRpb25cIjogXCLigKIgVW50ZXJzdMO8dHp0IGRpZSBFcmhvbHVuZyBiZWkgc3RhcmtlciBFcnNjaMO2cGZ1bmcuIOKAoiBCZWkgRGF1ZXItTcO8ZGlna2VpdC4g4oCiIFVudGVyc3TDvHR6ZW5kIGJlaSBIb3Jtb24tVW5nbGVpY2hnZXdpY2h0LiDigKIgQWxzIEVyZ8Okbnp1bmdzLUJlaGFuZGx1bmcgYmVpIEFsbGVyZ2llbiB1bmQgQXV0b2ltbXVuLVByb2JsZW1lbi4gWnVzYXR6cHJvZ3JhbW1lOiBSw7xja2Vuc2NobWVyemVuLCBFcnNjaMO2cGZ1bmcsIExlYmVuc2ZyZXVkZSwgRW5lcmdpZS1TcGVuZGVyLCBFLVNtb2csIFdhc3Nlci1FbGVtZW50LCBXaXJiZWxzw6R1bGUgKEZlaGxhdXNyaWNodHVuZ2VuIGRlciBXaXJiZWxzw6R1bGUga8O2bm5lbiBOaWVyZW5zdMO2cnVuZ2VuIGJlZ8O8c3RpZ2VuKSwgMS4gdW5kIDIuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiYW50aS1hZ2luZy11cHBlclwiOiBcIkFOVEktQUdJTkdcIixcclxuICAgICAgICBcImFudGktYWdpbmctZGVzY3JpcHRpb25cIjogXCLigKIgQW50aS1hZ2luZyBQcm9ncmFtbSB1bSBkaWUgQmlvLUtvbW11bmlrYXRpb25zYWt0aXZpdMOkdCBpbSBPcmdhbmlzbXVzIGF1ZnJlY2h0IHp1IGVyaGFsdGVuLiDigKIgSMOkbHQgZGVuIEvDtnJwZXIgaW4gRm9ybS4g4oCiIGbDvHIgZGVuIGVyZm9sZ3JlaWNoZW4gQWJ0cmFuc3BvcnQgdm9uIFN0b2Zmd2VjaHNlbGFiZmFsbHByb2R1a3Rlbi4g4oCiIFZlcnJpbmdlcnQgZGllIHTDpGdsaWNoZSBrw7ZycGVybGljaGUgdW5kIGdlaXN0aWdlIFN0cmVzc2xhZHVuZy4gWnVzYXR6cHJvZ3JhbW1lOiBLbm9jaGVuLCBFbmVyZ2llLUF1c2dsZWljaCwgTWluZXJhbC1TdG9mZndlY2hzZWwsIEJpbmRlZ2V3ZWJlLCBFbGVtZW50ZSwgTWVyaWRpYW5lLCAxLiDigJMgMi4gdW5kIDcuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiYXVkaXRvcnktdXBwZXJcIjogXCJHRUjDllJcIixcclxuICAgICAgICBcImF1ZGl0b3J5LWRlc2NyaXB0aW9uXCI6IFwi4oCiIEVyZ8Okbnp0IGFsbGUgQmVoYW5kbHVuZ2VuIGJlaSBTdMO2cnVuZ2VuIGRlcyBHZWjDtnItIHVuZCBHbGVpY2hnZXdpY2h0c3lzdGVtLiDigKIgVm9yYmV1Z2VuZGUgQW53ZW5kdW5nIHp1ciBCZWliZWhhbHR1bmcgZGVyIEjDtnJxdWFsaXTDpHQuIOKAoiBFcmfDpG56dW5nc2JlaGFuZGx1bmcgYmVpIGNocm9uaXNjaGVuIEdlaMO2cmthbmFsLSB1bmQgTWl0dGVsb2hyLUVudHrDvG5kdW5nZW4uIOKAoiBBbndlbmRlbiBiZWkgbGF1dGVtIEFyYmVpdHN1bWZlbGQgYWxzIFByw6R2ZW50aW9uLiBadXNhdHpwcm9ncmFtbWU6IEtyZWlzbGF1ZnN5c3RlbSwgTHltcHN5c3RlbSwgQXRtdW5nc3N5c3RlbS4gTmViZW5ow7ZobGVuL1N0aXJuaMO2aGxlbiwgRW50Z2lmdHVuZywgTmllcmVuLU1lcmlkaWFuLCBMZWJlci1NZXJpZGlhbiwgV2Fzc2VyLUVsZW1lbnQsIDYuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiYmFja2FjaGUtdXBwZXJcIjogXCJSw5xDS0VOU0NITUVSWkVOXCIsXHJcbiAgICAgICAgXCJiYWNrYWNoZS1kZXNjcmlwdGlvblwiOiBcIuKAoiBWb3JiZXVndW5nIHVuZCBNaW5kZXJ1bmcgdm9uIFLDvGNrZW5zY2htZXJ6ZW4uIOKAoiBVbnRlcnN0w7x0emVuZCBiZWkgV2lyYmVsc8OkdWxlbi1UaGVyYXBpZSB1bmQgQmFuZHNjaGVpYmVuLVZvcmbDpGxsZW4uIOKAoiAgTGluZGVydCBTY2htZXJ6ZW4gaW0gTGVuZGVuYmVyZWljaCAoSGV4ZW5zY2h1c3MpLiDigKIgTGluZGVydCBNdXNrZWxrYXRlciBuYWNoIGvDtnJwZXJsaWNoZXIgQW5zdHJlbmd1bmcuIOKAoiBVbnRlcnN0w7x0enQgZGllIEJlaGFuZGx1bmcgdm9uIFLDvGNrZW5zY2htZXJ6ZW4sIGRpZSBIYW5kLSB1bmQgQXJtYmV3ZWd1bmdlbiBibG9ja2llcmVuLiDigKIgWnVzYXR6cHJvZ3JhbW1lOiBWZXJkYXV1bmcsIFdpcmJlbHPDpHVsZSwgTmFja2VuL1NjaHVsdGVyLCBNdXNrZWxnZXdlYmUsIE5lcnZlbiwgRnJ1c3RyYXRpb24sIEZyZXVkZSwgV2Fzc2VyLUVsZW1lbnQsIE5pZXJlbi1NZXJpZGlhbiwgSGFybmJsYXNlLU1lcmlkaWFuLCBEaWNrZGFybS1NZXJpZGlhbiwgMS4gdW5kIDIuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiYm9uZXMtdXBwZXJcIjogXCJLTk9DSEVOXCIsXHJcbiAgICAgICAgXCJib25lcy1kZXNjcmlwdGlvblwiOiBcIuKAoiBJbiBkZXIgUmVoYWJpbGl0YXRpb25zcGVyaW9kZSBuYWNoIEtub2NoZW5icsO8Y2hlbiB1bmQgS25vY2hlbmtyYW5raGVpdGVuLiDigKIgT3B0aW1pZXJ0IGRpZSBTdG9mZndlY2hzZWxmdW5rdGlvbmVuIGRlcyBLbm9jaGVuZ2V3ZWJlcy4g4oCiIFNjaG1lcnpsaW5kZXJuZCBiZWkgQmVlaW50csOkY2h0aWd1bmcgZGVyIFN0b2Zmd2VjaHNlbGZ1bmt0aW9uZW4gZGVzIEtub2NoZW5nZXdlYmVzLiDigKIgRXJnw6RuenQga25vY2hlbnN0w6Rya2VuZGUgVGhlcmFwaWVuLiDigKIgVW50ZXJzdMO8dHp0IGRpZSBLYWx6aXVtYXVmbmFobWUgaW4gZGllIEtub2NoZW56ZWxsZW4gKGJldWd0IEVudGthbGt1bmcgdm9yKS4g4oCiIFNjaG1lcnpsaW5kZXJuZCBiZWkgS25vY2hlbndhY2hzdHVtIGJlaSBLaW5kZXIuIFp1c2F0c3Byb2dyYW1tZTogQmluZGVnZXdlYmUsIE5lYmVubmllcmVuLCBTY2hpbGRkcsO8c2VuLCBNaW5lcmFsLVN0b2Zmd2VjaHNlbC1TdMO2cnVuZywgQW50aSBBZ2luZywgVmVyZGF1dW5nc3N5c3RlbSwgTWV0YWxsLUVsZW1lbnQsIFdhc3Nlci1FbGVtZW50LCBEaWNrZGFybS1NZXJpZGlhbiwgTGViZXItTWVyaWRpYW4sIE5pZXJlbi1NZXJpZGlhbiwgMS4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJjaGlsZC1kZXZlbG9wZW1lbnQtdXBwZXJcIjogXCJLSU5ETElDSEUgRU5UV0lDS0xVTkdcIixcclxuICAgICAgICBcImNoaWxkLWRldmVsb3BlbWVudC1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGllIGdlaXN0aWdlIHVuZCBrw7ZycGVybGljaGUgRW50d2lja2x1bmcgYmVpIEtpbmRlcm4uIOKAoiBTdGltbXVsaWVydCBkaWUgc3BlemlmaXNjaGVuIEdld2ViZSBiZWkgZGVyIEVudHdpY2tsdW5nLiDigKIgVmVyYmluZHVuZyBtaXQgZGVyIEVyZGUsIEVyZHVuZy4gV2ljaHRpZyBmw7xyIEtpbmRlciBkaWUgaW4gc3TDpGR0aXNjaGVuIEdlYmlldGVuIGxlYmVuLiBadXNhdHpwcm9ncmFtbWU6IEVuZXJnaWUtQXVzZ2xlaWNoLCBLbm9jaGVuLCBNdXNrZWxuLCBOZXJ2ZW5zeXN0ZW0sIEUtU21vZywgRnJldWRlLCBGcnVzdHJhdGlvbiwgRWxlbWVudGUsIFBlcmlrYXJkaXVtLU1lcmlkaWFuLCBNaWx6L0JhdWNoc3BlaWNoZWxkcsO8c2UtTWVyaWRpYW4sIENoYWtyYXNcIixcclxuICAgICAgICBcImNpcmN1bGF0b3J5LXN5c3RlbS11cHBlclwiOiBcIkhFUlotS1JFSVNMQVVGU1lTVEVNXCIsXHJcbiAgICAgICAgXCJjaXJjdWxhdG9yeS1zeXN0ZW0tZGVzY3JpcHRpb25cIjogXCLigKIgVW50ZXJzdMO8dHplbmQgYmVpIEtyZWlzbGF1ZnByb2JsZW1lbi4g4oCiIEJlaSBOZWlndW5nIHp1IMOWZGVtZW4gaW4gZGVuIEV4dHJlbWl0w6R0ZW4uIOKAoiBFcmfDpG56dCBkaWUgQmVoYW5kbHVuZyB2b24gQXJ0ZXJpb3NrbGVyb3NlLiDigKIgWnVzYXR6cHJvZ3JhbW1lOiBOZWJlbm5pZXJlbiwgRW50c3Bhbm51bmcsIEtvbnplbnRyYXRpb24sIEdlZMOkY2h0bmlzLCBGZXVlci1FbGVtZW50LCBIZXJ6LU1lcmlkaWFuLCBQZXJpa2FyZGl1bS1NZXJpZGlhbiwgMS4gdW5kIDQuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiY29uY2VudHJhdGlvbi11cHBlclwiOiBcIktPTlpFTlRSQVRJT05cIixcclxuICAgICAgICBcImNvbmNlbnRyYXRpb24tZGVzY3JpcHRpb25cIjogXCLigKIgUmVndCBkYXMgR2Vkw6RjaHRuaXMgYW4gc3RlaWdlcnQvdmVyYmVzc2VydCBQcm9ibGVtbMO2c3VuZ2VuIHVuZCBTcHJhY2hnZXNjaGljay4g4oCiIE1vYmlsaXNpZXJ0IGRpZSBFbmVyZ2llcmVzZXJ2ZW4gdW5kIGbDtnJkZXJ0IGRpZSBJbnR1aXRpb24uIEdlc2Now6RmdHN0cmVmZmVuIHVuZCBQcsO8ZnVuZ2VuLiBadXNhdHpwcm9ncmFtbWU6IEVuZXJnaWUtQXVzZ2xlaWNoLCBBbnRpIEFnaW5nLCBOZWJlbm5pZXJlbiwgRGFybWZsb3JhLCBHZWTDpGNodG5pcywgTWlseiwgIEJhdWNoc3BlaWNoZWxkcsO8c2UtTWVyaWRpYW4sIE5pZXJlbi1NZXJpZGlhbiwgSGVyei1NZXJpZGlhbiwgMS4g4oCTIDMuIHVuZCA2LiBDaGFrcmFcIixcclxuICAgICAgICBcImNvbm5lY3RpdmUtdGlzc3VlLXVwcGVyXCI6IFwiQklOREVHRVdFQkVcIixcclxuICAgICAgICBcImNvbm5lY3RpdmUtdGlzc3VlLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEJldWd0IFZlcmxldHp1bmdlbiB2b3IgYmVpIMO8YmVyc3RyYXBhemllcnRlbSBCaW5kZWdld2ViZSBiZWkgTGV1dGVuIG1pdCBCaW5kZWdld2Vic3NjaHfDpGNoZSAoei5CLiBhbmbDpGxsaWcgZWluZSBIZXJuaWUgenUgZW50d2lja2VsbiwgS3JhbXBmYWRlcm4pLiDigKIgV2ljaHRpZyBiZWkgeC13ZWxjaGVtIEFudGktQWdpbmcgUHJvZ3JhbW0uIEJlc3NlcmUgVmVyZsO8Z2JhcmtlaXQgZGVyIE7DpGhyc3RvZmZlIGF1ZiBkYXMgT3JnYW4gU3lzdGVtLiBadXNhdHpwcm9ncmFtbWU6ICBBbnRpLUFnaW5nLCBOZWJlbm5pZXJlbiwgVmVyZGF1dW5nc3N5c3RlbSwgTWluZXJhbGllbi1TdG9mZndlY2hzZWwtU3TDtnJ1bmcsIEdlbGVua2UsIE11c2tlbG4sIFdhc3Nlci1FbGVtZW50LCBIb2x6LUVsZW1lbnQsIDEuLCAzLiB1bmQgNi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJjb25zdGlwYXRpb24tdXBwZXJcIjogXCJWRVJTVE9QRlVOR1wiLFxyXG4gICAgICAgIFwiY29uc3RpcGF0aW9uLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEJlaSBha3V0ZXIgdW5kIGNocm9uaXNjaGVyIFZlcnN0b3BmdW5nLiBadXNhdHpwcm9ncmFtbWU6IFZlcmRhdXVuZ3NzeXN0ZW0sIE1pbmVyYWxpZW4tU3RvZmZ3ZWNoc2VsLVN0w7ZydW5nLCBEYXJtZmxvcmEsIEdhbGxlbmJsYXNlLU1lcmlkaWFuLCBEaWNrZGFybS1NZXJpZGlhbiwgMS4gIHVuZCAzLiBDaGFrcmFcIixcclxuICAgICAgICBcImRldG94aWZpY2F0aW9uLXVwcGVyXCI6IFwiRU5UR0lGVFVOR1wiLFxyXG4gICAgICAgIFwiZGV0b3hpZmljYXRpb24tZGVzY3JpcHRpb25cIjogXCLigKIgVW50ZXJzdMO8dHp0IGRpZSBrw7ZycGVyZWlnZW5lbiBFbnRnaWZ0dW5nc21lY2hhbmlzbWVuLiDigKIgTsO8dHpsaWNoIG5hY2ggamVkZXIgVmVyZ2lmdHVuZy4g4oCiIEJpZXRldCBTY2h1dHogYmVpbSBQYXNzaXZyYXVjaGVuLiDigKIgVW50ZXJzdMO8dHplbmQgYmVpIFJhdWNoLSwgQWxrb2hvbC0gdW5kIE1lZGlrYW1lbnRlbi1FbnR6dWcuIOKAoiBadXNhdHpwcm9ncmFtbTogVmVyZGF1dW5nLCBEYXJtZmxvcmEsIEUtU21vZywgQmluZGVnZXdlYmUsIFZlcnN0b3BmdW5nIChzb2Zlcm4gYW53ZW5kYmFyKSwgRnJpZWRlbiwgTWlsei9CYXVjaHNwZWljaGVsZHLDvHNlLU1lcmlkaWFuLCBMZWJlci1NZXJpZGlhbiwgTmllcmVuLU1lcmlkaWFuLCBEaWNrZGFybS1NZXJpZGlhbiwgTHVuZ2VuLU1lcmlkaWFuLCAyLiBDaGFrcmEgIEJlbWVya3VuZzogTklDSFQgQU5XRU5ERU4gSU4gREVSIFNDSFdBTkdFUlNDSEFGVCFcIixcclxuICAgICAgICBcImRpYXJyaGVhLXVwcGVyXCI6IFwiRFVSQ0hGQUxMXCIsXHJcbiAgICAgICAgXCJkaWFycmhlYS1kZXNjcmlwdGlvblwiOiBcIuKAoiBCZWkgYWt1dGVtIHVuZCBjaHJvbmlzY2hlbSBEdXJjaGZhbGwuIFp1c2F0enByb2dyYW1tZTogVmVyZGF1dW5nc3N5c3RlbSwgRW50Z2lmdHVuZywgRGFybWZsb3JhLCBNYWdlbi1NZXJpZGlhbiwgRMO8bm4tIHVuZCBEaWNrZGFybS1NZXJpZGlhbiwgRmV1ZXItRWxlbWVudCwgMS4gdW5kIDMuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiZGlnZXN0aXZlLXN5c3RlbS11cHBlclwiOiBcIlZFUkRBVVVOR1NTWVNURU1cIixcclxuICAgICAgICBcImRpZ2VzdGl2ZS1zeXN0ZW0tZGVzY3JpcHRpb25cIjogXCLigKIgVmVyZGF1dW5nc2Jlc2Nod2VyZGVuLiDigKIgU3RpbW11bGllcnQgZGllIE9yZ2FuZSBkZXMgVmVyZGF1dW5nc3N5c3RlbXMuIOKAoiBGw7ZyZGVydCBkaWUgQXVmbmFobWUgdm9uIFZpdGFtaW5lbiB1bmQgTmFocnVuZ3NlcmfDpG56dW5nc21pdHRlbC4g4oCiIFVudGVyc3TDvHR6dCBkYXMgVmVyZGF1dW5nc3N5c3RlbSBiZWkgc2Nod2VyIHZlcmRhdWxpY2hlbiBMZWJlbnNtaXR0ZWxuICAoTcO8ZGlna2VpdCBuYWNoIGRlciBOYWhydW5nc2F1Zm5haG1lKS4g4oCiIFVudGVyc3TDvHR6ZW5kIGJlaSBsYW5nZnJpc3RpZ2VyIHBoYXJtYXpldXRpc2NoZXIgQmVoYW5kbHVuZywgdmVybWluZGVydCBOZWJlbndpcmt1bmdlbiBpbSBWZXJkYXV1bmdzdHJha3QuIFp1c2F0enByb2dyYW1tZTogRGFybWZsb3JhLCBFbnRnaWZ0dW5nLCBGcnVzdHJhdGlvbiwgTWFnZW4tTWVyaWRpYW4sIE1pbHovQmF1Y2hzcGVpY2hlbGRyw7xzZS1NZXJpZGlhbiwgRMO8bm5kYXJtLU1lcmlkaWFuLCBEaWNrZGFybS1NZXJpZGlhbiwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIEVyZGUtRWxlbWVudCwgTWV0YWwtRWxlbWVudCwgMy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXHJcbiAgICAgICAgXCJkaXNjZXJubWVudC11cHBlclwiOiBcIkdFRMOEQ0hUTklTXCIsXHJcbiAgICAgICAgXCJkaXNjZXJubWVudC1kZXNjcmlwdGlvblwiOiBcIuKAoiBVbnRlcnN0w7x0enQgZGllIE1lcmtmw6RoaWdrZWl0LiDigKIgU3RlaWdlcnQgZGllIEF1Zm5haG1lZsOkaGlna2VpdCBmw7xyIHdpY2h0aWdlIEluZm9ybWF0aW9uZW4uIOKAoiBVbnRlcnN0w7x0enQgZGllIEtvbnplbnRyYXRpb25zZsOkaGlna2VpdC4g4oCiIEdlc3RlaWdlcnRlIExlcm5mw6RoaWdrZWl0LiBadXNhdHpwcm9ncmFtbWU6IEtvbnplbnRyYXRpb24sIEtyZWlzbGF1ZnN5c3RlbSwgRW5lcmdpZXNwZW5kZXIsIEVyZGUtRWxlbWVudCwgV2Fzc2VyLUVsZW1lbnQsIEdhbGxlbmJsYXNlLU1lcmlkaWFuLCBNaWx6L0JhdXNjaHNwZWljaGVsZHLDvHNlLU1lcmlkaWFuLCBIZXJ6LU1lcmlkaWFuLCA1LiwgNi4gdW5kIDcuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiZS1zbW9nLXVwcGVyXCI6IFwiRUxFS1RSTy1TTU9HXCIsXHJcbiAgICAgICAgXCJlLXNtb2ctZGVzY3JpcHRpb25cIjogXCLigKIgRsO8ciBMZXV0ZSBkaWUgaW4gZW5nZW0gS29udGFrdCBtaXQgZWxla3Ryb25pc2NoZW4gdW5kIGVsZWt0cmlzY2hlbiBHZXLDpHRlbiBzdGVoZW4uIOKAoiBCZWkgSGFuZHktLCBNaWtyb3dlbGxlbi0gdW5kIFRlbGVmb25iZXN0cmFobHVuZyAodi5hLiBpbiBkaWNodCBiZXNpZWRlbHRlbiBHZWJpZXRlbikuIOKAoiBNaW5kZXN0ZW5zIHp3ZWltYWwgcHJvIFdvY2hlIGFud2VuZGVuIS4g4oCiIEfDvG5zdGlnIGbDvHIgSGVpbGVyL2lubmVuOiBSZWluaWd0IGRpZSBBdXJhIHZvbiBzY2h3ZXJlbiBuZWdhdGl2ZW4gRW5lcmdpZW4uIFp1c2F0enByb2dyYW1tZTogRW5lcmdpZS1BdXNnbGVpY2gsIE1pbHovQmF1Y2hzcGVpY2hlbGRyw7xzZS1NZXJpZGlhbiwgRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIEFsbGUgQ2hha3JhIFByb2dyYW1tZVwiLFxyXG4gICAgICAgIFxyXG4gICAgICAgIFwiZW5lcmd5LWJhbGFuY2luZy11cHBlclwiOiBcIkVORVJHSUVIQVVTSEFMVFwiLFxyXG4gICAgICAgIFwiZW5lcmd5LWJhbGFuY2luZy1kZXNjcmlwdGlvblwiOiBcIuKAoiBUw6RnbGljaCBmw7xyIGRhcyBhbGxnZW1laW5lIFdvaGxiZWZpbmRlbi4g4oCiIE5vcm1hbGlzaWVydCBvcmdhbmlzY2hlIFVudGVyLSBvZGVyIMOcYmVyZnVua3Rpb24uIOKAoiBadW0gQXVzZ2xlaWNoIGRlciBLb29yZGluYXRpb25zZsOkaGlna2VpdC4g4oCiIFZvcmJldWdlbmQgYmVpIGjDpHVmaWdlbiBLb3Bmc2NobWVyemVuLiDigKIgQmVpIGthbHRlbiBHbGllZGVybWFzc2VuIChFeHRyZW1pdMOkdGVuKS4gWnVzYXR6cHJvZ3JhbW1lOiBFLXNtb2csIEZydXN0cmF0aW9uLCBGcmV1ZGUsIE5pZXJlbi1NZXJpZGlhbiwgV2Fzc2VyLSBFbGVtZW50LCAxLiB1bmQgNC4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJlbmVyZ3ktYm9vc3Rlci11cHBlclwiOiBcIkVORVJHSUVTQ0hVQlwiLFxyXG4gICAgICAgIFwiZW5lcmd5LWJvb3N0ZXItZGVzY3JpcHRpb25cIjogXCLigKIgR2Vpc3RpZ2VyIEFudHJpZWIgaW4gU3RyZXNzLVNpdHVhdGlvbmVuLiDigKIgR2VzdGVpZ2VydGUgTGVpc3R1bmdzZsOkaGlna2VpdCBpbSBTcG9ydCB1bmQgYmVpIGRlciBBcmJlaXQuIOKAoiBNb2JpbGlzaWVydCBkaWUgRW5lcmdpZXJlc2VydmVuIHVuZCB2ZXJiZXNzZXJ0IGRpZSBLb29yZGluYXRpb24uIOKAoiBBbHMgVm9yYmVyZWl0dW5nIGF1ZiBlaW5lbiBXZXR0a2FtcGYsIGVpbiBHZXNjaMOkZnRzLU1lZXRpbmcgdW5kIGF1ZiBQcsO8ZnVuZ2VuLiBLbMOkcnQgZGVuIEdlaXN0LiBadXNhdHpwcm9ncmFtbWU6IEVuZXJnaWUtQXVzZ2xlaWNoLCBBbnRpLUFnaW5nLCBOZWJlbm5pZXJlbiwgU2NoaWxkZHLDvHNlbiwgTmllcmVuLU1lcmlkaWFuLCBXYXNzZXItRWxlbWVudCwgTGViZXItTWVyaWRpYW4sIEtyZWlzbGF1ZiwgQXRtdW5nc3N5c3RlbSwgMS4g4oCTIDMuIHVuZCA2LiBDaGFrcmFcIixcclxuICAgICAgICBcImV4aGF1c3Rpb24tdXBwZXJcIjogXCJFUlNDSMOWUEZVTkdcIixcclxuICAgICAgICBcImV4aGF1c3Rpb24tZGVzY3JpcHRpb25cIjogXCLigKIgR2VuZXN1bmcgdm9uIGV4dHJlbWVyIE3DvGRpZ2tlaXQgdW5kIEVyc2Now7ZwZnVuZy4g4oCiIEzDtnN0IGlubmVyZSBJbmZvcm1hdGlvbnNibG9ja2FkZW4uIOKAoiBNaW5kZXJ0IFVud29obHNlaW4gYXVmZ3J1bmQgdm9uIG1hbmdlbG5kZXIgRHVyY2hibHV0dW5nLiBadXNhdHpwcm9ncmFtbWU6ICBOZWJlbm5pZXJlbiwgU2NoaWxkZHLDvHNlbiwgRW5lcmdpZS1TcGVuZGVyLCBGcnVzdHJhdGlvbiwgS3JlaXNsYXVmLCBGcmV1ZGUsIExlYmVyLU1lcmlkaWFuLCBIZXJ6LU1lcmlkaWFuLCBQZXJpa2FyZC1NZXJpZGlhbiwgRmV1ZXItRWxlbWVudCwgMS4gLCAyLiAgdW5kIDMuICBDaGFrcmFcIixcclxuICAgICAgICBcImV5ZXNpZ2h0LXVwcGVyXCI6IFwiU0VIVkVSTcOWR0VOXCIsXHJcbiAgICAgICAgXCJleWVzaWdodC1kZXNjcmlwdGlvblwiOiBcIuKAoiBIaWxmcmVpY2ggYmVpIG3DvGRlbiBBdWdlbi4g4oCiIEVybGVpY2h0ZXJ0IGRpZSBFbnRzcGFubnVuZyBkZXIgQXVnZW5tdXNrZWxuLiDigKIgVm9yYmV1Z2VuZCBnZWdlbiBQcm9ibGVtZSB1bmQgS3JhbmtoZWl0ZW4gZGVyIEF1Z2VuIHVuZCBkZXMgU2VodmVybcO2Z2Vucy4gWnVzYXR6cHJvZ3JhbW1lOiBIb2x6LUVsZW1lbnQsIERyZWlmYWNoZXItRXJ3w6RybWVyLU1lcmlkaWFuLCBOaWVyZW4tIHVuZCBMZWJlci1NZXJpZGlhbiwgNi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJmZW1hbGUtdXBwZXJcIjogXCJGUkFVRU4gU1BFWklGSVNDSFwiLFxyXG4gICAgICAgIFwiZmVtYWxlLWRlc2NyaXB0aW9uXCI6IFwi4oCiIFVudGVyc3TDvHR6dCBkYXMgRm9ydHBmbGFuenVuZ3NzeXN0ZW0gc293aWUgZGllIEdlc2NobGVjaHRzb3JnYW5lLiDigKIgUmVndWxpZXJ0IGRlbiBNZW5zdHJ1YXRpb25zenlrbHVzICB1bmQgZXJow7ZodCBkYXMgV29obGJlZmluZGVuIHZvciB1bmQgd8OkaHJlbmQgZGVyIE1lbnN0cnVhdGlvbi4g4oCiICBCZWkgaMOkdWZpZyB2b3Jrb21tZW5kZW4gWnlzdGVuLiDigKIgVW50ZXJzdMO8dHp0IFBNUyBTeW1wdG9tZSAoUHLDpG1lbnN0cnVlbGxlcyBTeW5kcm9tKS4g4oCiIFp1ciBFcmfDpG56dW5nIGJlaSBJbmtvbnRpbmVuei1CZWhhbmRsdW5nZW4uIOKAoiBGw7xyIE3DpG5uZXIgbWl0IHN0YXJrZXIgWWluLSBLb25zdGl0dXRpb24uIFp1c2F0enByb2dyYW1tZTogRnJldWRlLCBGcnVzdHJhdGlvbiwgRnJpZWRlLCBIYXJuc3lzdGVtLCBLcmVpc2xhdWZzeXN0ZW0sIE1pbHovQmF1Y2hzcGVpY2hlbGRyw7xzZS1NZXJpZGlhbiwgSGFybmJsYXNlLU1lcmlkaWFuLCBMZWJlci1NZXJpZGlhbiwgMS4gdW5kIDIuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiZmx1LXVwcGVyXCI6IFwiR1JJUFBFXCIsXHJcbiAgICAgICAgXCJmbHUtZGVzY3JpcHRpb25cIjogXCLigKIgU3RpbW11bGllcnQgZGFzIEltbXVuc3lzdGVtLiDigKIgU3RpbW11bGllcnQgZGVuIEhlaWx1bmdzcHJvemVzcyBiZWkgR3JpcHBlLCBCcm9uY2hpdGlzLCBNYW5kZWxlbnR6w7xuZHVuZywgTHVuZ2VuZW50esO8bmR1bmcgdW5kIERhcm1ncmlwcGUuIOKAoiBCZWdpbm5lIG1pdCBkaWVzZW0gUHJvZ3JhbW0gYmVpIGRlbiBlcnN0ZW4gR3JpcHBlc3ltcHRvbWVuIHVuZCBtZWhyZXJlIFRhZ2UgbmFjaGRlbSBkaWUgU3lwdG9tZSB2ZXJzY2h3dW5kZW4gc2luZC4gWnVzYXR6cHJvZ3JhbW1lOiBJbW11bnN5c3RlbSwgQXRtdW5nc3N5c3RlbSwgTmViZW5ow7ZobGVuLCBWZXJkYXV1bmdzc3lzdGVtLCAgU21vZywgRW5lcmdpZS1BdXNnbGVpY2gsIEZydXN0cmF0aW9uLCBGcmV1ZGUsICBFcmRlLUVsZW1lbnQsIERpY2tkYXJtLU1lcmlkaWFuLCBMdW5nZW4tTWVyaWRpYW4sIDMuLCA0LiAgdW5kIDUuICBDaGFrcmFcIixcclxuICAgICAgICBcImdsdWNvc2UtbWV0YWJvbGljLWRpc29yZGVycy11cHBlclwiOiBcIlpVQ0tFUi1TVE9GRldFQ0hTRUxTVMOWUlVOR1wiLFxyXG4gICAgICAgIFwiZ2x1Y29zZS1tZXRhYm9saWMtZGlzb3JkZXJzLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEtvbXBsZW1lbnTDpHItQmVoYW5kbHVuZyBiZWkgWnVja2VyLVN0b2Zmd2VjaHNlbHN0w7ZydW5nIOKAkyAoWnVja2VyLCBLb2hsZW5oeWRyYXRlKS4g4oCiIFN0aW1tdWxpZXJ0IGRpZSBiaW9pbmZvcm1hdGlzY2hlIFZlcmJpbmR1bmcgenVyIEJhdWNoc3BlaWNoZWxkcsO8c2UuIOKAoiBWb3J0ZWlsaGFmdCBiZWkgZWluZXIgYmVzdGVoZW5kZW4gSW5zdWxpbnJlc2lzdGVuei4g4oCiIEtvbXBsZW1lbnTDpHJiZWhhbmRsdW5nIGJlaSDDnGJlcmdld2ljaHQsIERlcHJlc3Npb24sIFR5cGUgMSB1bmQgIDIgRGlhYmV0ZXMuIFp1c2F0enByb2dyYW1tZTogRW5lcmdpZS1BdXNnbGVpY2gsIEZyZXVkZSwgRnJ1c3RyYXRpb24sIFNjaGlsZGRyw7xzZSwgRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIE1pbHovQmF1Y2hzcGVpY2hlbGRyw7xzZS1NZXJpZGlhbiwgMS4sIDIuLCAzLiB1bmQgNC5cIixcclxuICAgICAgICBcImhhaXItZ3Jvd3RoLXVwcGVyXCI6IFwiSEFBUldBQ0hTVFVNXCIsXHJcbiAgICAgICAgXCJoYWlyLWdyb3d0aC1kZXNjcmlwdGlvblwiOiBcIuKAoiBTdGltbXVsaWVydCBkYXMgSGFhcndhY2hzdHVtLiDigKIgVmVyc3TDpHJrdCBkaWUgSGFhcnd1cnplbCBiZWkgSGFhcmF1c2ZhbGwuIOKAoiBadXIgUmVzdGF1cmllcnVuZyBiZWkgYmVzY2jDpGRpZ3RlbSBIYWFyIHVuZCBLb3BmaGF1dC4g4oCiIEFscyBFcmfDpG56dW5nc2JlaGFuZGx1bmcgYmVpIEhhYXJhdXNmYWxsIG5hY2ggQ2hlbW90aGVyYXBpZS4gWnVzYXR6cHJvZ3JhbW1lOiBFbnRnaWZ0dW5nLCBTY2hpbGRkcsO8c2UsIERhcm1mbG9yYSwgTWV0YWxsLUVsZW1lbnQsIE1hZ2VuLU1lcmlkaWFuLCBOaWVyZW4tTWVyaWRpYW4sIEhhcm5ibGFzZS1NZXJpZGlhbiwgMi4gdW5kIDYuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiaGVhZGFjaGUtdXBwZXJcIjogXCJLT1BGU0NITUVSWlwiLFxyXG4gICAgICAgIFwiaGVhZGFjaGUtZGVzY3JpcHRpb25cIjogXCLigKIgQmVpIEtvcGZzY2htZXJ6ZW4uIFp1c2F0enByb2dyYW1tZTogRnJ1c3RyYXRpb24sIE5hY2tlbiwgU2VodmVybcO2Z2VuLCBFbmVyZ2llLUF1c2dsZWljaCwgTmFzZW4tTmViZW5ow7ZobGVuLCBHZWjDtnIsIERhcm1mbG9yYSwgVmVyZGF1dW5nLCBWZXJzdG9wZnVuZyBvZGVyIEJsdXRob2NoZHJ1Y2sgd2VubiBhbndlbmRiYXIsIERpY2tkYXJtLU1lcmlkaWFuLCBNYWdlbi0gTWVyaWRpYW4sIExlYmVyLU1lcmlkaWFuLCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgMy4gdW5kIDYuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiaGVhcnQtZnVuY3Rpb24tdXBwZXJcIjogXCJIRVJaVMOEVElHS0VJVFwiLFxyXG4gICAgICAgIFwiaGVhcnQtZnVuY3Rpb24tZGVzY3JpcHRpb25cIjogXCLigKIgVW50ZXJzdMO8dHplbmQgYmVpIEhlcnpyeXRobXVzLVN0w7ZydW5nZW4uIOKAoiBCZWfDvG5zdGlnZW5kIGluIFN0cmVzcy1TaXR1YXRpb25lbiB1bmQgRW5nZWdlZsO8aGwgaW4gZGVyIEJydXN0LiBadXNhdHpwcm9ncmFtbWU6IEtyZWlzbGF1ZiwgQmluZGVnZXdlYmUsIEVuZXJnaWUtQXVzZ2xlaWNoLCBFbnRzcGFubnVuZywgRnJpZWRlLCBOZXJ2ZW5zeXN0ZW0sIEZldWVyLUVsZW1lbnQsIEhlcnotTWVyaWRpYW4sIDEuLCAzLiB1bmQgNC4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJoZW1vcnJob2lkcy11cHBlclwiOiBcIkjDhE1PUlJIT0lERU5cIixcclxuICAgICAgICBcImhlbW9ycmhvaWRzLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhlbW10IEjDpG1vcnJob2lkZW4tU3lwdG9tZS4g4oCiIEVyZ8Okbnp0IEJlaGFuZGx1bmdlbiBiZWkgTWFzdGRhcm0tUHJvYmxlbWVuLiDigKIgTWluZGVydCBSZWt0dW1zY2htZXJ6ZW4gYmVpIFZlcnN0b3BmdW5nLiBadXNhdHpwcm9ncmFtbWU6IFZlcnN0b3BmdW5nLCBLcmVpc2xhdWZzeXN0ZW0sIEJpbmRlZ2V3ZWJlLCBFbmVyZ2llLUF1c2dsZWljaCwgRW50c3Bhbm51bmcsIFdhc3Nlci1FbGVtZW50LCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgRGlja2Rhcm0tTWVyaWRpYW4sIDEuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiaHlwZXJ0ZW5zaW9uLXVwcGVyXCI6IFwiQkxVVEhPQ0hEUlVDS1wiLFxyXG4gICAgICAgIFwiaHlwZXJ0ZW5zaW9uLWRlc2NyaXB0aW9uXCI6XCLigKIgRXJnw6RuenQgZGllIEJlaGFuZGx1bmcgdm9uIEJsdXRob2NoZHJ1Y2suIFp1c2F0c3Byb2dyYW1tZTogIE5lYmVubmllcmUsIEtyZWlzbGF1ZiwgRmV1ZXItRWxlbWVudCwgTmllcmVuLU1lcmlkaWFuLCBIYXJuYmxhc2UtTWVyaWRpYW4sIFBlcmljYXJkaXVtLU1lcmlkaWFuLCBIZXJ6LU1lcmlkaWFuLCAxLiwgMi4sIDQuIHVuZCA3LiBDaGFrcmFcIixcclxuICAgICAgICBcImltbXVuZS1zeXN0ZW0tdXBwZXJcIjogXCJJTU1VTlNZU1RFTVwiLFxyXG4gICAgICAgIFwiaW1tdW5lLXN5c3RlbS1kZXNjcmlwdGlvblwiOiBcIuKAoiBGw7ZyZGVydCB1bmQgb3B0aW1pZXJ0IGRpZSBGdW5rdGlvbiBkZXMgSW1tdW5zeXN0ZW1zLiDigKIgYWxzIFp1c2F0enRoZXJhcGllIHfDpGhyZW5kIGVpbmVyIHZpcmFsZW4gdW5kL29kZXIgYmFrdGVyaWVsbGVuIEVya3Jhbmt1bmcuIOKAoiBGw7ZyZGVydCBkaWUgQXVmbmFobWUgdm9uIEFudGlveGlkYW50aWVuIHVuZCBWaXRhbWluZW4uIOKAoiBTdGltdWxpZXJ0IGRlbiBWZXJkYXV1bmdzdHJha3QuIFp1c2F0enByb2dyYW1tZTogIEx5bXBoc3lzdGVtLCBFbnRnaWZ0dW5nLCBEYXJtZmxvcmEsIEVyc2Now7ZwZnVuZywgTmViZW5uaWVyZSwgRnJ1c3RyYXRpb24sIEZyaWVkZSwgRnJldWRlLCAyLiB1bmQgMy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJpbmp1cnktdXBwZXJcIjogXCJWRVJMRVRaVU5HXCIsXHJcbiAgICAgICAgXCJpbmp1cnktZGVzY3JpcHRpb25cIjogXCLigKIgU3RpbXVsaWVydCB1bmQgYmVzY2hsZXVuZ3QgSGVpbHVuZ3Nwcm96ZXNzZSB2b24gYmVzY2jDpGRpZ3RlbSBHZXdlYmUuIOKAoiBSZWR1emllcnQgZGllIE5hcmJlbmJpbGR1bmcuIOKAoiBIb2NoLXdpcmtzYW0gbmFjaCBPcGVyYXRpb25lbi4gWnVzYXR6cHJvZ3JhbW1lOiBIYXV0LCBLbm9jaGVuLCBCaW5kZWdld2ViZSwgSW1tdW5zeXN0ZW0sIFp1Y2tlci1TdG9mZndlY2hzZWwtU3TDtnJ1bmcsIEtyZWlzbGF1ZiwgTWluZXJhbC1TdG9mZndlY2hzZWwsIEVyZGUtRWxlbWVudCwgV2Fzc2VyLUVsZW1lbnQsIEhvbHotRWxlbWVudCwgMS4g4oCTIDIuIHVuZCAzLiBDaGFrcmFcIixcclxuICAgICAgICBcImludGVzdGluYWwtZmxvcmEtdXBwZXJcIjogXCJEQVJNRkxPUkFcIixcclxuICAgICAgICBcImludGVzdGluYWwtZmxvcmEtZGVzY3JpcHRpb25cIjogXCLigKIgRXJnw6RuenQgZGllIEFudGktUGlsemJlaGFuZGx1bmcgZGVzIFZlcmRhdXVuZ3NzeXN0ZW1zLiDigKIgSGFybW9uaXNpZXJ0IGRpZSBEYXJtZmxvcmEsIGluc2Jlc29uZGVyZSBiZWkgQWxsZXJnaWVuLiDigKIgRsO2cmRlcnQgZGllIFdpcmtzYW1rZWl0IHZvbiBzcGV6aWVsbGVuIEVybsOkaHJ1bmdzd2Vpc2VuIHVuZCBvcHRpbWllcnQgZGllIExlYmVuc2tyYWZ0LiDigKIgSGlsZnJlaWNoIGbDvHIgTWVuc2NoZW4gbWl0IGNocm9uaXNjaGVyIER5c2Jpb3NlIChVbmdsZWljaGdld2ljaHQgendpc2NoZW4gZGVuIGd1dGVuIHVuZCBzY2hsZWNodGVuIERhcm1iYWt0ZXJpZW4pLiDigKIgQW5yZWd1bmcgZGVzIEltbXVuc3lzdGVtcy4g4oCiIEFscyBFcmfDpG56dW5nc3RoZXJhcGllIGJlaSBCbHV0YXJtdXQsIEVremVtZW4sIFBhcmFzaXRlbiB1bmQgUGlsemVuLiBadXNhdHpwcm9ncmFtbWU6IFZlcmRhdXVuZ3NzeXN0ZW0sIEVudGdpZnR1bmcsIE1pbmVyYWwtU3RvZmZ3ZWNoc2VsLCBJbW11bnN5c3RlbSwgV2Fzc2VyLUVsZW1lbnQsIEVyZGUtRWxlbWVudCwgRGljay0gdW5kIETDvG5uZGFybS1NZXJpZGlhbiwgTWFnZW4tTWVyaWRpYW4sIDIuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiamV0LWxhZy11cHBlclwiOiBcIkpFVC1MQUdcIixcclxuICAgICAgICBcImpldC1sYWctZGVzY3JpcHRpb25cIjogXCLigKIgRsO8ciBXZXR0ZXJlbXBmaW5kbGljaGUgTWVuc2NoZW4uIOKAoiBSZWR1emllcnQgSmV0LUxlZyBFZmZla3QgdW5kIFNjaHdpbmRlbC4g4oCiIFNjaG5lbGxlcmUgQW5rbGltYXRpc2llcnVuZyBhdWYgYW5kZXJlcyBXZXR0ZXIvS2xpbWEgdW5kIEjDtmhlbm1ldGVyLiDigKIgIE1pbmRlcnQgS29wZnNjaG1lcnplbiBhdXNnZWzDtnN0IGR1cmNoIGhvaGUgSMO2aGVubGFnZW4gdW5kIFdldHRlcmZyb250ZW4uIOKAoiBBdXNnbGVpY2ggdm9uIEJlc2Nod2VyZGVuIGRpZSBkdXJjaCBXZXR0ZXJmcm9udGVuIGJlZ8O8bnN0aWd0IHdlcmRlbiAoei5CLiBBbnNwYW5udW5nLCBlcmjDtmh0ZXIgQmx1dGRydWNrLCByaGV1bWF0aXNjaGUgQmVzY2h3ZXJkZW4sIGV0Yy4pLiBadXNhdHpwcm9ncmFtbWU6IFZlcmRhdXVuZ3NzeXN0ZW0sIEtyZWlzbGF1ZnN5c3RlbSwgRS1zbW9nLCBFbmVyZ2llLUF1c2dsZWljaCwgIEZldWVyLUVsZW1lbnQsIEVyZGUtRWxlbWVudCwgMS4gIENoYWtyYVwiLFxyXG4gICAgICAgIFwiam9pbnRzLXVwcGVyXCI6IFwiR0VMRU5LRVwiLFxyXG4gICAgICAgIFwiam9pbnRzLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEJlZ8O8bnN0aWd0IGRlbiBIZWlsdW5nc3Byb3plc3MgYmVpIGdlc2Now6RkaWd0ZW4gR2VsZW5rZnVua3Rpb25lbi4g4oCiIExpbmRlcnQgQmVzY2h3ZXJkZW4gYXVmZ3J1bmQgdm9uIEdlbGVua2VudHrDvG5kdW5nZW4uIFp1c2F0enByb2dyYW1tZTogVmVyZGF1dW5nc3N5c3RlbSwgTXVza2VsZ2V3ZWJlLCBCaW5kZWdld2ViZSwgSW1tdW5zeXN0ZW0sICBOaWVyZW4tTWVyaWRpYW4sIE1hZ2VuLU1lcmlkaWFuLCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgV2Fzc2VyLUVsZW1lbnQsIDEuICwgMi4gIHVuZCA1LiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJqb3ktdXBwZXJcIjogXCJGUkVVREVcIixcclxuICAgICAgICBcImpveS1kZXNjcmlwdGlvblwiOiBcIuKAoiBUcsOkZ3QgZGF6dSBiZWksIGRpZSBBdXNnZWdsaWNoZW5oZWl0IHVuZCBndXRlIExhdW5lIGluIHNjaHdpZXJpZ2VuIFplaXRlbiB6dSBiZXdhaHJlbi4g4oCiIFZlcmhpbGZ0IHp1IGVtb3Rpb25hbGVyL21lbnRhbGVyIEF1c2dlZ2xpY2hlbmhlaXQuIOKAoiBFcmfDpG56dCBCZWhhbmRsdW5nZW4gZ2VnZW4gRGVwcmVzc2lvbi4gWnVzYXR6cHJvZ3JhbW1lOiBOZWJlbm5pZXJlLCBFbmVyZ3kgQm9vc3RlciwgRnJ1c3RyYXRpb24sIERhcm1mbG9yYSwgTWV0YWxsLUVsZW1lbnQsIDEuIOKAkyAyLiDigJMgNC4gdW5kIDUuIENoYWtyYVwiLFxyXG4gICAgICAgIFwibG93LW1lbnRhbC1kcml2ZS11cHBlclwiOiBcIlNUUkVTU0JFRElOR1RcIixcclxuICAgICAgICBcImxvdy1tZW50YWwtZHJpdmUtZGVzY3JpcHRpb25cIjogXCLigKIgQmVpIHN0cmVzc2JlZGluZ3RlciBuZXJ2bGljaGVyIFN0w7ZydW5nZW4gZGVyIHNleHVlbGxlbiBMZWJlbnNrcmFmdC4g4oCiIEJlaSBzY2h3YWNoZW0gTGliaWRvIGF1ZmdydW5kIHZvbiBhbGx0w6RnbGljaGVuIFByb2JsZW1lbiAoYmVpIG5ldXJvZW5kb2tyaW5lbiBQcm9ibGVtZW4sIEFsbGVyZ2llbiB1bmQgYW5kZXJlIEVya3Jhbmt1bmdlbiB6dXPDpHR6bGljaCBkYXMgUHJvZ3JhbW0gTElCSURPIEkgYW53ZW5kZW4pIEF1Y2ggUGFyYXNpdGVuIGvDtm5uZW4gZGllIFVyc2FjaGUgZWluZXIgc3TDpG5kaWdlbiDDnGJlcnN0aW1tdWxpZXJ1bmcgZGVzIE5lcnZlbnN5c3RlbXMgc2Vpbi4g4oCiIERpZXNlcyBQcm9ncmFtbSBlaWduZXQgc2ljaCBiZWkgRnVua3Rpb25zc3TDtnJ1bmdlbiBhdWZncnVuZCB2b24gRW5lcmdpZS1NYW5nZWwuIFp1c2F0enByb2dyYW1tZTogRXJzY2jDtnBmdW5nLCBFbnRzcGFubnVuZywgRS1TbW9nLCBFbmVyZ2llLUF1c2dsZWljaCwgRnJpZWRlLCBGcmV1ZGUsIEVuZXJnaWUtU3BlbmRlciwgRnJ1c3RyYXRpb24sIEVyZGUtRWxlbWVudCwgTWV0YWxsLUVsZW1lbnQsIFdhc3Nlci1FbGVtZW50LCBIZXJ6LU1lcmlkaWFuLCBQZXJpY2FyZGl1bS1NZXJpZGlhbiwgMS4sIDIgdW5kIDQuIENoYWtyYVwiLFxyXG4gICAgICAgIFwibG93LXBoeXNpY2FsLWRyaXZlLXVwcGVyXCI6IFwiS09SUEVSTElDSCBCRURJTkdUXCIsXHJcbiAgICAgICAgXCJsb3ctcGh5c2ljYWwtZHJpdmUtZGVzY3JpcHRpb25cIjogXCLigKIgU3RpbW11bGllcnQgZGFzIHNleHVlbGxlIEx1c3RnZWbDvGhsIGJlaSBvcmdhbmlzY2hlbiBQcm9ibGVtZW4gb2RlciBmZWhsZW5kZXIgRW5lcmdpZXZlcnNvcmd1bmcuIOKAoiBGw7ZyZGVydCBkaWUgc2V4dWVsbGUgS2FwYXppdMOkdC4g4oCiIEVyZ8OkbnplbmRlIEJlaGFuZGx1bmcgaW4gZGVyIEdlcmVudG9sb2dpZSAoYmVpbSDDpGx0ZXIgd2VyZGVuKS4g4oCiIERpZXNlcyBQcm9ncmFtbSBlaWduZXQgc2ljaCBiZWkgRnVua3Rpb25zc3TDtnJ1bmdlbiwgZGllIGRpZSBGb2xnZSBkZXMgQWx0ZXJuIG9kZXIga8O2cnBlcmxpY2hlciBQcm9ibGVtZSBzaW5kLiBadXNhdHpwcm9ncmFtbWU6IEFudGkgQWdpbmcsIEVudGdpZnR1bmcsIE5lYmVubmllcmUsIEJpbmRlZ2V3ZWJlLCBLcmVpc2xhdWZzeXN0ZW0sIEVyc2Now7ZwZnVuZywgRXJkZS1FbGVtZW50LCBIYXJuYmxhc2UtTWVyaWRpYW4sIFBlcmljYXJkaXVtLU1lcmlkaWFuLCBIZXJ6LU1lcmlkaWFuLCAxLiAgdW5kIDIuICBDaGFrcmFcIixcclxuICAgICAgICBcImx5bXBoYXRpYy1zeXN0ZW0tdXBwZXJcIjogXCJMWU1QSEFUSVNDSEVSIEFQUEFSQVRcIixcclxuICAgICAgICBcImx5bXBoYXRpYy1zeXN0ZW0tZGVzY3JpcHRpb25cIjogXCLigKIgT3B0aW1pZXJ0IGRlbiBMeW1waC1LcmVpc2xhdWYgdW5kIHZlcm1pbmRlcnQgTHltcGhzdGF1dW5nLiDigKIgRXJsZWljaHRlcnQgZGllIEdlbmVzdW5nIG5hY2ggaW5mZWt0acO2c2VuIEVya3Jhbmt1bmdlbi4g4oCiIEhlbW10IGFsbGVyZ2lzY2hlIFJlYWt0aW9uZW4uIFp1c2F0enByb2dyYW1tZTogS3JlaXNsYXVmLVN5c3RlbSwgRW50Z2lmdHVuZywgSW1tdW4tU3lzdGVtLCBCaW5kZWdld2ViZSwgRmV1ZXItRWxlbWVudCwgV2Fzc2VyLUVsZW1lbnQsIDIuIENoYWtyYVwiLFxyXG4gICAgICAgIFwibWFsZS11cHBlclwiOiBcIk3DhE5ORVIgU1BFWklGSVNDSFwiLFxyXG4gICAgICAgIFwibWFsZS1kZXNjcmlwdGlvblwiOiBcIuKAoiBGw7xyIEJlaGFuZGx1bmdlbiBkZXIgbcOkbm5saWNoZW4gSG9ybW9uZSwgYmVpIHNleHVlbGxlbiBTdMO2cnVuZ2VuIHVuZCBkZXMgSGFybnN5c3RlbXMgYmV0cmVmZmVuZCB6dXIgVW50ZXJzdMO8dHp1bmcgZGVyIEdld2ViZS1TdG9mZndlY2hzZWx2b3Jnw6RuZ2UuIOKAoiBFcmfDpG56dCBCZWhhbmRsdW5nZW4gYmVpIElua29udGluZW56IHVuZCBQcm9zdGF0YS1Qcm9ibGVtZW4uIOKAoiBTdGVpZ2VydCBkaWUgTGliaWRvIHVuZCBkYXMgR2Vmw7xobCB2b24gR2Vib3JnZW5oZWl0LiDigKIgQmVpIEVycmVrdGlvbnNzdMO2cnVuZ2VuLiDigKIgRsO8ciBGcmF1ZW4gbWl0IGVpbmVyIHN0YXJrZW4geWFuZy1Lb25zdGl0dXRpb247IGJlaSBzY2htZXJ6aGFmdGVuLCBzY2h3ZXJlbiBvZGVyIMOcYmVyIDcgVGFnZSBhbmRhdWVybmRlIE1lbnN0cnVhdGlvbnNibHV0dW5nZW4gb2RlciB3ZW5uIGVpbiBUZXN0b3N0ZXJvbiBBdXNnbGVpY2ggbsO2dGlnIGlzdC4gWnVzYXR6cHJvZ3JhbW1lOiBFbnRzcGFubnVuZywgS3JlaXNsYXVmc3lzdGVtLCBGcnVzdHJhdGlvbiwgRnJldWRlLCBGcmllZGUsIEZldWVyLUVsZW1lbnQsIEhhcm5ibGFzZS1NZXJpZGlhbiwgTGViZXItTWVyaWRpYW4sIDEuIHVuZCAyLiBDaGFrcmFcIixcclxuICAgICAgICBcIm1lZGl0YXRpb24tMS11cHBlclwiOiBcIk1FRElUQVRJT04gMVwiLFxyXG4gICAgICAgIFwibWVkaXRhdGlvbi0xLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEbDvHIgTWVkaXRhdGlvbnMtQW5mw6RuZ2VyIOKAkyBmw7xyIGRhcyBGcmllZGVuc2dlZsO8aGxcIixcclxuICAgICAgICBcIm1lZGl0YXRpb24tMi11cHBlclwiOiBcIk1FRElUQVRJT04gMlwiLFxyXG4gICAgICAgIFwibWVkaXRhdGlvbi0yLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEbDvHIgdGllZmVyZSBpbm5lcmUgUmVpc2VuIHfDpGhyZW5kIGRlciBNZWRpdGF0aW9uXCIsXHJcbiAgICAgICAgXCJtZWRpdGF0aW9uLTMtdXBwZXJcIjogXCJNRURJVEFUSU9OIDNcIixcclxuICAgICAgICBcIm1lZGl0YXRpb24tMy1kZXNjcmlwdGlvblwiOiBcIuKAoiBGw7xyIGRpZSBmb3J0Z2VzY2hyaXR0ZW5lIE1lZGl0YXRpb25zcHJheGlzXCIsXHJcbiAgICAgICAgXHJcbiAgICAgICAgXCJnYWxsYmxhZGRlci1tZXJpZGlhbi11cHBlclwiOiBcIkdBTExFTkJMQVNFLU1FUklESUFOXCIsXHJcbiAgICAgICAgXCJnYWxsYmxhZGRlci1tZXJpZGlhbi1zaG9ydFwiOiBcIkdBTExFTkJMQVNFTlwiLFxyXG4gICAgICAgIFwiZ2FsbGJsYWRkZXItbWVyaWRpYW4tZGVzY3JpcHRpb25cIjogXCLigKIgSGFybW9uaXNpZXJ0IGRlbiBHYWxsZW5ibGFzZS1NZXJpZGlhbiDigKIgRXJnw6RuemVuZGUgQmVoYW5kbHVuZyBiZWkgS2llZmVyZ2VsZW5rc2Vya3Jhbmt1bmcsIFphaG5rcmFua2hlaXRlbiB1bmQgTWFuZGVsbiDigKIgSGlsZnQgRW50c2NoZWlkdW5nZW4genUgdHJlZmZlbiBpbiBzY2h3aWVyaWdlbiBTaXR1YXRpb25lbiDigKIgIFVudGVyc3TDvHR6ZW5kIGJlaSDDnGJlcmFrdGl2aXTDpHQgb2RlciBad2FuZ3NzdMO2cnVuZ2VuIOKAoiAgR2VnZW4gw7xiZXJtw6Rzc2lnIG5lZ2F0aXZlIEVpbnN0ZWxsdW5nIOKAoiAgYmVpIFRlbmRleiBEaW5nZSBhdWZ6dXNjaGllYmVuIOKAoiBTcGl0emVuYWt0aXZpdMOkdCBkZXIgR2FsbGVuYmxhc2UgaXN0IDIzOjAwIOKAkyAwMTowMCBVaHIuIOKAoiBEaWUgR2FsbGVuYmxhc2UgaXN0IFlhbmcg4oCTIFNpZSBpc3QgbWl0IGRlbSBZaW4tT3JnYW4gZGVyIExlYmVyIHZlcmJ1bmRlbiDigJMgZW50c3ByaWNodCBkZW0gSG9sei1FbGVtZW50IHVuZCBVbnNjaGzDvHNzaWdrZWl0IG9kZXIgRW50c2NobHVzc2tyYWYuIFp1c2F0enByb2dyYW1tZTogSG9sei1FbGVtZW50LCBGcnVzdHJhdGlvbiwgRnJldWRlLCBMZWJlci1NZXJpZGlhbiwgMy4gQ2hha3JhLCBEaWNrZGFybSBNZXJpZGlhblwiLFxyXG4gICAgICAgIFwia2lkbmV5LW1lcmlkaWFuLXVwcGVyXCI6IFwiTklFUkVOLU1FUklESUFOXCIsXHJcbiAgICAgICAgXCJraWRuZXktbWVyaWRpYW4tc2hvcnRcIjogXCJOSUVSRU5cIixcclxuICAgICAgICBcImtpZG5leS1tZXJpZGlhbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBTdGVpZ2VydCBkaWUgQWt0aXZpdMOkdCBkZXMgTmllcmVuLU1lcmlkaWFucy4g4oCiIEJlc8OkbmZ0aWd0IEJsdXRob2NoZHJ1Y2sgdW5kIMOWZGVtZS4g4oCiIGJlZ8O8bnN0aWd0IGRpZSBCZXppZWh1bmcgdm9uIEtub2NoZW4gdW5kIEtub2NoZW5tYXJrLiDigKIgdmVybWluZGVydCBPaHJlbnNhdXNlbiB1bmQgw6RobmxpY2hlIFN5bXB0b21lLiDigKIgQmVpIFJhc3Rsb3NpZ2tlaXQsIMOcYmVyYWt0aXZpdMOkdCB1bmQgYWxsZ2VtZWluZXIgU2Nod8OkY2hlLiDigKIgU3RlaWdlcnQgZGllIHNleHVlbGxlIEVuZXJnaWUuIOKAoiBTcGl0emVuYWt0aXZpdMOkdCBkZXIgTmllcmUgaXN0IHZvbiAxNzowMCDigJMgMTk6MDAgVWhyLiDigKIgRGllIE5pZXJlIGlzdCBZaW4g4oCTIHZlcmJ1bmRlbiBtaXQgZGVtIFlhbmctT3JnYW4gZGVyIEJsYXNlIOKAkyBlbnRzcHJpY2h0IGRlbSBXYXNzZXItRWxlbWVudCB1bmQgZGVyIEFuZ3N0Z2Vmw7xobGUuIFp1c2F0enByb2dyYW1tZTogV2Fzc2VyLUVsZW1lbnQsIEhhcm5ibGFzZS1NZXJpZGlhbiwgRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIEJsdXRob2NoZHJ1Y2ssIEjDtnJTeXN0ZW0sIEtub2NoZW4sIDIuIENoYWtyYVwiLFxyXG4gICAgICAgIFwiaGVhcnQtbWVyaWRpYW4tdXBwZXJcIjogXCJIRVJaIE1FUklESUFOXCIsXHJcbiAgICAgICAgXCJoZWFydC1tZXJpZGlhbi1zaG9ydFwiOiBcIkhFUlpcIixcclxuICAgICAgICBcImhlYXJ0LW1lcmlkaWFuLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhhcm1vbmlzaWVydCBkZW4gSGVyei1NZXJpZGlhbi4g4oCiIFZlcmhpbGZ0IHp1ciBlbW90aW9uYWxlbiBTdGFiaWxpdMOkdCBiZWkgVGVuZGVueiB6dSBtYW5pc2NoLWRlcHJlc3Npdi4g4oCiIFZlcmJlc3NlcnQgZGFzIEdlZMOkY2h0bmlzIHVuZCBzdGVpZ2VydCBkaWUgS29uemVudHJhdGlvbi4g4oCiIFZlcmJlc3NlcnQgZGFzIFNjaGxhZm11c3RlciB1bmQgZXJsZWljaHRlcnQgZGFzIEVpbnNjaGxhZmVuLiDigKIgU3BpdHplbmFrdGl2aXTDpHQgZGVzIEhlcnogaXMgMTE6MDAg4oCTIDEzOjAwIFVoci4g4oCiIERhcyBIZXJ6IGlzdCBZaW4g4oCTIGlzdCBtaXQgZGVtIFlhbmcgT3JnYW4gZGVzIETDvG5uZGFybXMgdmVyYnVuZGVuIOKAkyBlbnRzcHJpY2h0IGRlbSBGZXVlci1FbGVtZW50LCBkZW0gRnJldWRlZ2Vmw7xobCB1bmQgZGVyIEF1ZnJlZ3VuZy4gWnVzYXR6cHJvZ3JhbW1lOiBGZXVlci1FbGVtZW50LCBQZXJpa2FyZGl1bS1NZXJpZGlhbiwgRMO8bm5kYXJtLU1lcmlkaWFuIHVuZCBEZWlmYWNoZXItRXJ3w6RybWVyLU1lcmlkaWFuLCBTY2hsYWYsIEVudHNwYW5udW5nLCBGcmV1ZGUsIEZydXN0cmF0aW9uLCA0LiBDaGFrcmFcIixcclxuICAgICAgICBcImxhcmdlLWludGVzdGluZS1tZXJpZGlhbi11cHBlclwiOiBcIkRJQ0tEQVJNLU1FUklESUFOXCIsXHJcbiAgICAgICAgXCJsYXJnZS1pbnRlc3RpbmUtbWVyaWRpYW4tc2hvcnRcIjogXCJESUNLREFSTVwiLFxyXG4gICAgICAgIFwibGFyZ2UtaW50ZXN0aW5lLW1lcmlkaWFuLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhhcm1vbmlzaWVydCBkZW4gRGlja2Rhcm0tTWVyaWRpYW4g4oCiIEJlaSBjaHJvbmlzY2hlciBEaXNiaW9zZSAoZ2VzdMO2cnRlcyBCYWt0ZXJpZW52ZXJow6RsdG5pcyBkZXIgRGFybWZsb3JhLiBNZWhyIHBhdG9sb2dpc2NoZSBCYWt0ZXJpZW4gYWxzIGdlc3VuZGhlaXRzZsO2cmRlcm5lKSDigKIgVmVyYmVzc2VydCBkYXMgSW1tdW5zeXN0ZW0g4oCiIEFscyBLb21wbGVtZW50w6RyLVRoZXJhcGllIGJlaSBCbHV0YXJtdXQsIEVremVtZW4sIFBhcmFzaXRlbiB1bmQgUGlsemUg4oCiIEJlaSBOZWlndW5nIHp1IG5lZ2F0aXZlbiBHZWRhbmtlbiB1bmQgR2Vmw7xobGVuIHVuZCBmw7xyIE1lbnNjaGVuLCBkZW5lbiBlcyBrw7ZycGVybGljaCB1bmQgZ2Vpc3RpZyBzY2h3ZXIgZsOkbGx0LCBsb3N6dWxhc3NlbiB1bmQgZGFzIFZlcmdhbmdlbmUgaGludGVyIHNpY2ggenUgbGFzc2VuIOKAoiBTcGl0emVuYWt0aXZpdMOkdCBkZXMgRGlja2Rhcm1zIGlzdCB2b24gMDU6MDAg4oCTIDA3OjAwIFVociDigKIgRGVyIERpY2tkYXJtIGlzdCBZYW5nIOKAkyB2ZXJidW5kZW4gbWl0IGRlcm0gWWluLU9yZ2FuIGRlciBMdW5nZSDigJMgZW50c3ByaWNodCBkZW0gTWV0YWxsLUVsZW1lbnQgdW5kIGRlbSBHZWbDvGhsIGRlciBUcmF1ZXIvS3VtbWVyLiBadXNhdHpwcm9ncmFtbWU6IE1ldGFsbC1FbGVtZW50LCBMdW5nZW4tTWVyaWRpYW4sIERyZWlmYWNoZXItRXJ3w6RybWVyLU1lcmlkaWFuLCBWZXJzdG9wZnVuZywgRHVyY2hmYWxsLCAxLiBDaGFrcmEsIHVuZCAzLiBDaGFrYVwiLFxyXG4gICAgICAgIFwibGl2ZXItbWVyaWRpYW4tdXBwZXJcIjogXCJMRUJFUi1NRVJJRElBTlwiLFxyXG4gICAgICAgIFwibGl2ZXItbWVyaWRpYW4tc2hvcnRcIjogXCJMRUJFUlwiLFxyXG4gICAgICAgIFwibGl2ZXItbWVyaWRpYW4tZGVzY3JpcHRpb25cIjogXCLigKIgSGFybW9uaXNpZXJ0IGRlbiBMZWJlci1NZXJpZGlhbi4g4oCiIFZlcmJlc3NlcnQgQXVnZW4tdW5kIE5lYmVuaMO2aGxlbi1FcmtyYW5rdW5nZW4uIOKAoiBCZWkgWmFobnByb2JsZW1lbi4g4oCiIExpbmRlcnQgTWlncsOkbmUgdW5kIEtvcGZzY2htZXJ6ZW4uIOKAoiBSZWR1emllcnQgZ2VuZXJlbGxlIEtvb3JkaW5hdGlvbnNzY2h3aWVyaWdrZWl0ZW4uIOKAoiBGw7xyIHZvcmVpbmdlbm9tbWVuZSwgdW5nZWR1bGRpZ2UgdW5kIGZydXN0cmllcnRlIE1lbnNjaGVuLiDigKIgRsO8ciBmZXN0Z2VmYWhyZW5lIE1lbnNjaGVuIG1pdCBab3JuL1d1dC/DhHJnZXIgdW5kIHN0YXJrZXIgUGVyc8O2bmxpY2hrZWl0LiDigKIgRsO8ciBNZW5zY2hlbiwgZGllIGltIExlYmVuIG5pY2h0IHdlaXRlcmtvbW1lbiBhdWZncnVuZCBmZWhsZW5kZXIgWmllbHNldHp1bmcuIOKAoiBGw7xyIE1lbnNjaGVuLCBkaWUgaMOkdWZpZyB6d2lzY2hlbiAxIHVuZCAzIFVociBtb3JnZW5zIGF1ZndhY2hlbiB1bmQgZGFubiB3aWVkZXIgZWluc2NobGFmZW4uIOKAoiBTcGl0emVuYWt0aXZpdMOkdCBkZXIgTGViZXIgaXN0IHZvbiAwMTowMCDigJMgMDM6MDAgVWhyLiDigKIgRGllIExlYmVyIGlzdCBZaW4g4oCTIHZlcmJ1bmRlbiBtaXQgZGVtIFlhbmctT3JnYW4gZGVyIEdhbGxlbmJsYXNlIOKAkyBlbnRzcHJpY2h0IGRlbSBIb2x6LUVsZW1lbnQgdW5kIGRlbiBHZWbDvGhsZW4gdm9uIFpvcm4vV3V0IHVuZCBSZWl6YmFya2VpdC4gWnVzYXR6cHJvZ3JhbW1lOiBIb2x6LUVsZW1lbnQsIEdhbGxlbmJsYXNlLU1lcmlkaWFuLCBPcHRpbWlzbXVzLCBGcmV1ZGUsIFNlaGtyYWZ0LCBOZWJlbmjDtmhsZW4sIEVudHNwYW5udW5nLCBLb3Bmc2NobWVyemVuLCBFbmVyZ3ktQXVzZ2xlaWNoLCBFbnRnaWZ0dW5nLCAzLiBDaGFrcmFcIixcclxuICAgICAgICBcImx1bmctbWVyaWRpYW4tdXBwZXJcIjogXCJMVU5HRU4tTUVSSURJQU5cIixcclxuICAgICAgICBcImx1bmctbWVyaWRpYW4tc2hvcnRcIjogXCJMVU5HRU5cIixcclxuICAgICAgICBcImx1bmctbWVyaWRpYW4tZGVzY3JpcHRpb25cIjogXCLigKIgU3luY2hyb25pc2llcnQgZGllIEx1bmdlbi1NZXJpZGlhbi1Ba3Rpdml0w6R0LiBGw7xyIE1lbnNjaGVuIGRpZSB6dSBCZXNvcmduaXMgdW5kIEt1bW1lciBuZWlnZW4gdW5kIGRhcyBHZWbDvGhsIGRlciBVbnRlcmRyw7xja3VuZyBoYWJlbiBvZGVyIG5pY2h0IGdlbnVnIGVpbmF0bWVuLiDigKIgQmV1Z3QgaMOkdWZpZ2VuIEVya8OkbHR1bmdlbiwgR3JpcHBlLCBNYW5kZWxlbnR6w7xuZHVuZyB1bmQgSGFsc3NjaG1lcnplbiB2b3IuIOKAoiBNaW5kZXJ0IEFsbGVyZ2llLVN5bXB0b21lLiDigKIgU3BpdHplbmFrdGl2aXTDpHQgZGVyIEx1bmdlIGlzdCB2b24gMDM6MDAg4oCTIDA1OjAwIFVocuKAoiDigKIgRGllIEx1bmdlIGlzdCBZaW4g4oCTIHZlcmJ1bmRlbiBtaXQgZGVtIFlhbi1PcmdhbiBkZXMgRGlja2Rhcm1zIOKAkyBlbnRzcHJpY2h0IGRlbSBNZXRhbGwtRWxlbWVudCB1bmQgZGVtIEdlZsO8aGwgdm9uIEt1bW1lci9BbmdzdC4gWnVzYXR6cHJvZ3JhbW1lOiBNZXRhbGwtRWxlbWVudCwgRGlja2Rhcm0tTWVyaWRpYW4sIEF0bXVuZ3NzeXN0ZW0sIEltbXVuc3lzdGVtLCA0LiBDaGFrcmFcIixcclxuICAgICAgICBcInBlcmljYXJkaXVtLW1lcmlkaWFuLXVwcGVyXCI6IFwiS1JFSVNMQVVGL1BFUklLQVJESVVNIE1FUklESUFOXCIsXHJcbiAgICAgICAgXCJwZXJpY2FyZGl1bS1tZXJpZGlhbi1zaG9ydFwiOiBcIlBFUklLQVJESVVNXCIsXHJcbiAgICAgICAgXCJwZXJpY2FyZGl1bS1tZXJpZGlhbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGVuIFBlcmlrYXJkaXVtLU1lcmlkaWFuIHZvbiDDvGJlcnNlbnNpYmxlbiBNZW5zY2hlbi4g4oCiIEbDvHIgTWVuc2NoZW4gZGllIFNjaHdpZXJpZ2tlaXRlbiBoYWJlbiBzaWNoIGFuenVmcmV1bmRlbiAoQW5zY2hsdXNzIGZpbmRlbikuIOKAoiBIaWxmdCBzZWVsbGlzY2hlIEVyc2Now7x0dGVydW5nZW4vVHJhdW1hcyB6dSBiZXfDpGx0aWdlbiwgZGllIHZlcmhpbmRlcm4gZ3V0ZSBCZXppZWh1bmdlbiBhdWZyZWNodCB6dSBlcmhhbHRlbi4g4oCiIExpbmRlcnQgS3JlaXNsYXVmLSB1bmQgU2V4dWFsc3TDtnJ1bmdlbi4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGlzdCB2b24gMTk6MDAg4oCTIDIxOjAwIFVoci4g4oCiIERlciBQZXJpa2FyZGl1bSBpc3QgWWluIOKAkyB2ZXJidW5kZW4gbWl0IGRlbSBZYW5nLU9yZ2FuIGRlcyBEcmVpZmFjaGVuLUVyd8Okcm1lcnMg4oCTIGVudHNwcmljaHQgZGVtIEZldWVyLUVsZW1lbnQuIFp1c2F0enByb2dyYW1tZTogRMO8bm5kYXJtLU1lcmlkaWFuLCBGZXVlci1FbGVtZW50LCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgSGVyei1NZXJpZGlhbiwgMy4gdW5kIDQuIENoYWtyYVwiLFxyXG4gICAgICAgIFwic21hbGwtaW50ZXN0aW5lLW1lcmlkaWFuLXVwcGVyXCI6IFwiRMOcTk5EQVJNIE1FUklESUFOXCIsXHJcbiAgICAgICAgXCJzbWFsbC1pbnRlc3RpbmUtbWVyaWRpYW4tc2hvcnRcIjogXCJEw5xOTkRBUk1cIixcclxuICAgICAgICBcInNtYWxsLWludGVzdGluZS1tZXJpZGlhbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGllIETDvG5uZGFybS1GdW5rdGlvbi4g4oCiIHVudGVyc3TDvHR6dCBkaWUgVmVyZGF1dW5nLiDigKIgdmVyYmVzc2VydCBkaWUgTsOkaHJzdG9mZmF1Zm5haG1lLiDigKIgTGluZGVydCBkYXMgR2Vmw7xobCB2b24gVW5zaWNoZXJoZWl0IHVuZCAgVmVyd2lycnVuZy4g4oCiIFNwaXR6ZW5ha3Rpdml0w6R0IGlzdCB2b24gMTM6MDAg4oCTIDE1OjAwIFVoci4g4oCiIERlciBEw7xubmRhcm0gaXN0IFlhbmcg4oCTIHZlcmJ1bmRlbiBtaXQgZGVtIFlpbiBPcmdhbiBkZW0gSGVyenQg4oCTIGVudHNwcmljaHQgZGVtIEZldWVyLUVsZW1lbnQgdW5kIGRlbSBHZWbDvGhsIGRlciBGcmV1ZGUgdW5kIGRlciBFcnJlZ3VuZy4gWnVzYXR6cHJvZ3JhbW1lOiBFbnRnaWZ0dW5nLCBEdXJjaGZhbGwsIEhhcm5zeXN0ZW0sIEZldWVyLUVsZW1lbnQsIEhlcnotTWVyaWRpYW4gdW5kIERyZWlmYWNoZXItRXJ3w6RybWVyLU1lcmlkaWFuLCAzLiB1bmQgNC4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJzcGxlZW4tcGFuY3JlYXMtbWVyaWRpYW4tdXBwZXJcIjogXCJNSUxaIE1FUklESUFOXCIsXHJcbiAgICAgICAgXCJzcGxlZW4tcGFuY3JlYXMtbWVyaWRpYW4tc2hvcnRcIjogXCJNSUxaXCIsXHJcbiAgICAgICAgXCJzcGxlZW4tcGFuY3JlYXMtbWVyaWRpYW4tZGVzY3JpcHRpb25cIjogXCLigKIgSGFybW9uaXNpZXJ0IE1pbHotL0JhdWNoc3BlaWNoZWxkcsO8c2UtQWt0aXZpdMOkdC4g4oCiIFVudGVyc3TDvHR6dCBkaWUgQXVmc3BhbHR1bmcgdm9uIGZlc3RlbiB1bmQgZmzDvHNzaWdlbiBOYWhydW5nc2Jlc3RhbmR0ZWlsZW4uIOKAoiBSZWR1emllcnQgendhbmdoYWZ0ZSBFaW5zdGVsbHVuZy4g4oCiIFVudGVyc3TDvHR6ZW5kIGJlaSBFbnRzY2hlaWR1bmdzZsOkbGx1bmdlbiB1bmQgRHVyY2hzZXR6dW5nc3Zlcm3Dtmdlbi4g4oCiIEbDtnJkZXJ0IGRpZSBLb256ZW50cmF0aW9uIHVuZCBkYXMgR2Vkw6RjaHRuaXMuIOKAoiBTcGl0emVuYWt0aXZpdMOkdCBkZXIgTWlsei9CYXVjaHNwZWljaGVsZHLDvHNlIGlzdCB2b24gIDk6MDAgYmlzIDExOjAwIFVoci4g4oCiIERpZSBNaWx6L0JhdWNoc3BlaWNoZWxkcsO8c2UgaXN0IGVpbiBZaW4gT3JnYW4g4oCTIHZlcmJ1bmRlbiBtaXQgZGVtIFlhbmcgT3JnYW4gZGVtIE1hZ2VuIOKAkyBlbnRzcHJpY2h0IGRlbSBFcmRlLUVsZW1lbnQuIFp1c2F0enByb2dyYW1tZTogRXJkZS1FbGVtZW50LCBNYWdlbi1NZXJpZGlhbiwgRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIFZlcmRhdXVuZ3NTeXN0ZW0sIE11c2tlbG4sIEtyZWlzbGF1ZlN5c3RlbSwgRHVyY2hmYWxsLCAgMi4gIHVuZCAzLiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJzdG9tYWNoLW1lcmlkaWFuLXVwcGVyXCI6IFwiTUFHRU4tTUVSSURJQU5cIixcclxuICAgICAgICBcInN0b21hY2gtbWVyaWRpYW4tc2hvcnRcIjogXCJNQUdFTlwiLFxyXG4gICAgICAgIFwic3RvbWFjaC1tZXJpZGlhbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGVuIE1hZ2VuLU1lcmlkaWFuLiDigKIgR2VnZW4gQXVmc3Rvc3Nlbiwgw5xiZWxrZWl0IG9kZXIgRXJicmVjaGVuLiDigKIgTGluZGVydCBTY2hsw6RmZW4tS29wZnNjaGVyemVuLiDigKIgQmVpIEtpZWZlcmjDtmhsZW5lbnR6w7xuZHVuZyBvZGVyIFRyaWdlbWludXNuZXVyYWxnaWUuIOKAoiBCZWkgY2hyb25pc2NoZW0gU3RyZXNzLiDigKIgU3BpdHplbmFrdGl2aXTDpHQgZGVzIE1hZ2VucyBpc3Qgdm9uIDc6MDAgYmlzIDk6MDAgVWhyLiDigKIgRGVyIE1hZ2VuIGlzdCBlaW4gWWFuLU9yZ2FuIOKAkyB2ZXJidW5kZW4gbWl0IGRlbSBZaW4tT3JnYW4gZGVyIE1pbHogIOKAkyBlbnRzcHJpY2h0IGRlbSBFcmRlLUVsZW1lbnQgdW5kIGRlbSBHZWbDvGhsIHZvbiBBbmdzdCB1bmQgU3RyZXNzLiBadXNhdHpwcm9ncmFtbWU6IEVyZGUtRWxlbWVudCwgVmVyZGF1dW5nc1N5c3RlbSwgTWlsei0vQmF1Y2hzcGVpY2hlbGRyw7xzZS1NZXJpZGlhbiwgS29wZnNjaG1lcnplbiwgMy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJ0cmlwbGUtd2FybWVyLW1lcmlkaWFuLXVwcGVyXCI6IFwiRFJFSUZBQ0hFUiBFUlfDhFJNRVIgTUVSLlwiLFxyXG4gICAgICAgIFwidHJpcGxlLXdhcm1lci1tZXJpZGlhbi1zaG9ydFwiOiBcIkRSRUlGQUNIRVIgRVJXw4RSTUVSXCIsXHJcbiAgICAgICAgXCJ0cmlwbGUtd2FybWVyLW1lcmlkaWFuLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhhcm1vbmlzaWVydCBkZW4gRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4gYmVpIE1lbnNjaGVuIG1pdCBIaXR6ZS0gb2RlciBLw6RsdGVnZWbDvGhsIGltIEJhdWNoLiDigKIgTGluZGVydCBQcm9ibGVtZSBpbSBadXNhbW1lbmhhbmcgbWl0IGRlciBOw6RocnN0b2ZmYXVmbmFobWUgdW5kIGVybGF1YnQgZWluZSBlZmZpemllbnRlIEF1Zm5haG1lIGRlciBOw6RocnN0b2ZmZSB1bmQgQXVzbGVpdHVuZyBkZXIgU3RvZmZ3ZWNoc2VsLUVuZHByb2R1a3RlLiDigKIgVmVyYmVzc2VydCBkZW4gU3RvZmZ3ZWNoc2VsLiDigKIgU3BpdHplbmFrdGl2aXTDpHQgZGVzIERyZWlmYWNoZW4tRXJ3w6RybWVyLU1lcmlkaWFucyBpc3Qgdm9uIDIxOjAwIGJpcyAyMzowMCBVaHIuIFp1c2F0enByb2dyYW1tZTogSG9sei1FbGVtZW50LCBFcmRlLUVsZW1lbnQsIEx1bmdlbi1NZXJpZGlhbiwgSGVyei1NZXJpZGlhbiwgTWFnZW4tTWVyaWRpYW4sIE1pbHotTWVyaWRpYW4sIETDvG5uLSB1bmQgRGlja2Rhcm0tTWVyaWRpYW5lLCBOaWVyZW4tTWVyaWRpYW4sIEJsYXNlbi1NZXJpZGlhbiwgQXRtdW5nc3N5c3RlbSwgVmVyZGF1dW5nc3N5c3RlbSwgNC4g4oCTIDYuIHVuZCA3LiBDaGFrcmFcIixcclxuICAgICAgICBcInVyaW5hcnktYmxhZGRlci1tZXJpZGlhbi11cHBlclwiOiBcIkJMQVNFTiBNRVJJRElBTiBcIixcclxuICAgICAgICBcInVyaW5hcnktYmxhZGRlci1tZXJpZGlhbi1zaG9ydFwiOiBcIkJMQVNFTlwiLFxyXG4gICAgICAgIFwidXJpbmFyeS1ibGFkZGVyLW1lcmlkaWFuLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhhcm1vbmlzaWVydCBkZW4gSGFybmJsYXNlLU1lcmlkaWFuIChiZWkgdHJvY2tlbmVuIEF1Z2VuLCBHZWxlbmtlLCBIYWxzLCBEaWNrZGFybSBvZGVyIFNjaGVpZGUpLiDigKIgRsO8ciBzdHJhZmZlIHVuZCBlbGFzdGlzY2hlIEhhdXQuIOKAoiBVbnRlcnN0w7x0enQgTWVuc2NoZW4sIGRpZSByYXNjaCBpbiBQYW5payBnZXJhdGVuLiDigKIgRsO2cmRlcnQgZGllIEbDpGhpZ2tlaXQsIHNjaHdpZXJpZ2UgTGViZW5zc2l0dWF0aW9uZW4genUgbWVpc3Rlcm4uIOKAoiBTcGl0emVuYWt0aXZpdMOkdCBkZXIgSGFybmJsYXNlIGlzdCB2b24gMTU6MDAgYmlzIDE3OjAwIFVoci4g4oCiIERpZSBIYXJuYmxhc2UgaXN0IFlhbmcg4oCTIHZlcmJ1bmRlbiBtaXQgZGVtIFlpbi1PcmdhbiBkZXIgTmllcmVuLSBlbnRzcHJpY2h0IGRlbSBXYXNzZXItRWxlbWVudCB1bmQgZGVtIEFuZ3N0LUdlZsO8aGwuIOKAoiBadXNhdHpwcm9ncmFtbWU6IFdpcmJlbHPDpHVsZSwgRXJzY2jDtnBmdW5nLCBBdWdlbiwgR2VsZW5rZSwgIFdhc3Nlci1FbGVtZW50LCBOaWVyZW4tTWVyaWRpYW4sIERyZWlmYWNoZXItRXJ3w6RybWVyLU1lcmlkaWFuLCBEaWNrZGFybS0gTWVyaWRpYW4sIDIuIENoYWtyYVwiLFxyXG4gICAgICAgIFwibWV0YWwtZWxlbWVudC11cHBlclwiOiBcIkVMRU1FTlQgTUVUQUxML0xVRlQvV0lORFwiLFxyXG4gICAgICAgIFwibWV0YWwtZWxlbWVudC1zaG9ydFwiOiBcIk1FVEFMTC9MVUZUL1dJTkRcIixcclxuICAgICAgICBcIm1ldGFsLWVsZW1lbnQtZGVzY3JpcHRpb25cIjogXCLigKIgQXJtb25pc2llcnQgZW1vdGlvbmFsZSBWZXJoYWx0ZW5zd2Vpc2VuIGRlcyBNZXRhbC1FbGVtZW50ZXM6IFRyYXVyaWdrZWl0IHVuZCBEZXByZXNzaW9uLiDigKIgQWxzIFp1c2F0emJlaGFuZGx1bmcgYmVpIFByb2JsZW1lbiBtaXQgYWJub3JtYWxlbiBPcmdhbmZ1bmt0aW9uZW46IEx1bmdlLCBEaWNrZGFybSB1bmQgSGF1dCwgd2VsY2hlIGRlbSBNZXRhbC1FbGVtZW50IHp1Z2VvcmRuZXQgd2VyZGVuLiBadXNhdHpwcm9ncmFtbWU6ICBNZXJpZGlhbmUgdW5kIENoYWtyYXNcIixcclxuICAgICAgICBcIndhdGVyLWVsZW1lbnQtdXBwZXJcIjogXCJFTEVNRU5UIFdBU1NFUlwiLFxyXG4gICAgICAgIFwid2F0ZXItZWxlbWVudC1zaG9ydFwiOiBcIldBU1NFUlwiLFxyXG4gICAgICAgIFwid2F0ZXItZWxlbWVudC1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGFzIGVtb3Rpb25hbGUgVmVyaGFsdGVuIGRlcyBXYXNzZXJlbGVtZW50cyB3aWUgU3RyZXNzIHVuZCBBbmdzdCDigKIgQWxzIGVyZ8OkbnplbmRlIEJlaGFuZGx1bmcgdm9uIFByb2JsZW1lbiwgZGllIGR1cmNoIGFibm9ybWFsZSBBa3Rpdml0w6R0IHZvbiBPcmdhbmVuIHdpZSBOaWVyZSwgQmxhc2UsIEtub2NoZW4gdW5kIFNpbm5lc29yZ2FuZW4gd2llIGRlbiB2b20gV2Fzc2VyZWxlbWVudCBrb250cm9sbGllcnRlbiBPaHJlbiBlbnRzdGVoZW4uIFN1cHBvcnQtUHJvZ3JhbW1lOiBOaWVyZW5tZXJpZGlhbiwgTWVyaWRpYW4gSGFybmJsYXNlLCBMeW1waHN5c3RlbSwgU3RpbW11bmcsIEtub2NoZW4sIEludHVpdGlvbiwgRnJ1c3RyYXRpb24sIEtvbnplbnRyYXRpb24sIEVyZGVsZW1lbnRcIixcclxuICAgICAgICBcImVhcnRoLWVsZW1lbnQtdXBwZXJcIjogXCJFTEVNRU5UIEVSREVcIixcclxuICAgICAgICBcImVhcnRoLWVsZW1lbnQtc2hvcnRcIjogXCJFUkRFXCIsXHJcbiAgICAgICAgXCJlYXJ0aC1lbGVtZW50LWRlc2NyaXB0aW9uXCI6IFwi4oCiIGhhcm1vbmlzaWVydCBlbW90aW9uYWxlIFZlcmhhbHRlbnN3ZWlzZW4gZGVzIEVyZGUtRWxlbWVudGVzIHNvbGNoZSB3aWUgQW5nc3QgdW5kIEJlc29yZ25pcy4g4oCiIEFscyBadXNhdHpiZWhhbmRsdW5nIGJlaSBQcm9ibGVtZW4gbWl0IGFibm9ybWFsZW4gT3JnYW5mdW5rdGlvbmVuLiBNYWdlbiwgTWlseiwgQmF1Y2hzcGVpY2hlbGRyw7xzZSB1bmQgTXVza2VsZ2V3ZWJlLCB3ZWxjaGUgZGVtIEVyZGUtRWxlbWVudCB6dWdlb3JkbmV0IHdlcmRlbi4gWnVzYXR6cHJvZ3JhbW1lOiAgTWVyaWRpYW5lIHVuZCBDaGFrcmFzXCIsXHJcbiAgICAgICAgXCJmaXJlLWVsZW1lbnQtdXBwZXJcIjogXCJFTEVNRU5UIEZFVUVSXCIsXHJcbiAgICAgICAgXCJmaXJlLWVsZW1lbnQtc2hvcnRcIjogXCJGRVVFUlwiLFxyXG4gICAgICAgIFwiZmlyZS1lbGVtZW50LWRlc2NyaXB0aW9uXCI6IFwi4oCiIFN0YWJpbGlzaWVydCBleHRyZW1lIFN0aW1tdW5nc3NjaHdhbmt1bmdlbi4g4oCiIEFscyBadXNhdHpiZWhhbmRsdW5nIGJlaSBQcm9ibGVtZW4gbWl0IGFibm9ybWFsZW4gT3JnYW5mdW5rdGlvbmVuOiBIZXJ6LCBEw7xubmRhcm0gdW5kIEJsdXRnZWbDpHNzZSwgd2VsY2hlIGRlbSBGZXVlci1FbGVtZW50IHp1Z2VvcmRuZXQgd2VyZGVuLiBadXNhdHpwcm9ncmFtbWU6IE1lcmlkaWFuZSB1bmQgQ2hha3Jhc1wiLFxyXG4gICAgICAgIFwid29vZC1lbGVtZW50LXVwcGVyXCI6IFwiRUxFTUVOVCBIT0xaL8OEVEhFUlwiLFxyXG4gICAgICAgIFwid29vZC1lbGVtZW50LXNob3J0XCI6IFwiSE9MWi/DhFRIRVJcIixcclxuICAgICAgICBcIndvb2QtZWxlbWVudC1kZXNjcmlwdGlvblwiOiBcIuKAoiBIYXJtb25pc2llcnQgZGFzIGVtb3Rpb25hbGUgVmVyaGFsdGVuIGRlcyBIb2x6ZWxlbWVudHMgd2llIFd1dCDigKIgQWxzIGVyZ8OkbnplbmRlIEJlaGFuZGx1bmcgZsO8ciBQcm9ibGVtZSwgZGllIGR1cmNoIGFibm9ybWFsZSBBa3Rpdml0w6R0IHZvbiBPcmdhbmVuIHdpZSBMZWJlciwgQmxhc2UsIEdld2ViZSwgd2llIFNlaG5lbiB1bmQgU2lubmVzb3JnYW5lIHdpZSBkZW4gZHVyY2ggZGFzIEhvbHplbGVtZW50IGtvbnRyb2xsaWVydGVuIEF1Z2VuIGVudHN0ZWhlbi4gVW50ZXJzdMO8dHp1bmdzcHJvZ3JhbW1lOiBMZWJlcm1lcmlkaWFuLCBNZXJpZGlhbi1HYWxsZW5ibGFzZSwgTmVydmVuLCBNdXNrZWxuLCBGcnVzdHJhdGlvbiwgQmluZGVnZXdlYmUsIEdlbGVuaywgTWlsem1lcmlkaWFuLCBFcmRlbGVtZW50LCBNZXRhbGxlbGVtZW50LCBFbnRnaWZ0dW5nLCBGcmllZGVuLCAxLiBDaGFrcmEsIDMuIENoYWtyYSwgNC4gQ2hha3JhICwgNi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXHJcbiAgICAgICAgXCJtaW5lcmFsLW1ldGFib2xpYy1hY3Rpdml0eS11cHBlclwiOiBcIk1JTkVSQUxTVE9GRldFQ0hTRUxcIixcclxuICAgICAgICBcIm1pbmVyYWwtbWV0YWJvbGljLWFjdGl2aXR5LWRlc2NyaXB0aW9uXCI6IFwi4oCiIFVudGVyc3TDvHR6dCBkaWUgTWluZXJhbC1TdG9mZndlY2hzZWx0w6R0aWdrZWl0IHVuZCBvcHRpbWllcnQgZGVzc2VuIEF1Zm5haG1lIHVuZCBWZXJ3ZW5kdW5nLiDigKIgWnVzYXR6YmVoYW5kbHVuZyBiZWkgU3RvZmZ3ZWNoc2VsLVN0w7ZydW5nZW4uIFp1c2F0enByb2dyYW1tZTogIFZlcmRhdXVuZywgRGFybWZsb3JhLCBFbnRnaWZ0dW5nLCBGcnVzdHJhdGlvbiwgRnJpZWRlLCBFLXNtb2csIEZldWVyLUVsZW1lbnQsIERpY2stIHVuZCBEw7xubmRhcm0tTWVyaWRpYW4sIE1hZ2VuLU1lcmlkaWFuLCBEcmVpZmFjaGVyLUVyd8Okcm1lci1NZXJpZGlhbiwgMS4gIHVuZCAyLiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJtdXNjbGUtdGlzc3VlLXVwcGVyXCI6IFwiTVVTS0VMR0VXRUJFXCIsXHJcbiAgICAgICAgXCJtdXNjbGUtdGlzc3VlLWRlc2NyaXB0aW9uXCI6IFwi4oCiIFRoZXJhcGllcnQgZGFzIE11c2tlbGdld2ViZSB1bmQgcmVndCBkaWUgTXVza2VsZ2VuZXN1bmcgYW4uIOKAoiBVbnRlcnPDvHR6dCBkaWUgUmVnZW5lcmllcnVuZyBkZXMgTXVza2VsZ2V3ZWJlcyBuYWNoIGtsZWluZXJlbiBWZXJsZXR6dW5nZW4uIOKAoiBVbnRlcnN0w7x0enQgZGllIEJlaGFuZGx1bmcgYmVpIG1vdG9yaXNjaGVuIEJlZmluZGxpY2hrZWl0c3N0w7ZydW5nZW4gKHouQi4gbmFjaCBVbmZhbGwgb2RlciBuYWNoIEdlaGlybnNjaGxhZyBtaXQgTMOkaG11bmdzZXJzY2hlaW51bmcpLiDigKIgU3RlaWdlcnQgZGllIG11c2t1bMOkcmUgTGVpc3R1bmdzZsOkaGlna2VpdCB1bmQgdmVybWluZGVydCBkYXMgVmVybGV0enVuZ3NyaXNpa28uIOKAoiBVbnRlcnN0w7x0emVuZCBmw7xyIGdlc3VuZGUgR2VsZW5rZSBkdXJjaCBIYXJtb25pc2llcnVuZyBkZXIgTXVza2VsLUZlaGxzdGVsbHVuZy4g4oCiIEJlaSBOZWlndW5nIHp1IE11c2tlbHNjaHd1bmQuIFp1c2F0enByb2dyYW1tZTogS3JlaXNsYXVmLVN5c3RlbSwgTmVydmVuc3lzdGVtLCBCaW5kZWdld2ViZSwgTHltcGhzeXN0ZW0sIFJlZ2VuZXJhdGlvbiwgVmVyZGF1dW5nc3N5c3RlbSwgTWlsei1NZXJpZGlhbiwgRMO8bm5kYXJtLU1lcmlkaWFuLCAxLiAgdW5kICA3LiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJuZWNrLXNob3VsZGVyLXVwcGVyXCI6IFwiTkFDS0VOLVNDSFVMVEVSQkVSRUlDSFwiLFxyXG4gICAgICAgIFwibmVjay1zaG91bGRlci1kZXNjcmlwdGlvblwiOiBcIuKAoiBMw7ZzdCBWZXJzcGFubnVuZ2VuIGltIE5hY2tlbi9TY2h1bHRlcmJlcmVpY2guIOKAoiBFcmjDtmh0IGRpZSBMZWlzdHVuZ3Nmw6RoaWdrZWl0IGRlciBCbHV0Z2Vmw6Rzc2UgaW0gTmFja2VuLSB1bmQgS29wZmJlcmVpY2guIFp1c2F0enByb2dyYW1tZTogS3JlaXNsYXVmc3lzdGVtLCBXaXJiZWxzw6R1bGUsIEJpbmRlZ2V3ZWJlLCBNdXNrZWxuLCBOZXJ2ZW5zeXN0ZW0sIEUtU21vZywgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIEhhcm5ibGFzZS1NZXJpZGlhbiwgRHJlaWZhY2hlci1FcnfDpHJtZXItTWVyaWRpYW4sIDEuIHVuZCA1LiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJuZXJ2b3VzLXN5c3RlbS11cHBlclwiOiBcIk5FUlZFTlNZU1RFTVwiLFxyXG4gICAgICAgIFwibmVydm91cy1zeXN0ZW0tZGVzY3JpcHRpb25cIjogXCLigKIgRsO2cmRlcnQgZGllIEVudHNwYW5udW5nIHVuZCBSZWdlbmVyaWVydW5nIGRlcyBaZW50cmFsLU5lcnZlbnN5c3RlbXMuIOKAoiBVbnRlcnN0w7x0enQgZGllIEJlaGFuZGx1bmcgdm9uIGVudGFydGV0ZW0gTXVza2VsLUxlaWRlbiAoei5CLiBiZWkgTXVza2Vsc2Nod3VuZCkuIOKAoiBFcmfDpG56dCBkaWUgTmVydmVuemVsbGVuLUJlaGFuZGx1bmcgYmVpIGRlciBSZWdlbmVyaWVydW5nLiDigKIgRXJnw6RuenQgTXVza2Vsa29vcmRpbmF0aW9ucy1CZWhhbmRsdW5nZW4gaGVydm9yZ2VydWZlbiBkdXJjaCBBYmdlc3Bhbm50aGVpdCAoei5CLiBzY2h3YWNoZXMgTmllcmVuLUNoaSwgZXJzY2jDtnBmdGUgTmViZW5uaWVyZW4sZXRjLikuIOKAoiBFcmfDpG56dCBkaWUgQmVoYW5kbHVuZyBiZWkgaMOkdWZpZ2VuIHNwb250YW5lbiBNdXNrZWxiZXdlZ3VuZ2VuLiDigKIgUGFyYXNpdGVuIGvDtm5uZW4gZsO8ciBlaW5lIGFuZGF1ZXJuZGUgw5xiZXJzdGltbXVsaWVydW5nIGRlcyBOZXJ2ZW5zeXN0ZW1zIHZlcmFudHdvcnRsaWNoIHNlaW4uIFp1c2F0enByb2dyYW1tZTogTGViZXItTWVyaWRpYW4sIEFudGktQWdpbmcsIEVudGdpZnR1bmcsIE1pbmVyYWxpZW4tU3RvZmZ3ZWNoc2VsLVN0w7ZydW5nLCBXaXJiZWxzw6R1bGUsIERpY2tkYXJtLCBWZXJsZXR6dW5nLCA2LiB1bmQgNy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJwYWluLXVwcGVyXCI6IFwiU0NITUVSWlwiLFxyXG4gICAgICAgIFwicGFpbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBCZWkgYWt1dGVuIHVuZCBjaHJvbmlzY2hlbiBTY2htZXJ6ZW4uIOKAoiBCZWkgS29wZi0gdW5kIEdlbGVua3NjaG1lcnplbi4g4oCiIEFud2VuZHVuZyBuYWNoIFRyYXVtYXMgb2RlciBPcGVyYXRpb25lbi4g4oCiIE1pbmRlcnQgU2NobWVyemVuIGF1ZmdydW5kIHZvbiBLcmFtcGZhZGVybi4g4oCiIEJlaSBjaHJvbmlzY2hlbiBTY2htZXJ6ZW4gaXN0IGRlciBUaGVyYXBpZWVyZm9sZyBuYWNoIGVpbmlnZW4gVGFnZW4gZGVyIEFud2VuZHVuZyBzcMO8cmJhci4gWnVzYXR6cHJvZ3JhbW1lOiBWZXJsZXR6dW5nLCBFbnRzcGFubnVuZywgRnJldWRlLCBGcnVzdHJhdGlvbiwgTmVydmVuc3lzdGVtLCBGcmllZGUsIE11c2tlbG4sIEJpbmRlZ2V3ZWJlLCBLbm9jaGVuLCBHZWxlbmtlLCBWZXJkYXV1bmdzc3lzdGVtLCBFbmVyZ2llLUF1c2dsZWljaCwgQ2hha3JhcywgRWxlbWVudGUgdW5kIE1lcmlkaWFuZVwiLFxyXG4gICAgICAgIFwicGVhY2UtdXBwZXJcIjogXCJGUklFREVOXCIsXHJcbiAgICAgICAgXCJwZWFjZS1kZXNjcmlwdGlvblwiOiBcIuKAoiBCZXPDpG5mdGlndCBzY2h3ZXJlIGVtb3Rpb25hbGUgTW9tZW50ZSAoVW5mYWxsLCBTY2hlaWR1bmcsIFByb2JsZW1lIGJlaSBkZXIgQXJiZWl0KS4g4oCiIFN0YWJpbGlzaWVydCBkaWUgaW5uZXJlIEhhcm1vbmllLiDigKIgRW50c3Bhbm5lbmQgbmFjaCBsYW5nZXIgQXJiZWl0cy0gb2RlciBMZXJuc3R1bmRlbi4gWnVzYXR6cHJvZ3JhbW1lOiBFLVNtb2csIEVuZXJnaWUtQXVzZ2xlaWNoLCBGcnVzdHJhdGlvbiwgRnJpZWRlLCBFbnRzcGFubnVuZywgTWV0YWxsLUVsZW1lbnQsIFdhc3Nlci1FbGVtZW50LCBIZXJ6LU1lcmlkaWFuLCBQZXJpa2FyZGlvLU1lcmlkaWFuLCBMZWJlci1NZXJpZGlhbiwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIENoYWtyYXNcIixcclxuICAgICAgICBcInJlZ2VuZXJhdGlvbi11cHBlclwiOiBcIlJFR0VORVJJRVJVTkdcIixcclxuICAgICAgICBcInJlZ2VuZXJhdGlvbi1kZXNjcmlwdGlvblwiOiBcIuKAoiBCZXNjaGxldW5pZ3QgZGVuIFJlZ2VuZXJhdGlvbnNwcm96ZXNzIGJlaSBrw7ZycGVybGljaGVyIEVybcO8ZHVuZy4g4oCiIExpbmRlcnQgTXVza2Vsc2NobWVyemVuIG5hY2ggZGVtIFRyYWluaW5nLiDigKIgTWluZGVydCBkYXMgRXJzY2jDtnBmdW5nc2dlZsO8aGwgaW4gZGVuIEJlaW5lbiB1bmQgaW0gTGVuZGVuYmVyZWljaCBuYWNoIGxhbmdlbSBTdGVoZW4gdW5kL29kZXIgTGF1ZmVuLiBadXIgQXVmZnJpc2NodW5nIGRlciBCZWluZSB1bmQgSMO8ZnRlLiDigKIgRsO2cmRlcnQgZGllIG1lbnRhbGUgTGVpc3R1bmdzZsOkaGlna2VpdCBkdXJjaCBkaWUga8O2cnBlcmxpY2hlIEF1ZmZyaXNjaHVuZy4g4oCiIExpbmRlcnQgTXVza2Vsa2F0ZXIgbmFjaCBrw7ZycGVybGljaGVyIEFuc3RyZW5ndW5nLCAxIOKAkyAyIEFud2VuZHVuZyBnbGVpY2ggbmFjaCBkZW0gVHJhaW5pbmcuIOKAoiBOYWNoIGRlbSBXZXR0a2FtcGYgb3IgZXh0cmVtZW0gVHJhaW5pbmcuIFp1c2F0enByb2dyYW1tZTogTHltcGhzeXN0ZW0sIEtyZWlzbGF1ZnN5c3RlbSwgRW5lcmdpZS1TcGVuZGVyLCBMZWJlbnNmcmV1ZGUsIE11c2tlbG4sIFZlcmRhdXVuZ3NzeXN0ZW0sIE5lYmVubmllcmVuLCBOZXJ2ZW5zeXN0ZW0sIEJpbmRlZ2V3ZWJlLCBFcmRlLUVsZW1lbnQsIDEuLCAyLiB1bmQgNy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJyZWxheGF0aW9uLXVwcGVyXCI6IFwiRU5UU1BBTk5VTkdcIixcclxuICAgICAgICBcInJlbGF4YXRpb24tZGVzY3JpcHRpb25cIjogXCLigKIgQmVpIFN0cmVzcyB1bmQgVmVyc3Bhbm51bmdlbi4g4oCiIEhpbGZ0IHVudmVyYXJiZWl0ZXRlIEVtb3Rpb25lbiB1bmQgU3RyZXNzIHp1IGthbmFsaXNpZXJlbi4gWnVzYXR6cHJvZ3JhbW1lOiAgRW5lcmdpZS1BdXNnbGVpY2gsIEZydXN0cmF0aW9uLCBGcmV1ZGUsIE5lYmVubmllcmVuLCBGcmllZGUsIFNjaGlsZGRyw7xzZSwgRS1TbW9nLCBIZXJ6LU1lcmlkaWFuLCAxLiDigJMgNC4gdW5kIDcuIENoYWtyYVwiLFxyXG4gICAgICAgIFwicmVzcGlyYXRvcnktc3lzdGVtLXVwcGVyXCI6IFwiQVRNVU5HU1NZU1RFTVwiLFxyXG4gICAgICAgIFwicmVzcGlyYXRvcnktc3lzdGVtLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEFscyBrb21wbGVtZW50w6RyZSBTZWxic3R2ZXJzb3JndW5nIGJlaSBBdGVtd2Vncy1FcmtyYW5rdW5nZW4uIOKAoiBTdGltdWxpZXJ0IEhlaWx1bmdzcHJvemVzcyBkZXIgQXRlbXdlZ2UgYmVpIEh1c3RlbiwgR3JpcHBlLCBCcm9uY2hpdGlzLCBNYW5kZWxlbnR6w7xuZHVuZywgTHVuZ2VuZW50esO8bmR1bmcgKGFscyBFcmfDpG56dW5nKS4g4oCiIEJlaSBSZWl6aHVzdGVuIChhdWNoIFJhdWNoZXJodXN0ZW4pIERhcyBQcm9ncmFtbSBtaW5kLiA2IFdvY2hlbiBhbndlbmRlbi4g4oCiIE9wdGltaWVydCBkaWUgQXRtdW5nc2Z1bmt0aW9uZW4gYmVpIEVya8OkbHVuZy4gQmVnaW5uZSBtaXQgZGVtIFByb2dyYW1tIGJlaSBkZW4gZXJzdGVuIEFuemVpY2hlbiB1bmQgd2VuZGUgZXMgYmlzIGVpbmlnZSBUYWdlLCBuYWNoZGVtIGRpZSBTeW1wdG9tZSB2ZXJzY2h3dW5kZW4gc2luZCwgYW4gQmVmcmVpdCBkaWUgQXRlbXdlZ2UuIOKAoiBGw7ZyZGVydCBkaWUgV2lya3VuZyB2b24gQXRlbcO8YnVuZ2VuLiBFaW5lIHdpcmt1bmdzdm9sbGUgRXJnw6RuenVuZyB6dSBZb2dhIFBvc2l0aW9uZW4gKGFzYW5hcykg4oCTIGhhcm1vbmlzaWVydCBkaWUgQXRtdW5nIHVuZCBiZWhhbHQgaWhuIGluIGVpbmVtIG5hdMO8cmxpY2hlbiBSeXRobXVzLiBadXNhdHpwcm9ncmFtbWU6IEltbXVuc3lzdGVtLCBMeW1waHN5c3RlbSwgRnJ1c3RyYXRpb24sIEdyaXBwZSwgTmViZW5ow7ZobGVuLCBEYXJtZmxvcmEsIFZlcmRhdXVuZ3NzeXN0ZW0sIEUtU21vZywgRW5lcmdpZS1BdXNnbGVpY2gsIEZyZXVkZVwiLFxyXG4gICAgICAgIFwic2ludXMtY2F2aXRpZXMtdXBwZXJcIjogXCJOQVNFTk5FQkVOSMOWSExFTlwiLFxyXG4gICAgICAgIFwic2ludXMtY2F2aXRpZXMtZGVzY3JpcHRpb25cIjogXCLigKIgTGluZGVydCBha3V0ZSB1bmQgY2hyb25pc2NoZSBTdGlybmjDtmhsZW5lbnR6w7xuZHVuZyB1bmQgU2NobWVyemVuIGltIEdlc2ljaHQuIOKAoiBVbnRlcnN0w7x0enQgZGFzIEltbXVuc3lzdGVtLiDigKIgVW50ZXJzdMO8dHp0IGRpZSBTdG9mZndlY2hzZWx2b3Jnw6RuZ2UgZGVyIFN0aXJuaMO2aGxlbiwgdW5kIGlzdCBoaWxmcmVpY2ggYmVpIEFsbGVyZ2llc3ltcHRvbWVuIEFscyBWb3JiZXVndW5nIGbDvHIgU3Rpcm5ow7ZobGVuZW50esO8bmR1bmcgaW4gZGVyIElua3ViaW5hdGlvbnN6ZWl0IGRlciBHcmlwcGUuIOKAoiBEaWVzZXMgUHJvZ3JhbW0gc29sbCwgw7xiZXIgbWVocmVyZSBUYWdlIG5hY2hkZW0gZGllIFN5bXB0b21lIHZlcnNjaHd1bmRlbiBzaW5kLCBhbmdld2VuZGV0IHdlcmRlbi4gWnVzYXR6cHJvZ3JhbW1lOiAgSW1tdW5zeXN0ZW0sIEx5bXBoc3lzdGVtLCBBdG11bmdzc3lzdGVtLCBFbnRnaWZ0dW5nLCBNZXRhbGwtRWxlbWVudCwgRGFybWZsb3JhLCBMdW5nZW4tTWVyaWRpYW4sIDQuICwgNS4gIHVuZCA2LiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJza2luLWNvbmRpdGlvbnMtdXBwZXJcIjogXCJIQVVUXCIsXHJcbiAgICAgICAgXCJza2luLWNvbmRpdGlvbnMtZGVzY3JpcHRpb25cIjogXCLigKIgQmVpIEhhdXRlcmtyYW5rdW5nZW4uIOKAoiBFcmfDpG56ZW5kIGJlaSBIYXV0ZW50esO8bmR1bmdlbiBiZWkgdGhlcmFwZXV0aXNjaGVuIEVpbmdyaWZmZW4uIOKAoiBFcmfDpG56dW5nc3RoZXJhcGllIGJlaSBob3Jtb25lbGxlbSBVbmdsZWljaGdld2ljaHQuIFp1c2F0enByb2dyYW1tZTogRW50Z2lmdHVuZywgQW50aSBBZ2luZywgQmluZGVnZXdlYmUsIFZlcmRhdXVuZ3NzeXN0ZW0sIEbDvHIgZGVuIE1hbm4sIEbDvHIgZGllIEZyYXUsIE1ldGFsbC1FbGVtZW50LCBMZWJlci1NZXJpZGlhbiwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIEhhcm5ibGFzZS1NZXJpZGlhbiwgMS4sIDIuIHVuZCA0LiBDaGFrcmFcIixcclxuICAgICAgICBcInNsZWVwLWVuaGFuY2VyLXVwcGVyXCI6IFwiU0NITEFGSFlHSUVORVwiLFxyXG4gICAgICAgIFwic2xlZXAtZW5oYW5jZXItZGVzY3JpcHRpb25cIjogXCLigKIgQmVpIEVpbnNjaGxhZi0gdW5kIER1cmNoc2NobGFmcHJvYmxlbWVuLiDigKIgVmVycmluZ2VydCBkZXByZXNzaXZlIEdlZGFua2VuLiDigKIgU3RlaWdlcnQgZGFzIGvDtnJwZXJsaWNoZSB1bmQgZW1vdGlvbmFsZSBGcmllZGVuc2dlZsO8aGwuIFp1c2F0enByb2dyYW1tZTogICBFbmVyZ2llLUF1c2dsZWljaCwgRW50c3Bhbm51bmcsIE5lYmVubmllcmUsIEZyaWVkZSwgRS1TbW9nLCBGcmV1ZGUsIEZydXN0cmF0aW9uLCBTY2hpbGRkcsO8c2VuLCAxLiwgMi4sIDMuLCA2LiB1bmQgNy4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJzdHJlc3MtcmVsaWVmLXVwcGVyXCI6IFwiU1RSRVNTXCIsXHJcbiAgICAgICAgXCJzdHJlc3MtcmVsaWVmLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEhpbGZyZWljaCBiZWkgYWt1dGVyIEZydXN0cmF0aW9uLiDigKIgVW50ZXJzdMO8dHplbmQgYmVpIGRlciBrw7ZycGVybGljaGVuIHVuZCBwc3ljaGlzY2hlbiBQcm9ibGVtbMO2c3VuZyBhdWZncnVuZCB2b24gdW50ZXJkcsO8Y2t0ZW4gRW1vdGlvbmVuLiDigKIgQmVpIMOcYmVycmVha3Rpb25lbiAoZGllIG9mdCBpbiBzZWxic3R6ZXJzdMO2cmVuZGVuIEFrdGlvbmVuIGVuZGVuKSBhdWZncnVuZCB2b24gZWluZXIgYW5nZXNwYW5udGVuIExlYmVuc2bDvGhydW5nLiDigKIgVmVybWluZGVydCBwc3ljaGlzY2hlIEFuc3Bhbm51bmcgKHouQi4gYmVpIGRlciBTZWxic3R3YXJuZWhtdW5nKS4g4oCiIEJlZnJlaXQgdm9uIGVsZWt0cm9tYWduZXRpc2NoZW4gRW5ncmFtbWVuIGRlciB1bnRlcmRyw7xja3RlbiBFbW90aW9uZW4sIHdlbGNoZSB6dSBhZ3Jlc3NpdmVtIFZlcmhhbHRlbiBmw7xocmVuLiDigKIgRsO8ciBNZW5zY2hlbiBkaWUgaW1tZXIgYWxsZW4gaGVsZmVuIHVuZCBzaWNoIHNlbGJlciB6dSB3ZW5pZyBaZWl0IHdpZG1lbi4gVmVycmluZ2VydCBTdMO2cnVuZ2VuIGRlcyBOZXJ2ZW5zeXN0ZW1zIHVuZCBkZXIgS29vcmRpbmF0aW9uLCBkaWUgZHVyY2ggdW50ZXJkcsO8Y2t0ZSBFbW90aW9uZW4gdW5kIEVudHTDpHVzY2h1bmdlbiBoZXJ2b3JnZXJ1ZmVuIHdlcmRlbi4g4oCiIEbDvHIgTGV1dGUsIGRpZSBkYXMgR2Vmw7xobCBoYWJlbiwgdm9tIExlYmVuIHNlbGJzdCB1bmdlcmVjaHQgYmVoYW5kZWx0IHp1IHdlcmRlbi4gWnVzYXR6cHJvZ3JhbW1lOiBFLXNtb2csIEZyaWVkZSwgRW50c3Bhbm51bmcsIEZyZXVkZSwgTmViZW5uaWVyZW4sIEVuZXJnaWUtQXVzZ2xlaWNoLCBHYWxsZW5ibGFzZS1NZXJpZGlhbiwgTGViZXItTWVyaWRpYW4sIEZldWVyLUVsZW1lbnQsIEhlcnotTWVyaWRpYW4sIE1lZGl0YXRpb24gMS4sIDIuICwgMy4gIHVuZCA2LiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCJ0aHlyb2lkLWdsYW5kcy11cHBlclwiOiBcIlNDSElMRERSw5xTRVwiLFxyXG4gICAgICAgIFwidGh5cm9pZC1nbGFuZHMtZGVzY3JpcHRpb25cIjogXCLigKIgQWxzIEVyZ8Okbnp1bmdzdGhlcmFwaWUgZsO8ciBVbnRlci0gdW5kIMOcYmVyZ2V3aWNodGlnZS4g4oCiIEbDtnJkZXJ0IGRpZSBXaXJrdW5nIHZvbiBBYm1hZ2VydW5nc2t1cmVuIHVuZCB1bnRlcnN0w7x0enQgZGllIExlYmVuc2tyYWZ0LiDigKIgT3B0aW1pZXJ0IGRpZSBGdW5rdGlvbiBkZXIgWmVsbG1lbWJyYW5lLiBadXNhdHpwcm9ncmFtbWU6IE5lcnZlbiwgTmViZW5uaWVyZSwgQW50aS1BZ2luZywgS3JlaXNsYXVmc3lzdGVtLCBGcmV1ZGUsIEZydXN0cmF0aW9uLCBNaWx6L0JhdWNoc3BlaWNoZWxkcsO8c2UtTWVyaWRpYW4sIERyZWlmYWNoZXItRXJ3w6RybWVyLU1lcmlkaWFuLCAyLiB1bmQgNS4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJ1cmluYXJ5LXVwcGVyXCI6IFwiTklFUkVOIFVORCBBQkxFSVRFTkRFIEhBUk5XRUdFXCIsXHJcbiAgICAgICAgXCJ1cmluYXJ5LWRlc2NyaXB0aW9uXCI6IFwi4oCiIEJlaSBCbGFzZW5lbnR6w7xuZHVuZy4g4oCiIE1pbmRlcnQgaMOkdWZpZyB2b3Jrb21tZW5kZXIgU2Now7x0dGVsZnJvc3QuIFp1c2F0enByb2dyYW1tZTogRW50c3Bhbm51bmcsIEZydXN0cmF0aW9uLCBOZWJlbm5pZXJlLCBJbW11bnN5c3RlbSwgRGFybWZsb3JhLCBIYXJuYmxhc2UtTWVyaWRpYW4sIERyZWlmYWNoZXItRXJ3w6RybWVyLU1lcmlkaWFuLCBXYXNzZXItRWxlbWVudCwgMi4gQ2hha3JhXCIsXHJcbiAgICAgICAgXCJ2ZXJ0ZWJyYWUtdXBwZXJcIjogXCJXSVJCRUxTw4RVTEVcIixcclxuICAgICAgICBcInZlcnRlYnJhZS1kZXNjcmlwdGlvblwiOiBcIuKAoiBFcmfDpG56ZW5kIGJlaSBSw7xja2VudGhlcmFwaWVuLiDigKIgVm9yYmV1Z2VuZCBnZWdlbiBHZXdlYmVzY2jDpGRpZ3VuZyBiZWkgTWVuc2NoZW4sIGRpZSBow6R1ZmlnIHNjaHdlcmUgRGluZ2UgaGViZW4uIOKAoiBSZWR1emllcnQgUsO8Y2tlbnByb2JsZW1lLCBkaWUgaMOkdWZpZyBuYWNoIGNocm9uaXNjaGVuIFZlcmRhdXVuZ3NzdMO2cnVuZ2VuIGF1ZnRyZXRlbi4gWnVzYXR6cHJvZ3JhbW1lOiBNdXNrZWxuLCAgS25vY2hlbiwgR2VsZW5rZSwgRW50c3Bhbm51bmcsIEJpbmRlZ2V3ZWJlLCBWZXJkYXV1bmdzc3lzdGVtLCBIb2x6LUVsZW1lbnQsIExlYmVyLU1lcmlkaWFuLCBIYXJuYmxhc2UtTWVyaWRpYW4sIEdhbGxlbmJsYXNlLU1lcmlkaWFuLDEuICB1bmQgMi4gIENoYWtyYVwiLFxyXG4gICAgICAgIFwidml0YWxpdHktdXBwZXJcIjogXCJWSVRBTElUw4RUXCIsXHJcbiAgICAgICAgXCJ2aXRhbGl0eS1kZXNjcmlwdGlvblwiOiBcIuKAoiBGw7ZyZGVydCBkaWUgVml0YWxpdMOkdC4g4oCiIFp1ciBlcmZvbGdyZWljaGVuIEF1c3NjaGVpZHVuZyB2b24gU3RvZmZ3ZWNoc2VsLUFiZmFsbHByb2R1a3Rlbi4g4oCiIFZlcnJpbmdlcnQgZGllIHTDpGdsaWNoZSBMYXN0IGFuIGdlaXN0aWdlbSB1bmQga8O2cnBlcmxpY2hlbSBTdHJlc3MuIFp1c2F0enByb2dyYW1tZTogIEVuZXJnaWUtQXVzZ2xlaWNoLCBFbmVyZ2llLVNwZW5kZXIsIE5lYmVubmllcmVuLCBTY2hpbGRkcsO8c2VuLCBNaW5lcmFsLVN0b2Zmd2VjaHNlbCwgQmluZGVnZXdlYmUsIEtub2NoZW4sIERhcm1mbG9yYSwgRSBzbW9nLCBBbGxlIE1lcmlkaWFuLVByb2dyYW1tZSwgMS4g4oCTIDIuIHVuZCAzLiBDaGFrcmFcIixcclxuICAgICAgICBcclxuICAgICAgICBcIndlaWdodC1jb250cm9sLXVwcGVyXCI6IFwiR0VXSUNIVFNLT05UUk9MTEVcIixcclxuICAgICAgICBcIndlaWdodC1jb250cm9sLWRlc2NyaXB0aW9uXCI6IFwi4oCiIEVyZ8OkbnplbmQgYmVpIEdld2ljaHRzYWJuYWhtZS1CZWhhbmRsdW5nZW4uIOKAoiBCZWfDvG5zdGlndCBkaWUgTsOkaHJzdG9mZmF1Zm5haG1lLiDigKIgRsO2cmRlcnQgZGllIEdpZnN0c3RvZmYtQXVzc2NoZWlkdW5nLiDigKIgVmVyc3TDpHJrdCBkaWUgTGViZW5za3JhZnQuIOKAoiBWZXJtaW5kZXJ0IMO8YmVyc2Now7xzc2lnZSBOYWhydW5nc2F1Zm5haG1lIGF1ZmdydW5kIHVudGVyZHLDvGNrdGVyIEVtb3Rpb25lbi4g4oCiIFJlZHV6aWVydCBEZXByZXNzaW9uIHfDpGhyZW5kIHNwZXppZWxsZXIgRGnDpHRlbi4g4oCiIFVudGVyZHLDvGNrdCBkYXMgw7xiZXJtw6Rzc2lnZSBWZXJsYW5nZW4gYXVmIE5haHJ1bmcgLiDigKIgVW50ZXJzdMO8dHp0IGRlbiBIb3Jtb24tSGF1c2hhbHQuIFp1c2F0enByb2dyYW1tZTogVmVyZGF1dW5nc3N5c3RlbSwgU2NoaWxkZHLDvHNlL1N0b2Zmd2VjaHNlbCwgRW50Z2lmdHVuZywgTWluZXJhbC1TdG9mZndlY2hzZWwsIFp1Y2tlci1TdG9mZndlY2hzZWwsIFN1Y2h0LCBFcmRlLUVsZW1lbnQsIE1ldGFsbC1FbGVtZW50LCBEaWNrLSAvRMO8bm5kYXJtLU1lcmlkaWFuLCBMZWJlci1NZXJpZGlhbiwgR2FsbGVuYmxhc2UtTWVyaWRpYW4sIE1lZGl0YXRpb24gSSwgSUksIElJSSwgMS4gIHVuZCAyLiAgQ2hha3JhXCIsXHJcbiAgICAgICAgXCIxLWNoYWtyYS1kZXNjcmlwdGlvblwiOiBcIkJlZmluZGV0IHNpY2ggYW0gRW5kZSBkZXIgV2lyYmVsc8OkdWxlIHVuZCBpc3QgbWl0IGRlbiBHZXNjaGxlY2h0cy0gdW5kIE5lYmVubmllcmVuZHLDvHNlbiB2ZXJidW5kZW4gdmVyYW50d29ydGxpY2ggZsO8ciBkaWUgR3J1bmRpc3Rpbmt0ZSB3aWUgS2FtcGYgb2RlciBGbHVjaCwgw5xiZXJsZWJlbiBEYXMgMS4gQ2hha3JhIHN0ZXVlcnQgZGllIFNleHVsaXTDpHQgKGvDtnJwZXJsaWNoKSwgSGFsdCAoZ2Vpc3RpZyksIFNpbm5saWNoa2VpdCAoZW1vdGlvbmFsKSwgU2ljaGVyaGVpdHNnZWbDvGhsIChzcGlyaXR1ZWxsKSBadXNhdHpwcm9ncmFtbWU6IEVsZW1lbnRlLCBNZXJpZGlhbmUgdW5kIE1lZGl0YXRpb25cIixcclxuICAgICAgICBcIjItY2hha3JhLWRlc2NyaXB0aW9uXCI6IFwiQmVmaW5kZXQgc2ljaCBiZWltIEtyZXV6YmVpbiBVbmQgaXN0IG1pdCBkZW4gSG9kZW4gcmVzcC4gRWllcnN0w7Zja2VuIHVuZCBkZW4gdmVyc2NoaWVkZW5lbiBTZXh1YWxob3Jtb25lbiB2ZXJidW5kZW4gVmVyYW50d29ydGxpY2ggZsO8ciBkaWUgQmVyZWljaGUgQmV6aWVodW5nZW4sIEdld2FsdCwgU3VjaHQgdW5kIGVtb3Rpb25hbGUgR3J1bmRiZWTDvHJmbmlzc2UgRGFzIDIuIENoYWtyYSBzdGV1ZXJ0IGRpZSBGb3J0cGZsYW56dW5nIChrw7ZycGVybGljaCksIEtyZWF0aXZpdMOkdCAoZ2Vpc3RpZyksIEZyZXVkZSAoZW1vdGlvbmFsKSB1bmQgQmVnZWlzdGVydW5nIChzcGlyaXR1ZWxsKSBadXNhdHpwcm9ncmFtbWU6IEVsZW1lbnRlLCBNZXJpZGlhbmUgdW5kIE1lZGl0YXRpb25cIixcclxuICAgICAgICBcIjMtY2hha3JhLWRlc2NyaXB0aW9uXCI6IFwiQmVmaW5kZXQgc2ljaCBkaXJla3QgdW50ZXIgZGVuIFJpcHBlbiBVbmQgaXN0IG1pdCBkZW0gVmVyZGF1dW5nc3N5c3RlbSB1bmQgZGVuIE5lYmVubmllcmVuIHZlcmJ1bmRlbiBWZXJhbnR3b3J0bGljaCBmw7xyIHBlcnPDtm5saWNoZSBTdMOkcmtlLCBGdXJjaHQsIEJla2zDpG1tdW5nIHVuZCBJbnRyb3ZlcnRpZXJ0aGVpdCBEYXMgMy5DaGFrcmEgc3RldWVydCBkaWUgVmVyZGF1dW5nIChrw7ZycGVybGljaCksIHBlcnPDtm5saWNoZSBTdMOkcmtlIChnZWlzdGlnKSwgQXVzZGVobnVuZyAoZW1vdGlvbmFsKSB1bmQgV2FjaHN0dW0gKHNwaXJpdHVlbGwpIFp1c2F0enByb2dyYW1tZTogRWxlbWVudGUsIE1lcmlkaWFuZSB1bmQgTWVkaXRhdGlvblwiLFxyXG4gICAgICAgIFwiNC1jaGFrcmEtZGVzY3JpcHRpb25cIjogXCJCZWZpbmV0IHNpY2ggYmVpbSBCcnVzdGJlcmVpY2ggVW5kIHN0ZWh0IGltIFp1c2FtbWVuaGFuZyBtaXQgZGVyIFRoeW11c2Ryw7xzZSB1bmQgZGVtIEltbXVuc3lzdGVtIElzdCB2ZXJhbnR3b3J0d29ydGxpY2ggZsO8ciBrb3BsZXhlIEVtb3Rpb25lbiwgTWl0Z2Vmw7xobCwgYmVkaW5ndW5nc2xvc2UgTGllYmUsIEFid2Vpc3VuZywgR2xlaWNoZ2V3aWNodCBEYXMgNC4gQ2hha3JhIHN0ZXVlcnQgZGVuIEtyZWlzbGF1ZiAoa8O2cnBlcmxpY2gpLCBiZWRpbmd1bmdzbG9zZSBMaWViZSB6dSBzaWNoIHNlbGJzdCB1bmQgYW5kZXJlbiAoZW1vdGlvbmFsKSwgTGVpZGVuc2NoYWZ0IChnZWlzdGlnKSB1bmQgSGluZ2FiZSAoc3Bpcml0dWVsbCkgWnVzYXR6cHJvZ3JhbW1lOiBFbGVtZW50ZSwgTWVyaWRpYW5lIHVuZCBNZWRpdGF0aW9uXCIsXHJcbiAgICAgICAgXCI1LWNoYWtyYS1kZXNjcmlwdGlvblwiOiBcIkJlZmluZGV0IHNpY2ggYmVpbSBIYWxzYmVyZWljaCBVbmQgc3RlaHQgaW0gWnVzYW1tZW5oYW5nIG1pdCBkZXIgU2NoaWxkZHLDvHNlIElzdCB2ZXJhbnR3b3J0bGljaCBmw7xyIGRpZSBLb21tdW5pa2F0aW9uIHVuZCBXYWNoc3R1bSBkdXJjaCBkaWUgQXVzZHJ1Y2tzZm9ybSBEYXMgNS4gQ2hha3JhIHN0ZXVlcnQgZGllIEtvbW11bmlrYXRpb24gKGvDtnJwZXJsaWNoKSwgVW5hYmjDpG5naWdrZWl0IChlbW90aW9uYWwpLCBmaWVzc2VuZGUgR2VkYW5rZW4gKGdlaXN0aWcpLCBTaWNoZXJoZWl0c2dlZsO8aGwgKHNwaXJpdHVlbGwpIFp1c2F0enByb2dyYW1tZTogRWxlbWVudGUsIE1lcmlkaWFuZSB1bmQgTWVkaXRhdGlvblwiLFxyXG4gICAgICAgIFwiNi1jaGFrcmEtZGVzY3JpcHRpb25cIjogXCJCZWZpbmRldCBzaWNoIHp3aXNjaGVuIGRlbiBBdWdlbmJyYXVlbiwgYXVjaCBkYXMgRHJpdHRlIEF1Z2UgZ2VuYW5udCBTdGVodCBpbSBadXNhbW1lbmhhbmcgbWl0IGRlciBaaXJiZWxkcsO8c2UsIHdlbGNoZSBmw7xyIGRpZSBNZWxhdG9uaW4tUHJvZHVrdGlvbiAoR2zDvGNrc2hvcm1vbikgenVzdMOkbmRpZyBpc3QgdW5kIHN0ZXVlcnQgZGVuIFNjaGxhZnJ5dGhtdXMgRGFzIDYuIENoYWtyYSBzdGV1ZXJ0ZGllIEF1Z2VuLCBkaWUgS29uemVudHJhdGlvbnNmw6RoaWdrZWl0IHVuZCBkYXMgdmlzdWVsbGUgQmV3dXNzdHNlaW4gKGvDtnJwZXJsaWNoKSwgYnJpbmd0IEtsYXJoZWl0IGF1ZiBpbnR1aXRpdmVyIEViZW5lIFp1c2F0enByb2dyYW1tZTogRWxlbWVudGUsIE1lcmlkaWFuZSB1bmQgTWVkaXRhdGlvblwiLFxyXG4gICAgICAgIFwiNy1jaGFrcmEtZGVzY3JpcHRpb25cIjogXCJCZWZpbmRldCBzaWNoIG9iZW4gYW0gS29wZiBiZXRyaWZmdCBkaWUgSGlybmFuaGFuZ2Ryw7xzZSAoSHlwb3BoeXNlKSwgZGllIG1pdCBkZW0gZW5kb2tyaW5lbiBTeXN0ZW0gdW5kIGRlbSB6ZW50cmFsZW4gTmVydmVuc3lzdGVtIGtvbW11bml6aWVyIG1pdHRlbHMgSHlwb3RoYWxhbXVzICAgRGFzIDcuIENoYWtyYSByZWdlbHQgdW5zZXJlIGlubmVyZSBXZWlzaGVpdCwgdW5pdmVyc2VsbGVzIEJld3Vzc3RzZWluIHVuZCBFaW5oZWl0IFp1c2F0enByb2dyYW1tZTogRWxlbWVudGUsIE1lcmlkaWFuZSB1bmQgTWVkaXRhdGlvblwiLFxyXG4gICAgICAgIFwicGFpbi1yZWxpZWYtdXBwZXJcIjogXCJTQ0hNRVJaTElOREVSVU5HXCIsXHJcbiAgICAgICAgXCJncm91bmRpbmctdXBwZXJcIjogXCJFUkRVTkdcIixcclxuICAgICAgICBcImRpZ2VzdGlvbi11cHBlclwiOiBcIlZFUkRBVVVOR1wiLFxyXG4gICAgICAgIFwibG93ZXItYmFja2FjaGUtdXBwZXJcIjogXCJMT1dFUiBCQUNLQUNIRVwiLFxyXG4gICAgICAgIFwiY2hpbGRyZW4tdXBwZXJcIjogXCJLSU5ERVJcIixcclxuICAgICAgICBcImZlbWFsZS1ob3Jtb25hbC1pbWJhbGFuY2VzLXVwcGVyXCI6IFwiV0VJQkxJQ0hFUyBIT1JNT05FTExFUyBVTkdMRUlDSEdFV0lDSFRcIixcclxuICAgICAgICBcIm1hbGUtaG9ybW9uYWwtaW1iYWxhbmNlcy11cHBlclwiOiBcIk1BRU5OTElDSEVTIEhPUk1PTkVMTEVTIFVOR0xFSUNIR0VXSUNIVFwiLFxyXG4gICAgICAgIFwiY29sZC1mbHUtdXBwZXJcIjogXCJFUktBRUxUVU5HL0dSSVBQRVwiLFxyXG4gICAgICAgIFwiZWFyLXByb2JsZW1zLXVwcGVyXCI6IFwiT0hSRU5QUk9CTEVNRVwiLFxyXG4gICAgICAgIFwiaW50ZXN0aW5hbC1mbHUtdXBwZXJcIjogXCJEQVJNIEdSSVBQRVwiLFxyXG4gICAgICAgIFwiZW5kdXJhbmNlLXVwcGVyXCI6IFwiRU5EVVJBTkNFXCIsXHJcbiAgICAgICAgXCJtdXNjbGVzLXVwcGVyXCI6IFwiTVVTS0VMR0VXRUJFXCIsXHJcbiAgICAgICAgXCJ0aHlyb2lkLXVwcGVyXCI6IFwiU0NISUxERFJVRVNFXCIsXHJcbiAgICAgICAgXCJ1cmluYXJ5LXN5c3RlbS11cHBlclwiOiBcIkhBUk5TWVNURU1cIixcclxuICAgICAgICBcImxvd2VyLWNoYWtyYS1iYWxhbmNpbmctdXBwZXJcIjogXCJMT1dFUiBDSEFLUkEgQkFMQU5DSU5HXCIsXHJcbiAgICAgICAgXCJ1cHBlci1jaGFrcmEtYmFsYW5jaW5nLXVwcGVyXCI6IFwiVVBQRVIgQ0hBS1JBIEJBTEFOQ0lOR1wiLFxyXG4gICAgICAgIFwibWVkaXRhdGlvbi1iYXNpY3MtdXBwZXJcIjogXCJNRURJVEFaSU9ORSBHUlVORExFR0VORFwiLFxyXG4gICAgICAgIFwibWVkaXRhdGlvbi1tZWRpdW0tdXBwZXJcIjogXCJNRURJVEFUSU9OIE1FRElVTVwiLFxyXG4gICAgICAgIFwibWVkaXRhdGlvbi1hZHZhbmNlZC11cHBlclwiOiBcIk1FRElUQVRJT04gRVJXRUlURVJUXCIsXHJcbiAgICAgICAgXCJsaXZlci1iYWxhbmNpbmctdXBwZXJcIjogXCJMRUJFUkFVU1RBVVNDSFwiLFxyXG4gICAgICAgIFwibGl2ZXItZnVuY3Rpb24tdXBwZXJcIjogXCJMRUJFUkZVTktUSU9OXCIsXHJcbiAgICAgICAgXCJraWRuZXktZnVuY3Rpb24tdXBwZXJcIjogXCJOSUVSRU5GVU5LVElPTlwiLFxyXG4gICAgICAgIFwibGFyZ2UtaW50ZXN0aW5lLWJhbGFuY2luZy11cHBlclwiOiBcIkdST8OfRSBJTlRFU1RJTiBCQUxBTkNJTkdcIixcclxuICAgICAgICBcInBlcmljYXJkaXVtLWZsb3ctdXBwZXJcIjogXCJQRVJJQ0FSRElVTS1GTMOcU1NFXCIsXHJcbiAgICAgICAgXCJyb3V0aW5lLXBldHMtdXBwZXIxXCI6XCJJTU1VTlNZU1RFTVwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyMlwiOlwiREVTSU5UT1hJWklFUlVOR1wiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyM1wiOlwiRElHRVNUSVZFIFNZU1RFTVwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyNFwiOlwiS05PQ0hFTlwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyNVwiOlwiSEFVVFwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyNlwiOlwiTVVTS0VMTlwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyN1wiOlwiU1RSRVNTIEJFRlJFSVVOR1wiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXRzLXVwcGVyOFwiOlwiQVRFTVNZU1RFTVwiLFxyXG4gICAgICAgIFwicm91dGluZS1wZXR4LXVwcGVyMVwiOlwiSU1NVU5TWVNURU1cIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjJcIjpcIkRFU0lOVE9YSVpJRVJVTkdcIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjNcIjpcIkRJR0VTVElWRSBTWVNURU1cIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjRcIjpcIktOT0NIRU5cIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjVcIjpcIkhBVVRcIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjZcIjpcIk1VU0tFTE5cIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjdcIjpcIlNUUkVTUyBCRUZSRUlVTkdcIixcclxuICAgICAgICBcInJvdXRpbmUtcGV0eC11cHBlcjhcIjpcIkFURU1TWVNURU1cIixcclxuICAgICAgICBcInBldHNzLXByb2dyYW0tdXBwZXJcIjpcIktMRUlORSBUSUVSRVwiLFxyXG4gICAgICAgIFwicGV0c3MtcHJvZ3JhbS1kZXNjcmlwdGlvblwiOlwi4oCiRGllc2VzIFByb2dyYW1tIGluIEtvbWJpbmF0aW9uIG1pdCBkZW4gYW5kZXJlbiwgaGlsZnQgSWhyZW0gSGF1c3RpZXIgKEthdHplLCBrbGVpbmVtIEh1bmQgb2RlciBrbGVpbmVtIFPDpHVnZXRpZXIpIHNpY2ggdmllbCBzY2huZWxsZXIgdm9uIFZlcmxldHp1bmdlbiwgS3JhbmtoZWl0IG9kZXIgVHJhdW1hcyBkZXIgVHJlbm51bmcgb2RlciBSZWlzZW4genUgZXJob2xlbi5cIixcclxuICAgICAgICBcInBldHN4LXByb2dyYW0tdXBwZXJcIjpcIkdST1NTRSBUSUVSRVwiLFxyXG4gICAgICAgIFwicGV0c3gtcHJvZ3JhbS1kZXNjcmlwdGlvblwiOlwi4oCiRGllc2VzIFByb2dyYW1tIGluIEtvbWJpbmF0aW9uIG1pdCBhbmRlcmVuIGlzdCBhbmdlemVpZ3QsIHVtIElocmVuIGdyw7bDn2VyZW4gSGF1c3RpZXJlbiAoZ3Jvw59lIEh1bmRlLCBQZmVyZGUgdW5kIGFuZGVyZSBTw6R1Z2V0aWVyZSl6dSBoZWxmZW4sIGRpZSAgRXJob2x1bmdzemVpdCBuYWNoIFZlcmxldHp1bmdlbiwgS3JhbmtoZWl0ZW4gb2RlciBUcmF1bWFzIGR1cmNoIFRyZW5udW5nIG9kZXIgUmVpc2VuIHp1IHZlcmt1ZXJ6ZW4uXCJcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9nZXJtYW4tdGV4dHMudHMiLCJleHBvcnQgdmFyIERhdGEgPSB7IEdyb3VwcyA6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdwYWluLXJlbGllZi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBhaW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlYWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdpbmp1cnktdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJvbmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnc3RyZXNzLXJlbGllZi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2ltbXVuZS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncmVzcGlyYXRvcnktc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTaW51c19DYXZpdGllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZGV0b3hpZmljYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGFyZ2VfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdoZWFkYWNoZS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYWRhY2hlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2dyb3VuZGluZy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVsZWN0cm9fU21vZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWFydGhfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUm9vdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2VuZXJneS1ib29zdGVyLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkV4aGF1c3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdKRVQtTEFHJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSmV0LUxhZy9DbGltYXRlX0NoYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFYXJ0aF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdKRVQtTEFHJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSmV0LUxhZy9DbGltYXRlX0NoYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRXhoYXVzdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQm9vc3RlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnY29uY2VudHJhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbmNlbnRyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpc2Nlcm5tZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBZHJlbmFsX0dsYW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdidXNpbmVzcyBhbmQgdHJhdmVsJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZGlnZXN0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1pbmVyYWxfTWV0YWJvbGljX0FjdGl2aXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYnVzaW5lc3MgYW5kIHRyYXZlbCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3Jlc3BpcmF0b3J5LXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsb3dlci1iYWNrYWNoZS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJhY2thY2hlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUm9vdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICduZWNrLXNob3VsZGVyLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVjay9TaG91bGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJHYWxsYmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2J1c2luZXNzIGFuZCB0cmF2ZWwnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdzbGVlcC1lbmhhbmNlci11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNsZWVwX0VuaGFuY2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnY2hpbGRyZW4tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaGlsZF9EZXZlbG9wbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2ZlbWFsZS1ob3Jtb25hbC1pbWJhbGFuY2VzLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRmVtYWxlX0hvcm1vbmVfQmFsYW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2ZhbWlseScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ21hbGUtaG9ybW9uYWwtaW1iYWxhbmNlcy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1hbGVfSG9ybW9uZV9CYWxhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdjb2xkLWZsdS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZsdVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdjb25zdGlwYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDb25zdGlwYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkdhbGxibGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZGlhcnJoZWEtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWFycmhlYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkludGVzdGluYWxfRmxvcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZmFtaWx5JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZWFyLXByb2JsZW1zLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQXVkaXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUcmlwbGVfV2FybWVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdleWVzaWdodC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkV5ZXNpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdmYW1pbHknLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdpbnRlc3RpbmFsLWZsdS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZsdVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkludGVzdGluYWxfRmxvcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdlbmVyZ3ktYm9vc3Rlci11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJBZHJlbmFsX0dsYW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2F0aGxldGUnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyZWdlbmVyYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJWaXRhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncmVzcGlyYXRvcnktc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTaW51c19DYXZpdGllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHVuZ19NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaW5qdXJ5LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW5qdXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCb25lX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQYWluX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncGFpbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQYWluX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlZ2VuZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnYmFja2FjaGUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCYWNrYWNoZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVjay9TaG91bGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVmVydGVicmFlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJHYWxsYmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdGhsZXRlJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbXVzY2xlcy11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29ubmVjdGl2ZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRobGV0ZScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2ltbXVuZS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2FudGktYWdpbmctdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCb25lX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFudGlfQWdpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbm5lY3RpdmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzcGEnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd3ZWlnaHQtY29udHJvbC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkZGljdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIldlaWdodF9Db250cm9sXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUcmlwbGVfV2FybWVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZGV0b3hpZmljYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEaWdlc3RpdmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWluZXJhbF9NZXRhYm9saWNfQWN0aXZpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnc2tpbi1jb25kaXRpb25zLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29ubmVjdGl2ZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTa2luX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2hhaXItZ3Jvd3RoLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIYWlyX0dyb3d0aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3BhJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbG93LXBoeXNpY2FsLWRyaXZlLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVyaWNhcmRpdW1fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxvd19QaHlzaWNhbF9Ecml2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NwYScsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2xvdy1tZW50YWwtZHJpdmUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMb3dfTWVudGFsX0RyaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzdHJlc3MgcmVsaWVmJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnc3RyZXNzLXJlbGllZi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkpveVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0JhbGFuY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0cmVzcyByZWxpZWYnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd2aXRhbGl0eS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJKb3lcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJWaXRhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0cmVzcyByZWxpZWYnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdzbGVlcC1lbmhhbmNlci11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNsZWVwX0VuaGFuY2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0cmVzcyByZWxpZWYnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdlbmVyZ3ktYm9vc3Rlci11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9Cb29zdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkV4aGF1c3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0cmVzcyByZWxpZWYnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdoeXBlcnRlbnNpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSHlwZXJ0ZW5zaW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0Z1bmN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0cmVzcyByZWxpZWYnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd0aHlyb2lkLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJUaHlyb2lkX0dsYW5kc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRocm9hdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzdHJlc3MgcmVsaWVmJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbG93LW1lbnRhbC1kcml2ZS11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxvd19NZW50YWxfRHJpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJOZXJ2b3VzX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyZWdlbmVyYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWdlbmVyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29ubmVjdGl2ZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3ZpdGFsaXR5LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRW5lcmd5X0Jvb3N0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkFkcmVuYWxfR2xhbmRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlZpdGFsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnam95LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJKb3lcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk1ldGFsX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnc2xlZXAtZW5oYW5jZXItdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbGVjdHJvX1Ntb2dcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNsZWVwX0VuaGFuY2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdoZWFydC1mdW5jdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZpcmVfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfRnVuY3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRyaXBsZV9XYXJtZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyZXNwaXJhdG9yeS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNpbnVzX0Nhdml0aWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaHlwZXJ0ZW5zaW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVyaWNhcmRpdW1fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkh5cGVydGVuc2lvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDaXJjdWxhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZ2x1Y29zZS1tZXRhYm9saWMtZGlzb3JkZXJzLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkdsdWNvc2VfTWV0YWJvbGljX0Rpc29yZGVyc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU3BsZWVuX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3NlbmlvcicsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2hlbW9ycmhvaWRzLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVtb3JyaG9pZHNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbnN0aXBhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUm9vdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAndXJpbmFyeS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJLaWRuZXlfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlVyaW5hcnlfU3lzdGVtL0N5c3RpdGlzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJVcmluYXJ5X0JsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc2VuaW9yJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnY29sZC1mbHUtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGbHVcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlc3BpcmF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdzZW5pb3InLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdwYWluLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTmVydm91c19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBhaW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVnZW5lcmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2NoYWtyYSBiYWxhbmNpbmcnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsb3dlci1jaGFrcmEtYmFsYW5jaW5nLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUm9vdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVhcnRoX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnY2hha3JhIGJhbGFuY2luZycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3VwcGVyLWNoYWtyYS1iYWxhbmNpbmctdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRocm9hdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDcm93bl9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnY2hha3JhIGJhbGFuY2luZycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ21lZGl0YXRpb24tYmFzaWNzLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWVkaXRhdGlvbl8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSb290X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2FjcmFsX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU29sYXJfUGxleHVzX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjaGFrcmEgYmFsYW5jaW5nJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbWVkaXRhdGlvbi1tZWRpdW0tdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNZWRpdGF0aW9uXzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVGhyb2F0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVhY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnY2hha3JhIGJhbGFuY2luZycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ21lZGl0YXRpb24tYWR2YW5jZWQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNZWRpdGF0aW9uXzNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkJyb3dfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJDcm93bl9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkpveVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2VhcnRoLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTdG9tYWNoX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTcGxlZW5fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVhcnRoX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIk11c2NsZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2ZpcmUtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTbWFsbF9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZpcmVfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2lyY3VsYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZmlyZS1lbGVtZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGVyaWNhcmRpdW1fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlRyaXBsZV9XYXJtZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZpcmVfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbWV0YWwtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxhcmdlX0ludGVzdGluZV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTWV0YWxfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU2tpbl9Db25kaXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnd2F0ZXItZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIktpZG5leV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVXJpbmFyeV9CbGFkZGVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJXYXRlcl9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCb25lX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd3b29kLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMaXZlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiR2FsbGJsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIldvb2RfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRXllc2lnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsaXZlci1mdW5jdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJHYWxsYmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdoZWFydC1mdW5jdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTbWFsbF9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2VsZW1lbnRzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAna2lkbmV5LWZ1bmN0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJVcmluYXJ5X0JsYWRkZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkV4aGF1c3Rpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNhY3JhbF9DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2xhcmdlLWludGVzdGluZS1iYWxhbmNpbmctdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNvbGFyX1BsZXh1c19DaGFrcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdlbGVtZW50cycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3BlcmljYXJkaXVtLWZsb3ctdXBwZXInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXJpY2FyZGl1bV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiVHJpcGxlX1dhcm1lcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZWxlbWVudHMnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdzdG9tYWNoLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU3RvbWFjaF9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU3BsZWVuX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiU29sYXJfUGxleHVzX0NoYWtyYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHNzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyMScsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHMtdXBwZXIyJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGV0b3hpZmljYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxhcmdlX0ludGVzdGluZV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHNzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyMycsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkRpZ2VzdGl2ZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbnRlc3RpbmFsX0Zsb3JhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHMtdXBwZXI0JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8xXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzcycsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0cy11cHBlcjUnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJTa2luX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkNvbm5lY3RpdmVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW5qdXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHMtdXBwZXI2JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTXVzY2xlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHNzJyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXRzLXVwcGVyNycsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkZydXN0cmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZWxheGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3MnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHMtdXBwZXI4JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbW11bmVfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHgtdXBwZXIxJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW1tdW5lX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzeCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0eC11cHBlcjInLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJEZXRveGlmaWNhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGFyZ2VfSW50ZXN0aW5lX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHgtdXBwZXIzJyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTGl2ZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkludGVzdGluYWxfRmxvcmFcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzeCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0eC11cHBlcjQnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJCb25lX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx5bXBoYXRpY19TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzJcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3BldHN4JyxcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncm91dGluZS1wZXR4LXVwcGVyNScsXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlNraW5fQ29uZGl0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29ubmVjdGl2ZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJJbmp1cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzeCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0eC11cHBlcjYnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJNdXNjbGVfVGlzc3Vlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiTHltcGhhdGljX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiSW5qdXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAncGV0c3gnLFxyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyb3V0aW5lLXBldHgtdXBwZXI3JyxcclxuICAgICAgICAgICAgcHJvZ3JhbXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaU5hbWU6IFwiRnJ1c3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlJlbGF4YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkVuZXJneV9CYWxhbmNpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdwZXRzeCcsXHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3JvdXRpbmUtcGV0eC11cHBlcjgnLFxyXG4gICAgICAgICAgICBwcm9ncmFtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpTmFtZTogXCJSZXNwaXJhdG9yeV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIkx1bmdfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgICAgICAgICBydW5uaW5ndGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlOYW1lOiBcIlBldF8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgUHJvZ3JhbXMgOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdhZGRpY3Rpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkFkZGljdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTowNVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2FkZGljdGlvbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnYWRyZW5hbC1nbGFuZC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQWRyZW5hbF9HbGFuZFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTowN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2FkcmVuYWwtZ2xhbmQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2FudGktYWdpbmctdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkFudGlfQWdpbmdcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTE6MDFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdhbnRpLWFnaW5nLWRlc2NyaXB0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnYXVkaXRvcnktdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkF1ZGl0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDozMVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2F1ZGl0b3J5LWRlc2NyaXB0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnYmFja2FjaGUtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkJhY2thY2hlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjMwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYmFja2FjaGUtZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdib25lcy11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQm9uZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjA0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYm9uZXMtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2NoaWxkLWRldmVsb3BlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQ2hpbGRfRGV2ZWxvcG1lbnRcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjaGlsZC1kZXZlbG9wZW1lbnQtZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdjaXJjdWxhdG9yeS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkNpcmN1bGF0b3J5X1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTowNlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NpcmN1bGF0b3J5LXN5c3RlbS1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2NvbmNlbnRyYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkNvbmNlbnRyYXRpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMjE6MTlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdjb25jZW50cmF0aW9uLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdjb25uZWN0aXZlLXRpc3N1ZS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiQ29ubmVjdGl2ZV9UaXNzdWVzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjU0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnY29ubmVjdGl2ZS10aXNzdWUtZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdjb25zdGlwYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkNvbnN0aXBhdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDo0OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2NvbnN0aXBhdGlvbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZGV0b3hpZmljYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkRldG94aWZpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjEzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZGV0b3hpZmljYXRpb24tZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdkaWFycmhlYS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlhcnJoZWFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdkaWFycmhlYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZGlnZXN0aXZlLXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRGlnZXN0aXZlX1N5c3RlbVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjo0MVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2RpZ2VzdGl2ZS1zeXN0ZW0tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2Rpc2Nlcm5tZW50LXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJEaXNjZXJubWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzozN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2Rpc2Nlcm5tZW50LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdlbmVyZ3ktYmFsYW5jaW5nLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQmFsYW5jaW5nXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjU1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZW5lcmd5LWJhbGFuY2luZy1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2VuZXJneS1ib29zdGVyLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJFbmVyZ3lfQm9vc3RlclwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzo1M1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2VuZXJneS1ib29zdGVyLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6IFwiRS1TTU9HXCIsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRWxlY3Ryb19TbW9nXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjUxXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZS1zbW9nLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdleGhhdXN0aW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJFeGhhdXN0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE0OjU5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZXhoYXVzdGlvbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZXllc2lnaHQtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkV5ZXNpZ2h0XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjExXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnZXllc2lnaHQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2ZlbWFsZS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRmVtYWxlX0hvcm1vbmVfQmFsYW5jZVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDoxN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZlbWFsZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZmx1LXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJGbHVcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdmbHUtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdnbHVjb3NlLW1ldGFib2xpYy1kaXNvcmRlcnMtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkdsdWNvc2VfTWV0YWJvbGljX0Rpc29yZGVyc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjoyOFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2dsdWNvc2UtbWV0YWJvbGljLWRpc29yZGVycy1kZXNjcmlwdGlvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2hhaXItZ3Jvd3RoLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJIYWlyX0dyb3d0aFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxOTowN1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2hhaXItZ3Jvd3RoLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdoZWFkYWNoZS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhZGFjaGVcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTg6MzhcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdoZWFkYWNoZS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaGVhcnQtZnVuY3Rpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkhlYXJ0X0Z1bmN0aW9uXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjMwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnaGVhcnQtZnVuY3Rpb24tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdoZW1vcnJob2lkcy11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVtb3JyaG9pZHNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMjE6MTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdoZW1vcnJob2lkcy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaHlwZXJ0ZW5zaW9uLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJIeXBlcnRlbnNpb25cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTg6NTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdoeXBlcnRlbnNpb24tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2ltbXVuZS1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkltbXVuZV9TeXN0ZW1cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6NTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdpbW11bmUtc3lzdGVtLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdpbmp1cnktdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkluanVyeVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxODo0NlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2luanVyeS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnaW50ZXN0aW5hbC1mbG9yYS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSW50ZXN0aW5hbF9GbG9yYVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxODo1OFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ludGVzdGluYWwtZmxvcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2pvaW50cy11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSm9pbnRzXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjA3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnam9pbnRzLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdqb3ktdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkpveVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMTowNFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2pveS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiBcIkpFVC1MQUdcIixcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJKZXQtTGFnL0NsaW1hdGVfQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjE0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnamV0LWxhZy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbG93LW1lbnRhbC1kcml2ZS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTG93X01lbnRhbF9Ecml2ZVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTo0OVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2xvdy1tZW50YWwtZHJpdmUtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2xvdy1waHlzaWNhbC1kcml2ZS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTG93X1BoeXNpY2FsX0RyaXZlXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjQ5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbG93LXBoeXNpY2FsLWRyaXZlLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdseW1waGF0aWMtc3lzdGVtLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJMeW1waGF0aWNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjA0XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbHltcGhhdGljLXN5c3RlbS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbWFsZS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTWFsZV9Ib3Jtb25lX0JhbGFuY2VcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTI6MzFcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtYWxlLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtZWRpdGF0aW9uLTEtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk1lZGl0YXRpb25fMVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIzMzoxNVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21lZGl0YXRpb24tMS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbWVkaXRhdGlvbi0yLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJNZWRpdGF0aW9uXzJcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMjk6NDNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtZWRpdGF0aW9uLTItZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ21lZGl0YXRpb24tMy11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTWVkaXRhdGlvbl8zXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIyOjQ5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbWVkaXRhdGlvbi0zLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdtaW5lcmFsLW1ldGFib2xpYy1hY3Rpdml0eS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTWluZXJhbF9NZXRhYm9saWNfQWN0aXZpdHlcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6MjVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtaW5lcmFsLW1ldGFib2xpYy1hY3Rpdml0eS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbXVzY2xlLXRpc3N1ZS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTXVzY2xlX1Rpc3N1ZXNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6NTlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtdXNjbGUtdGlzc3VlLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICduZWNrLXNob3VsZGVyLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJOZWNrL1Nob3VsZGVyXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjE2XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbmVjay1zaG91bGRlci1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbmVydm91cy1zeXN0ZW0tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIk5lcnZvdXNfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE5OjEwXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbmVydm91cy1zeXN0ZW0tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3BlYWNlLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJQZWFjZVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMjowOFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3BlYWNlLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdwYWluLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJQYWluX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6MThcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdwYWluLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdyZWdlbmVyYXRpb24tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlJlZ2VuZXJhdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzoxMlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3JlZ2VuZXJhdGlvbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncmVsYXhhdGlvbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVsYXhhdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxOTo1NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3JlbGF4YXRpb24tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3Jlc3BpcmF0b3J5LXN5c3RlbS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUmVzcGlyYXRvcnlfU3lzdGVtXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE1OjUyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAncmVzcGlyYXRvcnktc3lzdGVtLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdzaW51cy1jYXZpdGllcy11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiU2ludXNfQ2F2aXRpZXNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6MzNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzaW51cy1jYXZpdGllcy1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnc2tpbi1jb25kaXRpb25zLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJTa2luX0NvbmRpdGlvbnNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6NTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdza2luLWNvbmRpdGlvbnMtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3NsZWVwLWVuaGFuY2VyLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJTbGVlcF9FbmhhbmNlclwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxOTo1OFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3NsZWVwLWVuaGFuY2VyLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdzdHJlc3MtcmVsaWVmLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJGcnVzdHJhdGlvblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxODo1NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3N0cmVzcy1yZWxpZWYtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3RoeXJvaWQtZ2xhbmRzLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJUaHlyb2lkX0dsYW5kc1wiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNzo1M1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3RoeXJvaWQtZ2xhbmRzLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAndXJpbmFyeS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiVXJpbmFyeV9TeXN0ZW0vQ3lzdGl0aXNcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6MzlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd1cmluYXJ5LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAndmVydGVicmFlLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJWZXJ0ZWJyYWVcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTI6NTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd2ZXJ0ZWJyYWUtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3ZpdGFsaXR5LXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJWaXRhbGl0eVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDowMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3ZpdGFsaXR5LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd3ZWlnaHQtY29udHJvbC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiV2VpZ2h0X0NvbnRyb2xcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTQ6NTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd3ZWlnaHQtY29udHJvbC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnZWFydGgtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiRWFydGhfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjo1NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2VhcnRoLWVsZW1lbnQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3dhdGVyLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIldhdGVyX0VsZW1lbnRcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTc6MjBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd3YXRlci1lbGVtZW50LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdmaXJlLWVsZW1lbnQtdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkZpcmVfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNTowNVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2ZpcmUtZWxlbWVudC1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbWV0YWwtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiTWV0YWxfRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMjozOVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21ldGFsLWVsZW1lbnQtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3dvb2QtZWxlbWVudC11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiV29vZF9FbGVtZW50XCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjA5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnd29vZC1lbGVtZW50LWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdzdG9tYWNoLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJTdG9tYWNoX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjE1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnc3RvbWFjaC1tZXJpZGlhbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnc3BsZWVuLXBhbmNyZWFzLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJTcGxlZW5fTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6MzdcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzcGxlZW4tcGFuY3JlYXMtbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2hlYXJ0LW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJIZWFydF9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDo0NVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2hlYXJ0LW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdzbWFsbC1pbnRlc3RpbmUtbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlNtYWxsX0ludGVzdGluZV9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMzoyNVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3NtYWxsLWludGVzdGluZS1tZXJpZGlhbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncGVyaWNhcmRpdW0tbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlBlcmljYXJkaXVtX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjIxOjU1XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAncGVyaWNhcmRpdW0tbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ3RyaXBsZS13YXJtZXItbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlRyaXBsZV9XYXJtZXJfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6MjBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0cmlwbGUtd2FybWVyLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdsdW5nLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJMdW5nX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjM4XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbHVuZy1tZXJpZGlhbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbGFyZ2UtaW50ZXN0aW5lLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJMYXJnZV9JbnRlc3RpbmVfTWVyaWRpYW5cIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NTNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdsYXJnZS1pbnRlc3RpbmUtbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2tpZG5leS1tZXJpZGlhbi11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiS2lkbmV5X01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjI3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAna2lkbmV5LW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICd1cmluYXJ5LWJsYWRkZXItbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIlVyaW5hcnlfQmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNDoxOVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3VyaW5hcnktYmxhZGRlci1tZXJpZGlhbi1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAnbGl2ZXItbWVyaWRpYW4tdXBwZXInLFxyXG4gICAgICAgICAgICBhcGlOYW1lOiBcIkxpdmVyX01lcmlkaWFuXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjExXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnbGl2ZXItbWVyaWRpYW4tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogJ2dhbGxibGFkZGVyLW1lcmlkaWFuLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJHYWxsYmxhZGRlcl9NZXJpZGlhblwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIyMDozOVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ2dhbGxibGFkZGVyLW1lcmlkaWFuLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6IFwiZmlyc3QtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUm9vdF9DaGFrcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTU6NDlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcxLWNoYWtyYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiBcInNlY29uZC1jaGFrcmEtdXBwZXJcIixcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJTYWNyYWxfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjEzOjU3XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnMi1jaGFrcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogXCJ0aGlyZC1jaGFrcmEtdXBwZXJcIixcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJTb2xhcl9QbGV4dXNfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE2OjUxXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnMy1jaGFrcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogXCJmb3VydGgtY2hha3JhLXVwcGVyXCIsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiSGVhcnRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE4OjE2XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNC1jaGFrcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogXCJmaWZ0aC1jaGFrcmEtdXBwZXJcIixcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJUaHJvYXRfQ2hha3JhXCIsXHJcbiAgICAgICAgICAgIHJ1bm5pbmd0aW1lOiBcIjE3OjU5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNS1jaGFrcmEtZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHROYW1lOiAnJywgbmFtZTogXCJzaXh0aC1jaGFrcmEtdXBwZXJcIixcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJCcm93X0NoYWtyYVwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxNjoxM1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJzYtY2hha3JhLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6IFwic2V2ZW50aC1jaGFrcmEtdXBwZXJcIixcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJDcm93bl9DaGFrcmFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTM6NDVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICc3LWNoYWtyYS1kZXNjcmlwdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dE5hbWU6ICcnLCBuYW1lOiAncGV0c3MtcHJvZ3JhbS11cHBlcicsXHJcbiAgICAgICAgICAgIGFwaU5hbWU6IFwiUGV0XzFcIixcclxuICAgICAgICAgICAgcnVubmluZ3RpbWU6IFwiMTE6NTBcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdwZXRzcy1wcm9ncmFtLWRlc2NyaXB0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0TmFtZTogJycsIG5hbWU6ICdwZXRzeC1wcm9ncmFtLXVwcGVyJyxcclxuICAgICAgICAgICAgYXBpTmFtZTogXCJQZXRfMlwiLFxyXG4gICAgICAgICAgICBydW5uaW5ndGltZTogXCIxMjo1MFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3BldHN4LXByb2dyYW0tZGVzY3JpcHRpb24nXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9vZmZsaW5lX2RhdGEudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBFdmVudHMsIENvbnRlbnQgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vZmZsaW5lX2RhdGEnO1xuaW1wb3J0IHsgUm91dGluZXNQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9yb3V0aW5lcy9yb3V0aW5lcyc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgR2VybWFuVGV4dHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nZXJtYW4tdGV4dHMnO1xuaW1wb3J0IHsgUHJvZ3JhbVBhZ2UgfSBmcm9tICcuLi9wcm9ncmFtL3Byb2dyYW0nO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBQcm9ncmFtc1BhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtcHJvZ3JhbXMnLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyYW1zLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmFtc1BhZ2Uge1xuICBAVmlld0NoaWxkKENvbnRlbnQpIGNvbnRlbnQ6IENvbnRlbnQ7XG4gIHB1YmxpYyBwcmVkZWZpbmVkUHJvZ3JhbXMgOiBhbnk7XG4gIHB1YmxpYyBwcm9ncmFtcyA6IGFueTtcbiAgcHVibGljIHByb2dyYW0gOiBudW1iZXI7XG4gIHB1YmxpYyBwcm9ncmFtTmFtZTEgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtTmFtZTIgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtTmFtZTMgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtTmFtZTQgOiBzdHJpbmc7XG4gIHB1YmxpYyBiYXNpY0J1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBidXNpbmVzc1RyYXZlbEJ1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBmYW1pbGl5QnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIGF0aGxldGVCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgc3BhQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIHN0cmVzc0J1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyBzZW5pb3JCdXR0b24gOiBib29sZWFuO1xuICBwdWJsaWMgY2hha3JhQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIGVsZW1lbnRzQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIHBldHNzQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIHBldHN4QnV0dG9uIDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHB1YmxpYyByb3V0aW5lczogUm91dGluZXNQcm92aWRlcixcbiAgICBwdWJsaWMgZXZlbnRzOiBFdmVudHMpIHtcbiAgICAgIHRoaXMucHJvZ3JhbSA9IG5hdlBhcmFtcy5nZXQoJ2J1YmJsZScpO1xuXG4gICAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoJ2FkZDFQcm9ncmFtRXZlbnQnLCAocHJvZ3JhbU51bWJlciwgcHJvZ3JhbU5hbWUsIHByb2dyYW1SdW5uaW5nVGltZSwgcHJvZ3JhbUFwaU5hbWUpID0+IHtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbU51bWJlcjtcbiAgICAgICAgdGhpcy5hZGQxUHJvZ3JhbShwcm9ncmFtTmFtZSwgcHJvZ3JhbVJ1bm5pbmdUaW1lLCBwcm9ncmFtQXBpTmFtZSk7XG4gICAgICAgIHRoaXMubmF2Q3RybC5wb3AoKTtcbiAgICAgIH0pO1xuICB9XG4gIGlvblZpZXdEaWRMZWF2ZSgpe1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlTY3JvbGxUb3AsIHRoaXMuY29udGVudC5nZXRDb250ZW50RGltZW5zaW9ucygpLnNjcm9sbFRvcCk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpe1xuICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUN1cnJlbnRQcm9ncmFtKS50aGVuKChwcm9ncmFtKT0+e1xuICAgICAgICB0aGlzLmdldFByb2dyYW1zKHByb2dyYW0gIT0gbnVsbCA/IHByb2dyYW0gOiAnYmFzaWMnKTtcbiAgICAgIH0pXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgRGF0YS5Qcm9ncmFtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB0ZXh0ID0gR2VybWFuVGV4dHNbRGF0YS5Qcm9ncmFtc1tpXS5uYW1lXTtcbiAgICAgICAgRGF0YS5Qcm9ncmFtc1tpXS50ZXh0TmFtZSA9IHRleHQgPyB0ZXh0IDogRGF0YS5Qcm9ncmFtc1tpXS5uYW1lO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9ncmFtcyA9IERhdGEuUHJvZ3JhbXM7XG5cbiAgICAgIHRoaXMucm91dGluZXMuZ2V0S2V5KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMSkudGhlbih2YWwgPT4ge1xuICAgICAgICBpZih0aGlzLnByb2dyYW0gIT0gMSAmJiB2YWwgIT0gbnVsbCAmJiB2YWwubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTEgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUxID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5yb3V0aW5lcy5nZXRLZXkoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUyKS50aGVuKHZhbCA9PiB7XG4gICAgICAgIGlmKHRoaXMucHJvZ3JhbSAhPSAyICYmIHZhbCAhPSBudWxsICYmIHZhbC5sZW5ndGggPiAwKXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lMiA9IHZhbC5zcGxpdCgnfCcpWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTIgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnJvdXRpbmVzLmdldEtleShDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTMpLnRoZW4odmFsID0+IHtcbiAgICAgICAgaWYodGhpcy5wcm9ncmFtICE9IDMgJiYgdmFsICE9IG51bGwgJiYgdmFsLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWUzID0gdmFsLnNwbGl0KCd8JylbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLnByb2dyYW1OYW1lMyA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMucm91dGluZXMuZ2V0S2V5KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlNCkudGhlbih2YWwgPT4ge1xuICAgICAgICBpZih0aGlzLnByb2dyYW0gIT0gNCAmJiB2YWwgIT0gbnVsbCAmJiB2YWwubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGhpcy5wcm9ncmFtTmFtZTQgPSB2YWwuc3BsaXQoJ3wnKVsxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMucHJvZ3JhbU5hbWU0ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlTY3JvbGxUb3ApLnRoZW4oKHNjcm9sbCk9PntcbiAgICAgICAgICB0aGlzLmNvbnRlbnQuc2Nyb2xsVG8oMCwgc2Nyb2xsLCAxMDApO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDUwMCk7XG4gIH1cblxuICBzZWxlY3RQcmVTZXRQcm9ncmFtKGNhdGVnb3J5KXtcbiAgICAgIHRoaXMuZ2V0UHJvZ3JhbXMoY2F0ZWdvcnkpO1xuICB9XG5cbiAgZ2V0UHJvZ3JhbXMoY2F0ZWdvcnkpe1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlDdXJyZW50UHJvZ3JhbSwgY2F0ZWdvcnkpO1xuICAgIHRoaXMuYmFzaWNCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmJ1c2luZXNzVHJhdmVsQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5mYW1pbGl5QnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5hdGhsZXRlQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5zcGFCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnN0cmVzc0J1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuc2VuaW9yQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5jaGFrcmFCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLmVsZW1lbnRzQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5wZXRzc0J1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMucGV0c3hCdXR0b24gPSBmYWxzZTtcbiAgICBzd2l0Y2goY2F0ZWdvcnkpe1xuICAgICAgY2FzZSAnYmFzaWMnOlxuICAgICAgICB0aGlzLmJhc2ljQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdidXNpbmVzcyBhbmQgdHJhdmVsJzpcbiAgICAgICAgdGhpcy5idXNpbmVzc1RyYXZlbEJ1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmFtaWx5JzpcbiAgICAgICAgdGhpcy5mYW1pbGl5QnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhdGhsZXRlJzpcbiAgICAgICAgdGhpcy5hdGhsZXRlQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzcGEnOlxuICAgICAgICB0aGlzLnNwYUJ1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyZXNzIHJlbGllZic6XG4gICAgICAgIHRoaXMuc3RyZXNzQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZW5pb3InOlxuICAgICAgICB0aGlzLnNlbmlvckJ1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hha3JhIGJhbGFuY2luZyc6XG4gICAgICAgIHRoaXMuY2hha3JhQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbGVtZW50cyc6XG4gICAgICAgIHRoaXMuZWxlbWVudHNCdXR0b24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BldHNzJzpcbiAgICAgICAgdGhpcy5wZXRzc0J1dHRvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGV0c3gnOlxuICAgICAgICB0aGlzLnBldHN4QnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBncm91cHMgPSBbXTtcbiAgICB2YXIgZ3JvdXBJbmRleCA9IDA7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IERhdGEuR3JvdXBzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBncm91cCA9IERhdGEuR3JvdXBzW2ldO1xuICAgICAgaWYoZ3JvdXAuY2F0ZWdvcnkgPT0gY2F0ZWdvcnkpe1xuICAgICAgICBsZXQgdGV4dCA9IEdlcm1hblRleHRzW2dyb3VwLm5hbWVdO1xuICAgICAgICBncm91cC50ZXh0TmFtZSA9IHRleHQgPyB0ZXh0IDogZ3JvdXAubmFtZTtcbiAgICAgICAgZ3JvdXBzW2dyb3VwSW5kZXhdID0gZ3JvdXA7XG4gICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBncm91cC5wcm9ncmFtcy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgdmFyIHByb2dyYW0gPSBncm91cC5wcm9ncmFtc1tqXTtcbiAgICAgICAgICBncm91cC5wcm9ncmFtc1tqXSA9IHRoaXMucm91dGluZXMuZ2V0UHJvZ3JhbShwcm9ncmFtLmFwaU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGdyb3VwSW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcmVkZWZpbmVkUHJvZ3JhbXMgPSBncm91cHM7XG4gIH1cblxuICBhZGRQcm9ncmFtcyhyb3V0aW5lTmFtZSwgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMywgcHJvZ3JhbTQpe1xuICAgIHRoaXMubmF2Q3RybC5wb3AoKTtcbiAgICB2YXIgYnViYmxlTmFtZXMgPSB0aGlzLnJvdXRpbmVzLmFkZFByb2dyYW1zKHJvdXRpbmVOYW1lLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zLCBwcm9ncmFtNCk7XG4gICAgdGhpcy5ldmVudHMucHVibGlzaChcInNoYXJlc0J1YmJsZXNcIiwgYnViYmxlTmFtZXMpO1xuICB9XG5cbiAgYWRkMVByb2dyYW0ocHJvZ3JhbU5hbWUsIHByb2dyYW1SdW5uaW5nVGltZSwgcHJvZ3JhbUFwaU5hbWUpe1xuICAgIHRoaXMucm91dGluZXMuYWRkUHJvZ3JhbVRvUm91dGluZSh0aGlzLnByb2dyYW0sICcnLCBwcm9ncmFtTmFtZSwgcHJvZ3JhbVJ1bm5pbmdUaW1lLCBwcm9ncmFtQXBpTmFtZSk7XG5cbiAgICB0aGlzLnByb2dyYW1OYW1lMSA9IHRoaXMucHJvZ3JhbSA9PSAxID8gcHJvZ3JhbU5hbWUgOiAodGhpcy5wcm9ncmFtTmFtZTEubGVuZ3RoID4gMCA/IHRoaXMucHJvZ3JhbU5hbWUxIDogJycpO1xuICAgIHRoaXMucHJvZ3JhbU5hbWUyID0gdGhpcy5wcm9ncmFtID09IDIgPyBwcm9ncmFtTmFtZSA6ICh0aGlzLnByb2dyYW1OYW1lMi5sZW5ndGggPiAwID8gdGhpcy5wcm9ncmFtTmFtZTIgOiAnJyk7XG4gICAgdGhpcy5wcm9ncmFtTmFtZTMgPSB0aGlzLnByb2dyYW0gPT0gMyA/IHByb2dyYW1OYW1lIDogKHRoaXMucHJvZ3JhbU5hbWUzLmxlbmd0aCA+IDAgPyB0aGlzLnByb2dyYW1OYW1lMyA6ICcnKTtcbiAgICB0aGlzLnByb2dyYW1OYW1lNCA9IHRoaXMucHJvZ3JhbSA9PSA0ID8gcHJvZ3JhbU5hbWUgOiAodGhpcy5wcm9ncmFtTmFtZTQubGVuZ3RoID4gMCA/IHRoaXMucHJvZ3JhbU5hbWU0IDogJycpO1xuXG4gICAgdGhpcy5yb3V0aW5lcy5zZXRQcm9ncmFtcyh0aGlzLnByb2dyYW1OYW1lMSwgdGhpcy5wcm9ncmFtTmFtZTIsIHRoaXMucHJvZ3JhbU5hbWUzLCB0aGlzLnByb2dyYW1OYW1lNCk7XG5cbiAgICB2YXIgYnViYmxlTmFtZXMgPSBbXG4gICAgICB0aGlzLnByb2dyYW1OYW1lMSxcbiAgICAgIHRoaXMucHJvZ3JhbU5hbWUyLFxuICAgICAgdGhpcy5wcm9ncmFtTmFtZTMsXG4gICAgICB0aGlzLnByb2dyYW1OYW1lNFxuICAgIF07XG4gICAgdGhpcy5ldmVudHMucHVibGlzaChcInNoYXJlc0J1YmJsZXNcIiwgYnViYmxlTmFtZXMpO1xuICAgIHRoaXMubmF2Q3RybC5wb3AoKTtcbiAgfVxuXG4gIG1vcmVQcm9ncmFtSW5mbyhuYW1lLCBydW5UaW1lLCBkZXNjcmlwdGlvbiwgYXBpTmFtZSl7XG4gICAgdGhpcy5uYXZDdHJsLnB1c2goUHJvZ3JhbVBhZ2UsIHsgcHJvZ3JhbU51bWJlcjogdGhpcy5wcm9ncmFtLCBuYW1lOiBuYW1lLCBydW5UaW1lOiBydW5UaW1lLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIGFwaU5hbWU6IGFwaU5hbWUgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9wcm9ncmFtcy9wcm9ncmFtcy50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBFdmVudHMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFByb2dyYW1QYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXByb2dyYW0nLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyYW0uaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyYW1QYWdlIHtcbiAgcHVibGljIHByb2dyYW1OYW1lIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbVJ1bm5pbmdUaW1lIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbURlc2NyaXB0aW9uIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbUFwaU5hbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtTnVtYmVyIDogbnVtYmVyO1xuICBwdWJsaWMgcHJvZ3JhbVJlYWxOYW1lIDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlLFxuICAgIHB1YmxpYyBldmVudHM6IEV2ZW50cykge1xuICB9XG4gIGlvblZpZXdEaWRMb2FkKCl7XG4gICAgdGhpcy5wcm9ncmFtUmVhbE5hbWUgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ25hbWUnKTtcbiAgICB2YXIgcHJvZ3JhbVRyYW5zbGF0ZU5hbWUgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ25hbWUnKTtcbiAgICBpZih0aGlzLmlzTmFtZU9uQXJyYXkoQ29uc3RhbnRzLnNob3J0VGl0bGVzLCBwcm9ncmFtVHJhbnNsYXRlTmFtZSkpXG4gICAgICBwcm9ncmFtVHJhbnNsYXRlTmFtZSA9IHByb2dyYW1UcmFuc2xhdGVOYW1lLnJlcGxhY2UoJy11cHBlcicsICctc2hvcnQnKTtcbiAgICB0aGlzLnByb2dyYW1OYW1lID0gdHlwZW9mIEdlcm1hblRleHRzW3Byb2dyYW1UcmFuc2xhdGVOYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBwcm9ncmFtVHJhbnNsYXRlTmFtZSA6IEdlcm1hblRleHRzW3Byb2dyYW1UcmFuc2xhdGVOYW1lXTtcbiAgICB0aGlzLnByb2dyYW1SdW5uaW5nVGltZSA9IHR5cGVvZiBHZXJtYW5UZXh0c1t0aGlzLm5hdlBhcmFtcy5nZXQoJ3J1blRpbWUnKV0gPT09ICd1bmRlZmluZWQnID8gdGhpcy5uYXZQYXJhbXMuZ2V0KCdydW5UaW1lJykgOiBHZXJtYW5UZXh0c1t0aGlzLm5hdlBhcmFtcy5nZXQoJ3J1blRpbWUnKV07XG4gICAgdGhpcy5wcm9ncmFtRGVzY3JpcHRpb24gPSB0eXBlb2YgR2VybWFuVGV4dHNbdGhpcy5uYXZQYXJhbXMuZ2V0KCdkZXNjcmlwdGlvbicpXSA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm5hdlBhcmFtcy5nZXQoJ2Rlc2NyaXB0aW9uJykgOiBHZXJtYW5UZXh0c1t0aGlzLm5hdlBhcmFtcy5nZXQoJ2Rlc2NyaXB0aW9uJyldO1xuICAgIHRoaXMucHJvZ3JhbUFwaU5hbWUgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ2FwaU5hbWUnKTtcbiAgICB0aGlzLnByb2dyYW1OdW1iZXIgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ3Byb2dyYW1OdW1iZXInKTtcbiAgfVxuXG4gIGFkZDFQcm9ncmFtKHByb2dyYW1OYW1lLCBwcm9ncmFtUnVubmluZ1RpbWUsIHByb2dyYW1BcGlOYW1lKXtcbiAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKFwiYWRkMVByb2dyYW1FdmVudFwiLCB0aGlzLnByb2dyYW1OdW1iZXIsIHRoaXMucHJvZ3JhbVJlYWxOYW1lLCB0aGlzLnByb2dyYW1SdW5uaW5nVGltZSwgdGhpcy5wcm9ncmFtQXBpTmFtZSk7XG4gIH1cblxuICBpc05hbWVPbkFycmF5KG5hbWVzLCBuYW1lKXtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspe1xuICAgICAgaWYobmFtZXNbaV0gPT0gbmFtZSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9wcm9ncmFtL3Byb2dyYW0udHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBQbGF0Zm9ybSAgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGxheWluZ1BhZ2UgfSBmcm9tICcuLi9wbGF5aW5nL3BsYXlpbmcnO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XHJcbmltcG9ydCB7IE5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmstaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBXaWZpUGFnZSBwYWdlLlxyXG4gKlxyXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cclxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXHJcbiAqL1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYWdlLXdpZmknLFxyXG4gIHRlbXBsYXRlVXJsOiAnd2lmaS5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZmlQYWdlIHtcclxuICBwdWJsaWMgdGVzdEJlZ2luUm91dGluZUludGVydmFsIDogYW55O1xyXG4gIHB1YmxpYyB0ZXN0SVBJbnRlcnZhbCA6IGFueTtcclxuICBwdWJsaWMgdGVzdFN0YXR1c0ludGVydmFsIDogYW55O1xyXG4gIHB1YmxpYyBpbnRlcnZhbENvdW50IDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgbXltYXRTdGF0dXMgOiBib29sZWFuO1xyXG4gIHB1YmxpYyBteW1hdFdpZmkgOiBib29sZWFuO1xyXG4gIHB1YmxpYyBteW1hdE5vU3RhdHVzIDogYm9vbGVhbjtcclxuICBwdWJsaWMgYmF0dGVyeUNoYXJnZSA6IHN0cmluZztcclxuICBwdWJsaWMgYmF0dGVyeUltZyA6IHN0cmluZztcclxuICBwdWJsaWMgY29pbFRleHQgOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvaWxUZXh0MSA6IHN0cmluZztcclxuICBwdWJsaWMgY29pbFRleHQyIDogc3RyaW5nO1xyXG4gIHB1YmxpYyBjb2lsVGV4dDMgOiBzdHJpbmc7XHJcbiAgcHVibGljIGNvaWxUZXh0NCA6IHN0cmluZztcclxuICBwdWJsaWMgc2hvd1N0YXR1c1RhYmxlIDogYm9vbGVhbjtcclxuICBwdWJsaWMgc2hvd0xvYWRpbmcgOiBib29sZWFuO1xyXG4gIHB1YmxpYyBpc1J1blJvdXRpbmVFbmFibGVkIDogYm9vbGVhbjtcclxuICBwcml2YXRlIHByb2dyYW0xOiBhbnk7XHJcbiAgcHJpdmF0ZSBwcm9ncmFtMjogYW55O1xyXG4gIHByaXZhdGUgcHJvZ3JhbTM6IGFueTtcclxuICBwcml2YXRlIHByb2dyYW00OiBhbnk7XHJcblxyXG4gIHB1YmxpYyBpZnJhbWVVcmw6IGFueTtcclxuICBwdWJsaWMgc2hvd0lmcmFtZVN0YXR1cyA6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIGFwaVNlcnZpY2UgOiBBUElTZXJ2aWNlUHJvdmlkZXIsXHJcbiAgICAgIHB1YmxpYyBuZXR3b3JrSW50ZXJmYWNlIDogTmV0d29ya0ludGVyZmFjZSwgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xyXG4gICAgICB0aGlzLmNvaWxUZXh0ID0gdHlwZW9mIEdlcm1hblRleHRzWydjb2lsJ10gPT09ICd1bmRlZmluZWQnID8gJ0FudGVuYScgOiBHZXJtYW5UZXh0c1snY29pbCddO1xyXG4gICAgICB0aGlzLnByb2dyYW0xID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdwcm9nMScpO1xyXG4gICAgICB0aGlzLnByb2dyYW0yID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdwcm9nMicpO1xyXG4gICAgICB0aGlzLnByb2dyYW0zID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdwcm9nMycpO1xyXG4gICAgICB0aGlzLnByb2dyYW00ID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdwcm9nNCcpO1xyXG4gIH1cclxuXHJcbiAgaW9uVmlld0RpZExlYXZlKCl7XHJcbiAgICB0aGlzLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIGlvblZpZXdEaWRMb2FkKCkge1xyXG4gICAgdGhpcy5teW1hdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93SWZyYW1lU3RhdHVzID0gZmFsc2U7XHJcbiAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IHRydWU7XHJcbiAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xyXG4gICAgICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UuZ2V0V2lGaUlQQWRkcmVzcygpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgIGlmKHRoaXMudmVyaWZ5SW50ZXJuYWxJcEFkZHJlc3MocmVzcG9uc2UpKXtcclxuICAgICAgICAgIHRoaXMudmVyaWZ5U3RhdHVzVmFsdWVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgIH0sKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdGhpcy52ZXJpZnlTdGF0dXNWYWx1ZXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMubXltYXRXaWZpID0gdHJ1ZTtcclxuICAgIHRoaXMuaW50ZXJ2YWxDb3VudCA9IDA7XHJcbiAgfVxyXG5cclxuICB2ZXJpZnlJbnRlcm5hbElwQWRkcmVzcyhpcCl7XHJcbiAgICBmb3IobGV0IGkgPSAxMDA7IGkgPCAyNTY7IGkrKyl7XHJcbiAgICAgIGlmKENvbnN0YW50cy5sb2NhbElQQWRkcmVzcyArIGkgPT0gaXApe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB2ZXJpZnlTdGF0dXNWYWx1ZXMocmVzdGFydCA9IHRydWUpe1xyXG4gICAgLy90aGlzLm15bWF0U3RhdHVzID0gdHJ1ZTtcclxuICAgIC8vdGhpcy5zaG93U3RhdHVzVGFibGUgPSB0cnVlO1xyXG5cclxuICAgIGlmKHJlc3RhcnQpe1xyXG4gICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iMTAwLnBuJztcclxuICAgICAgdGhpcy5jb2lsVGV4dDEgPSAnTi9BJztcclxuICAgICAgdGhpcy5jb2lsVGV4dDIgPSAnTi9BJztcclxuICAgICAgdGhpcy5jb2lsVGV4dDMgPSAnTi9BJztcclxuICAgICAgdGhpcy5jb2lsVGV4dDQgPSAnTi9BJztcclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMubXltYXRXaWZpID0gZmFsc2U7XHJcbiAgICAvL3RoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0SVBJbnRlcnZhbCk7XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgbXltYXQgaXMgY29ubmVjdGVkXHJcbiAgICB2YXIgbXlNYXRUZXN0ID0gdGhpcy5hcGlTZXJ2aWNlLnRlc3QoKTtcclxuICAgIG15TWF0VGVzdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAvLyBpZiBpcyBjb25uZWN0ZWQgcXVpdGFyIGltYWdlbiwgdGV4dG9zIHkgbG9hZGluZyB5IHBvbmVyIHN0YXR1cyBkZWwgbWF0XHJcbiAgICAgIGlmKHRoaXMudmVyaWZ5VmFsdWVzKHJlc3BvbnNlKSl7XHJcbiAgICAgICAgdGhpcy5zaG93U3RhdHVzKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICB0aGlzLmZhaWxJUFZlcmlmaWNhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9LCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd05vU3RhdHVzKCl7XHJcbiAgICAgIHRoaXMubXltYXROb1N0YXR1cyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzaG93U3RhdHVzKCl7XHJcbiAgICAgIHRoaXMubXltYXRXaWZpID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubXltYXRTdGF0dXMgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RTdGF0dXNJbnRlcnZhbCk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0SVBJbnRlcnZhbCk7XHJcblxyXG4gICAgICB0aGlzLnRlc3RJUEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmV0d29ya0ludGVyZmFjZS5nZXRXaUZpSVBBZGRyZXNzKCkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMudmVyaWZ5SW50ZXJuYWxJcEFkZHJlc3MocmVzcG9uc2UpKXtcclxuICAgICAgICAgICAgICB0aGlzLnZlcmlmeVN0YXR1c1ZhbHVlcyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICB0aGlzLm15bWF0V2lmaSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd1N0YXR1c1RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5mYWlsSVBWZXJpZmljYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgIHRoaXMubXltYXRXaWZpID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5teW1hdFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1J1blJvdXRpbmVFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICB2ZXJpZnlWYWx1ZXMocmVzcG9uc2Upe1xyXG4gICAgaWYocmVzcG9uc2UuaW5kZXhPZihcIjxwPjxoND5Qb3dlcjogXCIpID4gLTEpe1xyXG4gICAgICB2YXIgcG93ZXIgPSByZXNwb25zZS5zcGxpdChcIjxwPjxoND5Qb3dlcjogXCIpO1xyXG4gICAgICBwb3dlciA9IHBvd2VyWzFdLnNwbGl0KFwiPC9oND48L3A+XCIpO1xyXG4gICAgICB2YXIgY29pbDEgPSByZXNwb25zZS5zcGxpdChcIjx0cj48dGQ+MS48L3RkPjx0ZD5cIik7XHJcbiAgICAgIGNvaWwxID0gY29pbDFbMl0uc3BsaXQoXCI8L3RkPjwvdHI+XCIpO1xyXG4gICAgICB2YXIgY29pbDIgPSByZXNwb25zZS5zcGxpdChcIjx0cj48dGQ+Mi48L3RkPjx0ZD5cIik7XHJcbiAgICAgIGNvaWwyID0gY29pbDJbMl0uc3BsaXQoXCI8L3RkPjwvdHI+XCIpO1xyXG4gICAgICB2YXIgY29pbDMgPSByZXNwb25zZS5zcGxpdChcIjx0cj48dGQ+My48L3RkPjx0ZD5cIik7XHJcbiAgICAgIGNvaWwzID0gY29pbDNbMl0uc3BsaXQoXCI8L3RkPjwvdHI+XCIpO1xyXG4gICAgICB2YXIgY29pbDQgPSByZXNwb25zZS5zcGxpdChcIjx0cj48dGQ+NC48L3RkPjx0ZD5cIik7XHJcbiAgICAgIGNvaWw0ID0gY29pbDRbMl0uc3BsaXQoXCI8L3RkPjwvdHI+XCIpO1xyXG4gICAgICB0aGlzLmJhdHRlcnlDaGFyZ2UgPSBwb3dlclswXTtcclxuICAgICAgdmFyIHBvd2VyVmFsID0gcG93ZXJbMF0uc3Vic3RyKDAscG93ZXJbMF0ubGVuZ3RoLTEpO1xyXG4gICAgICBpZihwb3dlclZhbCA+IDc1KVxyXG4gICAgICAgICAgdGhpcy5iYXR0ZXJ5SW1nID0gJ2Fzc2V0cy9pbWcvYjEwMC5wbmcnO1xyXG4gICAgICBlbHNlIGlmKHBvd2VyVmFsID4gNTApXHJcbiAgICAgICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iNzUucG5nJztcclxuICAgICAgZWxzZSBpZihwb3dlclZhbCA+IDI1KVxyXG4gICAgICAgICAgdGhpcy5iYXR0ZXJ5SW1nID0gJ2Fzc2V0cy9pbWcvYjUwLnBuZyc7XHJcbiAgICAgIGVsc2UgaWYocG93ZXJWYWwgPiAxMClcclxuICAgICAgICAgIHRoaXMuYmF0dGVyeUltZyA9ICdhc3NldHMvaW1nL2IyNS5wbmcnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgICB0aGlzLmJhdHRlcnlJbWcgPSAnYXNzZXRzL2ltZy9iMTAucG5nJztcclxuXHJcbiAgICAgIHRoaXMuY29pbFRleHQxID0gY29pbDFbMF07XHJcbiAgICAgIHRoaXMuY29pbFRleHQyID0gY29pbDJbMF07XHJcbiAgICAgIHRoaXMuY29pbFRleHQzID0gY29pbDNbMF07XHJcbiAgICAgIHRoaXMuY29pbFRleHQ0ID0gY29pbDRbMF07XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmYWlsSVBWZXJpZmljYXRpb24oKXtcclxuICAgICAgdGhpcy50ZXN0SVBJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UuZ2V0V2lGaUlQQWRkcmVzcygpLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLnZlcmlmeUludGVybmFsSXBBZGRyZXNzKHJlc3BvbnNlKSl7XHJcbiAgICAgICAgICAgICAgdGhpcy52ZXJpZnlTdGF0dXNWYWx1ZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sIDMwMDApO1xyXG4gIH1cclxuXHJcbiAgLypmYWlsU3RhdHVzVmVyaWZpY2F0aW9uKCl7XHJcbiAgICB0aGlzLnRlc3RTdGF0dXNJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gdGltZW91dCBvZiBteW1hdCBkZXRlY3Rpb24gMTgwIHNlZ3VuZG9zXHJcbiAgICAgIHZhciBmYWlsTXlNYXRUZXN0ID0gdGhpcy5hcGlTZXJ2aWNlLnRlc3QoKTtcclxuICAgICAgZmFpbE15TWF0VGVzdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMudmVyaWZ5VmFsdWVzKHJlc3BvbnNlKSl7XHJcbiAgICAgICAgICB0aGlzLnNob3dTdGF0dXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuaW50ZXJ2YWxDb3VudCA+PSA1KXtcclxuICAgICAgICAgIHRoaXMuc2hvd05vU3RhdHVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuaW50ZXJ2YWxDb3VudCArPSAxO1xyXG4gICAgfSwgMzAwMCk7XHJcblxyXG4gICAgLyp2YXIgcHJvZ3JhbXMgPSAnJztcclxuXHJcbiAgICBmb3IodmFyIGkgPSAxOyBpIDw9IDQ7IGkrKyl7XHJcbiAgICAgIHN3aXRjaChpKXtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMSkudGhlbigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2dyYW1zICs9IFwiP1AxPVwiICsgdmFsLnNwbGl0KFwifFwiKVszXSArICcmJztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTIpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgIDg1OF1cclxuICAgICAgICBwcm9ncmFtcyArPSBcIlAyPVwiICsgdmFsLnNwbGl0KFwifFwiKVszXSArICcmJztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTMpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9ncmFtcyArPSBcIlAzPVwiICsgdmFsLnNwbGl0KFwifFwiKVszXSArICcmJztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTQpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9ncmFtcyArPSBcIlA0PVwiICsgdmFsLnNwbGl0KFwifFwiKVszXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0lmcmFtZVN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubXltYXRXaWZpID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubXltYXRTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlmcmFtZVVybCA9IHRoaXMuc2FuaXRpemUuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKENvbnN0YW50cy5teU1hdEFwaUluZGV4VXJsICsgcHJvZ3JhbXMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSogL1xyXG4gIH0qL1xyXG5cclxuICBzdGFydFJvdXRpbmUoKXtcclxuICAgIC8qIEFOVEVTIERFIENPQ1JSRVIgUlVUSU5BIFZFUklGSUNBUiBTSSBTRSBFU1RBIENPTkVDVEFETyBBTCBXSUZJIERFTCBNWU1BVCAqL1xyXG4gICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmlzUnVuUm91dGluZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYXBpU2VydmljZS50ZXN0KCkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy52ZXJpZnlWYWx1ZXMocmVzcG9uc2UpKXtcclxuICAgICAgICAgIC8qIENPUlJFUiBSVVRJTkEgKi9cclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0U3RhdHVzSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRlc3RJUEludGVydmFsKTtcclxuICAgICAgICAgIHZhciBwcm9ncmFtMU9iaiA9ICd8JyArIHRoaXMucHJvZ3JhbTEubmFtZSArICd8JyArIHRoaXMucHJvZ3JhbTEucnVubmluZ3RpbWUgKyAnfCcgKyB0aGlzLnByb2dyYW0xLmFwaU5hbWU7XHJcbiAgICAgICAgICB2YXIgcHJvZ3JhbTJPYmogPSAnfCcgKyB0aGlzLnByb2dyYW0yLm5hbWUgKyAnfCcgKyB0aGlzLnByb2dyYW0yLnJ1bm5pbmd0aW1lICsgJ3wnICsgdGhpcy5wcm9ncmFtMi5hcGlOYW1lO1xyXG4gICAgICAgICAgdmFyIHByb2dyYW0zT2JqID0gJ3wnICsgdGhpcy5wcm9ncmFtMy5uYW1lICsgJ3wnICsgdGhpcy5wcm9ncmFtMy5ydW5uaW5ndGltZSArICd8JyArIHRoaXMucHJvZ3JhbTMuYXBpTmFtZTtcclxuICAgICAgICAgIHZhciBwcm9ncmFtNE9iaiA9ICd8JyArIHRoaXMucHJvZ3JhbTQubmFtZSArICd8JyArIHRoaXMucHJvZ3JhbTQucnVubmluZ3RpbWUgKyAnfCcgKyB0aGlzLnByb2dyYW00LmFwaU5hbWU7XHJcblxyXG4gICAgICAgICAgdmFyIHByb2dyYW1zID0gW1xyXG4gICAgICAgICAgICAgIHByb2dyYW0xT2JqLFxyXG4gICAgICAgICAgICAgIHByb2dyYW0yT2JqLFxyXG4gICAgICAgICAgICAgIHByb2dyYW0zT2JqLFxyXG4gICAgICAgICAgICAgIHByb2dyYW00T2JqXHJcbiAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5zdGFydChwcm9ncmFtcykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UgKyAnJyk7XHJcbiAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAvKnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHZhciBlbWFpbERhdGEgPSB7IGVycm9yIDogcmVzcG9uc2UuZGF0YSB9O1xyXG4gICAgICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5zZW5kRXJyb3IoZW1haWxEYXRhKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAxMjAwMDApOyovXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyBQb25lciBydXRpbmEgZW4gbGFzIHVsdGltYXMgY29ycmlkYXNcclxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLmxhdGVzdFJvdXRpbmVzS2V5KS50aGVuKChyb3V0aW5lcyk9PntcclxuICAgICAgICAgICAgbGV0IGxhdGVzdEFycmF5ID0gW107XHJcblxyXG4gICAgICAgICAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF5ID0gdC5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBtb250aEluZGV4ID0gdC5nZXRNb250aCgpO1xyXG4gICAgICAgICAgICB2YXIgeWVhciA9IHQuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgdmFyIGhvdXJzID0gdC5nZXRIb3VycygpO1xyXG4gICAgICAgICAgICB2YXIgbWludXRlcyA9IHQuZ2V0TWludXRlcygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb2dyYW1zQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2dyYW1zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICBwcm9ncmFtc0FycmF5LnB1c2goeyBcImFwaU5hbWVcIiA6IHByb2dyYW1zW2ldLnNwbGl0KCd8JylbM10sIFwibmFtZVwiIDogR2VybWFuVGV4dHNbcHJvZ3JhbXNbaV0uc3BsaXQoJ3wnKVsxXV0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhdGVzdEFycmF5LnB1c2goeyBcImRheVwiIDogZGF5LCBcIm1vbnRoXCIgOiBHZXJtYW5UZXh0c1tDb25zdGFudHMubW9udGhOYW1lc1ttb250aEluZGV4XV0sIFwieWVhclwiIDogeWVhciwgXCJob3Vyc1wiIDogdGhpcy5maXhaZXJvT25OdW1iZXIoaG91cnMpLCBcIm1pbnV0ZXNcIiA6IHRoaXMuZml4WmVyb09uTnVtYmVyKG1pbnV0ZXMpLCBcInByb2dyYW1zXCIgOiBwcm9ncmFtc0FycmF5IH0pO1xyXG4gICAgICAgICAgICBpZihyb3V0aW5lcyAhPSBudWxsICYmIHJvdXRpbmVzWzBdICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgIGxhdGVzdEFycmF5LnB1c2gocm91dGluZXNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHJvdXRpbmVzICE9IG51bGwgJiYgcm91dGluZXNbMV0gIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgbGF0ZXN0QXJyYXkucHVzaChyb3V0aW5lc1sxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMubGF0ZXN0Um91dGluZXNLZXksIGxhdGVzdEFycmF5KTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8qIENPUlJFUiBSVVRJTkEgKi9cclxuICAgICAgICAgIHRoaXMubmF2Q3RybC5zZXRSb290KFBsYXlpbmdQYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLm15bWF0V2lmaSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLm15bWF0U3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmZhaWxJUFZlcmlmaWNhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwocmVzcG9uc2UpPT57XHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNSdW5Sb3V0aW5lRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5teW1hdFdpZmkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubXltYXRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dTdGF0dXNUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmFpbElQVmVyaWZpY2F0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXhaZXJvT25OdW1iZXIodmFsKXtcclxuICAgIGlmKHZhbCA8IDEwKXtcclxuICAgICAgcmV0dXJuICcwJyArIHZhbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBzdG9wKCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMudGVzdFN0YXR1c0ludGVydmFsKTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50ZXN0SVBJbnRlcnZhbCk7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3dpZmkvd2lmaS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgR2VybWFuVGV4dHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nZXJtYW4tdGV4dHMnO1xuaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9sb2NhbC1ub3RpZmljYXRpb25zJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgUGxheWluZ1BhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtcGxheWluZycsXG4gIHRlbXBsYXRlVXJsOiAncGxheWluZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGxheWluZ1BhZ2Uge1xuICBwdWJsaWMgcHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nQXNUaW1lIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtVGl0bGUxIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbVRpdGxlMiA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW1UaXRsZTMgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtVGl0bGU0IDogc3RyaW5nO1xuICBwdWJsaWMgZGlzcGxheVJ1bm5pbmdUaW1lIDogc3RyaW5nO1xuICBwdWJsaWMgZmluaXNoVGltZSA6IGFueTtcbiAgcHVibGljIHRpbWVyUmVtYWluIDogYW55O1xuICBwdWJsaWMgdGltZXJJZCA6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwdWJsaWMgc3RvcmFnZTogU3RvcmFnZSxcbiAgICBwcml2YXRlIGxvY2FsTm90aWZpY2F0aW9ucyA6IExvY2FsTm90aWZpY2F0aW9ucywgcHVibGljIHBsdDogUGxhdGZvcm0sIHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVzdW1lJywgKCkgPT4ge1xuICAgICAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIF90aGlzLnJlc3VtZSh0LmdldFRpbWUoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNpbXVsYXRlUmVzdW1lKCl7XG4gICAgdmFyIHQgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMucmVzdW1lKHQuZ2V0VGltZSgpICsgMTApO1xuICB9XG5cbiAgcmVzdW1lKG5vdyl7XG4gICAgaWYoTWF0aC5yb3VuZChub3cgLyAxMDAwKSA+IHRoaXMuZmluaXNoVGltZSl7XG4gICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9ICcwMDowMCc7XG4gICAgICB0aGlzLnRpbWVyUmVtYWluID0gMDtcbiAgICAgIHRoaXMudGltZXJJZCsrO1xuICAgICAgdGhpcy5zdGFydFRpbWVyKHRoaXMudGltZXJJZCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB2YXIgc2Vjb25kc0xlZnQgPSB0aGlzLnRpbWVyUmVtYWluID0gdGhpcy5maW5pc2hUaW1lIC0gTWF0aC5yb3VuZChub3cgLyAxMDAwKTtcbiAgICAgIHRoaXMudGltZXJJZCsrO1xuICAgICAgdGhpcy5zdGFydFRpbWVyKHRoaXMudGltZXJJZCk7XG4gICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9IHRoaXMuY29udmVydFNlY29uZHNUb1RpbWUoc2Vjb25kc0xlZnQpO1xuICAgIH1cbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHZhciBwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZztcbiAgICB2YXIgcHJvZ3JhbTJDdXJyZW50VGltZURlY3JlYXNpbmc7XG4gICAgdmFyIHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nO1xuICAgIHZhciBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZztcbiAgICBmb3IodmFyIGkgPSAxOyBpIDw9IDQ7IGkrKyl7XG4gICAgICBzd2l0Y2goaSl7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlMSkudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWwuc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgPSB2YWx1ZVsyXTsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHZhbHVlWzJdKTtcbiAgICAgICAgICAgIHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nID0gdmFsdWVbMl07XG4gICAgICAgICAgICB0aGlzLnByb2dyYW1UaXRsZTEgPSB0eXBlb2YgR2VybWFuVGV4dHNbdmFsdWVbMV1dID09PSAndW5kZWZpbmVkJyA/IHZhbHVlWzFdIDogR2VybWFuVGV4dHNbdmFsdWVbMV1dO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMuc3RvcmFnZUtleUJ1YmJsZTIpLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsLnNwbGl0KCd8Jyk7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nQXNUaW1lID0gdmFsdWVbMl07IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZSh2YWx1ZVsyXSk7XG4gICAgICAgICAgICBwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZyA9IHZhbHVlWzJdO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtVGl0bGUyID0gdHlwZW9mIEdlcm1hblRleHRzW3ZhbHVlWzFdXSA9PT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZVsxXSA6IEdlcm1hblRleHRzW3ZhbHVlWzFdXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnN0b3JhZ2VLZXlCdWJibGUzKS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbC5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmFtM0N1cnJlbnRUaW1lRGVjcmVhc2luZ0FzVGltZSA9IHZhbHVlWzJdOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUodmFsdWVbMl0pO1xuICAgICAgICAgICAgcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcgPSB2YWx1ZVsyXTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbVRpdGxlMyA9IHR5cGVvZiBHZXJtYW5UZXh0c1t2YWx1ZVsxXV0gPT09ICd1bmRlZmluZWQnID8gdmFsdWVbMV0gOiBHZXJtYW5UZXh0c1t2YWx1ZVsxXV07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5zdG9yYWdlS2V5QnViYmxlNCkudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWwuc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmdBc1RpbWUgPSB2YWx1ZVsyXTsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHZhbHVlWzJdKTtcbiAgICAgICAgICAgIHByb2dyYW00Q3VycmVudFRpbWVEZWNyZWFzaW5nID0gdmFsdWVbMl07XG4gICAgICAgICAgICB0aGlzLnByb2dyYW1UaXRsZTQgPSB0eXBlb2YgR2VybWFuVGV4dHNbdmFsdWVbMV1dID09PSAndW5kZWZpbmVkJyA/IHZhbHVlWzFdIDogR2VybWFuVGV4dHNbdmFsdWVbMV1dO1xuXG4gICAgICAgICAgICBpZihwcm9ncmFtMUN1cnJlbnRUaW1lRGVjcmVhc2luZyA+IHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nICYmIHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nID4gcHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcgJiYgcHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmcgPiBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZylcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9IHByb2dyYW0xQ3VycmVudFRpbWVEZWNyZWFzaW5nOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUocHJvZ3JhbTFDdXJyZW50VGltZURlY3JlYXNpbmcpO1xuICAgICAgICAgICAgZWxzZSBpZihwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZyA+IHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nICYmIHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nID4gcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmcpXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UnVubmluZ1RpbWUgPSBwcm9ncmFtMkN1cnJlbnRUaW1lRGVjcmVhc2luZzsgLy90aGlzLmNvbnZlcnRTZWNvbmRzVG9UaW1lKHByb2dyYW0yQ3VycmVudFRpbWVEZWNyZWFzaW5nKTtcbiAgICAgICAgICAgIGVsc2UgaWYocHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcgPiBwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZylcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSA9IHByb2dyYW0zQ3VycmVudFRpbWVEZWNyZWFzaW5nOyAvL3RoaXMuY29udmVydFNlY29uZHNUb1RpbWUocHJvZ3JhbTNDdXJyZW50VGltZURlY3JlYXNpbmcpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gcHJvZ3JhbTRDdXJyZW50VGltZURlY3JlYXNpbmc7IC8vdGhpcy5jb252ZXJ0U2Vjb25kc1RvVGltZShwcm9ncmFtNEN1cnJlbnRUaW1lRGVjcmVhc2luZyk7XG5cbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gdGhpcy5kaXNwbGF5UnVubmluZ1RpbWU7XG4gICAgICAgICAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaFRpbWUgPSBNYXRoLnJvdW5kKHQuZ2V0VGltZSgpIC8gMTAwMCkgKyB0aGlzLmdldFNlY29uZHModGhpcy5kaXNwbGF5UnVubmluZ1RpbWUpO1xuXG4gICAgICAgICAgICB0aGlzLnRpbWVyUmVtYWluID0gdGhpcy5nZXRTZWNvbmRzKHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IDE7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy50aW1lcklkKTtcblxuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZSh7XG4gICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTXlNYXQgTGlnaHQnLFxuICAgICAgICAgICAgICAgICAgdGV4dDogR2VybWFuVGV4dHNbJ3RpbWUtZXhwaXJlLXRleHQnXSxcbiAgICAgICAgICAgICAgICAgIHNvdW5kOiAnZmlsZTovL2Fzc2V0cy9zb3VuZHMvJyArICh0aGlzLnBsdC5pcygnaW9zJykgPyAnZ29uZ19jNS5tNHInIDogJ2dvbmdfYzUubXAzJyksXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyOiB7IGF0OiBuZXcgRGF0ZSh0LmdldFRpbWUoKSArIHRoaXMuZ2V0U2Vjb25kcyh0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSkgKiAxMDAwKSB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsTm90aWZpY2F0aW9ucy5vbihcImNsaWNrXCIpLnN1YnNjcmliZSh7IG5leHQobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3RpZmljYXRpb24uaWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5yZXN1bWUodC5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uVmlld1dpbGxMZWF2ZSgpIHtcbiAgICB0aGlzLnRpbWVyUmVtYWluID0gMDtcbiAgfVxuXG4gIHN0YXJ0VGltZXIoaWQpe1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYodGhpcy50aW1lclJlbWFpbiA9PSAwIHx8IHRoaXMudGltZXJJZCAhPSBpZCkgeyByZXR1cm47IH1cblxuICAgICAgdGhpcy50aW1lclJlbWFpbi0tO1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcGxheVJ1bm5pbmdUaW1lID0gdGhpcy5kZWNyZWFzZVNlY29uZCh0aGlzLmRpc3BsYXlSdW5uaW5nVGltZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy50aW1lclJlbWFpbiA+IDApe1xuICAgICAgICB0aGlzLnN0YXJ0VGltZXIodGhpcy50aW1lcklkKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGRlY3JlYXNlU2Vjb25kKHRpbWUpe1xuICAgIHZhciBtaW51dGVzU3RyID0gdGltZS5zdWJzdHIoMCx0aW1lLmluZGV4T2YoJzonKSk7XG4gICAgdmFyIG1pbnV0ZXMgPSBtaW51dGVzU3RyWzBdID09ICcwJyA/IHBhcnNlSW50KG1pbnV0ZXNTdHJbMV0pIDogcGFyc2VJbnQobWludXRlc1N0cik7XG4gICAgdmFyIHNlY29uZHNTdHIgPSB0aW1lLnN1YnN0cih0aW1lLmluZGV4T2YoJzonKSArIDEpO1xuICAgIHZhciBzZWNvbmRzID0gc2Vjb25kc1N0clswXSA9PSAnMCcgPyBwYXJzZUludChzZWNvbmRzU3RyWzFdKSA6IHBhcnNlSW50KHNlY29uZHNTdHIpO1xuICAgIGlmKHNlY29uZHMgLSAxID09IC0xKXtcbiAgICAgIG1pbnV0ZXNTdHIgPSBtaW51dGVzIC0gMSA8IDEwICYmIG1pbnV0ZXMgLSAxID49IDAgPyAnMCcgKyAobWludXRlcyAtIDEpIDogbWludXRlcyAtIDEgPT0gLTEgPyAnMDAnIDogJycgKyAobWludXRlcyAtIDEpO1xuICAgICAgc2Vjb25kc1N0ciA9ICc1OSc7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBzZWNvbmRzU3RyID0gc2Vjb25kcyAtIDEgPCAxMCA/ICcwJyArIChzZWNvbmRzIC0gMSkgOiAnJyArIChzZWNvbmRzIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiBtaW51dGVzU3RyICsgJzonICsgc2Vjb25kc1N0cjtcbiAgfVxuXG4gIGdldFNlY29uZHModGltZSl7XG4gICAgdmFyIG1pbnV0ZXNTdHIgPSB0aW1lLnN1YnN0cigwLHRpbWUuaW5kZXhPZignOicpKTtcbiAgICB2YXIgbWludXRlcyA9IG1pbnV0ZXNTdHJbMF0gPT0gJzAnID8gcGFyc2VJbnQobWludXRlc1N0clsxXSkgOiBwYXJzZUludChtaW51dGVzU3RyKTtcbiAgICB2YXIgc2Vjb25kc1N0ciA9IHRpbWUuc3Vic3RyKHRpbWUuaW5kZXhPZignOicpICsgMSk7XG4gICAgdmFyIHNlY29uZHMgPSBzZWNvbmRzU3RyWzBdID09ICcwJyA/IHBhcnNlSW50KHNlY29uZHNTdHJbMV0pIDogcGFyc2VJbnQoc2Vjb25kc1N0cik7XG4gICAgcmV0dXJuIChtaW51dGVzICogNjApICsgc2Vjb25kcztcbiAgfVxuXG4gIGNvbnZlcnRTZWNvbmRzVG9UaW1lKHRpbWVJblNlY29uZHMpIHtcbiAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IodGltZUluU2Vjb25kcyAvIDYwKTtcbiAgICB2YXIgbWludXRlc1N0ciA9IFwiMFwiICsgbWludXRlcztcbiAgICB2YXIgc2Vjb25kcyA9IFwiMFwiICsgKHRpbWVJblNlY29uZHMgLSBtaW51dGVzICogNjApO1xuICAgIHJldHVybiBtaW51dGVzU3RyLnN1YnN0cigtMikgKyBcIjpcIiArIHNlY29uZHMuc3Vic3RyKC0yKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3BsYXlpbmcvcGxheWluZy50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgSGVscFBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaGVscCcsXG4gIHRlbXBsYXRlVXJsOiAnaGVscC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSGVscFBhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMpIHtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBIZWxwUGFnZScpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9oZWxwL2hlbHAudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgRXZlbnRzIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEdlcm1hblRleHRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2VybWFuLXRleHRzJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBDb250YWN0UGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1jb250YWN0JyxcbiAgdGVtcGxhdGVVcmw6ICdjb250YWN0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0UGFnZSB7XG4gIHByaXZhdGUgY29udGFjdEZvcm0gOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBjb250YWN0RGlzYWJsZWQgOiBib29sZWFuO1xuICBwdWJsaWMgIG5hbWVfdmFsdWUgOiBzdHJpbmc7XG4gIHB1YmxpYyAgZW1haWxfdmFsdWUgOiBzdHJpbmc7XG4gIHB1YmxpYyAgbWVzc2FnZV92YWx1ZSA6IHN0cmluZztcbiAgcHVibGljIGJ1dHRvbl9zZW5kIDogc3RyaW5nO1xuICBwdWJsaWMgcmVzcG9uc2VfdGV4dCA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIGFwaVNlcnZpY2UgOiBBUElTZXJ2aWNlUHJvdmlkZXIsXG4gICAgcHVibGljIGV2ZW50cyA6IEV2ZW50cykge1xuICAgIHRoaXMuY29udGFjdEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIG1lc3NhZ2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuY2xlYW5Gb3JtKCk7XG4gICAgdGhpcy5yZXNwb25zZV90ZXh0ID0gJyc7XG4gICAgdGhpcy5jaGFuZ2VCdXR0b25UZXh0KCk7XG4gIH1cblxuICBjaGFuZ2VCdXR0b25UZXh0KCl7XG4gICAgICB0aGlzLmJ1dHRvbl9zZW5kID0gR2VybWFuVGV4dHNbJ3NlbmQtdGV4dCddO1xuICAgICAgLy8gTW9zdHJhciB0ZXh0byBlbiBsYWJlbCBkZWJham8gZGVsIGJvdG9uXG4gIH1cblxuICBjbGVhbkZvcm0oKXtcbiAgICB0aGlzLmNvbnRhY3REaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5uYW1lX3ZhbHVlID0gJyc7XG4gICAgdGhpcy5lbWFpbF92YWx1ZSA9ICcnO1xuICAgIHRoaXMubWVzc2FnZV92YWx1ZSA9ICcnO1xuICB9XG5cbiAgYXR0ZW1wdFNlbmRNYWlsKCl7XG4gICAgdmFyIGVtYWlsRGF0YSA9IHsgZW1haWwgOiB0aGlzLmNvbnRhY3RGb3JtLnZhbHVlLmVtYWlsLCBuYW1lIDogdGhpcy5jb250YWN0Rm9ybS52YWx1ZS5uYW1lLCBtZXNzYWdlIDogdGhpcy5jb250YWN0Rm9ybS52YWx1ZS5tZXNzYWdlIH07XG4gICAgdGhpcy5hcGlTZXJ2aWNlLnJ1blBvc3QoJ2NvbnRhY3RfdXMucGhwJyxlbWFpbERhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB2YXIgb2JqIDogYW55ID0gcmVzdWx0O1xuICAgICAgICBpZiAob2JqLnN0YXR1cyA9PSBcIm9rXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9IEdlcm1hblRleHRzWydlbWFpbC1zdWNjZXNzLW1lc3NhZ2UnXTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uX3NlbmQgPSBHZXJtYW5UZXh0c1snc2VudC10ZXh0J107XG4gICAgICAgICAgICB0aGlzLmNsZWFuRm9ybSgpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSBHZXJtYW5UZXh0c1snZW1haWwtZXJyb3ItbWVzc2FnZSddO1xuICAgICAgICB9XG4gICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2VfdGV4dCA9IEdlcm1hblRleHRzWydlbWFpbC1lcnJvci1tZXNzYWdlJ107XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9jb250YWN0L2NvbnRhY3QudHMiLCJpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuXHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi50cyIsImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcbmltcG9ydCB7IElvbmljQXBwLCBJb25pY0Vycm9ySGFuZGxlciwgSW9uaWNNb2R1bGUgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnOyAvLyBzb2xvIHNlIHVzYSBwYXJhIGhhY2VyIGxhIHBydWViYSBkZSBjb25leGlvbiBjb24gZWwgTXlNYXRcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaHR0cCc7XHJcbmltcG9ydCB7IE5ldHdvcmtJbnRlcmZhY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmstaW50ZXJmYWNlJztcclxuLy9pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcclxuaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9sb2NhbC1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGF0ZS1waWNrZXInO1xyXG5cclxuaW1wb3J0IHsgTXlBcHAgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2hvbWUvaG9tZSc7XHJcbmltcG9ydCB7IEhlbHBQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaGVscC9oZWxwJztcclxuaW1wb3J0IHsgQ29udGFjdFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9jb250YWN0L2NvbnRhY3QnO1xyXG5pbXBvcnQgeyBQcm9ncmFtc1BhZ2UgfSBmcm9tICcuLi9wYWdlcy9wcm9ncmFtcy9wcm9ncmFtcyc7XHJcbmltcG9ydCB7IFdpZmlQYWdlIH0gZnJvbSAnLi4vcGFnZXMvd2lmaS93aWZpJztcclxuaW1wb3J0IHsgUGxheWluZ1BhZ2UgfSBmcm9tICcuLi9wYWdlcy9wbGF5aW5nL3BsYXlpbmcnO1xyXG5pbXBvcnQgeyBQcm9ncmFtUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3Byb2dyYW0vcHJvZ3JhbSc7XHJcbmltcG9ydCB7IFN1YnNjcmliZVBhZ2UgfSBmcm9tICcuLi9wYWdlcy9zdWJzY3JpYmUvc3Vic2NyaWJlJztcclxuaW1wb3J0IHsgU2xpZGVyUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3NsaWRlci9zbGlkZXInO1xyXG5pbXBvcnQgeyBGYXZvcml0ZXNQYWdlIH0gZnJvbSAnLi4vcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcyc7XHJcblxyXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXInO1xyXG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4nO1xyXG5pbXBvcnQgeyBSb3V0aW5lc1Byb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL3JvdXRpbmVzL3JvdXRpbmVzJztcclxuaW1wb3J0IHsgQVBJU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XHJcbmltcG9ydCB7IERldmljZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBNeUFwcCxcclxuICAgIEhvbWVQYWdlLFxyXG4gICAgSGVscFBhZ2UsXHJcbiAgICBDb250YWN0UGFnZSxcclxuICAgIFByb2dyYW1zUGFnZSxcclxuICAgIFdpZmlQYWdlLFxyXG4gICAgUGxheWluZ1BhZ2UsXHJcbiAgICBTdWJzY3JpYmVQYWdlLFxyXG4gICAgU2xpZGVyUGFnZSxcclxuICAgIFByb2dyYW1QYWdlLFxyXG4gICAgRmF2b3JpdGVzUGFnZVxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIEh0dHBNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUuZm9yUm9vdChNeUFwcCksXHJcbiAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBib290c3RyYXA6IFtJb25pY0FwcF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBNeUFwcCxcclxuICAgIEhvbWVQYWdlLFxyXG4gICAgSGVscFBhZ2UsXHJcbiAgICBDb250YWN0UGFnZSxcclxuICAgIFByb2dyYW1zUGFnZSxcclxuICAgIFdpZmlQYWdlLFxyXG4gICAgUGxheWluZ1BhZ2UsXHJcbiAgICBTdWJzY3JpYmVQYWdlLFxyXG4gICAgU2xpZGVyUGFnZSxcclxuICAgIFByb2dyYW1QYWdlLFxyXG4gICAgRmF2b3JpdGVzUGFnZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBTdGF0dXNCYXIsXHJcbiAgICBTcGxhc2hTY3JlZW4sXHJcbiAgICBSb3V0aW5lc1Byb3ZpZGVyLFxyXG4gICAgTmV0d29ya0ludGVyZmFjZSxcclxuICAgIE5ldHdvcmssXHJcbiAgICBEZXZpY2UsXHJcbiAgICBMb2NhbE5vdGlmaWNhdGlvbnMsXHJcbiAgICBEYXRlUGlja2VyLFxyXG4gICAgeyBwcm92aWRlOiBFcnJvckhhbmRsZXIsIHVzZUNsYXNzOiBJb25pY0Vycm9ySGFuZGxlciB9LFxyXG4gICAgQVBJU2VydmljZVByb3ZpZGVyLFxyXG4gICAgSFRUUFxyXG5cclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEhvbWVQYWdlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1lbnVDb250cm9sbGVyLCBFdmVudHMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcclxuaW1wb3J0IHsgTmF2LCBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXInO1xyXG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4nO1xyXG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XHJcblxyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2hvbWUvaG9tZSc7XHJcbmltcG9ydCB7IEhlbHBQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaGVscC9oZWxwJztcclxuaW1wb3J0IHsgQ29udGFjdFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9jb250YWN0L2NvbnRhY3QnO1xyXG5pbXBvcnQgeyBTbGlkZXJQYWdlIH0gZnJvbSAnLi4vcGFnZXMvc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCB7IEZhdm9yaXRlc1BhZ2UgfSBmcm9tICcuLi9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUFwcCB7XHJcbiAgQFZpZXdDaGlsZChOYXYpIG5hdjogTmF2O1xyXG5cclxuICByb290UGFnZTogYW55ID0gSG9tZVBhZ2U7XHJcbiAgbGFuZ19lbiA6IGJvb2xlYW47XHJcbiAgbGFuZ19lcyA6IGJvb2xlYW47XHJcbiAgbGFuZ19wdCA6IGJvb2xlYW47XHJcbiAgbGFuZ19mciA6IGJvb2xlYW47XHJcbiAgbGFuZ19nciA6IGJvb2xlYW47XHJcbiAgbGFuZ19pdCA6IGJvb2xlYW47XHJcblxyXG4gIHBhZ2VzOiBBcnJheTx7dGl0bGU6IHN0cmluZywgY29tcG9uZW50OiBhbnksIGljb246IGFueSwgaXNQdXNoOiBib29sZWFufT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sIHB1YmxpYyBzdGF0dXNCYXI6IFN0YXR1c0JhciwgcHVibGljIHNwbGFzaFNjcmVlbjogU3BsYXNoU2NyZWVuLFxyXG4gICAgcHVibGljIG1lbnVDdHJsOiBNZW51Q29udHJvbGxlciwgcHVibGljIGV2ZW50cyA6IEV2ZW50cykge1xyXG4gICAgdGhpcy5pbml0aWFsaXplQXBwKCk7XHJcblxyXG4gICAgLy8gdXNlZCBmb3IgYW4gZXhhbXBsZSBvZiBuZ0ZvciBhbmQgbmF2aWdhdGlvblxyXG4gICAgdGhpcy5wYWdlcyA9IFtcclxuICAgICAgeyB0aXRsZTogR2VybWFuVGV4dHNbJ2hvbWUtdGl0bGUnXSwgY29tcG9uZW50OiBIb21lUGFnZSwgaWNvbjogJ21lbnVpdGVtaG9tZScsIGlzUHVzaDogZmFsc2UgfSxcclxuICAgICAgeyB0aXRsZTogR2VybWFuVGV4dHNbJ2hlbHAtdGl0bGUnXSwgY29tcG9uZW50OiBIZWxwUGFnZSwgaWNvbjogJ21lbnVpdGVtaGVscCcsIGlzUHVzaDogZmFsc2UgfSxcclxuICAgICAgeyB0aXRsZTogR2VybWFuVGV4dHNbJ2NvbnRhY3QtdGl0bGUnXSwgY29tcG9uZW50OiBDb250YWN0UGFnZSwgaWNvbjogJ21lbnVpdGVtY29udGFjdCcsIGlzUHVzaDogZmFsc2UgfSxcclxuICAgICAgeyB0aXRsZTogR2VybWFuVGV4dHNbJ2Zhdi10aXRsZSddLCBjb21wb25lbnQ6IEZhdm9yaXRlc1BhZ2UsIGljb246ICdtZW51ZmF2b3JpdGVzJywgaXNQdXNoOiB0cnVlIH0sXHJcbiAgICAgIHsgdGl0bGU6IEdlcm1hblRleHRzWydzbGlkZXItdGl0bGUnXSwgY29tcG9uZW50OiBTbGlkZXJQYWdlLCBpY29uOiAnbWVudWl0ZW1pbmZvJywgaXNQdXNoOiB0cnVlfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVBcHAoKSB7XHJcbiAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIC8vIE9rYXksIHNvIHRoZSBwbGF0Zm9ybSBpcyByZWFkeSBhbmQgb3VyIHBsdWdpbnMgYXJlIGF2YWlsYWJsZS5cclxuICAgICAgLy8gSGVyZSB5b3UgY2FuIGRvIGFueSBoaWdoZXIgbGV2ZWwgbmF0aXZlIHRoaW5ncyB5b3UgbWlnaHQgbmVlZC5cclxuICAgICAgdGhpcy5zdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlblBhZ2UocGFnZSkge1xyXG4gICAgLy8gUmVzZXQgdGhlIGNvbnRlbnQgbmF2IHRvIGhhdmUganVzdCB0aGlzIHBhZ2VcclxuICAgIC8vIHdlIHdvdWxkbid0IHdhbnQgdGhlIGJhY2sgYnV0dG9uIHRvIHNob3cgaW4gdGhpcyBzY2VuYXJpb1xyXG4gICAgaWYocGFnZS5pc1B1c2gpXHJcbiAgICAgIHRoaXMubmF2LnB1c2gocGFnZS5jb21wb25lbnQpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLm5hdi5zZXRSb290KHBhZ2UuY29tcG9uZW50KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiZXhwb3J0IHZhciBDb25zdGFudHMgPSB7XG4gICAgbG9jYWxJUEFkZHJlc3MgICAgOiAnMTkyLjE2OC4wLicsXG4gIFx0bXlNYXRBcGlTdGFydFVybCAgOiAnaHR0cDovLzE5Mi4xNjguMS4zL3N0YXJ0Lmh0bScsXG4gICAgbXlNYXRBcGlJbmRleFVybCAgOiAnaHR0cDovLzE5Mi4xNjguMS4zL2luZGV4Lmh0bScsXG4gIFx0bXlNYXRBcGlVcmwgICAgICAgOiAnaHR0cDovL2hlYWxpbmdob3VzZS5saWZlL2FwaS9teW1hdC8nLCAvLydodHRwczovL3d3dy5lc2ZlcmFzb2x1Y2lvbmVzLmNvbS9hcGkvbXltYXQvJyxcbiAgICBzdG9yYWdlS2V5QnViYmxlMSA6ICdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTEnLFxuICAgIHN0b3JhZ2VLZXlCdWJibGUyIDogJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtMicsXG4gICAgc3RvcmFnZUtleUJ1YmJsZTMgOiAnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW0zJyxcbiAgICBzdG9yYWdlS2V5QnViYmxlNCA6ICdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTQnLFxuICAgIHN0b3JhZ2VLZXlTY3JvbGxUb3AgOiAnTXlNYXRfc2Nyb2xsVG9wJyxcbiAgICBzdG9yYWdlS2V5Q3VycmVudFByb2dyYW0gOiAnTXlNYXRfY3VycmVudFByb2dyYW0nLFxuICAgIGRldmljZUluZm9LZXk6ICdNeU1hdERldmljZScsXG4gICAgdGVzdF91dWlkOiAnVVVJRFRFU1QtMTIzNC01Njc4LTkxMDAtMDAwMDAwMDA0JyxcbiAgICBsYXRlc3RSb3V0aW5lc0tleTogJ2xhdGVzdFJvdXRpbmVzJyxcbiAgICBtb250aE5hbWVzOiBbXG4gICAgICAgIFwiamFudWFyeVwiLCBcImZlYnJ1YXJ5XCIsIFwibWFyY2hcIixcbiAgICAgICAgXCJhcHJpbFwiLCBcIm1heVwiLCBcImp1bmVcIiwgXCJqdWx5XCIsXG4gICAgICAgIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLFxuICAgICAgICBcIm5vdmVtYmVyXCIsIFwiZGVjZW1iZXJcIlxuICAgICAgXSxcbiAgICBzaG9ydFRpdGxlcyAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICdlYXJ0aC1lbGVtZW50LXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmaXJlLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ21ldGFsLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dhdGVyLWVsZW1lbnQtdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3dvb2QtZWxlbWVudC11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2FsbGJsYWRkZXItbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2tpZG5leS1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGVhcnQtbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhcmdlLWludGVzdGluZS1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGl2ZXItbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2x1bmctbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3BlcmljYXJkaXVtLW1lcmlkaWFuLXVwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzbWFsbC1pbnRlc3RpbmUtbWVyaWRpYW4tdXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwbGVlbi1wYW5jcmVhcy1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RvbWFjaC1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAndHJpcGxlLXdhcm1lci1tZXJpZGlhbi11cHBlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAndXJpbmFyeS1ibGFkZGVyLW1lcmlkaWFuLXVwcGVyJ1xuICAgICAgICAgICAgICAgICAgICAgIF1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvY29uc3RhbnRzLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEhUVFAgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2h0dHAnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbi8vaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy9pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcblxuLypcbiAgR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgQXV0aFNlcnZpY2VQcm92aWRlciBwcm92aWRlci5cblxuICBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uIGZvciBtb3JlIGluZm8gb24gcHJvdmlkZXJzXG4gIGFuZCBBbmd1bGFyIERJLlxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBUElTZXJ2aWNlUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBodHRwTmF0aXZlOiBIVFRQLCBwdWJsaWMgaHR0cE1vZHVsZTogSHR0cCwgLyosIHByaXZhdGUgbmV0d29yazogTmV0d29yayovKSB7XG5cbiAgfVxuICB0ZXN0X2xhbmd1YWdlKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5nZXQoQ29uc3RhbnRzLm15TWF0QXBpSW5kZXhVcmwpXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHRlc3QoKXtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cE1vZHVsZS5nZXQoQ29uc3RhbnRzLm15TWF0QXBpSW5kZXhVcmwsIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgICAgICB0aW1lb3V0KDUwMDApIC8vNSBzZWNvbmRzXG4gICAgICAgKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLnRleHQoKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2VuZEVycm9yKGRhdGEpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICAgIC8qbGV0IGNvbm5lY3RTdWJzY3JpcHRpb24gPSB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHsqL1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cbiAgICAgICAgdGhpcy5odHRwTW9kdWxlLnBvc3QoQ29uc3RhbnRzLm15TWF0QXBpVXJsICsgJ3JlcG9ydF9lcnJvci5waHAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmpzb24oKSk7XG4gICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAvKn0pOyovXG4gICAgfSk7XG4gIH1cblxuICBzZW5kRW1haWwoZGF0YSl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgICAgLypsZXQgY29ubmVjdFN1YnNjcmlwdGlvbiA9IHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4geyovXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblxuICAgICAgICB0aGlzLmh0dHBNb2R1bGUucG9zdChDb25zdGFudHMubXlNYXRBcGlVcmwgKyAnY29udGFjdF91cy5waHAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmpzb24oKSk7XG4gICAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAvKn0pOyovXG4gICAgfSk7XG4gIH1cblxuICBydW5Qb3N0KHNjcmlwdEZpbGUsIGRhdGEpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KENvbnN0YW50cy5teU1hdEFwaVVybCArIHNjcmlwdEZpbGUsIGRhdGEpXG4gICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgLyp9KTsqL1xuICAgIH0pO1xuICB9XG5cbiAgc3RhcnQocHJvZ3JhbXMpe1xuICAgIHZhciBwcm9ncmFtMSA9IHByb2dyYW1zWzBdLnNwbGl0KFwifFwiKVszXTtcbiAgICB2YXIgcHJvZ3JhbTIgPSBwcm9ncmFtc1sxXS5zcGxpdChcInxcIilbM107XG4gICAgdmFyIHByb2dyYW0zID0gcHJvZ3JhbXNbMl0uc3BsaXQoXCJ8XCIpWzNdO1xuICAgIHZhciBwcm9ncmFtNCA9IHByb2dyYW1zWzNdLnNwbGl0KFwifFwiKVszXTtcblxuICAgIC8qdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdQMScsIHByb2dyYW0xKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ1AyJywgcHJvZ3JhbTIpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnUDMnLCBwcm9ncmFtMyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdQNCcsIHByb2dyYW00KTsqL1xuICAgIHZhciBwYXJhbXMgPSBcIlAxPVwiK3Byb2dyYW0xK1wiJlAyPVwiK3Byb2dyYW0yK1wiJlAzPVwiK3Byb2dyYW0zK1wiJlA0PVwiK3Byb2dyYW00O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cE5hdGl2ZS5nZXQoQ29uc3RhbnRzLm15TWF0QXBpU3RhcnRVcmwgKyAnPycgKyBwYXJhbXMsIFwiXCIsIHt9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZQYXJhbXMsIFZpZXdDb250cm9sbGVyLCBMb2FkaW5nQ29udHJvbGxlciwgQWxlcnRDb250cm9sbGVyLCBFdmVudHMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFJvdXRpbmVzUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFQSVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBHZXJtYW5UZXh0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dlcm1hbi10ZXh0cyc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEZhdm9yaXRlc1BhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtZmF2b3JpdGVzJyxcbiAgdGVtcGxhdGVVcmw6ICdmYXZvcml0ZXMuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlc1BhZ2Uge1xuICBwcml2YXRlIHByb2dyYW0xIDogYW55O1xuICBwcml2YXRlIHByb2dyYW0yIDogYW55O1xuICBwcml2YXRlIHByb2dyYW0zIDogYW55O1xuICBwcml2YXRlIHByb2dyYW00IDogYW55O1xuICBwcml2YXRlIHJlc3BvbnNlRGF0YSA6IGFueTtcbiAgcHJpdmF0ZSByZXNwb25zZV90ZXh0IDogc3RyaW5nO1xuICBwcml2YXRlIHNhdmVSb3V0aW5lRm9ybSA6IEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSBzaG93U2F2ZUZvcm0gOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBmYXZvcml0ZXNMaXN0IDogYW55O1xuICBwcml2YXRlIHNob3dMb2FkaW5nTGlzdGluZyA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIG9mZmxpbmVfZGV2aWNlIDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHVibGljIHZpZXdDdHJsOiBWaWV3Q29udHJvbGxlciwgcHVibGljIHJvdXRpbmVzOiBSb3V0aW5lc1Byb3ZpZGVyLFxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQVBJU2VydmljZVByb3ZpZGVyLFxuICAgIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlciwgcHVibGljIGFsZXJ0Q3RybCA6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHVibGljIGV2ZW50czogRXZlbnRzKSB7XG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgdmFyIHByb2dyYW1zID0gdGhpcy5yb3V0aW5lcy5nZXRQcm9ncmFtcygpO1xuICAgIGlmKHByb2dyYW1zWzBdICYmIHByb2dyYW1zWzFdICYmIHByb2dyYW1zWzJdICYmIHByb2dyYW1zWzNdKXtcbiAgICAgIHRoaXMucHJvZ3JhbTEgPSBHZXJtYW5UZXh0c1twcm9ncmFtc1swXV07XG4gICAgICB0aGlzLnByb2dyYW0yID0gR2VybWFuVGV4dHNbcHJvZ3JhbXNbMV1dO1xuICAgICAgdGhpcy5wcm9ncmFtMyA9IEdlcm1hblRleHRzW3Byb2dyYW1zWzJdXTtcbiAgICAgIHRoaXMucHJvZ3JhbTQgPSBHZXJtYW5UZXh0c1twcm9ncmFtc1szXV07XG4gICAgfVxuICAgIHRoaXMuc2F2ZVJvdXRpbmVGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgaWYobmF2UGFyYW1zLmdldCgnc2hvd1NhdmUnKSlcbiAgICAgIHRoaXMuc2hvd1NhdmVGb3JtID0gdHJ1ZTtcbiAgICBlbHNlXG4gICAgICB0aGlzLnNob3dTYXZlRm9ybSA9IGZhbHNlO1xuXG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChkZXZpY2UpPT57XG4gICAgICAgICAgdGhpcy5sb2FkRmF2b3JpdGVMaXN0KGRldmljZS5lbWFpbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChkZXZpY2UpPT57XG4gICAgICBpZih0eXBlb2YgZGV2aWNlICE9PSAndW5kZWZpbmVkJyAmJiBkZXZpY2UgIT0gbnVsbClcbiAgICAgICAgdGhpcy5sb2FkRmF2b3JpdGVMaXN0KGRldmljZS5lbWFpbCk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkRmF2b3JpdGVMaXN0KGVtYWlsKXtcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIC8vZm9ybURhdGEuYXBwZW5kKCd1dWlkJywgdXVpZCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd0eXBlJywgJ2dldCcpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZW1haWwnLCBlbWFpbCk7XG4gICAgaWYodGhpcy5pc0RldmljZU9ubGluZSl7XG4gICAgICB0aGlzLnNob3dMb2FkaW5nTGlzdGluZyA9IHRydWU7XG4gICAgICB0aGlzLmFwaVNlcnZpY2UucnVuUG9zdCgnZmF2b3JpdGVzLnBocCcsZm9ybURhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLnNob3dMb2FkaW5nTGlzdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgdGhpcy5mYXZvcml0ZXNMaXN0ID0gdGhpcy5yZXNwb25zZURhdGEuZmF2b3JpdGVzO1xuXG4gICAgICB9LChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZ0xpc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRpc21pc3MoZXZlbnQgOiBFdmVudCkge1xuICAgIGlmKGV2ZW50KXtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy52aWV3Q3RybC5kaXNtaXNzKCk7XG4gIH1cblxuICBkZWxldGUoZXZlbnQ6IEV2ZW50LCBpZCl7XG4gICAgaWYoZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgLy9mb3JtRGF0YS5hcHBlbmQoJ3V1aWQnLCB1dWlkKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCAnZGVsJyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIGlkKTtcblxuICAgIHRoaXMuYXBpU2VydmljZS5ydW5Qb3N0KCdmYXZvcml0ZXMucGhwJyxmb3JtRGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy5kZXZpY2VJbmZvS2V5KS50aGVuKChkZXZpY2UpPT57XG4gICAgICAgIHRoaXMubG9hZEZhdm9yaXRlTGlzdChkZXZpY2UuZW1haWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93UHJvZ3JhbShpZCwgbmFtZSwgcHJvZ3JhbTEsIHByb2dyYW0yLCBwcm9ncmFtMywgcHJvZ3JhbTQpe1xuICAgIGxldCBwcm9ncmFtXzEgPSAocHJvZ3JhbTEgPT0gJ0UtU01PRycgPyBwcm9ncmFtMSA6IEdlcm1hblRleHRzW3Byb2dyYW0xXSk7XG4gICAgbGV0IHByb2dyYW1fMiA9IChwcm9ncmFtMiA9PSAnRS1TTU9HJyA/IHByb2dyYW0yIDogR2VybWFuVGV4dHNbcHJvZ3JhbTJdKTtcbiAgICBsZXQgcHJvZ3JhbV8zID0gKHByb2dyYW0zID09ICdFLVNNT0cnID8gcHJvZ3JhbTMgOiBHZXJtYW5UZXh0c1twcm9ncmFtM10pO1xuICAgIGxldCBwcm9ncmFtXzQgPSAocHJvZ3JhbTQgPT0gJ0UtU01PRycgPyBwcm9ncmFtNCA6IEdlcm1hblRleHRzW3Byb2dyYW00XSk7XG4gICAgbGV0IGFsZXJ0ID0gdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgIHRpdGxlOiAnUnV0aW5hIC0gJyArIG5hbWUsXG4gICAgICBtZXNzYWdlOiBwcm9ncmFtXzEgKyAnXFxuJyArIHByb2dyYW1fMiArICdcXG4nICsgcHJvZ3JhbV8zICsgJ1xcbicgKyBwcm9ncmFtXzQsXG4gICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogR2VybWFuVGV4dHNbJ2Nob29zZSddLFxuICAgICAgICAgICAgICAgICAgaGFuZGxlcjogZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ2FkZFByb2dyYW1zRXZlbnQnLCB7IG5hbWUgOiBwcm9ncmFtMSB9LCB7IG5hbWUgOiBwcm9ncmFtMiB9LCB7IG5hbWUgOiBwcm9ncmFtMyB9LCB7IG5hbWUgOiBwcm9ncmFtNCB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICB9KTtcbiAgICBhbGVydC5wcmVzZW50KCk7XG4gICAgLy8gTW9zdHJhciB0ZXh0byBlbiBsYWJlbCBkZWJham8gZGVsIGJvdG9uXG5cbiAgfVxuXG4gIGF0dGVtcHRTYXZlRmF2b3JpdGUoKXtcbiAgICB0aGlzLnJlc3BvbnNlX3RleHQgPSAnJztcblxuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLmRldmljZUluZm9LZXkpLnRoZW4oKGRldmljZSk9PntcblxuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBsZXQgcHJvZ3JhbXMgPSB0aGlzLnJvdXRpbmVzLmdldFByb2dyYW1zKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCAnbmV3Jyk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgZGV2aWNlLmVtYWlsKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMuc2F2ZVJvdXRpbmVGb3JtLnZhbHVlLm5hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9ncmFtMScsIHByb2dyYW1zWzBdKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZ3JhbTInLCBwcm9ncmFtc1sxXSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2dyYW0zJywgcHJvZ3JhbXNbMl0pO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9ncmFtNCcsIHByb2dyYW1zWzNdKTtcblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnJ1blBvc3QoJ2Zhdm9yaXRlcy5waHAnLGZvcm1EYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgIGlmKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSAnb2snKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NhdmVGb3JtID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlc0xpc3QgPSB0aGlzLnJlc3BvbnNlRGF0YS5mYXZvcml0ZXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vZmZsaW5lX2RhdGEnO1xuaW1wb3J0IHsgR2VybWFuVGV4dHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nZXJtYW4tdGV4dHMnO1xuXG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBSb3V0aW5lc1Byb3ZpZGVyIHByb3ZpZGVyLlxuXG4gIFNlZSBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24gZm9yIG1vcmUgaW5mbyBvbiBwcm92aWRlcnNcbiAgYW5kIEFuZ3VsYXIgREkuXG4qL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRpbmVzUHJvdmlkZXIge1xuICBwdWJsaWMgcHJvZ3JhbTEgOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmFtMiA6IHN0cmluZztcbiAgcHVibGljIHByb2dyYW0zIDogc3RyaW5nO1xuICBwdWJsaWMgcHJvZ3JhbTQgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0b3JhZ2U6IFN0b3JhZ2UpIHtcbiAgICBjb25zb2xlLmxvZygnSGVsbG8gUm91dGluZXNQcm92aWRlciBQcm92aWRlcicpO1xuICB9XG5cbiAgcHVibGljIHNldFByb2dyYW0oaW5kZXgscHJvZyl7XG4gICAgc3dpdGNoIChpbmRleCl7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHRoaXMucHJvZ3JhbTEgPSBwcm9nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5wcm9ncmFtMiA9IHByb2c7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLnByb2dyYW0zID0gcHJvZztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHRoaXMucHJvZ3JhbTQgPSBwcm9nO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYW5Qcm9ncmFtcygpe1xuICAgIHRoaXMucHJvZ3JhbTEgPSBudWxsO1xuICAgIHRoaXMucHJvZ3JhbTIgPSBudWxsO1xuICAgIHRoaXMucHJvZ3JhbTMgPSBudWxsO1xuICAgIHRoaXMucHJvZ3JhbTQgPSBudWxsO1xuICB9XG5cbiAgcHVibGljIHNldFByb2dyYW1zKHByb2cxLCBwcm9nMiwgcHJvZzMsIHByb2c0KXtcbiAgICB0aGlzLnByb2dyYW0xID0gcHJvZzE7XG4gICAgdGhpcy5wcm9ncmFtMiA9IHByb2cyO1xuICAgIHRoaXMucHJvZ3JhbTMgPSBwcm9nMztcbiAgICB0aGlzLnByb2dyYW00ID0gcHJvZzQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJvZ3JhbXMoKXtcbiAgICByZXR1cm4gWyB0aGlzLnByb2dyYW0xLCB0aGlzLnByb2dyYW0yLCB0aGlzLnByb2dyYW0zLCB0aGlzLnByb2dyYW00IF07XG4gIH1cbiAgcHVibGljIGFzeW5jIGdldEtleShrZXk6c3RyaW5nKXtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmdldChrZXkpO1xuICB9XG5cbiAgcHVibGljIGFkZFByb2dyYW1zKHJvdXRpbmVOYW1lLCBwcm9ncmFtMSwgcHJvZ3JhbTIsIHByb2dyYW0zLCBwcm9ncmFtNCl7XG4gICAgdmFyIG9ialByb2dyYW0xID0gdGhpcy5nZXRQcm9ncmFtKHByb2dyYW0xKTtcbiAgICB2YXIgb2JqUHJvZ3JhbTIgPSB0aGlzLmdldFByb2dyYW0ocHJvZ3JhbTIpO1xuICAgIHZhciBvYmpQcm9ncmFtMyA9IHRoaXMuZ2V0UHJvZ3JhbShwcm9ncmFtMyk7XG4gICAgdmFyIG9ialByb2dyYW00ID0gdGhpcy5nZXRQcm9ncmFtKHByb2dyYW00KTtcbiAgICB0aGlzLmluc2VydFByZVNldFByb2dyYW0ocm91dGluZU5hbWUsIG9ialByb2dyYW0xLCBvYmpQcm9ncmFtMiwgb2JqUHJvZ3JhbTMsIG9ialByb2dyYW00KTtcblxuICAgIHRoaXMuc2V0UHJvZ3JhbXMob2JqUHJvZ3JhbTEubmFtZSwgb2JqUHJvZ3JhbTIubmFtZSwgb2JqUHJvZ3JhbTMubmFtZSwgb2JqUHJvZ3JhbTQubmFtZSk7XG4gICAgcmV0dXJuIFtvYmpQcm9ncmFtMS5uYW1lLCBvYmpQcm9ncmFtMi5uYW1lLCBvYmpQcm9ncmFtMy5uYW1lLCBvYmpQcm9ncmFtNC5uYW1lXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcm9ncmFtKG5hbWUpe1xuICAgICAgZm9yKHZhciBpID0gMDsgIGkgPCBEYXRhLlByb2dyYW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHByb2dyYW0gPSBEYXRhLlByb2dyYW1zW2ldO1xuICAgICAgICBpZihwcm9ncmFtLmFwaU5hbWUgPT0gbmFtZSB8fCBwcm9ncmFtLm5hbWUgPT0gbmFtZS5uYW1lIHx8IHByb2dyYW0ubmFtZSA9PSBuYW1lKXtcbiAgICAgICAgICBsZXQgdGV4dCA9IEdlcm1hblRleHRzW3Byb2dyYW0ubmFtZV07XG4gICAgICAgICAgcHJvZ3JhbS50ZXh0TmFtZSA9IHRleHQgPyB0ZXh0IDogcHJvZ3JhbS5uYW1lO1xuICAgICAgICAgIHJldHVybiBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBwdWJsaWMgaW5zZXJ0UHJlU2V0UHJvZ3JhbSAocm91dGluZU5hbWUsIHByb2dyYW0xLCBwcm9ncmFtMiwgcHJvZ3JhbTMsIHByb2dyYW00KSB7XG5cbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnTXlNYXRfcm91dGluZU5hbWUnLCByb3V0aW5lTmFtZSk7XG4gICAgICAgIHRoaXMuYWRkUHJvZ3JhbVRvUm91dGluZSgxLCBcIlwiLCBwcm9ncmFtMS5uYW1lLCBwcm9ncmFtMS5ydW5uaW5ndGltZSwgcHJvZ3JhbTEuYXBpTmFtZSk7XG5cbiAgICAgICAgdGhpcy5hZGRQcm9ncmFtVG9Sb3V0aW5lKDIsIFwiXCIsIHByb2dyYW0yLm5hbWUsIHByb2dyYW0yLnJ1bm5pbmd0aW1lLCBwcm9ncmFtMi5hcGlOYW1lKTtcblxuICAgICAgICB0aGlzLmFkZFByb2dyYW1Ub1JvdXRpbmUoMywgXCJcIiwgcHJvZ3JhbTMubmFtZSwgcHJvZ3JhbTMucnVubmluZ3RpbWUsIHByb2dyYW0zLmFwaU5hbWUpO1xuXG4gICAgICAgIHRoaXMuYWRkUHJvZ3JhbVRvUm91dGluZSg0LCBcIlwiLCBwcm9ncmFtNC5uYW1lLCBwcm9ncmFtNC5ydW5uaW5ndGltZSwgcHJvZ3JhbTQuYXBpTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgYWRkUHJvZ3JhbVRvUm91dGluZSAoY3VycmVudEJ1YmJsZVNsb3QsIGlkUHJvZ3JhbSwgcHJvZ3JhbU5hbWUsIHByb2dyYW1SdW5uaW5nVGltZSwgYXBpTmFtZSkge1xuICAgICAgICBpZiAoY3VycmVudEJ1YmJsZVNsb3QgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW0xJywgaWRQcm9ncmFtICsgXCJ8XCIgKyBwcm9ncmFtTmFtZSArIFwifFwiICsgcHJvZ3JhbVJ1bm5pbmdUaW1lICsgXCJ8XCIgKyBhcGlOYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50QnViYmxlU2xvdCA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdNeU1hdF9idWJibGVSb3V0aW5lUHJvZ3JhbTInLCBpZFByb2dyYW0gKyBcInxcIiArIHByb2dyYW1OYW1lICsgXCJ8XCIgKyBwcm9ncmFtUnVubmluZ1RpbWUgKyBcInxcIiArIGFwaU5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRCdWJibGVTbG90ID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoJ015TWF0X2J1YmJsZVJvdXRpbmVQcm9ncmFtMycsIGlkUHJvZ3JhbSArIFwifFwiICsgcHJvZ3JhbU5hbWUgKyBcInxcIiArIHByb2dyYW1SdW5uaW5nVGltZSArIFwifFwiICsgYXBpTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEJ1YmJsZVNsb3QgPT0gNCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCgnTXlNYXRfYnViYmxlUm91dGluZVByb2dyYW00JywgaWRQcm9ncmFtICsgXCJ8XCIgKyBwcm9ncmFtTmFtZSArIFwifFwiICsgcHJvZ3JhbVJ1bm5pbmdUaW1lICsgXCJ8XCIgKyBhcGlOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm92aWRlcnMvcm91dGluZXMvcm91dGluZXMudHMiXSwic291cmNlUm9vdCI6IiJ9