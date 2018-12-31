var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope) {
  $scope.date = new Date();   
  $scope.quotes = [
{
  quote : "Life is about making an impact, not making an income.",
  author : "-Kevin Kruse",  
  background_img: "https://imagizer.imageshack.us/v2/735x413q90/908/rwyubB.jpg"
}, 
{ 
  quote : "Whatever the mind of man can conceive and believe, it can achieve.",
 author: "-Napoleon Hill",
 background_img : "https://imagizer.imageshack.us/v2/download/903/2epeE2.jpg"
},
{
  quote : "Strive not to be a success, but rather to be of value.",
  author : "-Albert Einstein",
  background_img : "https://imagizer.imageshack.us/v2/download/911/1EzQVr.jpg"
},
{
  quote : "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
  author : "-Robert Frost",
  background_img : "https://imagizer.imageshack.us/v2/download/905/Ecea8l.jpg"
},
{
  quote : "I attribute my success to this: I never gave or took any excuse.",
  author : "-Florence Nightingale",
 background_img : "https://imagizer.imageshack.us/v2/download/907/XWN5Tp.jpg"
},
{
  quote : "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
  author : "-Michael Jordan",
  background_img: "https://imagizer.imageshack.us/v2/download/905/U8uqDq.jpg"
},
{
  quote : "The mind is everything. What you think you become.",
  author : "-Buddha",
  background_img : "https://imagizer.imageshack.us/v2/download/633/403pE9.jpg"
},
{
  quote : "An unexamined life is not worth living.",
  author : "-Socrates",
  background_img : "https://imagizer.imageshack.us/v2/download/903/llk1fq.jpg"
},
{
  quote : "Your time is limited, so don’t waste it living someone else’s life.",
  author : "-Steve Jobs",
  background_img : "https://imagizer.imageshack.us/v2/download/908/FAvlPe.jpg"
},
{
  quote : "Every child is an artist.  The problem is how to remain an artist once he grows up.",
  author : "-Pablo Picasso",
  background_img : "https://imagizer.imageshack.us/v2/download/903/ncn6II.jpg"
}],  
  $scope.pickQuote = function(){
    var $quote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
   $('#quote').text($quote.quote);
    $('#author').text($quote.author);
    $('.display').append("<style>html { background: url(" + $quote.background_img + ") no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover;          -o-background-size: cover;          background-size: cover;        }      </style>");
    
    $scope.date = new Date();
    $scope.data_text = $quote.quote + " " + $quote.author;    
    
    //$("#tweet").html('<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=' + $scope.data_text  + ' from :  https://codepen.io/duttakapil/full/Nqgzqv by @duttakapil" data-size="large">Tweet</a>');
  },
  $scope.data_text = '';  
}]); 
