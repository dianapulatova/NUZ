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
  inputUrl = encodeURIComponent(inputUrl);
  console.log(inputUrl);

  // DiffBot API will be pulling text from websites and sentiment analysis
  var queryURL = `https://api.diffbot.com/v3/article?token=07098c9aee4fa512825707b13860eed2&url=${inputUrl}&textAnalysis`;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log("diffbot = ", response);

    // Article classes that will push reponse text on to page
    $(".article-title").text(response.objects[0].title);
    $(".article-source").text(response.objects[0].siteName);
    $(".article-author").text(response.objects[0].author);
    $(".article-date").text(response.objects[0].estimatedDate);
    $(".article-text").text(response.objects[0].text);
    $(".sentiment-score").text(response.objects[0].sentiment);

    // Text Summarizer - pushes the info of the diffbot api into the meaning cloud api
    var text = response.objects[0].text;

    // Meaning Cloud API
    var settings = {
      async: true,
      crossDomain: true,
      url: `https://meaningcloud-summarization-v1.p.rapidapi.com/summarization-1.0?txt=${text}&sentences=5`,
      method: "GET",
      headers: {
        "x-rapidapi-host": "meaningcloud-summarization-v1.p.rapidapi.com",
        "x-rapidapi-key": "4ac9883363mshfcfeac036daf56fp143340jsn21e45046a9c6",
        accept: "application/json",
      },
    };
    // This is adding the summary from the specific url into the summary section on the website
    $.ajax(settings).done(function (summary) {
      console.log(summary.summary);
      $("#summary-text").text(summary.summary);
    });
  });
});
