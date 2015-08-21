/**
* simpleDate.js
*
* allows some simple date formatting as us-type-format (pass "us" as second param), de-type-format (pass "de") or iso-format (pass "iso")
*
* Copyright 2015 Adrian Wirth
* Released under the MIT license
*
* Date: 2015-08-20
*/

function simpleDate (date, format) {
	var months = {
		us : [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		de : [
			"Januar",
			"Februar",
			"März",
			"April",
			"Mai",
			"Juni",
			"Juli",
			"August",
			"September",
			"Oktober",
			"November",
			"Dezember"
		]
	};
	// basic type checks:
	if (typeof date === "string") {
		date = new Date(date);
	}
	if (toString.call(date) !== "[object Date]" || date.toString().toLowerCase() === "invalid date") {
		throw "simpleDate.js: invalid date";
		return;
	}
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	// the actual formatting:
	switch (format) {
		case "us":
			return months.us[m] + " " + d + ", " + y;
		case "de":
			return d + ". " + months.de[m] + " " + y;
		case "iso":
			return y + "-" + formatToTwoDigits(m + 1) + "-" + formatToTwoDigits(d);
		default:	// illegal format string
			throw "simpleDate.js: invalid format string";
			return;
	}
	// inserts a leading zero before the passed digit if needed and returns the result as a string, if changes were made, otherwise as passed to the function
	function formatToTwoDigits (val) {
		if (val.toString().length < 2) {
			val = "0" + val;
		}
		if (val.toString().length < 2) {
			throw "simpleDate.js: invalid day or month";
			return;
		}
		return val;
	}
}