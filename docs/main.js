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
  decls: 229,
  vars: 23,
  consts: [[1, "main-container"], [1, "scroll-container", "scroll-container-expand-lg", "shadow-none"], ["href", "https://www.bubblebees-nft.com", "target", "_blank", "rel", "noreferrer", 1, "navbar-brand", "font-weight-bolder", "ms-sm-3"], ["alt", "logo", "src", "../assets/images/logo.png"], [1, "navbar"], [1, "navbar-nav"], ["pageScroll", "", 1, "step-section", 3, "ngClass", "click"], [1, "vertical-nav"], [1, "section-name"], [1, "step-media"], [1, "social-icon"], ["target", "_blank", "title", "Twitter", "href", "https://twitter.com/Bubblebees_NFT"], [1, "fa", "fa-twitter", "fa-1x"], ["href", "https://www.instagram.com/bubblebeesnft", "target", "_blank", "title", "Instagram", 1, "text-dark", "text-uppercase", "text-lg", "mb-2", "mb-lg-0"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["href", "http://www.discord.com/BubblebeesNFT", "target", "_blank", "title", "Discord"], [3, "icon"], ["id", "1", 1, "scroll-outer"], ["home", ""], [1, "card-container"], ["id", "banner", "data-enllax-ratio", ".5", 1, "scrollto", "clearfix"], ["id", "banner-content", 1, "row", "clearfix"], [1, "col-38"], [1, "section-heading"], [1, "banner-media"], [1, "fa", "fa-twitter", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-instagram", "fa-2x"], ["href", "https://www.discord.com/BubblebeesNFT", "target", "_blank", "title", "Discord", 1, "text-dark", "text-uppercase", "text-lg", "mb-2", "mb-lg-0"], ["size", "2x", 3, "icon"], [1, "button", 3, "href"], ["id", "2", 1, "scroll-outer"], ["roadmap", ""], ["id", "roadmap-content", 1, "secondary-color", "text-center", "scrollto", "clearfix"], [1, "row", "clearfix"], [1, "section-title"], ["data-wow-delay", "0.4s", 1, "roadmap-block", "col-3", "wow", "fadeInUp"], [1, "roadmap-block-content"], ["href", "#", 1, "button"], ["data-wow-delay", "0.6s", 1, "roadmap-block", "featured", "col-3", "wow", "fadeInUp"], ["data-wow-delay", "0.8s", 1, "roadmap-block", "col-3", "wow", "fadeInUp"], ["href", "#", "disbled", "true", 1, "button"], ["id", "3", 1, "scroll-outer"], ["team", ""], ["id", "team-content", "data-enllax-ratio", ".2", 1, "scrollto", "text-center"], [1, "test-container"], [1, "col-2", "testimonial", "classic"], ["src", "../assets/images/avatar-design.png", "alt", "User", 1, "avatar"], ["src", "../assets/images/avatar-dev.png", "alt", "User", 1, "avatar"], ["id", "4", 1, "scroll-outer"], ["ourstory", ""], ["id", "savebees-content", "data-enllax-ratio", ".5", 1, "scrollto", "clearfix", "text-center"], ["id", "right-content", 1, "row", "clearfix"], [1, "col-61"], [1, "bees-content"], [1, "p1"], [1, "container"], [1, "box"], ["id", "5", 1, "scroll-outer"], ["wesupport", ""], ["id", "support-content", 1, "secondary-color", "text-center", "scrollto", "clearfix"], [1, "wesupport-container", "col-2"], [1, "row", "partners", "classic"], [1, "support-item"], ["src", "../assets/images/ViaTransilvanica.png", "alt", "User", 1, "avatar"], ["href", "https://www.viatransilvanica.com/", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], ["src", "../assets/images/logo-appaps.png", "alt", "User", 1, "avatar"], ["href", "https://appaps.org/", "target", "_blank"], ["id", "landing-footer", 1, "clearfix"], ["id", "copyright"], [1, "fa", "fa-copyright", "fa-1x"], ["id", "footer-social app-social", 1, "col-2", "social-icons"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_6_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r0, 1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_10_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](62);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r1, 2));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Roadmap");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_14_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](133);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r2, 3));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_18_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](154);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.scrollTo(_r3, 4));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7)(20, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Our Story");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_22_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](190);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "fa-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17, 18)(40, "div", 19)(41, "header", 20)(42, "div", 21)(43, "div", 22)(44, "div", 23)(45, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 24)(50, "div", 10)(51, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 10)(54, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 10)(57, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "fa-icon", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 30, 31)(63, "div", 19)(64, "section", 32)(65, "div", 33)(66, "div", 23)(67, "h2", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Roadmap 2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 35)(70, "div", 36)(71, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "[I] Wake Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ul")(74, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " After a long winter the bublebees woke up in a different world. The distruction of nature left them disordered and unsettled. Our mission is to set up a place where they can rebuild what was lost. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Website launch");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Partnership with association protecting bees, helping projects that connects nature, culture and customs ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Competitions, recompensating community");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Launch of limited edition BlubbleBees Nfts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "First 1000 Common, Rare and Super rare colony of bees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "MINT BEES");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 38)(89, "div", 36)(90, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "[II] Reconstruction");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "ul")(93, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " The community now have the resources to build their hive. They organize and work hard to create their homes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Launch of second edition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Collection of 1000 nfts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Community rewards");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Bring bees and habitats into the virtual world");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Engage, analyze and scale our community with Zealy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Involve more partners into our vision");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "More to come ...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "MINT BEES");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 39)(112, "div", 36)(113, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "[III] Thrive");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "ul")(116, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, " The bublebees had overcome their threat, the habitat is growing and they happily return to their buzzing glory. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Release last collection of 1000 Nfts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Virtual World of bees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "VR Experiences");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, " Taking further the collaboration with our partners sustaining nature and habitats ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Launch of BubbleBees marchandise");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "More to come ...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "MINT BEES");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 41, 42)(134, "div", 19)(135, "div", 43)(136, "div", 33)(137, "div", 23)(138, "h2", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Meet our team");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 44)(141, "blockquote", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "img", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "My goal as a designer for this NFT project is to create digital assets that are not only visually appealing but also valuable and meaningful to our audience. I believe that NFTs have the potential to change the way we think about art, ownership, and value, and I'm thrilled to be part of a team that's at the forefront of this exciting new field.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Irina Bogdan - Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "blockquote", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "img", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "q");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Believing in the transformative power of blending art and technology. Bringing together the best of both worlds to create a digital realm where art flourishes and technology amplifies the human experience. Responsible for the technical side that supports the creation and storage of unique digital assets on a blockchain.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Florina Clapon - IT specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 48, 49)(155, "div", 19)(156, "div", 50)(157, "div", 33)(158, "div", 23)(159, "h2", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Our Story");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 51)(162, "div", 52)(163, "div", 23)(164, "div", 53)(165, "p", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, " Our collection reveals 3 phases of bee\u2019s evolution, each phase containing 1000 Nfts. Each NFT in the BubbleBees collection represents a unique artistic interpretation of bees. The collection features are crafted by passionate members about both art and environmental conservation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "p", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, " The NFTs in this project are more than just digital artworks. They serve as a bridge between the virtual and physical worlds, carrying a mission to make a tangible impact on bee preservation. A portion of the proceeds from each NFT sale will be donated to organizations dedicated to bee conservation, such as research institutes, beekeeping associations, environmental nonprofits, and nature initiatives. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "p", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, " The BubbleBees NFTs offer unique benefits and experiences for their owners, these include: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 55)(172, "div", 56)(173, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Exclusive Benefits");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, " NFT owners gain access to limited-edition physical merchandise, special discounts, interactive experiences, and many others to come. They become part of a vibrant community that shares a passion for art and bee conservation. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 56)(178, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Limited Editions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " Each NFT is part of a limited edition series, ensuring its scarcity and collectible value. Owning a piece from the BubbleBees NFTs means being part of a select group of individuals who appreciate the importance of bees and support their protection. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 56)(183, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Digital and Physical Artifacts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, " Some NFTs in the collection come bundled with additional perks, such as high-resolution digital versions of the artwork for personal use, and the possibility to receive a physical art print of the NFT, enhancing the connection between the digital and physical realms. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, " The BubbleBees is not only an NFT collection but a movement that strives to educate, inspire, and mobilize individuals to take action for bee preservation. By combining art, technology, and philanthropy, this project raises awareness about the crucial role bees play in our ecosystem, encouraging a deeper appreciation for the intricate harmony of nature. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 57, 58)(191, "div", 19)(192, "div", 59)(193, "div", 33)(194, "div", 23)(195, "h2", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "We support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Communities with shared values and ideals");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 60)(200, "blockquote", 61)(201, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "img", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 62)(204, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, " Via Transilvanica - \u201EThe road that unites\u201D is a long-distance trail of 1,400 kilometers that crosses Romania diagonally, from Putna to Drobeta Turnu Severin. Whether you're an avid hiker, a cycling enthusiast, or an equestrian lover, this trail offers an unforgettable experience. Via Transilvanica serves as a bridge connecting communities, promoting unity, and fostering a deeper understanding of Romania's rich cultural heritage. A project by T\u0103\u015Fuleasa Social, an NGO that deals with environmental preservation, education, social welfare, cultural development, and more. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "footer")(207, "a", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, " Via Transilvanica");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 60)(211, "blockquote", 61)(212, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "img", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 62)(215, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, " Association for the Protection of Wild Bees and Pollinators. With a mission to raise awareness about the invaluable contribution of bees to our environment, through engaging and immersive workshops, they bring bees right in front of the eyes of children and adults alike. Through their projects, this organization is sowing the seeds of compassion and cultivating a profound appreciation for the crucial role that bees play in our world. By nurturing this understanding, they empower individuals to take action, becoming ambassadors for the conservation of wild bees and pollinators. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "footer")(218, "a", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, " Appaps");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "footer", 68)(222, "div", 33)(223, "p", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "i", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, " 2023, BubbleBees ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, " Creating a buzz. Making an impact. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx.activeSection == 1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, ctx.activeSection == 2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c1, ctx.activeSection == 3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c1, ctx.activeSection == 4));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c1, ctx.activeSection == 5));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.heading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.headingtext);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.header.buttonlink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header.buttontext);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
  styles: [".main-container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  height: 100vh;\r\n  width: 100%;\r\n  overflow-x: clip;\r\n}\r\n\r\n.scroll-outer[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.section-name[_ngcontent-%COMP%] {\r\n  max-width: 140px;\r\n  color: #fff;\r\n  text-align: center;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.step-section.active[_ngcontent-%COMP%]   .section-name[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #d2b356;\r\n  font-size: 15px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: #2f2b3a;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  padding: 25px;\r\n}\r\n\r\n.scroll-container[_ngcontent-%COMP%] {\r\n  \r\n  opacity: 0.6;\r\n  position: fixed;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1rem;\r\n  top: 0;\r\n  z-index: 9999;\r\n  background-color: #2f2b3a;\r\n  padding-top: 1.5rem !important;\r\n  padding-right: 1.5rem !important;\r\n  padding-left: 1.5rem !important;\r\n  width: 100%;\r\n}\r\n\r\nshadow-none[_ngcontent-%COMP%] {\r\n  box-shadow: none !important;\r\n}\r\n\r\n.scroll-container[_ngcontent-%COMP%]:hover {\r\n  opacity: 1;\r\n}\r\n@media (min-width: 992px) {\r\n  .scroll-container-expand-lg[_ngcontent-%COMP%] {\r\n    flex-wrap: nowrap;\r\n    justify-content: flex-start;\r\n  }\r\n}\r\n\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n  padding-top: 0.40625rem;\r\n  padding-bottom: 0.40625rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.125rem;\r\n  white-space: nowrap;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 210px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  flex-grow: 1;\r\n  align-items: center;\r\n  display: flex !important;\r\n  flex-basis: auto;\r\n}\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n  margin-left: auto !important;\r\n}\r\n\r\n\r\n\r\n.navbar-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n  margin-left: auto !important;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  margin-right: 0.5rem !important;\r\n  margin-left: 0.5rem !important;\r\n  align-items: center !important;\r\n  display: flex !important;\r\n}\r\n\r\n\r\n.step-section[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  background-color: cream;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.vertical-nav[_ngcontent-%COMP%] {\r\n  flex: 3;\r\n}\r\n\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 90px;\r\n  }\r\n  .section-name[_ngcontent-%COMP%] {\r\n    max-width: 100px;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 5px;\r\n  }\r\n\r\n  .step-section[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    background-color: cream;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  .step-media[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .section-heading[_ngcontent-%COMP%] {\r\n    padding: 140px 0 0px 0;\r\n  }\r\n  \r\n}\r\n.font-weight-bolder[_ngcontent-%COMP%] {\r\n  font-weight: 700 !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .ms-sm-3[_ngcontent-%COMP%] {\r\n    margin-left: 1rem !important;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.banner-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n}\r\n.banner-media[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n.social-icon[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  padding-right: 8px;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%] {\r\n  background: url('header.png') no-repeat center top;\r\n  background-size: cover;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%] {\r\n  height: 120vh;\r\n}\r\n#banner-content.row[_ngcontent-%COMP%] {\r\n  padding-top: 170px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  padding-top: 5%;\r\n}\r\n\r\n#banner[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: block;\r\n  width: 30px;\r\n  height: 5px;\r\n  margin-top: 30px;\r\n}\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #banner[_ngcontent-%COMP%] {\r\n    background: url('Home_Background.png') no-repeat center top;\r\n    background-size: cover;\r\n  }\r\n}\r\n\r\n\r\n\r\n#roadmap-content[_ngcontent-%COMP%] {\r\n  background: url('roadmap.png') no-repeat center top;\r\n  background-size: cover;\r\n  \r\n}\r\n\r\n.roadmap-block-content[_ngcontent-%COMP%] {\r\n  background: #2f2b3a;\r\n  padding: 25px 25px 25px 25px;\r\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\r\n  transition: all 0.2s ease-in-out 0s;\r\n  position: relative;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin: 25px 0 25px 0;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 14px 0;\r\n  border-bottom: 1px dotted #e1e1e1;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\r\n  border: none;\r\n}\r\n\r\n.roadmap-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  text-transform: uppercase;\r\n  padding-bottom: 0;\r\n  color: #d2b356;\r\n}\r\n\r\n.roadmap-sub[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  color: #ccc;\r\n  margin: 0 0 25px 0;\r\n}\r\n\r\n.roadmap[_ngcontent-%COMP%] {\r\n  background: #f5f5f5;\r\n  padding: 25px;\r\n  position: relative;\r\n}\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #roadmap-content[_ngcontent-%COMP%] {\r\n    background: url('roadmap.png') no-repeat center top;\r\n    \r\n    min-height: 200vh;\r\n  }\r\n}\r\n\r\n\r\n\r\n#team-content[_ngcontent-%COMP%] {\r\n  background: url('team.png') no-repeat center top;\r\n  background-size: cover;\r\n  \r\n}\r\n\r\n.testimonial.classic[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]:before {\r\n  background: #d2b356;\r\n}\r\n\r\n\r\n\r\n\r\n#savebees-content[_ngcontent-%COMP%] {\r\n  background: url('savethebees.png') no-repeat center top;\r\n  background-size: cover;\r\n  min-height: 200vh;\r\n}\r\n\r\n#right-content.row[_ngcontent-%COMP%] {\r\n  right: -40%;\r\n  top: -200px;\r\n}\r\n.bees-content[_ngcontent-%COMP%] {\r\n  background-color: #2f2b3a;\r\n  opacity: 0.9;\r\n  text-align:justify;\r\n  padding-bottom: 20px;\r\n}\r\n\r\np.p1[_ngcontent-%COMP%] {\r\n  padding-left: 30px;\r\n  padding-right: 50px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  padding-right: 50px;\r\n  font-family: Arial, sans-serif;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n  flex-basis: 30%;\r\n  background-color: #4d485a;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  text-align: left;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  margin-bottom: 10px;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n}\r\n\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #savebees-content[_ngcontent-%COMP%] {\r\n    background: url('OurStory_Background.png') no-repeat center\r\n      top;\r\n    background-size: 450px 1100px;\r\n    \r\n    \r\n  }\r\n\r\n  #right-content.row[_ngcontent-%COMP%] {\r\n    top: -200px;\r\n    right: -20px;\r\n  }\r\n\r\n.bees-content[_ngcontent-%COMP%] {\r\n  background-color: #2f2b3a;\r\n  opacity: 0.9;\r\n  text-align:justify;\r\n  padding-bottom: 20px;\r\n  padding-top: 10px;\r\n  margin-top: 210px;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .box[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n#support-content[_ngcontent-%COMP%] {\r\n  background: url('roadmap.png') no-repeat center top;\r\n  background-size: cover;\r\n  \r\n}\r\n.partners[_ngcontent-%COMP%]{\r\n  border: 2px solid ;\r\n  border-radius: 1.5rem;\r\n  padding: 1em;\r\n}\r\n.partners[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-height: 100px;\r\n  border-radius: 250em;\r\n}\r\n\r\n.support-item[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]:before {\r\n  background: #d2b356;\r\n}\r\n.support-item[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]:before {\r\n  display: block;\r\n  content: \"\";\r\n  width: 30px;\r\n  height: 4px;\r\n  margin: 10px auto 15px auto;\r\n}\r\n\r\n@media (min-width: 280px) and (max-width: 767px) {\r\n  #support-content[_ngcontent-%COMP%] {\r\n    background: url('roadmap.png') no-repeat center top;\r\n    background-size: cover;\r\n  }\r\n  .partners.row[_ngcontent-%COMP%]{\r\n    max-width: 95%;\r\n  }\r\n  .support-item[_ngcontent-%COMP%]{\r\n    padding: 15px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#landing-footer[_ngcontent-%COMP%], #landing-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #landing-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-family: 'Open Sans', sans-serif, Arial, Helvetica;\r\n  font-size:12px;\r\n  font-weight:normal;\r\n  color:#999;\r\n  background-color: #2f2b3a;\r\n}\r\n\r\n\r\n\r\n#landing-footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color:#999;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", sans-serif, Arial, Helvetica;\r\n  font-size: 16px;\r\n  color: white;\r\n}\r\n\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  border-color: white;\r\n}\r\n\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  color: #d2b356;\r\n  border-color: #d2b356;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBLHFCQUFxQjtBQUNyQjtFQUNFOzs7Ozs7OztpQkFRZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixNQUFNO0VBQ04sYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLDJCQUEyQjtFQUM3QjtBQUNGO0FBQ0EsR0FBRztBQUNILFVBQVU7QUFDVjtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBLFdBQVc7QUFDWDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIs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c0Q7RUFDdEQsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6IGNsaXA7XHJcbn1cclxuXHJcbi5zY3JvbGwtb3V0ZXIge1xyXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cclxufVxyXG5cclxuLnNlY3Rpb24tbmFtZSB7XHJcbiAgbWF4LXdpZHRoOiAxNDBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcblxyXG4uc3RlcC1zZWN0aW9uLmFjdGl2ZSAuc2VjdGlvbi1uYW1lIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyYjM1NjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMyZjJiM2E7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciBoMyB7XHJcbiAgcGFkZGluZzogMjVweDtcclxufVxyXG4vKiBzY3JvbGwtY29udGFpbmVyICovXHJcbi5zY3JvbGwtY29udGFpbmVyIHtcclxuICAvKiBtYXgtd2lkdGg6IDEyMDBweDtcclxuICB0b3A6IDUlO1xyXG4gIHJpZ2h0OiAxMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZjY5N2Q7XHJcbiAgb3BhY2l0eTogMC43OyAqL1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmIzYTtcclxuICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuc2hhZG93LW5vbmUge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjcm9sbC1jb250YWluZXI6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLnNjcm9sbC1jb250YWluZXItZXhwYW5kLWxnIHtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxufVxyXG4vKiovXHJcbi8qIGJyYW5kICovXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIHBhZGRpbmctdG9wOiAwLjQwNjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjQwNjI1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLm5hdmJhci1icmFuZCBpbWcge1xyXG4gIHdpZHRoOiAyMTBweDtcclxufVxyXG4vKiBuYXZiYXIgKi9cclxuLm5hdmJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87XHJcbn1cclxuLm5hdmJhci1uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogICovXHJcblxyXG4vKiBTb2NpYWwgTWVkaWEgKi9cclxuLm5hdmJhci1tZWRpYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG59XHJcbi8qICAqL1xyXG5cclxuLnN0ZXAtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNyZWFtO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnZlcnRpY2FsLW5hdiB7XHJcbiAgZmxleDogMztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDI4MHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubmF2YmFyLWJyYW5kIGltZyB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICB9XHJcbiAgLnNlY3Rpb24tbmFtZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmVhbTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5zdGVwLW1lZGlhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDE0MHB4IDAgMHB4IDA7XHJcbiAgfVxyXG4gIC8qIGg0IC5zb2NpYWwtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH0gKi9cclxufVxyXG4uZm9udC13ZWlnaHQtYm9sZGVyIHtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5tcy1zbS0zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi8qKi9cclxuXHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiAxLiBCYW5uZXIgKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uYmFubmVyLW1lZGlhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYmFubmVyLW1lZGlhIC5zb2NpYWwtaWNvbiBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNvY2lhbC1pY29uIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbiNiYW5uZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4jYmFubmVyIHtcclxuICBoZWlnaHQ6IDEyMHZoO1xyXG59XHJcbiNiYW5uZXItY29udGVudC5yb3cge1xyXG4gIHBhZGRpbmctdG9wOiAxNzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbiNiYW5uZXIgaDEge1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG5cclxuI2Jhbm5lciAuc2VjdGlvbi1oZWFkaW5nOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAyODBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgI2Jhbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL0hvbWVfQmFja2dyb3VuZC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIDIuIFJvYWRNYXAgKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jcm9hZG1hcC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL3JvYWRtYXAucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLyogbWluLWhlaWdodDogMjAwdmg7ICovXHJcbn1cclxuXHJcbi5yb2FkbWFwLWJsb2NrLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMyZjJiM2E7XHJcbiAgcGFkZGluZzogMjVweCAyNXB4IDI1cHggMjVweDtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnJvYWRtYXAtYmxvY2sgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAyNXB4IDAgMjVweCAwO1xyXG59XHJcblxyXG4ucm9hZG1hcC1ibG9jayBsaSB7XHJcbiAgcGFkZGluZzogMTRweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UxZTFlMTtcclxufVxyXG5cclxuLnJvYWRtYXAtYmxvY2sgbGk6bGFzdC1vZi10eXBlIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5yb2FkbWFwLWJsb2NrIGgzIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBjb2xvcjogI2QyYjM1NjtcclxufVxyXG5cclxuLnJvYWRtYXAtc3ViIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgbWFyZ2luOiAwIDAgMjVweCAwO1xyXG59XHJcblxyXG4ucm9hZG1hcCB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNyb2FkbWFwLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9yb2FkbWFwLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogOTAwcHggMTAwMHB4OyAqL1xyXG4gICAgbWluLWhlaWdodDogMjAwdmg7XHJcbiAgfVxyXG59XHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyogMy4gVGVhbSAqL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiN0ZWFtLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvdGVhbS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvKiBtaW4taGVpZ2h0OiAyMDB2aDsgKi9cclxufVxyXG5cclxuLnRlc3RpbW9uaWFsLmNsYXNzaWMgZm9vdGVyOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogI2QyYjM1NjtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKiA0LiBTYXZlIHRoZSBiZWVzICovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuI3NhdmViZWVzLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvc2F2ZXRoZWJlZXMucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWluLWhlaWdodDogMjAwdmg7XHJcbn1cclxuXHJcbiNyaWdodC1jb250ZW50LnJvdyB7XHJcbiAgcmlnaHQ6IC00MCU7XHJcbiAgdG9wOiAtMjAwcHg7XHJcbn1cclxuLmJlZXMtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmIzYTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5wLnAxIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYm94IHtcclxuICBmbGV4LWJhc2lzOiAzMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNDg1YTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAyODBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgI3NhdmViZWVzLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9PdXJTdG9yeV9CYWNrZ3JvdW5kLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyXHJcbiAgICAgIHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDUwcHggMTEwMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cclxuICAgIC8qIG1pbi1oZWlnaHQ6IDIwMHZoOyAqL1xyXG4gIH1cclxuXHJcbiAgI3JpZ2h0LWNvbnRlbnQucm93IHtcclxuICAgIHRvcDogLTIwMHB4O1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gIH1cclxuXHJcbi5iZWVzLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjJiM2E7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIHRleHQtYWxpZ246anVzdGlmeTtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAyMTBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYm94IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIDUuIFdlU3VwcG9ydCAqL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiNzdXBwb3J0LWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvcm9hZG1hcC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvKiBtaW4taGVpZ2h0OiAyMDB2aDsgKi9cclxufVxyXG4ucGFydG5lcnN7XHJcbiAgYm9yZGVyOiAycHggc29saWQgO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuLnBhcnRuZXJzIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjUwZW07XHJcbn1cclxuXHJcbi5zdXBwb3J0LWl0ZW0gZm9vdGVyOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogI2QyYjM1NjtcclxufVxyXG4uc3VwcG9ydC1pdGVtIGZvb3RlcjpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMTVweCBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMjgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNzdXBwb3J0LWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9yb2FkbWFwLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5wYXJ0bmVycy5yb3d7XHJcbiAgICBtYXgtd2lkdGg6IDk1JTtcclxuICB9XHJcbiAgLnN1cHBvcnQtaXRlbXtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIDYuIEZvb3RlciAqL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4jbGFuZGluZy1mb290ZXIsICNsYW5kaW5nLWZvb3RlciBwLCAjbGFuZGluZy1mb290ZXIgYSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmLCBBcmlhbCwgSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICBjb2xvcjojOTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjJiM2E7XHJcbn1cclxuXHJcbi8qIEZvb3RlciBJY29uIENvbG9yICovXHJcblxyXG4jbGFuZGluZy1mb290ZXIgaSB7XHJcbiAgY29sb3I6Izk5OTtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS1CYW5uZXIgQnV0dG9ucy0tLS0tLS0tLS0gKi9cclxuXHJcbi8qIEJ1dHRvbiBUZXh0ICovXHJcbi5idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmLCBBcmlhbCwgSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbiBDb2xvciAqL1xyXG4uYnV0dG9uIHtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBCdXR0b24gSG92ZXIgQ29sb3IgKi9cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6ICNkMmIzNTY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZDJiMzU2O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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