webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chatPage_chatPage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.openChat = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__chatPage_chatPage__["a" /* ChatPage */]);
    };
    HomePage.prototype.openMap = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home',template:/*ion-inline-start:"/Users/bkongara/Desktop/Hackathon2018/IonicWeb/Hackathon2018/src/pages/Home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello Ionic</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>Welcome to Hackathon !</h3>\n\n  <p>\n    Touch less claims .\n  </p>\n  <p>\n    Block Chain and ChatBot\n  </p>\n  <p>\n    <button ion-button color="primary" (click) ="openChat($event)">Start Chat</button>\n    <button ion-button color="primary" (click) ="openMap($event)">Map</button>\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/bkongara/Desktop/Hackathon2018/IonicWeb/Hackathon2018/src/pages/Home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=Home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chatPage_chatPage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_elasticTextarea__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_chatBubble_chatBubble__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Home_Home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_map__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_Home_Home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_chatPage_chatPage__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_5__components_elasticTextarea__["a" /* ElasticTextarea */],
                __WEBPACK_IMPORTED_MODULE_6__components_chatBubble_chatBubble__["a" /* ChatBubble */],
                __WEBPACK_IMPORTED_MODULE_8__pages_map_map__["a" /* MapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_Home_Home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_chatPage_chatPage__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_5__components_elasticTextarea__["a" /* ElasticTextarea */],
                __WEBPACK_IMPORTED_MODULE_6__components_chatBubble_chatBubble__["a" /* ChatBubble */],
                __WEBPACK_IMPORTED_MODULE_8__pages_map_map__["a" /* MapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_Home_Home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chatPage_chatPage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_Home_Home__["a" /* HomePage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hello Hackathon', component: __WEBPACK_IMPORTED_MODULE_2__pages_Home_Home__["a" /* HomePage */] },
            { title: 'Chat Bot', component: __WEBPACK_IMPORTED_MODULE_5__pages_chatPage_chatPage__["a" /* ChatPage */] },
            { title: 'Map', component: __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bkongara/Desktop/Hackathon2018/IonicWeb/Hackathon2018/src/app/app.html"*/'<!-- <ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu> -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/bkongara/Desktop/Hackathon2018/IonicWeb/Hackathon2018/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticTextarea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElasticTextarea = /** @class */ (function () {
    function ElasticTextarea() {
        this.content = "";
        this.lineHeight = "22px";
    }
    ElasticTextarea.prototype.ngAfterViewInit = function () {
        this.txtArea = this.ionTxtArea._elementRef.nativeElement.children[0];
        this.txtArea.style.height = this.lineHeight + "px";
    };
    ElasticTextarea.prototype.onChange = function (newValue) {
        this.txtArea.style.height = this.lineHeight + "px";
        this.txtArea.style.height = this.txtArea.scrollHeight + "px";
    };
    ElasticTextarea.prototype.clearInput = function () {
        this.content = "";
        this.txtArea.style.height = this.lineHeight + "px";
    };
    ElasticTextarea = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'elastic-textarea',
            inputs: ['placeholder', 'lineHeight'],
            template: "\n  <ion-textarea #ionTxtArea\n    placeholder='{{placeholder}}'\n    [(ngModel)]=\"content\"\n    (ngModelChange)='onChange($event)'></ion-textarea>\n  ",
            queries: {
                ionTxtArea: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */]('ionTxtArea')
            }
        }),
        __metadata("design:paramtypes", [])
    ], ElasticTextarea);
    return ElasticTextarea;
}());

//# sourceMappingURL=elasticTextarea.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBubble; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatBubble = /** @class */ (function () {
    function ChatBubble() {
        this.msg = {
            content: 'Am I dreaming?',
            position: 'left',
            time: '12/3/2016',
            senderName: 'Gregory'
        };
    }
    ChatBubble = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'chat-bubble',
            inputs: ['msg: message'],
            template: "\n  <div class=\"chatBubble\">\n    <div *ngIf=\"msg.type === 'image'\">\n      <img src=\"{{msg.content}}\" alt=\"\"/>\n    </div>\n    <div *ngIf=\"msg.type === 'message'\">\n      <img class=\"profile-pic {{msg.position}}\" src=\"{{msg.img}}\">\n      <div class=\"chat-bubble {{msg.position}}\">\n        <div class=\"message\">{{msg.content}}</div>\n        <div class=\"message-detail\">\n            <span style=\"font-weight:bold;\">{{msg.senderName}} </span>,\n            <span>{{msg.time}}</span>\n        </div>\n      </div>\n    <div>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ChatBubble);
    return ChatBubble;
}());

//# sourceMappingURL=chatBubble.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// @IonicPage({
// })
var ChatPage = /** @class */ (function () {
    function ChatPage(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
        this.contactName = "Bharath";
        this.messages = [
            {
                img: '../assets/imgs/profile.jpeg',
                position: 'left',
                content: 'Hello from the other side.',
                senderName: 'Gregory',
                time: '28-Jun-2016 21:53',
                type: 'message'
            },
            {
                img: '../assets/imgs/bot-icon.png',
                position: 'right',
                content: 'Hi! How are?',
                senderName: 'Me',
                time: '28-Jun-2016 21:55',
                type: 'message'
            },
            {
                img: '../assets/imgs/profile.jpeg',
                position: 'left',
                content: "This is some really long test that I'm writing here. Let's see how it wraps.",
                senderName: 'Gregory',
                time: '28-Jun-2016 21:57',
                type: 'message'
            }
        ];
    }
    Object.defineProperty(ChatPage, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]], [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]]];
        },
        enumerable: true,
        configurable: true
    });
    ChatPage.prototype.sendMessage = function () {
        var _this = this;
        this.messages.push({
            img: '../assets/imgs/profile.jpg',
            position: 'right',
            content: this.txtChat.content,
            senderName: 'Me',
            time: new Date().toLocaleTimeString(),
            type: 'message'
        });
        console.log(this.txtChat.content);
        this.txtChat.clearInput();
        //without this timout the list scrolls
        //to the second to last element.
        //It's some kind of race condition
        setTimeout(function () {
            _this.content.scrollToBottom(300); //300ms animation speed
        });
    };
    ChatPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.messages.push({
                img: 'build/img/hugh.png',
                position: 'right',
                content: imageData,
                senderName: 'Me',
                time: new Date().toLocaleTimeString(),
                type: 'image'
            });
            console.log('asdf', imageData);
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    ChatPage.prototype.getPicture = function () {
        this.fileInput.nativeElement.click();
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bkongara/Desktop/Hackathon2018/IonicWeb/Hackathon2018/src/pages/chatPage/chatPage.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n          Chat Bot\n        </ion-title>\n      </ion-navbar>\n</ion-header>\n\n<ion-content #content padding class="chatPage">\n\n  <ion-list no-lines>\n    <ion-item *ngFor="let msg of messages" >\n      <chat-bubble [message]="msg"></chat-bubble>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class="chatPageFooter">\n  <ion-toolbar>\n    <ion-item>\n      <ion-label style="margin:0px;"></ion-label>\n      <div item-content style="width:90%;">\n          <elastic-textarea #txtChat placeholder="Type to compose" lineHeight="22"></elastic-textarea>\n      </div>\n    </ion-item>\n    <ion-buttons left style="width: 50px;">\n        <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n        <button ion-button icon-only (click)="getPicture()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button style="min-width:45px;" (click)="sendMessage()">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/bkongara/Desktop/Hackathon2018/IonicWeb/Hackathon2018/src/pages/chatPage/chatPage.html"*/,
            //directives: [ChatBubble, ElasticTextarea],
            queries: {
                txtChat: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */]('txtChat'),
                content: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */]('content'),
                fileInput: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */]('fileInput')
            }
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chatPage.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapPage = /** @class */ (function () {
    function MapPage() {
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.initializeMap();
    };
    MapPage.prototype.initializeMap = function () {
        var _this = this;
        var locationOptions = { timeout: 20000, enableHighAccuracy: true };
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        navigator.geolocation.getCurrentPosition(function (position) {
            var options = {
                center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(document.getElementById("map_canvas"), options);
        }, function (error) {
            console.log(error);
        }, locationOptions);
    };
    MapPage.prototype.calculateAndDisplayRoute = function (directionsService, directionsDisplay) {
        // var waypts = [];
        // var checkboxArray = document.getElementById('waypoints');
        // for (var i = 0; i < checkboxArray.length; i++) {
        //   if (checkboxArray.options[i].selected) {
        //     waypts.push({
        //       location: checkboxArray[i].value,
        //       stopover: true
        //     });
        //   }
        // }
        // directionsService.route({
        //   origin: document.getElementById('start').value,
        //   destination: document.getElementById('end').value,
        //   waypoints: waypts,
        //   optimizeWaypoints: true,
        //   travelMode: 'DRIVING'
        // }, function(response, status) {
        //   if (status === 'OK') {
        //     directionsDisplay.setDirections(response);
        //     var route = response.routes[0];
        //     var summaryPanel = document.getElementById('directions-panel');
        //     summaryPanel.innerHTML = '';
        //     // For each route, display summary information.
        //     for (var i = 0; i < route.legs.length; i++) {
        //       var routeSegment = i + 1;
        //       summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
        //           '</b><br>';
        //       summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        //       summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        //       summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
        //     }
        //   } else {
        //     window.alert('Directions request failed due to ' + status);
        //   }
        // });
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map',template:/*ion-inline-start:"/Users/bkongara/Desktop/Hackathon2018/IonicWeb/Hackathon2018/src/pages/map/map.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n        Asset Tracking\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n       \n<ion-content>\n    <div id="map_canvas" style="height:100%"></div>\n</ion-content>'/*ion-inline-end:"/Users/bkongara/Desktop/Hackathon2018/IonicWeb/Hackathon2018/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map