webpackHotUpdate_N_E("pages/calculator",{

/***/ "./pages/calculator.js":
/*!*****************************!*\
  !*** ./pages/calculator.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ "./pages/menu.js");


var _jsxFileName = "C:\\webnext\\pages\\calculator.js";

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    font-size:90px;\n    color: #000;\n    text-shadow: 10px 10px 15px;\n    font-family: Russo One, sans-serif;\n    text-align:center;\n    margin-top: 100px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1(_templateObject());
_c = Title;

function Calculator() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      "class": "container text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "col-12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
          children: "Calculator"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Calculadora, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

_c2 = Calculator;

function Calculadora() {
  var n1;
  var n2;

  function add() {
    n1 = document.querySelector(".n1").value;
    n2 = document.querySelector(".n2").value;
    alert(n1 + n2);
  }

  function sub() {}

  function div() {}

  function mul() {}

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      "class": "form-group",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        id: "n1",
        "class": n1,
        placeholder: "N\xFAmero 1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        id: "n2",
        "class": n2,
        placeholder: "N\xFAmero 2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      "class": "form-group",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        "class": "btn btn-primary",
        onClick: add,
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        "class": "btn btn-secondary",
        onClick: sub,
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        "class": "btn btn-warning",
        onClick: div,
        children: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        "class": "btn btn-success",
        onClick: mul,
        children: "x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, this);
}

_c3 = Calculadora;
/* harmony default export */ __webpack_exports__["default"] = (Calculator);

var _c, _c2, _c3;

$RefreshReg$(_c, "Title");
$RefreshReg$(_c2, "Calculator");
$RefreshReg$(_c3, "Calculadora");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsY3VsYXRvci5qcyJdLCJuYW1lcyI6WyJUaXRsZSIsInN0eWxlZCIsImgxIiwiQ2FsY3VsYXRvciIsIkNhbGN1bGFkb3JhIiwibjEiLCJuMiIsImFkZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiYWxlcnQiLCJzdWIiLCJkaXYiLCJtdWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsRUFBVixtQkFBWDtLQUFNRixLOztBQVdOLFNBQVNHLFVBQVQsR0FBcUI7QUFDakIsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQU0sdUJBQVg7QUFBQSw2QkFDSTtBQUFLLGlCQUFNLFFBQVg7QUFBQSxnQ0FDQSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBRUEscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlIOztNQWJRQSxVOztBQWVULFNBQVNDLFdBQVQsR0FBc0I7QUFDZCxNQUFJQyxFQUFKO0FBQ0EsTUFBSUMsRUFBSjs7QUFFRCxXQUFTQyxHQUFULEdBQWM7QUFFYkYsTUFBRSxHQUFHRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEJDLEtBQW5DO0FBQ0FKLE1BQUUsR0FBR0UsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLEVBQThCQyxLQUFuQztBQUVHQyxTQUFLLENBQUNOLEVBQUUsR0FBQ0MsRUFBSixDQUFMO0FBRUg7O0FBQ0EsV0FBU00sR0FBVCxHQUFjLENBRWI7O0FBQ0QsV0FBU0MsR0FBVCxHQUFjLENBRWI7O0FBQ0QsV0FBU0MsR0FBVCxHQUFjLENBRWI7O0FBRUwsc0JBQ0k7QUFBQSw0QkFFQTtBQUFLLGVBQU0sWUFBWDtBQUFBLDhCQUVJO0FBQU8sVUFBRSxFQUFDLElBQVY7QUFBZSxpQkFBT1QsRUFBdEI7QUFBMkIsbUJBQVcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFJSTtBQUFPLFVBQUUsRUFBQyxJQUFWO0FBQWUsaUJBQU9DLEVBQXRCO0FBQTBCLG1CQUFXLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLGVBUUE7QUFBSyxlQUFNLFlBQVg7QUFBQSw4QkFDSTtBQUFRLGlCQUFNLGlCQUFkO0FBQWdDLGVBQU8sRUFBRUMsR0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQVEsaUJBQU0sbUJBQWQ7QUFBa0MsZUFBTyxFQUFFSyxHQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBUSxpQkFBTSxpQkFBZDtBQUFnQyxlQUFPLEVBQUVDLEdBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFJSTtBQUFRLGlCQUFNLGlCQUFkO0FBQWdDLGVBQU8sRUFBRUMsR0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CSDs7TUExQ1FWLFc7QUE2Q01ELHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbGN1bGF0b3IuYWM1ZmJjMWFjODc3ZTYwYTFlMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcclxuXHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcclxuICAgIGZvbnQtc2l6ZTo5MHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogUnVzc28gT25lLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuYDtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQ2FsY3VsYXRvcigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGU+Q2FsY3VsYXRvcjwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2FsY3VsYWRvcmEgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENhbGN1bGFkb3JhKCl7XHJcbiAgICAgICAgbGV0IG4xO1xyXG4gICAgICAgIGxldCBuMjtcclxuXHJcbiAgICAgICBmdW5jdGlvbiBhZGQoKXtcclxuXHJcbiAgICAgICAgbjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm4xXCIpLnZhbHVlO1xyXG4gICAgICAgIG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uMlwiKS52YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICAgICBhbGVydChuMStuMik7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3ViKCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkaXYoKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG11bCgpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm4xXCIgY2xhc3M9e24xfSAgcGxhY2Vob2xkZXI9XCJOw7ptZXJvIDFcIj48L2lucHV0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibjJcIiBjbGFzcz17bjJ9IHBsYWNlaG9sZGVyPVwiTsO6bWVybyAyXCI+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17YWRkfT4rPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9e3N1Yn0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgb25DbGljaz17ZGl2fT4vPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXttdWx9Png8L2J1dHRvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yOyJdLCJzb3VyY2VSb290IjoiIn0=