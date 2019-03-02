"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Caleb Snow
   Date:  3/1/19
   
   Filename: hg_report.js
	
*/

var gameReport =
    "<h1>" + itemTitle + "</h1> <h2>By:" + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt=id id=gameImg /> <table><tr><th>Product ID</th><td>id</td></tr> <tr><th>" + itemPrice + "</th><td>price</td></tr><tr><th>" + itemPlatform + "</th><td>platform</td></tr> <tr><th>" + itemESRB + "</th><td>esrb</td></tr> <tr><th>" + itemCondition +
    "</th><td>condition</td> </tr><tr><th>" + itemRelease + "</th><td>release</td></tr></table>" + itemSummary;

document.getElementById("article").innerHTML = gameReport;

var ratingsSum = 0;

var ratingsCount = ratings.length;