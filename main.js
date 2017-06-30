$(document).ready(function() {
  $(".getQuote").on('click', function() {
    $.ajaxSetup({cache: false});
    
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(data) {
      $(".quote").html(data[0].content);
      $(".author").html("~ " + data[0].title);
      $(".tweet").on('click', function() {
        var myUrl = 'https://twitter.com/intent/tweet?text=' + data[0].content + "~" + data[0].title;
        window.open(myUrl,'twitter');
        return false;
      });
    });
    
  });
});