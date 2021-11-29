// CODE WAS FOUND AS TUTORIAL ON http://geoffmuskett.com/really-simple-jquery-character-countdown-in-textarea/
$(document).ready(function() {
    var maxLength = 140;
    $('textarea').keyup(function() {
        var length = $(this).val().length;
        var length = maxLength - length;
        $('#tweet-counter').text(length);
        // Turning the color of the counter to RED if length of the characters inputted exceeds 140. 
        if (length < 0){
            document.getElementById("tweet-counter").innerHTML = '<span style="color: red;">'+length+' </span>';
        }
    });
});