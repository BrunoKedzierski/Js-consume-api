window.addEventListener('load',function(){
        
    var city = document.querySelector(".location-city");
    var aqiDOM = document.getElementById("aqi");
    var station = document.getElementById("station");
    var desc = document.querySelector('.description');
            
            const api = `https://api.waqi.info/feed/here/?token=68f8eb9b9e78b5ba7b19e56a7fa0c87f9a201da5`
            
               fetch(api)
        .then(response =>{
        
        return response.json();
    })
        .then(dat =>{
        console.log(dat);
        var aqi = dat.data.aqi;           
                   
        city.innerText = dat.data.city.name;
        aqiDOM.innerText = aqi;
        
        station.innerText = dat.data.attributions[0].name;
        
                   
        if( aqi <= 50){
            
            aqiDOM.style.color = "green";
        }
        else if (aqi > 51 && aqi<100){
            aqiDOM.style.color = "orange";
        }
        else if ( aqi > 100){
            aqiDOM.style.color = "red";
            desc.innerText = "Members of sensitive groups may experience health effects. The general public is not likely to be affected"
            
        }           
        
        
        
                   
                   
                   
    })
    
        
        });
        
        

      
        
