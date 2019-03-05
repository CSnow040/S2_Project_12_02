"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Caleb Snow
   Date:  3/1/19
   
   Filename: hg_report.js
	
*/
//This variable is what holds all of the basic information about the game which includes its ESBR, Release, title name, manufacturer, etc.
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By:" + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg' /> <table><tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr><tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESBR</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td> </tr><tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;
//This document is grabbed from the HTML in which we put the article tag to be called in by the JavaSript to be manipulated by it    
document.getElementsByTagName("article")[0].innerHTML = gameReport;
//This variable just makes it so that the intial value of the ratingSum is zero 
var ratingSum = 0;
//This variable is more specific in that it gives each rating a specific length 
var ratingCount = ratings.length;
//This first for loop is used to make the index's intial value 0, increase in intervals of 1, and to stop at the ratingCount 
for (var i = 0; i <= ratingCount; i++) {
    ratingSum += ratings[i];
}
//This variable make the rating average based off of the ratingSummary divided by the ratingCount
var ratingAvg = ratingSum / ratingCount;
//This makes it so that the user can give the game a rating as well as see the average rating for the game in general
var ratingReport = "<h1>Customer Reviews</h1><h2>" + ratingAvg + "out of 5 stars (" + ratingCount + " reviews)</h2>";
//This for loop is giving the index an intial value of zero increase in intervals of 1, and end at 2  
for (var i = 0; i <= 2; i++) {
    //This is used to aually give the ratings all of its needed information including the title, author, and date of rating all effecting a div called upon by a text string 
    ratingReport += "<div class='review'> <h1>" + ratingTitles[i] + "</h1><table> <tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr><tr><th>Rating</th><td>";
    //This nested for loop's function is to give the rating mechanism to the user 
    for (var j = 1; j <= ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png' />";
    }
    //This is how the rating gains a small summary of the main ratings/reviews
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}
//This calls upon the aside tag in the HTML and making it equal to the ratingReport in the JavaScript 
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;