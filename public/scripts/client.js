/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const createTweetElement = function(tweet) {
    let $tweet = `<section id="tweets-container">
      <article class="tweet">
        <header>
          <img src="${tweet.user.avatars}" alt="profile picture">
          <p class="user">${tweet.user.name}</p>
          <p class="user-handle">${tweet.user.handle}</p>
        </header>
        <div class="tweet-body">
          <p>${tweet.content.text}</p>
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
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  };

  const tweetData2 = {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1638065358738
  };

  const $tweet = createTweetElement(tweetData);
  const $tweet2 = createTweetElement(tweetData2);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  console.log($tweet2); // to see what it looks like
  $('#tweets-container').append($tweet2); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


});