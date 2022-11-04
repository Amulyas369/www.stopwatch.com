let[milliseconds,seconds,minutes,hours]=[0,0,0,0];
let displya=document.querySelector("#display");
let start=document.querySelector("#start-btn");
let stop=document.querySelector("#stop-btn");
let reset=document.querySelector("#reset-btn");
let set=document.querySelector("#set-btn");
let flag=document.querySelector("#flag-btn");
let timer=document.querySelector("#timer");
var a=0;
let i=null;
var MyApp={};
start.addEventListener("click",()=>{
    if(i!==null){
      clearInterval(i);
     
    }
    i=setInterval(displayTimer,10);
    
});
stop.addEventListener("click",()=>{
    clearInterval(i);
});
reset.addEventListener("click",()=>{
    clearInterval(i);
    [milliseconds,seconds,minutes,hours]=[0,0,0,0]; 
    displya.innerHTML="00:00:00:000";
    
});
set.addEventListener("click",()=>{
    
    while(y<= x){
        if(i!==null){
            clearInterval(i);
           
          }
          i=setInterval(displayTimer,10);
          
    }
})
flag.addEventListener("click",()=>{
    a=a+1;

   const history=document.querySelector("#flag-area");
    
      const  li=displya.innerHTML;
   
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = 
       `<p>${a+"-  "+" "+li}</p>`
      history.appendChild(box)
});
function displayTimer(){
    milliseconds+=10;
    if(milliseconds==1000){
        milliseconds=0;
        seconds++;
    
    if(seconds==60){
        seconds=0;
        minutes++;
    
    if(minutes==60){
        minutes=0;
        hours++;
    }
}
}
MyApp. hour=hours<10 ? "0"+ hours : hours;
MyApp. minute=minutes<10 ? "0" +minutes: minutes;
MyApp. second=seconds<10 ? "0"+ seconds : seconds;
MyApp. millisecond=milliseconds<10 ? "00"+ milliseconds : milliseconds;
displya.innerHTML=`${MyApp.hour} : ${MyApp.minute} : ${MyApp.second} : ${MyApp.millisecond}`;


}
if(MyApp.hour!==0 && MyApp.minutesecond!==0 && MyApp.hour!==0){
setInterval(() => {
       
    // date = displya.innerHTML;
    htime = `${MyApp.hour}`;
    mtime = `${MyApp.minute}`
    stime = `${MyApp.second}`;
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
}
else{
    setInterval(() => {
       
        // date = displya.innerHTML;
        htime = 12;
        mtime = 00;
        stime = 00;
        hrotation = 30*htime + mtime/2;
        mrotation = 6*mtime;
        srotation = 6*stime;
    
        hour.style.transform = `rotate(${hrotation}deg)`;
        minute.style.transform = `rotate(${mrotation}deg)`;
        second.style.transform = `rotate(${srotation}deg)`;
    }, 1000);
}