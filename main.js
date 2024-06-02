// const deg = 6;
// const hr = document.querySelector(".hr");
// const mn = document.querySelector(".mn");
// const sc = document.querySelector(".sc");

// setInterval(() => {
//     let date = new Date();

//     let hh = date.getHours() * 30;
//     let mm = date.getMinutes() * deg;
//     let ss = date.getSeconds() * deg;

//     hr.style.transform = `rotate(${hh + mm / 12}deg)`;
//     mn.style.transform = `rotate(${mm + ss / 60}deg)`;
//     sc.style.transform = `rotate(${ss}deg)`;
// }, 1000);

let hr = document.querySelector(".hr");
let mn = document.querySelector(".mn");
let sc = document.querySelector(".sc");
let tickSound = document.querySelector(".tickSound");

setInterval(() => {
    let date = new Date();

    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;
    let miniSecond = date.getMilliseconds() * 0.006;

    hr.style.transform = `rotate(${hh + mm / 12}deg)`;
    mn.style.transform = `rotate(${mm + ss / 60}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;

    if (date.getMilliseconds() < 30) {
        tickSound.currentTime = 0;
        tickSound.play();
    }
});
