(function () {
    "use strict";

    $(function () {

        $(".imgDiv").on("mouseover", "img", function () {
            var city = $(this).attr("alt");
            var img = $(this);
           
            $.ajax({
                
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=dda2ae43958bb28f49cc794105bad652&units=metric",

                error: function (err) {
                    alert("Error: " + err.status + "' " + err.statusText);
                },
                success: function (response) {

                    var arr = response;
                    var temp = parseInt(arr.main.temp);
                    var weather = arr.weather[0].description;

                    $(img).siblings(".overlay").children(".weatherStat").html($(img).attr("alt") + "<br/><br/>Temp: " + temp + " C <br/> Current Conditions: " + weather);
                }
            });
            
        });

    });
})();