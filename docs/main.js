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
  decls: 185,
  vars: 20,
  consts: [[1, "main-container"], [1, "scroll-container", "scroll-container-expand-lg", "shadow-none"], ["href", "https://www.bubblebees-nft.com", "target", "_blank", "rel", "noreferrer", 1, "navbar-brand", "font-weight-bolder", "ms-sm-3"], ["alt", "logo", "src", "../assets/images/logo.png"], [1, "navbar"], [1, "navbar-nav"], ["pageScroll", "", 1, "step-section", 3, "ngClass", "click"], [1, "vertical-nav"], [1, "section-name"], [1, "step-media"], [1, "social-icon"], ["target", "_blank", "title", "Twitter", "href", "https://twitter.com/Bubblebees_NFT"], [1, "fa", "fa-twitter", "fa-1x"], ["href", "https:www.instagram.com/bubblebeesnft", "target", "_blank", "title", "Instagram", 1, "text-dark", "text-uppercase", "text-lg", "mb-2", "mb-lg-0"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["href", "http://www.discord.com/BubblebeesNFT", "target", "_blank", "title", "Discord"], [3, "icon"], ["id", "1", 1, "scroll-outer"], ["home", ""], [1, "card-container"], ["id", "banner", "data-enllax-ratio", ".5", 1, "scrollto", "clearfix"], ["id", "banner-content", 1, "row", "clearfix"], [1, "col-38"], [1, "section-heading"], [1, "banner-media"], [1, "fa", "fa-twitter", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-instagram", "fa-2x"], ["href", "https://www.discord.com/BubblebeesNFT", "target", "_blank", "title", "Discord", 1, "text-dark", "text-uppercase", "text-lg", "mb-2", "mb-lg-0"], ["size", "2x", 3, "icon"], [1, "button", 3, "href"], ["id", "2", 1, "scroll-outer"], ["roadmap", ""], ["id", "roadmap-content", 1, "secondary-color", "text-center", "scrollto", "clearfix"], [1, "row", "clearfix"], [1, "section-title"], ["data-wow-delay", "0.4s", 1, "roadmap-block", "col-3", "wow", "fadeInUp"], [1, "roadmap-block-content"], ["href", "#", 1, "button"], ["data-wow-delay", "0.6s", 1, "roadmap-block", "featured", "col-3", "wow", "fadeInUp"], ["data-wow-delay", "0.8s", 1, "roadmap-block", "col-3", "wow", "fadeInUp"], ["href", "#", "disbled", "true", 1, "button"], ["id", "3", 1, "scroll-outer"], ["team", ""], ["id", "team-content", "data-enllax-ratio", ".2", 1, "scrollto", "text-center"], [1, "test-container"], [1, "col-2", "testimonial", "classic"], ["src", "../assets/images/avatar-design.png", "alt", "User", 1, "avatar"], ["src", "../assets/images/avatar-dev.png", "alt", "User", 1, "avatar"], ["id", "4", 1, "scroll-outer"], ["savethebees", ""], ["id", "savebees-content", "data-enllax-ratio", ".5", 1, "scrollto", "clearfix", "text-center"], ["id", "right-content", 1, "row", "clearfix"], [1, "col-61"], [1, "bees-content"], [1, "p1"], [1, "container"], [1, "box"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_6_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r0, 1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_10_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](58);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r1, 2));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Roadmap");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_14_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](129);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r2, 3));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_18_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](150);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r3, 4));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7)(20, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Our Story");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9)(23, "div", 10)(24, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9)(27, "div", 10)(28, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9)(31, "div", 10)(32, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "fa-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17, 18)(36, "div", 19)(37, "header", 20)(38, "div", 21)(39, "div", 22)(40, "div", 23)(41, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 24)(46, "div", 10)(47, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 10)(50, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 10)(53, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "fa-icon", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 30, 31)(59, "div", 19)(60, "section", 32)(61, "div", 33)(62, "div", 23)(63, "h2", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Roadmap 2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 35)(66, "div", 36)(67, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "[I] Wake Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ul")(70, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " After a long winter the bublebees woke up in a different world. The distruction of nature left them disordered and unsettled. Our mission is to set up a place where they can rebuild what was lost. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Website launch");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Partnership with association protecting bees, helping projects that connects nature, culture and customs ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Competitions, recompensating community");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Launch of limited edition BlubbleBees Nfts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "First 1000 Common, Rare and Super rare colony of bees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "MINT BEES");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 38)(85, "div", 36)(86, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "[II] Reconstruction");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "ul")(89, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " The community now have the resources to build their hive. They organize and work hard to create their homes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Launch of second edition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Collection of 1000 nfts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Community rewards");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Bring bees and habitats into the virtual world");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Engage, analyze and scale our community with Zealy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Involve more partners into our vision");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "More to come ...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "MINT BEES");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 39)(108, "div", 36)(109, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "[III] Thrive");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "ul")(112, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " The bublebees had overcome their threat, the habitat is growing and they happily return to their buzzing glory. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Release last collection of 1000 Nfts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Virtual World of bees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "VR Experiences");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, " Taking further the collaboration with our partners sustaining nature and habitats ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Launch of BubbleBees marchandise");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "More to come ...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "MINT BEES");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 41, 42)(130, "div", 19)(131, "div", 43)(132, "div", 33)(133, "div", 23)(134, "h2", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Meet our team");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 44)(137, "blockquote", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "img", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "My goal as a designer for this NFT project is to create digital assets that are not only visually appealing but also valuable and meaningful to our audience. I believe that NFTs have the potential to change the way we think about art, ownership, and value, and I'm thrilled to be part of a team that's at the forefront of this exciting new field.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Irina Bogdan - Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "blockquote", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "img", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Responsible for developing, deploying, securing and managing the technical infrastructure that supports the creation and storage of unique digital assets on a blockchain.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Florina Clapon - IT specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 48, 49)(151, "div", 19)(152, "div", 50)(153, "div", 33)(154, "div", 23)(155, "h2", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Our Story");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 51)(158, "div", 52)(159, "div", 23)(160, "div", 53)(161, "p", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, " Our collection is shared between 3 phases of bee\u2019s evolution , each containing 1000 Nfts. Each NFT in the BubbleBees collection represents a unique artistic interpretation of bees. The collection features are crafted by passionate members about both art and environmental conservation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, " The NFTs in this project are more than just digital artworks. They serve as a bridge between the virtual and physical worlds, carrying a mission to make a tangible impact on bee preservation. A portion of the proceeds from each NFT sale will be donated to organizations dedicated to bee conservation, such as research institutes, beekeeping associations, environmental nonprofits, and nature initiatives. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "p", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, " The BubbleBees NFTs offer unique benefits and experiences for their owners, these include: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 55)(168, "div", 56)(169, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Exclusive Benefits");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, " NFT owners gain access to limited-edition physical merchandise, special discounts, interactive experiences, and many others to come. They become part of a vibrant community that shares a passion for art and bee conservation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 56)(174, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Limited Editions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, " Each NFT is part of a limited edition series, ensuring its scarcity and collectible value. Owning a piece from the BubbleBees NFTs means being part of a select group of individuals who appreciate the importance of bees and support their protection. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 56)(179, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Digital and Physical Artifacts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, " Some NFTs in the collection come bundled with additional perks, such as high-resolution digital versions of the artwork for personal use, and the possibility to receive a physical art print of the NFT, enhancing the connection between the digital and physical realms. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "p", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, " The BubbleBees is not only an NFT collection but a movement that strives to educate, inspire, and mobilize individuals to take action for bee preservation. By combining art, technology, and philanthropy, this project raises awareness about the crucial role bees play in our ecosystem, encouraging a deeper appreciation for the intricate harmony of nature. ");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.heading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.headingtext);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.header.buttonlink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.buttontext);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
  styles: [".main-container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  height: 100vh;\r\n  width: 100%;\r\n  overflow-x: clip;\r\n}\r\n\r\n.scroll-outer[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.section-name[_ngcontent-%COMP%] {\r\n  max-width: 140px;\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.step-section.active[_ngcontent-%COMP%]   .section-name[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #d2b356;\r\n  font-size: 15px;\r\n  font-weight: ;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #2f2b3a;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding: 25px;\r\n}\r\n\r\n.scroll-container[_ngcontent-%COMP%] {\r\n  \r\n  opacity: 0.6;\r\n  position: fixed;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1rem;\r\n  top: 0;\r\n  z-index: 9999;\r\n  background-color: #2f2b3a;\r\n  padding-top: 1.5rem !important;\r\n  padding-right: 1.5rem !important;\r\n  padding-left: 1.5rem !important;\r\n  width: 100%;\r\n}\r\n\r\nshadow-none[_ngcontent-%COMP%] {\r\n  box-shadow: none !important;\r\n}\r\n\r\n.scroll-container[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n@media (min-width: 992px) {\r\n  .scroll-container-expand-lg[_ngcontent-%COMP%] {\r\n    flex-wrap: nowrap;\r\n    justify-content: flex-start;\r\n  }\r\n}\r\n\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  padding-top: 0.40625rem;\r\n  padding-bottom: 0.40625rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.125rem;\r\n  white-space: nowrap;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 210px;\r\n}\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 90px;\r\n  }\r\n\r\n  .step-media[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .section-heading[_ngcontent-%COMP%] {\r\n    padding: 140px 0 0px 0;\r\n  }\r\n  \r\n}\r\n.font-weight-bolder[_ngcontent-%COMP%] {\r\n  font-weight: 700 !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ms-sm-3[_ngcontent-%COMP%] {\r\n    margin-left: 1rem !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  flex-grow: 1;\r\n  align-items: center;\r\n  display: flex !important;\r\n  flex-basis: auto;\r\n}\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n  margin-left: auto !important;\r\n}\r\n\r\n\r\n\r\n.navbar-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n  margin-left: auto !important;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  margin-right: 0.5rem !important;\r\n  margin-left: 0.5rem !important;\r\n  align-items: center !important;\r\n  display: flex !important;\r\n}\r\n\r\n\r\n.step-section[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  background-color: cream;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.vertical-nav[_ngcontent-%COMP%] {\r\n  flex: 3;\r\n}\r\n\r\n\r\n\r\n\r\n.banner-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n}\r\n.banner-media[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n.social-icon[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  padding-right: 8px;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%] {\r\n  background: url('header.png') no-repeat center top;\r\n  background-size: cover;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%] {\r\n  height: 120vh;\r\n}\r\n#banner-content.row[_ngcontent-%COMP%] {\r\n  padding-top: 170px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  padding-top: 5%;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: block;\r\n  width: 30px;\r\n  height: 5px;\r\n  margin-top: 30px;\r\n}\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #banner[_ngcontent-%COMP%] {\r\n    background: url('header.png') no-repeat right top;\r\n    background-size: cover;\r\n  }\r\n}\r\n\r\n\r\n\r\n#roadmap-content[_ngcontent-%COMP%] {\r\n  background: url('roadmap.png') no-repeat center top;\r\n  background-size: cover;\r\n  \r\n}\r\n\r\n.roadmap-block-content[_ngcontent-%COMP%] {\r\n  background: #2f2b3a;\r\n  padding: 25px 25px 25px 25px;\r\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\r\n  transition: all 0.2s ease-in-out 0s;\r\n  position: relative;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 25px 0 25px 0;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 14px 0;\r\n  border-bottom: 1px dotted #e1e1e1;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n  border: none;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  text-transform: uppercase;\r\n  padding-bottom: 0;\r\n  color: #d2b356;\r\n}\r\n\r\n.roadmap-sub[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  color: #ccc;\r\n  margin: 0 0 25px 0;\r\n}\r\n\r\n.roadmap[_ngcontent-%COMP%] {\r\n  background: #f5f5f5;\r\n  padding: 25px;\r\n  position: relative;\r\n}\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #roadmap-content[_ngcontent-%COMP%] {\r\n    background: url('roadmap.png') no-repeat center top;\r\n    \r\n    min-height: 200vh;\r\n  }\r\n}\r\n\r\n\r\n\r\n#team-content[_ngcontent-%COMP%] {\r\n  background: url('team.png') no-repeat center top;\r\n  background-size: cover;\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n#savebees-content[_ngcontent-%COMP%] {\r\n  background: url('savethebees.png') no-repeat center top;\r\n  background-size: cover;\r\n  min-height: 200vh;\r\n}\r\n\r\n#right-content.row[_ngcontent-%COMP%] {\r\n  right: -40%;\r\n  top: -200px;\r\n}\r\n.bees-content[_ngcontent-%COMP%] {\r\n  background-color: #2f2b3a;\r\n  opacity: 0.9;\r\n  text-align:justify;\r\n  padding-bottom: 20px;\r\n}\r\n\r\np.p1[_ngcontent-%COMP%] {\r\n  padding-left: 30px;\r\n  padding-right: 50px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  padding-right: 50px;\r\n  font-family: Arial, sans-serif;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n  flex-basis: 30%;\r\n  background-color: #4d485a;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  text-align: left;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  margin-bottom: 10px;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n}\r\n\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #savebees-content[_ngcontent-%COMP%] {\r\n    background: url('savethebees-mobile.png') no-repeat center\r\n      top;\r\n    background-size: 900px 1000px;\r\n    \r\n    min-height: 200vh;\r\n  }\r\n  #right-content.row[_ngcontent-%COMP%] {\r\n    top: -200px;\r\n    right: -20px;\r\n  }\r\n  .container[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .box[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 16px;\r\n  color: white;\r\n}\r\n\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  border-color: white;\r\n}\r\n\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  color: #d2b356;\r\n  border-color: #d2b356;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBLHFCQUFxQjtBQUNyQjtFQUNFOzs7Ozs7OztpQkFRZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixNQUFNO0VBQ04sYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLDJCQUEyQjtFQUM3QjtBQUNGO0FBQ0EsR0FBRztBQUNILFVBQVU7QUFDVjtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTs7S0FFRztBQUNMO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGO0FBQ0EsR0FBRzs7QUFFSCxXQUFXO0FBQ1g7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5QjtBQUNBLEtBQUs7O0FBRUwsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5Qix3QkFBd0I7QUFDMUI7QUFDQSxLQUFLOztBQUVMO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUEsNkZBQTZGO0FBQzdGLGNBQWM7QUFDZCw2RkFBNkY7QUFDN0Y7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0RBQW1FO0VBQ25FLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTtJQUNFLGlEQUFrRTtJQUNsRSxzQkFBc0I7RUFDeEI7QUFDRjtBQUNBLDZGQUE2RjtBQUM3RixlQUFlO0FBQ2YsNkZBQTZGO0FBQzdGO0VBQ0UsbURBQW9FO0VBQ3BFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLDJDQUEyQztFQUMzQyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0U7SUFDRSxtREFBb0U7SUFDcEUsbUNBQW1DO0lBQ25DLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0EsNkZBQTZGO0FBQzdGLFlBQVk7QUFDWiw2RkFBNkY7QUFDN0Y7RUFDRSxnREFBaUU7RUFDakUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQSw2RkFBNkY7QUFDN0YscUJBQXFCO0FBQ3JCLDZGQUE2RjtBQUM3RjtFQUNFLHVEQUF3RTtFQUN4RSxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDREQUE0RDtFQUM1RCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRTtTQUNLO0lBQ0wsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQSx1Q0FBdUM7O0FBRXZDLGdCQUFnQjtBQUNoQjtFQUNFLHNEQUFzRDtFQUN0RCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogY2xpcDtcclxufVxyXG5cclxuLnNjcm9sbC1vdXRlciB7XHJcbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG59XHJcblxyXG4uc2VjdGlvbi1uYW1lIHtcclxuICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5zdGVwLXNlY3Rpb24uYWN0aXZlIC5zZWN0aW9uLW5hbWUge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJiMzU2O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMmYyYjNhO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgaDMge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuLyogc2Nyb2xsLWNvbnRhaW5lciAqL1xyXG4uc2Nyb2xsLWNvbnRhaW5lciB7XHJcbiAgLyogbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgdG9wOiA1JTtcclxuICByaWdodDogMTAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY2OTdkO1xyXG4gIG9wYWNpdHk6IDAuNzsgKi9cclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjJiM2E7XHJcbiAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnNoYWRvdy1ub25lIHtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwtY29udGFpbmVyOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5zY3JvbGwtY29udGFpbmVyLWV4cGFuZC1sZyB7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcbn1cclxuLyoqL1xyXG4vKiBicmFuZCAqL1xyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBwYWRkaW5nLXRvcDogMC40MDYyNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC40MDYyNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5uYXZiYXItYnJhbmQgaW1nIHtcclxuICB3aWR0aDogMjEwcHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDI4MHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubmF2YmFyLWJyYW5kIGltZyB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICB9XHJcblxyXG4gIC5zdGVwLW1lZGlhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDE0MHB4IDAgMHB4IDA7XHJcbiAgfVxyXG4gIC8qIGg0IC5zb2NpYWwtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH0gKi9cclxufVxyXG4uZm9udC13ZWlnaHQtYm9sZGVyIHtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5tcy1zbS0zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi8qKi9cclxuXHJcbi8qIG5hdmJhciAqL1xyXG4ubmF2YmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1iYXNpczogYXV0bztcclxufVxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4vKiAgKi9cclxuXHJcbi8qIFNvY2lhbCBNZWRpYSAqL1xyXG4ubmF2YmFyLW1lZGlhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogICovXHJcblxyXG4uc3RlcC1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY3JlYW07XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4udmVydGljYWwtbmF2IHtcclxuICBmbGV4OiAzO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIDQuIEJhbm5lciAqL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5iYW5uZXItbWVkaWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5iYW5uZXItbWVkaWEgLnNvY2lhbC1pY29uIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc29jaWFsLWljb24ge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxuI2Jhbm5lciB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiNiYW5uZXIge1xyXG4gIGhlaWdodDogMTIwdmg7XHJcbn1cclxuI2Jhbm5lci1jb250ZW50LnJvdyB7XHJcbiAgcGFkZGluZy10b3A6IDE3MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuI2Jhbm5lciBoMSB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG4jYmFubmVyIC5zZWN0aW9uLWhlYWRpbmc6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDI4MHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAjYmFubmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLnBuZ1wiKSBuby1yZXBlYXQgcmlnaHQgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiAyLiBSb2FkTWFwICovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuI3JvYWRtYXAtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9yb2FkbWFwLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC8qIG1pbi1oZWlnaHQ6IDIwMHZoOyAqL1xyXG59XHJcblxyXG4ucm9hZG1hcC1ibG9jay1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjMmYyYjNhO1xyXG4gIHBhZGRpbmc6IDI1cHggMjVweCAyNXB4IDI1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5yb2FkbWFwLWJsb2NrIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMjVweCAwIDI1cHggMDtcclxufVxyXG5cclxuLnJvYWRtYXAtYmxvY2sgbGkge1xyXG4gIHBhZGRpbmc6IDE0cHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNlMWUxZTE7XHJcbn1cclxuXHJcbi5yb2FkbWFwLWJsb2NrIGxpOmxhc3Qtb2YtdHlwZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucm9hZG1hcC1ibG9jayBoMyB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgY29sb3I6ICNkMmIzNTY7XHJcbn1cclxuXHJcbi5yb2FkbWFwLXN1YiB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIG1hcmdpbjogMCAwIDI1cHggMDtcclxufVxyXG5cclxuLnJvYWRtYXAge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDI4MHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAjcm9hZG1hcC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvcm9hZG1hcC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IDkwMHB4IDEwMDBweDsgKi9cclxuICAgIG1pbi1oZWlnaHQ6IDIwMHZoO1xyXG4gIH1cclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIDMuIFRlYW0gKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jdGVhbS1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL3RlYW0ucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLyogbWluLWhlaWdodDogMjAwdmg7ICovXHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogNC4gU2F2ZSB0aGUgYmVlcyAqL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiNzYXZlYmVlcy1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL3NhdmV0aGViZWVzLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHZoO1xyXG59XHJcblxyXG4jcmlnaHQtY29udGVudC5yb3cge1xyXG4gIHJpZ2h0OiAtNDAlO1xyXG4gIHRvcDogLTIwMHB4O1xyXG59XHJcbi5iZWVzLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjJiM2E7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIHRleHQtYWxpZ246anVzdGlmeTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxucC5wMSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgZmxleC1iYXNpczogMzAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDQ4NWE7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmg0IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNzYXZlYmVlcy1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvc2F2ZXRoZWJlZXMtbW9iaWxlLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyXHJcbiAgICAgIHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogOTAwcHggMTAwMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cclxuICAgIG1pbi1oZWlnaHQ6IDIwMHZoO1xyXG4gIH1cclxuICAjcmlnaHQtY29udGVudC5yb3cge1xyXG4gICAgdG9wOiAtMjAwcHg7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYm94IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tQmFubmVyIEJ1dHRvbnMtLS0tLS0tLS0tICovXHJcblxyXG4vKiBCdXR0b24gVGV4dCAqL1xyXG4uYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZiwgQXJpYWwsIEhlbHZldGljYTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBCdXR0b24gQ29sb3IgKi9cclxuLmJ1dHRvbiB7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogQnV0dG9uIEhvdmVyIENvbG9yICovXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiAjZDJiMzU2O1xyXG4gIGJvcmRlci1jb2xvcjogI2QyYjM1NjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    headingtext: 'A collection of digital artworks celebrating the vital role of bees in our ecosystem.                                                                          ',
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