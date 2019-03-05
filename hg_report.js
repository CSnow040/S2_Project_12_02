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
    "<h1>" + itemTitle + "</h1> <h2>By:" + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt=id id=gameImg /> <table><tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr><tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESBR Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td> </tr><tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

document.getElementsByTagName("article")[0].innerHTML = gameReport;

var ratingSum = 0;
var ratingCount = ratings.length;

for (var i = 0; i = ratingSum; ratingCount + ratingSum) {
    var ratingAvg = ratingSum / ratingsCount;
    var ratingReport = "<h1>Customer Reviews</h1><h2>" + ratingAvg + "out of 5 stars" + ratingCount + "</h2>";
}

for (var i = 0; i <= 2; i++) {
    var ratingReport = "<div class='review'> <h1>" + ratingTitles + "</h1><table> <tr><th>By</th><td>" + ratingAuthors + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates + "</td></tr> <tr><th>Rating</th><td>";

    for (var i = 1; i <= 5; i++) {
        var ratingReport = "<img src='hg_star.png' />";
    }

    var ratingReport = "</td></tr></table>" + ratingSummaries + "</div>";
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;