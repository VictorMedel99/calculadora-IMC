(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/q82":
/*!****************************************!*\
  !*** ./src/app/IMCHombre/IMCHombre.ts ***!
  \****************************************/
/*! exports provided: EstadoHombre, IMCHombre, pesoMinHombre, pesoMaxHombre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoHombre", function() { return EstadoHombre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMCHombre", function() { return IMCHombre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pesoMinHombre", function() { return pesoMinHombre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pesoMaxHombre", function() { return pesoMaxHombre; });
function EstadoHombre(IMC) {
    let rest = '';
    if (IMC < 18.5) {
        rest = `peso bajo`;
    }
    else {
        if (IMC >= 18.5 && IMC <= 24.9) {
            rest = `peso normal`;
        }
        else {
            if (IMC >= 25.0 && IMC <= 29.9) {
                rest = `sobrepeso`;
            }
            else {
                if (IMC >= 30.0 && IMC <= 34.9) {
                    rest = `obesidad grado 1`;
                }
                else {
                    if (IMC >= 35.0 && IMC <= 39.9) {
                        rest = `obesidad grado 2`;
                    }
                    else {
                        rest = `obesidad grado 3 (obesidad mórbida)`;
                    }
                }
            }
        }
    }
    return rest;
}
function IMCHombre(peso, estatura) {
    let IMC = peso / (Math.pow(estatura, 2));
    return parseFloat(IMC.toFixed(2));
}
function pesoMinHombre(edad, estatura) {
    let rest;
    if (edad >= 10 && edad <= 14) {
        rest = Math.pow(estatura, 2) * 15;
    }
    else {
        if (edad >= 15 && edad <= 18) {
            rest = Math.pow(estatura, 2) * 17.4;
        }
        else {
            if (edad >= 19) {
                rest = Math.pow(estatura, 2) * 18.5;
            }
        }
    }
    return `${rest.toFixed(2)} kg`;
}
function pesoMaxHombre(edad, estatura) {
    let rest;
    if (edad >= 10 && edad <= 14) {
        rest = Math.pow(estatura, 2) * 18.4;
    }
    else {
        if (edad >= 15 && edad <= 18) {
            rest = Math.pow(estatura, 2) * 21.7;
        }
        else {
            if (edad >= 19) {
                rest = Math.pow(estatura, 2) * 24.9;
            }
        }
    }
    return `${rest.toFixed(2)} kg`;
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/victorm/Documentos/tdd/projects/calculadora-IMC/src/main.ts */"zUnb");


/***/ }),

/***/ "6k2k":
/*!**********************************************!*\
  !*** ./src/app/servicios/storage.service.ts ***!
  \**********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
class StorageService {
    constructor() { }
    getApiUrl() {
        return 'https://jwt-api-imc.herokuapp.com/';
        //return   'http://201.147.64.84:8083' 
    }
    setSession(key, obj) {
        sessionStorage.setItem(key, JSON.stringify(obj));
    }
    getSession(key) {
        const obj = sessionStorage.getItem(key);
        return obj ? JSON.parse(obj) : null;
    }
    sessionDeleteAll() {
        sessionStorage.clear();
    }
    sessionDeleteByKey(key) {
        sessionStorage.removeItem(key);
    }
    setLocal(key, obj) {
        localStorage.setItem(key, JSON.stringify(obj));
    }
    getLocal(key) {
        const obj = localStorage.getItem(key);
        return obj ? JSON.parse(obj) : null;
    }
    localDeleteAll() {
        localStorage.clear();
    }
    localDeleteByKey(key) {
        localStorage.removeItem(key);
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "K973":
/*!********************************************!*\
  !*** ./src/app/servicios/users.service.ts ***!
  \********************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class UsersService {
    constructor(http) {
        this.http = http;
        this.apiURL = 'https://jwt-api-imc.herokuapp.com/';
        /*========================================
          CRUD Methods for consuming RESTful API
        =========================================*/
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // HttpClient API post() method => Create employee
    loginUser(userApi) {
        console.log(JSON.stringify(userApi));
        return this.http.post(this.apiURL + 'api/auth/signin', JSON.stringify(userApi), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.MessageError));
    }
    registerUser(userRegisterApi) {
        console.log(JSON.stringify(userRegisterApi));
        return this.http.post(this.apiURL + 'api/auth/signup', JSON.stringify(userRegisterApi), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1));
    }
    // Error handling 
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    MessageError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            alert('Datos INCORRECTOS');
        }
        //window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "QO/d":
/*!**********************************!*\
  !*** ./src/app/models/imcapi.ts ***!
  \**********************************/
/*! exports provided: ImcApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImcApi", function() { return ImcApi; });
class ImcApi {
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'calculadora-IMC';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "VECP":
/*!************************************************************!*\
  !*** ./src/app/iniciar-sesion/iniciar-sesion.component.ts ***!
  \************************************************************/
/*! exports provided: IniciarSesionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciarSesionComponent", function() { return IniciarSesionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_usersapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/usersapi */ "zq5k");
/* harmony import */ var _servicios_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/users.service */ "K973");
/* harmony import */ var _servicios_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicios/storage.service */ "6k2k");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_inicial_navbar_inicial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar-inicial/navbar-inicial.component */ "l6vG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class IniciarSesionComponent {
    constructor(usersService, storageService, router) {
        this.usersService = usersService;
        this.storageService = storageService;
        this.router = router;
        this.result = '';
        this.nombreUsuario = '';
        this.contrasenia = '';
    }
    ngOnInit() {
    }
    iniciarSesion() {
        var mydata = new _models_usersapi__WEBPACK_IMPORTED_MODULE_1__["UsersApi"];
        if (this.nombreUsuario == "" || this.contrasenia == "") {
            alert('USUARIO Y CONTRASEÑA REQUERIDOS');
        }
        else {
            mydata.username = this.nombreUsuario;
            mydata.password = this.contrasenia;
            return this.usersService.loginUser(mydata)
                .subscribe((data) => {
                this.storageService.setSession("token", data.accessToken);
                this.result = data.accessToken;
                alert(data.accessToken);
                this.router.navigate(['usuarios']);
            });
        }
    }
}
IniciarSesionComponent.ɵfac = function IniciarSesionComponent_Factory(t) { return new (t || IniciarSesionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
IniciarSesionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IniciarSesionComponent, selectors: [["app-iniciar-sesion"]], decls: 23, vars: 3, consts: [["id", "cuerpo", 1, "row"], [1, "card-body"], [1, "text-center"], [1, "form-group"], ["id", "nombreUsuario", "type", "text", "name", "operator1", "placeholder", "Ingresa tu Nombre de Usuario", 1, "form-control", "operator1", 3, "ngModel", "ngModelChange"], ["id", "contrasenia", "type", "password", "name", "operator2", "placeholder", "Ingresa tu Contrase\u00F1a", 1, "form-control", "operator2", 3, "ngModel", "ngModelChange"], ["href", "/registrate"], ["type", "submit", "value", "Iniciar", 1, "btn", "btn-lg", "btn_spotify", "mt-3", 3, "click"], [1, "result"]], template: function IniciarSesionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nombre de usuario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IniciarSesionComponent_Template_input_ngModelChange_9_listener($event) { return ctx.nombreUsuario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IniciarSesionComponent_Template_input_ngModelChange_13_listener($event) { return ctx.contrasenia = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00BFNo tienes cuenta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Reg\u00EDstra tu cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IniciarSesionComponent_Template_input_click_20_listener() { return ctx.iniciarSesion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nombreUsuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contrasenia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result);
    } }, directives: [_navbar_inicial_navbar_inicial_component__WEBPACK_IMPORTED_MODULE_5__["NavbarInicialComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["#cuerpo[_ngcontent-%COMP%]{\n    margin-left: auto;\n    margin-right: auto;\n    width: 80%;\n}\n\n.fondo_formulario[_ngcontent-%COMP%]{\n  background-color:#000000;\n}\n\n.fondo_formulario[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\n    font-weight: bold;\n    padding: 10px;\n  }\n\n.texto_verde[_ngcontent-%COMP%]{\n  color: #ffffff;\n}\n\n.btn_spotify[_ngcontent-%COMP%]{\n  background: #000000;\n  color: #ffffff;\n  font-size: 1.5em;\n  width: 50%;\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lhci1zZXNpb24vaW5pY2lhci1zZXNpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaW5pY2lhci1zZXNpb24vaW5pY2lhci1zZXNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjdWVycG97XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5mb25kb19mb3JtdWxhcmlve1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDA7XG59XG5cbi5mb25kb19mb3JtdWxhcmlvIGgxLGg1e1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuLnRleHRvX3ZlcmRle1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5idG5fc3BvdGlmeXtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IniciarSesionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-iniciar-sesion',
                templateUrl: './iniciar-sesion.component.html',
                styleUrls: ['./iniciar-sesion.component.css']
            }]
    }], function () { return [{ type: _servicios_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }, { type: _servicios_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _imcui_imcui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imcui/imcui.component */ "wk4T");
/* harmony import */ var _app_navbar_inicial_navbar_inicial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/navbar-inicial/navbar-inicial.component */ "l6vG");
/* harmony import */ var _registrarse_registrarse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registrarse/registrarse.component */ "ewEG");
/* harmony import */ var _iniciar_sesion_iniciar_sesion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./iniciar-sesion/iniciar-sesion.component */ "VECP");
/* harmony import */ var _uiusuario_uiusuario_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uiusuario/uiusuario.component */ "l11q");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_servicios_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/servicios/storage.service */ "6k2k");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_servicios_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _imcui_imcui_component__WEBPACK_IMPORTED_MODULE_5__["IMCUIComponent"],
        _app_navbar_inicial_navbar_inicial_component__WEBPACK_IMPORTED_MODULE_6__["NavbarInicialComponent"],
        _registrarse_registrarse_component__WEBPACK_IMPORTED_MODULE_7__["RegistrarseComponent"],
        _iniciar_sesion_iniciar_sesion_component__WEBPACK_IMPORTED_MODULE_8__["IniciarSesionComponent"],
        _uiusuario_uiusuario_component__WEBPACK_IMPORTED_MODULE_9__["UIUsuarioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _imcui_imcui_component__WEBPACK_IMPORTED_MODULE_5__["IMCUIComponent"],
                    _app_navbar_inicial_navbar_inicial_component__WEBPACK_IMPORTED_MODULE_6__["NavbarInicialComponent"],
                    _registrarse_registrarse_component__WEBPACK_IMPORTED_MODULE_7__["RegistrarseComponent"],
                    _iniciar_sesion_iniciar_sesion_component__WEBPACK_IMPORTED_MODULE_8__["IniciarSesionComponent"],
                    _uiusuario_uiusuario_component__WEBPACK_IMPORTED_MODULE_9__["UIUsuarioComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                providers: [_app_servicios_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ewEG":
/*!******************************************************!*\
  !*** ./src/app/registrarse/registrarse.component.ts ***!
  \******************************************************/
/*! exports provided: RegistrarseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarseComponent", function() { return RegistrarseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_usersregisterapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/usersregisterapi */ "n7iW");
/* harmony import */ var _servicios_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/users.service */ "K973");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_inicial_navbar_inicial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar-inicial/navbar-inicial.component */ "l6vG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class RegistrarseComponent {
    constructor(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.nombre = '';
        this.nombreUsuario = '';
        this.correo = '';
        this.role = ['user'];
        this.contrasenia = '';
    }
    ngOnInit() {
    }
    registrarUsuario() {
        var mydata = new _models_usersregisterapi__WEBPACK_IMPORTED_MODULE_1__["UsersRegisterApi"];
        if (this.nombreUsuario == "" || this.contrasenia == "" || this.correo == "" || this.nombre == "") {
            alert('DATOS REQUERIDOS NO SE ACEPTAN CAMPOS VACIOS');
        }
        else {
            mydata.name = this.nombre;
            mydata.username = this.nombreUsuario;
            mydata.email = this.correo;
            mydata.role = this.role;
            mydata.password = this.contrasenia;
            this.usersService.registerUser(mydata)
                .subscribe((data) => {
            });
            alert('usuario registrado');
            this.router.navigate(['/']);
        }
    }
}
RegistrarseComponent.ɵfac = function RegistrarseComponent_Factory(t) { return new (t || RegistrarseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegistrarseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrarseComponent, selectors: [["app-registrarse"]], decls: 31, vars: 4, consts: [["id", "cuerpo", 1, "fondo", "text-white"], ["action", "#", "id", "formulario", 1, "fondo_formulario", "p-5", "container-fluid", "formulario"], [1, "pl-5", "pr-5"], [1, "form-group"], ["for", "correo", 1, "font-weight-bold"], ["type", "text", "name", "operator1", "required", "", "placeholder", "Ingresa tu Nombre", 1, "form-control", "operator1", 3, "ngModel", "ngModelChange"], ["for", "nombre", 1, "font-weight-bold"], ["type", "text", "id", "nombreUsuario", "name", "operator2", "placeholder", "Ingresa tu Nombre de Usuario", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "correo-confirm", 1, "font-weight-bold"], ["type", "email", "id", "correo", "name", "operator3", "placeholder", "nombre@example.com", 1, "form-control", "operator3", 3, "ngModel", "ngModelChange"], ["for", "contra", 1, "font-weight-bold"], ["type", "password", "id", "contrasenia", "name", "operator4", "placeholder", "Ingresa tu Contrase\u00F1a", 1, "form-control", "operator4", 3, "ngModel", "ngModelChange"], [1, "form-group", "text-center"], ["type", "submit", "value", "Registrate", 1, "btn", "btn-lg", "btn_spotify", "mt-3", 3, "click"]], template: function RegistrarseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Crea tu cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrarseComponent_Template_input_ngModelChange_10_listener($event) { return ctx.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nombre de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrarseComponent_Template_input_ngModelChange_14_listener($event) { return ctx.nombreUsuario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrarseComponent_Template_input_ngModelChange_18_listener($event) { return ctx.correo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrarseComponent_Template_input_ngModelChange_22_listener($event) { return ctx.contrasenia = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Al hacer click en Registrarte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " aceptas los Terminos y condiciones de Uso de Calculadora IMC. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrarseComponent_Template_input_click_30_listener() { return ctx.registrarUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nombreUsuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.correo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contrasenia);
    } }, directives: [_navbar_inicial_navbar_inicial_component__WEBPACK_IMPORTED_MODULE_4__["NavbarInicialComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["#cuerpo[_ngcontent-%COMP%]{\n  margin-left: auto;\n  margin-right: auto;\n  width: 80%;\n}\n\n.fondo_formulario[_ngcontent-%COMP%]{\n  background-color:#ffffff;\n  color: #000000;\n}\n\n.fondo_formulario[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\n    text-align: center;\n    font-weight: bold;\n    padding: 30px;\n  }\n\n#genero[_ngcontent-%COMP%] {\n    background-color: skyblue;\n    text-align: center;\n  }\n\n.texto_verde[_ngcontent-%COMP%]{\n  color: #000000;\n}\n\n.btn_spotify[_ngcontent-%COMP%]{\n  background: #000000;\n  color:#ffffff;\n  font-size: 1.5em;\n  width: 60%;\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmFyc2UvcmVnaXN0cmFyc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0FBR0Y7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhcnNlL3JlZ2lzdHJhcnNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY3VlcnBve1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogODAlO1xufVxuXG4uZm9uZG9fZm9ybXVsYXJpb3tcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZvbmRvX2Zvcm11bGFyaW8gaDIsaDV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gIH1cblxuI2dlbmVybyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuXG4udGV4dG9fdmVyZGV7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmJ0bl9zcG90aWZ5e1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBjb2xvcjojZmZmZmZmO1xuICBmb250LXNpemU6IDEuNWVtO1xuICB3aWR0aDogNjAlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrarseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registrarse',
                templateUrl: './registrarse.component.html',
                styleUrls: ['./registrarse.component.css']
            }]
    }], function () { return [{ type: _servicios_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "l11q":
/*!**************************************************!*\
  !*** ./src/app/uiusuario/uiusuario.component.ts ***!
  \**************************************************/
/*! exports provided: UIUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIUsuarioComponent", function() { return UIUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _IMCHombre_IMCHombre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IMCHombre/IMCHombre */ "/q82");
/* harmony import */ var _IMCMujer_IMCMujer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IMCMujer/IMCMujer */ "xeKx");
/* harmony import */ var _models_imcapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/imcapi */ "QO/d");
/* harmony import */ var _servicios_imc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/imc.service */ "xb9M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");














function UIUsuarioComponent_tr_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const peso_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peso_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peso_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peso_r1.imc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peso_r1.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peso_r1.peso_min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](peso_r1.peso_max);
} }
class UIUsuarioComponent {
    /*   historial=[];
     */
    constructor(imcService) {
        this.imcService = imcService;
        this.imc = 0;
        this.pesomin = "";
        this.pesomax = "";
        this.operadorGenero = "";
        this.operadorEdad = 0;
        this.operadorEstatura = 0;
        this.operadorPeso = 0;
        this.Estado = "";
    }
    ngOnInit() {
        this.mostrar();
    }
    calculaIMC() {
        if (this.operadorGenero == "hombre") {
            this.imc = Object(_IMCHombre_IMCHombre__WEBPACK_IMPORTED_MODULE_1__["IMCHombre"])(this.operadorPeso, this.operadorEstatura);
            this.pesomin = Object(_IMCHombre_IMCHombre__WEBPACK_IMPORTED_MODULE_1__["pesoMinHombre"])(this.operadorEdad, this.operadorEstatura);
            this.pesomax = Object(_IMCHombre_IMCHombre__WEBPACK_IMPORTED_MODULE_1__["pesoMaxHombre"])(this.operadorEdad, this.operadorEstatura);
            this.Estado = Object(_IMCHombre_IMCHombre__WEBPACK_IMPORTED_MODULE_1__["EstadoHombre"])(this.imc);
            this.result = `IMC: ${this.imc}\nEstado (Adultos): ${this.Estado}\n\nPeso Mínimo ideal según tu edad e IMC: ${this.pesomin}\nPeso Máximo ideal según tu edad e IMC: ${this.pesomax}`;
        }
        else {
            this.imc = Object(_IMCMujer_IMCMujer__WEBPACK_IMPORTED_MODULE_2__["IMCMujer"])(this.operadorPeso, this.operadorEstatura);
            this.pesomin = Object(_IMCMujer_IMCMujer__WEBPACK_IMPORTED_MODULE_2__["pesoMinMujer"])(this.operadorEdad, this.operadorEstatura);
            this.pesomax = Object(_IMCMujer_IMCMujer__WEBPACK_IMPORTED_MODULE_2__["pesoMaxMujer"])(this.operadorEdad, this.operadorEstatura);
            this.Estado = Object(_IMCMujer_IMCMujer__WEBPACK_IMPORTED_MODULE_2__["EstadoMujer"])(this.imc);
            this.result = `IMC: ${this.imc}\nEstado (Adultos): ${this.Estado}\n\nPeso Mínimo ideal según tu edad e IMC: ${this.pesomin}\nPeso Máximo ideal según tu edad e IMC: ${this.pesomax}`;
        }
    }
    guardarIMC() {
        var mydata = new _models_imcapi__WEBPACK_IMPORTED_MODULE_3__["ImcApi"];
        mydata.imc = String(this.imc);
        mydata.estado = this.Estado;
        mydata.peso_min = this.pesomin;
        mydata.peso_max = this.pesomax;
        mydata.username = "victor";
        mydata.id = 6;
        this.mostrar();
        return this.imcService.createImc(mydata)
            .subscribe((data) => {
            alert(JSON.stringify(data));
        });
    }
    mostrar() {
        return this.imcService.getPesos()
            .subscribe(data => this.imcApi$ = data);
    }
}
UIUsuarioComponent.ɵfac = function UIUsuarioComponent_Factory(t) { return new (t || UIUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_imc_service__WEBPACK_IMPORTED_MODULE_4__["ImcService"])); };
UIUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UIUsuarioComponent, selectors: [["app-uiusuario"]], decls: 99, vars: 6, consts: [[1, "contenedor", "calculadora-inputs"], [1, "title"], [1, "contenido-calculadora-inputs"], ["id", "inputs-operators", 1, "input-group"], ["id", "operadorGenero", "type", "text", "name", "operadorGenero", "placeholder", "hombre/mujer", 1, "form-control", "operadorGenero", 3, "ngModel", "ngModelChange"], ["id", "operadorEdad", "type", "number", "name", "operadorEdad", 1, "form-control", "operadorEdad", 3, "ngModel", "ngModelChange"], [1, "input-group"], ["id", "operadorEstatura", "type", "number", "name", "operadorEstatura", 1, "form-control", "operadorEstatura", 3, "ngModel", "ngModelChange"], ["id", "operadorPeso", "type", "number", "name", "operadorPeso", 1, "form-control", "operadorPeso", 3, "ngModel", "ngModelChange"], [1, "operacionesIMC"], ["type", "button", 1, "btn", "btn-primary", "calculaIMC-button", 3, "click"], ["id", "guardarIMC", "type", "button", 1, "btn", "btn-primary", "calculaIMC-button", 3, "click"], [1, "contenedor", "resultados"], [1, "contenido-resultado"], ["id", "result-operations", 1, "input-group"], [1, "form-group"], ["for", "lblresultado"], ["id", "result", "id", "lblresultado", "rows", "3", 1, "form-control"], [1, "progress-imc"], [1, "items-imc"], ["href", "#"], [1, "progress", "progress-striped", "active"], [1, "progress-bar", "peso-bajo", 2, "width", "16.6%"], [1, "progress-bar", "peso-normal", 2, "width", "16.6%"], [1, "progress-bar", "sobrepeso", 2, "width", "16.6%"], [1, "progress-bar", "obecidad-1", 2, "width", "16.6%"], [1, "progress-bar", "obecidad-2", 2, "width", "16.8%"], [1, "progress-bar", "obecidad-3", 2, "width", "16.7%"], [1, "principal"], ["id", "historial", 1, "table"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"]], template: function UIUsuarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ingresa los datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Genero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UIUsuarioComponent_Template_input_ngModelChange_10_listener($event) { return ctx.operadorGenero = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Edad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UIUsuarioComponent_Template_input_ngModelChange_16_listener($event) { return ctx.operadorEdad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Estatura (Metros)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UIUsuarioComponent_Template_input_ngModelChange_22_listener($event) { return ctx.operadorEstatura = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Peso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UIUsuarioComponent_Template_input_ngModelChange_28_listener($event) { return ctx.operadorPeso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UIUsuarioComponent_Template_button_click_30_listener() { return ctx.calculaIMC(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Calcula tu IMC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UIUsuarioComponent_Template_button_click_32_listener() { return ctx.guardarIMC(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Guarda tu Resultado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Resultado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Tu resultado es : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "IMC +18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Bajo peso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Peso normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sobrepeso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Obesidad 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Obesidad 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Obesidad morbida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "0,0 - 18.4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "18.5 - 24.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "25.0 - 29.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "30.0 - 34.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "35.0 - 39.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "40+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h1", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Registros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "thead", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "IMC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Estado Actual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Peso Minimo Ideal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Peso Maximo Ideal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, UIUsuarioComponent_tr_98_Template, 13, 6, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.operadorGenero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.operadorEdad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.operadorEstatura);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.operadorPeso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imcApi$);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["#historial[_ngcontent-%COMP%]{\n    padding: 30px;\n    font-size: 16px;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.principal[_ngcontent-%COMP%]{\n    text-align: center;\n    font-size: 25px;\n    font-weight: bold;\n    padding: 20px;\n}\n\n.operacionesIMC[_ngcontent-%COMP%]{\n    padding: 30px;\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n}\n\n.operacionesIMC[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    height: 40px;\n}\n\n.peso-bajo[_ngcontent-%COMP%]{\n    Background:#01b520;\n\n}\n\n.peso-normal[_ngcontent-%COMP%]{\n    Background: #50df2f;\n\n}\n\n.sobrepeso[_ngcontent-%COMP%]{\n    Background: #ffff01;\n\n}\n\n.obecidad-1[_ngcontent-%COMP%]{\n    Background: #ffc801;\n\n}\n\n.obecidad-2[_ngcontent-%COMP%]{\n    Background: #ff9000;\n\n}\n\n.obecidad-3[_ngcontent-%COMP%]{\n    Background: #ff2100;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWl1c3VhcmlvL3VpdXN1YXJpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLG1CQUFtQjs7QUFFdkIiLCJmaWxlIjoic3JjL2FwcC91aXVzdWFyaW8vdWl1c3VhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGlzdG9yaWFse1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucHJpbmNpcGFse1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLm9wZXJhY2lvbmVzSU1De1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLm9wZXJhY2lvbmVzSU1DIGJ1dHRvbntcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5wZXNvLWJham97XG4gICAgQmFja2dyb3VuZDojMDFiNTIwO1xuXG59XG5cbi5wZXNvLW5vcm1hbHtcbiAgICBCYWNrZ3JvdW5kOiAjNTBkZjJmO1xuXG59XG5cbi5zb2JyZXBlc297XG4gICAgQmFja2dyb3VuZDogI2ZmZmYwMTtcblxufVxuXG4ub2JlY2lkYWQtMXtcbiAgICBCYWNrZ3JvdW5kOiAjZmZjODAxO1xuXG59XG5cbi5vYmVjaWRhZC0ye1xuICAgIEJhY2tncm91bmQ6ICNmZjkwMDA7XG5cbn1cblxuLm9iZWNpZGFkLTN7XG4gICAgQmFja2dyb3VuZDogI2ZmMjEwMDtcblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UIUsuarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uiusuario',
                templateUrl: './uiusuario.component.html',
                styleUrls: ['./uiusuario.component.css']
            }]
    }], function () { return [{ type: _servicios_imc_service__WEBPACK_IMPORTED_MODULE_4__["ImcService"] }]; }, null); })();


/***/ }),

/***/ "l6vG":
/*!************************************************************!*\
  !*** ./src/app/navbar-inicial/navbar-inicial.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarInicialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarInicialComponent", function() { return NavbarInicialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarInicialComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarInicialComponent.ɵfac = function NavbarInicialComponent_Factory(t) { return new (t || NavbarInicialComponent)(); };
NavbarInicialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarInicialComponent, selectors: [["app-navbar-inicial"]], decls: 13, vars: 0, consts: [["id", "navprincipal", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLink", "/landingPage", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarColor02", "aria-controls", "navbarColor02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarColor02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "/registrate", 1, "nav-link"], ["routerLink", "/iniciarsesion", 1, "nav-link"]], template: function NavbarInicialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Calculadora IMC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reg\u00EDstrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Iniciar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%]{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyLWluaWNpYWwvbmF2YmFyLWluaWNpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci1pbmljaWFsL25hdmJhci1pbmljaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarInicialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar-inicial',
                templateUrl: './navbar-inicial.component.html',
                styleUrls: ['./navbar-inicial.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "n7iW":
/*!********************************************!*\
  !*** ./src/app/models/usersregisterapi.ts ***!
  \********************************************/
/*! exports provided: UsersRegisterApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRegisterApi", function() { return UsersRegisterApi; });
class UsersRegisterApi {
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _imcui_imcui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imcui/imcui.component */ "wk4T");
/* harmony import */ var _registrarse_registrarse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrarse/registrarse.component */ "ewEG");
/* harmony import */ var _iniciar_sesion_iniciar_sesion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iniciar-sesion/iniciar-sesion.component */ "VECP");
/* harmony import */ var _uiusuario_uiusuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uiusuario/uiusuario.component */ "l11q");








const routes = [
    {
        path: "",
        redirectTo: "landingPage",
        pathMatch: 'full'
    },
    {
        path: "landingPage",
        component: _imcui_imcui_component__WEBPACK_IMPORTED_MODULE_2__["IMCUIComponent"]
    },
    {
        path: "registrate",
        component: _registrarse_registrarse_component__WEBPACK_IMPORTED_MODULE_3__["RegistrarseComponent"]
    },
    {
        path: "iniciarsesion",
        component: _iniciar_sesion_iniciar_sesion_component__WEBPACK_IMPORTED_MODULE_4__["IniciarSesionComponent"]
    },
    {
        path: "usuarios",
        component: _uiusuario_uiusuario_component__WEBPACK_IMPORTED_MODULE_5__["UIUsuarioComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wk4T":
/*!******************************************!*\
  !*** ./src/app/imcui/imcui.component.ts ***!
  \******************************************/
/*! exports provided: IMCUIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMCUIComponent", function() { return IMCUIComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _IMCHombre_IMCHombre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IMCHombre/IMCHombre */ "/q82");
/* harmony import */ var _IMCMujer_IMCMujer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IMCMujer/IMCMujer */ "xeKx");
/* harmony import */ var _navbar_inicial_navbar_inicial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar-inicial/navbar-inicial.component */ "l6vG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












class IMCUIComponent {
    constructor() {
        this.pesomin = "";
        this.pesomax = "";
        this.operadorGenero = "";
        this.operadorEdad = 0;
        this.operadorEstatura = 0;
        this.operadorPeso = 0;
    }
    ngOnInit() {
    }
    calculaIMC() {
        let myresult = 0;
        if (this.operadorGenero == "hombre") {
            myresult = Object(_IMCHombre_IMCHombre__WEBPACK_IMPORTED_MODULE_1__["IMCHombre"])(this.operadorPeso, this.operadorEstatura);
            this.pesomin = Object(_IMCHombre_IMCHombre__WEBPACK_IMPORTED_MODULE_1__["pesoMinHombre"])(this.operadorEdad, this.operadorEstatura);
            this.pesomax = Object(_IMCHombre_IMCHombre__WEBPACK_IMPORTED_MODULE_1__["pesoMaxHombre"])(this.operadorEdad, this.operadorEstatura);
            this.result = `IMC: ${myresult}\nEstado (Adultos): ${Object(_IMCHombre_IMCHombre__WEBPACK_IMPORTED_MODULE_1__["EstadoHombre"])(myresult)}\n\nPeso Mínimo ideal según tu edad e IMC: ${this.pesomin}\nPeso Máximo ideal según tu edad e IMC: ${this.pesomax}`;
        }
        else {
            myresult = Object(_IMCMujer_IMCMujer__WEBPACK_IMPORTED_MODULE_2__["IMCMujer"])(this.operadorPeso, this.operadorEstatura);
            this.pesomin = Object(_IMCMujer_IMCMujer__WEBPACK_IMPORTED_MODULE_2__["pesoMinMujer"])(this.operadorEdad, this.operadorEstatura);
            this.pesomax = Object(_IMCMujer_IMCMujer__WEBPACK_IMPORTED_MODULE_2__["pesoMaxMujer"])(this.operadorEdad, this.operadorEstatura);
            this.result = `IMC: ${myresult}\nEstado (Adultos): ${Object(_IMCMujer_IMCMujer__WEBPACK_IMPORTED_MODULE_2__["EstadoMujer"])(myresult)}\n\nPeso Mínimo ideal según tu edad e IMC: ${this.pesomin}\nPeso Máximo ideal según tu edad e IMC: ${this.pesomax}`;
        }
    }
}
IMCUIComponent.ɵfac = function IMCUIComponent_Factory(t) { return new (t || IMCUIComponent)(); };
IMCUIComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IMCUIComponent, selectors: [["app-imcui"]], decls: 124, vars: 5, consts: [[1, "info-header"], [1, "wave", 2, "height", "150px", "overflow", "hidden"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none", 2, "height", "100%", "width", "100%"], ["d", "M-17.77,59.70 C139.67,148.52 364.27,-48.84 500.84,66.61 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none", "fill", "#fff"], [1, "contenedor", "calculadora-inputs"], [1, "title"], [1, "contenido-calculadora-inputs"], ["id", "inputs-operators", 1, "input-group"], ["id", "operadorGenero", "type", "text", "name", "operadorGenero", "placeholder", "hombre/mujer", 1, "form-control", "operadorGenero", 3, "ngModel", "ngModelChange"], ["id", "operadorEdad", "type", "number", "name", "operadorEdad", 1, "form-control", "operadorEdad", 3, "ngModel", "ngModelChange"], [1, "input-group"], ["id", "operadorEstatura", "type", "number", "name", "operadorEstatura", 1, "form-control", "operadorEstatura", 3, "ngModel", "ngModelChange"], ["id", "operadorPeso", "type", "number", "name", "operadorPeso", 1, "form-control", "operadorPeso", 3, "ngModel", "ngModelChange"], ["id", "btn-operations", 1, "btn-group", "btn-group-lg"], ["type", "button", 1, "btn", "btn-primary", "calculaIMC-button", 2, "text-align", "center", 3, "click"], [1, "contenedor", "resultados"], [1, "contenido-resultado"], ["id", "result-operations", 1, "input-group"], [1, "form-group"], ["for", "lblresultado"], ["id", "result", "id", "lblresultado", "rows", "3", 1, "form-control"], [1, "progress-imc"], [1, "items-imc"], ["href", "#"], [1, "progress", "progress-striped", "active"], [1, "progress-bar", "peso-bajo", 2, "width", "16.6%"], [1, "progress-bar", "peso-normal", 2, "width", "16.6%"], [1, "progress-bar", "sobrepeso", 2, "width", "16.6%"], [1, "progress-bar", "obecidad-1", 2, "width", "16.6%"], [1, "progress-bar", "obecidad-2", 2, "width", "16.8%"], [1, "progress-bar", "obecidad-3", 2, "width", "16.7%"], [1, "progress-bar", "sobrepeso", 2, "width", "16.7%"]], template: function IMCUIComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-inicial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Calcula tu IMC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Obt\u00E9n mas informaci\u00F3n de inter\u00E9s a trav\u00E9s de la secci\u00F3n conoce m\u00E1s en nuestra barra de navegaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ingresa los datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Genero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IMCUIComponent_Template_input_ngModelChange_20_listener($event) { return ctx.operadorGenero = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Edad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IMCUIComponent_Template_input_ngModelChange_26_listener($event) { return ctx.operadorEdad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Estatura (Metros)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IMCUIComponent_Template_input_ngModelChange_32_listener($event) { return ctx.operadorEstatura = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Peso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IMCUIComponent_Template_input_ngModelChange_38_listener($event) { return ctx.operadorPeso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IMCUIComponent_Template_button_click_40_listener() { return ctx.calculaIMC(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Calcula tu IMC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Resultado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Tu resultado es : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "IMC Hombres +18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Bajo peso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Peso normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Sobrepeso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Obesidad 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Obesidad 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Obesidad morbida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "0,0 - 18.4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "18.5 - 24.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "25.0 - 29.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "30.0 - 34.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "35.0 - 39.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "40+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "IMC Mujeres +18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Bajo peso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Peso normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Sobrepeso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Obesidad 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Obesidad 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Obesidad morbida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "0,0 - 18.4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "18.5 - 24.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "25.0 - 29.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "30.0 - 34.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "35.0 - 39.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "40+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.operadorGenero);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.operadorEdad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.operadorEstatura);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.operadorPeso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result);
    } }, directives: [_navbar_inicial_navbar_inicial_component__WEBPACK_IMPORTED_MODULE_3__["NavbarInicialComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: [".peso-bajo[_ngcontent-%COMP%]{\n    Background:#01b520;\n\n}\n\n.peso-normal[_ngcontent-%COMP%]{\n    Background: #50df2f;\n\n}\n\n.sobrepeso[_ngcontent-%COMP%]{\n    Background: #ffff01;\n\n}\n\n.obecidad-1[_ngcontent-%COMP%]{\n    Background: #ffc801;\n\n}\n\n.obecidad-2[_ngcontent-%COMP%]{\n    Background: #ff9000;\n\n}\n\n.obecidad-3[_ngcontent-%COMP%]{\n    Background: #ff2100;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1jdWkvaW1jdWkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2QiIsImZpbGUiOiJzcmMvYXBwL2ltY3VpL2ltY3VpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVzby1iYWpve1xuICAgIEJhY2tncm91bmQ6IzAxYjUyMDtcblxufVxuXG4ucGVzby1ub3JtYWx7XG4gICAgQmFja2dyb3VuZDogIzUwZGYyZjtcblxufVxuXG4uc29icmVwZXNve1xuICAgIEJhY2tncm91bmQ6ICNmZmZmMDE7XG5cbn1cblxuLm9iZWNpZGFkLTF7XG4gICAgQmFja2dyb3VuZDogI2ZmYzgwMTtcblxufVxuXG4ub2JlY2lkYWQtMntcbiAgICBCYWNrZ3JvdW5kOiAjZmY5MDAwO1xuXG59XG5cbi5vYmVjaWRhZC0ze1xuICAgIEJhY2tncm91bmQ6ICNmZjIxMDA7XG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IMCUIComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-imcui',
                templateUrl: './imcui.component.html',
                styleUrls: ['./imcui.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xb9M":
/*!******************************************!*\
  !*** ./src/app/servicios/imc.service.ts ***!
  \******************************************/
/*! exports provided: ImcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImcService", function() { return ImcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _servicios_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/storage.service */ "6k2k");







class ImcService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.apiURL = 'https://jwt-api-imc.herokuapp.com/';
        /*========================================
          CRUD Methods for consuming RESTful API
        =========================================*/
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.storageService.getSession("token")
            })
        };
    }
    createImc(imcApi) {
        console.log(JSON.stringify(imcApi));
        console.log(JSON.stringify(this.httpOptions));
        return this.http.post(this.apiURL + 'calculator/pesos/', JSON.stringify(imcApi), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.MessageError));
    }
    /*   getImcs() {
        console.log( this.storageService.getSession("userData").token);
        return this.http.get<any>(this.apiURL+'calculator/pesos/',this.httpOptions)
        .pipe(
        retry(1),
        catchError(this.MessageError)
        )
      } */
    /*   getGeneros(){
        return this.http.get<any>(this.apiURL + 'calculator/pesos/');
      } */
    // Error handling 
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    MessageError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            alert(errorMessage);
        }
        //window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
    getPesos() {
        return this.http.get(this.apiURL + 'calculator/pesos', this.httpOptions);
    }
}
ImcService.ɵfac = function ImcService_Factory(t) { return new (t || ImcService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_servicios_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"])); };
ImcService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImcService, factory: ImcService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImcService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _servicios_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "xeKx":
/*!**************************************!*\
  !*** ./src/app/IMCMujer/IMCMujer.ts ***!
  \**************************************/
/*! exports provided: EstadoMujer, IMCMujer, pesoMinMujer, pesoMaxMujer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoMujer", function() { return EstadoMujer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMCMujer", function() { return IMCMujer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pesoMinMujer", function() { return pesoMinMujer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pesoMaxMujer", function() { return pesoMaxMujer; });
function EstadoMujer(IMC) {
    let rest = '';
    if (IMC < 18.5) {
        rest = `peso bajo`;
    }
    else {
        if (IMC >= 18.5 && IMC <= 24.9) {
            rest = `peso normal`;
        }
        else {
            if (IMC >= 25.0 && IMC <= 29.9) {
                rest = `sobrepeso`;
            }
            else {
                if (IMC >= 30.0 && IMC <= 34.9) {
                    rest = `obesidad grado 1`;
                }
                else {
                    if (IMC >= 35.0 && IMC <= 39.9) {
                        rest = `obesidad grado 2`;
                    }
                    else {
                        rest = `obesidad grado 3 (obesidad mórbida)`;
                    }
                }
            }
        }
    }
    return rest;
}
function IMCMujer(peso, estatura) {
    let IMC = peso / (Math.pow(estatura, 2));
    return parseFloat(IMC.toFixed(2));
}
function pesoMinMujer(edad, estatura) {
    let rest;
    if (edad >= 10 && edad <= 14) {
        rest = Math.pow(estatura, 2) * 15;
    }
    else {
        if (edad >= 15 && edad <= 18) {
            rest = Math.pow(estatura, 2) * 16.5;
        }
        else {
            if (edad >= 19) {
                rest = Math.pow(estatura, 2) * 18.5;
            }
        }
    }
    return `${rest.toFixed(2)} kg`;
}
function pesoMaxMujer(edad, estatura) {
    let rest;
    if (edad >= 10 && edad <= 14) {
        rest = Math.pow(estatura, 2) * 18.9;
    }
    else {
        if (edad >= 15 && edad <= 18) {
            rest = Math.pow(estatura, 2) * 21.7;
        }
        else {
            if (edad >= 19) {
                rest = Math.pow(estatura, 2) * 24.9;
            }
        }
    }
    return `${rest.toFixed(2)} kg`;
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zq5k":
/*!************************************!*\
  !*** ./src/app/models/usersapi.ts ***!
  \************************************/
/*! exports provided: UsersApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersApi", function() { return UsersApi; });
class UsersApi {
}


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map