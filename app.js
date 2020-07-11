var msec=0, min=0, sec=0;
var minhead=document.getElementById("min");
var sechead=document.getElementById("sec");
var msechead=document.getElementById("msec");
function timer(){
    msec++
    msechead.innerHTML=msec;
    if(msec>=100){
        sec++
        sechead.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60){
        min++
        minhead.innerHTML=min;
        sec=0;
    }
}

function start(){
    document.getElementById("start_btn").disabled=true;
    interval=setInterval(timer,10);
    
    
    
    

}
function stop(){
    document.getElementById("start_btn").disabled=false;
    clearInterval(interval);
    
}
function reset(){
    msec=0;
    min=0;
    sec=0;
    msechead.innerHTML="0:0";
    minhead.innerHTML="0:0";
    sechead.innerHTML="0:0";
    stop();
}