const BgR=270;
const BgX = BgR;
const BgY = BgR;

const SmR = 36;
let t = 1;
let x=BgX+BgR*Math.sin(2*t);
let y=BgY+BgR*Math.cos(2*t);
let interval;
window.onload=function(){
    document.body.setAttribute("style","overflow: hidden;");
    const elem = document.createElement('div');
    elem.setAttribute("style",`width: ${BgR*2}px; margin : ${SmR+5}px auto;  position:relative`);
    document.body.appendChild(elem);

    const BgDiv= document.createElement('div');
    BgDiv.setAttribute("style", `width: ${BgR*2}px; height:${BgR*2}px; border: 2px solid gray; border-radius: 50%; position:absolute; top: 0px; left: 0px`);
    elem.appendChild(BgDiv);

    const SmDiv= document.createElement('div');
    SmDiv.setAttribute("style", `width: ${SmR*2}px; height:${SmR*2}px; top: ${y-SmR}px; left: ${x-SmR}px; border: 2px solid gray; border-radius: 50%; position:absolute; `);
    SmDiv.id = 'SmDiv';
    elem.appendChild(SmDiv);

    const button =  document.createElement('button');
    button.setAttribute("style", "position: fixed; top: 25px; right: 50px;");
    button.innerHTML = "Start";
    button.id = 'continue';
    button.addEventListener("click", Animate);
    document.body.appendChild(button); 
    
    const Stopb =  document.createElement('button');
    Stopb.setAttribute("style", "position: fixed; top: 75px; right: 50px;");
    Stopb.innerHTML = "Stop";
    Stopb.addEventListener("click", stop);
    document.body.appendChild(Stopb);   
}
const Animate = () =>{
    document.getElementById("continue").removeEventListener("click", Animate); 
    
    interval = setInterval(() =>{ 
        t+=0.1;
        x=BgX+BgR*Math.sin(2*t);
        y=BgY+BgR*Math.cos(2*t);

        document.getElementById('SmDiv').style.top = `${y-SmR}px`;
        document.getElementById('SmDiv').style.left = `${x-SmR}px`;

    }, 100);
}
const stop = () =>{
    if(interval!== undefined){ 
        clearInterval(interval);
        document.getElementById("continue").addEventListener("click", Animate);
    }
}