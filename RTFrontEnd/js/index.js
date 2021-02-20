
function sendRequest() {
    
}

function showReply(message) {
    $("#replies").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#send" ).click(function() { sendRequest(); });
});