(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ProjectTaskNew\StarWars\src\main.ts */"zUnb");


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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    GetStart() {
        this.router.navigate(["planets"]);
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [[1, "home_page"], [1, "row", "m-0", "justify-content-center"], [1, "col-xl-6", "col-lg-8", "col-md-8", "col-sm-11", "col-11"], [1, "home_head"], [1, "btn", "startBtn", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "WELCOME TO STAR WARS UNIVERSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() { return ctx.GetStart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Get Planets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".home_page[_ngcontent-%COMP%] {\n  height: 88.3vh;\n  background-image: url('home.jpg') !important;\n  background-size: cover;\n  padding-top: 13%;\n  text-align: center;\n}\n\n.home_page[_ngcontent-%COMP%]:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: #000033a4;\n  transition: background-color 0.9s;\n}\n\n.home_head[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 40px;\n  font-family: cursive;\n  font-weight: 600;\n  line-height: 65px;\n  margin-bottom: 20px;\n  position: relative;\n  letter-spacing: 1.5px;\n}\n\n.startBtn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #000033;\n  width: 160px;\n  height: 50px;\n  opacity: 0.7;\n  border: 1px solid #000;\n  transition: 0.9s;\n  position: relative;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  font-size: 17px;\n  font-family: cursive;\n}\n\n.startBtn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  opacity: 1;\n  box-shadow: 3px 5px 22px 5px rgba(2, 0, 110, 0.418);\n}\n\n@media only screen and (max-width: 991px) {\n  .home_page[_ngcontent-%COMP%] {\n    padding-top: 16%;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .home_page[_ngcontent-%COMP%] {\n    padding-top: 20%;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .home_page[_ngcontent-%COMP%] {\n    padding-top: 32%;\n  }\n\n  .home_head[_ngcontent-%COMP%] {\n    font-size: 35px;\n    line-height: 50px;\n  }\n}\n\n@media only screen and (max-width: 400px) {\n  .home_head[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO0FBQ0o7O0FBR0E7RUFDSTtJQUNJLGdCQUFBO0VBQU47QUFDRjs7QUFJQTtFQUNJO0lBQ0ksZ0JBQUE7RUFGTjtBQUNGOztBQUtBO0VBQ0k7SUFDSSxnQkFBQTtFQUhOOztFQU1FO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VBSE47QUFDRjs7QUFNQTtFQUVJO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VBTE47QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVfcGFnZXtcclxuICAgIGhlaWdodDogODguM3ZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogICB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUuanBnXCIpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIDtcclxuICAgIHBhZGRpbmctdG9wOiAxMyU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcclxufVxyXG4uaG9tZV9wYWdlOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDMzYTQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC45cztcclxuICB9XHJcbi5ob21lX2hlYWR7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuXHJcbn1cclxuXHJcbi5zdGFydEJ0bntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAzMztcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjlzO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG5cclxufVxyXG4uc3RhcnRCdG46aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDVweCAyMnB4IDVweCByZ2JhKDIsIDAsIDExMCwgMC40MTgpIFxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLmhvbWVfcGFnZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTYlO1xyXG4gICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuaG9tZV9wYWdle1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICAgXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmhvbWVfcGFnZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzIlO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgLmhvbWVfaGVhZHtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIFxyXG4gICAgLmhvbWVfaGVhZHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "H9vK":
/*!********************************************!*\
  !*** ./src/app/services/server.service.ts ***!
  \********************************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ServerService {
    constructor(http) {
        this.http = http;
    }
    callService(apiUrl) {
        return this.http.get(apiUrl);
    }
}
ServerService.ɵfac = function ServerService_Factory(t) { return new (t || ServerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ServerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServerService, factory: ServerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KdCo":
/*!*********************************************************!*\
  !*** ./src/app/components/planets/planets.component.ts ***!
  \*********************************************************/
/*! exports provided: PlanetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsComponent", function() { return PlanetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/server.service */ "H9vK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PlanetsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlanetsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Climate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Population ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Terrain ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanetsComponent_div_6_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toResidents(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Residents ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.climate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.population, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.terrain, "");
} }
class PlanetsComponent {
    constructor(router, serverservice, activatedRoute) {
        this.router = router;
        this.serverservice = serverservice;
        this.activatedRoute = activatedRoute;
        this.page = 1;
        this.planets = [];
        this.loading = true;
        this.activatedRoute.queryParams.subscribe((params) => {
            if (params["page"]) {
                this.page = params["page"];
            }
        });
    }
    ngOnInit() {
        this.apiUrl = "https://swapi.dev/api/planets/?page=" + this.page;
        this.getData();
    }
    //To get next page data
    nextPage() {
        this.page++;
        this.apiUrl = this.planets.next;
        this.getData();
    }
    //To get previous page data
    prevPage() {
        this.page--;
        this.apiUrl = this.planets.previous;
        this.getData();
    }
    //To redirect to residents list page
    toResidents(resdata) {
        let url = resdata.url.split("/");
        const id = url[url.length - 2];
        this.router.navigate(["residents"], { queryParams: {
                planetId: id, page: this.page
            }, });
    }
    //To get planet data
    getData() {
        this.loading = true;
        this.serverservice.callService(this.apiUrl).subscribe((data) => {
            this.loading = false;
            console.log(data);
            this.planets = data;
            this.FstPageData = this.planets.results;
        });
    }
}
PlanetsComponent.ɵfac = function PlanetsComponent_Factory(t) { return new (t || PlanetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
PlanetsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanetsComponent, selectors: [["app-planets"]], decls: 18, vars: 7, consts: [[1, "plan_page"], ["class", "spinner", 4, "ngIf"], [1, "page", 3, "hidden"], [1, "main_head"], [1, "row", "m-0", "justify-content-center"], ["class", "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ", 4, "ngFor", "ngForOf"], [1, "nextContent", 3, "hidden"], [1, "col-xl-3", "col-lg-3", "col-md-4", "col-sm-5", "col-7", "page_col"], [1, "pagination"], [1, "btn", "select_btns", 3, "disabled", "click"], [1, "fa", "fa-chevron-left"], [1, "page_txt"], [1, "fa", "fa-chevron-right"], [1, "spinner"], ["src", "assets/images/spin.gif"], [1, "col-xl-3", "col-lg-4", "col-md-6", "col-sm-6", "col-12"], [1, "planet_card"], [1, "name_head", "text-center"], [1, "row", "m-0", "content_row"], [1, "col-12", "text-start"], [1, "text"], [1, "value"], [1, "col-12", "text-end"], [1, "value", "long_text"], ["href", "javascript:void(0)", 1, "res_link", 3, "click"], [1, "fa", "fa-angle-double-right", "action_icon"]], template: function PlanetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlanetsComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Star war planets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlanetsComponent_div_6_Template, 23, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanetsComponent_Template_button_click_11_listener() { return ctx.prevPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanetsComponent_Template_button_click_16_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.FstPageData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.planets.previous == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.planets.next == null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".planet_card[_ngcontent-%COMP%] {\n  min-height: 205px;\n  margin-top: 20px;\n  background: #FDFDFD 0% 0% no-repeat padding-box;\n  box-shadow: 0px 0px 15px #00000029;\n  border-radius: 15px;\n  padding: 10px 15px;\n  transition: 0.9s;\n}\n\n.planet_card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n}\n\n.name_head[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-size: 17px;\n  font-family: \"Proxima_Nova_Bold\";\n}\n\n.plan_page[_ngcontent-%COMP%] {\n  height: 87vh;\n}\n\n.page[_ngcontent-%COMP%], .nextContent[_ngcontent-%COMP%] {\n  background-color: #ebe6e675;\n  padding: 20px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.text[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  line-height: 15px;\n}\n\n.value[_ngcontent-%COMP%] {\n  line-height: 21px;\n  margin-bottom: 0px;\n  font-family: \"Proxima_Nova_Bold\";\n}\n\n.long_text[_ngcontent-%COMP%] {\n  min-height: 42px;\n  margin-bottom: 5px !important;\n}\n\n.res_link[_ngcontent-%COMP%] {\n  color: #071797;\n  text-decoration: none;\n  font-weight: 700;\n  text-align: right;\n  display: block;\n  margin-right: 10px;\n}\n\n.action_icon[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  padding-left: 5px;\n}\n\n.select_btns[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #000033;\n  font-size: 15px;\n  width: 50px;\n  border: 2px solid #000033;\n  height: 50px;\n}\n\n.select_btns[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 22px;\n  padding: 0 3px 0 3px;\n}\n\n.page_txt[_ngcontent-%COMP%] {\n  color: #000033;\n  background: #fff;\n  border: 2px solid #000033;\n  width: 50px;\n  height: 50px;\n  border-radius: 5px;\n  margin: 0 20px;\n}\n\n.content_row[_ngcontent-%COMP%] {\n  margin-top: 15px !important;\n}\n\n.main_head[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Proxima_Nova_Bold\";\n  margin-bottom: -7px;\n  text-align: center;\n}\n\n.page_col[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n.page_txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 7px 0px;\n  margin-bottom: 0;\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwbGFuZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksaUJBQUE7RUFDQSxnQkFBQTtFQUVBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7QUFGSjs7QUFJQTtFQUNJLHNCQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUVBO0VBRUksWUFBQTtBQUFKOztBQUdBO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0FBQUo7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0Qsa0JBQUE7RUFFQyxnQ0FBQTtBQUNKOztBQUNBO0VBQ0MsZ0JBQUE7RUFDQSw2QkFBQTtBQUVEOztBQUFBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSUo7O0FBREE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUVBLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNDLDJCQUFBO0FBQ0Q7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFFSSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBR0oiLCJmaWxlIjoicGxhbmV0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFuZXRfY2FyZHtcclxuICAgXHJcbiAgICBtaW4taGVpZ2h0OiAyMDVweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI0ZERkRGRCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggIzAwMDAwMDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOi45cztcclxufVxyXG4ucGxhbmV0X2NhcmQ6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4wOCk7XHJcbn1cclxuLm5hbWVfaGVhZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYV9Ob3ZhX0JvbGQnO1xyXG59XHJcbi5wbGFuX3BhZ2Vcclxue1xyXG4gICAgaGVpZ2h0OiA4N3ZoO1xyXG4gICAgXHJcbn1cclxuLnBhZ2UgLC5uZXh0Q29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmU2ZTY3NTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnNwaW5uZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi50ZXh0e1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgXHJcbn1cclxuLnZhbHVle1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYV9Ob3ZhX0JvbGQnO1xyXG59XHJcbi5sb25nX3RleHR7XHJcbiBtaW4taGVpZ2h0OiA0MnB4O1xyXG4gbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlc19saW5re1xyXG4gICAgY29sb3I6ICMwNzE3OTc7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uYWN0aW9uX2ljb257XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcblxyXG59XHJcbi5zZWxlY3RfYnRuc3tcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAzMztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAzMztcclxuICAgIGhlaWdodDogNTBweDtcclxuXHJcbn1cclxuLnNlbGVjdF9idG5zIC5mYXtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHBhZGRpbmc6IDAgM3B4IDAgM3B4O1xyXG59XHJcblxyXG4ucGFnZV90eHR7XHJcbiAgICBjb2xvcjogIzAwMDAzMztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgIFxyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAzMztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG5cclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC8vd2lkdGg6IDYwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgXHJcbn1cclxuLmNvbnRlbnRfcm93e1xyXG4gbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYWluX2hlYWR7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQcm94aW1hX05vdmFfQm9sZFwiO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGFnZV9jb2xcclxue1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbn1cclxuLnBhZ2VfdHh0IHB7XHJcbiAgICBwYWRkaW5nOiA3cHggMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "PZm/":
/*!*************************************************************!*\
  !*** ./src/app/components/residents/residents.component.ts ***!
  \*************************************************************/
/*! exports provided: ResidentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentsComponent", function() { return ResidentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/server.service */ "H9vK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ResidentsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResidentsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mass");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.data.gender, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.data.height, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.data.mass, " ");
} }
function ResidentsComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Residents Here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ResidentsComponent {
    constructor(activatedRoute, router, serverservice) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.serverservice = serverservice;
        this.apiUrl = "https://swapi.dev/api/planets/";
        this.loading = true;
        this.resArray = [];
        this.ResArray = [];
        this.activatedRoute.queryParams.subscribe((params) => {
            this.planetId = params["planetId"];
            this.page = params["page"];
        });
    }
    ngOnInit() {
        this.getResidents();
    }
    //To get residence list of planet
    getResidents() {
        this.serverservice.callService(this.apiUrl + this.planetId).subscribe((data) => {
            var DataAr = data.residents;
            if (DataAr.length > 0) {
                for (var i = 0; i < DataAr.length; i++) {
                    var url = DataAr[i].split("/");
                    var id = url[url.length - 2];
                    this.getRes(DataAr[i], id);
                }
                setTimeout(() => {
                    this.resArray.sort(function (a, b) {
                        return a.id - b.id;
                    });
                    this.ResArray = this.resArray;
                    this.loading = false;
                }, 800);
            }
            else {
                this.loading = false;
            }
        });
    }
    //To get residence data
    getRes(element, id) {
        this.serverservice.callService(element).subscribe((data) => {
            this.resArray.push({
                id: id,
                data: data
            });
        });
    }
    //Back to planet page
    backTo() {
        this.router.navigate(["planets"], { queryParams: {
                page: this.page
            }, });
    }
}
ResidentsComponent.ɵfac = function ResidentsComponent_Factory(t) { return new (t || ResidentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"])); };
ResidentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResidentsComponent, selectors: [["app-residents"]], decls: 13, vars: 4, consts: [[1, "res_page"], ["class", "spinner", 4, "ngIf"], [1, "page", 3, "hidden"], [1, "row", "m-0"], [1, "col-xl-9", "col-lg-9", "col-md-8", "col-sm-7", "col-12"], [1, "main_head"], [1, "col-xl-3", "col-lg-3", "col-md-4", "col-sm-5", "col-12", "text-end"], [1, "btn", "backBtn", 3, "click"], [1, "row", "m-0", "justify-content-center"], ["class", "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ", 4, "ngFor", "ngForOf"], ["class", "noRes", 4, "ngIf"], [1, "spinner"], ["src", "assets/images/spin.gif"], [1, "col-xl-3", "col-lg-4", "col-md-6", "col-sm-6", "col-12"], [1, "res_card"], ["src", "assets/images/user.png", 1, "user_img"], [1, "name_head", "text-center"], [1, "row", "m-0", "justify-content-center", "gen_row"], [1, "col-4", "text-start"], [1, "res_txt"], [1, "res_val"], [1, "col-4", "text-center"], [1, "col-4", "text-end"], [1, "noRes"]], template: function ResidentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResidentsComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Residents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResidentsComponent_Template_button_click_8_listener() { return ctx.backTo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back to planets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResidentsComponent_div_11_Template, 21, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResidentsComponent_p_12_Template, 2, 0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loading || ctx.ResArray.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ResArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.ResArray.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".res_card[_ngcontent-%COMP%] {\n  height: 180px;\n  margin-top: 45px;\n  background: #FDFDFD 0% 0% no-repeat padding-box;\n  box-shadow: 0px 0px 15px #00000029;\n  border-radius: 15px;\n  padding: 10px 15px;\n  text-align: center;\n  transition: 0.9s;\n}\n\n.res_card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n}\n\n.name_head[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  padding-top: 10px;\n  font-size: 17px;\n  font-family: \"Proxima_Nova_Bold\";\n}\n\n.page[_ngcontent-%COMP%] {\n  padding: 30px 20px;\n}\n\n.main_head[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: \"Proxima_Nova_Bold\";\n  margin-bottom: -7px;\n}\n\n.user_img[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n  margin-top: -40px;\n}\n\n.res_page[_ngcontent-%COMP%] {\n  height: 88vh;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.noRes[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 15%;\n  font-size: 30px;\n  font-family: \"Proxima_Nova_Bold\";\n}\n\n.res_txt[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.res_val[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-family: \"Proxima_Nova_Bold\";\n}\n\n.gen_row[_ngcontent-%COMP%] {\n  margin-top: 35px !important;\n}\n\n.backBtn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00264d;\n  font-size: 15px;\n  width: 160px;\n  height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXNpZGVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHQTtFQUNJLHNCQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFJRDs7QUFGQTtFQUVJLFlBQUE7QUFJSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7QUFPSjs7QUFMQTtFQUNJLDJCQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFTSiIsImZpbGUiOiJyZXNpZGVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzX2NhcmR7XHJcbiAgIFxyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI0ZERkRGRCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggIzAwMDAwMDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246LjlzO1xyXG59XHJcbi5yZXNfY2FyZDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA4KTtcclxufVxyXG4ubmFtZV9oZWFke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWFfTm92YV9Cb2xkJztcclxufVxyXG4ucGFnZXtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxufVxyXG4ubWFpbl9oZWFke1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUHJveGltYV9Ob3ZhX0JvbGRcIjtcclxuICAgIG1hcmdpbi1ib3R0b206IC03cHg7XHJcbn1cclxuLnVzZXJfaW1ne1xyXG4gaGVpZ2h0OiA2MHB4O1xyXG4gd2lkdGg6IDYwcHg7XHJcbiBtYXJnaW4tdG9wOiAtNDBweDtcclxufVxyXG4ucmVzX3BhZ2Vcclxue1xyXG4gICAgaGVpZ2h0OiA4OHZoO1xyXG4gICAgXHJcbn1cclxuLnNwaW5uZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5ub1Jlc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWFfTm92YV9Cb2xkJztcclxufVxyXG4ucmVzX3R4dHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4ucmVzX3ZhbHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYV9Ob3ZhX0JvbGQnO1xyXG59XHJcbi5nZW5fcm93e1xyXG4gICAgbWFyZ2luLXRvcDogMzVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrQnRue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyNjRkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4OyBcclxuXHJcbn0iXX0= */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function (a0) { return { "show": a0 }; };
class AppComponent {
    constructor() {
        this.title = 'StarWars';
        this.navbarOpen = false;
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "header_nav", "fixed-top"], ["href", "javascript:void(0)", 1, "navbar-brand"], ["src", "assets/images/logo.png", 1, "logo", "logo_img"], ["aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#navbar1", "data-toggle", "collapse", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbar1", 1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav"], [1, "nav-item"], ["routerLinkActive", "active-route", "routerLink", "/home", 1, "nav-link", "navItemHeader_item", 3, "click"], [1, "sr-only"], ["routerLinkActive", "active-route", "routerLink", "/planets", 1, "nav-link", "navItemHeader_item", 3, "click"], [1, "rout_class"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_8_listener() { return ctx.navbarOpen = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_13_listener() { return ctx.navbarOpen = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Planets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.navbarOpen));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".header_nav[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(270deg, #00264d 20%, #000033 70%, #000000 100%) 0% 0% no-repeat padding-box;\n  width: 100%;\n  padding: 0;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.rout_class[_ngcontent-%COMP%] {\n  margin-top: 75px;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  margin-right: 35px;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-left: auto;\n  padding-right: 30px;\n}\n\n.logo_img[_ngcontent-%COMP%] {\n  height: 75px;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  min-width: 85px;\n}\n\n.navItemHeader_item[_ngcontent-%COMP%] {\n  font-family: Proxima_Nova_Regular;\n  font-size: 16px;\n  letter-spacing: 0;\n  color: #F1F1F1 !important;\n  opacity: 1;\n}\n\n.active-route[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff !important;\n  font-family: Proxima_Nova_Bold;\n  line-height: 22px;\n}\n\n@media only screen and (max-width: 991px) {\n  .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    position: relative;\n    line-height: 20px;\n    font-family: Proxima_Nova_Regular !important;\n    display: inline-block;\n    width: 100%;\n    z-index: 99;\n  }\n\n  .nav-item[_ngcontent-%COMP%] {\n    padding-left: 0px;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    background-color: rgba(34, 47, 104, 0.411);\n    width: 100%;\n    transition: width 0.2s ease-in;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    color: #fff;\n    text-decoration: none;\n    padding: 15px 15px 15px 30px;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%] {\n    background-color: #121b45;\n    text-align: center;\n    padding: 10px 0 10px 0;\n    margin-top: -10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUhBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUVJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFBRTtFQUNFLFlBQUE7QUFHSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUVFO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFPRTtFQUVFO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtJQUNBLDRDQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtFQUxKOztFQVFFO0lBQ0UsaUJBQUE7RUFMSjs7RUFRRTtJQUNDLDBDQUFBO0lBRUMsV0FBQTtJQUlBLDhCQUFBO0VBTko7O0VBVUU7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsNEJBQUE7RUFQSjs7RUFVRTtJQUNJLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0VBUE47QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX25hdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDAyNjRkIDIwJSwgIzAwMDAzMyA3MCUsICAjMDAwMDAwIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCA7XHJcbiBcclxuICB9XHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnJvdXRfY2xhc3NcclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIH1cclxuLm5hdmJhci10b2dnbGVye1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG59XHJcbiAgLm5hdmJhci1uYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAubG9nb19pbWcge1xyXG4gICAgaGVpZ2h0Ojc1cHg7XHJcblxyXG4gIH1cclxuICBcclxuICAubmF2LWl0ZW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbWluLXdpZHRoOiA4NXB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLm5hdkl0ZW1IZWFkZXJfaXRlbSB7XHJcbiAgICBmb250LWZhbWlseTogUHJveGltYV9Ob3ZhX1JlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGNvbG9yOiAjRjFGMUYxICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuIFxyXG4gIFxyXG4gIC5hY3RpdmUtcm91dGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hX05vdmFfQm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuIFxyXG5cclxuXHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgXHJcbiAgICAubmF2YmFyLW5hdiBsaSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQcm94aW1hX05vdmFfUmVndWxhciAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxuICBcclxuICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1uYXYgbGk6aG92ZXIge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDQ3LCAxMDQsIDAuNDExKTtcclxuICAgICAgXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIC4ycyBlYXNlLWluO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IHdpZHRoIC4ycyBlYXNlLWluO1xyXG4gICAgICAtbXMtdHJhbnNpdGlvbjogd2lkdGggLjJzIGVhc2UtaW47XHJcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycyBlYXNlLWluO1xyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1uYXYgbGkgYSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAzMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDI3LCA2OSwgMSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gIH1cclxuICAiXX0= */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_planets_planets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/planets/planets.component */ "KdCo");
/* harmony import */ var _components_residents_residents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/residents/residents.component */ "PZm/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_planets_planets_component__WEBPACK_IMPORTED_MODULE_4__["PlanetsComponent"],
        _components_residents_residents_component__WEBPACK_IMPORTED_MODULE_5__["ResidentsComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_planets_planets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/planets/planets.component */ "KdCo");
/* harmony import */ var _components_residents_residents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/residents/residents.component */ "PZm/");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
    },
    {
        path: "home",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "planets",
        component: _components_planets_planets_component__WEBPACK_IMPORTED_MODULE_1__["PlanetsComponent"]
    },
    {
        path: "residents",
        component: _components_residents_residents_component__WEBPACK_IMPORTED_MODULE_2__["ResidentsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map