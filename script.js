(function() {
    var currentPlayer = "player1";

    //modal cage pop-up
    $("#cage").on("click", function() {
        $("#cage-overlay").addClass("on");
    });

    $(".x")
        .eq(0)
        .on("click", function() {
            $("#cage-overlay").removeClass("on");
        });

    $("#cage").on("click", function() {
        event.stopPropagation();
    });

    //reset game button
    $("#reset").on("click", function() {
        $(".slot").removeClass("player1 player2");
    });

    //game functions
    $(".column").on("click", function(e) {
        var slotsInColumn = $(e.currentTarget).find(".slot");

        // loop picks row for coin
        for (var i = 5; i >= 0; i--) {
            var slotInColumn = slotsInColumn.eq(i);
            if (
                !slotInColumn.hasClass("player1") &&
                !slotInColumn.hasClass("player2")
            ) {
                slotInColumn.addClass(currentPlayer);
                break;
            }
        }

        if (i == -1) {
            // column is full
            return;
        }

        function checkForVictory(slots) {
            //var str ='';
            var count = 0;
            for (var i = 0; i < slots.length; i++) {
                if (slots.eq(i).hasClass(currentPlayer)) {
                    // str + "o";
                    count++;
                    if (count == 4) {
                        return true;
                    }
                } else {
                    // str + "x";
                    count = 0;
                }
            }
            // return str.indexOf("oooo");
        }

        if (checkForVictory(slotsInColumn)) {
            //vertical victory
            // console.log("vectory!");

            if (currentPlayer == "player1") {
                $("#cage-overlay-wins-red").addClass("on");
                $("#cage-content-red").addClass("on");
            } else {
                $("#cage-overlay-wins-yellow").addClass("on");
                $("#cage-content-yellow").addClass("on");
            }

            $("#cage-content-red").on("click", function() {
                $("#cage-content-red").removeClass("on");
                $("#cage-content-yellow").removeClass("on");
                $("#cage-overlay-wins-red").removeClass("on");
                $("#cage-overlay-wins-yellow").removeClass("on");
                $(".slot").removeClass("player1 player2");
            });

            $("#cage-content-yellow").on("click", function() {
                $("#cage-content-red").removeClass("on");
                $("#cage-content-yellow").removeClass("on");
                $("#cage-overlay-wins-red").removeClass("on");
                $("#cage-overlay-wins-yellow").removeClass("on");
                $(".slot").removeClass("player1 player2");
            });
        } else if (checkForVictory($(".row" + i))) {
            //horizontal victory
            // console.log("horiztory!");
            if (currentPlayer == "player1") {
                $("#cage-overlay-wins-red").addClass("on");
                $("#cage-content-red").addClass("on");
            } else {
                $("#cage-overlay-wins-yellow").addClass("on");
                $("#cage-content-yellow").addClass("on");
            }

            $("#cage-content-red").on("click", function() {
                $("#cage-content-red").removeClass("on");
                $("#cage-content-yellow").removeClass("on");
                $("#cage-overlay-wins-red").removeClass("on");
                $("#cage-overlay-wins-yellow").removeClass("on");
                $(".slot").removeClass("player1 player2");
            });

            $("#cage-content-yellow").on("click", function() {
                $("#cage-content-red").removeClass("on");
                $("#cage-content-yellow").removeClass("on");
                $("#cage-overlay-wins-red").removeClass("on");
                $("#cage-overlay-wins-yellow").removeClass("on");
                $(".slot").removeClass("player1 player2");
            });
        } else if (topLeftToBottomRight()) {
            //diagonal victory
            // console.log("diagonal victory");
            if (currentPlayer == "player1") {
                $("#cage-overlay-wins-red").addClass("on");
                $("#cage-content-red").addClass("on");
            } else {
                $("#cage-overlay-wins-yellow").addClass("on");
                $("#cage-content-yellow").addClass("on");
            }

            $("#cage-content-red").on("click", function() {
                $("#cage-content-red").removeClass("on");
                $("#cage-content-yellow").removeClass("on");
                $("#cage-overlay-wins-red").removeClass("on");
                $("#cage-overlay-wins-yellow").removeClass("on");
                $(".slot").removeClass("player1 player2");
            });

            $("#cage-content-yellow").on("click", function() {
                $("#cage-content-red").removeClass("on");
                $("#cage-content-yellow").removeClass("on");
                $("#cage-overlay-wins-red").removeClass("on");
                $("#cage-overlay-wins-yellow").removeClass("on");
                $(".slot").removeClass("player1 player2");
            });
        } else if (topRightToBottomLeft()) {
            //diagonal victory
            // console.log("diagonal victory");
            if (currentPlayer == "player1") {
                $("#cage-overlay-wins-red").addClass("on");
                $("#cage-content-red").addClass("on");
            } else {
                $("#cage-overlay-wins-yellow").addClass("on");
                $("#cage-content-yellow").addClass("on");
            }

            $("#cage-content-red").on("click", function() {
                $("#cage-content-red").removeClass("on");
                $("#cage-content-yellow").removeClass("on");
                $("#cage-overlay-wins-red").removeClass("on");
                $("#cage-overlay-wins-yellow").removeClass("on");
                $(".slot").removeClass("player1 player2");
            });

            $("#cage-content-yellow").on("click", function() {
                $("#cage-content-red").removeClass("on");
                $("#cage-content-yellow").removeClass("on");
                $("#cage-overlay-wins-red").removeClass("on");
                $("#cage-overlay-wins-yellow").removeClass("on");
                $(".slot").removeClass("player1 player2");
            });
        }
        switchPlayers();
        //diagonal functions
        function topLeftToBottomRight() {
            for (var col = 0; col <= 6; col++) {
                for (var row = 0; row <= 5; row++) {
                    if (
                        $(".column")
                            .eq(col)
                            .children()
                            .eq(row)
                            .hasClass(currentPlayer)
                    ) {
                        if (
                            $(".column")
                                .eq(col + 1)
                                .children()
                                .eq(row + 1)
                                .hasClass(currentPlayer)
                        ) {
                            if (
                                $(".column")
                                    .eq(col + 2)
                                    .children()
                                    .eq(row + 2)
                                    .hasClass(currentPlayer)
                            ) {
                                if (
                                    $(".column")
                                        .eq(col + 3)
                                        .children()
                                        .eq(row + 3)
                                        .hasClass(currentPlayer)
                                ) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }

        function topRightToBottomLeft() {
            for (var col = 0; col <= 6; col++) {
                for (var row = 0; row <= 5; row++) {
                    if (
                        $(".column")
                            .eq(col)
                            .children()
                            .eq(row)
                            .hasClass(currentPlayer)
                    ) {
                        if (
                            $(".column")
                                .eq(col - 1)
                                .children()
                                .eq(row + 1)
                                .hasClass(currentPlayer)
                        ) {
                            if (
                                $(".column")
                                    .eq(col - 2)
                                    .children()
                                    .eq(row + 2)
                                    .hasClass(currentPlayer)
                            ) {
                                if (
                                    $(".column")
                                        .eq(col - 3)
                                        .children()
                                        .eq(row + 3)
                                        .hasClass(currentPlayer)
                                ) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }
})();
