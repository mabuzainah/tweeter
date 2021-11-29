/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
const createTweetElement = function (tweetObject) {
    const tweet = tweetObject.content.text;
    const name = tweetObject.user.name;
    const avatarsImg = tweetObject.user.avatars;
    const tweetHandle = tweetObject.user.handle;

    const $createAvatar = $('<img>').attr("src",avatarsImg);
    const $createName = $('<div>').addClass("user").text(name);
    const $createTweet = $('<div>').addClass("tweet-body").text(tweet);
    const $createHandle = $('<p>').addClass("user-handle").text(tweetHandle);

    const $iconDiv1 = $("<div>").addClass("tweet-icons");
    const $flag = $("<i>").addClass("fas fa-flag");
    const $iconDiv2 = $("<div>").addClass("tweet-icons");
    const $retweet = $("<i>").addClass("fas fa-retweet");
    const $iconDiv3 = $("<div>").addClass("tweet-icons");
    const $heart = $("<i>").addClass("fas fa-heart");

    const $tweetObject = $("<article>");
    const $header = $("<header>");
    const $footer = $("<footer>");
    const $content = $("<div>").addClass("content");
    const $dateOfTweet = $("<p>").text(tweetObject['created_at']);

    $iconDiv1.append($flag);
    $iconDiv2.append($retweet);
    $iconDiv3.append($heart);
    $header.append($createAvatar, $createName, $createHandle);
    $content.append($createTweet);
    $footer.append($dateOfTweet, $iconDiv1, $iconDiv2, $iconDiv3);
    $tweetObject.append($header, $content, $footer);

    return $tweetObject;
};
});
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
 }

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.