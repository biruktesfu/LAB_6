function clock(){

    var day, hour, minute, second;
    day = new Date;

    hour = 30 * ((day.getHours() % 12) + day.getMinutes() / 60);
    minute = 6 * day.getMinutes();
    second = 6 * day.getSeconds();
    second_tail = 
    setAttribut("hour", hour)
    setAttribut("minute", minute)
    setAttribut("second", second)
    setAttribut("second_tail", second - 1)
    setTimeout(clock, 1000)

}

function setAttribut(id, val){
    var  v = "rotate(" + val + ", 300, 150) ";
    document.getElementById(id).setAttribute("transform", v);


}





window.load = clock();