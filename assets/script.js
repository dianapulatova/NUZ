// Dependencies
var title = $("#article-title");
var header = $("#arcticle-header");
var source = $("#article-source");
var container = $("#article-container");
var author = $("#article-author");
var date = $("#article-date");
var article = $("#article-text");

$("#btn").on("click", function (event) {
  event.preventDefault();
  // Assigning user input to a var
  var inputUrl = $("#input-text").val();
  // trimming whitespaces off the url
  inputUrl = inputUrl.trim();
  // Diffbot Article API link
  // inputUrl = inputUrl.replace(/:/gi, "%3A");
  // inputUrl = inputUrl.replace(/\//gi, "%2A");
  inputUrl = encodeURIComponent(inputUrl);
  console.log(inputUrl);
  var queryURL = `https://api.diffbot.com/v3/article?token=07098c9aee4fa512825707b13860eed2&url=${inputUrl}`;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $(".article-title").text(response.objects[0].title);
    $(".article-source").text(response.objects[0].siteName);
    $(".article-author").text(response.objects[0].author);
    $(".article-date").text(response.objects[0].estimatedDate);
    $(".article-text").text(response.objects[0].text);
  });
});

// var arr = userInput.split(/(\s+)/).filter(function(e){return e.trim().length > 0;});;

// var title = arr.join("%20");
// console.log(title);
// var proxyUrl = "52.179.231.206"
// var queryURL= `${proxyUrl}http://newsapi.org/v2/everything?qInTitle=${title}&apiKey=6d301cb460de4af881b497a471418db4`
// $.ajax({
//     url: queryURL,
//     method: "GET",
//   }).then(function (response) {
//       console.log(response);
//   })
// var title = $("#article-title")
// var header = $("#arcticle-header")
// var source = $("#article-source")
// var container = $("#article-container")
// var author = $("#article-author")
// var date = $("#article-date")
// var article = $("#article-text")

var APIKey = "56949a1e-1226-4cc0-a36d-0ed86e97d690";
var queryInURL =
  "https://api.intellexer.com/intellexerApi/analyzeSentiments/?" + APIKey;

$.ajax({
  url: queryInURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

var settings = {
  async: true,
  crossDomain: true,
  url:
    "http://api.intellexer.com/analyzeSentiments?apikey=YourAPIKey&ontology=hotels&loadSentences=true",
  method: "POST",
  headers: {
    "content-type": "application/json",
    "cache-control": "no-cache",
  },
  processData: false,
  data:
    '[{"id": "snt1", "text": "YourText"}, {"id": "snt2", "text": "YourText"}]',
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
