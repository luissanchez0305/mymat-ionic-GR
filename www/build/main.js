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
//# sourceMappingURL=main.js.map