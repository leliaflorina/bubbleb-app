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









const _c0 = ["home", "roadmap", "team", "savethebees"];
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
  decls: 174,
  vars: 20,
  consts: [[1, "main-container"], [1, "scroll-container", "scroll-container-expand-lg", "shadow-none"], ["href", "https://www.bubblebees-nft.com", "target", "_blank", "rel", "noreferrer", 1, "navbar-brand", "font-weight-bolder", "ms-sm-3"], ["alt", "logo", "src", "../assets/images/logo.png"], [1, "navbar"], [1, "navbar-nav"], ["pageScroll", "", 1, "step-section", 3, "ngClass", "click"], [1, "vertical-nav"], [1, "section-name"], [1, "step-media"], [1, "social-icon"], ["href", "https://", "target", "_blank", "title", "Telegram", 1, "text-dark", "text-uppercase", "text-lg", "mb-2", "mb-lg-0"], [1, "fa", "fa-telegram", "fa-1x"], ["href", "http://www.discord.com/BubblebeesNFT", "target", "_blank", "title", "Discord"], [3, "icon"], ["target", "_blank", "title", "Twitter", "href", "https://twitter.com/Bubblebees_NFT"], [1, "fa", "fa-twitter", "fa-1x"], ["href", "https://", "target", "_blank", "title", "Instagram", 1, "text-dark", "text-uppercase", "text-lg", "mb-2", "mb-lg-0"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["id", "1", 1, "scroll-outer"], ["home", ""], [1, "card-container"], ["id", "banner", "data-enllax-ratio", ".5", 1, "scrollto", "clearfix"], ["id", "banner-content", 1, "row", "clearfix"], [1, "col-38"], [1, "section-heading"], [1, "banner-media"], [1, "fa", "fa-telegram", "fa-2x"], ["href", "http://www.discord.com/BubblebeesNFT", "target", "_blank", "title", "Discord", 1, "text-dark", "text-uppercase", "text-lg", "mb-2", "mb-lg-0"], ["size", "2x", 3, "icon"], [1, "fa", "fa-twitter", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-instagram", "fa-2x"], [1, "button", 3, "href"], ["id", "2", 1, "scroll-outer"], ["roadmap", ""], ["id", "roadmap-content", 1, "secondary-color", "text-center", "scrollto", "clearfix"], [1, "row", "clearfix"], [1, "section-title"], ["data-wow-delay", "0.4s", 1, "roadmap-block", "col-3", "wow", "fadeInUp"], [1, "roadmap-block-content"], ["href", "#", 1, "button"], ["data-wow-delay", "0.6s", 1, "roadmap-block", "featured", "col-3", "wow", "fadeInUp"], ["data-wow-delay", "0.8s", 1, "roadmap-block", "col-3", "wow", "fadeInUp"], ["href", "#", "disbled", "true", 1, "button"], ["id", "3", 1, "scroll-outer"], ["team", ""], ["id", "team-content", "data-enllax-ratio", ".2", 1, "scrollto", "text-center"], [1, "test-container"], [1, "col-2", "testimonial", "classic"], ["src", "../assets/images/avatar-design.png", "alt", "User", 1, "avatar"], ["src", "../assets/images/avatar-dev.png", "alt", "User", 1, "avatar"], ["id", "4", 1, "scroll-outer"], ["savethebees", ""], ["id", "savebees-content", "data-enllax-ratio", ".5", 1, "scrollto", "clearfix", "text-center"], ["id", "right-content", 1, "row", "clearfix"], [1, "col-61"], [1, "bees-content"], [1, "p1"], [1, "p2"], [1, "p3"], [1, "p4"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_6_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r0, 1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_10_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r1, 2));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Roadmap");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_14_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](134);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r2, 3));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_18_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](155);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r3, 4));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7)(20, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Save the Bees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9)(23, "div", 10)(24, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9)(27, "div", 10)(28, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "fa-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9)(31, "div", 10)(32, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 9)(35, "div", 10)(36, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 19, 20)(40, "div", 21)(41, "header", 22)(42, "div", 23)(43, "div", 24)(44, "div", 25)(45, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 26)(50, "div", 10)(51, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 10)(54, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "fa-icon", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 10)(57, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 10)(60, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 33, 34)(66, "div", 21)(67, "section", 35)(68, "div", 36)(69, "div", 25)(70, "h2", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Roadmap 2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 38)(73, "div", 39)(74, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Wake Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ul")(77, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " After a long winter the bublebees woke up in a different world. The distruction of nature left them disordered and unsettled. Our mission is to set up a place where they can rebuild what was lost. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Launch of limited edition BlubbleBees Nfts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "First 1000 Common, Rare and Super rare colony of bees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Website launch");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Partnership with association protecting bees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Competitions, recompensating community");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "MINT BEES");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 41)(92, "div", 39)(93, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Reconstruction");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "ul")(96, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " The community now have the resources to build their hive. They organize and work hard to create their homes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Launch of second edition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Collection of 1000 nfts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Community rewards");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "To be defined");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "To be defined");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "To be defined");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "MINT BEES");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 42)(113, "div", 39)(114, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Thrive");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "ul")(117, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " The bublebees had overcome their threat, the habitat is growing and they happily return to their buzzing glory. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Release 1000 + Rare + Super rare colony");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Unlimited Extensions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "HD Video Tutorials");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Partnerships with beekeepers and honey producers");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Launch of BubbleBees lamp");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "To be defined");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "MINT BEES");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 44, 45)(135, "div", 21)(136, "div", 46)(137, "div", 36)(138, "div", 25)(139, "h2", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Meet our team");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 47)(142, "blockquote", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "img", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "My goal as a designer for this NFT project is to create digital assets that are not only visually appealing but also valuable and meaningful to our audience. I believe that NFTs have the potential to change the way we think about art, ownership, and value, and I'm thrilled to be part of a team that's at the forefront of this exciting new field.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Irina Bogdan - Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "blockquote", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "img", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Responsible for developing, deploying, securing and managing the technical infrastructure that supports the creation and storage of unique digital assets on a blockchain.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Florina Clapon - IT specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 51, 52)(156, "div", 21)(157, "div", 53)(158, "div", 36)(159, "div", 25)(160, "h2", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Save the Bees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 54)(163, "div", 55)(164, "div", 25)(165, "div", 56)(166, "p", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, " Bees are incredibly important pollinators that play a critical role in maintaining the health of our ecosystem. They pollinate a wide variety of plants, including many of the fruits, vegetables, and nuts that make up a large part of our diets. Without bees, many of these crops would struggle to reproduce, leading to significant food shortages and economic losses. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "p", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, " Unfortunately, bees face many threats, including habitat loss, pesticide use, climate change, and disease. These factors have led to declines in bee populations around the world, which has serious implications for both the environment and our food supply. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "p", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, " Protecting bees is therefore essential for ensuring the health and sustainability of our planet. This can be done by supporting conservation efforts, reducing the use of harmful pesticides, planting bee-friendly gardens, and advocating for policies that prioritize bee protection. By taking these actions, we can help to ensure that these vital pollinators continue to thrive and support the health of our planet for generations to come. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "p", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, " Remember, every small action counts. By taking steps to save the bees, we can create a better world for ourselves and future generations. Let's work together to protect these important creatures and ensure that they continue pollinating the plants and providing a vital link in the chain of life. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.heading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.headingtext);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.header.buttonlink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.buttontext);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
  styles: [".main-container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  height: 100vh;\r\n  width: 100%;\r\n  overflow-x: clip;\r\n}\r\n\r\n.scroll-outer[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.section-name[_ngcontent-%COMP%] {\r\n  max-width: 140px;\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.step-section.active[_ngcontent-%COMP%]   .section-name[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #d2b356;\r\n  font-size: 15px;\r\n  font-weight: ;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #2f2b3a;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding: 25px;\r\n}\r\n\r\n.scroll-container[_ngcontent-%COMP%] {\r\n  \r\n  opacity: 0.6;\r\n  position: fixed;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1rem;\r\n  top: 0;\r\n  z-index: 9999;\r\n  background-color: #2f2b3a;\r\n  padding-top: 1.5rem !important;\r\n  padding-right: 1.5rem !important;\r\n  padding-left: 1.5rem !important;\r\n  width: 100%;\r\n}\r\n\r\nshadow-none[_ngcontent-%COMP%] {\r\n  box-shadow: none !important;\r\n}\r\n\r\n.scroll-container[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n@media (min-width: 992px) {\r\n  .scroll-container-expand-lg[_ngcontent-%COMP%] {\r\n    flex-wrap: nowrap;\r\n    justify-content: flex-start;\r\n  }\r\n}\r\n\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  padding-top: 0.40625rem;\r\n  padding-bottom: 0.40625rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.125rem;\r\n  white-space: nowrap;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 210px;\r\n}\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 90px;\r\n  }\r\n\r\n  .step-media[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .section-heading[_ngcontent-%COMP%] {\r\n    padding: 140px 0 0px 0;\r\n  }\r\n  \r\n}\r\n.font-weight-bolder[_ngcontent-%COMP%] {\r\n  font-weight: 700 !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ms-sm-3[_ngcontent-%COMP%] {\r\n    margin-left: 1rem !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  flex-grow: 1;\r\n  align-items: center;\r\n  display: flex !important;\r\n  flex-basis: auto;\r\n}\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n  margin-left: auto !important;\r\n}\r\n\r\n\r\n\r\n.navbar-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n  margin-left: auto !important;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  margin-right: 0.5rem !important;\r\n  margin-left: 0.5rem !important;\r\n  align-items: center !important;\r\n  display: flex !important;\r\n}\r\n\r\n\r\n.step-section[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  background-color: cream;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.vertical-nav[_ngcontent-%COMP%] {\r\n  flex: 3;\r\n}\r\n\r\n\r\n\r\n\r\n.banner-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n}\r\n.banner-media[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n.social-icon[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  padding-right: 8px;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%] {\r\n  background: url('header.png') no-repeat center top;\r\n  background-size: cover;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%] {\r\n  height: 120vh;\r\n}\r\n#banner-content.row[_ngcontent-%COMP%] {\r\n  padding-top: 170px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  padding-top: 5%;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: block;\r\n  width: 30px;\r\n  height: 5px;\r\n  margin-top: 30px;\r\n}\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #banner[_ngcontent-%COMP%] {\r\n    background: url('header.png') no-repeat right top;\r\n    background-size: cover;\r\n  }\r\n}\r\n\r\n\r\n\r\n#roadmap-content[_ngcontent-%COMP%] {\r\n  background: url('roadmap.png') no-repeat center top;\r\n  background-size: cover;\r\n  \r\n}\r\n\r\n.roadmap-block-content[_ngcontent-%COMP%] {\r\n  background: #2f2b3a;\r\n  padding: 25px 25px 25px 25px;\r\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\r\n  transition: all 0.2s ease-in-out 0s;\r\n  position: relative;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 25px 0 25px 0;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 14px 0;\r\n  border-bottom: 1px dotted #e1e1e1;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n  border: none;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  text-transform: uppercase;\r\n  padding-bottom: 0;\r\n  color: #d2b356;\r\n}\r\n\r\n.roadmap-sub[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  color: #ccc;\r\n  margin: 0 0 25px 0;\r\n}\r\n\r\n.roadmap[_ngcontent-%COMP%] {\r\n  background: #f5f5f5;\r\n  padding: 25px;\r\n  position: relative;\r\n}\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #roadmap-content[_ngcontent-%COMP%] {\r\n    background: url('roadmap.png') no-repeat center top;\r\n    \r\n    min-height: 200vh;\r\n  }\r\n}\r\n\r\n\r\n\r\n#team-content[_ngcontent-%COMP%] {\r\n  background: url('team.png') no-repeat center top;\r\n  background-size: cover;\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n#savebees-content[_ngcontent-%COMP%] {\r\n  background: url('savethebees.png') no-repeat center top;\r\n  background-size: cover;\r\n  min-height: 200vh;\r\n}\r\n\r\n#right-content.row[_ngcontent-%COMP%] {\r\n  right: -40%;\r\n  top: -200px;\r\n}\r\n.bees-content[_ngcontent-%COMP%] {\r\n  background-color: #2f2b3a;\r\n  opacity: 0.9;\r\n}\r\n\r\np.p1[_ngcontent-%COMP%] {\r\n  padding-left: 30px;\r\n  padding-right: 50px;\r\n}\r\n\r\np.p2[_ngcontent-%COMP%] {\r\n  padding-left: 30px;\r\n  padding-right: 50px;\r\n}\r\n\r\np.p3[_ngcontent-%COMP%] {\r\n  padding-left: 30px;\r\n  padding-right: 50px;\r\n}\r\n\r\np.p4[_ngcontent-%COMP%] {\r\n  padding-left: 30px;\r\n  padding-right: 50px;\r\n}\r\n\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #savebees-content[_ngcontent-%COMP%] {\r\n    background: url('savethebees-mobile.png') no-repeat center\r\n      top;\r\n    background-size: 900px 1000px;\r\n    \r\n    min-height: 200vh;\r\n  }\r\n  #right-content.row[_ngcontent-%COMP%] {\r\n    top: -200px;\r\n    right: -20px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 16px;\r\n  color: white;\r\n}\r\n\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  border-color: white;\r\n}\r\n\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  color: #d2b356;\r\n  border-color: #d2b356;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBLHFCQUFxQjtBQUNyQjtFQUNFOzs7Ozs7OztpQkFRZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixNQUFNO0VBQ04sYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLDJCQUEyQjtFQUM3QjtBQUNGO0FBQ0EsR0FBRztBQUNILFVBQVU7QUFDVjtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTs7S0FFRztBQUNMO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtB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QUFZO0FBQ2Q7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBjbGlwO1xyXG59XHJcblxyXG4uc2Nyb2xsLW91dGVyIHtcclxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbn1cclxuXHJcbi5zZWN0aW9uLW5hbWUge1xyXG4gIG1heC13aWR0aDogMTQwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG5cclxuLnN0ZXAtc2VjdGlvbi5hY3RpdmUgLnNlY3Rpb24tbmFtZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkMmIzNTY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMyZjJiM2E7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciBoMyB7XHJcbiAgcGFkZGluZzogMjVweDtcclxufVxyXG4vKiBzY3JvbGwtY29udGFpbmVyICovXHJcbi5zY3JvbGwtY29udGFpbmVyIHtcclxuICAvKiBtYXgtd2lkdGg6IDEyMDBweDtcclxuICB0b3A6IDUlO1xyXG4gIHJpZ2h0OiAxMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZjY5N2Q7XHJcbiAgb3BhY2l0eTogMC43OyAqL1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmIzYTtcclxuICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuc2hhZG93LW5vbmUge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjcm9sbC1jb250YWluZXI6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLnNjcm9sbC1jb250YWluZXItZXhwYW5kLWxnIHtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxufVxyXG4vKiovXHJcbi8qIGJyYW5kICovXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIHBhZGRpbmctdG9wOiAwLjQwNjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjQwNjI1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLm5hdmJhci1icmFuZCBpbWcge1xyXG4gIHdpZHRoOiAyMTBweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5uYXZiYXItYnJhbmQgaW1nIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtbWVkaWEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMTQwcHggMCAwcHggMDtcclxuICB9XHJcbiAgLyogaDQgLnNvY2lhbC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfSAqL1xyXG59XHJcbi5mb250LXdlaWdodC1ib2xkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLm1zLXNtLTMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLyoqL1xyXG5cclxuLyogbmF2YmFyICovXHJcbi5uYXZiYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG59XHJcbi5uYXZiYXItbmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi8qICAqL1xyXG5cclxuLyogU29jaWFsIE1lZGlhICovXHJcbi5uYXZiYXItbWVkaWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxufVxyXG4vKiAgKi9cclxuXHJcbi5zdGVwLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmVhbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1uYXYge1xyXG4gIGZsZXg6IDM7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogNC4gQmFubmVyICovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmJhbm5lci1tZWRpYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJhbm5lci1tZWRpYSAuc29jaWFsLWljb24gYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zb2NpYWwtaWNvbiB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4jYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2hlYWRlci5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuI2Jhbm5lciB7XHJcbiAgaGVpZ2h0OiAxMjB2aDtcclxufVxyXG4jYmFubmVyLWNvbnRlbnQucm93IHtcclxuICBwYWRkaW5nLXRvcDogMTcwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4jYmFubmVyIGgxIHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuXHJcbiNiYW5uZXIgLnNlY3Rpb24taGVhZGluZzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNiYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIucG5nXCIpIG5vLXJlcGVhdCByaWdodCB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIDIuIFJvYWRNYXAgKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jcm9hZG1hcC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL3JvYWRtYXAucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLyogbWluLWhlaWdodDogMjAwdmg7ICovXHJcbn1cclxuXHJcbi5yb2FkbWFwLWJsb2NrLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMyZjJiM2E7XHJcbiAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnJvYWRtYXAtYmxvY2sgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAyNXB4IDAgMjVweCAwO1xyXG59XHJcblxyXG4ucm9hZG1hcC1ibG9jayBsaSB7XHJcbiAgcGFkZGluZzogMTRweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UxZTFlMTtcclxufVxyXG5cclxuLnJvYWRtYXAtYmxvY2sgbGk6bGFzdC1vZi10eXBlIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5yb2FkbWFwLWJsb2NrIGgzIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBjb2xvcjogI2QyYjM1NjtcclxufVxyXG5cclxuLnJvYWRtYXAtc3ViIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgbWFyZ2luOiAwIDAgMjVweCAwO1xyXG59XHJcblxyXG4ucm9hZG1hcCB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNyb2FkbWFwLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9yb2FkbWFwLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogOTAwcHggMTAwMHB4OyAqL1xyXG4gICAgbWluLWhlaWdodDogMjAwdmg7XHJcbiAgfVxyXG59XHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogMy4gVGVhbSAqL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiN0ZWFtLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvdGVhbS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvKiBtaW4taGVpZ2h0OiAyMDB2aDsgKi9cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiA0LiBTYXZlIHRoZSBiZWVzICovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuI3NhdmViZWVzLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvc2F2ZXRoZWJlZXMucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWluLWhlaWdodDogMjAwdmg7XHJcbn1cclxuXHJcbiNyaWdodC1jb250ZW50LnJvdyB7XHJcbiAgcmlnaHQ6IC00MCU7XHJcbiAgdG9wOiAtMjAwcHg7XHJcbn1cclxuLmJlZXMtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmIzYTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbnAucDEge1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5wLnAyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxucC5wMyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbnAucDQge1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNzYXZlYmVlcy1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvc2F2ZXRoZWJlZXMtbW9iaWxlLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyXHJcbiAgICAgIHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogOTAwcHggMTAwMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cclxuICAgIG1pbi1oZWlnaHQ6IDIwMHZoO1xyXG4gIH1cclxuICAjcmlnaHQtY29udGVudC5yb3cge1xyXG4gICAgdG9wOiAtMjAwcHg7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tQmFubmVyIEJ1dHRvbnMtLS0tLS0tLS0tICovXHJcblxyXG4vKiBCdXR0b24gVGV4dCAqL1xyXG4uYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZiwgQXJpYWwsIEhlbHZldGljYTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBCdXR0b24gQ29sb3IgKi9cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogQnV0dG9uIEhvdmVyIENvbG9yICovXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiAjZDJiMzU2O1xyXG4gIGJvcmRlci1jb2xvcjogI2QyYjM1NjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
function isInViewport(elm) {
  var elementTop = elm.offsetTop;
  var elementBottom = elementTop + elm.offsetHeight;
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
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeModule, ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_7__.NgxPageScrollCoreModule]
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
    headingtext: 'A dynamic world of bubble bees                                                                            ',
    buttontext: 'join the hive',
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