"use strict";
(self["webpackChunkbubbleb_app"] = self["webpackChunkbubbleb_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  redirectTo: '/Home',
  pathMatch: 'full'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.service */ 6527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-page-scroll-core */ 5739);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);









const _c0 = ["home", "roadmap", "team", "ourstory", "wesupport"];
const _c1 = function (a0) {
  return {
    active: a0
  };
};
const _c2 = function () {
  return ["fab", "discord"];
};
class AppComponent {
  constructor(pageScrollService, document, config, renderer) {
    this.pageScrollService = pageScrollService;
    this.document = document;
    this.config = config;
    this.renderer = renderer;
    this.title = "BubbleBeesNfts";
    this.activeSection = 1;
    this.detectedElms = [];
    this.renderer.listen('window', 'resize', this.detectElms.bind(this));
    this.renderer.listen('window', 'scroll', this.detectElms.bind(this));
  }
  detectElms() {
    const detectedElms = [];
    this.elms.forEach((elm, index) => {
      if (isInViewport(elm.nativeElement)) {
        detectedElms.push(elm.nativeElement.id);
      }
    });
    this.detectedElms = detectedElms;
    this.activeSection = detectedElms[0];
  }
  ngOnInit() {
    this.header = this.getHeader();
  }
  ngAfterViewInit() {
    setTimeout(this.detectElms.bind(this));
  }
  getHeader() {
    return this.config.getConfig().header;
  }
  scrollTo(e, i) {
    this.pageScrollService.scroll({
      scrollTarget: e,
      document: this.document
    });
    this.activeSection = i;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__.PageScrollService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.elms = _t);
    }
  },
  decls: 270,
  vars: 22,
  consts: [[1, "main-container"], [1, "scroll-container", "scroll-container-expand-lg", "shadow-none"], ["href", "https://www.bubblebees-nft.com", "target", "_blank", "rel", "noreferrer", 1, "navbar-brand", "font-weight-bolder", "ms-sm-3"], ["alt", "logo", "src", "../assets/images/logo.png"], [1, "navbar"], [1, "navbar-nav"], ["pageScroll", "", 1, "step-section", 3, "ngClass", "click"], [1, "vertical-nav"], [1, "section-name"], [1, "step-media"], [1, "social-icon"], ["href", "https://t.me/+6mImakKChy02ZGRk", "target", "_blank", "title", "Telegram", 1, "text-dark", "text-uppercase", "text-lg", "mb-2", "mb-lg-0"], [1, "fa", "fa-telegram", "fa-1x"], ["target", "_blank", "title", "Twitter", "href", "https://twitter.com/Bubblebees_NFT"], [1, "fa", "fa-twitter", "fa-1x"], ["href", "https://www.instagram.com/bubblebeesnft", "target", "_blank", "title", "Instagram", 1, "text-dark", "text-uppercase", "text-lg", "mb-2", "mb-lg-0"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["href", "http://www.discord.com/BubblebeesNFT", "target", "_blank", "title", "Discord"], [3, "icon"], ["id", "1", 1, "scroll-outer"], ["home", ""], [1, "card-container"], ["id", "banner", "data-enllax-ratio", ".5", 1, "scrollto", "clearfix"], ["id", "banner-content", 1, "row", "clearfix"], [1, "col-38"], [1, "section-heading"], [1, "banner-media"], [1, "fa", "fa-telegram", "fa-2x"], [1, "fa", "fa-twitter", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-instagram", "fa-2x"], ["href", "https://www.discord.com/BubblebeesNFT", "target", "_blank", "title", "Discord", 1, "text-dark", "text-uppercase", "text-lg", "mb-2", "mb-lg-0"], ["size", "2x", 3, "icon"], ["href", "https://xoxno.com/collection/BUBBS-c11eb5", "target", "_blank", 1, "button"], ["id", "2", 1, "scroll-outer"], ["roadmap", ""], ["id", "roadmap-content", 1, "secondary-color", "text-center", "scrollto", "clearfix"], [1, "row", "clearfix"], [1, "section-title"], ["data-wow-delay", "0.4s", 1, "roadmap-block", "col-3", "wow", "fadeInUp"], [1, "roadmap-block-content"], ["data-wow-delay", "0.6s", 1, "roadmap-block", "featured", "col-3", "wow", "fadeInUp"], ["data-wow-delay", "0.8s", 1, "roadmap-block", "col-3", "wow", "fadeInUp"], ["id", "3", 1, "scroll-outer"], ["team", ""], ["id", "team-content", "data-enllax-ratio", ".2", 1, "scrollto", "text-center"], [1, "test-container"], [1, "col-2", "testimonial", "classic"], ["src", "../assets/images/avatar-design.png", "alt", "User", 1, "avatar"], ["src", "../assets/images/avatar-dev.png", "alt", "User", 1, "avatar"], ["id", "4", 1, "scroll-outer"], ["ourstory", ""], ["id", "savebees-content", "data-enllax-ratio", ".5", 1, "scrollto", "clearfix", "text-center"], ["id", "right-content", 1, "row", "clearfix"], [1, "col-61"], [1, "bees-content"], [1, "p1"], [1, "container"], [1, "box"], [1, "bold"], ["id", "5", 1, "scroll-outer"], ["wesupport", ""], ["id", "support-content", 1, "secondary-color", "text-center", "scrollto", "clearfix"], [1, "wesupport-container", "col-2"], [1, "row", "partners", "classic"], [1, "support-item"], ["src", "../assets/images/ViaTransilvanica.png", "alt", "User", 1, "avatar"], ["href", "https://www.viatransilvanica.com/", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], ["src", "../assets/images/logo-appaps.png", "alt", "User", 1, "avatar"], ["href", "https://appaps.org/", "target", "_blank"], ["id", "landing-footer", 1, "clearfix"], ["id", "copyright"], [1, "fa", "fa-copyright", "fa-1x"], ["id", "footer-social app-social", 1, "col-2", "social-icons"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_6_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](43);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r0, 1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_10_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](69);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r1, 2));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Roadmap");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_14_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](146);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r2, 3));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_18_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](167);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r3, 4));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7)(20, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Our Story");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_22_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](231);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r4, 5));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7)(24, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "We Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9)(27, "div", 10)(28, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9)(31, "div", 10)(32, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 9)(35, "div", 10)(36, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 9)(39, "div", 10)(40, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "fa-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 19, 20)(44, "div", 21)(45, "header", 22)(46, "div", 23)(47, "div", 24)(48, "div", 25)(49, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 26)(54, "div", 10)(55, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 10)(58, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 10)(61, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 10)(64, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "fa-icon", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 33, 34)(70, "div", 21)(71, "section", 35)(72, "div", 36)(73, "div", 25)(74, "h2", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Roadmap 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 38)(77, "div", 39)(78, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "[I] Wake Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ul")(81, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " After a long winter the bublebees woke up in a different world. The distruction of nature left them disordered and unsettled. Our mission is to set up a place where they can rebuild what was lost. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Website launch");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " Partnership with association protecting bees, helping projects that connects nature, culture and customs ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Competitions, recompensating community");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Launch of limited edition BlubbleBees Nfts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "First 1000 Common, Rare and Super rare colony of bees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Work in progress for our platform");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "More to come ...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "MINT BEES");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 40)(100, "div", 39)(101, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "[II] Reconstruction");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "ul")(104, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, " The community now have the resources to build their hive. They organize and work hard to create their homes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " Build up our platform that will integrate marketing value for small bussinesses, craftsmen, festivals and lots of good deals for our Nfts holders ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " Launch limitless edition of Golden Buzzer (those are intended for people that want to promote their business, product, sale offers) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Launch second edition of 1000 Nfts BubbleBees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " New benefits along the way for Nft holders from both phases ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Staking feature");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Engage, analyze and scale our community");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Involve more partners into our vision");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "More to come ...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "MINT BEES");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 41)(125, "div", 39)(126, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "[III] Thrive");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "ul")(129, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " The bublebees had overcome their threat, the habitat is growing and they happily return to their buzzing glory. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Release last collection of 1000 Nfts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Staking feature");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Buid up more on the platform");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, " Taking further the collaboration with our partners. Atract more businesses to list their deals. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Bring bees and habitats into the virtual world");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Launch of BubbleBees marchandise");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "MINT BEES");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 42, 43)(147, "div", 21)(148, "div", 44)(149, "div", 36)(150, "div", 25)(151, "h2", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Meet our team");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 45)(154, "blockquote", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "img", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "My goal as a designer for this NFT project is to create digital assets that are not only visually appealing but also valuable and meaningful to our audience. I believe that NFTs have the potential to change the way we think about art, ownership, and value, and I'm thrilled to be part of a team that's at the forefront of this exciting new field.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Irina Bogdan - Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "blockquote", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "img", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Believing in the transformative power of blending art and technology. Bringing together the best of both worlds to create a digital realm where art flourishes and technology amplifies the human experience. Responsible for the technical side that supports the creation and storage of unique digital assets on a blockchain.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Florina Clapon - IT specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 49, 50)(168, "div", 21)(169, "div", 51)(170, "div", 36)(171, "div", 25)(172, "h2", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Our Story");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 52)(175, "div", 53)(176, "div", 25)(177, "div", 54)(178, "p", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, " Our collection reveals 3 phases of bee\u2019s evolution, each phase containing 1000 Nfts. Each NFT in the BubbleBees collection represents a unique artistic interpretation of bees. The collection features are crafted by passionate members about both art and environmental conservation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "p", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " The NFTs in this project are more than just digital artworks. They serve as a bridge between the virtual and physical worlds, carrying a mission to make ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "a tangible impact on bee preservation");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, ". A percentage of the funds generated from the minting process is allocated directly to organizations and initiatives working towards preserving bee populations and nature initiatives. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "p", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, " As the project progresses into the second phase, BubbleBees introduces a value-added proposition for NFT holders. The team develops ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "a dedicated platform designed to connect small businesses, craftsmen and organizations with the community of NFT holders");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, ". The platform allows these entities to list and promote their products, services, and special offers exclusively to NFT holders within the BubbleBees ecosystem. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "p", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, " BubbleBees NFTs offer unique benefits and experiences for both holders and producers: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 56)(193, "div", 57)(194, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Holders Benefits");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Exclusive Access to Offerings:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, " NFT holders have exclusive access to the products, services, and special offers listed on platform. Unique traits of the Nfts can reveal access to a selected group of rewards. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Discounts and Limited Editions:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, " you have the chance to acquire products at a discounted price or access limited-edition items before they are available to the general public. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Staking and Rewards:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, " the project will introduce a staking mechanism where you can stake your NFTs to earn additional rewards. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Supporting a Cause:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, " by holding NFTs within the BubbleBees ecosystem, you directly support the cause of bee conservation. Your involvement as an NFT holder contributes to the sustainability of bee populations and ecological balance. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Potential Value Appreciation:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, " depending on the success and popularity of the BubbleBees project, there is a possibility of the value of your NFTs appreciating over time. As the ecosystem grows, more individuals and businesses may join, increasing the demand for BubbleBees NFTs. This potential value appreciation adds a financial aspect to your NFT holdings. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 57)(212, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Producers Benefits");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, " Increased Visibility and Brand Exposure: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, " being part of the ecosystem allows producers and small businesses to gain exposure and increase brand awareness.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Stimulation of Sales :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, " the presence of a vibrant community of NFT holders creates opportunities for increased sales.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Rewards and Incentives:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, " producers and small businesses can offer exclusive rewards and incentives to NFT holders. These can include limited editions, special discounts, early access to new releases, or even customized products tailored specifically for the community. Such incentives can drive customer loyalty and boost sales. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Enhanced Trust and Credibility:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, " by being associated with Bubblebees and its mission of bee conservation, producers and small businesses can enhance their trustworthiness and credibility among environmentally conscious consumers. NFT holders are more likely to support businesses that align with their values and contribute to a cause they care about. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "p", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, " By encompassing these elements, BubbleBees has the potential to inspire and mobilize individuals, communities, and businesses towards bee conservation. It has the ability to create a movement by combining a critical cause, community engagement, collaborative efforts, education, tangible impact, financial incentives, and scalability. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 59, 60)(232, "div", 21)(233, "div", 61)(234, "div", 36)(235, "div", 25)(236, "h2", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "We support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Communities with shared values and ideals");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 62)(241, "blockquote", 63)(242, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "img", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 64)(245, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, " Via Transilvanica - \u201EThe road that unites\u201D is a long-distance trail of 1,400 kilometers that crosses Romania diagonally, from Putna to Drobeta Turnu Severin. Whether you're an avid hiker, a cycling enthusiast, or an equestrian lover, this trail offers an unforgettable experience. Via Transilvanica serves as a bridge connecting communities, promoting unity, and fostering a deeper understanding of Romania's rich cultural heritage. A project by T\u0103\u015Fuleasa Social, an NGO that deals with environmental preservation, education, social welfare, cultural development, and more. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "footer")(248, "a", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, " Via Transilvanica");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 62)(252, "blockquote", 63)(253, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](254, "img", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 64)(256, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, " Association for the Protection of Wild Bees and Pollinators. With a mission to raise awareness about the invaluable contribution of bees to our environment, through engaging and immersive workshops, they bring bees right in front of the eyes of children and adults alike. Through their projects, this organization is sowing the seeds of compassion and cultivating a profound appreciation for the crucial role that bees play in our world. By nurturing this understanding, they empower individuals to take action, becoming ambassadors for the conservation of wild bees and pollinators. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "footer")(259, "a", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, " Appaps");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "footer", 70)(263, "div", 36)(264, "p", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](265, "i", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, " 2023, BubbleBees ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, " Creating a buzz. Making an impact. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](269, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, ctx.activeSection == 1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx.activeSection == 2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, ctx.activeSection == 3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c1, ctx.activeSection == 4));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c1, ctx.activeSection == 5));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.heading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.headingtext);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.buttontext);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
  styles: [".main-container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  height: 100vh;\r\n  width: 100%;\r\n  overflow-x: clip;\r\n}\r\n\r\n.scroll-outer[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.section-name[_ngcontent-%COMP%] {\r\n  max-width: 140px;\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.step-section.active[_ngcontent-%COMP%]   .section-name[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #d2b356;\r\n  font-size: 15px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #2f2b3a;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding: 25px;\r\n}\r\n\r\n.scroll-container[_ngcontent-%COMP%] {\r\n  \r\n  opacity: 0.6;\r\n  position: fixed;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1rem;\r\n  top: 0;\r\n  z-index: 9999;\r\n  background-color: #2f2b3a;\r\n  padding-top: 1.5rem !important;\r\n  padding-right: 1.5rem !important;\r\n  padding-left: 1.5rem !important;\r\n  width: 100%;\r\n}\r\n\r\nshadow-none[_ngcontent-%COMP%] {\r\n  box-shadow: none !important;\r\n}\r\n\r\n.scroll-container[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n@media (min-width: 992px) {\r\n  .scroll-container-expand-lg[_ngcontent-%COMP%] {\r\n    flex-wrap: nowrap;\r\n    justify-content: flex-start;\r\n  }\r\n}\r\n\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  padding-top: 0.40625rem;\r\n  padding-bottom: 0.40625rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.125rem;\r\n  white-space: nowrap;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 210px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  flex-grow: 1;\r\n  align-items: center;\r\n  display: flex !important;\r\n  flex-basis: auto;\r\n}\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n  margin-left: auto !important;\r\n}\r\n\r\n\r\n\r\n.navbar-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n  margin-left: auto !important;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  margin-right: 0.5rem !important;\r\n  margin-left: 0.5rem !important;\r\n  align-items: center !important;\r\n  display: flex !important;\r\n}\r\n\r\n\r\n.step-section[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  background-color: cream;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.vertical-nav[_ngcontent-%COMP%] {\r\n  flex: 3;\r\n}\r\n\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 90px;\r\n  }\r\n  .section-name[_ngcontent-%COMP%] {\r\n    max-width: 100px;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 5px;\r\n  }\r\n\r\n  .step-section[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    background-color: cream;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  .step-media[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .section-heading[_ngcontent-%COMP%] {\r\n    padding: 140px 0 0px 0;\r\n  }\r\n  \r\n}\r\n.font-weight-bolder[_ngcontent-%COMP%] {\r\n  font-weight: 700 !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ms-sm-3[_ngcontent-%COMP%] {\r\n    margin-left: 1rem !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.banner-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n}\r\n.banner-media[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n.social-icon[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  padding-right: 8px;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%] {\r\n  background: url('header.png') no-repeat center top;\r\n  background-size: cover;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%] {\r\n  height: 120vh;\r\n}\r\n#banner-content.row[_ngcontent-%COMP%] {\r\n  padding-top: 170px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  padding-top: 5%;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: block;\r\n  width: 30px;\r\n  height: 5px;\r\n  margin-top: 30px;\r\n}\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #banner[_ngcontent-%COMP%] {\r\n    background: url('Home_Background.png') no-repeat center top;\r\n    background-size: cover;\r\n  }\r\n}\r\n\r\n\r\n\r\n#roadmap-content[_ngcontent-%COMP%] {\r\n  background: url('roadmap.png') no-repeat center top;\r\n  background-size: cover;\r\n  \r\n}\r\n\r\n.roadmap-block-content[_ngcontent-%COMP%] {\r\n  background: #2f2b3a;\r\n  padding: 25px 25px 25px 25px;\r\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\r\n  transition: all 0.2s ease-in-out 0s;\r\n  position: relative;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 25px 0 25px 0;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 14px 0;\r\n  border-bottom: 1px dotted #e1e1e1;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n  border: none;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  text-transform: uppercase;\r\n  padding-bottom: 0;\r\n  color: #d2b356;\r\n}\r\n\r\n.roadmap-sub[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  color: #ccc;\r\n  margin: 0 0 25px 0;\r\n}\r\n\r\n.roadmap[_ngcontent-%COMP%] {\r\n  background: #f5f5f5;\r\n  padding: 25px;\r\n  position: relative;\r\n}\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #roadmap-content[_ngcontent-%COMP%] {\r\n    background: url('roadmap.png') no-repeat center top;\r\n    \r\n    min-height: 200vh;\r\n  }\r\n}\r\n\r\n\r\n\r\n#team-content[_ngcontent-%COMP%] {\r\n  background: url('team.png') no-repeat center top;\r\n  background-size: cover;\r\n  \r\n}\r\n\r\n.testimonial.classic[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]:before {\r\n  background: #d2b356;\r\n}\r\n\r\n\r\n\r\n\r\n#savebees-content[_ngcontent-%COMP%] {\r\n  background: url('savethebees.png') no-repeat center top;\r\n  background-size: cover;\r\n  min-height: 200vh;\r\n}\r\n\r\n#right-content.row[_ngcontent-%COMP%] {\r\n  right: -40%;\r\n  top: -200px;\r\n}\r\n.bees-content[_ngcontent-%COMP%] {\r\n  background-color: #2f2b3a;\r\n  opacity: 0.9;\r\n  text-align: justify;\r\n  padding-bottom: 20px;\r\n}\r\n\r\np.p1[_ngcontent-%COMP%] {\r\n  padding-left: 30px;\r\n  padding-right: 50px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  padding-right: 50px;\r\n  font-family: Arial, sans-serif;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n  flex-basis: 49%;\r\n  background-color: #4d485a;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  text-align: left;\r\n}\r\n.bold[_ngcontent-%COMP%] {\r\n  font-weight: bolder;\r\n  font-stretch: semi-expanded;\r\n  padding: 10px 0px 10px 0px;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  margin-bottom: 10px;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n}\r\n\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #savebees-content[_ngcontent-%COMP%] {\r\n    background: url('OurStory_Background.png') no-repeat center\r\n      top;\r\n    background-size: 450px 1100px;\r\n    \r\n    \r\n  }\r\n\r\n  #right-content.row[_ngcontent-%COMP%] {\r\n    top: -200px;\r\n    right: -20px;\r\n  }\r\n\r\n  .bees-content[_ngcontent-%COMP%] {\r\n    background-color: #2f2b3a;\r\n    opacity: 0.9;\r\n    text-align: justify;\r\n    padding-bottom: 20px;\r\n    padding-top: 10px;\r\n    margin-top: 210px;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .box[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n#support-content[_ngcontent-%COMP%] {\r\n  background: url('roadmap.png') no-repeat center top;\r\n  background-size: cover;\r\n  \r\n}\r\n.partners[_ngcontent-%COMP%] {\r\n  border: 2px solid;\r\n  border-radius: 1.5rem;\r\n  padding: 1em;\r\n}\r\n.partners[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-height: 100px;\r\n  border-radius: 250em;\r\n}\r\n\r\n.support-item[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]:before {\r\n  background: #d2b356;\r\n}\r\n.support-item[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]:before {\r\n  display: block;\r\n  content: \"\";\r\n  width: 30px;\r\n  height: 4px;\r\n  margin: 10px auto 15px auto;\r\n}\r\n\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #support-content[_ngcontent-%COMP%] {\r\n    background: url('roadmap.png') no-repeat center top;\r\n    background-size: cover;\r\n  }\r\n  .partners.row[_ngcontent-%COMP%] {\r\n    max-width: 95%;\r\n  }\r\n  .support-item[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#landing-footer[_ngcontent-%COMP%], #landing-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #landing-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  color: #999;\r\n  background-color: #2f2b3a;\r\n}\r\n\r\n\r\n\r\n#landing-footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #999;\r\n}\r\n\r\n\r\n\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 16px;\r\n  color: white;\r\n}\r\n\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  border-color: white;\r\n}\r\n\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  color: #d2b356;\r\n  border-color: #d2b356;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBLHFCQUFxQjtBQUNyQjtFQUNFOzs7Ozs7OztpQkFRZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixNQUFNO0VBQ04sYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLDJCQUEyQjtFQUM3QjtBQUNGO0FBQ0EsR0FBRztBQUNILFVBQVU7QUFDVjtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBLFdBQVc7QUFDWDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIs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O0FBQ2I7O0FBRUEsdUNBQXVDOztBQUV2QyxnQkFBZ0I7QUFDaEI7RUFDRSxzREFBc0Q7RUFDdEQsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6IGNsaXA7XHJcbn1cclxuXHJcbi5zY3JvbGwtb3V0ZXIge1xyXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cclxufVxyXG5cclxuLnNlY3Rpb24tbmFtZSB7XHJcbiAgbWF4LXdpZHRoOiAxNDBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcblxyXG4uc3RlcC1zZWN0aW9uLmFjdGl2ZSAuc2VjdGlvbi1uYW1lIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyYjM1NjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMyZjJiM2E7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciBoMyB7XHJcbiAgcGFkZGluZzogMjVweDtcclxufVxyXG4vKiBzY3JvbGwtY29udGFpbmVyICovXHJcbi5zY3JvbGwtY29udGFpbmVyIHtcclxuICAvKiBtYXgtd2lkdGg6IDEyMDBweDtcclxuICB0b3A6IDUlO1xyXG4gIHJpZ2h0OiAxMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZjY5N2Q7XHJcbiAgb3BhY2l0eTogMC43OyAqL1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmIzYTtcclxuICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuc2hhZG93LW5vbmUge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjcm9sbC1jb250YWluZXI6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLnNjcm9sbC1jb250YWluZXItZXhwYW5kLWxnIHtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxufVxyXG4vKiovXHJcbi8qIGJyYW5kICovXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIHBhZGRpbmctdG9wOiAwLjQwNjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjQwNjI1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLm5hdmJhci1icmFuZCBpbWcge1xyXG4gIHdpZHRoOiAyMTBweDtcclxufVxyXG4vKiBuYXZiYXIgKi9cclxuLm5hdmJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87XHJcbn1cclxuLm5hdmJhci1uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogICovXHJcblxyXG4vKiBTb2NpYWwgTWVkaWEgKi9cclxuLm5hdmJhci1tZWRpYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG59XHJcbi8qICAqL1xyXG5cclxuLnN0ZXAtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNyZWFtO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnZlcnRpY2FsLW5hdiB7XHJcbiAgZmxleDogMztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDI4MHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubmF2YmFyLWJyYW5kIGltZyB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICB9XHJcbiAgLnNlY3Rpb24tbmFtZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmVhbTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5zdGVwLW1lZGlhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDE0MHB4IDAgMHB4IDA7XHJcbiAgfVxyXG4gIC8qIGg0IC5zb2NpYWwtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH0gKi9cclxufVxyXG4uZm9udC13ZWlnaHQtYm9sZGVyIHtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5tcy1zbS0zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi8qKi9cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogMS4gQmFubmVyICovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmJhbm5lci1tZWRpYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJhbm5lci1tZWRpYSAuc29jaWFsLWljb24gYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zb2NpYWwtaWNvbiB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4jYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuI2Jhbm5lciB7XHJcbiAgaGVpZ2h0OiAxMjB2aDtcclxufVxyXG4jYmFubmVyLWNvbnRlbnQucm93IHtcclxuICBwYWRkaW5nLXRvcDogMTcwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4jYmFubmVyIGgxIHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuXHJcbiNiYW5uZXIgLnNlY3Rpb24taGVhZGluZzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNiYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9Ib21lX0JhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiAyLiBSb2FkTWFwICovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuI3JvYWRtYXAtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9yb2FkbWFwLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC8qIG1pbi1oZWlnaHQ6IDIwMHZoOyAqL1xyXG59XHJcblxyXG4ucm9hZG1hcC1ibG9jay1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjMmYyYjNhO1xyXG4gIHBhZGRpbmc6IDI1cHggMjVweCAyNXB4IDI1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5yb2FkbWFwLWJsb2NrIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMjVweCAwIDI1cHggMDtcclxufVxyXG5cclxuLnJvYWRtYXAtYmxvY2sgbGkge1xyXG4gIHBhZGRpbmc6IDE0cHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNlMWUxZTE7XHJcbn1cclxuXHJcbi5yb2FkbWFwLWJsb2NrIGxpOmxhc3Qtb2YtdHlwZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucm9hZG1hcC1ibG9jayBoMyB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgY29sb3I6ICNkMmIzNTY7XHJcbn1cclxuXHJcbi5yb2FkbWFwLXN1YiB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIG1hcmdpbjogMCAwIDI1cHggMDtcclxufVxyXG5cclxuLnJvYWRtYXAge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDI4MHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAjcm9hZG1hcC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvcm9hZG1hcC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IDkwMHB4IDEwMDBweDsgKi9cclxuICAgIG1pbi1oZWlnaHQ6IDIwMHZoO1xyXG4gIH1cclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIDMuIFRlYW0gKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jdGVhbS1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL3RlYW0ucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLyogbWluLWhlaWdodDogMjAwdmg7ICovXHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbC5jbGFzc2ljIGZvb3RlcjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICNkMmIzNTY7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogNC4gU2F2ZSB0aGUgYmVlcyAqL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiNzYXZlYmVlcy1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL3NhdmV0aGViZWVzLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHZoO1xyXG59XHJcblxyXG4jcmlnaHQtY29udGVudC5yb3cge1xyXG4gIHJpZ2h0OiAtNDAlO1xyXG4gIHRvcDogLTIwMHB4O1xyXG59XHJcbi5iZWVzLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjJiM2E7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbnAucDEge1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIGZsZXgtYmFzaXM6IDQ5JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0ODVhO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXN0cmV0Y2g6IHNlbWktZXhwYW5kZWQ7XHJcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcbn1cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDI4MHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAjc2F2ZWJlZXMtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL091clN0b3J5X0JhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXJcclxuICAgICAgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0NTBweCAxMTAwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xyXG4gICAgLyogbWluLWhlaWdodDogMjAwdmg7ICovXHJcbiAgfVxyXG5cclxuICAjcmlnaHQtY29udGVudC5yb3cge1xyXG4gICAgdG9wOiAtMjAwcHg7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgfVxyXG5cclxuICAuYmVlcy1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjJiM2E7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5ib3gge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogNS4gV2VTdXBwb3J0ICovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuI3N1cHBvcnQtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9yb2FkbWFwLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC8qIG1pbi1oZWlnaHQ6IDIwMHZoOyAqL1xyXG59XHJcbi5wYXJ0bmVycyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG4ucGFydG5lcnMgaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNTBlbTtcclxufVxyXG5cclxuLnN1cHBvcnQtaXRlbSBmb290ZXI6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjZDJiMzU2O1xyXG59XHJcbi5zdXBwb3J0LWl0ZW0gZm9vdGVyOmJlZm9yZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBtYXJnaW46IDEwcHggYXV0byAxNXB4IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAyODBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgI3N1cHBvcnQtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL3JvYWRtYXAucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgLnBhcnRuZXJzLnJvdyB7XHJcbiAgICBtYXgtd2lkdGg6IDk1JTtcclxuICB9XHJcbiAgLnN1cHBvcnQtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiA2LiBGb290ZXIgKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuI2xhbmRpbmctZm9vdGVyLFxyXG4jbGFuZGluZy1mb290ZXIgcCxcclxuI2xhbmRpbmctZm9vdGVyIGEge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmLCBBcmlhbCwgSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjJiM2E7XHJcbn1cclxuXHJcbi8qIEZvb3RlciBJY29uIENvbG9yICovXHJcblxyXG4jbGFuZGluZy1mb290ZXIgaSB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS1CYW5uZXIgQnV0dG9ucy0tLS0tLS0tLS0gKi9cclxuXHJcbi8qIEJ1dHRvbiBUZXh0ICovXHJcbi5idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmLCBBcmlhbCwgSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbiBDb2xvciAqL1xyXG4uYnV0dG9uIHtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBCdXR0b24gSG92ZXIgQ29sb3IgKi9cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6ICNkMmIzNTY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDJiMzU2O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
function isInViewport(elm) {
  var elementTop = elm.offsetTop - 100;
  var elementBottom = elementTop + elm.offsetHeight - 100;
  // in this specific case the scroller is document.documentElement (<html></html> node)
  var viewportTop = document.documentElement.scrollTop;
  var viewportBottom = viewportTop + document.documentElement.clientHeight;
  return elementBottom > viewportTop && elementTop < viewportBottom;
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ 6527);
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-page-scroll-core */ 5739);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {
  constructor(library) {
    library.addIcons(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faDiscord);
  }
}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconLibrary));
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule, ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_7__.NgxPageScrollCoreModule.forRoot({
    duration: 500
  }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule, ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_7__.NgxPageScrollCoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 6527:
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ 8345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ConfigService {
  constructor() {
    this.config = _configuration__WEBPACK_IMPORTED_MODULE_0__.configuration;
  }
  getConfig() {
    return this.config;
  }
}
ConfigService.ɵfac = function ConfigService_Factory(t) {
  return new (t || ConfigService)();
};
ConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ConfigService,
  factory: ConfigService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8345:
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configuration": () => (/* binding */ configuration)
/* harmony export */ });
const configuration = {
  header: {
    heading: 'BubbleBees NFTs',
    headingtext: 'Welcome to the enchanting world of BubbleBees. A collection of digital artworks celebrating the vital role of bees in our ecosystem.                                                                          ',
    buttontext: 'Join the hive',
    buttonlink: '\home'
  }
};

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map