/**
 *
 * @Name : FilterInput.js
 * @Version : 1.1
 * @Programmer : Max
 * @Date : 2018-06-27-2018-07-02, 2019-07-02
 * @Released under : https://github.com/BaseMax/FilterInputJs/blob/master/LICENSE
 * @Repository : https://github.com/BaseMax/FilterInputJs
 *
 **/
(function(window, document) {
  "use strict";

  /**
   * @function exec
   *
   * @goal : Check a element and Make it ready for runtime filter input values
   *
   * @return void
   **/
  const exec = function(element) {
    function exec_decimal(event) {
      this.value = this.value.replace(/[^0-9\.]/g, "");
      if (
        (event.which != 46 || this.value.indexOf(".") != -1) &&
        (event.which < 48 || event.which > 57)
      ) {
        event.preventDefault();
      }
    }

    function add_trailing_zeroes() {
      if (this.value && this.value.indexOf('.') === -1) {
        this.value += '.00';
      }
    }

    function exec_integer(event) {
      this.value = this.value.replace(/[^\d].+/, "");
      if (event.which < 48 || event.which > 57) {
        event.preventDefault();
      }
    }

    function exec_string(event) {
      //soon
    }

    function exec_any(event) {
      //soon
    }

    function exec_any_empty(event) {
      //soon
    }

    if (element.hasAttribute("data-filter")) {
      var tag = element.tagName.toLowerCase();
      var filter = element.getAttribute("data-filter");
      var require = false;
      ///////////////////////////////////////////////
      if (filter.startsWith("!")) {
        filter = filter.substr(1);
        require = true;
      }
      ///////////////////////////////////////////////
      switch (filter) {
        case "decimal":
          if (tag == "input") {
            element.addEventListener("blur", add_trailing_zeroes);
            element.addEventListener("keypress", exec_decimal);
            element.addEventListener("keyup", exec_decimal);
            element.setAttribute("type", "number");
          }
          break;
        case "integer":
          if (tag == "input") {
            element.addEventListener("blur", exec_integer);
            element.addEventListener("keypress", exec_integer);
            element.addEventListener("keyup", exec_integer);
            element.setAttribute("type", "number");
          }
          break;
        /*
				case "string":
					if(tag == "input")
					{
						element.addEventListener("blur",exec_string);
						element.addEventListener("keypress",exec_string);
						element.addEventListener("keyup",exec_string);
						element.setAttribute("type","text")
					}
				break;
				case "any":
					if(tag == "input")
					{
						element.addEventListener("blur",exec_any);
						element.addEventListener("keypress",exec_any);
						element.addEventListener("keyup",exec_any);
						element.setAttribute("type","text")
					}
				break;
				case "!any":
					if(tag == "input")
					{
						element.addEventListener("blur",exec_any_empty);
						element.addEventListener("keypress",exec_any_empty);
						element.addEventListener("keyup",exec_any_empty);
						element.setAttribute("type","text")
					}
				break;
				*/
      }
      if (require == true) element.setAttribute("required", "required");
      else element.removeAttribute("required");
    }
  };

  /**
   * @struct filter
   *
   * @goal : access to public functions
   *
   * @return struct
   **/
  window.filter = {
    //////////////////////
    exec: exec
    //////////////////////
  };

  /**
   * @struct onload
   *
   * @goal : set onclick and events after page load...
   *
   * @return {void}
   **/
  window.addEventListener(
    "load",
    function() {
      var data_items;
      data_items = document.querySelectorAll("[data-filter]");
      data_items.forEach(function(item) {
        window.filter.exec(item);
      });
    },
    false
  );
})(window, document);
