

const updateTime = () =>{
    var datetime = new Date();
    var hours = datetime.getHours();
    var minutes = datetime.getMinutes();
    var seconds = datetime.getSeconds();
    var am_and_pm = document.getElementById("am-and-pm");

    if(hours >= 12){
        am_and_pm.innerHTML= "PM";
    }else{
        am_and_pm="AM";
    }

    if(hours>12){
        hours = hours - 12;
    }

    
    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("seconds").innerHTML= seconds;
    // document.getElementById("am_and_pm")= am_and_pm;
}

setInterval(updateTime,1000);

