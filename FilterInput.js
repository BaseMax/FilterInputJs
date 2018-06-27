/**
*
* @Name : FilterInput.js
* @Version : 1.0
* @Programmer : Max
* @Date : 2018-06-27
* @Released under : https://github.com/BaseMax/FilterInputJs/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/FilterInputJs
*
**/
;(function(window,document)
{
	"use strict";
	/**
	* @function exec
	*
	* @goal : Check a element and Make it ready for runtime filter input values
	*
	* @return void
	**/
	var exec=function(element)
	{
		if(element.hasAttribute("data-filter"))
		{
			var tag=(element.tagName).toLowerCase();
			var filter=element.getAttribute("data-filter");
			switch(filter)
			{
				case "decimal":
					if(tag == "input")
						element.setAttribute("type","number")
				break;
				case "integer":
					if(tag == "input")
						element.setAttribute("type","number")
				break;
				case "string":
					if(tag == "input")
						element.setAttribute("type","text")
				break;
			}
		}
	};
	/**
	* @struct filter
	*
	* @goal : access to public functions
	*
	* @return struct
	**/
	window.filter=
	{
		//////////////////////
		exec:exec,
		//////////////////////
	};
	/**
	* @struct onload
	*
	* @goal : set onclick and events after page load...
	*
	* @return void
	**/
	window.addEventListener("load",function()
	{
		var data_items;
		data_items = document.querySelectorAll("[data-filter]");
		data_items.forEach(function(item)
		{
			window.filter.exec(this);
		});
	},false);
}(window,document));
