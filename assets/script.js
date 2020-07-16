// Dependencies
// var title = $("#article-title")
// var header = $("#arcticle-header")
// var source = $("#article-source")
// var container = $("#article-container")
// var author = $("#article-author")
// var date = $("#article-date")
// var article = $("#article-text")

var APIKey= "56949a1e-1226-4cc0-a36d-0ed86e97d690"
var queryURL= "https://api.intellexer.com/intellexerApi/analyzeSentiments/?"  + APIKey;

$.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
      console.log(response);
  })