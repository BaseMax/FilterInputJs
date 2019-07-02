/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var require;/**\r\n *\r\n * @Name : FilterInput.js\r\n * @Version : 1.1\r\n * @Programmer : Max\r\n * @Date : 2018-06-27-2018-07-02\r\n * @Released under : https://github.com/BaseMax/FilterInputJs/blob/master/LICENSE\r\n * @Repository : https://github.com/BaseMax/FilterInputJs\r\n *\r\n **/\r\n(function(window, document) {\r\n  \"use strict\";\r\n\r\n  /**\r\n   * @function exec\r\n   *\r\n   * @goal : Check a element and Make it ready for runtime filter input values\r\n   *\r\n   * @return void\r\n   **/\r\n  const exec = function(element) {\r\n    function exec_decimal(event) {\r\n      this.value = this.value.replace(/[^0-9\\.]/g, \"\");\r\n      if (\r\n        (event.which != 46 || this.value.indexOf(\".\") != -1) &&\r\n        (event.which < 48 || event.which > 57)\r\n      ) {\r\n        event.preventDefault();\r\n      }\r\n    }\r\n\r\n    function exec_integer(event) {\r\n      this.value = this.value.replace(/[^\\d].+/, \"\");\r\n      if (event.which < 48 || event.which > 57) {\r\n        event.preventDefault();\r\n      }\r\n    }\r\n\r\n    function exec_string(event) {\r\n      //soon\r\n    }\r\n\r\n    function exec_any(event) {\r\n      //soon\r\n    }\r\n\r\n    function exec_any_empty(event) {\r\n      //soon\r\n    }\r\n\r\n    if (element.hasAttribute(\"data-filter\")) {\r\n      var tag = element.tagName.toLowerCase();\r\n      var filter = element.getAttribute(\"data-filter\");\r\n      var require = false;\r\n      ///////////////////////////////////////////////\r\n      if (filter.startsWith(\"!\")) {\r\n        filter = filter.substr(1);\r\n        require = true;\r\n      }\r\n      ///////////////////////////////////////////////\r\n      switch (filter) {\r\n        case \"decimal\":\r\n          if (tag == \"input\") {\r\n            element.addEventListener(\"blur\", exec_decimal);\r\n            element.addEventListener(\"keypress\", exec_decimal);\r\n            element.addEventListener(\"keyup\", exec_decimal);\r\n            element.setAttribute(\"type\", \"number\");\r\n          }\r\n          break;\r\n        case \"integer\":\r\n          if (tag == \"input\") {\r\n            element.addEventListener(\"blur\", exec_integer);\r\n            element.addEventListener(\"keypress\", exec_integer);\r\n            element.addEventListener(\"keyup\", exec_integer);\r\n            element.setAttribute(\"type\", \"number\");\r\n          }\r\n          break;\r\n        /*\r\n\t\t\t\tcase \"string\":\r\n\t\t\t\t\tif(tag == \"input\")\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\telement.addEventListener(\"blur\",exec_string);\r\n\t\t\t\t\t\telement.addEventListener(\"keypress\",exec_string);\r\n\t\t\t\t\t\telement.addEventListener(\"keyup\",exec_string);\r\n\t\t\t\t\t\telement.setAttribute(\"type\",\"text\")\r\n\t\t\t\t\t}\r\n\t\t\t\tbreak;\r\n\t\t\t\tcase \"any\":\r\n\t\t\t\t\tif(tag == \"input\")\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\telement.addEventListener(\"blur\",exec_any);\r\n\t\t\t\t\t\telement.addEventListener(\"keypress\",exec_any);\r\n\t\t\t\t\t\telement.addEventListener(\"keyup\",exec_any);\r\n\t\t\t\t\t\telement.setAttribute(\"type\",\"text\")\r\n\t\t\t\t\t}\r\n\t\t\t\tbreak;\r\n\t\t\t\tcase \"!any\":\r\n\t\t\t\t\tif(tag == \"input\")\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\telement.addEventListener(\"blur\",exec_any_empty);\r\n\t\t\t\t\t\telement.addEventListener(\"keypress\",exec_any_empty);\r\n\t\t\t\t\t\telement.addEventListener(\"keyup\",exec_any_empty);\r\n\t\t\t\t\t\telement.setAttribute(\"type\",\"text\")\r\n\t\t\t\t\t}\r\n\t\t\t\tbreak;\r\n\t\t\t\t*/\r\n      }\r\n      if (require == true) element.setAttribute(\"required\", \"required\");\r\n      else element.removeAttribute(\"required\");\r\n    }\r\n  };\r\n\r\n  /**\r\n   * @struct filter\r\n   *\r\n   * @goal : access to public functions\r\n   *\r\n   * @return struct\r\n   **/\r\n  window.filter = {\r\n    //////////////////////\r\n    exec: exec\r\n    //////////////////////\r\n  };\r\n\r\n  /**\r\n   * @struct onload\r\n   *\r\n   * @goal : set onclick and events after page load...\r\n   *\r\n   * @return {void}\r\n   **/\r\n  window.addEventListener(\r\n    \"load\",\r\n    function() {\r\n      var data_items;\r\n      data_items = document.querySelectorAll(\"[data-filter]\");\r\n      data_items.forEach(function(item) {\r\n        window.filter.exec(item);\r\n      });\r\n    },\r\n    false\r\n  );\r\n})(window, document);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });