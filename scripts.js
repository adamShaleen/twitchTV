$(document).ready(function() {

    // workaround to twitch TV's new key protocol from FCC
    var api = "api.js";

    $.getJSON(api, function(data) {

        console.log(data);

        $("#accountLogo").attr("src", data[0].stream.logo);
        $("#accountName").html(data[0].stream.display_name);
        $("#accountStatus").html(data[0].stream.status);
        $("#accountLink").attr("href", data[0].stream.url);

    });









}); // closing script
