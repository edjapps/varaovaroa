function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
  "./package.json":
  /*!**********************!*\
    !*** ./package.json ***!
    \**********************/

  /*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */

  /***/
  function packageJson(module) {
    module.exports = JSON.parse("{\"name\":\"dating-app-spa\",\"version\":\"1.0.3\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"prebuild\":\"npm --no-git-tag-version version patch\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~9.0.6\",\"@angular/common\":\"~9.0.6\",\"@angular/compiler\":\"~9.0.6\",\"@angular/core\":\"~9.0.6\",\"@angular/forms\":\"~9.0.6\",\"@angular/platform-browser\":\"~9.0.6\",\"@angular/platform-browser-dynamic\":\"~9.0.6\",\"@angular/router\":\"~9.0.6\",\"@auth0/angular-jwt\":\"^4.0.0\",\"alertifyjs\":\"^1.13.1\",\"bootstrap\":\"^4.3.1\",\"bootswatch\":\"^4.5.0\",\"font-awesome\":\"^4.7.0\",\"http-server\":\"^14.1.1\",\"ng2-file-upload\":\"^1.4.0\",\"ngx-bootstrap\":\"^5.6.1\",\"ngx-gallery-9\":\"^1.0.6\",\"ngx-spinner\":\"^9.0.2\",\"ngx-timeago\":\"^1.0.4\",\"rxjs\":\"~6.5.4\",\"tslib\":\"^1.10.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"^0.900.7\",\"@angular/cli\":\"~9.0.6\",\"@angular/compiler-cli\":\"~9.0.6\",\"@angular/language-service\":\"~9.0.6\",\"@types/jasmine\":\"~3.5.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^12.11.1\",\"codelyzer\":\"^5.1.2\",\"jasmine-spec-reporter\":\"~4.2.1\",\"karma\":\"~4.3.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~2.1.0\",\"karma-jasmine\":\"~2.0.1\",\"karma-jasmine-html-reporter\":\"^1.4.2\",\"protractor\":\"~5.4.3\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~5.18.0\",\"typescript\":\"~3.7.5\"}}");
    /***/
  },

  /***/
  "./src/app/_directives/hasRole.directive.ts":
  /*!**************************************************!*\
    !*** ./src/app/_directives/hasRole.directive.ts ***!
    \**************************************************/

  /*! exports provided: HasRoleDirective */

  /***/
  function srcApp_directivesHasRoleDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HasRoleDirective", function () {
      return HasRoleDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_Auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/Auth.service */
    "./src/app/_services/Auth.service.ts");

    var HasRoleDirective =
    /*#__PURE__*/
    function () {
      function HasRoleDirective(viewContainerRef, templateRef, authService) {
        _classCallCheck(this, HasRoleDirective);

        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.authService = authService;
        this.isVisible = false;
      }

      _createClass(HasRoleDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {// const userRoles = this.authService.decodedToken.role as Array<string>;
          // // if user has no roles, clear the viewContainerRef
          // if (!userRoles) {
          //   this.viewContainerRef.clear();
          // }
          // // if user has role needed then render the element
          // if (this.authService.roleMatch(this.appHasRole)) {
          //   if (!this.isVisible) {
          //     this.isVisible = true;
          //     this.viewContainerRef.createEmbeddedView(this.templateRef);
          //   } else {
          //     this.isVisible = false;
          //     this.viewContainerRef.clear();
          //   }
          // }
        }
      }]);

      return HasRoleDirective;
    }();

    HasRoleDirective.ɵfac = function HasRoleDirective_Factory(t) {
      return new (t || HasRoleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    HasRoleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: HasRoleDirective,
      selectors: [["", "appHasRole", ""]],
      inputs: {
        appHasRole: "appHasRole"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HasRoleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[appHasRole]"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, {
        appHasRole: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/_guards/auth.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/_guards/auth.guard.ts ***!
    \***************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_guardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_Auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_Alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router, alertify) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next) {
          var roles = next.firstChild.data["roles"];

          if (roles) {
            var match = this.authService.roleMatch(roles);

            if (match) {
              return true;
            } else {
              this.router.navigate(["members"]);
              this.alertify.error("Você não tem acesso a essa área!");
            }
          }

          if (this.authService.loggedIn()) {
            return true;
          }

          this.alertify.error("É preciso estar logado!");
          this.router.navigate(["/home"]);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_Alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_models/pagination.ts":
  /*!***************************************!*\
    !*** ./src/app/_models/pagination.ts ***!
    \***************************************/

  /*! exports provided: PaginatedResult */

  /***/
  function srcApp_modelsPaginationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatedResult", function () {
      return PaginatedResult;
    });

    var PaginatedResult =
    /*#__PURE__*/
    _createClass(function PaginatedResult() {
      _classCallCheck(this, PaginatedResult);
    });
    /***/

  },

  /***/
  "./src/app/_resolvers/lists.resolver.ts":
  /*!**********************************************!*\
    !*** ./src/app/_resolvers/lists.resolver.ts ***!
    \**********************************************/

  /*! exports provided: ListsResolver */

  /***/
  function srcApp_resolversListsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListsResolver", function () {
      return ListsResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/constants */
    "./src/app/common/constants.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ListsResolver =
    /*#__PURE__*/
    function () {
      function ListsResolver(userService, alertify, router) {
        _classCallCheck(this, ListsResolver);

        this.userService = userService;
        this.alertify = alertify;
        this.router = router;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.likesParam = 'Likers';
      }

      _createClass(ListsResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var _this = this;

          return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.alertify.error(_common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].GetDataError);

            _this.router.navigate(['/home']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return ListsResolver;
    }();

    ListsResolver.ɵfac = function ListsResolver_Factory(t) {
      return new (t || ListsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    ListsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ListsResolver,
      factory: ListsResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_resolvers/member-detail.resolver.ts":
  /*!******************************************************!*\
    !*** ./src/app/_resolvers/member-detail.resolver.ts ***!
    \******************************************************/

  /*! exports provided: MemberDetailResolver */

  /***/
  function srcApp_resolversMemberDetailResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberDetailResolver", function () {
      return MemberDetailResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/constants */
    "./src/app/common/constants.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MemberDetailResolver =
    /*#__PURE__*/
    function () {
      function MemberDetailResolver(userService, alertify, router) {
        _classCallCheck(this, MemberDetailResolver);

        this.userService = userService;
        this.alertify = alertify;
        this.router = router;
      }

      _createClass(MemberDetailResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var _this2 = this;

          return this.userService.getUser(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this2.alertify.error(_common_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].GetDataError);

            _this2.router.navigate(['/home']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return MemberDetailResolver;
    }();

    MemberDetailResolver.ɵfac = function MemberDetailResolver_Factory(t) {
      return new (t || MemberDetailResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    MemberDetailResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MemberDetailResolver,
      factory: MemberDetailResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberDetailResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_resolvers/member-edit.resolver.ts":
  /*!****************************************************!*\
    !*** ./src/app/_resolvers/member-edit.resolver.ts ***!
    \****************************************************/

  /*! exports provided: MemberEditResolver */

  /***/
  function srcApp_resolversMemberEditResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberEditResolver", function () {
      return MemberEditResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_Auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../_services/Auth.service */
    "./src/app/_services/Auth.service.ts");

    var MemberEditResolver =
    /*#__PURE__*/
    function () {
      function MemberEditResolver(userService, alertify, router, authService) {
        _classCallCheck(this, MemberEditResolver);

        this.userService = userService;
        this.alertify = alertify;
        this.router = router;
        this.authService = authService;
      }

      _createClass(MemberEditResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var _this3 = this;

          var id = JSON.parse(localStorage.getItem("currentUser")).id;
          return this.userService.getUser(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this3.alertify.error(error);

            _this3.router.navigate(["/members"]);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return MemberEditResolver;
    }();

    MemberEditResolver.ɵfac = function MemberEditResolver_Factory(t) {
      return new (t || MemberEditResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
    };

    MemberEditResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MemberEditResolver,
      factory: MemberEditResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberEditResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_resolvers/member-list.resolver.ts":
  /*!****************************************************!*\
    !*** ./src/app/_resolvers/member-list.resolver.ts ***!
    \****************************************************/

  /*! exports provided: MemberListResolver */

  /***/
  function srcApp_resolversMemberListResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberListResolver", function () {
      return MemberListResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/constants */
    "./src/app/common/constants.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MemberListResolver =
    /*#__PURE__*/
    function () {
      function MemberListResolver(userService, alertify, router) {
        _classCallCheck(this, MemberListResolver);

        this.userService = userService;
        this.alertify = alertify;
        this.router = router;
        this.pageNumber = 1;
        this.pageSize = 5;
      }

      _createClass(MemberListResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var _this4 = this;

          return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this4.alertify.error(_common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].GetDataError);

            _this4.router.navigate(['/home']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return MemberListResolver;
    }();

    MemberListResolver.ɵfac = function MemberListResolver_Factory(t) {
      return new (t || MemberListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    MemberListResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MemberListResolver,
      factory: MemberListResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberListResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_resolvers/message-list.resolver.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_resolvers/message-list.resolver.ts ***!
    \*****************************************************/

  /*! exports provided: MessageListResolver */

  /***/
  function srcApp_resolversMessageListResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageListResolver", function () {
      return MessageListResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/constants */
    "./src/app/common/constants.ts");
    /* harmony import */


    var _services_Auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _services_Alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MessageListResolver =
    /*#__PURE__*/
    function () {
      function MessageListResolver(authService, userService, alertify, router) {
        _classCallCheck(this, MessageListResolver);

        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.router = router;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.messageContainer = 'Unread';
      }

      _createClass(MessageListResolver, [{
        key: "resolve",
        value: function resolve(route) {
          var _this5 = this;

          return this.userService.getLastChats(this.authService.getCurrentUser().memberId, this.pageNumber, this.pageSize, this.messageContainer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this5.alertify.error(_common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].GetDataError);

            _this5.router.navigate(['/home']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return MessageListResolver;
    }();

    MessageListResolver.ɵfac = function MessageListResolver_Factory(t) {
      return new (t || MessageListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    MessageListResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MessageListResolver,
      factory: MessageListResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageListResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _services_Alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/Alertify.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/_services/Alertify.service.ts ***!
    \***********************************************/

  /*! exports provided: AlertifyService */

  /***/
  function srcApp_servicesAlertifyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertifyService", function () {
      return AlertifyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var alertifyjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! alertifyjs */
    "./node_modules/alertifyjs/build/alertify.js");
    /* harmony import */


    var alertifyjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_1__);

    var AlertifyService =
    /*#__PURE__*/
    function () {
      function AlertifyService() {
        _classCallCheck(this, AlertifyService);
      }

      _createClass(AlertifyService, [{
        key: "confirm",
        value: function confirm(title, message, okCallback) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_1__["confirm"](title, message, function (e) {
            if (e) {
              okCallback();
            }
          }, '');
        }
      }, {
        key: "success",
        value: function success(message) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_1__["success"](message);
        }
      }, {
        key: "error",
        value: function error(message, _error) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_1__["error"](message);
          if (_error) console.log(_error);
        }
      }, {
        key: "message",
        value: function message(_message) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_1__["message"](_message);
        }
      }, {
        key: "warning",
        value: function warning(message) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_1__["warning"](message);
        }
      }]);

      return AlertifyService;
    }();

    AlertifyService.ɵfac = function AlertifyService_Factory(t) {
      return new (t || AlertifyService)();
    };

    AlertifyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlertifyService,
      factory: AlertifyService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertifyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/Auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/Auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcApp_servicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        this.photoUrl = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
      }

      _createClass(AuthService, [{
        key: "loginAirtable",
        value: function loginAirtable(model) {
          var _this6 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["API_KEY"]);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
          params = params.append('fields[]', 'ID');
          params = params.append('fields[]', 'Name');
          params = params.append('fields[]', 'Age');
          params = params.append('fields[]', 'Email');
          params = params.append('fields[]', 'Gender');
          params = params.append('fields[]', 'CreateDate');
          params = params.append('fields[]', 'LastAccess');
          params = params.append('fields[]', 'ImageUrl');
          params = params.append('fields[]', 'City');
          params = params.append('fields[]', 'UF');
          params = params.append('fields[]', 'About');
          params = params.append('fields[]', 'Seek');
          params = params.append('fields[]', 'ActivitiesOfInterest2');
          params = params.append('fields[]', 'MainImage');
          params = params.append('fields[]', 'Favorites');
          params = params.append('filterByFormula', "AND({Email}='" + model.Username + "',{Password}='" + model.Password + "')");
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["API_PATH"] + 'Members', {
            headers: headers,
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var _a;

            if (response) {
              var record = response.records[0].fields;
              var photoUrl = record.MainImage[0].url;
              _this6.username = record.Name;
              _this6.id = record.ID;

              _this6.photoUrl.next(photoUrl);

              _this6.photoUrl2 = photoUrl;
              var user = {
                knownAs: record.Name,
                age: record.Age,
                id: record.ID,
                memberId: response.records[0].id,
                userName: record.Name,
                email: record.Email,
                gender: record.Gender,
                created: record.CreateDate,
                lastActive: record.LastAccess,
                photoUrl: photoUrl,
                city: record.City.trim(),
                county: record.UF,
                introduction: record.About,
                lookingFor: record.Seek,
                interests: (_a = record.ActivitiesOfInterest2) === null || _a === void 0 ? void 0 : _a.toString().split(',').join(', '),
                favorites: record.Favorites
              };
              localStorage.setItem("currentUser", JSON.stringify(user));
              localStorage.setItem("favorites", record.Favorites);
              localStorage.setItem("userId", record.ID);
            }
          }));
        }
      }, {
        key: "checkLoginByEmail",
        value: function checkLoginByEmail(username) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["API_KEY"]);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
          params = params.append('fields[]', 'ID');
          params = params.append('fields[]', 'Name');
          params = params.append('filterByFormula', "AND({Email}='" + username + "')");
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["API_PATH"] + 'Members', {
            headers: headers,
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response) {
              // console.log(response.records[0].id);
              return response.records[0].id;
            }
          }));
        }
      }, {
        key: "forgotPasswordUpdate",
        value: function forgotPasswordUpdate(memberId) {
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["API_KEY"]
          });
          return this.http.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["API_PATH"] + 'Members/' + memberId, JSON.stringify({
            "fields": {
              "ForgotPasswordUpdate": new Date()
            },
            "typecast": true
          }), {
            headers: httpHeaders
          });
        }
      }, {
        key: "contactUs",
        value: function contactUs(contact) {
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["API_KEY"]
          });
          var body = JSON.stringify({
            "fields": {
              "UserId": "".concat(contact.memberId),
              "Name": "".concat(contact.name),
              "Email": "".concat(contact.email),
              "Message": "".concat(contact.message)
            }
          });
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["API_PATH"] + 'ContactUs', body, {
            headers: httpHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (response) {
              var id = response.id;
            }
          }));
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          var currentUser = JSON.parse(localStorage.getItem("currentUser"));

          if (currentUser) {
            this.id = currentUser.id;
            this.username = currentUser.userName;
            this.photoUrl.next(currentUser.photoUrl);
          }

          return currentUser;
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          var token = localStorage.getItem("currentUser");

          if (token) {
            return true;
          }

          return false;
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["API_PATH"] + "auth/register", user);
        }
      }, {
        key: "roleMatch",
        value: function roleMatch(allowedRoles) {
          var isMatch = false;
          var userRoles = this.decodedToken.role;
          allowedRoles.forEach(function (element) {
            if (userRoles.includes(element)) {
              isMatch = true;
              return;
            }
          });
          return isMatch;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/error.interceptor.ts":
  /*!************************************************!*\
    !*** ./src/app/_services/error.interceptor.ts ***!
    \************************************************/

  /*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */

  /***/
  function srcApp_servicesErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function () {
      return ErrorInterceptorProvider;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(spinner) {
        _classCallCheck(this, ErrorInterceptor);

        this.spinner = spinner;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this7 = this;

          // Show this spinner for each request
          this.spinner.show();
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            // this is used for 401 Unauthorized error
            if (error.status === 401) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.statusText);
            }

            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
              // This is used for 500 type of errors
              var applicationError = error.headers.get('Application-Error');

              if (applicationError) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(applicationError);
              } // This is used for Modal State errors


              var serverError = error.error;
              var modalStateErrors = '';

              if (serverError.errors && typeof serverError.errors === 'object') {
                for (var key in serverError.errors) {
                  if (serverError.errors[key]) {
                    modalStateErrors += serverError.errors[key] + '\n';
                  }
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(modalStateErrors || serverError || 'serverError');
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            // hide the spinner
            _this7.spinner.hide();
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]));
    };

    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
        }];
      }, null);
    })();

    var ErrorInterceptorProvider = {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: ErrorInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/_services/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _models_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_models/pagination */
    "./src/app/_models/pagination.ts");
    /* harmony import */


    var _Auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var _Alertify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Alertify.service */
    "./src/app/_services/Alertify.service.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(authService, http, alertify) {
        _classCallCheck(this, UserService);

        this.authService = authService;
        this.http = http;
        this.alertify = alertify;
        this.cache = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers(page, itemsPerPage, userParams, likesParams) {
          var _this8 = this;

          var _a, _b, _c; // if (this.cache.getValue() !== null) {
          //   return new Observable<PaginatedResult<User[]>>((observer) => {
          //     observer.next(this.cache.getValue());
          //   });
          // }


          var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatedResult"]();
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
          params = params.append('fields[]', 'ID');
          params = params.append('fields[]', 'Name');
          params = params.append('fields[]', 'Age');
          params = params.append('fields[]', 'City');
          params = params.append('fields[]', 'UF');
          params = params.append('fields[]', 'MainImage');
          params = params.append('sort%5B0%5D%5Bfield%5D', 'EditDate');
          params = params.append('sort%5B0%5D%5Bdirection%5D', 'desc');
          var favorites = localStorage.getItem("favorites");
          var newFavorites = ''; // Quem me curtiu

          if (likesParams === 'Likers') {
            var id = this.authService.getCurrentUser().memberId;
            id = id.substring(id.length - 4);
            params = params.append('filterByFormula', "IF(SEARCH('".concat(id, "',Favorites),1,0)>0"));
          } // Quem eu curti
          else if (likesParams === 'Likees') {
            var ids = favorites.split(',');
            var search = '';

            for (var i in ids) {
              if (!ids[i]) continue;
              search += "FIND(\"".concat(ids[i], "\", MemberId) > 0,");
            }

            search = "OR(".concat(search.slice(0, -1), ")");
            params = params.append('filterByFormula', search);
          } // Listas
          else {
            var gender = localStorage.getItem('gender') == 'Feminino' ? 'Masculino' : 'Feminino';
            var uf = ((_a = userParams) === null || _a === void 0 ? void 0 : _a.uf) ? userParams.uf : localStorage.getItem('uf');
            var minAge = ((_b = userParams) === null || _b === void 0 ? void 0 : _b.minAge) ? userParams.minAge : localStorage.getItem('minAge');
            var maxAge = ((_c = userParams) === null || _c === void 0 ? void 0 : _c.maxAge) ? userParams.maxAge : localStorage.getItem('maxAge');
            params = params.append('filterByFormula', "AND({Gender}='".concat(gender, "',{County}='").concat(uf, "',{Age}>='").concat(minAge, "',{Age}<='").concat(maxAge, "',{Enabled}=1)"));
          }

          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'Members', {
            headers: httpHeaders,
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
              paginatedResult.result = new Array();

              var _iterator = _createForOfIteratorHelper(response.records),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var record = _step.value;
                  var memberId4 = record.id.substring(record.id.length - 4);
                  var isLiked = favorites.includes(memberId4);

                  if (likesParams === 'Likees') {
                    newFavorites += "".concat(memberId4, ",");
                  }

                  var user = {
                    knownAs: record.fields.Name,
                    age: record.fields.Age,
                    id: record.fields.ID,
                    memberId: record.id,
                    userName: record.fields.Name,
                    photoUrl: record.fields.MainImage[0].url,
                    city: record.fields.City,
                    county: record.fields.UF,
                    isLiked: isLiked
                  };
                  paginatedResult.result.push(user);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (likesParams === 'Likees' && favorites === newFavorites) {
                localStorage.setItem("favorites", newFavorites);

                _this8.updateFavorites(newFavorites).then(function (obj) {
                  return console.log(obj);
                })["catch"](function (error) {
                  return console.log(error);
                });
              }
            }

            paginatedResult.pagination = {
              currentPage: page,
              itemsPerPage: 6,
              totalPages: paginatedResult.result.length / 6,
              totalItems: paginatedResult.result.length
            }; // this.cache.next(paginatedResult);
            // return this.cache.getValue();  

            return paginatedResult;
          }));
        }
      }, {
        key: "getUserDetail",
        value: function getUserDetail(user) {
          console.log(user.paramMap.get('id'));
          return null;
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
          params = params.append('fields[]', 'ID');
          params = params.append('fields[]', 'Name');
          params = params.append('fields[]', 'Age');
          params = params.append('fields[]', 'Email');
          params = params.append('fields[]', 'Gender');
          params = params.append('fields[]', 'CreateDate');
          params = params.append('fields[]', 'LastAccess');
          params = params.append('fields[]', 'City');
          params = params.append('fields[]', 'County');
          params = params.append('fields[]', 'UF');
          params = params.append('fields[]', 'About');
          params = params.append('fields[]', 'Seek');
          params = params.append('fields[]', 'ActivitiesOfInterest2');
          params = params.append('fields[]', 'OtherImages');
          params = params.append('fields[]', 'ChristianTime');
          params = params.append('fields[]', 'Church');
          params = params.append('fields[]', 'Baptized');
          params = params.append('fields[]', 'ConnectGroup');
          params = params.append('fields[]', 'OtherCounty');
          params = params.append('fields[]', 'OtherCountyMove');
          params = params.append('fields[]', 'Height');
          params = params.append('fields[]', 'MaritalStatus');
          params = params.append('fields[]', 'Education');
          params = params.append('fields[]', 'HaveKids');
          params = params.append('fields[]', 'WantKids');
          params = params.append('fields[]', 'ChurchAttendance');
          params = params.append('fields[]', 'Relationship');
          params = params.append('fields[]', 'ActivitiesOfInterest');
          params = params.append('fields[]', 'RelatioshipWithKids');
          params = params.append('fields[]', 'HolyFasting');
          params = params.append('fields[]', 'HolyRelatioship');
          params = params.append('fields[]', 'Smoke');
          params = params.append('fields[]', 'DateOfBirth');
          params = params.append('filterByFormula', "AND({ID}=".concat(id, ")"));
          var photosArray = [];
          var favorites = localStorage.getItem("favorites");
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'Members', {
            headers: headers,
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var _a;

            if (response) {
              var record = response.records[0].fields;

              for (var i = 0; i < record.OtherImages.length; i++) {
                var photo = {
                  id: 0,
                  url: record.OtherImages[i].url,
                  description: record.Name,
                  dateAdded: new Date(),
                  isApproved: true,
                  isMain: true
                };
                photosArray.push(photo);
              }

              var memberId4 = response.records[0].id.substring(response.records[0].id.length - 4);
              var isLiked = favorites.includes(memberId4);
              var userId = localStorage.getItem("userId");
              var user = {
                knownAs: record.Name,
                age: record.Age,
                id: record.ID,
                memberId: response.records[0].id,
                userName: record.Name,
                email: record.Email,
                gender: record.Gender,
                created: record.CreateDate,
                lastActive: record.LastAccess,
                photoUrl: record.OtherImages[0].url,
                city: record.City.trim(),
                uf: record.UF,
                county: record.County,
                introduction: record.About,
                lookingFor: record.Seek,
                interests: (_a = record.ActivitiesOfInterest2) === null || _a === void 0 ? void 0 : _a.toString().split(',').join(', '),
                interestsArray: record.ActivitiesOfInterest2,
                photos: photosArray,
                isLiked: isLiked,
                christianTime: record.ChristianTime,
                church: record.Church,
                baptized: record.Baptized,
                connectGroup: record.ConnectGroup,
                otherCounty: record.OtherCounty,
                otherCountyMove: record.OtherCountyMove,
                height: record.Height,
                maritalStatus: record.MaritalStatus,
                education: record.Education,
                haveKids: record.HaveKids,
                wantKids: record.WantKids,
                churchAttendance: record.ChurchAttendance,
                relationship: record.Relationship,
                relatioshipWithKids: record.RelatioshipWithKids,
                holyFasting: record.HolyFasting,
                holyRelatioship: record.HolyRelatioship,
                smoke: record.Smoke,
                dateOfBirth: record.DateOfBirth,
                isActiveUser: record.ID.toString() === userId
              };
              return user;
            }

            return null;
          }));
        }
      }, {
        key: "updateFavorites",
        value: function updateFavorites(newFavorites) {
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]
          });
          return this.http.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'Members/' + this.authService.getCurrentUser().memberId, JSON.stringify({
            "fields": {
              "Favorites": newFavorites
            },
            "typecast": true
          }), {
            headers: httpHeaders
          }).toPromise();
        }
      }, {
        key: "getLastChats",
        value: function getLastChats(memberId, page, itemsPerPage, messageContainer, recipientId) {
          var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatedResult"]();
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
          params = params.append('sort%5B0%5D%5Bfield%5D', 'LastDate');
          params = params.append('sort%5B0%5D%5Bdirection%5D', 'desc'); // It's not working with OR(AND)

          if (recipientId) var param = "AND(OR({Member1Id}='".concat(recipientId, "',{Member2Id}='").concat(recipientId, "'),OR({Member1Id}='").concat(memberId, "',{Member2Id}='").concat(memberId, "'))");else var param = "OR({Member1Id}='".concat(memberId, "',{Member2Id}='").concat(memberId, "')");
          params = params.append('filterByFormula', "".concat(param));
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'LastChat', {
            headers: headers,
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
              var msgs = [];

              for (var i = 0; i < response.records.length; i++) {
                var field = response.records[i].fields;

                if (field.Member1Enabled && field.Member2Enabled) {
                  var msg = {
                    id: 1,
                    senderId: memberId === field.Member1[0] ? field.Member2Id2[0] : field.Member1Id2[0],
                    senderKnownAs: memberId === field.Member1[0] ? field.Member2Name[0] : field.Member1Name[0],
                    senderPhotoUrl: memberId === field.Member1[0] ? field.Member2MainImage[0].url : field.Member1MainImage[0].url,
                    recipientId: memberId === field.Member1[0] ? field.Member1Id2[0] : field.Member2Id2[0],
                    recipientKnownAs: memberId === field.Member1[0] ? field.Member1Name[0] : field.Member2Name[0],
                    recipientPhotoUrl: memberId === field.Member1[0] ? field.Member1MainImage[0].url : field.Member2MainImage[0].url,
                    content: field.LastMessage,
                    isRead: true,
                    dateRead: new Date(),
                    messageSent: field.LastDate,
                    lastChatId: response.records[i].id
                  };
                  msgs.push(msg);
                }
              }

              msgs.sort(function (a, b) {
                return a.messageSent > b.messageSent ? -1 : 1;
              }); //Descending
              // msgs.sort((a, b) => (a.messageSent < b.messageSent ? -1 : 1)); //Ascending

              paginatedResult.result = msgs;
              paginatedResult.pagination = {
                currentPage: page,
                itemsPerPage: 6,
                totalPages: paginatedResult.result.length / 6,
                totalItems: paginatedResult.result.length
              };
            }

            return paginatedResult;
          }));
        }
      }, {
        key: "getMessages",
        value: function getMessages(memberId, recipientId) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]);
          var msgs = [];
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"](); // params = params.append('sort%5B0%5D%5Bfield%5D', 'CreateDate');
          // params = params.append('sort%5B0%5D%5Bdirection%5D', 'desc');

          params = params.append('filterByFormula', "OR(AND({Member1Id}='".concat(recipientId, "',{Member2Id}='").concat(memberId, "'),AND({Member1Id}='").concat(memberId, "',{Member2Id}='").concat(recipientId, "'))"));
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'Chats', {
            headers: headers,
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
              for (var i = 0; i < response.records.length; i++) {
                var field = response.records[i].fields;

                if (field.Member1Id && field.Member2Id) {
                  var msg = {
                    id: 1,
                    senderId: field.Member1Id[0],
                    senderKnownAs: field.Member1Name[0],
                    senderPhotoUrl: field.Member1MainImage[0].url,
                    recipientId: field.Member2Id[0],
                    recipientKnownAs: field.Member2Name[0],
                    recipientPhotoUrl: field.Member2MainImage[0].url,
                    content: field.Message,
                    isRead: true,
                    dateRead: new Date(),
                    messageSent: field.CreateDate,
                    chatId: field.ChatId
                  };
                  msgs.push(msg);
                }
              }

              msgs.sort(function (a, b) {
                return a.messageSent < b.messageSent ? -1 : 1;
              });
            }

            return msgs;
          }));
        }
      }, {
        key: "addMessage",
        value: function addMessage(memberId, recipientId, message, messagesTotal) {
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]
          });

          if (messagesTotal > 0) {
            this.updateLastChat(memberId, recipientId, message);
          } else {
            this.insertLastChat(memberId, recipientId, message).subscribe(function (data) {
              console.log('Sucess!');
            }, function (error) {
              console.log(error.error.message);
            });
          }

          var body = JSON.stringify({
            "fields": {
              "Member1": ["".concat(memberId)],
              "Message": "".concat(message),
              "Member2": ["".concat(recipientId)]
            }
          });
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'Chats/', body, {
            headers: httpHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
              var msg = {
                id: 1,
                senderId: response.fields.Member1Id[0],
                senderKnownAs: response.fields.Member1Name[0],
                senderPhotoUrl: response.fields.Member1MainImage[0].url,
                recipientId: response.fields.Member2Id[0],
                recipientKnownAs: response.fields.Member2Name[0],
                recipientPhotoUrl: response.fields.Member2MainImage[0].url,
                content: response.fields.Message,
                isRead: true,
                dateRead: new Date(),
                messageSent: response.fields.CreateDate,
                chatId: response.fields.ChatId
              };
              return msg;
            }
          }));
        }
      }, {
        key: "updateLastChat",
        value: function updateLastChat(memberId, recipientId, message) {
          var _this9 = this;

          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]
          });
          this.getLastChats(memberId, null, null, null, recipientId).subscribe(function (data) {
            var lastChatId = data.result[0].lastChatId;

            _this9.http.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'LastChat/' + lastChatId, JSON.stringify({
              "fields": {
                "LastMessage": "".concat(message)
              },
              "typecast": true
            }), {
              headers: httpHeaders
            }).toPromise();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "insertLastChat",
        value: function insertLastChat(memberId, recipientId, message) {
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]
          });
          var body = JSON.stringify({
            "fields": {
              "Member1": ["".concat(memberId)],
              "LastDate": "".concat(new Date()),
              "LastMessage": "".concat(message),
              "Member2": ["".concat(recipientId)]
            }
          });
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'LastChat', body, {
            headers: httpHeaders
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
              var id = response.id;
            }
          }));
        }
      }, {
        key: "deleteLastChat",
        value: function deleteLastChat(message) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]);
          return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'LastChat/' + message.lastChatId, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
              var id = response.id;
              return true;
            }

            return false;
          }));
        }
      }, {
        key: "deleteChats",
        value: function deleteChats(message) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]); // this.getMessages(message.senderId, message.recipientId)
          //   .subscribe((messages: Message[]) => {
          //     for (var i in messages) {
          //       const chatId = messages[i].chatId;
          //       this.http.delete(API_PATH + 'Chats/' + chatId, { headers: headers })
          //         .pipe(map((response2: any) => {
          //           if (response2) {
          //             const id = response2.id;
          //           }
          //         }));
          //     }
          //     return true;
          //   },
          //     (error) => {
          //       return false;
          //     }
          //   );
          //   return false;
          // return this.http.delete(API_PATH + 'Chats/' + 'recRqZwv7uzRWk52E', { headers: headers })
          //   .pipe(map((response: any) => {
          //     if (response) {
          //       const id = response.id;
          //       return true;
          //     }
          //     return false;
          //   }));
        }
      }, {
        key: "saveLike",
        value: function saveLike(recipientMemberId, isLiked) {
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]
          });
          var memberId4 = recipientMemberId.substring(recipientMemberId.length - 4);
          var memberId = this.authService.getCurrentUser().memberId;
          var favorites = localStorage.getItem("favorites");

          if (isLiked) {
            favorites += "".concat(memberId4, ",");
          } else {
            favorites = favorites.replace("".concat(memberId4, ","), "");
          }

          localStorage.setItem("favorites", favorites);
          return this.http.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'Members/' + memberId, JSON.stringify({
            "fields": {
              "Favorites": favorites
            },
            "typecast": true
          }), {
            headers: httpHeaders
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(memberId) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Authorization', 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_KEY"]);
          return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'Members/' + memberId, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
              var id = response.id;
              return true;
            }

            return false;
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser(id, user) {
          return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'users/' + id, user);
        }
      }, {
        key: "setMainPhoto",
        value: function setMainPhoto(userId, id) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'users/' + userId + '/photos/' + id + '/setMain', {});
        }
      }, {
        key: "deletePhoto",
        value: function deletePhoto(userId, id) {
          return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'users/' + userId + '/photos/' + id);
        }
      }, {
        key: "markAsRead",
        value: function markAsRead(userId, messageId) {
          this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["API_PATH"] + 'users/' + userId + '/message/' + messageId + '/read', {}).subscribe();
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Alertify_service__WEBPACK_IMPORTED_MODULE_7__["AlertifyService"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _Auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }, {
          type: _Alertify_service__WEBPACK_IMPORTED_MODULE_7__["AlertifyService"]
        }];
      }, null);
    })();

    function of(arg0) {
      throw new Error('Function not implemented.');
    }
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


    var _services_Auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./_services/Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = 'Varão Varoa App';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.username; //.getUsername();
          // const user: User = JSON.parse(localStorage.getItem("user"));
          // if (user) {
          //   this.authService.photoUrl.next(user.photoUrl);
          // }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-spinner");
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
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

  /*! exports provided: tokenGetter, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
      return tokenGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var ngx_gallery_9__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-gallery-9 */
    "./node_modules/ngx-gallery-9/__ivy_ngcc__/fesm2015/ngx-gallery-9.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var ngx_timeago__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-timeago */
    "./node_modules/ngx-timeago/__ivy_ngcc__/fesm2015/ngx-timeago.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _values_values_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./values/values.component */
    "./src/app/values/values.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./members/member-list/member-list.component */
    "./src/app/members/member-list/member-list.component.ts");
    /* harmony import */


    var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./members/member-card/member-card.component */
    "./src/app/members/member-card/member-card.component.ts");
    /* harmony import */


    var _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./members/member-messages/member-messages.component */
    "./src/app/members/member-messages/member-messages.component.ts");
    /* harmony import */


    var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./members/member-detail/member-detail.component */
    "./src/app/members/member-detail/member-detail.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./_services/error.interceptor */
    "./src/app/_services/error.interceptor.ts");
    /* harmony import */


    var _lists_lists_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./lists/lists.component */
    "./src/app/lists/lists.component.ts");
    /* harmony import */


    var _messages_messages_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./messages/messages.component */
    "./src/app/messages/messages.component.ts");
    /* harmony import */


    var _routes__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./routes */
    "./src/app/routes.ts");
    /* harmony import */


    var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./_resolvers/member-list.resolver */
    "./src/app/_resolvers/member-list.resolver.ts");
    /* harmony import */


    var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./_resolvers/member-detail.resolver */
    "./src/app/_resolvers/member-detail.resolver.ts");
    /* harmony import */


    var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./members/member-edit/member-edit.component */
    "./src/app/members/member-edit/member-edit.component.ts");
    /* harmony import */


    var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./_resolvers/member-edit.resolver */
    "./src/app/_resolvers/member-edit.resolver.ts");
    /* harmony import */


    var _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./members/photo-editor/photo-editor.component */
    "./src/app/members/photo-editor/photo-editor.component.ts");
    /* harmony import */


    var _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./_resolvers/lists.resolver */
    "./src/app/_resolvers/lists.resolver.ts");
    /* harmony import */


    var _resolvers_message_list_resolver__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./_resolvers/message-list.resolver */
    "./src/app/_resolvers/message-list.resolver.ts");
    /* harmony import */


    var _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./_directives/hasRole.directive */
    "./src/app/_directives/hasRole.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/common/locales/pt */
    "./node_modules/@angular/common/locales/pt.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_39___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_39__);
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_38__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_39___default.a);

    function tokenGetter() {
      return localStorage.getItem('token');
    }

    var AppModule =
    /*#__PURE__*/
    _createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_error_interceptor__WEBPACK_IMPORTED_MODULE_26__["ErrorInterceptorProvider"], _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_30__["MemberListResolver"], _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_33__["MemberEditResolver"], _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_31__["MemberDetailResolver"], _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_35__["ListsResolver"], _resolvers_message_list_resolver__WEBPACK_IMPORTED_MODULE_36__["MessageListResolver"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
        useValue: 'pt-BR'
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_14__["ButtonsModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_29__["appRoutes"]), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(), ngx_timeago__WEBPACK_IMPORTED_MODULE_12__["TimeagoModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(), ngx_gallery_9__WEBPACK_IMPORTED_MODULE_9__["NgxGalleryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _values_values_component__WEBPACK_IMPORTED_MODULE_18__["ValuesComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_19__["NavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"], _lists_lists_component__WEBPACK_IMPORTED_MODULE_27__["ListsComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_28__["MessagesComponent"], _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_21__["MemberListComponent"], _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_22__["MemberCardComponent"], _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_24__["MemberDetailComponent"], _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_32__["MemberEditComponent"], _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_34__["PhotoEditorComponent"], _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_23__["MemberMessagesComponent"], _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_37__["HasRoleDirective"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_40__["ContactUsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_14__["ButtonsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"], ngx_timeago__WEBPACK_IMPORTED_MODULE_12__["TimeagoModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"], ngx_gallery_9__WEBPACK_IMPORTED_MODULE_9__["NgxGalleryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _values_values_component__WEBPACK_IMPORTED_MODULE_18__["ValuesComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_19__["NavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"], _lists_lists_component__WEBPACK_IMPORTED_MODULE_27__["ListsComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_28__["MessagesComponent"], _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_21__["MemberListComponent"], _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_22__["MemberCardComponent"], _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_24__["MemberDetailComponent"], _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_32__["MemberEditComponent"], _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_34__["PhotoEditorComponent"], _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_23__["MemberMessagesComponent"], _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_37__["HasRoleDirective"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_40__["ContactUsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_14__["ButtonsModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_29__["appRoutes"]), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
            config: {
              tokenGetter: tokenGetter,
              whitelistedDomains: ['localhost:5000'],
              blacklistedRoutes: ['localhost:5000/api/auth']
            }
          }), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(), ngx_timeago__WEBPACK_IMPORTED_MODULE_12__["TimeagoModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(), ngx_gallery_9__WEBPACK_IMPORTED_MODULE_9__["NgxGalleryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"]],
          providers: [_services_error_interceptor__WEBPACK_IMPORTED_MODULE_26__["ErrorInterceptorProvider"], _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_30__["MemberListResolver"], _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_33__["MemberEditResolver"], _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_31__["MemberDetailResolver"], _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_35__["ListsResolver"], _resolvers_message_list_resolver__WEBPACK_IMPORTED_MODULE_36__["MessageListResolver"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
            useValue: 'pt-BR'
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/constants.ts":
  /*!*************************************!*\
    !*** ./src/app/common/constants.ts ***!
    \*************************************/

  /*! exports provided: Constants */

  /***/
  function srcAppCommonConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });

    var Constants =
    /*#__PURE__*/
    function () {
      function Constants() {
        _classCallCheck(this, Constants);
      }

      _createClass(Constants, [{
        key: "getShortId",
        value: function getShortId() {// let id = localStorage.getItem("token2");
          // id = id.substring(id.length - 4);
          // return id;
        }
      }]);

      return Constants;
    }();

    Constants.GetDataError = "Erro ao buscar dados, tente novamente depois!";
    Constants.SaveDataError = "Erro ao salvar dados, tente novamente depois!";
    /***/
  },

  /***/
  "./src/app/contact-us/contact-us.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/contact-us/contact-us.component.ts ***!
    \****************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcAppContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_Auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var _services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactUsComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Informe uma Mensagem");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactUsComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Informe uma Mensagem com pelo menos 10 caracteres");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var ContactUsComponent =
    /*#__PURE__*/
    function () {
      function ContactUsComponent(router, authService, alertify, fb) {
        _classCallCheck(this, ContactUsComponent);

        this.router = router;
        this.authService = authService;
        this.alertify = alertify;
        this.fb = fb;
        this.colorTheme = 'theme-red';
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.registerForm = this.fb.group({
            name: [this.currentUser.knownAs, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [this.currentUser.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this10 = this;

          this.contact = Object.assign({}, this.registerForm.value);
          this.contact.memberId = this.currentUser.memberId;
          this.authService.contactUs(this.contact).subscribe(function (next) {
            _this10.alertify.success('Contato enviado com Sucesso!');

            _this10.registerForm.reset();
          }, function (error) {
            console.log(error);

            _this10.alertify.error('Erro ao enviar contato! Envie pelo Insta @VaraoVaroa');
          });
        }
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) {
      return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactUsComponent,
      selectors: [["app-contact-us"]],
      decls: 23,
      vars: 13,
      consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-8"], ["autocomplete", "off", 3, "formGroup", "submit"], [1, "text-center", "text-primary"], [1, "form-group"], ["type", "text", "placeholder", "Nome", "formControlName", "name", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["type", "text", "placeholder", "Email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["placeholder", "Mensagem", "formControlName", "message", "rows", "5", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"]],
      template: function ContactUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ContactUsComponent_Template_form_submit_4_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fale Conosco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Informe seu Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Informe um Email v\xE1lido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContactUsComponent_div_18_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContactUsComponent_div_19_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enviar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.registerForm.get("name").errors && ctx.registerForm.get("name").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.registerForm.get("email").errors && ctx.registerForm.get("email").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.registerForm.get("message").errors && ctx.registerForm.get("message").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("message").hasError("required") && ctx.registerForm.get("message").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("message").hasError("minlength") && ctx.registerForm.get("message").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-us',
          templateUrl: './contact-us.component.html',
          styleUrls: ['./contact-us.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_Auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
      }
    }

    function HomeComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Encontre seu Var\xE3o / Varoa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Navegue na Listas de Crist\xE3os, filtre por faixa et\xE1ria e UF!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.toggleLists();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vamos l\xE1!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_ng_template_3_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Encontre seu Var\xE3o / Varoa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tudo que voc\xEA precisa \xE9 se cadastrar ou efetuar seu login!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_3_div_0_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r27.toggleRegister();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quero me cadastrar!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_ng_template_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Aguarde! Carregando Formul\xE1rio...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_ng_template_3_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "iframe", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function HomeComponent_ng_template_3_div_4_Template_iframe_load_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.hideSpinner();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r26.createUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
      }
    }

    function HomeComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_ng_template_3_div_0_Template, 9, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_template_3_div_1_Template, 4, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_ng_template_3_div_4_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r21.showHideRegister);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.showHideRegister);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(authService, router, spinner, sanitizer) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
        this.router = router;
        this.spinner = spinner;
        this.sanitizer = sanitizer;
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].appVersion;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //TODO Não esta acionando o Spinner
          this.createUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://airtable.com/embed/".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["CREATE_FORM"]));
        }
      }, {
        key: "hideSpinner",
        value: function hideSpinner() {
          // this.spinner.hide();
          this.loading = false;
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          var isLogged = this.authService.loggedIn();
          return isLogged;
        }
      }, {
        key: "toggleRegister",
        value: function toggleRegister() {
          this.showHideRegister = !this.showHideRegister; // this.spinner.show();

          if (this.showHideRegister) this.loading = true;
        }
      }, {
        key: "toggleLists",
        value: function toggleLists() {
          this.router.navigate(['/members']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 7,
      vars: 4,
      consts: [["class", "container mt-5", 4, "ngIf", "ngIfThen", "ngIfElse"], ["loggedInTemplate", ""], ["loggedOutTemplate", ""], [1, "footer"], [1, "container", "mt-5"], [2, "text-align", "center"], [1, "lead"], [1, "text-center"], [1, "btn", "btn-info", "btn-lg", "mr-2", 3, "click"], ["style", "text-align:center", 4, "ngIf"], [1, "container"], [1, "row", "justify-content-center"], ["class", "col-8", 4, "ngIf"], [1, "btn", "btn-primary", "btn-lg", "mr-2", 3, "click"], [1, "col-8"], ["frameborder", "0", "onmousewheel", "", "width", "100%", "height", "533", 1, "airtable-embed", 3, "src", "load"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_template_1_Template, 9, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ng_template_3_Template, 5, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn())("ngIfThen", _r18)("ngIfElse", _r20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA9 2022 Var\xE3o Varoa. Todos os direitos reservados - Vers\xE3o ", ctx.version, "\xA0\xA0\xA0\n");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: [".footer[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    text-align: right;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height:25px;\r\n    background:#ccc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6MjVweDtcclxuICAgIGJhY2tncm91bmQ6I2NjYztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lists/lists.component.ts":
  /*!******************************************!*\
    !*** ./src/app/lists/lists.component.ts ***!
    \******************************************/

  /*! exports provided: ListsComponent */

  /***/
  function srcAppListsListsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListsComponent", function () {
      return ListsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../members/member-card/member-card.component */
    "./src/app/members/member-card/member-card.component.ts");

    function ListsComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-member-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r103 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r103);
      }
    }

    function ListsComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r102.likesParam === "Likers" ? "Voc\xEA ainda n\xE3o recebeu uma curtida, navegue nas listas de Crist\xE3os e entre em contato!" : "Voc\xEA ainda n\xE3o curtiu ningu\xE9m, veja quem te curtiu ou navegue nas listas de Crist\xE3os!", "");
      }
    }

    var ListsComponent =
    /*#__PURE__*/
    function () {
      function ListsComponent(userService, route) {
        _classCallCheck(this, ListsComponent);

        this.userService = userService;
        this.route = route;
        this.likesParam = 'Likers';
      }

      _createClass(ListsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.route.data.subscribe(function (data) {
            _this11.users = data['users'].result;
            _this11.pagination = data['users'].pagination;
          });
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pagination.currentPage = event.page;
          this.loadUsers();
        }
      }, {
        key: "loadUsers",
        value: function loadUsers() {
          var _this12 = this;

          this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam).subscribe(function (response) {
            _this12.users = response.result;
            _this12.pagination = response.pagination;
          });
        }
      }]);

      return ListsComponent;
    }();

    ListsComponent.ɵfac = function ListsComponent_Factory(t) {
      return new (t || ListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ListsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListsComponent,
      selectors: [["app-lists"]],
      decls: 14,
      vars: 6,
      consts: [[1, "text-center", "mt-3"], [1, "container", "mt-3"], [1, "row"], [1, "btn-group"], ["btnRadio", "Likers", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], ["btnRadio", "Likees", 1, "btn", "btn-info", 3, "ngModel", "ngModelChange", "click"], ["class", "col-sm-6 col-md-4 col-lg-4 col-xl-2", 4, "ngFor", "ngForOf"], ["style", "position: absolute; left: 50%; top: 50%;", 4, "ngIf"], [1, "col-sm-6", "col-md-4", "col-lg-4", "col-xl-2"], [3, "user"], [2, "position", "absolute", "left", "50%", "top", "50%"], ["role", "alert", 1, "alert", "alert-info", 2, "position", "relative", "left", "-50%"], [1, "fa", "fa-bell"]],
      template: function ListsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListsComponent_Template_button_ngModelChange_6_listener($event) {
            return ctx.likesParam = $event;
          })("click", function ListsComponent_Template_button_click_6_listener() {
            return ctx.loadUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Quem me curtiu!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListsComponent_Template_button_ngModelChange_8_listener($event) {
            return ctx.likesParam = $event;
          })("click", function ListsComponent_Template_button_click_8_listener() {
            return ctx.loadUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Quem eu curti!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListsComponent_div_12_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListsComponent_div_13_Template, 5, 1, "div", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.likesParam === "Likers" ? "Quem me curtiu!" : "Quem eu curti!", " : ", ctx.pagination.totalItems, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.likesParam);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.likesParam);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination.totalItems === 0);
        }
      },
      directives: [ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_3__["ButtonRadioDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_6__["MemberCardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RzL2xpc3RzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lists',
          templateUrl: './lists.component.html',
          styleUrls: ['./lists.component.css']
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/members/member-card/member-card.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/members/member-card/member-card.component.ts ***!
    \**************************************************************/

  /*! exports provided: MemberCardComponent */

  /***/
  function srcAppMembersMemberCardMemberCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function () {
      return MemberCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MemberCardComponent_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberCardComponent_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.sendDislike();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MemberCardComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberCardComponent_li_9_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.sendLike();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/members", a1];
    };

    var _c1 = function _c1() {
      return {
        tab: 3
      };
    };

    var MemberCardComponent =
    /*#__PURE__*/
    function () {
      function MemberCardComponent(userService, alertifyService) {
        _classCallCheck(this, MemberCardComponent);

        this.userService = userService;
        this.alertifyService = alertifyService;
      }

      _createClass(MemberCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendLike",
        value: function sendLike() {
          var _this13 = this;

          this.userService.saveLike(this.user.memberId, true).subscribe(function (response) {
            _this13.alertifyService.success('Você curtiu ' + _this13.user.knownAs);

            _this13.user.isLiked = true;
          }, function (error) {
            _this13.alertifyService.error('Erro ao curtir, tente novamente mais tarde!', error);
          });
        }
      }, {
        key: "sendDislike",
        value: function sendDislike() {
          var _this14 = this;

          this.alertifyService.confirm('Descurtir?', "Deseja mesmo descurtir ".concat(this.user.knownAs, " ?"), function () {
            _this14.userService.saveLike(_this14.user.memberId, false).subscribe(function (response) {
              _this14.alertifyService.success('Você descurtiu ' + _this14.user.knownAs);

              _this14.user.isLiked = false;
            }, function (error) {
              _this14.alertifyService.error('Erro ao descurtir, tente novamente mais tarde!', error);
            });
          });
        }
      }]);

      return MemberCardComponent;
    }();

    MemberCardComponent.ɵfac = function MemberCardComponent_Factory(t) {
      return new (t || MemberCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]));
    };

    MemberCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberCardComponent,
      selectors: [["app-member-card"]],
      inputs: {
        user: "user"
      },
      decls: 18,
      vars: 18,
      consts: [[1, "card", "mb-4"], [1, "card-img-wrapper"], ["routerLinkActive", "router-link-active", "title", "Clique para abrir o Perfil!", 3, "routerLink"], ["alt", "...", 1, "card-img-top", 3, "src"], ["class", "btn btn-danger member-icon", "title", "Clique para Descurtir!", 3, "click", 4, "ngIf"], [1, "list-inline", "member-icons", "animate", "text-center"], [1, "list-inline-item"], ["routerLinkActive", "router-link-active", "title", "Clique para abrir o Perfil!", 1, "btn", "btn-primary", 3, "routerLink"], [1, "fa", "fa-user"], ["class", "list-inline-item", 4, "ngIf"], ["title", "Clique para enviar uma Mensagem!", 1, "btn", "btn-primary", 3, "routerLink", "queryParams"], [1, "fa", "fa-envelope"], [1, "card-body", "p-1"], [1, "card-title", "text-center", "mb-1"], [1, "card-text", "text-muted", "text-center"], ["title", "Clique para Descurtir!", 1, "btn", "btn-danger", "member-icon", 3, "click"], [1, "fa", "fa-heart"], ["title", "Clique para abrir Curtir!", 1, "btn", "btn-primary", 3, "click"]],
      template: function MemberCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MemberCardComponent_button_4_Template, 2, 0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MemberCardComponent_li_9_Template, 3, 0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.user.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.photoUrl || "../../../assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.isLiked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.user.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user.isLiked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.user.id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.user.knownAs, ", ", ctx.user.age, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.user.city, " - ", ctx.user.county, " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    transform: scale(1.2, 1.2);\n    transition-duration: 500ms;\n    transition-timing-function: ease-out;\n    opacity: 0.7;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: scale(1.0, 1.0);\n    transition-duration: 500ms;\n    transition-timing-function: ease-out;\n}\n\n.card-img-wrapper[_ngcontent-%COMP%] {\n    overflow: hidden;\n    position: relative;\n}\n\n.member-icons[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: -30%;\n    left: 0;\n    right: 0;\n    margin-right: auto;\n    margin-left: auto;\n    opacity: 0;\n}\n\n.card-img-wrapper[_ngcontent-%COMP%]:hover   .member-icons[_ngcontent-%COMP%] {\n    bottom: 0;\n    opacity: 1;\n}\n\n.animate[_ngcontent-%COMP%] {\n    transition: all 0.3s ease-in-out;\n}\n\n.card-img-wrapper[_ngcontent-%COMP%]   .member-icon[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0.5em;\n    top: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWNhcmQvbWVtYmVyLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkOmhvdmVyIGltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuLmNhcmQgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCwgMS4wKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbi5jYXJkLWltZy13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1lbWJlci1pY29ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTMwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uY2FyZC1pbWctd3JhcHBlcjpob3ZlciAubWVtYmVyLWljb25zIHtcbiAgICBib3R0b206IDA7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmFuaW1hdGUge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2FyZC1pbWctd3JhcHBlciAubWVtYmVyLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMC41ZW07XG4gICAgdG9wOiAwLjVlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-card',
          templateUrl: './member-card.component.html',
          styleUrls: ['./member-card.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]
        }];
      }, {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/members/member-detail/member-detail.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/members/member-detail/member-detail.component.ts ***!
    \******************************************************************/

  /*! exports provided: MemberDetailComponent */

  /***/
  function srcAppMembersMemberDetailMemberDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function () {
      return MemberDetailComponent;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_gallery_9__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-gallery-9 */
    "./node_modules/ngx-gallery-9/__ivy_ngcc__/fesm2015/ngx-gallery-9.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../member-messages/member-messages.component */
    "./src/app/members/member-messages/member-messages.component.ts");

    var _c0 = ["memberTabs"];

    function MemberDetailComponent_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberDetailComponent_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r78);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r77.sendDislike();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MemberDetailComponent_div_30_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberDetailComponent_div_30_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r82);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r81.sendLike();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Curtir");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MemberDetailComponent_div_30_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberDetailComponent_div_30_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r83.sendDislike();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Descurtir");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MemberDetailComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MemberDetailComponent_div_30_button_1_Template, 3, 0, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MemberDetailComponent_div_30_button_2_Template, 3, 0, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberDetailComponent_div_30_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r85.selectTab(3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Mensagem ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r50.user.isLiked);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r50.user.isLiked);
      }
    }

    function MemberDetailComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberDetailComponent_div_31_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r88);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r87.editUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MemberDetailComponent_p_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Aguarde! Carregando seu Perfil...");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MemberDetailComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "iframe", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function MemberDetailComponent_div_34_Template_iframe_load_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r89.hideSpinner();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r53.editUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
      }
    }

    function MemberDetailComponent_strong_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " O que busco:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MemberDetailComponent_strong_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Igreja que frequenta:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MemberDetailComponent_strong_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Tempo de Crist\xE3(o):");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MemberDetailComponent_strong_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Interesses:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MemberDetailComponent_span_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var interest_r91 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](interest_r91);
      }
    }

    function MemberDetailComponent_li_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tipo de Relacionamento?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r60.user.relationship, "");
      }
    }

    function MemberDetailComponent_li_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Qual a sua altura?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r61.user.height, "");
      }
    }

    function MemberDetailComponent_li_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Estado civil?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r62.user.maritalStatus, "");
      }
    }

    function MemberDetailComponent_li_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "N\xEDvel escolar?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r63.user.education, "");
      }
    }

    function MemberDetailComponent_li_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tem filhos?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r64.user.haveKids, "");
      }
    }

    function MemberDetailComponent_li_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gostaria de ter filhos?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r65.user.wantKids, "");
      }
    }

    function MemberDetailComponent_li_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xC9 Batizada(o) nas \xE1guas?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r66.user.baptized, "");
      }
    }

    function MemberDetailComponent_li_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Frequenta algum grupo na Igreja?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r67.user.connectGroup, " ");
      }
    }

    function MemberDetailComponent_li_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Frequ\xEAncia na Igreja?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r68.user.churchAttendance, "");
      }
    }

    function MemberDetailComponent_li_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Aceita Crist\xE3os de outros Estados?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r69.user.otherCounty, " ");
      }
    }

    function MemberDetailComponent_li_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Caso o namoro vire casamento, voc\xEA aceitaria se mudar?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r70.user.otherCountyMove, "");
      }
    }

    function MemberDetailComponent_li_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Aceita se relacionar com algu\xE9m que tem filhos?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r71.user.relatioshipWithKids, "");
      }
    }

    function MemberDetailComponent_li_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Voc\xEA tem o h\xE1bito de fazer Jejum Santo com prop\xF3sitos?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r72.user.holyFasting, " ");
      }
    }

    function MemberDetailComponent_li_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Em caso de namoro, voc\xEA aceitaria um Namoro Santo?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r73.user.holyRelatioship, "");
      }
    }

    function MemberDetailComponent_li_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Voc\xEA fuma?");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r74.user.smoke, "");
      }
    }

    function MemberDetailComponent_app_member_messages_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-member-messages", 46);
      }

      if (rf & 2) {
        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("recipientId", ctx_r75.user.id)("recipientUser", ctx_r75.user);
      }
    }

    function MemberDetailComponent_div_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Todas as mensagens enviadas e recebidas est\xE3o no Menu Mensagens acima!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var MemberDetailComponent =
    /*#__PURE__*/
    function () {
      function MemberDetailComponent(userService, alertifyService, route, router, spinner, sanitizer) {
        _classCallCheck(this, MemberDetailComponent);

        this.userService = userService;
        this.alertifyService = alertifyService;
        this.route = route;
        this.router = router;
        this.spinner = spinner;
        this.sanitizer = sanitizer;
      }

      _createClass(MemberDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.route.data.subscribe(function (data) {
            _this15.user = data["user"];

            if (_this15.user.isActiveUser) {
              var fields = "?prefill_MemberIdToUpdate=".concat(_this15.user.memberId) + "&prefill_Name=".concat(_this15.user.knownAs) + "&prefill_DateOfBirth=".concat(_this15.user.dateOfBirth) + "&prefill_County=".concat(_this15.user.county) + "&prefill_City=".concat(_this15.user.city) + "&prefill_About=".concat(_this15.user.introduction) + "&prefill_Seek=".concat(_this15.user.lookingFor) + "&prefill_ChristianTime=".concat(_this15.user.christianTime) + "&prefill_Church=".concat(_this15.user.church) + "&prefill_ConnectGroup=".concat(_this15.user.connectGroup) + "&prefill_Baptized=".concat(_this15.user.baptized) + "&prefill_OtherCounty=".concat(_this15.user.otherCounty) + "&prefill_Height=".concat(_this15.user.height) + "&prefill_MaritalStatus=".concat(_this15.user.maritalStatus) + "&prefill_Education=".concat(_this15.user.education) + "&prefill_HaveKids=".concat(_this15.user.haveKids) + "&prefill_WantKids=".concat(_this15.user.wantKids) + "&prefill_ChurchAttendance=".concat(_this15.user.churchAttendance) + "&prefill_Relationship=".concat(_this15.user.relationship) + "&prefill_ActivitiesOfInterest2=".concat(_this15.user.interestsArray) + "&prefill_RelatioshipWithKids=".concat(_this15.user.relatioshipWithKids) + "&prefill_HolyFasting=".concat(_this15.user.holyFasting) + "&prefill_HolyRelatioship=".concat(_this15.user.holyRelatioship) + "&prefill_Smoke=".concat(_this15.user.smoke) + "&prefill_OtherCountyMove=".concat(_this15.user.otherCountyMove) + "&prefill_Sexo=".concat(_this15.user.gender);
              _this15.editUrl = _this15.sanitizer.bypassSecurityTrustResourceUrl("https://airtable.com/embed/".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["EDIT_FORM"]).concat(fields));
            }

            _this15.galleryOptions = [{
              width: "400px",
              height: "400px",
              thumbnailsColumns: 4,
              imageAnimation: ngx_gallery_9__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryAnimation"].Slide
            }, {
              breakpoint: 800,
              width: "100%",
              height: "600px",
              imagePercent: 80,
              thumbnailsPercent: 20,
              thumbnailsMargin: 20,
              thumbnailMargin: 20
            }, {
              breakpoint: 400,
              preview: false
            }];
            _this15.galleryImages = _this15.getImages();
          });
          this.route.queryParams.subscribe(function (params) {
            var selectedTab = params["tab"];
            _this15.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
          });
        }
      }, {
        key: "sendLike",
        value: function sendLike() {
          var _this16 = this;

          this.userService.saveLike(this.user.memberId, true).subscribe(function (response) {
            _this16.alertifyService.success('Você curtiu ' + _this16.user.knownAs);

            _this16.user.isLiked = true;
          }, function (error) {
            _this16.alertifyService.error('Erro ao curtir, tente novamente mais tarde!', error);
          });
        }
      }, {
        key: "sendDislike",
        value: function sendDislike() {
          var _this17 = this;

          this.alertifyService.confirm('Descurtir?', "Deseja mesmo descurtir ".concat(this.user.knownAs, " ?"), function () {
            _this17.userService.saveLike(_this17.user.memberId, false).subscribe(function (response) {
              _this17.alertifyService.success('Você descurtiu ' + _this17.user.knownAs);

              _this17.user.isLiked = false;
            }, function (error) {
              _this17.alertifyService.error('Erro ao descurtir, tente novamente mais tarde!', error);
            });
          });
        }
      }, {
        key: "selectTab",
        value: function selectTab(tabId) {
          this.memberTabs.tabs[tabId].active = true;
        }
      }, {
        key: "getImages",
        value: function getImages() {
          var images = [];

          var _iterator2 = _createForOfIteratorHelper(this.user.photos),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var photo = _step2.value;

              if (photo.isApproved) {
                images.push({
                  small: photo.url,
                  medium: photo.url,
                  big: photo.url,
                  description: photo.description
                });
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return images;
        } //TODO Continue here

      }, {
        key: "deleteUser",
        value: function deleteUser() {
          var _this18 = this;

          this.alertifyService.confirm('Deletar?', "Deseja mesmo deletar o seu Perfil? N\xE3o prefere apenas desativar e esconder ele? Clique em OK para deletar!", function () {
            _this18.userService.deleteUser(_this18.user.memberId).subscribe(function (response) {
              _this18.alertifyService.success('Seu Perfil foi deletado do sistema com sucesso!');

              localStorage.removeItem('currentUser');

              _this18.router.navigate(['/home']);
            }, function (error) {
              _this18.alertifyService.error('Erro ao deletar, tente novamente mais tarde!', error);
            });
          });
        } //TODO Continue here

      }, {
        key: "disableUser",
        value: function disableUser() {
          var _this19 = this;

          this.alertifyService.confirm('Desativar?', "Deseja mesmo desativar e esconder o seu Perfil?", function () {
            _this19.userService.deleteUser(_this19.user.memberId).subscribe(function (response) {
              _this19.alertifyService.success('Seu Perfil foi desativado do sistema com sucesso!');

              _this19.router.navigate(['/home']);
            }, function (error) {
              _this19.alertifyService.error('Erro ao deletar, tente novamente mais tarde!', error);
            });
          });
        }
      }, {
        key: "editUser",
        value: function editUser() {
          this.editProfile = !this.editProfile;

          if (this.editProfile) {
            this.loading = true; // this.spinner.show();      
          }
        }
      }, {
        key: "hideSpinner",
        value: function hideSpinner() {
          this.loading = false; // this.spinner.hide();
        }
      }]);

      return MemberDetailComponent;
    }();

    MemberDetailComponent.ɵfac = function MemberDetailComponent_Factory(t) {
      return new (t || MemberDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]));
    };

    MemberDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MemberDetailComponent,
      selectors: [["app-member-detail"]],
      viewQuery: function MemberDetailComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.memberTabs = _t.first);
        }
      },
      decls: 82,
      vars: 46,
      consts: [[1, "container", "mt-4"], [1, "row"], [1, "col-sm-4", 2, "text-align", "center"], [1, "col-sm-2"], ["onclick", "history.back()", 1, "btn", "btn-info", "w-100"], [1, "fa", "fa-arrow-left"], [1, "col-sm-4"], [1, "card"], [1, "card-img-top", "img-thumbnail", 2, "cursor", "pointer", 3, "src", "alt", "click"], ["class", "btn btn-danger member-icon", "title", "Clique para Descurtir!", 3, "click", 4, "ngIf"], [1, "card-body"], [1, "fa", "fa-map-pin"], ["target", "_blank", "title", "Clique para ver no Mapa!", 3, "href"], [1, "fa", "fa-calendar"], [1, "card-footer"], ["class", "btn-group d-flex", 4, "ngIf"], [1, "col-sm-8"], [4, "ngIf"], ["class", "tab-panel", 4, "ngIf"], [1, "tab-panel"], [1, "member-tabset"], ["memberTabs", ""], [3, "heading"], [1, "fa", "fa-address-book"], ["class", "badge rounded-pill bg-primary interests", 4, "ngFor", "ngForOf"], ["heading", "Perguntas"], ["heading", "Fotos"], [3, "options", "images"], ["heading", "Mensagens"], [3, "recipientId", "recipientUser", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], ["title", "Clique para Descurtir!", 1, "btn", "btn-danger", "member-icon", 3, "click"], [1, "fa", "fa-heart"], [1, "btn-group", "d-flex"], ["class", "btn btn-primary w-100", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", "w-100", 3, "click"], [1, "fa", "fa-comment"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "fa", "fa-rotate-left"], [1, "btn", "btn-info", "w-100", 3, "click"], [1, "fa", "fa-pencil"], ["frameborder", "0", "onmousewheel", "", "width", "100%", "height", "533", 1, "airtable-embed", 3, "src", "load"], [1, "fa", "fa-eye"], [1, "fa", "fa-building"], [1, "fa", "fa-thumbs-up"], [1, "badge", "rounded-pill", "bg-primary", "interests"], [3, "recipientId", "recipientUser"], [1, "alert", "alert-info"]],
      template: function MemberDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MemberDetailComponent_Template_img_click_12_listener() {
            return ctx.selectTab(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MemberDetailComponent_button_13_Template, 2, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Localiza\xE7\xE3o:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Membro Desde:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, MemberDetailComponent_div_30_Template, 6, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, MemberDetailComponent_div_31_Template, 4, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, MemberDetailComponent_p_33_Template, 3, 0, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, MemberDetailComponent_div_34_Template, 2, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tabset", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tab", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Sobre mim:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, MemberDetailComponent_strong_44_Template, 3, 0, "strong", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, MemberDetailComponent_strong_47_Template, 3, 0, "strong", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, MemberDetailComponent_strong_50_Template, 3, 0, "strong", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, MemberDetailComponent_strong_53_Template, 3, 0, "strong", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, MemberDetailComponent_span_55_Template, 2, 1, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "tab", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Perguntas e Respostas:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, MemberDetailComponent_li_62_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, MemberDetailComponent_li_63_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, MemberDetailComponent_li_64_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, MemberDetailComponent_li_65_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, MemberDetailComponent_li_66_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, MemberDetailComponent_li_67_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, MemberDetailComponent_li_68_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, MemberDetailComponent_li_69_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, MemberDetailComponent_li_70_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, MemberDetailComponent_li_71_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, MemberDetailComponent_li_72_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, MemberDetailComponent_li_73_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, MemberDetailComponent_li_74_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, MemberDetailComponent_li_75_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, MemberDetailComponent_li_76_Template, 4, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "tab", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "ngx-gallery", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "tab", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, MemberDetailComponent_app_member_messages_80_Template, 1, 2, "app-member-messages", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, MemberDetailComponent_div_81_Template, 3, 0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.user.knownAs, " | ", ctx.user.age, " anos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.user.photoUrl || "../../../assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx.user.knownAs);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.isLiked);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("href", "https://www.google.com/maps/place/", ctx.user.city, ", ", ctx.user.uf, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.user.city, ", ", ctx.user.uf, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](28, 43, ctx.user.created, "mediumDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user.isActiveUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.isActiveUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("heading", "Sobre ", ctx.user == null ? null : ctx.user.knownAs, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.introduction);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.lookingFor);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.lookingFor);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.church);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.church);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.christianTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.christianTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.interestsArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.user.interestsArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.relationship);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.maritalStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.education);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.haveKids);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.wantKids);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.baptized);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.connectGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.churchAttendance);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.otherCounty);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.otherCountyMove);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.relatioshipWithKids);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.holyFasting);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.holyRelatioship);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.smoke);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.galleryOptions)("images", ctx.galleryImages);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user.isActiveUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.isActiveUser);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_gallery_9__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryComponent"], _member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_10__["MemberMessagesComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
      styles: [".img-thumbnail[_ngcontent-%COMP%] {\n    margin: 25px;\n    width: 85%;\n    height: 85%;\n}\n\n.card-body[_ngcontent-%COMP%] {\n    padding: 0 25px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n    background-color: #fff;\n    border-top: none;\n}\n\n.card[_ngcontent-%COMP%]   .member-icon[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0.5em;\n    top: 0.5em;\n}\n\n.interests[_ngcontent-%COMP%] {\n    color: white;\n    margin-right: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1kZXRhaWwvbWVtYmVyLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xuICAgIG1hcmdpbjogMjVweDtcbiAgICB3aWR0aDogODUlO1xuICAgIGhlaWdodDogODUlO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLmNhcmQgLm1lbWJlci1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDAuNWVtO1xuICAgIHRvcDogMC41ZW07XG59XG5cbi5pbnRlcmVzdHMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MemberDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-member-detail",
          templateUrl: "./member-detail.component.html",
          styleUrls: ["./member-detail.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }];
      }, {
        memberTabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["memberTabs", {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/members/member-edit/member-edit.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/members/member-edit/member-edit.component.ts ***!
    \**************************************************************/

  /*! exports provided: MemberEditComponent */

  /***/
  function srcAppMembersMemberEditMemberEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function () {
      return MemberEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_services/Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var MemberEditComponent =
    /*#__PURE__*/
    function () {
      function MemberEditComponent(authService, userService, route, alertify, spinner) {
        _classCallCheck(this, MemberEditComponent);

        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.alertify = alertify;
        this.spinner = spinner;
      } // @ViewChild("editForm", { static: true }) editForm: NgForm;
      // @HostListener("window:beforeunload", ["$event"])
      // bsConfig: Partial<BsDatepickerConfig>;
      // ufList = [
      //   "Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão",
      //   "Minas Gerais", "Mato Grosso do Sul", "Mato Grosso", "Pará", "Paraíba", "Pernambuco", "Piauí", "Paraná", "Rio de Janeiro",
      //   "Rio Grande do Norte", "Rondônia", "Roraima", "Rio Grande do Sul", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"
      // ];


      _createClass(MemberEditComponent, [{
        key: "unloadNotification",
        value: function unloadNotification($event) {// if (this.editForm.dirty) {
          //   $event.returnValue = true;
          // }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.route.data.subscribe(function (data) {
            _this20.user = data["user"];
          });
        }
      }, {
        key: "hideSpinner",
        value: function hideSpinner() {
          this.spinner.hide();
        }
      }, {
        key: "updateUser",
        value: function updateUser() {// const id = JSON.parse(localStorage.getItem("currentUser")).id;
          // this.userService
          //   .updateUser(id, this.user)
          //   .subscribe(
          //     (response) => {
          //       this.alertify.success("Perfil atualizado com sucesso!");
          //       this.editForm.reset(this.user);
          //     },
          //     (error) => {
          //       this.alertify.error(error);
          //     }
          //   );
        }
      }]);

      return MemberEditComponent;
    }();

    MemberEditComponent.ɵfac = function MemberEditComponent_Factory(t) {
      return new (t || MemberEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]));
    };

    MemberEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberEditComponent,
      selectors: [["app-member-edit"]],
      decls: 21,
      vars: 6,
      consts: [[1, "container", "mt-4"], [1, "row"], [1, "col-sm-4"], [1, "col-sm-8"], [1, "card"], [1, "card-img-top", "img-thumbnail", 3, "src", "alt"], [1, "card-body"], [1, "form-group"], [1, "card-footer"], [1, "tab-panel"]],
      template: function MemberEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Seu Perfil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Membro Desde:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.photoUrl || "../../../assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.user.knownAs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 3, ctx.user.created, "mediumDate"));
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: [".img-thumbnail[_ngcontent-%COMP%] {\n    margin:25px;\n    width:85%;\n    height:85%;\n}\n\n.card-body[_ngcontent-%COMP%] {\n    padding: 0 25px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n    background-color: #fff;\n    border-top:none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xuICAgIG1hcmdpbjoyNXB4O1xuICAgIHdpZHRoOjg1JTtcbiAgICBoZWlnaHQ6ODUlO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXRvcDpub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-member-edit",
          templateUrl: "./member-edit.component.html",
          styleUrls: ["./member-edit.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/members/member-list/member-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/members/member-list/member-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: MemberListComponent */

  /***/
  function srcAppMembersMemberListMemberListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberListComponent", function () {
      return MemberListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../member-card/member-card.component */
    "./src/app/members/member-card/member-card.component.ts");

    function MemberListComponent_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var uf_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", uf_r34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](uf_r34);
      }
    }

    function MemberListComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-member-card", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", item_r35);
      }
    }

    var MemberListComponent =
    /*#__PURE__*/
    function () {
      function MemberListComponent(userService, alertify, route) {
        _classCallCheck(this, MemberListComponent);

        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.genderList = [{
          value: "masculino",
          display: "Masculino"
        }, {
          value: "feminino",
          display: "Feminino"
        }];
        this.ufList = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Minas Gerais", "Mato Grosso do Sul", "Mato Grosso", "Pará", "Paraíba", "Pernambuco", "Piauí", "Paraná", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Roraima", "Rio Grande do Sul", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"];
        this.userParams = {};
      }

      _createClass(MemberListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.route.data.subscribe(function (data) {
            var _a, _b, _c;

            _this21.users = data["users"].result;
            _this21.pagination = data["users"].pagination;
            _this21.userParams.minAge = (_a = localStorage.getItem('minAge'), _a !== null && _a !== void 0 ? _a : 18);
            _this21.userParams.maxAge = (_b = localStorage.getItem('maxAge'), _b !== null && _b !== void 0 ? _b : 99);
            _this21.userParams.uf = (_c = localStorage.getItem('uf'), _c !== null && _c !== void 0 ? _c : 'Acre');
            _this21.userParams.orderBy = 'lastActive';
          });
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pagination.currentPage = event.page;
          this.loadUsers();
        }
      }, {
        key: "loadUsers",
        value: function loadUsers() {
          var _this22 = this;

          this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams).subscribe(function (response) {
            _this22.users = response.result;
            _this22.pagination = response.pagination;
          });
          if (this.userParams.minAge) localStorage.setItem('minAge', this.userParams.minAge);
          if (this.userParams.maxAge) localStorage.setItem('maxAge', this.userParams.maxAge);
          if (this.userParams.uf) localStorage.setItem('uf', this.userParams.uf);
        }
      }, {
        key: "resetFilters",
        value: function resetFilters() {
          this.userParams.uf = 'Santa Catarina'; //TODO Todos depois que acertar a paginação

          this.userParams.minAge = 18;
          this.userParams.maxAge = 99;
          this.loadUsers();
        }
      }]);

      return MemberListComponent;
    }();

    MemberListComponent.ɵfac = function MemberListComponent_Factory(t) {
      return new (t || MemberListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    MemberListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberListComponent,
      selectors: [["app-member-list"]],
      decls: 27,
      vars: 8,
      consts: [[1, "text-center", "mt-3"], [1, "container", "mt-3"], ["novalidate", "", 1, "form-inline", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "minAge"], ["type", "number", "id", "minAge", "name", "minAge", 1, "form-control", "ml-1", 2, "width", "70px", 3, "ngModel", "ngModelChange"], [1, "form-group", "px-2"], ["for", "maxAge"], ["type", "number", "id", "maxAge", "name", "maxAge", 1, "form-control", "ml-1", 2, "width", "70px", 3, "ngModel", "ngModelChange"], ["for", "gender"], ["id", "uf", "name", "uf", "required", "", 1, "form-control", "ml-1", 2, "width", "180px", 3, "ngModel", "ngModelChange"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-info", 2, "margin-left", "10px"], [1, "row"], ["class", "col-lg-2 col-md-3 col-sm-6 inline", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "col-lg-2", "col-md-3", "col-sm-6", "inline"], [3, "user"]],
      template: function MemberListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MemberListComponent_Template_form_ngSubmit_5_listener() {
            return ctx.loadUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Idade De:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.userParams.minAge = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Idade At\xE9:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.userParams.maxAge = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Estado (UF): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MemberListComponent_Template_select_ngModelChange_18_listener($event) {
            return ctx.userParams.uf = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Selecione o UF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MemberListComponent_option_21_Template, 2, 2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Aplicar Filtros ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MemberListComponent_div_26_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Resultados - ", ctx.pagination.totalItems, " encontrado(s)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userParams.OrderBy, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userParams.minAge);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userParams.maxAge);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userParams.uf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ufList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_6__["MemberCardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWxpc3QvbWVtYmVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-member-list",
          templateUrl: "./member-list.component.html",
          styleUrls: ["./member-list.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/members/member-messages/member-messages.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/members/member-messages/member-messages.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MemberMessagesComponent */

  /***/
  function srcAppMembersMemberMessagesMemberMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberMessagesComponent", function () {
      return MemberMessagesComponent;
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


    var src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MemberMessagesComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sem mensagens... mande um Oi usando a caixa de textos abaixo!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MemberMessagesComponent_li_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", message_r44.senderPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", message_r44.senderKnownAs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r44.senderKnownAs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, message_r44.messageSent, "short"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r44.content);
      }
    }

    function MemberMessagesComponent_li_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", message_r44.senderPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", message_r44.senderKnownAs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, message_r44.messageSent, "short"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r44.senderKnownAs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r44.content);
      }
    }

    function MemberMessagesComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MemberMessagesComponent_li_4_div_1_Template, 13, 8, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MemberMessagesComponent_li_4_div_2_Template, 13, 8, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r44 = ctx.$implicit;

        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r44.senderId == ctx_r43.recipientId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r44.senderId != ctx_r43.recipientId);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var MemberMessagesComponent =
    /*#__PURE__*/
    function () {
      function MemberMessagesComponent(authService, userService, alertifyService) {
        _classCallCheck(this, MemberMessagesComponent);

        this.authService = authService;
        this.userService = userService;
        this.alertifyService = alertifyService;
        this.message = {};
      }

      _createClass(MemberMessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.sendMessageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            sendMessageTxt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.loadMessages();
        }
      }, {
        key: "loadMessages",
        value: function loadMessages() {
          var _this23 = this;

          var currentUserId = +localStorage.getItem("userId");
          this.userService.getMessages(currentUserId, this.recipientUser.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (messages) {// tslint:disable-next-line:prefer-for-of
            // for (let i = 0; i < messages.length; i++) {
            //   if (messages[i].isRead === false && messages[i].recipientId === currentUserId) {
            //     this.userService.markAsRead(currentUserId, messages[i].id);
            //   }
            // }
          })).subscribe(function (messages) {
            _this23.messages = messages;
          }, function (error) {
            _this23.alertifyService.error(error);
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this24 = this;

          if (this.sendMessageForm.valid) {
            this.userService.addMessage(this.authService.getCurrentUser().memberId, this.recipientUser.memberId, this.sendMessageForm.get("sendMessageTxt").value, this.messages.length).subscribe(function (message) {
              //debugger; it will always stop here
              _this24.messages.push(message);

              _this24.sendMessageForm.reset();
            });
          }
        }
      }]);

      return MemberMessagesComponent;
    }();

    MemberMessagesComponent.ɵfac = function MemberMessagesComponent_Factory(t) {
      return new (t || MemberMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
    };

    MemberMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberMessagesComponent,
      selectors: [["app-member-messages"]],
      inputs: {
        recipientUser: "recipientUser",
        recipientId: "recipientId"
      },
      decls: 12,
      vars: 7,
      consts: [[1, "card"], [1, "card-body"], [4, "ngIf"], [1, "chat"], [4, "ngFor", "ngForOf"], [1, "card-footer"], [3, "formGroup"], [1, "input-group"], ["type", "text", "placeholder", "Digite uma mensagem...", "formControlName", "sendMessageTxt", 1, "form-control", "input-sm", 3, "ngClass"], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "chat-img", "float-left", 2, "margin-right", "10px"], [1, "rounded-circle", 3, "src", "alt"], [1, "chat-body"], [1, "header"], [1, "primary-font"], [1, "text-muted", "float-right"], [1, "fa", "fa-clock-o"], [1, "chat-img", "float-right", 2, "margin-left", "10px"], [1, "text-muted"], [1, "primary-font", "float-right"]],
      template: function MemberMessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MemberMessagesComponent_div_2_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MemberMessagesComponent_li_4_Template, 3, 2, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberMessagesComponent_Template_button_click_10_listener() {
            return ctx.sendMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enviar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.messages == null ? null : ctx.messages.length) === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.sendMessageForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.sendMessageForm.get("sendMessageTxt").errors && ctx.sendMessageForm.get("sendMessageTxt").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.sendMessageForm.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: [".card[_ngcontent-%COMP%] {\n    border: none;\n}\n\n.chat[_ngcontent-%COMP%] {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    padding-bottom:10px;\n    border-bottom: 1px dotted #B3A9A9;\n}\n\n.rounded-circle[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 50px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n    height: 300px;\n  overflow: auto;\n  display: flex;\n  flex-direction: column-reverse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbWVzc2FnZXMvbWVtYmVyLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1tZXNzYWdlcy9tZW1iZXItbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5jaGF0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uY2hhdCBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI0IzQTlBOTtcbn1cblxuLnJvdW5kZWQtY2lyY2xlIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-member-messages",
          templateUrl: "./member-messages.component.html",
          styleUrls: ["./member-messages.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
        }];
      }, {
        recipientUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        recipientId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/members/photo-editor/photo-editor.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/members/photo-editor/photo-editor.component.ts ***!
    \****************************************************************/

  /*! exports provided: PhotoEditorComponent */

  /***/
  function srcAppMembersPhotoEditorPhotoEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function () {
      return PhotoEditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PhotoEditorComponent_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Awaiting approval");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var photo_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !photo_r116.isApproved ? "awaitingApproval" : "");
      }
    }

    function PhotoEditorComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PhotoEditorComponent_div_1_div_3_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoEditorComponent_div_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120);

          var photo_r116 = ctx.$implicit;

          var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r119.setMainPhoto(photo_r116);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Main");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var photo_r116 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", !photo_r116.isApproved ? "0.4" : "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", photo_r116.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !photo_r116.isApproved);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", photo_r116.isMain ? "btn-success active" : "btn-secondary")("disabled", photo_r116.isMain || !photo_r116.isApproved);
      }
    }

    function PhotoEditorComponent_div_14_tr_13_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, (item_r122 == null ? null : item_r122.file == null ? null : item_r122.file.size) / 1024 / 1024, ".2"), " MB");
      }
    }

    function PhotoEditorComponent_div_14_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PhotoEditorComponent_div_14_tr_13_td_4_Template, 3, 4, "td", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r122 = ctx.$implicit;

        var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r122 == null ? null : item_r122.file == null ? null : item_r122.file.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r121.uploader.options.isHTML5);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "width": a0
      };
    };

    function PhotoEditorComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload queue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PhotoEditorComponent_div_14_tr_13_Template, 5, 2, "tr", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Queue progress: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r125.uploader.uploadAll();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Upload ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

          var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r127.uploader.cancelAll();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoEditorComponent_div_14_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

          var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r128.uploader.clearQueue();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Remove ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Queue length: ", ctx_r115.uploader == null ? null : ctx_r115.uploader.queue == null ? null : ctx_r115.uploader.queue.length, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r115.uploader.queue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r115.uploader.progress + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r115.uploader.getNotUploadedItems().length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r115.uploader.isUploading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r115.uploader.queue.length);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "nv-file-over": a0
      };
    };

    var PhotoEditorComponent =
    /*#__PURE__*/
    function () {
      function PhotoEditorComponent(authService, userService, alertifyService) {
        _classCallCheck(this, PhotoEditorComponent);

        this.authService = authService;
        this.userService = userService;
        this.alertifyService = alertifyService;
        this.hasBaseDropZoneOver = false;
      }

      _createClass(PhotoEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeUploader();
        }
      }, {
        key: "initializeUploader",
        value: function initializeUploader() {
          var _this25 = this;

          var options = {
            headers: JSON.stringify({
              "fields": {
                "Favorites": 'favorites'
              },
              "typecast": true
            })
          };
          var id = JSON.parse(localStorage.getItem("currentUser")).id;
          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_PATH"] + 'Reported/recnUj83aG5O7y55n',
            authToken: 'Bearer ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["API_KEY"],
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
          });

          this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
          };

          this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
              var res = JSON.parse(response);
              var photo = {
                id: res.id,
                url: res.url,
                dateAdded: res.dateAdded,
                description: res.description,
                isMain: res.isMain,
                isApproved: res.isApproved
              };

              _this25.photos.push(photo);

              if (res.isMain) {
                _this25.authService.photoUrl.next(res.url);
              }
            }
          };
        }
      }, {
        key: "fileOverBase",
        value: function fileOverBase(e) {
          this.hasBaseDropZoneOver = e;
        }
      }, {
        key: "setMainPhoto",
        value: function setMainPhoto(photo) {
          var _this26 = this;

          var id = JSON.parse(localStorage.getItem("currentUser")).id;
          this.userService.setMainPhoto(id, photo.id).subscribe(function (response) {
            _this26.currentMain = _this26.photos.filter(function (p) {
              return p.isMain === true;
            })[0];
            _this26.currentMain.isMain = false;
            photo.isMain = true;

            _this26.authService.photoUrl.next(photo.url);

            var user = JSON.parse(localStorage.getItem("user"));

            if (user) {
              user.photoUrl = photo.url;
              localStorage.removeItem("user");
              localStorage.setItem('user', JSON.stringify(user));
            }
          });
        } //TODO this.authService.decodedToken.nameid

      }, {
        key: "deletePhoto",
        value: function deletePhoto(photo) {
          var _this27 = this;

          var id = JSON.parse(localStorage.getItem("currentUser")).id;
          this.userService.deletePhoto(id, photo.id).subscribe(function (response) {
            _this27.photos.splice(_this27.photos.findIndex(function (p) {
              return p.id === photo.id;
            }), 1);

            _this27.alertifyService.success('Photo has been deleted');
          }, function (error) {
            _this27.alertifyService.error('Failed to delete the Photo');
          });
        }
      }]);

      return PhotoEditorComponent;
    }();

    PhotoEditorComponent.ɵfac = function PhotoEditorComponent_Factory(t) {
      return new (t || PhotoEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
    };

    PhotoEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhotoEditorComponent,
      selectors: [["app-photo-editor"]],
      inputs: {
        photos: "photos"
      },
      decls: 15,
      vars: 8,
      consts: [[1, "row"], ["class", "col-sm-2", 4, "ngFor", "ngForOf"], [1, "row", "mt-3"], [1, "col-md-3"], ["ng2FileDrop", "", 1, "card", "bg-faded", "p-3", "text-center", "mb-3", "my-drop-zone", 3, "ngClass", "uploader", "fileOver"], [1, "fa", "fa-upload", "fa-3x"], ["type", "file", "ng2FileSelect", "", "multiple", "", 3, "uploader"], ["type", "file", "ng2FileSelect", "", 3, "uploader"], ["class", "col-md-9", "style", "margin-bottom: 40px", 4, "ngIf"], [1, "col-sm-2"], [1, "container", 2, "position", "relative", "padding-left", "0px"], ["alt", "", 1, "img-thumbnail", 3, "src"], ["class", "centered", 3, "ngClass", 4, "ngIf"], [1, "text-center"], [1, "btn", "btn-sm", "mr-1", 3, "ngClass", "disabled", "click"], [1, "btn", "btn-sm", "btn-danger"], [1, "fa", "fa-trash-o"], [1, "centered", 3, "ngClass"], [1, "col-md-9", 2, "margin-bottom", "40px"], [1, "table"], ["width", "50%"], [4, "ngFor", "ngForOf"], [1, "progress", "mb-4"], ["role", "progressbar", 1, "progress-bar", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-success", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-upload"], ["type", "button", 1, "btn", "btn-warning", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-ban"], ["type", "button", 1, "btn", "btn-danger", "btn-s", 3, "disabled", "click"], [1, "fa", "fa-trash"], ["nowrap", "", 4, "ngIf"], ["nowrap", ""]],
      template: function PhotoEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotoEditorComponent_div_1_Template, 9, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileOver", function PhotoEditorComponent_Template_div_fileOver_6_listener($event) {
            return ctx.fileOverBase($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Drop Photos here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Multiple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Single ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PhotoEditorComponent_div_14_Template, 28, 8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.photos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.hasBaseDropZoneOver))("uploader", ctx.uploader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx.uploader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx.uploader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uploader == null ? null : ctx.uploader.queue == null ? null : ctx.uploader.queue.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileDropDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileSelectDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
      styles: ["img.img-thumbnail[_ngcontent-%COMP%] {\n  height: 100px;\n  min-width: 100px !important;\n  margin-bottom: 2px;\n}\n\n.nv-file-over[_ngcontent-%COMP%] {\n  border: dotted 3px red;\n}\n\ninput[type=\"file\"][_ngcontent-%COMP%] {\n  color: transparent;\n}\n\n.awaitingApproval[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-top: -52px;\n    margin-left:12%;\n    position: absolute;\n    color: red;\n    font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuaW1nLXRodW1ibmFpbCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4ubnYtZmlsZS1vdmVyIHtcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4IHJlZDtcbn1cblxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hd2FpdGluZ0FwcHJvdmFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogLTUycHg7XG4gICAgbWFyZ2luLWxlZnQ6MTIlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-photo-editor',
          templateUrl: './photo-editor.component.html',
          styleUrls: ['./photo-editor.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]
        }];
      }, {
        photos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/messages/messages.component.ts":
  /*!************************************************!*\
    !*** ./src/app/messages/messages.component.ts ***!
    \************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_Auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MessagesComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Voc\xEA ainda n\xE3o recebeu ou enviou uma mensagem, navegue nas listas de Crist\xE3os e entre em contato!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MessagesComponent_div_2_tr_12_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", message_r107 == null ? null : message_r107.senderPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r107.senderKnownAs);
      }
    }

    function MessagesComponent_div_2_tr_12_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", message_r107 == null ? null : message_r107.recipientPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r107.recipientKnownAs);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/members", a1];
    };

    var _c1 = function _c1() {
      return {
        tab: 3
      };
    };

    function MessagesComponent_div_2_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MessagesComponent_div_2_tr_12_div_4_Template, 4, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessagesComponent_div_2_tr_12_div_5_Template, 4, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r107 = ctx.$implicit;

        var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r106.messageContainer == "Outbox" ? message_r107.recipientId : message_r107.senderId))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r107.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r106.messageContainer != "Outbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r106.messageContainer == "Outbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, message_r107.messageSent, "short"));
      }
    }

    function MessagesComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xDAltima Mensagem");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Conversa com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enviada em");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MessagesComponent_div_2_tr_12_Template, 10, 12, "tr", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r105.messages);
      }
    }

    var MessagesComponent =
    /*#__PURE__*/
    function () {
      function MessagesComponent(userService, alertifyService, route, authService) {
        _classCallCheck(this, MessagesComponent);

        this.userService = userService;
        this.alertifyService = alertifyService;
        this.route = route;
        this.authService = authService;
        this.messageContainer = 'Unread';
      }

      _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.route.data.subscribe(function (data) {
            _this28.messages = data['messages'].result;
            _this28.pagination = data['messages'].pagination;
          });
        }
      }, {
        key: "loadMessages",
        value: function loadMessages() {
          var _this29 = this;

          this.userService.getLastChats(this.authService.getCurrentUser().memberId, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer).subscribe(function (data) {
            _this29.messages = data.result;
            _this29.pagination = data.pagination;
          }, function (error) {
            _this29.alertifyService.error(error);
          });
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pagination.currentPage = event.page;
          this.loadMessages();
        }
      }, {
        key: "deleteMessage",
        value: function deleteMessage(message, event) {
          var _this30 = this;

          event.stopPropagation();
          this.alertifyService.confirm('Deletar Conversa?', 'Tem certeza que deseja deletar toda esta conversa?', function () {
            _this30.userService.deleteLastChat(message).subscribe(function (result1) {
              var result = _this30.userService.deleteChats(message);

              var test = result;
            }, function (error) {
              _this30.alertifyService.error('Falha ao deletar conversa');
            });
          });
        }
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
      return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessagesComponent,
      selectors: [["app-messages"]],
      decls: 3,
      vars: 2,
      consts: [[1, "container", "mt-5"], ["style", "position: absolute; left: 50%; top: 50%;", 4, "ngIf"], ["class", "row", 4, "ngIf"], [2, "position", "absolute", "left", "50%", "top", "50%"], ["role", "alert", 1, "alert", "alert-info", 2, "position", "relative", "left", "-50%"], [1, "fa", "fa-bell"], [1, "row"], [1, "table", "table-hover", 2, "cursor", "pointer"], [2, "width", "40%"], [2, "width", "20%"], [3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [3, "routerLink", "queryParams"], [4, "ngIf"], [1, "img-circle", "rounded-circle", "mr-1", 3, "src"]],
      template: function MessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessagesComponent_div_1_Template, 5, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MessagesComponent_div_2_Template, 13, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messages.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messages.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n    margin-top:15px;\n}\n\n.img-circle[_ngcontent-%COMP%] {\n    max-height:50px;\n}\n\ntd[_ngcontent-%COMP%] {\n    vertical-align:middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBtYXJnaW4tdG9wOjE1cHg7XG59XG5cbi5pbWctY2lyY2xlIHtcbiAgICBtYXgtaGVpZ2h0OjUwcHg7XG59XG5cbnRkIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-messages",
          templateUrl: "./messages.component.html",
          styleUrls: ["./messages.component.css"]
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_Auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var _services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return ["/members"];
    };

    function NavComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Listas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return ["/lists"];
    };

    function NavComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Curtidas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    var _c2 = function _c2() {
      return ["/messages"];
    };

    function NavComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mensagens");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
      }
    }

    function NavComponent_div_15_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ol\xE1, ", ctx_r7.authService.username, " ");
      }
    }

    var _c3 = function _c3(a0) {
      return [a0];
    };

    function NavComponent_div_15_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Seu Perfil");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_15_div_4_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Sair");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c3, "/members/" + ctx_r8.authService.id));
      }
    }

    function NavComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavComponent_div_15_a_3_Template, 2, 1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavComponent_div_15_div_4_Template, 8, 3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.photoUrl || "../../../../assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, "/members/" + ctx_r5.authService.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loggedIn());
      }
    }

    function NavComponent_form_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NavComponent_form_16_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavComponent_form_16_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.model.Username = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavComponent_form_16_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.model.Password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Entrar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_form_16_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.forgotPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Enqueci a Senha ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.model.Username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.model.Password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r11.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r11.valid);
      }
    }

    var _c4 = function _c4() {
      return ["/contactus"];
    };

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent(authService, alertify, router) {
        _classCallCheck(this, NavComponent);

        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.authService.getCurrentUser();
          this.authService.photoUrl.subscribe(function (resp) {
            _this31.photoUrl = resp;
          });
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return this.authService.loggedIn();
        }
      }, {
        key: "login",
        value: function login() {
          var _this32 = this;

          this.authService.loginAirtable(this.model).subscribe(function (next) {
            _this32.alertify.success('Login efetuado com Sucesso!');

            _this32.router.navigate(['/home']);
          }, function (error) {
            _this32.alertify.confirm('Falha ao Entrar', 'Verifique seu email e senha e tente novamente! Ou clique em Esqueci a Senha para receber sua senha por Email!', function () {
              _this32.forgot = true;
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('currentUser');
          this.alertify.warning('Você foi desconectado!');
          this.router.navigate(['/home']);
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          var _this33 = this;

          this.alertify.confirm('Esqueci a Senha', "Deseja receber sua senha por Email?", function () {
            _this33.authService.checkLoginByEmail(_this33.model.Username).subscribe(function (memberId) {
              if (memberId) {
                _this33.authService.forgotPasswordUpdate(memberId).subscribe(function (response) {
                  _this33.alertify.success('Sua senha foi enviada com sucesso, verifique seu email!');

                  _this33.router.navigate(['/home']);
                }, function (error) {
                  _this33.alertify.error('Erro ao enviar sua senha, tente novamente mais tarde!', error);
                });
              }
            }), function (error) {
              _this33.alertify.error('Erro ao enviar sua senha, tente novamente mais tarde!', error);
            };
          });
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 17,
      vars: 7,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-primary", "pr-5"], ["href", "/home", 1, "navbar-brand"], ["id", "block1", 2, "float", "left"], [1, "varao"], ["id", "block2", 2, "float", "left"], [1, "varoa"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["class", "dropdown", "dropdown", "", 4, "ngIf"], ["class", "form-inline my-2 my-lg-0", "autocomplete", "off", 3, "submit", 4, "ngIf"], ["dropdown", "", 1, "dropdown"], [1, "mr-2"], ["alt", "", 1, "avatar", 3, "src", "routerLink"], ["class", "dropdown-toggle text-light", "dropdownToggle", "", 4, "ngIf"], ["class", "dropdown-menu", 4, "dropdownMenu"], ["dropdownToggle", "", 1, "dropdown-toggle", "text-light"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item", 3, "routerLink"], [1, "fa", "fa-user"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-sign-out"], ["autocomplete", "off", 1, "form-inline", "my-2", "my-lg-0", 3, "submit"], ["loginForm", "ngForm"], ["name", "Username", "placeholder", "Email", "autocomplete", "off", "type", "text", "required", "", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["placeholder", "Senha", "type", "password", "name", "Password", "required", "", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", "my-2", "my-sm-0", 3, "disabled"], ["type", "button", 1, "btn", "btn-info", "my-2", "my-sm-0", 2, "margin-left", "10px", 3, "disabled", "click"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Var\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Varoa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavComponent_li_9_Template, 3, 2, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavComponent_li_10_Template, 3, 2, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavComponent_li_11_Template, 3, 2, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fale Conosco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavComponent_div_15_Template, 5, 5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavComponent_form_16_Template, 8, 4, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownMenuDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownToggleDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".dropdown-toggle[_ngcontent-%COMP%], .dropdoiwn-item[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.avatar[_ngcontent-%COMP%] {\n    max-height: 50px;\n    border: 2px solid white;\n    display:inline;\n    cursor: pointer;\n}\n\n.varao[_ngcontent-%COMP%] {\n    color: lightblue;\n}\n\n.varoa[_ngcontent-%COMP%] {\n    color: lightpink;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tdG9nZ2xlLCAuZHJvcGRvaXduLWl0ZW0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmF2YXRhciB7XG4gICAgbWF4LWhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBkaXNwbGF5OmlubGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52YXJhbyB7XG4gICAgY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cblxuLnZhcm9hIHtcbiAgICBjb2xvcjogbGlnaHRwaW5rO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.css']
        }]
      }], function () {
        return [{
          type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_Auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var _services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");

    function RegisterComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Known as is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date of Birth is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "City is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Country is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 4 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password can not exceed 8 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(router, authService, alertify, fb) {
        _classCallCheck(this, RegisterComponent);

        this.router = router;
        this.authService = authService;
        this.alertify = alertify;
        this.fb = fb;
        this.emitCancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.colorTheme = 'theme-red';
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bsConfig = Object.assign({}, {
            containerClass: this.colorTheme
          });
          this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateOfBirth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validators: this.passwordMatchValidator
          });
        }
      }, {
        key: "passwordMatchValidator",
        value: function passwordMatchValidator(g) {
          return g.get('password').value === g.get('confirmPassword').value ? null : {
            'mismatch': true
          };
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.emitCancelRegister.emit();
        }
      }, {
        key: "register",
        value: function register() {// this.user = Object.assign({}, this.registerForm.value);
          // this.authService.register(this.user).subscribe(next => {
          //   this.alertify.success('Registration Successfull');
          // }, error => {
          //   this.alertify.error(error);
          // }, () => {
          //   this.authService.login(this.user).subscribe(response => {
          //     this.router.navigate(['/members']);
          //   }, error => {
          //     this.alertify.error(error);
          //   });
          // });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      inputs: {
        valuesFromHome: "valuesFromHome"
      },
      outputs: {
        emitCancelRegister: "emitCancelRegister"
      },
      decls: 43,
      vars: 33,
      consts: [["autocomplete", "off", 3, "formGroup", "submit"], [1, "text-center", "text-primary"], [1, "form-group"], [1, "control-label", 2, "margin-right", "10px"], [1, "radio-inline"], ["type", "radio", "value", "male", "formControlName", "gender", 1, "mr-3"], [1, "radio-inline", "ml-3"], ["type", "radio", "value", "female", "formControlName", "gender", 1, "mr-3"], ["type", "text", "placeholder", "Username", "formControlName", "username", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["placeholder", "Known as", "formControlName", "knownAs", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["bsDatepicker", "", "placeholder", "Date of Birth", "formControlName", "dateOfBirth", "type", "text", 1, "form-control", 3, "ngClass", "bsConfig"], ["placeholder", "City", "formControlName", "city", 1, "form-control", 3, "ngClass"], ["placeholder", "Country", "formControlName", "country", 1, "form-control", 3, "ngClass"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["type", "password", "placeholder", "Confirm Password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-default", 3, "click"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_0_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I am a: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Male ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Female ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Please choose a username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_div_22_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_div_25_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegisterComponent_div_28_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegisterComponent_div_31_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RegisterComponent_div_32_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RegisterComponent_div_33_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegisterComponent_div_36_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RegisterComponent_div_37_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_41_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.registerForm.get("username").errors && ctx.registerForm.get("username").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.registerForm.get("knownAs").errors && ctx.registerForm.get("knownAs").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("knownAs").touched && ctx.registerForm.get("knownAs").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.registerForm.get("dateOfBirth").errors && ctx.registerForm.get("dateOfBirth").touched))("bsConfig", ctx.bsConfig);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("dateOfBirth").touched && ctx.registerForm.get("dateOfBirth").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.registerForm.get("city").errors && ctx.registerForm.get("city").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("city").touched && ctx.registerForm.get("city").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.registerForm.get("country").errors && ctx.registerForm.get("country").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("country").touched && ctx.registerForm.get("country").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.registerForm.get("password").errors && ctx.registerForm.get("password").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").hasError("required") && ctx.registerForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").hasError("minlength") && ctx.registerForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").hasError("maxlength") && ctx.registerForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.registerForm.get("confirmPassword").errors && ctx.registerForm.get("confirmPassword").touched || ctx.registerForm.hasError("mismatch") && ctx.registerForm.get("confirmPassword").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("confirmPassword").hasError("required") && ctx.registerForm.get("confirmPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.hasError("mismatch") && ctx.registerForm.get("confirmPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        valuesFromHome: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        emitCancelRegister: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/routes.ts":
  /*!***************************!*\
    !*** ./src/app/routes.ts ***!
    \***************************/

  /*! exports provided: appRoutes */

  /***/
  function srcAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutes", function () {
      return appRoutes;
    });
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./members/member-list/member-list.component */
    "./src/app/members/member-list/member-list.component.ts");
    /* harmony import */


    var _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./messages/messages.component */
    "./src/app/messages/messages.component.ts");
    /* harmony import */


    var _lists_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lists/lists.component */
    "./src/app/lists/lists.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./_guards/auth.guard */
    "./src/app/_guards/auth.guard.ts");
    /* harmony import */


    var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./members/member-detail/member-detail.component */
    "./src/app/members/member-detail/member-detail.component.ts");
    /* harmony import */


    var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./_resolvers/member-list.resolver */
    "./src/app/_resolvers/member-list.resolver.ts");
    /* harmony import */


    var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./_resolvers/member-detail.resolver */
    "./src/app/_resolvers/member-detail.resolver.ts");
    /* harmony import */


    var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./members/member-edit/member-edit.component */
    "./src/app/members/member-edit/member-edit.component.ts");
    /* harmony import */


    var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./_resolvers/member-edit.resolver */
    "./src/app/_resolvers/member-edit.resolver.ts");
    /* harmony import */


    var _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./_resolvers/lists.resolver */
    "./src/app/_resolvers/lists.resolver.ts");
    /* harmony import */


    var _resolvers_message_list_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./_resolvers/message-list.resolver */
    "./src/app/_resolvers/message-list.resolver.ts"); // import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';


    var appRoutes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
      path: 'contactus',
      component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_0__["ContactUsComponent"]
    }, {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      children: [{
        path: 'members',
        component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_2__["MemberListComponent"],
        resolve: {
          users: _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_7__["MemberListResolver"]
        }
      }, {
        path: 'members/:id',
        component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_6__["MemberDetailComponent"],
        resolve: {
          user: _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_8__["MemberDetailResolver"]
        }
      }, {
        path: 'members/:user',
        component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_6__["MemberDetailComponent"],
        resolve: {
          user: _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_8__["MemberDetailResolver"]
        }
      }, // { path: 'member/edit', component: MemberEditComponent, canDeactivate: [PreventUnsavedChanges], resolve: { user: MemberEditResolver}},
      {
        path: 'member/edit',
        component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_9__["MemberEditComponent"],
        resolve: {
          user: _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_10__["MemberEditResolver"]
        }
      }, {
        path: 'messages',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__["MessagesComponent"],
        resolve: {
          messages: _resolvers_message_list_resolver__WEBPACK_IMPORTED_MODULE_12__["MessageListResolver"]
        }
      }, {
        path: 'lists',
        component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_4__["ListsComponent"],
        resolve: {
          users: _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_11__["ListsResolver"]
        }
      }]
    }, {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
    }];
    /***/
  },

  /***/
  "./src/app/values/values.component.ts":
  /*!********************************************!*\
    !*** ./src/app/values/values.component.ts ***!
    \********************************************/

  /*! exports provided: ValuesComponent */

  /***/
  function srcAppValuesValuesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValuesComponent", function () {
      return ValuesComponent;
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


    var _services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ValuesComponent_p_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", value_r1.id, ", ", value_r1.name, "\n");
      }
    }

    var ValuesComponent =
    /*#__PURE__*/
    function () {
      function ValuesComponent(http, alertifyService) {
        _classCallCheck(this, ValuesComponent);

        this.http = http;
        this.alertifyService = alertifyService;
      }

      _createClass(ValuesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getValues();
        }
      }, {
        key: "getValues",
        value: function getValues() {
          var _this34 = this;

          this.http.get('http://localhost:5000/api/values').subscribe(function (response) {
            _this34.values = response;

            _this34.alertifyService.success('values received');
          }, function (error) {
            _this34.alertifyService.error(error);
          });
        }
      }]);

      return ValuesComponent;
    }();

    ValuesComponent.ɵfac = function ValuesComponent_Factory(t) {
      return new (t || ValuesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]));
    };

    ValuesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ValuesComponent,
      selectors: [["app-values"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function ValuesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ValuesComponent_p_0_Template, 2, 2, "p", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.values);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhbHVlcy92YWx1ZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValuesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-values',
          templateUrl: './values.component.html',
          styleUrls: ['./values.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]
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

  /*! exports provided: environment, API_PATH, API_KEY, CREATE_FORM, EDIT_FORM */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_PATH", function () {
      return API_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_KEY", function () {
      return API_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CREATE_FORM", function () {
      return CREATE_FORM;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EDIT_FORM", function () {
      return EDIT_FORM;
    });

    var environment = {
      production: false,
      appVersion: __webpack_require__(
      /*! ../../package.json */
      "./package.json").version + '-dev'
    };
    var API_BASE = "appWNKSYG2IPWC2n3" + "/"; // Tests

    var API_PATH = "https://api.airtable.com/v0/".concat(API_BASE);
    var API_KEY = "keyRNWJ9cetyXUJex";
    var CREATE_FORM = "shruHY6jya6Y0gDjg";
    var EDIT_FORM = "shrpTrfrJgjva89As";
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
    /*! C:\Users\ejastre\Documents\WORKSPACE\TESTS\VaraoVaroa-SPA\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map