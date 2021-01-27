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
        onChange: handleInput1(this),
        placeholder: "N\xFAmero 1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        id: "n2",
        onChange: handleInput2(e.target.value),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsY3VsYXRvci5qcyJdLCJuYW1lcyI6WyJUaXRsZSIsInN0eWxlZCIsImgxIiwiQ2FsY3VsYXRvciIsIkNhbGN1bGFkb3JhIiwiaGFuZGxlSW5wdXQxIiwibjEiLCJhbGVydCIsImhhbmRsZUlucHV0MiIsIm4yIiwiYWRkIiwic3ViIiwiZGl2IiwibXVsIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxLQUFLLEdBQUdDLHlEQUFNLENBQUNDLEVBQVYsbUJBQVg7S0FBTUYsSzs7QUFXTixTQUFTRyxVQUFULEdBQXFCO0FBQ2pCLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFNLHVCQUFYO0FBQUEsNkJBQ0k7QUFBSyxpQkFBTSxRQUFYO0FBQUEsZ0NBQ0EscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVBLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7TUFiUUEsVTs7QUFlVCxTQUFTQyxXQUFULEdBQXNCO0FBRWxCLFdBQVNDLFlBQVQsQ0FBc0JDLEVBQXRCLEVBQTBCO0FBRXRCQyxTQUFLLENBQUNELEVBQUQsQ0FBTDtBQUNEOztBQUVELFdBQVNFLFlBQVQsQ0FBc0JDLEVBQXRCLEVBQTBCO0FBQ3hCRixTQUFLLENBQUMsT0FBRCxDQUFMO0FBQ0Q7O0FBR0EsV0FBU0csR0FBVCxHQUFjO0FBSVZILFNBQUssQ0FBQ0QsRUFBRSxHQUFDRyxFQUFKLENBQUw7QUFFSDs7QUFDQSxXQUFTRSxHQUFULEdBQWMsQ0FFYjs7QUFDRCxXQUFTQyxHQUFULEdBQWMsQ0FFYjs7QUFDRCxXQUFTQyxHQUFULEdBQWMsQ0FFYjs7QUFFTCxzQkFDSTtBQUFBLDRCQUVBO0FBQUssZUFBTSxZQUFYO0FBQUEsOEJBRUk7QUFBTyxVQUFFLEVBQUMsSUFBVjtBQUFlLGdCQUFRLEVBQUVSLFlBQVksQ0FBQyxJQUFELENBQXJDO0FBQTZDLG1CQUFXLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBSUk7QUFBTyxVQUFFLEVBQUMsSUFBVjtBQUFlLGdCQUFRLEVBQUVHLFlBQVksQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBckM7QUFBd0QsbUJBQVcsRUFBQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFRQTtBQUFLLGVBQU0sWUFBWDtBQUFBLDhCQUNJO0FBQVEsaUJBQU0saUJBQWQ7QUFBZ0MsZUFBTyxFQUFFTixHQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBUSxpQkFBTSxtQkFBZDtBQUFrQyxlQUFPLEVBQUVDLEdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFRLGlCQUFNLGlCQUFkO0FBQWdDLGVBQU8sRUFBRUMsR0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQVEsaUJBQU0saUJBQWQ7QUFBZ0MsZUFBTyxFQUFFQyxHQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIOztNQWpEUVQsVztBQW9ETUQseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FsY3VsYXRvci5kNjQ2OTk5ZjY3ODZmMGI5YzU5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xyXG5cclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gICAgZm9udC1zaXplOjkwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSdXNzbyBPbmUsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG5gO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBDYWxjdWxhdG9yKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZT5DYWxjdWxhdG9yPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYWxjdWxhZG9yYSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ2FsY3VsYWRvcmEoKXtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5wdXQxKG4xKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWxlcnQobjEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dDIobjIpIHtcclxuICAgICAgICBhbGVydCgnZW50cm8nKTtcclxuICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgICAgZnVuY3Rpb24gYWRkKCl7XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgYWxlcnQobjErbjIpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN1Yigpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGl2KCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBtdWwoKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJuMVwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dDEodGhpcyl9IHBsYWNlaG9sZGVyPVwiTsO6bWVybyAxXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm4yXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0MihlLnRhcmdldC52YWx1ZSl9ICBwbGFjZWhvbGRlcj1cIk7Dum1lcm8gMlwiPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2FkZH0+KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXtzdWJ9Pi08L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiIG9uQ2xpY2s9e2Rpdn0+LzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17bXVsfT54PC9idXR0b24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjsiXSwic291cmNlUm9vdCI6IiJ9