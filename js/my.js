$(window).on('load', function () {
    $("body").css({ "padding-left": "20px" });

    $("#mainheader").css({ "padding": "20px" });

    $(".maintext").css({ "color": "#0769AA" });

    $("#footer").css({ "font-weight": "bold" });

    $("#mainheader").mousedown(function () {
        $(this).css({ "border": "5px solid #0769AA" });
        $(".maintext").css({ "font-size": "38px" });
        $("#footer").text("Doppelklick verkleinert wieder...");
    });

    $("#mainheader").dblclick(function () {
        $(this).css({ "border": "" });
        $(".maintext").css({ "font-size": "" });
        $("#footer").text("Klicke auf das Logo");
    });

    
});