function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-website></app-website>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us-part/about-us-part.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us-part/about-us-part.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutUsPartAboutUsPartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"about-us-block\">\n    <div class=\"image-block\">\n        <div class=\"sqare\"></div>\n        <img  class=\"about-image\" src=\"../../../assets/images/about-us-image.jpg\" alt=\"\">\n    </div>\n    <div class=\"text-block\">\n        <div class=\"title\">\n            {{\"More About Us\" | translate}}\n            <div class=\"line\"></div>\n        </div>\n        <div class=\"text\">\n            {{\"About Us Message 1\" | translate}}\n        </div>\n\n        <div class=\"text\">\n            {{\"About Us Message 2\" | translate}}\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employees-part/employees-part.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/employees-part/employees-part.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEmployeesPartEmployeesPartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"employees-part\">\n    <div class=\"employees\">\n        <div class=\"emp-title\">{{\"Our Team\" | translate}}</div>\n\n        <div [ngClass]=\"emp1Classes\" (click)=\"emp1Clicked()\">\n            <div class=\"emp-name\">Vladimir Marković</div>\n            <div [class]=\"emp1Line\"></div>\n        </div>\n        \n        <div [ngClass]=\"emp2Classes\" (click)=\"emp2Clicked()\">\n            <div class=\"emp-name\">Vladimir Miletić</div>\n            <div [class]=\"emp2Line\"></div>\n        </div>\n\n        <div [ngClass]=\"emp3Classes\" (click)=\"emp3Clicked()\">\n            <div class=\"emp-name\">Đorđe Topalović</div>\n            <div [class]=\"emp3Line\"></div>\n        </div>\n\n        <div [ngClass]=\"emp4Classes\" (click)=\"emp4Clicked()\">\n            <div class=\"emp-name\">Marko Baković</div>\n            <div [class]=\"emp4Line\"></div>\n        </div>\n    </div>\n\n    <div [class]=\"empImage\"></div>\n\n    <div class=\"emp-description\">\n        {{\"Our Team Message\" | translate}}\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer-part/footer-part.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer-part/footer-part.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterPartFooterPartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footer-part\">\n    <div class=\"logo-part\">\n        <img src=\"../../../assets/images/logo-white.png\" alt=\"\" width=\"100px\">\n    </div>\n    <div class=\"info-part\">\n        <div class=\"informations\">\n            <div class=\"info-address\">\n                <div>\n                    <img src=\"../../../assets/icons/contact-icons/location.svg\" alt=\"\" width=\"33px\">\n                </div>\n                <div class=\"address-name\">\n                    Cvijiceva 24, Beograd\n                </div>\n            </div>\n            <div class=\"info-phone\">\n                <div class=\"phone-icon\">\n                    <img src=\"../../../assets/icons/contact-icons/phone.svg\" alt=\"\" width=\"33px\">\n                </div>\n                <div class=\"phone-number\">\n                    +3164233282\n                </div>\n            </div>\n            <div class=\"info-website\">\n                <div class=\"website-icon\">\n                    <img src=\"../../../assets/icons/contact-icons/email.svg\" alt=\"\" width=\"33px\">\n                </div>\n                <div class=\"our-email\">\n                    communiqdesign@gmail.com\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"contact-msg\">\n        <div class=\"msg-text\">\n            {{\"Footer Message\" | translate}}\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"navigation\">\n    <div class=\"branding\">\n        <img class=\"logotype\" src=\"../../../assets/images/logo1.svg\" alt=\"\">\n    </div>\n\n    <div class=\"nav-elements\">\n        <div class=\"nav-element\" (click)=\"clickAbout()\">{{\"about\" | translate}}</div>\n        <div class=\"nav-element\" (click)=\"clickServices()\">{{\"services\" | translate}}</div>\n        <div class=\"nav-element\" (click)=\"clickReferences()\">{{\"references\" | translate}}</div>\n        <div class=\"nav-element\" (click)=\"clickContact()\">{{\"contact\" | translate}}</div>\n        <div class=\"nav-element drop-down-element\" (click)=\"openDropDownMany()\">\n            <div class=\"arrow-down\">\n                <div [class]=\"dropDownManyClass\">\n                    <div class=\"many-item\" (click)=\"changeLanguage('sr')\">Srpski</div>\n                    <div class=\"many-item\" (click)=\"changeLanguage('en')\">English</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div [class]=\"hamburgerClass\" (click)=\"openCloseVerticalNavigation()\">\n        <div class=\"line1\"></div>\n        <div class=\"line2\"></div>\n        <div class=\"line3\"></div>\n    </div>\n</div>\n\n<div [class]=\"verticalNavigationClass\">\n    <div class=\"vertical-navigation-elements\">\n        <div class=\"vertical-navigation-element\" (click)=\"changeLanguageMobile('sr')\">Srpski</div>\n        <div class=\"vertical-navigation-element\" (click)=\"changeLanguageMobile('en')\">English</div>\n    </div>\n</div>\n\n<div [class]=\"haveBlanket\" (click)=\"clickOnBlanket()\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/references-part/references-part.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/references-part/references-part.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsReferencesPartReferencesPartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"references-part\">\n    <div class=\"introduction-part\">\n        <div class=\"int-title\">{{\"References\" | translate}}</div>\n        <div class=\"int-text\">\n            {{\"References Message\" | translate}}\n        </div>\n        <div #tableStart class=\"int-line\"></div>\n    </div>\n\n    <div class=\"table-block\">\n        <table class=\"ref-table\">\n            <thead>\n              <th>{{\"Num.\" | translate}}</th>\n              <th>{{\"Client\" | translate}}</th>\n              <th>{{\"Location\" | translate}}</th>\n              <th>{{\"Description\" | translate}}</th>\n              <th>{{\"Area\" | translate}}</th>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let reference of references | slice:start:end\">\n                    <td class=\"td-id\">{{reference.id}}</td>\n                    <td class=\"td-client\">{{reference.client}}</td>\n                    <td class=\"td-location\">{{reference.location}}</td>\n                    <td class=\"td-description\">{{reference.description}}</td>\n                    <td class=\"td-area\" *ngIf=\"reference.area!=='/'; else elseBlock\">{{reference.area + 'm'}}<sup>2</sup></td>\n                    <ng-template #elseBlock>\n                        <td class=\"td-area\">/</td>\n                    </ng-template>\n                </tr>\n                <ng-container *ngIf=\"end-start!==take\">\n                    <tr class=\"extended-table\" *ngFor=\"let number of [0, 1, 2, 3, 4] | slice:0:(take - (end - start))\">\n                        <td class=\"td-id\"></td>\n                        <td class=\"td-client\"></td>\n                        <td class=\"td-location\"></td>\n                        <td class=\"td-description\"></td>\n                        <td class=\"td-area\"></td>\n                    </tr>\n                </ng-container>\n            </tbody>\n          </table>\n    </div>\n\n    <div class=\"table-buttons\">\n        <div [class]=\"pageLeftButton\" (click)=\"previousPageNormal()\"> < </div>\n        <div class=\"curr-page\">{{currentPage}}</div>\n        <div [class]=\"pageRightButton\" (click)=\"nextPageNormal()\"> > </div>\n    </div>\n\n    <div class=\"table-buttons-mobile\">\n        <div [class]=\"pageLeftButton\" (click)=\"previousPageMobile()\"> < </div>\n        <div class=\"curr-page\">{{currentPage}}</div>\n        <div [class]=\"pageRightButton\" (click)=\"nextPageMobile()\"> > </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services-part/services-part.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/services-part/services-part.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsServicesPartServicesPartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"services-part\">\n    <div class=\"introduction-part\">\n        <div class=\"int-title\">{{\"What we do?\" | translate}}</div>\n        <div class=\"int-text\">\n            {{\"Services Message\" | translate}}\n        </div>\n        <div class=\"int-line\"></div>\n    </div>\n\n    <div class=\"project-list\">\n        <div class=\"project-row\">\n            <div class=\"project1\">\n                <div class=\"project-icon\">\n                    <img src=\"../../../assets/icons/services-icons/cable-svg.svg\" alt=\"\" width=\"60px\">\n                </div>\n                <div class=\"project-title\">\n                    {{\"Structure cabling system\" | translate}}\n                </div>\n            </div>\n\n            <div class=\"project2\">\n                <div class=\"project-icon\">\n                    <img src=\"../../../assets/icons/services-icons/tv-svg.svg\" alt=\"\" width=\"60px\">\n                </div>\n                <div class=\"project-title\">\n                    {{\"TV distribution system\" | translate}}\n                </div>\n            </div>\n\n            <div class=\"project3\">\n                <div class=\"project-icon\">\n                    <img src=\"../../../assets/icons/services-icons/fire-svg.svg\" alt=\"\" width=\"60px\">\n                </div>\n                <div class=\"project-title\">\n                    {{\"Fire detection system\" | translate}}\n                </div>\n            </div>\n\n            <div class=\"project4\">\n                <div class=\"project-icon\">\n                    <img src=\"../../../assets/icons/services-icons/gas-svg.svg\" alt=\"\" width=\"60px\">\n                </div>\n                <div class=\"project-title\">\n                    {{\"Gas detection system\" | translate}}\n                </div>\n            </div>\n        </div>\n        <div class=\"project-row\">\n            \n            <div class=\"project5\">\n                <div class=\"project-icon\">\n                    <img src=\"../../../assets/icons/services-icons/inter-svg.svg\" alt=\"\" width=\"60px\">\n                </div>\n                <div class=\"project-title\">\n                    {{\"Intrusion system\" | translate}}\n                </div>\n            </div>\n\n            <div class=\"project6\">\n                <div class=\"project-icon\">\n                    <img src=\"../../../assets/icons/services-icons/card-svg.svg\" alt=\"\" width=\"60px\">\n                </div>\n                <div class=\"project-title\">\n                    {{\"Access control system\" | translate }}\n                </div>\n            </div>\n\n            <div class=\"project7\">\n                <div class=\"project-icon\">\n                    <img src=\"../../../assets/icons/services-icons/house-svg.svg\" alt=\"\" width=\"60px\">\n                </div>\n                <div class=\"project-title\">\n                    {{\"Smart home system\" | translate}}\n                </div>\n            </div>\n\n            <div class=\"project8\">\n                <div class=\"project-icon\">\n                    <img src=\"../../../assets/icons/services-icons/video-svg.svg\" alt=\"\" width=\"60px\">\n                </div>\n                <div class=\"project-title\">\n                    {{\"AV conference system\" | translate}}\n                </div>\n            </div>\n\n           \n        </div>\n        <div class=\"project-row\">\n            \n            <div class=\"project9\">\n                <div class=\"project-icon\">\n                    <img src=\"../../../assets/icons/services-icons/multimedia-svg.svg\" alt=\"\" width=\"60px\">\n                </div>\n                <div class=\"project-title\">\n                    {{\"Multimedia system\" | translate}}\n                </div>\n            </div>\n\n            <div class=\"project10\">\n                <div class=\"project-icon\">\n                    <img src=\"../../../assets/icons/services-icons/phone-svg.svg\" alt=\"\" width=\"60px\">\n                </div>\n                <div class=\"project-title\">\n                    {{\"Intercom system\" | translate}}\n                </div>\n            </div>\n\n            <div class=\"project11\">\n                <div class=\"project-icon\">\n                    <img src=\"../../../assets/icons/services-icons/megaphone-svg.svg\" alt=\"\" width=\"60px\">\n                </div>\n                <div class=\"project-title\">\n                    {{\"Public Address system\" | translate}}\n                </div>\n            </div>\n\n            <div class=\"project12\">\n                <div class=\"project-icon\">\n                    <img src=\"../../../assets/icons/services-icons/camera-svg.svg\" alt=\"\" width=\"60px\">\n                </div>\n                <div class=\"project-title\">\n                    {{\"CCTV system\" | translate}}\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/solar-panels-part/solar-panels-part.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/solar-panels-part/solar-panels-part.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSolarPanelsPartSolarPanelsPartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"solar-panels-part\">\n    <div class=\"text-part\">\n        <div class=\"title\">{{\"Solar Panels\" | translate}}</div>\n        <div class=\"text\">\n            {{\"Solar Panels Text\" | translate}}\n        </div>\n\n    </div>\n\n    <div class=\"image-part\">\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website/website.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/website/website.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWebsiteWebsiteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation (childEvent)=\"navigationClicked($event)\" (languageEvent)=\"languageChanged($event)\"></app-navigation>\r\n<div #about>\r\n    <app-welcome-part></app-welcome-part>\r\n    <app-about-us-part></app-about-us-part>\r\n    <app-work-process-part></app-work-process-part>\r\n    <app-employees-part></app-employees-part>\r\n</div>\r\n\r\n<div #services>\r\n    <app-services-part></app-services-part>\r\n</div>\r\n\r\n<div>\r\n    <app-solar-panels-part></app-solar-panels-part>\r\n</div>\r\n\r\n<div #references>\r\n    <app-references-part #refpart></app-references-part>\r\n</div>\r\n\r\n<div #contact>\r\n    <app-footer-part></app-footer-part>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/welcome-part/welcome-part.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/welcome-part/welcome-part.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWelcomePartWelcomePartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"background\">\n    <div class=\"left-part\">\n        <div [ngClass]=\"classesForText\">\n            <div class=\"bg-title\">{{ \"Welcome\" | translate}}</div>\n            <div class=\"text\">\n                {{\"Welcome Message\" | translate}}\n            </div>\n            <button class=\"ref-btn\">{{\"references\" | translate}}</button>\n        </div>\n    </div>\n    <div class=\"right-part\">\n        <img src=\"../../../assets/images/loptop.png\" alt=\"\">\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/work-process-part/work-process-part.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/work-process-part/work-process-part.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWorkProcessPartWorkProcessPartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"work-process-block\">\n    <div class=\"part1\">\n        <div class=\"part1-icon\">\n\n        </div>\n        <div class=\"part1-title\">\n            {{\"Project Design\" | translate}}\n        </div>\n        <div class=\"part1-text\">\n            {{\"Project Design Text\" | translate}}\n        </div>\n    </div>\n    <div class=\"part2\">\n        <div class=\"part2-icon\">\n\n        </div>\n        <div class=\"part2-title\">\n            {{\"Consulting\" | translate}}\n        </div>\n        <div class=\"part2-text\">\n            {{\"Consulting Text\" | translate}}\n        </div>\n    </div>\n    <div class=\"part3\">\n        <div class=\"part3-icon\">\n\n        </div>\n        <div class=\"part3-title\">\n            {{\"Installation & Maintenance\" | translate}}\n        </div>\n        <div class=\"part3-text\">\n            {{\"Installation & Maintenance Text\" | translate}}\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent(translateService) {
      _classCallCheck(this, AppComponent);

      this.translateService = translateService;
      this.title = 'cd-app';
      var language = localStorage.getItem('language') || 'en';
      this.translateService.setDefaultLang(language);
    });

    AppComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_website_website_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/website/website.component */
    "./src/app/components/website/website.component.ts");
    /* harmony import */


    var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/navigation/navigation.component */
    "./src/app/components/navigation/navigation.component.ts");
    /* harmony import */


    var _components_welcome_part_welcome_part_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/welcome-part/welcome-part.component */
    "./src/app/components/welcome-part/welcome-part.component.ts");
    /* harmony import */


    var _components_about_us_part_about_us_part_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/about-us-part/about-us-part.component */
    "./src/app/components/about-us-part/about-us-part.component.ts");
    /* harmony import */


    var _components_work_process_part_work_process_part_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/work-process-part/work-process-part.component */
    "./src/app/components/work-process-part/work-process-part.component.ts");
    /* harmony import */


    var _components_employees_part_employees_part_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/employees-part/employees-part.component */
    "./src/app/components/employees-part/employees-part.component.ts");
    /* harmony import */


    var _components_services_part_services_part_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/services-part/services-part.component */
    "./src/app/components/services-part/services-part.component.ts");
    /* harmony import */


    var _components_references_part_references_part_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/references-part/references-part.component */
    "./src/app/components/references-part/references-part.component.ts");
    /* harmony import */


    var _components_footer_part_footer_part_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/footer-part/footer-part.component */
    "./src/app/components/footer-part/footer-part.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _components_solar_panels_part_solar_panels_part_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/solar-panels-part/solar-panels-part.component */
    "./src/app/components/solar-panels-part/solar-panels-part.component.ts");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http);
    }

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_website_website_component__WEBPACK_IMPORTED_MODULE_5__["WebsiteComponent"], _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"], _components_welcome_part_welcome_part_component__WEBPACK_IMPORTED_MODULE_7__["WelcomePartComponent"], _components_about_us_part_about_us_part_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsPartComponent"], _components_work_process_part_work_process_part_component__WEBPACK_IMPORTED_MODULE_9__["WorkProcessPartComponent"], _components_employees_part_employees_part_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesPartComponent"], _components_services_part_services_part_component__WEBPACK_IMPORTED_MODULE_11__["ServicesPartComponent"], _components_references_part_references_part_component__WEBPACK_IMPORTED_MODULE_12__["ReferencesPartComponent"], _components_footer_part_footer_part_component__WEBPACK_IMPORTED_MODULE_13__["FooterPartComponent"], _components_solar_panels_part_solar_panels_part_component__WEBPACK_IMPORTED_MODULE_17__["SolarPanelsPartComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]
        }
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/about-us-part/about-us-part.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/about-us-part/about-us-part.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutUsPartAboutUsPartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".about-us-block {\r\n    min-height: 60vh;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 5rem 8rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #fff;\r\n}\r\n\r\n.text-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 31rem;\r\n    margin-left: 10rem;\r\n}\r\n\r\n.title {\r\n    font-family: 'Poppins-SemiBold', 'NexaBold';\r\n    font-size: 2.5rem;\r\n    color: rgb(37, 37, 37);\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.line {\r\n    height: 0.3rem;\r\n    width: 10rem;\r\n    background-color: var(--light-blue);\r\n}\r\n\r\n.text {\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.image-block {\r\n    position: relative;\r\n}\r\n\r\n.about-image {\r\n    position: relative;\r\n    z-index: 100;\r\n    width: 27rem;\r\n}\r\n\r\n.sqare {\r\n    position: absolute;\r\n    left: -9%;\r\n    top: 10%;\r\n    z-index: -10;\r\n    width: 27rem;\r\n    height: 18.5rem;\r\n    background-color: #29abe2;\r\n    z-index: 10;\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .text-block {\r\n        font-size: 0.9rem;\r\n        width: 31rem;\r\n        margin-left: 10rem;\r\n    }\r\n    \r\n    .title {\r\n        font-size: 2rem;\r\n        margin-bottom: 1.3rem;\r\n    }\r\n    \r\n    .line {\r\n        height: 0.2rem;\r\n        width: 9rem;\r\n    }\r\n\r\n    .about-image {\r\n        width: 20rem;\r\n    }\r\n    \r\n    .sqare {\r\n        position: absolute;\r\n        left: -8%;\r\n        top: 8%;\r\n        z-index: -10;\r\n        width: 20rem;\r\n        height: 14rem;\r\n        background-color: #29abe2;\r\n        z-index: 10;\r\n    }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .about-us-block {\r\n        min-height: 60vh;\r\n        display: flex;\r\n        flex-direction: column-reverse;\r\n        padding: 3rem 5rem;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    .text-block {\r\n        text-align: center;\r\n        margin-left: 0rem;\r\n    }\r\n\r\n    .title {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .line {\r\n        margin-top: 0.3rem;\r\n    }\r\n\r\n    .about-image {\r\n        margin-top: 2rem;\r\n    }\r\n\r\n    .sqare {\r\n        left: -8%;\r\n        top: 18%;\r\n    }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (max-width: 768px) {\r\n\r\n    .about-us-block {\r\n        padding: 2rem 5rem;\r\n    }\r\n\r\n    .text-block {\r\n        text-align: left;\r\n        width: 18rem;\r\n    }\r\n\r\n    .about-image {\r\n        width: 16rem;\r\n    }\r\n    \r\n    .sqare {\r\n        left: -7%;\r\n        top: 8%;\r\n        width: 16rem;\r\n        height: 10rem;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy1wYXJ0L2Fib3V0LXVzLXBhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQSxtREFBbUQ7O0FBQ25EO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsV0FBVztJQUNmOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsT0FBTztRQUNQLFlBQVk7UUFDWixZQUFZO1FBQ1osYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixXQUFXO0lBQ2Y7QUFDSjs7QUFFQSxxREFBcUQ7O0FBQ3JEO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxRQUFRO0lBQ1o7QUFDSjs7QUFFQSxvRUFBb0U7O0FBQ3BFOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksU0FBUztRQUNULE9BQU87UUFDUCxZQUFZO1FBQ1osYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy1wYXJ0L2Fib3V0LXVzLXBhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC11cy1ibG9jayB7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nOiA1cmVtIDhyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGV4dC1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAzMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHJlbTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1TZW1pQm9sZCcsICdOZXhhQm9sZCc7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICAgIGhlaWdodDogMC4zcmVtO1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmltYWdlLWJsb2NrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFib3V0LWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHdpZHRoOiAyN3JlbTtcclxufVxyXG5cclxuLnNxYXJlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC05JTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gICAgd2lkdGg6IDI3cmVtO1xyXG4gICAgaGVpZ2h0OiAxOC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5YWJlMjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAudGV4dC1ibG9jayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgd2lkdGg6IDMxcmVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4zcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubGluZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjJyZW07XHJcbiAgICAgICAgd2lkdGg6IDlyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWltYWdlIHtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zcWFyZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC04JTtcclxuICAgICAgICB0b3A6IDglO1xyXG4gICAgICAgIHotaW5kZXg6IC0xMDtcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxNHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlhYmUyO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmFib3V0LXVzLWJsb2NrIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW0gNXJlbTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LWJsb2NrIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubGluZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC4zcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1pbWFnZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc3FhcmUge1xyXG4gICAgICAgIGxlZnQ6IC04JTtcclxuICAgICAgICB0b3A6IDE4JTtcclxuICAgIH1cclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICAuYWJvdXQtdXMtYmxvY2sge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1ibG9jayB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB3aWR0aDogMThyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWltYWdlIHtcclxuICAgICAgICB3aWR0aDogMTZyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zcWFyZSB7XHJcbiAgICAgICAgbGVmdDogLTclO1xyXG4gICAgICAgIHRvcDogOCU7XHJcbiAgICAgICAgd2lkdGg6IDE2cmVtO1xyXG4gICAgICAgIGhlaWdodDogMTByZW07XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/about-us-part/about-us-part.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/about-us-part/about-us-part.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AboutUsPartComponent */

  /***/
  function srcAppComponentsAboutUsPartAboutUsPartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsPartComponent", function () {
      return AboutUsPartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutUsPartComponent = /*#__PURE__*/function () {
      function AboutUsPartComponent() {
        _classCallCheck(this, AboutUsPartComponent);
      }

      _createClass(AboutUsPartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsPartComponent;
    }();

    AboutUsPartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-us-part',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-us-part.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about-us-part/about-us-part.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-us-part.component.css */
      "./src/app/components/about-us-part/about-us-part.component.css"))["default"]]
    })], AboutUsPartComponent);
    /***/
  },

  /***/
  "./src/app/components/employees-part/employees-part.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/employees-part/employees-part.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEmployeesPartEmployeesPartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".employees-part {\r\n    background-color: rgb(230, 230, 230);\r\n    padding: 8rem 0rem;\r\n    color: rgb(44, 44, 44);\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.employees {\r\n    text-transform: uppercase;\r\n    min-width: 18rem;\r\n    min-height: 15rem;\r\n}\r\n\r\n.emp-description {\r\n    width: 20rem;\r\n}\r\n\r\n.emp-title {\r\n    /* text-transform: none; */\r\n    font-size: 3rem;\r\n    margin-bottom: 2rem;\r\n    color: rgb(18, 86, 211);\r\n    font-family: 'Poppins-SemiBold', 'NexaBold';\r\n}\r\n\r\n.emp1 {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 0.4rem;\r\n    transition: font-size 500ms ease-out;\r\n}\r\n\r\n.emp1:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.emp2 {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 0.4rem;\r\n    transition: font-size 500ms ease-out;\r\n}\r\n\r\n.emp2:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.emp3 {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 0.4rem;\r\n    transition: font-size 500ms ease-out;\r\n}\r\n\r\n.emp3:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.emp4 {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 0.4rem;\r\n    transition: font-size 500ms ease-out;\r\n}\r\n\r\n.emp4:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.emp-active {\r\n    font-size: 1.4rem;\r\n    color: rgb(24, 24, 24);\r\n    font-family: 'Poppins-SemiBold', 'NexaBold';\r\n}\r\n\r\n.emp1-line {\r\n    height: 0.2rem;\r\n    width: 0rem;\r\n    background-color: rgb(18, 86, 211);\r\n    transition: width 500ms ease-out;\r\n}\r\n\r\n.emp2-line {\r\n    height: 0.2rem;\r\n    width: 0rem;\r\n    background-color: rgb(18, 86, 211);\r\n    transition: width 500ms ease-out;\r\n}\r\n\r\n.emp3-line {\r\n    height: 0.2rem;\r\n    width: 0rem;\r\n    background-color: rgb(18, 86, 211);\r\n    transition: width 500ms ease-out;\r\n}\r\n\r\n.emp4-line {\r\n    height: 0.2rem;\r\n    width: 0rem;\r\n    background-color: rgb(18, 86, 211);\r\n    transition: width 500ms ease-out;\r\n}\r\n\r\n.emp-line-active {\r\n    height: 0.2rem;\r\n    width: 15rem;\r\n    background-color: rgb(18, 86, 211);\r\n    transition: width 500ms ease-out;\r\n}\r\n\r\n.emp-image-box1 {\r\n    margin: 0rem 7rem 0rem 6rem;\r\n    border-radius: 20px;\r\n    min-width: 15rem;\r\n    min-height: 20rem;\r\n    background-image: url('man1.jpg');\r\n    background-position: 47% 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    box-shadow: 1px 1px 20px rgba(18, 21, 26, 0.7);\r\n    transition: background-image 500ms ease-out;\r\n}\r\n\r\n.emp-image-box2 {\r\n    margin: 0rem 7rem 0rem 6rem;\r\n    border-radius: 20px;\r\n    min-width: 15rem;\r\n    min-height: 20rem;\r\n    background-image: url('man2.jpg');\r\n    background-position: 47% 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    box-shadow: 1px 1px 20px rgba(18, 21, 26, 0.7);\r\n    transition: background-image 500ms ease-out;\r\n}\r\n\r\n.emp-image-box3 {\r\n    margin: 0rem 7rem 0rem 6rem;\r\n    border-radius: 20px;\r\n    min-width: 15rem;\r\n    min-height: 20rem;\r\n    background-image: url('man3.jpg');\r\n    background-position: 47% 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    box-shadow: 1px 1px 20px rgba(18, 21, 26, 0.7);\r\n    transition: background-image 500ms ease-out;\r\n}\r\n\r\n.emp-image-box4 {\r\n    margin: 0rem 7rem 0rem 6rem;\r\n    border-radius: 20px;\r\n    min-width: 15rem;\r\n    min-height: 20rem;\r\n    background-image: url('man4.jpg');\r\n    background-position: 47% 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    box-shadow: 1px 1px 20px rgba(18, 21, 26, 0.7);\r\n    transition: background-image 500ms ease-out;\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .emp-description {\r\n        font-size: 0.8rem;\r\n    }\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (max-width: 1170px) {\r\n    .emp-description {\r\n        display: none;\r\n    }\r\n\r\n    .emp-image-box1 {\r\n        margin-right: 0rem;\r\n        min-width: 12rem;\r\n        min-height: 17rem;\r\n    }\r\n\r\n    .emp-image-box2 {\r\n        margin-right: 0rem;\r\n        min-width: 12rem;\r\n        min-height: 17rem;\r\n    }\r\n\r\n    .emp-image-box3 {\r\n        margin-right: 0rem;\r\n        min-width: 12rem;\r\n        min-height: 17rem;\r\n    }\r\n\r\n    .emp-image-box4 {\r\n        margin-right: 0rem;\r\n        min-width: 12rem;\r\n        min-height: 17rem;\r\n    }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (max-width: 767px) {\r\n\r\n    .emp-description {\r\n        margin-top: 3.5rem;\r\n        display: block;\r\n        width: 12rem;\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .employees-part {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center\r\n    }\r\n\r\n    .employees {\r\n        margin-left: 2.5rem;\r\n        text-transform: uppercase;\r\n        min-width: 14rem;\r\n        min-height: 15rem;\r\n    }\r\n\r\n    .emp-title {\r\n        font-size: 2.2rem;\r\n        margin-bottom: 2rem;\r\n        color: rgb(18, 86, 211);\r\n        font-family: 'NexaBold';\r\n    }\r\n\r\n    .emp1 {\r\n        font-size: 1rem;\r\n        margin-bottom: 0.4rem;\r\n        transition: font-size 500ms ease-out;\r\n    }\r\n\r\n    .emp2 {\r\n        font-size: 1rem;\r\n        margin-bottom: 0.4rem;\r\n        transition: font-size 500ms ease-out;\r\n    }\r\n\r\n    .emp3 {\r\n        font-size: 1rem;\r\n        margin-bottom: 0.4rem;\r\n        transition: font-size 500ms ease-out;\r\n    }\r\n\r\n    .emp4 {\r\n        font-size: 1rem;\r\n        margin-bottom: 0.4rem;\r\n        transition: font-size 500ms ease-out;\r\n    }\r\n\r\n    .emp-active {\r\n        font-size: 1.1rem;\r\n    }\r\n\r\n    .emp1-line {\r\n        height: 0.1rem;\r\n    }\r\n\r\n    .emp2-line {\r\n        height: 0.1rem;\r\n    }\r\n\r\n    .emp3-line {\r\n        height: 0.1rem;\r\n    }\r\n\r\n    .emp4-line {\r\n        height: 0.1rem;\r\n    }\r\n\r\n    .emp-line-active {\r\n        height: 0.1rem;\r\n        width: 11rem;\r\n        background-color: rgb(18, 86, 211);\r\n        transition: width 500ms ease-out;\r\n    }\r\n\r\n    .emp-image-box1 {\r\n        margin-left: 0rem;\r\n        margin-right: 0rem;\r\n        min-width: 12rem;\r\n        min-height: 17rem;\r\n    }\r\n\r\n    .emp-image-box2 {\r\n        margin-left: 0rem;\r\n        margin-right: 0rem;\r\n        min-width: 12rem;\r\n        min-height: 17rem;\r\n    }\r\n\r\n    .emp-image-box3 {\r\n        margin-left: 0rem;\r\n        margin-right: 0rem;\r\n        min-width: 12rem;\r\n        min-height: 17rem;\r\n    }\r\n\r\n    .emp-image-box4 {\r\n        margin-left: 0rem;\r\n        margin-right: 0rem;\r\n        min-width: 12rem;\r\n        min-height: 17rem;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZXMtcGFydC9lbXBsb3llZXMtcGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlDQUF3RDtJQUN4RCw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw4Q0FBOEM7SUFDOUMsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlDQUF3RDtJQUN4RCw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw4Q0FBOEM7SUFDOUMsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlDQUF3RDtJQUN4RCw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw4Q0FBOEM7SUFDOUMsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlDQUF3RDtJQUN4RCw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw4Q0FBOEM7SUFDOUMsMkNBQTJDO0FBQy9DOztBQUVBLG1EQUFtRDs7QUFDbkQ7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBLG1EQUFtRDs7QUFDbkQ7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBLG9FQUFvRTs7QUFDcEU7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkI7SUFDSjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixvQ0FBb0M7SUFDeEM7O0lBRUE7UUFDSSxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLG9DQUFvQztJQUN4Qzs7SUFFQTtRQUNJLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxZQUFZO1FBQ1osa0NBQWtDO1FBQ2xDLGdDQUFnQztJQUNwQzs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZXMtcGFydC9lbXBsb3llZXMtcGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcGxveWVlcy1wYXJ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICAgIHBhZGRpbmc6IDhyZW0gMHJlbTtcclxuICAgIGNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmVtcGxveWVlcyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWluLXdpZHRoOiAxOHJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDE1cmVtO1xyXG59XHJcblxyXG4uZW1wLWRlc2NyaXB0aW9uIHtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxufVxyXG5cclxuLmVtcC10aXRsZSB7XHJcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgKi9cclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBjb2xvcjogcmdiKDE4LCA4NiwgMjExKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1TZW1pQm9sZCcsICdOZXhhQm9sZCc7XHJcbn1cclxuXHJcbi5lbXAxIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDUwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uZW1wMTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5lbXAyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDUwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uZW1wMjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5lbXAzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDUwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uZW1wMzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5lbXA0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDUwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uZW1wNDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5lbXAtYWN0aXZlIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1TZW1pQm9sZCcsICdOZXhhQm9sZCc7XHJcbn1cclxuXHJcbi5lbXAxLWxpbmUge1xyXG4gICAgaGVpZ2h0OiAwLjJyZW07XHJcbiAgICB3aWR0aDogMHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgODYsIDIxMSk7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmVtcDItbGluZSB7XHJcbiAgICBoZWlnaHQ6IDAuMnJlbTtcclxuICAgIHdpZHRoOiAwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCA4NiwgMjExKTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uZW1wMy1saW5lIHtcclxuICAgIGhlaWdodDogMC4ycmVtO1xyXG4gICAgd2lkdGg6IDByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDg2LCAyMTEpO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5lbXA0LWxpbmUge1xyXG4gICAgaGVpZ2h0OiAwLjJyZW07XHJcbiAgICB3aWR0aDogMHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgODYsIDIxMSk7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmVtcC1saW5lLWFjdGl2ZSB7XHJcbiAgICBoZWlnaHQ6IDAuMnJlbTtcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgODYsIDIxMSk7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmVtcC1pbWFnZS1ib3gxIHtcclxuICAgIG1hcmdpbjogMHJlbSA3cmVtIDByZW0gNnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xyXG4gICAgbWluLWhlaWdodDogMjByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21hbjEuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDclIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMjBweCByZ2JhKDE4LCAyMSwgMjYsIDAuNyk7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDUwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uZW1wLWltYWdlLWJveDIge1xyXG4gICAgbWFyZ2luOiAwcmVtIDdyZW0gMHJlbSA2cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1pbi13aWR0aDogMTVyZW07XHJcbiAgICBtaW4taGVpZ2h0OiAyMHJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFuMi5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NyUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAyMHB4IHJnYmEoMTgsIDIxLCAyNiwgMC43KTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgNTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5lbXAtaW1hZ2UtYm94MyB7XHJcbiAgICBtYXJnaW46IDByZW0gN3JlbSAwcmVtIDZyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYW4zLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ3JSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDIwcHggcmdiYSgxOCwgMjEsIDI2LCAwLjcpO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSA1MDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmVtcC1pbWFnZS1ib3g0IHtcclxuICAgIG1hcmdpbjogMHJlbSA3cmVtIDByZW0gNnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xyXG4gICAgbWluLWhlaWdodDogMjByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21hbjQuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDclIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMjBweCByZ2JhKDE4LCAyMSwgMjYsIDAuNyk7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDUwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuZW1wLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNzBweCkge1xyXG4gICAgLmVtcC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZW1wLWltYWdlLWJveDEge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDEycmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE3cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbXAtaW1hZ2UtYm94MiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTJyZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogMTdyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcC1pbWFnZS1ib3gzIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDByZW07XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMnJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZW1wLWltYWdlLWJveDQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDEycmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE3cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAgIC5lbXAtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTJyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbXBsb3llZXMtcGFydCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICAgIH1cclxuXHJcbiAgICAuZW1wbG95ZWVzIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNHJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZW1wLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTgsIDg2LCAyMTEpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTmV4YUJvbGQnO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbXAxIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSA1MDBtcyBlYXNlLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAuZW1wMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgNTAwbXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDUwMG1zIGVhc2Utb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC5lbXA0IHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSA1MDBtcyBlYXNlLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAuZW1wLWFjdGl2ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcDEtbGluZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcDItbGluZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcDMtbGluZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcDQtbGluZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcC1saW5lLWFjdGl2ZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjFyZW07XHJcbiAgICAgICAgd2lkdGg6IDExcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgODYsIDIxMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcC1pbWFnZS1ib3gxIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDByZW07XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMnJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZW1wLWltYWdlLWJveDIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHJlbTtcclxuICAgICAgICBtaW4td2lkdGg6IDEycmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE3cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbXAtaW1hZ2UtYm94MyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcmVtO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTJyZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogMTdyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcC1pbWFnZS1ib3g0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDByZW07XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMnJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxN3JlbTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/employees-part/employees-part.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/employees-part/employees-part.component.ts ***!
    \***********************************************************************/

  /*! exports provided: EmployeesPartComponent */

  /***/
  function srcAppComponentsEmployeesPartEmployeesPartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesPartComponent", function () {
      return EmployeesPartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EmployeesPartComponent = /*#__PURE__*/function () {
      function EmployeesPartComponent() {
        _classCallCheck(this, EmployeesPartComponent);

        this.emp1Classes = {
          "emp1": true,
          "emp-active": true
        };
        this.emp2Classes = {
          "emp2": true,
          "emp-active": false
        };
        this.emp3Classes = {
          "emp3": true,
          "emp-active": false
        };
        this.emp4Classes = {
          "emp4": true,
          "emp-active": false
        };
        this.emp1Line = "emp-line-active";
        this.emp2Line = "emp2-line";
        this.emp3Line = "emp3-line";
        this.emp4Line = "emp4-line";
        this.empImage = 'emp-image-box1';
      }

      _createClass(EmployeesPartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "emp1Clicked",
        value: function emp1Clicked() {
          this.emp2Classes['emp-active'] = false;
          this.emp3Classes['emp-active'] = false;
          this.emp4Classes['emp-active'] = false;
          this.emp1Classes['emp-active'] = true;
          this.emp2Line = "emp2-line";
          this.emp3Line = "emp3-line";
          this.emp4Line = "emp4-line";
          this.emp1Line = "emp-line-active";
          this.empImage = 'emp-image-box1';
        }
      }, {
        key: "emp2Clicked",
        value: function emp2Clicked() {
          this.emp1Classes['emp-active'] = false;
          this.emp3Classes['emp-active'] = false;
          this.emp4Classes['emp-active'] = false;
          this.emp2Classes['emp-active'] = true;
          this.emp1Line = "emp1-line";
          this.emp3Line = "emp3-line";
          this.emp4Line = "emp4-line";
          this.emp2Line = "emp-line-active";
          this.empImage = 'emp-image-box2';
        }
      }, {
        key: "emp3Clicked",
        value: function emp3Clicked() {
          this.emp1Classes['emp-active'] = false;
          this.emp2Classes['emp-active'] = false;
          this.emp4Classes['emp-active'] = false;
          this.emp3Classes['emp-active'] = true;
          this.emp1Line = "emp1-line";
          this.emp2Line = "emp2-line";
          this.emp4Line = "emp4-line";
          this.emp3Line = "emp-line-active";
          this.empImage = 'emp-image-box3';
        }
      }, {
        key: "emp4Clicked",
        value: function emp4Clicked() {
          this.emp1Classes['emp-active'] = false;
          this.emp2Classes['emp-active'] = false;
          this.emp3Classes['emp-active'] = false;
          this.emp4Classes['emp-active'] = true;
          this.emp1Line = "emp1-line";
          this.emp2Line = "emp2-line";
          this.emp3Line = "emp3-line";
          this.emp4Line = "emp-line-active";
          this.empImage = 'emp-image-box4';
        }
      }]);

      return EmployeesPartComponent;
    }();

    EmployeesPartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employees-part',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employees-part.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/employees-part/employees-part.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employees-part.component.css */
      "./src/app/components/employees-part/employees-part.component.css"))["default"]]
    })], EmployeesPartComponent);
    /***/
  },

  /***/
  "./src/app/components/footer-part/footer-part.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/footer-part/footer-part.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterPartFooterPartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer-part {\r\n    background-color: var(--dark-blue);\r\n    width: 100%;\r\n    height: 50vh;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.logo-part {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 33.3%;\r\n}\r\n\r\n.info-part {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 33.3%;\r\n    border-left: 2px #fff solid;\r\n    border-right: 2px #fff solid;\r\n    color: var(--white);\r\n}\r\n\r\n.info-address {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n.info-phone {\r\n    margin: 1rem 0rem;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n.info-website {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n.address-name {\r\n    margin-left: 0.7rem;\r\n}\r\n\r\n.phone-number {\r\n    margin-left: 0.7rem;\r\n}\r\n\r\n.our-email {\r\n    margin-left: 0.7rem;\r\n}\r\n\r\n.contact-msg {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 33.3%;\r\n    text-align: left;\r\n    color: var(--white);\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.msg-text {\r\n    width: 10rem;\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .info-part {\r\n        border-left: none;\r\n        border-right: none;\r\n    }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (max-width: 767px) {\r\n\r\n    .footer-part {\r\n        height: auto;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n    .logo-part {\r\n        height: 16rem;\r\n        width: 100%;\r\n    }\r\n    \r\n    .info-part {\r\n        height: 16rem;\r\n        width: 100%;\r\n        border-left: none;\r\n        border-right: none;\r\n        color: var(--white);\r\n        box-sizing: border-box;\r\n    }\r\n\r\n    .contact-msg {\r\n        height: 16rem;\r\n        width: 100%;\r\n    }\r\n\r\n    .msg-text {\r\n        text-align: center;\r\n        width: 60%;\r\n    } \r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXItcGFydC9mb290ZXItcGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxxREFBcUQ7O0FBQ3JEO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUEsb0VBQW9FOztBQUNwRTs7SUFFSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci1wYXJ0L2Zvb3Rlci1wYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXBhcnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubG9nby1wYXJ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMzLjMlO1xyXG59XHJcblxyXG4uaW5mby1wYXJ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCAjZmZmIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggI2ZmZiBzb2xpZDtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5pbmZvLWFkZHJlc3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5mby1waG9uZSB7XHJcbiAgICBtYXJnaW46IDFyZW0gMHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmluZm8td2Vic2l0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGRyZXNzLW5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcclxufVxyXG5cclxuLnBob25lLW51bWJlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC43cmVtO1xyXG59XHJcblxyXG4ub3VyLWVtYWlsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjdyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LW1zZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMy4zJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5tc2ctdGV4dCB7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuaW5mby1wYXJ0IHtcclxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gICAgLmZvb3Rlci1wYXJ0IHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ28tcGFydCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmluZm8tcGFydCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LW1zZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubXNnLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfSBcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/footer-part/footer-part.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/footer-part/footer-part.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FooterPartComponent */

  /***/
  function srcAppComponentsFooterPartFooterPartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterPartComponent", function () {
      return FooterPartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterPartComponent = /*#__PURE__*/function () {
      function FooterPartComponent() {
        _classCallCheck(this, FooterPartComponent);
      }

      _createClass(FooterPartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterPartComponent;
    }();

    FooterPartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer-part',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer-part.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer-part/footer-part.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer-part.component.css */
      "./src/app/components/footer-part/footer-part.component.css"))["default"]]
    })], FooterPartComponent);
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavigationNavigationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navigation {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom: 3.2px solid var(--light-blue);\r\n    box-sizing: border-box;\r\n    color: var(--white);\r\n    width: 100%;\r\n    padding: 1.2rem 2rem;\r\n    background-color:  rgba(31, 31, 31, 0.8);\r\n    z-index: 1000;\r\n}\r\n\r\n.logotype {\r\n    height: 2.1rem;\r\n}\r\n\r\n.branding {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n\r\n.branding-small-devices {\r\n    display: none;\r\n}\r\n\r\n.nav-elements {\r\n    font-family: 'Gold', 'BankGothicNew', 'BankGothicBold', 'BankGothicMedium', 'BankGothicRegular', 'sans-serif';\r\n    /* Druga varijanta je font: Nexa, Font-size: 0.7rem, letter-spacing: 0.2rem */\r\n    /* font-size: 0.7rem;\r\n    letter-spacing: 0.2rem; */\r\n    font-size: 0.75rem;\r\n    letter-spacing: 0.12rem;\r\n    display: flex;\r\n    flex-direction: row;\r\n    text-transform: uppercase;\r\n    /* background-color: yellowgreen; */\r\n}\r\n\r\n.nav-element {\r\n    padding: 0rem 1.6rem;\r\n}\r\n\r\n.nav-element:hover {\r\n    cursor: pointer;\r\n    color: var(--light-blue);\r\n}\r\n\r\n.drop-down-element:hover {\r\n    color: var(--white);\r\n}\r\n\r\n.arrow-down {\r\n    position: relative;\r\n    margin-top: 0.3rem;\r\n    width: 0; \r\n    height: 0; \r\n    border-left: 6px solid transparent;\r\n    border-right: 6px solid transparent;\r\n    border-top: 6px solid rgb(255, 255, 255);\r\n}\r\n\r\n.drop-down-many-closed {\r\n    opacity: 0.3;\r\n    height: 0rem;\r\n    overflow: hidden;\r\n    font-family: 'NexaLight', 'BankGothicBold', 'BankGothicMedium', 'BankGothicRegular', 'sans-serif';\r\n    font-size: 0.9rem;\r\n    letter-spacing: normal;\r\n    position: absolute;\r\n    width: 6.5rem;\r\n    background-color:  rgba(31, 31, 31, 0.8);\r\n    right: -3rem;\r\n    top: 2.2rem;\r\n    text-transform: none;\r\n    transition: height 500ms ease-out, opacity 450ms ease-out;\r\n}\r\n\r\n.drop-down-many-opened {\r\n    opacity: 1;\r\n    font-family: 'NexaLight', 'BankGothicBold', 'BankGothicMedium', 'BankGothicRegular', 'sans-serif';\r\n    font-size: 0.9rem;\r\n    letter-spacing: normal;\r\n    position: absolute;\r\n    height: 5.5rem;\r\n    width: 6.5rem;\r\n    background-color:  rgba(31, 31, 31, 0.8);\r\n    right: -3rem;\r\n    top: 2.2rem;\r\n    text-transform: none;\r\n    transition: height 500ms ease-out, opacity 450ms ease-out;\r\n}\r\n\r\n.many-item {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 50%;\r\n    width: 100%;\r\n}\r\n\r\n.many-item:hover {\r\n    background-color:  rgba(27, 27, 27, 0.3);\r\n    color: var(--light-blue);\r\n}\r\n\r\n.hamburger {\r\n    display: none;\r\n}\r\n\r\n.vertical-navigation-disabled {\r\n    display: none;\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .navigation {\r\n        background-color: orange;\r\n    }\r\n\r\n    .nav-element {\r\n        padding: 0rem 1rem;\r\n    }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .navigation {\r\n        background-color: green;\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n    .logotype {\r\n        height: 1.7rem;\r\n    }\r\n\r\n    .nav-element {\r\n        padding: 0rem 0.7rem;\r\n    }\r\n\r\n    .arrow-down {\r\n        position: relative;\r\n        margin-top: 0.3rem;\r\n        width: 0; \r\n        height: 0; \r\n        border-left: 4px solid transparent;\r\n        border-right: 4px solid transparent;\r\n        border-top: 4px solid rgb(255, 255, 255);\r\n    }\r\n    \r\n    .drop-down-many-closed {\r\n        opacity: 0.3;\r\n        height: 0rem;\r\n        overflow: hidden;\r\n        font-family: 'NexaLight', 'BankGothicBold', 'BankGothicMedium', 'BankGothicRegular', 'sans-serif';\r\n        position: absolute;\r\n        width: 6.5rem;\r\n        background-color:  rgba(31, 31, 31, 0.8);\r\n        right: -3rem;\r\n        top: 1.9rem;\r\n        text-transform: none;\r\n        transition: height 500ms ease-out, opacity 450ms ease-out;\r\n    }\r\n    \r\n    .drop-down-many-opened {\r\n        opacity: 1;\r\n        font-family: 'NexaLight', 'BankGothicBold', 'BankGothicMedium', 'BankGothicRegular', 'sans-serif';\r\n        position: absolute;\r\n        height: 5.5rem;\r\n        width: 6.5rem;\r\n        background-color:  rgba(31, 31, 31, 0.8);\r\n        right: -3rem;\r\n        top: 1.9rem;\r\n        text-transform: none;\r\n        transition: height 500ms ease-out, opacity 450ms ease-out;\r\n    }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .navigation {\r\n        background-color:  rgba(31, 31, 31);\r\n    }\r\n\r\n    .nav-elements {\r\n        display: none;\r\n    }\r\n\r\n    .hamburger {\r\n        display: flex;\r\n        flex-direction: column;\r\n        transition: transform 500ms ease-out;\r\n    }\r\n\r\n    .hamburger-rotated {\r\n        transform: rotate(90deg);\r\n        transition: transform 500ms ease-out;\r\n    }\r\n    \r\n    .line1 {\r\n        width: 20px;\r\n        height: 0.14rem;\r\n        background-color: var(--white);\r\n    }\r\n    \r\n    .line2 {\r\n        width: 20px;\r\n        height: 0.14rem;\r\n        margin-top: 4px;\r\n        margin-bottom: 4px;\r\n        background-color: var(--white);\r\n    }\r\n    \r\n    .line3 {\r\n        width: 20px;\r\n        height: 0.14rem;\r\n        background-color: var(--white);\r\n    }\r\n\r\n    .vertical-navigation-closed {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        width: 0%;\r\n        overflow: hidden;\r\n        transition: width 500ms ease-out;\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        height: 100vh;\r\n        background-color:  rgba(31, 31, 31, 0.8);\r\n        z-index: 800;\r\n    }\r\n\r\n    .vertical-navigation-opened {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        height: 100vh;\r\n        width: 50%;\r\n        transition: width 500ms ease-out;\r\n        background-color:  rgba(31, 31, 31, 0.8);\r\n        z-index: 800;\r\n    }\r\n    \r\n    .vertical-navigation-elements {\r\n        font-family: 'NexaLight', 'BankGothicBold', 'BankGothicMedium', 'BankGothicRegular', 'sans-serif';\r\n        font-size: 1rem;\r\n        margin-top: 5rem;\r\n    }\r\n    \r\n    .vertical-navigation-element {\r\n        color: var(--white);\r\n        margin-bottom: 0.3rem;\r\n    }\r\n\r\n    .blanket {\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        background-color: rgba(37, 37, 37, 0.0);\r\n        min-height: 100vh;\r\n        width: 100%;\r\n        z-index: 500;\r\n    }\r\n\r\n    .no-blanket {\r\n        display: none;\r\n    }\r\n}\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n\r\n@media only screen and (max-width: 600px) {\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQix3Q0FBd0M7SUFDeEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2R0FBNkc7SUFDN0csNkVBQTZFO0lBQzdFOzZCQUN5QjtJQUN6QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpR0FBaUc7SUFDakcsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtJQUNwQix5REFBeUQ7QUFDN0Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUdBQWlHO0lBQ2pHLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHlEQUF5RDtBQUM3RDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBR0EsbURBQW1EOztBQUNuRDtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUEscURBQXFEOztBQUNyRDtJQUNJO1FBQ0ksdUJBQXVCO1FBQ3ZCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1Qsa0NBQWtDO1FBQ2xDLG1DQUFtQztRQUNuQyx3Q0FBd0M7SUFDNUM7O0lBRUE7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixpR0FBaUc7UUFDakcsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYix3Q0FBd0M7UUFDeEMsWUFBWTtRQUNaLFdBQVc7UUFDWCxvQkFBb0I7UUFDcEIseURBQXlEO0lBQzdEOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGlHQUFpRztRQUNqRyxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGFBQWE7UUFDYix3Q0FBd0M7UUFDeEMsWUFBWTtRQUNaLFdBQVc7UUFDWCxvQkFBb0I7UUFDcEIseURBQXlEO0lBQzdEO0FBQ0o7O0FBRUEsb0VBQW9FOztBQUNwRTtJQUNJO1FBQ0ksbUNBQW1DO0lBQ3ZDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLG9DQUFvQztJQUN4Qzs7SUFFQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksV0FBVztRQUNYLGVBQWU7UUFDZixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztRQUNULGdCQUFnQjtRQUNoQixnQ0FBZ0M7UUFDaEMsZUFBZTtRQUNmLE1BQU07UUFDTixPQUFPO1FBQ1AsYUFBYTtRQUNiLHdDQUF3QztRQUN4QyxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLE1BQU07UUFDTixPQUFPO1FBQ1AsYUFBYTtRQUNiLFVBQVU7UUFDVixnQ0FBZ0M7UUFDaEMsd0NBQXdDO1FBQ3hDLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpR0FBaUc7UUFDakcsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsTUFBTTtRQUNOLE9BQU87UUFDUCx1Q0FBdUM7UUFDdkMsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBLGlEQUFpRDs7QUFDakQ7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMy4ycHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMS4ycmVtIDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgzMSwgMzEsIDMxLCAwLjgpO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLmxvZ290eXBlIHtcclxuICAgIGhlaWdodDogMi4xcmVtO1xyXG59XHJcblxyXG4uYnJhbmRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnJhbmRpbmctc21hbGwtZGV2aWNlcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubmF2LWVsZW1lbnRzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR29sZCcsICdCYW5rR290aGljTmV3JywgJ0JhbmtHb3RoaWNCb2xkJywgJ0JhbmtHb3RoaWNNZWRpdW0nLCAnQmFua0dvdGhpY1JlZ3VsYXInLCAnc2Fucy1zZXJpZic7XHJcbiAgICAvKiBEcnVnYSB2YXJpamFudGEgamUgZm9udDogTmV4YSwgRm9udC1zaXplOiAwLjdyZW0sIGxldHRlci1zcGFjaW5nOiAwLjJyZW0gKi9cclxuICAgIC8qIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTsgKi9cclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjEycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47ICovXHJcbn1cclxuXHJcbi5uYXYtZWxlbWVudCB7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDEuNnJlbTtcclxufVxyXG5cclxuLm5hdi1lbGVtZW50OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcclxufVxyXG5cclxuLmRyb3AtZG93bi1lbGVtZW50OmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5hcnJvdy1kb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcclxuICAgIHdpZHRoOiAwOyBcclxuICAgIGhlaWdodDogMDsgXHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wOiA2cHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4uZHJvcC1kb3duLW1hbnktY2xvc2VkIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICAgIGhlaWdodDogMHJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LWZhbWlseTogJ05leGFMaWdodCcsICdCYW5rR290aGljQm9sZCcsICdCYW5rR290aGljTWVkaXVtJywgJ0JhbmtHb3RoaWNSZWd1bGFyJywgJ3NhbnMtc2VyaWYnO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDYuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDMxLCAzMSwgMzEsIDAuOCk7XHJcbiAgICByaWdodDogLTNyZW07XHJcbiAgICB0b3A6IDIuMnJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwMG1zIGVhc2Utb3V0LCBvcGFjaXR5IDQ1MG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uZHJvcC1kb3duLW1hbnktb3BlbmVkIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LWZhbWlseTogJ05leGFMaWdodCcsICdCYW5rR290aGljQm9sZCcsICdCYW5rR290aGljTWVkaXVtJywgJ0JhbmtHb3RoaWNSZWd1bGFyJywgJ3NhbnMtc2VyaWYnO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA1LjVyZW07XHJcbiAgICB3aWR0aDogNi41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMzEsIDMxLCAzMSwgMC44KTtcclxuICAgIHJpZ2h0OiAtM3JlbTtcclxuICAgIHRvcDogMi4ycmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXMgZWFzZS1vdXQsIG9wYWNpdHkgNDUwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5tYW55LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYW55LWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMjcsIDI3LCAyNywgMC4zKTtcclxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcclxufVxyXG5cclxuLmhhbWJ1cmdlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmVydGljYWwtbmF2aWdhdGlvbi1kaXNhYmxlZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2LWVsZW1lbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDByZW0gMXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nb3R5cGUge1xyXG4gICAgICAgIGhlaWdodDogMS43cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtZWxlbWVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMHJlbSAwLjdyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmFycm93LWRvd24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbiAgICAgICAgd2lkdGg6IDA7IFxyXG4gICAgICAgIGhlaWdodDogMDsgXHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZHJvcC1kb3duLW1hbnktY2xvc2VkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgaGVpZ2h0OiAwcmVtO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOZXhhTGlnaHQnLCAnQmFua0dvdGhpY0JvbGQnLCAnQmFua0dvdGhpY01lZGl1bScsICdCYW5rR290aGljUmVndWxhcicsICdzYW5zLXNlcmlmJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDYuNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgzMSwgMzEsIDMxLCAwLjgpO1xyXG4gICAgICAgIHJpZ2h0OiAtM3JlbTtcclxuICAgICAgICB0b3A6IDEuOXJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXMgZWFzZS1vdXQsIG9wYWNpdHkgNDUwbXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kcm9wLWRvd24tbWFueS1vcGVuZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOZXhhTGlnaHQnLCAnQmFua0dvdGhpY0JvbGQnLCAnQmFua0dvdGhpY01lZGl1bScsICdCYW5rR290aGljUmVndWxhcicsICdzYW5zLXNlcmlmJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiA1LjVyZW07XHJcbiAgICAgICAgd2lkdGg6IDYuNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgzMSwgMzEsIDMxLCAwLjgpO1xyXG4gICAgICAgIHJpZ2h0OiAtM3JlbTtcclxuICAgICAgICB0b3A6IDEuOXJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXMgZWFzZS1vdXQsIG9wYWNpdHkgNDUwbXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMzEsIDMxLCAzMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1lbGVtZW50cyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuaGFtYnVyZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2Utb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC5oYW1idXJnZXItcm90YXRlZCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLW91dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpbmUxIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDAuMTRyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubGluZTIge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMC4xNHJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpbmUzIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDAuMTRyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0aWNhbC1uYXZpZ2F0aW9uLWNsb3NlZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMzEsIDMxLCAzMSwgMC44KTtcclxuICAgICAgICB6LWluZGV4OiA4MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcnRpY2FsLW5hdmlnYXRpb24tb3BlbmVkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2Utb3V0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDMxLCAzMSwgMzEsIDAuOCk7XHJcbiAgICAgICAgei1pbmRleDogODAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudmVydGljYWwtbmF2aWdhdGlvbi1lbGVtZW50cyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOZXhhTGlnaHQnLCAnQmFua0dvdGhpY0JvbGQnLCAnQmFua0dvdGhpY01lZGl1bScsICdCYW5rR290aGljUmVndWxhcicsICdzYW5zLXNlcmlmJztcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZlcnRpY2FsLW5hdmlnYXRpb24tZWxlbWVudCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJsYW5rZXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCAzNywgMzcsIDAuMCk7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5uby1ibGFua2V0IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDYwMHB4IGFuZCBkb3duKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/navigation/navigation.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/navigation/navigation.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent(translateService) {
        _classCallCheck(this, NavigationComponent);

        this.translateService = translateService;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.languageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isOpened = false;
        this.hamburgerClass = "hamburger";
        this.verticalNavigationClass = "vertical-navigation-disabled";
        this.haveBlanket = "no-blanket";
        this.dropDownManyClass = "drop-down-many-closed";
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openCloseVerticalNavigation",
        value: function openCloseVerticalNavigation() {
          this.isOpened = !this.isOpened;

          if (this.isOpened) {
            this.openNavigation();
          } else {
            this.closeNavigation();
          }
        }
      }, {
        key: "openNavigation",
        value: function openNavigation() {
          var _this = this;

          this.hamburgerClass = "hamburger-rotated";
          this.haveBlanket = "blanket";
          this.verticalNavigationClass = "vertical-navigation-closed";
          setTimeout(function () {
            return _this.verticalNavigationClass = "vertical-navigation-opened";
          }, 10);
        }
      }, {
        key: "closeNavigation",
        value: function closeNavigation() {
          var _this2 = this;

          this.hamburgerClass = "hamburger";
          this.haveBlanket = "no-blanket";
          this.verticalNavigationClass = "vertical-navigation-closed";
          setTimeout(function () {
            return _this2.verticalNavigationClass = "vertical-navigation-disabled";
          }, 500);
        }
      }, {
        key: "clickOnBlanket",
        value: function clickOnBlanket() {
          if (this.isOpened) {
            console.log("blanket");
            this.closeNavigation();
            this.isOpened = !this.isOpened;
          }
        }
      }, {
        key: "openDropDownMany",
        value: function openDropDownMany() {
          if (this.dropDownManyClass === "drop-down-many-closed") {
            this.dropDownManyClass = "drop-down-many-opened";
          } else {
            this.dropDownManyClass = "drop-down-many-closed";
          }
        }
      }, {
        key: "clickAbout",
        value: function clickAbout() {
          this.childEvent.emit("about");
        }
      }, {
        key: "clickServices",
        value: function clickServices() {
          this.childEvent.emit("services");
        }
      }, {
        key: "clickReferences",
        value: function clickReferences() {
          this.childEvent.emit("references");
        }
      }, {
        key: "clickContact",
        value: function clickContact() {
          this.childEvent.emit("contact");
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(language) {
          localStorage.setItem('language', language);
          this.translateService.use(localStorage.getItem('language'));
          this.languageEvent.emit(localStorage.getItem('language'));
        }
      }, {
        key: "changeLanguageMobile",
        value: function changeLanguageMobile(language) {
          localStorage.setItem('language', language);
          this.translateService.use(localStorage.getItem('language'));
          this.openCloseVerticalNavigation();
          this.languageEvent.emit(localStorage.getItem('language'));
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavigationComponent.prototype, "childEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavigationComponent.prototype, "languageEvent", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.css */
      "./src/app/components/navigation/navigation.component.css"))["default"]]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/components/references-part/references-part.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/references-part/references-part.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsReferencesPartReferencesPartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".references-part {\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    background-color: #f0f0f0;\r\n    padding: 8rem 5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.introduction-part {\r\n    text-align: center;\r\n    margin-bottom: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.int-title {\r\n    font-size: 2.5rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.int-text {\r\n    width: 50rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.int-line {\r\n    height: 0.3rem;\r\n    width: 7rem;\r\n    background-color: var(--light-blue);\r\n}\r\n\r\n.table-block {\r\n    width: 90%;\r\n}\r\n\r\n.ref-table {\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.ref-table td, .ref-table th {\r\n    min-width: 5rem;\r\n    height: 4rem;\r\n    padding: 1.2rem, 1.5rem;\r\n    border: 1px solid rgb(44, 44, 44);\r\n    text-align: center;\r\n}\r\n\r\n.ref-table th {\r\n    background-color: rgb(44, 44, 44);\r\n    color: var(--white);\r\n}\r\n\r\n.ref-table tbody tr:nth-child(even) {\r\n    background-color: #e2e1e1;\r\n}\r\n\r\n.table-buttons {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 3rem;\r\n}\r\n\r\n.table-buttons-mobile {\r\n    display: none;\r\n}\r\n\r\n.curr-page {\r\n    width: 4rem;\r\n    text-align: center;\r\n}\r\n\r\n.page-left {\r\n    font-size: 2rem;\r\n    padding: 0.7rem 1.5rem;\r\n    background-color: var(--dark-gray);\r\n    color: var(--white);\r\n}\r\n\r\n.page-left:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.page-right {\r\n    font-size: 2rem;\r\n    padding: 0.7rem 1.5rem;\r\n    background-color: var(--dark-gray);\r\n    color: var(--white);\r\n}\r\n\r\n.page-right:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.page-left-disabled {\r\n    font-size: 2rem;\r\n    padding: 0.7rem 1.5rem;\r\n    background-color: #8f8f8f;\r\n    color: #555555;\r\n}\r\n\r\n.page-right-disabled {\r\n    font-size: 2rem;\r\n    padding: 0.7rem 1.5rem;\r\n    background-color: #8f8f8f;\r\n    color: #555555;\r\n}\r\n\r\n.td-id {\r\n    width: 5%;\r\n}\r\n\r\n.td-client {\r\n    width: 32%;\r\n}\r\n\r\n.td-location {\r\n    width: 9%;\r\n}\r\n\r\n.td-description {\r\n    width: 45%;\r\n}\r\n\r\n.td-area {\r\n    width: 9%;\r\n}\r\n\r\n.empty-rows {\r\n    /* display: block; */\r\n    width: 100%;\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .int-text {\r\n        width: 30rem;\r\n    }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .int-text {\r\n        width: 25rem;\r\n    }\r\n\r\n    .ref-table {\r\n        min-height: 30rem;\r\n    }\r\n}\r\n\r\n/* Small devices */\r\n\r\n@media only screen and (max-width: 800px) {\r\n\r\n    .references-part {\r\n        padding: 8rem 3rem;\r\n    }\r\n\r\n    .int-text {\r\n        width: 17rem;\r\n    }\r\n\r\n    .table-block {\r\n        width: 100%;\r\n    }\r\n\r\n    .ref-table thead {\r\n        display: none;\r\n    }\r\n\r\n    .ref-table, .ref-table tbody, .ref-table tr, .ref-table td, .td-id, .td-client, .td-location, .td-description, .td-area {\r\n        box-sizing: border-box;\r\n        display: block;\r\n        width: 100%;\r\n    }\r\n\r\n    .empty-rows {\r\n        /* background-color: #af2a2a; */\r\n        display: none;\r\n    }\r\n\r\n    .ref-table td {\r\n        text-align: center;\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: center;\r\n        min-height: 7rem;\r\n        overflow: scroll;\r\n    } \r\n\r\n    .ref-table tr {\r\n        margin-bottom: 2rem;\r\n    }\r\n\r\n    .table-buttons {\r\n        display: none;\r\n    }\r\n    \r\n    .table-buttons-mobile {\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin-top: 3rem;\r\n    }\r\n\r\n     /* Make empty rows invisible in mobile view */\r\n\r\n    /* .extended-table {\r\n        opacity: 0;\r\n    }\r\n    \r\n    .extended-table tr, .extended-table td {\r\n        border: 0;\r\n    } */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWZlcmVuY2VzLXBhcnQvcmVmZXJlbmNlcy1wYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBRUEsbURBQW1EOztBQUNuRDtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBLHFEQUFxRDs7QUFDckQ7SUFDSTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQSxrQkFBa0I7O0FBQ2xCOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsY0FBYztRQUNkLFdBQVc7SUFDZjs7SUFFQTtRQUNJLCtCQUErQjtRQUMvQixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixnQkFBZ0I7SUFDcEI7O0tBRUMsNkNBQTZDOztJQUU5Qzs7Ozs7O09BTUc7QUFDUCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVmZXJlbmNlcy1wYXJ0L3JlZmVyZW5jZXMtcGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZmVyZW5jZXMtcGFydCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgcGFkZGluZzogOHJlbSA1cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnRyb2R1Y3Rpb24tcGFydCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW50LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmludC10ZXh0IHtcclxuICAgIHdpZHRoOiA1MHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5pbnQtbGluZSB7XHJcbiAgICBoZWlnaHQ6IDAuM3JlbTtcclxuICAgIHdpZHRoOiA3cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XHJcbn1cclxuXHJcbi50YWJsZS1ibG9jayB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ucmVmLXRhYmxlIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi5yZWYtdGFibGUgdGQsIC5yZWYtdGFibGUgdGgge1xyXG4gICAgbWluLXdpZHRoOiA1cmVtO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgcGFkZGluZzogMS4ycmVtLCAxLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNDQsIDQ0LCA0NCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWYtdGFibGUgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuLnJlZi10YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTFlMTtcclxufVxyXG5cclxuLnRhYmxlLWJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG4udGFibGUtYnV0dG9ucy1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmN1cnItcGFnZSB7XHJcbiAgICB3aWR0aDogNHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2UtbGVmdCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5wYWdlLWxlZnQ6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGFnZS1yaWdodCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5wYWdlLXJpZ2h0OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBhZ2UtbGVmdC1kaXNhYmxlZCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGY4ZjtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG4ucGFnZS1yaWdodC1kaXNhYmxlZCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhmOGY4ZjtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG59XHJcblxyXG4udGQtaWQge1xyXG4gICAgd2lkdGg6IDUlO1xyXG59XHJcblxyXG4udGQtY2xpZW50IHtcclxuICAgIHdpZHRoOiAzMiU7XHJcbn1cclxuXHJcbi50ZC1sb2NhdGlvbiB7XHJcbiAgICB3aWR0aDogOSU7XHJcbn1cclxuXHJcbi50ZC1kZXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4udGQtYXJlYSB7XHJcbiAgICB3aWR0aDogOSU7XHJcbn1cclxuXHJcbi5lbXB0eS1yb3dzIHtcclxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5pbnQtdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDMwcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmludC10ZXh0IHtcclxuICAgICAgICB3aWR0aDogMjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZi10YWJsZSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzByZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG5cclxuICAgIC5yZWZlcmVuY2VzLXBhcnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDhyZW0gM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaW50LXRleHQge1xyXG4gICAgICAgIHdpZHRoOiAxN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtYmxvY2sge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWYtdGFibGUgdGhlYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZi10YWJsZSwgLnJlZi10YWJsZSB0Ym9keSwgLnJlZi10YWJsZSB0ciwgLnJlZi10YWJsZSB0ZCwgLnRkLWlkLCAudGQtY2xpZW50LCAudGQtbG9jYXRpb24sIC50ZC1kZXNjcmlwdGlvbiwgLnRkLWFyZWEge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcHR5LXJvd3Mge1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNhZjJhMmE7ICovXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAucmVmLXRhYmxlIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogN3JlbTtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgfSBcclxuXHJcbiAgICAucmVmLXRhYmxlIHRyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZS1idXR0b25zIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFibGUtYnV0dG9ucy1tb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgIC8qIE1ha2UgZW1wdHkgcm93cyBpbnZpc2libGUgaW4gbW9iaWxlIHZpZXcgKi9cclxuXHJcbiAgICAvKiAuZXh0ZW5kZWQtdGFibGUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leHRlbmRlZC10YWJsZSB0ciwgLmV4dGVuZGVkLXRhYmxlIHRkIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICB9ICovXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/references-part/references-part.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/references-part/references-part.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ReferencesPartComponent */

  /***/
  function srcAppComponentsReferencesPartReferencesPartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferencesPartComponent", function () {
      return ReferencesPartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReferencesPartComponent = /*#__PURE__*/function () {
      function ReferencesPartComponent() {
        _classCallCheck(this, ReferencesPartComponent);

        this.currentPage = 1;
        this.take = 6;
        this.start = 0;
        this.end = this.start + this.take;
        this.duzinaNiza = 0;
        this.references = [];
        this.pageLeftButton = 'page-left';
        this.pageRightButton = 'page-right';
        this.referencesEnglish = [{
          "id": 1,
          "client": 'Hotel Constantin',
          "location": 'Belgrade',
          "description": 'The main project of telecommunication systems and systems of technical protection',
          "area": '5.500'
        }, {
          "id": 2,
          "client": 'RESEARCH LABORATORY AND CONTROL Health Actavis Company',
          "location": 'Leskovac',
          "description": 'The main project of telecommunication and signaling systems for adaptation of physico-chemical laboratories.',
          "area": '/'
        }, {
          "id": 3,
          "client": 'Sports Arena',
          "location": 'Padinska Skela',
          "description": 'The main project of telecommunication systems and systems of technical protection',
          "area": '5.500'
        }, {
          "id": 4,
          "client": 'TQ City',
          "location": 'Budva',
          "description": 'The main project of telecommunication systems and systems of technical protection',
          "area": '49.000'
        }, {
          "id": 5,
          "client": 'ETB HOLDING',
          "location": 'Belgrade',
          "description": 'Detail design of systems for technical protection and integration',
          "area": '25.000'
        }, {
          "id": 6,
          "client": 'Zavala',
          "location": 'Budva',
          "description": 'External telecommunication infrastructure system',
          "area": '/'
        }, {
          "id": 7,
          "client": 'Zavala',
          "location": 'Budva',
          "description": 'Smart Home systems',
          "area": '/'
        }, {
          "id": 8,
          "client": 'RESEARCH LABORATORY AND CONTROL Health Actavis Company',
          "location": 'Leskovac',
          "description": 'The main project of telecommunication and signaling systems for adaptation of physico- chemical laboratories.',
          "area": '/'
        }, {
          "id": 9,
          "client": 'Radovanac Hotel',
          "location": 'Belgrade',
          "description": 'Main design of telecommunication and security systems',
          "area": '5.500'
        }, {
          "id": 10,
          "client": 'Dragiša Mišović',
          "location": 'Belgrade',
          "description": 'The main project of telecommunication systems and systems of technical protection for Hospital',
          "area": '/'
        }, {
          "id": 11,
          "client": 'Skočidevojka',
          "location": 'Montenegro',
          "description": 'Conceptual solution of telecommunication and technical protection systems for hotel-tourist complex',
          "area": '130.000'
        }, {
          "id": 12,
          "client": 'Casino',
          "location": 'Bar',
          "description": 'The main project of telecommunication systems and systems of technical protection for Casino',
          "area": '1.133'
        }, {
          "id": 13,
          "client": 'Grundfos',
          "location": 'Inđija',
          "description": 'Detail design of telecommunication and signaling systems',
          "area": '20.000'
        }, {
          "id": 14,
          "client": 'Nikola Tesla Airport',
          "location": 'Belgrade',
          "description": 'The main project for adaptation of video surveillance system',
          "area": '/'
        }];
        this.referencesSerbian = [{
          "id": 1,
          "client": 'Hotel Konstantin',
          "location": 'Beograd',
          "description": 'Glavni projekat telekomunikacionih sistema i sistema tehničke zaštite',
          "area": '5.500'
        }, {
          "id": 2,
          "client": 'Istraživačka labaratorija i kontrola zdravlja, kompanija Actavis',
          "location": 'Leskovac',
          "description": 'Glavni projekat telekomunikacionih i signalnih sistema za adaptaciju fizičko-hemijskih laboratorija.',
          "area": '/'
        }, {
          "id": 3,
          "client": 'Sportska Arena',
          "location": 'Padinska Skela',
          "description": 'Glavni projekat telekomunikacionih sistema i sistema tehničke zaštite',
          "area": '5.500'
        }, {
          "id": 4,
          "client": 'TQ City',
          "location": 'Budva',
          "description": 'Glavni projekat telekomunikacionih sistema i sistema tehničke zaštite',
          "area": '49.000'
        }, {
          "id": 5,
          "client": 'ETB HOLDING',
          "location": 'Beograd',
          "description": 'Detaljno projektovanje sistema za tehničku zaštitu i integraciju',
          "area": '25.000'
        }, {
          "id": 6,
          "client": 'Zavala',
          "location": 'Budva',
          "description": 'Eksterni telekomunikacioni infrastrukturni sistem',
          "area": '/'
        }, {
          "id": 7,
          "client": 'Zavala',
          "location": 'Budva',
          "description": 'Sistem pametnih domova',
          "area": '/'
        }, {
          "id": 8,
          "client": 'Istrazivacka labaratorija i kontrola zdravlja, kompanija Actavis',
          "location": 'Leskovac',
          "description": 'Glavni projekat telekomunikacionih i signalnih sistema za adaptaciju fizičko-hemijskih laboratorija.',
          "area": '/'
        }, {
          "id": 9,
          "client": 'Radovanac Hotel',
          "location": 'Beograd',
          "description": 'Glavni projekat telekomunikacionih i sigurnosnih sistema',
          "area": '5.500'
        }, {
          "id": 10,
          "client": 'Dragiša Mišović',
          "location": 'Beograd',
          "description": 'Glavni projekat telekomunikacionih sistema i sistema tehničke zaštite bolnice',
          "area": '/'
        }, {
          "id": 11,
          "client": 'Skočidevojka',
          "location": 'Crna Gora',
          "description": 'Idejno rešenje telekomunikacionih i tehničkih sistema zaštite hotelsko-turističkog kompleksa',
          "area": '130.000'
        }, {
          "id": 12,
          "client": 'Kazino',
          "location": 'Bar',
          "description": 'Glavni projekat telekomunikacionih sistema i sistema tehničke zaštite kazina',
          "area": '1.133'
        }, {
          "id": 13,
          "client": 'Grundfos',
          "location": 'Inđija',
          "description": 'Detaljni projekat telekomunikacionih i signalnih sistema',
          "area": '20.000'
        }, {
          "id": 14,
          "client": 'Nikola Tesla Aerodrom',
          "location": 'Beograd',
          "description": 'Glavni projekat adaptacije sistema video nadzora',
          "area": '/'
        }];
      }

      _createClass(ReferencesPartComponent, [{
        key: "changeLanguage",
        value: function changeLanguage() {
          var language = localStorage.getItem('language') || 'en';

          if (language === 'sr') {
            this.references = this.referencesSerbian;
          } else {
            this.references = this.referencesEnglish;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.changeLanguage();
          this.duzinaNiza = this.references.length;
          this.disableEnableButtons();
        }
      }, {
        key: "nextPageNormal",
        value: function nextPageNormal() {
          if (this.references.length > this.end) {
            this.currentPage++;
            this.start = this.end;

            if (this.references.length >= this.start + this.take) {
              this.end = this.start + this.take;
            } else {
              this.end = this.references.length;
            }
          }

          this.disableEnableButtons();
        }
      }, {
        key: "previousPageNormal",
        value: function previousPageNormal() {
          if (this.currentPage > 1) {
            this.currentPage--;
            this.start = this.start - this.take;
            this.end = this.start + this.take;
          }

          this.disableEnableButtons();
        }
      }, {
        key: "disableEnableButtons",
        value: function disableEnableButtons() {
          if (this.currentPage > 1) {
            this.pageLeftButton = 'page-left';
          } else {
            this.pageLeftButton = 'page-left-disabled';
          }

          if (this.references.length > this.currentPage * this.take) {
            this.pageRightButton = 'page-right';
          } else {
            this.pageRightButton = 'page-right-disabled';
          }
        }
      }, {
        key: "nextPageMobile",
        value: function nextPageMobile() {
          if (this.references.length > this.end) {
            this.table.nativeElement.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            this.currentPage++;
            this.start = this.end;

            if (this.references.length >= this.start + this.take) {
              this.end = this.start + this.take;
            } else {
              this.end = this.references.length;
            }
          }

          this.disableEnableButtons();
        }
      }, {
        key: "previousPageMobile",
        value: function previousPageMobile() {
          if (this.currentPage > 1) {
            this.table.nativeElement.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            this.currentPage--;
            this.start = this.start - this.take;
            this.end = this.start + this.take;
          }

          this.disableEnableButtons();
        }
      }]);

      return ReferencesPartComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tableStart", {
      "static": false
    })], ReferencesPartComponent.prototype, "table", void 0);
    ReferencesPartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-references-part',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./references-part.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/references-part/references-part.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./references-part.component.css */
      "./src/app/components/references-part/references-part.component.css"))["default"]]
    })], ReferencesPartComponent);
    /***/
  },

  /***/
  "./src/app/components/services-part/services-part.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/services-part/services-part.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsServicesPartServicesPartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".services-part {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    min-height: 100vh;\r\n    background-color: #302f2f;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: #fff;\r\n    padding: 10rem;\r\n}\r\n\r\n.introduction-part {\r\n    text-align: center;\r\n    margin-bottom: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.int-title {\r\n    font-size: 2.5rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.int-text {\r\n    width: 50rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.int-line {\r\n    height: 0.3rem;\r\n    width: 7rem;\r\n    background-color: var(--light-blue);\r\n}\r\n\r\n.project-list {\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.project-row {\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.project-icon {\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.project-title {\r\n    text-align: center;\r\n}\r\n\r\n.project1 {\r\n    max-height: 7rem;\r\n    min-height: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 25%;\r\n}\r\n\r\n.project2 {\r\n    max-height: 7rem;\r\n    min-height: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 25%;\r\n}\r\n\r\n.project3 {\r\n    max-height: 7rem;\r\n    min-height: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 25%;\r\n}\r\n\r\n.project4 {\r\n    max-height: 7rem;\r\n    min-height: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 25%;\r\n}\r\n\r\n.project5 {\r\n    max-height: 7rem;\r\n    min-height: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 25%;\r\n}\r\n\r\n.project6 {\r\n    max-height: 7rem;\r\n    min-height: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 25%;\r\n}\r\n\r\n.project7 {\r\n    max-height: 7rem;\r\n    min-height: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 25%;\r\n}\r\n\r\n.project8 {\r\n    max-height: 7rem;\r\n    min-height: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 25%;\r\n}\r\n\r\n.project9 {\r\n    max-height: 7rem;\r\n    min-height: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 25%;\r\n}\r\n\r\n.project10 {\r\n    max-height: 7rem;\r\n    min-height: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 25%;\r\n}\r\n\r\n.project11 {\r\n    max-height: 7rem;\r\n    min-height: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 25%;\r\n}\r\n\r\n.project12 {\r\n    max-height: 7rem;\r\n    min-height: 7rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 25%;\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .services-part {\r\n        padding: 5rem;\r\n    }\r\n\r\n    .project-row {\r\n        margin-bottom: 0rem;\r\n    }\r\n\r\n    .int-text {\r\n        width: 30rem;\r\n        margin-bottom: 1rem;\r\n    }\r\n\r\n    .project1 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 50%;\r\n    }\r\n    \r\n    .project2 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 50%;\r\n    }\r\n    \r\n    .project3 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 50%;\r\n    }\r\n    \r\n    .project4 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 50%;\r\n    }\r\n\r\n    .project5 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 50%;\r\n    }\r\n    \r\n    .project6 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 50%;\r\n    }\r\n    \r\n    .project7 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 50%;\r\n    }\r\n    \r\n    .project8 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 50%;\r\n    }\r\n\r\n    .project9 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 50%;\r\n    }\r\n    \r\n    .project10 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 50%;\r\n    }\r\n    \r\n    .project11 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 50%;\r\n    }\r\n    \r\n    .project12 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .int-text {\r\n        width: 25rem;\r\n    }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .int-text {\r\n        width: 18rem;\r\n    }\r\n\r\n    .project1 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 100%;\r\n    }\r\n    \r\n    .project2 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 100%;\r\n    }\r\n    \r\n    .project3 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 100%;\r\n    }\r\n    \r\n    .project4 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 100%;\r\n    }\r\n\r\n    .project5 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 100%;\r\n    }\r\n    \r\n    .project6 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 100%;\r\n    }\r\n    \r\n    .project7 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 100%;\r\n    }\r\n    \r\n    .project8 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 100%;\r\n    }\r\n\r\n    .project9 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 100%;\r\n    }\r\n    \r\n    .project10 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 100%;\r\n    }\r\n    \r\n    .project11 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 100%;\r\n    }\r\n    \r\n    .project12 {\r\n        max-height: 10rem;\r\n        min-height: 10rem;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy1wYXJ0L3NlcnZpY2VzLXBhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBLG1EQUFtRDs7QUFDbkQ7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsVUFBVTtJQUNkO0FBQ0o7O0FBRUEscURBQXFEOztBQUNyRDtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBLG9FQUFvRTs7QUFDcEU7SUFDSTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsV0FBVztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsV0FBVztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsV0FBVztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsV0FBVztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmljZXMtcGFydC9zZXJ2aWNlcy1wYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZXMtcGFydCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDJmMmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTByZW07XHJcbn1cclxuXHJcbi5pbnRyb2R1Y3Rpb24tcGFydCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW50LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmludC10ZXh0IHtcclxuICAgIHdpZHRoOiA1MHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5pbnQtbGluZSB7XHJcbiAgICBoZWlnaHQ6IDAuM3JlbTtcclxuICAgIHdpZHRoOiA3cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3Qge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2plY3Qtcm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1pY29uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvamVjdDEge1xyXG4gICAgbWF4LWhlaWdodDogN3JlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDdyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucHJvamVjdDIge1xyXG4gICAgbWF4LWhlaWdodDogN3JlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDdyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucHJvamVjdDMge1xyXG4gICAgbWF4LWhlaWdodDogN3JlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDdyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucHJvamVjdDQge1xyXG4gICAgbWF4LWhlaWdodDogN3JlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDdyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucHJvamVjdDUge1xyXG4gICAgbWF4LWhlaWdodDogN3JlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDdyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucHJvamVjdDYge1xyXG4gICAgbWF4LWhlaWdodDogN3JlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDdyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucHJvamVjdDcge1xyXG4gICAgbWF4LWhlaWdodDogN3JlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDdyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucHJvamVjdDgge1xyXG4gICAgbWF4LWhlaWdodDogN3JlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDdyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucHJvamVjdDkge1xyXG4gICAgbWF4LWhlaWdodDogN3JlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDdyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ucHJvamVjdDEwIHtcclxuICAgIG1heC1oZWlnaHQ6IDdyZW07XHJcbiAgICBtaW4taGVpZ2h0OiA3cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnByb2plY3QxMSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3cmVtO1xyXG4gICAgbWluLWhlaWdodDogN3JlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi5wcm9qZWN0MTIge1xyXG4gICAgbWF4LWhlaWdodDogN3JlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDdyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuc2VydmljZXMtcGFydCB7XHJcbiAgICAgICAgcGFkZGluZzogNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdC1yb3cge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmludC10ZXh0IHtcclxuICAgICAgICB3aWR0aDogMzByZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdDEge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0MiB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTByZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogMTByZW07XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QzIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdDQge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3Q1IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdDYge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0NyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTByZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogMTByZW07XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3Q4IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0OSB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTByZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogMTByZW07XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QxMCB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTByZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogMTByZW07XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QxMSB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTByZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogMTByZW07XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QxMiB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTByZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogMTByZW07XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5pbnQtdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDI1cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmludC10ZXh0IHtcclxuICAgICAgICB3aWR0aDogMThyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QxIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QyIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QzIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3Q0IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdDUge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdDYge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdDcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdDgge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0OSB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTByZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogMTByZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9qZWN0MTAge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvamVjdDExIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnByb2plY3QxMiB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTByZW07XHJcbiAgICAgICAgbWluLWhlaWdodDogMTByZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/services-part/services-part.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/services-part/services-part.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ServicesPartComponent */

  /***/
  function srcAppComponentsServicesPartServicesPartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesPartComponent", function () {
      return ServicesPartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ServicesPartComponent = /*#__PURE__*/function () {
      function ServicesPartComponent() {
        _classCallCheck(this, ServicesPartComponent);
      }

      _createClass(ServicesPartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesPartComponent;
    }();

    ServicesPartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-services-part',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services-part.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/services-part/services-part.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services-part.component.css */
      "./src/app/components/services-part/services-part.component.css"))["default"]]
    })], ServicesPartComponent);
    /***/
  },

  /***/
  "./src/app/components/solar-panels-part/solar-panels-part.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/solar-panels-part/solar-panels-part.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSolarPanelsPartSolarPanelsPartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".solar-panels-part {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 68vh;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.text-part {\r\n    font-family: 'Poppins-Light';\r\n    height: 100%;\r\n    width: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: center;\r\n    background-color: #c9c9c9;\r\n    color: rgb(37, 37, 37);\r\n    padding: 1rem 7rem;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.title {\r\n    font-family: 'Poppins-SemiBold';\r\n    font-size: 3rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.image-part {\r\n    height: 100%;\r\n    width: 50%;\r\n    background-image: url('solar-panels-2.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (max-width: 1080px) {\r\n\r\n    .text-part {\r\n        padding: 1rem 3rem;\r\n    }\r\n\r\n    .title {\r\n        font-size: 2.5rem;\r\n        margin-bottom: 1.5rem;\r\n    }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .solar-panels-part {\r\n        flex-direction: column;\r\n        min-height: 90vh;\r\n    }\r\n\r\n    .text-part {\r\n        width: 100%;\r\n        background-image: url('solar-panels-3.jpg');\r\n        background-size: cover;\r\n    }\r\n\r\n    .image-part {\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2xhci1wYW5lbHMtcGFydC9zb2xhci1wYW5lbHMtcGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLDJDQUFrRTtJQUNsRSxzQkFBc0I7QUFDMUI7O0FBRUEsbURBQW1EOztBQUNuRDs7SUFFSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixxQkFBcUI7SUFDekI7QUFDSjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLDJDQUFrRTtRQUNsRSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvbGFyLXBhbmVscy1wYXJ0L3NvbGFyLXBhbmVscy1wYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29sYXItcGFuZWxzLXBhcnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDY4dmg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4udGV4dC1wYXJ0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1MaWdodCc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTtcclxuICAgIGNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDdyZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVNlbWlCb2xkJztcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5pbWFnZS1wYXJ0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NvbGFyLXBhbmVscy0yLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuXHJcbiAgICAudGV4dC1wYXJ0IHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuc29sYXItcGFuZWxzLXBhcnQge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWluLWhlaWdodDogOTB2aDtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1wYXJ0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NvbGFyLXBhbmVscy0zLmpwZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZS1wYXJ0IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/solar-panels-part/solar-panels-part.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/solar-panels-part/solar-panels-part.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SolarPanelsPartComponent */

  /***/
  function srcAppComponentsSolarPanelsPartSolarPanelsPartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolarPanelsPartComponent", function () {
      return SolarPanelsPartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SolarPanelsPartComponent = /*#__PURE__*/function () {
      function SolarPanelsPartComponent() {
        _classCallCheck(this, SolarPanelsPartComponent);
      }

      _createClass(SolarPanelsPartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SolarPanelsPartComponent;
    }();

    SolarPanelsPartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-solar-panels-part',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./solar-panels-part.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/solar-panels-part/solar-panels-part.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./solar-panels-part.component.css */
      "./src/app/components/solar-panels-part/solar-panels-part.component.css"))["default"]]
    })], SolarPanelsPartComponent);
    /***/
  },

  /***/
  "./src/app/components/website/website.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/website/website.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWebsiteWebsiteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Small devices (portrait tablets and large phones, 600px and up) */\r\n@media only screen and (max-width: 767px) {\r\n\r\n    /* .blanket {\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        background-color: rgba(37, 37, 37, 0.2);\r\n        min-height: 100%;\r\n        width: 100%;\r\n        z-index: 500;\r\n    }\r\n\r\n    .no-blanket {\r\n        display: none;\r\n    } */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlL3dlYnNpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRUFBb0U7QUFDcEU7O0lBRUk7Ozs7Ozs7Ozs7OztPQVlHO0FBQ1AiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlYnNpdGUvd2Vic2l0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgICAvKiAuYmxhbmtldCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC4yKTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAubm8tYmxhbmtldCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH0gKi9cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/website/website.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/website/website.component.ts ***!
    \*********************************************************/

  /*! exports provided: WebsiteComponent */

  /***/
  function srcAppComponentsWebsiteWebsiteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebsiteComponent", function () {
      return WebsiteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WebsiteComponent = /*#__PURE__*/function () {
      function WebsiteComponent() {
        _classCallCheck(this, WebsiteComponent);

        this.language = "";
      }

      _createClass(WebsiteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigationClicked",
        value: function navigationClicked(element) {
          switch (element) {
            case "about":
              this.divAbout.nativeElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
              break;

            case "services":
              this.divServices.nativeElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
              break;

            case "references":
              this.divReferences.nativeElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
              break;

            case "contact":
              this.divContact.nativeElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
              break;
          }
        }
      }, {
        key: "languageChanged",
        value: function languageChanged(language) {
          this.referencesPart.changeLanguage();
        }
      }]);

      return WebsiteComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("about", {
      "static": false
    })], WebsiteComponent.prototype, "divAbout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("services", {
      "static": false
    })], WebsiteComponent.prototype, "divServices", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("references", {
      "static": false
    })], WebsiteComponent.prototype, "divReferences", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("contact", {
      "static": false
    })], WebsiteComponent.prototype, "divContact", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("refpart", {
      "static": false
    })], WebsiteComponent.prototype, "referencesPart", void 0);
    WebsiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-website',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./website.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website/website.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./website.component.css */
      "./src/app/components/website/website.component.css"))["default"]]
    })], WebsiteComponent);
    /***/
  },

  /***/
  "./src/app/components/welcome-part/welcome-part.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/welcome-part/welcome-part.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWelcomePartWelcomePartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    height: 92vh;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: var(--dark-gray);\r\n}\r\n\r\n.left-part {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.bg-text {\r\n    font-weight: lighter;\r\n    position: relative;\r\n    left: 5rem;\r\n    width: 30rem;\r\n    text-align: left;\r\n    color: #fff;\r\n    opacity: 0;\r\n    transform: translateY(9rem);\r\n    transition: opacity 1000ms ease-out, transform 1200ms;\r\n}\r\n\r\n.bg-text-animation {\r\n    position: relative;\r\n    left: 5rem;\r\n    width: 30rem;\r\n    text-align: left;\r\n    color: #fff;\r\n    opacity: 1 !important;\r\n    transform: translateY(0rem) !important;\r\n}\r\n\r\n.bg-text .bg-title {\r\n    font-size: 3.2rem;\r\n    text-transform: uppercase;\r\n    font-family: 'Poppins-SemiBold', 'NexaBold';\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.bg-text .text {\r\n    font-size: 1rem;\r\n}\r\n\r\n.ref-btn {\r\n    background-color: var(--dark-gray);\r\n    padding: 0.8rem 1.6rem;\r\n    border: solid 2.2px #ffffff;\r\n    border-radius: 50px;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    font-size: 0.8rem;\r\n    margin-top: 1rem;\r\n    transition: background-color 0.5s ease-out, color 0.5s ease-out;\r\n}\r\n\r\n.ref-btn:hover {\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    color: #302f2f;\r\n}\r\n\r\n.right-part > img {\r\n    width: 56rem;\r\n    position: relative;\r\n    left: 5rem;\r\n}\r\n\r\n/* Large devices (laptops/desktops, 1200px and up) */\r\n\r\n@media only screen and (max-width: 1400px) {\r\n    .background {\r\n        background-color: var(--dark-gray);\r\n    }\r\n\r\n    .bg-text {\r\n        left: 9rem;\r\n    }\r\n    \r\n    .bg-text-animation {\r\n        left: 9rem;\r\n    }\r\n\r\n    .right-part > img {\r\n        width: 50rem;\r\n    }\r\n    \r\n}\r\n\r\n/* Large devices (laptops/desktops, 768px and up) */\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .background {\r\n        background-color: var(--dark-gray);\r\n    }\r\n\r\n    .bg-text {\r\n        left: 7rem;\r\n        max-width: 22rem;\r\n    }\r\n    \r\n    .bg-text-animation {\r\n        left: 7rem;\r\n        max-width: 22rem;\r\n    }\r\n\r\n    .right-part > img {\r\n        width: 45rem;\r\n    }\r\n\r\n    .bg-text .bg-title {\r\n        font-size: 2.8rem;\r\n    }\r\n    \r\n    .bg-text .text {\r\n        font-size: 1rem;\r\n    }\r\n    \r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (max-width: 992px) {\r\n    .background {\r\n        height: 70vh;\r\n        background-image: url('background-image.jpg');\r\n        background-position: 47% 50%;\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n    }\r\n\r\n    .bg-text {\r\n        left: 0rem;\r\n        text-align: center;\r\n        max-width: 23rem;\r\n    }\r\n    \r\n    .bg-text-animation {\r\n        left: 0rem;\r\n        text-align: center;\r\n        max-width: 23rem;\r\n    }\r\n\r\n    .right-part > img {\r\n        display: none;\r\n    }\r\n\r\n    .bg-text .bg-title {\r\n        font-size: 2.8rem;\r\n    }\r\n    \r\n    .bg-text .text {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .ref-btn {\r\n        background-color: var(--light-blue);\r\n        padding: 0.8rem 1.6rem;\r\n        border: none;\r\n        border-radius: 50px;\r\n        text-transform: uppercase;\r\n        color: #fff;\r\n        font-size: 0.8rem;\r\n        margin-top: 1rem;\r\n        /* transition: background-color 0.5s ease-out, color 0.5s ease-out; */\r\n        transition: none;\r\n    }\r\n    \r\n    .ref-btn:hover {\r\n        cursor: pointer;\r\n        background-color: var(--light-blue);\r\n        color: var(--white)\r\n    } \r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (max-width: 460px) {\r\n    .background {\r\n        height: 92vh;\r\n    }\r\n\r\n    .bg-text {\r\n        max-width: 17rem;\r\n    }\r\n    \r\n    .bg-text-animation {\r\n        max-width: 17rem;\r\n    }\r\n\r\n    .bg-text .bg-title {\r\n        font-size: 2.7rem;\r\n    }\r\n    \r\n    .bg-text .text {\r\n        font-size: 1rem;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lLXBhcnQvd2VsY29tZS1wYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsK0RBQStEO0FBQ25FOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUEsb0RBQW9EOztBQUNwRDtJQUNJO1FBQ0ksa0NBQWtDO0lBQ3RDOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSjs7QUFFQSxtREFBbUQ7O0FBQ25EO0lBQ0k7UUFDSSxrQ0FBa0M7SUFDdEM7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztBQUVKOztBQUVBLHFEQUFxRDs7QUFDckQ7SUFDSTtRQUNJLFlBQVk7UUFDWiw2Q0FBb0U7UUFDcEUsNEJBQTRCO1FBQzVCLHNCQUFzQjtRQUN0Qiw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxtQ0FBbUM7UUFDbkMsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLHFFQUFxRTtRQUNyRSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsbUNBQW1DO1FBQ25DO0lBQ0o7QUFDSjs7QUFFQSxxREFBcUQ7O0FBQ3JEO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lLXBhcnQvd2VsY29tZS1wYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDkydmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XHJcbn1cclxuXHJcbi5sZWZ0LXBhcnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5iZy10ZXh0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNXJlbTtcclxuICAgIHdpZHRoOiAzMHJlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXJlbSk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMDBtcyBlYXNlLW91dCwgdHJhbnNmb3JtIDEyMDBtcztcclxufVxyXG5cclxuLmJnLXRleHQtYW5pbWF0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDVyZW07XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLXRleHQgLmJnLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1TZW1pQm9sZCcsICdOZXhhQm9sZCc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uYmctdGV4dCAudGV4dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5yZWYtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gMS42cmVtO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAyLjJweCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLW91dCwgY29sb3IgMC41cyBlYXNlLW91dDtcclxufVxyXG5cclxuLnJlZi1idG46aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjMzAyZjJmO1xyXG59XHJcblxyXG4ucmlnaHQtcGFydCA+IGltZyB7XHJcbiAgICB3aWR0aDogNTZyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1cmVtO1xyXG59XHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmJnLXRleHQge1xyXG4gICAgICAgIGxlZnQ6IDlyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iZy10ZXh0LWFuaW1hdGlvbiB7XHJcbiAgICAgICAgbGVmdDogOXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQtcGFydCA+IGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5iZy10ZXh0IHtcclxuICAgICAgICBsZWZ0OiA3cmVtO1xyXG4gICAgICAgIG1heC13aWR0aDogMjJyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iZy10ZXh0LWFuaW1hdGlvbiB7XHJcbiAgICAgICAgbGVmdDogN3JlbTtcclxuICAgICAgICBtYXgtd2lkdGg6IDIycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1wYXJ0ID4gaW1nIHtcclxuICAgICAgICB3aWR0aDogNDVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJnLXRleHQgLmJnLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJnLXRleHQgLnRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgIGhlaWdodDogNzB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2UuanBnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ3JSA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgfVxyXG5cclxuICAgIC5iZy10ZXh0IHtcclxuICAgICAgICBsZWZ0OiAwcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXgtd2lkdGg6IDIzcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmctdGV4dC1hbmltYXRpb24ge1xyXG4gICAgICAgIGxlZnQ6IDByZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1heC13aWR0aDogMjNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LXBhcnQgPiBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJnLXRleHQgLmJnLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJnLXRleHQgLnRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucmVmLWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XHJcbiAgICAgICAgcGFkZGluZzogMC44cmVtIDEuNnJlbTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgLyogdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2Utb3V0LCBjb2xvciAwLjVzIGVhc2Utb3V0OyAqL1xyXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZWYtYnRuOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKVxyXG4gICAgfSBcclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgICBoZWlnaHQ6IDkydmg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJnLXRleHQge1xyXG4gICAgICAgIG1heC13aWR0aDogMTdyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iZy10ZXh0LWFuaW1hdGlvbiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYmctdGV4dCAuYmctdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi43cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmctdGV4dCAudGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/welcome-part/welcome-part.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/welcome-part/welcome-part.component.ts ***!
    \*******************************************************************/

  /*! exports provided: WelcomePartComponent */

  /***/
  function srcAppComponentsWelcomePartWelcomePartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePartComponent", function () {
      return WelcomePartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WelcomePartComponent = /*#__PURE__*/function () {
      function WelcomePartComponent() {
        _classCallCheck(this, WelcomePartComponent);

        this.classesForText = {
          "bg-text": true,
          "bg-text-animation": false
        };
      }

      _createClass(WelcomePartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          setTimeout(function () {
            return _this3.classesForText['bg-text-animation'] = true;
          }, 0);
        }
      }]);

      return WelcomePartComponent;
    }();

    WelcomePartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome-part',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome-part.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/welcome-part/welcome-part.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome-part.component.css */
      "./src/app/components/welcome-part/welcome-part.component.css"))["default"]]
    })], WelcomePartComponent);
    /***/
  },

  /***/
  "./src/app/components/work-process-part/work-process-part.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/work-process-part/work-process-part.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWorkProcessPartWorkProcessPartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".work-process-block {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    min-height: 25rem;\r\n}\r\n\r\n.part1 {\r\n    box-sizing: border-box;\r\n    width: 33.3%;\r\n    background-color: var(--light-blue);\r\n    color:  var(--white);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 4rem 4rem;\r\n    text-align: center;\r\n    transition: background-color 500ms ease-out, color 500ms ease-out;\r\n}\r\n\r\n.part1:hover {\r\n    cursor: pointer;\r\n    background-color: #ebebeb;\r\n    color: rgb(37, 37, 37);\r\n}\r\n\r\n.part1:hover > .part1-icon {\r\n    background-image: url('project-black.png');\r\n}\r\n\r\n.part1-icon {\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n    background-image: url('project-white.png');\r\n    background-position: 47% 50%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin-bottom: 1.5rem;\r\n    transition: background-image 500ms ease-out;\r\n}\r\n\r\n.part1-title {\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.part2 {\r\n    box-sizing: border-box;\r\n    width: 33.3%;\r\n    background-color: #3b3b3b;\r\n    color:  var(--white);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 4rem 4rem;\r\n    text-align: center;\r\n    transition: background-color 500ms ease-out, color 500ms ease-out;\r\n}\r\n\r\n.part2:hover {\r\n    cursor: pointer;\r\n    background-color: #ebebeb;\r\n    color: rgb(37, 37, 37);\r\n}\r\n\r\n.part2:hover > .part2-icon {\r\n    background-image: url('phone-black.png');\r\n}\r\n\r\n.part2-icon {\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n    background-image: url('phone-white.png');\r\n    background-position: 47% 50%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin-bottom: 1.5rem;\r\n    transition: background-image 500ms ease-out;\r\n}\r\n\r\n.part2-title {\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.part3 {\r\n    box-sizing: border-box;\r\n    width: 33.4%;\r\n    background-color: #c9c9c9;\r\n    color: rgb(37, 37, 37);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 4rem 4rem;\r\n    text-align: center;\r\n    transition: background-color 500ms ease-out, color 500ms ease-out;\r\n}\r\n\r\n.part3:hover {\r\n    cursor: pointer;\r\n    background-color: #302f2f;\r\n    color:  var(--white);\r\n}\r\n\r\n.part3:hover > .part3-icon {\r\n    background-image: url('key-white.png');\r\n}\r\n\r\n.part3-icon {\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n    background-image: url('key-black.png');\r\n    background-position: 47% 50%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin-bottom: 1.5rem;\r\n    transition: background-image 500ms ease-out;\r\n}\r\n\r\n.part3-title {\r\n    font-size: 1.8rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n\r\n@media only screen and (max-width: 1200px) {\r\n\r\n    .part1-title {\r\n        font-size: 1.7rem;\r\n    }\r\n\r\n    .part2-title {\r\n        font-size: 1.7rem;\r\n    }\r\n\r\n    .part3-title {\r\n        font-size: 1.5rem;\r\n    }\r\n    \r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n\r\n@media only screen and (max-width: 992px) {\r\n\r\n    .part1 {\r\n        box-sizing: border-box;\r\n        padding: 2rem 2rem;\r\n    }\r\n\r\n    .part1-title {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .part1-text {\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n    .part1-icon {\r\n        width: 2rem;\r\n        height: 2rem;\r\n    }\r\n\r\n    .part2 {\r\n        box-sizing: border-box;\r\n        padding: 2rem 2rem;\r\n    }\r\n\r\n    .part2-title {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .part2-text {\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n    .part2-icon {\r\n        width: 2rem;\r\n        height: 2rem;\r\n    }\r\n\r\n    .part3 {\r\n        box-sizing: border-box;\r\n        padding: 2rem 2rem;\r\n    }\r\n\r\n    .part3-title {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .part3-text {\r\n        font-size: 0.7rem;\r\n    }\r\n\r\n    .part3-icon {\r\n        width: 2rem;\r\n        height: 2rem;\r\n    }\r\n\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .work-process-block {\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .part1 {\r\n        height: 22rem;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n        padding: 3rem 4rem;\r\n    }\r\n\r\n    .part1-title {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .part1-text {\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .part1-icon {\r\n        width: 2rem;\r\n        height: 2rem;\r\n    }\r\n\r\n    .part2 {\r\n        height: 22rem;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n        padding: 3rem 4rem;\r\n    }\r\n\r\n    .part2-title {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .part2-text {\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .part2-icon {\r\n        width: 2rem;\r\n        height: 2rem;\r\n    }\r\n\r\n    .part3 {\r\n        height: 22rem;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n        padding: 3rem 4rem;\r\n    }\r\n\r\n    .part3-title {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .part3-text {\r\n        font-size: 0.8rem;\r\n    }\r\n\r\n    .part3-icon {\r\n        width: 2rem;\r\n        height: 2rem;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JrLXByb2Nlc3MtcGFydC93b3JrLXByb2Nlc3MtcGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlFQUFpRTtBQUNyRTs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMENBQW1GO0FBQ3ZGOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCwwQ0FBbUY7SUFDbkYsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3Q0FBaUY7QUFDckY7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHdDQUFpRjtJQUNqRiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpRUFBaUU7QUFDckU7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNDQUErRTtBQUNuRjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0NBQStFO0lBQy9FLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBLG1EQUFtRDs7QUFDbkQ7O0lBRUk7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUo7O0FBRUEscURBQXFEOztBQUNyRDs7SUFFSTtRQUNJLHNCQUFzQjtRQUN0QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7QUFFSjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsV0FBVztRQUNYLHNCQUFzQjtRQUN0QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93b3JrLXByb2Nlc3MtcGFydC93b3JrLXByb2Nlc3MtcGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmstcHJvY2Vzcy1ibG9jayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWluLWhlaWdodDogMjVyZW07XHJcbn1cclxuXHJcbi5wYXJ0MSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XHJcbiAgICBjb2xvcjogIHZhcigtLXdoaXRlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNHJlbSA0cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlLW91dCwgY29sb3IgNTAwbXMgZWFzZS1vdXQ7XHJcbn0gICBcclxuXHJcbi5wYXJ0MTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gICAgY29sb3I6IHJnYigzNywgMzcsIDM3KTtcclxufVxyXG5cclxuLnBhcnQxOmhvdmVyID4gLnBhcnQxLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb25zL3dvcmstcHJvY2Vzcy1pY29ucy9wcm9qZWN0LWJsYWNrLnBuZ1wiKTtcclxufVxyXG5cclxuLnBhcnQxLWljb24ge1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb25zL3dvcmstcHJvY2Vzcy1pY29ucy9wcm9qZWN0LXdoaXRlLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ3JSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgNTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5wYXJ0MS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ucGFydDIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAzMy4zJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XHJcbiAgICBjb2xvcjogIHZhcigtLXdoaXRlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNHJlbSA0cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlLW91dCwgY29sb3IgNTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5wYXJ0Mjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gICAgY29sb3I6IHJnYigzNywgMzcsIDM3KTtcclxufVxyXG5cclxuLnBhcnQyOmhvdmVyID4gLnBhcnQyLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb25zL3dvcmstcHJvY2Vzcy1pY29ucy9waG9uZS1ibGFjay5wbmdcIik7XHJcbn1cclxuXHJcbi5wYXJ0Mi1pY29uIHtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pY29ucy93b3JrLXByb2Nlc3MtaWNvbnMvcGhvbmUtd2hpdGUucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDclIDUwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSA1MDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLnBhcnQyLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5wYXJ0MyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDMzLjQlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTtcclxuICAgIGNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDRyZW0gNHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZS1vdXQsIGNvbG9yIDUwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4ucGFydDM6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMmYyZjtcclxuICAgIGNvbG9yOiAgdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4ucGFydDM6aG92ZXIgPiAucGFydDMtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbnMvd29yay1wcm9jZXNzLWljb25zL2tleS13aGl0ZS5wbmdcIik7XHJcbn1cclxuXHJcbi5wYXJ0My1pY29uIHtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pY29ucy93b3JrLXByb2Nlc3MtaWNvbnMva2V5LWJsYWNrLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ3JSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgNTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5wYXJ0My10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbiAgICAucGFydDEtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXJ0Mi10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnQzLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG5cclxuICAgIC5wYXJ0MSB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnQxLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucGFydDEtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnQxLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucGFydDIge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXJ0Mi10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnQyLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXJ0Mi1pY29uIHtcclxuICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnQzIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucGFydDMtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYXJ0My10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAucGFydDMtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC53b3JrLXByb2Nlc3MtYmxvY2sge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAucGFydDEge1xyXG4gICAgICAgIGhlaWdodDogMjJyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtIDRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnQxLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucGFydDEtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnQxLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucGFydDIge1xyXG4gICAgICAgIGhlaWdodDogMjJyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtIDRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnQyLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucGFydDItdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnQyLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucGFydDMge1xyXG4gICAgICAgIGhlaWdodDogMjJyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtIDRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnQzLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucGFydDMtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnQzLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/work-process-part/work-process-part.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/work-process-part/work-process-part.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: WorkProcessPartComponent */

  /***/
  function srcAppComponentsWorkProcessPartWorkProcessPartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkProcessPartComponent", function () {
      return WorkProcessPartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WorkProcessPartComponent = /*#__PURE__*/function () {
      function WorkProcessPartComponent() {
        _classCallCheck(this, WorkProcessPartComponent);
      }

      _createClass(WorkProcessPartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WorkProcessPartComponent;
    }();

    WorkProcessPartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-work-process-part',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work-process-part.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/work-process-part/work-process-part.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work-process-part.component.css */
      "./src/app/components/work-process-part/work-process-part.component.css"))["default"]]
    })], WorkProcessPartComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! D:\Gorun\Dizajn\Bussines\CD\work\website design\project\angular - Copy\cd-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map