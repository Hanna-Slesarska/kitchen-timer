function go(){
const timer = Number(document.querySelector("#minute").value);
let amountTimer = (timer*60) + Number(document.querySelector("#second").value);

function calculateTime(){
    const countdown=document.querySelector("#countdown");
    
    let minutes = Math.floor(amountTimer/60);
    let seconds = amountTimer%60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        countdown.textContent = `${minutes} : ${seconds}`;
        amountTimer--;

        

        if(amountTimer < 0) {
            stopTimer();
            amountTimer = 0;
            stopSound();
            document.querySelector("#ding").play();
        }
  
        function stopTimer() {
            clearInterval(timerID);

           
        }
}
let timerID = setInterval(calculateTime, 1000);
}

function stopSound() {
    const stop = document.querySelector("#btnStart");
    
    stop.textContent = "STOP";
    

}

const button = document.querySelector("#btnStart");
button.addEventListener ("click", function(){
    go();
})

gsap.from("h1", {y: 80, delay: 0.6, opacity: 0, duration: 1.3, ease: "power1.out"})
gsap.from("#inputContainer", {y: 80, delay: 0.8, opacity: 0, duration: 1.3, ease: "power1.out"})
gsap.from(".center", {y: 80, delay: 1, opacity: 0, duration: 1.3, ease: "power1.out"})
gsap.from("#containerCountdown", {y: 80, delay: 1.2, opacity: 0, duration: 1.3, ease: "power1.out"})
