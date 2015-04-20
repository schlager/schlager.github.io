/*jslint browser: true*/
/*global $, jQuery, alert, console*/

$(document).ready(function () {
    
    //Use Strict
    "use strict";
    
    //Function for managing picture icon position
    $(window).scroll(function () {
        var p = $(window).scrollTop();
        if (p > $("#header").height() - 110) {
            $("#button").css("position", "absolute");
            $("#button").css("top", $("#description").offset().top - 110);
        } else {
            $("#button").css("position", "fixed");
            $("#button").css("top", 10);
        }
    });

    //Function for managing footer positioning and appearence
    $(window).scroll(function () {
        var p = $(window).scrollTop(),
            footer = $("#footer");
        if (p > footer.height() + 38) {
            footer.css({"position": "fixed", "left": 0, "bottom": 0});
        } else {
            footer.css({"position": "absolute", "left": "inherit", "bottom": "inherit"});
        }
    });
    
    //Function for handling sidebar
    var displayed = false;
    
    $(document).mouseup(function (e) {
        var container = $("#sidebar");
        if (!container.is(e.target) && !$("#menuButton").is(e.target) && container.has(e.target).length === 0) {
            container.fadeOut();
            displayed = false;
        }
    });
    
    $("#menuButton").click(function () {
        if (displayed === false) {
            $("#sidebar").fadeIn();
            displayed = true;
        } else {
            $("#sidebar").fadeOut();
            displayed = false;
        }
    });
});