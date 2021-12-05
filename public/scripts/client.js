/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  //function to allow creation of tweetElement

  const createTweetElement = function(tweet) {
    let $tweet = `<section id="tweets-container">
      <article class="tweet">
        <header>
          <img src="${tweet.user.avatars}" alt="profile picture">
          <p class="user">${tweet.user.name}</p>
          <p class="user-handle">${tweet.user.handle}</p>
        </header>
        <div class="tweet-body">
          <p> ${escape(tweet.content.text)}</p>
        </div>
        <footer>
          <p class="counter-days">${timeago.format(tweet.created_at)}</p>
          <div class="tweet-icons">
            <i class="fas fa-flag"></i>
          </div>
          <div class="tweet-icons">
            <i class="fas fa-retweet"></i>
          </div>  
          <div class="tweet-icons">
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>
      </section>`;
    return $tweet;
  };

  //create function to prevent cross site scripting
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //clicking on the element <i> in nav bar to toggle Tweet Box
  $(".arrowDown a").click(function(){
    var toggleTweet = document.getElementById("new-tweet");
    if (toggleTweet.style.display === "none") {
      toggleTweet.style.display = "block";
      $('#new-tweet').slideDown();
    } else {
      toggleTweet.style.display = "none";
      $('#new-tweet').slideUp();
    }
  });

  // Submitting the form using jQuery and Ajax 
  $("#newTweetForm").submit(function(e) {
    e.preventDefault(); // prevent actual form submit
    const form = $(this)
    const url = form.attr('action'); //get submit url [replace url here if desired]  
    
    if (document.getElementById("tweet-text").value.length == 0 ) {
      $('#tooLongError').slideUp();
      $('#emptyError').slideDown();
    }
    else if (document.getElementById("tweet-text").value.length >= 140) {
      $('#emptyError').slideUp();
      $('#tooLongError').slideDown();
      
    } else {
      $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        // data: "text=test", // serializes form input
        success: function(data){
          console.log(data);
          //update the page without having to manually reload the page.
          loadTweets();
          //clearing the textarea after submission of form and loading of tweets
          location.reload();
        }
      })
    }
    
  });


  //function to render the Tweets
  const renderTweets = function(tweets) {
    $('#tweets-container').empty();
    for (let i = 0; i < tweets.length; i++) {
      console.log("Here is my tweet",tweets);
      $("#tweets-container").prepend(createTweetElement(tweets[i]));
    }
  };

    // Function to load the tweets from the "tweets" page in the server.
  const loadTweets = function () {
    $.get("/tweets", function (data) {
      console.log(data);
      // render the tweets
      renderTweets(data);
    });
  }
  
  loadTweets()
});