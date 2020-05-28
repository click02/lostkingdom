$(document).ready(function() {
    //  getting color rank for all players
    $.getJSON('https://raw.githubusercontent.com/sda782/lostkingdom/master/colorDatabase.json', function(colordata) {

        //  getting online players
        $.getJSON('https://api.minetools.eu/ping/fallen.serverminer.com/', function(api) {
            if (api.players.sample != null) {
                api.players.sample.forEach(element => {
                    var color = "white";
                    $.each(colordata, function(player, value) {
                        if (element.name == value.name) {
                            color = value.color;
                            console.log(element.name + ' element');
                            console.log(value.name + ' value');
                        }

                    });
                    console.log(color);
                    $('#players_online').append('<div style="background-color:' + color + ';"><img src="https://minotar.net/helm/' + element.id + '/150.png" ><p >' + element.name + '</p></div>');
                });
            }

        });
        document.getElementById("loading_screen").style.display = "none";
    });
});
