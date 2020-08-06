function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/data.service */
    "./src/app/shared/data.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _trazilica_trazilica_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./trazilica/trazilica.component */
    "./src/app/trazilica/trazilica.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(dataService, translate) {
        _classCallCheck(this, AppComponent);

        this.dataService = dataService;
        this.translate = translate;
        this.title = 'governor';
        translate.addLangs(['hr', 'en']);
        translate.setDefaultLang('hr');
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (localStorage.getItem('language')) {
            var storedLang = localStorage.getItem('language');
            this.dataService.toChangeLang(storedLang);
            this.translate.use(storedLang);
          } else {
            localStorage.setItem('language', 'hr');
            this.dataService.toChangeLang('hr');
          }

          this.dataService.toFetchCounties();
          this.dataService.toFetchTowns();
          this.dataService.toFetchComunities();
          this.dataService.selectedLanguage.subscribe(function (language) {
            _this.translate.use(language);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-trazilica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _trazilica_trazilica_component__WEBPACK_IMPORTED_MODULE_4__["TrazilicaComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, HttpLoaderFactory */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/data.service */
    "./src/app/shared/data.service.ts");
    /* harmony import */


    var _trazilica_trazilica_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./trazilica/trazilica.component */
    "./src/app/trazilica/trazilica.component.ts");
    /* harmony import */


    var _shared_pretty_num_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/pretty-num.pipe */
    "./src/app/shared/pretty-num.pipe.ts");
    /* harmony import */


    var _shared_capitalise_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/capitalise.pipe */
    "./src/app/shared/capitalise.pipe.ts");
    /* harmony import */


    var _shared_alphabetical_order_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/alphabetical-order.pipe */
    "./src/app/shared/alphabetical-order.pipe.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _shared_no_data_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/no-data.pipe */
    "./src/app/shared/no-data.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _trazilica_trazilica_component__WEBPACK_IMPORTED_MODULE_9__["TrazilicaComponent"], _shared_pretty_num_pipe__WEBPACK_IMPORTED_MODULE_10__["PrettyNumPipe"], _shared_capitalise_pipe__WEBPACK_IMPORTED_MODULE_11__["CapitalisePipe"], _shared_alphabetical_order_pipe__WEBPACK_IMPORTED_MODULE_12__["AlphabeticalOrderPipe"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _shared_no_data_pipe__WEBPACK_IMPORTED_MODULE_16__["NoDataPipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _trazilica_trazilica_component__WEBPACK_IMPORTED_MODULE_9__["TrazilicaComponent"], _shared_pretty_num_pipe__WEBPACK_IMPORTED_MODULE_10__["PrettyNumPipe"], _shared_capitalise_pipe__WEBPACK_IMPORTED_MODULE_11__["CapitalisePipe"], _shared_alphabetical_order_pipe__WEBPACK_IMPORTED_MODULE_12__["AlphabeticalOrderPipe"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _shared_no_data_pipe__WEBPACK_IMPORTED_MODULE_16__["NoDataPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }
          })],
          providers: [_shared_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http);
    }
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/data.service */
    "./src/app/shared/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "active-lang": a0
      };
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(dataService) {
        _classCallCheck(this, HeaderComponent);

        this.dataService = dataService;
        this.selectedLanguage = 'hr';
      }

      _createClass(HeaderComponent, [{
        key: "useLang",
        value: function useLang(language) {
          this.dataService.toChangeLang(language);
          localStorage.setItem('language', language);
          this.selectedLanguage = language;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('language')) {
            this.selectedLanguage = localStorage.getItem('language');
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 7,
      vars: 6,
      consts: [[1, "container__menu"], ["src", "../assets/osijek.png", "alt", "Osijek"], [1, "container__menu__langs"], [3, "ngClass", "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_3_listener() {
            return ctx.useLang("hr");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "HR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_5_listener() {
            return ctx.useLang("en");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "EN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.selectedLanguage === "hr"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.selectedLanguage === "en"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".container__menu[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  height: 50px;\n  width: 60%;\n  margin: 0 20%;\n  position: fixed;\n  top: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n@media only screen and (max-width: 720px) {\n  .container__menu[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 10%;\n  }\n}\n.container__menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 20px;\n}\n.container__menu__langs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: transparent;\n  color: #fff;\n  padding: 5px 25px;\n  cursor: pointer;\n  margin-left: 25px;\n}\n@media only screen and (max-width: 450px) {\n  .container__menu__langs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 15px;\n    padding: 5px 15px;\n  }\n}\n.active-lang[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcTHVrYVBDXFxEZXNrdG9wXFxBbmd1bGFyXFxnb3Zlcm5vci9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0FKO0FERUk7RUFYRjtJQVlJLFVBQUE7SUFDQSxhQUFBO0VDQ0o7QUFDRjtBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDTjtBREdNO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRFI7QURHUTtFQVJGO0lBU0ksaUJBQUE7SUFDQSxpQkFBQTtFQ0FSO0FBQ0Y7QURNQTtFQUNFLHVCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgJl9fbWVudSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAwIDIwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgbWFyZ2luOiAwIDEwJTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogOTBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2xhbmdzIHtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAyNXB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hY3RpdmUtbGFuZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn0iLCIuY29udGFpbmVyX19tZW51IHtcbiAgcGFkZGluZzogMTVweCAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCAyMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5jb250YWluZXJfX21lbnUge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIDEwJTtcbiAgfVxufVxuLmNvbnRhaW5lcl9fbWVudSBpbWcge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLmNvbnRhaW5lcl9fbWVudV9fbGFuZ3Mgc3BhbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHggMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNvbnRhaW5lcl9fbWVudV9fbGFuZ3Mgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gIH1cbn1cblxuLmFjdGl2ZS1sYW5nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/alphabetical-order.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/alphabetical-order.pipe.ts ***!
    \***************************************************/

  /*! exports provided: AlphabeticalOrderPipe */

  /***/
  function srcAppSharedAlphabeticalOrderPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlphabeticalOrderPipe", function () {
      return AlphabeticalOrderPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlphabeticalOrderPipe = /*#__PURE__*/function () {
      function AlphabeticalOrderPipe() {
        _classCallCheck(this, AlphabeticalOrderPipe);
      }

      _createClass(AlphabeticalOrderPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value != null) {
            return value.sort(function (a, b) {
              return a.name.localeCompare(b.name);
            });
          } else {
            return;
          }
        }
      }]);

      return AlphabeticalOrderPipe;
    }();

    AlphabeticalOrderPipe.ɵfac = function AlphabeticalOrderPipe_Factory(t) {
      return new (t || AlphabeticalOrderPipe)();
    };

    AlphabeticalOrderPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "alphabeticalOrder",
      type: AlphabeticalOrderPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlphabeticalOrderPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "alphabeticalOrder"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/capitalise.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/capitalise.pipe.ts ***!
    \*******************************************/

  /*! exports provided: CapitalisePipe */

  /***/
  function srcAppSharedCapitalisePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapitalisePipe", function () {
      return CapitalisePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CapitalisePipe = /*#__PURE__*/function () {
      function CapitalisePipe() {
        _classCallCheck(this, CapitalisePipe);
      }

      _createClass(CapitalisePipe, [{
        key: "transform",
        value: function transform(value) {
          value = value.toLowerCase().replace(/([-/])/g, " ").split(" ");

          for (var i = 0; i < value.length; i++) {
            value[i] = value[i].charAt(0).toUpperCase() + value[i].slice(1);
          }

          return value.join(" ");
        }
      }]);

      return CapitalisePipe;
    }();

    CapitalisePipe.ɵfac = function CapitalisePipe_Factory(t) {
      return new (t || CapitalisePipe)();
    };

    CapitalisePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "capitalise",
      type: CapitalisePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalisePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'capitalise'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/data.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/data.service.ts ***!
    \****************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppSharedDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
        this.countiesSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.townComSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.townGovernor = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.countyGowernor = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.selectedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
      }

      _createClass(DataService, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toFetchCounties",
        value: function toFetchCounties() {
          var _this2 = this;

          this.http.get('https://tehcon.com.hr/api/CroatiaTownAPI/list.php?v=1&entityType=1').subscribe(function (fetchedPosts) {
            _this2.countiesSub.next(fetchedPosts.counties);
          });
        }
      }, {
        key: "toFetchTowns",
        value: function toFetchTowns() {
          var _this3 = this;

          this.http.get('https://tehcon.com.hr/api/CroatiaTownAPI/list.php?v=1&entityType=2').subscribe(function (fetchedPosts) {
            _this3.townComSub.next(fetchedPosts.towns);
          });
        }
      }, {
        key: "toFetchComunities",
        value: function toFetchComunities() {
          var _this4 = this;

          this.http.get('https://tehcon.com.hr/api/CroatiaTownAPI/list.php?v=1&entityType=3').subscribe(function (fetchedPosts) {
            _this4.townComSub.next(fetchedPosts.communities);
          });
        }
      }, {
        key: "toGetTownGovernor",
        value: function toGetTownGovernor(entityType, ID) {
          var _this5 = this;

          this.http.get('https://tehcon.com.hr/api/CroatiaTownAPI/details.php?v=1&entityType=' + entityType + '&ID=' + ID).subscribe(function (data) {
            return _this5.townGovernor.next(data);
          });
        }
      }, {
        key: "toGetCountyGovernor",
        value: function toGetCountyGovernor(entityType, ID) {
          var _this6 = this;

          this.http.get('https://tehcon.com.hr/api/CroatiaTownAPI/details.php?v=1&entityType=' + entityType + '&ID=' + ID).subscribe(function (data) {
            return _this6.countyGowernor.next(data);
          });
        }
      }, {
        key: "toChangeLang",
        value: function toChangeLang(language) {
          this.selectedLanguage.next(language);
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    DataService.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: DataService
    });
    /***/
  },

  /***/
  "./src/app/shared/no-data.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/no-data.pipe.ts ***!
    \****************************************/

  /*! exports provided: NoDataPipe */

  /***/
  function srcAppSharedNoDataPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoDataPipe", function () {
      return NoDataPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NoDataPipe = /*#__PURE__*/function () {
      function NoDataPipe() {
        _classCallCheck(this, NoDataPipe);
      }

      _createClass(NoDataPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value === 0 || value === "") {
            return '-';
          } else return value;
        }
      }]);

      return NoDataPipe;
    }();

    NoDataPipe.ɵfac = function NoDataPipe_Factory(t) {
      return new (t || NoDataPipe)();
    };

    NoDataPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "noData",
      type: NoDataPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoDataPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'noData'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pretty-num.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/pretty-num.pipe.ts ***!
    \*******************************************/

  /*! exports provided: PrettyNumPipe */

  /***/
  function srcAppSharedPrettyNumPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrettyNumPipe", function () {
      return PrettyNumPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PrettyNumPipe = /*#__PURE__*/function () {
      function PrettyNumPipe() {
        _classCallCheck(this, PrettyNumPipe);
      }

      _createClass(PrettyNumPipe, [{
        key: "transform",
        value: function transform(value) {
          return value.replace(/([-/])/g, " ");
        }
      }]);

      return PrettyNumPipe;
    }();

    PrettyNumPipe.ɵfac = function PrettyNumPipe_Factory(t) {
      return new (t || PrettyNumPipe)();
    };

    PrettyNumPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "prettyNum",
      type: PrettyNumPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrettyNumPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'prettyNum'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/trazilica/trazilica.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/trazilica/trazilica.component.ts ***!
    \**************************************************/

  /*! exports provided: TrazilicaComponent */

  /***/
  function srcAppTrazilicaTrazilicaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrazilicaComponent", function () {
      return TrazilicaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/data.service */
    "./src/app/shared/data.service.ts");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_alphabetical_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/alphabetical-order.pipe */
    "./src/app/shared/alphabetical-order.pipe.ts");
    /* harmony import */


    var _shared_capitalise_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/capitalise.pipe */
    "./src/app/shared/capitalise.pipe.ts");
    /* harmony import */


    var _shared_no_data_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/no-data.pipe */
    "./src/app/shared/no-data.pipe.ts");
    /* harmony import */


    var _shared_pretty_num_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/pretty-num.pipe */
    "./src/app/shared/pretty-num.pipe.ts");

    function TrazilicaComponent_mat_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var zupanija_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", zupanija_r6.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", zupanija_r6.name, " ");
      }
    }

    function TrazilicaComponent_mat_option_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var opcina_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opcina_r7.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opcina_r7.name, " ");
      }
    }

    function TrazilicaComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "capitalise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Web");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "capitalise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "capitalise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "prettyNum");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "prettyNum");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 15, "appText.mayor"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 17, ctx_r4.townGovernor.governor));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 19, ctx_r4.townGovernor.web));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 21, "appText.vice"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 25, ctx_r4.townGovernor.viceGovernor)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 29, ctx_r4.townGovernor.email)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 31, "appText.address"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 35, ctx_r4.townGovernor.address)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 37, "appText.telephone"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "tel:" + ctx_r4.townGovernor.phone, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 41, ctx_r4.townGovernor.phone)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 43, "appText.zip"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 45, ctx_r4.townGovernor.zipCode));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 47, "appText.fax"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 51, ctx_r4.townGovernor.fax)));
      }
    }

    function TrazilicaComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "capitalise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Web");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "capitalise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "capitalise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "prettyNum");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "noData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "prettyNum");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 15, "appText.governor"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 19, ctx_r5.countyGovernor.governor)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 21, ctx_r5.countyGovernor.web));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 23, "appText.vice"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 27, ctx_r5.countyGovernor.viceGovernor)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 29, ctx_r5.countyGovernor.email));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 31, "appText.address"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 35, ctx_r5.countyGovernor.address)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 37, "appText.telephone"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "tel:" + ctx_r5.countyGovernor.phone, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 41, ctx_r5.countyGovernor.phone)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 43, "appText.zip"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 45, ctx_r5.countyGovernor.zipCode));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 47, "appText.fax"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 51, ctx_r5.countyGovernor.fax)));
      }
    }

    var TrazilicaComponent = /*#__PURE__*/function () {
      function TrazilicaComponent(dataService) {
        _classCallCheck(this, TrazilicaComponent);

        this.dataService = dataService;
        this.counties = [];
        this.townMainContainer = [];
        this.town = [];
        this.validCounty = false;
        this.validTown = false;
      }

      _createClass(TrazilicaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.dataService.countiesSub.subscribe(function (counties) {
            return _this7.counties = counties;
          });
          this.dataService.townComSub.subscribe(function (townsComunities) {
            _this7.town = [].concat(_toConsumableArray(_this7.town), _toConsumableArray(townsComunities));
            _this7.townMainContainer = _toConsumableArray(_this7.town);
          });
          this.dataService.countyGowernor.subscribe(function (countyGuverner) {
            return _this7.countyGovernor = countyGuverner;
          });
          this.dataService.townGovernor.subscribe(function (governor) {
            return _this7.townGovernor = governor;
          });
          this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'county': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            'town': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
          });
          this.searchForm.get('county').valueChanges.subscribe(function (value) {
            return _this7.getZupanija(value);
          });
          this.searchForm.get('town').valueChanges.subscribe(function (value) {
            return _this7.getOpcina(value);
          });
        }
      }, {
        key: "getZupanija",
        value: function getZupanija(zupanija) {
          if (zupanija == "" || zupanija == undefined || zupanija == null) {
            this.town = this.townMainContainer;
          } else if (this.countyExists(zupanija)) {
            this.validCounty = true;
            this.town = this.townMainContainer.filter(function (item) {
              return item.countyName === zupanija;
            });
          } else {
            this.validCounty = false;
          }

          if (this.searchForm.value.town !== null && this.searchForm.value.town !== undefined) {
            if (this.findCounty(this.searchForm.value.town) != zupanija) {
              this.searchForm.patchValue({
                'town': ""
              });
              this.countyAutoSelect();
            }
          }
        } //jel pojam upisan u prvu kucicu valjan

      }, {
        key: "countyExists",
        value: function countyExists(zupanija) {
          return this.counties.find(function (item) {
            return item.name === zupanija;
          }) ? true : false;
        }
      }, {
        key: "findCounty",
        value: function findCounty(opcina) {
          if (opcina) {
            var opcinaObjekt = this.townMainContainer.find(function (item) {
              return item.name === opcina;
            });
            return opcinaObjekt.countyName;
          } else {
            return;
          }
        }
      }, {
        key: "getOpcina",
        value: function getOpcina(opcina) {
          if (this.opcinaExists(opcina)) {
            this.validTown = true;
            var zupanija = this.townMainContainer.find(function (item) {
              return item.name === opcina;
            });
            this.searchForm.patchValue({
              'county': zupanija.countyName
            });
          } else {
            this.validTown = false;
          }
        } //valjanost unosa u drugu kucicu

      }, {
        key: "opcinaExists",
        value: function opcinaExists(opcina) {
          return this.townMainContainer.find(function (item) {
            return item.name === opcina;
          }) ? true : false;
        }
      }, {
        key: "countyAutoSelect",
        value: function countyAutoSelect() {
          var _this8 = this;

          this.filteredCounties = this.searchForm.get('county').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this8._countyFilter(value.toString());
          }));
        }
      }, {
        key: "townComunityAutoSelect",
        value: function townComunityAutoSelect() {
          var _this9 = this;

          this.filteredTown = this.searchForm.get('town').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this9._townComunityFilter(value.toString());
          }));
        }
      }, {
        key: "_countyFilter",
        value: function _countyFilter(value) {
          var filterValue = value.toLowerCase();
          return this.counties.filter(function (item) {
            return item.name.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "_townComunityFilter",
        value: function _townComunityFilter(value) {
          var filterValue = value.toLowerCase();
          return this.town.filter(function (item) {
            return item.name.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          this.townGovernor = null;
          this.countyGovernor = null;

          if (this.searchForm.value.county !== null && this.searchForm.value.town === null || this.searchForm.value.town === "") {
            var zupanijaId = this.counties.find(function (element) {
              return element.name === _this10.searchForm.value.county;
            });
            this.dataService.toGetCountyGovernor(zupanijaId.entityType, zupanijaId.ID);
            this.entityToDisplay = zupanijaId.name;
          } //ako je odabran grad (i zupanija (zupanija se sama doda))
          else if (this.searchForm.value.town !== null && this.searchForm.value.county !== null) {
              var gradID = this.town.find(function (element) {
                return element.name === _this10.searchForm.value.town;
              });
              this.dataService.toGetTownGovernor(gradID.entityType, gradID.ID);
              this.entityToDisplay = gradID.name;
            }

          this.searchForm.setValue({
            'county': "",
            'town': ""
          });
          this.town = this.townMainContainer;
          this.validCounty = false;
          this.validTown = false;
        }
      }]);

      return TrazilicaComponent;
    }();

    TrazilicaComponent.ɵfac = function TrazilicaComponent_Factory(t) {
      return new (t || TrazilicaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
    };

    TrazilicaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TrazilicaComponent,
      selectors: [["app-trazilica"]],
      decls: 44,
      vars: 41,
      consts: [[1, "content-container"], [1, "content-container__purple-bar"], [1, "content-container__title"], [1, "content-container__title--top"], [1, "content-container__title--bottom"], [3, "formGroup", "ngSubmit"], ["for", "zupanija", 1, "label-class"], [1, "county"], ["type", "text", "aria-label", "Text", "matInput", "", "id", "zupanija", "formControlName", "county", 3, "placeholder", "matAutocomplete", "focus"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "gradOpcina", 1, "label-class"], [1, "county__responsive-grid"], ["type", "text", "aria-label", "Text", "matInput", "", "id", "gradOpcina", "formControlName", "town", 3, "placeholder", "matAutocomplete", "focus"], ["auto2", "matAutocomplete"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "result-details__title"], [1, "result-details"], ["class", "result-details__grid", 4, "ngIf"], [3, "value"], [1, "result-details__grid"], [3, "href"]],
      template: function TrazilicaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TrazilicaComponent_Template_form_ngSubmit_9_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TrazilicaComponent_Template_input_focus_14_listener() {
            return ctx.countyAutoSelect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-autocomplete", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function TrazilicaComponent_Template_mat_autocomplete_optionSelected_16_listener($event) {
            return ctx.getZupanija($event.option.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TrazilicaComponent_mat_option_18_Template, 2, 2, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "alphabeticalOrder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TrazilicaComponent_Template_input_focus_27_listener() {
            return ctx.townComunityAutoSelect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-autocomplete", 9, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function TrazilicaComponent_Template_mat_autocomplete_optionSelected_29_listener($event) {
            return ctx.getOpcina($event.option.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TrazilicaComponent_mat_option_31_Template, 2, 2, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "alphabeticalOrder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TrazilicaComponent_div_42_Template, 61, 53, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TrazilicaComponent_div_43_Template, 61, 53, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 17, "appText.question"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 19, "appText.person"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 21, "appText.county"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", " \uF041   ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 23, "appText.county"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 27, ctx.filteredCounties)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 29, "appText.town"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", " \uF041   ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 31, "appText.town"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 35, ctx.filteredTown)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.validCounty && !ctx.validTown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 37, "appText.details"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 39, "appText.detailsFor"), ": ", ctx.entityToDisplay, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.townGovernor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.countyGovernor);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _shared_alphabetical_order_pipe__WEBPACK_IMPORTED_MODULE_8__["AlphabeticalOrderPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _shared_capitalise_pipe__WEBPACK_IMPORTED_MODULE_9__["CapitalisePipe"], _shared_no_data_pipe__WEBPACK_IMPORTED_MODULE_10__["NoDataPipe"], _shared_pretty_num_pipe__WEBPACK_IMPORTED_MODULE_11__["PrettyNumPipe"]],
      styles: [".content-container[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 0 auto;\n}\n.content-container[_ngcontent-%COMP%]:not(:last-child) {\n  margin-top: 175px;\n}\n@media only screen and (max-width: 720px) {\n  .content-container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.content-container__purple-bar[_ngcontent-%COMP%] {\n  background-color: #726aff;\n  height: 7px;\n  width: 80px;\n  margin-bottom: 15px;\n}\n.content-container__title[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n@media only screen and (max-width: 450px) {\n  .content-container__title[_ngcontent-%COMP%] {\n    margin-bottom: 45px;\n  }\n}\n.content-container__title--top[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: 400;\n}\n@media only screen and (max-width: 450px) {\n  .content-container__title--top[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n.content-container__title--bottom[_ngcontent-%COMP%] {\n  color: #726aff;\n  font-weight: 800;\n  font-size: 50px;\n}\n@media only screen and (max-width: 450px) {\n  .content-container__title--bottom[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n.county[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n.county__responsive-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n@media only screen and (max-width: 720px) {\n  .county__responsive-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n}\n.county__dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  width: 300px;\n  max-height: 120px;\n  overflow-y: auto;\n}\n.county__dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #f0efff;\n}\n.county__dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fff;\n}\n.county__dropdown-option[_ngcontent-%COMP%] {\n  color: #726aff;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #726aff;\n  color: #fff;\n  padding: 15px 60px;\n  margin: 0px 30px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n}\n@media only screen and (max-width: 720px) {\n  .btn-submit[_ngcontent-%COMP%] {\n    margin: 25px 0 0 0;\n    width: 250px;\n  }\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  background-color: #9995e7;\n  cursor: not-allowed;\n}\n.result-details[_ngcontent-%COMP%] {\n  margin: 75px auto;\n  color: #726aff;\n}\n@media only screen and (max-width: 450px) {\n  .result-details[_ngcontent-%COMP%] {\n    margin: 50px auto;\n  }\n}\n.result-details__title[_ngcontent-%COMP%] {\n  background-color: #726aff;\n  color: #efefef;\n  width: 55%;\n  padding: 35px 10px 35px 20%;\n  font-size: 25px;\n  margin-top: 100px;\n  margin-bottom: 40px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);\n}\n@media only screen and (max-width: 720px) {\n  .result-details__title[_ngcontent-%COMP%] {\n    padding: 15px 10px 15px 10%;\n    font-size: 20px;\n    margin-top: 50px;\n    margin-bottom: 0px;\n  }\n}\n.result-details__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-column-gap: 30px;\n}\n@media only screen and (max-width: 720px) {\n  .result-details__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-column-gap: 0px;\n  }\n}\n.result-details__grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 15px 30px 15px 0px;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  margin-top: 0px;\n}\n@media only screen and (max-width: 450px) {\n  .result-details__grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    margin-top: 10px;\n  }\n}\n.result-details__grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  border-bottom: 1px solid #726aff;\n}\n.label-class[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\ninput[_ngcontent-%COMP%] {\n  background-color: #f0efff;\n  color: #726aff;\n  border: none;\n  outline: none;\n  width: 300px;\n  padding: 15px 20px;\n  cursor: default;\n  font-weight: 600;\n  box-sizing: border-box;\n}\n@media only screen and (max-width: 450px) {\n  input[_ngcontent-%COMP%] {\n    width: 250px;\n    margin: 0 auto;\n  }\n}\ninput[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #726aff;\n  opacity: 0.4;\n  font-weight: 600;\n  padding: 10px 0px;\n}\ninput[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #726aff;\n  opacity: 0.4;\n  font-weight: 600;\n  padding: 10px 0px;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #726aff;\n  opacity: 0.4;\n  font-weight: 600;\n  padding: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhemlsaWNhL0M6XFxVc2Vyc1xcTHVrYVBDXFxEZXNrdG9wXFxBbmd1bGFyXFxnb3Zlcm5vci9zcmNcXGFwcFxcdHJhemlsaWNhXFx0cmF6aWxpY2EuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYXppbGljYS90cmF6aWxpY2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtBQ0NKO0FERUU7RUFSRjtJQVNJLFVBQUE7RUNDRjtBQUNGO0FEQ0U7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVFO0VBQ0UsbUJBQUE7QUNBSjtBREVJO0VBSEY7SUFJSSxtQkFBQTtFQ0NKO0FBQ0Y7QURDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NOO0FEQ007RUFKRjtJQUtJLGVBQUE7RUNFTjtBQUNGO0FEQ0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ047QURDTTtFQUxGO0lBTUksZUFBQTtFQ0VOO0FBQ0Y7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUU7RUFDRSxhQUFBO0VBQ0EscUNBQUE7QUNBSjtBREVJO0VBSkY7SUFLSSxhQUFBO0lBQ0EsMEJBQUE7RUNDSjtBQUNGO0FERUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FKO0FERUk7RUFDRSx5QkFBQTtBQ0FOO0FER0k7RUFDRSxzQkFBQTtBQ0ROO0FESUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRk47QURPQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0pGO0FETUU7RUFWRjtJQVdJLGtCQUFBO0lBQ0EsWUFBQTtFQ0hGO0FBQ0Y7QURLRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE9BO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDSkY7QURNRTtFQUpGO0lBS0ksaUJBQUE7RUNIRjtBQUNGO0FES0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FDSEo7QURLSTtFQVZGO0lBV0ksMkJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQ0ZKO0FBQ0Y7QURLRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0FDSEo7QURLSTtFQUxGO0lBTUksMEJBQUE7SUFDQSxvQkFBQTtFQ0ZKO0FBQ0Y7QURJSTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0ZOO0FESU07RUFORjtJQU9JLDBCQUFBO0lBQ0EsZ0JBQUE7RUNETjtBQUNGO0FER007RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0FDRFI7QURPQTtFQUNFLGdCQUFBO0FDSkY7QURPQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNKRjtBRE1FO0VBWEY7SUFZSSxZQUFBO0lBQ0EsY0FBQTtFQ0hGO0FBQ0Y7QURLRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0hKO0FEREU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNISjtBRERFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC90cmF6aWxpY2EvdHJhemlsaWNhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXRvcDogMTc1cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuXHJcbiAgJl9fcHVycGxlLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI2YWZmO1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICAgIH1cclxuXHJcbiAgICAmLS10b3Age1xyXG4gICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi0tYm90dG9tIHtcclxuICAgICAgY29sb3I6ICM3MjZhZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb3VudHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICZfX3Jlc3BvbnNpdmUtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWZmZjtcclxuICAgIH1cclxuXHJcbiAgICA6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAmLW9wdGlvbiB7XHJcbiAgICAgIGNvbG9yOiAjNzI2YWZmO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4tc3VibWl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI2YWZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE1cHggNjBweDtcclxuICBtYXJnaW46IDBweCAzMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICBtYXJnaW46IDI1cHggMCAwIDA7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk1ZTc7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxufVxyXG5cclxuLnJlc3VsdC1kZXRhaWxzIHtcclxuICBtYXJnaW46IDc1cHggYXV0bztcclxuICBjb2xvcjogIzcyNmFmZjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI2YWZmO1xyXG4gICAgY29sb3I6ICNlZmVmZWY7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgcGFkZGluZzogMzVweCAxMHB4IDM1cHggMjAlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMTBweCAxNXB4IDEwJTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAzMHB4O1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDBweDtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcyNmFmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxhYmVsLWNsYXNzIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWZmZjtcclxuICBjb2xvcjogIzcyNmFmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3MjZhZmY7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRlbnQtY29udGFpbmVyOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiAxNzVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4uY29udGVudC1jb250YWluZXJfX3B1cnBsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI2YWZmO1xuICBoZWlnaHQ6IDdweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY29udGVudC1jb250YWluZXJfX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNvbnRlbnQtY29udGFpbmVyX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgfVxufVxuLmNvbnRlbnQtY29udGFpbmVyX190aXRsZS0tdG9wIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuY29udGVudC1jb250YWluZXJfX3RpdGxlLS10b3Age1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuLmNvbnRlbnQtY29udGFpbmVyX190aXRsZS0tYm90dG9tIHtcbiAgY29sb3I6ICM3MjZhZmY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmNvbnRlbnQtY29udGFpbmVyX190aXRsZS0tYm90dG9tIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIH1cbn1cblxuLmNvdW50eSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jb3VudHlfX3Jlc3BvbnNpdmUtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5jb3VudHlfX3Jlc3BvbnNpdmUtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuLmNvdW50eV9fZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmNvdW50eV9fZHJvcGRvd24gOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWZmZjtcbn1cbi5jb3VudHlfX2Ryb3Bkb3duIDpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmNvdW50eV9fZHJvcGRvd24tb3B0aW9uIHtcbiAgY29sb3I6ICM3MjZhZmY7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjZhZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4IDYwcHg7XG4gIG1hcmdpbjogMHB4IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuYnRuLXN1Ym1pdCB7XG4gICAgbWFyZ2luOiAyNXB4IDAgMCAwO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxufVxuLmJ0bi1zdWJtaXQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5NWU3O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ucmVzdWx0LWRldGFpbHMge1xuICBtYXJnaW46IDc1cHggYXV0bztcbiAgY29sb3I6ICM3MjZhZmY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5yZXN1bHQtZGV0YWlscyB7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIH1cbn1cbi5yZXN1bHQtZGV0YWlsc19fdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI2YWZmO1xuICBjb2xvcjogI2VmZWZlZjtcbiAgd2lkdGg6IDU1JTtcbiAgcGFkZGluZzogMzVweCAxMHB4IDM1cHggMjAlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAucmVzdWx0LWRldGFpbHNfX3RpdGxlIHtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAxMCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG4ucmVzdWx0LWRldGFpbHNfX2dyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLWNvbHVtbi1nYXA6IDMwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5yZXN1bHQtZGV0YWlsc19fZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIH1cbn1cbi5yZXN1bHQtZGV0YWlsc19fZ3JpZCBkaXYge1xuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAucmVzdWx0LWRldGFpbHNfX2dyaWQgZGl2IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG4ucmVzdWx0LWRldGFpbHNfX2dyaWQgZGl2IHAge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcyNmFmZjtcbn1cblxuLmxhYmVsLWNsYXNzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlZmZmO1xuICBjb2xvcjogIzcyNmFmZjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzcyNmFmZjtcbiAgb3BhY2l0eTogMC40O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrazilicaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-trazilica',
          templateUrl: './trazilica.component.html',
          styleUrls: ['./trazilica.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\LukaPC\Desktop\Angular\governor\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map