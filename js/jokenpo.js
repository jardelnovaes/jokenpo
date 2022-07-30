var jokenpo = {
    computerPlay: function() {
        choice = Math.floor(Math.random()*3)+1;
        $("#computer").attr("src", "img/c" + choice + ".png");
    },
    
    checkMatch: function() {
        player = $("#current").attr("src").replace("img/p", "").replace(".png", "");        
        computer = $("#computer").attr("src").replace("img/c", "").replace(".png", "");
        
        youWin = "Você ganhou!!!";
        youLose = "Você perdeu!!!";
        
        if(player == computer) {
            $("#info").html("Empate!!!");
        } else if(player == 1) {
            if(computer ==  2) {
                $("#info").html(youWin);
            } else {
                $("#info").html(youLose);
            }
        } else if (player == 2) {
            if(computer ==  3) {
                $("#info").html(youWin);
            } else {
                $("#info").html(youLose);
            }
        } else if (player == 3) {
            if(computer ==  1) {
                $("#info").html(youWin);
            } else {
                $("#info").html(youLose);
            }      
        }
    }
    
};

$(document).ready(function() {
    $(".player").click(function() {
        $("#current").attr("src", $(this).attr("src"));
        jokenpo.computerPlay();
        jokenpo.checkMatch();
    });
    console.log( "ready!" );
});