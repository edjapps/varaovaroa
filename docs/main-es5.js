function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
        value: function ngOnInit() {
          var userRoles = this.authService.decodedToken.role; // if user has no roles, clear the viewContainerRef

          if (!userRoles) {
            this.viewContainerRef.clear();
          } // if user has role needed then render the element


          if (this.authService.roleMatch(this.appHasRole)) {
            if (!this.isVisible) {
              this.isVisible = true;
              this.viewContainerRef.createEmbeddedView(this.templateRef);
            } else {
              this.isVisible = false;
              this.viewContainerRef.clear();
            }
          }
        }
      }]);

      return HasRoleDirective;
    }();

    HasRoleDirective.??fac = function HasRoleDirective_Factory(t) {
      return new (t || HasRoleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    HasRoleDirective.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
      type: HasRoleDirective,
      selectors: [["", "appHasRole", ""]],
      inputs: {
        appHasRole: "appHasRole"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HasRoleDirective, [{
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
              this.alertify.error("Voce nao tem acesso a essa area!");
            }
          }

          if (this.authService.loggedIn()) {
            return true;
          }

          this.alertify.error("E preciso estar logado!");
          this.router.navigate(["/home"]);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.??fac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]));
    };

    AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.??fac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
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
  "./src/app/_guards/prevent-unsaved-changes.guard.ts":
  /*!**********************************************************!*\
    !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
    \**********************************************************/

  /*! exports provided: PreventUnsavedChanges */

  /***/
  function srcApp_guardsPreventUnsavedChangesGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreventUnsavedChanges", function () {
      return PreventUnsavedChanges;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreventUnsavedChanges =
    /*#__PURE__*/
    function () {
      function PreventUnsavedChanges() {
        _classCallCheck(this, PreventUnsavedChanges);
      }

      _createClass(PreventUnsavedChanges, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
          }

          return true;
        }
      }]);

      return PreventUnsavedChanges;
    }();

    PreventUnsavedChanges.??fac = function PreventUnsavedChanges_Factory(t) {
      return new (t || PreventUnsavedChanges)();
    };

    PreventUnsavedChanges.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: PreventUnsavedChanges,
      factory: PreventUnsavedChanges.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PreventUnsavedChanges, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
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

    var PaginatedResult = function PaginatedResult() {
      _classCallCheck(this, PaginatedResult);
    };
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
            _this.alertify.error(_common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DataError);

            _this.router.navigate(['/home']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return ListsResolver;
    }();

    ListsResolver.??fac = function ListsResolver_Factory(t) {
      return new (t || ListsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    ListsResolver.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: ListsResolver,
      factory: ListsResolver.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListsResolver, [{
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

          return this.userService.getUser(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this2.alertify.error(_common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DataError);

            _this2.router.navigate(['/home']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return MemberDetailResolver;
    }();

    MemberDetailResolver.??fac = function MemberDetailResolver_Factory(t) {
      return new (t || MemberDetailResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    MemberDetailResolver.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: MemberDetailResolver,
      factory: MemberDetailResolver.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MemberDetailResolver, [{
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

          return this.userService.getUser(this.authService.decodedToken.nameid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this3.alertify.error(error);

            _this3.router.navigate(["/members"]);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return MemberEditResolver;
    }();

    MemberEditResolver.??fac = function MemberEditResolver_Factory(t) {
      return new (t || MemberEditResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
    };

    MemberEditResolver.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: MemberEditResolver,
      factory: MemberEditResolver.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MemberEditResolver, [{
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
            _this4.alertify.error(_common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DataError);

            _this4.router.navigate(['/home']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return MemberListResolver;
    }();

    MemberListResolver.??fac = function MemberListResolver_Factory(t) {
      return new (t || MemberListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    MemberListResolver.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: MemberListResolver,
      factory: MemberListResolver.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MemberListResolver, [{
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

          return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this5.alertify.error(_common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DataError);

            _this5.router.navigate(['/home']);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
          }));
        }
      }]);

      return MessageListResolver;
    }();

    MessageListResolver.??fac = function MessageListResolver_Factory(t) {
      return new (t || MessageListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    MessageListResolver.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: MessageListResolver,
      factory: MessageListResolver.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MessageListResolver, [{
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
        value: function confirm(message, okCallback) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_1__["confirm"](message, function (e) {
            if (e) {
              okCallback();
            }
          });
        }
      }, {
        key: "success",
        value: function success(message) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_1__["success"](message);
        }
      }, {
        key: "error",
        value: function error(message) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_1__["error"](message);
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

    AlertifyService.??fac = function AlertifyService_Factory(t) {
      return new (t || AlertifyService)();
    };

    AlertifyService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AlertifyService,
      factory: AlertifyService.??fac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlertifyService, [{
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.photoUrl = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(model) {
          var _this6 = this;

          return this.http.post(this.baseUrl + "auth/login", model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var user = response;

            if (user) {
              localStorage.setItem("token", user.token.result);
              localStorage.setItem("user", JSON.stringify(user.user));
              _this6.currentUser = user.user;

              _this6.getUsername();

              _this6.photoUrl.next(_this6.currentUser.photoUrl);
            }
          }));
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          this.decodedToken = this.helper.decodeToken(localStorage.getItem("token"));

          if (this.decodedToken) {
            this.username = this.decodedToken.unique_name;
          }
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          var token = localStorage.getItem("token");

          if (token) {
            return !this.helper.isTokenExpired(token);
          }

          return false;
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post(this.baseUrl + "auth/register", user);
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

    AuthService.??fac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthService,
      factory: AuthService.??fac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/admin.service.ts":
  /*!********************************************!*\
    !*** ./src/app/_services/admin.service.ts ***!
    \********************************************/

  /*! exports provided: AdminService */

  /***/
  function srcApp_servicesAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AdminService =
    /*#__PURE__*/
    function () {
      function AdminService(http) {
        _classCallCheck(this, AdminService);

        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
      }

      _createClass(AdminService, [{
        key: "getUsersWithRoles",
        value: function getUsersWithRoles() {
          return this.http.get(this.baseUrl + 'admin/usersWithRoles');
        }
      }, {
        key: "updateUserRoles",
        value: function updateUserRoles(user, values) {
          return this.http.post(this.baseUrl + 'admin/editRoles/' + user.userName, values);
        }
      }, {
        key: "getPhotosForApproval",
        value: function getPhotosForApproval() {
          return this.http.get(this.baseUrl + 'admin/photosForApproval');
        }
      }, {
        key: "updatePhotoStatus",
        value: function updatePhotoStatus(photoId, status) {
          return this.http.post(this.baseUrl + 'admin/photoStatusUpdate/' + photoId + '/' + status, {});
        }
      }]);

      return AdminService;
    }();

    AdminService.??fac = function AdminService_Factory(t) {
      return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AdminService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AdminService,
      factory: AdminService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
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

    ErrorInterceptor.??fac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]));
    };

    ErrorInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErrorInterceptor, [{
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _models_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_models/pagination */
    "./src/app/_models/pagination.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers(page, itemsPerPage, userParams, likesParams) {
          var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();

          if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
          }

          if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
          }

          if (likesParams === 'Likers') {
            params = params.append('Likers', 'true');
          }

          if (likesParams === 'Likees') {
            params = params.append('Likees', 'false');
          }

          return this.http.get(this.baseUrl + 'users', {
            observe: 'response',
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            paginatedResult.result = response.body;

            if (response.headers.get('Pagination') != null) {
              paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }

            return paginatedResult;
          }));
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.http.get(this.baseUrl + 'users/' + id);
        }
      }, {
        key: "updateUser",
        value: function updateUser(id, user) {
          return this.http.put(this.baseUrl + 'users/' + id, user);
        }
      }, {
        key: "setMainPhoto",
        value: function setMainPhoto(userId, id) {
          return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
        }
      }, {
        key: "deletePhoto",
        value: function deletePhoto(userId, id) {
          return this.http["delete"](this.baseUrl + 'users/' + userId + '/photos/' + id);
        }
      }, {
        key: "sendLike",
        value: function sendLike(id, recipientId) {
          return this.http.post(this.baseUrl + 'users/' + id + '/like/' + recipientId, {});
        }
      }, {
        key: "getMessages",
        value: function getMessages(id, page, itemsPerPage, messageContainer) {
          var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          params = params.append('MessageContainer', messageContainer);

          if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
          }

          return this.http.get(this.baseUrl + 'users/' + id + '/message', {
            observe: 'response',
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            paginatedResult.result = response.body;

            if (response.headers.get('Pagination') != null) {
              paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }

            return paginatedResult;
          }));
        }
      }, {
        key: "getMessageThread",
        value: function getMessageThread(id, recipientId) {
          return this.http.get(this.baseUrl + 'users/' + id + '/message/thread/' + recipientId);
        }
      }, {
        key: "addMessage",
        value: function addMessage(userId, message) {
          return this.http.post(this.baseUrl + 'users/' + userId + '/message/', message);
        }
      }, {
        key: "deleteMessage",
        value: function deleteMessage(id, userId) {
          return this.http.post(this.baseUrl + 'users/' + userId + '/message/' + id, {});
        }
      }, {
        key: "markAsRead",
        value: function markAsRead(userId, messageId) {
          this.http.post(this.baseUrl + 'users/' + userId + '/message/' + messageId + '/read', {}).subscribe();
        }
      }]);

      return UserService;
    }();

    UserService.??fac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: UserService,
      factory: UserService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-panel/admin-panel.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/admin-panel/admin-panel.component.ts ***!
    \************************************************************/

  /*! exports provided: AdminPanelComponent */

  /***/
  function srcAppAdminAdminPanelAdminPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function () {
      return AdminPanelComponent;
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


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../_directives/hasRole.directive */
    "./src/app/_directives/hasRole.directive.ts");
    /* harmony import */


    var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user-management/user-management.component */
    "./src/app/admin/user-management/user-management.component.ts");
    /* harmony import */


    var _photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../photo-management/photo-management.component */
    "./src/app/admin/photo-management/photo-management.component.ts");

    function AdminPanelComponent_tab_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tab", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-user-management");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AdminPanelComponent_tab_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tab", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-photo-management");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["Admin"];
    };

    var _c1 = function _c1() {
      return ["Admin", "Moderator"];
    };

    var AdminPanelComponent =
    /*#__PURE__*/
    function () {
      function AdminPanelComponent(authService) {
        _classCallCheck(this, AdminPanelComponent);

        this.authService = authService;
      }

      _createClass(AdminPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminPanelComponent;
    }();

    AdminPanelComponent.??fac = function AdminPanelComponent_Factory(t) {
      return new (t || AdminPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AdminPanelComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AdminPanelComponent,
      selectors: [["app-admin-panel"]],
      decls: 7,
      vars: 4,
      consts: [[1, "container", "mt-5"], [1, "tab-panel"], [1, "member-tabset"], ["heading", "User Management", 4, "appHasRole"], ["heading", "Photo Management", 4, "appHasRole"], ["heading", "User Management"], [1, "container"], ["heading", "Photo Management"]],
      template: function AdminPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Admin Panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tabset", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, AdminPanelComponent_tab_5_Template, 3, 0, "tab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AdminPanelComponent_tab_6_Template, 3, 0, "tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c1));
        }
      },
      directives: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabsetComponent"], _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_3__["HasRoleDirective"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabDirective"], _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_4__["UserManagementComponent"], _photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_5__["PhotoManagementComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdminPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-panel',
          templateUrl: './admin-panel.component.html',
          styleUrls: ['./admin-panel.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/photo-management/photo-management.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/photo-management/photo-management.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PhotoManagementComponent */

  /***/
  function srcAppAdminPhotoManagementPhotoManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoManagementComponent", function () {
      return PhotoManagementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_services/admin.service */
    "./src/app/_services/admin.service.ts");
    /* harmony import */


    var src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PhotoManagementComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PhotoManagementComponent_div_1_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r87);

          var photo_r85 = ctx.$implicit;

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r86.updatePhotoStatus(photo_r85.id, "Activate");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Activate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PhotoManagementComponent_div_1_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r87);

          var photo_r85 = ctx.$implicit;

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r88.updatePhotoStatus(photo_r85.id, "Reject");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Reject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var photo_r85 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", photo_r85.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    var PhotoManagementComponent =
    /*#__PURE__*/
    function () {
      function PhotoManagementComponent(adminService, alertifyService) {
        _classCallCheck(this, PhotoManagementComponent);

        this.adminService = adminService;
        this.alertifyService = alertifyService;
      }

      _createClass(PhotoManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPhotosForApproval();
        }
      }, {
        key: "getPhotosForApproval",
        value: function getPhotosForApproval() {
          var _this8 = this;

          this.adminService.getPhotosForApproval().subscribe(function (photos) {
            _this8.photos = photos;
          }, function (error) {
            _this8.alertifyService.error(error);
          });
        }
      }, {
        key: "updatePhotoStatus",
        value: function updatePhotoStatus(photoId, status) {
          var _this9 = this;

          this.adminService.updatePhotoStatus(photoId, status).subscribe(function () {
            var index = _this9.photos.indexOf(_this9.photos.find(function (el) {
              return el.id === photoId;
            }));

            if (index > -1) {
              _this9.photos.splice(index, 1);
            }
          }, function (error) {
            _this9.alertifyService.error(error);
          });
        }
      }]);

      return PhotoManagementComponent;
    }();

    PhotoManagementComponent.??fac = function PhotoManagementComponent_Factory(t) {
      return new (t || PhotoManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]));
    };

    PhotoManagementComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PhotoManagementComponent,
      selectors: [["app-photo-management"]],
      decls: 2,
      vars: 1,
      consts: [[1, "row"], ["class", "col-sm-2", 4, "ngFor", "ngForOf"], [1, "col-sm-2"], [1, "container", 2, "position", "relative"], ["alt", "", 1, "img-thumbnail", 3, "src"], [1, "text-center", "mt-2"], [1, "btn", "btn-sm", "btn-success", "mr-1", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]],
      template: function PhotoManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PhotoManagementComponent_div_1_Template, 8, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.photos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Bob3RvLW1hbmFnZW1lbnQvcGhvdG8tbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PhotoManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-photo-management',
          templateUrl: './photo-management.component.html',
          styleUrls: ['./photo-management.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]
        }, {
          type: src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/roles-modal/roles-modal.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/roles-modal/roles-modal.component.ts ***!
    \************************************************************/

  /*! exports provided: RolesModalComponent */

  /***/
  function srcAppAdminRolesModalRolesModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolesModalComponent", function () {
      return RolesModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RolesModalComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function RolesModalComponent_div_9_Template_input_change_1_listener() {
          var role_r78 = ctx.$implicit;
          return role_r78.checked = !role_r78.checked;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var role_r78 = ctx.$implicit;

        var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", role_r78.checked)("disabled", ctx_r77.user.userName === "Admin" && role_r78.name === "Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](role_r78.name);
      }
    }

    var RolesModalComponent =
    /*#__PURE__*/
    function () {
      function RolesModalComponent(bsModalRef) {
        _classCallCheck(this, RolesModalComponent);

        this.bsModalRef = bsModalRef;
        this.updateSelectedRoles = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(RolesModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.updateSelectedRoles.emit(this.roles);
          this.bsModalRef.hide();
        }
      }]);

      return RolesModalComponent;
    }();

    RolesModalComponent.??fac = function RolesModalComponent_Factory(t) {
      return new (t || RolesModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]));
    };

    RolesModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RolesModalComponent,
      selectors: [["app-roles-modal"]],
      outputs: {
        updateSelectedRoles: "updateSelectedRoles"
      },
      decls: 15,
      vars: 2,
      consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["id", "rolesForm", 3, "ngSubmit"], ["rolesForm", "ngForm"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["type", "submit", "form", "rolesForm", 1, "btn", "btn-success"], [1, "form-check"], ["type", "checkbox", "value", "role.name", 1, "form-check-input", 3, "checked", "disabled", "change"]],
      template: function RolesModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RolesModalComponent_Template_button_click_3_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function RolesModalComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, RolesModalComponent_div_9_Template, 4, 3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RolesModalComponent_Template_button_click_11_listener() {
            return ctx.bsModalRef.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Edit Roles for ", ctx.user.userName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.roles);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JvbGVzLW1vZGFsL3JvbGVzLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RolesModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-roles-modal",
          templateUrl: "./roles-modal.component.html",
          styleUrls: ["./roles-modal.component.css"]
        }]
      }], function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]
        }];
      }, {
        updateSelectedRoles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/user-management/user-management.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/user-management/user-management.component.ts ***!
    \********************************************************************/

  /*! exports provided: UserManagementComponent */

  /***/
  function srcAppAdminUserManagementUserManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function () {
      return UserManagementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../roles-modal/roles-modal.component */
    "./src/app/admin/roles-modal/roles-modal.component.ts");
    /* harmony import */


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/admin.service */
    "./src/app/_services/admin.service.ts");
    /* harmony import */


    var src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserManagementComponent_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UserManagementComponent_tr_10_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83);

          var user_r81 = ctx.$implicit;

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r82.editRolesModal(user_r81);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Edit Roles");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var user_r81 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r81.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r81.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r81.roles);
      }
    }

    var UserManagementComponent =
    /*#__PURE__*/
    function () {
      function UserManagementComponent(adminService, alertifyService, modalService) {
        _classCallCheck(this, UserManagementComponent);

        this.adminService = adminService;
        this.alertifyService = alertifyService;
        this.modalService = modalService;
      }

      _createClass(UserManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsersWithRoles();
        }
      }, {
        key: "getUsersWithRoles",
        value: function getUsersWithRoles() {
          var _this10 = this;

          this.adminService.getUsersWithRoles().subscribe(function (users) {
            _this10.users = users;
          }, function (error) {
            _this10.alertifyService.error(error);
          });
        }
      }, {
        key: "editRolesModal",
        value: function editRolesModal(user) {
          var _this11 = this;

          var initialState = {
            user: user,
            roles: this.getRolesArray(user)
          };
          this.bsModalRef = this.modalService.show(_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_1__["RolesModalComponent"], {
            initialState: initialState
          });
          this.bsModalRef.content.updateSelectedRoles.subscribe(function (values) {
            var rolesToUpdate = {
              roleNames: _toConsumableArray(values.filter(function (el) {
                return el.checked === true;
              }).map(function (el) {
                return el.name;
              }))
            };

            if (rolesToUpdate) {
              _this11.adminService.updateUserRoles(user, rolesToUpdate).subscribe(function () {
                user.roles = _toConsumableArray(rolesToUpdate.roleNames);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }, {
        key: "getRolesArray",
        value: function getRolesArray(user) {
          var roles = [];
          var userRoles = user.roles;
          var availableRoles = [{
            name: "Admin",
            value: "Admin"
          }, {
            name: "Moderator",
            value: "Moderator"
          }, {
            name: "Member",
            value: "Member"
          }, {
            name: "VIP",
            value: "VIP"
          }];

          for (var i = 0; i < availableRoles.length; i++) {
            var isMatch = false;

            for (var j = 0; j < userRoles.length; j++) {
              if (availableRoles[i].name === userRoles[j]) {
                isMatch = true;
                availableRoles[i].checked = true;
                roles.push(availableRoles[i]);
                break;
              }
            }

            if (!isMatch) {
              availableRoles[i].checked = false;
              roles.push(availableRoles[i]);
            }
          }

          return roles;
        }
      }]);

      return UserManagementComponent;
    }();

    UserManagementComponent.??fac = function UserManagementComponent_Factory(t) {
      return new (t || UserManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]));
    };

    UserManagementComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: UserManagementComponent,
      selectors: [["app-user-management"]],
      decls: 11,
      vars: 1,
      consts: [[1, "row"], [1, "table"], [2, "width", "10%"], [2, "width", "30%"], [2, "width", "40%"], [2, "width", "20%"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 3, "click"]],
      template: function UserManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "User ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Active roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, UserManagementComponent_tr_10_Template, 10, 3, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-user-management",
          templateUrl: "./user-management.component.html",
          styleUrls: ["./user-management.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
        }, {
          type: src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
        }];
      }, null);
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
        this.title = 'DatingApp-SPA';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.getUsername();
          var user = JSON.parse(localStorage.getItem("user"));

          if (user) {
            this.authService.photoUrl.next(user.photoUrl);
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "ngx-spinner");
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
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


    var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./admin/admin-panel/admin-panel.component */
    "./src/app/admin/admin-panel/admin-panel.component.ts");
    /* harmony import */


    var _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./_directives/hasRole.directive */
    "./src/app/_directives/hasRole.directive.ts");
    /* harmony import */


    var _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./admin/user-management/user-management.component */
    "./src/app/admin/user-management/user-management.component.ts");
    /* harmony import */


    var _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./admin/photo-management/photo-management.component */
    "./src/app/admin/photo-management/photo-management.component.ts");
    /* harmony import */


    var _admin_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./admin/roles-modal/roles-modal.component */
    "./src/app/admin/roles-modal/roles-modal.component.ts");

    function tokenGetter() {
      return localStorage.getItem('token');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_error_interceptor__WEBPACK_IMPORTED_MODULE_26__["ErrorInterceptorProvider"], _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_30__["MemberListResolver"], _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_33__["MemberEditResolver"], _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_31__["MemberDetailResolver"], _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_35__["ListsResolver"], _resolvers_message_list_resolver__WEBPACK_IMPORTED_MODULE_36__["MessageListResolver"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_14__["ButtonsModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_29__["appRoutes"]), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(), ngx_timeago__WEBPACK_IMPORTED_MODULE_12__["TimeagoModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(), ngx_gallery_9__WEBPACK_IMPORTED_MODULE_9__["NgxGalleryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _values_values_component__WEBPACK_IMPORTED_MODULE_18__["ValuesComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_19__["NavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"], _lists_lists_component__WEBPACK_IMPORTED_MODULE_27__["ListsComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_28__["MessagesComponent"], _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_21__["MemberListComponent"], _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_22__["MemberCardComponent"], _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_24__["MemberDetailComponent"], _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_32__["MemberEditComponent"], _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_34__["PhotoEditorComponent"], _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_23__["MemberMessagesComponent"], _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_37__["AdminPanelComponent"], _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_39__["UserManagementComponent"], _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_40__["PhotoManagementComponent"], _admin_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_41__["RolesModalComponent"], _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_38__["HasRoleDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_14__["ButtonsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"], ngx_timeago__WEBPACK_IMPORTED_MODULE_12__["TimeagoModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"], ngx_gallery_9__WEBPACK_IMPORTED_MODULE_9__["NgxGalleryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _values_values_component__WEBPACK_IMPORTED_MODULE_18__["ValuesComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_19__["NavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_25__["RegisterComponent"], _lists_lists_component__WEBPACK_IMPORTED_MODULE_27__["ListsComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_28__["MessagesComponent"], _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_21__["MemberListComponent"], _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_22__["MemberCardComponent"], _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_24__["MemberDetailComponent"], _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_32__["MemberEditComponent"], _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_34__["PhotoEditorComponent"], _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_23__["MemberMessagesComponent"], _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_37__["AdminPanelComponent"], _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_39__["UserManagementComponent"], _admin_photo_management_photo_management_component__WEBPACK_IMPORTED_MODULE_40__["PhotoManagementComponent"], _admin_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_41__["RolesModalComponent"], _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_38__["HasRoleDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_14__["ButtonsModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_29__["appRoutes"]), _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
            config: {
              tokenGetter: tokenGetter,
              whitelistedDomains: ['localhost:5000'],
              blacklistedRoutes: ['localhost:5000/api/auth']
            }
          }), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(), ngx_timeago__WEBPACK_IMPORTED_MODULE_12__["TimeagoModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(), ngx_gallery_9__WEBPACK_IMPORTED_MODULE_9__["NgxGalleryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"]],
          providers: [_services_error_interceptor__WEBPACK_IMPORTED_MODULE_26__["ErrorInterceptorProvider"], _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_30__["MemberListResolver"], _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_33__["MemberEditResolver"], _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_31__["MemberDetailResolver"], _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_35__["ListsResolver"], _resolvers_message_list_resolver__WEBPACK_IMPORTED_MODULE_36__["MessageListResolver"]],
          entryComponents: [_admin_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_41__["RolesModalComponent"]],
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

    var Constants = function Constants() {
      _classCallCheck(this, Constants);
    };

    Constants.apiURL = "https://itsolutionstuff.com/";
    Constants.DataError = "Erro ao buscar dados, verifique se voce esta Online!";
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
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../register/register.component */
    "./src/app/register/register.component.ts");

    function HomeComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Encontre seu Varao / Varoa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Tudo que voce precisa eh se cadastrar ou efetuar seu login!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_div_1_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r16.toggleRegister();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Cadastro");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Saiba mais");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function HomeComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "app-register", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("emitCancelRegister", function HomeComponent_div_4_Template_app_register_emitCancelRegister_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r18.toggleRegister();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(http, alertify) {
        _classCallCheck(this, HomeComponent);

        this.http = http;
        this.alertify = alertify;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleRegister",
        value: function toggleRegister() {
          this.showHideRegister = !this.showHideRegister;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.??fac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]));
    };

    HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 5,
      vars: 2,
      consts: [[1, "container", "mt-5"], ["style", "text-align:center", 4, "ngIf"], [1, "container"], [1, "row", "justify-content-center"], ["class", "col-4", 4, "ngIf"], [2, "text-align", "center"], [1, "lead"], [1, "text-center"], [1, "btn", "btn-primary", "btn-lg", "mr-2", 3, "click"], [1, "btn", "btn-info", "btn-lg"], [1, "col-4"], [3, "emitCancelRegister"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_div_1_Template, 10, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, HomeComponent_div_4_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.showHideRegister);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showHideRegister);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
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


    var _services_Auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../members/member-card/member-card.component */
    "./src/app/members/member-card/member-card.component.ts");

    function ListsComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-member-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var user_r46 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("user", user_r46);
      }
    }

    var ListsComponent =
    /*#__PURE__*/
    function () {
      function ListsComponent(authService, userService, route, alertify) {
        _classCallCheck(this, ListsComponent);

        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.alertify = alertify;
      }

      _createClass(ListsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.route.data.subscribe(function (data) {
            _this12.users = data['users'].result;
            _this12.pagination = data['users'].pagination;
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
          var _this13 = this;

          this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam).subscribe(function (response) {
            _this13.users = response.result;
            _this13.pagination = response.pagination;
          });
        }
      }]);

      return ListsComponent;
    }();

    ListsComponent.??fac = function ListsComponent_Factory(t) {
      return new (t || ListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]));
    };

    ListsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ListsComponent,
      selectors: [["app-lists"]],
      decls: 15,
      vars: 9,
      consts: [[1, "text-center", "mt-3"], [1, "container", "mt-3"], [1, "row"], [1, "btn-group"], ["btnRadio", "Likers", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], ["btnRadio", "Likees", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], ["class", "col-sm-6 col-md-4 col-lg-4 col-xl-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "lastText", "\xBB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"], [1, "col-sm-6", "col-md-4", "col-lg-4", "col-xl-2"], [3, "user"]],
      template: function ListsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ListsComponent_Template_button_ngModelChange_6_listener($event) {
            return ctx.likesParam = $event;
          })("click", function ListsComponent_Template_button_click_6_listener() {
            return ctx.loadUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Members who like me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ListsComponent_Template_button_ngModelChange_8_listener($event) {
            return ctx.likesParam = $event;
          })("click", function ListsComponent_Template_button_click_8_listener() {
            return ctx.loadUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Members who I like");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ListsComponent_div_12_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "pagination", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ListsComponent_Template_pagination_ngModelChange_14_listener($event) {
            return ctx.pagination.currentPage = $event;
          })("pageChanged", function ListsComponent_Template_pagination_pageChanged_14_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.likesParam === "Likers" ? "Members who like me" : "Members who I've Liked", " : ", ctx.pagination.totalItems, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.likesParam);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.likesParam);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("boundaryLinks", true)("totalItems", ctx.pagination.totalItems)("itemsPerPage", ctx.pagination.itemsPerPage)("ngModel", ctx.pagination.currentPage);
        }
      },
      directives: [ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonRadioDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_9__["MemberCardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RzL2xpc3RzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lists',
          templateUrl: './lists.component.html',
          styleUrls: ['./lists.component.css']
        }]
      }], function () {
        return [{
          type: _services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]
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


    var src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/_services/Auth.service */
    "./src/app/_services/Auth.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/members/", a1];
    };

    var _c1 = function _c1(a1) {
      return ["/members", a1];
    };

    var _c2 = function _c2() {
      return {
        tab: 3
      };
    };

    var MemberCardComponent =
    /*#__PURE__*/
    function () {
      function MemberCardComponent(authService, userService, alertifyService) {
        _classCallCheck(this, MemberCardComponent);

        this.authService = authService;
        this.userService = userService;
        this.alertifyService = alertifyService;
      }

      _createClass(MemberCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendLike",
        value: function sendLike(recipientId) {
          var _this14 = this;

          this.userService.sendLike(this.authService.decodedToken.nameid, recipientId).subscribe(function (response) {
            _this14.alertifyService.success('You have liked user: ' + _this14.user.knownAs);
          }, function (error) {
            _this14.alertifyService.error(error);
          });
        }
      }]);

      return MemberCardComponent;
    }();

    MemberCardComponent.??fac = function MemberCardComponent_Factory(t) {
      return new (t || MemberCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]));
    };

    MemberCardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MemberCardComponent,
      selectors: [["app-member-card"]],
      inputs: {
        user: "user"
      },
      decls: 19,
      vars: 13,
      consts: [[1, "card", "mb-4"], [1, "card-img-wrapper"], ["alt", "...", 1, "card-img-top", 3, "src", "alt"], [1, "list-inline", "member-icons", "animate", "text-center"], [1, "list-inline-item"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-primary", 3, "routerLink"], [1, "fa", "fa-user"], [1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-heart"], [1, "btn", "btn-primary", 3, "routerLink", "queryParams"], [1, "fa", "fa-envelope"], [1, "card-body", "p-1"], [1, "card-title", "text-center", "mb-1"], [1, "card-text", "text-muted", "text-center"]],
      template: function MemberCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MemberCardComponent_Template_button_click_8_listener() {
            return ctx.sendLike(ctx.user.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h6", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.user.photoUrl || "../../../assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", ctx.user.photoUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, ctx.user.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c1, ctx.user.id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", ctx.user.knownAs, ", ", ctx.user.age, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.city);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: [".card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    transform: scale(1.2, 1.2);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity:0.7;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transform: scale(1.0, 1.0);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.card-img-wrapper[_ngcontent-%COMP%]{\r\n    overflow:hidden;\r\n    position:relative;\r\n}\r\n\r\n.member-icons[_ngcontent-%COMP%] {\r\n    position:absolute;\r\n    bottom: -30%;\r\n    left:0;\r\n    right: 0;\r\n    margin-right: auto;\r\n    margin-left:auto;\r\n    opacity: 0;\r\n}\r\n\r\n.card-img-wrapper[_ngcontent-%COMP%]:hover   .member-icons[_ngcontent-%COMP%] {\r\n    bottom: 0;\r\n    opacity: 1;\r\n}\r\n\r\n.animate[_ngcontent-%COMP%] {\r\n    transition: all 0.3s ease-in-out;    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWNhcmQvbWVtYmVyLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkOmhvdmVyIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgb3BhY2l0eTowLjc7XHJcbn1cclxuXHJcbi5jYXJkIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCwgMS4wKTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2FyZC1pbWctd3JhcHBlcntcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWVtYmVyLWljb25zIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMzAlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXdyYXBwZXI6aG92ZXIgLm1lbWJlci1pY29ucyB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYW5pbWF0ZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDsgICAgXHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MemberCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-card',
          templateUrl: './member-card.component.html',
          styleUrls: ['./member-card.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_gallery_9__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-gallery-9 */
    "./node_modules/ngx-gallery-9/__ivy_ngcc__/fesm2015/ngx-gallery-9.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/Alertify.service */
    "./src/app/_services/Alertify.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../member-messages/member-messages.component */
    "./src/app/members/member-messages/member-messages.component.ts");
    /* harmony import */


    var ngx_timeago__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-timeago */
    "./node_modules/ngx-timeago/__ivy_ngcc__/fesm2015/ngx-timeago.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["memberTabs"];

    var MemberDetailComponent =
    /*#__PURE__*/
    function () {
      function MemberDetailComponent(userService, alertify, route) {
        _classCallCheck(this, MemberDetailComponent);

        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
      }

      _createClass(MemberDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.route.data.subscribe(function (data) {
            _this15.user = data["user"];
          });
          this.galleryOptions = [{
            width: "400px",
            height: "400px",
            thumbnailsColumns: 4,
            imageAnimation: ngx_gallery_9__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryAnimation"].Slide
          }, // max-width 800
          {
            breakpoint: 800,
            width: "100%",
            height: "600px",
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20
          }, // max-width 400
          {
            breakpoint: 400,
            preview: false
          }];
          this.galleryImages = this.getImages();
          this.route.queryParams.subscribe(function (params) {
            var selectedTab = params["tab"];
            _this15.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
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

          var _iterator = _createForOfIteratorHelper(this.user.photos),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var photo = _step.value;

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
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return images;
        }
      }]);

      return MemberDetailComponent;
    }();

    MemberDetailComponent.??fac = function MemberDetailComponent_Factory(t) {
      return new (t || MemberDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    MemberDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MemberDetailComponent,
      selectors: [["app-member-detail"]],
      viewQuery: function MemberDetailComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.memberTabs = _t.first);
        }
      },
      decls: 59,
      vars: 20,
      consts: [[1, "container", "mt-4"], [1, "row"], [1, "col-sm-4"], [1, "card"], [1, "card-img-top", "img-thumbnail", 3, "src", "alt"], [1, "card-body"], [1, "card-footer"], [1, "btn-group", "d-flex"], [1, "btn", "btn-primary", "w-100"], [1, "btn", "btn-success", "w-100", 3, "click"], [1, "col-sm-8"], [1, "tab-panel"], [1, "member-tabset"], ["memberTabs", ""], ["id", "tab1", 3, "heading"], ["heading", "Interests"], ["heading", "Photos"], [3, "options", "images"], ["heading", "Messages"], [3, "recipientId"]],
      template: function MemberDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Age:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Last Active:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](24, "timeago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Member Since:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](30, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Like");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MemberDetailComponent_Template_button_click_35_listener() {
            return ctx.selectTab(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tabset", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "tab", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Looking For");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Interests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "tab", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "ngx-gallery", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "tab", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "app-member-messages", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.user.knownAs, "'s Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.user.photoUrl || "../../../assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", ctx.user.knownAs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.user.city, ", ", ctx.user.country, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](24, 15, ctx.user.lastActive));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](30, 17, ctx.user.created, "mediumDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("heading", "About ", ctx.user == null ? null : ctx.user.knownAs, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.introduction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.lookingFor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.interests);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.galleryOptions)("images", ctx.galleryImages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("recipientId", ctx.user.id);
        }
      },
      directives: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabDirective"], ngx_gallery_9__WEBPACK_IMPORTED_MODULE_1__["NgxGalleryComponent"], _member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_6__["MemberMessagesComponent"]],
      pipes: [ngx_timeago__WEBPACK_IMPORTED_MODULE_7__["TimeagoPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
      styles: [".img-thumbnail[_ngcontent-%COMP%] {\r\n    margin:25px;\r\n    width:85%;\r\n    height:85%;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top:none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWRldGFpbC9tZW1iZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbCB7XHJcbiAgICBtYXJnaW46MjVweDtcclxuICAgIHdpZHRoOjg1JTtcclxuICAgIGhlaWdodDo4NSU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci10b3A6bm9uZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MemberDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-member-detail",
          templateUrl: "./member-detail.component.html",
          styleUrls: ["./member-detail.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, {
        memberTabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../photo-editor/photo-editor.component */
    "./src/app/members/photo-editor/photo-editor.component.ts");
    /* harmony import */


    var ngx_timeago__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-timeago */
    "./node_modules/ngx-timeago/__ivy_ngcc__/fesm2015/ngx-timeago.js");

    var _c0 = ["editForm"];

    function MemberEditComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Information:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " You have made changes. Any unsaved changes will be lost! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var MemberEditComponent =
    /*#__PURE__*/
    function () {
      function MemberEditComponent(authService, userService, route, alertify) {
        _classCallCheck(this, MemberEditComponent);

        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.alertify = alertify;
      }

      _createClass(MemberEditComponent, [{
        key: "unloadNotification",
        value: function unloadNotification($event) {
          if (this.editForm.dirty) {
            $event.returnValue = true;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.authService.photoUrl.subscribe(function (resp) {
            _this16.photoUrl = resp;
          });
          this.route.data.subscribe(function (data) {
            _this16.user = data["user"];
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this17 = this;

          this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(function (response) {
            _this17.alertify.success("Profile updated Successfully");

            _this17.editForm.reset(_this17.user);
          }, function (error) {
            _this17.alertify.error(error);
          });
        }
      }]);

      return MemberEditComponent;
    }();

    MemberEditComponent.??fac = function MemberEditComponent_Factory(t) {
      return new (t || MemberEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]));
    };

    MemberEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MemberEditComponent,
      selectors: [["app-member-edit"]],
      viewQuery: function MemberEditComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.editForm = _t.first);
        }
      },
      hostBindings: function MemberEditComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("beforeunload", function MemberEditComponent_beforeunload_HostBindingHandler($event) {
            return ctx.unloadNotification($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);
        }
      },
      decls: 63,
      vars: 20,
      consts: [[1, "container", "mt-4"], [1, "row"], [1, "col-sm-4"], [1, "col-sm-8"], ["class", "alert alert-info", "role", "alert", 4, "ngIf"], [1, "card"], [1, "card-img-top", "img-thumbnail", 3, "src", "alt"], [1, "card-body"], [1, "card-footer"], ["form", "editForm", 1, "btn", "btn-success", "btn-block", 3, "disabled"], [1, "tab-panel"], [1, "member-tabset"], ["heading", "Edit Profile"], ["id", "editForm", 3, "ngSubmit"], ["editForm", "ngForm"], ["name", "introduction", "cols", "30", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "lookingFor", "cols", "30", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "interests", "cols", "30", "rows", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-inline"], ["for", "city"], ["type", "text", "name", "city", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "country"], ["type", "text", "name", "country", 1, "form-control", 3, "ngModel", "ngModelChange"], ["heading", "Edit Photos"], [3, "photos"], ["role", "alert", 1, "alert", "alert-info"]],
      template: function MemberEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Your Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MemberEditComponent_div_6_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Age:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Last Active:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](27, "timeago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Member Since:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](33, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Save Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tabset", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "form", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function MemberEditComponent_Template_form_ngSubmit_41_listener() {
            return ctx.updateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "textarea", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MemberEditComponent_Template_textarea_ngModelChange_45_listener($event) {
            return ctx.user.introduction = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Looking For");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MemberEditComponent_Template_textarea_ngModelChange_48_listener($event) {
            return ctx.user.lookingFor = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Interests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MemberEditComponent_Template_textarea_ngModelChange_51_listener($event) {
            return ctx.user.interests = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Location Details:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MemberEditComponent_Template_input_ngModelChange_57_listener($event) {
            return ctx.user.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MemberEditComponent_Template_input_ngModelChange_60_listener($event) {
            return ctx.user.country = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "tab", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "app-photo-editor", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r58.dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.photoUrl || "../../../assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", ctx.user.knownAs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", ctx.user.city, ", ", ctx.user.country, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.user.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](27, 15, ctx.user.lastActive));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](33, 17, ctx.user.created, "mediumDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r58.dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.introduction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.lookingFor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.interests);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("photos", ctx.user.photos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_8__["PhotoEditorComponent"]],
      pipes: [ngx_timeago__WEBPACK_IMPORTED_MODULE_9__["TimeagoPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".img-thumbnail[_ngcontent-%COMP%] {\r\n    margin:25px;\r\n    width:85%;\r\n    height:85%;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top:none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xyXG4gICAgbWFyZ2luOjI1cHg7XHJcbiAgICB3aWR0aDo4NSU7XHJcbiAgICBoZWlnaHQ6ODUlO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wOm5vbmU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MemberEditComponent, [{
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
        }];
      }, {
        editForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["editForm", {
            "static": true
          }]
        }],
        unloadNotification: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["window:beforeunload", ["$event"]]
        }]
      });
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


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../member-card/member-card.component */
    "./src/app/members/member-card/member-card.component.ts");

    function MemberListComponent_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var gender_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", gender_r23.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](gender_r23.display);
      }
    }

    function MemberListComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-member-card", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("user", item_r24);
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
          value: "male",
          display: "Males"
        }, {
          value: "female",
          display: "Females"
        }];
        this.userParams = {};
      }

      _createClass(MemberListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.route.data.subscribe(function (data) {
            _this18.users = data["users"].result;
            _this18.pagination = data["users"].pagination;
          });
          this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
          this.userParams.minAge = 18;
          this.userParams.maxAge = 99;
          this.userParams.orderBy = 'lastActive';
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
          var _this19 = this;

          this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams).subscribe(function (response) {
            _this19.users = response.result;
            _this19.pagination = response.pagination;
          });
        }
      }, {
        key: "resetFilters",
        value: function resetFilters() {
          this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
          this.userParams.minAge = 18;
          this.userParams.maxAge = 99;
          this.loadUsers();
        }
      }]);

      return MemberListComponent;
    }();

    MemberListComponent.??fac = function MemberListComponent_Factory(t) {
      return new (t || MemberListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    MemberListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MemberListComponent,
      selectors: [["app-member-list"]],
      decls: 35,
      vars: 13,
      consts: [[1, "text-center", "mt-3"], [1, "container", "mt-3"], ["novalidate", "", 1, "form-inline", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "minAge"], ["type", "number", "id", "minAge", "name", "minAge", 1, "form-control", "ml-1", 2, "width", "70px", 3, "ngModel", "ngModelChange"], [1, "form-group", "px-2"], ["for", "maxAge"], ["type", "number", "id", "maxAge", "name", "maxAge", 1, "form-control", "ml-1", 2, "width", "70px", 3, "ngModel", "ngModelChange"], ["for", "gender"], ["id", "gender", "name", "gender", 1, "form-control", "ml-1", 2, "width", "130px", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", 2, "margin-left", "10px"], ["type", "button", 1, "btn", "btn-info", 2, "margin-left", "10px", 3, "click"], [1, "col"], [1, "btn-group", "float-right"], ["type", "button", "name", "orderBy", "btnRadio", "lastActive", 1, "btn", "btn-primary", 3, "ngModel", "click", "ngModelChange"], ["type", "button", "name", "orderBy", "btnRadio", "created", 1, "btn", "btn-primary", 3, "ngModel", "click", "ngModelChange"], [1, "row"], ["class", "col-lg-2 col-md-3 col-sm-6 inline", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "firstText", "\xBB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"], [3, "value"], [1, "col-lg-2", "col-md-3", "col-sm-6", "inline"], [3, "user"]],
      template: function MemberListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function MemberListComponent_Template_form_ngSubmit_5_listener() {
            return ctx.loadUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Age From");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MemberListComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.userParams.minAge = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Age To");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MemberListComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.userParams.maxAge = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Show: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MemberListComponent_Template_select_ngModelChange_18_listener($event) {
            return ctx.userParams.gender = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, MemberListComponent_option_19_Template, 2, 2, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Apply Filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MemberListComponent_Template_button_click_22_listener() {
            return ctx.resetFilters();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Reset Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MemberListComponent_Template_button_click_26_listener() {
            return ctx.loadUsers();
          })("ngModelChange", function MemberListComponent_Template_button_ngModelChange_26_listener($event) {
            return ctx.userParams.orderBy = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Last Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MemberListComponent_Template_button_click_28_listener() {
            return ctx.loadUsers();
          })("ngModelChange", function MemberListComponent_Template_button_ngModelChange_28_listener($event) {
            return ctx.userParams.orderBy = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Newest Members");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, MemberListComponent_div_32_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "pagination", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MemberListComponent_Template_pagination_ngModelChange_34_listener($event) {
            return ctx.pagination.currentPage = $event;
          })("pageChanged", function MemberListComponent_Template_pagination_pageChanged_34_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Your matches - ", ctx.pagination.totalItems, " found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.userParams.OrderBy, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userParams.minAge);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userParams.maxAge);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userParams.gender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.genderList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userParams.orderBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.userParams.orderBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.users);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("boundaryLinks", true)("totalItems", ctx.pagination.totalItems)("itemsPerPage", ctx.pagination.itemsPerPage)("ngModel", ctx.pagination.currentPage);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_6__["ButtonRadioDirective"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_x"], _member_card_member_card_component__WEBPACK_IMPORTED_MODULE_8__["MemberCardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWxpc3QvbWVtYmVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MemberListComponent, [{
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
    /* harmony import */


    var ngx_timeago__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-timeago */
    "./node_modules/ngx-timeago/__ivy_ngcc__/fesm2015/ngx-timeago.js");

    function MemberMessagesComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "No messages yet... say hi by using the message box below");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MemberMessagesComponent_li_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "strong", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "timeago");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var message_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", message_r27.senderPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", message_r27.senderKnownAs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r27.senderKnownAs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 5, message_r27.messageSent));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r27.content);
      }
    }

    function MemberMessagesComponent_li_4_div_2_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "(unread)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MemberMessagesComponent_li_4_div_2_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "timeago");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var message_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("(Read | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, message_r27.dateRead), ")");
      }
    }

    function MemberMessagesComponent_li_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "small", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "timeago");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MemberMessagesComponent_li_4_div_2_span_9_Template, 2, 0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, MemberMessagesComponent_li_4_div_2_span_10_Template, 3, 3, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "strong", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var message_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", message_r27.senderPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", message_r27.senderKnownAs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](8, 7, message_r27.messageSent));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !message_r27.isRead);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", message_r27.isRead);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r27.senderKnownAs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r27.content);
      }
    }

    function MemberMessagesComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MemberMessagesComponent_li_4_div_1_Template, 13, 7, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, MemberMessagesComponent_li_4_div_2_Template, 15, 9, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var message_r27 = ctx.$implicit;

        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", message_r27.senderId == ctx_r26.recipientId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", message_r27.senderId != ctx_r26.recipientId);
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
          var _this20 = this;

          var currentUserId = +this.authService.decodedToken.nameid;
          this.userService.getMessageThread(this.authService.decodedToken.nameid, this.recipientId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (messages) {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < messages.length; i++) {
              if (messages[i].isRead === false && messages[i].recipientId === currentUserId) {
                _this20.userService.markAsRead(currentUserId, messages[i].id);
              }
            }
          })).subscribe(function (messages) {
            _this20.messages = messages;
          }, function (error) {
            _this20.alertifyService.error(error);
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this21 = this;

          if (this.sendMessageForm.valid) {
            this.message.recipientId = this.recipientId;
            this.message.content = this.sendMessageForm.get("sendMessageTxt").value;
            this.userService.addMessage(this.authService.decodedToken.nameid, this.message).subscribe(function (message) {
              debugger;

              _this21.messages.unshift(message);

              _this21.sendMessageForm.reset();
            });
          }
        }
      }]);

      return MemberMessagesComponent;
    }();

    MemberMessagesComponent.??fac = function MemberMessagesComponent_Factory(t) {
      return new (t || MemberMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
    };

    MemberMessagesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MemberMessagesComponent,
      selectors: [["app-member-messages"]],
      inputs: {
        recipientId: "recipientId"
      },
      decls: 12,
      vars: 7,
      consts: [[1, "card"], [1, "card-body"], [4, "ngIf"], [1, "chat"], [4, "ngFor", "ngForOf"], [1, "card-footer"], [3, "formGroup"], [1, "input-group"], ["type", "text", "placeholder", "send a private message", "formControlName", "sendMessageTxt", 1, "form-control", "input-sm", 3, "ngClass"], [1, "input-group-append"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "chat-img", "float-left"], [1, "rounded-circle", 3, "src", "alt"], [1, "chat-body"], [1, "header"], [1, "primary-font"], [1, "text-muted", "float-right"], [1, "fa", "fa-clock-o"], [1, "chat-img", "float-right"], [1, "text-muted"], ["class", "text-danger", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], [1, "primary-font", "float-right"], [1, "text-danger"], [1, "text-success"]],
      template: function MemberMessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, MemberMessagesComponent_div_2_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MemberMessagesComponent_li_4_Template, 3, 2, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MemberMessagesComponent_Template_button_click_10_listener() {
            return ctx.sendMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.messages == null ? null : ctx.messages.length) === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.messages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.sendMessageForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, ctx.sendMessageForm.get("sendMessageTxt").errors && ctx.sendMessageForm.get("sendMessageTxt").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.sendMessageForm.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
      pipes: [ngx_timeago__WEBPACK_IMPORTED_MODULE_7__["TimeagoPipe"]],
      styles: [".card[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    padding-bottom:10px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.rounded-circle[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    overflow-y: scroll;\r\n    height: 400px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbWVzc2FnZXMvbWVtYmVyLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLW1lc3NhZ2VzL21lbWJlci1tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2hhdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNoYXQgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNCM0E5QTk7XHJcbn1cclxuXHJcbi5yb3VuZGVkLWNpcmNsZSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MemberMessagesComponent, [{
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Awaiting approval");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var photo_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", !photo_r63.isApproved ? "awaitingApproval" : "");
      }
    }

    function PhotoEditorComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PhotoEditorComponent_div_1_div_3_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PhotoEditorComponent_div_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r67);

          var photo_r63 = ctx.$implicit;

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r66.setMainPhoto(photo_r63);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Main");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var photo_r63 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleProp"]("opacity", !photo_r63.isApproved ? "0.4" : "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", photo_r63.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !photo_r63.isApproved);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", photo_r63.isMain ? "btn-success active" : "btn-secondary")("disabled", photo_r63.isMain || !photo_r63.isApproved);
      }
    }

    function PhotoEditorComponent_div_14_tr_13_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, (item_r69 == null ? null : item_r69.file == null ? null : item_r69.file.size) / 1024 / 1024, ".2"), " MB");
      }
    }

    function PhotoEditorComponent_div_14_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PhotoEditorComponent_div_14_tr_13_td_4_Template, 3, 4, "td", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r69 = ctx.$implicit;

        var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r69 == null ? null : item_r69.file == null ? null : item_r69.file.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r68.uploader.options.isHTML5);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "width": a0
      };
    };

    function PhotoEditorComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Upload queue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "table", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, PhotoEditorComponent_div_14_tr_13_Template, 5, 2, "tr", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Queue progress: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PhotoEditorComponent_div_14_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r73);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r72.uploader.uploadAll();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Upload ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PhotoEditorComponent_div_14_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r73);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r74.uploader.cancelAll();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PhotoEditorComponent_div_14_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r73);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r75.uploader.clearQueue();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Remove ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Queue length: ", ctx_r62.uploader == null ? null : ctx_r62.uploader.queue == null ? null : ctx_r62.uploader.queue.length, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r62.uploader.queue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, ctx_r62.uploader.progress + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r62.uploader.getNotUploadedItems().length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r62.uploader.isUploading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r62.uploader.queue.length);
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
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
      }

      _createClass(PhotoEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeUploader();
        }
      }, {
        key: "initializeUploader",
        value: function initializeUploader() {
          var _this22 = this;

          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({
            url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
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

              _this22.photos.push(photo);

              if (res.isMain) {
                _this22.authService.photoUrl.next(res.url);
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
          var _this23 = this;

          this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(function (response) {
            _this23.currentMain = _this23.photos.filter(function (p) {
              return p.isMain === true;
            })[0];
            _this23.currentMain.isMain = false;
            photo.isMain = true;

            _this23.authService.photoUrl.next(photo.url);

            var user = JSON.parse(localStorage.getItem("user"));

            if (user) {
              user.photoUrl = photo.url;
              localStorage.removeItem("user");
              localStorage.setItem('user', JSON.stringify(user));
            }
          });
        }
      }, {
        key: "deletePhoto",
        value: function deletePhoto(photo) {
          var _this24 = this;

          this.userService.deletePhoto(this.authService.decodedToken.nameid, photo.id).subscribe(function (response) {
            _this24.photos.splice(_this24.photos.findIndex(function (p) {
              return p.id === photo.id;
            }), 1);

            _this24.alertifyService.success('Photo has been deleted');
          }, function (error) {
            _this24.alertifyService.error('Failed to delete the Photo');
          });
        }
      }]);

      return PhotoEditorComponent;
    }();

    PhotoEditorComponent.??fac = function PhotoEditorComponent_Factory(t) {
      return new (t || PhotoEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_Alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]));
    };

    PhotoEditorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PhotoEditorComponent_div_1_Template, 9, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Add Photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("fileOver", function PhotoEditorComponent_Template_div_fileOver_6_listener($event) {
            return ctx.fileOverBase($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Drop Photos here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Multiple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Single ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, PhotoEditorComponent_div_14_Template, 28, 8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.photos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c1, ctx.hasBaseDropZoneOver))("uploader", ctx.uploader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("uploader", ctx.uploader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("uploader", ctx.uploader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.uploader == null ? null : ctx.uploader.queue == null ? null : ctx.uploader.queue.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileDropDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileSelectDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
      styles: ["img.img-thumbnail[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  min-width: 100px !important;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.nv-file-over[_ngcontent-%COMP%] {\r\n  border: dotted 3px red;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n  color: transparent;\r\n}\r\n\r\n.awaitingApproval[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin-top: -52px;\r\n    margin-left:12%;\r\n    position: absolute;\r\n    color: red;\r\n    font-size: 0.9rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuaW1nLXRodW1ibmFpbCB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4ubnYtZmlsZS1vdmVyIHtcclxuICBib3JkZXI6IGRvdHRlZCAzcHggcmVkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYXdhaXRpbmdBcHByb3ZhbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OjEyJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PhotoEditorComponent, [{
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


    var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/buttons */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var ngx_timeago__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-timeago */
    "./node_modules/ngx-timeago/__ivy_ngcc__/fesm2015/ngx-timeago.js");

    function MessagesComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "No messages");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function MessagesComponent_div_13_tr_12_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var message_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", message_r50 == null ? null : message_r50.senderPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r50.senderKnownAs);
      }
    }

    function MessagesComponent_div_13_tr_12_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var message_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", message_r50 == null ? null : message_r50.recipientPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r50.recipientKnownAs);
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

    function MessagesComponent_div_13_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MessagesComponent_div_13_tr_12_div_4_Template, 4, 2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, MessagesComponent_div_13_tr_12_div_5_Template, 4, 2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "timeago");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MessagesComponent_div_13_tr_12_Template_button_click_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r56);

          var message_r50 = ctx.$implicit;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r55.deleteMessage(message_r50.id, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var message_r50 = ctx.$implicit;

        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, ctx_r49.messageContainer == "Outbox" ? message_r50.recipientId : message_r50.senderId))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r50.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.messageContainer != "Outbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r49.messageContainer == "Outbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](8, 6, message_r50.messageSent));
      }
    }

    function MessagesComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "table", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Message");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "From / To");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Sent / Received");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "th", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MessagesComponent_div_13_tr_12_Template, 12, 11, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r48.messages);
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
          var _this25 = this;

          this.route.data.subscribe(function (data) {
            _this25.messages = data['messages'].result;
            _this25.pagination = data['messages'].pagination;
          });
        }
      }, {
        key: "loadMessages",
        value: function loadMessages() {
          var _this26 = this;

          this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer).subscribe(function (data) {
            _this26.messages = data.result;
            _this26.pagination = data.pagination;
          }, function (error) {
            _this26.alertifyService.error(error);
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
        value: function deleteMessage(id, event) {
          var _this27 = this;

          event.stopPropagation();
          this.alertifyService.confirm('Are you sure you want to delete this message', function () {
            _this27.userService.deleteMessage(id, _this27.authService.decodedToken.nameid).subscribe(function (result) {
              _this27.messages.splice(_this27.messages.findIndex(function (m) {
                return m.id === id;
              }), 1);

              _this27.alertifyService.success('Message has been deleted');
            }, function (error) {
              _this27.alertifyService.error('Failed to delete the message');
            });
          });
        }
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.??fac = function MessagesComponent_Factory(t) {
      return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    MessagesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MessagesComponent,
      selectors: [["app-messages"]],
      decls: 16,
      vars: 9,
      consts: [[1, "container", "mt-5"], [1, "row"], [1, "btn-group"], ["btnRadio", "Unread", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-envelope"], ["btnRadio", "Inbox", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-envelope-open"], ["btnRadio", "Outbox", 1, "btn", "btn-primary", 3, "ngModel", "ngModelChange", "click"], [1, "fa", "fa-paper-plane"], ["class", "row", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\xAB", "lastText", "\xBB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"], [1, "table", "table-hover", 2, "cursor", "pointer"], [2, "width", "40%"], [2, "width", "20%"], [3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [3, "routerLink", "queryParams"], [4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [1, "img-circle", "rounded-circle", "mr-1", 3, "src"]],
      template: function MessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_3_listener($event) {
            return ctx.messageContainer = $event;
          })("click", function MessagesComponent_Template_button_click_3_listener() {
            return ctx.loadMessages();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Unread ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_6_listener($event) {
            return ctx.messageContainer = $event;
          })("click", function MessagesComponent_Template_button_click_6_listener() {
            return ctx.loadMessages();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Inbox ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MessagesComponent_Template_button_ngModelChange_9_listener($event) {
            return ctx.messageContainer = $event;
          })("click", function MessagesComponent_Template_button_click_9_listener() {
            return ctx.loadMessages();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Outbox ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, MessagesComponent_div_12_Template, 3, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, MessagesComponent_div_13_Template, 13, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "pagination", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MessagesComponent_Template_pagination_ngModelChange_15_listener($event) {
            return ctx.pagination.currentPage = $event;
          })("pageChanged", function MessagesComponent_Template_pagination_pageChanged_15_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.messageContainer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.messageContainer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.messageContainer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.messages.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.messages.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("boundaryLinks", true)("totalItems", ctx.pagination.totalItems)("itemsPerPage", ctx.pagination.itemsPerPage)("ngModel", ctx.pagination.currentPage);
        }
      },
      directives: [ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonRadioDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      pipes: [ngx_timeago__WEBPACK_IMPORTED_MODULE_9__["TimeagoPipe"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n    margin-top:15px;\r\n}\r\n\r\n.img-circle[_ngcontent-%COMP%] {\r\n    max-height:50px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    vertical-align:middle;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxufVxyXG5cclxuLmltZy1jaXJjbGUge1xyXG4gICAgbWF4LWhlaWdodDo1MHB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MessagesComponent, [{
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


    var _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_directives/hasRole.directive */
    "./src/app/_directives/hasRole.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return ["/admin"];
    };

    function NavComponent_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
      }
    }

    function NavComponent_div_14_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Ola, ", ctx_r5.authService.username, " ");
      }
    }

    var _c1 = function _c1() {
      return ["/member/edit"];
    };

    function NavComponent_div_14_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Editar Perfil");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavComponent_div_14_div_4_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r7.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Sair");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c1));
      }
    }

    function NavComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, NavComponent_div_14_a_3_Template, 2, 1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, NavComponent_div_14_div_4_Template, 8, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx_r3.photoUrl || "../../../../assets/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.loggedIn());
      }
    }

    function NavComponent_form_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function NavComponent_form_15_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r10.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NavComponent_form_15_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r12.model.Username = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NavComponent_form_15_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r13.model.Password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Entrar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.model.Username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r4.model.Password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r9.valid);
      }
    }

    var _c2 = function _c2() {
      return ["/members"];
    };

    var _c3 = function _c3() {
      return ["/lists"];
    };

    var _c4 = function _c4() {
      return ["/messages"];
    };

    var _c5 = function _c5() {
      return ["Admin", "Moderator"];
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
          var _this28 = this;

          this.authService.photoUrl.subscribe(function (next) {
            _this28.photoUrl = next;
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
          var _this29 = this;

          this.authService.login(this.model).subscribe(function (next) {
            _this29.alertify.success('Login Success');
          }, function (error) {
            _this29.alertify.error(error);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          this.authService.decodedToken = null;
          this.authService.currentUser = null;
          this.alertify.message('logout successfull');
          this.router.navigate(['/home']);
        }
      }]);

      return NavComponent;
    }();

    NavComponent.??fac = function NavComponent_Factory(t) {
      return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    NavComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 16,
      vars: 10,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-primary", "pr-5"], ["href", "#", 1, "navbar-brand"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["class", "nav-item", "routerLinkActive", "active", 4, "appHasRole"], ["class", "dropdown", "dropdown", "", 4, "ngIf"], ["class", "form-inline my-2 my-lg-0", "autocomplete", "off", 3, "submit", 4, "ngIf"], ["dropdown", "", 1, "dropdown"], [1, "mr-2"], ["alt", "", 3, "src"], ["class", "dropdown-toggle text-light", "dropdownToggle", "", 4, "ngIf"], ["class", "dropdown-menu", 4, "dropdownMenu"], ["dropdownToggle", "", 1, "dropdown-toggle", "text-light"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item", 3, "routerLink"], [1, "fa", "fa-user"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-sign-out"], ["autocomplete", "off", 1, "form-inline", "my-2", "my-lg-0", 3, "submit"], ["loginForm", "ngForm"], ["name", "Username", "placeholder", "Email", "autocomplete", "off", "type", "text", "required", "", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["placeholder", "Senha", "type", "password", "name", "Password", "required", "", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", "my-2", "my-sm-0", 3, "disabled"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Varao Varoa App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Curtidas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Listas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Mensagens");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, NavComponent_li_13_Template, 3, 2, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, NavComponent_div_14_Template, 5, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, NavComponent_form_15_Template, 6, 3, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](8, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("appHasRole", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](9, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.loggedIn());
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_4__["HasRoleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownMenuDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownToggleDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: [".dropdown-toggle[_ngcontent-%COMP%], .dropdoiwn-item[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    max-height: 50px;\r\n    border: 2px solid white;\r\n    display:inline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGUsIC5kcm9wZG9pd24taXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBkaXNwbGF5OmlubGluZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavComponent, [{
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Known as is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Date of Birth is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "City is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Country is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password must be at least 4 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Password can not exceed 8 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Confirm password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function RegisterComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Passwords must match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
        value: function register() {
          var _this30 = this;

          this.user = Object.assign({}, this.registerForm.value);
          this.authService.register(this.user).subscribe(function (next) {
            _this30.alertify.success('Registration Successfull');
          }, function (error) {
            _this30.alertify.error(error);
          }, function () {
            _this30.authService.login(_this30.user).subscribe(function (response) {
              _this30.router.navigate(['/members']);
            }, function (error) {
              _this30.alertify.error(error);
            });
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.??fac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_Auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function RegisterComponent_Template_form_submit_0_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "I am a: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Male ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Female ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Please choose a username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, RegisterComponent_div_19_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, RegisterComponent_div_22_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, RegisterComponent_div_25_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, RegisterComponent_div_28_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, RegisterComponent_div_31_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, RegisterComponent_div_32_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, RegisterComponent_div_33_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, RegisterComponent_div_36_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, RegisterComponent_div_37_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RegisterComponent_Template_button_click_41_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](19, _c0, ctx.registerForm.get("username").errors && ctx.registerForm.get("username").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](21, _c0, ctx.registerForm.get("knownAs").errors && ctx.registerForm.get("knownAs").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerForm.get("knownAs").touched && ctx.registerForm.get("knownAs").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](23, _c0, ctx.registerForm.get("dateOfBirth").errors && ctx.registerForm.get("dateOfBirth").touched))("bsConfig", ctx.bsConfig);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerForm.get("dateOfBirth").touched && ctx.registerForm.get("dateOfBirth").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](25, _c0, ctx.registerForm.get("city").errors && ctx.registerForm.get("city").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerForm.get("city").touched && ctx.registerForm.get("city").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](27, _c0, ctx.registerForm.get("country").errors && ctx.registerForm.get("country").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerForm.get("country").touched && ctx.registerForm.get("country").hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](29, _c0, ctx.registerForm.get("password").errors && ctx.registerForm.get("password").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerForm.get("password").hasError("required") && ctx.registerForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerForm.get("password").hasError("minlength") && ctx.registerForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerForm.get("password").hasError("maxlength") && ctx.registerForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](31, _c0, ctx.registerForm.get("confirmPassword").errors && ctx.registerForm.get("confirmPassword").touched || ctx.registerForm.hasError("mismatch") && ctx.registerForm.get("confirmPassword").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerForm.get("confirmPassword").hasError("required") && ctx.registerForm.get("confirmPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.registerForm.hasError("mismatch") && ctx.registerForm.get("confirmPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.registerForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterComponent, [{
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


    var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./members/member-list/member-list.component */
    "./src/app/members/member-list/member-list.component.ts");
    /* harmony import */


    var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./messages/messages.component */
    "./src/app/messages/messages.component.ts");
    /* harmony import */


    var _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lists/lists.component */
    "./src/app/lists/lists.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./_guards/auth.guard */
    "./src/app/_guards/auth.guard.ts");
    /* harmony import */


    var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./members/member-detail/member-detail.component */
    "./src/app/members/member-detail/member-detail.component.ts");
    /* harmony import */


    var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./_resolvers/member-list.resolver */
    "./src/app/_resolvers/member-list.resolver.ts");
    /* harmony import */


    var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./_resolvers/member-detail.resolver */
    "./src/app/_resolvers/member-detail.resolver.ts");
    /* harmony import */


    var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./members/member-edit/member-edit.component */
    "./src/app/members/member-edit/member-edit.component.ts");
    /* harmony import */


    var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./_resolvers/member-edit.resolver */
    "./src/app/_resolvers/member-edit.resolver.ts");
    /* harmony import */


    var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./_guards/prevent-unsaved-changes.guard */
    "./src/app/_guards/prevent-unsaved-changes.guard.ts");
    /* harmony import */


    var _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./_resolvers/lists.resolver */
    "./src/app/_resolvers/lists.resolver.ts");
    /* harmony import */


    var _resolvers_message_list_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./_resolvers/message-list.resolver */
    "./src/app/_resolvers/message-list.resolver.ts");
    /* harmony import */


    var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin/admin-panel/admin-panel.component */
    "./src/app/admin/admin-panel/admin-panel.component.ts");

    var appRoutes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    }, {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      children: [{
        path: 'members',
        component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__["MemberListComponent"],
        resolve: {
          users: _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_6__["MemberListResolver"]
        }
      }, {
        path: 'members/:id',
        component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__["MemberDetailComponent"],
        resolve: {
          user: _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_7__["MemberDetailResolver"]
        }
      }, {
        path: 'member/edit',
        component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_8__["MemberEditComponent"],
        canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_10__["PreventUnsavedChanges"]],
        resolve: {
          user: _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_9__["MemberEditResolver"]
        }
      }, {
        path: 'messages',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"],
        resolve: {
          messages: _resolvers_message_list_resolver__WEBPACK_IMPORTED_MODULE_12__["MessageListResolver"]
        }
      }, {
        path: 'lists',
        component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_3__["ListsComponent"],
        resolve: {
          users: _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_11__["ListsResolver"]
        }
      }, {
        path: 'admin',
        component: _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_13__["AdminPanelComponent"],
        data: {
          roles: ['Admin', 'Moderator']
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var value_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", value_r1.id, ", ", value_r1.name, "\n");
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
          var _this31 = this;

          this.http.get('http://localhost:5000/api/values').subscribe(function (response) {
            _this31.values = response;

            _this31.alertifyService.success('values received');
          }, function (error) {
            _this31.alertifyService.error(error);
          });
        }
      }]);

      return ValuesComponent;
    }();

    ValuesComponent.??fac = function ValuesComponent_Factory(t) {
      return new (t || ValuesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_Alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]));
    };

    ValuesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ValuesComponent,
      selectors: [["app-values"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function ValuesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ValuesComponent_p_0_Template, 2, 2, "p", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.values);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhbHVlcy92YWx1ZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ValuesComponent, [{
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
      production: false,
      apiUrl: 'http://localhost:5000/api/'
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
    /*! C:\Users\edvir\Documents\ANGULAR\DatingApp-SPA\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map