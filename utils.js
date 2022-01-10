
const constructWeather = function(data){
    var weathers = [];
    var weather = {
        "id" : data.city.id,
        "temperature": 0,
        "min" : 1000,
        "max" : -1000,
        "weather" : ""    
    }
    //console.log(data);
    var date = new Date();
    data.list.forEach((element) => {
        var elementDate = new Date(element.dt_txt)
        //same day
        if(date.getDay() !== elementDate.getDay()){            
            weather["name"] = date.toLocaleDateString("en-US", { weekday: 'long' });
            weathers.push(weather);
            weather = {
                "id" : data.city.id,
                "temperature": 0,
                "min" : 1000,
                "max" : -1000,
                "weather" : ""    
            }
            date = elementDate;
            date.setHours(new Date().getHours())
        }        
        if(Math.round(element.main.temp_min) <= weather.min)
            weather.min = Math.round(element.main.temp_min);
        if(Math.round(element.main.temp_max) >= weather.max){
            
            weather.max = Math.round(element.main.temp_max);
            
        }
        if(Math.abs(date.getHours() - elementDate.getHours()) <= 2){
            weather.temperature = Math.round(element.main.temp);
            weather.weather = element.weather[0].main;
        }
    });
    return weathers;
    }
module.exports = constructWeather;