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
  function handleInput1(n1) {
    alert(n1);
  }

  function handleInput2(n2) {
    alert('entro');
  }

  function add() {
    alert(n1.value + n2);
  }

  function sub() {}

  function div() {}

  function mul() {}

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      "class": "form-group",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        id: "n1",
        onChange: handleInput1(this),
        placeholder: "N\xFAmero 1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        id: "n2",
        onChange: handleInput2(this),
        placeholder: "N\xFAmero 2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      "class": "form-group",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        "class": "btn btn-primary",
        onClick: add,
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        "class": "btn btn-secondary",
        onClick: sub,
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        "class": "btn btn-warning",
        onClick: div,
        children: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        "class": "btn btn-success",
        onClick: mul,
        children: "x"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsY3VsYXRvci5qcyJdLCJuYW1lcyI6WyJUaXRsZSIsInN0eWxlZCIsImgxIiwiQ2FsY3VsYXRvciIsIkNhbGN1bGFkb3JhIiwiaGFuZGxlSW5wdXQxIiwibjEiLCJhbGVydCIsImhhbmRsZUlucHV0MiIsIm4yIiwiYWRkIiwidmFsdWUiLCJzdWIiLCJkaXYiLCJtdWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsRUFBVixtQkFBWDtLQUFNRixLOztBQVdOLFNBQVNHLFVBQVQsR0FBcUI7QUFDakIsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQU0sdUJBQVg7QUFBQSw2QkFDSTtBQUFLLGlCQUFNLFFBQVg7QUFBQSxnQ0FDQSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBRUEscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlIOztNQWJRQSxVOztBQWVULFNBQVNDLFdBQVQsR0FBc0I7QUFFbEIsV0FBU0MsWUFBVCxDQUFzQkMsRUFBdEIsRUFBMEI7QUFFdEJDLFNBQUssQ0FBQ0QsRUFBRCxDQUFMO0FBQ0Q7O0FBRUQsV0FBU0UsWUFBVCxDQUFzQkMsRUFBdEIsRUFBMEI7QUFDeEJGLFNBQUssQ0FBQyxPQUFELENBQUw7QUFDRDs7QUFHQSxXQUFTRyxHQUFULEdBQWM7QUFJVkgsU0FBSyxDQUFDRCxFQUFFLENBQUNLLEtBQUgsR0FBU0YsRUFBVixDQUFMO0FBRUg7O0FBQ0EsV0FBU0csR0FBVCxHQUFjLENBRWI7O0FBQ0QsV0FBU0MsR0FBVCxHQUFjLENBRWI7O0FBQ0QsV0FBU0MsR0FBVCxHQUFjLENBRWI7O0FBRUwsc0JBQ0k7QUFBQSw0QkFFQTtBQUFLLGVBQU0sWUFBWDtBQUFBLDhCQUVJO0FBQU8sVUFBRSxFQUFDLElBQVY7QUFBZSxnQkFBUSxFQUFFVCxZQUFZLENBQUMsSUFBRCxDQUFyQztBQUE2QyxtQkFBVyxFQUFDO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUlJO0FBQU8sVUFBRSxFQUFDLElBQVY7QUFBZSxnQkFBUSxFQUFFRyxZQUFZLENBQUMsSUFBRCxDQUFyQztBQUE4QyxtQkFBVyxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQVFBO0FBQUssZUFBTSxZQUFYO0FBQUEsOEJBQ0k7QUFBUSxpQkFBTSxpQkFBZDtBQUFnQyxlQUFPLEVBQUVFLEdBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLGlCQUFNLG1CQUFkO0FBQWtDLGVBQU8sRUFBRUUsR0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQVEsaUJBQU0saUJBQWQ7QUFBZ0MsZUFBTyxFQUFFQyxHQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBSUk7QUFBUSxpQkFBTSxpQkFBZDtBQUFnQyxlQUFPLEVBQUVDLEdBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvQkg7O01BakRRVixXO0FBb0RNRCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWxjdWxhdG9yLmM0OGM1MDY3MzA5MGYxZmY4MGU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XHJcblxyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgICBmb250LXNpemU6OTBweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJ1c3NvIE9uZSwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbmA7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIENhbGN1bGF0b3IoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlPkNhbGN1bGF0b3I8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhbGN1bGFkb3JhIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDYWxjdWxhZG9yYSgpe1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dDEobjEpIHtcclxuICAgICAgICBcclxuICAgICAgICBhbGVydChuMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0MihuMikge1xyXG4gICAgICAgIGFsZXJ0KCdlbnRybycpO1xyXG4gICAgICB9XHJcbiAgICBcclxuXHJcbiAgICAgICBmdW5jdGlvbiBhZGQoKXtcclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBhbGVydChuMS52YWx1ZStuMik7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3ViKCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkaXYoKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG11bCgpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm4xXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0MSh0aGlzKX0gcGxhY2Vob2xkZXI9XCJOw7ptZXJvIDFcIj48L2lucHV0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibjJcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXQyKHRoaXMpfSAgcGxhY2Vob2xkZXI9XCJOw7ptZXJvIDJcIj48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXthZGR9Pis8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17c3VifT4tPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiBvbkNsaWNrPXtkaXZ9Pi88L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e211bH0+eDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3I7Il0sInNvdXJjZVJvb3QiOiIifQ==