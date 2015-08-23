# simpleDateTime.js
A (very) simple javascript function to format a date in us, german or iso format.

## Usage
Using simpleDateTime.js is, again, really simple. All you need to do is specify a date, either as a string or already as a date object, and the format. 
The following formats are supported:
- "us" causes the output to be formatted in a us type format, such as *August 19, 2015*
- "de" causes the output to be formatted in a german type format, such as *19. August 2015*
- "iso" causes the output to be formatted in iso style, such as *2015-08-19*

If you wish to include time instead of date only, all you have to do is pass *true* as the third parameter. The time will simply be appended to the date.

Passing *true* as the fourth parameter stops errors from being thrown when date or format string are incorrect, which in my case has been useful when using simpleDateTime within an AngularJS filter.

```` js
console.log(simpleDateTime("2013-12-04", "de"));    // output: 4. Dezember 2013
console.log(simpleDateTime(new Date(), "en", true));    // output: August 20, 2015 04:31:16 p.m.
console.log(simpleDateTime(new Date(2011,10,3)), "iso");    // output: 2011-11-03
````
