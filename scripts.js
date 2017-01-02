$(document).ready(function() {

    // workaround to twitch TV's new key protocol from FCC
    var api = "api.js";

    var online = [];
    var offline = [];

    $.getJSON(api, function(data) {

        // loop through entire API object and sort into corresponding array
        for (var i = 0; i < data.length; i++) {
            if (!data[i].stream) {
                offline.push(data[i]);
            } else {
                online.push(data[i]);
            }
        }

        console.log(online, offline);

        // $("#accountLogo").attr("src", data[0].stream.logo);
        // $("#accountName").html(data[0].stream.display_name);
        // $("#accountStatus").html(data[0].stream.status);
        // $("#accountLink").attr("href", data[0].stream.url);

    });





}); // closing script
