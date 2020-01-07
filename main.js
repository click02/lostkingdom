var data;

$(document).ready(function() {

    $.getJSON('https://api.minetools.eu/ping/fallen.serverminer.com/', function(api) {
        if (api.players.sample != null) {
            api.players.sample.forEach(element => {
                var img = document.createElement("img");

                $('#players_online').append('<div><p>' + element.name + '</p></div>');
            });
        } else {
            $('#players_online').append('<div><p>no one is online right now</p></div>');
        }
        document.getElementById("loading_screen").style.display = "none";
    });

});


function createProfile(username) {
    //  create an empty div with the class of profile_container
    var profile_container = document.createElement('div');
    profile_container.className = "profile_container";

}