webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Countdown\", function() { return Countdown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_chief_Documents_nlw_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ \"./src/styles/components/Countdown.module.css\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/Users/chief/Documents/nlw/moveit/src/components/Countdown.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar countdownTimeout;\nfunction Countdown() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_3__[\"ChallengesContext\"]),\n      startNewChallenge = _useContext.startNewChallenge;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0.1 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      hasFinished = _useState3[0],\n      setHasFinished = _useState3[1];\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  var _String$padStart$spli = String(minutes).padStart(2, \"0\").split(\"\"),\n      _String$padStart$spli2 = Object(_Users_chief_Documents_nlw_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli, 2),\n      minuteLeft = _String$padStart$spli2[0],\n      minuteRight = _String$padStart$spli2[1];\n\n  var _String$padStart$spli3 = String(seconds).padStart(2, \"0\").split(\"\"),\n      _String$padStart$spli4 = Object(_Users_chief_Documents_nlw_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli3, 2),\n      secondLeft = _String$padStart$spli4[0],\n      secondRight = _String$padStart$spli4[1];\n\n  function startCountdown() {\n    setIsActive(true);\n  }\n\n  function resetCountdown() {\n    clearTimeout(countdownTimeout);\n    setIsActive(false);\n    setTime(0.1 * 60);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (isActive && time > 0) {\n      countdownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time === 0) {\n      setHasFinished(true);\n      setIsActive(false);\n      startNewChallenge();\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      disabled: true,\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,\n      children: [\"Ciclo encerrado\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"icons/level-up.svg\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: \"\".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton, \" \").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButtonActive),\n        onClick: resetCountdown,\n        children: [\"Abandonar ciclo\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"icons/close.svg\",\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 13\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,\n        onClick: startCountdown,\n        children: \"Iniciar um ciclo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 13\n      }, this)\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Countdown, \"cVu0hsDf1rnm10+qbfS96WIdEJo=\");\n\n_c = Countdown;\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeD82MzY2Il0sIm5hbWVzIjpbImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd24iLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJzdGFydE5ld0NoYWxsZW5nZSIsInVzZVN0YXRlIiwidGltZSIsInNldFRpbWUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwiaGFzRmluaXNoZWQiLCJzZXRIYXNGaW5pc2hlZCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJzcGxpdCIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsInNlY29uZExlZnQiLCJzZWNvbmRSaWdodCIsInN0YXJ0Q291bnRkb3duIiwicmVzZXRDb3VudGRvd24iLCJjbGVhclRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Iiwic3R5bGVzIiwiY291bnRkb3duQ29udGFpbmVyIiwiY291bnRkb3duQnV0dG9uIiwiY291bnRkb3duQnV0dG9uQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGdCQUFKO0FBRU8sU0FBU0MsU0FBVCxHQUFxQjtBQUFBOztBQUFBLG9CQUNJQyx3REFBVSxDQUFDQyw2RUFBRCxDQURkO0FBQUEsTUFDbEJDLGlCQURrQixlQUNsQkEsaUJBRGtCOztBQUFBLGtCQUdGQyxzREFBUSxDQUFDLE1BQU0sRUFBUCxDQUhOO0FBQUEsTUFHbkJDLElBSG1CO0FBQUEsTUFHYkMsT0FIYTs7QUFBQSxtQkFJTUYsc0RBQVEsQ0FBQyxLQUFELENBSmQ7QUFBQSxNQUluQkcsUUFKbUI7QUFBQSxNQUlUQyxXQUpTOztBQUFBLG1CQUtZSixzREFBUSxDQUFDLEtBQUQsQ0FMcEI7QUFBQSxNQUtuQkssV0FMbUI7QUFBQSxNQUtOQyxjQUxNOztBQU8xQixNQUFNQyxP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RVAsY0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhKLHFCQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJDRDs7R0E5RWV0QixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzc1wiO1xuXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd24oKSB7XG4gIGNvbnN0IHsgc3RhcnROZXdDaGFsbGVuZ2UgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xuXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDAuMSAqIDYwKTtcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG4gIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7XG5cbiAgY29uc3QgW21pbnV0ZUxlZnQsIG1pbnV0ZVJpZ2h0XSA9IFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCBcIjBcIikuc3BsaXQoXCJcIik7XG4gIGNvbnN0IFtzZWNvbmRMZWZ0LCBzZWNvbmRSaWdodF0gPSBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgXCIwXCIpLnNwbGl0KFwiXCIpO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCkge1xuICAgIHNldElzQWN0aXZlKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKSB7XG4gICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93blRpbWVvdXQpO1xuICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICBzZXRUaW1lKDAuMSAqIDYwKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKSB7XG4gICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWUodGltZSAtIDEpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lID09PSAwKSB7XG4gICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKTtcbiAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlKCk7XG4gICAgfVxuICB9LCBbaXNBY3RpdmUsIHRpbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPnttaW51dGVSaWdodH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3Bhbj46PC9zcGFuPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuPntzZWNvbmRMZWZ0fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57c2Vjb25kUmlnaHR9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7aGFzRmluaXNoZWQgPyAoXG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufT5cbiAgICAgICAgICBDaWNsbyBlbmNlcnJhZG9cbiAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2xldmVsLXVwLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb3VudGRvd25CdXR0b259ICR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbkFjdGl2ZX1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtyZXNldENvdW50ZG93bn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWJhbmRvbmFyIGNpY2xvXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvY2xvc2Uuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25CdXR0b259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0Q291bnRkb3dufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBJbmljaWFyIHVtIGNpY2xvXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n");

/***/ })

})