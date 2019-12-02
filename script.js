var apiKey = "20f96972da0ad8a277c08a77d377892f";

var city;

var arr = []



document.getElementById("weather").style.display = "none";
document.getElementById("start").style.display = "block";


var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=toronto&appid=" + apiKey;


$("#button").click(function(){

    city = $("#search").val();
    console.log(city)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey; 



    $.ajax({
        url: queryURL,
        method: "GET"
       }).then(function(response) {
           console.log(response)

           var tempconv = Math.round(300 - response.main.temp)
           
       
            var date = new Date(response.dt*1000);
            var hours = date.getHours();

           $("#city").html(response.name);
           $("#date").html(date);
           $("#temp").html("Temperature: " + tempconv);
           $("#humidity").html("humidity: " + response.main.humidity);
           $("#wind").html("Wind Speed: " + response.wind.speed);
           $("#uv").html("UV Index: " +response.name);
           $("#icon").attr("src", "http://openweathermap.org/img/w/"+  response.weather[0].icon+".png")

           
       });
  
       $.ajax({
        url: queryURL2,
        method: "GET"
       }).then(function(response) {
           console.log(response)

           var tempconv1 = Math.round(300 - response.list[0].main.temp)
           var tempconv2 = Math.round(300 - response.list[8].main.temp)
           var tempconv3 = Math.round(300 - response.list[16].main.temp)
           var tempconv4 = Math.round(300 - response.list[24].main.temp)
           var tempconv5 = Math.round(300 - response.list[32].main.temp)


    
           $("#date1").html(response.list[0].dt_txt);
           $("#temp1").html("Temp: " +tempconv1);
           $("#humidity1").html("Humidity: " +response.list[0].main.humidity);
           $("#icon1").attr("src", "http://openweathermap.org/img/w/"+  response.list[0].weather[0].icon+".png")
          
    
           $("#date2").html(response.list[8].dt_txt);
           $("#temp2").html("Temp: " +tempconv2);
           $("#humidity2").html("Humidity: " +response.list[8].main.humidity);
           $("#icon2").attr("src", "http://openweathermap.org/img/w/"+  response.list[8].weather[0].icon+".png")
        
    
           $("#date3").html(response.list[16].dt_txt);
           $("#temp3").html("Temp: " +tempconv3);
           $("#humidity3").html("Humidity: " +response.list[16].main.humidity);
           $("#icon3").attr("src", "http://openweathermap.org/img/w/"+  response.list[16].weather[0].icon+".png")
          
    
           $("#date4").html(response.list[24].dt_txt);
           $("#temp4").html("Temp: " +tempconv4);
           $("#humidity4").html("Humidity: " +response.list[24].main.humidity);
           $("#icon4").attr("src", "http://openweathermap.org/img/w/"+  response.list[24].weather[0].icon+".png")
          
        
           $("#date5").html(response.list[32].dt_txt);
           $("#temp5").html("Temp: " +tempconv5);
           $("#humidity5").html("Humidity: " +response.list[32].main.humidity);
           $("#icon5").attr("src", "http://openweathermap.org/img/w/"+  response.list[32].weather[0].icon+".png")
            
       });

       
       
       $(".list-group").append("<li class='list-group-item list-group-item-primary'>" + city + "</li>")
       document.getElementById("weather").style.display = "block";
       document.getElementById("info").style.display = "none";
       arr.push(city)

       JSON.stringify(localStorage.setItem("city", arr));
  });




   
 