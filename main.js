var players = [];

$(document).ready(function() {
    //  getting player online
    $.getJSON('https://api.minetools.eu/ping/fallen.serverminer.com/', function(api) {
        if (api.players.sample != null) {
            api.players.sample.forEach(element => {
                var img = document.createElement("img");
                $('#players_online').append('<div><img src="https://minotar.net/helm/' + element.id + '/150.png"><p>' + element.name + '</p></div>');
            });
        } else {
            $('#players_online').append('<div><p>no one is online right now</p></div>');
        }
        document.getElementById("loading_screen").style.display = "none";
    });

    //  getting discord ranking
});