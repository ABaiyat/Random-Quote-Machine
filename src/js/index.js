$(document).ready(function() {
  var sQuote ="";
  // Gets the first quote to display. Uses ajax to pull a quote and store
  // its quote content and the author
  $.ajax({
    url:
      "https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    success: function(a) {
      document.getElementById("quote").innerHTML = a[0].content;
      document.getElementById("author").innerHTML = "- " + a[0].title;
      sQuote ="";
      sQuote = a[0].content;
    },
    cache: false
  });

  // If the new quote button is clicked, gets a quote and displays it
  $("#newQ").on("click", function() {
    $.ajax({
      url:
        "https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      success: function(a) {
        document.getElementById("quote").innerHTML = a[0].content;
        document.getElementById("author").innerHTML = "- " + a[0].title;
        sQuote ="";
        sQuote = a[0].content;
      },
      cache: false
    });
  });

  // If the send tweet button is clicked, opens the new tweet url
  $("#sendTweet").on("click", function() {
    if (jQuery(sQuote).text()) {
      sQuote = jQuery(sQuote).text();
    }
    window.open("https://twitter.com/intent/tweet?text=" + sQuote);
  });  
})
