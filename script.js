// Dependencies
// var title = $("#article-title")
// var header = $("#arcticle-header")
// var source = $("#article-source")
// var container = $("#article-container")
// var author = $("#article-author")
// var date = $("#article-date")
// var article = $("#article-text")

var APIKey= "6d301cb460de4af881b497a471418db4"
var queryURL= "http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-15&sortBy=publishedAt&apiKey=" + APIKey

$.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
      console.log(response);
  })