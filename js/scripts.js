$(document).ready(function() {

    // workaround to twitch TV's new key protocol from FCC
    var api = "./resources/api.js";

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
            $("<img></img>").appendTo("#online").attr({src: this.stream.logo});
            $("<a><p>" + this.stream.display_name + "</p></a>").appendTo("#online").attr({target: "_blank",href: this.stream.url});
            $("<p><i>" + this.stream.status + "</i></p>").appendTo("#online");
            $("<br>").appendTo("#online");
        });

        // repeat element with each of the 2 data pieces of JSON object data for each object in  offline array
        $.each(offline, function() {
            if (this.display_name) {
                $("<img></img>").appendTo("#offline").attr({src: './style/img/offline.png', class: 'offlineImage'});
                $("<a><p>" + this.display_name + "</p></a>").appendTo("#offline").attr({target: "_blank",href: this._links.channel});
                $("<p><i>Account is not currently streaming.</i></p>").appendTo("#offline");
                $("<br>").appendTo("#offline");
            } else {
                return;
            }

        });
    });

    // radio buttons toggle which type of user is displayed
    $("#showAll").click(function() {
        $("#online").show();
        $("#offline").show();
    });

    $("#showOnline").click(function() {
        $("#online").show();
        $("#offline").hide();
    });

    $("#showOffline").click(function() {
        $("#offline").show();
        $("#online").hide();
    });

}); // closing script
