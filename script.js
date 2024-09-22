// watch
{
    const clocktime = document.getElementById("time");
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const datepara = document.getElementById('dates');


   function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }  
  const date = new Date();
//   time
  let h = addZero(date.getHours());
  let m = addZero(date.getMinutes());
  let s = addZero(date.getSeconds());
  let milli = addZero(date.getMilliseconds());
  if(h >= 12){
    let time = h + ":" + m + ":" + s + ":" + milli + " " + "PM";
  }
  else{
    let time = h + ":" + m + ":" + s + ":" + milli + " " + "AM";
  }  
  clocktime.innerHTML =  time;


//   date
  let dat = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let day = weekday[date.getDay()];
  
  datepara.innerHTML = `${dat} ${month} ${year}, ${day}`;





  window.onload = () =>{
    setInterval(watchStart , 10);  
  }

  
  hour = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();
  millisecond = date.getMilliseconds()%10;

  function watchStart(){
    millisecond++;
    if(millisecond == 100){
        millisecond = 0;
        second++;
        if(second == 60){
            second = 0;
            minute++;
            if(minute == 60){
                minute = 0;
                hour++;
            }
        }
    }
    h = hour < 10 ? "0"+hour : hour;
    m = minute < 10 ? "0"+minute : minute;
    s = second < 10 ? "0"+second : second;
    milli = millisecond < 10 ? "0"+millisecond : millisecond;
    if(h >= 12){
        clocktime.innerHTML = h+" : "+m+" : "+s+" : "+milli + " " + "PM";
    }
    else{
        clocktime.innerHTML = h+" : "+m+" : "+s+" : "+milli + " " + "AM";
    }
}
}












































// stop watch 
{
    const pausebtn = document.getElementById("pause");
    const startbtn = document.getElementById("start");
    const resetbtn = document.getElementById("reset");
    const stopdisplay = document.getElementById("display");
    const addbtn = document.getElementById("add");
    const laps  = document.getElementById("laps");
    
    let [hour , minute , second ,millisecond] = [0,0,0,0];
    let timer = null;
    
    
    
    startbtn.addEventListener("click" , () => { 
        if(timer !== null){
    
            clearInterval(timer);
        }
            timer = setInterval(watchStart , 10);   
    })
    
    function watchStart(){
        millisecond++;
        if(millisecond == 100){
            millisecond = 0;
            second++;
            if(second == 60){
                second = 0;
                minute++;
                if(minute == 60){
                    minute = 0;
                    hour++;
                }
            }
        }
        h = hour < 10 ? "0"+hour : hour;
        m = minute < 10 ? "0"+minute : minute;
        s = second < 10 ? "0"+second : second;
        milli = millisecond < 10 ? "0"+millisecond : millisecond;
        stopdisplay.innerHTML = h+" : "+m+" : "+s+" : "+milli;
    }
    
    pausebtn.addEventListener('click' , () =>{
        clearInterval(timer);
    });
    
    resetbtn.addEventListener("click",() => {
        clearInterval(timer);
        [hour , minute , second ,millisecond] = [0,0,0,0];
        h = hour < 10 ? "0"+hour : hour;
        m = minute < 10 ? "0"+minute : minute;
        s = second < 10 ? "0"+second : second;
        milli = millisecond < 10 ? "0"+millisecond : millisecond;
        stopdisplay.innerHTML = h+" : "+m+" : "+s+" : "+milli;
        laps.innerHTML="";
    });
    
    addbtn.addEventListener("click" , () => {
        const lap = document.createElement('p');
        lap.innerHTML = stopdisplay.innerText;
        laps.insertBefore(lap ,laps.firstChild);
    });
}

