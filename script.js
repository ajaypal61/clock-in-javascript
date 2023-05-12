

const updateTime = () =>{
    var datetim = new Date();
    var hour = datetim.getHours();
    var minute = datetim.getMinutes();
    var second = datetim.getSeconds();
    var am_and_pm = document.getElementById("am-and-pm");

    if(hour >= 12){
        am_and_pm.innerHTML= "PM";
    }else{
        am_and_pm="AM";
    }  

    if(hour>12){
        hour = hour - 12;
    }

    
    document.getElementById("hours").innerHTML= hour;
    document.getElementById("minutes").innerHTML= minute;
    document.getElementById("seconds").innerHTML= second;
}

// setInterval(updateTime,1000);
// number is liye hai ki refres krne par kitna time lena hai 
setInterval(updateTime);

