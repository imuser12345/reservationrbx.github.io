webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"about\" id=\"about\">\n    <div class=\"container\">\n      <h3 class=\"title\" id=\"page\">Welcome to our page</h3>\n      <!-- <div class=\"col-md-4 about-left wow fadeInLeft animated\" data-wow-delay=\".5s\" style=\"visibility: visible; -webkit-animation-delay: .5s;\">\n        <img src=\"images/img2.jpg\" alt=\"\">\n      </div> -->\n      <div class=\"col-md-8 about-right wow fadeInRight animated\" data-wow-delay=\".5s\" style=\"visibility: visible; -webkit-animation-delay: .5s;\">\n        <h4>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin established fact that a reader will be distracted Lorem Ipsum when looking at its layout.</h4>\n        <p>Lorem Ipsum was popularised in the 1960s with the release of Letraset sheet content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less normal distribution is that it has a more of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>\n      </div>\n      <div class=\"clearfix\"> </div>\n    </div>\t\n  </div>\n  <!--//about-->\n  \n</div>\n\n<style>\n  #page{\n    text-align: left;\n  }\n</style>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\n    color: red;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"> \n    <!-- <a class=\"navbar-brand\" href=\"#\">Home</a> -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav active\">\n        \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"features\">Features</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"pricing\">Pricing</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"posts\">Posts</a>\n          </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <img alt=\"Brand\" width=\"350px\" height=\"90px\" class=\"img-responsive\" src=\"assets/img/booking.jpg\">&nbsp;&nbsp;&nbsp;\n          <img alt=\"Brand\" width=\"350px\" height=\"90px\" class=\"img-responsive\" src=\"assets/img/images (3).jpeg\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n         \n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"features\"><img alt=\"Brand\" width=\"100px\" height=\"30px\" class=\"img-responsive\" src=\"assets/img/images (8).jpeg  \">\n              </a>\n            </li>\n        </ul>\n    </div>\n  </nav>\n  <!-- Add the jumbotron  -->\n  <div class=\"jumbotron\">\n      <!-- <img alt=\"Brand\" width=\"1150px\" height=\"300px\" class=\"img-responsive\" src=\"assets/img/aa.png\">&nbsp;&nbsp;&nbsp; -->\n      \n      <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>\n          </ol>\n          <div class=\"carousel-inner\">\n              <div class=\"carousel-item\">\n                  <img class=\"d-block w-100\" width=\"1150px\" height=\"300px\" src=\"assets/img/7711c13.jpg\" alt=\"Second slide\">\n                </div>\n            <div class=\"carousel-item active\">\n              <img class=\"d-block w-100\" width=\"1150px\" height=\"300px\" src=\"assets/img/aa.png\" alt=\"First slide\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block w-100\" width=\"1150px\" height=\"300px\" src=\"assets/img/548x278-Bus-14072014.jpg\" alt=\"Second slide\">\n            </div>\n            \n            <div class=\"carousel-item\">\n              <img class=\"d-block w-100\" width=\"1150px\" height=\"300px\" src=\"assets/img/busimg.jpg\" alt=\"Third slide\">\n            </div>\n          </div> \n          <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n\n    </div>\n\n <div class=\"container\">\n   <div class=\"row\">\n     <div class=\"col-md-8\">\n        <router-outlet></router-outlet>\n        \n        <!-- <app-pricing></app-pricing> -->\n     </div>\n    <div class=\"col-md-4\">\n        <app-sidebar></app-sidebar>\n        \n     </div>\n </div>  \n <br />\n <!-- <div class=\"container-fluid\">\n   <div class=\"row\">\n     <div class=\"col-md-12\">\n       \n     </div>\n   </div>\n </div> -->\n\n<!-- Just an image -->\n<div class=\"container\" id=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n  \n      <div class=\"jumbotron\" id=\"jmb\">\n        <p id=\"img\"> <img alt=\"Brand\" width=\"940px\" height=\"200px\" class=\"img-responsive\" src=\"assets/img/best_offer.jpeg\"></p>\n       \n          \n             <nav class=\"navbar navbar-light bg-light\" class=\"col-md-12\">\n               <a class=\"navbar-brand\" href=\"#\">\n                  \n               <!-- <h3>Footer of the website</h3> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  -->\n                <!-- <a href=\"www.google.com\">Google</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"www.facebook.com\">Facebook</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"www.youtube.com\">Youtube</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <a href=\"www.github.com\">github</a> -->\n               </a>\n               <div class=\"elementor-widget-container\">\n                   <div class=\"elementor-text-editor elementor-clearfix\"><div class=\"col span_12\"><p style=\"text-align: center;\">Copyright 2018 Distribusion. All rights reserved.</p></div></div>\n                 </div>\n             </nav>\n       \n         \n       \n       </div>\n\n    </div>\n  </div>\n  \n\n</div>\n\n  <style>\n   h3{\n     text-align: right;\n   }\n   #jmb{\n     align-self: left ;\n     width: 1000px;\n     height: 300px;\n     margin-bottom: 0px;\n  height: 350px;\n  color: white;\n  text-shadow: black 0.1em 0.3em 0.3em;\n  background:honeydew;\n  }\n#img{\n  align-items: flex-end;\n}\n  </style>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__features_features_component__ = __webpack_require__("./src/app/features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pricing_pricing_component__ = __webpack_require__("./src/app/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__posts_posts_component__ = __webpack_require__("./src/app/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: "features",
        component: __WEBPACK_IMPORTED_MODULE_5__features_features_component__["a" /* FeaturesComponent */]
    },
    {
        path: "pricing",
        component: __WEBPACK_IMPORTED_MODULE_6__pricing_pricing_component__["a" /* PricingComponent */]
    },
    {
        path: "contact",
        component: __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: "gallery",
        component: __WEBPACK_IMPORTED_MODULE_11__gallery_gallery_component__["a" /* GalleryComponent */]
    },
    {
        path: "about",
        component: __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: "posts",
        component: __WEBPACK_IMPORTED_MODULE_8__posts_posts_component__["a" /* PostsComponent */]
    },
    {
        path: "posts/:id",
        component: __WEBPACK_IMPORTED_MODULE_9__post_post_component__["a" /* PostComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__features_features_component__["a" /* FeaturesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_10__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-8\">\n     \n  <!--contact-->\n<div id=\"contact\" class=\"contact-form pt-section\">\n  <div class=\"container\">\n    \n    <h3 class=\"title\">Contact Us</h3>\t\n    <div class=\"col-md-7 contact-right wow fadeInLeft animated\" data-wow-delay=\".5s\" style=\"visibility: visible; -webkit-animation-delay: .5s;\">\t\t\t\t\n      <form>\n        <textarea onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Message...';}\" required=\"\">Message...</textarea>\n        <input type=\"submit\" value=\"Submit\" >\n      </form>\n    </div>\n    <div class=\"col-md-5 contact-left wow fadeInRight animated\" data-wow-delay=\".5s\" style=\"visibility: visible; -webkit-animation-delay: .5s;\">\n      <p>\"Lorem Ipsum\"is the common name dummy text often used in the design, printing, and type setting industriescommon name dummy text often used in the design, printing, and type setting industries. \"</p>\n      <ul>\n        <li><span></span>756 globel Place, Newyork.</li>\n\n        <li><span class=\"mail\"></span><a href=\"mailto:example@mail.com\">mail@example.com</a></li>\n        <li><span class=\"ph-no\"></span>+123 2222 222</li>\n      </ul>\n    </div>\t\t\t\t\t\t\n    <div class=\"clearfix\"> </div>\n  </div>\t\t\t\n</div>\n<!--//contact-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/features/features.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/features.component.html":
/***/ (function(module, exports) {

module.exports = "\n        <div class=\"accordion\" id=\"accordion\">\n            <div class=\"card\">\n              <div class=\"card-header\" id=\"headingOne\">\n                <h5 class=\"mb-0\">\n                  <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                    <img alt=\"Brand\" width=\"350px\" height=\"50px\" class=\"img-responsive\" src=\"assets/img/images (4).jpeg\">\n\n                  </button>\n                </h5>\n              </div>\n          \n              <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                    Volvobusyatra provides online Volvo bus booking facility for most of the cities of India. Now just plan your holiday and click on your system and we provide you best packages. Volvobusyarta is a leading coach and bus booking service provider.\n                    Our professional staff having many years experience with in the industry and our aim is to make your group travel arrangements not only practical but cost effective. We can match any vehicles to your requirements, be it schools, private hire or corporate hire.                </div>\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\" id=\"headingTwo\">\n                <h5 class=\"mb-0\">\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                    <img alt=\"Brand\" width=\"350px\" height=\"50px\" class=\"img-responsive\" src=\"assets/img/Information-prev-300x159.jpg\">\n\n                  </button>\n                </h5>\n              </div>\n              <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                    Here is the example of ECOLINES bus ticket. Carefully examine its content as there is important information about your journey. Printing out ticket unassisted from website or receiving your ticket in agency, make sure it is printed out in that language which you understand better. At the moment ticket is available in 8 languages RU, LV, EN, DE, PL, EST, LT, and BG. If you have any questions do not hesitate to contact ECOLINES offices.                </div>\n              </div>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\" id=\"headingThree\">\n                <h5 class=\"mb-0\">\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                    <img alt=\"Brand\" width=\"350px\" height=\"50px\" class=\"img-responsive\" src=\"assets/img/images (1).png\">\n\n                  </button>\n                </h5>\n              </div>\n              <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n                <div class=\"card-body\">\n                    You get an excellent gallery that can be used to post images of the shows, sporting events and concerts that you're selling tickets to. Making these images shareable, using the social options feature, will allow your customers to share them with ease. Every share has the potential to generate publicity and sales.\n\n                    We provide you with free photos and sample content; we offer you easy to use background panels that make managing your content simple for you.\n                    \n                    We also provide lifetime access to our 24/7 support service, free with every template purchase.\n                    \n                    Begin creating a website today and help your business to thrive.                </div>\n              </div>\n            </div>\n          </div>\n    "

/***/ }),

/***/ "./src/app/features/features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-features',
            template: __webpack_require__("./src/app/features/features.component.html"),
            styles: [__webpack_require__("./src/app/features/features.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--portfolio-->\n<div class=\"portfolio\" id=\"gallery\">\t\t\n  <div class=\"container\">\n    <h3 class=\"title\">Our Gallery</h3>\n    <div class=\"portfolio-grids\">\t\t\t\t\n      <div class=\"col-md-4 port-grids view view-fourth\">\n        <a class=\"example-image-link\" href=\"assets/img/twilight_gold_515850.jpg\" data-lightbox=\"example-set\" data-title=\"\">\n          <img src=\"assets/img/twilight_gold_515850.jpg\" class=\"img-responsive\" alt=\"\"/>\n          <div class=\"mask\">\n            <p>A wonderful serenity has taken possession of my which I enjoy with my whole heart.</p>\n          </div>\n        </a>\n      </div>\n      <div class=\"col-md-4 port-grids view view-fourth\">\n        <a class=\"example-image-link\" href=\"assets/img/images (2).jpeg\" data-lightbox=\"example-set\" data-title=\"\">\n          <img src=\"assets/img/images (2).jpeg\" class=\"img-responsive\" alt=\"\"/>\n          <div class=\"mask\">\n            <p>A wonderful serenity has taken possession of my which I enjoy with my whole heart.</p>\n          </div>\n        </a>\n      </div>\n      <div class=\"col-md-4 port-grids view view-fourth\">\n        <a class=\"example-image-link\" href=\"assets/img/online-booking-1-638.jpg\" data-lightbox=\"example-set\" data-title=\"\">\n          <img src=\"assets/img/online-booking-1-638.jpg\" class=\"img-responsive\" alt=\"\"/>\n          <div class=\"mask\">\n            <p>A wonderful serenity has taken possession of my which I enjoy with my whole heart.</p>\n          </div>\n        </a>\n      </div>\n      <div class=\"col-md-4 port-grids view view-fourth\">\n        <a class=\"example-image-link\" href=\"assets/img/download (2).jpeg\" data-lightbox=\"example-set\" data-title=\"\">\n          <img src=\"assets/img/download (2).jpeg\" class=\"img-responsive\" alt=\"\"/>\n          <div class=\"mask\">\n            <p>A wonderful serenity has taken possession of my which I enjoy with my whole heart.</p>\n          </div>\n        </a>\n      </div>\n      <div class=\"col-md-4 port-grids view view-fourth\">\n        <a class=\"example-image-link\" href=\"assets/img/download (3).jpeg\" data-lightbox=\"example-set\" data-title=\"\">\n          <img src=\"assets/img/download (3).jpeg\" class=\"img-responsive\" alt=\"\"/>\n          <div class=\"mask\">\n            <p>A wonderful serenity has taken possession of my which I enjoy with my whole heart.</p>\n          </div>\n        </a>\n      </div>\n      <div class=\"col-md-4 port-grids view view-fourth\">\n        <a class=\"example-image-link\" href=\"assets/img/images (9).jpeg\" data-lightbox=\"example-set\" data-title=\"\">\n          <img src=\"assets/img/images (9).jpeg\" class=\"img-responsive\" alt=\"\"/>\n          <div class=\"mask\">\n            <p>A wonderful serenity has taken possession of my which I enjoy with my whole heart.</p>\n          </div>\n        </a>\n      </div>\n      <div class=\"col-md-4 port-grids view view-fourth\">\n        <a class=\"example-image-link\" href=\"assets/img/images (11).jpeg\" data-lightbox=\"example-set\" data-title=\"\">\n          <img src=\"assets/img/images (11).jpeg\" class=\"img-responsive\" alt=\"\"/>\n          <div class=\"mask\">\n            <p>A wonderful serenity has taken possession of my which I enjoy with my whole heart.</p>\n          </div>\n        </a>\n      </div>\n      \n      <div class=\"col-md-4 port-grids view view-fourth\">\n        <a class=\"example-image-link\" href=\"assets/img/images (12).jpeg\" data-lightbox=\"example-set\" data-title=\"\">\n          <img src=\"assets/img/images (12).jpeg\" class=\"img-responsive\" alt=\"\"/>\n          <div class=\"mask\">\n            <p>A wonderful serenity has taken possession of my which I enjoy with my whole heart.</p>\n          </div>\n        </a>\n      </div>\n      <div class=\"clearfix\"> </div>\t\n      <script src=\"js/lightbox-plus-jquery.min.js\"> </script>\n    </div>\t\t\t\t\n  </div>\n</div>\t\n<!--//portfolio-->\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\n    color: red;\n}\nh6{\n    color:gray;\n}\nh4{\n    color:cornflowerblue;\n}"

/***/ }),

/***/ "./src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"blog-post\">\n        <br>\n        <br>\n        \n        <h1>{{ post.id }}:</h1>\n        <h4 class=\"blog-post-title\">Title: &nbsp;{{ post.title }}</h4>\n         <h6>Body:&nbsp;&nbsp;{{ post.body }} </h6> \n        <hr>       \n        <button class=\"d-inline-block\" title=\"Back to the Posts\"  type=\"button\" routerLink=\"/posts\" style=\"margin-left:18px;\">\n            <i class=\"icon-backto\"></i>Back to the Posts\n            </button>\n        <hr>       \n\n    </div>\n  "

/***/ }),

/***/ "./src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = /** @class */ (function () {
    function PostComponent(route) {
        var _this = this;
        this.route = route;
        this.id = 0;
        this.post = {};
        this.route.params.subscribe(function (res) { return _this.id = res.id; });
        fetch("http://jsonplaceholder.typicode.com/posts/" + this.id)
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.post = data; })
            .catch(function (err) { return console.log(err); });
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("./src/app/post/post.component.html"),
            styles: [__webpack_require__("./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" title=\"Back to the Home Page\"  type=\"button\" routerLink=\"/features\" style=\"margin-left:18px;\">\n  <i class=\"icon-backto\"></i>Back to the Home Page\n  </button>\n<hr>  \n\n    <div class=\"blog-post\" *ngFor=\"let post of posts\">\n      \n      <h1>{{ post.id }}. </h1>\n      <h4 class=\"blog-post-title\"><a [routerLink]=\"[post.id]\">{{ post.title }}</a></h4>\n      <p>{{ post.body }} </p>\n      <hr>\n      \n  </div>\n"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
        var _this = this;
        this.posts = [];
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(function (res) { return res.json(); })
            .then(function (data) { return _this.posts = data; })
            .catch(function (err) { return console.log(err); });
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__("./src/app/posts/posts.component.html"),
            styles: [__webpack_require__("./src/app/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" required/>\n    </div>\n    \n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form> -->\n\n  <div class=\"jumbotron\">\n    <form #frm=\"ngForm\" (ngSubmit)=\"addUser(frm)\" >\n      <div class=\"form-group\">\n        <label for=\"name\">Name:</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" \n        ngModel\n        #nameUser=\"ngModel\"\n        required\n        pattern=\"/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/\"\n        >\n      </div>\n       <div *ngIf=\"nameUser.touched\" class=\"alert alert-danger\">\n          <div *ngIf=\"nameUser.errors?.required\">\n              Name is Required!\n           </div>\n           <div *ngIf=\"nameUser.errors?.pattern\">\n              Invalid Name!\n           </div>\n       </div>\n  \n      <div class=\"form-group\">\n        <label for=\"contact\">Contact:</label>\n        <input type=\"text\" class=\"form-control\" name=\"contact\" \n        ngModel\n        #contactUser=\"ngModel\"\n        required\n        maxlength=\"10\"\n        minlength=\"10\"\n        pattern=\"[0-9]*\"\n        >\n      </div>\n      <div *ngIf=\"contactUser?.touched\" class=\"alert alert-danger\">\n          <div *ngIf=\"contactUser.errors?.required\">\n              Contact is Required!\n           </div>\n           <div [hidden]=\"!contactUser?.hasError('minlength')\">\n              Invalid Contact! \n           </div>\n       </div>\n  \n      <div class=\"form-group\">\n        <label for=\"email\">Email:</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" \n        ngModel\n        #emailUser=\"ngModel\"\n        required\n        pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2.3})+$\"\n        >\n      </div>\n      <div *ngIf=\"emailUser?.touched\" class=\"alert alert-danger\">\n          <div *ngIf=\"emailUser.errors?.required\">\n              Email is Required!\n           </div>\n           <div *ngIf=\"emailUser.errors?.pattern\">\n              Invalid Email!\n           </div>\n       </div>\n\n      <br/>\n      <!-- Button of the Form -->\n      <button type=\"submit\" name=\"button\" class=\"btn btn-success\"\n      [disabled]=\"frm.invalid\">Add User</button>\n    </form>\n  </div>\n  <hr>\n   \n  <ul>\n    <li *ngFor=\"let user of UserList\" class=\"list-group-item\">\n     {{ user?.name }}\n    </li>\n  </ul>\n\n  {{ frm.value | json }}"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
        this.userList = [];
    }
    PricingComponent.prototype.addUser = function (form) {
        var user;
        user = form.value;
        this.userList.push(user);
        // console.log(form.value);
    };
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pricing',
            template: __webpack_require__("./src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__("./src/app/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\" id=\"list\">\n    <li class=\"list-group-item active\">Add New Feature</li>\n\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\" routerLink=\"about\">About\n      <span class=\"badge badge-primary badge-pill\">1</span>\n    </li>\n\n\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\" routerLink=\"gallery\">Gallery\n        <span class=\"badge badge-primary badge-pill\">2</span>\n    </li>\n\n\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\" routerLink=\"contact\">Contact us\n         <span class=\"badge badge-primary badge-pill\">3</span>\n    </li>\n    \n  </ul>\n  <br />\n  <br />\n      <div class=\"card border-primary mb-3\" style=\"max-width: 20rem;\">\n          <div class=\"card-header\">Our Specialization</div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Experienced staff</h4>\n            <p class=\"card-text\">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>\n          </div>\n        </div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map