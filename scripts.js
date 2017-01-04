$(document).ready(function() {

    // workaround to twitch TV's new key protocol from FCC
    var api = "api.js";

    $.getJSON(api, function(data) {

        // containers for 2 different channel types
        var online = [];
        var offline = [];

        // loop through entire API object and sort into corresponding channel type array
        for (var i = 0; i < data.length; i++) {
            if (!data[i].stream) {
                offline.push(data[i]);
            } else {
                online.push(data[i]);
            }
        }

        // repeat element with each of the 4 data pieces of JSON object data for each object in  online array
        $.each(online, function() {
            $("<img></img>").appendTo("#online").attr({src: this.stream.logo, class: 'accountLogo'});
            $("<p>" + this.stream.display_name + "</p>").appendTo("#online").attr({class: 'accountName'});
            $("<p>" + this.stream.status + "</p>").appendTo("#online").attr({class: 'accountStatus'});
            $("<a>LINK</a>").appendTo("#online").attr({target: "_blank",href: this.stream.url, class: 'accountLink'});
            $("<br>").appendTo("#online");
            $("<hr>").appendTo("#online");
        });

        // repeat element with each of the 2 data pieces of JSON object data for each object in  offline array
        $.each(offline, function() {
            if (this.display_name) {
                $("<p>" + this.display_name + "</p>").appendTo("#offline").attr({class: 'accountName'});
                $("<a>LINK</a>").appendTo("#offline").attr({target: "_blank",href: this._links.channel, class: 'accountLink'});
                $("<br>").appendTo("#offline");
                $("<hr>").appendTo("#offline");
            } else {
                return;
            }

        });
    });





}); // closing script
