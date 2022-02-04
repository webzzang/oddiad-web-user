"use strict";

function _typeof(e) {
  "@babel/helpers - typeof";
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

/*!
 *
 * Angle - Bootstrap Admin App + AngularJS
 *
 * Version: 3.0.0
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */
!function () {
  angular.module("angle", ["app.core", "app.routes", "app.colors", "app.sidebar", "app.preloader", "app.settings", "app.bootstrapui", "app.elements", "app.utils", "app.translate", "app.settingbar", "app.page", "app.contents", "app.support", "app.feedback", "cfg", "app.admin", "app.website"]).run(["$rootScope", "$state", function (e, t) {
    e.$on("goToLoginPage", function () {
      "website.login" !== t.current.name && t.go("page.login")
    })
  }]).config(["$httpProvider", function (e) {
    var t = null;
    e.interceptors.push(["$rootScope", function (e) {
      return {
        response: function (o) {
          return t && clearTimeout(t), t = setTimeout(function () {
            return e.$emit("goToLoginPage")
          }, 18e5), o
        }
      }
    }])
  }])
}(), function () {
  angular.module("app.settingbar", ["ngStorage"])
}(), function () {
  angular.module("app.colors", [])
}(), function () {
  angular.module("app.bootstrapui", [])
}(), function () {
  angular.module("app.core", ["ngRoute", "ngAnimate", "ngStorage", "ngCookies", "pascalprecht.translate", "ui.bootstrap", "ui.router", "oc.lazyLoad", "cfp.loadingBar", "ngSanitize", "ngResource", "tmh.dynamicLocale", "ui.utils", "angularUtils.directives.uiBreadcrumbs", "angular-jwt", "angular-jwt.interceptor", "angular-jwt.jwt", "angular-carousel", "angularMoment", "socialLogin"])
}(), function () {
  angular.module("app.elements", [])
}(), function () {
  angular.module("app.lazyload", [])
}(), function () {
  angular.module("app.preloader", [])
}(), function () {
  angular.module("app.routes", ["app.lazyload"])
}(), function () {
  angular.module("app.settings", [])
}(), function () {
  angular.module("app.sidebar", [])
}(), function () {
  angular.module("app.translate", [])
}(), function () {
  angular.module("app.utils", [])
}(), angular.module("cfg", []).constant("Config", {
  clientId: "portal-stage",
  dispatcherSvcUrl: "https://dispatcher.stage.showit.sbcsvl.com/dispatcher/0.4",
  env: "Stage",
  identityPoolId: "us-west-2_HccDDL7d2",
  identityClientId: "2tdtk3n9f5iceh1lbg5q1dvt67",
  googleClientId: "691448265885-gug89qjjqmb689hd3skgs4n0c3tkv8ib.apps.googleusercontent.com",
  facebookAppId: "819770428188184",
  groupPrefix: "showit",
  googleAnalyticsId: "UA-119223379-1"
}), function () {
  function e(e, t, o, a, n, r, s, i, c) {
    function l() {
      function r(e) {
        i.clearUserSession(), delete a.userSession, o.go("page.login")
      }

      function c(e) {
        e.result.groups && e.result.groups.length > 0 && (u.groups = e.result.groups)
      }

      u.basepath = e.basepath, t.logout = function () {
        n.logout(r)
      }, s.getUserDetails(c)
    }

    var u = this;
    u.env = r.env, l()
  }

  angular.module("app.settingbar").controller("TopNavController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "$localStorage", "SettingBarLoader", "Config", "MainLoader", "UserSession", "$rootScope"], e.$inject = ["RouteHelpers", "$scope", "$state", "$localStorage", "SettingBarLoader", "Config", "MainLoader", "UserSession", "$rootScope"]
}(), function () {
  function e(e, t, o) {
    function a(t, a) {
      var n = o.dispatcherSvcUrl + "/user/api/logout";
      a = a || function () {
        alert("Failure logout")
      }, e.post(n).success(t).error(a)
    }

    this.logout = a
  }

  angular.module("app.settingbar").service("SettingBarLoader", e), e.$inject = ["$http", "config", "Config"]
}(), function () {
  angular.module("app.colors").constant("APP_COLORS", {
    primary: "#5d9cec",
    success: "#27c24c",
    info: "#23b7e5",
    warning: "#ff902b",
    danger: "#f05050",
    inverse: "#131e26",
    green: "#37bc9b",
    pink: "#f532e5",
    purple: "#7266ba",
    dark: "#3a3f51",
    yellow: "#fad732",
    "gray-darker": "#232735",
    "gray-dark": "#3a3f51",
    gray: "#dde6e9",
    "gray-light": "#e4eaec",
    "gray-lighter": "#edf1f2"
  })
}(), function () {
  function e(e) {
    function t(t) {
      return e[t] || "#fff"
    }

    this.byName = t
  }

  angular.module("app.colors").service("Colors", e), e.$inject = ["APP_COLORS"]
}(), function () {
  function e() {
    function e() {
      t.alerts = [{
        type: "danger",
        msg: "Oh snap! Change a few things up and try submitting again."
      }, {
        type: "warning",
        msg: "Well done! You successfully read this important alert message."
      }], t.addAlert = function () {
        t.alerts.push({msg: "Another alert!"})
      }, t.closeAlert = function (e) {
        t.alerts.splice(e, 1)
      }
    }

    var t = this;
    e()
  }

  angular.module("app.bootstrapui").controller("AlertDemoCtrl", e)
}(), function () {
  angular.module("app.bootstrapui")
}(), function () {
  function e() {
    function e() {
      t.singleModel = 1, t.radioModel = "Middle", t.checkModel = {left: !1, middle: !0, right: !1}
    }

    var t = this;
    e()
  }

  angular.module("app.bootstrapui").controller("ButtonsCtrl", e)
}(), function () {
  function e() {
    function e() {
      t.myInterval = 5e3;
      var e = t.slides = [];
      t.addSlide = function () {
        var t = 800 + e.length;
        e.push({
          image: "//placekitten.com/" + t + "/300",
          text: ["More", "Extra", "Lots of", "Surplus"][e.length % 2] + " " + ["Cats", "Kittys", "Felines", "Cutes"][e.length % 2]
        })
      };
      for (var o = 0; o < 2; o++) t.addSlide()
    }

    var t = this;
    e()
  }

  angular.module("app.bootstrapui").controller("CarouselDemoCtrl", e)
}(), function () {
  function e() {
    function e() {
      t.today = function () {
        t.dt = new Date
      }, t.today(), t.clear = function () {
        t.dt = null
      }, t.disabled = function (e, t) {
        return "day" === t && (0 === e.getDay() || 6 === e.getDay())
      }, t.toggleMin = function () {
        t.minDate = t.minDate ? null : new Date
      }, t.toggleMin(), t.open = function (e) {
        e.preventDefault(), e.stopPropagation(), t.opened = !0
      }, t.dateOptions = {
        formatYear: "yy",
        startingDay: 1
      }, t.initDate = new Date("2019-10-20"), t.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], t.format = t.formats[0]
    }

    var t = this;
    e()
  }

  angular.module("app.bootstrapui").controller("DatepickerDemoCtrl", e)
}(), function () {
  function e(e) {
    function t() {
      function t(e, t) {
        e.ok = function () {
          t.close("closed")
        }, e.cancel = function () {
          t.dismiss("cancel")
        }
      }

      o.open = function (o) {
        var a = e.open({templateUrl: "/myModalContent.html", controller: t, size: o}),
            n = $("#modal-state");
        a.result.then(function () {
          n.text("Modal dismissed with OK status")
        }, function () {
          n.text("Modal dismissed with Cancel status")
        })
      }, t.$inject = ["$scope", "$modalInstance"]
    }

    var o = this;
    t()
  }

  angular.module("app.bootstrapui").controller("ModalController", e), e.$inject = ["$modal"]
}(), function () {
  function e() {
    function e() {
      t.totalItems = 64, t.currentPage = 4, t.setPage = function (e) {
        t.currentPage = e
      }, t.pageChanged = function () {
        console.log("Page changed to: " + t.currentPage)
      }, t.maxSize = 5, t.bigTotalItems = 175, t.bigCurrentPage = 1
    }

    var t = this;
    e()
  }

  angular.module("app.bootstrapui").controller("PaginationDemoCtrl", e)
}(), function () {
  function e() {
    function e() {
      t.dynamicPopover = "Hello, World!", t.dynamicPopoverTitle = "Title"
    }

    var t = this;
    e()
  }

  angular.module("app.bootstrapui").controller("PopoverDemoCtrl", e)
}(), function () {
  function e() {
    function e() {
      t.max = 200, t.random = function () {
        var e, o = Math.floor(100 * Math.random() + 1);
        e = o < 25 ? "success" : o < 50 ? "info" : o < 75 ? "warning" : "danger", t.showWarning = "danger" === e || "warning" === e, t.dynamic = o, t.type = e
      }, t.random(), t.randomStacked = function () {
        t.stacked = [];
        for (var e = ["success", "info", "warning", "danger"], o = 0, a = Math.floor(4 * Math.random() + 1); o < a; o++) {
          var n = Math.floor(4 * Math.random());
          t.stacked.push({value: Math.floor(30 * Math.random() + 1), type: e[n]})
        }
      }, t.randomStacked()
    }

    var t = this;
    e()
  }

  angular.module("app.bootstrapui").controller("ProgressDemoCtrl", e)
}(), function () {
  function e() {
    function e() {
      t.rate = 7, t.max = 10, t.isReadonly = !1, t.hoveringOver = function (e) {
        t.overStar = e, t.percent = 100 * (e / t.max)
      }, t.ratingStates = [{
        stateOn: "fa fa-check",
        stateOff: "fa fa-check-circle"
      }, {stateOn: "fa fa-star", stateOff: "fa fa-star-o"}, {
        stateOn: "fa fa-heart",
        stateOff: "fa fa-ban"
      }, {stateOn: "fa fa-heart"}, {stateOff: "fa fa-power-off"}]
    }

    var t = this;
    e()
  }

  angular.module("app.bootstrapui").controller("RatingDemoCtrl", e)
}(), function () {
  function e() {
    function e() {
      t.mytime = new Date, t.hstep = 1, t.mstep = 15, t.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
      }, t.ismeridian = !0, t.toggleMode = function () {
        t.ismeridian = !t.ismeridian
      }, t.update = function () {
        var e = new Date;
        e.setHours(14), e.setMinutes(0), t.mytime = e
      }, t.changed = function () {
        console.log("Time changed to: " + t.mytime)
      }, t.clear = function () {
        t.mytime = null
      }
    }

    var t = this;
    e()
  }

  angular.module("app.bootstrapui").controller("TimepickerDemoCtrl", e)
}(), function () {
  function e() {
    function e() {
      function e(e) {
        for (var t = e.offsetTop, o = 40; e.offsetParent;) e = e.offsetParent, t += e.offsetTop;
        return t - o - window.pageYOffset
      }

      function o(e) {
        for (var t = e.offsetLeft, o = e.offsetWidth; e.offsetParent;) e = e.offsetParent, t += e.offsetLeft;
        return t - o - window.pageXOffset
      }

      t.dynamicTooltip = "Hello, World!", t.dynamicTooltipText = "dynamic", t.htmlTooltip = "I've been made <b>bold</b>!", t.autoplace = function (t, a) {
        var n = "top";
        return e(a) < 0 && (n = "bottom"), o(a) < 0 && (n = "right"), n
      }
    }

    var t = this;
    e()
  }

  angular.module("app.bootstrapui").controller("TooltipDemoCtrl", e)
}(), function () {
  function e(e) {
    function t() {
      o.selected = void 0, o.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], o.getLocation = function (t) {
        return e.get("//maps.googleapis.com/maps/api/geocode/json", {
          params: {
            address: t,
            sensor: !1
          }
        }).then(function (e) {
          var t = [];
          return angular.forEach(e.data.results, function (e) {
            t.push(e.formatted_address)
          }), t
        })
      }, o.statesWithFlags = [{
        name: "Alabama",
        flag: "5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png"
      }, {
        name: "Alaska",
        flag: "e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png"
      }, {
        name: "Arizona",
        flag: "9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png"
      }, {
        name: "Arkansas",
        flag: "9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png"
      }, {
        name: "California",
        flag: "0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png"
      }, {
        name: "Colorado",
        flag: "4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png"
      }, {
        name: "Connecticut",
        flag: "9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png"
      }, {
        name: "Delaware",
        flag: "c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png"
      }, {
        name: "Florida",
        flag: "f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png"
      }, {
        name: "Georgia",
        flag: "5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png"
      }, {
        name: "Hawaii",
        flag: "e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png"
      }, {
        name: "Idaho",
        flag: "a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png"
      }, {
        name: "Illinois",
        flag: "0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png"
      }, {
        name: "Indiana",
        flag: "a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png"
      }, {name: "Iowa", flag: "a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png"}, {
        name: "Kansas",
        flag: "d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png"
      }, {
        name: "Kentucky",
        flag: "8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png"
      }, {
        name: "Louisiana",
        flag: "e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png"
      }, {
        name: "Maine",
        flag: "3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png"
      }, {
        name: "Maryland",
        flag: "a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png"
      }, {
        name: "Massachusetts",
        flag: "f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png"
      }, {
        name: "Michigan",
        flag: "b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png"
      }, {
        name: "Minnesota",
        flag: "b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png"
      }, {
        name: "Mississippi",
        flag: "4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png"
      }, {
        name: "Missouri",
        flag: "5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png"
      }, {
        name: "Montana",
        flag: "c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png"
      }, {
        name: "Nebraska",
        flag: "4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png"
      }, {
        name: "Nevada",
        flag: "f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png"
      }, {
        name: "New Hampshire",
        flag: "2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png"
      }, {
        name: "New Jersey",
        flag: "9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png"
      }, {
        name: "New Mexico",
        flag: "c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png"
      }, {
        name: "New York",
        flag: "1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png"
      }, {
        name: "North Carolina",
        flag: "b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png"
      }, {
        name: "North Dakota",
        flag: "e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png"
      }, {name: "Ohio", flag: "4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png"}, {
        name: "Oklahoma",
        flag: "6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png"
      }, {
        name: "Oregon",
        flag: "b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png"
      }, {
        name: "Pennsylvania",
        flag: "f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png"
      }, {
        name: "Rhode Island",
        flag: "f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png"
      }, {
        name: "South Carolina",
        flag: "6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png"
      }, {
        name: "South Dakota",
        flag: "1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png"
      }, {
        name: "Tennessee",
        flag: "9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png"
      }, {name: "Texas", flag: "f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png"}, {
        name: "Utah",
        flag: "f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png"
      }, {
        name: "Vermont",
        flag: "4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png"
      }, {
        name: "Virginia",
        flag: "4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png"
      }, {
        name: "Washington",
        flag: "5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png"
      }, {
        name: "West Virginia",
        flag: "2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png"
      }, {
        name: "Wisconsin",
        flag: "2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png"
      }, {name: "Wyoming", flag: "b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png"}]
    }

    var o = this;
    t()
  }

  angular.module("app.bootstrapui").controller("TypeaheadCtrl", e), e.$inject = ["$http"]
}(), function () {
  function e(e, t, o, a) {
    var n = angular.module("app.core");
    n.controller = e.register, n.directive = t.directive, n.filter = o.register, n.factory = a.factory, n.service = a.service, n.constant = a.constant, n.value = a.value
  }

  angular.module("app.core").config(e), e.$inject = ["$controllerProvider", "$compileProvider", "$filterProvider", "$provide"]
}(), function () {
  angular.module("app.core").constant("APP_MEDIAQUERY", {
    desktopLG: 1200,
    desktop: 992,
    tablet: 768,
    mobile: 480
  })
}(), function () {
  function e(e, t, o, a, n, r) {
    e.$state = t, e.$stateParams = o, e.$storage = a.localStorage, e.colorByName = r.byName, e.cancel = function (e) {
      e.stopPropagation()
    }, e.$on("$stateNotFound", function (e, t) {
      console.log(t.to), console.log(t.toParams), console.log(t.options)
    }), e.$on("$stateChangeError", function (e, t, o, a, n, r) {
      console.log(r)
    }), e.$on("$stateChangeSuccess", function () {
      a.scrollTo(0, 0), e.currTitle = t.current.title
    }), e.currTitle = t.current.title, e.pageTitle = function () {
      var t = e.app.name + " - " + (e.currTitle || e.app.description);
      return document.title = t, t
    }
  }

  angular.module("app.core").run(e).directive("disableRightClick", function () {
    return {
      restrict: "A", link: function (e, t, o) {
        t.bind("contextmenu", function (e) {
          e.preventDefault()
        })
      }
    }
  }), e.$inject = ["$rootScope", "$state", "$stateParams", "$window", "$templateCache", "Colors"]
}(), function () {
  function e() {
    function e() {
      function e(e, o) {
        var a = e.length;
        return {
          id: a + 1,
          label: "slide #" + (a + 1),
          img: "http://lorempixel.com/1200/500/" + o + "/" + (a + 1) % 10,
          color: t.colors[10 * a % t.colors.length],
          odd: a % 2 === 0
        }
      }

      function o(t, o) {
        t.push(e(t, o))
      }

      function a(e, t, a) {
        for (var n = 0; n < a; n++) o(e, t)
      }

      t.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"], t.carouselIndex = 3, t.carouselIndex2 = 0, t.carouselIndex2 = 1, t.carouselIndex3 = 5, t.carouselIndex4 = 5, t.slides = [], a(t.slides, "sports", 50), t.slides2 = [], a(t.slides2, "sports", 10), t.slides3 = [], a(t.slides3, "people", 50), t.slides4 = [], a(t.slides4, "city", 50), t.slides6 = [], t.carouselIndex6 = 0, a(t.slides6, "sports", 10), t.addSlide = function (o) {
        "head" === o ? t.slides6.unshift(e(t.slides6, "people")) : t.slides6.push(e(t.slides6, "people"))
      }
    }

    var t = this;
    e()
  }

  angular.module("app.elements").controller("AngularCarouselController", e)
}(), function () {
  function e(e, t, o) {
    function a() {
      e.tpl = o, t.open({template: o.path, className: "ngdialog-theme-default"})
    }

    a()
  }

  function t(e, t, o) {
    function a() {
      t.jsonData = '{"foo": "bar"}', t.theme = "ngdialog-theme-default", e.directivePreCloseCallback = function (e) {
        return !!confirm("Close it? MainCtrl.Directive. (Value = " + e + ")")
      }, e.preCloseCallbackOnScope = function (e) {
        return !!confirm("Close it? MainCtrl.OnScope (Value = " + e + ")")
      }, e.open = function () {
        o.open({template: "firstDialogId", controller: "InsideCtrl", data: {foo: "some data"}})
      }, e.openDefault = function () {
        o.open({
          template: "firstDialogId",
          controller: "InsideCtrl",
          className: "ngdialog-theme-default"
        })
      }, e.openDefaultWithPreCloseCallbackInlined = function () {
        o.open({
          template: "firstDialogId",
          controller: "InsideCtrl",
          className: "ngdialog-theme-default",
          preCloseCallback: function (e) {
            return !!confirm("Close it?  (Value = " + e + ")")
          }
        })
      }, e.openConfirm = function () {
        o.openConfirm({
          template: "modalDialogId",
          className: "ngdialog-theme-default"
        }).then(function (e) {
          console.log("Modal promise resolved. Value: ", e)
        }, function (e) {
          console.log("Modal promise rejected. Reason: ", e)
        })
      }, e.openConfirmWithPreCloseCallbackOnScope = function () {
        o.openConfirm({
          template: "modalDialogId",
          className: "ngdialog-theme-default",
          preCloseCallback: "preCloseCallbackOnScope",
          scope: e
        }).then(function (e) {
          console.log("Modal promise resolved. Value: ", e)
        }, function (e) {
          console.log("Modal promise rejected. Reason: ", e)
        })
      }, e.openConfirmWithPreCloseCallbackInlinedWithNestedConfirm = function () {
        o.openConfirm({
          template: "dialogWithNestedConfirmDialogId",
          className: "ngdialog-theme-default",
          preCloseCallback: function () {
            var e = o.openConfirm({
              template: '<p>Are you sure you want to close the parent dialog?</p><div><button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No<button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes</button></div>',
              plain: !0,
              className: "ngdialog-theme-default"
            });
            return e
          },
          scope: e
        }).then(function (e) {
          console.log("resolved:" + e)
        }, function (e) {
          console.log("rejected:" + e)
        })
      }, e.openInlineController = function () {
        t.theme = "ngdialog-theme-default", o.open({
          template: "withInlineController",
          controller: ["$scope", "$timeout", function (e, t) {
            function o() {
              e.exampleExternalData = "Counter " + n++, a = t(o, 450)
            }

            var a, n = 0;
            o(), e.$on("$destroy", function () {
              t.cancel(a)
            })
          }],
          className: "ngdialog-theme-default"
        })
      }, e.openTemplate = function () {
        e.value = !0, o.open({template: e.tpl.path, className: "ngdialog-theme-default", scope: e})
      }, e.openTemplateNoCache = function () {
        e.value = !0, o.open({
          template: e.tpl.path,
          className: "ngdialog-theme-default",
          scope: e,
          cache: !1
        })
      }, e.openTimed = function () {
        var e = o.open({
          template: "<p>Just passing through!</p>",
          plain: !0,
          closeByDocument: !1,
          closeByEscape: !1
        });
        setTimeout(function () {
          e.close()
        }, 2e3)
      }, e.openNotify = function () {
        var e = o.open({
          template: '<p>You can do whatever you want when I close, however that happens.</p><div><button type="button" class="btn btn-primary" ng-click="closeThisDialog(1)">Close Me</button></div>',
          plain: !0
        });
        e.closePromise.then(function (e) {
          console.log("ngDialog closed" + (1 === e.value ? " using the button" : "") + " and notified by promise: " + e.id)
        })
      }, e.openWithoutOverlay = function () {
        o.open({
          template: "<h2>Notice that there is no overlay!</h2>",
          className: "ngdialog-theme-default",
          plain: !0,
          overlay: !1
        })
      }, t.$on("ngDialog.opened", function (e, t) {
        console.log("ngDialog opened: " + t.attr("id"))
      }), t.$on("ngDialog.closed", function (e, t) {
        console.log("ngDialog closed: " + t.attr("id"))
      }), t.$on("ngDialog.closing", function (e, t) {
        console.log("ngDialog closing: " + t.attr("id"))
      })
    }

    a()
  }

  function o(e, t) {
    function o() {
      e.dialogModel = {message: "message from passed scope"}, e.openSecond = function () {
        t.open({
          template: '<p class="lead m0"><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
          plain: !0,
          closeByEscape: !1,
          controller: "SecondModalCtrl"
        })
      }
    }

    o()
  }

  function a(e, t) {
    function o() {
      e.closeSecond = function () {
        t.close()
      }
    }

    o()
  }

  angular.module("app.elements").controller("DialogIntroCtrl", e).controller("DialogMainCtrl", t).controller("InsideCtrl", o).controller("SecondModalCtrl", a), e.$inject = ["$scope", "ngDialog", "tpl"], t.$inject = ["$scope", "$rootScope", "ngDialog"], o.$inject = ["$scope", "ngDialog"], a.$inject = ["$scope", "ngDialog"]
}(), function () {
  function e() {
    function e() {
      t.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], t.loadMore = function () {
        for (var e = t.images[t.images.length - 1], o = 1; o <= 10; o++) t.images.push(e + o)
      }
    }

    var t = this;
    e()
  }

  function t(e, t) {
    var o = function (e, o, a) {
      return t(function () {
        var t, n, r, s;
        for (n = [], t = r = e, s = e + o - 1; e <= s ? r <= s : r >= s; t = e <= s ? ++r : --r) n.push("item #" + t);
        return a(n)
      }, 100)
    };
    return {get: o}
  }

  angular.module("app.elements").controller("InfiniteScrollController", e).factory("datasource", t), t.$inject = ["$log", "$timeout"]
}(), function () {
  function e(e) {
    function t() {
      o.basepath = e.basepath, o.photos = [{
        id: "photo-1",
        name: "Awesome photo",
        src: "http://lorempixel.com/400/300/abstract"
      }, {
        id: "photo-2",
        name: "Great photo",
        src: "http://lorempixel.com/450/400/city"
      }, {
        id: "photo-3",
        name: "Strange photo",
        src: "http://lorempixel.com/400/300/people"
      }, {
        id: "photo-4",
        name: "A photo?",
        src: "http://lorempixel.com/400/300/transport"
      }, {
        id: "photo-5",
        name: "What a photo",
        src: "http://lorempixel.com/450/300/fashion"
      }, {
        id: "photo-6",
        name: "Silly photo",
        src: "http://lorempixel.com/400/300/technics"
      }, {
        id: "photo-7",
        name: "Weird photo",
        src: "http://lorempixel.com/410/350/sports"
      }, {
        id: "photo-8",
        name: "Modern photo",
        src: "http://lorempixel.com/400/300/nightlife"
      }, {
        id: "photo-9",
        name: "Classical photo",
        src: "http://lorempixel.com/400/300/nature"
      }, {
        id: "photo-10",
        name: "Dynamic photo",
        src: "http://lorempixel.com/420/300/abstract"
      }, {
        id: "photo-11",
        name: "Neat photo",
        src: "http://lorempixel.com/400/300/sports"
      }, {
        id: "photo-12",
        name: "Bumpy photo",
        src: "http://lorempixel.com/400/300/nightlife"
      }, {
        id: "photo-13",
        name: "Brilliant photo",
        src: "http://lorempixel.com/400/380/nature"
      }, {
        id: "photo-14",
        name: "Excellent photo",
        src: "http://lorempixel.com/480/300/technics"
      }, {
        id: "photo-15",
        name: "Gorgeous photo",
        src: "http://lorempixel.com/400/300/sports"
      }, {
        id: "photo-16",
        name: "Lovely photo",
        src: "http://lorempixel.com/400/300/nightlife"
      }, {
        id: "photo-17",
        name: 'A "wow" photo',
        src: "http://lorempixel.com/400/300/nature"
      }, {id: "photo-18", name: "Bodacious photo", src: "http://lorempixel.com/400/300/abstract"}]
    }

    var o = this;
    t()
  }

  function t() {
    function e(e, t, o) {
      var a = o.loadedclass;
      t.bind("load", function () {
        angular.element(t).addClass(a)
      })
    }

    var t = {link: e, restrict: "A"};
    return t
  }

  angular.module("app.elements").controller("MasonryDeckController", e).directive("imageloaded", t), e.$inejct = ["RouteHelpers"], e.$inject = ["RouteHelpers"]
}(), function () {
  function e(e, t) {
    function o() {
      a.my_tree_handler = function (e) {
        if (a.output = "You selected: " + e.label, e.data && e.data.description) return a.output += "(" + e.data.description + ")", a.output
      };
      var e = function (e) {
        return a.output = "APPLE! : " + e.label, a.output
      }, o = [{
        label: "Animal",
        children: [{label: "Dog", data: {description: "man's best friend"}}, {
          label: "Cat",
          data: {description: "Felis catus"}
        }, {label: "Hippopotamus", data: {description: "hungry, hungry"}}, {
          label: "Chicken",
          children: ["White Leghorn", "Rhode Island Red", "Jersey Giant"]
        }]
      }, {
        label: "Vegetable",
        data: {
          definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
          data_can_contain_anything: !0
        },
        onSelect: function (e) {
          return a.output = "Vegetable: " + e.data.definition, a.output
        },
        children: [{label: "Oranges"}, {
          label: "Apples",
          children: [{label: "Granny Smith", onSelect: e}, {
            label: "Red Delicous",
            onSelect: e
          }, {label: "Fuji", onSelect: e}]
        }]
      }, {
        label: "Mineral",
        children: [{
          label: "Rock",
          children: ["Igneous", "Sedimentary", "Metamorphic"]
        }, {label: "Metal", children: ["Aluminum", "Steel", "Copper"]}, {
          label: "Plastic",
          children: [{
            label: "Thermoplastic",
            children: ["polyethylene", "polypropylene", "polystyrene", " polyvinyl chloride"]
          }, {
            label: "Thermosetting Polymer",
            children: ["polyester", "polyurethane", "vulcanized rubber", "bakelite", "urea-formaldehyde"]
          }]
        }]
      }], n = [{
        label: "North America",
        children: [{label: "Canada", children: ["Toronto", "Vancouver"]}, {
          label: "USA",
          children: ["New York", "Los Angeles"]
        }, {label: "Mexico", children: ["Mexico City", "Guadalajara"]}]
      }, {
        label: "South America",
        children: [{label: "Venezuela", children: ["Caracas", "Maracaibo"]}, {
          label: "Brazil",
          children: ["Sao Paulo", "Rio de Janeiro"]
        }, {label: "Argentina", children: ["Buenos Aires", "Cordoba"]}]
      }];
      a.my_data = o, a.try_changing_the_tree_data = function () {
        return a.my_data === o ? a.my_data = n : a.my_data = o, a.my_data
      };
      var r;
      a.my_tree = r = {}, a.try_async_load = function () {
        a.my_data = [], a.doing_async = !0;
        var e = t("server/treedata.json");
        return e.get(function (e) {
          return a.my_data = e.data, a.doing_async = !1, r.expand_all()
        }).$promise
      }, a.try_adding_a_branch = function () {
        var e;
        return e = r.get_selected_branch(), r.add_branch(e, {
          label: "New Branch",
          data: {something: 42, "else": 43}
        })
      }
    }

    var a = this;
    o()
  }

  angular.module("app.elements").controller("AbnTestController", e), e.$inject = ["$timeout", "$resource"]
}(), function () {
  function e() {
    function e() {
      t.items = [{item: {text: "a"}, children: []}, {
        item: {text: "b"},
        children: [{item: {text: "c"}, children: []}, {item: {text: "d"}, children: []}]
      }, {item: {text: "e"}, children: []}, {
        item: {text: "f"},
        children: []
      }], t.items2 = [{item: {text: "1"}, children: []}, {
        item: {text: "2"},
        children: [{item: {text: "3"}, children: []}, {item: {text: "4"}, children: []}]
      }, {item: {text: "5"}, children: []}, {item: {text: "6"}, children: []}]
    }

    var t = this;
    e()
  }

  angular.module("app.elements").controller("NestableController", e)
}(), function () {
  function e() {
    function e(e, t, o) {
      var a = 250;
      t.slimScroll({height: o.height || a})
    }

    var t = {link: e, restrict: "EA"};
    return t
  }

  angular.module("app.elements").directive("scrollable", e)
}(), function () {
  function e(e) {
    function t() {
      e.data1 = [{id: 1, name: "Donald Hoffman"}, {id: 2, name: "Wallace Barrett"}, {
        id: 3,
        name: "Marsha Hicks"
      }, {id: 4, name: "Roland Brown"}], e.add = function () {
        e.data1.push({id: e.data1.length + 1, name: "Earl Knight"})
      }, e.sortableCallback = function (e, t, o, a) {
        console.log(o + " -> " + a)
      }, e.sortableOptions = {
        placeholder: '<div class="box-placeholder p0 m0"><div></div></div>',
        forcePlaceholderSize: !0
      }
    }

    t()
  }

  angular.module("app.elements").controller("SortableController", e), e.$inject = ["$scope"]
}(), function () {
  function e(e) {
    function t() {
      o.demo1 = function () {
        e.swal("Here's a message")
      }, o.demo2 = function () {
        e.swal("Here's a message!", "It's pretty, isn't it?")
      }, o.demo3 = function () {
        e.swal("Good job!", "You clicked the button!", "success")
      }, o.demo4 = function () {
        e.swal({
          title: "Are you sure?",
          text: "Your will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: !0,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          closeOnConfirm: !1
        }, function () {
          e.swal("Booyah!")
        })
      }, o.demo5 = function () {
        e.swal({
          title: "Are you sure?",
          text: "Your will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: !0,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel plx!",
          closeOnConfirm: !1,
          closeOnCancel: !1
        }, function (t) {
          t ? e.swal("Deleted!", "Your imaginary file has been deleted.", "success") : e.swal("Cancelled", "Your imaginary file is safe :)", "error")
        })
      }, o.demo6 = function () {
        e.swal({
          title: "Sweet!",
          text: "Here's a custom image.",
          imageUrl: "http://oitozero.com/img/avatar.jpg"
        })
      }
    }

    var o = this;
    t()
  }

  angular.module("app.elements").controller("SweetAlertController", e), e.$inject = ["SweetAlert"]
}(), function () {
  function e(e) {
    function t() {
      o.toaster = {type: "success", title: "Title", text: "Message"}, o.pop = function () {
        e.pop(o.toaster.type, o.toaster.title, o.toaster.text)
      }
    }

    var o = this;
    t()
  }

  angular.module("app.elements").controller("ToasterDemoCtrl", e), e.$inject = ["toaster"]
}(), function () {
  function e(e) {
    function t() {
      var t = angular.element(".wrapper > section");
      t.css({position: "static"}), e.$on("$destroy", function () {
        t.css({position: ""})
      })
    }

    t()
  }

  angular.module("app.elements").controller("TourCtrl", e), e.$inject = ["$scope"]
}(), function () {
  function e(e, t) {
    e.config({debug: !1, events: !0, modules: t.modules})
  }

  angular.module("app.lazyload").config(e), e.$inject = ["$ocLazyLoadProvider", "APP_REQUIRES"]
}(), function () {
  angular.module("app.lazyload").constant("APP_REQUIRES", {
    scripts: {
      whirl: ["vendor/whirl/dist/whirl.css"],
      classyloader: ["vendor/jquery-classyloader/js/jquery.classyloader.min.js"],
      animo: ["vendor/animo.js/animo.js"],
      fastclick: ["vendor/fastclick/lib/fastclick.js"],
      modernizr: ["vendor/modernizr/modernizr.js"],
      animate: ["vendor/animate.css/animate.min.css"],
      skycons: ["vendor/skycons/skycons.js"],
      icons: ["vendor/fontawesome/css/font-awesome.min.css", "vendor/simple-line-icons/css/simple-line-icons.css"],
      "weather-icons": ["vendor/weather-icons/css/weather-icons.min.css"],
      sparklines: ["vendor/sparklines/jquery.sparkline.min.js"],
      wysiwyg: ["vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js", "vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js"],
      slimscroll: ["vendor/slimScroll/jquery.slimscroll.min.js"],
      screenfull: ["vendor/screenfull/dist/screenfull.js"],
      "vector-map": ["vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js", "vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css"],
      "vector-map-maps": ["vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js", "vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js"],
      loadGoogleMapsJS: ["vendor/gmap/load-google-maps.js"],
      "flot-chart": ["vendor/Flot/jquery.flot.js"],
      "flot-chart-plugins": ["vendor/flot.tooltip/js/jquery.flot.tooltip.min.js", "vendor/Flot/jquery.flot.resize.js", "vendor/Flot/jquery.flot.pie.js", "vendor/Flot/jquery.flot.time.js", "vendor/Flot/jquery.flot.categories.js", "vendor/flot-spline/js/jquery.flot.spline.min.js"],
      "jquery-ui": ["vendor/jquery-ui/ui/core.js", "vendor/jquery-ui/ui/widget.js"],
      "jquery-ui-widgets": ["vendor/jquery-ui/ui/core.js", "vendor/jquery-ui/ui/widget.js", "vendor/jquery-ui/ui/mouse.js", "vendor/jquery-ui/ui/draggable.js", "vendor/jquery-ui/ui/droppable.js", "vendor/jquery-ui/ui/sortable.js", "vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js"],
      moment: ["vendor/moment/min/moment-with-locales.min.js"],
      inputmask: ["vendor/jquery.inputmask/dist/jquery.inputmask.bundle.min.js"],
      flatdoc: ["vendor/flatdoc/flatdoc.js"],
      codemirror: ["vendor/codemirror/lib/codemirror.js", "vendor/codemirror/lib/codemirror.css"],
      "codemirror-modes-web": ["vendor/codemirror/mode/javascript/javascript.js", "vendor/codemirror/mode/xml/xml.js", "vendor/codemirror/mode/htmlmixed/htmlmixed.js", "vendor/codemirror/mode/css/css.js"],
      taginput: ["vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css", "vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js"],
      filestyle: ["vendor/bootstrap-filestyle/src/bootstrap-filestyle.js"],
      parsley: ["vendor/parsleyjs/dist/parsley.min.js"],
      fullcalendar: ["vendor/fullcalendar/dist/fullcalendar.min.js", "vendor/fullcalendar/dist/fullcalendar.css"],
      gcal: ["vendor/fullcalendar/dist/gcal.js"],
      chartjs: ["vendor/Chart.js/Chart.js"],
      morris: ["vendor/raphael/raphael.js", "vendor/morris.js/morris.js", "vendor/morris.js/morris.css"],
      "loaders.css": ["vendor/loaders.css/loaders.css"],
      spinkit: ["vendor/spinkit/css/spinkit.css"],
      "grid-sortable": ["vendor/grid/src/gridList.js", "vendor/grid/src/jquery.gridList.js"]
    },
    modules: [{
      name: "toaster",
      files: ["vendor/angularjs-toaster/toaster.js", "vendor/angularjs-toaster/toaster.css"]
    }, {
      name: "localytics.directives",
      files: ["vendor/chosen_v1.2.0/chosen.jquery.min.js", "vendor/chosen_v1.2.0/chosen.min.css", "vendor/angular-chosen-localytics/chosen.js"]
    }, {
      name: "ngDialog",
      files: ["vendor/ngDialog/js/ngDialog.min.js", "vendor/ngDialog/css/ngDialog.min.css", "vendor/ngDialog/css/ngDialog-theme-default.min.css"]
    }, {name: "ngWig", files: ["vendor/ngWig/dist/ng-wig.min.js"]}, {
      name: "ngTable",
      files: ["vendor/ng-table/dist/ng-table.min.js", "vendor/ng-table/dist/ng-table.min.css"]
    }, {
      name: "ngTableExport",
      files: ["vendor/ng-table-export/ng-table-export.js"]
    }, {
      name: "angularBootstrapNavTree",
      files: ["vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js", "vendor/angular-bootstrap-nav-tree/dist/abn_tree.css"]
    }, {
      name: "htmlSortable",
      files: ["vendor/html.sortable/dist/html.sortable.js", "vendor/html.sortable/dist/html.sortable.angular.js"]
    }, {
      name: "xeditable",
      files: ["vendor/angular-xeditable/dist/js/xeditable.js", "vendor/angular-xeditable/dist/css/xeditable.css"]
    }, {
      name: "angularFileUpload",
      files: ["vendor/angular-file-upload/angular-file-upload.js"]
    }, {
      name: "ngImgCrop",
      files: ["vendor/ng-img-crop/ng-img-crop.js", "vendor/ng-img-crop/ng-img-crop.css"]
    }, {
      name: "ui.select",
      files: ["vendor/angular-ui-select/dist/select.js", "vendor/angular-ui-select/dist/select.css"]
    }, {
      name: "ui.codemirror", files: ["vendor/angular-ui-codemirror/ui-codemirror.js"]
    }, {
      name: "angular-carousel",
      files: ["vendor/angular-carousel/dist/angular-carousel.css", "vendor/angular-carousel/dist/angular-carousel.js"]
    }, {
      name: "ngGrid",
      files: ["vendor/ng-grid/build/ng-grid.min.js", "vendor/ng-grid/ng-grid.css"]
    }, {
      name: "infinite-scroll",
      files: ["vendor/ngInfiniteScroll/build/ng-infinite-scroll.js"]
    }, {
      name: "ui.bootstrap-slider",
      files: ["vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js", "vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css", "vendor/angular-bootstrap-slider/slider.js"]
    }, {
      name: "ui.grid",
      files: ["vendor/angular-ui-grid/ui-grid.min.css", "vendor/angular-ui-grid/ui-grid.min.js"]
    }, {
      name: "textAngular",
      files: ["vendor/textAngular/dist/textAngular.css", "vendor/textAngular/dist/textAngular-rangy.min.js", "vendor/textAngular/dist/textAngular-sanitize.js", "vendor/textAngular/src/globals.js", "vendor/textAngular/src/factories.js", "vendor/textAngular/src/DOM.js", "vendor/textAngular/src/validators.js", "vendor/textAngular/src/taBind.js", "vendor/textAngular/src/main.js", "vendor/textAngular/dist/textAngularSetup.js"],
      serie: !0
    }, {
      name: "angular-rickshaw",
      files: ["vendor/d3/d3.min.js", "vendor/rickshaw/rickshaw.js", "vendor/rickshaw/rickshaw.min.css", "vendor/angular-rickshaw/rickshaw.js"],
      serie: !0
    }, {
      name: "angular-chartist",
      files: ["vendor/chartist/dist/chartist.min.css", "vendor/chartist/dist/chartist.js", "vendor/angular-chartist.js/dist/angular-chartist.js"],
      serie: !0
    }, {name: "ui.map", files: ["vendor/angular-ui-map/ui-map.js"]}, {
      name: "datatables",
      files: ["vendor/datatables/media/css/jquery.dataTables.css", "vendor/datatables/media/js/jquery.dataTables.js", "vendor/angular-datatables/dist/angular-datatables.js"],
      serie: !0
    }, {
      name: "angular-jqcloud",
      files: ["vendor/jqcloud2/dist/jqcloud.css", "vendor/jqcloud2/dist/jqcloud.js", "vendor/angular-jqcloud/angular-jqcloud.js"]
    }, {
      name: "angularGrid",
      files: ["vendor/ag-grid/dist/angular-grid.css", "vendor/ag-grid/dist/angular-grid.js", "vendor/ag-grid/dist/theme-dark.css", "vendor/ag-grid/dist/theme-fresh.css"]
    }, {
      name: "ng-nestable",
      files: ["vendor/ng-nestable/src/angular-nestable.js", "vendor/nestable/jquery.nestable.js"]
    }, {
      name: "akoenig.deckgrid",
      files: ["vendor/angular-deckgrid/angular-deckgrid.js"]
    }, {
      name: "oitozero.ngSweetAlert",
      files: ["vendor/sweetalert/dist/sweetalert.css", "vendor/sweetalert/dist/sweetalert.min.js", "vendor/angular-sweetalert/SweetAlert.js"]
    }, {
      name: "bm.bsTour",
      files: ["vendor/bootstrap-tour/build/css/bootstrap-tour.css", "vendor/bootstrap-tour/build/js/bootstrap-tour-standalone.js", "vendor/angular-bootstrap-tour/dist/angular-bootstrap-tour.js"],
      serie: !0
    }, {
      name: "angular-sortable-view",
      files: ["vendor/angular-sortable-view/angular-sortable-view.js"]
    }]
  })
}(), function () {
  function e(e, t, o) {
    function a(a, n) {
      function r() {
        var e = 100 - l;
        l += .015 * Math.pow(1 - Math.sqrt(e), 2), a.loadCounter = parseInt(l, 10), c = t(r, 20)
      }

      function s() {
        t.cancel(c), a.loadCounter = 100, t(function () {
          e.addClass(n, "preloader-hidden"), angular.element("body").css("overflow", "")
        }, 300)
      }

      function i() {
        var e = o.defer(), n = 0, r = a.$on("$viewContentLoaded", function () {
          n++, 2 === n && (t(function () {
            e.resolve()
          }, 3e3), r())
        });
        return e.promise
      }

      a.loadCounter = 0;
      var c, l = 0;
      angular.element("body").css("overflow", "hidden"), n.addClass("preloader"), i().then(s), c = t(r)
    }

    var n = {
      restrict: "EAC",
      template: '<div class="preloader-progress"><div class="preloader-progress-bar" ng-style="{width: loadCounter + \'%\'}"></div></div>',
      link: a
    };
    return n
  }

  angular.module("app.preloader").directive("preloader", e), e.$inject = ["$animate", "$timeout", "$q"]
}(), function () {
  function e(e) {
    function t(e) {
      return "app/views/" + e
    }

    function o() {
      var t = arguments;
      return {
        deps: ["$ocLazyLoad", "$q", function (o, a) {
          function n(e) {
            return "function" == typeof e ? s.then(e) : s.then(function () {
              var t = r(e);
              return t ? o.load(t) : $.error("Route resolve: Bad resource name [" + e + "]")
            })
          }

          function r(t) {
            if (e.modules) for (var o in e.modules) if (e.modules[o].name && e.modules[o].name === t) return e.modules[o];
            return e.scripts && e.scripts[t]
          }

          for (var s = a.when(1), i = 0, c = t.length; i < c; i++) s = n(t[i]);
          return s
        }]
      }
    }

    return {
      basepath: t, resolveFor: o, $get: function () {
        return {basepath: t, resolveFor: o}
      }
    }
  }

  angular.module("app.routes").provider("RouteHelpers", e), e.$inject = ["APP_REQUIRES"]
}(), function () {
  function e(e, t, o, a, n) {
    t.html5Mode(!1), o.otherwise("/page/login"), n.config({whiteListedDomains: ["dispatcher.stage.showit.sbcsvl.com", "localhost", "dispatcher.dev.showit.sbcsvl.com", "dispatcher.prod.api.promota.net"]}), e.state("app", {
      url: "/",
      "abstract": !0,
      templateUrl: a.basepath("app.html"),
      data: {requiresLogin: !0},
      resolve: a.resolveFor("fastclick", "modernizr", "icons", "screenfull", "animo", "sparklines", "slimscroll", "classyloader", "toaster", "whirl")
    }).state("app.contents", {
      url: "contents",
      "abstract": !0,
      views: {main: {templateUrl: a.basepath("contents-collections.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid")
    }).state("app.contents.locales", {
      url: "/locale",
      title: "Locales",
      data: {displayName: "Locales"},
      views: {"contents@app.contents": {templateUrl: a.basepath("contents-locales.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "taginput")
    }).state("app.contents.locales.newlocale", {
      url: "/newlocale",
      data: {displayName: "New Locale"},
      views: {"contents@app.contents": {templateUrl: a.basepath("contents-locale-new.html")}}
    }).state("app.contents.product", {
      url: "/product",
      title: "App Product Info",
      data: {displayName: "App product Info"},
      views: {"contents@app.contents": {templateUrl: a.basepath("product-info.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "taginput")
    }).state("app.contents.pmpolicy", {
      url: "/pmpolicy",
      title: "Privacy Management Policy",
      data: {displayName: "Privacy Management Policy"},
      views: {"contents@app.contents": {templateUrl: a.basepath("privacy-management-policy.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "taginput")
    }).state("app.contents.workhistory", {
      url: "/workhistory",
      title: "Work History",
      data: {displayName: "Work History"},
      views: {"contents@app.contents": {templateUrl: a.basepath("workhistory-info.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "taginput")
    }).state("app.contents.bizcustomer", {
      url: "/bizcustomer",
      title: "Biz customer",
      data: {displayName: "Biz customer"},
      views: {"contents@app.contents": {templateUrl: a.basepath("bizcustomer-info.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "taginput")
    }).state("app.contents.temporaryid", {
      url: "/temporaryid",
      title: "Temporary Registration Info",
      data: {displayName: "Temporary Registration Info"},
      views: {"contents@app.contents": {templateUrl: a.basepath("temporaryid-info.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "taginput")
    }).state("app.contents.product.newproduct", {
      url: "/newproduct",
      data: {displayName: "New App Product"},
      views: {"contents@app.contents": {templateUrl: a.basepath("product-new.html")}}
    }).state("app.contents.product.updateproduct", {
      url: "/updateproduct",
      data: {displayName: "Update App Product"},
      views: {"contents@app.contents": {templateUrl: a.basepath("product-new.html")}}
    }).state("app.contents.coupon", {
      url: "/coupon",
      title: "Coupon Info",
      data: {displayName: "Coupon Info"},
      views: {"contents@app.contents": {templateUrl: a.basepath("coupon-info.html")}}
    }).state("app.contents.coupon.newcoupon", {
      url: "/newcoupon",
      data: {displayName: "New Coupon"},
      views: {"contents@app.contents": {templateUrl: a.basepath("coupon-info-new.html")}}
    }).state("app.contents.coupon.updatecoupon", {
      url: "/:cpnCode",
      data: {displayName: "Update Coupon"},
      views: {"contents@app.contents": {templateUrl: a.basepath("coupon-info-modify.html")}}
    }).state("app.contents.termmanagement", {
      url: "/termmanagement",
      title: "Term Management",
      data: {displayName: "Term Management"},
      views: {"contents@app.contents": {templateUrl: a.basepath("term-management.html")}}
    }).state("app.contents.stylecategories", {
      url: "/stylecategories",
      title: "Style Categories",
      data: {displayName: "Style Categories"},
      views: {"contents@app.contents": {templateUrl: a.basepath("contents-style-categories.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "taginput")
    }).state("app.contents.stylecategories.updatecategory", {
      url: "/update/:id",
      title: "Update Style Categories",
      data: {displayName: "Update Style Categories"},
      views: {"contents@app.contents": {templateUrl: a.basepath("create-style-category.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "taginput", "filestyle")
    }).state("app.contents.productcategories", {
      url: "/productcategories",
      title: "Product Categories",
      data: {displayName: "Product Categories"},
      views: {"contents@app.contents": {templateUrl: a.basepath("contents-product-categories.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "taginput")
    }).state("app.contents.productcategories.updatecategory", {
      url: "/:id",
      title: "Update Product Categories",
      data: {displayName: "Update Product Categories"},
      views: {"contents@app.contents": {templateUrl: a.basepath("create-product-category.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "taginput", "filestyle")
    }).state("app.admin", {
      url: "admin",
      "abstract": !0,
      views: {main: {templateUrl: a.basepath("admin.html")}}
    }).state("app.admin.group", {
      url: "/group",
      title: "Groups",
      data: {displayName: "Admin Groups"},
      views: {"admin@app.admin": {templateUrl: a.basepath("admin-group.html")}}
    }).state("app.admin.group.details", {
      url: "/:groupId",
      title: "Admin Group Details",
      data: {displayName: "Admin Groups Details"},
      views: {"admin@app.admin": {templateUrl: a.basepath("admin-group-details.html")}},
      resolve: a.resolveFor("taginput", "ngDialog", "oitozero.ngSweetAlert")
    }).state("app.admin.group.newgroup", {
      url: "/newgroup",
      data: {displayName: "New Group"},
      views: {"admin@app.admin": {templateUrl: a.basepath("admin-group-new.html")}}
    }).state("app.supports", {
      url: "supports",
      "abstract": !0,
      views: {main: {templateUrl: a.basepath("support/search-panel.html")}},
      resolve: a.resolveFor()
    }).state("app.supports.usersearch", {
      url: "/usersearch",
      title: "User Search",
      data: {displayName: "User Search"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/user-search.html")}},
      resolve: a.resolveFor("ngDialog", "oitozero.ngSweetAlert")
    }).state("app.supports.usersearch.userlist", {
      url: "/:id",
      title: "List of Users",
      data: {displayName: "List of Users"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/user-search-list.html")}},
      resolve: a.resolveFor("ngDialog")
    }).state("app.supports.usersearch.userlist.userprofile.deviceinfo", {
      url: "/:deviceId",
      title: "Device Info",
      data: {displayName: "Device Info"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/user-search-device-info.html")}},
      resolve: a.resolveFor("ngDialog")
    }).state("app.supports.storesearch", {
      url: "/storesearch",
      title: "Store Search",
      data: {displayName: "Store Search"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/store-search.html")}},
      resolve: a.resolveFor("ngDialog", "oitozero.ngSweetAlert")
    }).state("app.supports.storesearch.storelist", {
      url: "/:id",
      title: "List of Stores",
      data: {displayName: "List of Stores"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/store-search-list.html")}},
      resolve: a.resolveFor("ngDialog", "oitozero.ngSweetAlert")
    }).state("app.supports.feedback", {
      url: "feedback",
      title: "Feedback",
      data: {displayName: "Feedback"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support-feedback.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("app.supports.templates", {
      url: "/templates",
      title: "Templates",
      data: {displayName: "Templates"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/template-search.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("app.supports.templates.list", {
      url: "/:id",
      title: "Templates",
      data: {displayName: "Templates"},
      views: {"templateList@app.supports.templates": {templateUrl: a.basepath("support/template-search-list.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("app.supports.allContents", {
      url: "/boards",
      title: "Boards",
      data: {displayName: "Boards"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/board-search.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("app.supports.allContents.board", {
      url: "/:id",
      title: "Boards",
      data: {displayName: "Boards"},
      views: {"boardList@app.supports.allContents": {templateUrl: a.basepath("support/board-search-list.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("app.supports.allContents.slideshow", {
      url: "/:id",
      title: "Slideshow",
      data: {displayName: "Slideshow"},
      views: {"slideshowList@app.supports.allContents": {templateUrl: a.basepath("support/slideshow-search-list.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("app.supports.dormantuser", {
      url: "/dormantuser",
      title: "Dormant User Info",
      data: {displayName: "Dormant User Info"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/dormantuser-info.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("app.supports.archives", {
      url: "/archives",
      title: "Archives",
      data: {displayName: "Archives"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/archives-info.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("app.supports.statistics", {
      url: "/statistics",
      title: "Casting & Active User",
      data: {displayName: "Casting & Active User"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/statisticsapi.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("app.supports.ranking", {
      url: "/ranking",
      title: "Ranking",
      data: {displayName: "Ranking"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/ranking.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("app.supports.dailyUserStatistics", {
      url: "/dailyUserStatistics",
      title: "Daily User Statistics",
      data: {displayName: "Daily User Statistics"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/dailyUserStatistics.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("app.supports.withdrawReasonStatistics", {
      url: "/statDeactivateUser",
      title: "Withdraw Reason Statistics",
      data: {displayName: "Withdraw Reason Statistics"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/withdrawReasonStatistics.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("app.supports.dashboardInfo", {
      url: "/dashboardInfo",
      title: "Dashboard Information",
      data: {displayName: "Dashboard Information"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/dashboard-info.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("app.supports.redeemcode", {
      url: "/redeemcode",
      title: "Redeem Code",
      data: {displayName: "Redeem Code"},
      views: {"panel@app.supports": {templateUrl: a.basepath("support/redeemcode.html")}},
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("page", {
      url: "/page",
      templateUrl: "app/pages/page.html",
      resolve: a.resolveFor("modernizr", "icons"),
      controller: ["$rootScope", function (e) {
        e.app.layout.isBoxed = !1
      }],
      data: {requiresLogin: !1}
    }).state("page.login", {
      url: "/login",
      title: "Login",
      templateUrl: "app/pages/a4-login.html",
      resolve: a.resolveFor("ngDialog")
    }).state("privacy", {
      url: "/privacy",
      title: "Privacy and Policy",
      templateUrl: "app/pages/privacy-policy.html"
    }).state("termsservice", {
      url: "/terms-service",
      title: "Privacy and Policy",
      templateUrl: "app/pages/terms-service.html"
    }).state("support", {
      url: "/support",
      title: "Privacy and Policy",
      templateUrl: "app/pages/support.html"
    }).state("website", {
      url: "/website",
      templateUrl: "app/pages/page.html",
      resolve: a.resolveFor("modernizr", "icons"),
      controller: ["$rootScope", function (e) {
        e.app.layout.isBoxed = !1
      }],
      data: {requiresLogin: !1}
    }).state("website.login", {
      url: "/login",
      title: "Login",
      templateUrl: "app/pages/unsubscribe/login.html"
    }).state("website.appleid", {
      url: "/appleid",
      title: "AppleId",
      templateUrl: "app/pages/unsubscribe/appleid.html"
    }).state("website.unsubscribe", {
      url: "/unsubscribe/:email/:provider",
      title: "unsubscribe",
      templateUrl: "app/pages/unsubscribe/unsubscribe.html",
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("website.unsubscribeDone", {
      url: "/unsubscribeDone",
      title: "Unsubscribe Done",
      templateUrl: "app/pages/unsubscribe/unsubscribeDone.html",
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("website.unsubscribeDoneBtype", {
      url: "/unsubscribeDoneBtype",
      title: "Unsubscribe Error",
      templateUrl: "app/pages/unsubscribe/unsubscribeDoneBtype.html",
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("website.unsubscribeDoneEtype", {
      url: "/unsubscribeDoneEtype",
      title: "Unsubscribe Error",
      templateUrl: "app/pages/unsubscribe/unsubscribeDoneEtype.html",
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("website.unsubscribeDoneCtypeActive", {
      url: "/unsubscribeDoneCtypeActive",
      title: "Unsubscribe Error",
      templateUrl: "app/pages/unsubscribe/unsubscribeDoneCtypeActive.html",
      controller: ["$scope", function (e) {
        e.openWeb1 = function () {
          window.open("https://support.google.com/pay#topic=7625138", "_blank")
        }, e.openWeb2 = function () {
          window.open("https://support.apple.com/ko-kr/HT202039", "_blank")
        }
      }],
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    }).state("website.unsubscribeDoneCtypePay", {
      url: "/unsubscribeDoneCtypePay",
      title: "Unsubscribe Error",
      templateUrl: "app/pages/unsubscribe/unsubscribeDoneCtypePay.html",
      controller: ["$scope", function (e) {
        e.openWeb1 = function () {
          window.open("https://support.google.com/pay#topic=7625138", "_blank")
        }, e.openWeb2 = function () {
          window.open("https://support.google.com/pay#topic=7625138", "_blank")
        }, e.openWeb3 = function () {
          window.open("https://support.apple.com/ko-kr/HT202039", "_blank")
        }, e.openWeb4 = function () {
          window.open("https://support.apple.com/ko-kr/HT204084", "_blank")
        }
      }],
      resolve: a.resolveFor("spinkit", "akoenig.deckgrid", "ngDialog", "oitozero.ngSweetAlert", "ngTable")
    })
  }

  angular.module("app.routes").config(e).constant("config", {
    srv: {
      dispatcherSvcUrl: "https://dispatcher.stage.showit.sbcsvl.com/dispatcher/0.3",
      stageDispatcher: "https://dispatcher.stage.showit.sbcsvl.com/dispatcher/0.3",
      devDispatcher: "https://dispatcher.dev.showit.sbcsvl.com/dispatcher/0.3",
      catalog: "hq",
      catalogHq: "hq",
      catalogDemo: "demo",
      catalogBeta: "beta",
      token: null,
      clientId: "localhost-portal"
    }
  }), e.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider", "RouteHelpersProvider", "jwtOptionsProvider"]
}(), function () {
  function e(e, t) {
    e.app = {
      name: "Promota",
      description: "Promota Portal",
      year: (new Date).getFullYear(),
      layout: {
        isFixed: !0,
        isCollapsed: !1,
        isBoxed: !1,
        isRTL: !1,
        horizontal: !1,
        isFloat: !1,
        asideHover: !1,
        theme: null
      },
      useFullLayout: !1,
      hiddenFooter: !1,
      offsidebarOpen: !1,
      asideToggled: !1,
      viewAnimation: "ng-fadeInUp"
    }, e.app.layout.horizontal = "app-h" === e.$stateParams.layout, angular.isDefined(t.layout) ? e.app.layout = t.layout : t.layout = e.app.layout, e.$watch("app.layout", function () {
      t.layout = e.app.layout
    }, !0), e.$watch("app.layout.isCollapsed", function (t) {
      t === !1 && e.$broadcast("closeSidebarMenu")
    })
  }

  angular.module("app.settings").run(e), e.$inject = ["$rootScope", "$localStorage"]
}(), function () {
  function e(e, t, o, a, n, r, s) {
    function i() {
      function r() {
        a.getPortalMenu(s), e.app.layout.theme = "app/css/theme-i.css"
      }

      function s(e) {
        t.menuItems = e
      }

      function i(e) {
        if (e) {
          if (e.sref && "#" !== e.sref) return o.is(e.sref) || o.includes(e.sref);
          var t = !1;
          return angular.forEach(e.submenu, function (e) {
            i(e) && (t = !0)
          }), t
        }
      }

      function c(e) {
        e += "";
        for (var t in u) (e < 0 || e.indexOf(t) < 0) && (u[t] = !0)
      }

      function l(e) {
        return "string" == typeof e && !(e.indexOf("-") < 0)
      }

      var u = [];
      e.$watch("app.layout.asideHover", function (e, t) {
        t === !1 && e === !0 && c(-1)
      }), r(), t.getMenuItemPropClasses = function (e) {
        return (e.heading ? "nav-heading" : "") + (i(e) ? " active" : "")
      }, t.addCollapse = function (t, o) {
        u[t] = !!e.app.layout.asideHover || !i(o)
      }, t.isCollapse = function (e) {
        return u[e]
      }, t.toggleCollapse = function (o, a) {
        return !(!n.isSidebarCollapsed() && !e.app.layout.asideHover) || (angular.isDefined(u[o]) ? t.lastEventFromChild || (u[o] = !u[o], c(o)) : a && c(-1), t.lastEventFromChild = l(o), !0)
      }
    }

    i()
  }

  angular.module("app.sidebar").controller("SidebarController", e), e.$inject = ["$rootScope", "$scope", "$state", "SidebarLoader", "Utils", "$localStorage", "MainLoader"]
}(), function () {
  function e(e, t, o, a) {
    function n(o, n, s) {
      function u(e) {
        e === !0 ? t(function () {
          h.on(v, function (e) {
            $(e.target).parents(".aside").length || d()
          })
        }) : h.off(v)
      }

      function d() {
        e.app.asideToggled = !1, o.$$phase || o.$apply()
      }

      var g = e.$state.current.name, p = n, f = a.isTouch() ? "click" : "mouseenter", m = $();
      if (p.on(f, ".nav > li", function () {
        (a.isSidebarCollapsed() || e.app.layout.asideHover) && (m.trigger("mouseleave"), m = i($(this), p), r())
      }), o.$on("closeSidebarMenu", function () {
        c()
      }), l.on("resize", function () {
        a.isMobile() || d()
      }), e.$on("$stateChangeStart", function (t, o) {
        g = o.name, d(), e.$broadcast("closeSidebarMenu")
      }), angular.isDefined(s.sidebarAnyclickClose)) {
        var h = $(".wrapper"), v = "click.sidebar";
        e.$watch("app.asideToggled", u)
      }
    }

    function r() {
      var e = $("<div/>", {"class": "dropdown-backdrop"});
      e.insertAfter(".aside-inner").on("click mouseenter", function () {
        c()
      })
    }

    function s(e) {
      e.siblings("li").removeClass("open").end().toggleClass("open")
    }

    function i(t, o) {
      c();
      var a = t.children("ul");
      if (!a.length) return $();
      if (t.hasClass("open")) return s(t), $();
      var n = $(".aside"), r = $(".aside-inner"),
          i = parseInt(r.css("padding-top"), 0) + parseInt(n.css("padding-top"), 0),
          u = a.clone().appendTo(n);
      s(t);
      var d = t.position().top + i - o.scrollTop(), g = l.height();
      return u.addClass("nav-floating").css({
        position: e.app.layout.isFixed ? "fixed" : "absolute",
        top: d,
        bottom: u.outerHeight(!0) + d > g ? 0 : "auto"
      }), u.on("mouseleave", function () {
        s(t), u.remove()
      }), u
    }

    function c() {
      $(".dropdown-backdrop").remove(), $(".sidebar-subnav.nav-floating").remove(), $(".sidebar li.open").removeClass("open")
    }

    var l = angular.element(o), u = {
      link: n,
      restrict: "EA",
      template: '<nav class="sidebar" ng-transclude></nav>',
      transclude: !0,
      replace: !0
    };
    return u
  }

  angular.module("app.sidebar").directive("sidebar", e), e.$inject = ["$rootScope", "$timeout", "$window", "Utils"]
}(), function () {
  function e(e) {
    function t(t, o) {
      var a = "server/sidebar-menu-portal.json", n = a + "?v=" + (new Date).getTime();
      o = o || function () {
        alert("Failure loading menu")
      }, e.get(n).success(t).error(o)
    }

    function o(t, o) {
      var a = "server/sidebar-menu-support.json", n = a + "?v=" + (new Date).getTime();
      o = o || function () {
        alert("Failure loading menu")
      }, e.get(n).success(t).error(o)
    }

    this.getPortalMenu = t, this.getSupportMenu = o
  }

  angular.module("app.sidebar").service("SidebarLoader", e), e.$inject = ["$http"]
}(), function () {
  function e(e) {
    function t() {
      e.user = {
        name: "John",
        job: "ng-developer",
        picture: "app/img/user/02.jpg"
      }, e.toggleUserBlock = function () {
        e.$broadcast("toggleUserBlock")
      }, e.userBlockVisible = !0, e.$on("toggleUserBlock", function () {
        e.userBlockVisible = !e.userBlockVisible
      })
    }

    t()
  }

  angular.module("app.sidebar").controller("UserBlockController", e), e.$inject = ["$rootScope"]
}(), function () {
  function e(e) {
    e.useStaticFilesLoader({
      prefix: "app/i18n/",
      suffix: ".json"
    }), e.preferredLanguage("ko-kr"), e.useLocalStorage(), e.usePostCompiling(!0)
  }

  angular.module("app.translate").config(e), e.$inject = ["$translateProvider"]
}(), function () {
  function e(e, t) {
    e.language = {
      listIsOpen: !1, available: {en: "English", es_AR: "Español"}, init: function () {
        var o = t.proposedLanguage() || t.use(), a = t.preferredLanguage();
        e.language.selected = e.language.available[o || a]
      }, set: function (o) {
        t.use(o), e.language.selected = e.language.available[o], e.language.listIsOpen = !e.language.listIsOpen
      }
    }, e.language.init()
  }

  angular.module("app.translate").run(e), e.$inject = ["$rootScope", "$translate"]
}(), function () {
  function e(e) {
    function t(t, o, a) {
      t.$watch(function () {
        return t.$eval(a.animateEnabled, t)
      }, function (t) {
        e.enabled(!!t, o)
      })
    }

    var o = {link: t, restrict: "A"};
    return o
  }

  angular.module("app.utils").directive("animateEnabled", e), e.$inject = ["$animate"]
}(), function () {
  function e(e) {
    return e.jQBrowser
  }

  angular.module("app.utils").service("Browser", e), e.$inject = ["$window"]
}(), function () {
  function e(e, t) {
    function o(o, a) {
      a.on("click", function (a) {
        a.preventDefault(), o.resetKey ? (delete t[o.resetKey], e.go(e.current, {}, {reload: !0})) : $.error("No storage key specified for reset.")
      })
    }

    var a = {link: o, restrict: "A", scope: {resetKey: "@"}};
    return a
  }

  angular.module("app.utils").directive("resetKey", e), e.$inject = ["$state", "$localStorage"]
}(), function () {
  function e(e) {
    function t(t, o) {
      e.msie ? o.addClass("hide") : o.on("click", function (e) {
        e.preventDefault(), screenfull.enabled ? (screenfull.toggle(), screenfull.isFullscreen ? $(this).children("em").removeClass("fa-expand").addClass("fa-compress") : $(this).children("em").removeClass("fa-compress").addClass("fa-expand")) : $.error("Fullscreen not enabled")
      })
    }

    var o = {link: t, restrict: "A"};
    return o
  }

  angular.module("app.utils").directive("toggleFullscreen", e), e.$inject = ["Browser"]
}(), function () {
  function e() {
    function e(e, o, a) {
      o.on("click", function (e) {
        o.is("a") && e.preventDefault();
        var n, r = a.loadCss;
        r ? (n = t(r), n || $.error("Error creating stylesheet link element.")) : $.error("No stylesheet location defined.")
      })
    }

    function t(e) {
      var t = "autoloaded-stylesheet", o = $("#" + t).attr("id", t + "-old");
      return $("head").append($("<link/>").attr({
        id: t,
        rel: "stylesheet",
        href: e
      })), o.length && o.remove(), $("#" + t)
    }

    var o = {link: e, restrict: "A"};
    return o
  }

  angular.module("app.utils").directive("loadCss", e)
}(), function () {
  function e(e, t) {
    function o(o, a, n) {
      function r() {
        var t = e(new Date, s);
        a.text(t)
      }

      var s = n.format;
      r();
      var i = t(r, 1e3);
      o.$on("$destroy", function () {
        t.cancel(i)
      })
    }

    var a = {link: o, restrict: "EA"};
    return a
  }

  function t(e) {
    return function (t, o, a) {
      if (t) return t.indexOf("Z") === -1 && t.indexOf("+") === -1 && (t += "Z"), e("date")(t, o, a)
    }
  }

  angular.module("app.utils").directive("now", e).filter("utcToLocal", t), e.$inject = ["dateFilter", "$interval"], t.$inject = ["$filter"]
}(), function () {
  function e() {
    function e(e, t) {
      t.on("change", function () {
        var e = $(this), t = e.index() + 1, o = e.find('input[type="checkbox"]'),
            a = e.parents("table");
        a.find("tbody > tr > td:nth-child(" + t + ') input[type="checkbox"]').prop("checked", o[0].checked)
      })
    }

    var t = {link: e, restrict: "A"};
    return t
  }

  angular.module("app.utils").directive("checkAll", e)
}(), function () {
  function e(e, t) {
    function o(o, a) {
      a.on("click", function () {
        t(function () {
          e.dispatchEvent(new Event("resize"))
        })
      })
    }

    var a = {link: o, restrict: "A"};
    return a
  }

  angular.module("app.utils").directive("triggerResize", e), e.$inject = ["$window", "$timeout"]
}(), function () {
  function e(e, t) {
    var o = angular.element("html"), a = angular.element(e), n = angular.element("body");
    return {
      support: {
        transition: function () {
          var e = function () {
            var e, t = document.body || document.documentElement, o = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend"
            };
            for (e in o) if (void 0 !== t.style[e]) return o[e]
          }();
          return e && {end: e}
        }(),
        animation: function () {
          var e = function () {
            var e, t = document.body || document.documentElement, o = {
              WebkitAnimation: "webkitAnimationEnd",
              MozAnimation: "animationend",
              OAnimation: "oAnimationEnd oanimationend",
              animation: "animationend"
            };
            for (e in o) if (void 0 !== t.style[e]) return o[e]
          }();
          return e && {end: e}
        }(),
        requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (e) {
          window.setTimeout(e, 1e3 / 60)
        },
        touch: "ontouchstart" in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || window.DocumentTouch && document instanceof window.DocumentTouch || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0 || !1,
        mutationobserver: window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null
      }, isInView: function (e, t) {
        var o = $(e);
        if (!o.is(":visible")) return !1;
        var n = a.scrollLeft(), r = a.scrollTop(), s = o.offset(), i = s.left, c = s.top;
        return t = $.extend({
          topoffset: 0,
          leftoffset: 0
        }, t), c + o.height() >= r && c - t.topoffset <= r + a.height() && i + o.width() >= n && i - t.leftoffset <= n + a.width()
      }, langdirection: "rtl" === o.attr("dir") ? "right" : "left", isTouch: function () {
        return o.hasClass("touch")
      }, isSidebarCollapsed: function () {
        return n.hasClass("aside-collapsed")
      }, isSidebarToggled: function () {
        return n.hasClass("aside-toggled")
      }, isMobile: function () {
        return a.width() < t.tablet
      }
    }
  }

  function t(e) {
    function t(t) {
      return t + "&authorization=user%20" + e.getUserToken()
    }

    function o(e) {
      return e
    }

    this.getAuthorizedLocation = t, this.getNonAuthorizedLocation = o
  }

  angular.module("app.utils").service("Utils", e).service("PromotaUtils", t), e.$inject = ["$window", "APP_MEDIAQUERY"], t.$inject = ["UserSession"]
}(), function () {
  angular.module("app.admin", ["ngStorage", "angular-jwt"]).run(["$rootScope", "$http", "$state", "$stateParams", "$localStorage", "LoginLoader", function (e, t, o, a, n, r) {
    t.defaults.headers.common["Content-Type"] = "application/json", t.defaults.cache = !1
  }]).config(["jwtInterceptorProvider", "$httpProvider", function (e, t) {
    e.tokenGetter = ["$localStorage", function (e) {
      return e.userSession ? e.userSession.token : null
    }], e.authPrefix = "user ", t.interceptors.push("jwtInterceptor")
  }])
}(), function () {
  angular.module("app.contents", ["ngStorage", "angular-jwt"]).run(["$rootScope", "$http", "$state", "$localStorage", "LoginLoader", function (e, t, o, a, n) {
    t.defaults.headers.common["Content-Type"] = "application/json"
  }]).config(["jwtInterceptorProvider", "$httpProvider", function (e, t) {
    e.tokenGetter = ["jwtHelper", "$localStorage", function (e, t) {
      return "testing"
    }], e.authPrefix = "user ", t.interceptors.push("jwtInterceptor")
  }])
}(), function () {
  angular.module("app.website", ["ngStorage", "angular-jwt"]).run(["$rootScope", "$http", "$state", "$localStorage", "LoginLoader", "$window", "Config", function (e, t, o, a, n, r, s) {
    t.defaults.cache = !1, window.fbAsyncInit = function () {
      FB.init({
        appId: s.facebookAppId,
        autoLogAppEvents: !0,
        xfbml: !0,
        version: "v2.9"
      }), FB.AppEvents.logPageView()
    }, function (e, t, o) {
      var a, n = e.getElementsByTagName(t)[0];
      e.getElementById(o) || (a = e.createElement(t), a.id = o, a.src = "//connect.facebook.net/en_US/sdk.js", n.parentNode.insertBefore(a, n))
    }(document, "script", "facebook-jssdk")
  }])
}(), function () {
  angular.module("app.feedback", ["ngStorage", "angular-jwt"]).run(["$rootScope", "$http", "$state", "$localStorage", "LoginLoader", function (e, t, o, a, n) {
    t.defaults.headers.common["Content-Type"] = "application/json", t.defaults.cache = !1
  }])
}(), function () {
  angular.module("app.page", ["ngStorage", "angular-jwt"]).run(["$rootScope", "$http", "$state", "$localStorage", "LoginLoader", function (e, t, o, a, n) {
    t.defaults.cache = !1
  }])
}(), function () {
  angular.module("app.support", ["ngStorage", "angular-jwt"]).run(["$rootScope", "$http", "$state", "$localStorage", "LoginLoader", function (e, t, o, a, n) {
    t.defaults.headers.common["Content-Type"] = "application/json", t.defaults.cache = !1
  }])
}(), function () {
  function e(e, t, o, a, n, r, s) {
    function i() {
      function s(e) {
        var t = r.getUserToken();
        t ? n.isAuthenticated(t, function () {
          e()
        }, function (e) {
        }) : (console.log("No token found"), o.go("page.login"))
      }

      function i() {
        t.loading = !0, a.listGroups(l)
      }

      function l(e) {
        console.log(e), t.loading = !1, c.groups = e.result.contents, c.pageInfo = e.result.pageInfo
      }

      c.basepath = e.basepath, s(i), t.openCreateGroupPage = function () {
        o.go("app.admin.group.newgroup")
      }, c.openGroupDetail = function (e) {
        o.go("app.admin.group.details", {groupId: e.id})
      }
    }

    var c = this;
    i(), t.openWorkHistory = function () {
      s.work = "Admin Groups", s.searchdata = {
        email: "",
        work: "Admin Groups",
        target: "",
        orderby: "desc",
        page: 1
      }, s.atypePopupProfile()
    }
  }

  function t(e, t, o, a) {
    function n() {
      s.basepath = e.basepath, t.goBack = function () {
        o.go("app.admin.group")
      }
    }

    function r(e) {
      o.go("app.admin.group")
    }

    var s = this;
    s.isEditMode = !1, n(), t.createGroup = function () {
      a.createUpdateGroup(t["new"], t.groupId, r)
    }
  }

  function o(e, t, o, a, n, r, s, i) {
    function c() {
      function i() {
        var e = a.groupId;
        n.getGroups(e, c), n.listGroupMembers(e, 1, u)
      }

      function c(e) {
        l.groupInfo = e.result
      }

      function u(e) {
        l.groupMembers = e.result.contents, t.pageInfo = e.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.currentPage = t.pageInfo.currentPage,
            t.maxSize = 5, t.itemsPerPage = 16
      }

      function d(e) {
        o.go("app.admin.group.details", {groupId: a.groupId}, {reload: !0})
      }

      l.basepath = e.basepath, i(), t.pageChanged = function (e) {
        var t = a.groupId;
        n.listGroupMembers(t, e, u)
      }, l.openAddMemberPage = function () {
        var e = a.groupId;
        r.open({
          template: "addMemberDialog",
          controller: ["$scope", "$timeout", "AdminLoader", function (t, n, s) {
            function i(e) {
              r.close(), o.go("app.admin.group.details", {groupId: a.groupId}, {reload: !0})
            }

            t.addNewUser = function () {
              s.addUserToGroup(e, t.userId, i)
            }
          }],
          className: "ngdialog-theme-default custom-width"
        })
      }, l.openMemberDetail = function (e) {
        r.open({
          template: "memberDetailDialog",
          controller: ["$scope", "$timeout", "AdminLoader", function (t, o, a) {
            t.member = e
          }],
          className: "ngdialog-theme-default custom-width"
        })
      }, l.removeMember = function (e) {
        var t = a.groupId;
        s.swal({
          title: "Are you sure?",
          text: "This user will be removed from this group",
          type: "warning",
          showCancelButton: !0,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, remove it!",
          closeOnConfirm: !0
        }, function (o) {
          o && n.removeUserFromGroup(t, e.id, d)
        })
      }
    }

    var l = this;
    t.totalItems = 0, c(), t.goBack = function () {
      o.go("app.admin.group")
    }, t.openWorkHistory = function () {
      i.work = "Admin Groups", i.target = l.groupInfo.id, i.searchdata = {
        email: "",
        work: "Admin Groups",
        target: l.groupInfo.id,
        orderby: "desc",
        page: 1
      }, console.log(i.searchdata), i.btypePopupProfile()
    }
  }

  angular.module("app.admin").controller("AdminController", e).controller("NewGroupController", t).controller("AdminMemberController", o), e.$inejct = ["RouteHelpers", "$scope", "$state", "AdminLoader", "LoginLoader", "UserSession", "WorkhistoryInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "AdminLoader", "LoginLoader", "UserSession", "WorkhistoryInfoLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "AdminLoader"], t.$inject = ["RouteHelpers", "$scope", "$state", "AdminLoader"], o.$inejct = ["RouteHelpers", "$scope", "$state", "$stateParams", "AdminLoader", "ngDialog", "SweetAlert", "WorkhistoryInfoLoader"], o.$inject = ["RouteHelpers", "$scope", "$state", "$stateParams", "AdminLoader", "ngDialog", "SweetAlert", "WorkhistoryInfoLoader"]
}(), function () {
  function e(e, t, o, a, n, r) {
    function s(t, a) {
      var s = n.dispatcherSvcUrl + "/user/api/listgroups";
      a = a || function (e, t) {
        401 === t && o.go("page.login"), r.messageErrorPopup("Error : Failure loading groups")
      }, e.get(s).success(t).error(a)
    }

    function i(t, a, s) {
      var i = n.dispatcherSvcUrl + "/user/api/getgroup?id=" + t;
      s = s || function (e, t) {
        401 === t && o.go("page.login"), r.messageErrorPopup("Error : Failure get group")
      }, e.get(i).success(a).error(s)
    }

    function c(t, a, s, i) {
      var c = n.dispatcherSvcUrl + "/user/api/createorupdategroup/" + a;
      i = i || function (e, t) {
        401 === t && o.go("page.login"), r.messageErrorPopup("Error : Failure creating or updating Group")
      }, e.post(c, t).success(s).error(i)
    }

    function l(t, a, s, i) {
      var c = "groupid=" + t;
      c = c + "&userid=" + a;
      var l = n.dispatcherSvcUrl + "/user/api/addusertogroup?" + c;
      i = i || function (e, t) {
        401 === t && o.go("page.login"), r.messageErrorPopup("Error : Failure adding user to group")
      }, e.post(l).success(s).error(i)
    }

    function u(t, a, s, i) {
      var c = "groupid=" + t;
      c = c + "&userid=" + a;
      var l = n.dispatcherSvcUrl + "/user/api/removeuserfromgroup?" + c;
      i = i || function (e, t) {
        401 === t && o.go("page.login"), r.messageErrorPopup("Error : Failure removing user from group")
      }, e.post(l).success(s).error(i)
    }

    function d(t, a, s, i) {
      var c = n.dispatcherSvcUrl + "/user/api/listgroupmembers?groupid=" + t + "&page=" + a;
      i = i || function (e, t) {
        401 === t && o.go("page.login"), r.messageErrorPopup("Error : Failure list group members")
      }, e.get(c).success(s).error(i)
    }

    this.listGroups = s, this.getGroups = i, this.createUpdateGroup = c, this.addUserToGroup = l, this.removeUserFromGroup = u, this.listGroupMembers = d
  }

  angular.module("app.admin").service("AdminLoader", e), e.$inject = ["$http", "config", "$state", "$localStorage", "Config", "UserInfoLoader"]
}(), function () {
  function e(e, t, o, a, n, r, s, i) {
    console.log(o);
    t.subTitle = "Biz Customer", t.productTypeList = [{id: "1", name: "B2C"}, {
      id: "2",
      name: "B2B SOHO"
    }, {id: "3", name: "B2B FRANCHISE"}], t.channelTypeList = [{id: "1", name: "판매채널"}, {
      id: "2",
      name: "프랜차이즈"
    }], t.getProductType = function (e) {
      return void 0 === e ? null : t.productTypeList[e - 1].name
    }, t.getChannelType = function (e) {
      return void 0 === e ? null : t.channelTypeList[e - 1].name
    }, t.loading = !0, i.bizCustomerCurrentPage = 1, t.bizCustomerCurrentPage = i.bizCustomerCurrentPage, i.getPartnerList(t.bizCustomerCurrentPage).then(function (e) {
      console.log("res", e), t.partnerList = e.data.result.partners, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.bizCustomerCurrentPage = t.pageInfo.currentPage, i.bizCustomerCurrentPage = t.bizCustomerCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
    }, function (e, a) {
      401 === a && o.go("page.login"), t.loading = !1, t.partnerList = [], console.log("e:::", e), i.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
    }), t.pageChanged = function (e) {
      t.loading = !0, t.partnerList = [], i.bizCustomerCurrentPage = e, t.bizCustomerCurrentPage = i.bizCustomerCurrentPage, i.getPartnerList(t.bizCustomerCurrentPage).then(function (e) {
        console.log("res", e), t.partnerList = e.data.result.partners, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.bizCustomerCurrentPage = t.pageInfo.currentPage, i.bizCustomerCurrentPage = t.bizCustomerCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
      }, function (e, a) {
        t.loading = !1, t.partnerList = [], 401 === a && o.go("page.login"), i.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.goBizCustomerDetail = function (e) {
      s.partner = e, s.popupPartnerDetail()
    }
  }

  function t(e, t, o, a, n, r, s, i, c, l, u, d) {
    function g(e) {
      console.log("USER::", e.result.contents[0]), a.user = e.result.contents[0], a.popupProfileIndex = 0, a.popupProfile(a.user)
    }

    t.partner = d.partner, console.log("$scope.partner", t.partner), t.productTypeList = [{
      id: "1",
      name: "B2C"
    }, {id: "2", name: "B2B SOHO"}, {
      id: "3",
      name: "B2B FRANCHISE"
    }], t.channelTypeList = [{id: "1", name: "판매채널"}, {
      id: "2",
      name: "프랜차이즈"
    }], t.goUserDetail = function (e) {
      console.log(e);
      var t = {id: e, page: 1};
      a.getNewUserProfile(t, g)
    }, t.getProductType = function (e) {
      return void 0 === e ? null : t.productTypeList[e - 1].name
    }, t.getChannelType = function (e) {
      return void 0 === e ? null : t.channelTypeList[e - 1].name
    }, t.loading = !0, a.bizMemberCurrentPage = 1, t.bizMemberCurrentPage = a.bizMemberCurrentPage, a.getPartnerMemberList(t.partner.id, t.bizMemberCurrentPage).then(function (e) {
      console.log("res", e), t.partnerMemberList = e.data.result.history, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.bizMemberCurrentPage = t.pageInfo.currentPage, a.bizMemberCurrentPage = t.bizMemberCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
    }, function (e, n) {
      401 === n && o.go("page.login"), t.loading = !1, t.partnerList = [], console.log("e:::", e), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
    }), t.pageChanged = function (e) {
      console.log("page:", e), t.loading = !0, t.partnerMemberList = [], a.bizMemberCurrentPage = e, t.bizMemberCurrentPage = a.bizMemberCurrentPage, a.getPartnerMemberList(t.partner.id, t.bizMemberCurrentPage).then(function (e) {
        console.log("res", e), t.partnerMemberList = e.data.result.history, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.bizMemberCurrentPage = t.pageInfo.currentPage, a.bizMemberCurrentPage = t.bizMemberCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
      }, function (e, n) {
        t.loading = !1, t.partnerMemberList = [], 401 === n && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.file_changed = function (e) {
      var n = e.files[0], r = new FileReader;
      r.onload = function (e) {
        console.log("evt", e.target.result);
        var n = t.partner;
        n.attributes = null, n.attributes = angular.fromJson(e.target.result), a.postPartnerProfile(n).then(function (o) {
          console.log("res", o), a.messagePopup("협약사업자 Profile적용완료"), t.partner.attributes = null, i(function () {
            t.partner.attributes = angular.fromJson(e.target.result)
          }, 1e3)
        }, function (e, t) {
          401 === t && o.go("page.login"), console.log("e:::", e), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
        })
      }, n && r.readAsText(n)
    }
  }

  angular.module("app.contents").controller("BizCustomerInfoController", e).controller("ProfilePartnerController", t), e.$inejct = ["RouteHelpers", "$scope", "$state", "ProductInfoLoader", "$window", "WorkhistoryInfoLoader", "BizCustomerInfoLoader", "UserInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "ProductInfoLoader", "$window", "WorkhistoryInfoLoader", "BizCustomerInfoLoader", "UserInfoLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader", "WorkhistoryInfoLoader", "BizCustomerInfoLoader"], t.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader", "WorkhistoryInfoLoader", "BizCustomerInfoLoader"]
}(), function () {
  function e(e, t, o, a, n, r, s, i) {
    function c() {
      s.open({
        template: i.basepath("support/profile-partner.html"),
        controller: "ProfilePartnerController",
        className: "ngdialog-theme-default customw-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    this.partner = null, this.popupPartnerDetail = c
  }

  angular.module("app.contents").service("BizCustomerInfoLoader", e), e.$inject = ["$http", "config", "$state", "$localStorage", "Config", "UserInfoLoader", "ngDialog", "RouteHelpers"]
}(), function () {
  function e(e, t, o, a, n) {
    function r(r, s) {
      var i = "catalogid=" + o.srv.catalog,
          c = a.dispatcherSvcUrl + "/provider/api/listcategories?" + i;
      s = s || function (e, o) {
        401 === o && t.go("page.login"), n.messageErrorPopup("Error : Failure loading categories")
      }, e.get(c).success(r).error(s)
    }

    function s(o, r, s, i) {
      var c = "&provider=" + o.provider;
      c = c + "&resourceid=" + o.id, c = c + "&resourcetype=" + o.resourceType, c = c + "&page=" + r;
      var l = a.dispatcherSvcUrl + "/discovery/api/discoverchildresources?" + c;
      i = i || function (e, o) {
        401 === o && t.go("page.login"), n.messageErrorPopup("Error : Failure loading data")
      }, e.get(l).success(s).error(i)
    }

    function i(r, s, i) {
      var c = a.dispatcherSvcUrl + "/provider/api/createcategory?catalogid=" + o.srv.catalog;
      i = i || function (e, o) {
        401 === o && t.go("page.login"), n.messageErrorPopup("Error : Failure updating category")
      }, e.post(c, r).success(s).error(i)
    }

    function c(r, s, i) {
      var c = "&catalogid=" + o.srv.catalog;
      c = c + "&contentid=" + s;
      var u = a.dispatcherSvcUrl + "/provider/api/deletecontent?" + c;
      l.onError = l.onError || function (e, o) {
        401 === o && t.go("page.login"), n.messageErrorPopup("Error : Failure deleting content")
      }, e.post(u).success(r).error(i)
    }

    console.log("srvUrl", o);
    var l = this;
    l.getContents = s, l.updateCategory = i, l.deleteContent = c, l.getProviderCategories = r, l.onReady = null, l.onError = null
  }

  angular.module("app.contents").service("CategoryLoader", e), e.$inject = ["$http", "$state", "config", "Config", "UserInfoLoader"]
}(), function () {
  function e(e, t, o, a, n, r, s) {
    function i() {
      function o(e) {
        a.listCoupons(e, n)
      }

      function n(e) {
        console.log(e.result), c.coupons = e.result.couponDefs, t.pageInfo = e.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.couponInfoCurrentPage = t.pageInfo.currentPage, a.couponInfoCurrentPage = t.couponInfoCurrentPage, t.maxSize = 5, t.itemsPerPage = 5, t.totalResourceCount = e.result.pageInfo.totalResourceCount, t.loading = !1
      }

      c.basepath = e.basepath, t.loading = !0, a.couponInfoCurrentPage = 1, t.couponInfoCurrentPage = a.couponInfoCurrentPage, o(1), t.pageChanged = function (e) {
        o(e)
      }
    }

    var c = this;
    t.totalResourceCount = 0, i(), t.openWorkHistory = function () {
      s.work = "Coupons", s.searchdata = {
        email: "",
        work: "쿠폰 구성정보",
        target: "",
        orderby: "desc",
        page: 1
      }, s.atypePopupProfile()
    }, t.openCreateCouponPage = function () {
      o.go("app.contents.coupon.newcoupon")
    }, t.openCouponDetail = function (e) {
      o.go("app.contents.coupon.updatecoupon", {cpnCode: e.cpnCode})
    }
  }

  function t(e, t, o, a, n) {
    function r() {
      c.basepath = e.basepath, t.goBack = function () {
        o.go("app.contents.coupon")
      }
    }

    function s(e) {
      o.go("app.contents.coupon")
    }

    function i(e) {
      console.log("failed!!"), n.messagePopup("Coupon 정보를 등록하는데 실패하였습니다."), o.go("app.contents.coupon")
    }

    var c = this;
    r(), t.createCoupon = function () {
      if (!t.cpnName) return void n.messagePopup("Coupon Name 은 필수 입력 항목입니다.");
      if (!t.cpnCode) return void n.messagePopup("Coupon Code 는 필수 입력 항목입니다.");
      if (2 !== t.cpnCode.length) return void n.messagePopup("Coupon Code 는 2자리로 생성 가능합니다.");
      if (!t.validDays) return void n.messagePopup("Validity Period 는 필수 입력 항목입니다.");
      if (isNaN(t.validDays)) return void n.messagePopup("Validity Period 는 숫자만 입력 가능합니다.");
      if (t.validDays > 999) return void n.messagePopup("Validity Period 는 최대 3자리까지만 입력 가능합니다.");
      t.cpnCode = t.cpnCode.toUpperCase();
      var e = {
        cpnName: t.cpnName,
        cpnCode: t.cpnCode,
        validDays: parseInt(t.validDays),
        description: t.description
      };
      a.createNewCoupon(e, s, i)
    }
  }

  function o(e, t, o, a, n, r) {
    function s() {
      function s(e) {
        console.log(e.result), console.log(e.result.couponDefs), e.result.couponDefs && 1 == e.result.couponDefs.length ? (l.coupon = e.result.couponDefs[0], t.cpnCode = l.coupon.cpnCode, t.cpnName = l.coupon.cpnName, t.validDays = l.coupon.validDays, t.description = l.coupon.description, t.lastModified = l.coupon.lastModified) : (r.messagePopup("Coupon 정보를 불러오는데 실패하였습니다."), o.go("app.contents.coupon"))
      }

      l.basepath = e.basepath, t.goBack = function () {
        o.go("app.contents.coupon")
      }, t.cpnCode = a.cpnCode, n.getCouponByCode(t.cpnCode, s)
    }

    function i(e) {
      o.go("app.contents.coupon")
    }

    function c(e) {
      console.log("failed!!"), r.messagePopup("Coupon 정보를 수정하는데 실패하였습니다."), o.go("app.contents.coupon")
    }

    var l = this;
    s(), t.modifyCoupon = function () {
      if (!t.cpnName) return void r.messagePopup("Coupon Name 은 필수 입력 항목입니다.");
      var e = {cpnName: t.cpnName, description: t.description};
      n.updateCoupon(t.cpnCode, e, i, c)
    }
  }

  angular.module("app.contents").controller("CouponInfoController", e).controller("NewCouponController", t).controller("ModifyCouponController", o), e.$inejct = ["RouteHelpers", "$scope", "$state", "CouponInfoLoader", "LoginLoader", "UserSession", "WorkhistoryInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "CouponInfoLoader", "LoginLoader", "UserSession", "WorkhistoryInfoLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "CouponInfoLoader", "UserInfoLoader"], t.$inject = ["RouteHelpers", "$scope", "$state", "CouponInfoLoader", "UserInfoLoader"], o.$inejct = ["RouteHelpers", "$scope", "$state", "$stateParams", "CouponInfoLoader", "UserInfoLoader"], o.$inject = ["RouteHelpers", "$scope", "$state", "$stateParams", "CouponInfoLoader", "UserInfoLoader"]
}(), function () {
  function e(e, t, o, a, n, r) {
    function s(t, a, s) {
      var i = n.dispatcherSvcUrl + "/user/api/invite/admin/coupon/list?page=" + t;
      s = s || function (e, t) {
        401 === t && o.go("page.login"), r.messageErrorPopup("Error : Failure loading conpons")
      }, e.get(i).success(a).error(s)
    }

    function i(t, a, s) {
      var i = n.dispatcherSvcUrl + "/user/api/invite/admin/coupon/list?page=1&cpnCode=" + t;
      s = s || function (e, t) {
        401 === t && o.go("page.login"), r.messageErrorPopup("Error : Failure loading conpons")
      }, e.get(i).success(a).error(s)
    }

    function c(t, a, s) {
      var i = n.dispatcherSvcUrl + "/user/api/invite/admin/coupon";
      s = s || function (e, t) {
        401 === t && o.go("page.login"), r.messageErrorPopup("Error : Failure creating Coupon")
      }, e.post(i, t).success(a).error(s)
    }

    function l(t, a, s, i) {
      var c = n.dispatcherSvcUrl + "/user/api/invite/admin/coupon/" + t;
      i = i || function (e, t) {
        401 === t && o.go("page.login"), r.messageErrorPopup("Error : Failure updating Coupon")
      }, e.put(c, a).success(s).error(i)
    }

    this.listCoupons = s, this.getCouponByCode = i, this.createNewCoupon = c, this.updateCoupon = l, this.couponInfoCurrentPage = null
  }

  angular.module("app.contents").service("CouponInfoLoader", e), e.$inject = ["$http", "config", "$state", "$localStorage", "Config", "UserInfoLoader"]
}(), function () {
  function e() {
    function e(e, t) {
      var o = t.data();
      o.classInput = t.data("classinput") || o.classInput, t.filestyle(o)
    }

    var t = {link: e, restrict: "A"};
    return t
  }

  angular.module("app.contents").directive("filestyle", e)
}(), function () {
  function e(e, t, o, a, n, r, s, i, c) {
    function l() {
      function a() {
        r.getLocales(n)
      }

      function n(e) {
        console.log(e), u.locales = e.result.contents, u.pageInfo = e.result.pageInfo
      }

      function s(e) {
        o.go("app.contents.locales", {}, {reload: !0})
      }

      u.basepath = e.basepath, a(), t.openCreateCategoryPage = function () {
        r.selectedLocale = null, o.go("app.contents.locales.newlocale")
      }, u.openLocaleDetail = function (e) {
        r.selectedLocale = e, o.go("app.contents.locales.newlocale")
      }, t.display = function (e) {
        return "default" == e || "unpublished" == e ? "/artstore" === o.current.url : "station" == e ? "/artstore" !== o.current.url : void 0
      }, t.deleteContent = function (e) {
        r.deleteCategory(s, e)
      }, t.onDeckClicked = function (e, t) {
        o.go("app.contents.locales.category", {cid: e.id, cname: e.name})
      }
    }

    var u = this;
    t.token = null, t.openWorkHistory = function () {
      c.work = "Locale Info", c.searchdata = {
        email: "",
        work: "Locales",
        target: "",
        orderby: "desc",
        page: 1
      }, c.atypePopupProfile()
    }, l()
  }

  function t(e, t, o, a, n, r, s) {
    function i() {
      function s(e) {
        console.log("getalocaleDone", e), c.defaultLocale = e.result.resources[0].providerMetadata
      }

      function i(e) {
        o.go("app.contents.locales")
      }

      c.basepath = e.basepath;
      var l = r("server/lang.json", {}, {query: {method: "GET", isArray: !0}});
      c.language = l.query(), console.log("States", c.language), n.selectedLocale ? (t["new"] = n.selectedLocale, console.log("new", t["new"]), c.isEditMode = !0) : (a.getLocale("en", s), c.isEditMode = !1), t.createLocale = function () {
        if (console.log(t["new"]), c.isEditMode) "string" == typeof t["new"].categories && (t["new"].categories = t["new"].categories.split(",")), a.updateLocale(t["new"], i); else {
          t["new"].feedbackTypes = [];
          for (var e = 0; e < c.defaultLocale.feedbackTypes.length; e++) {
            var o = {
              feedbackType: c.defaultLocale.feedbackTypes[e].feedbackType,
              label: c.defaultLocale.feedbackTypes[e].label
            };
            t["new"].feedbackTypes.push(o)
          }
          a.createLocale(t["new"], i)
        }
        console.log("new", t["new"])
      }, t.goBack = function () {
        o.go("app.contents.locales")
      }, t.setEnabled = function (e) {
        "Default" === name
      }, c.submitted = !1, c.validateInput = function (e, t) {
        var o = c.formValidate[e];
        return (o.$dirty || c.submitted) && o.$error[t]
      }
    }

    var c = this;
    t.noneDefault = !1, c.radioModel = "false", c.isEditMode = !1, t["new"] = {}, i(), t.openWorkHistory = function () {
      s.work = "Locale Info", s.target = t["new"].id, s.searchdata = {
        email: "",
        work: "Locales",
        target: t["new"].id,
        orderby: "desc",
        page: 1
      }, s.btypePopupProfile()
    }
  }

  angular.module("app.contents").controller("LocalesController", e).controller("NewLocaleController", t), e.$inejct = ["RouteHelpers", "$scope", "$state", "$stateParams", "$routeParams", "LocalesLoader", "$localStorage", "Log inLoader", "WorkhistoryInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "$stateParams", "$routeParams", "LocalesLoader", "$localStorage", "LoginLoader", "WorkhistoryInfoLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "NewLocaleLoader", "LocalesLoader", "$resource", "WorkhistoryInfoLoader"], t.$inject = ["RouteHelpers", "$scope", "$state", "NewLocaleLoader", "LocalesLoader", "$resource", "WorkhistoryInfoLoader"]
}(), function () {
  function e(e, t, o, a, n, r) {
    function s(t, a) {
      var s = n.dispatcherSvcUrl + "/signagecontent/api/locales";
      a = a || function (e, t) {
        401 === t && o.go("page.login"), r.messageErrorPopup("Error : Failure loading locales")
      }, e.get(s).success(t).error(a)
    }

    function i(a, s, i) {
      var c = "&catalogid=" + t.srv.catalog;
      c = c + "&categoryid=" + s;
      var l = n.dispatcherSvcUrl + "/provider/api/deletecategory?" + c;
      i = i || function (e, t) {
        401 === t && o.go("page.login"), r.messageErrorPopup("Error : Failure deleting category")
      }, e.post(l).success(a).error(i)
    }

    this.getLocales = s, this.deleteCategory = i
  }

  function t(e, t, o, a, n) {
    function r(o, r, s) {
      var i = a.dispatcherSvcUrl + "/signagecontent/api/locales";
      s = s || function (e, o) {
        401 === o && t.go("page.login"), n.messageErrorPopup("Error : Failure creating new locale")
      }, e.post(i, o).success(r).error(s)
    }

    function s(o, r, s) {
      var i = a.dispatcherSvcUrl + "/signagecontent/api/locales/" + o.id;
      s = s || function (e, o) {
        401 === o && t.go("page.login"), n.messageErrorPopup("Error : Failure creating new locale")
      }, e.put(i, o).success(r).error(s)
    }

    function i(o, r, s) {
      var i = a.dispatcherSvcUrl + "/discovery/api/discoverchildresources?provider=SignageContent&resourcetype=Content.localedetails&resourceid=" + o;
      s = s || function (e, o) {
        401 === o && t.go("page.login"), n.messageErrorPopup("Error : Failure loading locale")
      }, e.get(i).success(r).error(s)
    }

    this.createLocale = r, this.updateLocale = s, this.getLocale = i, this.selectedLocale = null
  }

  angular.module("app.contents").service("LocalesLoader", e).service("NewLocaleLoader", t), e.$inject = ["$http", "config", "$state", "$localStorage", "Config", "UserInfoLoader"], t.$inject = ["$http", "$state", "config", "Config", "UserInfoLoader"]
}(), function () {
  function e(e, t, o, a, n, r, s) {
    t.openWorkHistory = function () {
      r.work = "개인정보 운영정책 설정", r.searchdata = {
        email: "",
        work: "개인정보 운영정책 설정",
        target: "",
        orderby: "desc",
        page: 1
      }, r.atypePopupProfile()
    }, console.log(o);
    a.getPmpolicy().then(function (e) {
      console.log("getPmpolicy", e), t.pmpolicy = e.data.result
    }, function (e, t) {
      401 === t && o.go("page.login"), UserInfoLoader.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
    }), t.validate = function (e) {
      var o = /^[0-9]+$/;
      o.test(e) || (t.msg = "설정 값을 정확히 입력해주세요..", t.msg2 = "", t.message())
    }, t.groupCheck = n.localStorage.getItem("ngStorage-groups").indexOf("-superuser"), t.message = function () {
      var e = s.openConfirm({
        template: '<div style="padding:3%"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="line-height: inherit;">&nbsp;&nbsp;&nbsp;{{msg}}<br>{{msg2}}</i><br><br><div class="row"><div class="col-md-4 text-center"></div><div class="col-md-4 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">확인</button></div><div class="col-md-3 text-center"></div></div></div>',
        plain: !0,
        className: "ngdialog-theme-default",
        scope: t
      });
      e.then(function (e) {
        console.log("resolved:" + e)
      }, function (e) {
        console.log("rejected:" + e)
      })
    }, t.createPolicy = function () {
      var e = /^[0-9]+$/;
      e.test(t.pmpolicy.arcCsCnt) && e.test(t.pmpolicy.arcLogCnt) && e.test(t.pmpolicy.arcSubCnt) && e.test(t.pmpolicy.arcUgcCnt) && e.test(t.pmpolicy.arcViolationCnt) && e.test(t.pmpolicy.drmntCnt) && e.test(t.pmpolicy.notiDrmmtCnt) && e.test(t.pmpolicy.tranTabCnt) ? t.saveProduct("업데이트 하시겠습니까?") : (t.msg = "설정 값을 정확히 입력해주세요..", t.msg2 = "", t.message())
    }, t.saveProduct = function (e) {
      t.cmsg = e;
      var o = s.openConfirm({
        template: '<div style="padding:3%"><i class="fa fa-exclamation-circle" aria-hidden="true" style="line-height: inherit;">&nbsp;&nbsp;&nbsp;{{cmsg}}</i><br><br><div class="row"><div class="col-md-1 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(2)">업데이트 확인</button></div><div class="col-md-1 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-default" ng-click="confirm(0)">취소</button></div><div class="col-md-3 text-center"></div></div></div>',
        plain: !0,
        className: "ngdialog-theme-default",
        scope: t
      });
      o.then(function (e) {
        2 === e && a.updatePmpolicy(t.pmpolicy).then(function (e) {
          console.log("result", e), t.msg = "업데이트 되었습니다.", t.msg2 = "", t.message()
        }, function (e) {
          console.log("rejected:" + e)
        })
      }, function (e) {
        console.log("rejected:" + e)
      })
    }
  }

  angular.module("app.contents").controller("PmpolicyController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "PmpolicyLoader", "$window", "WorkhistoryInfoLoader", "ngDialog"], e.$inject = ["RouteHelpers", "$scope", "$state", "PmpolicyLoader", "$window", "WorkhistoryInfoLoader", "ngDialog"]
}(), function () {
  function e(e, t, o, a, n, r) {
    function s() {
      var t = n.dispatcherSvcUrl + "/user/api/getPrivacyPolicy";
      return e.get(t)
    }

    function i(t) {
      var o = n.dispatcherSvcUrl + "/user/api/updatePrivacyPolicy";
      return console.log(o), e.post(o, t)
    }

    this.getPmpolicy = s, this.updatePmpolicy = i
  }

  angular.module("app.contents").service("PmpolicyLoader", e), e.$inject = ["$http", "config", "$state", "$localStorage", "Config", "UserInfoLoader"]
}(), function () {
  function e(e, t, o, a, n) {
    function r() {
      function n() {
        t.locales = [{id: "en"}, {id: "ko"}], t.selectedLocale = t.locales[1], console.log("$scope.selectedLocale.id", t.selectedLocale.id), console.log("vm.productCategoryPage", s.productCategoryPage), a.getProductCategories(t.selectedLocale.id, s.productCategoryPage, r), a.getProductCategories(t.selectedLocale.id, 2, r)
      }

      function r(e) {
        console.log("productCategories ::", e), "undefined" == typeof t.activeResources ? t.activeResources = e.result.resources : t.activeResources = t.activeResources.concat(e.result.resources)
      }

      function i(e) {
        o.go("app.contents.productcategories", {}, {reload: !0})
      }

      s.basepath = e.basepath, n(), s.onLocaleChanged = function () {
        t.activeResources = void 0, a.getProductCategories(t.selectedLocale.id, s.productCategoryPage, r), a.getProductCategories(t.selectedLocale.id, 2, r)
      }, s.openCreateProductCategoryPage = function () {
        o.go("app.contents.productcategories.updatecategory")
      }, s.onDeckClicked = function (e) {
        o.go("app.contents.productcategories.updatecategory", {id: e.id}), a.selectedCategory = e
      }, t.getAuthorizedLocation = function (e) {
        return a.getAuthorizedLocation(e)
      }, s.deleteProductCategory = function (e) {
        a.deleteProductCategory(e, i)
      }
    }

    var s = this;
    t.resources = null, t.selectedLocale = null, s.productCategoryPage = 1, s.productCategoryPageInfo = {}, r(), t.openWorkHistory = function () {
      n.work = "Product Categories", n.searchdata = {
        email: "",
        work: "Product Categories",
        target: "",
        orderby: "desc",
        page: 1
      }, n.atypePopupProfile()
    }
  }

  function t(e, t, o, a, n, r, s) {
    function i() {
      function s() {
        t.locales = [{id: "en"}, {id: "ko"}], console.log("test"), a.id ? (c.isEditMode = !0, t["new"] = n.selectedCategory.providerMetadata, "en" == t["new"].attributes.locale ? t.selectedLocale = t.locales[0] : t.selectedLocale = t.locales[1], d()) : (t.selectedLocale = t.locales[0], t["new"].attributes.locale = t.locales[0].id)
      }

      function i(e) {
        o.go("app.contents.productcategories")
      }

      function l() {
        var e = c.myImage;
        r.uploadResource(e, u)
      }

      function u(e) {
        var o, a;
        void 0 == t["new"].attributes.resources && (t["new"].attributes.resources = {}), e && (t["new"].attributes.resources[c.selectedFile] = e), o = document.getElementById(c.selectedFile), a = r.getImageUrl(t["new"].attributes.resources[c.selectedFile]);
        var n = o.getContext("2d");
        n.clearRect(0, 0, o.width, o.height);
        var s = new Image;
        s.onload = function () {
          t.$apply(function () {
            n.drawImage(s, 0, 0, o.width, o.height)
          })
        }, s.src = a
      }

      function d() {
        var e, o;
        t["new"].attributes.resources && Object.keys(t["new"].attributes.resources).forEach(function (a) {
          e = document.getElementById(a), o = r.getImageUrl(t["new"].attributes.resources[a]);
          var n = e.getContext("2d");
          n.clearRect(0, 0, e.width, e.height);
          var s = new Image;
          s.onload = function () {
            t.$apply(function () {
              n.drawImage(s, 0, 0, e.width, e.height)
            })
          }, s.src = o
        })
      }

      c.basepath = e.basepath, s(), c.onLocaleChanged = function () {
        t["new"].attributes.locale = t.selectedLocale.id
      }, t.goBack = function () {
        o.go("app.contents.productcategories")
      }, t.updateProductCategory = function () {
        1 == c.isEditMode ? n.updateProductCategory(t["new"], a.id, i) : n.createProductCategory(t["new"], i), console.log("new", t["new"])
      }, t.file_changed = function (e) {
        var o = e.files[0];
        c.selectedFile = e.getAttribute("name");
        var a = new FileReader;
        a.onload = function (e) {
          t.$apply(function () {
            c.myImage = e.target.result, l()
          })
        }, o && a.readAsDataURL(o)
      }
    }

    var c = this;
    c.isEditMode = !1, t["new"] = {}, t["new"].attributes = {}, t["new"].attributes.resources = {}, i(), t.openWorkHistory = function () {
      s.work = "Product Categories", s.target = a.id, s.searchdata = {
        email: "",
        work: "Product Categories",
        target: a.id,
        orderby: "desc",
        page: 1
      }, s.btypePopupProfile()
    }
  }

  angular.module("app.contents").controller("ProductCategoriesController", e).controller("CreateProductCategoryController", t), e.$inejct = ["RouteHelpers", "$scope", "$state", "ProductCategoriesLoader", "WorkhistoryInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "ProductCategoriesLoader", "WorkhistoryInfoLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "$stateParams", "ProductCategoriesLoader", "ContentsLoader", "WorkhistoryInfoLoader"], t.$inject = ["RouteHelpers", "$scope", "$state", "$stateParams", "ProductCategoriesLoader", "ContentsLoader", "WorkhistoryInfoLoader"]
}(), function () {
  function e(e, t, o, a, n, r, s) {
    function i(o, n, r, i) {
      var c = a.dispatcherSvcUrl + "/discovery/api/searchresources?provider=SignageContent&page=" + n + "&resourcetype=Content.productcategories." + o;
      i = i || function (e, o) {
        401 === o && t.go("page.login"), s.messageErrorPopup("Error : Failure loading product categories")
      }, e.get(c).success(r).error(i)
    }

    function c(o, n, r) {
      var i = a.dispatcherSvcUrl + "/signagecontent/api/productcategories/" + o;
      r = r || function (e, o) {
        401 === o && t.go("page.login"), s.messageErrorPopup("Error : Failure deleting product category")
      }, e["delete"](i).success(n).error(r)
    }

    function l(o, n, r) {
      var i = a.dispatcherSvcUrl + "/signagecontent/api/productcategories/";
      r = r || function (e, o) {
        401 === o && t.go("page.login"), s.messageErrorPopup("Error : Failure creating product category")
      }, e.post(i, o).success(n).error(r)
    }

    function u(o, n, r, i) {
      var c = a.dispatcherSvcUrl + "/signagecontent/api/productcategories/" + n;
      i = i || function (e, o) {
        401 === o && t.go("page.login"), s.messageErrorPopup("Error : Failure updating product category")
      }, e.put(c, o).success(r).error(i)
    }

    function d(e) {
      return e + "&authorization=user%20" + r.getUserToken()
    }

    this.getProductCategories = i, this.deleteProductCategory = c, this.createProductCategory = l, this.updateProductCategory = u, this.getAuthorizedLocation = d
  }

  angular.module("app.contents").service("ProductCategoriesLoader", e), e.$inject = ["$http", "$state", "config", "Config", "$localStorage", "UserSession", "UserInfoLoader"]
}(), function () {
  function e(e, t, o, a, n, r) {
    function s() {
      function r() {
        a.getProducts(s)
      }

      function s(e) {
        console.log(e.result), i.products = e.result
      }

      i.basepath = e.basepath, r(), t.openCreateProductPage = function () {
        a.selectedProduct = null, o.go("app.contents.product.newproduct")
      }, i.openProductDetail = function (e) {
        console.log(e), a.selectedProduct = e, n.localStorage.setItem("selectedProduct", angular.toJson(e)), o.go("app.contents.product.updateproduct")
      }, t.getType = function (e) {
        var o = t.subTypes.findIndex(function (t) {
          return t.id === e
        });
        return t.subTypes[o].name
      }
    }

    console.log(o);
    var i = this;
    t.subTypes = [{id: "0", name: "무료"}, {id: "1", name: "월간"}, {
      id: "2",
      name: "연간"
    }], s(), t.groupCheck = n.localStorage.getItem("ngStorage-groups").indexOf("showit-superuser"), t.openWorkHistory = function () {
      r.work = o.current.title, r.searchdata = {
        email: "",
        work: "앱 상품정보",
        target: "",
        orderby: "desc",
        page: 1
      }, r.atypePopupProfile()
    }
  }

  function t(e, t, o, a, n, r, s, i, c) {
    function l() {
      function r() {
        n.getProducts(c)
      }

      function c(e) {
        console.log(e.result), t.products = e.result
      }

      function l(e) {
        console.log("getalocaleDone", e), t["new"] = e.result, t["new"].subscriptionTypeObj = t.subTypes[e.result.subscriptionType]
      }

      if (d.basepath = e.basepath, r(), d.onSubTypeChanged = function () {
        t["new"].subscriptionType = t["new"].subscriptionTypeObj.id
      }, d.onProductTypeChanged = function () {
        console.log(t["new"].productTypeObj.id), console.log("1" === t["new"].productTypeObj.id), t["new"].productType = t["new"].productTypeObj.id, "1" === t["new"].productTypeObj.id ? t.checkDisable = !0 : t.checkDisable = !1
      }, console.log("selectedProduct::", n.selectedProduct), null != n.selectedProduct) console.log("1"), t["new"] = n.selectedProduct, t["new"].subscriptionTypeObj = t.subTypes[n.selectedProduct.subscriptionType], console.log(n.selectedProduct), console.log(angular.isUndefined(n.selectedProduct.attributes)), angular.isUndefined(n.selectedProduct.attributes) ? (console.log("@@@@@ setting"), t["new"].productTypeObj = t.productTypeList[n.selectedProduct.attributes.config.productType - 1], "1" === n.selectedProduct.attributes.config.productType ? t.checkDisable = !0 : t.checkDisable = !1, t["new"].maxDigitalSigns = n.selectedProduct.attributes.config.maxDigitalSigns, t["new"].maxMovies = n.selectedProduct.attributes.config.maxMovies, t["new"].maxSlideShows = n.selectedProduct.attributes.config.maxSlideShows, t["new"].maxStreamings = n.selectedProduct.attributes.config.maxStreamings, t["new"].productType = n.selectedProduct.attributes.config.productType, t["new"].upgradeMenu = n.selectedProduct.attributes.config.upgradeMenu, t["new"].upgradeRecommend = n.selectedProduct.attributes.config.upgradeRecommend) : (console.log("@@@@@ NOT setting"), t["new"].productTypeObj = t.productTypeList[0], t.checkDisable = !0, t["new"].maxDigitalSigns = null, t["new"].maxMovies = null, t["new"].maxSlideShows = null, t["new"].maxStreamings = null, t["new"].productType = t["new"].productTypeObj.id, t["new"].upgradeMenu = !0, t["new"].upgradeRecommend = !0), console.log("new", t["new"]), o.current.data.displayName = "Update App Product", o.$current.data.displayName = "Update App Product", d.isEditMode = !0, console.log("state", o); else if (null === n.selectedProduct) console.log("2"), o.current.data.displayName = "New App Product", o.$current.data.displayName = "New App Product", d.isEditMode = !1, console.log("state", o); else if (console.log("localStorage:: ", s.localStorage.getItem("selectedProduct")), void 0 == s.localStorage.getItem("selectedProduct")) console.log("3"), console.log(d.isEditMode), o.current.data.displayName = "New App Product",
          o.$current.data.displayName = "New App Product", d.isEditMode = !1, console.log("state", o); else {
        console.log("4"), console.log(JSON.parse(s.localStorage.getItem("selectedProduct")));
        var u = JSON.parse(s.localStorage.getItem("selectedProduct"));
        a.getProduct(u.id, l), console.log(o), o.current.data.displayName = "Update App Product", o.$current.data.displayName = "Update App Product", d.isEditMode = !0, console.log("state", o)
      }
      t.deleteProduct = function () {
        t.deleteProductMessage("상품정보를 삭제하시겠습니까?")
      }, t.createProduct = function () {
        var e = /^[0-9A-Za-z]+$/, o = /^[0-9A-Z.]+$/, a = /^[0-9]+$/, n = /^[0-9]+$/,
            r = /^[0-9]+$/, i = /^[0-9]+$/;
        if (console.log(t["new"]), console.log(d.isEditMode), d.isEditMode) void 0 === t["new"].id ? (t.msg = "[Product Code] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[Product Code] 은 [숫자, 대소문자]만입니다.", t.msg2 = "", e.test(t["new"].id) ? void 0 === t["new"].productVersion ? (t.msg = "[Version] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[Version] 은 [숫자, 대소문자, 소숫점]만입니다.", t.msg2 = "", o.test(t["new"].productVersion) ? void 0 === t["new"].productName ? (t.msg = "[Product Name] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (console.log(t.checkDisable), console.log(t.checkDisable && (0 != t["new"].subscriptionType || null == t["new"].subscriptionType) && void 0 === t["new"].goolgeProductId), !t.checkDisable || 0 == t["new"].subscriptionType && null != t["new"].subscriptionType || void 0 !== t["new"].goolgeProductId ? !t.checkDisable || 0 == t["new"].subscriptionType && null != t["new"].subscriptionType || void 0 !== t["new"].appleProductId ? t.checkDisable && void 0 === t["new"].subscriptionTypeObj ? (t.msg = "[Subscription Type] 은 필수 선택 항목입니다.", t.msg2 = "", t.message()) : void 0 === t["new"].maxStreamings ? (t.msg = "[ # of Streaming Devices] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[ # of Streaming Devices] 은 [숫자] 만입니다.", t.msg2 = "", a.test(t["new"].maxStreamings) ? void 0 === t["new"].maxDigitalSigns ? (t.msg = "[ # of Digital Sign] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[ # of Digital Sign] 은 [숫자] 만입니다.", t.msg2 = "", n.test(t["new"].maxDigitalSigns) ? void 0 === t["new"].maxMovies ? (t.msg = "[ # of Video] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[ # of Video] 은 [숫자] 만입니다.", t.msg2 = "", r.test(t["new"].maxMovies) ? void 0 === t["new"].maxSlideShows ? (t.msg = "[ # of Slideshow] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[ # of Slideshow] 은 [숫자] 만입니다.", t.msg2 = "", i.test(t["new"].maxSlideShows) ? (s.localStorage.removeItem("selectedProduct"), t.saveProduct("업데이트 하시겠습니까?")) : t.message()) : t.message()) : t.message()) : t.message()) : (t.msg = "[App store Product Code] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[Playstore Product Code] 은 필수 입력 항목입니다.", t.msg2 = "", t.message())) : t.message()) : t.message()); else if (void 0 === t["new"].id) t.msg = "[Product Code] 은 필수 입력 항목입니다.", t.msg2 = "", t.message(); else if (t.msg = "[Product Code] 은 [숫자, 대소문자]만입니다.", t.msg2 = "", e.test(t["new"].id)) {
          for (var c = -1, l = 0, u = t.products.length; l < u; l++) if (t.products[l].id === t["new"].id) {
            c = l;
            break
          }
          if (c !== -1) t.msg = "입력하신 프로모타 상품코드가 이미 다른 상품에서 이용중입니다.", t.msg2 = "다른 상품코드를 입력해주세요.", t.message(); else if (void 0 === t["new"].productVersion) t.msg = "[Version] 은 필수 입력 항목입니다.", t.msg2 = "", t.message(); else if (t.msg = "[Version] 은 [숫자, 대소문자, 소숫점]만입니다.", t.msg2 = "", o.test(t["new"].productVersion)) if (void 0 === t["new"].productName) t.msg = "[Product Name] 은 필수 입력 항목입니다.", t.msg2 = "", t.message(); else if (console.log(t.checkDisable), console.log(t.checkDisable || (0 != t["new"].subscriptionType || null == t["new"].subscriptionType) && void 0 === t["new"].goolgeProductId), !t.checkDisable || 0 == t["new"].subscriptionType && null != t["new"].subscriptionType || void 0 !== t["new"].goolgeProductId) {
            for (var c = -1, l = 0, u = t.products.length; l < u; l++) if (t.products[l].goolgeProductId === t["new"].goolgeProductId) {
              c = l;
              break
            }
            if (c !== -1) t.msg = "입력하신 Playstore 상품코드가 이미 다른 프로모타 상품과 매핑 되어 있습니다.", t.msg2 = "", t.message(); else if (!t.checkDisable || 0 == t["new"].subscriptionType && null != t["new"].subscriptionType || void 0 !== t["new"].appleProductId) {
              for (var c = -1, l = 0, u = t.products.length; l < u; l++) if (t.products[l].appleProductId === t["new"].appleProductId) {
                c = l;
                break
              }
              c !== -1 ? (t.msg = "입력하신 App Store 상품코드가 이미 다른 프로모타 상품과 매핑 되어 있습니다.", t.msg2 = "", t.message()) : void 0 === t["new"].maxStreamings ? (t.msg = "[ # of Streaming Devices] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[ # of Streaming Devices] 은 [숫자] 만입니다.", t.msg2 = "", a.test(t["new"].maxStreamings) ? void 0 === t["new"].maxDigitalSigns ? (t.msg = "[ # of Digital Sign] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[ # of Digital Sign] 은 [숫자] 만입니다.", t.msg2 = "", n.test(t["new"].maxDigitalSigns) ? void 0 === t["new"].maxMovies ? (t.msg = "[ # of Video] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[ # of Video] 은 [숫자] 만입니다.", t.msg2 = "", r.test(t["new"].maxMovies) ? void 0 === t["new"].maxSlideShows ? (t.msg = "[ # of Slideshow] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[ # of Slideshow] 은 [숫자] 만입니다.", t.msg2 = "", i.test(t["new"].maxSlideShows) ? (s.localStorage.removeItem("selectedProduct"), t.saveProduct("새로 생성 하시겠습니까?")) : t.message()) : t.message()) : t.message()) : t.message())
            } else t.msg = "[App store Product Code] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()
          } else t.msg = "[Playstore Product Code] 은 필수 입력 항목입니다.", t.msg2 = "", t.message(); else t.message()
        } else t.message()
      }, t.goBack = function () {
        s.localStorage.removeItem("selectedProduct"), o.go("app.contents.product")
      }, d.submitted = !1, d.validateInput = function (e, t) {
        var o = d.formValidate[e];
        return (o.$dirty || d.submitted) && o.$error[t]
      }, t.openApple = function () {
        window.open("https://appstoreconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/app/1506857843/addons", "_blank")
      }, t.openAOS = function () {
        window.open("https://play.google.com/apps/publish", "_blank")
      }, t.openWorkHistory = function () {
        i.work = "App Product Info", i.target = t["new"].id, i.searchdata = {
          email: "",
          work: "앱 상품정보",
          target: t["new"].id,
          orderby: "desc",
          page: 1
        }, i.btypePopupProfile()
      }
    }

    function u(e) {
      console.log(e), o.go("app.contents.product")
    }

    console.log(o);
    var d = this;
    d.isEditMode = !1, t.subTypes = [{id: "0", name: "무료"}, {id: "1", name: "월간"}, {
      id: "2",
      name: "연간"
    }], t.productTypeList = [{id: "1", name: "B2C"}, {id: "2", name: "B2B SOHO"}, {
      id: "3",
      name: "B2B FRANCHISE"
    }], t["new"] = {}, t["new"].productTypeObj = t.productTypeList[0], t.checkDisable = !0, t["new"].upgradeMenu = !0, t["new"].upgradeRecommend = !0, t.groupCheck = s.localStorage.getItem("ngStorage-groups").indexOf("showit-superuser"), l(), t.validate = function (e, o) {
      console.log(t.products.length), console.log(e), console.log(o);
      var a = /^[0-9A-Za-z]+$/, n = /^[0-9A-Z.]+$/, r = /^[0-9]+$/, s = /^[0-9]+$/, i = /^[0-9]+$/,
          c = /^[0-9]+$/;
      if ("id" === o) if (void 0 === e) t.msg = "[Product Code] 은 필수 입력 항목입니다.", t.msg2 = "", t.message(); else if (t.msg = "[Product Code] 은 [숫자, 대소문자]만입니다.", t.msg2 = "", a.test(e)) {
        for (var l = -1, u = 0, d = t.products.length; u < d; u++) if (t.products[u].id === e) {
          l = u;
          break
        }
        l !== -1 && (t.msg = "입력하신 프로모타 상품코드가 이미 다른 상품에서 이용중입니다.", t.msg2 = "다른 상품코드를 입력해주세요.", t.message())
      } else t.message();
      if ("productVersion" === o && (void 0 === e ? (t.msg = "[Version] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[Version] 은 [숫자, 대소문자, 소숫점]만입니다.", t.msg2 = "", n.test(e) || t.message())), "productName" === o && void 0 === e && (t.msg = "[Product Name] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()), "goolgeProductId" === o) if (void 0 === e) t.msg = "[Playstore Product Code] 은 필수 입력 항목입니다.", t.msg2 = "", t.message(); else {
        for (var l = -1, u = 0, d = t.products.length; u < d; u++) if (t.products[u].goolgeProductId === e) {
          l = u;
          break
        }
        l !== -1 && (t.msg = "입력하신 Playstore 상품코드가 이미 다른 프로모타 상품과 매핑 되어 있습니다.", t.msg2 = "", t.message())
      }
      if ("appleProductId" === o) if (void 0 === e) t.msg = "[App store Product Code] 은 필수 입력 항목입니다.", t.msg2 = "", t.message(); else {
        for (var l = -1, u = 0, d = t.products.length; u < d; u++) if (t.products[u].appleProductId === e) {
          l = u;
          break
        }
        l !== -1 && (t.msg = "입력하신 App Store 상품코드가 이미 다른 프로모타 상품과 매핑 되어 있습니다.", t.msg2 = "", t.message())
      }
      "subscriptionTypeObj" === o && (console.log(e), void 0 === e && (t.msg = "[Subscription Type] 은 필수 선택 항목입니다.", t.msg2 = "", t.message())), "maxStreamings" === o && (console.log(e), void 0 === e ? (t.msg = "[ # of Streaming Devices] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[ # of Streaming Devices] 은 [숫자] 만입니다.", t.msg2 = "", r.test(e) || t.message())), "maxDigitalSigns" === o && (console.log(e), void 0 === e ? (t.msg = "[ # of Digital Sign] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[ # of Digital Sign] 은 [숫자] 만입니다.", t.msg2 = "", s.test(e) || t.message())), "maxMovies" === o && (console.log(e), void 0 === e ? (t.msg = "[ # of video] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[ # of video] 은 [숫자] 만입니다.", t.msg2 = "", i.test(e) || t.message())), "maxSlideShows" === o && (console.log(e), void 0 === e ? (t.msg = "[ # of slideshow] 은 필수 입력 항목입니다.", t.msg2 = "", t.message()) : (t.msg = "[ # of slideshow] 은 [숫자] 만입니다.", t.msg2 = "", c.test(e) || t.message()))
    }, t.message = function () {
      var e = r.openConfirm({
        template: '<div style="padding:3%"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="line-height: inherit;">&nbsp;&nbsp;&nbsp;{{msg}}<br>{{msg2}}</i><br><br><div class="row"><div class="col-md-4 text-center"></div><div class="col-md-4 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">확인</button></div><div class="col-md-3 text-center"></div></div></div>',
        plain: !0,
        className: "ngdialog-theme-default",
        scope: t
      });
      e.then(function (e) {
        console.log("resolved:" + e)
      }, function (e) {
        console.log("rejected:" + e)
      })
    }, t.saveProduct = function (e) {
      t.cmsg = e;
      var o = r.openConfirm({
        template: '<div style="padding:3%"><i class="fa fa-exclamation-circle" aria-hidden="true" style="line-height: inherit;">&nbsp;&nbsp;&nbsp;{{cmsg}}</i><br><br><div class="row"><div class="col-md-1 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)" ng-if="!data.isEditMode">생성 확인</button><button type="button" class="btn btn-primary" ng-click="confirm(2)" ng-if="data.isEditMode">업데이트 확인</button></div><div class="col-md-1 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-default" ng-click="confirm(0)">취소</button></div><div class="col-md-3 text-center"></div></div></div>',
        plain: !0,
        className: "ngdialog-theme-default",
        scope: t
      });
      o.then(function (e) {
        if (console.log("resolved:" + e), console.log("## new", t["new"]), t.checkDisable || (t["new"].subscriptionType = 0), 1 === e) {
          var o = {
            subscriptionProduct: {
              attributes: {
                config: {
                  maxDigitalSigns: t["new"].maxDigitalSigns,
                  maxMovies: t["new"].maxMovies,
                  maxSlideShows: t["new"].maxSlideShows,
                  maxStreamings: t["new"].maxStreamings,
                  productType: t["new"].productTypeObj.id,
                  upgradeMenu: t["new"].upgradeMenu,
                  upgradeRecommend: t["new"].upgradeRecommend
                }
              },
              id: t["new"].id,
              productVersion: t["new"].productVersion,
              productName: t["new"].productName,
              goolgeProductId: t["new"].goolgeProductId,
              appleProductId: t["new"].appleProductId,
              subscriptionType: t["new"].subscriptionType,
              isUsing: !0,
              createdDate: new Date,
              creator: s.localStorage.getItem("ngStorage-userSession").indexOf("userId"),
              updatedDate: new Date,
              updater: s.localStorage.getItem("ngStorage-userSession").indexOf("userId")
            }, saveKind: "CREATE"
          };
          a.createProduct(o, u), console.log("data", o)
        } else if (2 === e) {
          var n = {
            subscriptionProduct: {
              attributes: {
                config: {
                  maxDigitalSigns: t["new"].maxDigitalSigns,
                  maxMovies: t["new"].maxMovies,
                  maxSlideShows: t["new"].maxSlideShows,
                  maxStreamings: t["new"].maxStreamings,
                  productType: t["new"].productTypeObj.id,
                  upgradeMenu: t["new"].upgradeMenu,
                  upgradeRecommend: t["new"].upgradeRecommend
                },
                partnerCode: t["new"].attributes.partnerCode,
                partnerName: t["new"].attributes.partnerName
              },
              id: t["new"].id,
              productVersion: t["new"].productVersion,
              productName: t["new"].productName,
              goolgeProductId: t["new"].goolgeProductId,
              appleProductId: t["new"].appleProductId,
              subscriptionType: t["new"].subscriptionType,
              isUsing: !0,
              createdDate: t["new"].createdDate,
              creator: t["new"].creator,
              updatedDate: new Date,
              updater: s.localStorage.getItem("ngStorage-userSession").indexOf("userId")
            }, saveKind: "UPDATE"
          };
          a.updateProduct(n, u), console.log("updata", n)
        }
      }, function (e) {
        console.log("rejected:" + e)
      })
    }, t.deleteProductMessage = function (e) {
      t.cmsg = e;
      var n = r.openConfirm({
        template: '<div style="padding:3%"><i class="fa fa-exclamation-circle" aria-hidden="true" style="line-height: inherit;">&nbsp;&nbsp;&nbsp;{{cmsg}}</i><br><br><div class="row"><div class="col-md-1 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)" >예</button></div><div class="col-md-1 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-default" ng-click="confirm(0)">아니오</button></div><div class="col-md-3 text-center"></div></div></div>',
        plain: !0,
        className: "ngdialog-theme-default",
        scope: t
      });
      n.then(function (e) {
        console.log("resolved:" + e), 1 === e && a.getProductCodeExist(t["new"].id).then(function (e) {
          if (console.log("result", e.data.result), e.data.result) {
            t.msg = "유료회원이 현재 프로모타 상품을 이용중으로 상품정보를 삭제할 수 없습니다.", t.msg2 = "";
            var o = r.openConfirm({
              template: '<div style="padding:3%"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="line-height: inherit;">&nbsp;&nbsp;&nbsp;{{msg}}<br>{{msg2}}</i><br><br><div class="row"><div class="col-md-4 text-center"></div><div class="col-md-4 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">확인</button></div><div class="col-md-3 text-center"></div></div></div>',
              plain: !0,
              className: "ngdialog-theme-default",
              scope: t
            });
            o.then(function (e) {
              console.log("resolved:" + e)
            }, function (e) {
              console.log("rejected:" + e)
            })
          } else {
            var n = {subscriptionProduct: {id: t["new"].id}};
            a.removeProduct(n, u), console.log("delete", n)
          }
        }, function (e, t) {
          401 === t && o.go("page.login"), c.messageErrorPopup("Error : Failure finding device")
        })
      }, function (e) {
        console.log("rejected:" + e)
      })
    }
  }

  angular.module("app.contents").controller("ProductInfoController", e).controller("NewProductController", t), e.$inejct = ["RouteHelpers", "$scope", "$state", "ProductInfoLoader", "$window", "WorkhistoryInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "ProductInfoLoader", "$window", "WorkhistoryInfoLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "NewProductLoader", "ProductInfoLoader", "ngDialog", "$window", "WorkhistoryInfoLoader", "UserInfoLoader"], t.$inject = ["RouteHelpers", "$scope", "$state", "NewProductLoader", "ProductInfoLoader", "ngDialog", "$window", "WorkhistoryInfoLoader", "UserInfoLoader"]
}(), function () {
  function e(e, t, o, a, n, r) {
    function s(t, a) {
      var s = {subscriptionProduct: {id: "SBMOPRO1"}};
      console.log(n.dispatcherSvcUrl);
      var i = n.dispatcherSvcUrl + "/user/api/getsubscriptionproductlist";
      a = a || function (e, t) {
        401 === t && o.go("page.login"), r.messageErrorPopup("Error : Failure loading locales")
      }, e.post(i, s).success(t).error(a)
    }

    function i(t) {
      var o = {subscriptionHistory: {id: t}},
          a = n.dispatcherSvcUrl + "/user/api/getprovidersubscriptioninfo";
      return e.post(a, o)
    }

    this.getProducts = s, this.getAppMarket = i
  }

  function t(e, t, o, a, n) {
    function r(o, r, s) {
      var i = a.dispatcherSvcUrl + "/user/api/savesubscriptionproduct";
      s = s || function (e, o) {
        401 === o && t.go("page.login"), n.messageErrorPopup("Error : Failure creating new Product")
      }, e.post(i, o).success(r).error(s)
    }

    function s(o, r, s) {
      var i = a.dispatcherSvcUrl + "/user/api/savesubscriptionproduct";
      s = s || function (e, o) {
        401 === o && t.go("page.login"), n.messageErrorPopup("Error : Failure updating new Product")
      }, e.post(i, o).success(r).error(s)
    }

    function i(o, r, s) {
      var i = a.dispatcherSvcUrl + "/user/api/removesubscriptionproduct";
      s = s || function (e, o) {
        401 === o && t.go("page.login"), n.messageErrorPopup("Error : Failure deleting Product")
      }, e.post(i, o).success(r).error(s)
    }

    function c(o, r, s) {
      var i = a.dispatcherSvcUrl + "/user/api/getsubscriptionproduct";
      s = s || function (e, o) {
        401 === o && t.go("page.login"), n.messageErrorPopup("Error : Failure loading Product")
      };
      var c = {subscriptionProduct: {id: o}};
      e.post(i, c).success(r).error(s)
    }

    function l(t) {
      var o = a.dispatcherSvcUrl + "/user/api/getsubscriptionproductcodeexist",
          n = {subscriptionProduct: {id: t}};
      return e.post(o, n)
    }

    this.createProduct = r, this.updateProduct = s, this.removeProduct = i, this.getProduct = c, this.getProductCodeExist = l, this.selectedProduct = null
  }

  angular.module("app.contents").service("ProductInfoLoader", e).service("NewProductLoader", t), e.$inject = ["$http", "config", "$state", "$localStorage", "Config", "UserInfoLoader"], t.$inject = ["$http", "$state", "config", "Config", "UserInfoLoader"]
}(), function () {
  function e(e, t, o, a, n) {
    function r() {
      function n() {
        t.locales = [{id: "en"}, {id: "ko"}], t.selectedLocale = t.locales[0], a.getStyleCategories(t.selectedLocale.id, s.styleCategoryPage, r)
      }

      function r(e) {
        console.log("items", e.result.resources), t.activeResources = e.result.resources
      }

      function i(e) {
        o.go("app.contents.stylecategories", {}, {reload: !0})
      }

      s.basepath = e.basepath, n(), s.onLocaleChanged = function () {
        a.getStyleCategories(t.selectedLocale.id, s.styleCategoryPage, r)
      }, s.openCreateStyleCategoryPage = function () {
        o.go("app.contents.stylecategories.updatecategory")
      }, s.onDeckClicked = function (e) {
        o.go("app.contents.stylecategories.updatecategory", {id: e.id}), a.selectedCategory = e
      }, t.getAuthorizedLocation = function (e) {
        return a.getAuthorizedLocation(e)
      }, s.deleteStyleCategory = function (e) {
        a.deleteStyleCategory(e, i)
      }
    }

    var s = this;
    t.resources = null, t.selectedLocale = null, s.styleCategoryPage = 1, s.styleCategoryPageInfo = {}, r(), t.openWorkHistory = function () {
      n.work = "Style Categories", n.searchdata = {
        email: "",
        work: "Style Categories",
        target: "",
        orderby: "desc",
        page: 1
      }, n.atypePopupProfile()
    }
  }

  function t(e, t, o, a, n, r, s) {
    function i() {
      function s() {
        t.locales = [{id: "en"}, {id: "ko"}], a.id ? (c.isEditMode = !0, t["new"] = n.selectedCategory.providerMetadata, "en" == t["new"].attributes.locale ? t.selectedLocale = t.locales[0] : t.selectedLocale = t.locales[1], u()) : (t.selectedLocale = t.locales[0], t["new"].attributes.locale = t.locales[0].id)
      }

      function i(e) {
        o.go("app.contents.stylecategories")
      }

      function l() {
        var e = c.myImage;
        r.uploadResource(e, u)
      }

      function u(e) {
        var o, a;
        e && (t["new"].attributes.resource = e), o = document.getElementById("styleCategoryImage"), a = r.getImageUrl(t["new"].attributes.resource);
        var n = o.getContext("2d");
        n.clearRect(0, 0, o.width, o.height);
        var s = new Image;
        s.onload = function () {
          t.$apply(function () {
            n.drawImage(s, 0, 0, o.width, o.height)
          })
        }, s.src = a
      }

      c.basepath = e.basepath, s(), c.onLocaleChanged = function () {
        t["new"].attributes.locale = t.selectedLocale.id
      }, t.goBack = function () {
        o.go("app.contents.stylecategories")
      }, t.updateStyleCategory = function () {
        1 == c.isEditMode ? n.updateStyleCategory(t["new"], a.id, i) : n.createStyleCategory(t["new"], i), console.log("new", t["new"])
      }, t.file_changed = function (e) {
        var o = e.files[0], a = new FileReader;
        a.onload = function (e) {
          t.$apply(function () {
            c.myImage = e.target.result, l()
          })
        }, o && a.readAsDataURL(o)
      }
    }

    var c = this;
    c.isEditMode = !1, t["new"] = {}, t["new"].attributes = {}, i(), t.openWorkHistory = function () {
      s.work = "Style Categories", s.target = a.id, s.searchdata = {
        email: "",
        work: "Style Categories",
        target: a.id,
        orderby: "desc",
        page: 1
      }, s.btypePopupProfile()
    }
  }

  angular.module("app.contents").controller("StyleCategoriesController", e).controller("CreateStyleCategoryController", t), e.$inejct = ["RouteHelpers", "$scope", "$state", "StyleCategoriesLoader", "WorkhistoryInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "StyleCategoriesLoader", "WorkhistoryInfoLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "$stateParams", "StyleCategoriesLoader", "ContentsLoader", "WorkhistoryInfoLoader"], t.$inject = ["RouteHelpers", "$scope", "$state", "$stateParams", "StyleCategoriesLoader", "ContentsLoader", "WorkhistoryInfoLoader"]
}(), function () {
  function e(e, t, o, a, n, r, s) {
    function i(o, n, r, i) {
      var c = a.dispatcherSvcUrl + "/discovery/api/searchresources?provider=SignageContent&page=" + n + "&resourcetype=Content.stylecategories." + o;
      i = i || function (e, o) {
        401 === o && t.go("page.login"), s.messageErrorPopup("Error : Failure loading style categories")
      }, e.get(c).success(r).error(i)
    }

    function c(o, n, r) {
      var i = a.dispatcherSvcUrl + "/signagecontent/api/stylecategories/" + o;
      r = r || function (e, o) {
        401 === o && t.go("page.login"), s.messageErrorPopup("Error : Failure deleting style category")
      }, e["delete"](i).success(n).error(r)
    }

    function l(o, n, r) {
      var i = a.dispatcherSvcUrl + "/signagecontent/api/stylecategories/";
      r = r || function (e, o) {
        401 === o && t.go("page.login"), s.messageErrorPopup("Error : Failure creating style category")
      }, e.post(i, o).success(n).error(r)
    }

    function u(o, n, r, i) {
      var c = a.dispatcherSvcUrl + "/signagecontent/api/stylecategories/" + n;
      i = i || function (e, o) {
        401 === o && t.go("page.login"), s.messageErrorPopup("Error : Failure updating style category")
      }, e.put(c, o).success(r).error(i)
    }

    function d(e) {
      return e + "&authorization=user%20" + r.getUserToken()
    }

    this.getStyleCategories = i, this.deleteStyleCategory = c, this.createStyleCategory = l, this.updateStyleCategory = u, this.getAuthorizedLocation = d
  }

  function t(e, t, o, a, n, r) {
    function s(e, o, s) {
      e = e.substr(e.indexOf(",") + 1), e = e.replace(/(\r\n|\n|\r)/gm, "");
      for (var i = window.atob(e), l = i.length, u = new Uint8Array(l), d = 0; d < l; d++) u[d] = 255 & i.charCodeAt(d);
      s = s || function (e, o) {
        401 === o && t.go("page.login"), r.messageErrorPopup("Error : Failure to upload image")
      };
      var g = new XMLHttpRequest;
      g.onreadystatechange = function () {
        4 == g.readyState && g.status >= 200 && g.status < 300 ? o(JSON.parse(g.responseText).downloadUrl) : 4 == g.readyState && s()
      };
      var p = c(), f = a.dispatcherSvcUrl + "/ccresource/api/portalfolder/" + p;
      g.open("POST", f, !0), g.setRequestHeader("Content-Type", "image/png"), g.setRequestHeader("Authorization", "user " + n.getUserToken()), g.send(u)
    }

    function i(e) {
      var t = e + "&authorization=user%20" + n.getUserToken();
      return t
    }

    function c() {
      function e(e) {
        var t = (Math.random().toString(16) + "000000000").substr(2, 8);
        return e ? "-" + t.substr(0, 4) + "-" + t.substr(4, 4) : t
      }

      return e() + e(!0) + e(!0) + e()
    }

    this.uploadResource = s, this.getImageUrl = i
  }

  angular.module("app.contents").service("StyleCategoriesLoader", e).service("ContentsLoader", t), e.$inject = ["$http", "$state", "config", "Config", "$localStorage", "UserSession", "UserInfoLoader"], t.$inject = ["$http", "$state", "config", "Config", "UserSession", "UserInfoLoader"]
}(), function () {
  function e(e) {
    function t(t, o, a, n) {
      o.on("itemAdded itemRemoved", function () {
        n.$viewValue && n.$viewValue.split && (n.$setViewValue(n.$viewValue.split(",")), n.$render())
      }), e(function () {
        o.tagsinput()
      })
    }

    var o = {link: t, require: "ngModel", restrict: "A"};
    return o
  }

  angular.module("app.contents").directive("tagsinput", e), e.$inject = ["$timeout"]
}(), function () {
  function e(e, t, o, a, n, r, s) {
    function i(e) {
      console.log("USER::", e.result.contents[0]), n.user = e.result.contents[0], n.popupProfileIndex = 0, n.popupProfile(n.user)
    }

    var c = this;
    t.subTitle = "Temporary Registration Info", c.selectquery = "all", c.selectqueryexpire = "all", t.oflag = !1, t.loading = !0, t.temporaryList = [], a.temporaryidCurrentPage = 1, t.temporaryidCurrentPage = a.temporaryidCurrentPage, console.log(c.selectquery), a.list(c.selectquery, t.temporaryidCurrentPage).then(function (e) {
      console.log("res", e), t.temporaryList = e.data.result.list, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.temporaryidCurrentPage = t.pageInfo.currentPage, a.temporaryidCurrentPage = t.temporaryidCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
    }, function (e, a) {
      401 === a && o.go("page.login"), t.loading = !1, t.temporaryList = [], console.log("e:::", e), n.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
    }), t.pageChanged = function (e, r) {
      console.log("event", r), t.loading = !0, t.temporaryList = [], a.temporaryidCurrentPage = e, t.temporaryidCurrentPage = a.temporaryidCurrentPage, console.log(c.selectquery), a.list(c.selectquery, t.temporaryidCurrentPage).then(function (e) {
        console.log("res", e), t.temporaryList = e.data.result.list, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.temporaryidCurrentPage = t.pageInfo.currentPage, a.temporaryidCurrentPage = t.temporaryidCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
      }, function (e, a) {
        t.loading = !1, t.temporaryList = [], 401 === a && o.go("page.login"), n.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.onChange = function (e) {
      t.pageChanged(1)
    }, t.file_changed = function (e) {
      var t = e.files[0];
      console.log(t);
      var r = new FileReader;
      r.onload = function (e) {
        console.log("evt", e);
        var r = new FormData;
        r.append("file", t), a.upload(r).then(function (e) {
          console.log("res", e), n.messagePopup("파일업로드 완료")
        }, function (e, t) {
          401 === t && o.go("page.login"), console.log("e:::", e), n.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
        })
      }, t && r.readAsText(t)
    }, t.goDownloadFile = function () {
      var e = "TemporayRegistrationInfo_" + s(new Date).format("YYYYMMDD");
      a.download().then(function (t) {
        console.log("res", t);
        var o = document.createElement("a");
        document.body.appendChild(o);
        var a = new Blob([t.data], {type: "application/octet-stream"}),
            n = window.URL.createObjectURL(a);
        o.href = n, o.download = e + ".xlsx", o.click()
      }, function (e, t) {
        401 === t && o.go("page.login"), n.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.getDateFormat = function (e) {
      return r("date")(new Date(e), "yyyy/MM/dd HH:mm:ss")
    }, t.getDateFormatShort = function (e) {
      return r("date")(new Date(e.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")), "yyyy/MM/dd")
    }, t.goUserDetail = function (e) {
      console.log(e);
      var t = {id: e, page: 1};
      n.getNewUserProfile(t, i)
    }
  }

  angular.module("app.contents").controller("TemporaryIdInfoController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "TemporaryIdLoader", "UserInfoLoader", "$filter", "moment"], e.$inject = ["RouteHelpers", "$scope", "$state", "TemporaryIdLoader", "UserInfoLoader", "$filter", "moment"]
}(), function () {
  function e(e, t, o, a, n, r, s, i) {
    function c(t) {
      var o = n.dispatcherSvcUrl + "/user/api/partner/tempacct/upload";
      return e.post(o, t, {
        withcredentials: !1,
        transformRequest: angular.identity,
        headers: {"Content-Type": void 0},
        responseType: "arraybuffer"
      })
    }

    function l() {
      var t = n.dispatcherSvcUrl + "/user/api/partner/tempacct/autogen";
      return e.post(t)
    }

    function u() {
      var t = n.dispatcherSvcUrl + "/user/api/partner/tempacct/create";
      return e.post(t)
    }

    function d(t, o) {
      var a, r;
      return r = "all" !== t && "1" !== t ? "?statuscode=" + t + "&page=" + o : "1" === t ? "?expire=" + t + "&page=" + o : "?page=" + o, a = n.dispatcherSvcUrl + "/user/api/partner/tempacct/manager/list" + r, console.log(a), e.get(a)
    }

    function g() {
      var t = n.dispatcherSvcUrl + "/user/api/partner/tempacct/manager/download";
      return e.get(t, {responseType: "arraybuffer"})
    }

    this.upload = c, this.autogen = l, this.create = u, this.list = d, this.download = g, this.temporaryidCurrentPage = null
  }

  angular.module("app.contents").service("TemporaryIdLoader", e), e.$inject = ["$http", "config", "$state", "$localStorage", "Config", "UserInfoLoader", "ngDialog", "RouteHelpers"]
}(), function () {
  function e(e, t, o, a, n, r, s) {
    var i = this;
    i.locale = "", i.version = "", t.getcurrentterms = function () {
      function e(e) {
        console.log(e), e.result && (i.jsonData = e.result)
      }

      function t() {
        s.messagePopup("실패하였습니다.")
      }

      if (!i.locale) return void s.messagePopup("Locale을 입력하십시오.");
      var o = {currentTerms: {id: i.locale}};
      a.getcurrentterms(o, e, t)
    }, t.savecurrentterms = function () {
      s.confirmPopup("약관 업데이트", "*** 주의 *** 약관을 업데이트하시겠습니까?", "확인").then(function (e) {
        if (1 === e) {
          var t = function (e) {
            console.log(":: savecurrentterms :: ", e), s.messagePopup("업데이트하였습니다.")
          }, o = function () {
            s.messagePopup("실패하였습니다.")
          };
          if (!i.locale) return void s.messagePopup("Locale을 입력하십시오.");
          if (!i.version) return void s.messagePopup("Version을 입력하십시오.");
          var n = {currentTerms: {id: i.locale, termsVersion: i.version, lastModifiedDate: ""}};
          a.savecurrentterms(n, t, o)
        }
      })
    }
  }

  angular.module("app.contents").controller("TermManagementController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "TermManagementLoader", "LoginLoader", "UserSession", "UserInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "TermManagementLoader", "LoginLoader", "UserSession", "UserInfoLoader"]
}(), function () {
  function e(e, t, o, a, n) {
    function r(t, a, r) {
      var s = n.dispatcherSvcUrl + "/user/api/getcurrentterms";
      r = r || function (e, t) {
        401 === t && o.go("page.login"), alert("Failure loading getcurrentterms")
      }, e.post(s, t).success(a).error(r)
    }

    function s(t, a, r) {
      var s = n.dispatcherSvcUrl + "/user/api/savecurrentterms";
      r = r || function (e, t) {
        401 === t && o.go("page.login"), alert("Failure loading savecurrentterms")
      }, e.post(s, t).success(a).error(r)
    }

    this.getcurrentterms = r, this.savecurrentterms = s
  }

  angular.module("app.contents").service("TermManagementLoader", e), e.$inject = ["$http", "config", "$state", "$localStorage", "Config"]
}(), function () {
  function e(e, t, o, a, n) {
    function r() {
      function o() {
        a.getWorkCodeCombo(n)
      }

      function n(e) {
        console.log(e.result), t.workcodecombo.push({
          work: "All",
          using: !1
        }), e.result.forEach(function (e) {
          t.workcodecombo.push(e)
        }), console.log("$scope.workcodecombo", t.workcodecombo)
      }

      function r(e) {
        console.log("RESULT::", e), t.loading = !1, t.users = [], t.users = e.result.contents, console.log("USERS::", e.result.contents), t.pageInfo = e.result.pageInfo, console.log(t.pageInfo), t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.currentPage = t.pageInfo.currentPage, a.currentPage = t.currentPage, t.maxSize = 5, t.itemsPerPage = 16
      }

      s.basepath = e.basepath, o(), s.resultPage = function () {
        s.currentPage = a.currentPage, t.users = [], t.loading = !0;
        var e = {email: "", work: "", target: "", orderby: ""};
        "All" === s.selectadmin ? e.email = "" : "All" !== s.selectadmin && (e.email = s.adminvalue), "All" === s.workcode ? (e.work = "", e.target = "") : "All" !== s.workcode && (e.work = s.workcode, e.target = s.workcodevalue), s.orderby === !0 ? e.orderby = "desc" : e.orderby = "asc";
        var o = {
          email: e.email,
          work: e.work,
          target: e.target,
          orderby: e.orderby,
          page: s.currentPage
        };
        console.log("senddata", o), a.getWorkcommentlist(o, r)
      }, t.pageChanged = function (e) {
        console.log("currentPage:::", e), t.users = [], t.loading = !0, a.currentPage = e, s.currentPage = a.currentPage, t.users = [], t.loading = !0;
        var o = {email: "", work: "", target: "", orderby: ""};
        "All" === s.selectadmin ? o.email = "" : "All" !== s.selectadmin && (o.email = s.adminvalue), "All" === s.workcode ? (o.work = "", o.target = "") : "All" !== s.workcode && (o.work = s.workcode, o.target = s.workcodevalue), s.orderby === !0 ? o.orderby = "desc" : o.orderby = "asc";
        var n = {
          email: o.email,
          work: o.work,
          target: o.target,
          orderby: o.orderby,
          page: s.currentPage
        };
        console.log("senddata", n), a.getWorkcommentlist(n, r)
      }
    }

    var s = this;
    t.workcodecombo = [], a.currentPage = 1, r(), t.groupCheck = n.localStorage.getItem("ngStorage-groups").indexOf("showit-superuser"), t.goUserDetail = function (e) {
      console.log("USER::", e), a.user = e, a.popupProfile(e)
    }
  }

  angular.module("app.contents").controller("WorkhistoryInfoController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "WorkhistoryInfoLoader", "$window"], e.$inject = ["RouteHelpers", "$scope", "$state", "WorkhistoryInfoLoader", "$window"]
}(), function () {
  function e(e, t, o, a, n, r, s, i, c) {
    function l(t) {
      var o = {workComment: {id: "MEMB-TASK-002", target: t}};
      console.log(a.dispatcherSvcUrl);
      var n = a.dispatcherSvcUrl + "/user/api/saveworkcomment";
      return e.post(n, o)
    }

    function u(o, n) {
      var r = {page: 1};
      console.log(a.dispatcherSvcUrl);
      var s = a.dispatcherSvcUrl + "/user/api/getworkcodecombo";
      n = n || function (e, o) {
        401 === o && t.go("page.login"), c.messageErrorPopup("Error : Failure loading data")
      }, e.post(s, r).success(o).error(n)
    }

    function d(o, n, r) {
      console.log(a.dispatcherSvcUrl);
      var s = a.dispatcherSvcUrl + "/user/api/getworkcommentlist";
      r = r || function (e, o) {
        401 === o && t.go("page.login"), c.messageErrorPopup("Error : Failure loading data")
      }, e.post(s, o).success(n).error(r)
    }

    function g(e) {
      s.open({
        template: i.basepath("support/work-user.html"),
        controller: "ProfileWorkController",
        className: "ngdialog-theme-default custom-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function p(e) {
      s.open({
        template: i.basepath("support/work-popup-atype.html"),
        controller: "ProfileWorkPopupAController",
        className: "ngdialog-theme-default customw-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function f(e) {
      s.open({
        template: i.basepath("support/work-popup-btype.html"),
        controller: "ProfileWorkPopupBController",
        className: "ngdialog-theme-default customw-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    this.getWorkCodeCombo = u, this.getWorkcommentlist = d, this.CurrentPage = null, this.popupProfile = g, this.atypePopupProfile = p, this.btypePopupProfile = f, this.user = null, this.work = null, this.target = null, this.searchdata = null, this.saveworkcomment = l
  }

  angular.module("app.contents").service("WorkhistoryInfoLoader", e), e.$inject = ["$http", "$state", "config", "Config", "$localStorage", "UserSession", "ngDialog", "RouteHelpers", "UserInfoLoader"]
}(), !function (e, t) {
  "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).AppleID = {})
}(void 0, function (e) {
  function t(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
      value: o,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = o, e
  }

  var o, a = function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      }, n = function (e, t) {
        var o = "string" == typeof e ? document.getElementById(e) : e;
        if (null !== o) return o.innerHTML = t, o
      }, r = function Ne(e, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        ("string" == typeof t || a(t)) && (o = t, t = {}), o || (o = "");
        var n = "";
        for (var Ne in t) void 0 !== t[Ne] && t.hasOwnProperty(Ne) && (n += " " + Ne + '="' + t[Ne] + '"');
        return a(o) && (o = o.join("")), "<" + e + n + ">" + o + "</" + e + ">"
      }, s = function (e) {
        var t = "";
        for (var o in e) e[o] && e.hasOwnProperty(o) && (t += " " + o + ": " + e[o] + ";");
        return t
      }, i = function (e) {
        return "number" != typeof e || isNaN(e) ? "100%" : Math.floor(e) + "px"
      }, c = function He(e) {
        var t = e.color, o = e.borderRadius, a = void 0 === o ? 15 : o, n = e.border,
            He = void 0 !== n && n, c = e.width, l = void 0 === c ? "100%" : c, d = e.height,
            g = void 0 === d ? "100%" : d, p = e.isSquare, f = void 0 !== p && p;
        return r("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          style: s({"border-radius": "25px"}),
          width: i(l),
          height: i(g),
          viewBox: f ? "0 0 50 50" : void 0,
          preserveAspectRatio: f ? "xMidYMin meet" : void 0
        }, r("rect", {
          width: i(l),
          height: i(g),
          ry: "".concat(a, "%"),
          fill: u(t),
          stroke: He ? "black" : void 0,
          "stroe-width": He ? "1" : void 0,
          "stroke-linecap": He ? "round" : void 0
        }))
      }, l = function (e) {
        return "black" === e ? "#fff" : "#000"
      }, u = function (e) {
        return "black" === e ? "#000" : "#fff"
      }, d = {
        "sign-in": {
          text: "Continue with Apple",
          centerAlignBoundingBox: {x: 0, y: -11, width: 111.046875, height: 14},
          leftAlignBoundingBox: {x: 0, y: -12, width: 106.53125, height: 15},
          fontFamily: "SF Pro Text",
          rtl: !1,
          letterSpacing: "-.022em"
        },
        "continue": {
          text: "Continue with Apple",
          centerAlignBoundingBox: {x: 0, y: -11, width: 123.6875, height: 14},
          leftAlignBoundingBox: {x: 0, y: -12, width: 120.25, height: 15},
          fontFamily: "SF Pro Text",
          rtl: !1,
          letterSpacing: "-.022em"
        },
        "sign-up": {
          text: "Sign up with Apple",
          centerAlignBoundingBox: {x: 0, y: -11, width: 115.40625, height: 14},
          leftAlignBoundingBox: {x: 0, y: -12, width: 111.25, height: 15},
          fontFamily: "SF Pro Text",
          rtl: !1,
          letterSpacing: "-.022em"
        }
      }, g = function (e) {
        return d
      }, p = function Be(e) {
        var t = e.color, o = void 0 === t ? "black" : t, a = e.type, n = void 0 === a ? "sign-in" : a,
            u = e.border, d = void 0 !== u && u, Be = e.width, p = e.height, f = e.borderRadius,
            m = (e.locale, g()[n]), h = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "black", o = g()[e],
                  a = o.text, n = o.rtl, r = o.fontFamily, s = o.centerAlignBoundingBox, i = s.width,
                  c = s.height, u = s.y, d = s.x;
              return '\n  <svg xmlns="http://www.w3.org/2000/svg" style="pointer-events: none; overflow: visible;" width="100%" height="100%">\n    <g>\n      <svg xmlns="http://www.w3.org/2000/svg" style="overflow: visible;" width="100%" height="50%" y="25%" viewBox="'.concat(d, " ").concat(u, " ").concat(i, " ").concat(c, '" fill="').concat(l(t), '">\n        <defs>\n          <style>\n            ').concat('\n  @font-face {\n    font-family: "SF Pro Text";\n    src: url(data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAABRMABEAAAAAIawAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHUE9TAAATFAAAALsAAAHIbUB2PEdTVUIAABPQAAAAZQAAAIxKSyvpT1MvMgAACjgAAABNAAAAYHLeeipic2xuAAAUOAAAABMAAABI/ykCnmNtYXAAAAqIAAAArAAAATzUgYTCY3Z0IAAAEagAAACGAAAA/h4jsglmcGdtAAALNAAABcMAAAviP64gqWdhc3AAABMMAAAACAAAAAgAAAAQZ2x5ZgAAAYAAAAfMAAAMDN+ERypoZWFkAAAJlAAAADYAAAA2FZUeyWhoZWEAAAoYAAAAIAAAACQQagbMaG10eAAACcwAAABMAAAATFWqCFBsb2NhAAAJbAAAACgAAAAoG5oe821heHAAAAlMAAAAIAAAACABaQyMbmFtZQAAEjAAAADFAAABhhtRNi1wb3N0AAAS+AAAABMAAAAg/tsAmnByZXAAABD4AAAArgAAAMdYpaDHeJzVVm1QVOcVPu/HvcvytXvdvbvoooG9sGtKQGVZKCXoIhGVxUJipCy7iEQsEhH50GD4GBVWg6KTmcRak6owdWS0DqBNNJlMWhs/8kOnsTZNmTo1an+YjvVHbSft1LDQc++yBC12+rezn+85573vc855zjkvUCgCEFYKx0EHMVDkPZNeVuGRgQMQDq8ApVu8AqOENJESG8oppy0RpSZvJSU+TzxAtB4foJMkSYy1piWzZKYQFyH4y/3B0M3d96j+IdWHWn9L3r9BdozvEo4/quJHQ8foK0CgfeKWEBA+hVSoD5+fCpTh04UmEDgTeCMwRvxASJsXOAe/SAC2A+JRnrQjgJjY+imrDkB0JgLJSXNtssloiNFDKknVxZrTBLvDQd1Zs7KzXZnzqFXJoIpdFGWzxeLKzM7OccUzJhx6+LPKylMPD7VdH6iNvy2/+pPq7o/r6n7RXX2k3nzbUHvs18rGKyRhZIQkfLpx5Z4PGit6Vuz5+tTJr/cUtL20aaTrBQwTNE/c4pfRt0yoCvuWAowDZ9CkBZE0Ilbqxzijb4QIfhCE7QK6Zn/SjOKK8vURow4BPdNnKOYMxSjGzkkzueZRFbk7y+F0OhzurMX0Cces1nlUNouigp43f6kPHKypPPBi8M2PLn/o7fvktcaP9r0o3Iwp6365Yndxx4H+gx+W9/7r9MDfDpDgCxtycms9qzfa0zMu9q871pyf33jYv7TG7a4pWLUu2WnfdLRh39XNG3+JEH848Re+lJdDFCiw2JMHVBAFKjZhHARKhBodpoT70eN2L4gi82NeO1gJAXtSos0qG+Ki9QKHKBIVhQkiiFqXnEFNrniqQnZnqamyWGQ5WdZcpf7SjmKROlhh28fXrbsudR25295x993Df9g2NsFW7iyvCbL+oh1r1uwoCr1Rc2BV79jw8MT+4D9Oe2PX7S/B3FDYML6Or+WrwQAuEuM9k4jZiX6OEDGRCECLbdpCF174wurvANJMYBw9IqJfR0Sx3RuFTmkpafJqudQTSjtpiS2c7oypHTpdi1fbBv9914L/ZVfr47s8aVMbOMo4rX7qRuSNz+exSUYCCzKedSY/M9sqm40uyaXXgYEYojH0qWEeOSIVYcLwO11aZbjdSphBkXRYXW6XhKyitYHg8uXBQKC7sLC7uvfa9tg/xvds3vNj46Lh5r6rmxuv9Xl31z0jfdbxp6s/GNjcMFBRMdCA36FDJfuq8pa/3nDDt/aNvx8f/OfeBeV5w9+c7zpfq1bPIPKlVLgPFmg6xwgjpNh7xo7xsQJAszfSFtq9AqeUNk0F3fqtBg2pb0o9s6aVYkw8cSiwgEUxp2APS0jDiEiuScpJipQVjoY0+IU0/1TH1pP+0baWinaPcD90MlBXfX5XqIDu6w4u63opFERm9SD4t0U8DEzw6iRkAXOlUf519egWLyfhrhppuQwNsH2tf0w5k1xtuT7PLCwViIvhJsGExzDELGuY2fRawcQM/H5T6uLUyJsXfHOBjzs8DqfH4fA48c//GVqNE6QLOcFgWRhrrEYG+hhAVUZ8Edm0ZRhONK5VGGwSxuCocP+RRWXcEWRcLnYwGRpUxoHKOCs+EGEz8BOiuvUfbFOFM5BxZs23bJNBVkxTbJPDbJtOtiPXjfN/2nH+0ujWttJtHl4w5K/7/GJoCe3r6SnsXBPqmey49YjXADZIV/vT1FmYQPDz8BBUq90qG22SLVzl4uQEnB56Z6Za9HgwljzdOHCvs/Or/mNfdXbe699/+PB+/Mi9obMj47294yNnQ70Xrvz87JUrZ9+7jBiOjB/iP8I+aoYUeMcTLREuxBDCaXG4ac7FtgN+JlKAdq+OcK4h7PDi0Ns61fGSETmGSrVUB/dMhmjzNDXzqdu1wFotMoF5iXKKJcVoiI9Df83ErA2UST+xezkVDLIWcNMTrY7e6Lu6pfHa3q1n0qTR68ZF5zMD3UVF3X5/z4rlQb5679jQUGhvTXnooXD6/ar6sYBvsLX1hK9ysKXlRCWyJ2/iET0tlEECBDzRsYTROIJTuzjMk0SVXy1qXohPRCpqzNDGYRNH756ubuU466Mlc6oiSUZdrA2HPaJXJLPakXPkyYYsKW7Xn0cfPCgum223zslL2v524dCQUDb+4FzoN2tKGX1PEPO662ndOTzmLWRNJi/AjKksBzbFco2h2skQUMneBFMsj6hQqFE6oAZfLa5pmtbpmkmWm8EcYTlBjOH54cai0+C7JZ55XZp/ovPcxdEtr3X3qSU/VLXh81/RS6FtwZ1v7aRdiLcAQHQgXgMs/SBOj+AomQyqAW9+TD09gvZxSat6AVRRGMBgkkxhFERhino/NYVfomP8i9t3pTu3xn9385Lxzmd3pIsqCmYf+5IXjH3ClqgfHBaETfxVeCQaIBe+D1HnivPtQBcirfCWFc9l8zxmRXbp1NuKeucK31qcGTRyFXNlLqZOVapdz7JzFtMclY/8qFTkW+tkSubCpGfz89OodUFq8oqX3fNzXUvS05fmfC9lUZnXmV78XGFz30pnkSc3wZq3rCxmzopSJSaaUHdy4qpyJ1vAD+oSl+TS2RlF1c8X1RdnyIQV1OYs9H3XlGAyzTFlV+YUnLpQ3TK87XmzzSzPlXclZc6lzKjPb3bYs5JI3Kz81n8DmAOACAABAAAAEwBqAAcAAAAAAAIALgA+AHcAAACpC+IAAAAAAAAAAAAAAEEArwEmAX0CTgKqAwEDWAOHA98EIQSmBPoFUgWVBZUGBgABAAAAAQAAhOuEOl8PPPUAAQgAAAAAANaoccYAAAAA1w1hff4i/eoKqAikAAAAAwACAAAAAAAACAAAYwIwAAAFjwBFBc0AeQU1AHAEqABlBPoAZAThAKUCFgCCAhYAggIjAKUEywCbBM8AZQT7AJsDDAA6BM4AkQZoAEACAAAAB0ABAnicY2BkYGCf90+IgYHb9J/S30Ku5QxAERQgDACBlAVKeJxjYGZ5xPiFgZWBgdWY5QwDA8NMCM10hmEWUy+Qz8DGAAeMDEjAMSDAB0gp/PjPPu+fEAMD+zzGdwoMjPNBciyOrItBcgzMANLgDugAAAB4nHXPTQrCQAwF4OdPFbSIPztXXfQi0iN4hlKEUlxY6lUU1F7BGyh4EL1Fd883M3Fp4CMNGZIUwBDAQFKE71RVT/mlPPF1DBctQrgqMe7dxvQlM27e1riZuYmkkJ2MpDRuTyV7mcpBaplJY+ZaGQVYAB0DLLXhqLzWC3dxomsybc61pdTEGk0SdST9zb9eoV6lPdbjh08+eGfLG6+88MzTOx6v/B/+iS+yhS92eJytVmlz01YUlbzFSchSstCiLk+8OE3tJ5NSCAZMCJJlF9zF2VoJSivFTrov0DLDb9CvuTLtDP3GT+u5km0MSdoZppmM7nnvHb27X5k0JUjb91xfiPYzbXa7TYXdex5dNmjND45EtO9RphT+XdSKWrcrDwzTJM0nzZGNvqZrTmBbpCsSwZFFGSV6gp53KLd6r7+mTzlu16WC65mULfk79z1TmkbkCep0sLXlG4JqjGq+L+KUHfZoDVuDlaB1Pl9n5vOOJ2BNFAqa6ngBdgSfTTHaYLQRGIHv+wbpFd+XpHW8Q9+3KKsE7smVQliWdzoe5aVNBWnDD5/0wKKckrBL9OL8gS34hC02Ugv4SYXA7VK2bOLQEZGIoCBez5fg5LYXdIxwx/ekb/qCtnY9nBns2kC/RXlFE06lr2XSSBWwlLZExKUdUubgiPQurKB82aIJJdjUaaf7LKcdCL6BtgKfKUEjMbWo+hPTmuPaZXMU+0n1ci6m0lv0Ckxw4Hcg3EiGnJckXprBMSVhwMihlciODBupiulTXqcVvKUZL1wbf+mMShzqT09lkWxDmn7ZtGhGxZmMS72wYdGsAlEIOuPc5dcBpO3TDK92sJrByqI5XDOfhEQgAl3opVknEFEgaBZBs2hetfe8ONdr+Cs0cyifWPSGam977d100zCxv5Dsn1WxNufse/HcnEN6aNNchWsWlWzHZ/gxgwfpy8hEttTxYg4evLUj5JfVlk2J14bYSM/5FbQC7/jwpAX7W9h9OVWnJDDWtAWJaDmkbfZ1XU9ytaC0WMu4ex7NSVu4NI3im5IoOFsEUP/X/LyuzWq2HQXx2UKFHleMCwjTInxbqFi0pGKd5TLizPKcirMs31RxjuVbKs6zPK/iAktDxRMs31ZxkeU7Kp5k+YGSw7hDNSIsRZX0B9wgFpXHDpdHhw/Tw8rY4ero8FF6+K7SaKbyGv69B//ehV0C/rE04R/LC/CPpYR/LFfgH8sS/GO5Cv9Yvg//WK7BP5ZKiXpSppaC2vlAOMht4CSpROsprtWqIqtCFrrwIhqgJU7JogxrkifivzIM9n59lFp9mS6W47y+5HoYZOzgh+OROX58SYkrib0fgae7x5WgO09Uzvva8p8a/zU2ZS2+pC/Bo8vwHwafbC+aIqxZdEVVz9Ut2vgvKgq4C/pVpERbLomqaHHjI5R3oqglW5gUHr4QGKyYBhu6vrQI/TVMqGU0F/4TCk06lcOoKoWoR7jr2otjUU3voBzuBEtQwLNia9t7mhFZYTzNrGbP+zbPzyJGsUzYsonOdV5tw4BnWPq5yDhBT1LWCXs4zjihARzw/Hr1nRAmYarLJnIooaEJvyASLbjvBCUynZQ5DAfEPo+Cyh+7FTeyR6XECDw76YR8oQspv84xENjJrw5iIOsIzY1km4poHiGassXKOFv1JGTswCCi2p5XFXV8XdniwaZgW4YhL5SwujP+IU8TdVIFDzIjuYxvDixwhqkJ+Ev/qovDVG5iHlQ5ak0M9bpfjav6Ihrw1mi7M7699TL7RM5tRbXKiZfaiq5VIijmYoG1xzlIS5WqoDqjChtGl4tLotSraJL0ugaGBub/a5Ri6/+qPjaf50tdYoSM5dv0Bza6HIyh/03235SDAAz8GLncgstLaXPilwH6cKFKl9GLH5+yfwczV19coCvAdxVdhWhz1FzEVTTxGRzG6RPF5UhtwE9VH3MG4DMAncHnqq8nOx2AZGebOS7ADnMY7DKHwR5zGOwz5zbAF8xh8CVzGHjMYeAzxwG4xxwG95nD4CvmMHjAnCbA18xh8A1zGATMYRAyxwY4YA6DLnMY9JjD4FDR9VGYj3hBm0DfJugW0HdJPWGxhcX3im6M2D/wImH/mCBm/5Qgpv6sqD6i/sKLhPprgpj6W4KY+lDRzRH1ES8S6u8JYuofCWLqY/V0MpcZ/vCyK1Q8pOxK58nwm2L9Aw8nY10AeJxj8N7BcCIoYiMjY1/kBsadHAwcDMkFGxnYnbZXpYW5GTGwMWiBeA58uRyxbL5slhzq7NIsbBxQwXK2VJZQFmc2A1ZFJrAgr9N+6QbxBuEGvgYuBnYGoHZOoKiw034GByQIFmVOcdmowtgRGLHBoSMCzFMD8XZxNDAwsjh0JIeABSOBwIEvnyOezZ/NmkOTXZaFjUdrB+P/1g0svRuZGFw2s6awMbi4AADrlS9DAAB4nGNgIBncBcJjDMdYShgY2Of9E2KZ+P8xiAaL72fYz7qYgYHFkYHh3zSQKOux/3dZwv6//leKrob1FYvj/3cIVaz/gere/esBq9sNhFMZpjL9Y3z+X/CfAkiMWZDx+3+mf5zI8mwHWFcyXWZ8BBJju8y6k+kI42ls9iC7hk0c4R4AmMtWvAAAeJyNj08LAVEUxX/DIGVtPQtbGv+iZmWjLNQUzcKWCTWMDPKVfBMfxodwzDwiKb3ePeeed+7tPKDEjDyWXQYC3YxbVNVlPEeFyPA8PmfDbWpcDS/gcDO8iGNVuEhp4dKkS92wnrQBO52IUHzEljmNVI10HPasWbLiQJJ2oTAUnlQXck4YSvelxMKp1LO84/R1zZHND4fz4fHUu8rUUF0IQ2XzXnn7yuvSUW0L/9kXpBkTdbF+9L37sSPb8Jyvv8/fASPuNJwAAAB4nGNgZgCDfzcYZjFgAQA4VwJ0AAABAAH//wAPeJyNUDEOwjAMPCcF2lQChPoAHsDICxBiYmRkQYiJqkPFAH9jZGIF8RIWxGAuKVI7dGhOsZ3zObINAeCwwBZ2uVpvkO0vZY5pvjsVmCFiFqrwqjqWRmxgj4eyQNa0TEq4EZLg46AEvRHjq2Uic6QE9Ko34q5ntB59tfMtyo8+O2sfXZW+A/b3bbzf1fzdav++ns4E+L2kGIfNWAyrTfLfHvoE6AdETJ0LuRFZIeNrPZvQOsauqvoB5z0tQgB4nGNgZGBg4GKIYihhYHZx8wlhEEmuLMphkMtJLMljUGJgAcoy/P/PAAPMjlGuCgxizkEhCgxyIUHeCgxqYHlGqDpGEAtMMzEw5+Qn5zCIIJNARYxgzAKlOYCYDawLyAYAAaIWnAAAAHicY2BkgAKmef81GMgGAGutAckA) format("woff")\n  }', '\n          </style>\n        </defs>\n        <text font-size="10px" ').concat("0em" !== o.letterSpacing ? 'textLength="'.concat(i, '"') : "", ' font-family="').concat(r, '" direction="').concat(n ? "rtl" : "ltr", '"> ').concat(a, "</text>\n      </svg>\n    </g>\n  </svg>\n  ")
            }(n, o), v = s({
              "font-synthesis": "none",
              "-moz-font-feature-settings": "kern",
              "-webkit-font-smoothing": "antialiased",
              "-moz-osx-font-smoothing": "grayscale",
              width: i(Be),
              height: i(p),
              "min-width": "130px",
              "max-width": "375px",
              "min-height": "30px",
              "max-height": "64px",
              position: "relative"
            });
        return r("div", {
          style: v,
          role: "button",
          tabindex: "0",
          "aria-label": m.text
        }, "\n    ".concat(r("div", {
          style: s({
            "padding-left": "14%",
            "padding-right": "14%",
            position: "absolute",
            "box-sizing": "border-box",
            width: "100%",
            height: "100%"
          })
        }, h), "\n    ").concat(r("div", {
          style: s({
            padding: d ? "1px" : void 0,
            width: "100%",
            height: "100%",
            "box-sizing": "border-box"
          })
        }, c({color: o, borderRadius: f, border: d})), "\n    "))
      }, f = [], m = [], h = function (e, t) {
        var o = f.indexOf(e);
        if (o >= 0) {
          var a = m[o];
          if (a) return a[t]
        }
      }, v = function (e, t, o) {
        var a = f.indexOf(e);
        if (a < 0) {
          var n = {};
          n[t] = o, f.push(e), m.push(n)
        } else m[a] || (m[a] = {}), m[a][t] = o
      }, y = [], b = !1, D = function (e) {
        if (null === e) return null;
        var t = e.getBoundingClientRect();
        return {width: t.width, height: t.height}
      }, w = function (e) {
        return e.contentBoxSize ? {
          width: e.contentBoxSize.inlineSize,
          height: e.contentBoxSize.blockSize
        } : {width: e.contentRect.width, height: e.contentRect.height}
      }, P = function (e) {
        var t, o, a = h(e, "lastScheduleResizeCheckSize"), n = a || D(e), r = h(e, "lastKnownSize");
        r && (o = n, (t = r).width === o.width && t.height === o.height) || (h(e, "resizeCallback")(n), v(e, "lastKnownSize", n)), v(e, "resizeCheckIsScheduled", !1)
      }, C = function (e, t) {
        v(e, "lastScheduleResizeCheckSize", t), h(e, "resizeCheckIsScheduled") || (v(e, "resizeCheckIsScheduled", !0), "function" == typeof requestAnimationFrame ? window.requestAnimationFrame(function () {
          P(e)
        }) : setTimeout(function () {
          P(e)
        }, 1e3 / 60))
      }, S = function (e, t) {
        v(e, "resizeCallback", t), h(e, "isObserved") || (v(e, "isObserved", !0), "undefined" != typeof ResizeObserver ? (o || (o = new ResizeObserver(function (e) {
          var t = !0, o = !1, a = void 0;
          try {
            for (var n, r = e[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
              var s = n.value;
              C(s.target, w(s))
            }
          } catch (e) {
            o = !0, a = e
          } finally {
            try {
              t || null == r["return"] || r["return"]()
            } finally {
              if (o) throw a
            }
          }
        })), o.observe(e)) : b || (window.addEventListener("resize", function () {
          y.forEach(function (e) {
            return C(e)
          })
        }), "undefined" != typeof MutationObserver && new MutationObserver(function () {
          y.forEach(function (e) {
            return C(e)
          })
        }).observe(document, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        }), b = !0), y.push(e))
      }, A = {
        small: {
          height: 44,
          width: 24,
          logoWidth: 12,
          path: "M12.2337427,16.9879688 C12.8896607,16.9879688 13.7118677,16.5445313 14.2014966,15.9532812 C14.6449341,15.4174609 14.968274,14.6691602 14.968274,13.9208594 C14.968274,13.8192383 14.9590357,13.7176172 14.9405591,13.6344727 C14.2107349,13.6621875 13.3330982,14.1241016 12.8065162,14.7430664 C12.3907935,15.2142188 12.012024,15.9532812 12.012024,16.7108203 C12.012024,16.8216797 12.0305005,16.9325391 12.0397388,16.9694922 C12.0859302,16.9787305 12.1598365,16.9879688 12.2337427,16.9879688 Z M9.92417241,28.1662891 C10.8202857,28.1662891 11.2175318,27.5658008 12.3353638,27.5658008 C13.4716724,27.5658008 13.721106,28.1478125 14.7188404,28.1478125 C15.6980982,28.1478125 16.3540162,27.2424609 16.972981,26.3555859 C17.6658521,25.339375 17.9522388,24.3416406 17.9707154,24.2954492 C17.9060474,24.2769727 16.0306763,23.5101953 16.0306763,21.3576758 C16.0306763,19.491543 17.5088013,18.6508594 17.5919459,18.5861914 C16.612688,17.1819727 15.1253248,17.1450195 14.7188404,17.1450195 C13.6194849,17.1450195 12.7233716,17.8101758 12.1598365,17.8101758 C11.5501099,17.8101758 10.7463794,17.1819727 9.79483648,17.1819727 C7.98413335,17.1819727 6.14571538,18.6785742 6.14571538,21.5054883 C6.14571538,23.2607617 6.8293482,25.1176563 7.67003179,26.3186328 C8.39061773,27.3348438 9.01882085,28.1662891 9.92417241,28.1662891 Z"
        },
        medium: {
          height: 44,
          width: 31,
          logoWidth: 17,
          path: "M15.7099491,14.8846154 C16.5675461,14.8846154 17.642562,14.3048315 18.28274,13.5317864 C18.8625238,12.8312142 19.2852829,11.852829 19.2852829,10.8744437 C19.2852829,10.7415766 19.2732041,10.6087095 19.2490464,10.5 C18.2948188,10.5362365 17.1473299,11.140178 16.4588366,11.9494596 C15.9152893,12.56548 15.4200572,13.5317864 15.4200572,14.5222505 C15.4200572,14.6671964 15.4442149,14.8121424 15.4562937,14.8604577 C15.5166879,14.8725366 15.6133185,14.8846154 15.7099491,14.8846154 Z M12.6902416,29.5 C13.8618881,29.5 14.3812778,28.714876 15.8428163,28.714876 C17.3285124,28.714876 17.6546408,29.4758423 18.9591545,29.4758423 C20.2395105,29.4758423 21.0971074,28.292117 21.9063891,27.1325493 C22.8123013,25.8038779 23.1867451,24.4993643 23.2109027,24.4389701 C23.1263509,24.4148125 20.6743484,23.4122695 20.6743484,20.5979021 C20.6743484,18.1579784 22.6069612,17.0588048 22.7156707,16.974253 C21.4353147,15.1382708 19.490623,15.0899555 18.9591545,15.0899555 C17.5217737,15.0899555 16.3501271,15.9596313 15.6133185,15.9596313 C14.8161157,15.9596313 13.7652575,15.1382708 12.521138,15.1382708 C10.1536872,15.1382708 7.75,17.0950413 7.75,20.7911634 C7.75,23.0861411 8.64383344,25.513986 9.74300699,27.0842339 C10.6851558,28.4129053 11.5065162,29.5 12.6902416,29.5 Z"
        },
        large: {
          height: 44,
          width: 39,
          logoWidth: 21,
          path: "M19.8196726,13.1384615 C20.902953,13.1384615 22.2608678,12.406103 23.0695137,11.4296249 C23.8018722,10.5446917 24.3358837,9.30883662 24.3358837,8.07298156 C24.3358837,7.9051494 24.3206262,7.73731723 24.2901113,7.6 C23.0847711,7.64577241 21.6353115,8.4086459 20.7656357,9.43089638 C20.0790496,10.2090273 19.4534933,11.4296249 19.4534933,12.6807374 C19.4534933,12.8638271 19.4840083,13.0469167 19.4992657,13.1079466 C19.5755531,13.1232041 19.6976128,13.1384615 19.8196726,13.1384615 Z M16.0053051,31.6 C17.4852797,31.6 18.1413509,30.6082645 19.9875048,30.6082645 C21.8641736,30.6082645 22.2761252,31.5694851 23.923932,31.5694851 C25.5412238,31.5694851 26.6245041,30.074253 27.6467546,28.6095359 C28.7910648,26.9312142 29.2640464,25.2834075 29.2945613,25.2071202 C29.1877591,25.1766052 26.0904927,23.9102352 26.0904927,20.3552448 C26.0904927,17.2732359 28.5316879,15.8848061 28.6690051,15.7780038 C27.0517133,13.4588684 24.5952606,13.3978385 23.923932,13.3978385 C22.1082931,13.3978385 20.6283185,14.4963764 19.6976128,14.4963764 C18.6906198,14.4963764 17.36322,13.4588684 15.7917006,13.4588684 C12.8012365,13.4588684 9.765,15.9305785 9.765,20.5993643 C9.765,23.4982835 10.8940528,26.565035 12.2824825,28.548506 C13.4725652,30.2268277 14.5100731,31.6 16.0053051,31.6 Z"
        }
      }, L = function (e, t, o, a) {
        var n = A[e], s = (n.width - n.logoWidth) / 2;
        return r("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: i(a),
          width: i(o),
          viewBox: "".concat(s, " 0 ").concat(n.logoWidth, " ").concat(n.height)
        }, r("g", {
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }, r("path", {fill: l(t), "fill-rule": "nonzero", d: n.path})))
      }, I = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "black",
            o = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0, n = g()[e], c = n.text, u = n.rtl,
            d = n.fontFamily, p = n.leftAlignBoundingBox, f = p.width, m = p.x;
        return r("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          style: s({overflow: "visible"}),
          width: i(o),
          height: i(a),
          preserveAspectRatio: u ? "xMaxYMid meet" : "xMinYMid meet",
          viewBox: "".concat(m, " ").concat(.655 * -30, " ").concat(f, " ").concat(30),
          fill: "".concat(l(t))
        }, [r("defs", r("style", '\n  @font-face {\n    font-family: "SF Pro Text";\n    src: url(data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAABRMABEAAAAAIawAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHUE9TAAATFAAAALsAAAHIbUB2PEdTVUIAABPQAAAAZQAAAIxKSyvpT1MvMgAACjgAAABNAAAAYHLeeipic2xuAAAUOAAAABMAAABI/ykCnmNtYXAAAAqIAAAArAAAATzUgYTCY3Z0IAAAEagAAACGAAAA/h4jsglmcGdtAAALNAAABcMAAAviP64gqWdhc3AAABMMAAAACAAAAAgAAAAQZ2x5ZgAAAYAAAAfMAAAMDN+ERypoZWFkAAAJlAAAADYAAAA2FZUeyWhoZWEAAAoYAAAAIAAAACQQagbMaG10eAAACcwAAABMAAAATFWqCFBsb2NhAAAJbAAAACgAAAAoG5oe821heHAAAAlMAAAAIAAAACABaQyMbmFtZQAAEjAAAADFAAABhhtRNi1wb3N0AAAS+AAAABMAAAAg/tsAmnByZXAAABD4AAAArgAAAMdYpaDHeJzVVm1QVOcVPu/HvcvytXvdvbvoooG9sGtKQGVZKCXoIhGVxUJipCy7iEQsEhH50GD4GBVWg6KTmcRak6owdWS0DqBNNJlMWhs/8kOnsTZNmTo1an+YjvVHbSft1LDQc++yBC12+rezn+85573vc855zjkvUCgCEFYKx0EHMVDkPZNeVuGRgQMQDq8ApVu8AqOENJESG8oppy0RpSZvJSU+TzxAtB4foJMkSYy1piWzZKYQFyH4y/3B0M3d96j+IdWHWn9L3r9BdozvEo4/quJHQ8foK0CgfeKWEBA+hVSoD5+fCpTh04UmEDgTeCMwRvxASJsXOAe/SAC2A+JRnrQjgJjY+imrDkB0JgLJSXNtssloiNFDKknVxZrTBLvDQd1Zs7KzXZnzqFXJoIpdFGWzxeLKzM7OccUzJhx6+LPKylMPD7VdH6iNvy2/+pPq7o/r6n7RXX2k3nzbUHvs18rGKyRhZIQkfLpx5Z4PGit6Vuz5+tTJr/cUtL20aaTrBQwTNE/c4pfRt0yoCvuWAowDZ9CkBZE0Ilbqxzijb4QIfhCE7QK6Zn/SjOKK8vURow4BPdNnKOYMxSjGzkkzueZRFbk7y+F0OhzurMX0Cces1nlUNouigp43f6kPHKypPPBi8M2PLn/o7fvktcaP9r0o3Iwp6365Yndxx4H+gx+W9/7r9MDfDpDgCxtycms9qzfa0zMu9q871pyf33jYv7TG7a4pWLUu2WnfdLRh39XNG3+JEH848Re+lJdDFCiw2JMHVBAFKjZhHARKhBodpoT70eN2L4gi82NeO1gJAXtSos0qG+Ki9QKHKBIVhQkiiFqXnEFNrniqQnZnqamyWGQ5WdZcpf7SjmKROlhh28fXrbsudR25295x993Df9g2NsFW7iyvCbL+oh1r1uwoCr1Rc2BV79jw8MT+4D9Oe2PX7S/B3FDYML6Or+WrwQAuEuM9k4jZiX6OEDGRCECLbdpCF174wurvANJMYBw9IqJfR0Sx3RuFTmkpafJqudQTSjtpiS2c7oypHTpdi1fbBv9914L/ZVfr47s8aVMbOMo4rX7qRuSNz+exSUYCCzKedSY/M9sqm40uyaXXgYEYojH0qWEeOSIVYcLwO11aZbjdSphBkXRYXW6XhKyitYHg8uXBQKC7sLC7uvfa9tg/xvds3vNj46Lh5r6rmxuv9Xl31z0jfdbxp6s/GNjcMFBRMdCA36FDJfuq8pa/3nDDt/aNvx8f/OfeBeV5w9+c7zpfq1bPIPKlVLgPFmg6xwgjpNh7xo7xsQJAszfSFtq9AqeUNk0F3fqtBg2pb0o9s6aVYkw8cSiwgEUxp2APS0jDiEiuScpJipQVjoY0+IU0/1TH1pP+0baWinaPcD90MlBXfX5XqIDu6w4u63opFERm9SD4t0U8DEzw6iRkAXOlUf519egWLyfhrhppuQwNsH2tf0w5k1xtuT7PLCwViIvhJsGExzDELGuY2fRawcQM/H5T6uLUyJsXfHOBjzs8DqfH4fA48c//GVqNE6QLOcFgWRhrrEYG+hhAVUZ8Edm0ZRhONK5VGGwSxuCocP+RRWXcEWRcLnYwGRpUxoHKOCs+EGEz8BOiuvUfbFOFM5BxZs23bJNBVkxTbJPDbJtOtiPXjfN/2nH+0ujWttJtHl4w5K/7/GJoCe3r6SnsXBPqmey49YjXADZIV/vT1FmYQPDz8BBUq90qG22SLVzl4uQEnB56Z6Za9HgwljzdOHCvs/Or/mNfdXbe699/+PB+/Mi9obMj47294yNnQ70Xrvz87JUrZ9+7jBiOjB/iP8I+aoYUeMcTLREuxBDCaXG4ac7FtgN+JlKAdq+OcK4h7PDi0Ns61fGSETmGSrVUB/dMhmjzNDXzqdu1wFotMoF5iXKKJcVoiI9Df83ErA2UST+xezkVDLIWcNMTrY7e6Lu6pfHa3q1n0qTR68ZF5zMD3UVF3X5/z4rlQb5679jQUGhvTXnooXD6/ar6sYBvsLX1hK9ysKXlRCWyJ2/iET0tlEECBDzRsYTROIJTuzjMk0SVXy1qXohPRCpqzNDGYRNH756ubuU466Mlc6oiSUZdrA2HPaJXJLPakXPkyYYsKW7Xn0cfPCgum223zslL2v524dCQUDb+4FzoN2tKGX1PEPO662ndOTzmLWRNJi/AjKksBzbFco2h2skQUMneBFMsj6hQqFE6oAZfLa5pmtbpmkmWm8EcYTlBjOH54cai0+C7JZ55XZp/ovPcxdEtr3X3qSU/VLXh81/RS6FtwZ1v7aRdiLcAQHQgXgMs/SBOj+AomQyqAW9+TD09gvZxSat6AVRRGMBgkkxhFERhino/NYVfomP8i9t3pTu3xn9385Lxzmd3pIsqCmYf+5IXjH3ClqgfHBaETfxVeCQaIBe+D1HnivPtQBcirfCWFc9l8zxmRXbp1NuKeucK31qcGTRyFXNlLqZOVapdz7JzFtMclY/8qFTkW+tkSubCpGfz89OodUFq8oqX3fNzXUvS05fmfC9lUZnXmV78XGFz30pnkSc3wZq3rCxmzopSJSaaUHdy4qpyJ1vAD+oSl+TS2RlF1c8X1RdnyIQV1OYs9H3XlGAyzTFlV+YUnLpQ3TK87XmzzSzPlXclZc6lzKjPb3bYs5JI3Kz81n8DmAOACAABAAAAEwBqAAcAAAAAAAIALgA+AHcAAACpC+IAAAAAAAAAAAAAAEEArwEmAX0CTgKqAwEDWAOHA98EIQSmBPoFUgWVBZUGBgABAAAAAQAAhOuEOl8PPPUAAQgAAAAAANaoccYAAAAA1w1hff4i/eoKqAikAAAAAwACAAAAAAAACAAAYwIwAAAFjwBFBc0AeQU1AHAEqABlBPoAZAThAKUCFgCCAhYAggIjAKUEywCbBM8AZQT7AJsDDAA6BM4AkQZoAEACAAAAB0ABAnicY2BkYGCf90+IgYHb9J/S30Ku5QxAERQgDACBlAVKeJxjYGZ5xPiFgZWBgdWY5QwDA8NMCM10hmEWUy+Qz8DGAAeMDEjAMSDAB0gp/PjPPu+fEAMD+zzGdwoMjPNBciyOrItBcgzMANLgDugAAAB4nHXPTQrCQAwF4OdPFbSIPztXXfQi0iN4hlKEUlxY6lUU1F7BGyh4EL1Fd883M3Fp4CMNGZIUwBDAQFKE71RVT/mlPPF1DBctQrgqMe7dxvQlM27e1riZuYmkkJ2MpDRuTyV7mcpBaplJY+ZaGQVYAB0DLLXhqLzWC3dxomsybc61pdTEGk0SdST9zb9eoV6lPdbjh08+eGfLG6+88MzTOx6v/B/+iS+yhS92eJytVmlz01YUlbzFSchSstCiLk+8OE3tJ5NSCAZMCJJlF9zF2VoJSivFTrov0DLDb9CvuTLtDP3GT+u5km0MSdoZppmM7nnvHb27X5k0JUjb91xfiPYzbXa7TYXdex5dNmjND45EtO9RphT+XdSKWrcrDwzTJM0nzZGNvqZrTmBbpCsSwZFFGSV6gp53KLd6r7+mTzlu16WC65mULfk79z1TmkbkCep0sLXlG4JqjGq+L+KUHfZoDVuDlaB1Pl9n5vOOJ2BNFAqa6ngBdgSfTTHaYLQRGIHv+wbpFd+XpHW8Q9+3KKsE7smVQliWdzoe5aVNBWnDD5/0wKKckrBL9OL8gS34hC02Ugv4SYXA7VK2bOLQEZGIoCBez5fg5LYXdIxwx/ekb/qCtnY9nBns2kC/RXlFE06lr2XSSBWwlLZExKUdUubgiPQurKB82aIJJdjUaaf7LKcdCL6BtgKfKUEjMbWo+hPTmuPaZXMU+0n1ci6m0lv0Ckxw4Hcg3EiGnJckXprBMSVhwMihlciODBupiulTXqcVvKUZL1wbf+mMShzqT09lkWxDmn7ZtGhGxZmMS72wYdGsAlEIOuPc5dcBpO3TDK92sJrByqI5XDOfhEQgAl3opVknEFEgaBZBs2hetfe8ONdr+Cs0cyifWPSGam977d100zCxv5Dsn1WxNufse/HcnEN6aNNchWsWlWzHZ/gxgwfpy8hEttTxYg4evLUj5JfVlk2J14bYSM/5FbQC7/jwpAX7W9h9OVWnJDDWtAWJaDmkbfZ1XU9ytaC0WMu4ex7NSVu4NI3im5IoOFsEUP/X/LyuzWq2HQXx2UKFHleMCwjTInxbqFi0pGKd5TLizPKcirMs31RxjuVbKs6zPK/iAktDxRMs31ZxkeU7Kp5k+YGSw7hDNSIsRZX0B9wgFpXHDpdHhw/Tw8rY4ero8FF6+K7SaKbyGv69B//ehV0C/rE04R/LC/CPpYR/LFfgH8sS/GO5Cv9Yvg//WK7BP5ZKiXpSppaC2vlAOMht4CSpROsprtWqIqtCFrrwIhqgJU7JogxrkifivzIM9n59lFp9mS6W47y+5HoYZOzgh+OROX58SYkrib0fgae7x5WgO09Uzvva8p8a/zU2ZS2+pC/Bo8vwHwafbC+aIqxZdEVVz9Ut2vgvKgq4C/pVpERbLomqaHHjI5R3oqglW5gUHr4QGKyYBhu6vrQI/TVMqGU0F/4TCk06lcOoKoWoR7jr2otjUU3voBzuBEtQwLNia9t7mhFZYTzNrGbP+zbPzyJGsUzYsonOdV5tw4BnWPq5yDhBT1LWCXs4zjihARzw/Hr1nRAmYarLJnIooaEJvyASLbjvBCUynZQ5DAfEPo+Cyh+7FTeyR6XECDw76YR8oQspv84xENjJrw5iIOsIzY1km4poHiGassXKOFv1JGTswCCi2p5XFXV8XdniwaZgW4YhL5SwujP+IU8TdVIFDzIjuYxvDixwhqkJ+Ev/qovDVG5iHlQ5ak0M9bpfjav6Ihrw1mi7M7699TL7RM5tRbXKiZfaiq5VIijmYoG1xzlIS5WqoDqjChtGl4tLotSraJL0ugaGBub/a5Ri6/+qPjaf50tdYoSM5dv0Bza6HIyh/03235SDAAz8GLncgstLaXPilwH6cKFKl9GLH5+yfwczV19coCvAdxVdhWhz1FzEVTTxGRzG6RPF5UhtwE9VH3MG4DMAncHnqq8nOx2AZGebOS7ADnMY7DKHwR5zGOwz5zbAF8xh8CVzGHjMYeAzxwG4xxwG95nD4CvmMHjAnCbA18xh8A1zGATMYRAyxwY4YA6DLnMY9JjD4FDR9VGYj3hBm0DfJugW0HdJPWGxhcX3im6M2D/wImH/mCBm/5Qgpv6sqD6i/sKLhPprgpj6W4KY+lDRzRH1ES8S6u8JYuofCWLqY/V0MpcZ/vCyK1Q8pOxK58nwm2L9Aw8nY10AeJxj8N7BcCIoYiMjY1/kBsadHAwcDMkFGxnYnbZXpYW5GTGwMWiBeA58uRyxbL5slhzq7NIsbBxQwXK2VJZQFmc2A1ZFJrAgr9N+6QbxBuEGvgYuBnYGoHZOoKiw034GByQIFmVOcdmowtgRGLHBoSMCzFMD8XZxNDAwsjh0JIeABSOBwIEvnyOezZ/NmkOTXZaFjUdrB+P/1g0svRuZGFw2s6awMbi4AADrlS9DAAB4nGNgIBncBcJjDMdYShgY2Of9E2KZ+P8xiAaL72fYz7qYgYHFkYHh3zSQKOux/3dZwv6//leKrob1FYvj/3cIVaz/gere/esBq9sNhFMZpjL9Y3z+X/CfAkiMWZDx+3+mf5zI8mwHWFcyXWZ8BBJju8y6k+kI42ls9iC7hk0c4R4AmMtWvAAAeJyNj08LAVEUxX/DIGVtPQtbGv+iZmWjLNQUzcKWCTWMDPKVfBMfxodwzDwiKb3ePeeed+7tPKDEjDyWXQYC3YxbVNVlPEeFyPA8PmfDbWpcDS/gcDO8iGNVuEhp4dKkS92wnrQBO52IUHzEljmNVI10HPasWbLiQJJ2oTAUnlQXck4YSvelxMKp1LO84/R1zZHND4fz4fHUu8rUUF0IQ2XzXnn7yuvSUW0L/9kXpBkTdbF+9L37sSPb8Jyvv8/fASPuNJwAAAB4nGNgZgCDfzcYZjFgAQA4VwJ0AAABAAH//wAPeJyNUDEOwjAMPCcF2lQChPoAHsDICxBiYmRkQYiJqkPFAH9jZGIF8RIWxGAuKVI7dGhOsZ3zObINAeCwwBZ2uVpvkO0vZY5pvjsVmCFiFqrwqjqWRmxgj4eyQNa0TEq4EZLg46AEvRHjq2Uic6QE9Ko34q5ntB59tfMtyo8+O2sfXZW+A/b3bbzf1fzdav++ns4E+L2kGIfNWAyrTfLfHvoE6AdETJ0LuRFZIeNrPZvQOsauqvoB5z0tQgB4nGNgZGBg4GKIYihhYHZx8wlhEEmuLMphkMtJLMljUGJgAcoy/P/PAAPMjlGuCgxizkEhCgxyIUHeCgxqYHlGqDpGEAtMMzEw5+Qn5zCIIJNARYxgzAKlOYCYDawLyAYAAaIWnAAAAHicY2BkgAKmef81GMgGAGutAckA) format("woff")\n  }')), r("text", {
          "font-size": "13px",
          textLength: "0em" !== n.letterSpacing ? f : void 0,
          "font-family": d,
          direction: u ? "rtl" : "ltr"
        }, c)])
      }, M = function (e) {
        return "number" == typeof e && !isNaN(e)
      }, U = function (e, t) {
        return t ? "left" === e ? "right" : "left" : e
      }, k = function (e) {
        var t = e.width, o = e.height, a = e.logoSize, n = e.labelPosition, r = e.logoPosition;
        (t = Math.floor(t)) > 375 ? t = 375 : t < 130 && (t = 130), (o = Math.floor(o)) > 64 ? o = 64 : o < 30 && (o = 30), n = Math.floor(n), r = Math.floor(r);
        var s, i, c = (i = o / (s = A[a]).height, Math.floor(s.logoWidth * i)), l = Math.floor(.5 * c),
            u = Math.floor(.7 * c), d = l + c + u, g = Math.floor(t / 2);
        n > g ? n = g : n < d && (n = d);
        var p = n - u - c;
        r > p ? r = p : r < l && (r = l);
        var f = r, m = Math.floor(.08 * t), h = n - f - c;
        return {
          width: t,
          height: o,
          leftMargin: f,
          logoWidth: c,
          middleMargin: h,
          labelWidth: t - f - m - h - c,
          rightMargin: m,
          contentWidth: t - m - f
        }
      }, $ = function ze() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = e.id,
            a = void 0 === o ? "appleid-button" : o, l = e.color, u = void 0 === l ? "black" : l,
            d = e.type, p = void 0 === d ? "sign-in" : d, f = e.border, m = void 0 !== f && f,
            h = e.width, v = void 0 === h ? "100%" : h, y = e.height, b = void 0 === y ? "100%" : y,
            w = e.borderRadius, P = void 0 === w ? 15 : w, C = e.labelPosition,
            A = void 0 === C ? 0 : C, ze = e.logoPosition, $ = void 0 === ze ? 0 : ze, R = e.logoSize,
            E = void 0 === R ? "small" : R, x = e.locale, T = void 0 === x ? "" : x,
            N = document.getElementById(a), H = "100%" === v, B = "100%" === b;
        if (H || B) {
          var z = D(N);
          v = H ? z.width : v, b = B ? z.height : b, S(N, function (e) {
            !function (e, t) {
              var o = t.width, a = t.height, n = t.logoPosition, r = t.labelPosition, s = t.logoSize,
                  c = (t.locale, t.type), l = g()[c].rtl, u = e.firstChild.childNodes, d = u[0],
                  p = u[1],
                  f = k({width: o, height: a, logoSize: s, labelPosition: r, logoPosition: n});
              d.style.width = i(f.contentWidth), d.style.height = i(f.height), d.style["padding-".concat(U("right", l))] = i(f.rightMargin), d.style["padding-".concat(U("left", l))] = i(f.leftMargin);
              var m = d.childNodes, h = m[0], v = m[1], y = m[2];
              h.setAttribute("width", i(f.logoWidth)), h.setAttribute("height", i(f.height)), v.style.width = i(f.middleMargin), v.style.height = i(f.height), y.setAttribute("width", i(f.labelWidth)), y.setAttribute("height", i(f.height)), p.setAttribute("width", i(f.width)), p.setAttribute("height", i(f.height)), p.firstChild.setAttribute("width", i(f.width)), p.firstChild.setAttribute("height", i(f.height))
            }(N, {
              width: H ? e.width : v,
              height: B ? e.height : b,
              logoPosition: $,
              labelPosition: A,
              logoSize: E,
              locale: T,
              type: p
            })
          })
        }
        var Y = function (e) {
          var o, a = e.color, n = e.type, l = e.border, u = e.width, d = e.height, p = e.borderRadius,
              f = e.labelPosition, m = e.logoPosition, h = e.logoSize, v = e.locale;
          if (!M(u) || !M(d)) throw new Error("width and height have to be numbers");
          if (!M(f) || !M(m)) throw new Error("labelPosition and logoPosition have to be numbers");
          var y = g()[n], b = y.rtl,
              D = k({width: u, height: d, logoSize: h, labelPosition: f, logoPosition: m}),
              w = [L(h, a, D.logoWidth, D.height), r("span", {
                style: s({
                  display: "inline-block",
                  width: i(D.middleMargin),
                  height: i(D.height)
                })
              }), I(n, a, v, D.labelWidth, d)];
          return b && w.reverse(), r("div", {
            style: s({
              "font-synthesis": "none",
              "-moz-font-feature-settings": "kern",
              "-webkit-font-smoothing": "antialiased",
              "-moz-osx-font-smoothing": "grayscale",
              position: "relative"
            }), role: "button", tabindex: "0", "aria-label": y.text
          }, [r("div", {
            style: s((o = {
              position: "absolute",
              width: i(D.contentWidth),
              height: i(d)
            }, t(o, "padding-".concat(U("right", b)), i(D.rightMargin)), t(o, "padding-".concat(U("left", b)), i(D.leftMargin)), o))
          }, w), c({color: a, borderRadius: p, border: l, width: D.width, height: D.height})])
        }({
          color: u,
          type: p,
          border: m,
          width: v,
          height: b,
          borderRadius: P,
          labelPosition: A,
          logoPosition: $,
          logoSize: E,
          locale: T
        });
        n(N, Y)
      }, R = function (e) {
        var t = e.color, o = void 0 === t ? "black" : t, a = e.size, n = e.border,
            u = void 0 !== n && n, d = e.borderRadius, p = (e.locale, g()["sign-in"]),
            f = function (e) {
              return '\n  <svg xmlns="http://www.w3.org/2000/svg" style="overflow:visible" width="100%" height="100%" viewBox="6 6 44 44">\n      <g fill="none" fill-rule="evenodd">\n          <path fill="'.concat(l(e), '" fill-rule="nonzero" d="M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z"></path>\n      </g>\n  </svg>')
            }(o), m = s({
              "font-synthesis": "none",
              "-moz-font-feature-settings": "kern",
              "-webkit-font-smoothing": "antialiased",
              "-moz-osx-font-smoothing": "grayscale",
              width: i(a),
              height: i(a),
              "min-width": "30px",
              "max-width": "64px",
              "min-height": "30px",
              "max-height": "64px",
              position: "relative"
            });
        return r("div", {
          style: m,
          role: "button",
          tabindex: "0",
          "aria-label": p.text
        }, "\n    ".concat(r("div", {
          style: s({
            position: "absolute",
            "box-sizing": "border-box",
            width: "100%",
            height: "100%"
          })
        }, f), "\n    ").concat(r("div", {
          style: s({
            padding: u ? "1px" : void 0,
            width: "100%",
            height: "100%",
            "box-sizing": "border-box"
          })
        }, c({color: o, borderRadius: d, border: u, isSquare: !0})), "\n    "))
      }, E = ["0", "0"], x = function () {
        for (var e = {}, t = 0; t < arguments.length; t += 1) for (var o = t < 0 || arguments.length <= t ? void 0 : arguments[t], a = Object.keys(o), n = 0; n < a.length; n += 1) {
          var r = a[n];
          e[r] = o[r]
        }
        return e
      }, T = {isInit: !1}, N = {
        baseURI: "https://appleid.apple.com",
        path: "/auth/authorize",
        originURI: "",
        env: "prod",
        usePopup: !1,
        responseType: "code id_token",
        responseMode: "form_post",
        client: {clientId: "", scope: "", redirectURI: "", state: "", nonce: ""}
      }, H = "user_trigger_new_signin_flow", B = "popup_closed_by_user", z = "popup_blocked_by_browser",
      Y = "AppleIDSigInLoaded", O = "AppleIDSignInOnSuccess", j = "AppleIDSignInOnFailure",
      F = function (e) {
        var t = "".concat(e.baseURI).concat(e.path, "?client_id=") + encodeURIComponent(e.client.clientId) + "&redirect_uri=" + encodeURIComponent(e.client.redirectURI) + "&response_type=" + encodeURIComponent(e.responseType);
        return ["state", "scope", "nonce"].forEach(function (o) {
          e.client[o] && (t = "".concat(t, "&").concat(o, "=").concat(encodeURIComponent(e.client[o])))
        }), t = (t = (t = e.usePopup ? t + "&response_mode=" + encodeURIComponent("web_message") : t + "&response_mode=" + encodeURIComponent(e.responseMode)) + "&frame_id=" + "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
          var t = 16 * Math.random() | 0;
          return ("x" == e ? t : 3 & t | 8).toString(16)
        })) + "&m=" + E[0] + E[1], t += "&v=1.5.2"
      }, _ = {}, W = {}, q = {}, V = function (e) {
        _[e] && (_[e] = null), K(e, "closed"), q[e] && (clearInterval(q[e]), q[e] = null)
      }, G = function (e) {
        return W[e] || (W[e] = []), W[e]
      }, K = function (e, t) {
        G(e).forEach(function (e) {
          return e(t)
        })
      }, Z = function (e, t) {
        var o = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
            a = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        return {left: o / 2 - e / 2 + window.screenLeft, top: a / 2 - t / 2 + window.screenTop}
      }, X = Z(700, 700).left, J = Z(700, 700).top, Q = {
        strWindowFeatures: "width=".concat(700, ",height=").concat(700, ",left=").concat(X, ",top=").concat(J, ",resizable=no,location=no,menubar=no"),
        windowName: "AppleAuthentication"
      }, ee = function () {
        var e;
        _[e = Q.windowName] && ("function" == typeof _[e].close && _[e].close(), V(e))
      }, te = function (e) {
        return ee(), t = e, o = Q.windowName, a = Q.strWindowFeatures, (n = window.open(t, o, a)) && (_[o] = n, q[o] = setInterval(function () {
          n.closed && V(o)
        }, 300)), n;
        var t, o, a, n
      }, oe = function (e) {
        return function (e, t) {
          G(e).push(t)
        }(Q.windowName, e)
      }, ae = [], ne = [], re = function (e) {
        var t = ae.indexOf(e);
        ae.splice(t, 1), ne.splice(t, 1)
      }, se = function (e) {
        var t = ae.indexOf(e);
        return ne[t]
      }, ie = function (e) {
        return -1 !== ae.indexOf(e)
      }, ce = function () {
        var e, t, o;
        return function (e, t) {
          ae.push(e), ne.push(t)
        }(e = new Promise(function (e, a) {
          o = e, t = a
        }), {reject: t, resolve: o}), e
      }, le = {}, ue = N.baseURI;
  window.addEventListener("message", function (e) {
    try {
      if (e.origin !== ue) return;
      var t = JSON.parse(e.data);
      t.method in le && le[t.method](t.data)
    } catch (e) {
    }
  }, !1);
  var de = function (e) {
    "dev" === e.env && (ue = e.baseURI)
  }, ge = function (e, t) {
    le[e] = t
  }, pe = function (e, t) {
    document.dispatchEvent(function (e, t) {
      return new CustomEvent(e, {detail: t})
    }(e, t))
  }, fe = null, me = !0, he = !1, ve = function () {
    return ie(fe)
  }, ye = function (e) {
    pe(O, e), ve() && me && function (e, t) {
      ie(e) && (se(e).resolve(t), re(e))
    }(fe, e)
  }, be = function (e) {
    var t, o;
    pe(j, e), ve() && me && (o = e, ie(t = fe) && (se(t).reject(o), re(t)))
  };
  oe(function (e) {
    "closed" === e && he && (be({error: B}), he = !1)
  }), ge("oauthDone", function (e) {
    !function (e) {
      "error" in e ? be(e) : ye(e), he = !1, ee()
    }(e)
  });
  var De, we, Pe = function (e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    ve() && be({error: H}), me = t, "2" !== E[1] && (E[1] = "1");
    var o = F(e);
    E[1] = "0";
    var a, n, r = !!window.Promise;
    if (e.usePopup) {
      if (t && !r) throw new Error("Promise is required to use popup, please use polyfill.");
      if (te(o)) {
        if (he = !0, t) return n = ce(), fe = n
      } else if (pe(j, {error: z}), t) return Promise.reject({error: z})
    } else a = o, window.location.assign(a)
  }, Ce = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
    ["scope", "state", "nonce", "usePopup"].forEach(function (o) {
      if (e[o]) if ("usePopup" === o) {
        if ("boolean" != typeof e[o]) throw new Error('The "' + o + '" should be boolean.');
        t[o] = e[o]
      } else {
        if ("string" != typeof e[o]) throw new Error('The "' + o + '" should be a string.');
        t.client[o] = e[o]
      }
    })
  }, Se = function () {
    var e, t, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = N;
    if (!T.isInit) throw new Error('The "init" function must be called first.');
    if (o) {
      if (!(o instanceof Object) || Array.isArray(o)) throw new Error('The "signinConfig" must be "object".');
      e = o, (t = Object.create(N)).client = Object.create(N.client), e.scope && "string" == typeof e.scope && (t.client.scope = e.scope), e.redirectURI && "string" == typeof e.redirectURI && (t.client.redirectURI = e.redirectURI), Ce(o, n = t)
    }
    return Pe(n, a)
  }, Ae = function (e) {
    if (!e.clientId || "string" != typeof e.clientId) throw new Error('The "clientId" should be a string.');
    if (N.client.clientId = e.clientId, !e.redirectURI || "string" != typeof e.redirectURI) throw new Error('The "redirectURI" should be a string.');
    N.client.redirectURI = e.redirectURI, Ce(e), ke(), T.isInit = !0
  }, Le = function () {
    E[1] = "2", Se(null, !1)
  }, Ie = function () {
    Le()
  }, Me = function (e) {
    32 === e.keyCode ? e.preventDefault() : 13 === e.keyCode && (e.preventDefault(), Le())
  }, Ue = function (e) {
    32 === e.keyCode && (e.preventDefault(), Le())
  }, ke = function () {
    var e, t, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = (e = o.id, document.getElementById(e || "appleid-signin"));
    if (a) {
      (t = a) && t.firstChild && t.removeChild(t.firstChild);
      var r = function (e) {
        var t, o, a, n, r, s = e.dataset, i = "center-align", c = "black", l = !0, u = "sign-in",
            d = "small", g = 15;
        return null != s && (s.locale && (i = s.locale), s.mode && (i = s.mode), s.color && (c = s.color), s.border && (l = "false" !== s.border), s.type && (u = s.type), s.logoSize && (d = s.logoSize), s.borderRadius && !isNaN(parseInt(s.borderRadius, 10)) && (g = parseInt(s.borderRadius, 10)), "100%" === s.width ? t = s.width : s.width && !isNaN(parseInt(s.width, 10)) && (t = parseInt(s.width, 10)), "100%" === s.height ? o = s.height : s.height && !isNaN(parseInt(s.height, 10)) && (o = parseInt(s.height, 10)), "100%" === s.size ? a = s.size : s.size && !isNaN(parseInt(s.size, 10)) && (a = parseInt(s.size, 10)), s.logoPosition && !isNaN(parseInt(s.logoPosition, 10)) && (n = parseInt(s.logoPosition, 10)), s.labelPosition && !isNaN(parseInt(s.labelPosition, 10)) && (r = parseInt(s.labelPosition, 10))), "sign in" === u && (u = "sign-in"), {
          mode: i,
          locale: "",
          color: c,
          border: l,
          type: u,
          borderRadius: g,
          width: t,
          height: o,
          size: a,
          logoPosition: n,
          labelPosition: r,
          logoSize: d
        }
      }(a), s = x({id: "appleid-signin"}, r, o);
      "center-align" === r.mode ? function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.id,
            o = void 0 === t ? "appleid-button" : t, a = e.color, r = void 0 === a ? "black" : a,
            s = e.type, i = void 0 === s ? "sign-in" : s, c = e.border, l = void 0 !== c && c,
            u = e.width, d = void 0 === u ? "100%" : u, g = e.height, f = void 0 === g ? "100%" : g,
            m = e.borderRadius, h = void 0 === m ? 15 : m, v = e.locale, y = p({
              color: r,
              type: i,
              border: l,
              width: d,
              height: f,
              borderRadius: h,
              locale: void 0 === v ? "" : v
            });
        n(o, y)
      }(s) : "left-align" === r.mode ? $(s) : "logo-only" === r.mode && function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.id,
            o = void 0 === t ? "appleid-button" : t, a = e.color, r = void 0 === a ? "black" : a,
            s = e.size, i = void 0 === s ? "100%" : s, c = e.border, l = void 0 !== c && c,
            u = e.borderRadius, d = void 0 === u ? 15 : u, g = e.locale,
            p = R({color: r, size: i, border: l, borderRadius: d, locale: void 0 === g ? "" : g});
        n(o, p)
      }(s), a.addEventListener("click", Ie), a.addEventListener("keydown", Me), a.addEventListener("keyup", Ue)
    }
  };
  !function (e) {
    e.ClientId = "appleid-signin-client-id", e.Scope = "appleid-signin-scope", e.RedirectURI = "appleid-signin-redirect-uri", e.State = "appleid-signin-state", e.Nonce = "appleid-signin-nonce", e.UsePopup = "appleid-signin-use-popup", e.DEV_URI = "appleid-signin-dev-uri", e.DEV_ENV = "appleid-signin-dev-env", e.DEV_PATH = "appleid-signin-dev-path"
  }(De || (De = {}));
  var $e, Re = function () {
    if (!we) {
      we = {};
      for (var e = function () {
        var e = {};
        return Object.keys(De).forEach(function (t) {
          return e[De[t]] = !0
        }), e
      }(), t = document.getElementsByTagName("meta"), o = "", a = 0; a < t.length; a++) e[o = t[a].getAttribute("name")] && (we[o] = t[a].getAttribute("content"))
    }
    return we
  }, Ee = {}, xe = {
    init: function (e) {
      "2" === E[0] ? E[0] = "3" : E[0] = "1", Ee = x({}, Ee, e), Ae(e)
    }, signIn: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      return Se(e)
    }, renderButton: ke
  }, Te = function () {
    if (t = Re(), Object.keys(t).length > 0) {
      "1" === E[0] ? E[0] = "4" : E[0] = "2";
      var e = function () {
        var e = {clientId: "", scope: "", redirectURI: "", state: "", nonce: ""}, t = Re();
        t[De.ClientId] && (e.clientId = t[De.ClientId]), t[De.Scope] && (e.scope = t[De.Scope]), t[De.RedirectURI] && (e.redirectURI = t[De.RedirectURI]), t[De.State] && (e.state = t[De.State]), t[De.Nonce] && (e.nonce = t[De.Nonce]), t[De.UsePopup] && (e.usePopup = "true" === t[De.UsePopup]);
        var o = t[De.DEV_ENV], a = t[De.DEV_PATH], n = t[De.DEV_URI];
        return (o || a || n) && (o && (N.env = o), a && (N.path = a), n && (N.baseURI = n, de(N))), e
      }();
      Ae(x({}, e, Ee))
    }
    var t
  };
  "complete" === document.readyState || "loaded" === document.readyState || "interactive" === document.readyState ? Te() : document.addEventListener("DOMContentLoaded", function () {
    Te()
  }), $e = Y, setTimeout(function () {
    return pe($e)
  }), e.auth = xe, Object.defineProperty(e, "__esModule", {value: !0})
}), function () {
  function e(e, t, o, a, n, r, s, i) {
    function c(e) {
      console.log("a Signin Result: ", e), null === t.params.email ? o.go("website.unsubscribe", {provider: t.params.provider}, {reload: !0}) : o.go("website.unsubscribe", {
        provider: t.params.provider,
        email: t.params.email
      }, {reload: !0})
    }

    function l() {
      function r(e) {
        console.log("b Signin Result: ", e), null === t.params.email ? o.go("website.unsubscribe", {provider: t.params.provider}, {reload: !0}) : o.go("website.unsubscribe", {
          provider: t.params.provider,
          email: t.params.email
        }, {reload: !0})
      }

      function s(e) {
        console.log(e), i.attachClickHandler(e, {}, function (e) {
          console.log("googleUser", e), a.federatedAuth(e.getAuthResponse().id_token, "google", r)
        }, function (e) {
          console.log(e)
        })
      }

          u.basepath = e.basepath
        , console.log("kakao init")
        , Kakao.init("f84e63307c482ac17177439626c9d483")
        , u.login = function (e) {
            "cognito" == e ? null == u.username || null == u.password ? alert("Please type in username and password") : (console.log("a  --- provider", e), console.log("vm", u), t.params = {
              provider: e,
              email: u.username
            }, a.login(e, r, u.username, u.password)) : (console.log("b --- #provider", e), a.login(e, r))
      }, u.kakaoLogin = function () {
        console.log("kakao login"), Kakao.Auth.login({
          success: function (e) {
            console.log("success", e);
            var o = {userAccessToken: e.access_token};
            a.kakaoAuth(o).then(function (e) {
              console.log("items", e), e.data && e.data.AuthenticationResult && e.data.AuthenticationResult.IdToken && (console.log("call federatedAuth"), t.params = {
                provider: "cognito",
                email: null
              }, a.federatedAuth(e.data.AuthenticationResult.IdToken, "", "", "cognito", r))
            }, function (e, t) {
              console.log("error", e), console.log("error", t)
            })
          }, fail: function (e) {
            console.log("fail", e)
          }
        })
      };
      var i;
      gapi.load("auth2", function () {
        i = gapi.auth2.init({
          client_id: n.googleClientId,
          cookiepolicy: "single_host_origin"
        }), s(document.getElementById("signInButton"))
      })
    }

    console.log(n), t.userDetails = {}, t.runMe = function () {
      console.dir(JSON.stringify(t.userDetails)), console.dir(t.userDetails)
    }, t.logout = function () {
      s.logout()
    }, i.$on("event:social-sign-in-success", function (e, o) {
      console.log("log in successful, these are the parameters"), console.dir(e), console.dir(JSON.stringify(o)), t.userDetails = o, t.params = {
        provider: o.provider,
        email: o.email
      }, "google" === o.provider ? (t.$apply(), console.log(o), a.federatedAuth(o.idToken, " ", " ", "google", c)) : a.login("facebook", c)
    }), i.$on("event:social-sign-out-success", function (e, o) {
      console.log("You have been signed out"), t.userDetails = {}, "$apply" != t.$root.$$phase && "$digest" != t.$root.$$phase && t.$apply()
    });
    var u = this;
    "Prod" == n.env ? u.env = "" : u.env = "(" + n.env + ")", t.flag = !1, t.flagFn = function () {
      t.flag = !t.flag
    }, AppleID.auth.init({
      clientId: "com.lgsvl.showit.stage.signinwithapple",
      scope: "name email",
      redirectURI: "https://portal.stage.showit.sbcsvl.com/",
      state: "123",
      usePopup: !0
    });
    var d = document.getElementById("appleid-signin");
    d.addEventListener("click", function () {
      AppleID.auth.signIn()
    }), document.addEventListener("AppleIDSignInOnSuccess", function (e) {
      console.log("AppleIDSignInOnSuccess data", e), t.params = {
        provider: null,
        email: null
      }, t.params.provider = "apple", angular.isUndefined(e.detail.user) ? a.federatedAuth(e.detail.authorization.id_token, " ", " ", "appleid", c) : angular.isUndefined(e.detail.user.name) ? a.federatedAuth(e.detail.authorization.id_token, " ", " ", "appleid", c) : a.federatedAuth(e.detail.authorization.id_token, e.detail.user.name.firstName, e.detail.user.name.lastName, "appleid", c)
    }), document.addEventListener("AppleIDSignInOnFailure", function (e) {
      console.log("error", e)
    }), l()
  }

  function t(e, t, o, a, n, r) {
    function s() {
      function n() {
        null == a.getThirdPartyToken() && o.go("website.login", {}, {reload: !0})
      }

      function r() {
        void 0 != a.getUserProfile() && null != a.getUserProfile() && a.getUserProfile().isTerms && (t.flag = !0)
      }

      function s(e) {
        switch (console.log(e.result), a.deleteThirdPartyToken(), e.result.withdrawType) {
          case"A":
            return o.go("website.unsubscribeDone", {}, {reload: !0});
          case"B":
            return o.go("website.unsubscribeDoneBtype", {}, {reload: !0});
          case"C":
            return o.go("website.unsubscribeDoneCtypeActive", {}, {reload: !0});
          case"D":
            return o.go("website.unsubscribeDoneCtypePay", {}, {reload: !0});
          case"E":
            return o.go("website.unsubscribeDoneEtype", {}, {reload: !0})
        }
      }

      i.basepath = e.basepath, n(), r(), i.deactivate = function () {
        a.suspenduser(s)
      }, i.deactivatehide = function () {
        console.log("click"), a.suspenduserhide(s)
      }, i.cancel = function () {
        a.deleteThirdPartyToken(), o.go("website.login", {}, {reload: !0})
      }
    }

    var i = this;
    i.env = n.env, console.log(r), void 0 === r.provider && o.go("website.login", {}, {reload: !0}), t.email = r.email, t.provider = r.provider, t.flag = !1, t.MESSAGE_EN = "Do you want to deactivate account ?", t.CONFIRM_EN = "Deactivate", t.CANCEL_EN = "Cancel", t.MESSAGE_KR = "회원탈퇴를 하시겠습니까?", t.CONFIRM_KR = "탈퇴", t.CANCEL_KR = "취소", s()
  }

  function o(e, t, o, a, n, r) {
    var s = this;
    s.env = n.env, "Prod" == n.env ? s.env = "" : s.env = "(" + n.env + ")", AppleID.auth.init({
      clientId: "com.lgsvl.showit.stage.signinwithapple",
      scope: "name email",
      redirectURI: "https://portal.stage.showit.sbcsvl.com/#/website/login",
      state: "123",
      usePopup: !0
    });
    var i = document.getElementById("appleid-signin");
    i.addEventListener("click", function () {
      AppleID.auth.signIn()
    }), document.addEventListener("AppleIDSignInOnSuccess", function (e) {
      console.log("data", e), window.promota_aos.error(errorCode)
    }), document.addEventListener("AppleIDSignInOnFailure", function (e) {
      console.log("error", e), window.promota_aos.idToken(code, token)
    })
  }

  angular.module("app.website").controller("UnsubscribeLoginController", e).controller("UnsubscribeController", t).controller("AppleidController", o).config(["socialProvider", function (e) {
    e.setGoogleKey("691448265885-gug89qjjqmb689hd3skgs4n0c3tkv8ib.apps.googleusercontent.com"), e.setFbKey({
      appId: "819770428188184",
      apiVersion: "v2.8"
    })
  }]), e.$inejct = ["RouteHelpers", "$scope", "$state", "UnsubscribeLoginLoader", "Config", "$window", "socialLoginService", "$rootScope"], e.$inject = ["RouteHelpers", "$scope", "$state", "UnsubscribeLoginLoader", "Config", "$window", "socialLoginService", "$rootScope"], t.$inejct = ["RouteHelpers", "$scope", "$state", "UnsubscribeLoader", "Config", "$stateParams"], t.$inject = ["RouteHelpers", "$scope", "$state", "UnsubscribeLoader", "Config", "$stateParams"], o.$inejct = ["RouteHelpers", "$scope", "$state", "UnsubscribeLoginLoader", "Config", "$window"], o.$inject = ["RouteHelpers", "$scope", "$state", "UnsubscribeLoginLoader", "Config", "$window"]
}(), function () {
  function e(e, t, o, a) {
    function n(t) {
      var o = "https://portal.dev.showit.sbcsvl.com/kakaoAuth";
      return e.post(o, t)
    }

    function r(e, t, o, a) {
      console.log("provider::", e), "facebook" == e ? s(t) : "google" == e || "cognito" == e && i(o, a, t)
    }

    function s(e) {
      function t(t) {
        if ("connected" === t.status) {
          var a = t.authResponse.accessToken;
          c(a, "", "", "facebook", e)
        } else o()
      }

      function o() {
        FB.login(function (t) {
          if (t.authResponse) {
            var o = t.authResponse.accessToken;
            c(o, "", "", "facebook", e)
          } else console.log("not auth, cancelled the login!", t)
        })
      }

      FB.getLoginStatus(function (e) {
        t(e)
      }, !0)
    }

    function i(e, t, o, n) {
      AWSCognito.config.region = "us-west-2";
      var r = {Username: e, Password: t},
          s = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(r),
          i = {UserPoolId: a.identityPoolId, ClientId: a.identityClientId},
          l = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(i),
          u = {Username: e, Pool: l},
          d = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(u);
      d.authenticateUser(s, {
        onSuccess: function (e) {
          var t = e.getIdToken().getJwtToken();
          c(t, "", "", "cognito", o)
        }, onFailure: function (e) {
          alert(e.message)
        }
      })
    }

    function c(t, o, n, r, s, i) {
      u(r, t);
      var c, d = a.dispatcherSvcUrl + "/user/api/simpleauth", g = "";
      c = "cognito" == r ? {clientId: a.clientId, logins: {}} : {
        clientId: a.clientId,
        logins: {},
        providerUserProfile: {firstName: o, lastName: n}
      }, "cognito" == r ? g = "cognito-idp.us-west-2.amazonaws.com/" + a.identityPoolId : "google" == r ? g = "accounts.google.com" : "facebook" == r ? g = "graph.facebook.com" : "appleid" == r && (g = "appleid.apple.com"), console.log("providerParam", g), c.logins[g] = t, i = i || function (e) {
        404 === e.status
      };
      var p = {
        "X-Device-Country": "US",
        "X-Device-Platform": "ADR",
        "X-App-Version": "2.7.15",
        "X-Device-Type": "M01",
        "X-Device-Language": "en-US",
        "Content-Type": "application/json"
      };
      e({method: "POST", url: d, headers: p, data: c}).then(function (e) {
        l(e.data.result), s(e.data.result)
      }, function (e) {
        if (e.data) try {
          alert(e.data.error.message)
        } catch (t) {
          alert(e.statusText), console.log("No error data")
        }
      })
    }

    function l(e) {
      o.userProfile = e
    }

    function u(e, t) {
      o.thirdPartyToken = {provider: e, token: t}
    }

    this.login = r, this.federatedAuth = c, this.kakaoAuth = n
  }

  function t(e, t, o, a) {
    function n(t, o) {
      var n = a.dispatcherSvcUrl + "/user/api/suspenduser", r = "", s = i().provider, c = i().token,
          l = {clientId: a.clientId, logins: {}};
      "cognito" == s ? r = "cognito-idp.us-west-2.amazonaws.com/" + a.identityPoolId : "google" == s ? r = "accounts.google.com" : "facebook" == s ? r = "graph.facebook.com" : "appleid" == s && (r = "appleid.apple.com"), l.logins[r] = c, o = o || function (e) {
        404 === e.status
      };
      var u = {
        "X-Device-Country": "US",
        "X-Device-Platform": "ADR",
        "X-App-Version": "2.7.15",
        "X-Device-Type": "M01",
        "X-Device-Language": "en-US",
        "Content-Type": "application/json"
      };
      e({method: "POST", url: n, headers: u, data: l}).then(function (e) {
        console.log("res", e), t(e.data)
      }, function (e) {
        console.log("error", e.headers)
      })
    }

    function r(t, o) {
      var n = a.dispatcherSvcUrl + "/user/api/deactivateuser", r = "", s = i().provider,
          c = i().token, l = {clientId: a.clientId, logins: {}};
      "cognito" == s ? r = "cognito-idp.us-west-2.amazonaws.com/" + a.identityPoolId : "google" == s ? r = "accounts.google.com" : "facebook" == s ? r = "graph.facebook.com" : "appleid" == s && (r = "appleid.apple.com"), l.logins[r] = c, o = o || function (e) {
        404 === e.status
      };
      var u = {
        "X-Device-Country": "US",
        "X-Device-Platform": "ADR",
        "X-App-Version": "2.7.15",
        "X-Device-Type": "M01",
        "X-Device-Language": "en-US",
        "Content-Type": "application/json"
      };
      e({method: "POST", url: n, headers: u, data: l}).then(function (e) {
        console.log("res", e), t(e.data)
      }, function (e) {
        console.log("error", e.headers)
      })
    }

    function s() {
      return o.userProfile
    }

    function i() {
      return o.thirdPartyToken
    }

    function c() {
      o.thirdPartyToken = null
    }

    function l(e) {
      window.ga = window.ga || function () {
        (ga.q = ga.q || []).push(arguments)
      }, ga.l = +new Date, ga("create", a.googleAnalyticsId, "auto"), ga("set", "userId", e), ga("send", {
        hitType: "event",
        eventCategory: "Unsubscribed Users",
        eventAction: "unsubscribedusers",
        eventLabel: "unsubscribedusers",
        eventValue: 1
      })
    }

    this.suspenduser = r, this.suspenduserhide = n, this.getThirdPartyToken = i, this.getUserProfile = s, this.deleteThirdPartyToken = c, this.sendGGAnalytics = l
  }

  angular.module("app.website").service("UnsubscribeLoginLoader", e).service("UnsubscribeLoader", t), e.$inject = ["$http", "config", "$localStorage", "Config"], t.$inject = ["$http", "config", "$localStorage", "Config"]
}(), function () {
  function e(e, o, a, n, r, s, i, c) {
    function l() {
      function a(e) {
        console.log("RESULT::", e), o.loading = !1, u.feedback = e.result.contents, u.pageInfo = e.result.pageInfo, console.log("vm.feedback", u.feedback), u.totalItems = u.pageInfo.totalResourceCount, u.totalNumberItems = u.pageInfo.totalResourceCount, u.currentPage = u.pageInfo.currentPage, u.itemsPerPage = 16, o.maxSize = 5, o.itemsPerPage = u.itemsPerPage
      }

      function r() {
        n.getAllFeedback(u.currentPage, a)
      }

      u.basepath = e.basepath, o.loading = !0, r(), u.pageChanged = function (e) {
        u.feedback = [], o.loading = !0, n.getAllFeedback(e, a), console.log("currentpage", e)
      }, u.openFeedbackDetail = function (e) {
        n.saveworkcomment(e.userId, e.feedbackType, c("date")(e.created, "yyyy/MM/dd HH:mm:ss")), s.open({
          template: "feedbackDetailDialog",
          controller: ["$scope", "$timeout", "UserInfoLoader", "WorkhistoryInfoLoader", function (o, a, n, r) {
            function i(e) {
              console.log("USER::", e.result.contents[0]), n.user = e.result.contents[0], n.popupProfileIndex = 0, n.popupProfile(n.user)
            }

            function c(e, o, a, n, r, s, i, c, u) {
              function d() {
                function u(e) {
                  n.getDevices(e, p)
                }

                function p(e) {
                  o.devices = e.result.devices, console.log("DEVICES:::", o.devices);
                  var a = 0;
                  0 == o.devices.length && (o.devicesList.user.castingCnt = "-"), o.devices.forEach(function (e) {
                    if (angular.isDefined(e.state.heartbeat)) {
                      var n = i("date")(t(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                          r = i("date")(t(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
                      n > r ? (o.lastRunning.push(n), moment().diff(n) <= 6e4 && o.lastRunningOne.push(n)) : (o.lastRunning.push(r), moment().diff(r) <= 6e4 && o.lastRunningOne.push(r))
                    }
                    angular.isDefined(e.state.physicalDevice) && (a += 1), 0 == a ? o.devicesList.user.castingCnt = "-" : o.devicesList.user.castingCnt = a
                  }), o.lastRunning.length > 0 && (o.desclastRunning = i("orderBy")(o.lastRunning, "", !0)), console.log("desclastRunning ::::", o.desclastRunning)
                }

                function f(e) {
                  s.getStoreProfile("userid", e, 1, m)
                }

                function m(e) {
                  console.log("STORE RESULT::", e.contents), o.devicesList.storeProfile = e.contents, o.devicesList.pageInfo = e.pageInfo, o.devicesList.totalItems = o.devicesList.pageInfo.totalResourceCount, o.devicesList.currentPage = o.devicesList.pageInfo.currentPage, o.devicesList.itemsPerPage = 16, e.contents.length > 0 && e.contents[0].productCategories.length > 0 && (console.log("productCategories::", e.contents[0].productCategories[0].id), o.productCategoriesId = e.contents[0].productCategories[0].id, c(function () {
                    var e = o.activeResources.findIndex(function (e) {
                      return e.id === o.productCategoriesId
                    });
                    o.selectedProductCategory = o.activeResources[e], console.log("$scope.selectedProductCategory", o.selectedProductCategory)
                  }, 1500))
                }

                function h(e) {
                  console.log("BOARD RESULT::", e.result.contents), o.boardsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? o.boards = e.result.contents : o.boards = o.boards.concat(e.result.contents), o.devicesList.boardsPageInfo = e.result.pageInfo
                }

                function v(e) {
                  n.listBoards(e, o.userBoardsPage, h)
                }

                function y(e) {
                  o.slideshowsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? o.slideshows = e.result.contents : o.slideshows = o.slideshows.concat(e.result.contents), o.devicesList.slideshowsPageInfo = e.result.pageInfo
                }

                function b(e) {
                  n.listSlideshows(e, o.userSlideshowsPage, y)
                }

                g.basepath = e.basepath, console.log("UserInfoLoader.user:::", n.user), n.user.created = t(n.user.created), n.user.lastModified = t(n.user.lastModified), o.devicesList.user = n.user, u(o.devicesList.user.id), v(o.devicesList.user.id), b(o.devicesList.user.id), f(o.devicesList.user.id), o.currentDate = moment().format("YYYY/MM/DD HH:mm:ss"), o.activeResources = [];
                for (var D = 1; D <= 2; D++) {
                  var w = "en";
                  n.getUserProductCategories(w, D).then(function (e) {
                    e.data.result.resources.forEach(function (e) {
                      o.activeResources.push(e)
                    })
                  }, function (e, t) {
                    401 === t && a.go("page.login"), n.messageErrorPopup("Error : Failure finding device")
                  });
                  var w = "ko";
                  n.getUserProductCategories(w, D).then(function (e) {
                    e.data.result.resources.forEach(function (e) {
                      o.activeResources.push(e)
                    })
                  }, function (e, t) {
                    401 === t && a.go("page.login"), n.messageErrorPopup("Error : Failure finding device")
                  })
                }
                console.log("$scope.activeResources", o.activeResources), o.checkRunning = function (e) {
                  if (angular.isDefined(e.state.heartbeat)) {
                    var o = i("date")(t(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                        a = i("date")(t(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
                    return o > a ? moment().diff(o) > 6e4 : moment().diff(a) > 6e4
                  }
                  if (angular.isDefined(e.state.displaySurface.deviceModel)) {
                    if (angular.isDefined(e.state.displaySurface.deviceModel.modifiedTimestamp)) {
                      var a = i("date")(t(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
                      return moment().diff(a) > 6e4
                    }
                    return !0
                  }
                  return !0
                }, o.goStoreDetail = function (e) {
                  r.open({
                    template: "storeProfileDetailDialog",
                    controller: ["$scope", "$timeout", function (t, o) {
                      t.storeProfile = e
                    }],
                    className: "ngdialog-theme-default custom-width"
                  })
                }, o.loadMoreBoard = function () {
                  16 * (o.userBoardsPage - 1) + o.devicesList.boardsPageInfo.currentResourceCount < o.devicesList.boardsPageInfo.totalResourceCount && (o.userBoardsPage = o.userBoardsPage + 1, n.listBoards(o.devicesList.user.id, o.userBoardsPage, h))
                }, o.loadMoreSlideshow = function () {
                  16 * (o.userSlideshowsPage - 1) + o.devicesList.slideshowsPageInfo.currentResourceCount < o.devicesList.slideshowsPageInfo.totalResourceCount && (o.userSlideshowsPage = o.userSlideshowsPage + 1, n.listSlideshows(o.devicesList.user.id, o.userSlideshowsPage, y))
                }, o.isEndBoard = function () {
                  return !(o.devicesList.boardsPageInfo && 16 * (o.userBoardsPage - 1) + o.devicesList.boardsPageInfo.currentResourceCount < o.devicesList.boardsPageInfo.totalResourceCount)
                }, o.isEndSlideshow = function () {
                  return !(o.devicesList.slideshowsPageInfo && 16 * (o.userSlideshowsPage - 1) + o.devicesList.slideshowsPageInfo.currentResourceCount < o.devicesList.slideshowsPageInfo.totalResourceCount)
                }, o.goDeviceDetail = function (e) {
                  console.log("before", e), n.selectedDevice = e, r.open({
                    template: "userDeviceDetailDialog",
                    controller: l,
                    className: "ngdialog-theme-default custom-width"
                  })
                }, o.goBoardDetail = function (e) {
                  r.open({
                    template: "boardDetailDialog",
                    controller: ["$scope", "$timeout", function (t, o) {
                      function a(e) {
                        console.log("@@@::", e.result.resources), t.resources = e.result.resources
                      }

                      console.log("BOARD:::", e), t.board = e, t.resources = null, t.getAuthorizedLocation = function (e) {
                        return n.getAuthorizedLocation(e)
                      }, t.getNonAuthorizedLocation = function (e) {
                        return n.getNonAuthorizedLocation(e)
                      }, t.openurl = function (e) {
                        window.open(t.getAuthorizedLocation(e), "_blank")
                      }, t.getUserBoardsDetails = function (e) {
                        return n.getBoardsDetails(e, a)
                      }, t.getUserBoardsDetails(t.board.id)
                    }],
                    className: "ngdialog-theme-default custom-width"
                  })
                }, o.goSlideshowDetail = function (e) {
                  r.open({
                    template: "slideshowDetailDialog",
                    controller: ["$scope", "$timeout", function (t, o) {
                      t.slideshow = e, t.getAuthorizedLocation = function (e) {
                        return n.getAuthorizedLocation(e)
                      }, t.getNonAuthorizedLocation = function (e) {
                        return n.getNonAuthorizedLocation(e)
                      }, t.openurl = function (e) {
                        window.open(t.getAuthorizedLocation(e), "_blank")
                      }
                    }],
                    className: "ngdialog-theme-default custom-width"
                  })
                }, o.getAuthorizedLocation = function (e) {
                  return n.getAuthorizedLocation(e)
                }, o.getNonAuthorizedLocation = function (e) {
                  return n.getNonAuthorizedLocation(e)
                }, o.getLastTimeDeviceConnected = function (e, o) {
                  var a = i("date")(t(e), "yyyy/MM/dd HH:mm:ss"),
                      n = i("date")(t(o), "yyyy/MM/dd HH:mm:ss");
                  return a > n ? a : n
                }, o.getDeviceType = function (e) {
                  return "showit-virtual-cast" == e ? "Full Screen Mode" : "Device"
                }, o.removeDevice = function (e) {
                  console.log("deviceid", e), o.deviceid = e;
                  var t = r.openConfirm({
                    template: '<p>Are you sure you want to remove device </p><p>id {{deviceid}}  ?</p><div class="row"><div class="col-md-3 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes</button></div><div class="col-md-3 text-center"><button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No</button></div><div class="col-md-3 text-center"></div></div>',
                    plain: !0,
                    className: "ngdialog-theme-default",
                    scope: o
                  });
                  t.then(function (t) {
                    console.log("resolved:" + t), n.removeDevice(e).then(function (e) {
                      console.log("items", e), d(), u(o.devicesList.user.id)
                    }, function (e, t) {
                      401 === t && a.go("page.login"), n.messageErrorPopup("Error : Failure finding device")
                    })
                  }, function (e) {
                    console.log("rejected:" + e)
                  })
                }
              }

              var g = this;
              o.userBoardsPage = 1, o.userSlideshowsPage = 1, o.devicesList = {}, o.oneAtATime = !0, o.status = {isFirstOpen: !0}, o.lastRunning = [], o.lastRunningOne = [], o.desclastRunning = [], d(), o.groupCheck = u.localStorage.getItem("ngStorage-groups").indexOf("showit-superuser"), o.getAuthorizedLocation = function (e) {
                return n.getAuthorizedLocation(e)
              }, o.getNonAuthorizedLocation = function (e) {
                return n.getNonAuthorizedLocation(e)
              }, o.openurl = function (e) {
                window.open(o.getAuthorizedLocation(e), "_blank")
              }
            }

            function l(e, o, a, n, r) {
              function s() {
                function a() {
                  var e = n.selectedDevice;
                  console.log("after", e), o.deviceDetailText = e;
                  var t = e.ownerId;
                  n.getUserProfile("userid", t, 1, s)
                }

                function s(e) {
                  o.device.user = e.result[0]
                }

                i.basepath = e.basepath, a(), o.getAuthorizedLocation = function (e) {
                  return n.getAuthorizedLocation(e)
                }, o.getNonAuthorizedLocation = function (e) {
                  return n.getNonAuthorizedLocation(e)
                }, o.openurl = function (e) {
                  window.open(o.getAuthorizedLocation(e), "_blank")
                }, o.getLastTimeDeviceConnected = function () {
                  if (angular.isDefined(o.deviceDetailText.state.heartbeat)) {
                    var e = r("date")(t(o.deviceDetailText.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                        a = r("date")(t(o.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
                    return e > a ? e : a
                  }
                  return r("date")(t(o.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss")
                }
              }

              var i = this;
              o.device = {}, s()
            }

            o.feedback = e, o.openWorkHistory = function () {
              r.work = "Feedback", r.target = o.feedback.userId, r.searchdata = {
                email: "",
                work: "Feedback",
                target: o.feedback.userId,
                orderby: "desc",
                page: 1
              }, r.btypePopupProfile()
            }, o.loadFeedbackScreenshot = function (e) {
              s.open({
                template: "screenshotDialog",
                controller: ["$scope", "$timeout", function (t, o) {
                  t.imageUrl = e
                }],
                className: "ngdialog-theme-default custom2-width",
                showClose: !0,
                closeByEscape: !0
              })
            }, o.goUserDetail = function (e) {
              console.log(e);
              var t = {id: e, page: 1};
              n.getNewUserProfile(t, i)
            }, c.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window"], l.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "$filter"]
          }],
          className: "ngdialog-theme-default custom-width"
        })
      }
    }

    var u = this;
    u.currentPage = 1, u.maxSize = 5, o.openWorkHistory = function () {
      i.work = "Feedback", i.searchdata = {
        email: "",
        work: "Feedback",
        target: "",
        orderby: "desc",
        page: 1
      }, i.atypePopupProfile()
    }, l()
  }

  function t(e) {
    if (e) return angular.isNumber(e) ? e : e.indexOf("T") > 0 ? (e.indexOf("Z") == -1 && e.indexOf("+") == -1 && (e += "Z"), e) : e
  }

  angular.module("app.feedback").controller("SupportFeedbackController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "FeedbackLoader", "ngTableParams", "ngDialog", "WorkhistoryInfoLoader", "$filter"], e.$inject = ["RouteHelpers", "$scope", "$state", "FeedbackLoader", "ngTableParams", "ngDialog", "WorkhistoryInfoLoader", "$filter"]
}(),function () {
  function e(e, t, o, a, n, r) {
    function s(o, r, s) {
      var i = a.dispatcherSvcUrl + "/signagecontent/api/feedback?page=" + o;
      s = s || function (e, o) {
        401 === o && t.go("page.login"), n.messageErrorPopup("Error : Failure finding user")
      }, e.get(i).success(r).error(s)
    }

    function i(o, r, s, i) {
      function c(e) {
        r.total(self.cache.total), o.resolve(filteredData)
      }

      var l = a.dispatcherSvcUrl + "/signagecontent/api/feedback";
      i = i || function (e, o) {
        401 === o && t.go("page.login"), n.messageErrorPopup("Error : Failure finding user")
      }, e.get(l).success(c).error(i)
    }

    function c(t, o, n) {
      var r = {
        workComment: {
          id: "FEED-TASK-002",
          target: t,
          detailLog: o + ": feedback_datetime=" + n
        }
      }, s = a.dispatcherSvcUrl + "/signagecontent/api/saveworkcomment";
      return e.post(s, r)
    }

    this.getAllFeedback = s, this.getData = i, this.saveworkcomment = c
  }

  angular.module("app.support").service("FeedbackLoader", e), e.$inject = ["$http", "$state", "config", "Config", "UserInfoLoader", "$window"]
}(),function () {
  function e(e, t, o, a, n, r, s, i, c, l, u, d) {
    function g(e) {
      console.log("Signin Result: ", e), r.setUserSession(e), a.getUserDetails(p)
    }

    function p(e) {
      console.log("userProfileReady", e);
      var t = angular.element("#load");
      t.addClass("preloader-hidden"), !e.result.groups || e.result.groups.length <= 0 || !f(e.result.groups) ? (d.messageErrorPopup("Error : You have no permission to use portal"), o.go("page.login")) : (s.groups = e.result.groups, o.go("app.supports.feedback", {}, {reload: !0}))
    }

    function f(e) {
      for (var t = n.groupPrefix + "-superuser", o = n.groupPrefix + "-portalreadonly", a = n.groupPrefix + "-appdatamanager", r = 0; r < e.length; r++) {
        var s = e[r];
        if (s.id == t || s.id == o || s.id == a) return !0
      }
      return !1
    }

    function m(e) {
      i.close(), i.open({
        template: "confirmDialog",
        controller: ["$scope", "$timeout", "AdminLoader", function (t, o, n) {
          function r(e) {
            d.messageErrorPopup("Error : Account was created successfully"), console.log("attributes", v.userAttributes), a.login("cognito", s, v.userAttributes.email, v.userAttributes.password), i.close()
          }

          function s() {
          }

          t.confirmCode = function () {
            a.confirmCode(t.verificationCode, e, r)
          }
        }],
        className: "ngdialog-theme-default custom-width",
        closeByDocument: !1
      })
    }

    function h() {
      var e = angular.element("#load");
      e.addClass("preloader-hidden")
    }

    document.addEventListener("contextmenu", function (e) {
      e.preventDefault()
    }, !1), delete s.userSession, setTimeout(function () {
      i.closeAll()
    }, 0);
    var v = this;
    v.env = n.env, console.log(n), t.userDetails = {}, t.runMe = function () {
      console.dir(JSON.stringify(t.userDetails)), console.dir(t.userDetails)
    }, t.logout = function () {
      l.logout()
    }, u.$on("event:social-sign-in-success", function (e, o) {
      console.log("log in successful, these are the parameters"), console.dir(e), console.dir(JSON.stringify(o)), t.userDetails = o, "google" === o.provider ? (t.$apply(), console.log(o), a.federatedAuth(o.idToken, " ", " ", "google", g)) : a.slogin("facebook", g)
    }), u.$on("event:social-sign-out-success", function (e, o) {
      console.log("You have been signed out"), t.userDetails = {}, "$apply" != t.$root.$$phase && "$digest" != t.$root.$$phase && t.$apply()
    });
    var v = this;
    "Prod" == n.env ? v.env = "" : v.env = "(" + n.env + ")", t.flag = !0, t.flagFn = function () {
      t.flag = !t.flag
    }, AppleID.auth.init({
      clientId: "com.lgsvl.showit.stage.signinwithapple",
      scope: "name email",
      redirectURI: "https://portal.stage.showit.sbcsvl.com/",
      state: "123",
      usePopup: !0
    });
    var y = document.getElementById("appleid-signin");
    y.addEventListener("click", function () {
      AppleID.auth.signIn()
    }), document.addEventListener("AppleIDSignInOnSuccess", function (e) {
      console.log("data", e), angular.isUndefined(e.detail.user) ? a.federatedAuth(e.detail.authorization.id_token, " ", " ", "appleid", g) : angular.isUndefined(e.detail.user.name) ? a.federatedAuth(e.detail.authorization.id_token, " ", " ", "appleid", g) : a.federatedAuth(e.detail.authorization.id_token, e.detail.user.name.firstName, e.detail.user.name.lastName, "appleid", g)
    }), document.addEventListener("AppleIDSignInOnFailure", function (e) {
      console.log("error", e)
    }), t.createAccount = function () {
      i.open({
        template: "createUserDialog",
        controller: ["$scope", "$timeout", "AdminLoader", function (e, t, o) {
          e.userAttributes = {}, e.createNewUser = function () {
            v.userAttributes = e.userAttributes, a.sendLoginAttributes(e.userAttributes, m)
          }
        }],
        className: "ngdialog-theme-default custom-width"
      })
    }, v.login = function (e) {
      console.log("PROVIDER::", e);
      var t = angular.element("#load");
      t.removeClass("preloader-hidden"), null == v.username || null == v.password ? (d.messageErrorPopup("Error : Please type in username and password"), t.addClass("preloader-hidden")) : a.slogin(e, g, v.username, v.password, h)
    }
  }

  angular.module("app.page").controller("LoginController", e).config(["socialProvider", function (e) {
    e.setGoogleKey("691448265885-gug89qjjqmb689hd3skgs4n0c3tkv8ib.apps.googleusercontent.com"), e.setFbKey({
      appId: "819770428188184",
      apiVersion: "v2.8"
    })
  }]), e.$inejct = ["RouteHelpers", "$scope", "$state", "LoginLoader", "Config", "UserSession", "$localStorage", "ngDialog", "$timeout", "socialLoginService", "$rootScope", "UserInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "LoginLoader", "Config", "UserSession", "$localStorage", "ngDialog", "$timeout", "socialLoginService", "$rootScope", "UserInfoLoader"]
}(),function () {
  function e(e, t, o, a, n) {
    function r(e, t, o, a) {
      "cognito" == e && c(o, a, t)
    }

    function s(e, t, o) {
      AWSCognito.config.region = "us-west-2";
      var n = {UserPoolId: a.identityPoolId, ClientId: a.identityClientId},
          r = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(n), s = [],
          i = {Name: "email", Value: e.email}, c = {Name: "given_name", Value: e.firstName},
          l = {Name: "family_name", Value: e.lastName},
          u = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(i),
          g = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(c),
          p = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(l);
      s.push(u), s.push(g), s.push(p), r.signUp(d(), e.password, s, null, function (e, o) {
        if (e) return void alert(e);
        var a = o.user;
        t(a)
      })
    }

    function i(e, t, o, a) {
      t.confirmRegistration(e, !0, function (e, t) {
        return e ? void alert(e) : void o(t)
      })
    }

    function c(e, t, o, n) {
      AWSCognito.config.region = "us-west-2";
      var r = {Username: e, Password: t},
          s = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(r),
          i = {UserPoolId: a.identityPoolId, ClientId: a.identityClientId},
          c = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(i),
          l = {Username: e, Pool: c},
          u = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(l);
      u.authenticateUser(s, {
        onSuccess: function (e) {
          console.log("result", e);
          var t = e.getIdToken().getJwtToken();
          f(t, "", "", "cognito", o)
        }, onFailure: function (e) {
          alert(e.message), n()
        }
      })
    }

    function l(t, o, n) {
      var r = a.dispatcherSvcUrl + "/user/api/authenticated";
      n = n || function (e) {
      }, e.get(r).success(o).error(n)
    }

    function u(t, o) {
      var r = a.dispatcherSvcUrl + "/user/api/userdetails";
      o = o || function (e, t) {
        401 === t && n.go("page.login"), alert("Failure loading template category")
      }, e.get(r).success(t).error(o)
    }

    function d() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = 16 * Math.random() | 0, o = "x" == e ? t : 3 & t | 8;
        return o.toString(16)
      })
    }

    function g(e, t, o, a, n) {
      console.log("provider::", e), "facebook" == e ? p(t) : "google" == e || "cognito" == e && c(o, a, t, n)
    }

    function p(e) {
      function t(t) {
        if ("connected" === t.status) {
          var a = t.authResponse.accessToken;
          f(a, "", "", "facebook", e)
        } else o()
      }

      function o() {
        FB.login(function (t) {
          if (t.authResponse) {
            var o = t.authResponse.accessToken;
            f(o, "", "", "facebook", e)
          } else console.log("not auth, cancelled the login!", t)
        })
      }

      FB.getLoginStatus(function (e) {
        t(e)
      }, !0)
    }

    function f(t, o, n, r, s, i) {
      m(r, t), console.log("provider", r);
      var c, l = a.dispatcherSvcUrl + "/user/api/federatedauth", u = "";
      c = "cognito" == r ? {clientId: a.clientId, logins: {}} : {
        clientId: a.clientId,
        logins: {},
        providerUserProfile: {firstName: o, lastName: n}
      }, "cognito" == r ? u = "cognito-idp.us-west-2.amazonaws.com/" + a.identityPoolId : "google" == r ? u = "accounts.google.com" : "facebook" == r ? u = "graph.facebook.com" : "appleid" == r && (u = "appleid.apple.com"), console.log("params", c), console.log("providerParam", u), c.logins[u] = t, i = i || function (e) {
        404 === e.status
      };
      var d = {
        "X-Device-Country": "US",
        "X-Device-Platform": "ADR",
        "X-App-Version": "2.7.15",
        "X-Device-Type": "M01",
        "X-Device-Language": "en-US",
        "Content-Type": "application/json"
      };
      e({method: "POST", url: l, headers: d, data: c}).then(function (e) {
        s(e.data.result)
      }, function (e) {
        if (e.data) try {
          alert(e.data.error.message)
        } catch (t) {
          alert(e.statusText), console.log("No error data")
        }
      })
    }

    function m(e, t) {
      o.thirdPartyToken = {provider: e, token: t}
    }

    this.login = r, this.sendLoginAttributes = s, this.confirmCode = i, this.isAuthenticated = l, this.getUserDetails = u, this.slogin = g, this.federatedAuth = f
  }

  function t(e, t, o, a) {
    function n(t, o) {
      var n = a.dispatcherSvcUrl + "/user/api/userdetails";
      o = o || function (e) {
      }, e.get(n).success(t).error(o)
    }

    this.getUserDetails = n
  }

  function o(e, t, o, a, n) {
    function r() {
      var e = a.userSession;
      return "null" === e && (this.clearUserSession(), e = null), e
    }

    function s(e) {
      e ? a.userSession = e : this.clearUserSession()
    }

    function i() {
      return a.userSession ? a.userSession.token : null
    }

    function c() {
      return a.userSession ? a.userSession.userId : null
    }

    function l() {
      a.userSession = ""
    }

    this.getUserSession = r, this.setUserSession = s, this.getUserToken = i, this.getUserId = c, this.clearUserSession = l
  }

  angular.module("app.page").service("LoginLoader", e).service("MainLoader", t).service("UserSession", o), e.$inject = ["$http", "config", "$localStorage", "Config", "$state"], t.$inject = ["$http", "config", "$localStorage", "Config"], o.$inject = ["$http", "config", "$state", "$localStorage", "Config"]
}(),angular.module("ngLocale", [], ["$provide", function (e) {
  var t = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
  e.value("$locale", {
    DATETIME_FORMATS: {
      AMPMS: ["오전", "오후"],
      DAY: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
      ERANAMES: ["기원전", "서기"],
      ERAS: ["기원전", "서기"],
      FIRSTDAYOFWEEK: 6,
      MONTH: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      SHORTDAY: ["일", "월", "화", "수", "목", "금", "토"],
      SHORTMONTH: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      WEEKENDRANGE: [5, 6],
      fullDate: "y년 M월 d일 EEEE",
      longDate: "y년 M월 d일",
      medium: "y. M. d. a h:mm:ss",
      mediumDate: "y. M. d.",
      mediumTime: "a h:mm:ss",
      "short": "yy. M. d. a h:mm",
      shortDate: "yy. M. d.",
      shortTime: "a h:mm"
    },
    NUMBER_FORMATS: {
      CURRENCY_SYM: "₩",
      DECIMAL_SEP: ".",
      GROUP_SEP: ",",
      PATTERNS: [{
        gSize: 3,
        lgSize: 3,
        maxFrac: 3,
        minFrac: 0,
        minInt: 1,
        negPre: "-",
        negSuf: "",
        posPre: "",
        posSuf: ""
      }, {
        gSize: 3,
        lgSize: 3,
        maxFrac: 2,
        minFrac: 2,
        minInt: 1,
        negPre: "¤-",
        negSuf: "",
        posPre: "¤",
        posSuf: ""
      }]
    },
    id: "ko-kr",
    pluralCat: function (e, o) {
      return t.OTHER
    }
  })
}]),function () {
  function e(e, t, o, a, n, r, s, i, c, l) {
    function u(e) {
      console.log("USER::", e.result.contents[0]), c.user = e.result.contents[0], c.popupProfileIndex = 0, c.popupProfile(c.user)
    }

    t.deactiveUser = i.deactiveUser, console.log(t.deactiveUser), t.user = {id: null}, t.goUserDetail = function (e) {
      console.log(e);
      var t = {id: e, page: 1};
      c.getNewUserProfile(t, u)
    }, t.getSpaceList = function (e) {
      var t = e.split(" ");
      return t
    }, l.getPmpolicy().then(function (e) {
      console.log("res", e.data.result), t.pmpolicy = e.data.result
    }, function (e, t) {
      401 === t && o.go("page.login"), console.log("e:::", e), c.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
    }), t.goReactive = function (e) {
      t.user.id = e;
      var a = {id: t.user.id, withdrawCode: "0", withdrawReason: ""};
      c.confirmPopup("탈퇴회원 재활성화", " 탈퇴한 회원을 다시 활성화 시키겠습니까?  &nbsp;&nbsp;  (활성화 시 회원의 모든 정보가 그대로 유지됩니다.)", "활성화").then(function (e) {
        1 === e && c.reactivedmt(a).then(function () {
          c.messagePopup("탈퇴회원의 재가입이 완료되었습니다."), i.getDeactivatedUserinfo(t.user.id).then(function (e) {
            console.log("res", e.data.result), i.deactiveUser = e.data.result, t.deactiveUser = i.deactiveUser
          }, function (e, t) {
            401 === t && o.go("page.login"), c.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
          })
        })
      })
    }, t.goArchiving = function (e) {
      console.log("data", e), c.confirmPopup("개인정보 보존처리", " 탈퇴한 회원의 개인정보를 보존처리 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  하시겠습니까?  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  (주의: 보존처리 시행 후 취소불가)", "보존처리").then(function (t) {
        1 === t && i.saveArcUserinfo(e).then(function () {
          c.messagePopup("보존처리 완료되었습니다.")
        })
      })
    }
  }

  function t(e, t, o, a, n, r, s, i, c, l) {
    function u(e) {
      var o = e.date, a = e.mode;
      if ("day" === a) for (var n = new Date(o).setHours(0, 0, 0, 0), r = 0; r < t.events.length; r++) {
        var s = new Date(t.events[r].date).setHours(0, 0, 0, 0);
        if (n === s) return t.events[r].status
      }
      return ""
    }

    t.selectedFilter = "deactivatedUsers", t.popup1 = {opened: !1}, t.popup2 = {opened: !1}, console.log(t.popup1.opened), t.today = function () {
      t.dt = new Date
    }, t.today(), t.clear = function () {
      t.dt = null
    }, t.inlineOptions = {
      customClass: u,
      minDate: new Date,
      showWeeks: !0
    }, t.dateOptions = {
      formatYear: "yy",
      maxDate: t.dt.todate,
      minDate: t.dt.fromdate,
      startingDay: 0,
      showWeeks: !1
    }, t.toggleMin = function () {
      t.inlineOptions.minDate = t.inlineOptions.minDate ? null : new Date, t.dateOptions.minDate = t.inlineOptions.minDate
    }, t.toggleMin(), t.open1 = function () {
      t.popup1.opened = !0
    }, t.open2 = function () {
      t.popup2.opened = !0
    }, t.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], t.format = t.formats[1], t.altInputFormats = ["M!/d!/yyyy"];
    var d = new Date;
    d.setDate(d.getDate() + 1);
    var g = new Date;
    g.setDate(d.getDate() + 1), t.events = [{date: d, status: "full"}, {
      date: g,
      status: "partially"
    }];
    var p = this;
    p.fdt = new Date, p.fdt.setDate(p.fdt.getDate() - 7), p.tdt = new Date, p.term = !0, t.arcBatch = function () {
      l.confirmPopupYn("Archive Batch", " Archive Batch를 실행 하시겠습니까?", "예", "아니오").then(function (e) {
        1 === e && c.arcBatch().then(function (e) {
          console.log("res", e), l.messagePopup("Archive Batch 실행완료"), t.apageChanged(t.archivelistCurrentPage)
        }, function (e, t) {
          401 === t && o.go("page.login"), l.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
        })
      })
    }, t.searchDeactivatedUsers = function (e, o) {
      console.log(e, o), console.log(p.term), t.pageChanged(1)
    }, t.openWorkHistory = function () {
      i.work = "개인정보 보관함", i.searchdata = {
        email: "",
        work: "개인정보 보관함",
        target: "",
        orderby: "desc",
        page: 1
      }, i.atypePopupProfile()
    }, t.loading = !0, c.deactivatedUsersCurrentPage = 1, t.deactivatedUsersCurrentPage = c.deactivatedUsersCurrentPage, c.archivelistCurrentPage = 1, t.archivelistCurrentPage = c.archivelistCurrentPage, t.search = {
      selectquery: "1",
      searchvalue: ""
    }, t.convertUTC = function (e) {
      return console.log("item", e), l.utcLocal(e)
    };
    var f = {page: t.deactivatedUsersCurrentPage};
    p.term || (f.startDate = a("date")(p.fdt, "yyyy-MM-dd"), f.endDate = a("date")(p.tdt, "yyyy-MM-dd")), c.getDeactivatedUserList(f).then(function (e) {
      console.log("getDeactivatedUserList res", e), t.deactivatedUserList = e.data.result.contents, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, console.log(t.totalNumberItems), t.deactivatedUsersCurrentPage = t.pageInfo.currentPage, c.deactivatedUsersCurrentPage = t.deactivatedUsersCurrentPage, t.maxSize = 20, t.itemsPerPage = 16, t.loading = !1
    }, function (e, a) {
      401 === a && o.go("page.login"), t.loading = !1, t.deactivatedUserList = [], console.log("e:::", e), l.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
    }), t.pageChanged = function (e) {
      t.loading = !0, t.deactivatedUserList = [], c.deactivatedUsersCurrentPage = e, t.deactivatedUsersCurrentPage = c.deactivatedUsersCurrentPage;
      var n = {page: t.deactivatedUsersCurrentPage};
      p.term || (n.startDate = a("date")(p.fdt, "yyyy-MM-dd"), n.endDate = a("date")(p.tdt, "yyyy-MM-dd")), c.getDeactivatedUserList(n).then(function (e) {
        console.log("res", e), t.deactivatedUserList = e.data.result.contents, t.deactivatedUserList.forEach(function (e) {
          e.cvdeactivateDtm = l.utcLocal(e.deactivateDtm)
        }), t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.deactivatedUsersCurrentPage = t.pageInfo.currentPage, c.deactivatedUsersCurrentPage = t.deactivatedUsersCurrentPage, t.maxSize = 20, t.itemsPerPage = 16, t.loading = !1
      }, function (e, a) {
        t.loading = !1, t.deactivatedUserList = [], 401 === a && o.go("page.login"), l.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.apageChanged = function (e) {
      void 0 === e && (e = 1), t.loading = !0, t.archiveList = [], c.archivelistCurrentPage = e, t.archivelistCurrentPage = c.archivelistCurrentPage;
      var n = null;
      "1" === t.search.selectquery ? n = {
        page: t.archivelistCurrentPage,
        orderby: "1",
        userId: "",
        email: ""
      } : "2" === t.search.selectquery ? n = {
        orderby: "2",
        page: t.archivelistCurrentPage,
        userId: "",
        email: ""
      } : "id" === t.search.selectquery ? n = {
        orderby: "1",
        userId: t.search.searchvalue,
        page: t.archivelistCurrentPage,
        email: ""
      } : "email" === t.search.selectquery && (n = {
        orderby: "1",
        email: t.search.searchvalue,
        page: t.archivelistCurrentPage,
        userId: ""
      }), p.term || (n.startDate = a("date")(p.fdt, "yyyy-MM-dd"), n.endDate = a("date")(p.tdt, "yyyy-MM-dd")), console.log(n), c.getArcUserinfoList(n).then(function (e) {
        console.log("res", e), t.archiveList = e.data.result.contents, t.archiveList.forEach(function (e) {
          e.expireDtm = l.utcLocal(e.expireDtm)
        }), t.apageInfo = e.data.result.pageInfo, t.atotalItems = t.apageInfo.totalResourceCount, t.atotalNumberItems = t.apageInfo.totalResourceCount, t.archivelistCurrentPage = t.apageInfo.currentPage, c.archivelistCurrentPage = t.archivelistCurrentPage, t.maxSize = 20, t.itemsPerPage = 16, t.loading = !1
      }, function (e, a) {
        t.loading = !1, t.archiveList = [], 401 === a && o.go("page.login"), l.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.changeFilter = function (e) {
      t.selectedFilter = e, t.deactivatedUsersCurrentPage = c.deactivatedUsersCurrentPage, t.archivelistCurrentPage = c.archivelistCurrentPage, "deactivatedUsers" === e ? t.pageChanged(t.deactivatedUsersCurrentPage) : t.apageChanged(t.archivelistCurrentPage)
    }, t.goDeativeUserDetail = function (e) {
      console.log("USER::", e), c.getDeactivatedUserinfo(e.id).then(function (e) {
        console.log("res", e.data.result), c.deactiveUser = e.data.result, c.popupDeactiveUser()
      }, function (e, t) {
        401 === t && o.go("page.login"), l.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.$on("ngDialog.closing", function () {
      t.pageChanged(t.deactivatedUsersCurrentPage)
    }), t.initalValue = function (e) {
      console.log("change ::", e), t.search.selectquery = e, "1" === e || "2" === e ? t.search.searchvalue = "" : (t.archivelistCurrentPage = 1, c.archivelistCurrentPage = 1)
    }, t.resultPage = function () {
      c.archivelistCurrentPage = 1, t.archivelistCurrentPage = c.archivelistCurrentPage, t.archiveList = [], t.loading = !0;
      var e = null;
      "1" === t.search.selectquery ? e = {
        page: t.archivelistCurrentPage,
        orderby: "1",
        userId: "",
        email: ""
      } : "2" === t.search.selectquery ? e = {
        orderby: "2",
        page: t.archivelistCurrentPage,
        userId: "",
        email: ""
      } : "id" === t.search.selectquery ? e = {
        orderby: "1",
        userId: t.search.searchvalue,
        page: t.archivelistCurrentPage,
        email: ""
      } : "email" === t.search.selectquery && (e = {
        orderby: "1",
        email: t.search.searchvalue,
        page: t.archivelistCurrentPage,
        userId: ""
      }), p.term || (e.startDate = a("date")(p.fdt, "yyyy-MM-dd"), e.endDate = a("date")(p.tdt, "yyyy-MM-dd")), console.log("objs", e), c.getArcUserinfoList(e).then(function (e) {
        console.log("res", e), t.archiveList = e.data.result.contents, t.archiveList.forEach(function (e) {
          e.expireDtm = l.utcLocal(e.expireDtm)
        }), t.apageInfo = e.data.result.pageInfo, t.atotalItems = t.apageInfo.totalResourceCount, t.atotalNumberItems = t.apageInfo.totalResourceCount, t.archivelistCurrentPage = t.apageInfo.currentPage, c.archivelistCurrentPage = t.archivelistCurrentPage, t.maxSize = 20, t.itemsPerPage = 16, t.loading = !1
      }, function (e, a) {
        t.loading = !1, t.archiveList = [], 401 === a && o.go("page.login"), l.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.goDeleteAllArchives = function () {
      l.confirmPopup("기간 만료된 모든 보존항목 영구삭제", " 오늘 날짜 기준 만료된 모든 보존항목을 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  영구 삭제 합니다. (삭제 후 복구불가)", "확인").then(function (e) {
        1 === e && c.removeExpiredArc().then(function () {
          l.messagePopup("기간 만료된 모든 보존항목 영구삭제완료"), t.apageChanged(t.archivelistCurrentPage)
        })
      })
    }, t.goDownloadFile = function (e, t, a) {
      c.goDownloadFile(e, t, a).then(function (e) {
        console.log("res", e);
        var t = document.createElement("a");
        document.body.appendChild(t);
        var o = new Blob([e.data], {type: "application/octet-stream"}),
            n = window.URL.createObjectURL(o);
        t.href = n, t.download = a + ".zip", t.click()
      }, function (e, t) {
        401 === t && o.go("page.login"), l.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    };
    var m = [{id: "1", typeName: "개인정보"}, {id: "2", typeName: "로그기록"}, {
      id: "3",
      typeName: "저작물"
    }, {id: "4", typeName: "유료결제 및 상품공급 기록"}, {id: "5", typeName: "소비자 문의 및 대응 기록"}];
    t.getTypeName = function (e) {
      return m.find(function (t) {
        return t.id == e
      }).typeName
    }
  }

  angular.module("app.support").controller("ArchivesListController", t).controller("DeactiveUserController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "BoardSearchLoader", "PromotaUtils", "ngDialog", "WorkhistoryInfoLoader", "ArchivesLoader", "UserInfoLoader", "PmpolicyLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "BoardSearchLoader", "PromotaUtils", "ngDialog", "WorkhistoryInfoLoader", "ArchivesLoader", "UserInfoLoader", "PmpolicyLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "$filter", "BoardSearchLoader", "PromotaUtils", "ngDialog", "WorkhistoryInfoLoader", "ArchivesLoader", "UserInfoLoader"], t.$inject = ["RouteHelpers", "$scope", "$state", "$filter", "BoardSearchLoader", "PromotaUtils", "ngDialog", "WorkhistoryInfoLoader", "ArchivesLoader", "UserInfoLoader"]
}(),function () {
  function e(e, t, o, a, n, r, s, i) {
    function c() {
      var t = "", o = n.dispatcherSvcUrl + "/user/api/removeExpiredArc";
      return e.post(o, t)
    }

    function l(t, o, a) {
      var r = {userId: t, createDate: o, arcFileNm: a},
          s = n.dispatcherSvcUrl + "/user/api/downloadUserArchive";
      return e.post(s, r, {
        dataType: "binary",
        processData: !1,
        accept: "application/zip",
        Encoding: "gzip",
        responseType: "arraybuffer"
      })
    }

    function u() {
      var t = {}, o = n.dispatcherSvcUrl + "/user/api/arcBatch";
      return e.post(o, t)
    }

    function d(t) {
      var o = {id: t}, a = n.dispatcherSvcUrl + "/user/api/getDeactivatedUserinfo";
      return e.post(a, o)
    }

    function g(t) {
      var o = n.dispatcherSvcUrl + "/user/api/getDeactivatedUserList";
      return e.post(o, t)
    }

    function p(t) {
      var o = n.dispatcherSvcUrl + "/user/api/getArcUserinfoList";
      return e.post(o, t)
    }

    function f(t) {
      var o = n.dispatcherSvcUrl + "/user/api/saveArcUserinfo";
      return e.post(o, t)
    }

    function m(t) {
      var o = n.dispatcherSvcUrl + "/user/api/updatePrivacyPolicy";
      return console.log(o), e.post(o, t)
    }

    function h() {
      s.openConfirm({
        template: i.basepath("support/deactive-user.html"),
        controller: "DeactiveUserController",
        className: "ngdialog-theme-default customw-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    this.getDeactivatedUserList = g, this.updatePmpolicy = m, this.deactivatedUsersCurrentPage = null, this.archivelistCurrentPage = null, this.deactiveUser = null, this.popupDeactiveUser = h, this.getDeactivatedUserinfo = d, this.getArcUserinfoList = p, this.saveArcUserinfo = f, this.goDownloadFile = l, this.removeExpiredArc = c, this.arcBatch = u
  }

  angular.module("app.contents").service("ArchivesLoader", e), e.$inject = ["$http", "config", "$state", "$localStorage", "Config", "UserInfoLoader", "ngDialog", "RouteHelpers"]
}(),function () {
  function e(e, t, o) {
    function a() {
      n.basepath = e.basepath, o.go("app.supports.allContents.board"), n.loadBoards = function () {
        o.go("app.supports.allContents.board")
      }, n.loadSlideshows = function () {
        o.go("app.supports.allContents.slideshow")
      }
    }

    var n = this;
    n.type = "board", a()
  }

  function t(e, t, o, n, r, s, i) {
    function c() {
      function o(e) {
        console.log("RESULT::", e), t.loading = !1, l.contents = e.result.contents, l.pageInfo = e.result.pageInfo, t.pageInfo = e.result.pageInfo, l.totalItems = l.pageInfo.totalResourceCount, t.totalItems = l.pageInfo.totalResourceCount, l.totalNumberItems = l.pageInfo.totalResourceCount, t.totalNumberItems = l.pageInfo.totalResourceCount, l.currentPage = l.pageInfo.currentPage, t.currentPage = l.currentPage, n.currentPage = l.currentPage, l.maxSize = l.pageInfo.pageSize, t.maxSize = l.pageInfo.pageSize, l.itemsPerPage = l.pageInfo.pageSize, t.itemsPerPage = l.itemsPerPage
      }

      function i() {
        console.log("currentPage::", l.currentPage), n.getBoardList(t.radioModel, l.currentPage, l.selectedFilter, o)
      }

      l.basepath = e.basepath, t.loading = !0, i(), t.pageChanged = function (e) {
        console.log("EEcurrentPage::", e), t.currentPage = e, l.currentPage = e, n.currentPage = l.currentPage, t.loading = !0, l.contents = [], i(l.filter)
      }, t.getAuthorizedLocation = function (e) {
        return r.getAuthorizedLocation(e)
      }, t.getNonAuthorizedLocation = function (e) {
        return r.getNonAuthorizedLocation(e)
      }, t.goBoardDetail = function (e) {
        n.saveworkcomment(e.ownerId, e.id, "board"), s.open({
          template: "boardDetailDialogs",
          controller: ["$scope", "$timeout", "PromotaUtils", "UserInfoLoader", "WorkhistoryInfoLoader", "$sce", function (t, o, n, r, s, i) {
            function c(e) {
              var t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??=?([^#&?]*).*/,
                  o = e.match(t);
              return console.log("match", o), !(!o || 11 !== o[7].length) && o[7]
            }

            function l(e) {
              console.log("USER::", e.result.contents[0]), r.user = e.result.contents[0], r.popupProfileIndex = 3, r.popupProfile(r.user)
            }

            function u(e, t, o, n, r, s, i, c, l) {
              function u() {
                function l(e) {
                  n.getDevices(e, p)
                }

                function p(e) {
                  t.devices = e.result.devices, console.log("DEVICES:::", t.devices);
                  var o = 0;
                  0 == t.devices.length && (t.devicesList.user.castingCnt = "-"), t.devices.forEach(function (e) {
                    if (angular.isDefined(e.state.heartbeat)) {
                      var n = i("date")(a(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                          r = i("date")(a(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
                      n > r ? (t.lastRunning.push(n), moment().diff(n) <= 6e4 && t.lastRunningOne.push(n)) : (t.lastRunning.push(r), moment().diff(r) <= 6e4 && t.lastRunningOne.push(r))
                    }
                    angular.isDefined(e.state.physicalDevice) && (o += 1), 0 == o ? t.devicesList.user.castingCnt = "-" : t.devicesList.user.castingCnt = o
                  }), t.lastRunning.length > 0 && (t.desclastRunning = i("orderBy")(t.lastRunning, "", !0)), console.log("desclastRunning ::::", t.desclastRunning)
                }

                function f(e) {
                  s.getStoreProfile("userid", e, 1, m)
                }

                function m(e) {
                  console.log("STORE RESULT::", e.contents), t.devicesList.storeProfile = e.contents, t.devicesList.pageInfo = e.pageInfo, t.devicesList.totalItems = t.devicesList.pageInfo.totalResourceCount, t.devicesList.currentPage = t.devicesList.pageInfo.currentPage, t.devicesList.itemsPerPage = 16, e.contents.length > 0 && e.contents[0].productCategories.length > 0 && (console.log("productCategories::", e.contents[0].productCategories[0].id), t.productCategoriesId = e.contents[0].productCategories[0].id, c(function () {
                    var e = t.activeResources.findIndex(function (e) {
                      return e.id === t.productCategoriesId
                    });
                    t.selectedProductCategory = t.activeResources[e], console.log("$scope.selectedProductCategory", t.selectedProductCategory)
                  }, 1500))
                }

                function h(e) {
                  console.log("BOARD RESULT::", e.result.contents), t.boardsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.boards = e.result.contents : t.boards = t.boards.concat(e.result.contents), t.devicesList.boardsPageInfo = e.result.pageInfo
                }

                function v(e) {
                  n.listBoards(e, t.userBoardsPage, h)
                }

                function y(e) {
                  console.log("slideshows:::", e.result.contents), t.slideshowsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.slideshows = e.result.contents : t.slideshows = t.slideshows.concat(e.result.contents), t.devicesList.slideshowsPageInfo = e.result.pageInfo
                }

                function b(e) {
                  n.listSlideshows(e, t.userSlideshowsPage, y)
                }

                g.basepath = e.basepath, console.log("UserInfoLoader.user:::", n.user), n.user.created = a(n.user.created), n.user.lastModified = a(n.user.lastModified), t.devicesList.user = n.user, l(t.devicesList.user.id), v(t.devicesList.user.id), b(t.devicesList.user.id), f(t.devicesList.user.id), t.currentDate = moment().format("YYYY/MM/DD HH:mm:ss"), t.activeResources = [];
                for (var D = 1; D <= 2; D++) {
                  var w = "en";
                  n.getUserProductCategories(w, D).then(function (e) {
                    e.data.result.resources.forEach(function (e) {
                      t.activeResources.push(e)
                    })
                  }, function (e, t) {
                    401 === t && o.go("page.login")
                  });
                  var w = "ko";
                  n.getUserProductCategories(w, D).then(function (e) {
                    e.data.result.resources.forEach(function (e) {
                      t.activeResources.push(e)
                    })
                  }, function (e, t) {
                    401 === t && o.go("page.login")
                  })
                }
                console.log("$scope.activeResources", t.activeResources), t.checkRunning = function (e) {
                  if (angular.isDefined(e.state.heartbeat)) {
                    var t = i("date")(a(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                        o = i("date")(a(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
                    return t > o ? moment().diff(t) > 6e4 : moment().diff(o) > 6e4
                  }
                  if (angular.isDefined(e.state.displaySurface.deviceModel)) {
                    if (angular.isDefined(e.state.displaySurface.deviceModel.modifiedTimestamp)) {
                      var o = i("date")(a(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
                      return moment().diff(o) > 6e4
                    }
                    return !0
                  }
                  return !0
                }, t.goStoreDetail = function (e) {
                  r.open({
                    template: "storeProfileDetailDialog",
                    controller: ["$scope", "$timeout", function (t, o) {
                      t.storeProfile = e
                    }],
                    className: "ngdialog-theme-default custom-width"
                  })
                }, t.loadMoreBoard = function () {
                  16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount && (t.userBoardsPage = t.userBoardsPage + 1, n.listBoards(t.devicesList.user.id, t.userBoardsPage, h))
                }, t.loadMoreSlideshow = function () {
                  16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount && (t.userSlideshowsPage = t.userSlideshowsPage + 1, n.listSlideshows(t.devicesList.user.id, t.userSlideshowsPage, y))
                }, t.isEndBoard = function () {
                  return !(t.devicesList.boardsPageInfo && 16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount)
                }, t.isEndSlideshow = function () {
                  return !(t.devicesList.slideshowsPageInfo && 16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount)
                }, t.goDeviceDetail = function (e) {
                  console.log("before", e), n.selectedDevice = e, r.open({
                    template: "userDeviceDetailDialog",
                    controller: d,
                    className: "ngdialog-theme-default custom-width"
                  })
                }, t.goBoardDetail = function (e) {
                  r.open({
                    template: "boardDetailDialog",
                    controller: ["$scope", "$timeout", function (t, o) {
                      t.board = e, t.getAuthorizedLocation = function (e) {
                        return n.getAuthorizedLocation(e)
                      }, t.getNonAuthorizedLocation = function (e) {
                        return n.getNonAuthorizedLocation(e)
                      }, t.openurl = function (e) {
                        window.open(t.getAuthorizedLocation(e), "_blank")
                      }
                    }],
                    className: "ngdialog-theme-default custom-width"
                  })
                }, t.goSlideshowDetail = function (e) {
                  r.open({
                    template: "slideshowDetailDialog",
                    controller: ["$scope", "$timeout", function (t, o) {
                      console.log("SLIDESHOW:::", e), t.slideshow = e, t.getAuthorizedLocation = function (e) {
                        return n.getAuthorizedLocation(e)
                      }, t.getNonAuthorizedLocation = function (e) {
                        return n.getNonAuthorizedLocation(e)
                      }, t.openurl = function (e) {
                        window.open(t.getAuthorizedLocation(e), "_blank")
                      }
                    }],
                    className: "ngdialog-theme-default custom-width"
                  })
                }, t.getAuthorizedLocation = function (e) {
                  return n.getAuthorizedLocation(e)
                }, t.getNonAuthorizedLocation = function (e) {
                  return n.getNonAuthorizedLocation(e)
                }, t.getLastTimeDeviceConnected = function (e, t) {
                  var o = i("date")(a(e), "yyyy/MM/dd HH:mm:ss"),
                      n = i("date")(a(t), "yyyy/MM/dd HH:mm:ss");
                  return o > n ? o : n
                }, t.getDeviceType = function (e) {
                  return "showit-virtual-cast" == e ? "Full Screen Mode" : "Device"
                }, t.removeDevice = function (e) {
                  console.log("deviceid", e), t.deviceid = e;
                  var a = r.openConfirm({
                    template: '<p>Are you sure you want to remove device </p><p>id {{deviceid}}  ?</p><div class="row"><div class="col-md-3 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes</button></div><div class="col-md-3 text-center"><button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No</button></div><div class="col-md-3 text-center"></div></div>',
                    plain: !0,
                    className: "ngdialog-theme-default",
                    scope: t
                  });
                  a.then(function (a) {
                    console.log("resolved:" + a), n.removeDevice(e).then(function (e) {
                      console.log("items", e), u(), l(t.devicesList.user.id)
                    }, function (e, t) {
                      401 === t && o.go("page.login")
                    })
                  }, function (e) {
                    console.log("rejected:" + e)
                  })
                }
              }

              var g = this;
              t.userBoardsPage = 1, t.userSlideshowsPage = 1, t.devicesList = {}, t.oneAtATime = !0, t.status = {isFirstOpen: !0}, t.lastRunning = [], t.lastRunningOne = [], t.desclastRunning = [], u(), t.groupCheck = l.localStorage.getItem("ngStorage-groups").indexOf("showit-superuser")
            }

            function d(e, t, o, n, r) {
              function s() {
                function o() {
                  var e = n.selectedDevice;
                  console.log("after", e), t.deviceDetailText = e;
                  var o = e.ownerId;
                  n.getUserProfile("userid", o, 1, s)
                }

                function s(e) {
                  t.device.user = e.result[0]
                }

                i.basepath = e.basepath, o(), t.getAuthorizedLocation = function (e) {
                  return n.getAuthorizedLocation(e)
                }, t.getNonAuthorizedLocation = function (e) {
                  return n.getNonAuthorizedLocation(e)
                }, t.openurl = function (e) {
                  window.open(t.getAuthorizedLocation(e), "_blank")
                }, t.getLastTimeDeviceConnected = function () {
                  if (angular.isDefined(t.deviceDetailText.state.heartbeat)) {
                    var e = r("date")(a(t.deviceDetailText.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                        o = r("date")(a(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
                    return e > o ? e : o
                  }
                  return r("date")(a(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss")
                }
              }

              var i = this;
              t.device = {}, s()
            }

            t.board = e, console.log("board", e), t.getVideoSource = function (e) {
              return i.trustAsResourceUrl("//www.youtube.com/embed/" + c(e))
            }, t.openWorkHistory = function () {
              s.work = "All Boards", s.target = t.board.ownerId, s.searchdata = {
                email: "",
                work: "All Boards",
                target: t.board.ownerId,
                orderby: "desc",
                page: 1
              }, s.btypePopupProfile()
            }, t.getAuthorizedLocation = function (e) {
              return n.getAuthorizedLocation(e)
            }, t.getNonAuthorizedLocation = function (e) {
              return n.getNonAuthorizedLocation(e)
            }, t.openurl = function (e) {
              window.open(t.getAuthorizedLocation(e), "_blank")
            }, t.goUserDetail = function (e) {
              console.log(e);
              var t = {id: e, page: 1};
              r.getNewUserProfile(t, l)
            }, u.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window"], d.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "$filter"]
          }],
          className: "ngdialog-theme-default custom-width"
        })
      }, l.setFilter = function (e) {
        l.currentPage = 1, t.currentPage = l.currentPage, console.log("currentPage", t.currentPage), n.currentPage = l.currentPage, l.selectedFilter = e, i()
      }
    }

    delete this;
    var l = this;
    l.currentPage = 1, c(), l.filter = "all", l.selectedFilter = "all", l.totalItems = 0, l.maxSize = 16, n.currentPage = 1, l.currentPage = 1, t.currentPage = 1, t.radioModel = "en", t.openWorkHistory = function () {
      i.work = "All Boards", i.searchdata = {
        email: "",
        work: "All Boards",
        target: "",
        orderby: "desc",
        page: 1
      }, i.atypePopupProfile()
    }
  }

  function o(e, t, o, n, r, s, i) {
    function c() {
      function o(e) {
        console.log("RESULT::", e), t.loading = !1, l.contents = e.result.contents, l.pageInfo = e.result.pageInfo, l.totalItems = l.pageInfo.totalResourceCount, l.totalNumberItems = l.pageInfo.totalResourceCount, l.pageInfo = e.result.pageInfo, t.pageInfo = e.result.pageInfo, t.totalItems = l.pageInfo.totalResourceCount, t.totalNumberItems = l.pageInfo.totalResourceCount, l.currentPage = l.pageInfo.currentPage, t.currentPage = l.currentPage, n.currentPage = l.currentPage, l.maxSize = l.pageInfo.pageSize, t.maxSize = l.pageInfo.pageSize, l.itemsPerPage = l.pageInfo.pageSize, t.itemsPerPage = l.itemsPerPage
      }

      function i(e) {
        n.getSlideshowList("en", l.currentPage, o)
      }

      l.basepath = e.basepath, t.loading = !0, i(), t.pageChanged = function (e) {
        console.log("currentPage", e), t.currentPage = e, l.currentPage = e, n.currentPage = l.currentPage, t.loading = !0, l.contents = [], i(e)
      }, t.getAuthorizedLocation = function (e) {
        return r.getAuthorizedLocation(e)
      }, t.getNonAuthorizedLocation = function (e) {
        return r.getNonAuthorizedLocation(e)
      }, t.goSlideshowDetail = function (e) {
        n.saveworkcomment(e.ownerId, e.id, "slideshow"), s.open({
          template: "slideshowDetailDialog",
          controller: ["$scope", "$timeout", "PromotaUtils", "UserInfoLoader", "WorkhistoryInfoLoader", "$sce", function (t, o, n, r, s, i) {
            function c(e) {
              var t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??=?([^#&?]*).*/,
                  o = e.match(t);
              return console.log("match", o), !(!o || 11 !== o[7].length) && o[7]
            }

            function l(e) {
              console.log("USER::", e.result.contents[0]), r.user = e.result.contents[0], r.popupProfileIndex = 3, r.popupProfile(r.user)
            }

            function u(e, t, o, n, r, s, i, c, l) {
              function u() {
                function l(e) {
                  n.getDevices(e, p)
                }

                function p(e) {
                  t.devices = e.result.devices, console.log("DEVICES:::", t.devices);
                  var o = 0;
                  0 == t.devices.length && (t.devicesList.user.castingCnt = "-"), t.devices.forEach(function (e) {
                    if (angular.isDefined(e.state.heartbeat)) {
                      var n = i("date")(a(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                          r = i("date")(a(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
                      n > r ? (t.lastRunning.push(n), moment().diff(n) <= 6e4 && t.lastRunningOne.push(n)) : (t.lastRunning.push(r), moment().diff(r) <= 6e4 && t.lastRunningOne.push(r))
                    }
                    angular.isDefined(e.state.physicalDevice) && (o += 1), 0 == o ? t.devicesList.user.castingCnt = "-" : t.devicesList.user.castingCnt = o
                  }), t.lastRunning.length > 0 && (t.desclastRunning = i("orderBy")(t.lastRunning, "", !0)), console.log("desclastRunning ::::", t.desclastRunning)
                }

                function f(e) {
                  s.getStoreProfile("userid", e, 1, m);
                }

                function m(e) {
                  t.devicesList.storeProfile = e.contents, t.devicesList.pageInfo = e.pageInfo, t.devicesList.totalItems = t.devicesList.pageInfo.totalResourceCount, t.devicesList.currentPage = t.devicesList.pageInfo.currentPage, t.devicesList.itemsPerPage = 16, e.contents.length > 0 && e.contents[0].productCategories.length > 0 && (console.log("productCategories::", e.contents[0].productCategories[0].id), t.productCategoriesId = e.contents[0].productCategories[0].id, c(function () {
                    var e = t.activeResources.findIndex(function (e) {
                      return e.id === t.productCategoriesId
                    });
                    t.selectedProductCategory = t.activeResources[e], console.log("$scope.selectedProductCategory", t.selectedProductCategory)
                  }, 1500))
                }

                function h(e) {
                  console.log("BOARD RESULT::", e.result.contents), t.boardsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.boards = e.result.contents : t.boards = t.boards.concat(e.result.contents), t.devicesList.boardsPageInfo = e.result.pageInfo
                }

                function v(e) {
                  n.listBoards(e, t.userBoardsPage, h)
                }

                function y(e) {
                  console.log("getUserSlideshowsDone::::", e.result.contents), t.slideshowsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.slideshows = e.result.contents : t.slideshows = t.slideshows.concat(e.result.contents), t.devicesList.slideshowsPageInfo = e.result.pageInfo
                }

                function b(e) {
                  n.listSlideshows(e, t.userSlideshowsPage, y)
                }

                g.basepath = e.basepath, console.log("UserInfoLoader.user:::", n.user), n.user.created = a(n.user.created), n.user.lastModified = a(n.user.lastModified), t.devicesList.user = n.user, l(t.devicesList.user.id), v(t.devicesList.user.id), b(t.devicesList.user.id), f(t.devicesList.user.id), t.currentDate = moment().format("YYYY/MM/DD HH:mm:ss"), t.activeResources = [];
                for (var D = 1; D <= 2; D++) {
                  var w = "en";
                  n.getUserProductCategories(w, D).then(function (e) {
                    e.data.result.resources.forEach(function (e) {
                      t.activeResources.push(e)
                    })
                  }, function (e, t) {
                    401 === t && o.go("page.login")
                  });
                  var w = "ko";
                  n.getUserProductCategories(w, D).then(function (e) {
                    e.data.result.resources.forEach(function (e) {
                      t.activeResources.push(e)
                    })
                  }, function (e, t) {
                    401 === t && o.go("page.login")
                  })
                }
                console.log("$scope.activeResources", t.activeResources), t.checkRunning = function (e) {
                  if (angular.isDefined(e.state.heartbeat)) {
                    var t = i("date")(a(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                        o = i("date")(a(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
                    return t > o ? moment().diff(t) > 6e4 : moment().diff(o) > 6e4
                  }
                  if (angular.isDefined(e.state.displaySurface.deviceModel)) {
                    if (angular.isDefined(e.state.displaySurface.deviceModel.modifiedTimestamp)) {
                      var o = i("date")(a(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
                      return moment().diff(o) > 6e4
                    }
                    return !0
                  }
                  return !0
                }, t.goStoreDetail = function (e) {
                  r.open({
                    template: "storeProfileDetailDialog",
                    controller: ["$scope", "$timeout", function (t, o) {
                      t.storeProfile = e
                    }],
                    className: "ngdialog-theme-default custom-width"
                  })
                }, t.loadMoreBoard = function () {
                  16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount && (t.userBoardsPage = t.userBoardsPage + 1, n.listBoards(t.devicesList.user.id, t.userBoardsPage, h))
                }, t.loadMoreSlideshow = function () {
                  16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount && (t.userSlideshowsPage = t.userSlideshowsPage + 1, n.listSlideshows(t.devicesList.user.id, t.userSlideshowsPage, y))
                }, t.isEndBoard = function () {
                  return !(t.devicesList.boardsPageInfo && 16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount)
                }, t.isEndSlideshow = function () {
                  return !(t.devicesList.slideshowsPageInfo && 16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount)
                }, t.goDeviceDetail = function (e) {
                  console.log("before", e), n.selectedDevice = e, r.open({
                    template: "userDeviceDetailDialog",
                    controller: d,
                    className: "ngdialog-theme-default custom-width"
                  })
                }, t.goBoardDetail = function (e) {
                  r.open({
                    template: "boardDetailDialog",
                    controller: ["$scope", "$timeout", function (t, o) {
                      t.board = e, t.getAuthorizedLocation = function (e) {
                        return n.getAuthorizedLocation(e)
                      }, t.getNonAuthorizedLocation = function (e) {
                        return n.getNonAuthorizedLocation(e)
                      }, t.openurl = function (e) {
                        window.open(t.getAuthorizedLocation(e), "_blank")
                      }
                    }],
                    className: "ngdialog-theme-default custom-width"
                  })
                }, t.goSlideshowDetail = function (e) {
                  r.open({
                    template: "slideshowDetailDialogEnd",
                    controller: ["$scope", "$timeout", function (t, o) {
                      t.slideshow = e, t.getAuthorizedLocation = function (e) {
                        return n.getAuthorizedLocation(e)
                      }, t.getNonAuthorizedLocation = function (e) {
                        return n.getNonAuthorizedLocation(e)
                      }, t.openurl = function (e) {
                        window.open(t.getAuthorizedLocation(e), "_blank")
                      }
                    }],
                    className: "ngdialog-theme-default custom-width"
                  })
                }, t.getAuthorizedLocation = function (e) {
                  return n.getAuthorizedLocation(e)
                }, t.getNonAuthorizedLocation = function (e) {
                  return n.getNonAuthorizedLocation(e)
                }, t.getLastTimeDeviceConnected = function (e, t) {
                  console.log("~~~~"), console.log("H Time::", e), console.log("H Time::", i("date")(a(e), "yyyy/MM/dd HH:mm:ss")), console.log("D Time::", t), console.log("D Time::", i("date")(a(t), "yyyy/MM/dd HH:mm:ss")), console.log("~~~~");
                  var o = i("date")(a(e), "yyyy/MM/dd HH:mm:ss"),
                      n = i("date")(a(t), "yyyy/MM/dd HH:mm:ss");
                  return o > n ? o : n
                }, t.getDeviceType = function (e) {
                  return "showit-virtual-cast" == e ? "Full Screen Mode" : "Device"
                }, t.removeDevice = function (e) {
                  console.log("deviceid", e), t.deviceid = e;
                  var a = r.openConfirm({
                    template: '<p>Are you sure you want to remove device </p><p>id {{deviceid}}  ?</p><div class="row"><div class="col-md-3 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes</button></div><div class="col-md-3 text-center"><button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No</button></div><div class="col-md-3 text-center"></div></div>',
                    plain: !0,
                    className: "ngdialog-theme-default",
                    scope: t
                  });
                  a.then(function (a) {
                    console.log("resolved:" + a), n.removeDevice(e).then(function (e) {
                      console.log("items", e), u(), l(t.devicesList.user.id)
                    }, function (e, t) {
                      401 === t && o.go("page.login")
                    })
                  }, function (e) {
                    console.log("rejected:" + e)
                  })
                }
              }

              var g = this;
              t.userBoardsPage = 1, t.userSlideshowsPage = 1, t.devicesList = {}, t.oneAtATime = !0, t.status = {isFirstOpen: !0}, t.lastRunning = [], t.lastRunningOne = [], t.desclastRunning = [], u(), t.groupCheck = l.localStorage.getItem("ngStorage-groups").indexOf("showit-superuser")
            }

            function d(e, t, o, n, r) {
              function s() {
                function o() {
                  var e = n.selectedDevice;
                  console.log("after", e), t.deviceDetailText = e;
                  var o = e.ownerId;
                  n.getUserProfile("userid", o, 1, s)
                }

                function s(e) {
                  t.device.user = e.result[0]
                }

                i.basepath = e.basepath, o(), t.getAuthorizedLocation = function (e) {
                  return n.getAuthorizedLocation(e)
                }, t.getNonAuthorizedLocation = function (e) {
                  return n.getNonAuthorizedLocation(e)
                }, t.openurl = function (e) {
                  window.open(t.getAuthorizedLocation(e), "_blank")
                }, t.getLastTimeDeviceConnected = function () {
                  if (angular.isDefined(t.deviceDetailText.state.heartbeat)) {
                    var e = r("date")(a(t.deviceDetailText.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                        o = r("date")(a(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
                    return e > o ? e : o
                  }
                  return r("date")(a(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss")
                }
              }

              var i = this;
              t.device = {}, s()
            }

            t.slideshow = e, t.getVideoSource = function (e) {
              return i.trustAsResourceUrl("//www.youtube.com/embed/" + c(e))
            }, t.openWorkHistory = function () {
              s.work = "All Boards", s.target = t.slideshow.ownerId, s.searchdata = {
                email: "",
                work: "All Boards",
                target: t.slideshow.ownerId,
                orderby: "desc",
                page: 1
              }, s.btypePopupProfile()
            }, t.getAuthorizedLocation = function (e) {
              return n.getAuthorizedLocation(e)
            }, t.getNonAuthorizedLocation = function (e) {
              return n.getNonAuthorizedLocation(e)
            }, t.openurl = function (e) {
              window.open(t.getAuthorizedLocation(e), "_blank")
            }, t.goUserDetail = function (e) {
              console.log(e);
              var t = {id: e, page: 1};
              r.getNewUserProfile(t, l)
            }, u.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window"], d.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "$filter"]
          }],
          className: "ngdialog-theme-default custom-width"
        })
      }
    }

    delete this;
    var l = this;
    l.totalItems = 0, n.currentPage = 1, l.maxSize = 16, l.currentPage = 1, c(), t.openWorkHistory = function () {
      i.work = "All Boards", i.searchdata = {
        email: "",
        work: "All Boards",
        target: "",
        orderby: "desc",
        page: 1
      }, i.atypePopupProfile()
    }
  }

  function a(e) {
    if (e) return angular.isNumber(e) ? e : e.indexOf("T") > 0 ? (e.indexOf("Z") == -1 && e.indexOf("+") == -1 && (e += "Z"), e) : e
  }

  angular.module("app.support").controller("BoardController", e).controller("BoardListController", t).controller("SlideshowListController", o), e.$inejct = ["RouteHelpers", "$scope", "$state"], e.$inject = ["RouteHelpers", "$scope", "$state"], t.$inejct = ["RouteHelpers", "$scope", "$state", "BoardSearchLoader", "PromotaUtils", "ngDialog", "WorkhistoryInfoLoader"], t.$inject = ["RouteHelpers", "$scope", "$state", "BoardSearchLoader", "PromotaUtils", "ngDialog", "WorkhistoryInfoLoader"], o.$inejct = ["RouteHelpers", "$scope", "$state", "BoardSearchLoader", "PromotaUtils", "ngDialog", "WorkhistoryInfoLoader"], o.$inject = ["RouteHelpers", "$scope", "$state", "BoardSearchLoader", "PromotaUtils", "ngDialog", "WorkhistoryInfoLoader"]
}(),function () {
  function e(e, t, o, a) {
    function n(o, n, r, s, i) {
      var c = "&page=" + n;
      "template" == r ? c += "&type=BoardDefinition" : "image" == r && (c += "&type=ImageResource");
      var l = a.dispatcherSvcUrl + "/signagecontent/api/listboards?" + c;
      i = i || function (e, o) {
        401 === o && t.go("page.login"), alert("Failure loading templates")
      }, e.get(l).success(s).error(i)
    }

    function r(o, n, r, s) {
      var i = "&page=" + n, c = a.dispatcherSvcUrl + "/signagecontent/api/listslideshows?" + i;
      s = s || function (e, o) {
        401 === o && t.go("page.login"), alert("Failure loading templates")
      }, e.get(c).success(r).error(s)
    }

    function s(t, o, n) {
      console.log("type", n);
      var r;
      "slideshow" === n ? r = "Slideshow 내용확인: slideshow_id=" + o : "board" === n && (r = "Board 내용확인: board_id=" + o);
      var s = {workComment: {id: "BRDV-TASK-002", target: t, detailLog: r}},
          i = a.dispatcherSvcUrl + "/signagecontent/api/saveworkcomment";
      return e.post(i, s)
    }

    this.getBoardList = n, this.getSlideshowList = r, this.saveworkcomment = s
  }

  angular.module("app.support").service("BoardSearchLoader", e), e.$inject = ["$http", "$state", "config", "Config"]
}(),function () {
  function e(e, t, o, a, n, r, s, i, c, l, u) {
    function d(e) {
      var o = e.date, a = e.mode;
      if ("day" === a) for (var n = new Date(o).setHours(0, 0, 0, 0), r = 0; r < t.events.length; r++) {
        var s = new Date(t.events[r].date).setHours(0, 0, 0, 0);
        if (n === s) return t.events[r].status
      }
      return ""
    }

    this.dt = new Date, this.dt.setDate(this.dt.getDate() - 1), t.oneAtATime = !0, t.status = {
      isCustomHeaderOpen: !1,
      isFirstOpen: !0,
      isFirstDisabled: !1,
      open: !0
    }, t.dt = new Date, t.dt.setDate(t.dt.getDate() - 1), t.today = function () {
      t.dt = new Date, t.dt.setDate(t.dt.getDate() - 1)
    }, t.today(), t.clear = function () {
      t.dt = null
    }, t.popup1 = {opened: !1}, t.open1 = function () {
      t.popup1.opened = !0
    }, t.dateOptions = {
      formatYear: "yy",
      maxDate: t.dt,
      startingDay: 0,
      showWeeks: !1
    }, t.inlineOptions = {
      customClass: d,
      minDate: new Date,
      showWeeks: !0
    }, t.changeDate = function (e) {
      console.log("item: ", e)
    }, t.goDownloadFile = function (e) {
      var t = "DailyUserStatistics_" + s("date")(e, "yyyyMMdd");
      a.downloadDailyUserStatistic(e).then(function (e) {
        console.log("res", e);
        var o = document.createElement("a");
        document.body.appendChild(o);
        var a = new Blob([e.data], {type: "application/octet-stream"}),
            n = window.URL.createObjectURL(a);
        o.href = n, o.download = t + ".xlsx", o.click()
      }, function (e, t) {
        401 === t && o.go("page.login"), l.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.goChange = function (e) {
      console.log(e), delete t.dailyUserStatistic, t.categoryEn5 = [], t.categoryKo5 = [], t.castType = [], u.getDailyUserStatistic(e).then(function (e) {
        if (console.log("getDailyUserStatistic res", e), e.data.result[0]) {
          t.dailyUserStatistic = e.data.result[0], t.categoryEn5 = [];
          for (var o = e.data.result[0].categoryEn5.split("{")[1].trim().split("}"), a = o[0].split(","), n = 0; n < a.length; n++) {
            var r = a[n].split("=");
            console.log("ee ", r), t.categoryEn5.push({
              name: r[0].replace('"', "").replace('"', ""),
              value: r[1]
            })
          }
          console.log("$scope.categoryEn5List", t.categoryEn5), t.categoryKo5 = [];
          for (var s = e.data.result[0].categoryKo5.split("{")[1].trim().split("}"), i = s[0].split(","), c = 0; c < i.length; c++) {
            var l = i[c].split("=");
            console.log("ee ", l), t.categoryKo5.push({
              name: l[0].replace('"', "").replace('"', ""),
              value: l[1]
            })
          }
          console.log("$scope.categoryEn5List", t.categoryEn5), t.castType = [];
          for (var u = e.data.result[0].castType.split("{")[1].trim().split("}"), d = u[0].split(","), g = 0; g < d.length; g++) {
            var p = d[g].split("=");
            console.log("ee ", p), t.castType.push({
              name: p[0].replace('"', "").replace('"', ""),
              value: p[1]
            })
          }
          console.log("$scope.castType", t.castType)
        }
      }, function (e, t) {
        401 === t && o.go("page.login"), l.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.goChange(t.dt), t.goUserInfo = function () {
      o.go("app.supports.usersearch", {}, {reload: !0})
    }, t.goFeedback = function () {
      o.go("app.supports.feedback", {}, {reload: !0})
    }, t.goCastingActiveUser = function () {
      o.go("app.supports.statistics", {}, {reload: !0})
    }, t.goDormantuser = function () {
      o.go("app.supports.dormantuser", {}, {reload: !0})
    }, t.goArchives = function () {
      o.go("app.supports.archives", {}, {reload: !0})
    }, t.getRound = function (e, t) {
      return console.log(Math.round(e / t * 10) / 10), Math.round(e / t * 10) / 10
    }
  }

  angular.module("app.support").controller("DashboardInfoController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout", "UserInfoLoader", "DashboardInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout", "UserInfoLoader", "DashboardInfoLoader"]
}(),function () {
  function e(e, t, o, a) {
    function n(t) {
      var n = o.dispatcherSvcUrl + "/user/api/getDailyUserStatistic?baseDt=" + a("date")(t, "yyyyMMdd");
      return e.get(n)
    }

    function r(t) {
      var n = o.dispatcherSvcUrl + "/user/api/getDailyLguUser?baseDt=" + a("date")(t, "yyyyMMdd");
      return e.get(n)
    }

    function s(t) {
      var n = o.dispatcherSvcUrl + "/user/api/getDailyDeviceUser?baseDt=" + a("date")(t, "yyyyMMdd");
      return e.get(n)
    }

    this.getDailyUserStatistic = n, this.getDailyLguUser = r, this.getDailyDeviceUser = s
  }

  angular.module("app.support").service("DashboardInfoLoader", e), e.$inject = ["$http", "UserInfoLoader", "Config", "$filter"]
}(),function () {
  function e(e, t, o, a, n, r, s, i, c, l, u) {
    t.openWorkHistory = function () {
      s.work = "휴면계정 정보", s.target = t.user.id, s.searchdata = {
        email: "",
        work: "휴면계정 정보",
        target: t.user.id,
        orderby: "desc",
        page: 1
      }, s.btypePopupProfile()
    }, t.flag3 = !1, t.flag2 = !1, t.flag1 = !1, t.user = l.user, t.today1 = u("date")(new Date, "yyyy/MM/dd HH:mm:ss", "+0900"), t.today = u("date")(new Date, "yyyy/MM/dd HH:mm:ss", "+0000"), t.conversionStatusList = [{
      id: "1",
      msg: "휴면전환 예고"
    }, {id: "2", msg: "이메일발송"}, {id: "3", msg: "휴면전환"}, {id: "4", msg: "보관만료"}, {
      id: "5",
      msg: "보관파기"
    }, {
      id: "6",
      msg: "휴면해제"
    }], "2" === t.user.dmtType || "1" === t.user.dmtType ? (t.flag1 = !1, t.flag2 = !0, t.flag3 = !0) : "3" === t.user.dmtType ? (t.flag1 = !0, t.flag2 = !1, t.flag3 = !0) : "4" === t.user.dmtType && (t.flag1 = !0, t.flag2 = !0, t.flag3 = !1), t.getNameConversionStatus = function (e) {
      return t.conversionStatusList.find(function (t) {
        return t.id === e
      }).msg
    }, t.historyList = [{deactivateDtm: t.today, status: "보존기간만료"}, {
      deactivateDtm: t.today,
      status: "보존기간만료"
    }, {deactivateDtm: t.today, status: "보존기간만료"}], t.getTimestamp = function (e) {
      return new Date(u("date")(c.utcLocal(e), "yyyy/MM/dd HH:mm:ss", "+0000")).getTime()
    }, t.getTimestamp1 = function (e) {
      return new Date(u("date")(c.utcLocal(e), "yyyy/MM/dd HH:mm:ss", "+0900")).getTime()
    }
  }

  function t(e, t, o, a, n, r, s, i, c, l, u) {
    function d(e) {
      console.log("USER::", e.result.contents[0]), c.user = e.result.contents[0], c.popupProfileIndex = 0, c.popupProfile(c.user)
    }

    t.loading = !0, l.dormantUsersCurrentPage = 1, t.today1 = u("date")(new Date, "yyyy/MM/dd HH:mm:ss", "+0900"), t.today = u("date")(new Date, "yyyy/MM/dd HH:mm:ss", "UTC"), console.log("today1", t.today1), console.log("today", t.today), t.dormantUsersCurrentPage = l.dormantUsersCurrentPage, t.search = {
      selectquery: "1",
      searchvalue: ""
    }, t.getTimeConverter = function (e) {
      return new Date(e).getTime()
    }, t.conversionStatusList = [{id: "1", msg: "휴면전환 예고"}, {id: "2", msg: "이메일발송"}, {
      id: "3",
      msg: "휴면전환"
    }, {id: "4", msg: "보관만료"}, {id: "5", msg: "보관파기"}, {
      id: "6",
      msg: "휴면해제"
    }], t.getNameConversionStatus = function (e) {
      return t.conversionStatusList.find(function (t) {
        return t.id === e
      }).msg
    }, t.pageChanged = function (e) {
      void 0 === e && (e = 1), console.log("page", e), t.loading = !0, t.dormantUserList = [], l.dormantUsersCurrentPage = e, t.dormantUsersCurrentPage = l.dormantUsersCurrentPage;
      var a = null;
      "1" === t.search.selectquery ? a = {
        page: t.dormantUsersCurrentPage,
        orderby: "1",
        userId: "",
        email: ""
      } : "id" === t.search.selectquery ? a = {
        orderby: "1",
        userId: t.search.searchvalue,
        page: t.dormantUsersCurrentPage,
        email: ""
      } : "email" === t.search.selectquery && (a = {
        orderby: "1",
        email: t.search.searchvalue,
        page: t.dormantUsersCurrentPage,
        userId: ""
      }), console.log(a), l.getDmtUserList(a).then(function (e) {
        console.log("res", e), t.dormantUserList = e.data.result.contents, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.dormantUsersCurrentPage = t.pageInfo.currentPage, l.dormantUsersCurrentPage = t.dormantUsersCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
      }, function (e, a) {
        t.loading = !1, t.dormantUserList = [], 401 === a && o.go("page.login"), c.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.pageChanged(t.dormantUsersCurrentPage), t.goDeativeUserDetail = function (e) {
      console.log("USER::", e), i.getDeactivatedUserinfo(e.id).then(function (e) {
        console.log("res", e.data.result), i.deactiveUser = e.data.result, i.popupDeactiveUser()
      }, function (e, t) {
        401 === t && o.go("page.login"), c.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.initalValue = function (e) {
      t.search.selectquery = e, "1" === e ? t.search.searchvalue = "" : (t.dormantUsersCurrentPage = 1, l.dormantUsersCurrentPage = 1)
    }, t.resultPage = function () {
      t.dormantUsersCurrentPage = l.dormantUsersCurrentPage, t.dormantUserList = [], t.loading = !0;
      var e = null;
      "1" === t.search.selectquery ? e = {
        page: t.dormantUsersCurrentPage,
        orderby: "1",
        userId: "",
        email: ""
      } : "id" === t.search.selectquery ? e = {
        orderby: "1",
        userId: t.search.searchvalue,
        page: t.dormantUsersCurrentPage,
        email: ""
      } : "email" === t.search.selectquery && (e = {
        orderby: "1",
        email: t.search.searchvalue,
        page: t.dormantUsersCurrentPage,
        userId: ""
      }), console.log("objs", e), l.getDmtUserList(e).then(function (e) {
        console.log("res", e), t.dormantUserList = e.data.result.contents, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.dormantUsersCurrentPage = t.pageInfo.currentPage, l.dormantUsersCurrentPage = t.dormantUsersCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
      }, function (e, a) {
        t.loading = !1, t.dormantUserList = [], 401 === a && o.go("page.login"), c.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.openWorkHistory = function () {
      s.work = "휴면계정 정보", s.searchdata = {
        email: "",
        work: "휴면계정 정보",
        target: "",
        orderby: "desc",
        page: 1
      }, s.atypePopupProfile()
    }, t.goUserDetail = function (e) {
      console.log(e);
      var t = {id: e, page: 1, isDmtUser: !0};
      c.getNewUserProfile(t, d)
    }, t.dormantBatch = function () {
      c.confirmPopupYn("휴면계정 Batch", " 휴면계정 Batch를 실행 하시겠습니까?", "예", "아니오").then(function (e) {
        1 === e && l.dormantBatch().then(function (e) {
          console.log("res", e), c.messagePopup("휴면계정 Batch 실행완료"), t.pageChanged(t.dormantUsersCurrentPage)
        }, function (e, t) {
          401 === t && o.go("page.login"), c.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
        })
      })
    }, t.goRestoreDormant = function (e) {
      c.confirmPopupYn("휴면계정 해제", " 휴면계정을 해제 하시겠습니까?", "예", "아니오").then(function (a) {
        1 === a && l.restoreDormant(e.id).then(function (e) {
          console.log("res", e), c.messagePopup("휴면계정 해제완료"), t.pageChanged(t.dormantUsersCurrentPage)
        }, function (e, t) {
          401 === t && o.go("page.login"), c.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
        })
      })
    }, t.goDestruction = function (e) {
      console.log("dormantuser", e), "1" === e.statusCode ? c.confirmPopupYn("휴면계정 즉시 파기", " 휴면계정을 즉시 파기하시겠습니까? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  (주의: 파기후 복구 불가) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 파기항목: 개인정보, 로그기록, 저작물, 상태이력, 소비자 문의 및 대응 기록", "예", "아니오").then(function (a) {
        1 === a && l.removeDormant(e.id, e.email).then(function (e) {
          console.log("res", e), c.messagePopup("휴면계정 파기완료"), t.pageChanged(t.dormantUsersCurrentPage)
        }, function (e, t) {
          401 === t && o.go("page.login"), c.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
        })
      }) : c.confirmPopupYn("휴면계정 해제 후 회원탈퇴 처리", " 현재 계정은 즉시파기가 불가능 하므로 휴면계정을 우선 해제 후 유료결제 이력이 있는 회원의 탈퇴 절차를 통하여 계정을 파기해야 합니다. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 휴면계정을 해제처리 하시겠습니까?", "예", "아니오").then(function (a) {
        1 === a && l.restoreDormantAdmin(e.id).then(function (e) {
          console.log("res", e), c.messagePopup2line("탈퇴회원의 재가입이 완료되었습니다.", "프로모타 회원정보에서 회원탈퇴를 진행해주시기 바랍니다."), t.pageChanged(t.dormantUsersCurrentPage)
        }, function (e, t) {
          401 === t && o.go("page.login"), c.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
        })
      })
    }, t.goDeactiveHistory = function (e) {
      l.saveCommentDormantHis(e.id).then(function (t) {
        console.log("res", t), l.user = e, l.popupDeactiveHistory()
      }, function (e, t) {
        401 === t && o.go("page.login"), c.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.getTimestamp = function (e) {
      return new Date(u("date")(c.utcLocal(e), "yyyy/MM/dd HH:mm:ss", "+0000")).getTime()
    }, t.getTimestamp1 = function (e) {
      return new Date(u("date")(c.utcLocal(e), "yyyy/MM/dd HH:mm:ss", "+0900")).getTime()
    }
  }

  angular.module("app.support").controller("DormantUserListController", t).controller("DeactiveHistoryController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "BoardSearchLoader", "PromotaUtils", "ngDialog", "WorkhistoryInfoLoader", "ArchivesLoader", "UserInfoLoader", "DormantUserLoader", "$filter"], e.$inject = ["RouteHelpers", "$scope", "$state", "BoardSearchLoader", "PromotaUtils", "ngDialog", "WorkhistoryInfoLoader", "ArchivesLoader", "UserInfoLoader", "DormantUserLoader", "$filter"], t.$inejct = ["RouteHelpers", "$scope", "$state", "BoardSearchLoader", "PromotaUtils", "ngDialog", "WorkhistoryInfoLoader", "ArchivesLoader", "UserInfoLoader", "DormantUserLoader", "$filter"], t.$inject = ["RouteHelpers", "$scope", "$state", "BoardSearchLoader", "PromotaUtils", "ngDialog", "WorkhistoryInfoLoader", "ArchivesLoader", "UserInfoLoader", "DormantUserLoader", "$filter"]
}(),function () {
  function e(e, t, o, a, n, r, s, i) {
    function c() {
      var t = {}, o = n.dispatcherSvcUrl + "/user/api/dormantBatch";
      return e.post(o, t)
    }

    function l(t) {
      var o = {userId: t}, a = n.dispatcherSvcUrl + "/user/api/restoreDormantAdmin";
      return e.post(a, o)
    }

    function u(t) {
      var o = {userId: t}, a = n.dispatcherSvcUrl + "/user/api/saveCommentDormantHis";
      return e.post(a, o)
    }

    function d(t, o) {
      var a = {userId: t, email: o}, r = n.dispatcherSvcUrl + "/user/api/removeDormant";
      return e.post(r, a)
    }

    function g(t) {
      var o = {userId: t}, a = n.dispatcherSvcUrl + "/user/api/restoreDormantAdmin";
      return e.post(a, o)
    }

    function p(t) {
      var o = {id: t}, a = n.dispatcherSvcUrl + "/user/api/getDeactivatedUserinfo";
      return e.post(a, o)
    }

    function f(t) {
      var o = n.dispatcherSvcUrl + "/user/api/getDmtUserList";
      return e.post(o, t)
    }

    function m(t) {
      var o = n.dispatcherSvcUrl + "/user/api/updatePrivacyPolicy";
      return console.log(o), e.post(o, t)
    }

    function h() {
      s.openConfirm({
        template: i.basepath("support/deactive-user.html"),
        controller: "DeactiveUserController",
        className: "ngdialog-theme-default customw-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function v() {
      s.open({
        template: i.basepath("support/deactivehistory-info.html"),
        controller: "DeactiveHistoryController",
        className: "ngdialog-theme-default custom-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    this.getDmtUserList = f, this.dormantUsersCurrentPage = null, this.updatePmpolicy = m, this.archivelistCurrentPage = null, this.deactiveUser = null, this.popupDeactiveUser = h, this.getDeactivatedUserinfo = p, this.popupDeactiveHistory = v, this.user = null, this.removeDormant = d, this.restoreDormantAdmin = g, this.saveCommentDormantHis = u, this.restoreDormant = l, this.dormantBatch = c
  }

  angular.module("app.contents").service("DormantUserLoader", e), e.$inject = ["$http", "config", "$state", "$localStorage", "Config", "UserInfoLoader", "ngDialog", "RouteHelpers"]
}(),function () {
  function e(e, t, o, a, n, r, s, i, c, l) {
    t.user = a.user
  }

  function t(e, t, o, a, n, r, s, i, c, l) {
    function u(e) {
      console.log("RESULT::", e), t.loading = !1, t.users = [], t.users = e.result.contents, console.log("USERS::", e.result.contents), t.pageInfo = e.result.pageInfo, console.log(t.pageInfo), t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.currentPage = t.pageInfo.currentPage, a.currentPage = t.currentPage, t.maxSize = 5, t.itemsPerPage = 16
    }

    var d = this;
    t.work = a.work, t.searchdata = a.searchdata, a.getWorkcommentlist(t.searchdata, u), t.pageChanged = function (e) {
      console.log("currentPage:::", e), t.users = [], t.loading = !0, a.currentPage = e, d.currentPage = a.currentPage, t.users = [], t.loading = !0, t.searchdata.orderby, d.orderby === !0 ? t.searchdata.orderby = "desc" : t.searchdata.orderby = "asc", t.searchdata.page = e, console.log(t.searchdata), a.getWorkcommentlist(t.searchdata, u)
    }, this.resultPage = function () {
      this.currentPage = a.currentPage, t.users = [], t.loading = !0, t.searchdata.orderby, this.orderby === !0 ? t.searchdata.orderby = "desc" : t.searchdata.orderby = "asc", t.searchdata.page = currentPage, console.log(t.searchdata), a.getWorkcommentlist(t.searchdata, u)
    }, t.goUserDetail = function (e) {
      console.log("USER::", e), a.user = e, a.popupProfile(e)
    }
  }

  function o(e, t, o, a, n, r, s, i, c, l) {
    function u(e) {
      console.log("RESULT::", e), t.loading = !1, t.users = [], t.users = e.result.contents, console.log("USERS::", e.result.contents), t.pageInfo = e.result.pageInfo, console.log(t.pageInfo), t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.currentPage = t.pageInfo.currentPage, a.currentPage = t.currentPage, t.maxSize = 5, t.itemsPerPage = 16
    }

    var d = this;
    t.work = a.work, t.target = a.target, t.searchdata = a.searchdata, console.log(t.searchdata), a.getWorkcommentlist(t.searchdata, u), t.pageChanged = function (e) {
      console.log("currentPage:::", e), t.users = [], t.loading = !0, a.currentPage = e, d.currentPage = a.currentPage, t.users = [], t.loading = !0, t.searchdata.orderby, this.orderby === !0 ? t.searchdata.orderby = "desc" : t.searchdata.orderby = "asc", t.searchdata.page = e, console.log(t.searchdata), a.getWorkcommentlist(t.searchdata, u)
    }, this.resultPage = function () {
      this.currentPage = a.currentPage, t.users = [], t.loading = !0, t.searchdata.orderby, this.orderby === !0 ? t.searchdata.orderby = "desc" : t.searchdata.orderby = "asc", console.log(t.searchdata), a.getWorkcommentlist(t.searchdata, u)
    }, t.goUserDetail = function (e) {
      console.log("USER::", e), a.user = e, a.popupProfile(e)
    }
  }

  function a(e, t, o, a, n, r, s, i, c, l, u, d) {
    function g() {
      function c() {
        l.getProducts(m)
      }

      function m(e) {
        t.products = e.result
      }

      function h(e) {
        a.getDevices(e, v)
      }

      function v(e) {
        t.devices = e.result.devices;
        var o = 0;
        0 == t.devices.length && (t.devicesList.user.castingCnt = "-"), t.devices.forEach(function (e) {
          if (angular.isDefined(e.state.heartbeat)) {
            var a = s("date")(p(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                n = s("date")(p(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
            a > n ? (t.lastRunning.push(a), moment().diff(a) <= 6e4 && t.lastRunningOne.push(a)) : (t.lastRunning.push(n), moment().diff(n) <= 6e4 && t.lastRunningOne.push(n))
          }
          angular.isDefined(e.state.physicalDevice) && (o += 1), 0 == o ? t.devicesList.user.castingCnt = "-" : t.devicesList.user.castingCnt = o
        }), t.lastRunning.length > 0 && (t.desclastRunning = s("orderBy")(t.lastRunning, "", !0))
      }

      function y(e) {
        t.loadingStore = !0, r.getStoreProfile("userid", e, 1, b)
      }

      function b(e) {
        t.loadingStore = !1, t.devicesList.storeProfile = e.contents, t.devicesList.pageInfo = e.pageInfo, t.devicesList.totalItems = t.devicesList.pageInfo.totalResourceCount, t.devicesList.currentPage = t.devicesList.pageInfo.currentPage, t.devicesList.itemsPerPage = 16, e.contents.length > 0 && e.contents[0].productCategories.length > 0 && (t.productCategoriesId = e.contents[0].productCategories[0].id, i(function () {
          var e = t.activeResources.findIndex(function (e) {
            return e.id === t.productCategoriesId
          });
          t.selectedProductCategory = t.activeResources[e]
        }, 1500))
      }

      function D(e) {
        t.boardsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.boards = e.result.contents : t.boards = t.boards.concat(e.result.contents), t.devicesList.boardsPageInfo = e.result.pageInfo
      }

      function w(e) {
        a.listBoards(e, t.userBoardsPage, D)
      }

      function P(e) {
        t.slideshowsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.slideshows = e.result.contents : t.slideshows = t.slideshows.concat(e.result.contents), t.devicesList.slideshowsPageInfo = e.result.pageInfo
      }

      function C(e) {
        a.listSlideshows(e, t.userSlideshowsPage, P)
      }

      function S(e) {
        console.log("RESULT::", e.result.resources)
      }

      f.basepath = e.basepath, a.user.created = p(a.user.created), a.user.lastModified = p(a.user.lastModified), t.devicesList.user = a.user, console.log("UserInfoLoader.user", a.user), a.getMembershipdetail(a.user.id).then(function (e) {
        console.log("getMembershipdetail", e), t.membershipdetail = e.data.result, console.log("membershipdetail", t.membershipdetail)
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      }), u.saveworkcomment(a.user.id).then(function (e) {
        console.log(e)
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      }), c(), h(t.devicesList.user.id), w(t.devicesList.user.id), C(t.devicesList.user.id), y(t.devicesList.user.id), t.currentDate = moment().format("YYYY/MM/DD HH:mm:ss"), t.currentDate1 = moment().add(1, "minutes").format("YYYY/MM/DD HH:mm:ss"), t.activeResources = [];
      for (var A = 1; A <= 2; A++) {
        var L = "en";
        a.getUserProductCategories(L, A).then(function (e) {
          e.data.result.resources.forEach(function (e) {
            t.activeResources.push(e)
          })
        }, function (e, t) {
          401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
        });
        var L = "ko";
        a.getUserProductCategories(L, A).then(function (e) {
          e.data.result.resources.forEach(function (e) {
            t.activeResources.push(e)
          })
        }, function (e, t) {
          401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
        })
      }
      t.checkRunning = function (e) {
        if (angular.isDefined(e.state.heartbeat)) {
          var t = s("date")(p(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
              o = s("date")(p(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
          return t > o ? moment().diff(t) > 6e4 : moment().diff(o) > 6e4
        }
        if (angular.isDefined(e.state.displaySurface.deviceModel)) {
          if (angular.isDefined(e.state.displaySurface.deviceModel.modifiedTimestamp)) {
            var o = s("date")(p(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
            return moment().diff(o) > 6e4
          }
          return !0
        }
        return !0
      }, t.goStoreDetail = function (e) {
        a.store = e, r.store = e, a.popupProfileStore(e)
      }, t.goTraking = function (e) {
        a.user = e, a.popupProfileTracking(e)
      }, t.goServiceHistory = function (e) {
        a.user = e, a.popupProfileServiceHistory(e)
      }, t.goCastingHistory = function (e, t) {
        a.deviceName = null == t.state.physicalDevice.deviceModel.data.metadata.name ? "-" : t.state.physicalDevice.deviceModel.data.metadata.name, a.user = e, a.selectedDevice = t, a.popupProfileCastingHistory(e)
      }, t.goInviteDetail = function (e) {
        a.user = e, a.popupProfileInviteDetail(e)
      }, t.goCouponHistory = function (e) {
        a.user = e, a.popupProfileCouponHistory(e)
      }, t.loadMoreBoard = function () {
        16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount && (t.userBoardsPage = t.userBoardsPage + 1, a.listBoards(t.devicesList.user.id, t.userBoardsPage, D))
      }, t.loadMoreSlideshow = function () {
        16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount && (t.userSlideshowsPage = t.userSlideshowsPage + 1, a.listSlideshows(t.devicesList.user.id, t.userSlideshowsPage, P))
      }, t.isEndBoard = function () {
        return !(t.devicesList.boardsPageInfo && 16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount)
      }, t.isEndSlideshow = function () {
        return !(t.devicesList.slideshowsPageInfo && 16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount)
      }, t.goDeviceDetail = function (e) {
        a.selectedDevice = e, a.popupProfileDevice(e)
      }, t.goBoardDetail = function (e) {
        a.selectedBoard = e, a.popupProfileBoardDetail(e)
      }, t.goOriginalTemplates = function (e) {
        console.log("board::", e), d.getTemplateList("tid", "en", "1", "Published", e.boardDefinition.id, S)
      }, t.goSlideshowDetail = function (e) {
        a.selectedSlideshow = e, a.popupProfileSlideshowDetail(e)
      }, t.getAuthorizedLocation = function (e) {
        return a.getAuthorizedLocation(e)
      }, t.getNonAuthorizedLocation = function (e) {
        return a.getNonAuthorizedLocation(e)
      }, t.getLastTimeDeviceConnected = function (e, t) {
        var o = s("date")(p(e), "yyyy/MM/dd HH:mm:ss"), a = s("date")(p(t), "yyyy/MM/dd HH:mm:ss");
        return o > a ? o : a
      }, t.getDeviceType = function (e) {
        return "showit-virtual-cast" == e ? "Full Screen Mode" : "Device"
      }, t.removeDevice = function (e) {
        t.deviceid = e;
        var r = n.openConfirm({
          template: '<p>Are you sure you want to remove device </p><p>id {{deviceid}}  ?</p><div class="row"><div class="col-md-3 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes</button></div><div class="col-md-3 text-center"><button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No</button></div><div class="col-md-3 text-center"></div></div>',
          plain: !0,
          className: "ngdialog-theme-default",
          scope: t
        });
        r.then(function (n) {
          a.removeDevice(e).then(function (e) {
            g(), h(t.devicesList.user.id)
          }, function (e, t) {
            401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
          })
        }, function (e) {
        })
      }
    }

    function p(e) {
      if (e) return angular.isNumber(e) ? e : e.indexOf("T") > 0 ? (e.indexOf("Z") == -1 && e.indexOf("+") == -1 && (e += "Z"), e) : e
    }

    document.addEventListener("contextmenu", function (e) {
      e.preventDefault()
    }, !1), t.openWorkHistory = function () {
      u.work = "User's Infomation", u.target = t.devicesList.user.id, u.searchdata = {
        email: "",
        work: "회원정보",
        target: t.devicesList.user.id,
        orderby: "desc",
        page: 1
      }, u.btypePopupProfile()
    }, t.indextab = a.popupProfileIndex;
    var f = this;
    t.userBoardsPage = 1, t.userSlideshowsPage = 1, t.devicesList = {}, t.oneAtATime = !0, t.status = {isFirstOpen: !0}, t.lastRunning = [], t.lastRunningOne = [], t.desclastRunning = [], g(), t.groupCheck = c.localStorage.getItem("ngStorage-groups").indexOf("showit-superuser"), t.getProductById = function (e, o) {
      var a = "";
      return void 0 !== o && void 0 !== e && "google" === o ? angular.forEach(t.products, function (t) {
        t.goolgeProductId.toUpperCase() === e.toUpperCase() && (a = t.productName)
      }) : void 0 !== o && void 0 !== e && "apple" === o ? angular.forEach(t.products, function (t) {
        t.appleProductId.toUpperCase() === e.toUpperCase() && (a = t.productName)
      }) : void 0 !== o && void 0 !== e && "" !== o && angular.forEach(t.products, function (t) {
        t.id.toUpperCase() === e.toUpperCase() && (a = t.productName)
      }), a
    }, t.getCancelReason = function (e, t) {
      if (void 0 !== t && void 0 !== e && "" !== e && e != -1 && "google" === t) switch (Number(e)) {
        case 0:
          return "User canceled the subscription";
        case 1:
          return "Subscription was canceled by the system, for example because of a billing problem";
        case 2:
          return "Subscription was replaced with a new subscription";
        case 3:
          return "Subscription was canceled by the developer"
      } else if (void 0 !== t && void 0 !== e && "" !== e && e != -1 && "apple" === t) switch (e) {
        case 1:
          return "The customer voluntarily canceled their subscription.";
        case 2:
          return "Billing error; for example, the customer's payment information was no longer valid.";
        case 3:
          return "The customer did not agree to a recent price increase.";
        case 4:
          return "The product was not available for purchase at the time of renewal.";
        case 5:
          return "Unknown error."
      }
    }
  }

  function n(e, t, o, a, n, r, s, i, c, l) {
    function u(e) {
      console.log("getStoreBusinessLicUrl :: ", e), e && e.result && (t.storeProfile.img = e.result.resourceUri)
    }

    function d(e) {
      var o = e.result.contents[0];
      t.storeProfile.email = o.email
    }

    function g(e) {
      a.messagePopup("처리되었습니다."), t.storeProfile.authState || (t.storeProfile.authState = {}), t.storeProfile.authState.nextAuthDate = void 0, t.storeProfile.authState.statusCode = 200
    }

    function p(e) {
      var t = e.result.contents[0];
      a.user = t, a.popupProfileIndex = 0, a.popupProfile(t)
    }

    t.user = a.user, t.storeProfile = r.store, r.getStoreBusinessLicUrl(t.storeProfile.id, u);
    var f = t.storeProfile.users[0].id, m = {
      id: f,
      page: 1,
      s_membershipCode: "",
      s_statusCode: "",
      s_startDate: "",
      s_endDate: ""
    };
    a.getNewUserProfile(m, d), t.unlock = function (e) {
      a.confirmPopup("변경 제한 임의 해제", "변경 제한 임의 해제를 진행하시겠습니까?", "확인").then(function (t) {
        1 === t && r.unlockStoreProfile(e, g)
      })
    }, t.review = function () {
      t.storeProfile = r.store, n.open({
        template: e.basepath("support/store-review.html"),
        controller: "StoreReviewController",
        className: "ngdialog-theme-default custom-width",
        showClose: !0,
        closeByEscape: !0
      })
    }, t.openUserDetailDialog = function (e) {
      var t = {
        id: e.id,
        page: 1,
        s_membershipCode: "",
        s_statusCode: "",
        s_startDate: "",
        s_endDate: ""
      };
      a.getNewUserProfile(t, p)
    }
  }

  function r(e, t, o, a, n, r, s, i, c, l, u) {
    function d(e) {
      var t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??=?([^#&?]*).*/,
          o = e.match(t);
      return !(!o || 11 !== o[7].length) && o[7]
    }

    t.slideshow = a.selectedSlideshow, t.getAuthorizedLocation = function (e) {
      return a.getAuthorizedLocation(e)
    }, t.getNonAuthorizedLocation = function (e) {
      return a.getNonAuthorizedLocation(e)
    }, t.openurl = function (e) {
      window.open(t.getAuthorizedLocation(e), "_blank")
    }, t.getVideoSource = function (e) {
      return u.trustAsResourceUrl("//www.youtube.com/embed/" + d(e))
    }
  }

  function s(e, t, o, a, n, r, s, i, c, l, u) {
    function d(e) {
      t.resources = e.result.resources
    }

    function g(e) {
      var t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??=?([^#&?]*).*/,
          o = e.match(t);
      return !(!o || 11 !== o[7].length) && o[7]
    }

    t.board = a.selectedBoard, t.resources = null, t.getAuthorizedLocation = function (e) {
      return a.getAuthorizedLocation(e)
    }, t.getNonAuthorizedLocation = function (e) {
      return a.getNonAuthorizedLocation(e)
    }, t.openurl = function (e) {
      window.open(t.getAuthorizedLocation(e), "_blank")
    }, t.getUserBoardsDetails = function (e) {
      return a.getBoardsDetails(e, d)
    }, t.getUserBoardsDetails(t.board.id), t.getVideoSource = function (e) {
      return u.trustAsResourceUrl("//www.youtube.com/embed/" + g(e))
    }
  }

  function i(e, t, o, a, n, r, s, i, c, l, u) {
    function d() {
      var e = a.selectedDevice;
      t.deviceDetailText = e;
      var o = e.ownerId, n = {id: o, page: 1};
      a.getNewUserProfile(n, g), t.deviceDetailText.state.displaySurface.cloudModel.modifiedTimestamp = f(t.deviceDetailText.state.displaySurface.cloudModel.modifiedTimestamp)
    }

    function g(e) {
      console.log("$$$  :::", e.result.contents[0]), t.device.user = e.result.contents[0]
    }

    function p(e) {
      var t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??=?([^#&?]*).*/,
          o = e.match(t);
      return !(!o || 11 !== o[7].length) && o[7]
    }

    function f(e) {
      if (e) return angular.isNumber(e) ? e : e.indexOf("T") > 0 ? (e.indexOf("Z") == -1 && e.indexOf("+") == -1 && (e += "Z"), e) : e
    }

    t.device = a.selectedDevice, console.log("json:", t.device), d(), t.getVideoSource = function (e) {
      return u.trustAsResourceUrl("//www.youtube.com/embed/" + p(e))
    }, t.getAuthorizedLocation = function (e) {
      return a.getAuthorizedLocation(e)
    }, t.getNonAuthorizedLocation = function (e) {
      return a.getNonAuthorizedLocation(e)
    }, t.openurl = function (e) {
      window.open(t.getAuthorizedLocation(e), "_blank")
    }, t.getLastTimeDeviceConnected = function () {
      if (angular.isDefined(t.deviceDetailText.state.heartbeat)) {
        var e = s("date")(f(t.deviceDetailText.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
            o = s("date")(f(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
        return e > o ? e : o
      }
      return s("date")(f(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss")
    }
  }

  function c(e, t, o, a, n, r, s, i, c, l) {
    function u(e) {
      if (e) return angular.isNumber(e) ? e : e.indexOf("T") > 0 ? (e.indexOf("Z") == -1 && e.indexOf("+") == -1 && (e += "Z"), e) : e
    }

    function d() {
      l.getProducts(g)
    }

    function g(e) {
      t.products = e.result
    }

    t.track = a.selectedTrack, console.log("$scope.track", t.track), t.track.subscription && t.track.subscription.lastModifiedDate && (t.track.subscription.lastModifiedDate = u(t.track.subscription.lastModifiedDate)), void 0 === t.track.subscription.partnerName && (t.providerSubscriptionInfo = angular.fromJson(t.track.providerSubscriptionInfo)), d(), void 0 === t.track.subscription.partnerName && l.getAppMarket(t.track.id).then(function (e) {
      console.log("items", e.data.result), t.appmarket = angular.fromJson(e.data.result)
    }, function (e, t) {
      console.log("e", e), 401 === t && o.go("page.login"), a.messageErrorPopup("Error : " + e.status + " " + e.statusText)
    }), t.getProductById = function (e, o) {
      var a = "";
      return void 0 !== o && void 0 !== e && "google" === o ? angular.forEach(t.products, function (t) {
        t.goolgeProductId.toUpperCase() === e.toUpperCase() && (a = t.productName)
      }) : void 0 !== o && void 0 !== e && "apple" === o ? angular.forEach(t.products, function (t) {
        t.appleProductId.toUpperCase() === e.toUpperCase() && (a = t.productName)
      }) : void 0 !== o && void 0 !== e && "" !== o && angular.forEach(t.products, function (t) {
        t.id.toUpperCase() === e.toUpperCase() && (a = t.productName)
      }), a
    }, t.getCancelSurveyReason = function (e) {
      switch (e) {
        case 0:
          return "Other";
        case 1:
          return "I don't use this service enough";
        case 2:
          return "Technical issues";
        case 3:
          return "Cost-related reasons";
        case 4:
          return "I found a better app"
      }
    }, t.getNotificationType = function (e) {
      switch (e) {
        case 1:
          return "SUBSCRIPTION_RECOVERED";
        case 2:
          return "SUBSCRIPTION_RENEWED";
        case 3:
          return "SUBSCRIPTION_CANCELED";
        case 4:
          return "SUBSCRIPTION_PURCHASED";
        case 5:
          return "SUBSCRIPTION_ON_HOLD";
        case 6:
          return "SUBSCRIPTION_IN_GRACE_PERIOD";
        case 7:
          return "SUBSCRIPTION_RESTARTED";
        case 8:
          return "SUBSCRIPTION_PRICE_CHANGE_CONFIRM";
        case 9:
          return "SUBSCRIPTION_DEFERRED";
        case 10:
          return "SUBSCRIPTION_PAUSED";
        case 11:
          return "SUBSCRIPTION_PAUSE_SCHEDULE_CHANG";
        case 12:
          return "SUBSCRIPTION_REVOKED";
        case 13:
          return "SUBSCRIPTION_EXPIRED"
      }
    }, t.getCancelReason = function (e, t) {
      if (void 0 !== t && void 0 !== e && "" !== e && e != -1 && "google" === t) switch (Number(e)) {
        case 0:
          return "User canceled the subscription";
        case 1:
          return "Subscription was canceled by the system, for example because of a billing problem";
        case 2:
          return "Subscription was replaced with a new subscription";
        case 3:
          return "Subscription was canceled by the developer"
      } else if (void 0 !== t && void 0 !== e && "" !== e && e != -1 && "apple" === t) switch (e) {
        case 1:
          return "The customer voluntarily canceled their subscription.";
        case 2:
          return "Billing error; for example, the customer's payment information was no longer valid.";
        case 3:
          return "The customer did not agree to a recent price increase.";
        case 4:
          return "The product was not available for purchase at the time of renewal.";
        case 5:
          return "Unknown error."
      }
    }, t.updateComment = function (e, t) {
      "" === t || a.updateCommentMsg(e, t).then(function (e) {
        a.messagePopup("회원상태 코멘트 업데이트 완료")
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.groupCheck = c.localStorage.getItem("ngStorage-groups").indexOf("showit-superuser")
  }

  function l(e, t, o, a, n, r, s, i, c, l) {
    t.user = a.user, t.loading = !0, a.MemberHistoryCurrentPage = 1, t.MemberHistoryCurrentPage = a.MemberHistoryCurrentPage, a.getMemberhistory(t.user.id, t.MemberHistoryCurrentPage).then(function (e) {
      console.log("res", e), t.memberHistoryList = e.data.result.history, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.MemberHistoryCurrentPage = t.pageInfo.currentPage, a.MemberHistoryCurrentPage = t.MemberHistoryCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
    }, function (e, n) {
      401 === n && o.go("page.login"), t.loading = !1, t.memberHistoryList = [], console.log("e:::", e), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
    }), t.pageChanged = function (e) {
      t.loading = !0, t.memberHistoryList = [], a.MemberHistoryCurrentPage = e, t.MemberHistoryCurrentPage = a.MemberHistoryCurrentPage, a.getMemberhistory(t.user.id, t.MemberHistoryCurrentPage).then(function (e) {
        console.log("res", e), t.memberHistoryList = e.data.result.history, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.MemberHistoryCurrentPage = t.pageInfo.currentPage, a.MemberHistoryCurrentPage = t.MemberHistoryCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
      }, function (e, n) {
        t.loading = !1, t.memberHistoryList = [], 401 === n && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }
  }

  function u(e, t, o, a, n, r, s, i, c, l) {
    t.user = a.user, t.device = a.selectedDevice, t.deviceName = a.deviceName, t.loading = !0, a.CastingHistoryCurrentPage = 1, t.CastingHistoryCurrentPage = a.CastingHistoryCurrentPage, a.getCastinghistory(t.user.id, t.device.id, t.CastingHistoryCurrentPage).then(function (e) {
      console.log("res", e), t.castingHistoryList = e.data.deviceHist, t.pageInfo = e.data.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.CastingHistoryCurrentPage = t.pageInfo.currentPage, a.CastingHistoryCurrentPage = t.CastingHistoryCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
    }, function (e, n) {
      401 === n && o.go("page.login"), t.loading = !1, t.castingHistoryList = [], console.log("e:::", e), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
    }), t.pageChanged = function (e) {
      t.loading = !0, t.castingHistoryList = [], a.CastingHistoryCurrentPage = e, t.CastingHistoryCurrentPage = a.CastingHistoryCurrentPage, a.getCastinghistory(t.user.id, t.device.id, t.CastingHistoryCurrentPage).then(function (e) {
        console.log("res", e), t.castingHistoryList = e.data.deviceHist, t.pageInfo = e.data.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.CastingHistoryCurrentPage = t.pageInfo.currentPage, a.CastingHistoryCurrentPage = t.CastingHistoryCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
      }, function (e, n) {
        t.loading = !1, t.castingHistoryList = [], 401 === n && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.goDeviceDetail = function (e) {
      a.selectedDevice = e, a.popupProfileDevice(e)
    }
  }

  function d(e, t, o, a, n, r, s, i, c, l) {
    t.user = a.user, t.loading = !0, a.InviteDetailCurrentPage = 1, t.InviteDetailCurrentPage = a.InviteDetailCurrentPage, a.getInviteDetail(t.user.id, t.InviteDetailCurrentPage).then(function (e) {
      console.log("res", e), t.invites = e.data.result.invites, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.InviteDetailCurrentPage = t.pageInfo.currentPage, a.InviteDetailCurrentPage = t.InviteDetailCurrentPage, t.maxSize = 5, t.itemsPerPage = 5, t.loading = !1
    }, function (e, n) {
      401 === e.status && o.go("page.login"), t.loading = !1, t.invites = [], console.log("e:::", e), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
    }), t.pageChanged = function (e) {
      t.loading = !0, t.invites = [], a.InviteDetailCurrentPage = e, t.InviteDetailCurrentPage = a.InviteDetailCurrentPage, a.getInviteDetail(t.user.id, t.InviteDetailCurrentPage).then(function (e) {
        console.log("res", e), t.invites = e.data.result.invites, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.InviteDetailCurrentPage = t.pageInfo.currentPage, a.InviteDetailCurrentPage = t.InviteDetailCurrentPage, t.maxSize = 5, t.itemsPerPage = 5, t.loading = !1
      }, function (e, n) {
        t.loading = !1, t.invites = [], 401 === e.status && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }
  }

  function g(e, t, o, a, n, r, s, i, c, l) {
    t.user = a.user, t.loading = !0, a.CouponHistoryCurrentPage = 1, t.CouponHistoryCurrentPage = a.CouponHistoryCurrentPage, t.selectedCoupon = "all", a.getCouponList().then(function (e) {
      console.log("coupon list :: ", e), t.couponList = e.data.result.couponDefs
    }), a.getCouponHistory(t.user.id, t.CouponHistoryCurrentPage).then(function (e) {
      console.log("res", e), t.coupons = e.data.result.coupons, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.CouponHistoryCurrentPage = t.pageInfo.currentPage, a.CouponHistoryCurrentPage = t.CouponHistoryCurrentPage, t.maxSize = 5, t.itemsPerPage = 5, t.loading = !1
    }, function (e, n) {
      401 === e.status && o.go("page.login"), t.loading = !1, t.coupons = [], console.log("e:::", e), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
    }), t.pageChanged = function (e) {
      t.loading = !0, t.coupons = [], a.CouponHistoryCurrentPage = e, t.CouponHistoryCurrentPage = a.CouponHistoryCurrentPage, a.getCouponHistory(t.user.id, t.CouponHistoryCurrentPage).then(function (e) {
        console.log("res", e), t.coupons = e.data.result.coupons, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.CouponHistoryCurrentPage = t.pageInfo.currentPage, a.CouponHistoryCurrentPage = t.CouponHistoryCurrentPage, t.maxSize = 5, t.itemsPerPage = 5, t.loading = !1
      }, function (e, n) {
        t.loading = !1, t.coupons = [], 401 === e.status && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.confirmCoupon = function () {
      var e = a.user.id;
      return "all" == t.selectedCoupon ? void a.messagePopup("발급할 쿠폰을 선택해주십시오.") : void a.confirmPopup("쿠폰 임의 지급", "쿠폰을 지급하시겠습니까?", "확인").then(function (o) {
        if (1 === o) {
          var n = function (e) {
            a.messagePopup("쿠폰이 지급되었습니다."), t.pageChanged(1)
          }, r = function () {
            a.messagePopup("실패하였습니다.")
          };
          a.addCoupon(e, t.selectedCoupon, n, r)
        }
      })
    }
  }

  function p(e, t, o, a, n, r, s, i, c, l) {
    function u() {
      l.getProducts(d)
    }

    function d(e) {
      t.products = e.result
    }

    console.log("ProfileTrackingController :::"), t.user = a.user, t.loading = !0, a.TrackingCurrentPage = 1, t.TrackingCurrentPage = a.TrackingCurrentPage, a.subscriptionHistory(t.user.id, t.TrackingCurrentPage).then(function (e) {
      console.log("res", e), t.trackingList = e.data.result.contents, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.TrackingCurrentPage = t.pageInfo.currentPage, a.TrackingCurrentPage = t.TrackingCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
    }, function (e, n) {
      401 === n && o.go("page.login"), t.loading = !1, t.trackingList = [], console.log("e:::", e), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
    }), t.openApple = function () {
      window.open("https://appstoreconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/app/1506857843/addons", "_blank")
    }, t.openAOS = function () {
      window.open("https://play.google.com/apps/publish", "_blank")
    }, t.goDeactive = function (e) {
      a.user = e, a.popupProfileDeactive().then(function (e) {
        function n(e) {
          t.user = e.result.contents[0]
        }

        console.log("rrrr ::", e);
        var r = {id: t.user.id, withdrawCode: e.selectDeactive, withdrawReason: e.selectComment};
        a.confirmPopup("최종 탈퇴 확인", "탈퇴된 회원은 개인정보 보관함에서 보존처리 전까지 탈퇴회원 목록에서 무료회원으로 다시 복귀할 수 있습니다.", "탈퇴처리").then(function (e) {
          1 === e && (console.log("data::", r), a.deactive(r).then(function () {
            a.messagePopup("회원탈퇴 처리 완료").then(function (e) {
              var r = {id: t.user.id, page: 1};
              a.getNewUserProfile(r, n), t.TrackingCurrentPage = a.TrackingCurrentPage, a.subscriptionHistory(t.user.id, t.TrackingCurrentPage).then(function (e) {
                console.log("res", e), t.trackingList = e.data.result.contents, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.TrackingCurrentPage = t.pageInfo.currentPage, a.TrackingCurrentPage = t.TrackingCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
              }, function (e, n) {
                t.loading = !1, t.trackingList = [], 401 === n && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
              })
            })
          }))
        })
      })
    }, t.goReactive = function (e) {
      function n(e) {
        t.user = e.result.contents[0]
      }

      var r = {id: t.user.id, withdrawCode: "0", withdrawReason: ""};
      a.confirmPopup("탈퇴회원 재활성화", " 탈퇴한 회원을 다시 활성화 시키겠습니까?  &nbsp;&nbsp;  (활성화 시 회원의 모든 정보가 그대로 유지됩니다.)", "활성화").then(function (e) {
        1 === e && a.reactive(r).then(function () {
          a.messagePopup("탈퇴회원의 재가입이 완료되었습니다.");
          var e = {id: t.user.id, page: 1};
          a.getNewUserProfile(e, n), t.TrackingCurrentPage = a.TrackingCurrentPage, a.subscriptionHistory(t.user.id, t.TrackingCurrentPage).then(function (e) {
            console.log("res", e), t.trackingList = e.data.result.contents, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.TrackingCurrentPage = t.pageInfo.currentPage, a.TrackingCurrentPage = t.TrackingCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
          }, function (e, n) {
            t.loading = !1, t.trackingList = [], 401 === n && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
          })
        })
      })
    }, t.pageChanged = function (e) {
      t.loading = !0, t.trackingList = [], a.TrackingCurrentPage = e, t.TrackingCurrentPage = a.TrackingCurrentPage, a.subscriptionHistory(t.user.id, t.TrackingCurrentPage).then(function (e) {
        console.log("res", e), t.trackingList = e.data.result.contents, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.TrackingCurrentPage = t.pageInfo.currentPage, a.TrackingCurrentPage = t.TrackingCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
      }, function (e, n) {
        t.loading = !1, t.trackingList = [], 401 === n && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, u(), t.getCancelReason = function (e, t) {
      if (void 0 !== t && void 0 !== e && "" !== e && e != -1 && "google" === t) switch (Number(e)) {
        case 0:
          return "User canceled the subscription";
        case 1:
          return "Subscription was canceled by the system, for example because of a billing problem";
        case 2:
          return "Subscription was replaced with a new subscription";
        case 3:
          return "Subscription was canceled by the developer"
      } else if (void 0 !== t && void 0 !== e && "" !== e && e != -1 && "apple" === t) switch (e) {
        case 1:
          return "The customer voluntarily canceled their subscription.";
        case 2:
          return "Billing error; for example, the customer's payment information was no longer valid.";
        case 3:
          return "The customer did not agree to a recent price increase.";
        case 4:
          return "The product was not available for purchase at the time of renewal.";
        case 5:
          return "Unknown error."
      }
    }, t.getProductById = function (e, o) {
      var a = "";
      return void 0 !== o && void 0 !== e && "google" === o ? angular.forEach(t.products, function (t) {
        t.goolgeProductId.toUpperCase() === e.toUpperCase() && (a = t.productName)
      }) : void 0 !== o && void 0 !== e && "apple" === o ? angular.forEach(t.products, function (t) {
        t.appleProductId.toUpperCase() === e.toUpperCase() && (a = t.productName)
      }) : void 0 !== o && void 0 !== e && "" !== o && angular.forEach(t.products, function (t) {
        t.id.toUpperCase() === e.toUpperCase() && (a = t.productName)
      }), a
    }, t.goTrackDetail = function (e) {
      a.selectedTrack = e, a.popupProfileTrackDetail(e)
    }, t.refreshUpdate = function (e) {
      a.refreshUpdate(e).then(function (e) {
        console.log("refreshUpdate#user", e), t.user.subscription = e.data.result.subscription, a.messagePopup("Update Done!").then(function (e) {
          t.loading = !0, t.trackingList = [], a.subscriptionHistory(t.user.id, t.TrackingCurrentPage).then(function (e) {
            t.trackingList = e.data.result.contents, t.pageInfo = e.data.result.pageInfo, t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.TrackingCurrentPage = t.pageInfo.currentPage, a.TrackingCurrentPage = t.TrackingCurrentPage, t.maxSize = 5, t.itemsPerPage = 16, t.loading = !1
          }, function (e, n) {
            t.loading = !1, t.trackingList = [], 401 === n && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
          })
        })
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }
  }

  angular.module("app.support").controller("ProfileUserController", a).controller("ProfileStoreController", n).controller("ProfileTrackingController", p).controller("ProfileServiceHistoryController", l).controller("ProfileCastingHistoryController", u).controller("ProfileInviteDetailController", d).controller("ProfileCouponHistoryController", g).controller("ProfileTrackdetailController", c).controller("ProfileDeviceController", i).controller("ProfileBoardDetailController", s).controller("ProfileSlideshowDetailController", r).controller("ProfileWorkController", e).controller("ProfileWorkPopupAController", t).controller("ProfileWorkPopupBController", o), e.$inejct = ["RouteHelpers", "$scope", "$state", "WorkhistoryInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "WorkhistoryInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "WorkhistoryInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], t.$inject = ["RouteHelpers", "$scope", "$state", "WorkhistoryInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], o.$inejct = ["RouteHelpers", "$scope", "$state", "WorkhistoryInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], o.$inject = ["RouteHelpers", "$scope", "$state", "WorkhistoryInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], a.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader", "WorkhistoryInfoLoader", "TemplateSearchLoader"], a.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader", "WorkhistoryInfoLoader", "TemplateSearchLoader"], n.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], n.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], r.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader", "$sce"], r.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader", "$sce"], s.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader", "$sce"], s.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader", "$sce"], i.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader", " $sce"], i.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader", "$sce"], c.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], c.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], l.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], l.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], u.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], u.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], d.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], d.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], g.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], g.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], p.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], p.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"]
}(),function () {
  function e(e, t, o, a, n, r, s, i, c) {
    function l() {
      u.basepath = e.basepath, t.loading = !0
    }

    var u = this;
    l()
  }

  angular.module("app.support").controller("RedeemcodeController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout"], e.$inject = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout"]
}(),function () {
  function e(e, t, o, a, n, r, s, i, c, l) {
    function u(e) {
      var o = e.date, a = e.mode;
      if ("day" === a) for (var n = new Date(o).setHours(0, 0, 0, 0), r = 0; r < t.events.length; r++) {
        var s = new Date(t.events[r].date).setHours(0, 0, 0, 0);
        if (n === s) return t.events[r].status
      }
      return ""
    }

    t.popup1 = {opened: !1}, t.popup2 = {opened: !1}, console.log(t.popup1.opened), t.today = function () {
      t.dt = new Date
    }, t.today(), t.clear = function () {
      t.dt = null
    }, t.inlineOptions = {
      customClass: u,
      minDate: new Date,
      showWeeks: !0
    }, t.dateOptions = {
      formatYear: "yy",
      maxDate: t.dt.todate,
      minDate: t.dt.fromdate,
      startingDay: 0,
      showWeeks: !1
    }, t.toggleMin = function () {
      t.inlineOptions.minDate = t.inlineOptions.minDate ? null : new Date, t.dateOptions.minDate = t.inlineOptions.minDate
    }, t.toggleMin(), t.open1 = function () {
      t.popup1.opened = !0
    }, t.open2 = function () {
      t.popup2.opened = !0
    }, t.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], t.format = t.formats[1], t.altInputFormats = ["M!/d!/yyyy"];
    var d = new Date;
    d.setDate(d.getDate() + 1);
    var g = new Date;
    g.setDate(d.getDate() + 1), t.events = [{date: d, status: "full"}, {
      date: g,
      status: "partially"
    }], delete this;
    var p = this;
    console.log("UserInfoLoader.currentPage", l.currentPage), p.totalItems = 0, l.currentPage = 1, p.selectquery = "all", t.cvsName = "CSV", t.cvsNameC = "allCSV", p.selectMembership = "", p.selectStatus = "", p.fdt = new Date, p.tdt = new Date, p.term = !0, t.goDownloadFile = function (e, t) {
      var n = null, r = null;
      p.term ? r = "WithdrawReasonStatistics_All" + s("date")(new Date, "yyyyMMdd") : (n = "startDate=".concat(s("date")(e, "yyyyMMdd"), "&endDate=").concat(s("date")(t, "yyyyMMdd")), r = "WithdrawReasonStatistics_" + s("date")(e, "yyyyMMdd") + "_" + s("date")(t, "yyyyMMdd")), a.downdloadWithdrawReasonStatistics(n).then(function (e) {
        console.log("res", e);
        var t = document.createElement("a");
        document.body.appendChild(t);
        var o = new Blob([e.data], {type: "application/octet-stream"}),
            a = window.URL.createObjectURL(o);
        t.href = a, t.download = r + ".xlsx", t.click()
      }, function (e, t) {
        401 === t && o.go("page.login"), l.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }
  }

  function t(e, t, o, a, n, r, s, i, c, l) {
    function u(e) {
      var o = e.date, a = e.mode;
      if ("day" === a) for (var n = new Date(o).setHours(0, 0, 0, 0), r = 0; r < t.events.length; r++) {
        var s = new Date(t.events[r].date).setHours(0, 0, 0, 0);
        if (n === s) return t.events[r].status
      }
      return ""
    }

    this.dt = new Date, this.dt.setDate(this.dt.getDate() - 1), t.dt = new Date, t.dt.setDate(t.dt.getDate() - 1), t.today = function () {
      t.dt = new Date, t.dt.setDate(t.dt.getDate() - 1)
    }, t.today(), t.clear = function () {
      t.dt = null
    }, t.popup1 = {opened: !1}, t.open1 = function () {
      t.popup1.opened = !0
    }, t.dateOptions = {
      formatYear: "yy",
      maxDate: t.dt,
      startingDay: 0,
      showWeeks: !1
    }, t.inlineOptions = {
      customClass: u,
      minDate: new Date,
      showWeeks: !0
    }, t.changeDate = function (e) {
      console.log("item: ", e)
    }, t.goDownloadFile = function (e) {
      var t = "DailyUserStatistics_" + s("date")(e, "yyyyMMdd");
      a.downloadDailyUserStatistic(e).then(function (e) {
        console.log("res", e);
        var o = document.createElement("a");
        document.body.appendChild(o);
        var a = new Blob([e.data], {type: "application/octet-stream"}),
            n = window.URL.createObjectURL(a);
        o.href = n, o.download = t + ".xlsx", o.click()
      }, function (e, t) {
        401 === t && o.go("page.login"), l.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }
  }

  function o(e, t, o, a, n, r, s, i, c, l) {
    a.getRankingDataAPI().then(function (e) {
      console.log("items", e.data.result), e.data.result.sort(), t.weekdata = [], e.data.result.forEach(function (e) {
        t.weekdata.push({date: e})
      }), console.log("weekdata", t.weekdata), t.selected = t.weekdata[t.weekdata.length - 1]
    }, function (e, t) {
      401 === t && o.go("page.login"), alert("Failure finding device")
    }), t.changeDate = function (e) {
      console.log("item: ", e)
    }, t.download = function (e) {
      t.downloadFileName = e.filename;
      var o = "../server/TemplateRank/" + t.downloadFileName, a = document.createElement("a");
      a.href = o, a.download = t.downloadFileName, a.click(), window.URL.revokeObjectURL(o)
    }, t.downloadRanking = function (e) {
      var t = e.substr(0, 7), n = new Date,
          r = "TEMPLATE_RANKING_" + e + "_" + s("date")(n, "yyyyMMdd");
      a.downloadRanking(t).then(function (e) {
        console.log("res", e);
        var t = document.createElement("a");
        document.body.appendChild(t);
        var o = new Blob([e.data], {type: "application/octet-stream"}),
            a = window.URL.createObjectURL(o);
        t.href = a, t.download = r + ".XLSX", t.click()
      }, function (e, t) {
        401 === t && o.go("page.login"), l.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }
  }

  function a(e, t, o, a, r, s, i, c, l, u) {
    function d() {
      D.basepath = e.basepath, t.loading = !0, a.getStatisticsData(g)
    }

    function g(e) {
      console.log("statistics", e), t.statisticsList = e, t.loading = !1, angular.forEach(e, function (e, o) {
        t.pickStartEndWeek(new Date(e.date))
      }), t.weekdata.selected = t.weekdata[t.weekdata.length - 1], t.startOfDate = t.weekdata.selected.startOfDate, t.endOfDate = t.weekdata.selected.endOfDate, t.deviceBroadcastingAverage = 0, t.activeUserAverage = 0;
      var o = c(new Date(t.startOfDate)).subtract(7, "d");
      t.lastweekStart = o.clone().startOf("isoWeek").format("YYYY/MM/DD"), t.lastweekEnd = o.clone().endOf("isoWeek").format("YYYY/MM/DD"), t.caluratorEx(t.startOfDate, t.endOfDate), t.caluratorlastweek(t.lastweekStart, t.lastweekEnd), t.caluratorMonth(t.startOfMonth, t.endOfMonth)
    }

    function p(e) {
      r.open({
        template: "statisticsDeviceDetailDialog", controller: ["$scope", function (t) {
          t.detail = h(e)
        }], className: "ngdialog-theme-default custom-width"
      })
    }

    function f(e) {
      r.open({
        template: "statisticsUserDetailDialog", controller: ["$scope", function (t) {
          function o(e) {
            console.log("RESULT::", e), u.user = e.result.contents[0], u.popupProfileIndex = 2, u.popupProfile(e.result.contents[0])
          }

          t.detail = h(e), t.goUserDetail = function (e) {
            var t = {
              id: "us-west-2:8a057aae-67a3-4c8a-bde6-2ea44f9fad06",
              page: 1,
              s_endDate: "",
              s_membershipCode: "",
              s_startDate: "",
              s_statusCode: ""
            };
            u.getNewUserProfile(t, o)
          }
        }], className: "ngdialog-theme-default custom-width"
      })
    }

    function m(e) {
      var o = document.createElement("a"), a = v(e), n = Papa.unparse(a);
      if (window.navigator.msSaveOrOpenBlob) {
        var r = new Blob([decodeURIComponent(encodeURI(n))], {type: "text/csv;charset=utf-8;"});
        navigator.msSaveBlob(r, t.downloadFileName + ".csv")
      } else o.href = "data:attachment/csv;charset=utf-8," + encodeURI(n), o.target = "_blank", o.download = t.downloadFileName + ".csv", document.body.appendChild(o), o.click()
    }

    function h(e) {
      for (var t = e.split(/\r\n|\n/), o = t[0].split(","), a = [], n = 0; n < t.length; n++) {
        var r = t[n].split(",");
        if (r.length == o.length) for (var s = 0; s < o.length; s++) "" != r[s] && a.push({data: r[s]})
      }
      return a
    }

    function v(e) {
      for (var t = e.split(/\r\n|\n/), o = t[0].split(","), a = [], n = 0; n < t.length; n++) {
        var r = t[n].split(",");
        if (r.length == o.length) {
          for (var s = [], i = 0; i < o.length; i++) s.push(r[i]);
          a.push(s)
        }
      }
      return a
    }

    function y(e, t, o, a, r, s, i, l, u) {
      function d() {
        function u(e) {
          a.getDevices(e, p)
        }

        function p(e) {
          t.devices = e.result.devices, console.log("DEVICES:::", t.devices);
          var o = 0;
          0 == t.devices.length && (t.devicesList.user.castingCnt = "-"), t.devices.forEach(function (e) {
            if (angular.isDefined(e.state.heartbeat)) {
              var a = i("date")(n(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                  r = i("date")(n(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
              a > r ? (t.lastRunning.push(a), c().diff(a) <= 6e4 && t.lastRunningOne.push(a)) : (t.lastRunning.push(r), c().diff(r) <= 6e4 && t.lastRunningOne.push(r))
            }
            angular.isDefined(e.state.physicalDevice) && (o += 1), 0 == o ? t.devicesList.user.castingCnt = "-" : t.devicesList.user.castingCnt = o
          }), t.lastRunning.length > 0 && (t.desclastRunning = i("orderBy")(t.lastRunning, "", !0)), console.log("desclastRunning ::::", t.desclastRunning)
        }

        function f(e) {
          s.getStoreProfile("userid", e, 1, m)
        }

        function m(e) {
          console.log("STORE RESULT::", e.contents), t.devicesList.storeProfile = e.contents, t.devicesList.pageInfo = e.pageInfo, t.devicesList.totalItems = t.devicesList.pageInfo.totalResourceCount, t.devicesList.currentPage = t.devicesList.pageInfo.currentPage, t.devicesList.itemsPerPage = 16, e.contents.length > 0 && e.contents[0].productCategories.length > 0 && (console.log("productCategories::", e.contents[0].productCategories[0].id), t.productCategoriesId = e.contents[0].productCategories[0].id, l(function () {
            var e = t.activeResources.findIndex(function (e) {
              return e.id === t.productCategoriesId
            });
            t.selectedProductCategory = t.activeResources[e], console.log("$scope.selectedProductCategory", t.selectedProductCategory)
          }, 1500))
        }

        function h(e) {
          console.log("BOARD RESULT::", e.result.contents), t.boardsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.boards = e.result.contents : t.boards = t.boards.concat(e.result.contents), t.devicesList.boardsPageInfo = e.result.pageInfo
        }

        function v(e) {
          a.listBoards(e, t.userBoardsPage, h)
        }

        function y(e) {
          t.slideshowsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.slideshows = e.result.contents : t.slideshows = t.slideshows.concat(e.result.contents), t.devicesList.slideshowsPageInfo = e.result.pageInfo
        }

        function D(e) {
          a.listSlideshows(e, t.userSlideshowsPage, y)
        }

        g.basepath = e.basepath, console.log("UserInfoLoader.user:::", a.user), a.user.created = n(a.user.created), a.user.lastModified = n(a.user.lastModified), t.devicesList.user = a.user, u(t.devicesList.user.id), v(t.devicesList.user.id), D(t.devicesList.user.id), f(t.devicesList.user.id), t.currentDate = c().format("YYYY/MM/DD HH:mm:ss"), t.activeResources = [];
        for (var w = 1; w <= 2; w++) {
          var P = "en";
          a.getUserProductCategories(P, w).then(function (e) {
            e.data.result.resources.forEach(function (e) {
              t.activeResources.push(e)
            })
          }, function (e, t) {
            401 === t && o.go("page.login"), alert("Failure finding device")
          });
          var P = "ko";
          a.getUserProductCategories(P, w).then(function (e) {
            e.data.result.resources.forEach(function (e) {
              t.activeResources.push(e)
            })
          }, function (e, t) {
            401 === t && o.go("page.login"), alert("Failure finding device")
          })
        }
        console.log("$scope.activeResources", t.activeResources), t.checkRunning = function (e) {
          if (angular.isDefined(e.state.heartbeat)) {
            var t = i("date")(n(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                o = i("date")(n(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
            return t > o ? c().diff(t) > 6e4 : c().diff(o) > 6e4
          }
          if (angular.isDefined(e.state.displaySurface.deviceModel)) {
            if (angular.isDefined(e.state.displaySurface.deviceModel.modifiedTimestamp)) {
              var o = i("date")(n(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
              return c().diff(o) > 6e4
            }
            return !0
          }
          return !0
        }, t.goStoreDetail = function (e) {
          r.open({
            template: "storeProfileDetailDialog",
            controller: ["$scope", "$timeout", function (t, o) {
              t.storeProfile = e
            }],
            className: "ngdialog-theme-default custom-width"
          })
        }, t.loadMoreBoard = function () {
          16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount && (t.userBoardsPage = t.userBoardsPage + 1, a.listBoards(t.devicesList.user.id, t.userBoardsPage, h))
        }, t.loadMoreSlideshow = function () {
          16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount && (t.userSlideshowsPage = t.userSlideshowsPage + 1, a.listSlideshows(t.devicesList.user.id, t.userSlideshowsPage, y))
        }, t.isEndBoard = function () {
          return !(t.devicesList.boardsPageInfo && 16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount)
        }, t.isEndSlideshow = function () {
          return !(t.devicesList.slideshowsPageInfo && 16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount)
        }, t.goDeviceDetail = function (e) {
          console.log("before", e), a.selectedDevice = e, r.open({
            template: "userDeviceDetailDialog",
            controller: b,
            className: "ngdialog-theme-default custom-width"
          })
        }, t.goBoardDetail = function (e) {
          r.open({
            template: "boardDetailDialog",
            controller: ["$scope", "$timeout", function (t, o) {
              function n(e) {
                console.log("@@@::", e.result.resources), t.resources = e.result.resources
              }

              console.log("BOARD:::", e), t.board = e, t.resources = null, t.getAuthorizedLocation = function (e) {
                return a.getAuthorizedLocation(e)
              }, t.getNonAuthorizedLocation = function (e) {
                return a.getNonAuthorizedLocation(e)
              }, t.openurl = function (e) {
                window.open(t.getAuthorizedLocation(e), "_blank")
              }, t.getUserBoardsDetails = function (e) {
                return a.getBoardsDetails(e, n)
              }, t.getUserBoardsDetails(t.board.id)
            }],
            className: "ngdialog-theme-default custom-width"
          })
        }, t.goSlideshowDetail = function (e) {
          r.open({
            template: "slideshowDetailDialog",
            controller: ["$scope", "$timeout", function (t, o) {
              t.slideshow = e, t.getAuthorizedLocation = function (e) {
                return a.getAuthorizedLocation(e)
              }, t.getNonAuthorizedLocation = function (e) {
                return a.getNonAuthorizedLocation(e)
              }, t.openurl = function (e) {
                window.open(t.getAuthorizedLocation(e), "_blank")
              }
            }],
            className: "ngdialog-theme-default custom-width"
          })
        }, t.getAuthorizedLocation = function (e) {
          return a.getAuthorizedLocation(e)
        }, t.getNonAuthorizedLocation = function (e) {
          return a.getNonAuthorizedLocation(e)
        }, t.getLastTimeDeviceConnected = function (e, t) {
          var o = i("date")(n(e), "yyyy/MM/dd HH:mm:ss"),
              a = i("date")(n(t), "yyyy/MM/dd HH:mm:ss");
          return o > a ? o : a
        }, t.getDeviceType = function (e) {
          return "showit-virtual-cast" == e ? "Full Screen Mode" : "Device"
        }, t.removeDevice = function (e) {
          console.log("deviceid", e), t.deviceid = e;
          var n = r.openConfirm({
            template: '<p>Are you sure you want to remove device </p><p>id {{deviceid}}  ?</p><div class="row"><div class="col-md-3 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes</button></div><div class="col-md-3 text-center"><button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No</button></div><div class="col-md-3 text-center"></div></div>',
            plain: !0,
            className: "ngdialog-theme-default",
            scope: t
          });
          n.then(function (n) {
            console.log("resolved:" + n), a.removeDevice(e).then(function (e) {
              console.log("items", e), d(), u(t.devicesList.user.id)
            }, function (e, t) {
              401 === t && o.go("page.login"), alert("Failure finding device")
            })
          }, function (e) {
            console.log("rejected:" + e)
          })
        }
      }

      var g = this;
      t.userBoardsPage = 1, t.userSlideshowsPage = 1, t.devicesList = {}, t.oneAtATime = !0, t.status = {isFirstOpen: !0}, t.lastRunning = [], t.lastRunningOne = [], t.desclastRunning = [], d(), t.groupCheck = u.localStorage.getItem("ngStorage-groups").indexOf("showit-superuser"), t.getAuthorizedLocation = function (e) {
        return a.getAuthorizedLocation(e)
      }, t.getNonAuthorizedLocation = function (e) {
        return a.getNonAuthorizedLocation(e)
      }, t.openurl = function (e) {
        window.open(t.getAuthorizedLocation(e), "_blank")
      }
    }

    function b(e, t, o, a, r) {
      function s() {
        function o() {
          var e = a.selectedDevice;
          console.log("after", e), t.deviceDetailText = e;
          var o = e.ownerId;
          a.getUserProfile("userid", o, 1, s)
        }

        function s(e) {
          t.device.user = e.result[0]
        }

        i.basepath = e.basepath, o(), t.getAuthorizedLocation = function (e) {
          return a.getAuthorizedLocation(e)
        }, t.getNonAuthorizedLocation = function (e) {
          return a.getNonAuthorizedLocation(e)
        }, t.openurl = function (e) {
          window.open(t.getAuthorizedLocation(e), "_blank")
        }, t.getLastTimeDeviceConnected = function () {
          if (angular.isDefined(t.deviceDetailText.state.heartbeat)) {
            var e = r("date")(n(t.deviceDetailText.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                o = r("date")(n(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
            return e > o ? e : o
          }
          return r("date")(n(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss")
        }
      }

      var i = this;
      t.device = {}, s()
    }

    var D = this;
    t.weekdata = [], d();
    var w = c().subtract(1, "d"), P = w.clone().startOf("isoWeek").format("YYYY/MM/DD"),
        C = w.clone().endOf("isoWeek").format("YYYY/MM/DD");
    t.startDt = w.clone().startOf("isoWeek").format("YYYYMMDD"), t.endDt = w.clone().endOf("isoWeek").format("YYYYMMDD");
    var S = c().subtract(7, "d"), A = S.clone().startOf("isoWeek").format("YYYY/MM/DD"),
        L = S.clone().endOf("isoWeek").format("YYYY/MM/DD"),
        I = c().subtract(1, "d").subtract(1, "months").startOf("month").format("YYYY/MM/DD"),
        M = c().subtract(1, "d").subtract(1, "months").endOf("month").format("YYYY/MM/DD"),
        U = c().subtract(168, "d"), k = U.clone().startOf("isoWeek").format("YYYY/MM/DD"),
        $ = U.clone().endOf("isoWeek").format("YYYY/MM/DD");
    t.selectedBoxlimtweekStart = k, t.selectedBoxlimtweekEnd = $, t.startOfMonth = I, t.endOfMonth = M, t.lastweekStart = A, t.lastweekEnd = L, t.startOfDate = P, t.endOfDate = C, t.getDayofWeek = function (e) {
      var t = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"),
          o = new Date(e).getDay();
      return t[o]
    }, t.compareDate = function (e, t, o) {
      return e = e.filter(function (e) {
        return e.date >= t && e.date <= o
      })
    }, t.calurator = function () {
      if (t.cntDev = 0, t.cntUser = 0, t.division = 0, t.tempStatisticsList = [], angular.forEach(t.statisticsList, function (e) {
        e.date >= t.startOfDate && e.date <= t.endOfDate && (t.division = t.division + 1, t.tempStatisticsList.push(e), t.cntDev = Number(t.cntDev) + Number(e.data[0].count), t.cntUser = Number(t.cntUser) + Number(e.data[1].count), t.deviceBroadcastingAverage = Math.round(t.cntDev / t.division), t.activeUserAverage = Math.round(t.cntUser / t.division))
      }), t.tempStatisticsList.length < 8) for (var e = (7 - t.tempStatisticsList.length, t.tempStatisticsList[t.tempStatisticsList.length - 1].date), o = 1, a = t.tempStatisticsList.length; a < 7; a++) t.tempStatisticsList.push({
        date: c(new Date(e)).add(o, "days").format("YYYY/MM/DD"),
        data: [{
          item: "Device_Broadcasting_Count",
          date: c(new Date(e)).add(o, "days").format("YYYY/MM/DD"),
          count: "-"
        }, {
          item: "Active_User_Count",
          date: c(new Date(e)).add(o, "days").format("YYYY/MM/DD"),
          count: "-"
        }]
      }), o += 1
    }, t.caluratorEx = function (e, o) {
      if (t.cntDev = 0, t.cntUser = 0, t.division = 0, t.tempStatisticsList = [], angular.forEach(t.statisticsList, function (e) {
        e.date >= t.startOfDate && e.date <= t.endOfDate && (t.division = t.division + 1, t.tempStatisticsList.push(e), t.cntDev = Number(t.cntDev) + Number(e.data[0].count), t.cntUser = Number(t.cntUser) + Number(e.data[1].count), t.deviceBroadcastingAverage = Math.round(t.cntDev / t.division), t.activeUserAverage = Math.round(t.cntUser / t.division))
      }), t.tempStatisticsList.length < 8) {
        var a = 7 - t.tempStatisticsList.length;
        if (o == t.tempStatisticsList[t.tempStatisticsList.length - 1].date) {
          var n = t.tempStatisticsList[t.tempStatisticsList.length - 1].date;
          t.tempStatisticsListRev = [];
          for (var r = 0; r < a; r++) t.tempStatisticsListRev.push({
            date: c(new Date(e)).add(r, "days").format("YYYY/MM/DD"),
            data: [{
              item: "Device_Broadcasting_Count",
              date: c(new Date(e)).add(r, "days").format("YYYY/MM/DD"),
              count: "-"
            }, {
              item: "Active_User_Count",
              date: c(new Date(e)).add(r, "days").format("YYYY/MM/DD"),
              count: "-"
            }]
          });
          angular.forEach(t.tempStatisticsList, function (e) {
            t.tempStatisticsListRev.push(e)
          }), t.tempStatisticsList = [], t.tempStatisticsList = t.tempStatisticsListRev
        } else for (var n = t.tempStatisticsList[t.tempStatisticsList.length - 1].date, s = 1, r = t.tempStatisticsList.length; r < 7; r++) t.tempStatisticsList.push({
          date: c(new Date(n)).add(s, "days").format("YYYY/MM/DD"),
          data: [{
            item: "Device_Broadcasting_Count",
            date: c(new Date(n)).add(s, "days").format("YYYY/MM/DD"),
            count: "-"
          }, {
            item: "Active_User_Count",
            date: c(new Date(n)).add(s, "days").format("YYYY/MM/DD"),
            count: "-"
          }]
        }), s += 1;
        console.log("$scope.tempStatisticsList", t.tempStatisticsList)
      }
    }, t.caluratorlastweek = function (e, o) {
      t.cntDevLList = [], t.cntUserLList = [], t.cntDevL = 0, t.cntUserL = 0, t.divisionL = 0, angular.forEach(t.statisticsList, function (a) {
        a.date >= e && a.date <= o && (t.divisionL = t.divisionL + 1, t.cntDevL = Number(t.cntDevL) + Number(a.data[0].count), t.cntDevLList.push({
          date: a.data[0].date,
          count: a.data[0].count,
          cumulation: t.cntDevL
        }), t.cntUserL = Number(t.cntUserL) + Number(a.data[1].count), t.cntUserLList.push({
          date: a.data[1].date,
          count: a.data[1].count,
          cumulation: t.cntUserL
        }), t.deviceBroadcastingAverageL = Math.round(t.cntDevL / t.divisionL), t.activeUserAverageL = Math.round(t.cntUserL / t.divisionL))
      })
    }, t.caluratorMonth = function (e, o) {
      t.cntDevMList = [], t.cntUserMList = [], t.cntDevM = 0, t.cntUserM = 0, t.divisionM = 0, angular.forEach(t.statisticsList, function (a) {
        a.date >= e && a.date <= o && (t.divisionM = t.divisionM + 1, t.cntDevM = Number(t.cntDevM) + Number(a.data[0].count), t.cntDevMList.push({
          date: a.data[0].date,
          count: a.data[0].count,
          cumulation: t.cntDevM
        }), t.cntUserM = Number(t.cntUserM) + Number(a.data[1].count), t.cntUserMList.push({
          date: a.data[1].date,
          count: a.data[1].count,
          cumulation: t.cntUserM
        }), t.deviceBroadcastingAverageM = Math.round(t.cntDevM / t.divisionM), t.activeUserAverageM = Math.round(t.cntUserM / t.divisionM))
      })
    }, t.pickStartEndWeek = function (e) {
      if (angular.isDefined(t.weekdata)) {
        var o = c(e), a = o.clone().startOf("isoWeek").format("YYYY/MM/DD"),
            n = o.clone().endOf("isoWeek").format("YYYY/MM/DD");
        c().subtract(1, "d").startOf("month").format("YYYY/MM/DD"), c().subtract(1, "d").endOf("month").format("YYYY/MM/DD");
        0 == t.weekdata.length ? a >= t.selectedBoxlimtweekStart && t.weekdata.push({
          name: a + " ~ " + n,
          startOfDate: a,
          endOfDate: n
        }) : i("date")(new Date(e), "yyyy/MM/dd") > i("date")(new Date(t.weekdata[t.weekdata.length - 1].endOfDate), "yyyy/MM/dd") && a >= t.selectedBoxlimtweekStart && t.weekdata.push({
          name: a + " ~ " + n,
          startOfDate: a,
          endOfDate: n
        })
      }
    }, t.changeDate = function (e) {
      t.startOfDate = e.startOfDate, t.endOfDate = e.endOfDate;
      var o = c(new Date(e.startOfDate)).subtract(7, "d");
      t.lastweekStart = o.clone().startOf("isoWeek").format("YYYY/MM/DD"), t.lastweekEnd = o.clone().endOf("isoWeek").format("YYYY/MM/DD"), t.startOfMonth = c(new Date(e.startOfDate)).subtract(1, "d").subtract(1, "months").startOf("month").format("YYYY/MM/DD"), t.endOfMonth = c(new Date(e.startOfDate)).subtract(1, "d").subtract(1, "months").endOf("month").format("YYYY/MM/DD"), console.log("$scope.lastweekStart", t.lastweekStart), console.log("$scope.lastweekEnd", t.lastweekEnd), console.log("$scope.startOfMonth", t.startOfMonth), console.log("$scope.endOfMonth", t.endOfMonth), console.log("$scope.startOfDate", t.startOfDate), console.log("$scope.endOfDate", t.endOfDate), t.deviceBroadcastingAverageM = 0, t.activeUserAverageM = 0, t.deviceBroadcastingAverageL = 0, t.activeUserAverageL = 0, t.deviceBroadcastingAverage = 0, t.activeUserAverage = 0, t.caluratorEx(t.startOfDate, t.endOfDate), t.caluratorlastweek(t.lastweekStart, t.lastweekEnd), t.caluratorMonth(t.startOfMonth, t.endOfMonth)
    }, t.resetDate = function () {
      var e = c().subtract(1, "d"), o = e.clone().startOf("isoWeek").format("YYYY/MM/DD"),
          a = e.clone().endOf("isoWeek").format("YYYY/MM/DD");
      c().subtract(1, "d").startOf("month").format("YYYY/MM/DD"), c().subtract(1, "d").endOf("month").format("YYYY/MM/DD");
      t.startOfDate = o, t.endOfDate = a, t.weekdata.selected = t.weekdata[t.weekdata.length - 1], t.startOfDate = t.weekdata.selected.startOfDate, t.endOfDate = t.weekdata.selected.endOfDate, t.deviceBroadcastingAverage = 0, t.activeUserAverage = 0, t.caluratorEx(t.startOfDate, t.endOfDate)
    }, t.detailDevice = function (e, t) {
      var o = "";
      o = e ? "broad-merge-" + i("date")(new Date(t.date), "yyyyMMdd") : "userid-merge-" + i("date")(new Date(t.date), "yyyyMMdd"), a.getStatisticsCSVData(o, p)
    }, t.detailUser = function (e, t) {
      var o = "";
      o = e ? "broad-merge-" + i("date")(new Date(t.date), "yyyyMMdd") : "userid-merge-" + i("date")(new Date(t.date), "yyyyMMdd"), a.getStatisticsCSVData(o, f)
    }, t.statisticsDailyM = function (e, t) {
      r.open({
        template: "statisticsDailyMDialog", controller: ["$scope", function (o) {
          o.title = t, o.dailyM = e
        }], className: "ngdialog-theme-default custom-width"
      })
    }, t.download = function (e, o) {
      var n = "";
      n = e ? "broad-merge-" + i("date")(new Date(o.date), "yyyyMMdd") : "userid-merge-" + i("date")(new Date(o.date), "yyyyMMdd"), t.downloadFileName = n, a.getStatisticsCSVData(n, m)
    }, y.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window"], b.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "$filter"]
  }

  function n(e) {
    if (e) return angular.isNumber(e) ? e : e.indexOf("T") > 0 ? (e.indexOf("Z") == -1 && e.indexOf("+") == -1 && (e += "Z"), e) : e
  }

  angular.module("app.support").controller("StatisticsController", a).controller("RankingController", o).controller("DailyUserStatisticsController", t).controller("WithdrawReasonStatisticsController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout", "UserInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout", "UserInfoLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout", "UserInfoLoader"], t.$inject = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout", "UserInfoLoader"], o.$inejct = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout", "UserInfoLoader"], o.$inject = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout", "UserInfoLoader"], a.$inejct = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout", "UserInfoLoader"], a.$inject = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout", "UserInfoLoader"]
}(),function () {
  function e(e, t, o, a) {
    function n(t, a) {
      var n = o.dispatcherSvcUrl + "/user/api/getDailyUserStatistic?baseDt=" + t;
      return e.get(n)
    }

    function r(t, a) {
      var n = o.dispatcherSvcUrl + "/user/api/getDailyDeviceUser?baseDt=" + t;
      return e.get(n)
    }

    function s(t, a) {
      var n = o.dispatcherSvcUrl + "/user/api/getDailyDeviceBetweenCnt?startDt=" + t + "&endDt=" + a;
      return e.get(n)
    }

    function i(t, a) {
      var n = o.dispatcherSvcUrl + "/user/api/getDailyLguUserBetween?startDt=" + t + "&endDt=" + a;
      return e.get(n)
    }

    function c(t, a) {
      var n = o.dispatcherSvcUrl + "/user/api/getDailyDeviceBetweenUser?startDt=" + t + "&endDt=" + a;
      return e.get(n)
    }

    function l(t, a) {
      var n = o.dispatcherSvcUrl + "/user/api/getDailyDeviceBetweenDevice?startDt=" + t + "&endDt=" + a;
      return e.get(n)
    }

    function u(o, a) {
      var n = "server/LogAnalysisData.json";
      a = a || function () {
        t.messageErrorPopup("Error : Failure loading data")
      }, e.get(n).success(o).error(a)
    }

    function d(o, a, n) {
      var r = "server/Result/" + o + ".csv";
      n = n || function () {
        t.messageErrorPopup("Error : Failure loading data")
      }, e.get(r).success(a).error(n)
    }

    function g() {
      var t = "server/TemplateRankData.json";
      return e.get(t)
    }

    function p(o, a, n) {
      console.log("fileName :", o);
      var r = "server/TemplateRank/" + o;
      n = n || function () {
        t.messageErrorPopup("Error : Failure loading data")
      }, e.get(r).success(a).error(n)
    }

    function f(t) {
      console.log(t);
      var n = o.dispatcherSvcUrl + "/user/api/downloadDailyUserStatistic?baseDt=" + a("date")(t, "yyyyMMdd");
      return e.get(n, {
        dataType: "binary",
        processData: !1,
        accept: "application/zip",
        Encoding: "gzip",
        responseType: "arraybuffer"
      })
    }

    function m(t) {
      var a = o.dispatcherSvcUrl + "/user/api/withdrawReason/excel";
      return t && (a = "".concat(a, "?").concat(t)), e.get(a, {
        dataType: "binary",
        processData: !1,
        accept: "application/zip",
        Encoding: "gzip",
        responseType: "arraybuffer"
      })
    }

    function h(t) {
      var a = o.dispatcherSvcUrl + "/user/api/downloadTemplateRank?baseDt=" + t;
      return e.get(a, {dataType: "binary", processData: !1, responseType: "arraybuffer"})
    }

    function v() {
      var t = o.dispatcherSvcUrl + "/user/api/getTemplateRankFileList";
      return e.get(t)
    }

    this.getStatisticsData = u, this.getStatisticsCSVData = d, this.getRankingData = g, this.getRankingXLSXData = p, this.downloadDailyUserStatistic = f, this.downdloadWithdrawReasonStatistics = m, this.getDailyLguUserBetween = i, this.getDailyDeviceBetweenUser = c, this.getDailyDeviceBetweenDevice = l, this.getDailyDeviceBetweenCnt = s, this.getDailyDeviceUser = r, this.getDailyUserStatistic = n, this.downloadRanking = h, this.getRankingDataAPI = v
  }

  angular.module("app.support").service("StatisticsLoader", e), e.$inject = ["$http", "UserInfoLoader", "Config", "$filter"]
}(),function () {
  function e(e, t, o, a, n, r, s, i, c, l) {
    t.weekdata = [], t.selectedDate = moment().subtract(1, "d"), t.weekStart = t.selectedDate.clone().startOf("isoWeek").format("YYYYMMDD"), t.weekEnd = t.selectedDate.clone().endOf("isoWeek").format("YYYYMMDD"), t.getData = function (e, t) {
      e = moment(new Date(e)).format("YYYYMMDD"), t = moment(new Date(t)).format("YYYYMMDD"), l.getDailyLguUserBetween(e, t).then(function (e) {
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.getDailyDeviceBetweenCntThisWeek = function () {
      var e = moment(new Date(t.startOfDate)).format("YYYYMMDD"),
          n = moment(new Date(t.endOfDate)).format("YYYYMMDD");
      l.getDailyDeviceBetweenCnt(e, n).then(function (e) {
        t.cntDev = e.data.result.deviceTotCnt, t.cntUser = e.data.result.deviceUserTotCnt, t.deviceBroadcastingAverage = e.data.result.deviceAvgCnt, t.activeUserAverage = e.data.result.deviceUserAvgCnt
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.getDailyDeviceBetweenCntLastWeek = function () {
      var e = moment(new Date(t.lastweekStart)).format("YYYYMMDD"),
          n = moment(new Date(t.lastweekEnd)).format("YYYYMMDD");
      l.getDailyDeviceBetweenCnt(e, n).then(function (e) {
        t.cntDevL = e.data.result.deviceTotCnt, t.cntUserL = e.data.result.deviceUserTotCnt, t.deviceBroadcastingAverageL = e.data.result.deviceAvgCnt, t.activeUserAverageL = e.data.result.deviceUserAvgCnt
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.getDailyDeviceBetweenCntLastMonth = function () {
      var e = moment(new Date(t.startOfMonth)).format("YYYYMMDD"),
          n = moment(new Date(t.endOfMonth)).format("YYYYMMDD");
      l.getDailyDeviceBetweenCnt(e, n).then(function (e) {
        t.cntDevM = e.data.result.deviceTotCnt, t.cntUserM = e.data.result.deviceUserTotCnt, t.deviceBroadcastingAverageM = e.data.result.deviceAvgCnt, t.activeUserAverageM = e.data.result.deviceUserAvgCnt
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.getDailyDeviceBetweenUser = function () {
      var e = moment(new Date(t.startOfDate)).format("YYYYMMDD");
      l.getDailyDeviceBetweenUser(e, e).then(function (e) {
        t.MondayUserCnt = e.data.result.length, t.MondayUser = e.data.result
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      });
      var n = moment(new Date(t.startOfDate)).add(1, "d").format("YYYYMMDD");
      l.getDailyDeviceBetweenUser(n, n).then(function (e) {
        t.TuesdayUserCnt = e.data.result.length, t.TuesdayUser = e.data.result
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      });
      var r = moment(new Date(t.startOfDate)).add(2, "d").format("YYYYMMDD");
      l.getDailyDeviceBetweenUser(r, r).then(function (e) {
        t.WednesdayUserCnt = e.data.result.length, t.WednesdayUser = e.data.result
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      });
      var s = moment(new Date(t.startOfDate)).add(3, "d").format("YYYYMMDD");
      l.getDailyDeviceBetweenUser(s, s).then(function (e) {
        t.ThursdayUserCnt = e.data.result.length, t.ThursdayUser = e.data.result
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      });
      var i = moment(new Date(t.startOfDate)).add(4, "d").format("YYYYMMDD");
      l.getDailyDeviceBetweenUser(i, i).then(function (e) {
        t.FridayUserCnt = e.data.result.length, t.FridayUser = e.data.result
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      });
      var c = moment(new Date(t.startOfDate)).add(5, "d").format("YYYYMMDD");
      l.getDailyDeviceBetweenUser(c, c).then(function (e) {
        t.SaturdayUserCnt = e.data.result.length, t.SaturdayUser = e.data.result
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      });
      var u = moment(new Date(t.startOfDate)).add(6, "d").format("YYYYMMDD");
      l.getDailyDeviceBetweenUser(u, u).then(function (e) {
        t.SundayUserCnt = e.data.result.length, t.SundayUser = e.data.result
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.removeDumplicateValue = function (e) {
      var t = [];
      return angular.forEach(e, function (e, o) {
        var a = !1;
        angular.forEach(t, function (t, o) {
          angular.equals(e.userId, t.userId) && (a = !0)
        }), 0 == a && "" != e.userId && t.push(e)
      }), t
    }, t.getDailyDeviceBetweenDevice = function () {
      var e = moment(new Date(t.startOfDate)).format("YYYYMMDD");
      l.getDailyDeviceUser(e, e).then(function (e) {
        t.MondayDeviceCnt = e.data.result.length, t.MondayDevice = e.data.result, t.MondayDeviceFull = [], t.MondayDeviceCntCast = 0, t.MondayDeviceDC = 0, t.MondayDevice.length > 0 && (t.MondayDevice.forEach(function (e) {
          "fullscreen" !== e.type && t.MondayDeviceFull.push(e)
        }), t.MondayDeviceCntCast = t.MondayDeviceFull.length, t.MondayDeviceD = t.removeDumplicateValue(t.MondayDeviceFull), t.MondayDeviceDC = t.MondayDeviceD.length, t.MondayDeviceU = t.removeDumplicateValue(t.MondayDevice))
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      });
      var n = moment(new Date(t.startOfDate)).add(1, "d").format("YYYYMMDD");
      l.getDailyDeviceUser(n, n).then(function (e) {
        t.TuesdayDeviceCnt = e.data.result.length, t.TuesdayDevice = e.data.result, t.TuesdayDeviceFull = [], t.TuesdayDeviceCntCast = 0, t.TuesdayDeviceDC = 0, t.TuesdayDevice.length > 0 && (t.TuesdayDevice.forEach(function (e) {
          "fullscreen" !== e.type && t.TuesdayDeviceFull.push(e)
        }), t.TuesdayDeviceCntCast = t.TuesdayDeviceFull.length, t.TuesdayDeviceD = t.removeDumplicateValue(t.TuesdayDeviceFull), t.TuesdayDeviceDC = t.TuesdayDeviceD.length, t.TuesdayDeviceU = t.removeDumplicateValue(t.TuesdayDevice))
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      });
      var r = moment(new Date(t.startOfDate)).add(2, "d").format("YYYYMMDD");
      l.getDailyDeviceUser(r, r).then(function (e) {
        t.WednesdayDeviceCnt = e.data.result.length, t.WednesdayDevice = e.data.result, t.WednesdayDeviceCntCast = 0, t.WednesdayDeviceDC = 0, t.WednesdayDeviceFull = [], t.WednesdayDevice.length > 0 && (t.WednesdayDevice.forEach(function (e) {
          "fullscreen" !== e.type && t.WednesdayDeviceFull.push(e)
        }), t.WednesdayDeviceCntCast = t.WednesdayDeviceFull.length, t.WednesdayDeviceD = t.removeDumplicateValue(t.WednesdayDeviceFull), t.WednesdayDeviceDC = t.WednesdayDeviceD.length, t.WednesdayDeviceU = t.removeDumplicateValue(t.WednesdayDevice))
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      });
      var s = moment(new Date(t.startOfDate)).add(3, "d").format("YYYYMMDD");
      l.getDailyDeviceUser(s, s).then(function (e) {
        t.ThursdayDeviceCnt = e.data.result.length, t.ThursdayDevice = e.data.result, t.ThursdayDeviceFull = [], t.ThursdayDeviceCntCast = 0, t.ThursdayDeviceDC = 0, t.ThursdayDevice.length > 0 && (t.ThursdayDevice.forEach(function (e) {
          "fullscreen" !== e.type && t.ThursdayDeviceFull.push(e)
        }), t.ThursdayDeviceCntCast = t.ThursdayDeviceFull.length, t.ThursdayDeviceD = t.removeDumplicateValue(t.ThursdayDeviceFull), t.ThursdayDeviceDC = t.ThursdayDeviceD.length, t.ThursdayDeviceU = t.removeDumplicateValue(t.ThursdayDevice))
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      });
      var i = moment(new Date(t.startOfDate)).add(4, "d").format("YYYYMMDD");
      l.getDailyDeviceUser(i, i).then(function (e) {
        t.FridayDeviceCnt = e.data.result.length, t.FridayDevice = e.data.result, t.FridayDeviceCntCast = 0, t.FridayDeviceDC = 0, t.FridayDeviceFull = [], t.FridayDevice.length > 0 && (t.FridayDevice.forEach(function (e) {
          "fullscreen" !== e.type && t.FridayDeviceFull.push(e)
        }), t.FridayDeviceCntCast = t.FridayDeviceFull.length, t.FridayDeviceD = t.removeDumplicateValue(t.FridayDeviceFull), t.FridayDeviceDC = t.FridayDeviceD.length, t.FridayDeviceU = t.removeDumplicateValue(t.FridayDevice))
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      });
      var c = moment(new Date(t.startOfDate)).add(5, "d").format("YYYYMMDD");
      l.getDailyDeviceUser(c, c).then(function (e) {
        t.SaturdayDeviceCnt = e.data.result.length, t.SaturdayDevice = e.data.result, t.SaturdayDeviceCntCast = 0, t.SaturdayDeviceDC = 0, t.SaturdayDeviceFull = [], t.SaturdayDevice.length > 0 && (t.SaturdayDevice.forEach(function (e) {
          "fullscreen" !== e.type && t.SaturdayDeviceFull.push(e)
        }), t.SaturdayDeviceCntCast = t.SaturdayDeviceFull.length, t.SaturdayDeviceD = t.removeDumplicateValue(t.SaturdayDeviceFull), t.SaturdayDeviceDC = t.SaturdayDeviceD.length, t.SaturdayDeviceU = t.removeDumplicateValue(t.SaturdayDevice));
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      });
      var u = moment(new Date(t.startOfDate)).add(6, "d").format("YYYYMMDD");
      l.getDailyDeviceUser(u, u).then(function (e) {
        t.SundayDeviceCnt = e.data.result.length, t.SundayDevice = e.data.result, t.SundayDeviceCntCast = 0, t.SundayDeviceDC = 0, t.SundayDeviceFull = [], t.SundayDevice.length > 0 && (t.SundayDevice.forEach(function (e) {
          "fullscreen" !== e.type && t.SundayDeviceFull.push(e)
        }), t.SundayDeviceCntCast = t.SundayDeviceFull.length, t.SundayDeviceD = t.removeDumplicateValue(t.SundayDeviceFull), t.SundayDeviceDC = t.SundayDeviceD.length, t.SundayDeviceU = t.removeDumplicateValue(t.SundayDevice))
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    };
    var u = moment(new Date("2020-09-28"));
    t.weekdata = [];
    for (var d = 0; u < t.selectedDate; d++) t.weekdata.push({
      name: moment(new Date(u)).format("YYYY/MM/DD") + " ~ " + moment(new Date(u)).add(6, "d").format("YYYY/MM/DD"),
      startOfDate: moment(new Date(u)).format("YYYY/MM/DD"),
      endOfDate: moment(new Date(u)).add(6, "d").format("YYYY/MM/DD")
    }), u = moment(new Date(u)).add(7, "d");
    t.weekdata.selected = t.weekdata[t.weekdata.length - 1], t.changeDate = function (e) {
      t.startOfDate = e.startOfDate, t.endOfDate = e.endOfDate;
      var o = moment(new Date(e.startOfDate)).subtract(7, "d");
      t.lastweekStart = o.clone().startOf("isoWeek").format("YYYY/MM/DD"), t.lastweekEnd = o.clone().endOf("isoWeek").format("YYYY/MM/DD"), t.startOfMonth = moment(new Date(e.startOfDate)).subtract(1, "d").subtract(1, "months").startOf("month").format("YYYY/MM/DD"), t.endOfMonth = moment(new Date(e.startOfDate)).subtract(1, "d").subtract(1, "months").endOf("month").format("YYYY/MM/DD"), t.getData(t.startOfDate, t.endOfDate), t.getDailyDeviceBetweenCntThisWeek(), t.getDailyDeviceBetweenCntLastWeek(), t.getDailyDeviceBetweenCntLastMonth(), t.getDailyDeviceBetweenUser(), t.getDailyDeviceBetweenDevice()
    }, t.changeDate(t.weekdata.selected), t.getData(t.startOfDate, t.endOfDate), t.getDailyDeviceBetweenCntThisWeek(), t.getDailyDeviceBetweenCntLastWeek(), t.getDailyDeviceBetweenCntLastMonth(), t.getDailyDeviceBetweenUser(), t.getDailyDeviceBetweenDevice(), t.getRepeatDate = function (e, t) {
      return moment(new Date(e)).add(t, "d").format("YYYY/MM/DD")
    }, t.detailDevice = function (e) {
      n.open({
        template: "statisticsDeviceDetailDialog", controller: ["$scope", function (t) {
          function o(e) {
            a.user = e.result.contents[0], a.popupProfileIndex = 2, a.popupProfile(e.result.contents[0])
          }

          t.detail = e, t.goUserDetail = function (e) {
            var t = {
              id: e,
              page: 1,
              s_endDate: "",
              s_membershipCode: "",
              s_startDate: "",
              s_statusCode: ""
            };
            a.getNewUserProfile(t, o)
          }
        }], className: "ngdialog-theme-default custom-width"
      })
    }, t.detailUser = function (e) {
      n.open({
        template: "statisticsUserDetailDialog", controller: ["$scope", function (t) {
          function o(e) {
            a.user = e.result.contents[0], a.popupProfileIndex = 2, a.popupProfile(e.result.contents[0])
          }

          t.detail = e, t.goUserDetail = function (e) {
            var t = {
              id: e,
              page: 1,
              s_endDate: "",
              s_membershipCode: "",
              s_startDate: "",
              s_statusCode: ""
            };
            a.getNewUserProfile(t, o)
          }
        }], className: "ngdialog-theme-default custom-width"
      })
    }, t.download = function (e, t, o) {
      var a = t + "_" + moment(new Date(e)).format("YYYYMMDD"), n = document.createElement("a"),
          r = Papa.unparse(o);
      if (window.navigator.msSaveOrOpenBlob) {
        var s = new Blob([decodeURIComponent(encodeURI(r))], {type: "text/csv;charset=utf-8;"});
        navigator.msSaveBlob(s, a + ".csv")
      } else n.href = "data:attachment/csv;charset=utf-8,\ufeff" + encodeURI(r), n.target = "_blank", n.download = a + ".csv", document.body.appendChild(n), n.click()
    }
  }

  angular.module("app.support").controller("StatisticsApiController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "StatisticsLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "StatisticsLoader"]
}(),function () {
  function e(e, o, a, n, r, s, i, c, l, u, d, g) {
    function p() {
      P.basepath = e.basepath, o.loading = !0, n.getStatisticsData(f)
    }

    function f(e) {
      console.log("statistics", e), o.statisticsList = e, o.loading = !1, angular.forEach(e, function (e, t) {
        o.pickStartEndWeek(new Date(e.date))
      }), o.weekdata.selected = o.weekdata[o.weekdata.length - 1], o.startOfDate = o.weekdata.selected.startOfDate, o.endOfDate = o.weekdata.selected.endOfDate, o.deviceBroadcastingAverage = 0, o.activeUserAverage = 0;
      var t = c(new Date(o.startOfDate)).subtract(7, "d");
      o.lastweekStart = t.clone().startOf("isoWeek").format("YYYY/MM/DD"), o.lastweekEnd = t.clone().endOf("isoWeek").format("YYYY/MM/DD"), o.caluratorEx(o.startOfDate, o.endOfDate), o.caluratorlastweek(o.lastweekStart, o.lastweekEnd), o.caluratorMonth(o.startOfMonth, o.endOfMonth)
    }

    function m(e) {
      r.open({
        template: "statisticsDeviceDetailDialog", controller: ["$scope", function (t) {
          t.detail = y(e)
        }], className: "ngdialog-theme-default custom-width"
      })
    }

    function h(e) {
      r.open({
        template: "statisticsUserDetailDialog", controller: ["$scope", function (t) {
          function o(e) {
            console.log("RESULT::", e), u.user = e.result.contents[0], r.open({
              template: "userProfileDetailDialog",
              controller: D,
              className: "ngdialog-theme-default custom-width"
            })
          }

          t.detail = y(e), t.goUserDetail = function (e) {
            u.getUserProfile("userid", e, 1, o)
          }
        }], className: "ngdialog-theme-default custom-width"
      })
    }

    function v(e) {
      var t = document.createElement("a"), a = b(e), n = Papa.unparse(a);
      if (window.navigator.msSaveOrOpenBlob) {
        var r = new Blob([decodeURIComponent(encodeURI(n))], {type: "text/csv;charset=utf-8;"});
        navigator.msSaveBlob(r, o.downloadFileName + ".csv")
      } else t.href = "data:attachment/csv;charset=utf-8," + encodeURI(n), t.target = "_blank", t.download = o.downloadFileName + ".csv", document.body.appendChild(t), t.click()
    }

    function y(e) {
      for (var t = e.split(/\r\n|\n/), o = t[0].split(","), a = [], n = 0; n < t.length; n++) {
        var r = t[n].split(",");
        if (r.length == o.length) for (var s = 0; s < o.length; s++) "" != r[s] && a.push({data: r[s]})
      }
      return a
    }

    function b(e) {
      for (var t = e.split(/\r\n|\n/), o = t[0].split(","), a = [], n = 0; n < t.length; n++) {
        var r = t[n].split(",");
        if (r.length == o.length) {
          for (var s = [], i = 0; i < o.length; i++) s.push(r[i]);
          a.push(s)
        }
      }
      return a
    }

    function D(e, o, a, n, r, s, i, l, u) {
      function d() {
        function u(e) {
          n.getDevices(e, p)
        }

        function p(e) {
          o.devices = e.result.devices, console.log("DEVICES:::", o.devices);
          var a = 0;
          0 == o.devices.length && (o.devicesList.user.castingCnt = "-"), o.devices.forEach(function (e) {
            if (angular.isDefined(e.state.heartbeat)) {
              var n = i("date")(t(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                  r = i("date")(t(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
              n > r ? (o.lastRunning.push(n), c().diff(n) <= 6e4 && o.lastRunningOne.push(n)) : (o.lastRunning.push(r), c().diff(r) <= 6e4 && o.lastRunningOne.push(r))
            }
            angular.isDefined(e.state.physicalDevice) && (a += 1), 0 == a ? o.devicesList.user.castingCnt = "-" : o.devicesList.user.castingCnt = a
          }), o.lastRunning.length > 0 && (o.desclastRunning = i("orderBy")(o.lastRunning, "", !0)), console.log("desclastRunning ::::", o.desclastRunning)
        }

        function f(e) {
          s.getStoreProfile("userid", e, 1, m)
        }

        function m(e) {
          console.log("STORE RESULT::", e.contents), o.devicesList.storeProfile = e.contents, o.devicesList.pageInfo = e.pageInfo, o.devicesList.totalItems = o.devicesList.pageInfo.totalResourceCount, o.devicesList.currentPage = o.devicesList.pageInfo.currentPage, o.devicesList.itemsPerPage = 16, e.contents.length > 0 && e.contents[0].productCategories.length > 0 && (console.log("productCategories::", e.contents[0].productCategories[0].id), o.productCategoriesId = e.contents[0].productCategories[0].id, l(function () {
            var e = o.activeResources.findIndex(function (e) {
              return e.id === o.productCategoriesId
            });
            o.selectedProductCategory = o.activeResources[e], console.log("$scope.selectedProductCategory", o.selectedProductCategory)
          }, 1500))
        }

        function h(e) {
          console.log("BOARD RESULT::", e.result.contents), o.boardsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? o.boards = e.result.contents : o.boards = o.boards.concat(e.result.contents), o.devicesList.boardsPageInfo = e.result.pageInfo
        }

        function v(e) {
          n.listBoards(e, o.userBoardsPage, h)
        }

        function y(e) {
          o.slideshowsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? o.slideshows = e.result.contents : o.slideshows = o.slideshows.concat(e.result.contents), o.devicesList.slideshowsPageInfo = e.result.pageInfo
        }

        function b(e) {
          n.listSlideshows(e, o.userSlideshowsPage, y)
        }

        g.basepath = e.basepath, console.log("UserInfoLoader.user:::", n.user), n.user.created = t(n.user.created), n.user.lastModified = t(n.user.lastModified), o.devicesList.user = n.user, u(o.devicesList.user.id), v(o.devicesList.user.id), b(o.devicesList.user.id), f(o.devicesList.user.id), o.currentDate = c().format("YYYY/MM/DD HH:mm:ss"), o.activeResources = [];
        for (var D = 1; D <= 2; D++) {
          var P = "en";
          n.getUserProductCategories(P, D).then(function (e) {
            e.data.result.resources.forEach(function (e) {
              o.activeResources.push(e)
            })
          }, function (e, t) {
            401 === t && a.go("page.login"), alert("Failure finding device")
          });
          var P = "ko";
          n.getUserProductCategories(P, D).then(function (e) {
            e.data.result.resources.forEach(function (e) {
              o.activeResources.push(e)
            })
          }, function (e, t) {
            401 === t && a.go("page.login"), alert("Failure finding device")
          })
        }
        console.log("$scope.activeResources", o.activeResources), o.checkRunning = function (e) {
          if (angular.isDefined(e.state.heartbeat)) {
            var o = i("date")(t(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                a = i("date")(t(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
            return o > a ? c().diff(o) > 6e4 : c().diff(a) > 6e4
          }
          if (angular.isDefined(e.state.displaySurface.deviceModel)) {
            if (angular.isDefined(e.state.displaySurface.deviceModel.modifiedTimestamp)) {
              var a = i("date")(t(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
              return c().diff(a) > 6e4
            }
            return !0
          }
          return !0
        }, o.goStoreDetail = function (e) {
          r.open({
            template: "storeProfileDetailDialog",
            controller: ["$scope", "$timeout", function (t, o) {
              t.storeProfile = e
            }],
            className: "ngdialog-theme-default custom-width"
          })
        }, o.loadMoreBoard = function () {
          16 * (o.userBoardsPage - 1) + o.devicesList.boardsPageInfo.currentResourceCount < o.devicesList.boardsPageInfo.totalResourceCount && (o.userBoardsPage = o.userBoardsPage + 1, n.listBoards(o.devicesList.user.id, o.userBoardsPage, h))
        }, o.loadMoreSlideshow = function () {
          16 * (o.userSlideshowsPage - 1) + o.devicesList.slideshowsPageInfo.currentResourceCount < o.devicesList.slideshowsPageInfo.totalResourceCount && (o.userSlideshowsPage = o.userSlideshowsPage + 1, n.listSlideshows(o.devicesList.user.id, o.userSlideshowsPage, y))
        }, o.isEndBoard = function () {
          return !(o.devicesList.boardsPageInfo && 16 * (o.userBoardsPage - 1) + o.devicesList.boardsPageInfo.currentResourceCount < o.devicesList.boardsPageInfo.totalResourceCount)
        }, o.isEndSlideshow = function () {
          return !(o.devicesList.slideshowsPageInfo && 16 * (o.userSlideshowsPage - 1) + o.devicesList.slideshowsPageInfo.currentResourceCount < o.devicesList.slideshowsPageInfo.totalResourceCount)
        }, o.goDeviceDetail = function (e) {
          console.log("before", e), n.selectedDevice = e, r.open({
            template: "userDeviceDetailDialog",
            controller: w,
            className: "ngdialog-theme-default custom-width"
          })
        }, o.goBoardDetail = function (e) {
          r.open({
            template: "boardDetailDialog",
            controller: ["$scope", "$timeout", function (t, o) {
              function a(e) {
                console.log("@@@::", e.result.resources), t.resources = e.result.resources
              }

              console.log("BOARD:::", e), t.board = e, t.resources = null, t.getAuthorizedLocation = function (e) {
                return n.getAuthorizedLocation(e)
              }, t.getNonAuthorizedLocation = function (e) {
                return n.getNonAuthorizedLocation(e)
              }, t.openurl = function (e) {
                window.open(t.getAuthorizedLocation(e), "_blank")
              }, t.getUserBoardsDetails = function (e) {
                return n.getBoardsDetails(e, a)
              }, t.getUserBoardsDetails(t.board.id)
            }],
            className: "ngdialog-theme-default custom-width"
          })
        }, o.goSlideshowDetail = function (e) {
          r.open({
            template: "slideshowDetailDialog",
            controller: ["$scope", "$timeout", function (t, o) {
              t.slideshow = e, t.getAuthorizedLocation = function (e) {
                return n.getAuthorizedLocation(e)
              }, t.getNonAuthorizedLocation = function (e) {
                return n.getNonAuthorizedLocation(e)
              }, t.openurl = function (e) {
                window.open(t.getAuthorizedLocation(e), "_blank")
              }
            }],
            className: "ngdialog-theme-default custom-width"
          })
        }, o.getAuthorizedLocation = function (e) {
          return n.getAuthorizedLocation(e)
        }, o.getNonAuthorizedLocation = function (e) {
          return n.getNonAuthorizedLocation(e)
        }, o.getLastTimeDeviceConnected = function (e, o) {
          var a = i("date")(t(e), "yyyy/MM/dd HH:mm:ss"),
              n = i("date")(t(o), "yyyy/MM/dd HH:mm:ss");
          return a > n ? a : n
        }, o.getDeviceType = function (e) {
          return "showit-virtual-cast" == e ? "Full Screen Mode" : "Device"
        }, o.removeDevice = function (e) {
          console.log("deviceid", e), o.deviceid = e;
          var t = r.openConfirm({
            template: '<p>Are you sure you want to remove device </p><p>id {{deviceid}}  ?</p><div class="row"><div class="col-md-3 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes</button></div><div class="col-md-3 text-center"><button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No</button></div><div class="col-md-3 text-center"></div></div>',
            plain: !0,
            className: "ngdialog-theme-default",
            scope: o
          });
          t.then(function (t) {
            console.log("resolved:" + t), n.removeDevice(e).then(function (e) {
              console.log("items", e), d(), u(o.devicesList.user.id)
            }, function (e, t) {
              401 === t && a.go("page.login"), alert("Failure finding device")
            })
          }, function (e) {
            console.log("rejected:" + e)
          })
        }
      }

      var g = this;
      o.userBoardsPage = 1, o.userSlideshowsPage = 1, o.devicesList = {}, o.oneAtATime = !0, o.status = {isFirstOpen: !0}, o.lastRunning = [], o.lastRunningOne = [], o.desclastRunning = [], d(), o.groupCheck = u.localStorage.getItem("ngStorage-groups").indexOf("showit-superuser"), o.getAuthorizedLocation = function (e) {
        return n.getAuthorizedLocation(e)
      }, o.getNonAuthorizedLocation = function (e) {
        return n.getNonAuthorizedLocation(e)
      }, o.openurl = function (e) {
        window.open(o.getAuthorizedLocation(e), "_blank")
      }
    }

    function w(e, o, a, n, r) {
      function s() {
        function a() {
          var e = n.selectedDevice;
          console.log("after", e), o.deviceDetailText = e;
          var t = e.ownerId;
          n.getUserProfile("userid", t, 1, s)
        }

        function s(e) {
          o.device.user = e.result[0]
        }

        i.basepath = e.basepath, a(), o.getAuthorizedLocation = function (e) {
          return n.getAuthorizedLocation(e)
        }, o.getNonAuthorizedLocation = function (e) {
          return n.getNonAuthorizedLocation(e)
        }, o.openurl = function (e) {
          window.open(o.getAuthorizedLocation(e), "_blank")
        }, o.getLastTimeDeviceConnected = function () {
          if (angular.isDefined(o.deviceDetailText.state.heartbeat)) {
            var e = r("date")(t(o.deviceDetailText.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                a = r("date")(t(o.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
            return e > a ? e : a
          }
          return r("date")(t(o.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss")
        }
      }

      var i = this;
      o.device = {}, s()
    }

    var P = this;
    o.weekdata = [], p();
    var C = c().subtract(1, "d"), S = C.clone().startOf("isoWeek").format("YYYY/MM/DD"),
        A = C.clone().endOf("isoWeek").format("YYYY/MM/DD"), L = c().subtract(7, "d"),
        I = L.clone().startOf("isoWeek").format("YYYY/MM/DD"),
        M = L.clone().endOf("isoWeek").format("YYYY/MM/DD"),
        U = c().subtract(1, "d").subtract(1, "months").startOf("month").format("YYYY/MM/DD"),
        k = c().subtract(1, "d").subtract(1, "months").endOf("month").format("YYYY/MM/DD"),
        $ = c().subtract(168, "d"), R = $.clone().startOf("isoWeek").format("YYYY/MM/DD"),
        E = $.clone().endOf("isoWeek").format("YYYY/MM/DD");
    o.selectedBoxlimtweekStart = R, o.selectedBoxlimtweekEnd = E, o.startOfMonth = U, o.endOfMonth = k, o.lastweekStart = I, o.lastweekEnd = M, o.startOfDate = S, o.endOfDate = A, o.getDayofWeek = function (e) {
      var t = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"),
          o = new Date(e).getDay();
      return t[o]
    }, o.compareDate = function (e, t, o) {
      return e = e.filter(function (e) {
        return e.date >= t && e.date <= o
      })
    }, o.calurator = function () {
      if (o.cntDev = 0, o.cntUser = 0, o.division = 0, o.tempStatisticsList = [], angular.forEach(o.statisticsList, function (e) {
        e.date >= o.startOfDate && e.date <= o.endOfDate && (o.division = o.division + 1, o.tempStatisticsList.push(e), o.cntDev = Number(o.cntDev) + Number(e.data[0].count), o.cntUser = Number(o.cntUser) + Number(e.data[1].count), o.deviceBroadcastingAverage = Math.round(o.cntDev / o.division), o.activeUserAverage = Math.round(o.cntUser / o.division))
      }), o.tempStatisticsList.length < 8) for (var e = (7 - o.tempStatisticsList.length, o.tempStatisticsList[o.tempStatisticsList.length - 1].date), t = 1, a = o.tempStatisticsList.length; a < 7; a++) o.tempStatisticsList.push({
        date: c(new Date(e)).add(t, "days").format("YYYY/MM/DD"),
        data: [{
          item: "Device_Broadcasting_Count",
          date: c(new Date(e)).add(t, "days").format("YYYY/MM/DD"),
          count: "-"
        }, {
          item: "Active_User_Count",
          date: c(new Date(e)).add(t, "days").format("YYYY/MM/DD"),
          count: "-"
        }]
      }), t += 1
    }, o.nestedCall = function (e) {
      o.tempUsersC = [];
      var t = g.defer(), a = [];
      return console.log("urls", e), angular.forEach(e, function (e) {
        a.push(s.get(e.url))
      }), g.all(a).then(function (e) {
        o.cvsName = "CSV", console.log("results::", e), t.resolve(JSON.stringify(e))
      }, function (e) {
        t.reject(e), o.stop = !1
      }, function (e) {
        console.log("update::", e), t.update(e)
      }), t.promise
    }, o.getUserSearchDevices = function (e, t) {
      u.fullDevices(e).then(function (e) {
        console.log("devices result", e);
        var a = 0;
        e.data.result.devices.forEach(function (e) {
          angular.isDefined(e.state.physicalDevice) && (console.log("device", e), a += 1)
        }), 0 == a ? o.itemsdetail[t].castingCnt = "-" : o.itemsdetail[t].castingCnt = a
      }, function (e, t) {
        401 === t && a.go("page.login"), alert("Failure finding device")
      })
    }, o.caluratorEx = function (e, t) {
      function a(e) {
        o.itemsdetail = y(e), o.itemsdetail.forEach(function (e, t) {
          var a = d.dispatcherSvcUrl + "/device/api/listdevices?userid=" + e.data;
          o.tempUrl.push({url: a})
        }), l(function () {
          o.nestedCall(o.tempUrl)
        }, 1e4)
      }

      o.cntDev = 0, o.cntUser = 0, o.division = 0, o.tempStatisticsList = [], o.itemsdetail = [], o.tempUrl = [], angular.forEach(o.statisticsList, function (e) {
        if (e.date >= o.startOfDate && e.date <= o.endOfDate) {
          o.division = o.division + 1;
          var t = "userid-merge-" + i("date")(new Date(e.date), "yyyyMMdd");
          n.getStatisticsCSVData(t, a)
        }
      })
    }, o.caluratorlastweek = function (e, t) {
      o.cntDevLList = [], o.cntUserLList = [], o.cntDevL = 0, o.cntUserL = 0, o.divisionL = 0, angular.forEach(o.statisticsList, function (a) {
        a.date >= e && a.date <= t && (o.divisionL = o.divisionL + 1, o.cntDevL = Number(o.cntDevL) + Number(a.data[0].count), o.cntDevLList.push({
          date: a.data[0].date,
          count: a.data[0].count,
          cumulation: o.cntDevL
        }), o.cntUserL = Number(o.cntUserL) + Number(a.data[1].count), o.cntUserLList.push({
          date: a.data[1].date,
          count: a.data[1].count,
          cumulation: o.cntUserL
        }), o.deviceBroadcastingAverageL = Math.round(o.cntDevL / o.divisionL), o.activeUserAverageL = Math.round(o.cntUserL / o.divisionL))
      })
    }, o.caluratorMonth = function (e, t) {
      o.cntDevMList = [], o.cntUserMList = [], o.cntDevM = 0, o.cntUserM = 0, o.divisionM = 0, angular.forEach(o.statisticsList, function (a) {
        a.date >= e && a.date <= t && (o.divisionM = o.divisionM + 1, o.cntDevM = Number(o.cntDevM) + Number(a.data[0].count), o.cntDevMList.push({
          date: a.data[0].date,
          count: a.data[0].count,
          cumulation: o.cntDevM
        }), o.cntUserM = Number(o.cntUserM) + Number(a.data[1].count), o.cntUserMList.push({
          date: a.data[1].date,
          count: a.data[1].count,
          cumulation: o.cntUserM
        }), o.deviceBroadcastingAverageM = Math.round(o.cntDevM / o.divisionM), o.activeUserAverageM = Math.round(o.cntUserM / o.divisionM))
      })
    }, o.pickStartEndWeek = function (e) {
      if (angular.isDefined(o.weekdata)) {
        var t = c(e), a = t.clone().startOf("isoWeek").format("YYYY/MM/DD"),
            n = t.clone().endOf("isoWeek").format("YYYY/MM/DD");
        c().subtract(1, "d").startOf("month").format("YYYY/MM/DD"), c().subtract(1, "d").endOf("month").format("YYYY/MM/DD");
        0 == o.weekdata.length ? a >= o.selectedBoxlimtweekStart && o.weekdata.push({
          name: a + " ~ " + n,
          startOfDate: a,
          endOfDate: n
        }) : i("date")(new Date(e), "yyyy/MM/dd") > i("date")(new Date(o.weekdata[o.weekdata.length - 1].endOfDate), "yyyy/MM/dd") && a >= o.selectedBoxlimtweekStart && o.weekdata.push({
          name: a + " ~ " + n,
          startOfDate: a,
          endOfDate: n
        })
      }
    }, o.changeDate = function (e) {
      o.startOfDate = e.startOfDate, o.endOfDate = e.endOfDate;
      var t = c(new Date(e.startOfDate)).subtract(7, "d");
      o.lastweekStart = t.clone().startOf("isoWeek").format("YYYY/MM/DD"), o.lastweekEnd = t.clone().endOf("isoWeek").format("YYYY/MM/DD"), o.startOfMonth = c(new Date(e.startOfDate)).subtract(1, "d").subtract(1, "months").startOf("month").format("YYYY/MM/DD"), o.endOfMonth = c(new Date(e.startOfDate)).subtract(1, "d").subtract(1, "months").endOf("month").format("YYYY/MM/DD"), console.log("$scope.lastweekStart", o.lastweekStart), console.log("$scope.lastweekEnd", o.lastweekEnd), console.log("$scope.startOfMonth", o.startOfMonth), console.log("$scope.endOfMonth", o.endOfMonth), console.log("$scope.startOfDate", o.startOfDate), console.log("$scope.endOfDate", o.endOfDate), o.deviceBroadcastingAverageM = 0, o.activeUserAverageM = 0, o.deviceBroadcastingAverageL = 0, o.activeUserAverageL = 0, o.deviceBroadcastingAverage = 0, o.activeUserAverage = 0, o.caluratorEx(o.startOfDate, o.endOfDate), o.caluratorlastweek(o.lastweekStart, o.lastweekEnd), o.caluratorMonth(o.startOfMonth, o.endOfMonth)
    }, o.resetDate = function () {
      var e = c().subtract(1, "d"), t = e.clone().startOf("isoWeek").format("YYYY/MM/DD"),
          a = e.clone().endOf("isoWeek").format("YYYY/MM/DD");
      c().subtract(1, "d").startOf("month").format("YYYY/MM/DD"), c().subtract(1, "d").endOf("month").format("YYYY/MM/DD");
      o.startOfDate = t, o.endOfDate = a, o.weekdata.selected = o.weekdata[o.weekdata.length - 1], o.startOfDate = o.weekdata.selected.startOfDate, o.endOfDate = o.weekdata.selected.endOfDate, o.deviceBroadcastingAverage = 0, o.activeUserAverage = 0, o.caluratorEx(o.startOfDate, o.endOfDate)
    }, o.detailDevice = function (e, t) {
      var o = "";
      o = e ? "broad-merge-" + i("date")(new Date(t.date), "yyyyMMdd") : "userid-merge-" + i("date")(new Date(t.date), "yyyyMMdd"), n.getStatisticsCSVData(o, m)
    }, o.detailUser = function (e, t) {
      var o = "";
      o = e ? "broad-merge-" + i("date")(new Date(t.date), "yyyyMMdd") : "userid-merge-" + i("date")(new Date(t.date), "yyyyMMdd"), n.getStatisticsCSVData(o, h)
    }, o.statisticsDailyM = function (e, t) {
      r.open({
        template: "statisticsDailyMDialog", controller: ["$scope", function (o) {
          o.title = t, o.dailyM = e
        }], className: "ngdialog-theme-default custom-width"
      })
    }, o.download = function (e, t) {
      var a = "";
      a = e ? "broad-merge-" + i("date")(new Date(t.date), "yyyyMMdd") : "userid-merge-" + i("date")(new Date(t.date), "yyyyMMdd"), o.downloadFileName = a, n.getStatisticsCSVData(a, v)
    }, D.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window"], w.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "$filter"]
  }

  function t(e) {
    if (e) return angular.isNumber(e) ? e : e.indexOf("T") > 0 ? (e.indexOf("Z") == -1 && e.indexOf("+") == -1 && (e += "Z"), e) : e
  }

  angular.module("app.support").controller("StatisticsTestController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout", "UserInfoLoader", "Config", "$q"], e.$inject = ["RouteHelpers", "$scope", "$state", "StatisticsLoader", "ngDialog", "$http", "$filter", "moment", "$timeout", "UserInfoLoader", "Config", "$q"]
}(),function () {
  function e(e, t, o, a, n, r, s, i) {
    function c() {
      u.basepath = e.basepath, u.searchItems = function () {
        a.currentPage = 1, u.resultPage()
      }, u.resultPage = function () {
        console.log("searchvalue", u.searchvalue), u.currentPage = a.currentPage, t.loading = !0, console.log("vm.selectquery", u.selectquery), console.log("vm.searchvalue", u.searchvalue);
        var e = "page=" + u.currentPage;
        "id" == u.selectquery ? e += "&query=id&value=" + u.searchvalue : "email" == u.selectquery ? e += "&query=email&value=" + u.searchvalue : "userid" == u.selectquery ? e += "&query=userid&value=" + u.searchvalue : "name" == u.selectquery ? e += "&query=name&value=" + u.searchvalue : "address" == u.selectquery ? e += "&query=address&value=" + u.searchvalue : "phonenum" == u.selectquery && (e += "&query=phonenum&value=" + u.searchvalue), "all" != u.selectedLocale && (e += "&locale=" + u.selectedLocale), "all" != u.selectedStatus && (e += "&status=" + u.selectedStatus), a.getStoreProfileV1_1(e, l)
      }
    }

    function l(e) {
      console.log("RESULT::", e), t.loading = !1, u.contents = e.contents, t.contents = u.contents, u.pageInfo = e.pageInfo, t.pageInfo = u.pageInfo, u.totalItems = u.pageInfo.totalResourceCount, t.totalItems = u.totalItems, u.totalNumberItems = u.pageInfo.totalResourceCount, t.totalNumberItems = u.totalNumberItems, u.currentPage = u.pageInfo.currentPage, t.currentPage = u.currentPage, a.currentPage = u.currentPage, u.maxSize = u.pageInfo.pageSize, t.maxSize = u.pageInfo.pageSize, u.itemsPerPage = u.pageInfo.pageSize, t.itemsPerPage = u.itemsPerPage
    }

    delete this;
    var u = this;
    u.totalItems = 0, a.currentPage = 1, u.maxSize = 16, u.currentPage = 1, u.selectquery = "all", u.selectedLocale = "all", u.selectedStatus = "all", t.openWorkHistory = function () {
      i.work = "Store's Infomation", i.searchdata = {
        email: "",
        work: "Store Profile 정보",
        target: "",
        orderby: "desc",
        page: 1
      }, i.atypePopupProfile()
    }, c(), t.excelDownload = function () {
      console.log("searchvalue", u.searchvalue), u.currentPage = a.currentPage, console.log("vm.selectquery", u.selectquery), console.log("vm.searchvalue", u.searchvalue);
      var e = "page=" + u.currentPage;
      "id" == u.selectquery ? e += "&query=id&value=" + u.searchvalue : "email" == u.selectquery ? e += "&query=email&value=" + u.searchvalue : "userid" == u.selectquery ? e += "&query=userid&value=" + u.searchvalue : "name" == u.selectquery ? e += "&query=name&value=" + u.searchvalue : "address" == u.selectquery ? e += "&query=address&value=" + u.searchvalue : "phonenum" == u.selectquery && (e += "&query=phonenum&value=" + u.searchvalue), "all" != u.selectedLocale && (e += "&locale=" + u.selectedLocale), "all" != u.selectedStatus && (e += "4" == u.selectedStatus ? "&status=100&isBizLicUrl=1" : "&status=" + u.selectedStatus);
      var t = "Stores_Information_" + moment().format("YYYYMMDD");
      a.getStoreProfileV1_1Excel(e).then(function (e) {
        console.log("res", e);
        var o = document.createElement("a");
        document.body.appendChild(o);
        var a = new Blob([e.data], {type: "application/octet-stream"}),
            n = window.URL.createObjectURL(a);
        o.href = n, o.download = t + ".zip", o.click()
      }, function (e, t) {
        401 === t && o.go("page.login"), s.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      })
    }, t.pageChanged = function (e) {
      console.log("currentPage:::", e), a.currentPage = e, u.resultPage()
    }, t.initalValue = function (e) {
      "all" === e ? u.searchvalue = null : (u.currentPage = 1, a.currentPage = 1, t.currentPage = 1)
    }, t.convertStatusMessage = function (e) {
      switch (e) {
        case 100:
          return "미인증";
        case 200:
          return "미인증/증빙서류 있음";
        case 300:
          return "보완요청";
        case 400:
          return "인증완료";
        default:
          return "미인증"
      }
    }, t.goStoreDetail = function (e) {
      a.store = e, s.popupProfileStore(e)
    }
  }

  function t(e, t, o, a, n, r, s, i, c, l) {
    function u(e) {
      if (console.log(e), e.contents) {
        var o = e.contents[0];
        o.name = t.storeName, o.address = t.address, o.attributes ? o.attributes.auth_info_telno = t.phone : o.attributes = {auth_info_telno: t.phone}, o.authState || (o.authState = {}), o.authState.statusCode = t.statusCode, o.authState.subStatusCode = t.subStatus, o.authState.subStatusMessage = t.subMessage, r.confirmStoreProfile(o, t.confirmFlag, d)
      } else a.messagePopup("실패하였습니다. 관리자에게 문의하십시오.")
    }

    function d(e) {
      console.log("doneConfirmStoreProfile :::::::::::::::::: ", e), a.messagePopup("처리되었습니다."), 400 == t.statusCode ? (console.log("인증완료", e.result), t.storeProfile.name = e.result.name, t.storeProfile.address = e.result.address, t.storeProfile.attributes.auth_info_telno = e.result.attributes.auth_info_telno, t.storeProfile.authState.statusCode = e.result.authState.statusCode, t.storeProfile.authState.subStatusCode = e.result.authState.subStatusCode, t.storeProfile.authState.subStatusMessage = e.result.authState.subStatusMessage, t.storeProfile.authState.firstAuthDate = e.result.authState.firstAuthDate, t.storeProfile.authState.nextAuthDate = e.result.authState.nextAuthDate) : (console.log("보완요청"), t.storeProfile.name = t.storeName, t.storeProfile.address = t.address, t.storeProfile.attributes.auth_info_telno = t.phone, t.storeProfile.authState.statusCode = t.statusCode, t.storeProfile.authState.subStatusCode = t.subStatus, t.storeProfile.authState.subStatusMessage = t.subMessage)
    }

    t.storeProfile = r.store, t.storeName = t.storeProfile.name, t.address = t.storeProfile.address, t.phone = t.storeProfile.attributes ? t.storeProfile.attributes.auth_info_telno : "", console.log("StoreReviewController", t.storeProfile), t.getAuthorizedLocation = function (e) {
      return a.getAuthorizedLocation(e)
    }, t.getNonAuthorizedLocation = function (e) {
      return a.getNonAuthorizedLocation(e)
    }, t.openurl = function (e) {
      window.open(t.getAuthorizedLocation(e), "_blank")
    }, t.checkStoreName = function (t) {
      return console.log(t), t ? void n.open({
        template: e.basepath("support/store-name-search.html"),
        controller: ["$scope", "$timeout", function (e) {
          function o(t) {
            console.log("RESULT::", t), e.loading = !1, e.contents = t.contents
          }

          function o(t) {
            console.log("RESULT::", t), e.loading = !1, a.contents = t.contents, e.contents = a.contents, a.pageInfo = t.pageInfo, e.pageInfo = a.pageInfo, a.totalItems = a.pageInfo.totalResourceCount, e.totalItems = a.totalItems, a.totalNumberItems = a.pageInfo.totalResourceCount, e.totalNumberItems = a.totalNumberItems, a.currentPage = a.pageInfo.currentPage, e.currentPage = a.currentPage, r.currentPage = a.currentPage, a.maxSize = a.pageInfo.pageSize, e.maxSize = a.pageInfo.pageSize, a.itemsPerPage = a.pageInfo.pageSize, e.itemsPerPage = a.itemsPerPage
          }

          var a = this, n = "page=1&query=name&value=" + t;
          e.loading = !0, r.getStoreProfileV1_1(n, o), e.pageChanged = function (a) {
            console.log("currentPage:::", a);
            var n = "page=" + a + "&query=name&value=" + t;
            e.loading = !0, r.getStoreProfileV1_1(n, o)
          }
        }],
        className: "ngdialog-theme-default custom-width"
      }) : void a.messagePopup("매장명을 한글자 이상 입력하십시오.")
    }, t.redeem = function (e) {
      var o = "보완요청(";
      switch (e) {
        case 100:
          o += "선명하게 촬영된 증빙서류 재첨부 필요)";
          break;
        case 200:
          o += "입력된 매장정보와 증빙서류 불일치)";
          break;
        case 300:
          o += "매장정보 중복)"
      }
      a.confirmPopup(o, "보완요청 하시겠습니까?", "확인").then(function (o) {
        if (1 === o) {
          switch (console.log("보완요청 start :: " + e), t.subMessage = "알 수 없음", t.subStatus = e, e) {
            case 100:
              t.subMessage = "선명하게 촬영된 증빙서류 재첨부 필요";
              break;
            case 200:
              t.subMessage = "입력된 매장정보와 증빙서류 불일치";
              break;
            case 300:
              t.subMessage = "매장정보 중복"
          }
          t.statusCode = 300, t.confirmFlag = !1, r.getStoreProfileV1_1("query=id&value=".concat(t.storeProfile.id), u)
        }
      })
    }, t.completeStoreProfile = function () {
      a.confirmPopup("매장인증", "인증 처리하시겠습니까?", "확인").then(function (e) {
        1 === e && (console.log("매장인증 start :: "), t.statusCode = 400, t.confirmFlag = !0, r.getStoreProfileV1_1("query=id&value=".concat(t.storeProfile.id), u))
      })
    }
  }

  function o(e, t, o, a, r, s, i) {
    function c() {
      function c(e) {
        l.contents = e.contents, e.pageInfo && (l.pageInfo = e.pageInfo, l.pageInfo.totalResourceCount >= 9600 ? l.totalItems = 9600 : l.totalItems = l.pageInfo.totalResourceCount, l.totalNumberItems = l.pageInfo.totalResourceCount, l.currentPage = l.pageInfo.currentPage, l.itemsPerPage = 16)
      }

      function u() {
        a.getStoreProfile(l.type, l.value, l.currentPage, c)
      }

      l.basepath = e.basepath;
      var d = o.params.id.split("=");
      l.type = d[0], l.value = d[1], u(), l.pageChanged = function () {
        a.getStoreProfile(l.type, l.value, l.currentPage, c), console.log("currentpage", l.currentPage)
      }, t.goStoreDetail = function (e) {
        r.open({
          template: "storeProfileDetailDialog",
          controller: ["$scope", "$timeout", function (t) {
            t.storeProfile = e, t.openUserDetailDialog = function (e) {
              i.user = e, r.open({
                template: "userProfileDetailDialog",
                controller: n,
                className: "ngdialog-theme-default custom-width"
              })
            }
          }],
          className: "ngdialog-theme-default custom-width"
        })
      }, l.setProfileType = function (e, t) {
        function o(e) {
          s.swal("Changed!", "Profile Type has been changed seccessfully.", "success")
        }

        s.swal({
          title: "Are you sure?",
          text: "Do you really want to change profile type?",
          type: "warning",
          showCancelButton: !0,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, change it",
          cancelButtonText: "No, cancel!",
          closeOnConfirm: !0,
          closeOnCancel: !1
        }, function (n) {
          n ? a.changeAttributeProfileType(e.id, t, o) : s.swal("Cancelled", "Profile Type has not been changed", "error")
        })
      }
    }

    var l = this;
    l.currentPage = 1, l.maxSize = 5, c()
  }

  function a(e, t, o, a) {
    function n() {
      function t(e) {
        r.storeProfile = e.result
      }

      r.basepath = e.basepath, a.getStoreProfileDetail(a.store.id, t)
    }

    var r = this;
    r.currentPage = 1, n()
  }

  function n(e, t, o, a, n, i, c, l, u) {
    function d() {
      function u(e) {
        a.getDevices(e, p)
      }

      function p(e) {
        t.devices = e.result.devices, console.log("DEVICES:::", t.devices);
        var o = 0;
        0 == t.devices.length && (t.devicesList.user.castingCnt = "-"), t.devices.forEach(function (e) {
          if (angular.isDefined(e.state.heartbeat)) {
            var a = c("date")(s(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                n = c("date")(s(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
            a > n ? (t.lastRunning.push(a), moment().diff(a) <= 6e4 && t.lastRunningOne.push(a)) : (t.lastRunning.push(n), moment().diff(n) <= 6e4 && t.lastRunningOne.push(n))
          }
          angular.isDefined(e.state.physicalDevice) && (o += 1), 0 == o ? t.devicesList.user.castingCnt = "-" : t.devicesList.user.castingCnt = o
        }), t.lastRunning.length > 0 && (t.desclastRunning = c("orderBy")(t.lastRunning, "", !0)), console.log("desclastRunning ::::", t.desclastRunning)
      }

      function f(e) {
        i.getStoreProfile("userid", e, 1, m);
      }

      function m(e) {
        console.log("STORE RESULT::", e.contents), t.devicesList.storeProfile = e.contents, t.devicesList.pageInfo = e.pageInfo, t.devicesList.totalItems = t.devicesList.pageInfo.totalResourceCount, t.devicesList.currentPage = t.devicesList.pageInfo.currentPage, t.devicesList.itemsPerPage = 16, e.contents.length > 0 && e.contents[0].productCategories.length > 0 && (console.log("productCategories::", e.contents[0].productCategories[0].id), t.productCategoriesId = e.contents[0].productCategories[0].id, l(function () {
          var e = t.activeResources.findIndex(function (e) {
            return e.id === t.productCategoriesId
          });
          t.selectedProductCategory = t.activeResources[e], console.log("$scope.selectedProductCategory", t.selectedProductCategory)
        }, 1500))
      }

      function h(e) {
        console.log("BOARD RESULT::", e.result.contents), t.boardsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.boards = e.result.contents : t.boards = t.boards.concat(e.result.contents), t.devicesList.boardsPageInfo = e.result.pageInfo
      }

      function v(e) {
        a.listBoards(e, t.userBoardsPage, h)
      }

      function y(e) {
        t.slideshowsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.slideshows = e.result.contents : t.slideshows = t.slideshows.concat(e.result.contents), t.devicesList.slideshowsPageInfo = e.result.pageInfo
      }

      function b(e) {
        a.listSlideshows(e, t.userSlideshowsPage, y)
      }

      g.basepath = e.basepath, console.log("UserInfoLoader.user:::", a.user), a.user.created = s(a.user.created), a.user.lastModified = s(a.user.lastModified), t.devicesList.user = a.user, u(t.devicesList.user.id), v(t.devicesList.user.id), b(t.devicesList.user.id), f(t.devicesList.user.id), t.currentDate = moment().format("YYYY/MM/DD HH:mm:ss"), t.activeResources = [];
      for (var D = 1; D <= 2; D++) {
        var w = "en";
        a.getUserProductCategories(w, D).then(function (e) {
          e.data.result.resources.forEach(function (e) {
            t.activeResources.push(e)
          })
        }, function (e, t) {
          401 === t && o.go("page.login"), alert("Failure finding device")
        });
        var w = "ko";
        a.getUserProductCategories(w, D).then(function (e) {
          e.data.result.resources.forEach(function (e) {
            t.activeResources.push(e)
          })
        }, function (e, t) {
          401 === t && o.go("page.login"), alert("Failure finding device")
        })
      }
      console.log("$scope.activeResources", t.activeResources), t.checkRunning = function (e) {
        if (angular.isDefined(e.state.heartbeat)) {
          var t = c("date")(s(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
              o = c("date")(s(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
          return t > o ? moment().diff(t) > 6e4 : moment().diff(o) > 6e4
        }
        if (angular.isDefined(e.state.displaySurface.deviceModel)) {
          if (angular.isDefined(e.state.displaySurface.deviceModel.modifiedTimestamp)) {
            var o = c("date")(s(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
            return moment().diff(o) > 6e4
          }
          return !0
        }
        return !0
      }, t.goStoreDetail = function (e) {
        n.open({
          template: "storeProfileDetailDialog",
          controller: ["$scope", "$timeout", function (t, o) {
            t.storeProfile = e
          }],
          className: "ngdialog-theme-default custom-width"
        })
      }, t.loadMoreBoard = function () {
        16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount && (t.userBoardsPage = t.userBoardsPage + 1, a.listBoards(t.devicesList.user.id, t.userBoardsPage, h))
      }, t.loadMoreSlideshow = function () {
        16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount && (t.userSlideshowsPage = t.userSlideshowsPage + 1, a.listSlideshows(t.devicesList.user.id, t.userSlideshowsPage, y))
      }, t.isEndBoard = function () {
        return !(t.devicesList.boardsPageInfo && 16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount)
      }, t.isEndSlideshow = function () {
        return !(t.devicesList.slideshowsPageInfo && 16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount)
      }, t.goDeviceDetail = function (e) {
        console.log("before", e), a.selectedDevice = e, n.open({
          template: "userDeviceDetailDialog",
          controller: r,
          className: "ngdialog-theme-default custom-width"
        })
      }, t.goBoardDetail = function (e) {
        n.open({
          template: "boardDetailDialog", controller: ["$scope", "$timeout", function (t, o) {
            t.board = e, t.getAuthorizedLocation = function (e) {
              return a.getAuthorizedLocation(e)
            }, t.getNonAuthorizedLocation = function (e) {
              return a.getNonAuthorizedLocation(e)
            }, t.openurl = function (e) {
              window.open(t.getAuthorizedLocation(e), "_blank")
            }
          }], className: "ngdialog-theme-default custom-width"
        })
      }, t.goSlideshowDetail = function (e) {
        n.open({
          template: "slideshowDetailDialog",
          controller: ["$scope", "$timeout", function (t, o) {
            t.slideshow = e, t.getAuthorizedLocation = function (e) {
              return a.getAuthorizedLocation(e)
            }, t.getNonAuthorizedLocation = function (e) {
              return a.getNonAuthorizedLocation(e)
            }, t.openurl = function (e) {
              window.open(t.getAuthorizedLocation(e), "_blank")
            }
          }],
          className: "ngdialog-theme-default custom-width"
        })
      }, t.getAuthorizedLocation = function (e) {
        return a.getAuthorizedLocation(e)
      }, t.getLastTimeDeviceConnected = function (e, t) {
        var o = c("date")(s(e), "yyyy/MM/dd HH:mm:ss"), a = c("date")(s(t), "yyyy/MM/dd HH:mm:ss");
        return o > a ? o : a
      }, t.getDeviceType = function (e) {
        return "showit-virtual-cast" == e ? "Full Screen Mode" : "Device"
      }, t.removeDevice = function (e) {
        console.log("deviceid", e), t.deviceid = e;
        var r = n.openConfirm({
          template: '<p>Are you sure you want to remove device </p><p>id {{deviceid}}  ?</p><div class="row"><div class="col-md-3 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes</button></div><div class="col-md-3 text-center"><button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No</button></div><div class="col-md-3 text-center"></div></div>',
          plain: !0,
          className: "ngdialog-theme-default",
          scope: t
        });
        r.then(function (n) {
          console.log("resolved:" + n), a.removeDevice(e).then(function (e) {
            console.log("items", e), d(), u(t.devicesList.user.id)
          }, function (e, t) {
            401 === t && o.go("page.login"), alert("Failure finding device")
          })
        }, function (e) {
          console.log("rejected:" + e)
        })
      }
    }

    var g = this;
    t.userBoardsPage = 1, t.userSlideshowsPage = 1, t.devicesList = {}, t.oneAtATime = !0, t.status = {isFirstOpen: !0}, t.lastRunning = [], t.lastRunningOne = [], t.desclastRunning = [], d(), t.groupCheck = u.localStorage.getItem("ngStorage-groups").indexOf("showit-superuser")
  }

  function r(e, t, o, a, n) {
    function r() {
      function o() {
        var e = a.selectedDevice;
        console.log("after", e), t.deviceDetailText = e;
        var o = e.ownerId;
        a.getUserProfile("userid", o, 1, r)
      }

      function r(e) {
        t.device.user = e.result[0]
      }

      i.basepath = e.basepath, o(), t.getAuthorizedLocation = function (e) {
        return a.getAuthorizedLocation(e)
      }, t.getLastTimeDeviceConnected = function () {
        if (angular.isDefined(t.deviceDetailText.state.heartbeat)) {
          var e = n("date")(s(t.deviceDetailText.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
              o = n("date")(s(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
          return e > o ? e : o
        }
        return n("date")(s(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss")
      }
    }

    var i = this;
    t.device = {}, r()
  }

  function s(e) {
    if (e) return angular.isNumber(e) ? e : e.indexOf("T") > 0 ? (e.indexOf("Z") == -1 && e.indexOf("+") == -1 && (e += "Z"), e) : e
  }

  angular.module("app.support").controller("StoreSearchController", e).controller("StoresListController", o).controller("StoreProfileController", a).controller("UserProfileController", n).controller("UserDeviceDetailController", r).controller("StoreReviewController", t), e.$inejct = ["RouteHelpers", "$scope", "$state", "StoreSearchLoader", "ngDialog", "SweetAlert", "UserInfoLoader", "WorkhistoryInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "StoreSearchLoader", "ngDialog", "SweetAlert", "UserInfoLoader", "WorkhistoryInfoLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], t.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window", "ProductInfoLoader"], o.$inejct = ["RouteHelpers", "$scope", "$state", "StoreSearchLoader", "ngDialog", "SweetAlert", "UserInfoLoader"], o.$inject = ["RouteHelpers", "$scope", "$state", "StoreSearchLoader", "ngDialog", "SweetAlert", "UserInfoLoader"], a.$inejct = ["RouteHelpers", "$scope", "$state", "StoreSearchLoader"], a.$inject = ["RouteHelpers", "$scope", "$state", "StoreSearchLoader"], n.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window"], n.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window"], r.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "$filter"], r.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "$filter"]
}(),function () {
  function e(e, t, o, a) {
    function n(o, n, r, s, i) {
      if ("all" == o) var c = a.dispatcherSvcUrl + "/signagecontent/api/storeprofiles?page=" + r; else if ("storeid" == o) var c = a.dispatcherSvcUrl + "/signagecontent/api/storeprofiles/" + n; else var l = o + "=" + n + "&page=" + r,
          c = a.dispatcherSvcUrl + "/signagecontent/api/storeprofiles?" + l;
      i = i || function (e, o) {
        401 === o && t.go("page.login"), alert("Failure finding user")
      }, e.get(c).success(function (e) {
        if ("storeid" == o) {
          var t = {contents: [e.result]};
          s(t)
        } else console.log("result::", e), s(e)
      }).error(i)
    }

    function r(o, n, r) {
      var s = a.dispatcherSvcUrl + "/signagecontent/api/storeprofiles/1.1?" + o;
      r = r || function (e, o) {
        401 === o && t.go("page.login"), alert("Failure finding user")
      }, e.get(s).success(function (e) {
        n(e)
      }).error(r)
    }

    function s(o, n, r) {
      var s = a.dispatcherSvcUrl + "/signagecontent/api/storeprofiles/businessLicenseURI/" + o;
      r = r || function (e, o) {
        401 === o && t.go("page.login")
      }, e.get(s).success(function (e) {
        n(e)
      }).error(r)
    }

    function i(t) {
      var o = a.dispatcherSvcUrl + "/signagecontent/api/storeprofiles/1.1/xlsx?" + t;
      return e.get(o, {
        dataType: "binary",
        processData: !1,
        accept: "application/zip",
        Encoding: "gzip",
        responseType: "arraybuffer"
      })
    }

    function c(o, n, r) {
      var s = a.dispatcherSvcUrl + "/signagecontent/api/storeprofiles/" + o + "/unlock";
      r = r || function (e, o) {
        401 === o && t.go("page.login"), alert("Failure finding user")
      }, e.put(s, {}).success(n).error(r)
    }

    function l(o, n, r) {
      var s = a.dispatcherSvcUrl + "/signagecontent/api/storeprofiles/" + o;
      r = r || function (e, o) {
        401 === o && t.go("page.login"), alert("Failure finding user")
      }, e.get(s).success(n).error(r)
    }

    function u(t) {
      var o = "userid=" + t + "&page=1",
          n = a.dispatcherSvcUrl + "/signagecontent/api/storeprofiles?" + o;
      return e.get(n)
    }

    function d(o, n, r, s) {
      var i = {attributes: {profileType: n}},
          c = a.dispatcherSvcUrl + "/signagecontent/api/storeprofiles/" + o + "/changeattributeprofiletype";
      s = s || function (e, o) {
        401 === o && t.go("page.login"), alert("Failure changing profile type")
      }, e.post(c, i).success(r).error(s)
    }

    function g(e, t) {
      var o = new google.maps.Map(document.createElement("div"), {
        center: {
          lat: -33.866,
          lng: 151.196
        }, zoom: 15
      }), a = new google.maps.Geocoder, n = new google.maps.places.PlacesService(o);
      a.geocode({address: e.address}, function (o, a) {
        if ("OK" === a) {
          var r = o[0].geometry.location.lat(), s = o[0].geometry.location.lng();
          n.nearbySearch({location: {lat: r, lng: s}, radius: 5}, function (o, a) {
            a === google.maps.places.PlacesServiceStatus.OK ? (console.log("places", o), t(o, e)) : alert("No store found nearby")
          })
        } else alert("Geocode was not successful for the following reason: " + a)
      })
    }

    function p(e, t) {
      var o = new google.maps.Map(document.createElement("div"), {
        center: {
          lat: -33.866,
          lng: 151.196
        }, zoom: 15
      }), a = new google.maps.places.PlacesService(o);
      a.getDetails({placeId: e.place_id}, function (o, a) {
        a === google.maps.places.PlacesServiceStatus.OK ? t(o, e) : alert("No store found")
      })
    }

    function f(o, n, r, s) {
      n.geolocation = {
        lat: o.geometry.location.lat(),
        lon: o.geometry.location.lng()
      }, n.locationDetails = {
        apiProvider: "google",
        placeId: o.place_id,
        businessTypeCodes: o.types
      };
      var i = a.dispatcherSvcUrl + "/signagecontent/api/storeprofiles/" + n.id;
      s = s || function (e, o) {
        401 === o && t.go("page.login"), alert("Failure updaitng store profile")
      }, e.put(i, n).success(r).error(s)
    }

    function m(o, n, r, s) {
      var i = n ? a.dispatcherSvcUrl + "/signagecontent/api/storeprofiles/" + o.id + "?authorization=true" : a.dispatcherSvcUrl + "/signagecontent/api/storeprofiles/" + o.id;
      s = s || function (e, o) {
        401 === o && t.go("page.login"), alert("Failure updaitng store profile")
      }, e.put(i, o).success(r).error(s)
    }

    this.getStoreProfile = n, this.getStoreProfileV1_1 = r, this.getStoreProfileV1_1Excel = i, this.fullStoreProfileDetail = u, this.getStoreProfileDetail = l, this.getStoreBusinessLicUrl = s, this.changeAttributeProfileType = d, this.searchStores = g, this.getGeoDetails = p, this.updateStoreProfile = f, this.unlockStoreProfile = c, this.confirmStoreProfile = m, this.store = null
  }

  angular.module("app.support").service("StoreSearchLoader", e), e.$inject = ["$http", "$state", "config", "Config"]
}(),function () {
  function e(e, t, o, a, n, r, s, i) {
    function c() {
      u.basepath = e.basepath, u.resultPage = function () {
        u.currentPage = a.currentPage, t.loading = !0, a.getTemplateList(u.selectquery, t.radioModel, t.groupRadioModel, u.currentPage, u.searchvalue, l)
      }
    }

    function l(e) {
      console.log("RESULT::", e), t.loading = !1, u.resources = e.result.resources, t.resources = u.resources, u.pageInfo = e.result.pageInfo, t.pageInfo = u.pageInfo, u.totalItems = u.pageInfo.totalResourceCount, t.totalItems = u.totalItems, u.totalNumberItems = u.pageInfo.totalResourceCount, t.totalNumberItems = u.totalNumberItems, u.currentPage = u.pageInfo.currentPage, t.currentPage = u.currentPage, a.currentPage = u.currentPage, u.maxSize = u.pageInfo.pageSize, t.maxSize = u.pageInfo.pageSize, u.itemsPerPage = u.pageInfo.pageSize, t.itemsPerPage = u.itemsPerPage
    }

    var u = this;
    u.totalItems = 0, u.maxSize = 16, u.currentPage = 1, a.currentPage = 1, t.radioModel = "ko", t.groupRadioModel = "Published", u.selectquery = "all", t.selectedCategory = {name: "All Templates"}, c(), t.initalValue = function (e) {
      "all" === e ? (u.searchvalue = null, t.currentPage = 1, u.currentPage = 1) : (u.currentPage = 1, t.currentPage = 1)
    }, t.pageChanged = function (e) {
      console.log("currentPage:::", e), t.resources = [], t.loading = !0, a.getTemplateList(u.selectquery, t.radioModel, t.groupRadioModel, u.currentPage, u.searchvalue, l)
    }, t.pageChanged(a.currentPage), t.buttonChanged = function () {
      t.resources = [], t.loading = !0, u.currentPage = 1, t.currentPage = u.currentPage, a.getTemplateList(u.selectquery, t.radioModel, t.groupRadioModel, u.currentPage, u.searchvalue, l)
    }, t.getAuthorizedLocation = function (e) {
      return n.getAuthorizedLocation(e)
    }, t.getNonAuthorizedLocation = function (e) {
      return n.getNonAuthorizedLocation(e)
    }, t.goTemplateDetail = function (e) {
      r.open({
        template: "templateDetailDialog",
        controller: ["$scope", "$timeout", "PromotaUtils", function (t, o, a) {
          function n() {
            try {
              var o = [], a = e.providerMetadata.tags.en_stylecategories;
              for (var n in a) for (var r in u.styleCategories) u.styleCategories[r].id == a[n] && o.push(u.styleCategories[r].name);
              t.styleCategories = o
            } catch (s) {
              console.log("err", s)
            }
          }

          function r() {
            console.log("heres");
            try {
              var o = [], a = e.providerMetadata.tags.en_productcategories;
              for (var n in a) for (var r in u.productCategories) u.productCategories[r].id == a[n] && o.push(u.productCategories[r].name);
              t.productCategories = o
            } catch (s) {
              console.log("err", s)
            }
          }

          t.template = e, t.getAuthorizedLocation = function (e) {
            return a.getAuthorizedLocation(e)
          }, t.getNonAuthorizedLocation = function (e) {
            return a.getNonAuthorizedLocation(e)
          }, t.openurl = function (e) {
            window.open(t.getAuthorizedLocation(e), "_blank")
          }, n(), r()
        }],
        className: "ngdialog-theme-default custom-width"
      })
    }
  }

  function t(e, t, o, a, n, r, s, i) {
    function c() {
      function c(e) {
        var t = e.result;
        l.resources = t.resources, l.pageInfo = t.pageInfo, l.pageInfo.totalResourceCount >= 9600 ? l.totalItems = 9600 : l.totalItems = l.pageInfo.totalResourceCount, l.totalNumberItems = l.pageInfo.totalResourceCount, l.currentPage = l.pageInfo.currentPage, l.itemsPerPage = 16
      }

      function u() {
        "all" == l.type ? a.getTemplateList(l.type, "en", l.currentPage, null, c) : "tid" == l.type && a.getTemplateList(l.type, "en", l.currentPage, l.value, c)
      }

      function d() {
        s.getStyleCategories("en", 1, g)
      }

      function g(e) {
        l.styleCategories = e.result.resources
      }

      function p() {
        i.getProductCategories("en", 1, f), i.getProductCategories("en", 2, f)
      }

      function f(e) {
        "undefined" == typeof l.productCategories ? l.productCategories = e.result.resources : l.productCategories = l.productCategories.concat(e.result.resources)
      }

      l.basepath = e.basepath;
      var m = o.params.id.split("=");
      "all" === m[0] ? l.type = "all" : "tid" === m[0] && (l.type = "tid"), l.value = m[1], u(), d(), p(), l.pageChanged = function () {
        u()
      }, t.getAuthorizedLocation = function (e) {
        return n.getAuthorizedLocation(e)
      }, t.getNonAuthorizedLocation = function (e) {
        return n.getNonAuthorizedLocation(e)
      }, t.goTemplateDetail = function (e) {
        r.open({
          template: "templateDetailDialog",
          controller: ["$scope", "$timeout", "PromotaUtils", function (t, o, a) {
            function n() {
              try {
                var o = [], a = e.providerMetadata.tags.en_stylecategories;
                for (var n in a) for (var r in l.styleCategories) l.styleCategories[r].id == a[n] && o.push(l.styleCategories[r].name);
                t.styleCategories = o
              } catch (s) {
                console.log("err", s)
              }
            }

            function r() {
              console.log("heres");
              try {
                var o = [], a = e.providerMetadata.tags.en_productcategories;
                for (var n in a) for (var r in l.productCategories) l.productCategories[r].id == a[n] && o.push(l.productCategories[r].name);
                t.productCategories = o
              } catch (s) {
                console.log("err", s)
              }
            }

            t.template = e, t.getAuthorizedLocation = function (e) {
              return a.getAuthorizedLocation(e)
            }, t.getNonAuthorizedLocation = function (e) {
              return a.getNonAuthorizedLocation(e)
            }, n(), r()
          }],
          className: "ngdialog-theme-default custom-width"
        })
      }
    }

    var l = this;
    l.currentPage = 1, l.maxSize = 5, c()
  }

  angular.module("app.support").controller("TemplatesController", e).controller("TemplatesListController", t), e.$inejct = ["RouteHelpers", "$scope", "$state", "TemplateSearchLoader", "PromotaUtils", "ngDialog", "StyleCategoriesLoader", "ProductCategoriesLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "TemplateSearchLoader", "PromotaUtils", "ngDialog", "StyleCategoriesLoader", "ProductCategoriesLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "TemplateSearchLoader", "PromotaUtils", "ngDialog", "StyleCategoriesLoader", "ProductCategoriesLoader"], t.$inject = ["RouteHelpers", "$scope", "$state", "TemplateSearchLoader", "PromotaUtils", "ngDialog", "StyleCategoriesLoader", "ProductCategoriesLoader"]
}(),function () {
  function e(e, t, o, a) {
    function n(o, n, r, s, i, c, l) {
      var u;
      console.log("TYPE::", o), console.log("templateStatus::", r), "all" == o ? u = "provider=SignageContent&resourcetype=Content.designlist." + n + "." + r + "&orientation=All&page=" + s : "tid" == o && (u = "provider=SignageContent&resourcetype=Content.themedetails&resourceid=" + i);
      var d = a.dispatcherSvcUrl + "/discovery/api/discoverchildresources?" + u;
      l = l || function (e, o) {
        401 === o && t.go("page.login"), alert("Failure loading templates")
      }, e.get(d, {headers: {"X-App-Version": "portal"}}).success(c).error(l)
    }

    function r(o, n, r) {
      console.log("getCategories");
      var s = a.dispatcherSvcUrl + "/discovery/api/discoverchildresources?provider=SignageContent&resourcetype=Content.locale.categories&resourceid=" + o + "&page=1";
      r = r || function (e, o) {
        401 === o && t.go("page.login"), alert("Failure loading templates")
      }, e.get(s).success(n).error(r)
    }

    this.getTemplateList = n, this.getCategories = r
  }

  angular.module("app.support").service("TemplateSearchLoader", e), e.$inject = ["$http", "$state", "config", "Config"]
}(),function () {
  function e(e, o, a, n, r) {
    function s() {
      function s(e) {
        i.users = e.result.contents, i.pageInfo = e.result.pageInfo, i.pageInfo.totalResourceCount >= 9600 ? i.totalItems = 9600 : i.totalItems = i.pageInfo.totalResourceCount, i.totalNumberItems = i.pageInfo.totalResourceCount, i.currentPage = i.pageInfo.currentPage, r.currentPage = i.currentPage, i.itemsPerPage = 16
      }

      function c() {
        r.getUserProfile(i.type, i.value, i.currentPage, s)
      }

      i.basepath = e.basepath;
      var l = a.params.id.split("=");
      "query" === l[0] ? i.type = "all" : "e" === l[0] ? i.type = "email" : "u" === l[0] ? i.type = "userid" : "fn" === l[0] ? i.type = "firstname" : "ln" === l[0] ? i.type = "lastname" : "gid" === l[0] ? i.type = "groupid" : "cid" === l[0] && (i.type = "clientid"), console.log("id[1]", l[1]), i.value = l[1], c(), i.pageChanged = function () {
        r.getUserProfile(i.type, i.value, i.currentPage, s), console.log("currentpage", i.currentPage)
      }, o.goUserDetail = function (e) {
        r.user = e, n.open({
          template: "userProfileDetailDialog",
          controller: t,
          className: "ngdialog-theme-default custom-width"
        })
      }
    }

    var i = this;
    i.currentPage = r.currentPage, i.maxSize = 5, s()
  }

  function t(e, t, n, r, s, i, c, l, u) {
    function d() {
      function u(e) {
        r.getDevices(e, p)
      }

      function p(e) {
        t.devices = e.result.devices, console.log("DEVICES:::", t.devices);
        var o = 0;
        0 == t.devices.length && (t.devicesList.user.castingCnt = "-"), t.devices.forEach(function (e) {
          if (angular.isDefined(e.state.heartbeat)) {
            var n = c("date")(a(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                r = c("date")(a(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
            n > r ? (t.lastRunning.push(n), moment().diff(n) <= 6e4 && t.lastRunningOne.push(n)) : (t.lastRunning.push(r), moment().diff(r) <= 6e4 && t.lastRunningOne.push(r))
          }
          angular.isDefined(e.state.physicalDevice) && (o += 1), 0 == o ? t.devicesList.user.castingCnt = "-" : t.devicesList.user.castingCnt = o
        }), t.lastRunning.length > 0 && (t.desclastRunning = c("orderBy")(t.lastRunning, "", !0)), console.log("desclastRunning ::::", t.desclastRunning)
      }

      function f(e) {
        i.getStoreProfile("userid", e, 1, m)
      }

      function m(e) {
        console.log("STORE RESULT::", e.contents), t.devicesList.storeProfile = e.contents, t.devicesList.pageInfo = e.pageInfo, t.devicesList.totalItems = t.devicesList.pageInfo.totalResourceCount, t.devicesList.currentPage = t.devicesList.pageInfo.currentPage, t.devicesList.itemsPerPage = 16, e.contents.length > 0 && e.contents[0].productCategories.length > 0 && (console.log("productCategories::", e.contents[0].productCategories[0].id), t.productCategoriesId = e.contents[0].productCategories[0].id, l(function () {
          var e = t.activeResources.findIndex(function (e) {
            return e.id === t.productCategoriesId
          });
          t.selectedProductCategory = t.activeResources[e], console.log("$scope.selectedProductCategory", t.selectedProductCategory)
        }, 1500))
      }

      function h(e) {
        console.log("BOARD RESULT::", e.result.contents), t.boardsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.boards = e.result.contents : t.boards = t.boards.concat(e.result.contents), t.devicesList.boardsPageInfo = e.result.pageInfo
      }

      function v(e) {
        r.listBoards(e, t.userBoardsPage, h)
      }

      function y(e) {
        t.slideshowsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.slideshows = e.result.contents : t.slideshows = t.slideshows.concat(e.result.contents), t.devicesList.slideshowsPageInfo = e.result.pageInfo
      }

      function b(e) {
        r.listSlideshows(e, t.userSlideshowsPage, y)
      }

      g.basepath = e.basepath, console.log("UserInfoLoader.user:::", r.user), r.user.created = a(r.user.created), r.user.lastModified = a(r.user.lastModified), t.devicesList.user = r.user, u(t.devicesList.user.id), v(t.devicesList.user.id), b(t.devicesList.user.id), f(t.devicesList.user.id), t.currentDate = moment().format("YYYY/MM/DD HH:mm:ss"), t.activeResources = [];
      for (var D = 1; D <= 2; D++) {
        var w = "en";
        r.getUserProductCategories(w, D).then(function (e) {
          e.data.result.resources.forEach(function (e) {
            t.activeResources.push(e)
          })
        }, function (e, t) {
          401 === t && n.go("page.login"), alert("Failure finding device")
        });
        var w = "ko";
        r.getUserProductCategories(w, D).then(function (e) {
          e.data.result.resources.forEach(function (e) {
            t.activeResources.push(e)
          })
        }, function (e, t) {
          401 === t && n.go("page.login"), alert("Failure finding device")
        })
      }
      console.log("$scope.activeResources", t.activeResources), t.checkRunning = function (e) {
        if (angular.isDefined(e.state.heartbeat)) {
          var t = c("date")(a(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
              o = c("date")(a(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
          return t > o ? moment().diff(t) > 6e4 : moment().diff(o) > 6e4
        }
        if (angular.isDefined(e.state.displaySurface.deviceModel)) {
          if (angular.isDefined(e.state.displaySurface.deviceModel.modifiedTimestamp)) {
            var o = c("date")(a(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
            return moment().diff(o) > 6e4
          }
          return !0
        }
        return !0
      }, t.goStoreDetail = function (e) {
        s.open({
          template: "storeProfileDetailDialog",
          controller: ["$scope", "$timeout", function (t, o) {
            t.storeProfile = e
          }],
          className: "ngdialog-theme-default custom-width"
        })
      }, t.loadMoreBoard = function () {
        16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount && (t.userBoardsPage = t.userBoardsPage + 1, r.listBoards(t.devicesList.user.id, t.userBoardsPage, h))
      }, t.loadMoreSlideshow = function () {
        16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount && (t.userSlideshowsPage = t.userSlideshowsPage + 1, r.listSlideshows(t.devicesList.user.id, t.userSlideshowsPage, y))
      }, t.isEndBoard = function () {
        return !(t.devicesList.boardsPageInfo && 16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount)
      }, t.isEndSlideshow = function () {
        return !(t.devicesList.slideshowsPageInfo && 16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount)
      }, t.goDeviceDetail = function (e) {
        console.log("before", e), r.selectedDevice = e, s.open({
          template: "userDeviceDetailDialog",
          controller: o,
          className: "ngdialog-theme-default custom-width"
        })
      }, t.goBoardDetail = function (e) {
        s.open({
          template: "boardDetailDialog", controller: ["$scope", "$timeout", function (t, o) {
            t.board = e, t.getAuthorizedLocation = function (e) {
              return r.getAuthorizedLocation(e)
            }, t.getNonAuthorizedLocation = function (e) {
              return r.getNonAuthorizedLocation(e)
            }, t.openurl = function (e) {
              window.open(t.getAuthorizedLocation(e), "_blank")
            }
          }], className: "ngdialog-theme-default custom-width"
        })
      }, t.goSlideshowDetail = function (e) {
        s.open({
          template: "slideshowDetailDialog",
          controller: ["$scope", "$timeout", function (t, o) {
            t.slideshow = e, t.getAuthorizedLocation = function (e) {
              return r.getAuthorizedLocation(e)
            }, t.getNonAuthorizedLocation = function (e) {
              return r.getNonAuthorizedLocation(e)
            }, t.openurl = function (e) {
              window.open(t.getAuthorizedLocation(e), "_blank")
            }
          }],
          className: "ngdialog-theme-default custom-width"
        })
      }, t.getAuthorizedLocation = function (e) {
        return r.getAuthorizedLocation(e)
      }, t.getLastTimeDeviceConnected = function (e, t) {
        var o = c("date")(a(e), "yyyy/MM/dd HH:mm:ss"), n = c("date")(a(t), "yyyy/MM/dd HH:mm:ss");
        return o > n ? o : n
      }, t.getDeviceType = function (e) {
        return "showit-virtual-cast" == e ? "Full Screen Mode" : "Device"
      }, t.removeDevice = function (e) {
        console.log("deviceid", e), t.deviceid = e;
        var o = s.openConfirm({
          template: '<p>Are you sure you want to remove device </p><p>id {{deviceid}}  ?</p><div class="row"><div class="col-md-3 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes</button></div><div class="col-md-3 text-center"><button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No</button></div><div class="col-md-3 text-center"></div></div>',
          plain: !0,
          className: "ngdialog-theme-default",
          scope: t
        });
        o.then(function (o) {
          console.log("resolved:" + o), r.removeDevice(e).then(function (e) {
            console.log("items", e), d(), u(t.devicesList.user.id)
          }, function (e, t) {
            401 === t && n.go("page.login"), alert("Failure finding device")
          })
        }, function (e) {
          console.log("rejected:" + e)
        })
      }
    }

    var g = this;
    t.userBoardsPage = 1, t.userSlideshowsPage = 1, t.devicesList = {}, t.oneAtATime = !0, t.status = {isFirstOpen: !0}, t.lastRunning = [], t.lastRunningOne = [], t.desclastRunning = [], d(), t.groupCheck = u.localStorage.getItem("ngStorage-groups").indexOf("showit-superuser")
  }

  function o(e, t, o, n, r) {
    function s() {
      function o() {
        var e = n.selectedDevice;
        console.log("after", e), t.deviceDetailText = e;
        var o = e.ownerId;
        n.getUserProfile("userid", o, 1, s)
      }

      function s(e) {
        t.device.user = e.result[0]
      }

      i.basepath = e.basepath, o(), t.getAuthorizedLocation = function (e) {
        return n.getAuthorizedLocation(e)
      }, t.getLastTimeDeviceConnected = function () {
        if (angular.isDefined(t.deviceDetailText.state.heartbeat)) {
          var e = r("date")(a(t.deviceDetailText.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
              o = r("date")(a(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
          return e > o ? e : o
        }
        return r("date")(a(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss")
      }
    }

    var i = this;
    t.device = {}, s()
  }

  function a(e) {
    if (e) return angular.isNumber(e) ? e : e.indexOf("T") > 0 ? (e.indexOf("Z") == -1 && e.indexOf("+") == -1 && (e += "Z"), e) : e
  }

  angular.module("app.support").controller("UsersListController", e).controller("UserProfileController", t).controller("UserDeviceDetailController", o), e.$inejct = ["RouteHelpers", "$scope", "$state", "ngDialog", "UserInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "ngDialog", "UserInfoLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window"], t.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window"], o.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "$filter"], o.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "$filter"]
}(),function () {
  function e(t, o, a, n, r, s, i, c) {
    function l(e) {
      var o = {page: e}, a = n.dispatcherSvcUrl + "/user/api/searchuserinfoExcel";
      return t.post(a, o, {
        dataType: "binary",
        processData: !1,
        accept: "application/zip",
        Encoding: "gzip",
        responseType: "arraybuffer"
      })
    }

    function u(e) {
      var o = n.dispatcherSvcUrl + "/user/api/searchuserinfoExcel";
      return t.post(o, e, {
        dataType: "binary",
        processData: !1,
        accept: "application/zip",
        Encoding: "gzip",
        responseType: "arraybuffer"
      })
    }

    function d(e) {
      var o = {workComment: {id: e}}, a = n.dispatcherSvcUrl + "user/api/saveworkcomment";
      return console.log("sendDdata", o), t.post(a, o)
    }

    function g(e) {
      var o = {
        subscription: {
          id: e.id,
          withdrawCode: e.withdrawCode,
          withdrawReason: e.withdrawReason
        }
      }, a = n.dispatcherSvcUrl + "/user/api/deactivateuseradmin";
      return console.log("sendDdata", o), t.post(a, o)
    }

    function p(e) {
      var o = {subscription: {id: e.id}}, a = n.dispatcherSvcUrl + "/user/api/reactivateuseradmin";
      return t.post(a, o)
    }

    function f(e) {
      var o = {subscription: {id: e.id}},
          a = n.dispatcherSvcUrl + "/user/api/reactivateuseradmindmt";
      return t.post(a, o)
    }

    function m(e) {
      var o = n.dispatcherSvcUrl + "/device/api/removedevice?deviceid=" + e;
      return t.post(o)
    }

    function h(e, o) {
      var a = n.dispatcherSvcUrl + "/discovery/api/searchresources?provider=SignageContent&page=" + o + "&resourcetype=Content.productcategories." + e;
      return t.get(a)
    }

    function v(e) {
      var o = {subscription: {id: e}},
          a = n.dispatcherSvcUrl + "/user/api/updatesubscriptionhistoryadmin";
      return t.post(a, o)
    }

    function y(e, o) {
      var a = {subscriptionHistory: {id: e, subscription: {comments: o}}},
          r = n.dispatcherSvcUrl + "/user/api/updatesubscriptionhistorycomment";
      return t.post(r, a)
    }

    function b(e, o) {
      var a = {subscriptionHistory: {subscription: {id: e}}, page: o},
          r = n.dispatcherSvcUrl + "/user/api/getsubscriptionhistorylist";
      return t.post(r, a)
    }

    function D(e, a, r) {
      var s = n.dispatcherSvcUrl + "/device/api/listdevices?userid=" + e;
      r = r || function (e, t) {
        401 === t && o.go("page.login")
      }, t.get(s).success(a).error(r)
    }

    function w(e) {
      console.log("userid", e);
      var o = n.dispatcherSvcUrl + "/user/api/partner/admin/membershipdetail?userid=" + e;
      return t.get(o)
    }

    function P(e, o) {
      console.log("userid", e);
      var a = n.dispatcherSvcUrl + "/user/api/partner/admin/memberhistory?userid=" + e + "&page=" + o;
      return t.get(a)
    }

    function C(e, o) {
      console.log("userid", e);
      var a = n.dispatcherSvcUrl + "/user/api/invite/admin/invitestatus?userId=" + e + "&page=" + o;
      return t.get(a)
    }

    function S(e, o) {
      console.log("userid", e);
      var a = n.dispatcherSvcUrl + "/user/api/invite/admin/couponhist?userId=" + e + "&page=" + o;
      return t.get(a)
    }

    function A(a, r, s, i) {
      var c = {userId: a, cpnType: r}, l = n.dispatcherSvcUrl + "/user/api/invite/admin/issue";
      i = i || function (t, a) {
        401 === a && o.go("page.login"), e.messageErrorPopup("Error : Failure adding user to group")
      }, t.post(l, c).success(s).error(i)
    }

    function L() {
      var e = n.dispatcherSvcUrl + "/user/api/invite/admin/coupon/list?page=1";
      return t.get(e)
    }

    function I(e, o, a) {
      console.log("userid", e);
      var r = n.dispatcherSvcUrl + "/device/api/castinghist?userid=" + e + "&deviceid=" + o + "&page=" + a;
      return t.get(r)
    }

    function M(e) {
      var o = n.dispatcherSvcUrl + "/user/api/partner/admin/list?page=" + e;
      return t.get(o)
    }

    function U(e, o) {
      var a = n.dispatcherSvcUrl + "/user/api/partner/admin/memberlist?partnerId=" + e + "&page=" + o;
      return t.get(a)
    }

    function k(e) {
      var o = n.dispatcherSvcUrl + "/user/api/partner/";
      return t.post(o, e)
    }

    function $(e, a, r) {
      var s = n.dispatcherSvcUrl + "/discovery/api/discoverchildresources?provider=SignageContent&resourcetype=Content.boarddetails&resourceid=" + e;
      r = r || function (e, t) {
        401 === t && o.go("page.login")
      }, t.get(s).success(a).error(r)
    }

    function R(e) {
      var o = n.dispatcherSvcUrl + "/device/api/listdevices?userid=" + e;
      return t.get(o)
    }

    function E(e, a, r, s, i) {
      if ("all" == e) var c = n.dispatcherSvcUrl + "/user/api/searchuser?page=" + r; else if ("country" == e) var l = e + "=" + angular.lowercase(a) + "&page=" + r,
          c = n.dispatcherSvcUrl + "/user/api/searchuser?" + l; else var l = e + "=" + a + "&page=" + r,
          c = n.dispatcherSvcUrl + "/user/api/searchuser?" + l;
      i = i || function (e, t) {
        401 === t && o.go("page.login")
      }, t.get(c).success(s).error(i)
    }

    function x(e, a, r) {
      var s = n.dispatcherSvcUrl + "/user/api/searchuserinfo";
      console.log(e), r = r || function (e, t) {
        console.log("e ::", e), console.log("code ::", t), 401 === t && o.go("page.login")
      }, t.post(s, e).success(a).error(r)
    }

    function T(e) {
      var o = n.dispatcherSvcUrl + "/user/api/searchusers?page=" + e;
      return t.get(o)
    }

    function N(e, a, r) {
      var s = n.dispatcherSvcUrl + "/device/api/listdevices?userid=" + e;
      r = r || function (e, t) {
        401 === t && o.go("page.login")
      }, t.get(s).success(a).error(r)
    }

    function H(e, a, r, s) {
      var i = n.dispatcherSvcUrl + "/signagecontent/api/boards?userid=" + e + "&page=" + a;
      s = s || function (e, t) {
        401 === t && o.go("page.login")
      }, t.get(i).success(r).error(s)
    }

    function B(e) {
      var o = n.dispatcherSvcUrl + "/signagecontent/api/boards?userid=" + e;
      return t.get(o)
    }

    function z(e, a, r, s) {
      var i = n.dispatcherSvcUrl + "/signagecontent/api/slideshows?userid=" + e + "&page=" + a;
      s = s || function (e, t) {
        401 === t && o.go("page.login")
      }, t.get(i).success(r).error(s)
    }

    function Y(e) {
      var o = n.dispatcherSvcUrl + "/signagecontent/api/slideshows?userid=" + e;
      return t.get(o)
    }

    function O(e) {
      return e + "&authorization=user%20" + s.getUserToken()
    }

    function j(e) {
      return e
    }

    function F(e) {
      i.open({
        template: c.basepath("support/profile-user.html"),
        controller: "ProfileUserController",
        className: "ngdialog-theme-default custom-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function _(e) {
      i.open({
        template: c.basepath("support/profile-store.html"),
        controller: "ProfileStoreController",
        className: "ngdialog-theme-default custom-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function W(e) {
      i.open({
        template: c.basepath("support/profile-tracking.html"),
        controller: "ProfileTrackingController",
        className: "ngdialog-theme-default customw-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function q(e) {
      i.open({
        template: c.basepath("support/profile-servicehistory.html"),
        controller: "ProfileServiceHistoryController",
        className: "ngdialog-theme-default customw-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function V(e) {
      i.open({
        template: c.basepath("support/profile-castinghistory.html"),
        controller: "ProfileCastingHistoryController",
        className: "ngdialog-theme-default custom-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function G(e) {
      i.open({
        template: c.basepath("support/profile-invitedetail.html"),
        controller: "ProfileInviteDetailController",
        className: "ngdialog-theme-default custom-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function K(e) {
      i.open({
        template: c.basepath("support/profile-couponhistory.html"),
        controller: "ProfileCouponHistoryController",
        className: "ngdialog-theme-default custom-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function Z(e) {
      i.open({
        template: c.basepath("support/profile-trackdetail.html"),
        controller: "ProfileTrackdetailController",
        className: "ngdialog-theme-default customw-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function X(e) {
      i.open({
        template: c.basepath("support/profile-device.html"),
        controller: "ProfileDeviceController",
        className: "ngdialog-theme-default custom-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function J(e) {
      i.open({
        template: c.basepath("support/profile-boardDetail.html"),
        controller: "ProfileBoardDetailController",
        className: "ngdialog-theme-default custom-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function Q(e) {
      i.open({
        template: c.basepath("support/profile-slideshowDetail.html"),
        controller: "ProfileSlideshowDetailController",
        className: "ngdialog-theme-default custom-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function ee() {
      var e = i.openConfirm({
        template: '<div class="panel panel"><div class="panel-heading"><h1 style="font-size: 2rem;line-height: 1;color: #999999;border-bottom: 1px solid #eeeeee;">탈퇴처리 사유 작성</h1></div><div class="panel-body"><div class="form-horizontal"> <form class="form-group"><div class="col-md-12"><div class="col-md-2" style="margin-top:6px"><label>탈퇴유형</label></div><div class="col-md-10"><div class="input-group"><div class="input-group-btn search-panel" style="width:180px" ng-init="search.selectDeactive=1"><select class="chosen-select form-control" chosen="" ng-model="search.selectDeactive"><option value="1" ng-selected="true">자발적 탈퇴</option><option value="2">비자발적 탈퇴</option></select></div></div> </div></div> <div class="col-md-12">&nbsp;</div><div class="col-md-12"> <div class="col-md-2" style="margin-top:6px"><label>탈퇴사유</label></div><div class="col-md-10"><div class="input-group"><div class="input-group-btn search-panel"><input class="form-control" type="text" name="x" ng-model="search.selectComment"></div></div></div></div><div class="col-md-12">&nbsp;</div><div class="col-md-12"><div class="col-md-4">&nbsp; </div><div class="col-md-4"><button type="button" class="btn btn-primary" ng-disabled="search.selectDeactive === 0"  ng-click="confirm(search)">확인</button></div><div class="col-md-4">&nbsp; </div></div></form></div></div></div>',
        plain: !0,
        className: "ngdialog-theme-default"
      });
      return e
    }

    function te() {
      i.open({
        template: c.basepath("support/profile-Reactive.html"),
        controller: "ProfileReactiveController",
        className: "ngdialog-theme-default custom-width",
        showClose: !0,
        closeByEscape: !0
      })
    }

    function oe(e) {
      var t = i.openConfirm({
        template: '<div style="padding:3%"><div><i class="fa fa-exclamation-triangle fa-stack-2x" aria-hidden="true" style="line-height: inherit;">&nbsp;&nbsp;&nbsp;Warning!</i></div><br><br><br><div><span>' + e + '</span></div><br><br><br><br><div class="row"><div class="col-md-4 text-center"></div><div class="col-md-4 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">확인</button></div><div class="col-md-3 text-center"></div></div></div>',
        plain: !0,
        className: "ngdialog-theme-default"
      });
      return t
    }

    function ae(e) {
      var t = i.openConfirm({
        template: '<div style="padding:3%"><i class="fa fa-info-circle fa-stack-2x" aria-hidden="true" style="line-height: inherit;"><span style="font-size:large"> &nbsp;&nbsp;&nbsp; ' + e + '</span> </i><br><br><br><br><div class="row"><div class="col-md-4 text-center"></div><div class="col-md-4 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">확인</button></div><div class="col-md-3 text-center"></div></div></div>',
        plain: !0,
        className: "ngdialog-theme-default"
      });
      return t
    }

    function ne(e, t) {
      var o = i.openConfirm({
        template: '<div style="padding:3%"><i class="fa fa-info-circle fa-stack-2x" aria-hidden="true" style="line-height: inherit;"><span style="font-size:large"> &nbsp;&nbsp;&nbsp; ' + e + '</span> </i><br><br><br><div class="row"><div class="col-md-1"> &nbsp;</div><div class="col-md-11"><span style="font-size:medium"> &nbsp;&nbsp;&nbsp; ' + t + '</span> </i></div></div><br><br><div class="row"><div class="col-md-4 text-center"></div><div class="col-md-4 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">확인</button></div><div class="col-md-3 text-center"></div></div></div>',
        plain: !0,
        className: "ngdialog-theme-default"
      });
      return o
    }

    function re(e, t, o) {
      var a = i.openConfirm({
        template: '<div class="panel panel"> <div class="panel-heading"><h1 style="font-size: 2rem;line-height: 1;color: #999999;border-bottom: 1px solid #eeeeee;">' + e + '</h1></div><div class="panel-body"><div class="form-horizontal"><div class="col-md-12"> </div> <div class="col-md-2"><i class="fa fa-info-circle fa-stack-2x" aria-hidden="true" style="line-height: inherit;"></i></div><div class="col-md-10"><lable>' + t + '</lable></div><div class="col-md-12"> </div><div class="col-md-12"><div class="col-md-2">  </div><div class="col-md-2"><button type="button" class="btn btn-primary" ng-click="confirm(1)">' + o + '</button></div><div class="col-md-2">  </div><div class="col-md-2"><button type="button" class="btn btn-default" ng-click="confirm(0)">취소</button></div><div class="col-md-2">  </div></div></div></div></div>',
        plain: !0,
        className: "ngdialog-theme-default"
      });
      return a
    }

    function se(e, t, o, a) {
      var n = i.openConfirm({
        template: '<div class="panel panel"> <div class="panel-heading"><h1 style="font-size: 2rem;line-height: 1;color: #999999;border-bottom: 1px solid #eeeeee;">' + e + '</h1></div><div class="panel-body"><div class="form-horizontal"><div class="col-md-12"> </div> <div class="col-md-2"><i class="fa fa-info-circle fa-stack-2x" aria-hidden="true" style="line-height: inherit;"></i></div><div class="col-md-10"><lable>' + t + '</lable></div><div class="col-md-12"> </div><div class="col-md-12"><div class="col-md-2">  </div><div class="col-md-2"><button type="button" class="btn btn-primary" ng-click="confirm(1)">' + o + '</button></div><div class="col-md-2">  </div><div class="col-md-2"><button type="button" class="btn btn-default" ng-click="confirm(0)">' + a + '</button></div><div class="col-md-2">  </div></div></div></div></div>',
        plain: !0,
        className: "ngdialog-theme-default"
      });
      return n
    }

    function ie(e) {
      if (e) return angular.isNumber(e) ? e : e.indexOf("T") > 0 ? (e.indexOf("Z") == -1 && e.indexOf("+") == -1 && (e += "Z"), e) : e
    }

    this.getDevices = D, this.fullDevices = R, this.getUserProfile = E, this.getNewUserProfile = x, this.allUserProfile = T, this.listDevices = N, this.listBoards = H, this.fulllistBoards = B, this.listSlideshows = z, this.fulllistSlideshows = Y, this.getAuthorizedLocation = O, this.getNonAuthorizedLocation = j, this.getBoardsDetails = $, this.getUserProductCategories = h, this.updateCommentMsg = y, this.removeDevice = m, this.popupProfile = F, this.popupProfileIndex = null, this.user = null, this.store = null, this.popupProfileStore = _, this.popupProfileTracking = W, this.popupProfileServiceHistory = q, this.popupProfileCastingHistory = V, this.popupProfileInviteDetail = G, this.popupProfileCouponHistory = K, this.popupProfileDevice = X, this.subscriptionHistory = b, this.selectedTrack = null, this.selectedDevice = null, this.deviceName = null, this.popupProfileTrackDetail = Z, this.messagePopup = ae, this.messagePopup2line = ne, this.messageErrorPopup = oe, this.confirmPopup = re, this.confirmPopupYn = se, this.refreshUpdate = v, this.selectedBoard = null, this.popupProfileBoardDetail = J, this.selectedSlideshow = null, this.popupProfileSlideshowDetail = Q, this.popupProfileDeactive = ee, this.popupProfileReactive = te, this.TrackingCurrentPage = null, this.MemberHistoryCurrentPage = null, this.CastingHistoryCurrentPage = null, this.InviteDetailCurrentPage = null, this.CouponHistoryCurrentPage = null, this.deactive = g, this.reactive = p, this.reactivedmt = f, this.saveworkcomment = d, this.getMembershipdetail = w, this.getMemberhistory = P, this.getInviteDetail = C, this.getCouponHistory = S, this.addCoupon = A, this.getCouponList = L, this.getCastinghistory = I, this.bizCustomerCurrentPage = null, this.getPartnerList = M, this.bizMemberCurrentPage = null, this.getPartnerMemberList = U, this.postPartnerProfile = k, this.utcLocal = ie, this.searchuserinfoExcel = l, this.searchuserinfoExcelOfCondition = u
  }

  angular.module("app.support").service("UserInfoLoader", e), e.$inject = ["$http", "$state", "config", "Config", "$localStorage", "UserSession", "ngDialog", "RouteHelpers"]
}(),function () {
  function e(e, t, o, a, n, r, s, i, c, l, u, d, g, p, f) {
    function m(e) {
      var o = e.date, a = e.mode;
      if ("day" === a) for (var n = new Date(o).setHours(0, 0, 0, 0), r = 0; r < t.events.length; r++) {
        var s = new Date(t.events[r].date).setHours(0, 0, 0, 0);
        if (n === s) return t.events[r].status
      }
      return ""
    }

    function h() {
      P.basepath = e.basepath, P.resultPage = function () {
        P.currentPage = a.currentPage, t.users = [], t.loading = !0;
        var e = "", o = "";
        P.isSubscriptionPeriod = 0, "ignore" == P.term ? (e = "", o = "") : ("subscription_startDate" == P.term && (P.isSubscriptionPeriod = 1), e = d("date")(P.fdt, "yyyy-MM-dd"), o = d("date")(P.tdt, "yyyy-MM-dd"));
        var n = null;
        "all" === P.selectquery ? n = {
          page: P.currentPage,
          s_membershipCode: P.selectMembership,
          s_statusCode: P.selectStatus,
          isSubscriptionPeriod: P.isSubscriptionPeriod,
          s_startDate: e,
          s_endDate: o
        } : "email" === P.selectquery ? n = {
          email: P.searchvalue,
          page: P.currentPage,
          s_membershipCode: P.selectMembership,
          s_statusCode: P.selectStatus,
          isSubscriptionPeriod: P.isSubscriptionPeriod,
          s_startDate: e,
          s_endDate: o
        } : "id" === P.selectquery ? n = {
          id: P.searchvalue,
          page: P.currentPage,
          s_membershipCode: P.selectMembership,
          s_statusCode: P.selectStatus,
          isSubscriptionPeriod: P.isSubscriptionPeriod,
          s_startDate: e,
          s_endDate: o
        } : "firstName" === P.selectquery ? n = {
          firstName: P.searchvalue,
          page: P.currentPage,
          s_membershipCode: P.selectMembership,
          s_statusCode: P.selectStatus,
          isSubscriptionPeriod: P.isSubscriptionPeriod,
          s_startDate: e,
          s_endDate: o
        } : "lastName" === P.selectquery ? n = {
          lastName: P.searchvalue,
          page: P.currentPage,
          s_membershipCode: P.selectMembership,
          s_statusCode: P.selectStatus,
          isSubscriptionPeriod: P.isSubscriptionPeriod,
          s_startDate: e,
          s_endDate: o
        } : "groupid" === P.selectquery ? n = {
          groupid: P.searchvalue,
          page: P.currentPage,
          s_membershipCode: P.selectMembership,
          s_statusCode: P.selectStatus,
          isSubscriptionPeriod: P.isSubscriptionPeriod,
          s_startDate: e,
          s_endDate: o
        } : "clientid" === P.selectquery ? n = {
          clientid: P.searchvalue,
          page: P.currentPage,
          s_membershipCode: P.selectMembership,
          s_statusCode: P.selectStatus,
          isSubscriptionPeriod: P.isSubscriptionPeriod,
          s_startDate: e,
          s_endDate: o
        } : "redeemCode" === P.selectquery ? n = {
          redeemCode: P.searchvalue,
          page: P.currentPage,
          s_membershipCode: P.selectMembership,
          s_statusCode: P.selectStatus,
          isSubscriptionPeriod: P.isSubscriptionPeriod,
          s_startDate: e,
          s_endDate: o
        } : "country" === P.selectquery ? n = {
          country: angular.lowercase(P.searchvalue),
          page: P.currentPage,
          s_membershipCode: P.selectMembership,
          s_statusCode: P.selectStatus,
          isSubscriptionPeriod: P.isSubscriptionPeriod,
          s_startDate: e,
          s_endDate: o
        } : "awake" === P.selectquery && (n = {
          awake: "true",
          page: P.currentPage,
          s_membershipCode: P.selectMembership,
          s_statusCode: P.selectStatus,
          isSubscriptionPeriod: P.isSubscriptionPeriod,
          s_startDate: e,
          s_endDate: o
        }), console.log(n), a.getNewUserProfile(n, v)
      }
    }

    function v(e) {
      console.log("RESULT::", e), t.loading = !1, t.users = [], t.users = e.result.contents, console.log("USERS::", e.result.contents), t.pageInfo = e.result.pageInfo, console.log(t.pageInfo), t.totalItems = t.pageInfo.totalResourceCount, t.totalNumberItems = t.pageInfo.totalResourceCount, t.currentPage = t.pageInfo.currentPage, a.currentPage = t.currentPage, t.maxSize = 5, t.itemsPerPage = 16
    }

    function y(e) {
      t.tempUsersC = [];
      var o = i.defer(), a = [];
      return angular.forEach(e, function (e) {
        a.push(c.get(e.url))
      }), i.all(a).then(function (e) {
        t.cvsName = "CSV", console.log("results::", e), e.forEach(function (e) {
          e.data.result.contents.forEach(function (e) {
            t.tempUsersC.push(e)
          })
        }), console.log("$scope.tempUsersC::", t.tempUsersC), t.stop = !1, o.resolve(JSON.stringify(e))
      }, function (e) {
        o.reject(e), t.stop = !1
      }, function (e) {
        console.log("update::", e), o.update(e), t.stop = !1
      }), o.promise
    }

    function b(e, t) {
      var o = document.createElement("a"), a = Papa.unparse(e);
      if (window.navigator.msSaveOrOpenBlob) {
        var n = new Blob([decodeURIComponent(encodeURI(a))], {type: "text/csv;charset=utf-8;"});
        navigator.msSaveBlob(n, t + ".csv")
      } else o.href = "data:attachment/csv;charset=utf-8,\ufeff" + encodeURI(a), o.target = "_blank", o.download = t + ".csv", document.body.appendChild(o), o.click()
    }

    console.log(o.current.title), t.openWorkHistory = function () {
      f.work = "User's Infomation", f.searchdata = {
        email: "",
        work: "회원정보",
        target: "",
        orderby: "desc",
        page: 1
      }, f.atypePopupProfile()
    }, console.log(g), t.popup1 = {opened: !1}, t.popup2 = {opened: !1}, console.log(t.popup1.opened), t.today = function () {
      t.dt = new Date
    }, t.today(), t.clear = function () {
      t.dt = null
    }, t.inlineOptions = {
      customClass: m,
      minDate: new Date,
      showWeeks: !0
    }, t.dateOptions = {
      formatYear: "yy",
      maxDate: t.dt.todate,
      minDate: t.dt.fromdate,
      startingDay: 0,
      showWeeks: !1
    }, t.toggleMin = function () {
      t.inlineOptions.minDate = t.inlineOptions.minDate ? null : new Date, t.dateOptions.minDate = t.inlineOptions.minDate
    }, t.toggleMin(), t.open1 = function () {
      t.popup1.opened = !0
    }, t.open2 = function () {
      t.popup2.opened = !0
    }, t.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], t.format = t.formats[1], t.altInputFormats = ["M!/d!/yyyy"];
    var D = new Date;
    D.setDate(D.getDate() + 1);
    var w = new Date;
    w.setDate(D.getDate() + 1), t.events = [{date: D, status: "full"}, {
      date: w,
      status: "partially"
    }], delete this;
    var P = this;
    console.log("UserInfoLoader.currentPage", a.currentPage), P.totalItems = 0, a.currentPage = 1, P.selectquery = "all", t.cvsName = "CSV", t.cvsNameC = "allCSV", P.selectMembership = "", P.selectStatus = "", P.fdt = new Date, P.tdt = new Date, P.term = "ignore", P.isSubscriptionPeriod = 0, h(), t.checkMembership = function (e, t) {
      return console.log("ss::" + e), 1 === e || 2 === e || 3 === e || 4 === e || 8 == e ? "무료" : "google" === t ? "유료(Android)" : "유료(iOS)"
    }, t.changemembership = function (e) {
      console.log("event::", P.selectStatus), P.selectStatus = ""
    }, t.fullCvsDownlad = function () {
      t.tempUsers = [], t.tempUsersC = [], t.tempUrl = [], t.allPages = Math.round(t.pageInfo.totalResourceCount / t.pageInfo.currentResourceCount), t.urlPages = Math.round(t.allPages / 6), t.ppCnt = 1, t.endppCnt = 1, console.log(t.allPages);
      var e = s.dispatcherSvcUrl + "/user/api/searchusers?page=";
      t.stop = !0;
      do {
        for (t.tempUrl = [], t.ppCnt; t.ppCnt <= 6 * t.endppCnt; t.ppCnt++) t.tempUrl.push({url: e + t.ppCnt});
        if (console.log("$scope.tempUrl", t.tempUrl.length), l(function () {
          y(t.tempUrl)
        }, 3e3), t.endppCnt++, t.endppCnt == t.urlPages) {
          t.stop = !1;
          break
        }
      } while (t.stop);
      t.cvsNameC = "Calculating...", t.tempUsersC.forEach(function (e, o) {
        t.allUserSearchBoards(e.id, o), t.allUserSearchSlideshows(e.id, o), t.allUserSearchDevices(e.id, o)
      }), l(function () {
        t.tempUsersC.forEach(function (e) {
          console.log(e.digitalSignCnt), t.tempUsers.push({
            Email: e.email,
            Name: e.firstName + " " + e.lastName,
            "User Id": e.id,
            "Redeem Code (Company)": e.referrer,
            "Login Option": e.authorizedProviders[0],
            "Digital Sign Created": e.digitalSignCnt,
            "Slide Show Created": e.slideshowCnt,
            "Casting Device": e.castingCnt
          })
        }), b(t.tempUsers, "Users_Information_" + r().format("YYYYMMDD")), t.cvsNameC = "allCSV"
      }, 36e5)
    }, t.cvsDownlad = function () {
      t.cvsName = "Calculating...", t.tempUsers = [], t.users.forEach(function (e) {
        var o, a, n, r;
        o = angular.isDefined(e.redeemInfo) ? e.redeemInfo.redeemCode + "(" + e.redeemInfo.redeemCodeName + ")" : 0, a = "-" == e.digitalSignCnt ? 0 : e.digitalSignCnt, n = "-" == e.slideshowCnt ? 0 : e.slideshowCnt, r = "-" == e.castingCnt ? 0 : e.castingCnt, t.tempUsers.push({
          Email: e.email,
          Name: e.firstName + " " + e.lastName,
          Country: e.locale,
          "User Id": e.id,
          "Redeem Code (Company)": o,
          "Login Option": e.authorizedProviders[0],
          "Digital Sign Created": a,
          "Slide Show Created": n,
          "Casting Device": r
        })
      }), b(t.tempUsers, "Users_Information_" + r().format("YYYYMMDD")), t.cvsName = "CSV"
    }, t.goDownloadFile = function () {
      t.cvsName = "Downloading...";
      var e = "Users_Information_" + r().format("YYYYMMDD"), n = "", s = "";
      P.isSubscriptionPeriod = 0, "ignore" == P.term ? (n = "", s = "") : ("subscription_startDate" == P.term && (P.isSubscriptionPeriod = 1), n = d("date")(P.fdt, "yyyy-MM-dd"), s = d("date")(P.tdt, "yyyy-MM-dd"));
      var i = null;
      "all" === P.selectquery ? i = {
        page: 1,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: n,
        s_endDate: s
      } : "email" === P.selectquery ? i = {
        email: P.searchvalue,
        page: 1,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: n,
        s_endDate: s
      } : "id" === P.selectquery ? i = {
        id: P.searchvalue,
        page: 1,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: n,
        s_endDate: s
      } : "firstName" === P.selectquery ? i = {
        firstName: P.searchvalue,
        page: 1,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: n,
        s_endDate: s
      } : "lastName" === P.selectquery ? i = {
        lastName: P.searchvalue,
        page: 1,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: n,
        s_endDate: s
      } : "groupid" === P.selectquery ? i = {
        groupid: P.searchvalue,
        page: 1,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: n,
        s_endDate: s
      } : "clientid" === P.selectquery ? i = {
        clientid: P.searchvalue,
        page: 1,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: n,
        s_endDate: s
      } : "redeemCode" === P.selectquery ? i = {
        redeemCode: P.searchvalue,
        page: 1,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: n,
        s_endDate: s
      } : "country" === P.selectquery ? i = {
        country: angular.lowercase(P.searchvalue),
        page: 1,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: n,
        s_endDate: s
      } : "awake" === P.selectquery && (i = {
        awake: "true",
        page: 1,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: n,
        s_endDate: s
      }), console.log(i), a.searchuserinfoExcelOfCondition(i).then(function (t) {
        console.log("res", t);
        var o = document.createElement("a");
        document.body.appendChild(o);
        var a = new Blob([t.data], {type: "application/octet-stream"}),
            n = window.URL.createObjectURL(a);
        o.href = n, o.download = e + ".zip", o.click()
      }, function (e, t) {
        401 === t && o.go("page.login"), a.messageErrorPopup("Error :  [" + e.data.error.code + "] " + e.data.error.message)
      }), t.cvsName = "CSV"
    }, t.goUserDetail = function (e) {
      console.log("USER::", e), a.user = e, a.popupProfileIndex = 0, a.popupProfile(e)
    }, t.pageChanged = function (e) {
      console.log("currentPage:::", e), t.users = [], t.loading = !0, a.currentPage = e, P.currentPage = a.currentPage;
      var o = "", n = "";
      P.isSubscriptionPeriod = 0, "ignore" == P.term ? (o = "", n = "") : ("subscription_startDate" == P.term && (P.isSubscriptionPeriod = 1), o = d("date")(P.fdt, "yyyy-MM-dd"), n = d("date")(P.tdt, "yyyy-MM-dd"));
      var r = null;
      "all" === P.selectquery ? r = {
        page: P.currentPage,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: o,
        s_endDate: n
      } : "email" === P.selectquery ? r = {
        email: P.searchvalue,
        page: P.currentPage,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: o,
        s_endDate: n
      } : "id" === P.selectquery ? r = {
        id: P.searchvalue,
        page: P.currentPage,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: o,
        s_endDate: n
      } : "firstName" === P.selectquery ? r = {
        firstName: P.searchvalue,
        page: P.currentPage,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: o,
        s_endDate: n
      } : "lastName" === P.selectquery ? r = {
        lastName: P.searchvalue,
        page: P.currentPage,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: o,
        s_endDate: n
      } : "groupid" === P.selectquery ? r = {
        groupid: P.searchvalue,
        page: P.currentPage,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: o,
        s_endDate: n
      } : "clientid" === P.selectquery ? r = {
        clientid: P.searchvalue,
        page: P.currentPage,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: o,
        s_endDate: n
      } : "redeemCode" === P.selectquery ? r = {
        redeemCode: P.searchvalue,
        page: P.currentPage,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: o,
        s_endDate: n
      } : "country" === P.selectquery ? r = {
        country: angular.lowercase(P.searchvalue),
        page: P.currentPage,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: o,
        s_endDate: n
      } : "awake" === P.selectquery && (r = {
        awake: "true",
        page: P.currentPage,
        s_membershipCode: P.selectMembership,
        s_statusCode: P.selectStatus,
        isSubscriptionPeriod: P.isSubscriptionPeriod,
        s_startDate: o,
        s_endDate: n
      }), console.log(r), a.getNewUserProfile(r, v)
    }, t.initalValue = function (e) {
      "all" === e || "awake" === e ? P.searchvalue = null : (P.currentPage = 1, t.currentPage = 1, a.currentPage = 1)
    }, t.getUserSearchBoards = function (e, n) {
      a.fulllistBoards(e).then(function (e) {
        0 == e.data.result.pageInfo.totalResourceCount ? t.users[n].digitalSignCnt = "-" : t.users[n].digitalSignCnt = e.data.result.pageInfo.totalResourceCount
      }, function (e, t) {
        401 === t && o.go("page.login")
      })
    }, t.getUserSearchSlideshows = function (e, n) {
      a.fulllistSlideshows(e).then(function (e) {
        0 == e.data.result.pageInfo.totalResourceCount ? t.users[n].slideshowCnt = "-" : t.users[n].slideshowCnt = e.data.result.pageInfo.totalResourceCount
      }, function (e, t) {
        401 === t && o.go("page.login")
      })
    }, t.getUserSearchDevices = function (e, n) {
      a.fullDevices(e).then(function (e) {
        var o = 0;
        e.data.result.devices.forEach(function (e) {
          angular.isDefined(e.state.physicalDevice) && (o += 1)
        }), 0 == o ? t.users[n].castingCnt = "-" : t.users[n].castingCnt = o
      }, function (e, t) {
        401 === t && o.go("page.login")
      })
    }, t.getUserSearchStore = function (e, a) {
      u.fullStoreProfileDetail(e).then(function (e) {
        if (angular.isDefined(e.data.contents[0])) if (angular.isDefined(e.data.contents[0].locale)) if (e.data.contents.length > 0) {
          var o = angular.uppercase(e.data.contents[0].locale);
          "KO" == o ? t.users[a].locale = "KR" : t.users[a].locale = o
        } else t.users[a].locale = "-"; else t.users[a].locale = "-"; else t.users[a].locale = "-"
      }, function (e, t) {
        401 === t && o.go("page.login")
      })
    }, t.allUserSearchBoards = function (e, n) {
      a.fulllistBoards(e).then(function (e) {
        t.tempUsersC[n].digitalSignCnt = e.data.result.pageInfo.totalResourceCount
      }, function (e, t) {
        401 === t && o.go("page.login")
      })
    }, t.allUserSearchSlideshows = function (e, n) {
      a.fulllistSlideshows(e).then(function (e) {
        t.tempUsersC[n].slideshowCnt = e.data.result.pageInfo.totalResourceCount
      }, function (e, t) {
        401 === t && o.go("page.login")
      })
    }, t.allUserSearchDevices = function (e, n) {
      a.fullDevices(e).then(function (e) {
        t.tempUsersC[n].castingCnt = e.data.result.devices.length
      }, function (e, t) {
        401 === t && o.go("page.login")
      })
    }
  }

  function t(e, t, n, r, s, i, c, l, u) {
    function d() {
      function u(e) {
        r.getDevices(e, p)
      }

      function p(e) {
        t.devices = e.result.devices, console.log("DEVICES:::", t.devices);
        var o = 0;
        0 == t.devices.length && (t.devicesList.user.castingCnt = "-"), t.devices.forEach(function (e) {
          if (angular.isDefined(e.state.heartbeat)) {
            var n = c("date")(a(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
                r = c("date")(a(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
            n > r ? (t.lastRunning.push(n), moment().diff(n) <= 6e4 && t.lastRunningOne.push(n)) : (t.lastRunning.push(r), moment().diff(r) <= 6e4 && t.lastRunningOne.push(r))
          }
          angular.isDefined(e.state.physicalDevice) && (o += 1), 0 == o ? t.devicesList.user.castingCnt = "-" : t.devicesList.user.castingCnt = o
        }), t.lastRunning.length > 0 && (t.desclastRunning = c("orderBy")(t.lastRunning, "", !0)), console.log("desclastRunning ::::", t.desclastRunning)
      }

      function f(e) {
        i.getStoreProfile("userid", e, 1, m)
      }

      function m(e) {
        console.log("STORE RESULT::", e.contents), t.devicesList.storeProfile = e.contents, t.devicesList.pageInfo = e.pageInfo, t.devicesList.totalItems = t.devicesList.pageInfo.totalResourceCount, t.devicesList.currentPage = t.devicesList.pageInfo.currentPage, t.devicesList.itemsPerPage = 16, e.contents.length > 0 && e.contents[0].productCategories.length > 0 && (console.log("productCategories::", e.contents[0].productCategories[0].id), t.productCategoriesId = e.contents[0].productCategories[0].id, l(function () {
          var e = t.activeResources.findIndex(function (e) {
            return e.id === t.productCategoriesId
          });
          t.selectedProductCategory = t.activeResources[e], console.log("$scope.selectedProductCategory", t.selectedProductCategory)
        }, 1500))
      }

      function h(e) {
        console.log("BOARD RESULT::", e), t.boardsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.boards = e.result.contents : t.boards = t.boards.concat(e.result.contents), t.devicesList.boardsPageInfo = e.result.pageInfo
      }

      function v(e) {
        r.listBoards(e, t.userBoardsPage, h)
      }

      function y(e) {
        console.log("items.result.contents:::", e.result.contents), t.slideshowsCnt = e.result.pageInfo.totalResourceCount, 1 == e.result.pageInfo.currentPage ? t.slideshows = e.result.contents : t.slideshows = t.slideshows.concat(e.result.contents), t.devicesList.slideshowsPageInfo = e.result.pageInfo
      }

      function b(e) {
        r.listSlideshows(e, t.userSlideshowsPage, y)
      }

      g.basepath = e.basepath, console.log("UserInfoLoader.user:::", r.user), r.user.created = a(r.user.created), r.user.lastModified = a(r.user.lastModified), t.devicesList.user = r.user, u(t.devicesList.user.id), v(t.devicesList.user.id), b(t.devicesList.user.id), f(t.devicesList.user.id), t.currentDate = moment().format("YYYY/MM/DD HH:mm:ss"), t.currentDate1 = moment().add(1, "minutes").format("YYYY/MM/DD HH:mm:ss"), console.log("$$:: ", moment().diff(t.currentDate1)), t.activeResources = [];
      for (var D = 1; D <= 2; D++) {
        var w = "en";
        r.getUserProductCategories(w, D).then(function (e) {
          e.data.result.resources.forEach(function (e) {
            t.activeResources.push(e)
          })
        }, function (e, t) {
          401 === t && n.go("page.login")
        });
        var w = "ko";
        r.getUserProductCategories(w, D).then(function (e) {
          e.data.result.resources.forEach(function (e) {
            t.activeResources.push(e)
          })
        }, function (e, t) {
          401 === t && n.go("page.login")
        })
      }
      console.log("$scope.activeResources", t.activeResources), t.checkRunning = function (e) {
        if (angular.isDefined(e.state.heartbeat)) {
          var t = c("date")(a(e.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
              o = c("date")(a(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
          return t > o ? moment().diff(t) > 6e4 : moment().diff(o) > 6e4
        }
        if (angular.isDefined(e.state.displaySurface.deviceModel)) {
          if (angular.isDefined(e.state.displaySurface.deviceModel.modifiedTimestamp)) {
            var o = c("date")(a(e.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
            return moment().diff(o) > 6e4
          }
          return !0
        }
        return !0
      }, t.goStoreDetail = function (e) {
        s.open({
          template: "storeProfileDetailDialog",
          controller: ["$scope", "$timeout", function (t, o) {
            t.storeProfile = e
          }],
          className: "ngdialog-theme-default custom-width"
        })
      }, t.loadMoreBoard = function () {
        16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount && (t.userBoardsPage = t.userBoardsPage + 1, r.listBoards(t.devicesList.user.id, t.userBoardsPage, h))
      }, t.loadMoreSlideshow = function () {
        16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount && (t.userSlideshowsPage = t.userSlideshowsPage + 1, r.listSlideshows(t.devicesList.user.id, t.userSlideshowsPage, y))
      }, t.isEndBoard = function () {
        return !(t.devicesList.boardsPageInfo && 16 * (t.userBoardsPage - 1) + t.devicesList.boardsPageInfo.currentResourceCount < t.devicesList.boardsPageInfo.totalResourceCount)
      }, t.isEndSlideshow = function () {
        return !(t.devicesList.slideshowsPageInfo && 16 * (t.userSlideshowsPage - 1) + t.devicesList.slideshowsPageInfo.currentResourceCount < t.devicesList.slideshowsPageInfo.totalResourceCount)
      }, t.goDeviceDetail = function (e) {
        console.log("before", e), r.selectedDevice = e, s.open({
          template: "userDeviceDetailDialog",
          controller: o,
          className: "ngdialog-theme-default custom-width"
        })
      }, t.goBoardDetail = function (e) {
        s.open({
          template: "boardDetailDialog", controller: ["$scope", "$timeout", function (t, o) {
            function a(e) {
              console.log("@@@::", e.result.resources), t.resources = e.result.resources
            }

            console.log("BOARD:::", e), t.board = e, t.resources = null, t.getAuthorizedLocation = function (e) {
              return r.getAuthorizedLocation(e)
            }, t.getNonAuthorizedLocation = function (e) {
              return r.getNonAuthorizedLocation(e)
            }, t.openurl = function (e) {
              window.open(t.getAuthorizedLocation(e), "_blank")
            }, t.getUserBoardsDetails = function (e) {
              return r.getBoardsDetails(e, a)
            }, t.getUserBoardsDetails(t.board.id)
          }], className: "ngdialog-theme-default custom-width"
        })
      }, t.goSlideshowDetail = function (e) {
        s.open({
          template: "slideshowDetailDialog",
          controller: ["$scope", "$timeout", function (t, o) {
            t.slideshow = e, t.getAuthorizedLocation = function (e) {
              return r.getAuthorizedLocation(e)
            }, t.getNonAuthorizedLocation = function (e) {
              return r.getNonAuthorizedLocation(e)
            }, t.openurl = function (e) {
              window.open(t.getAuthorizedLocation(e), "_blank")
            }
          }],
          className: "ngdialog-theme-default custom-width"
        })
      }, t.getAuthorizedLocation = function (e) {
        return r.getAuthorizedLocation(e)
      }, t.getNonAuthorizedLocation = function (e) {
        return r.getNonAuthorizedLocation(e)
      }, t.getLastTimeDeviceConnected = function (e, t) {
        var o = c("date")(a(e), "yyyy/MM/dd HH:mm:ss"), n = c("date")(a(t), "yyyy/MM/dd HH:mm:ss");
        return o > n ? o : n
      }, t.getDeviceType = function (e) {
        return "showit-virtual-cast" == e ? "Full Screen Mode" : "Device"
      }, t.removeDevice = function (e) {
        console.log("deviceid", e), t.deviceid = e;
        var o = s.openConfirm({
          template: '<p>Are you sure you want to remove device </p><p>id {{deviceid}}  ?</p><div class="row"><div class="col-md-3 text-center"></div><div class="col-md-3 text-center"><button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes</button></div><div class="col-md-3 text-center"><button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No</button></div><div class="col-md-3 text-center"></div></div>',
          plain: !0,
          className: "ngdialog-theme-default",
          scope: t
        });
        o.then(function (o) {
          console.log("resolved:" + o), r.removeDevice(e).then(function (e) {
            console.log("items", e), d(), u(t.devicesList.user.id)
          }, function (e, t) {
            401 === t && n.go("page.login")
          })
        }, function (e) {
          console.log("rejected:" + e)
        })
      }
    }

    var g = this;
    t.userBoardsPage = 1, t.userSlideshowsPage = 1, t.devicesList = {}, t.oneAtATime = !0, t.status = {isFirstOpen: !0}, t.lastRunning = [], t.lastRunningOne = [], t.desclastRunning = [], d(), t.groupCheck = u.localStorage.getItem("ngStorage-groups").indexOf("showit-superuser")
  }

  function o(e, t, o, n, r) {
    function s() {
      function o() {
        var e = n.selectedDevice;
        console.log("after", e), t.deviceDetailText = e;
        var o = e.ownerId;
        n.getUserProfile("userid", o, 1, s), t.deviceDetailText.state.displaySurface.cloudModel.modifiedTimestamp = a(t.deviceDetailText.state.displaySurface.cloudModel.modifiedTimestamp)
      }

      function s(e) {
        console.log("DONE::", e), t.device.user = e.result[0]
      }

      i.basepath = e.basepath, o(), t.getAuthorizedLocation = function (e) {
        return n.getAuthorizedLocation(e)
      }, t.getNonAuthorizedLocation = function (e) {
        return n.getNonAuthorizedLocation(e)
      }, t.openurl = function (e) {
        window.open(t.getAuthorizedLocation(e), "_blank")
      }, t.getLastTimeDeviceConnected = function () {
        if (angular.isDefined(t.deviceDetailText.state.heartbeat)) {
          var e = r("date")(a(t.deviceDetailText.state.heartbeat.deviceModel.data.lastTimeHeartbeat), "yyyy/MM/dd HH:mm:ss"),
              o = r("date")(a(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss");
          return e > o ? e : o
        }
        return r("date")(a(t.deviceDetailText.state.displaySurface.deviceModel.modifiedTimestamp), "yyyy/MM/dd HH:mm:ss")
      }
    }

    var i = this;
    t.device = {}, s()
  }

  function a(e) {
    if (e) return angular.isNumber(e) ? e : e.indexOf("T") > 0 ? (e.indexOf("Z") == -1 && e.indexOf("+") == -1 && (e += "Z"), e) : e
  }

  angular.module("app.support").controller("UserSearchController", e), e.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "moment", "Config", "$q", "$http", "$timeout", "StoreSearchLoader", "$filter", "$locale", "$translate", "WorkhistoryInfoLoader"], e.$inject = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "moment", "Config", "$q", "$http", "$timeout", "StoreSearchLoader", "$filter", "$locale", "$translate", "WorkhistoryInfoLoader"], t.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "ngDialog", "StoreSearchLoader", "$filter", "$timeout", "$window"], o.$inejct = ["RouteHelpers", "$scope", "$state", "UserInfoLoader", "$filter"]
}();